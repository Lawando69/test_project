import './App.css';
import DesktopNavbar from './Components/DesktopNavbar/DesktopNavbar';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import Pages from './Pages';

function App() {
  return (
    <div className="App">
      <DesktopNavbar/>
      <MobileNavbar/>
      <Pages/>
    </div>
  );
}

export default App;
