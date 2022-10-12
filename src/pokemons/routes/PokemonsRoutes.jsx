import { Route, Routes } from "react-router-dom";
import {PokemonPage} from '../pages';




export const PokemonsRoutes = () => {
  return (
    <Routes>
       <Route path="/*" element={ <PokemonPage/>} />
    </Routes>
  )
}
