import app from "../config/firebaseInit";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore();
export async function fetchEvents() {
  const events = [];
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    return events.push({ ...doc.data(), id: doc.id });
  });
  return events;
}

export async function fetchEvent(id) {
  const docRef = doc(db, "events", id);
  const docSnap = await getDoc(docRef);
  const event = { ...docSnap.data(), id: docSnap.id };
  return event;
}
