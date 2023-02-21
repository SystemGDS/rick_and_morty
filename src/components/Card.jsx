export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClick}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="Nombre Imagen" />
      </div>
   );
}

// name: Nombre
// species: Especie
// gender: Genero
// image: Imagen
