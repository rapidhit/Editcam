/**
 * Semantic design tokens for the mobile app.
 *
 * Dark "darkroom" theme: near-black surfaces with a warm amber-orange
 * accent, evoking a photo lab / editing-suite feel. This app is
 * intentionally single-theme (always dark) — the palette lives under
 * `light` so it applies regardless of the device's system appearance.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#F5F1EC',
    tint: '#FF7A45',

    // Core surfaces
    background: '#121113',
    foreground: '#F5F1EC',

    // Cards / elevated surfaces
    card: '#1C1B1E',
    cardForeground: '#F5F1EC',

    // Primary action color (buttons, links, active states)
    primary: '#FF7A45',
    primaryForeground: '#181113',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#242327',
    secondaryForeground: '#F5F1EC',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#242327',
    mutedForeground: '#9C989E',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#2E2A28',
    accentForeground: '#FFB088',

    // Destructive actions (delete, error states)
    destructive: '#EF4444',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#2B2A2D',
    input: '#2B2A2D',

    // Success / confirmation (copy feedback)
    success: '#4ADE80',
  },

  radius: 18,
};

export default colors;
