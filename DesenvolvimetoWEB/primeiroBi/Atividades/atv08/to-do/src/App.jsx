import Swal from "sweetalert2";
import { useState } from "react";
import "../src/assets/css/App.css";
import { FiTrash } from "react-icons/fi";

export default function App() {
  const [tarefa, setTarefa] = useState([]);
  const [input, setInput] = useState("");

  function addTarefa(event) {
    event.preventDefault();

    if (input.trim() === "") return; 
    
    const novaTarefa = {
      id: Date.now(),
      text: input,
    }

    setTarefa([...tarefa, novaTarefa]);

    setInput("");
  }

  function removerTarefa(id) {
    Swal.fire({
      title: "Tem certeza ?",
      text: "Esse tarefa será removida!",
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonText: "Aceitar",
      confirmButtonColor: "#00ff40",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#ff0000"
    }).then((result) => {
      if(result.isConfirmed) {
        setTarefa(tarefa.filter((tarefa) => tarefa.id !== id));

        Swal.fire({
          title: "Removido",
          text: "A tarefa foi removida.",
          icon: "success",
          time: 1500,
          showCancelButton: false,
          confirmButtonColor: "#00ff40",
        });
      }
    });
  }

 return (
  <main>
        <h1>To do List</h1>

        <form onSubmit={addTarefa}>
          <input type="text" placeholder="Digite uma tarefa ..." value={input} onChange={(event) => setInput(event.target.value)}/>
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {tarefa.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefa.text}
              <button onClick={() => removerTarefa(tarefa.id)}>
               <FiTrash />
              </button>
            </li>
          ))}
        </ul>
  </main>
 );
}