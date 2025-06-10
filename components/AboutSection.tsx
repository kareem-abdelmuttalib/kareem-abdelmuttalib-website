/* eslint-disable react/no-unescaped-entities */
"use client";

export default function About() {
  const personalInfo = [
    { title: "Name", value: "Essam Mohamed", icon: "👨‍💻" },
    { title: "Email", value: "essam.mohamed.dev@gmail.com", icon: "✉️" },
    { title: "Location", value: "Alex, Egypt", icon: "📍" },
    { title: "Status", value: "Open to opportunities", icon: "🔍" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Dynamic background elements with floating animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with underline effect */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-text-primary relative inline-block">
            <span className="relative">
              About <span className="text-primary">Me</span>
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></span>
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main content with layered card design */}
        <div className="relative">
          {/* Primary content card */}
          <div className="bg-card p-10 rounded-2xl shadow-2xl border border-border/50 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main content section - takes majority of space */}
                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-8 text-text-primary relative">
                    <span className="relative">
                      Full-Stack Developer
                      <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                    </span>
                  </h3>

                  <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                    <p>
                      I'm{" "}
                      <span className="text-primary font-semibold">
                        Essam Mohamed
                      </span>
                      , a dedicated developer with 1+ year of experience
                      creating exceptional digital solutions that blend
                      aesthetics with functionality.
                    </p>

                    <p>
                      My journey in development has equipped me with expertise
                      across the entire stack, specializing in{" "}
                      <span className="text-primary font-semibold">React</span>,{" "}
                      <span className="text-primary font-semibold">
                        Next.js
                      </span>
                      , and modern backend technologies that deliver scalable,
                      high-performance applications.
                    </p>

                    {/* Philosophy section as highlighted box */}
                    <div className="bg-background/50 p-6 rounded-xl border border-border mt-8">
                      <h4 className="text-xl font-semibold mb-4 text-text-primary">
                        Development Philosophy
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span>Clean, maintainable code as a foundation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span>Performance optimization from day one</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span>
                            Accessibility as a priority, not an afterthought
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Personal info sidebar - sticky on scroll */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="sticky top-24 space-y-6">
                    {/* Gradient background info card */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary-foreground/5 p-2 sm:p-6 rounded-xl border border-primary/20">
                      <h4 className="text-xl font-semibold mb-5 text-text-primary">
                        Personal Info
                      </h4>
                      <div className="space-y-5">
                        {personalInfo.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm text-text-secondary">
                                {item.title}
                              </p>
                              <p className="font-medium text-foreground text-sm">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive focus card */}
                    <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all group">
                      <h4 className="font-semibold mb-3 text-text-primary group-hover:text-primary transition-colors">
                        Current Focus
                      </h4>
                      <p className="text-text-secondary">
                        Expanding expertise in cloud architectures and advanced
                        React patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Depth effect shadow */}
          <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary/5 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
