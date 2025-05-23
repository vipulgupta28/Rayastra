import { InfiniteMovingCardsDemo } from "./moving-cards";

const Updates = () => {
  return (
    <section
      id="who-are-we"
      className="w-full h-auto py-20 bg-gradient-to-b from-yellow-50 via-rose-50 to-sky-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-zinc-900 dark:text-white text-4xl md:text-6xl font-bold mb-12">
          Updates about US
        </h1>
        <InfiniteMovingCardsDemo />
      </div>
    </section>
  );
};

export default Updates;
