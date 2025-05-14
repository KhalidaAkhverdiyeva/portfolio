"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Typography } from "@mui/material";
import { LuCircleArrowLeft, LuSquareArrowOutUpRight } from "react-icons/lu";
import Project from "@/types";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  projectData: Project | null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tagVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SwipeableTemporaryDrawer({
  open,
  onClose,
  projectData,
}: DrawerProps) {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "500px" },
          backgroundColor: "#020202",
          color: "#ECE7E1",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          overflowY: "auto",
          height: "calc(100vh - 80px)",
          pb: "80px",
        }}
      >
        {/* Back Button */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#D1FD0A",
              fontFamily: "'ClashDisplay-Bold', sans-serif",
              fontSize: "24px",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <LuCircleArrowLeft />
          </button>
        </Box>

        {projectData && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#ECE7E1",
                  fontSize: "24px",
                  fontFamily: "'ClashDisplay-Bold', sans-serif",
                  fontWeight: 700,
                }}
              >
                {projectData.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Satoshi-Regular', sans-serif",
                  fontSize: "14px",
                  my: "10px",
                  color: "#ECE7E1",
                }}
              >
                {projectData.description}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <video
                className="w-[480px] h-[300px] object-cover rounded-[10px] my-4 bg-gray-300"
                autoPlay
                muted
                loop
                playsInline
                src={projectData.videoUrl}
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    fontFamily: "'ClashDisplay-Bold', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#ECE7E1",
                  }}
                >
                  About
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Satoshi-Regular', sans-serif",
                    fontSize: "14px",
                    color: "#ECE7E1",
                  }}
                >
                  {projectData.about}
                </Typography>
              </motion.div>

              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    fontFamily: "'ClashDisplay-Bold', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    my: "10px",
                    color: "#ECE7E1",
                  }}
                >
                  Technologies
                </Typography>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {projectData.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={tagVariants}
                      className="px-3 py-2 text-xs bg-[#1a1b15] text-white rounded-[10px]"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    fontFamily: "'ClashDisplay-Bold', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    mt: "20px",
                    mb: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#ECE7E1",
                  }}
                >
                  <FaGlobeAmericas />
                  Website
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Satoshi-Regular', sans-serif",
                    fontSize: "14px",
                    "& a": {
                      textDecoration: "underline",
                      color: "white",
                      transition: "color 0.3s ease",
                    },
                    "& a:hover": {
                      color: "grey",
                    },
                  }}
                >
                  <a
                    href={projectData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData.website}
                  </a>
                </Typography>
              </motion.div>

              <motion.div variants={textVariants}>
                <Typography
                  sx={{
                    fontFamily: "'ClashDisplay-Bold', sans-serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    my: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#ECE7E1",
                  }}
                >
                  <FaGithub /> Github
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Satoshi-Regular', sans-serif",
                    fontSize: "14px",
                    "& a": {
                      textDecoration: "underline",
                      color: "#ECE7E1",
                      transition: "color 0.3s ease",
                    },
                    "& a:hover": {
                      color: "grey",
                    },
                  }}
                >
                  <a
                    href={projectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData.github}
                  </a>
                </Typography>
              </motion.div>
            </motion.div>
          </>
        )}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#D1FD0A",
          color: "#020202",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          component="a"
          href={projectData?.website}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: "'ClashDisplay-Bold', sans-serif",
            fontSize: "16px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            color: "#020202",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Open Project <LuSquareArrowOutUpRight className="font-[700]" />
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
}
