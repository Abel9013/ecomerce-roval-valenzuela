// import logo from './logo.svg';
// import './App.css';
// import './components/navbar.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import "./components/navbar.css";


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda de gaming" />
    </>
  );
}
export default App;
