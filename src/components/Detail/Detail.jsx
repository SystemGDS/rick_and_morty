import styles from './Detail.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Detail(props) {
    const { detailId } = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
          return setCharacter({});
          }, [detailId]);

    return (
        <div styles={styles.container}>
            <Link to="/home">
                <button>Go Back</button>
            </Link>
                <h1>Detail</h1>
                <h2>Nombre:</h2><h3>{character?.name}</h3>
                <h2>Estado:</h2><h3> {character?.status}</h3>
                <h2>Especie:</h2><h3> {character?.spacies}</h3>
                <h2>Genero:</h2><h3> {character?.gender}</h3>
                <h2>Origen:</h2> {character?.origin && <h3>{character?.origin.name}</h3>}
                <img className={styles.image} src={character?.image} alt={character?.name} />
            
        </div>
    )
}