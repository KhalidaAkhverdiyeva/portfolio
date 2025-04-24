"use client";
import React, { useState } from "react";
import SwipeableTemporaryDrawer from "../drawer";
import Project from "@/types";

const Projects = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Impact",
      description:
        "Impact is a fully responsive e-commerce platform designed for showcasing and selling high-end decorative products.",
      videoUrl:
        "https://res.cloudinary.com/dxtasssta/video/upload/v1745482296/impact-demo_lpcinx.mp4",
      about:
        "The site is fully built from scratch — with a Next.js + TypeScript frontend and a Node.js + MongoDB backend. Fast, functional, and visually driven, Impact blends design with technology to deliver a smooth and inspiring shopping experience.",
      technologies: [
        "Next.js",
        "Material UI",
        "TypeScript",
        "Firebase",
        "Stripe",
      ],
      website: "https://impact-rho.vercel.app/en",
      github: "https://github.com/KhalidaAkhverdiyeva/impact-ecommerce",
    },
    {
      title: "Timezone",
      description:
        "An elegant watch brand site focused on storytelling and product showcase, built for a sleek user experience.",
      videoUrl:
        "https://res.cloudinary.com/dxtasssta/video/upload/v1745482670/timezone-demo_qetp4d.mp4",
      about:
        "NextTime is a sleek, timezone-aware platform designed for modern watch enthusiasts. Whether you're browsing for your next timepiece or checking global timezones, the site delivers both style and utility. Built entirely with Next.js and TypeScript, it offers a fast, responsive, and informative experience. NextTime bridges functionality and elegance — just like a great watch should.",
      technologies: [],
      website: "",
      github: "",
    },
    {
      title: "Woodmart",
      description:
        "A vibrant plant shop website with multiple interactive slideshows and a fresh, nature-inspired design.",
      videoUrl:
        "https://res.cloudinary.com/dxtasssta/video/upload/v1745482612/woody-demo_vi13io.mp4",
      about:
        "Woodmart is a cozy and green-inspired online store for plant lovers. As one of my earliest projects, it was built using HTML, SCSS, and JavaScript, focusing on clean design and a natural aesthetic. The site showcases a variety of indoor plants with a user-friendly layout and subtle animations. Woodmart was the foundation of my journey into web development, blending simplicity with style.",
      technologies: [],
      website: "",
      github: "",
    },
    {
      title: "Alukas & Co",
      description:
        "Jewelry brand website with login/register. Crafted with a custom UI and full authentication flow.",
      videoUrl:
        "https://res.cloudinary.com/dxtasssta/video/upload/v1745482523/alukas-demo_q4vnys.mp4",
      about:
        "Alukas & Co. is a modern jewelry brand store crafted to reflect elegance and sophistication. Built with Next.js and TypeScript, the site features smooth animations, a refined design, and essential pages like login, registration, and product views. With a focus on both form and function, it offers a seamless user experience across all devices. Alukas & Co. combines luxury visuals with clean, efficient code — making browsing feel as premium as the products.",
      technologies: [],
      website: "",
      github: "",
    },
    {
      title: "Techblog",
      description:
        "A React-powered blog site with a clean landing page and dynamic blog rendering.",
      videoUrl:
        "https://res.cloudinary.com/dxtasssta/video/upload/v1745482603/techbloog-demo_pl0t6a.mp4",
      about:
        "TechBlog is a minimal and modern blog site built with React and powered by Sanity CMS. It features a clean landing page and a dynamic card layout that pulls content directly from Sanity. Designed with a focus on simplicity and readability, it also includes a sleek dark mode for a better viewing experience. TechBlog is a lightweight showcase of content-driven design and headless CMS integration.",
      technologies: [],
      website: "",
      github: "",
    },
    {
      title: "Homezen",
      description:
        "A modern landing page for a rental service concept — clean, bold, and conversion-focused.",
      videoUrl:
        "https://res.cloudinary.com/dxtasssta/video/upload/v1745482690/Homezen-demo_-_Made_with_Clipchamp_qlgsb1.mp4",
      about:
        "HomeZen is a home rental platform built with HTML, CSS, SCSS, and custom JavaScript. It features fully functional CRUD cards and uses custom APIs to manage property listings. The site focuses on simplicity and usability, allowing users to browse, add, edit, or remove listings with ease. HomeZen is a clean, practical project that highlights hands-on experience with frontend logic and API integration.",
      technologies: [],
      website: "",
      github: "",
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  return (
    <div>
      <div className="max-w-[906px] mx-auto">
        {/* Title aligned with cards */}
        <div className="text-[#ECE7E1] font-['ClashDisplay'] font-[700] text-[46px] mb-10">
          Projects.
        </div>

        {/* Cards */}
        <div className="flex gap-[20px] justify-center pb-[50px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[20px]">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="relative w-[448px] h-[400px] text-[#020202] rounded-[20px] text-[20px] font-semibold cursor-pointer overflow-hidden"
                onClick={() => handleProjectClick(project)}
              >
                <video
                  className="w-full h-full object-cover rounded-[20px] z-0 border"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={project.videoUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px] opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 z-20 opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay']">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 font-['Satoshi-Regular']">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[20px]">
            {projects.slice(3).map((project, index) => (
              <div
                key={index}
                className="relative w-[448px] h-[454px] text-[#020202] rounded-[20px] font-['ClashDisplay'] text-[20px] font-semibold cursor-pointer overflow-hidden"
                onClick={() => handleProjectClick(project)}
              >
                <video
                  className="w-full h-full object-cover rounded-[20px] z-0 border"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={project.videoUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px] opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 z-20 opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay']">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 font-['Satoshi-Regular']">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SwipeableTemporaryDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          projectData={selectedProject}
        />
      </div>
    </div>
  );
};

export default Projects;
