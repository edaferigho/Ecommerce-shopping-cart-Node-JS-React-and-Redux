import './Backdrop.css'

function Backdrop({ show,clickevent }) {
    
    return show &&<div className="backdrop" onClick={clickevent}></div>
    
}

export default Backdrop
