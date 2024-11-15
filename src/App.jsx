import './App.css';
import LandingPage from './Components/LandingPage/index.';
import NavigationBar from './Components/LandingPage/NavigationBar';
function App() {

  return (
    <div className=' py-3'>
      <NavigationBar />
      <LandingPage />
    </div>
  );
}

export default App;
