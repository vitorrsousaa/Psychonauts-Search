import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { HomePage } from "./HomePage";
import { FavoritesPage } from "./FavoritesPage";

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>
  )
}