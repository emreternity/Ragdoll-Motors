import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";

export default function Rate() {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center h-dvh scale-150">
        <div className="w-dvw max-w-80">
          <Rating className="mb-2 ">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 out of 5
            </p>
          </Rating>
          <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            1,745 global ratings
          </p>
          <RatingAdvanced percentFilled={70} className="mb-2">
            5 star
          </RatingAdvanced>
          <RatingAdvanced percentFilled={17} className="mb-2">
            4 star
          </RatingAdvanced>
          <RatingAdvanced percentFilled={8} className="mb-2">
            3 star
          </RatingAdvanced>
          <RatingAdvanced percentFilled={4} className="mb-2">
            2 star
          </RatingAdvanced>
          <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
        </div>
      </div>
    </>
  );
}
