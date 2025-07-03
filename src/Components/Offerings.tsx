import { TabsDemo } from "./TabsDemo";
import { TextGenerateEffect } from "../ui/textgenerate";

export default function Offerings() {

  const words = `Our Offerings`
  return (
    <section
      id="offerings"
      className="w-full py-20 bg-white  transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black drop-shadow-sm">
          <TextGenerateEffect words={words} />
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-12">
         Rayastra offers a galaxy to your child to explore the possibilities, stars to choose the path from, and a mentor to guide you on each constellation.
        </p>

        {/* Tabs component */}
        <div className="rounded-3xl h-[45rem] shadow-xl border-4  bg-white dark:bg-zinc-900 p-4 md:p-8">
          <TabsDemo />
        </div>
      </div>
    </section>
  );
}
