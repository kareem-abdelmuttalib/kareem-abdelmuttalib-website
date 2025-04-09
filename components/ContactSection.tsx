/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function ContactSection() {
  // Contact info data
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Alex, Egypt"
    },
    {
      icon: <MdEmail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "essam.mohamed.dev@gmail.com"
    },
    {
      icon: <FaPhone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+20 1068446885"
    }
  ];

  // Social links data
  const socialLinks = [
    {
      href: "https://github.com/DevNexEssam",
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub"
    },
    {
      href: "https://www.instagram.com/essam_iam/",
      icon: <FaInstagram className="h-5 w-5" />,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/essam-mohamed-829b27342/",
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:essam.mohamed.dev@gmail.com",
      icon: <MdEmail className="h-5 w-5" />,
      label: "Email"
    }
  ];

  // Form fields data
  const formFields = [
    {
      type: "text",
      name: "name",
      placeholder: "Your name",
      gridClass: "md:col-span-1"
    },
    {
      type: "email",
      name: "email",
      placeholder: "Your email",
      gridClass: "md:col-span-1"
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Subject of your message",
      gridClass: "col-span-2"
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Write your message here...",
      gridClass: "col-span-2"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-text-primary">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me using the form below or through my
            contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-text-primary">Contact Information</h3>
            <p className="text-text-secondary">
              Feel free to reach out to me through any of the following methods.
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{item.title}</h4>
                    <p className="text-text-secondary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-4 text-text-primary">Follow Me</h3>
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="inline-flex items-center justify-center p-2 text-sm font-medium transition-colors rounded-full border border-border bg-background hover:bg-muted"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">Send Me a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map((field, index) => (
                    <div key={index} className={field.gridClass}>
                      <label className="block text-text-primary mb-2 capitalize">{field.name}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary min-h-[150px]"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full px-6 py-3 bg-primary text-text-primary rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2 h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}