import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

const [mode, setMode]=useState(false);
// const [modeTextColor, setModeTextColor]=useState({
//     color:'#000'
// })
// const modeChange=()=>{
//     if(mode===false){
//         setMode(true)
//         setModeTextColor({
//             color:'#fff'
//         })
//     }
//     else{
//         setMode(false)
//         setModeTextColor({
//             color:'#000'
//         })
//     }
// }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode ? 'dark':'light'} bg-${mode ? 'dark':'light'}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>                
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.aboutText}</a>
                </li>
            </ul>
            <div className='modeToggler'>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={modeChange}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={modeTextColor}> {mode ? 'Light':'Dark'}</label>
            </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
// Navbar.defaultProps={
//     title:"Ranjan",
//     aboutText:"About Ranjan"
// }  