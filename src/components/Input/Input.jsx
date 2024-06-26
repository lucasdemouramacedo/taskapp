import './Input.css'

function Input(props){
    return (
        <div  className="input">
            <p className='label'>{props.label}</p>
            <input type={props.type ? props.type : "text"} />
            <p className="error">{props.error}</p>
        </div>
    );
}

export default Input