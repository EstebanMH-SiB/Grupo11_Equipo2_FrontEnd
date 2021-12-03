import logo from './logo.svg';
import './bootstrap.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import RegistroUsuario from './components/RegistroUsuario';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <RegistroUsuario />
      </header>
      <Footer />
    </div>
  );
}

export default App;
