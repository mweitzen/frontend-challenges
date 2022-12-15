import React from "react";

const NumberButton = ({
  number,
  selected,
  setSelected,
}: {
  number: number;
  selected: number | null;
  setSelected: (number: number) => void;
}) => {
  return (
    <button
      className={`${
        selected === number ? "bg-[rgb(126,135,151)] text-white" : "bg-card"
      } w-12 h-12 rounded-full grid place-content-center hover:bg-primary hover:text-white`}
      onClick={() => setSelected(number)}
    >
      {number}
    </button>
  );
};

export default NumberButton;
