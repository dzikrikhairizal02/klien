"use client";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductCardProps } from "@/components/product-card";

interface ProductDetailModalProps {
  product: ProductCardProps & {
    description?: string;
    specifications?: string[];
    category?: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailModal({
  product,
  open,
  onOpenChange,
}: ProductDetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-5xl overflow-hidden"
        showCloseButton={false}
      >
        {/* Visually hidden DialogTitle for accessibility */}
        <DialogTitle className="sr-only">
          {product.name} - Product Details
        </DialogTitle>

        <div className="flex flex-col md:flex-row max-h-[80vh]">
          {/* Product Image - Fixed Aspect Ratio */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="aspect-square w-full bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details - Scrollable if needed */}
          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto scrollbar-thin">
            {/* Header with Close Button */}
            <div className="flex justify-between items-start mb-4">
              <div>
                {product.category && (
                  <span className="text-xs uppercase tracking-wider text-gray-500 mb-2 block">
                    {product.category}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-medium text-black">
                  {product.name}
                </h2>
              </div>
              <DialogClose className="text-gray-400 hover:text-black transition-colors flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </DialogClose>
            </div>

            {/* Price */}
            <p className="text-xl text-black font-medium mb-4">
              {product.price}
            </p>

            {/* Description */}
            {product.description && (
              <div className="mb-5">
                <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-2">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mb-5">
                <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-3">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      • {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="pt-2 space-y-3">
              <button className="w-full px-6 py-3 bg-black text-white text-sm font-medium transition-all duration-200 hover:bg-gray-800 hover:shadow-md">
                Add to Inquiry
              </button>
              <button className="w-full px-6 py-3 bg-white text-black border border-gray-200 text-sm font-medium transition-all duration-200 hover:bg-gray-50">
                Download Spec Sheet
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
