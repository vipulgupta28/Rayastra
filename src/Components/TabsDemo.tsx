"use client";

import { Tabs } from "../ui/tabs";
import image1 from "../assets/Traditional.png"
import image2 from "../assets/Creative.png"
import image3 from "../assets/knowledge.png"
import image4 from "../assets/Intelligence.png"
import image5 from "../assets/fun.png"
import image6 from "../assets/information.png";
import image7 from "../assets/Curiosity.png"
import image8 from "../assets/Adventure.png"
import image9 from "../assets/understanding.png"

const TabContent = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => (
  <div className="w-full h-full overflow-hidden relative rounded-2xl">
    <img
      src={imageUrl}
      alt={title}
      className="absolute  w-full h-full object-cover rounded-2xl"
    />
    <div className="absolute  rounded-2xl flex items-start p-10 text-white text-xl md:text-4xl font-bold">
      <p>{title}</p>
    </div>
  </div>
);

export function TabsDemo() {
  const tabs = [
    {
      title: "Traditional",
      value: "Traditional",
      content: (
        <TabContent
          title="Traditional Values"
          imageUrl={image1}
        />
      ),
    },
    {
      title: "Creative",
      value: "Creative",
      content: (
        <TabContent
          title="Creative Thinking"
          imageUrl={image2}
        />
      ),
    },
    {
      title: "Knowledge",
      value: "Knowledge",
      content: (
        <TabContent
          title="Sprinkling Knowledge"
          imageUrl={image3}
        />
      ),
    },
    {
      title: "Intelligence",
      value: "Intelligence",
      content: (
        <TabContent
          title="Intelligence"
          imageUrl={image4}
        />
      ),
    },
    {
      title: "Fun",
      value: "Fun",
      content: (
        <TabContent
          title="Just for Fun"
          imageUrl={image5}
        />
      ),
    },
    {
      title: "Information",
      value: "Information",
      content: (
        <TabContent
          title="Information Zone"
          imageUrl={image6}
        />
      ),
    },
    {
      title: "Curosity",
      value: "Curosity",
      content: (
        <TabContent
          title="Feed Your Curosity"
          imageUrl={image7}
        />
      ),
    },
    {
      title: "Adventure",
      value: "Adventure",
      content: (
        <TabContent
          title="Adventure Awaits"
          imageUrl={image8}
        />
      ),
    },
    {
      title: "Understanding",
      value: "Understanding",
      content: (
        <TabContent
          title="Gain Deeper Understanding"
          imageUrl={image9}
        />
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[30rem] [perspective:500px] relative flex flex-col max-w-5xl mx-auto w-full items-center">
      <Tabs tabs={tabs} />
    </div>
  );
}
