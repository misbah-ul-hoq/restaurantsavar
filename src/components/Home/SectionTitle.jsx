const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto max-w-[424px] text-center">
      <h3 className="mb-3 text-xl text-[#D99904]">---{subHeading}---</h3>
      <h2 className="border-y-4 border-[#E8E8E8] py-5 text-4xl uppercase">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
