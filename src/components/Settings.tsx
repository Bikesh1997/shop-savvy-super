import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, RotateCcw, Settings as SettingsIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ColorPicker: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  description?: string;
}> = ({ label, value, onChange, description }) => {
  // Convert HSL to hex for color input
  const hslToHex = (hsl: string) => {
    const [h, s, l] = hsl.split(' ').map(val => parseFloat(val.replace('%', '')));
    const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    
    // Create a temporary element to get computed color
    const temp = document.createElement('div');
    temp.style.color = hslColor;
    document.body.appendChild(temp);
    const computedColor = getComputedStyle(temp).color;
    document.body.removeChild(temp);
    
    // Extract RGB values and convert to hex
    const rgb = computedColor.match(/\d+/g);
    if (rgb) {
      const hex = '#' + rgb.map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
      return hex;
    }
    return '#3b82f6'; // fallback
  };

  // Convert hex to HSL
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={label} className="text-sm font-medium">{label}</Label>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="flex items-center space-x-2">
        <Input
          type="color"
          value={hslToHex(value)}
          onChange={(e) => onChange(hexToHsl(e.target.value))}
          className="w-12 h-10 p-1 border rounded cursor-pointer"
        />
        <div className="flex-1">
          <div 
            className="w-full h-10 rounded border"
            style={{ backgroundColor: `hsl(${value})` }}
          />
        </div>
      </div>
    </div>
  );
};

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const { colors, updateColors, resetTheme } = useTheme();
  const { toast } = useToast();

  const handleReset = () => {
    resetTheme();
    toast({
      title: "Theme Reset",
      description: "Colors have been reset to default theme",
    });
  };

  const handleColorChange = (colorKey: keyof typeof colors, value: string) => {
    updateColors({ [colorKey]: value });
    toast({
      title: "Theme Updated",
      description: `${colorKey} color has been updated`,
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <CardTitle>Theme Settings</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              ×
            </Button>
          </div>
          <CardDescription>
            Customize your app's color scheme
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ColorPicker
            label="Primary Color"
            value={colors.primary}
            onChange={(value) => handleColorChange('primary', value)}
            description="Main branding color used throughout the app"
          />
          
          <ColorPicker
            label="Secondary Color"
            value={colors.secondary}
            onChange={(value) => handleColorChange('secondary', value)}
            description="Accent color for highlights and secondary elements"
          />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Button Customization</h3>
            
            <ColorPicker
              label="Button Background"
              value={colors.buttonBg}
              onChange={(value) => handleColorChange('buttonBg', value)}
              description="Default button background color"
            />
            
            <ColorPicker
              label="Button Hover"
              value={colors.buttonHover}
              onChange={(value) => handleColorChange('buttonHover', value)}
              description="Button color when hovering"
            />
            
            <ColorPicker
              label="Button Text"
              value={colors.buttonText}
              onChange={(value) => handleColorChange('buttonText', value)}
              description="Text color on buttons"
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Default
            </Button>
            <Button
              onClick={() => onClose()}
              className="flex-1"
            >
              Done
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;