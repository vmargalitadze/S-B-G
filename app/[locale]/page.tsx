
import Contact from "@/components/Contact/Contact";

import Info from "@/components/Info/Info";
import Products from "@/components/Products/Products";
import Video from "./why/Video";

import Hero from "@/components/Hero/Hero";
import Text from "@/components/WaweText/Text";


export default function Home() {
  return (
   <>
   
   <div className="w-full   bg-[#EBEBEB]">
    <Hero />

<div className="flex rounded-lg text-white container bg-[#052C46] mt-10 lg:mt-32   py-10">

   <Info />
</div>
   <Products />
   <div className="flex rounded-lg container bg-[#052C46] mt-10   py-10">

   <Video />
   </div>
    <Contact />

    <Text />
   </div>
   </>
  );
}
