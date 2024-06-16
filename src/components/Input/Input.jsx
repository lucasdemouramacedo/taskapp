import './Input.css'

function Input(props){
    return (
        <div  className="input">
            <label>{props.label}</label>
            <Input type={props.type ? props.type : "text"} />
            <p className="error">{props.error}</p>
        </div>
    );
}

export default Input