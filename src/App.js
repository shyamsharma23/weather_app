import React, {useState} from 'react';
import Content from './components/Content';
import axios from 'axios';

const App = () => {
    const [query, setQuery] = useState('');
    const [item, setItem] = useState([]);
    // const [lat, setLat] = useState('');
    // const [lon, setLon] = useState('');
    
    const searchWeather = async (e) =>{
      e.preventDefault();
        const elements = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=a051c444ac3d30ff126c537315621d1b`)
        .then((response) => {
         response.data.map(item => <Content item = {item} key = {item.lat} />)
        })

    
        // const elements = item.filter(value => value.country ==="US")
        // console.log(elements);
    }
    
  

    

    
  return <div>
      <form className='form' onSubmit={searchWeather}>
          <label className='label' htmlFor='query'>City name</label>
          <input className='input' type='text' name='query'
                placeholder='i.e Ames'
                value = {query}
                onChange = {(e) => setQuery(e.target.value)}
                />
        <button className='button' type='submit'>Search</button>
      </form>
      {elements}
  </div>;
};

export default App;
