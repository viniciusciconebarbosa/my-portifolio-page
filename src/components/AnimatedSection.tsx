"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

const directionMap = {
  up: { x: 0, y: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

const AnimatedSection = ({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: AnimatedSectionProps) => {
  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier — suave e premium
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
