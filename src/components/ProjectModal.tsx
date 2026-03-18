import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  subtitle?: string;
  images: string[];
};

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ProjectModal: React.FC<Props> = ({ project, open, onOpenChange }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setIndex(0);
  }, [project]);

  if (!project) return null;

  const prev = () => setIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setIndex((i) => (i + 1) % project.images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 w-auto max-w-[95vw] max-h-[95vh] overflow-hidden border-0 bg-transparent shadow-2xl">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">{project.subtitle}</DialogDescription>

        <div
          className="relative inline-flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={project.images[index]}
            alt={`${project.title} ${index + 1}`}
            className="block max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg"
          />

          {project.images.length > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-primary/80 hover:bg-primary text-white shadow-xl z-50"
              >
                <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-primary/80 hover:bg-primary text-white shadow-xl z-50"
              >
                <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === index ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;