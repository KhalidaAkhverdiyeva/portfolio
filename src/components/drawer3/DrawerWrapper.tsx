"use client";

import dynamic from "next/dynamic";

const Drawer = dynamic(() => import("./index"), { ssr: false });

export default function DrawerWrapper() {
  return <Drawer />;
}
