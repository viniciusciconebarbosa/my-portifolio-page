"use client";

import * as Skills1 from "@/components/styled/SkillsSection";
import * as Ui from "@/components/styled/ui";
import * as Layout from "@/components/styled/layout";
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
  SiSpringboot,
  SiJunit5,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiJenkins,
  SiFigma,
  SiOracle
} from "react-icons/si";
import { PiArmchair, PiDeviceMobile, PiFolderUser } from "react-icons/pi";
import { Pi } from "lucide-react";

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
    "Spring-boot": <SiSpringboot />,
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
    "Responsive Design": <PiDeviceMobile />
  };
  return icons[skill] || null;
};

export default function SkillsSection() {
  return (
    <Layout.Section id="skills">
      <Layout.Container>
        <Ui.SectionTitle>Skills & Expertise</Ui.SectionTitle>
        <Skills1.SkillsGrid>
          <Skills1.SkillCard>
            <Skills1.SkillTitle>Frontend Development</Skills1.SkillTitle>
            <Skills1.SkillTags>
              {["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Node.js", "JestJS", "MaterialUI"].map(
                (skill, index) => (
                  <Skills1.SkillTag key={index}>
                    {getIcon(skill)}
                    {skill}
                  </Skills1.SkillTag>
                )
              )}
            </Skills1.SkillTags>
          </Skills1.SkillCard>
          <Skills1.SkillCard>
            <Skills1.SkillTitle>Backend Development</Skills1.SkillTitle>
            <Skills1.SkillTags>
              {[
                "Java",
                "Spring-boot",
                "Node.js",
                "Junit",
                "Mockito",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "REST APIs",
                "GraphQL",
                "JestJS",
              ].map((skill, index) => (
                <Skills1.SkillTag key={index}>
                  {getIcon(skill)}
                  {skill}
                </Skills1.SkillTag>
              ))}
            </Skills1.SkillTags>
          </Skills1.SkillCard>
          <Skills1.SkillCard>
            <Skills1.SkillTitle>Tools & Others</Skills1.SkillTitle>
            <Skills1.SkillTags>
              {[
                "Git",
                "Oracle",
                "Docker",
                "AWS",
                "CI/CD",
                "Figma",
                
                "Responsive Design",
              ].map((skill, index) => (
                <Skills1.SkillTag key={index}>
                  {getIcon(skill)}
                  {skill}
                </Skills1.SkillTag>
              ))}
            </Skills1.SkillTags>
          </Skills1.SkillCard>
        </Skills1.SkillsGrid>
      </Layout.Container>
    </Layout.Section>
  );
}
