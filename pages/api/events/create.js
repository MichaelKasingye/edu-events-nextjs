import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default async function handler(req, res) {
    const { data } = req.body
    const docRef = await addDoc(collection(db, "events"), {...data})
    
    if(!docRef.id) {
      return res.send({message: 'error creating new event'})
    }
    res.send({message: 'event created successfully '})
}
