import "./App.css"
// import Auth from "./pages/Auth/Auth";
// import Login from "./pages/Auth/Login";
// import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
       <div className="blur" style={{top:'-18%', right: '0'}}></div>
       <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
       {/* <Home />  */}
       <Profile />
       {/* <Auth /> */}
       {/* <Login /> */}
    </div>
  );
}

export default App;
