import { useEffect, useState } from "react";

//richiama il file creato compiando dal sito di firebase
import db from "./firebase";

import "./index.css";
import Dot from "./Dot";
import { onSnapshot, collection } from "firebase/firestore";

function App() {
  const [colori, setColori] = useState([]);
  console.log(colori)
  //prende i dati dal database
  useEffect(
    () =>
      onSnapshot(collection(db, "colori"), (snapshot) =>
        setColori(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))
      ),[]);


  return (
    <div className="root">
      <button className="bottone" >
        Nuovo
      </button>
      <ul>
        {colori.map((colore) => (
          <Dot colori={colore} />
        ))}
      </ul>
    </div>
  );
}

export default App;
