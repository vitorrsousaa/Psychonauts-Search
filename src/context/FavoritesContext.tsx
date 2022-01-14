import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface FavoritesContextProviderProps {
  children: ReactNode;
}

interface FavoritesContextProps {
  addUserFavorites: ( user: CharacterProps) => void;
  favorites: CharacterProps[]
}

interface CharacterProps {
  gender: string;
  img: string;
  name: string;
  psiPowers: PowerProps[]
  _id: string;
}

interface PowerProps {
  description: string;
  img: string;
  _id: string;
  name: string;
}

const FavoritesContext = createContext<FavoritesContextProps>({} as FavoritesContextProps)

export function FavoritesContextProvider( { children }: FavoritesContextProviderProps) {

  const [favorites, setFavorites] = useState<CharacterProps[]>([]);

  function addUserFavorites( user: CharacterProps ){
    setFavorites( [...favorites, user])
  }

  return(
    <FavoritesContext.Provider value= { { addUserFavorites, favorites } }>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  return context
}