import { Component } from "react"
import React, {Component} from 'react';
import MovieCard from "./MovieCard";

const MovieList = () => {
    return (
       <div>
           <MovieCard/>
           <Rate/>
       </div>
    )
}

export default MovieList
