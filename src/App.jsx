import {useState} from 'react'
import axios from 'axios';
import Resultado from './components/Resultado'
import Pesquisa from './components/Pesquisa'

import './App.css'

function App() {

  const apiKey = "1412fcc8";
  const [inputCidade, setInputCidade] = useState();
  const [result, setResult] = useState([]);
  const [boolean, setBoolean] = useState(false);

  const handleInputCidade = (cidade) => {
    setInputCidade (cidade.target.value);
  }

  const handlePesquisaCidade = async () => {
    const {data} = await axios.get("https://api.hgbrasil.com/weather?format=json-cors&key="+apiKey+"&city_name="+inputCidade)
    setResult(data);
    console.log(result);
    setBoolean(true);
  }

  return (
    <div className="App">
      <h1>Clima Search</h1>
      <Pesquisa
        handleInputCidade={handleInputCidade}
        inputCidade={inputCidade}
        handlePesquisaCidade={handlePesquisaCidade}>
      </Pesquisa>

      <Resultado
        boolean={boolean}
        result={result}>
      </Resultado>
    </div>
  );
}

export default App;
