
export default function SearchBar(props) {
   //props = {onSearch= function}
   return (
      <div style={{backgroundColor:"ButtonText", display: 'flex', margin: '4px'}}>
         <input 
            type="search"
            name="search"
            id="search"
         />
         <button style={{ textAlign: 'center', margin: '5px', display: 'block'}} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
