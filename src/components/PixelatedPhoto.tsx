import { useEffect, useRef, useState } from "react";

interface PixelatedPhotoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  pixelSize?: number;
  easingFactor?: number;
  className?: string;
  onClick?: () => void;
}

export function PixelatedPhoto({
  src,
  width,
  height,
  alt,
  pixelSize = 12,
  easingFactor = 0.12,
  className,
  onClick,
}: PixelatedPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const loadedRef = useRef(false);

  // Both values are refs so they can be read inside the animation loop
  const currentPixelSize = useRef(pixelSize);
  const currentSaturation = useRef(0); // 0 = greyscale, 1 = full color

  const [isRevealed, setIsRevealed] = useState(false);

  const isTouchDevice = useRef(
    typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0),
  );

  const draw = (pxSize: number, saturation: number) => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || !loadedRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = Math.max(1, Math.floor(width / pxSize));
    const h = Math.max(1, Math.floor(height / pxSize));

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, width, height);

    // Draw pixelated version
    ctx.drawImage(img, 0, 0, w, h);
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);

    // Overlay a desaturated version at (1 - saturation) opacity
    if (saturation < 1) {
      // Draw greyscale on top using a temporary canvas
      const tmp = document.createElement("canvas");
      tmp.width = width;
      tmp.height = height;
      const tmpCtx = tmp.getContext("2d");
      if (tmpCtx) {
        tmpCtx.imageSmoothingEnabled = false;
        tmpCtx.filter = "grayscale(1)";
        tmpCtx.drawImage(img, 0, 0, w, h);
        tmpCtx.drawImage(tmp, 0, 0, w, h, 0, 0, width, height);
        ctx.globalAlpha = 1 - saturation;
        ctx.drawImage(tmp, 0, 0);
        ctx.globalAlpha = 1;
      }
    }
  };

  const targetPixelSize = useRef(pixelSize);
  const targetSaturation = useRef(0);

  const startAnimation = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const step = () => {
      const pxDiff = targetPixelSize.current - currentPixelSize.current;
      const satDiff = targetSaturation.current - currentSaturation.current;
      const pxDone = Math.abs(pxDiff) < 0.3;
      const satDone = Math.abs(satDiff) < 0.005;

      if (pxDone && satDone) {
        currentPixelSize.current = targetPixelSize.current;
        currentSaturation.current = targetSaturation.current;
        draw(currentPixelSize.current, currentSaturation.current);
        return;
      }

      if (!pxDone) currentPixelSize.current += pxDiff * easingFactor;
      if (!satDone) currentSaturation.current += satDiff * easingFactor;

      draw(currentPixelSize.current, currentSaturation.current);
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const reveal = () => {
    targetPixelSize.current = 1;
    targetSaturation.current = 1;
    startAnimation();
  };

  const hide = () => {
    targetPixelSize.current = pixelSize;
    targetSaturation.current = 0;
    startAnimation();
  };

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      loadedRef.current = true;
      draw(pixelSize, 0);
    };

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [src]);

  const handleTap = () => {
    if (isTouchDevice.current) {
      const next = !isRevealed;
      setIsRevealed(next);
      next ? reveal() : hide();
    }
    onClick?.();
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      onMouseEnter={() => !isTouchDevice.current && reveal()}
      onMouseLeave={() => !isTouchDevice.current && hide()}
      onTouchStart={handleTap}
      onClick={!isTouchDevice.current ? onClick : undefined}
      role="img"
      aria-label={alt}
      tabIndex={0}
      onFocus={() => reveal()}
      onBlur={() => hide()}
      style={{ cursor: "pointer", display: "block" }}
    />
  );
}
