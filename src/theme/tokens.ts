export interface ThemeTokens {
  desktopBg: string;
  menubarGradient: string;
  windowBg: string;
  chromeActive: string;
  chromeInactive: string;
  borderColor: string;
  textPrimary: string;
  textMuted: string;
  tagBg: string;
  divider: string;
  accentGradient: string;
}

const light: ThemeTokens = {
  desktopBg: '#c8c8c8',
  menubarGradient: 'linear-gradient(180deg, #f0f0f0, #d8d8d8)',
  windowBg: '#ffffff',
  chromeActive: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
  chromeInactive: 'linear-gradient(135deg, #888 0%, #aaa 100%)',
  borderColor: '#000000',
  textPrimary: '#111111',
  textMuted: '#666666',
  tagBg: '#e0e0e0',
  divider: '#dddddd',
  accentGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)',
};

const dark: ThemeTokens = {
  desktopBg: '#1a1a1a',
  menubarGradient: 'linear-gradient(180deg, #2a2a2a, #1a1a1a)',
  windowBg: '#1e1e1e',
  chromeActive: 'linear-gradient(135deg, #0d0d1a 0%, #1a0533 40%, #2d1b69 70%, #1a0533 100%)',
  chromeInactive: 'linear-gradient(135deg, #2a2a2a, #3a3a3a)',
  borderColor: '#555555',
  textPrimary: '#e0e0e0',
  textMuted: '#888888',
  tagBg: '#333333',
  divider: '#333333',
  accentGradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a0533 40%, #2d1b69 70%, #1a0533 100%)',
};

export const themes = { light, dark };
