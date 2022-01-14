import { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface SearchNameProviderProps {
  children: ReactNode;
}

interface SearchNameContextProps{
  searchInput: string;
  dataBase: CharacterProps[]
  setSearchInput: (input: string) => void;
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

const  SearchNameContext = createContext<SearchNameContextProps>({} as SearchNameContextProps)

export function SearchNameProvider( { children }: SearchNameProviderProps) {

  const [searchInput, setSearchInput] = useState('')
  const [dataBase, setDataBase] = useState<CharacterProps[]>([])
  
 
  async function getUsers (name: string) {
    const { data }: AxiosResponse = await api.get( name.length>0 ? `/characters?name=${name}` : `/characters` )
    
    if(name.length > 0 ) {
      return setDataBase([data]) 
    } else {
      return setDataBase(data)
    }
  }

  useEffect(() => {
    getUsers(searchInput)
  }, [searchInput])

  return(
    <SearchNameContext.Provider value= {{ searchInput, setSearchInput, dataBase }} >
      {children}
    </SearchNameContext.Provider>

  )
}

export function useSearch() {
  const context = useContext(SearchNameContext)

  return context
}