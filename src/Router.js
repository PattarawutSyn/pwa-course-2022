import App from "./App";
import Profile from "./Profile.js";
import MiniGame from "./MiniGame.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Batman from "./Batman.js";

//index.js --> Router.js --> App.js

function Router(){
    return (

        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<App />} />
                <Route path ="/profile" element={ <Profile/>} />
                <Route path ="/minigame" element={<MiniGame/>} />
                <Route path ="/batman" element={<Batman/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;
