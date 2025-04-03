/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./car.css";

const items = [
  {
    id: 1,
    title: "BSCI",
    src: "/about/logo1.jpg",
    alt: "First Image",
    description:
      "BSCI არის სერტიფიკატი, რომელიც ადასტურებს ბიზნეს ეთიკის, სამუშაო პირობების და სოციალური პასუხისმგებლობის პრინციპების დაცვას.",
  },
  {
    id: 2,
    title: "RCS",
    src: "/about/logo2.jpg",
    alt: "Second Image",
    description:
      "RCS არის სერტიფიკატი, რომელიც ადასტურებს, რომ პროდუქტები დამზადებულია გადამუშავებული მასალებისგან. ეს ადასტურებს ეკოლოგიურად სუფთა და მდგრადი წარმოების გაგებას.",
  },
  {
    id: 3,
    title: "CERTİPUR",
    src: "/about/logo3.jpg",
    alt: "Third Image",
    description:
      "Sertipur არის ხარისხის სტანდარტი, რომელიც ადასტურებს, რომ საწოლებისა და ავეჯის წარმოებაში გამოყენებული პოლიურეთანის ქაფი არის ჯანსაღი, ეკოლოგიურად სუფთა და უსაფრთხო.",
  },
  {
    id: 4,
    title: "ISO9001",
    src: "/about/logo4.jpg",
    alt: "Fourth Image",
    description:
      "ISO 9001 არის ხარისხის მართვის სისტემის საერთაშორისო სტანდარტი, რომელიც ორიენტირებულია პროდუქციისა და მომსახურების ხარისხის გაუმჯობესებაზე.",
  },
  {
    id: 5,
    title: "ISO14001",
    src: "/about/logo5.jpg",
    alt: "Fifth Image",
    description:
      "ISO 14001 არის სტანდარტი, რომელიც ადასტურებს გარემოსდაცვითი მართვის სისტემებს. ის უზრუნველყოფს გარემოზე ზემოქმედების კონტროლს და ბუნებრივი რესურსების დაცვას.",
  },
  {
    id: 6,
    title: "ISO45000",
    src: "/about/logo6.jpg",
    alt: "Sixth Image",
    description:
      "ISO 45001 არის შრომის ჯანმრთელობისა და უსაფრთხოების საერთაშორისო სტანდარტი. ის მიზნად ისახავს უსაფრთხო სამუშაო გარემოს, პროფესიული ავარიების პრევენციას და თანამშრომელთა კეთილდღეობას.",
  },
  {
    id: 7,
    title: "GRS Nedir",
    src: "/about/logo7.jpg",
    alt: "Seventh Image",
    description:
      "GRS (გლობალური რეციკლირებული სტანდარტი) არის საერთაშორისო სერტიფიკატი, რომელიც ამოწმებს გადამუშავებული მასალების შინაარსს და მათ შესაბამისობას ეკოლოგიურ და სოციალურ სტანდარტებთან.",
  },
  {
    id: 8,
    title: "OEKOTEX",
    src: "/about/logo8.jpg",
    alt: "Eighth Image",
    description:
      "OEKO-TEX არის საერთაშორისო სერთიფიკატი, რომელიც ადასტურებს, რომ ტექსტილის პროდუქტები არ შეიცავს მავნე ქიმიურ ნივთიერებებს.",
  },
];

function Carousel() {
  return (
    <section className="mb-10 mt-5">
      {/* Header Section */}
      <div className="flex flex-col text-center items-center">
        <h2 className="mt-5 text-xl lg:text-[25px] leading-tight text-center mb-4 font-semibold">
          სერთიფიკატები
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
        ჩვენი ბრენდის ფარგლებში წარმოებული ყველა პროდუქტი შეესაბამება საერთაშორისო ხარისხისა და ჯანდაცვის
        სტანდარტებს, რომლებიც მკაცრად კონტროლდება მსოფლიოს სხვადასხვა რეგიონის მიხედვით.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 place-items-center">
        {items.map((i) => (
          <div key={i.id} className="flex cursor-pointer flex-col items-center">
            <div className="imageeffect">
              <div className="box">
                <div className="imgBox">
                  <img
                    src={i.src}
                    alt={i.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="content text-center p-4">
                  <h2 className="font-semibold text-lg">{i.title}</h2>
                  <p className="text-[16px] lg:text-[18px]">{i.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
