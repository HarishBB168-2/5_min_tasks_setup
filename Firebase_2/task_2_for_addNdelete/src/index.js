import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_jR2ZjLtF1g6KgxC2hZ5S2r7f7UUSE7I",
  authDomain: "fir-9-test-task.firebaseapp.com",
  projectId: "fir-9-test-task",
  storageBucket: "fir-9-test-task.appspot.com",
  messagingSenderId: "540865435732",
  appId: "1:540865435732:web:f149a7462da86144af35c1",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "books");

async function getData() {
  try {
    const snapshot = await getDocs(colRef);
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  } catch (err) {
    console.log(err.message);
  }
}

getData();
