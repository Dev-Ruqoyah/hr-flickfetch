import { FaStar } from "react-icons/fa";



const SwiperCard = ({image,title,date,star,det}) => {
    return ( 
        <>
            <div className="container mx-auto " onClick={det}>
                <div className="h-[290px]  duration-300  border-2 border-red-500 rounded-md hover:scale-105 transition-all  bg-black m-4 mb-0">
                    <img src={image} alt="" className="h-[100%] w-[100%]  object-center  " />
                </div>
                <div className="title mx-4 mt-3 text-white">
                    <p className="font-bold">{title}</p>
                    <div className="flex justify-between">
                        <p>{date}</p>
                        <div className="det flex items-center">
                            <span><FaStar/></span><p>{star}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SwiperCard;