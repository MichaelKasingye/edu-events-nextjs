import { getDocs, collection, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default async function handler(req, res){
  const data = []
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
  return data.push({...doc.data(), id: doc.id})
});

res.send(data)
}
