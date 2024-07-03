import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";

import "./index.css";
import Dot from "./Dot";
import db from "./firebase";
import { handlerNuovo } from "./util";



function App() {
  const [colori, setColori] = useState([
    { nome: "Caricamento dati ...", valore: "Attendere dati ..." },
  ]);
  //prende i dati dal database
  useEffect(
    () =>
      onSnapshot(collection(db, "colori"), (snapshot) =>
        setColori(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="root">
      <button className="bottone" onClick={handlerNuovo} >
        Nuovo
      </button>
      <ul>
        {colori.map((colore) => (
          <Dot colori={colore}   />
        ))}
      </ul>
    </div>
  );
}

export default App;
