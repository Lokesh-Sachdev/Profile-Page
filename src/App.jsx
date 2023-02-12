import './App.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Profile />
    </div>
  );
}

export default App;
