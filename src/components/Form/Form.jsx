import styles from './Form.module.css'
import { useState } from 'react'
import validation from './validation.js'
import image from '../../img/Rick_and_Morty_logo.png'
import imageMuestra from '../../img/images.jpeg'


export default function Form(props) {
    const [showPwd, setShowPwd] = useState(false)

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,            
        });
        console.log(userData);
        setError(
            validation({
                ...userData,
                [name]: value,                
            }),
        )
        console.log(error);
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return(       
    
    <div className={styles.contenido}>
        <img src={imageMuestra} alt="Logo" width={'70%'} height={'80%'} />
    
    <div className={styles.contenido_form}>
        <form onSubmit={handleSubmit}>               
            {/* <h5>Ingreso a Rick And Morty</h5> */}
            <img src={image} alt="Logo" />
            <div className={ styles.input_div + styles.input_div.usu}>
                <div>
                    {/* <h6>E-Mail</h6> */}
                    <input 
                        type="text" 
                        name = "username" 
                        value = {userData.username}
                        placeholder='Usuario'                        
                        onChange = {handleInputChange} 
                        required                     
                    />
                    <p className={styles.error}>{error.username}</p>                                         
                </div>
                <div>
                    {/* <h6>Password</h6> */}
                    
                    <input 
                        type={showPwd ? "text" : "password"}
                        name = "password" 
                        value = {userData.password}
                        placeholder="Password"                         
                        onChange={handleInputChange} 
                        required
                    />

                    <p className={styles.error}>{error.password}</p>
                </div >     
                <div onClick={() => setShowPwd(!showPwd)} className={styles.svg}>
                    {showPwd ?  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                    </svg>}
                </div>  
                </div>
                <hr />
            <a href="https://github.com/SystemGDS">Created JORDA</a>
            <button className={styles.btn}  >Iniciar Secion</button>
        </form>
        </div>
        </div>
    )
}