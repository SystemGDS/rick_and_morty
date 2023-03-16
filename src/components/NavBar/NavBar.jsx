import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">SystemGDS</span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Personajes
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodios
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Localizacion
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import SearchBar from '../SearchBar/SearchBar';
// // import styles from './NavBar.module.css'
// import {NavLink} from 'react-router-dom';


// export default function NavBar(props) {
//    //props = {onSearch= function}
//    return (
//     // className={styles.contenido_nav}
//       <div >
//         <div className='container navbar navbar-dark bg-prymary justify-content-end'>
//         <NavLink  to="/about">
//           <button className="btn btn-success nuevo-post d-block d-md-inline-block">About</button>  
//         </NavLink>
//         <NavLink to="/home">
//           <button  className="btn btn-success nuevo-post d-block d-md-inline-block m-2">Home</button>  
//         </NavLink>
//         </div>
//         <div className='navbar navbar-expand-lg navbar-dark bg-prymary justify-content-center'>
//         <SearchBar
//           onSearch={props.onSearch}
//           className="d-flex justify-content-end"
//         />
//         </div>
//       </div>
//    );
// }
