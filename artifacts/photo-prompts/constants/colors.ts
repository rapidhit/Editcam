/**
 * Semantic design tokens for the mobile app.
 *
 * Fresh, colourful theme: a clean white base with a vivid violet
 * primary, and each prompt category carries its own distinct accent
 * colour (see CATEGORIES in data/prompts.ts) so the browse screen feels
 * lively and curated rather than monochrome. This app is intentionally
 * single-theme (always light) — the palette lives under `light` so it
 * applies regardless of the device's system appearance.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#18171F',
    tint: '#6D4CE0',

    // Core surfaces
    background: '#FBFAFE',
    foreground: '#18171F',

    // Cards / elevated surfaces
    card: '#FFFFFF',
    cardForeground: '#18171F',

    // Primary action color (buttons, links, active states)
    primary: '#6D4CE0',
    primaryForeground: '#FFFFFF',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#F2F0FA',
    secondaryForeground: '#18171F',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#F2F0FA',
    mutedForeground: '#726F85',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#ECE6FB',
    accentForeground: '#6D4CE0',

    // Destructive actions (delete, error states)
    destructive: '#E0433B',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#EAE7F3',
    input: '#EAE7F3',

    // Success / confirmation (copy feedback)
    success: '#1FA463',

    // A second, warmer accent used for favorites (hearts)
    favorite: '#E0407E',
  },

  radius: 18,
};

export default colors;
