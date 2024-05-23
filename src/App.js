
import { createContext } from 'react';
import Navbar from './Components/Shopping/Navbar';
const data = localStorage.getItem("CARTS")

export const cartItems=createContext(null)

function App() {

  return (
    <div>
      <cartItems.Provider value={data}>
      <Navbar />
      </cartItems.Provider>
    </div>
  );
}

export default App;
