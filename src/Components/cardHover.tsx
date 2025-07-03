import { HoverEffect } from "../ui/card-hover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "School Curriculum",
    description:
      "A comprehensive learning path aligned with standard school subjects, designed to enhance foundational knowledge across all major disciplines.",
  },
  {
    title: "School Curriculum + Coding",
    description:
      "An integrated program combining school academics with beginner to advanced programming, ideal for students aiming to excel in both academics and tech.",
  },
  {
    title: "Only Coding",
    description:
      "A focused coding curriculum covering languages, data structures, algorithms, and hands-on projects to build strong programming skills.",
  },
  {
    title: "Moral Values + Art",
    description:
      "A creative and ethical education initiative that nurtures artistic skills while instilling strong moral values and character development.",
  },
  {
    title: "AI + ML",
    description:
      "An advanced track introducing students to Artificial Intelligence and Machine Learning with real-world applications and hands-on experience.",
  },
  {
    title: "Early FAANG Preparation",
    description:
      "A preparatory program tailored for early-stage learners aspiring for careers at top tech companies like FAANG, focusing on problem-solving, system design, and CS fundamentals.",
  },
];
