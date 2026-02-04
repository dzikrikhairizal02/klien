"use client";

import { cn } from "@/lib/utils";

export interface ProductCardProps {
  name: string;
  image: string;
  price?: string;
  className?: string;
  onClick?: () => void;
}

export function ProductCard({ name, image, price, className, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group bg-white border border-gray-100 overflow-hidden cursor-pointer",
        "hover:shadow-md hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-1">
        <h3 className="text-base font-medium text-black">
          {name}
        </h3>
        {price && (
          <p className="text-sm text-gray-600">{price}</p>
        )}
      </div>
    </div>
  );
}
