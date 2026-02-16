import MovieCard from "../components/MovieCard"
import { useState } from "react";
function Home(){
    const [SearchQuery,setSearchQuery]=useState('');
    const movies = [
        {id:1,title:'john wick',release_date:'2017'},
        {id:2,title:'john wick 2',release_date:'2019'},
        {id:3,title:'john wick 3',release_date:'2021'},
        {id:4,title:'aadu',release_date:'2017'},
        {id:5,title:'aadu 2',release_date:'2019'},
        {id:6,title:'aadu 3',release_date:'2026'},
    ];
    const handleSearch=(e)=>{
        e.preventDefault()
        alert(SearchQuery)
        setSearchQuery('')
    }
    return(
         <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="search for movies" className="search-input" value={SearchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
    )
}

export default Home