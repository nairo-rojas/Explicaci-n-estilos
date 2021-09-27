
import './App.css';


function App() {
  return (
    <div classNameName="App">
     <form>
     <input type="email" id="user-email" placeholder="e.g. john.doe@mozilla.com" required/>
     <input type="text" id="user" autofocus />
       <input placeholder='Nairo' type= 'text' required/>
       <input placeholder='Rojas' type='text'/>
       <input placeholder='5' type= 'number' max={10}/>
       <input className='' type='password'/>
       <input className='' type='text' defaultValue='nairo' disabled/>
       <label>Seleccione una opción:</label>
       <select required defaultValue={0}> 
        <option disabled value={0}></option>
          <option>Opcion 1</option>
          <option>Opcion 2</option>
       </select>
       <input className='' type='file'/>
       <button className='btn'>Summit</button>
     </form>
    </div>
  );
}

export default App;
