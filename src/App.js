import './App.css';
import NavMenu from './components/header/navMenu';
import Landingpage from './components/landingPage/landingpage';
import Nav from "./components/header/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <NavMenu />
      
      
      <Landingpage />
    </div>
  );
}

export default App;
