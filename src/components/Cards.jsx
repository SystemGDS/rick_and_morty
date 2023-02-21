import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   //characters = [{--},{--},{---}]
   return (
   <div>
      {characters.map(character => (
         <Card 
            key = {character.id}
            name    = {character.name} 
            species = {character.species}
            gender  = {character.gender}
            image   = {character.image}    
            onClose ={()=>window.alert("Emulemos que se cierra la ventana")}     
         />
      ))},
   </div>

   );
}
