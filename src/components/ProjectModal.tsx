import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

  useEffect(() => {
    setIndex(0);
  }, [project]);

  if (!project) return null;

  const prev = () => setIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setIndex((i) => (i + 1) % project.images.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-auto p-0">
        <div className="relative flex items-center justify-center">
          <img
            src={project.images[index]}
            alt={`${project.title} ${index + 1}`}
            className="w-full h-full object-contain"
          />

          {project.images.length > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl z-50"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl z-50"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
