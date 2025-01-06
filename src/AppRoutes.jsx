import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoviePage from "./pages/Movies/EachMovie";
import Genre from "./pages/Movies/Genre";
import Error from "./pages/Error/Errorpage";
import Movies from "./pages/Movies/Movie";
import Series from "./pages/Series/Series";
// import 
const AppRoute = () =>{
    return(
        <>
         
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/series" element={<Series/>}/>
                    <Route path="/genres/:genre" element={<Genre/>}/>
                    <Route path="/movie/:title/:id" element={<MoviePage/>}/>
                    <Route path="/genre/:title/:id" element={<MoviePage/>}/>
                    <Route path="/series/:title/:id" element={<MoviePage/>}/>
                    <Route path="*" element={<Error/>}/>

                    
                </Routes>
            
        </>
    )
}

export default AppRoute