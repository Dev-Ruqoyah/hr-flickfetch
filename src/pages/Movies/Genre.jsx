import { useParams } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../../component/Swipers/Swiper";
import { Link } from "react-router-dom";
import SwiperCard from "../../component/Swipers/SwiperCard";

const Genre = () => {
    const [genreList,setGenreList] = useState([])
    const genreMap = {
        action: 28,
        comedy: 35,
        romance: 10749,
        horror: 27,
      };
    let {genre} = useParams()
    console.log(genre);
    console.log(genreMap[genre]);
    let genreId = genreMap[genre]
    useEffect(()=>{
        const fetchGenres = async() =>{
            const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",{
                params:{
                    api_key: "5f7eda380c1a398c55e16a580e4395dd",
                    with_genres: genreId,
                }
            })
            console.log(data.results);
            setGenreList(data.results)
            
        }
        fetchGenres()
    },[])
    
    
    return ( 
        <>
            <div className="bg-black">
            <NavBar/>

           
            <div className="grid grid-cols-4">
                {
                      genreList.map(({title,id,vote_average,release_date,poster_path})=>(
                        <Link to={`/movie/${title}/${id}`}>
                        <SwiperCard
                          title={title}
                          star={vote_average}
                          date={release_date}
                          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        />
                      </Link>
                    ))
                }
            </div>
          
           
            </div>
        </>
     );
}
 
export default Genre;