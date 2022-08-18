import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);
  const addFavorites = (id) => {
    setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorites = (id) => {
    setFavoritesMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoritesMealIds,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;