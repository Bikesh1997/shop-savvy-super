import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  buttonBg: string;
  buttonHover: string;
  buttonText: string;
  // Additional color variations
  success: string;
  successHover: string;
  warning: string;
  warningHover: string;
  danger: string;
  dangerHover: string;
  info: string;
  infoHover: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (colors: Partial<ThemeColors>) => void;
  resetTheme: () => void;
}

const defaultTheme: ThemeColors = {
  primary: '226 51% 41%',
  secondary: '210 40% 96.1%',
  buttonBg: '226 51% 41%',
  buttonHover: '226 51% 35%',
  buttonText: '0 0% 100%',
  // Additional color variations
  success: '142 71% 45%',     // Green equivalent to teal-600
  successHover: '142 71% 40%', // Green equivalent to teal-700
  warning: '38 92% 50%',      // Yellow equivalent
  warningHover: '38 92% 45%', // Yellow darker
  danger: '0 84% 60%',        // Red equivalent
  dangerHover: '0 84% 55%',   // Red darker
  info: '217 91% 60%',        // Blue equivalent  
  infoHover: '217 91% 55%'    // Blue darker
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<ThemeColors>(defaultTheme);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('shopsmarter-theme');
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        setColors(parsedTheme);
      } catch (error) {
        console.error('Failed to parse saved theme:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply colors to CSS variables
    const root = document.documentElement;
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--button-bg', colors.buttonBg);
    root.style.setProperty('--button-hover', colors.buttonHover);
    root.style.setProperty('--button-text', colors.buttonText);
    
    // Additional color variations
    root.style.setProperty('--success', colors.success);
    root.style.setProperty('--success-hover', colors.successHover);
    root.style.setProperty('--warning', colors.warning);
    root.style.setProperty('--warning-hover', colors.warningHover);
    root.style.setProperty('--danger', colors.danger);
    root.style.setProperty('--danger-hover', colors.dangerHover);
    root.style.setProperty('--info', colors.info);
    root.style.setProperty('--info-hover', colors.infoHover);

    // Save to localStorage
    localStorage.setItem('shopsmarter-theme', JSON.stringify(colors));
  }, [colors]);

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors(prev => ({ ...prev, ...newColors }));
  };

  const resetTheme = () => {
    setColors(defaultTheme);
    localStorage.removeItem('shopsmarter-theme');
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColors, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};