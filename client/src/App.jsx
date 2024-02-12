import './App.css'
import Dashboard from './pages/dashboard';
import Homepage from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default App
