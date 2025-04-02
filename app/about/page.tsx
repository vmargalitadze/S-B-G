import React from "react";
import "./about.css";
import image from "@/public/about/sleepandbed.svg";
import Image from "next/image";
import bg2 from "@/public/about/Sleep-Bed.jpg";
import Carousel from "./Carousel";

function Page() {
  return (
    <>
      <section className="w-full mx-auto max-w-[1440px]">
        <div className="allcontainer">
          <div className="flex h-[50vh] items-center flex-wrap bg-overlay sm:p-6 before:bg-title before:bg-opacity-70 aboutbg">
            <div className="text-center z-50 w-full">
              <h2 className="text-white text-[25px] md:text-[50px] font-normal text-center">
                პროდუქტები
              </h2>
              <p className="max-w-[672px] text-white mx-auto lg:text-xl">
                თქვენი კომფორტი ჩვენი პრიორიტეტია
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white allcontainer">
          <div className="container pt-12 lg:pt-16 lg:!pb-16 mx-auto">
            <div className="py-10 px-4">
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <Image
                    src={image}
                    alt="About Us"
                    className="w-full max-w-[250px] lg:max-w-[350px] h-auto object-cover rounded-lg"
                  />
                  <p className="mt-5 text-xl lg:text-[30px] leading-tight text-center mb-4 font-semibold">
                    საუკეთესო ძილი ყველასთვის
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <p className="text-lg text-center leading-relaxed md:text-left">
                  ჩვენ გთავაზობთ მაღალი ხარისხის, ეკოლოგიურად სუფთა ძილის პროდუქტებს, 
                  რომლებიც შექმნილია უახლესი ტექნოლოგიით. ჩვენი ვალდებულება სცილდება 
                  მხოლოდ პროდუქტებს - ჩვენ გთავაზობთ საიმედოობას, კომფორტს და ინოვაციებს 
                  ძილის ხარისხის გასაუმჯობესებლად მთელ მსოფლიოში.
                  </p>
                </div>
              </div>
            </div>

            <section className="py-14 rounded-lg bg-[#052C46] text-white lg:py-24 relative">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                  <div className="img-box">
                    <Image src={bg2} alt="About Us tailwind page" className="max-lg:mx-auto rounded-lg object-cover" />
                  </div>
                  <div className="lg:pl-[100px] flex items-center">
                    <div className="data w-full">
                      <h2 className="text-xl lg:text-[30px] leading-tight text-center mb-4 font-semibold">
                        ჩვენი ისტორია
                      </h2>
                      <p className="text-lg leading-8  text-center max-w-2xl mx-auto">
                      2011 წელს, Mitsan Group-ის კომპანიის სახით და Vizyon Mattress-ის სახელით დაარსებული Sleep&Bed, დღემდე სწრაფად მზარდი ბრენდის სახით განაგრძობს განვითარებას და 4 კონტინენტზე, 25-ზე მეტ ქვეყანაში, ასობით სარეალიზაციო წერტილთან და რამდენიმე ათეული მაღაზიით ერთვის. ჩვენი წარმატება განპირობებულია შიდა წარმოების მაღალი ხარისხის სპონჯებისა და ფელტების წარმოებით, 
                      სწრაფი წარმოების ციკლებით ინტეგრირებული ფაბრიკების მეშვეობით და ძლიერი, ორიგინალური პროდუქტის კოლექციით.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="mx-auto">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
