"use client";

import React, { useState } from "react";
import { TagModal } from "../tag modal";

type FloatingTagProps = {
  label: string;
  info: string;
  position: { top: number; left: number; rotate: number };
};

export const FloatingTag: React.FC<FloatingTagProps> = ({ label, info, position }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="absolute px-4 py-2 rounded-full border text-sm cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: "#d4ff00",
          borderColor: "#d4ff00",
          color: "#111",
          top: position.top,
          left: position.left,
          transform: `rotate(${position.rotate}deg)`,
          zIndex: 10,
        }}
        onClick={() => setShowModal(true)}
      >
        {label}
      </div>

      {showModal && (
        <div
          style={{
            position: "absolute",
            top: position.top + 60,
            left: position.left,
            zIndex: 1000,
          }}
        >
          <TagModal content={info} onClose={() => setShowModal(false)} />
        </div>
      )}
    </>
  );
};
