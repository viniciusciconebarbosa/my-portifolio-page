"use client";

import * as Skills1 from "@/components/styled/SkillsSection";
import * as Ui from "@/components/styled/ui";
import * as Layout from "@/components/styled/layout";

export default function SkillsSection() {
  return (
    <Layout.Section id="skills">
      <Layout.Container>
        <Ui.SectionTitle>Skills & Expertise</Ui.SectionTitle>
        <Skills1.SkillsGrid>
          <Skills1.SkillCard>
            <Skills1.SkillTitle>Frontend Development</Skills1.SkillTitle>
            <Skills1.SkillTags>
              {["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript"].map(
                (skill, index) => (
                  <Skills1.SkillTag key={index}>{skill}</Skills1.SkillTag>
                )
              )}
            </Skills1.SkillTags>
          </Skills1.SkillCard>
          <Skills1.SkillCard>
            <Skills1.SkillTitle>Backend Development</Skills1.SkillTitle>
            <Skills1.SkillTags>
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "REST APIs",
                "GraphQL",
              ].map((skill, index) => (
                <Skills1.SkillTag key={index}>{skill}</Skills1.SkillTag>
              ))}
            </Skills1.SkillTags>
          </Skills1.SkillCard>
          <Skills1.SkillCard>
            <Skills1.SkillTitle>Tools & Others</Skills1.SkillTitle>
            <Skills1.SkillTags>
              {[
                "Git",
                "Docker",
                "AWS",
                "CI/CD",
                "Figma",
                "Responsive Design",
              ].map((skill, index) => (
                <Skills1.SkillTag key={index}>{skill}</Skills1.SkillTag>
              ))}
            </Skills1.SkillTags>
          </Skills1.SkillCard>
        </Skills1.SkillsGrid>
      </Layout.Container>
    </Layout.Section>
  );
}
