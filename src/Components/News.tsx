import { InfiniteMovingCardsDemo } from "./moving-cards";
import { TextGenerateEffect } from "../ui/textgenerate";

const Updates = () => {

  const words = ` Updates about US`;
  return (
    <section
      id="who-are-we"
      className="w-full h-auto py-20 bg-white transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-12">
         <TextGenerateEffect words={words}/>
        </h1>

        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-12">
    Stay in zone with our latest launches, events, and exciting milestones!
From new courses to cosmic achievements — there’s always something shining at Rayastra.

        </p>


        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
};

export default Updates;
