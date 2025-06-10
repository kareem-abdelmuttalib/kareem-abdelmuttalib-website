/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

// Data array moved to the top
const personalInfo = [
  { title: "Name", value: "Essam Mohamed", icon: "👨‍💻" },
  { title: "Email", value: "essam.mohamed.dev@gmail.com", icon: "✉️" },
  { title: "Location", value: "Alex, Egypt", icon: "📍" },
  { title: "Status", value: "Open to opportunities", icon: "🔍" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-foreground mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with decorative elements */}
          <div className="relative group max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-foreground/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden border-4 w-[500px] h-[500px] border-background shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <Image
                src="/profile-3.png"
                alt="Essam Mohamed"
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                fill  
                priority
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-3xl font-bold mb-6 text-text-primary">
                Full-Stack Developer
              </h3>
              
              <div className="space-y-4 text-text-secondary">
                <p className="leading-relaxed">
                  I'm <span className="text-primary font-medium">Essam Mohamed</span>, a passionate developer with 1+ year of experience crafting exceptional digital experiences. I bridge the gap between design and technology to build responsive, accessible web applications.
                </p>
                
                <p className="leading-relaxed">
                  My expertise spans the full stack, from creating pixel-perfect UIs with <span className="text-primary font-medium">React</span> and <span className="text-primary font-medium">Next.js</span> to developing robust backend systems with <span className="text-primary font-medium">MongoDB</span> and serverless architectures.
                </p>
                
                <p className="leading-relaxed">
                  I obsess over performance, accessibility, and clean code - because great applications should work beautifully for everyone.
                </p>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-text-secondary">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}