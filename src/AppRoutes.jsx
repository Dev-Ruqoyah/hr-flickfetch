import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import YouTubeVideos from "./pages/Movies/Movie";
import MoviePage from "./pages/Movies/EachMovie";
import Genre from "./pages/Movies/Genre";
// import 
const AppRoute = () =>{
    return(
        <>
         
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<YouTubeVideos/>}/>
                    <Route path="/genre/:genre" element={<Genre/>}/>
                    <Route path="/movie/:title/:id" element={<MoviePage/>}/>

                    
                </Routes>
            
        </>
    )
}

export default AppRoute