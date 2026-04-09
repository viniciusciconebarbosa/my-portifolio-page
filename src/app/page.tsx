"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import * as Layout from "@/components/layout";
import SkillsSection from "@/components/SkillsSection/Skills";


export default function Portfolio() {
  return (
    <>
      <Header />
      <Layout.Main>
        <Hero />
        <Layout.Container>
          <SkillsSection />
          <Projects />
          <About />
          <Contact />
        </Layout.Container>
      </Layout.Main>
      <Footer />
    </>
  );
}
