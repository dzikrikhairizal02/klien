import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const zai = await ZAI.create();
const outputDir = './public/images';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImage(prompt, filename, size = '1024x1024') {
  try {
    console.log(`Generating: ${filename}...`);
    
    const response = await zai.images.generations.create({
      prompt: prompt,
      size: size
    });

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');
    const outputPath = path.join(outputDir, filename);
    
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`✓ Generated: ${filename}`);
    return outputPath;
  } catch (error) {
    console.error(`✗ Failed to generate ${filename}:`, error.message);
    throw error;
  }
}

// Generate product images
const products = [
  {
    name: 'aura-pendant.jpg',
    prompt: 'Minimalist pendant light fixture, premium architectural lighting, clean white background, professional product photography, elegant design, Scandinavian style, soft lighting',
    size: '1024x1280'
  },
  {
    name: 'luna-floor.jpg',
    prompt: 'Modern floor lamp, premium architectural lighting, clean minimalist design, warm ambient light, professional product photography, white background, sophisticated',
    size: '1024x1280'
  },
  {
    name: 'nova-wall.jpg',
    prompt: 'Contemporary wall sconce light, architectural lighting fixture, sleek design, brushed metal finish, professional product photography, white background, elegant',
    size: '1024x1280'
  },
  {
    name: 'stella-chandelier.jpg',
    prompt: 'Modern chandelier with minimalist design, premium architectural lighting, glass elements, elegant crystal accents, professional product photography, white background, sophisticated',
    size: '1024x1280'
  }
];

// Generate project images
const projects = [
  {
    name: 'project-1.jpg',
    prompt: 'Modern minimalist loft interior in Tokyo, Japanese design, clean lines, neutral color palette, premium lighting fixtures, bright and airy, architectural photography, wide angle',
    size: '1344x768'
  },
  {
    name: 'project-2.jpg',
    prompt: 'Coastal residence interior in Sydney, ocean view, minimalist design, warm natural light, premium lighting fixtures, neutral tones, elegant interior photography',
    size: '1344x768'
  },
  {
    name: 'project-3.jpg',
    prompt: 'Urban penthouse in New York City, city skyline view, modern minimalist interior, premium architectural lighting, luxury design, clean aesthetic, interior photography',
    size: '1344x768'
  },
  {
    name: 'project-4.jpg',
    prompt: 'Minimalist villa in Copenhagen, Danish design, neutral color palette, warm lighting, elegant simplicity, architectural photography, clean lines, natural materials',
    size: '1344x768'
  }
];

console.log('Starting image generation...\n');

// Generate all images
for (const product of products) {
  await generateImage(product.prompt, product.name, product.size);
}

console.log('\n');

for (const project of projects) {
  await generateImage(project.prompt, project.name, project.size);
}

console.log('\n✓ All images generated successfully!');
