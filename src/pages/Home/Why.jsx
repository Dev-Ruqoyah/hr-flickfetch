import WhyCard from "../../component/Cards/WhyCard";

const Why = () => {
  return (
    <>
      <div className="container mx-auto my-24  relative">
        <div className="bg-white h-[300px] w-[300px] rounded-full blur-3xl absolute top-34 right-1/2 "></div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-12 ">
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
    </>
  );
};

export default Why;
