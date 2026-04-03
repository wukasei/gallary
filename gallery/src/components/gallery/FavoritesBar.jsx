import React from 'react';
import { Link } from 'react-router-dom';
import useFavorites from '../../hooks/useFavorites';
import '../../App.css'; 

const FavoritesBar = () => {
  const { favorites } = useFavorites();
  
  if (favorites.length === 0) return null;

  return (
    <div className="favorites-bar-container">
      <Link to="/favorites" className="favorites-link">
        <span className="heart-icon">❤️</span>
        <span className="favorites-text">
          У вашій оранжереї: <strong>{favorites.length}</strong> {favorites.length === 1 ? 'квітка' : 'квітки'}
        </span>
        <span className="arrow-icon">→</span>
      </Link>
    </div>
  );
};

export default FavoritesBar;