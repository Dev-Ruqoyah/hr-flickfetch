import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import YouTubeVideos from "./pages/Movies/Movie";
// import 
const AppRoute = () =>{
    return(
        <>
         
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<YouTubeVideos/>}/>

                    
                </Routes>
            
        </>
    )
}

export default AppRoute