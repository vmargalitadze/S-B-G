import React from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ["ყველა", "ბალიში", "მატრასი", "საბანი", "ტოპერი"];

const Filter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="pt-[70px] pb-[70px]">
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => {
           
            const isActive =
              selectedCategory === category || (category === "ყველა" && selectedCategory === "");

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === "ყველა" ? "" : category)}
                className={`outline-none rounded-lg cursor-pointer transition-all duration-150 ease-in-out border border-solid border-black px-4 py-2 sm:px-6 sm:py-3 text-[14px] sm:text-[18px] uppercase focus:outline-none hover:bg-[#052C46] hover:text-white ${
                  isActive ? "bg-[#052C46] text-white" : "text-black"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
