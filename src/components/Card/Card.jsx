
import { Link } from "react-router-dom"

export default function Card(props) {  
   // const card = ({id, name,species,image}){id, name,species,gender,image}

   return (

      <div className="card-group m-2">
         <div className="card">
         <button  
         onClick={props.onClose}
         className="btn btn-primary btn-outline-danger font-weight-bold text-red"
         >X</button>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} className="card-img-top redoum" alt="" />
         </Link>
            <div className="card-body">
               <h5 className="text-danger font-weight-bold">{props.name}</h5>
               <p className="text-primary font-weight-bold">{props.species}</p>
               <p className="text-primary font-weight-bold">{props.status}</p>
               <p className="text-info font-weight-bold">{props.gender}</p>
              
            </div>
         </div>
      </div>
   );
}

/* <div className={styles.container}>
   <div className={styles.buttonContainer}>
      <button  
         onClick={props.onClose}>X</button>
   </div>
      <div className={styles.dataContainer}>
         <h2>{props.name}</h2>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
      </div>
   <Link to={`/detail/${props.id}`}>
      <img  className ={styles.image} src={props.image} alt="Nombre Imagen" />
   </Link>
</div> */

// name: Nombre
// species: Especie
// gender: Genero
// image: Imagen
