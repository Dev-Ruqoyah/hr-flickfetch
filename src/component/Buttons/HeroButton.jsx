import { FaArrowRight } from "react-icons/fa";

const HeroButton = ({text}) => {
    return ( 
        <>
            <button className="flex gap-2 items-center w-[150px] px-5 bg-red-500 h-[50px] rounded-md">
                <span className="text-white">{text}</span>
                <FaArrowRight className="text-white"/>
            </button>
        </>
     );
}
 
export default HeroButton;