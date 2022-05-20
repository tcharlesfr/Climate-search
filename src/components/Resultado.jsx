
import './Resultado.css'

const Resultado = ({ result, boolean }) => {
    return ( 
        <div>
        <hr />
        {
          boolean && <>
          <h3>{ result.results.city }</h3>
          <p>Temperatura Atual: { result.results.temp }</p>
          {
            result.results.forecast.slice(0,5).map( dado =>
              <form key={ result.results.city }>
                <p>{ dado.date }</p>
                <p>{ dado.weekday }</p>
                <p>{ dado.description }</p>
                <p>Temperatura Maxima: { dado.max }</p>
                <p>Temperatura Minima: { dado.min }</p>                
              </form>
              )
          }
          </>                      
        }              
      </div>
     );
}
 
export default Resultado;