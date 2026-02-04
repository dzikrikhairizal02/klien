"use client";

import { useState } from "react";
import { AmbientParticles } from "@/components/ambient-particles";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { ProductDetailModal } from "@/components/product-detail-modal";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";

interface Product {
  name: string;
  image: string;
  price?: string;
  category?: string;
  description?: string;
  specifications?: string[];
}

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      name: "Aura Pendant",
      image: "/images/aura-pendant.jpg",
      price: "$1,250",
      category: "Pendant Light",
      description: "The Aura Pendant embodies the essence of minimalist Scandinavian design. Its clean, cylindrical form creates a focused beam of warm ambient light that transforms any space. Crafted from premium aluminum with a matte white finish, this fixture is perfect for dining areas, kitchen islands, or as accent lighting in living spaces.",
      specifications: [
        "Dimensions: Ø20cm x H30cm",
        "Material: Powder-coated aluminum",
        "Light Source: LED 12W (3000K)",
        "Dimmable: Yes",
        "Cable length: 150cm (adjustable)",
        "Warranty: 5 years",
      ],
    },
    {
      name: "Luna Floor Lamp",
      image: "/images/luna-floor.jpg",
      price: "$2,450",
      category: "Floor Lamp",
      description: "The Luna Floor Lamp combines elegant proportions with sophisticated lighting technology. Its slender profile and diffused illumination create an atmosphere of refined luxury. The adjustable head allows precise directional control, making it ideal for reading areas or as a dramatic statement piece in any contemporary interior.",
      specifications: [
        "Dimensions: Ø35cm x H160cm",
        "Material: Brushed stainless steel, linen shade",
        "Light Source: LED 18W (2700K)",
        "Dimmable: Yes, with touch control",
        "Base diameter: 35cm",
        "Warranty: 5 years",
      ],
    },
    {
      name: "Nova Wall Sconce",
      image: "/images/nova-wall.jpg",
      price: "$890",
      category: "Wall Light",
      description: "The Nova Wall Sconce redefines wall lighting with its innovative diffused glow. The carefully designed lens creates a soft, ambient light that washes walls with warmth. Perfect for hallways, bedrooms, or as bedside lighting, its versatile mounting options allow for both uplight and downlight configurations.",
      specifications: [
        "Dimensions: W12cm x D8cm x H15cm",
        "Material: Die-cast aluminum, opal glass",
        "Light Source: LED 8W (3000K)",
        "Dimmable: Yes",
        "IP Rating: IP20 (indoor)",
        "Warranty: 3 years",
      ],
    },
    {
      name: "Stella Chandelier",
      image: "/images/stella-chandelier.jpg",
      price: "$4,950",
      category: "Chandelier",
      description: "The Stella Chandelier is a masterpiece of contemporary lighting design. Multiple floating elements create a constellation of light that serves as both illumination and sculptural art. Each individual light can be adjusted to create custom configurations, making every installation unique.",
      specifications: [
        "Dimensions: W80cm x D80cm x H120cm",
        "Material: Chrome finish, hand-blown glass",
        "Light Source: 6 x LED 10W (2700K)",
        "Dimmable: Yes",
        "Cable length: 200cm",
        "Warranty: 5 years",
      ],
    },
  ];

  const projects = [
    { title: "Modern Loft", location: "Tokyo, Japan", image: "/images/project-1.jpg" },
    { title: "Coastal Residence", location: "Sydney, Australia", image: "/images/project-2.jpg" },
    { title: "Urban Penthouse", location: "New York, USA", image: "/images/project-3.jpg" },
    { title: "Minimalist Villa", location: "Copenhagen, Denmark", image: "/images/project-4.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AmbientParticles />
      <ScrollProgress />
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/70" />
        </div>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto space-y-8 md:space-y-12 relative z-10">
          {/* Logo */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight">
            Klien
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 tracking-wide">
            Simplicity. Elegance. Light.
          </p>

          {/* CTA Button */}
          <a
            href="#products"
            className="inline-block px-8 py-3 bg-black text-white text-base font-medium transition-all duration-200 hover:bg-gray-800 hover:shadow-md"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="py-20 md:py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-12 md:mb-16 text-center">
            Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="projects" className="py-20 md:py-28 px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-12 md:mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="py-20 md:py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-10 md:mb-12">
            Our Story
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Founded in Copenhagen, Klien embodies the essence of Danish minimalism—where every element serves a purpose and nothing is left to chance. Our approach to lighting design is rooted in the belief that illumination should be felt more than seen.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Each fixture we create is a study in restraint and refinement. We strip away the unnecessary, allowing the pure form to emerge. The result is lighting that doesn't just illuminate spaces—it transforms them, creating an atmosphere of quiet sophistication and timeless elegance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our collaboration with world-renowned architects and interior designers has taught us that the most powerful design statements often come from the subtlest details. This philosophy guides everything we do, from the initial sketch to the final polish.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Klien, we don't chase trends. We pursue perfection. Our commitment to quality materials, exceptional craftsmanship, and thoughtful design ensures that every piece we create will remain relevant for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-6 text-center">
            Get in Touch
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto">
            Whether you're an architect seeking collaboration or a homeowner looking to elevate your space, we'd love to hear from you.
          </p>

          <ContactForm />

          {/* Contact Information */}
          <div className="mt-20 pt-10 border-t border-gray-200">
            <div className="max-w-lg mx-auto space-y-4 text-center">
              <p className="text-gray-700">
                <span className="text-gray-500 mr-2">Email:</span>
                hello@klien.com
              </p>
              <p className="text-gray-700">
                <span className="text-gray-500 mr-2">Phone:</span>
                +45 12 34 56 78
              </p>
              <div className="pt-6 flex justify-center gap-8">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                >
                  Pinterest
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          open={selectedProduct !== null}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
