// StarRating.js

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-10 w-10 ${
            star <= rating ? "text-[#CD9003]" : "text-[#A1A1A1]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049.218a.998.998 0 011.902 0l1.818 5.623h5.903a1 1 0 01.588 1.81l-4.769 3.525 1.818 5.623a1 1 0 01-1.539 1.11L10 14.713l-4.769 3.525a1 1 0 01-1.539-1.11l1.818-5.623L1.341 7.651a1 1 0 01.588-1.81h5.903L9.049.218z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
