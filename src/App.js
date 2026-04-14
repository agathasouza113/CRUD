import './App.css';

function App() {

  return (
    <div className="App">
      <h1>CRUD Cadastro de Usuário</h1>
      <label>Nome</label>
      <input type="text" id="nome"/><br/>

      <label>Sobrenome</label>
      <input type="text" id="sobrenome"/><br/>
 
      <label>E-mail</label>
      <input type="text" id="email"/><br/>

      <label>Telefone</label>
      <input type="number" id="telefone"/><br/>


      <label>CPF</label>
      <input type="number" id="cpf"/><br/>

      <button type="button" onclick="cadasrtrarUsuario()">Cadastre-se</button>
      <p id="msgcadastro"></p>


      <button type="button" onclick="editarUsuario()">Editar</button>
      <p id="msgeditar"></p>

      <button type="button" onclick="excluirUsuario()">Excluir</button>
      <p id="msgexcluir"></p>
    </div>
  );
};

export default App;
