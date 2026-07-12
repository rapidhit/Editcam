export interface Category {
  id: string;
  name: string;
  shortName: string;
  feather: string;
  sf: string;
  color: string;
  colorForeground: string;
}

export interface Prompt {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  prompt: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'portrait',
    name: 'Portrait & Beauty',
    shortName: 'Portrait',
    feather: 'user',
    sf: 'person.crop.circle',
    color: '#FBE6EE',
    colorForeground: '#C4356D',
  },
  {
    id: 'background',
    name: 'Background & Scene',
    shortName: 'Background',
    feather: 'image',
    sf: 'photo',
    color: '#E3EEFD',
    colorForeground: '#2563C7',
  },
  {
    id: 'style',
    name: 'Style & Artistic',
    shortName: 'Style',
    feather: 'feather',
    sf: 'paintbrush',
    color: '#EEE6FC',
    colorForeground: '#6D3FC0',
  },
  {
    id: 'restore',
    name: 'Restore & Enhance',
    shortName: 'Restore',
    feather: 'refresh-cw',
    sf: 'wand.and.stars',
    color: '#DFF5EC',
    colorForeground: '#15875A',
  },
  {
    id: 'creative',
    name: 'Creative & Fun',
    shortName: 'Creative',
    feather: 'zap',
    sf: 'sparkles',
    color: '#FEF0DA',
    colorForeground: '#C4791A',
  },
  {
    id: 'product',
    name: 'Product & Object',
    shortName: 'Product',
    feather: 'box',
    sf: 'shippingbox',
    color: '#E2F3F5',
    colorForeground: '#1D7D8C',
  },
];

export const PROMPTS: Prompt[] = [
  // Portrait & Beauty
  {
    id: 'portrait-studio-glow',
    categoryId: 'portrait',
    title: 'Studio Glow Retouch',
    description: 'Soft, even studio lighting with natural skin texture.',
    prompt:
      'Retouch this portrait with soft, even studio lighting. Smooth the skin tone while preserving realistic texture and pores — do not blur or plasticize the skin. Add a subtle, natural catchlight to the eyes. Keep every facial feature, proportion, and identity exactly the same. The result should look like a professionally lit photograph, not an artificial filter.',
  },
  {
    id: 'portrait-even-skin',
    categoryId: 'portrait',
    title: 'Even Skin Tone',
    description: 'Balance blotchiness and redness without losing texture.',
    prompt:
      'Even out the skin tone in this photo — reduce redness, blotchiness, and under-eye discoloration. Keep natural texture, pores, and any freckles or beauty marks fully intact. Do not change the shape of any facial feature. Avoid an over-smoothed or airbrushed look; the skin should still look like real skin.',
  },
  {
    id: 'portrait-brighten-eyes',
    categoryId: 'portrait',
    title: 'Brighten Eyes & Teeth',
    description: 'Subtle whitening for a fresher, more awake look.',
    prompt:
      'Subtly brighten the eyes and whiten the teeth in this photo. Increase eye clarity and slightly enhance the natural eye color without making it look unnatural. Whiten teeth by a small, realistic amount — avoid a bright-white, artificial look. Leave everything else in the photo unchanged.',
  },
  {
    id: 'portrait-soft-lighting',
    categoryId: 'portrait',
    title: 'Soft Portrait Lighting',
    description: 'Turn harsh flash or midday light into flattering light.',
    prompt:
      'Rebalance the lighting in this portrait to look soft and flattering, as if lit by a large diffused window or softbox from a 45-degree angle. Remove harsh shadows and blown-out highlights caused by direct flash or midday sun. Preserve the exact pose, expression, and background — only adjust lighting and exposure.',
  },
  {
    id: 'portrait-headshot',
    categoryId: 'portrait',
    title: 'Professional Headshot Look',
    description: 'Turn a casual photo into a polished LinkedIn headshot.',
    prompt:
      'Transform this into a professional headshot suitable for LinkedIn or a company website. Apply clean, neutral studio lighting, a softly blurred neutral background, and subtle color correction. Keep the person\'s face, expression, and clothing exactly as they are — do not change identity or add accessories. The final look should feel corporate-polished but still natural.',
  },

  // Background & Scene
  {
    id: 'background-remove',
    categoryId: 'background',
    title: 'Remove Background',
    description: 'Isolate the subject on a clean transparent or white backdrop.',
    prompt:
      'Remove the background from this image completely, leaving only the main subject with clean, precise edges — pay close attention to hair, fur, or fine details. Replace the background with a solid white (or transparent, if supported) backdrop. Do not alter the subject itself in any way.',
  },
  {
    id: 'background-studio-backdrop',
    categoryId: 'background',
    title: 'Replace with Studio Backdrop',
    description: 'Swap the background for a seamless gradient studio backdrop.',
    prompt:
      'Replace the background of this photo with a seamless, softly graduated studio backdrop in a neutral gray tone. Match the lighting and shadow direction on the subject to the new backdrop so it looks like it was shot in-studio. Keep the subject completely unedited.',
  },
  {
    id: 'background-bokeh',
    categoryId: 'background',
    title: 'Blur Background (Bokeh)',
    description: 'Add a shallow depth-of-field, DSLR-style blur.',
    prompt:
      'Add a realistic shallow depth-of-field effect to this photo, as if shot with a fast 85mm lens at f/1.8. Keep the main subject perfectly sharp and in focus, and apply a smooth, natural bokeh blur to the background. Do not blur any part of the subject, including edges and hair.',
  },
  {
    id: 'background-time-of-day',
    categoryId: 'background',
    title: 'Change Time of Day',
    description: 'Shift a daytime scene into golden-hour or night lighting.',
    prompt:
      'Change the lighting of this scene to golden hour — warm, low-angle sunlight with long soft shadows and a warm orange-pink sky. Adjust the ambient light and color temperature on the subject and background to realistically match a sunset scene, while keeping the composition and subject identical.',
  },
  {
    id: 'background-weather',
    categoryId: 'background',
    title: 'Add Weather Effect',
    description: 'Add realistic rain, fog, or snow to the scene.',
    prompt:
      'Add a subtle, realistic light rain effect to this photo — faint rain streaks in the air, slightly wet-looking surfaces, and a soft overcast light. Keep the mood atmospheric rather than dramatic. Do not change the subject, composition, or background elements — only add the weather effect and matching light.',
  },

  // Style & Artistic
  {
    id: 'style-oil-painting',
    categoryId: 'style',
    title: 'Oil Painting Style',
    description: 'Classic oil-on-canvas texture and brushwork.',
    prompt:
      'Convert this photo into a classical oil painting. Add visible brushstroke texture, rich blended colors, and soft edges typical of a traditional portrait or landscape oil painting. Preserve the overall composition, pose, and key details so the subject is still clearly recognizable.',
  },
  {
    id: 'style-anime',
    categoryId: 'style',
    title: 'Anime / Illustration Style',
    description: 'Reimagine the photo as a hand-drawn anime illustration.',
    prompt:
      'Redraw this photo in a modern anime/illustration art style — clean line art, cel-shaded coloring, and expressive stylized eyes, while keeping the person\'s hairstyle, outfit, pose, and overall likeness recognizable. Use a vibrant but tasteful color palette typical of high-quality anime key visuals.',
  },
  {
    id: 'style-film-noir',
    categoryId: 'style',
    title: 'Film Noir Black & White',
    description: 'High-contrast monochrome with dramatic shadows.',
    prompt:
      'Convert this photo to a dramatic black-and-white film noir style. Apply high contrast, deep blacks, and moody directional shadows (like venetian-blind light if applicable). Add a subtle film grain for a classic 1940s cinematic feel. Keep the composition and subject unchanged.',
  },
  {
    id: 'style-watercolor',
    categoryId: 'style',
    title: 'Watercolor Sketch',
    description: 'Light, airy watercolor-and-ink illustration look.',
    prompt:
      'Turn this photo into a loose watercolor painting on textured paper. Use soft color bleeds, visible paper texture, and light pencil-line accents around key edges. Keep the overall composition and subject recognizable, with a gentle, airy, hand-painted feel rather than a photorealistic one.',
  },
  {
    id: 'style-cyberpunk',
    categoryId: 'style',
    title: 'Cyberpunk Neon Style',
    description: 'Futuristic neon lighting and rain-soaked city vibe.',
    prompt:
      'Restyle this photo with a cyberpunk aesthetic — add vivid neon lighting in magenta and cyan tones, subtle reflections as if on wet pavement, and a moody futuristic city atmosphere in the background if applicable. Keep the subject\'s identity, pose, and proportions unchanged; only shift the color grading, lighting, and mood.',
  },

  // Restore & Enhance
  {
    id: 'restore-colorize',
    categoryId: 'restore',
    title: 'Colorize Old Photo',
    description: 'Add realistic, historically plausible color to a B&W photo.',
    prompt:
      'Colorize this black-and-white photo with realistic, natural-looking colors appropriate to the era and subject. Use plausible skin tones, fabric colors, and environmental colors — avoid oversaturated or cartoonish results. Preserve all original details, textures, and composition exactly as they are.',
  },
  {
    id: 'restore-blurry',
    categoryId: 'restore',
    title: 'Fix Blurry / Low-Res Photo',
    description: 'Sharpen detail and recover clarity in a soft image.',
    prompt:
      'Enhance this blurry, low-resolution photo. Increase sharpness and recover fine detail in the face, hair, and clothing without introducing artifacts or an over-processed look. Keep the original composition, colors, and identity of the subject fully intact.',
  },
  {
    id: 'restore-scratches',
    categoryId: 'restore',
    title: 'Remove Scratches & Damage',
    description: 'Repair creases, dust spots, tears, and stains.',
    prompt:
      'Restore this old, damaged photograph. Remove scratches, dust spots, creases, tears, and any discoloration or staining. Reconstruct any small missing areas naturally so they blend seamlessly with the surrounding image. Keep all original people, objects, and composition exactly as they were.',
  },
  {
    id: 'restore-sharpen',
    categoryId: 'restore',
    title: 'Sharpen Details',
    description: 'Crisp up fine detail without adding noise or halos.',
    prompt:
      'Sharpen the fine details in this photo — hair strands, fabric texture, eyelashes, and edges — for a crisp, high-definition look. Avoid oversharpening artifacts, halos, or added noise. Keep colors, lighting, and composition unchanged.',
  },
  {
    id: 'restore-exposure',
    categoryId: 'restore',
    title: 'Fix Lighting & Exposure',
    description: 'Correct underexposed, overexposed, or unbalanced light.',
    prompt:
      'Correct the exposure and lighting balance in this photo. Recover detail lost in shadows and highlights, balance the overall brightness, and fix any strong color cast. Keep the composition, subject, and background exactly as captured — this should read as a corrected version of the same photo, not a redesign.',
  },

  // Creative & Fun
  {
    id: 'creative-cartoon',
    categoryId: 'creative',
    title: 'Turn Into Cartoon Character',
    description: 'Playful 3D-cartoon or Pixar-style makeover.',
    prompt:
      'Turn this photo into a 3D animated cartoon character in the style of a modern Pixar/Disney film. Exaggerate features slightly for charm (bigger eyes, softer proportions) while keeping the person clearly recognizable — same hairstyle, outfit colors, and expression. Use warm, cinematic 3D-render lighting.',
  },
  {
    id: 'creative-fantasy',
    categoryId: 'creative',
    title: 'Add Fantasy Elements',
    description: 'Add magical light, glowing particles, or mythical flair.',
    prompt:
      'Add subtle fantasy elements to this photo — soft glowing magical particles or light wisps drifting through the scene, and a gentle ethereal glow around the subject. Keep the effect tasteful and atmospheric rather than overwhelming. Do not change the subject\'s appearance or the base scene, only add the magical lighting effects.',
  },
  {
    id: 'creative-tilt-shift',
    categoryId: 'creative',
    title: 'Miniature / Tilt-Shift Effect',
    description: 'Make a full scene look like a tiny toy diorama.',
    prompt:
      'Apply a tilt-shift miniature effect to this photo so the scene looks like a small-scale toy diorama. Add a shallow focus band across the middle of the frame with soft blur above and below it, and boost color saturation and contrast slightly for that toy-like look. Keep the composition and content the same.',
  },
  {
    id: 'creative-double-exposure',
    categoryId: 'creative',
    title: 'Double Exposure Effect',
    description: 'Blend the subject with a nature or city silhouette.',
    prompt:
      'Create a double-exposure effect using this photo. Blend the subject\'s silhouette with a fitting secondary texture (such as a forest, mountains, or city skyline) so the second image appears to fill the silhouette of the subject. Keep the blend tasteful, high-contrast, and artistic rather than muddy.',
  },
  {
    id: 'creative-pop-art',
    categoryId: 'creative',
    title: 'Turn Into Pop Art',
    description: 'Bold Warhol-style color blocks and halftone dots.',
    prompt:
      'Transform this photo into a bold pop-art print in the style of Andy Warhol. Use flat, high-contrast color blocking, visible halftone dot texture, and a bright, punchy color palette. Keep the subject\'s pose and features recognizable underneath the stylization.',
  },

  // Product & Object
  {
    id: 'product-white-background',
    categoryId: 'product',
    title: 'Clean White Background',
    description: 'E-commerce-ready white backdrop with soft shadow.',
    prompt:
      'Place this product on a clean, pure white background suitable for an e-commerce listing. Add a soft, realistic contact shadow beneath the product to keep it grounded. Keep the product\'s shape, color, texture, and details completely unchanged — only replace the background and add the shadow.',
  },
  {
    id: 'product-reflection',
    categoryId: 'product',
    title: 'Add Studio Reflection',
    description: 'Add a glossy reflective surface beneath the product.',
    prompt:
      'Add a subtle glossy reflection beneath this product, as if it were sitting on a polished dark or white studio surface. Match the reflection\'s perspective, lighting, and softness realistically to the product above it. Do not alter the product itself.',
  },
  {
    id: 'product-enhance-colors',
    categoryId: 'product',
    title: 'Enhance Product Colors',
    description: 'Make product colors pop without looking oversaturated.',
    prompt:
      'Enhance the color vibrancy and contrast of this product photo to make it pop, while keeping the colors true-to-life and accurate — this will be used for a real product listing, so avoid unrealistic color shifts. Slightly boost sharpness and clarity for a premium, catalog-ready look.',
  },
  {
    id: 'product-lifestyle-scene',
    categoryId: 'product',
    title: 'Create Lifestyle Scene',
    description: 'Place the product into a realistic, styled setting.',
    prompt:
      'Place this product into a realistic lifestyle setting appropriate for the item (for example, a styled table, shelf, or in-use scene) with natural ambient lighting that matches the product\'s own lighting. Keep the product\'s appearance, proportions, and branding exactly unchanged — only build a believable environment around it.',
  },
  {
    id: 'product-remove-objects',
    categoryId: 'product',
    title: 'Remove Unwanted Objects',
    description: 'Clean up clutter, wires, or distracting background items.',
    prompt:
      'Remove any distracting background clutter, wires, dust, or unwanted objects from this photo, and seamlessly fill in the space so it looks natural. Keep the main subject completely untouched — only clean up the surrounding scene.',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getPromptById(id: string): Prompt | undefined {
  return PROMPTS.find((p) => p.id === id);
}
