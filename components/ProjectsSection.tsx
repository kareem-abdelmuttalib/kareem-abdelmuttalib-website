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
    title: "DashPro",
    description:
      "modern dashboard UI built with Next.js and Tailwind CSS. This project provides a complete frontend for a professional analytics dashboard.",
    image: "/dash-pro.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://dash-pro-alpha.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/dash-pro",
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
    title: "UniPortal",
    description:
      "A full-stack university student portal that enables students to manage their academic materials efficiently. This platform provides an intuitive and feature-rich environment for students ",
    image: "/UniPortal.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://uni-portal-msbv.vercel.app/",
    githubUrl: "https://github.com/DevNexEssam/uni-portal",
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
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-text-primary">
            My Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            Explore my collection of projects showcasing different technologies and solutions I've built.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div data-aos="zoom-in" key={index} className="group relative overflow-hidden rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
                        <FaGithub className="h-5 w-5" />
                      </Link>
                      <Link href={project.liveUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-text-primary border-b border-border pb-2">
            More Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-background">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-text-primary">{project.title}</h4>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} target="_blank" className="text-text-secondary hover:text-primary transition-colors">
                        <FaGithub className="h-4 w-4" />
                      </Link>
                      <Link href={project.liveUrl} target="_blank" className="text-text-secondary hover:text-primary transition-colors">
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-primary">
                        {tech}
                      </span>
                    ))}
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