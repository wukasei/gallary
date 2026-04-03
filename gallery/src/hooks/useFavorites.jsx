import { useEffect, useState } from 'react';

 function initLocalSrotage(){
        const data = localStorage.getItem('flower_favorites')
        if(data){
            return JSON.parse(data)
        }
        return []
    }

const useFavorites = () => {
    const [favorites, setFavorites] = useState(initLocalSrotage);

     useEffect(() => {
        localStorage.setItem('flower_favorites', JSON.stringify(favorites))
    }, [favorites])

    function toggleFavorite(id){
        if(favorites.includes(id)){
            const noFavorites = favorites.filter(currendId => currendId !== id);
            setFavorites(noFavorites)
        }
        else{
            const newFavorites =[...favorites, id]
            setFavorites(newFavorites)
        }
    }
    return {favorites, toggleFavorite}
};

export default useFavorites;



