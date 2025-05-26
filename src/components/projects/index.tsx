"use client";
import React, { useState } from "react";
import SwipeableTemporaryDrawer from "../sidebar";
import Project from "@/types";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative md:w-[448px] h-[400px] text-[#020202] rounded-[20px] text-[20px] font-semibold cursor-pointer overflow-hidden"
      onClick={() => onClick(project)}
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
        <h3 className="text-[34px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay-Bold']">
          {project.title}
        </h3>
        <p className="text-sm mb-4 font-['Satoshi-Regular']">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Impact",
      description:
        "Impact is a fully responsive e-commerce platform designed for showcasing and selling high-end decorative products.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/kswdx26hxe9uke77gad4g/2025-04-22-17-02-27.mp4?rlkey=m7lo03itd9agk5zuz9e51an4u&st=12b3qm61&raw=1",
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
      title: "Alukas & Co",
      description:
        "Jewelry brand website with login/register. Crafted with a custom UI and full authentication flow.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/3dbgjgyzm3xh6o9lt7pat/2025-04-22-15-41-45.mp4?rlkey=2uzc1zy1kistopvc6tamw28ta&st=hhi5nxfk&raw=1",
      about:
        "Alukas & Co. is a modern jewelry brand store crafted to reflect elegance and sophistication. Built with Next.js and TypeScript, the site features smooth animations and essential pages like login, registration, and product views.",
      technologies: ["Next.js", "Typescript", "Swiper", "Tailwind"],
      website: "https://alukas-ecommerce.vercel.app/login",
      github: "https://github.com/KhalidaAkhverdiyeva/alukas-next.js",
    },
    {
      title: "Timezone",
      description:
        "An elegant watch brand site focused on storytelling and product showcase, built for a sleek user experience.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/eecnjx6co3vq6dru5dicj/2025-04-22-15-31-56.mp4?rlkey=01sdp7cpcppvm87jcrklaldqt&st=tepoi6qr&raw=1",
      about:
        "Built entirely with Next.js and TypeScript, it offers a fast, responsive, and informative experience. Timezone bridges functionality and elegance — just like a great watch should.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind",
        "Formik",
        "Yup",
        "Framer Motion",
      ],
      website: "https://time-zone-rust.vercel.app",
      github: "https://github.com/KhalidaAkhverdiyeva/time-zone",
    },
    {
      title: "Portfolio",
      description:
        "A responsive, modern portfolio website built to showcase my projects, skills and background.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/g3a62s9xjssvv4k217lhv/2025-05-14-21-16-02.mp4?rlkey=evx7v96gvl4pu5puz92bltz5n&st=ifwwtczz&raw=1",
      about:
        "This project reflects my design taste, attention to detail, and ability to build accessible, performant web interfaces.",
      technologies: [
        "Next.js",
        "Typescript",
        "Three.js",
        "Tailwind",
        "Framer Motion",
      ],
      website: "https://portfolio-two-sooty-14.vercel.app/",
      github: "https://github.com/KhalidaAkhverdiyeva/portfolio",
    },

    {
      title: "Woodmart",
      description:
        "A vibrant plant shop website with multiple interactive slideshows and a fresh, nature-inspired design.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/2ngll4pwfmxs0l2jzj16c/2025-04-22-15-50-18.mp4?rlkey=vvxbq4ecm49mnscwyc9rxv2dg&st=gfvobgon&raw=1",
      about:
        " As one of my earliest projects, it was built using HTML, SCSS, and JavaScript, focusing on clean design and a natural aesthetic. The site showcases a variety of indoor plants with a user-friendly layout and subtle animations.",
      technologies: ["HTML", "SCSS", "Javascipt"],
      website: "https://wooody.vercel.app/",
      github: "https://github.com/KhalidaAkhverdiyeva/wooody",
    },
    {
      title: "Techblog",
      description:
        "A React-powered blog site with a clean landing page and dynamic blog rendering.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/nu43kqq7lyuf5njc8u83t/2025-04-22-15-19-48.mp4?rlkey=75o7o73egbmgi0aftitmfjwtx&st=w79ulmld&raw=1",
      about:
        "TechBlog is a minimal and modern blog site built with React and powered by Sanity CMS. It features a clean landing page and a dynamic card layout that pulls content directly from Sanity. TechBlog is a lightweight showcase of content-driven design and headless CMS integration.",
      technologies: ["React", "Tailwind", "Sanity"],
      website: "https://techblooog.vercel.app",
      github: "https://github.com/KhalidaAkhverdiyeva/techblooog-react",
    },
    {
      title: "Homezen",
      description:
        "A modern landing page for a rental service concept — clean, bold, and conversion-focused.",
      videoUrl:
        "https://www.dropbox.com/scl/fi/da3rwf7l1dufi3y5pdmfj/2025-04-22-14-14-52.mp4?rlkey=pummhpgmms66vf31y2x2jg2y2&st=jqzjaf9b&raw=1",
      about:
        "HomeZen is a home rental platform built with HTML, CSS, SCSS, and custom JavaScript. It features fully functional CRUD cards and uses custom APIs to manage property listings. The site focuses on simplicity and usability, allowing users to browse, add, edit, or remove listings with ease. HomeZen is a clean, practical project that highlights hands-on experience with frontend logic and API integration.",
      technologies: ["HTML", "CSS", "SCSS", "Javascript"],
      website: "https://homezen-gold.vercel.app",
      github: "https://github.com/KhalidaAkhverdiyeva/homezen",
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#ECE7E1] font-['ClashDisplay-Bold'] font-[700] text-[24px] mx-[25px] md:mx-0 md:text-[46px] md:mb-10"
        >
          Projects.
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-[20px] justify-center pb-[50px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[20px] m-[10px] md:m-0">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={handleProjectClick}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[20px] m-[10px] md:m-0">
            {projects.slice(4).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index + 3}
                onClick={handleProjectClick}
              />
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
