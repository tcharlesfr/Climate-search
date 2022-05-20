
const Pesquisa = ({ handleInputCidade, inputCidade, handlePesquisaCidade }) => {
    return ( 
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
     );
}
 
export default Pesquisa;