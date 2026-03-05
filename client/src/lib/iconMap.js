import {
  HiLightBulb, HiCube, HiTruck, HiCog, HiGlobe,
  HiDesktopComputer, HiAnnotation, HiViewGrid, HiSpeakerphone, HiCalendar,
  HiRefresh, HiCursorClick, HiTemplate, HiOfficeBuilding, HiLightningBolt,
  HiSun, HiCode, HiColorSwatch, HiClipboardCheck, HiChip, HiShieldCheck,
  HiSparkles,
} from 'react-icons/hi';

const iconMap = {
  HiLightBulb, HiCube, HiTruck, HiCog, HiGlobe,
  HiDesktopComputer, HiAnnotation, HiViewGrid, HiSpeakerphone, HiCalendar,
  HiRefresh, HiCursorClick, HiTemplate, HiOfficeBuilding, HiLightningBolt,
  HiSun, HiCode, HiColorSwatch, HiClipboardCheck, HiChip, HiShieldCheck,
  HiSparkles,
};

/**
 * Resolve an icon name string to a React icon component.
 * Returns null if not found.
 */
export function getIcon(name) {
  return iconMap[name] || null;
}
