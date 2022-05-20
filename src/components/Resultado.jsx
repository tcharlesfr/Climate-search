
const Resultado = ({ result, boolean }) => {
    return ( 
        <div>
        {
          boolean && <>
          <p>Cidade: { result.results.city }</p>
          <p>Temperatura Atual: { result.results.temp }</p>
          {
            result.results.forecast.slice(0,1).map( dado =>
              <form key={ result.results.city }>
              <p>Data: { dado.date }</p>
              <p>Descrição: { dado.description }</p>
              <p>Temperatura Maxima: { dado.max }</p>
              <p>Temperatura Minima: { dado.min }</p>
              <p>Dia da semana: { dado.weekday }</p>
              </form>
              )
          }
          </>                      
        }              
      </div>
     );
}
 
export default Resultado;