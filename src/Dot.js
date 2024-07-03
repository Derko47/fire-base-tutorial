import { handlerEdit } from "./util";

const Dot = (props) => {
  const cerchio = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: props.colori.valore,
    borderRadius: "50%",
    display: "inline-block",
  };

  return (
    <li key={props.colori.id}>
       <a href="#" onClick={() => handlerEdit(props.colori.id)}>Edit </a>  <span style={cerchio} ></span> {props.colori.nome} 
    </li> 
  );
};

export default Dot;
