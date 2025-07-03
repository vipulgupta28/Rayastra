"use client";

import { InfiniteMovingCards } from "../ui/moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={updates}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const updates = [
  {
    quote:
      "🚀 New coding bootcamp for kids aged 10–14 is now live! Start building your first website in just 7 days.",
    name: "Team Learnify",
    title: "Course Launch",
  },
  {
    quote:
      "🎨 Art & Creativity Week begins this Monday! Explore color theory, storytelling, and more with our expert mentors.",
    name: "Creative Minds Club",
    title: "Event Announcement",
  },
  {
    quote:
      "💡 92% of students improved their logic-building skills after completing our beginner-friendly Python course!",
    name: "EdTech Research Team",
    title: "Impact Report",
  },
  {
    quote:
      "🏆 Congratulations to all participants of the National Kids Hackathon 2025! Certificates have been sent via email.",
    name: "Hackathon Organizers",
    title: "Results Update",
  },
  {
    quote:
      "🌟 Introducing AI for Kids – a brand-new course designed to make machine learning fun and simple for young minds.",
    name: "AI Explorers",
    title: "New Course Alert",
  },
];
