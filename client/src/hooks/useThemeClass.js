import { useEffect } from 'react';

const THEME_CLASSES = ['theme-va', 'theme-vb', 'theme-vc', 'theme-vd', 'theme-ve', 'theme-vf', 'theme-vg', 'theme-vh', 'theme-vi', 'theme-vj', 'theme-vk', 'theme-vl', 'theme-vm'];

export default function useThemeClass(themeClass) {
  useEffect(() => {
    document.body.classList.remove(...THEME_CLASSES);

    if (themeClass) {
      document.body.classList.add(themeClass);
    }

    return () => {
      if (themeClass) {
        document.body.classList.remove(themeClass);
      }
    };
  }, [themeClass]);
}
