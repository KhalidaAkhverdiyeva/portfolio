import React from "react";

type TagModalProps = {
  content: string;
  onClose: () => void;
};

export const TagModal: React.FC<TagModalProps> = ({ content, onClose }) => {
  return (
    <div className="absolute z-50 bg-[#d4ff00] text-black text-sm p-4 rounded-xl border border-black shadow-md">
      <p>{content}</p>
      <button onClick={onClose} className="mt-2 text-xs underline">
        Close
      </button>
    </div>
  );
};
