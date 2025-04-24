"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button, Typography } from "@mui/material";
import { LuCircleArrowLeft, LuSquareArrowOutUpRight } from "react-icons/lu";
import Project from "@/types";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  projectData: Project | null;
}

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
          flexDirection: "column", // Ensure content is stacked vertically
        },
      }}
    >
      <Box
        sx={{ p: 4, overflowY: "auto", height: "calc(100vh-80px)", pb: "80px" }}
      >
        {/* Back Button */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#D1FD0A",
              fontFamily: "'ClashDisplay', sans-serif",
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
            <Typography
              variant="h4"
              sx={{
                color: "#ECE7E1",
                fontSize: "24px",
                fontFamily: "'ClashDisplay', sans-serif",
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

            <video
              className="w-[480px] h-[300px] object-cover rounded-[10px] my-4 bg-gray-300"
              autoPlay
              muted
              loop
              playsInline
              src={projectData.videoUrl}
            />
            <Typography
              sx={{
                fontFamily: "'ClashDisplay', sans-serif",
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

            <Typography
              sx={{
                fontFamily: "'ClashDisplay', sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                my: "10px",
                color: "#ECE7E1",
              }}
            >
              Technologies
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Satoshi-Regular', sans-serif",
                fontSize: "14px",
              }}
            >
              {projectData.technologies.map((tech, index) => (
                <Button
                  key={index}
                  sx={{
                    padding: "4px", // Adjust button size
                    fontSize: "12px", // Optional: Set font size for buttons
                    color: "white", // Set text color to black
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Set a semi-transparent white background
                    backdropFilter: "blur(5px)", // Apply blur effect to the background
                    borderRadius: "8px", // Optional: round corners for a smoother look
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly increase transparency on hover
                    },
                    marginRight: "8px", // Add some space between buttons
                    textTransform: "none", // Prevent uppercase transformation
                    border: "1px solid rgba(255, 255, 255, 0.3)", // Optional: add border for more definition
                  }}
                >
                  {tech}
                </Button>
              ))}
            </Typography>

            <Typography
              sx={{
                fontFamily: "'ClashDisplay', sans-serif",
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
                  textDecoration: "underline", // Adds an underline to the links
                  color: "white", // Link color (can be changed)
                  transition: "color 0.3s ease", // Smooth transition for color change on hover
                },
                "& a:hover": {
                  color: "grey", // Change color on hover
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

            <Typography
              sx={{
                fontFamily: "'ClashDisplay', sans-serif",
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
          </>
        )}
      </Box>

      {/* Fixed Bottom Bar */}
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
            fontFamily: "'ClashDisplay', sans-serif",
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
