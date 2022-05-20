import {useState} from 'react'
import axios from 'axios';


function App() { 

  const [inputCidade, setInputCidade] = useState();
  const [result, setResult] = useState([]);
  const [boolean, setBoolean] = useState(false);

  const handleInputCidade = (cidade) => {
    setInputCidade (cidade.target.value);
  }

  const handlePesquisaCidade = async () => {
    const {data} = await axios.get("https://api.hgbrasil.com/weather?format=json-cors&key=7eb913c1&city_name="+inputCidade)
    setResult(data);
    console.log(result);
    setBoolean(true);
  }

  return (
    <div className="App">
      <h1>Clima</h1>
      <div className="pesquisa">
        <input
          placeholder='Cidade'
          type="text"
          onChange={handleInputCidade}
          value={inputCidade}
        />
        <button
          type="button"
          onClick={handlePesquisaCidade}
        >
          Pesquisar cidade    
        </button>
      </div>

      <div>
        {
              boolean && <>
              <p>Cidade:{result.results.city}</p>
              <p>Temperatura Atual: {result.results.temp}</p>

              {
                result.results.forecast.slice(0,1).map( dado =>
                 <form>
                  <p>Condição: { dado.condition}</p>
                  <p>Data: { dado.date}</p>
                  <p>Descrição: { dado.description}</p>
                  <p>Temperatura Maxima: { dado.max}</p>
                  <p>Temperatura Minima: { dado.min}</p>
                  <p>Dia da semana: { dado.weekday}</p>
                  </form>
                  )
              }
            </>
                      
        }              
      </div>


    </div>
  );
}

export default App;
