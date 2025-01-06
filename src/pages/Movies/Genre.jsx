import { useParams } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SwiperCard from "../../component/Swipers/SwiperCard";
import Loader from "../../component/Loader/Loader";

const Genre = () => {
    const [genreList,setGenreList] = useState([])
    const [loading,setLoading] = useState(true)
    const genreMap = {
        action: 28,
        comedy: 35,
        romance: 10749,
        horror: 27,
      };
    let {genre} = useParams()
    
    const [page,setPage] = useState(1)
    let genreId = genreMap[genre]

    const handlePage = ()=>{ 
        setPage((prevPage) => prevPage + 1)
        
      
    }
    useEffect(()=>{
        
            const fetchGenres = async() =>{
                try{
                      const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",{
                    params:{
                        api_key: "5f7eda380c1a398c55e16a580e4395dd",
                        with_genres: genreId,
                        page:page,
                    }
                })
                // console.log(data.results);
                setLoading(false)
                setGenreList(data.results)
                // setGenreList((prevGenreList) =>[...prevGenreList,...data.results])
                }catch(error){
                    console.error(error);
                    
                }
              
                
       
        }
        fetchGenres()
    },[page,genreId])
    
    if(!genreList) return <p>No Movie found</p>
    if(loading) return <Loader/>
    return ( 
        <>
            <div className="bg-black">
            <NavBar/>

           
            <div className="grid md:grid-cols-4 grid-cols-1">
                {
                      genreList.map(({title,id,vote_average,release_date,poster_path})=>(
                        <Link to={`/movie/${title}/${id}`} key={id}>
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

            <div className="flex items-center justify-center text-white mt-3">
                <button disabled={loading} className="bg-gray-800 rounded-md px-3 py-2" onClick={()=>handlePage(page)}>{loading?"loading":"See More"}</button>
            </div>
          
           
            </div>
        </>
     );
}
 
export default Genre;