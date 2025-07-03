import { BackgroundBoxesDemo } from "./background-boxes";


export default function Footer() {
  return (
    <section
      id="who-are-we"
      className="w-full h-auto flex  items-center justify-end bg-gradient-to-b from-yellow-50 via-rose-50 to-sky-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 transition-colors"
    >
      <div className="w-full">
        <BackgroundBoxesDemo />
        
      </div>
    </section>
  );
}
