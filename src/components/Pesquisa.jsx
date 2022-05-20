
const Pesquisa = ({ handleInputCidade, inputCidade, handlePesquisaCidade }) => {
    return ( 
        <div className="pesquisa">
        <form action="">
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
        </form>
      </div>
     );
}
 
export default Pesquisa;