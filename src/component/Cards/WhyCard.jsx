const WhyCard = ({ title, subtitle }) => {
    return (
      <div className="relative container mx-auto">
        {/* Blurry Circle */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-yellow  rounded-full  animate-pulse"></div> */}
      

       
        {/* Card */}
        <div className="h-[320px] border-2 border-red-600 rounded-md transition-all duration-300 hover:shadow-lg hover:border-red-300 hover:scale-105 ">
          <div className="p-5 flex flex-col items-center justify-center h-full">
            <h5 className="font-bold text-center text-4xl text-red-500">{title}</h5>
            <p className="text-white text-xl text-center">{subtitle}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyCard;
  