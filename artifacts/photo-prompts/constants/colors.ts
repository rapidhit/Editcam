/**
 * Semantic design tokens for the mobile app.
 *
 * Classic "editorial" theme: warm ivory paper surfaces, ink-black text,
 * and a single restrained deep-green accent — closer to a printed
 * photography journal than a typical app palette. This app is
 * intentionally single-theme (always light) — the palette lives under
 * `light` so it applies regardless of the device's system appearance.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#211E1A',
    tint: '#2F4A3C',

    // Core surfaces
    background: '#F7F4EE',
    foreground: '#211E1A',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#211E1A',

    // Primary action color (buttons, links, active states)
    primary: '#2F4A3C',
    primaryForeground: '#F7F4EE',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#EBE6DB',
    secondaryForeground: '#211E1A',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#EBE6DB',
    mutedForeground: '#767061',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#E4DFCF',
    accentForeground: '#2F4A3C',

    // Destructive actions (delete, error states)
    destructive: '#A33B32',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#DDD6C6',
    input: '#DDD6C6',

    // Success / confirmation (copy feedback)
    success: '#2F4A3C',
  },

  radius: 14,
};

export default colors;
