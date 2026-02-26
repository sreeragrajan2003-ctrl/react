import {createContext, useState, useContext, useEffect} from "react"
 
const MovieContext = createContext()
 
export const useMovieContext = () => useContext(MovieContext)
 
export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const storedFavs = localStorage.getItem("favorites");
            return storedFavs ? JSON.parse(storedFavs) : [];
        } catch (err) {
            console.error("Invalid favorites in localStorage", err);
            return [];
        }
    });
 
    useEffect(() => {
        try {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } catch (err) {
            console.error("Failed to save favorites", err);
        }
    }, [favorites]);
 
    const addToFavorites = (movie) => {
        setFavorites(prev => {
            if (prev.some(m => m.id === movie.id)) return prev; 
            return [...prev, movie];
        });
    };
 
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    };
 
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };
 
    return (
        <MovieContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
        >
            {children}
        </MovieContext.Provider>
    );
};