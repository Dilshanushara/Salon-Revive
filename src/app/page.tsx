import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Salon Revive",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cook />
      <Expert />
      <Gallery />
    </main>
  );
}
