import './App.css';
import axios from "axios";
import Charities from './components/Charities';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/charities'

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data.data.data)
}

function Home() {
  const [charities, setCharities] = useState([])

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        console.log(items)
        setCharities(items);
      }
    });
    return () => { (mounted = false) };
  }, []);

  return (
    <div className="App">
      <Charities charities={charities} />
    </div>
  );
}

export default Home;
