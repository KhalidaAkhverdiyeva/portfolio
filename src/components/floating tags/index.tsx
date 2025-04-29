"use client";

import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

type FloatingTagProps = {
  label: string;
  info: string;
  position: {
    bottom: number;
    left: number;
    rotate: number;
    mobileBottom?: number;
    mobileLeft?: number;
  };
};

export const FloatingTag: React.FC<FloatingTagProps> = ({
  label,
  info,
  position,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bottom =
    isMobile && position.mobileBottom !== undefined
      ? position.mobileBottom
      : position.bottom;

  const left =
    isMobile && position.mobileLeft !== undefined
      ? position.mobileLeft
      : position.left;

  return (
    <>
      <div
        className="absolute whitespace-nowrap font-['ClashDisplay-Bold'] px-4 py-2 rounded-[30px] border-[2px] text-[22px] cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: "#d4ff00",
          borderColor: "#d4ff00",
          color: "#111",
          bottom,
          left,
          transform: `rotate(${position.rotate}deg)`,
          zIndex: 10,
        }}
        onClick={() => setShowModal(true)}
      >
        {label}
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="tag-modal-title"
        aria-describedby="tag-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#d4ff00",
            border: "2px solid black",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            color: "#111",
            width: 300,
          }}
        >
          <h2 id="tag-modal-title" className="text-lg font-bold mb-2">
            {label}
          </h2>
          <p id="tag-modal-description">{info}</p>
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 text-sm underline"
          >
            Close
          </button>
        </Box>
      </Modal>
    </>
  );
};
