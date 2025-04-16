
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Products from "@/components/Products/Products";
import Video from "./why/Video";



export default function Home() {
  return (
   <>
   
   <div className="w-full  mx-auto bg-[#EBEBEB]">

   <Hero />
 
   <Info />
   <div className="flex rounded-lg container bg-[#052C46] mt-10  j py-10">

   <Video />
   </div>
   <Products />
    <Contact />
   </div>
   </>
  );
}
