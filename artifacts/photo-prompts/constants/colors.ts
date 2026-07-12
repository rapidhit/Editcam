/**
 * Semantic design tokens for the mobile app.
 *
 * Light "studio" theme: warm off-white surfaces with a warm amber-orange
 * accent, evoking a photo lab / editing-suite feel without going dark.
 * This app is intentionally single-theme (always light) — the palette
 * lives under `light` so it applies regardless of the device's system
 * appearance.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#211D1A',
    tint: '#F0662C',

    // Core surfaces
    background: '#FBF8F5',
    foreground: '#211D1A',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#211D1A',

    // Primary action color (buttons, links, active states)
    primary: '#F0662C',
    primaryForeground: '#FFFFFF',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#F1EBE4',
    secondaryForeground: '#211D1A',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#F1EBE4',
    mutedForeground: '#8A8078',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#FCE8DB',
    accentForeground: '#C24E1B',

    // Destructive actions (delete, error states)
    destructive: '#DC2626',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#E8E1D9',
    input: '#E8E1D9',

    // Success / confirmation (copy feedback)
    success: '#16A34A',
  },

  radius: 18,
};

export default colors;
