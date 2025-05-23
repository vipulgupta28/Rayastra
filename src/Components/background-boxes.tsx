"use client";
import { Boxes } from "../ui/background-boxes";


export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <footer className="w-full z-100 mt-10 text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-4xl text-white font-bold">RAYASTRA</h2>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-sky-400 transition">Home</a>
          <a href="#" className="hover:text-sky-400 transition">About</a>
          <a href="#" className="hover:text-sky-400 transition">Contact</a>
        </div>
      </footer>
    </div>
  );
}
