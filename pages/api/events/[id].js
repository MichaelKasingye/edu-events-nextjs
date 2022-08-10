import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default async function handler({ query: { id } }, res) {
  const docRef = doc(db, "events", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.send(docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    res.send("No such document!");
  }
}
