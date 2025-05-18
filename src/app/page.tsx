"use client";

import Header from "@/components/styled/Header/Header";
import Hero from "@/components/styled/Hero/Hero";
import About from "@/components/styled/About/About";
import Projects from "@/components/styled/Projects/Projects";
import Contact from "@/components/styled/Contact/Contact";
import Footer from "@/components/styled/Footer/Footer";
import * as Layout from "@/components/styled/layout";
import SkillsSection from "@/components/styled/SkillsSection/Skills";


export default function Portfolio() {
  return (
    <>
      <Header/>
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
