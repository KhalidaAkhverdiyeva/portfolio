import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import React from "react";

export default async function Work() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Navbar />
      <Projects />
    </div>
  );
}
