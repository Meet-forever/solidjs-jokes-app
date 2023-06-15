import { A, Route, Routes } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";

// https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
function App() { 
  return (
    <div style={{"max-width": "1024px", margin: "0 auto"}}>
        <header style={{display: "flex", padding: "0rem 1rem", "align-items": "center", height: "10vh", "justify-content": "space-between"}}>
          <div>  
            <div><i class="small material-icons">flash_on</i></div>
          </div>
          <div style={{display: "flex", gap: "1rem", "align-items": "center"}}>
            <A style={{"text-decoration": "none", outline: "none", color: "black"}} href="/solidjs-jokes-app/">Home</A>
            <A style={{"text-decoration": "none", outline: "none", color: "black"}} href="/solidjs-jokes-app/about">About</A>
          </div>
        </header>
        <Routes>
          <Route path={"/solidjs-jokes-app/"} component={Home} />
          <Route path={"/solidjs-jokes-app/about"} component={About} />
        </Routes>
    </div>
  );
}

export default App;
