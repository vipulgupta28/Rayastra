"use client";
import { PinContainer } from "../ui/3d";
import image from "../assets/WhatsApp Image 2025-05-23 at 14.42.55_5ced65af.jpg"

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Phone: +91 8840972644
         Email: tanishqadwivedi7@gmail.com"
        href=""
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[30rem] ">
          <h3 className=" !pb-2 !m-0 font-bold items-center text-base text-slate-100">
           Tanishqa Dwivedi
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Founder and CEO of Rayastra
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <img src={image} alt=""
            className="h-100 w-120" 
            />
            </div>
        </div>
      </PinContainer>
    </div>
  );
}
