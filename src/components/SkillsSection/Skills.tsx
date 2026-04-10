"use client";

import * as Skills1 from "@/components/SkillsSection";
import * as Ui from "@/components/ui";
import * as Layout from "@/components/layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiNodedotjs,
  SiJest,
  SiMui,
  SiOpenjdk,
  SiGithub,
  SiSpring,
  SiJunit5,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiGraphql,
  SiCloudflare,
  SiGit,
  SiDocker,
  SiAmazon,
  SiTailwindcss,
  SiFigma,
  SiOracle
} from "react-icons/si";
import { PiDeviceMobile } from "react-icons/pi";

const getIcon = (skill: string) => {
  const icons: { [key: string]: JSX.Element } = {
    "React": <SiReact />,
    "Next.js": <SiNextdotjs />,
    "TypeScript": <SiTypescript />,
    "JavaScript": <SiJavascript />,
    "Angular": <SiAngular />,
    "Node.js": <SiNodedotjs />,
    "JestJS": <SiJest />,
    "MaterialUI": <SiMui />,
    "Github": <SiGithub />,
    "Java": <SiOpenjdk />,
    "Spring": <SiSpring />,
    "Junit": <SiJunit5 />,
    "Express": <SiExpress />,
    "MongoDB": <SiMongodb />,
    "PostgreSQL": <SiPostgresql />,
    "GraphQL": <SiGraphql />,
    "Git": <SiGit />,
    "Docker": <SiDocker />,
    "AWS": <SiAmazon />,
    "CI/CD": <SiGithub />,
    "Figma": <SiFigma />,
    "Oracle": <SiOracle />,
    "Responsive Design": <PiDeviceMobile />,
    "Tailwind CSS": <SiTailwindcss />,
    "NestJS": <SiNestjs />,
    "Cloudflare": <SiCloudflare />,
    
  };
  return icons[skill] || null;
};

const getSkillUrl = (skill: string) => {
  const urls: { [key: string]: string } = {
    "React": "https://react.dev",
    "Next.js": "https://nextjs.org",
    "TypeScript": "https://www.typescriptlang.org",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Angular": "https://angular.dev",
    "Node.js": "https://nodejs.org",
    "JestJS": "https://jestjs.io",
    "Tailwind CSS": "https://tailwindcss.com",
    "Java": "https://www.java.com",
    "Spring": "https://spring.io",
    "Junit": "https://junit.org/junit5",
    "NestJS": "https://nestjs.com",
    "Mockito": "https://site.mockito.org",
    "Express": "https://expressjs.com",
    "MongoDB": "https://www.mongodb.com",
    "PostgreSQL": "https://www.postgresql.org",
    "REST APIs": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    "GraphQL": "https://graphql.org",
    "Git": "https://git-scm.com",
    "Github": "https://github.com",
    "Oracle": "https://www.oracle.com/database",
    "Docker": "https://www.docker.com",
    "Cloudflare": "https://www.cloudflare.com",
    "AWS": "https://aws.amazon.com",
    "CI/CD": "https://github.com/features/actions",
    "Figma": "https://www.figma.com",
    "Responsive Design": "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
    "MaterialUI": "https://mui.com",
  };
  return urls[skill] || "#";
};

export default function SkillsSection() {
  return (
    <Layout.Section id="skills">
      <Layout.Container>
        <AnimatedSection>
          <Ui.SectionTitle>Skills & Expertise</Ui.SectionTitle>
        </AnimatedSection>
        <Skills1.SkillsGrid>
          <AnimatedSection delay={0.1}>
            <Skills1.SkillCard>
              <Skills1.SkillTitle>Frontend Development</Skills1.SkillTitle>
              <Skills1.SkillTags>
                {["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Node.js", "JestJS", "Tailwind CSS"].map(
                  (skill, index) => (
                    <a key={index} href={getSkillUrl(skill)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Skills1.SkillTag>
                        {getIcon(skill)}
                        {skill}
                      </Skills1.SkillTag>
                    </a>
                  )
                )}
              </Skills1.SkillTags>
            </Skills1.SkillCard>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Skills1.SkillCard>
              <Skills1.SkillTitle>Backend Development</Skills1.SkillTitle>
              <Skills1.SkillTags>
                {[
                  "Java",
                  "Spring",
                  "Node.js",
                  "Junit",
                  "NestJS",
                  "Mockito",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "REST APIs",
                  "GraphQL",
                  "JestJS",
                ].map((skill, index) => (
                  <a key={index} href={getSkillUrl(skill)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Skills1.SkillTag>
                      {getIcon(skill)}
                      {skill}
                    </Skills1.SkillTag>
                  </a>
                ))}
              </Skills1.SkillTags>
            </Skills1.SkillCard>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Skills1.SkillCard>
              <Skills1.SkillTitle>Tools & Others</Skills1.SkillTitle>
              <Skills1.SkillTags>
                {[
                  "Git",
                  "Oracle",
                  "Docker",
                  "Cloudflare",
                  "AWS",
                  "CI/CD",
                  "Figma",
                  "Responsive Design",
                ].map((skill, index) => (
                  <a key={index} href={getSkillUrl(skill)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Skills1.SkillTag>
                      {getIcon(skill)}
                      {skill}
                    </Skills1.SkillTag>
                  </a>
                ))}
              </Skills1.SkillTags>
            </Skills1.SkillCard>
          </AnimatedSection>
        </Skills1.SkillsGrid>
      </Layout.Container>
    </Layout.Section>
  );
}
