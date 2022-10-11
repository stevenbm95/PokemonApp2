import { Route, Routes } from "react-router-dom";
import { WelcomePage, LoadingPage, ListPage} from '../pages';




export const PokemonsRoutes = () => {
  return (
    <Routes>
        <Route path="welcome" element={ <WelcomePage />}/>
        <Route path="loading" element={ <LoadingPage />}/>
        <Route path="list" element={ <ListPage/>} />

        <Route path="/*" element={ <WelcomePage/>} />
    </Routes>
  )
}
