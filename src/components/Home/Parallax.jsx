import SectionTitle from "./SectionTitle";

import featureImg from "../../assets/home/featured.jpg";
const Parallax = () => {
  return (
    <div
      className="home-parallax relative min-h-64 w-full bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(/src/assets/home/featured.jpg)" }}
    >
      {/* background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container-center relative z-10 h-full py-[130px] text-white">
        <SectionTitle subHeading="Check it out" heading="from our menu" />

        <div className="relative z-10 flex items-center">
          <img src={featureImg} alt="" className="h-[400px] max-w-[600px]" />

          <div className="flex w-1/2 flex-col justify-center p-8 text-white">
            <p className="mb-2">March 20, 2023</p>
            <h2 className="mb-4 text-2xl font-bold">WHERE CAN I GET SOME?</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="border border-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
