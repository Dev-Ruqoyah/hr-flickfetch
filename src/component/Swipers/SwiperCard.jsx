import { FaStar } from "react-icons/fa";

const SwiperCard = () => {
    return ( 
        <>
            <div className="container  ">
                <div className="h-[290px]   border  bg-black m-4 mb-0">

                </div>
                <div className="title mx-4 text-white">
                    <p>Red Sparrow</p>
                    <div className="flex justify-between">
                        <p>2018</p>
                        <div className="det flex items-center">
                            <span><FaStar/></span><p>6.7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SwiperCard;