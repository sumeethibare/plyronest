"use client";

import { Base } from "./universal/Base";
import Navbar from "./universal/Navbar";
import { animatePageIn } from "./utils/animations";
import { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="h-screen bg-black z-10 fixed top-0 right-0 w-1/4"
      />
      <div
        id="banner-2"
        className="h-screen bg-black z-10 fixed top-0 right-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="h-screen bg-black z-10 fixed top-0 right-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="h-screen bg-black z-10 fixed top-0 right-3/4 w-1/4"
      />
      <Navbar />
      {children}
      <Base />
    </div>
  );
}
