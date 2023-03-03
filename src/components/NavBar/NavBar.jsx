import SearchBar from '../SearchBar/SearchBar';
// import styles from './NavBar.module.css'
import {NavLink} from 'react-router-dom';


export default function NavBar(props) {
   //props = {onSearch= function}
   return (
    // className={styles.contenido_nav}
      <div >
        <div className='container navbar navbar-dark bg-prymary justify-content-end'>
        <NavLink  to="/about">
          <button className="btn btn-success nuevo-post d-block d-md-inline-block">About</button>  
        </NavLink>
        <NavLink to="/home">
          <button  className="btn btn-success nuevo-post d-block d-md-inline-block m-2">Home</button>  
        </NavLink>
        </div>
        <div className='navbar navbar-expand-lg navbar-dark bg-prymary justify-content-center'>
        <SearchBar
          onSearch={props.onSearch}
          className="d-flex justify-content-end"
        />
        </div>
      </div>
   );
}
