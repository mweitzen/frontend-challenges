import { useState } from "react";
import NumberButton from "./NumberButton";
import StarIcon from "./StarIcon";
import ThankYouIllustration from "./ThankYouIllustration";

const InteractiveRating = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-card-gradient p-8 max-w-sm text-muted rounded-3xl">
      {!submitted ? (
        <div className="grid gap-6">
          <div className="bg-card w-12 h-12 rounded-full grid place-content-center">
            <StarIcon />
          </div>

          <h2 className="text-default text-2xl">
            <span
              className={"rating selected" ? "text-[rgb(203,209,231)]" : ""}
            >
              How
            </span>{" "}
            did we do?
          </h2>

          <p className="text-[15px]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="flex justify-between my-4">
            <NumberButton
              number={1}
              selected={selected}
              setSelected={setSelected}
            />
            <NumberButton
              number={2}
              selected={selected}
              setSelected={setSelected}
            />
            <NumberButton
              number={3}
              selected={selected}
              setSelected={setSelected}
            />
            <NumberButton
              number={4}
              selected={selected}
              setSelected={setSelected}
            />
            <NumberButton
              number={5}
              selected={selected}
              setSelected={setSelected}
            />
          </div>

          <button
            className="bg-primary disabled:bg-neutral disabled:text-inherit disabled:cursor-default hover:text-primary hover:bg-white text-[15px] text-white rounded-3xl py-3 uppercase tracking-[3px] font-bold"
            onClick={() => setSubmitted(true)}
            disabled={!selected}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 text-center items-center py-4">
          <ThankYouIllustration />

          <div className="bg-card rounded-3xl text-primary py-2 px-6 my-2">
            You selected {selected} out of 5
          </div>

          <div>
            <h2 className="text-default text-2xl mb-3">Thank you!</h2>
            <p className="text-muted text-sm leading-6">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveRating;
