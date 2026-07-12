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
  // Portrait & Beauty — extended
  {
    id: 'portrait-blemish-removal',
    categoryId: 'portrait',
    title: 'Blemish Removal',
    description: 'Clear temporary spots while keeping permanent features.',
    prompt:
      'Remove temporary blemishes, pimples, and small marks from the skin in this photo. Keep all permanent features exactly as they are — moles, freckles, scars, and beauty marks must stay untouched. Preserve natural skin texture and pores. The result should look like clear, healthy skin on a good day, not an airbrushed filter.',
  },
  {
    id: 'portrait-flyaway-hair',
    categoryId: 'portrait',
    title: 'Flyaway Hair Cleanup',
    description: 'Tame stray hairs without changing the hairstyle.',
    prompt:
      'Clean up stray flyaway hairs around the head and face in this photo. Keep the overall hairstyle, volume, hairline, and hair color exactly the same — only remove the thin stray strands that catch the light or cross the face. The edges of the hair should still look soft and natural, not cut out or helmet-like.',
  },
  {
    id: 'portrait-natural-makeup',
    categoryId: 'portrait',
    title: 'Natural Makeup Look',
    description: 'Add a subtle, everyday makeup effect.',
    prompt:
      'Apply a subtle, natural everyday makeup look to this portrait: slightly defined brows, a hint of mascara, a soft neutral lip tint, and a light touch of blush. Keep the skin texture realistic and the person completely recognizable. Do not change any facial features or proportions — the goal is a polished no-makeup-makeup look, not a glamour transformation.',
  },
  {
    id: 'portrait-golden-hour',
    categoryId: 'portrait',
    title: 'Golden Hour Glow',
    description: 'Warm sunset light wrapped around the subject.',
    prompt:
      'Relight this portrait with warm golden-hour sunlight, as if taken shortly before sunset. Add a soft warm glow on the skin, gentle rim light on the hair, and slightly warmer tones overall. Keep facial features, skin texture, and identity exactly the same. The lighting change should look photographic and believable, not like an orange filter.',
  },
  {
    id: 'portrait-glasses-glare',
    categoryId: 'portrait',
    title: 'Fix Glasses Glare',
    description: 'Remove reflections so the eyes show clearly.',
    prompt:
      'Remove the glare and reflections from the eyeglasses in this photo so both eyes are clearly visible through the lenses. Keep the glasses frames, their position, and the person\'s eyes and face exactly as they are. Reconstruct the eyes naturally where glare covered them, matching the lighting of the rest of the face.',
  },

  // Background & Scene — extended
  {
    id: 'background-beach-sunset',
    categoryId: 'background',
    title: 'Beach Sunset Background',
    description: 'Place the subject on a warm evening beach.',
    prompt:
      'Replace the background of this photo with a beautiful beach at sunset — soft waves, golden sky, and warm evening light. Adjust the lighting and color tones on the subject so they naturally match the new scene, including a subtle warm glow on the edges. Keep the subject, their pose, and clothing exactly the same, with clean, natural edges around hair.',
  },
  {
    id: 'background-city-skyline',
    categoryId: 'background',
    title: 'City Skyline Background',
    description: 'A modern city evening backdrop behind the subject.',
    prompt:
      'Replace the background with a modern city skyline in the evening — glowing buildings, soft bokeh lights, and a blue-hour sky. Blend the subject naturally into the scene by matching the ambient light and adding subtle cool tones on their edges. Keep the subject completely unchanged and the cutout edges clean, especially around hair.',
  },
  {
    id: 'background-extend',
    categoryId: 'background',
    title: 'Extend the Background',
    description: 'Widen the photo by continuing the scene beyond its edges.',
    prompt:
      'Extend this image beyond its current borders, continuing the existing background naturally on all sides. Match the lighting, colors, textures, and perspective of the original scene so the extension is seamless and undetectable. Do not alter anything inside the original photo area.',
  },
  {
    id: 'background-remove-people',
    categoryId: 'background',
    title: 'Remove People in Background',
    description: 'Clear tourists and passersby from the scene.',
    prompt:
      'Remove all the people in the background of this photo, keeping only the main subject. Fill in the areas behind them naturally, continuing the scenery, architecture, or landscape so the result looks like the place was empty. Keep the main subject, the lighting, and the rest of the scene exactly the same.',
  },
  {
    id: 'background-forest',
    categoryId: 'background',
    title: 'Nature Forest Background',
    description: 'Lush greenery with soft natural light.',
    prompt:
      'Replace the background with a lush green forest with soft, diffused natural light filtering through the leaves. Add a gentle depth-of-field blur to the greenery so the subject stands out. Match the ambient green-tinted bounce light subtly on the subject\'s edges so they blend in naturally. Keep the subject fully unchanged.',
  },

  // Style & Artistic — extended
  {
    id: 'style-vintage-film',
    categoryId: 'style',
    title: 'Vintage Film Look',
    description: 'Faded tones and soft grain like a 1970s photograph.',
    prompt:
      'Give this photo a vintage 1970s film look: slightly faded blacks, warm muted colors, soft fine grain, and a gentle vignette. The effect should feel like a well-preserved analog photograph, not a heavy filter. Keep all subjects and details clearly recognizable.',
  },
  {
    id: 'style-pencil-sketch',
    categoryId: 'style',
    title: 'Pencil Sketch',
    description: 'Hand-drawn graphite sketch on paper.',
    prompt:
      'Turn this photo into a realistic hand-drawn pencil sketch on lightly textured paper. Use graphite-style shading, clean linework for key features, and cross-hatching in the shadows. Keep the likeness and proportions of the subject accurate so they remain instantly recognizable.',
  },
  {
    id: 'style-3d-animated',
    categoryId: 'style',
    title: '3D Animated Movie Style',
    description: 'Stylized 3D character render with soft lighting.',
    prompt:
      'Transform this photo into a stylized 3D animated movie character render: smooth sculpted surfaces, large expressive eyes, soft cinematic lighting, and a slightly exaggerated but friendly proportion style. Keep the person\'s key features — hair style and color, skin tone, clothing, and expression — clearly recognizable in the stylized version.',
  },
  {
    id: 'style-color-pop',
    categoryId: 'style',
    title: 'Selective Color Pop',
    description: 'Black and white photo with one element in color.',
    prompt:
      'Convert this photo to black and white, but keep the main subject (or its most striking element) in full, vivid color. Make the color region\'s edges precise and natural. Slightly boost the contrast of the black-and-white areas so the colored element stands out dramatically.',
  },
  {
    id: 'style-teal-orange',
    categoryId: 'style',
    title: 'Cinematic Teal & Orange',
    description: 'The classic blockbuster movie color grade.',
    prompt:
      'Apply a cinematic teal-and-orange color grade to this photo: push the shadows and background tones toward teal, and the skin tones and highlights toward warm orange. Add subtle contrast and a very light film grain. Keep skin tones natural-looking within the warm range, and preserve all details.',
  },

  // Restore & Enhance — extended
  {
    id: 'restore-red-eye',
    categoryId: 'restore',
    title: 'Remove Red-Eye',
    description: 'Fix flash red-eye while keeping natural eye color.',
    prompt:
      'Remove the red-eye effect from this flash photo. Restore the natural pupil color (dark) and the person\'s true iris color, keeping a small natural catchlight so the eyes still look alive. Do not change the shape or size of the eyes or anything else in the photo.',
  },
  {
    id: 'restore-faded-colors',
    categoryId: 'restore',
    title: 'Restore Faded Colors',
    description: 'Bring washed-out old prints back to life.',
    prompt:
      'Restore the faded colors in this old photo to how they would have looked when originally taken. Correct the color cast (often yellow or magenta in aged prints), rebuild natural skin tones, and bring back depth in the shadows. Keep the photo\'s authentic character — the goal is faithful restoration, not a modern oversaturated look.',
  },
  {
    id: 'restore-denoise',
    categoryId: 'restore',
    title: 'Reduce Noise & Grain',
    description: 'Clean up grainy low-light photos.',
    prompt:
      'Reduce the digital noise and heavy grain in this low-light photo while preserving fine detail and sharpness. Do not over-smooth — skin should keep its texture, and edges should stay crisp. Slightly recover detail in the shadow areas if possible. The result should look like it was shot with a better camera, not a blurred version.',
  },
  {
    id: 'restore-torn-photo',
    categoryId: 'restore',
    title: 'Repair Torn Photo',
    description: 'Reconstruct missing pieces and folds.',
    prompt:
      'Repair this damaged photo: reconstruct the torn or missing areas, remove fold lines and creases, and blend the repairs seamlessly with the surrounding image. Match the original grain, tone, and lighting so the fixes are invisible. Preserve the faces and important details exactly — do not reinvent or alter them.',
  },
  {
    id: 'restore-upscale-print',
    categoryId: 'restore',
    title: 'Upscale for Printing',
    description: 'Enlarge a small photo cleanly for a big print.',
    prompt:
      'Upscale this photo to a much higher resolution suitable for a large print. Enhance and sharpen fine details naturally — fabric texture, hair strands, edges — without introducing artifacts, halos, or a plastic look. Faces must remain completely faithful to the original. Keep colors and lighting unchanged.',
  },

  // Creative & Fun — extended
  {
    id: 'creative-neon-outline',
    categoryId: 'creative',
    title: 'Neon Glow Outline',
    description: 'Electric glowing outline around the subject.',
    prompt:
      'Add a vibrant neon glow outline tracing the edges of the main subject in this photo, like a glowing electric aura. Use one or two bold neon colors, with a soft light spill onto the background around the outline. Darken the background slightly so the glow stands out. Keep the subject themselves unchanged.',
  },
  {
    id: 'creative-sticker',
    categoryId: 'creative',
    title: 'Sticker Cutout Effect',
    description: 'Turn the subject into a die-cut sticker.',
    prompt:
      'Turn the main subject of this photo into a die-cut sticker: cut them out cleanly, add a thick white border following their outline, a subtle drop shadow, and place the sticker on a simple pastel background. Keep the subject photographic inside the sticker — do not cartoonize them.',
  },
  {
    id: 'creative-polaroid',
    categoryId: 'creative',
    title: 'Vintage Polaroid Frame',
    description: 'Instant-photo frame with retro tones.',
    prompt:
      'Present this photo as a vintage instant Polaroid-style picture: white instant-film frame with the thicker bottom edge, slightly washed-out warm tones, soft focus at the corners, and a hint of film texture. Angle it very slightly and add a soft shadow, as if the physical photo is lying on a surface.',
  },
  {
    id: 'creative-superhero-poster',
    categoryId: 'creative',
    title: 'Action Movie Poster',
    description: 'Dramatic poster look with cinematic effects.',
    prompt:
      'Turn this photo into a dramatic action movie poster: cinematic lighting with strong rim light, a moody atmospheric background with smoke or embers, high contrast color grade, and space at the top and bottom for a title. Keep the person recognizable as the hero of the poster. Do not add any text or logos.',
  },
  {
    id: 'creative-galaxy',
    categoryId: 'creative',
    title: 'Galaxy Double Exposure',
    description: 'Blend a starry night sky into the subject.',
    prompt:
      'Create a dreamy double-exposure effect blending a vivid galaxy and starry night sky into the silhouette of the main subject. Let the stars and nebula colors fill the darker areas of the subject while their face remains softly visible. Use deep blues and purples, with a clean dark background.',
  },

  // Product & Object — extended
  {
    id: 'product-gradient-backdrop',
    categoryId: 'product',
    title: 'Gradient Color Backdrop',
    description: 'Smooth modern gradient behind the product.',
    prompt:
      'Place this product on a smooth, modern gradient backdrop that complements the product\'s colors. Add soft, professional studio lighting with a gentle shadow beneath the product so it feels grounded. Keep the product itself completely unchanged — accurate colors, labels, and details.',
  },
  {
    id: 'product-soft-shadow',
    categoryId: 'product',
    title: 'Realistic Soft Shadow',
    description: 'Ground the product with a natural shadow.',
    prompt:
      'Add a realistic, soft drop shadow beneath this product so it looks naturally placed on a surface instead of floating. The shadow should match the direction and softness of the existing lighting, denser directly under the product and fading outward. Change nothing else in the image.',
  },
  {
    id: 'product-fix-lighting',
    categoryId: 'product',
    title: 'Fix Product Lighting',
    description: 'Even, bright lighting that shows true colors.',
    prompt:
      'Correct the lighting on this product photo: brighten it evenly, remove harsh shadows and blown-out highlights, and make the product\'s true colors accurate and vivid. Add a subtle highlight to give the product dimension. Keep the background and composition unchanged, and preserve every label and detail exactly.',
  },
  {
    id: 'product-luxury-editorial',
    categoryId: 'product',
    title: 'Luxury Editorial Look',
    description: 'High-end magazine styling for the product.',
    prompt:
      'Restyle this product photo as a luxury editorial shot: dramatic directional lighting, a rich dark or textured premium background (like stone, silk, or brushed metal), and elegant negative space around the product. The mood should feel high-end and minimal. Keep the product itself perfectly accurate and unchanged.',
  },
  {
    id: 'product-hero-banner',
    categoryId: 'product',
    title: 'Website Hero Banner',
    description: 'Wide banner composition with copy space.',
    prompt:
      'Compose this product into a wide website hero banner layout: place the product on one side with attractive studio lighting, and leave clean, uncluttered negative space on the other side for text. Use a background that complements the product\'s colors. Do not add any text — just leave the space. Keep the product accurate and unchanged.',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getPromptById(id: string): Prompt | undefined {
  return PROMPTS.find((p) => p.id === id);
}
