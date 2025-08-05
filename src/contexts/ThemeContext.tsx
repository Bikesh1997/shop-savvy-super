import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  buttonBg: string;
  buttonHover: string;
  buttonText: string;
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
  buttonText: '0 0% 100%'
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