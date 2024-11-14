import './App.css';
import LandingPage from './Components/LandingPage/index.';
import NavigationBar from './Components/LandingPage/NavigationBar';
function App() {

  return (
    <div className='bg-background lg:h-screen text-white py-3'>
      <NavigationBar />
      <LandingPage />
    </div>
  );
}

export default App;
