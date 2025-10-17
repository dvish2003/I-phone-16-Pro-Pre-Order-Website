'use client';
import React from "react";
import Home from "./home/page";
import Feature from "./features/page";
import Specs from "./technicalSpecification/page";
import Gallery from "./gallery/page";
import AppleSlug from "@/components/AppleSlug";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen font-sans bg-black text-white overflow-x-hidden">

      <main className="pt-20 lg:pt-24">
        <section id="home">
          <Home />
        </section>

        <section id="feature" className="pt-20 lg:pt-24">
          <Feature />
        </section>

        <section id="specs" className="pt-20 lg:pt-24">
          <Specs />
        </section>

        <section id="gallery" className="pt-20 lg:pt-24">
          <Gallery />
        </section>

        <section id="apple-slug" className="pt-20 lg:pt-24">
          <AppleSlug />
        </section>
      </main>
      <Footer />
    </div>
  );
}
