import WhyCard from "../../component/Cards/WhyCard";

const Why = () => {
  return (
    <>
      <div className="container mx-auto mt-5   relative ">
        <div className="bg-white h-[300px] w-[300px] rounded-full blur-3xl absolute top-34 right-1/2 "></div>
        <div className="flex justify-center ">

     
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  ">
          <WhyCard
            title={"Massive Video Library"}
            subtitle={
              "Access thousands of videos from different genres, including movies, tutorials, and documentaries, all in one place"
            }
          />
          <WhyCard
            title={" Fast and Easy Fetching"}
            subtitle={
              "Find and play your favorite videos instantly with our powerful search engine."
            }
          />
          <WhyCard
            title={"No Ads or Distractions"}
            subtitle={
              "Watch videos without annoying ads interrupting your experience."
            }
          />
          <WhyCard
            title={"User-Friendly Interface"}
            subtitle={
              "Navigate through our sleek, easy-to-use interface designed for all users."
            }
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Why;
