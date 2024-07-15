// eslint-disable-next-line react/prop-types
const FeatureBanner = ({ title, description, bgImg, bgProps }) => {
  return (
    <div
      className="flex h-[572px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className={`mx-auto flex h-[333px] max-w-[1000px] items-center justify-center rounded-md p-8 text-center ${bgProps} lg:px-36 lg:py-24`}
      >
        <div>
          <h1 className="mb-4 text-4xl font-bold uppercase">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
