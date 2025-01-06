import { Link } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import HeroButton from "../../component/Buttons/HeroButton";

const Error = () => {
  return (
    <>
      <div className="container mx-auto bg-black text-white min-h-screen flex flex-col items-center">
        <div className="flex flex-col  items-center justify-center flex-grow">
          <div className="flex items-center justify-center ">
            <div className="text-[120px] lg:text-[290px] font-bold">4</div>
            <div className="relative border-8 h-24 w-24 lg:h-40 lg:w-40 bg-red-600 rounded-full flex items-center justify-center">
              <div
                className="absolute w-0 h-0 border-t-[16px] lg:border-t-[24px] border-b-[16px] lg:border-b-[24px] border-l-[32px] lg:border-l-[48px] border-t-transparent border-b-transparent border-l-white"
                style={{ marginLeft: "6px" }}
              ></div>
            </div>
            <div className="text-[120px] lg:text-[290px] font-bold">4</div>
          </div>
          <p className="text-center text-lg lg:text-2xl font-bold ">
            You've wandered off the FlickFetch trail.
          </p>
          <p className="text-center text-lg lg:text-xl mt-2">
            This isn't the movie you're looking for, but the adventure continues!
          </p>
          <Link to={"/"} className="mt-2">
          <HeroButton text={"Go home"}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
