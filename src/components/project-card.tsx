"use client";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  className?: string;
}

export function ProjectCard({ title, location, image, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group",
        className
      )}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Project Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-black">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {location}
        </p>
      </div>
    </div>
  );
}
