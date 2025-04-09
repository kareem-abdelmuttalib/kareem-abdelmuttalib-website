/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "DashMinds",
    description:
      "Designed and developed a dashboard interface for employee and department management",
    image: "/dashMinds.png",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://dashminds-one.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/dashminds-one",
    featured: true,
  },
  {
    title: "Staffly",
    description:
      "A management dashboard for employees with real-time analytics and user access control.",
    image: "/staffly.png",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://staffly-nu.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/staffly",
    featured: true,
  },
  {
    title: "Portfolio",
    description:
      "A modern front-end portfolio showcasing projects, skills, and experiences with a responsive and interactive design.",
    image: "/frontend-portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "SWR"],
    liveUrl: "https://portofolio-main-ebon.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/portofolio-main",
    featured: true,
  },
  {
    title: "Travel Agents",
    description:
      "A travel agency website showcasing services, destinations, and booking options with a modern and user-friendly design.",
    image: "/travel-agents.png",
    technologies: ["Next.js", "Tailwind CSS", "Styled Components"],
    liveUrl: "https://travel-agents-ashen.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/travel-agents",
    featured: false,
  },
  {
    title: "PassMate",
    description:
      "A simple and secure password generator that creates strong, customizable passwords with various complexity options.",
    image: "/pass-mate.png",
    technologies: ["JavaScript", "Tailwind CSS"],
    liveUrl: "https://pass-mate.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/PassMate",
    featured: false,
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experience with a modern and responsive design.",
    image: "/portofolio2.png",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://dev-nex.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/dev-nex",
    featured: false,
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-text-primary">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered
            throughout my career.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden h-full flex flex-col border border-border rounded-lg hover:shadow-lg transition-shadow bg-background">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-semibold mb-2 text-text-primary">
                      {project.title}
                    </h4>
                    <p className="text-text-secondary mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary text-text-primary hover:bg-primary/90"
                      >
                        <FaExternalLinkAlt className="h-3 w-3 mr-2" /> Live Demo
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-border bg-background hover:bg-muted"
                      >
                        <FaGithub className="h-3 w-3 mr-2" /> Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-text-primary">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden h-full flex flex-col border border-border rounded-lg hover:shadow-md transition-shadow bg-background">
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold mb-2 text-text-primary">
                      {project.title}
                    </h4>
                    <p className="text-sm text-text-secondary mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs border border-border rounded-full px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background hover:bg-muted"
                      >
                        <FaExternalLinkAlt className="h-2.5 w-2.5 mr-1" /> Demo
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-background hover:bg-muted"
                      >
                        <FaGithub className="h-2.5 w-2.5 mr-1" /> Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
