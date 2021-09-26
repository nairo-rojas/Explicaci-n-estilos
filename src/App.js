
import './App.css';



function App() {
  return (
    <div className="App">
     <div className="flex flex-col md:flex-row">
     <div className="mx-3 bg-gray-400">Elemento 1</div>
     <div className="mx-3 bg-red-300">Elemento 2</div>
     <div className="mx-3 bg-green-600">Elemento 3</div>
     <div className="mx-3 bg-blue-400">Elemento 4</div>
     <button className="boton">Clic aqui</button>
     <button className="boton">Clic aqui</button>
     </div>
    </div>
  );
}

export default App;
