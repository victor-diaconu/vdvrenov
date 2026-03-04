import { useState } from "react";
import { ImageIcon, ZoomIn } from "lucide-react";
import ProjectModal from "./ProjectModal";

type Project = {
  id: number;
  title: string;
  subtitle?: string;
  images: string[];
};

const projects: Project[] = [
  { id: 1, title: "Projeto 1", subtitle: "Remodelação", images: ["/projects/1/1.jpeg", "/projects/1/2.jpeg"] },
  { id: 2, title: "Projeto 2", subtitle: "Cozinha", images: ["/projects/2/1.jpeg", "/projects/2/2.jpeg", "/projects/2/3.jpeg"] },
  { id: 3, title: "Projeto 3", subtitle: "Banho", images: [
    "/projects/3/1.jpeg", "/projects/3/2.jpeg", "/projects/3/3.jpeg", "/projects/3/4.jpeg",
    "/projects/3/5.jpeg", "/projects/3/6.jpeg", "/projects/3/7.jpeg", "/projects/3/8.jpeg", "/projects/3/9.jpeg",
  ] },
  { id: 4, title: "Projeto 4", subtitle: "Sala", images: ["/projects/4/1.jpeg", "/projects/4/2.jpeg", "/projects/4/3.jpeg"] },
  { id: 5, title: "Projeto 5", subtitle: "Fachada", images: ["/projects/5/1.jpeg", "/projects/5/2.jpeg", "/projects/5/3.jpeg"] },
  { id: 6, title: "Projeto 6", subtitle: "Quarto", images: ["/projects/6/1.jpeg", "/projects/6/2.jpeg"] },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  const openProject = (project: Project, index = 0) => {
    setSelected(project);
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <section id="projetos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Alguns dos nossos <span className="text-primary">projetos</span>
          </h2>
        </div>

        {/* Projects grid: 3 columns x 2 rows on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project, 0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" ? openProject(project) : null)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-card hover:border-accent/30 transition-all duration-300 cursor-pointer group"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="opacity-100 transition-opacity duration-300">
                  <div className="p-0">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* <div className="absolute top-3 right-3 z-50 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                <ImageIcon className="w-3 h-3" />
                <span className="leading-none">{project.images.length} {project.images.length === 1 ? 'foto' : 'fotos'}</span>
              </div> */}

              {/* Bottom thumbnails (up to 4) */}
              <div className="absolute left-0 right-0 bottom-0 p-3 flex items-center justify-center">
                <div className="w-full max-w-[88%] mx-auto flex items-center justify-center gap-2 px-2 py-2 rounded-t-md">
                  {project.images.slice(1, 5).map((src, i) => (
                    <button
                      key={src}
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(project, i + 1);
                      }}
                      className="overflow-hidden rounded-md border border-border/40"
                    >
                      <img src={src} alt={`thumb-${i}`} className="w-20 h-12 object-cover block" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project modal */}
        <ProjectModal project={selected} open={open} onOpenChange={setOpen} />
      </div>
    </section>
  );
};

export default Projects;
