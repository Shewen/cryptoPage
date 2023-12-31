
import { Route, Routes } from 'react-router-dom';
//import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Home from './routes/Home';
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Account from './routes/Account'
import axios from 'axios';
import { useState, useEffect } from 'react';
import CoinPage from './routes/CoinPage';
import { AuthContextProvider } from './context/AuthContext';



function App() {
  const[coins, setCoins] = useState([]);

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data);
    // console.log(response.data)
  });
}, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>

     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home coins ={coins}/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>


      </Routes>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
