//richiama il file creato compiando dal sito di firebase
import db from "./firebase";

import { collection, addDoc, setDoc,doc } from "firebase/firestore";

export const handlerNuovo = async () => {

    const nome = prompt("Nome colore");
    const valore = prompt("Valore colore");

    const collectionRef = collection(db, "colori")
    const payload = { nome: nome, valore: valore }

    const docRef = await addDoc(collectionRef, payload);
    console.log("Il nuovo documenteo creato " + docRef.id)

};

export const handlerEdit = async(id) =>{
    
    const nome = prompt("Nuovo Nome");
    const valore = prompt("Nuovo Valore");

    const payload = {nome:nome, valore:valore}

    const docRef = doc(db,"colori",id)

    setDoc(docRef,payload)
}


