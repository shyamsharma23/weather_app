import React, {useState} from 'react';
import Content from './components/Content';

const App = () => {
    const [query, setQuery] = useState('');

    const [arr, setArr] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=a051c444ac3d30ff126c537315621d1b`

    const searchWeather = async (e) =>{

        const res = await fetch(url);
        const data = await res.json();
        setArr(data);
        console.log(data);

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
      {/* <Content info={arr} /> */}
  </div>;
};

export default App;
