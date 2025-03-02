"use client";

import Header from "@/src/components/styled/Header/Header";
import Hero from "@/src/components/styled/Hero/Hero";
import About from "@/src/components/styled/About/About";
import Projects from "@/src/components/styled/Projects/Projects";
import Contact from "@/src/components/styled/Contact/Contact";
import Footer from "@/src/components/styled/Footer/Footer";
import * as Layout from "@/src/components/styled/layout";
import SkillsSection from "@/src/components/styled/SkillsSection/Skills";

export default function Portfolio() {
  return (
    <>
      <Header />
      <Layout.Main>
        <Layout.Container>
          <Hero />
          <About />
          <Projects />
          <SkillsSection />
          <Contact />
        </Layout.Container>
      </Layout.Main>
      <Footer />
    </>
  );
}