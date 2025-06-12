"use client";

import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const workExperience = [
  {
    title: "Front-End Developer",
    company: "Freelance (Upwork & Nafathli)",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Developing modern web applications using Next.js and Tailwind CSS",
      "Building interactive UI components with a strong focus on performance and user experience",
      "Collaborating with clients to deliver customized front-end solutions",
      "Optimizing web apps for SEO and accessibility",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Postly (Personal Project)",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Developed a social platform where users can create profiles and post prompts",
      "Implemented authentication and authorization with NextAuth.js",
      "Designed reusable UI components using Tailwind CSS",
      "Integrated Mongoose for database management",
    ],
  },
  {
    title: "Front-End Developer",
    company: "dashMinds (Dashboard Project)",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Designed and developed a dashboard interface for employee and department management",
      "Used App Router in Next.js for optimized routing and better performance",
      "Implemented role-based access control for administrators and users",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Tech Solutions Company",
    location: "Alexandria, Egypt",
    period: "2024",
    description: [
      "Worked on building and customizing WordPress websites",
      "Optimized website performance and enhanced UI/UX",
      "Integrated plugins and third-party APIs for additional functionalities",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science (In Progress)",
    institution: "Borg El Arab Technological University",
    location: "Alexandria, Egypt",
    period: "2022 - Present",
    description:
    "Currently studying computer science with a focus on front-end development, web technologies, and modern frameworks. Working on various academic projects related to web applications and AI."
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">Experience & Education</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </div>

        <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center text-text-primary">
              <FaBriefcase className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-text-primary">{job.title}</h4>
                    <div className="text-primary font-medium text-sm sm:text-base">
                      {job.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary mb-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-text-secondary">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl text-text-primary sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
              <FaGraduationCap className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Education
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-text-primary">{edu.degree}</h4>
                    <div className="text-primary font-medium text-sm sm:text-base">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary mb-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}