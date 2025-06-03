"use client";

import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Traditional",
      value: "product",
      content: (
        <TabContent title="Our Product">
          <DummyContent />
        </TabContent>
      ),
    },
    {
      title: "Creative",
      value: "services",
      content: (
        <TabContent title="What We Offer">
          <DummyContent />
        </TabContent>
      ),
    },
    {
      title: "Knowledge",
      value: "playground",
      content: (
        <TabContent title="Innovation Playground">
          <DummyContent />
        </TabContent>
      ),
    },
    {
      title: "Intelligence",
      value: "content",
      content: (
        <TabContent title="Our Content Strategy">
          <DummyContent />
        </TabContent>
      ),
    },
    {
      title: "Fun",
      value: "random",
      content: (
        <TabContent title="Just for Fun">
          <DummyContent />
        </TabContent>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[30rem] [perspective:500px] relative flex flex-col max-w-5xl mx-auto w-full items-center ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    <p className="mb-6">{title}</p>
    {children}
  </div>
);

const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
