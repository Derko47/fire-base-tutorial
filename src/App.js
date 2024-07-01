import { useEffect, useState } from "react";

//richiama il file creato compiando dal sito di firebase
import db from "./firebase";

import "./index.css";
import Dot from "./Dot";
import { onSnapshot, collection, addDoc, doc } from "firebase/firestore";


function App() {
  const [colori, setColori] = useState([
    { nome: "Caricamento dati ...", valore: "Attendere dati ..." },
  ]);
  console.log(colori);
  //prende i dati dal database
  useEffect(
    () =>
      onSnapshot(collection(db, "colori"), (snapshot) =>
        setColori(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handlerNuovo = async () => {

    const nome = prompt("Nome colore");
    const valore = prompt("Valore colore");

    const collectionRef = collection(db,"colori")
    const payload = {nome:nome,valore:valore}

    const docRef = await addDoc(collectionRef,payload);
    console.log ("Il nuovo documenteo creato " + docRef.id)

  };

  return (
    <div className="root">
      <button className="bottone" onClick={handlerNuovo}>
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
