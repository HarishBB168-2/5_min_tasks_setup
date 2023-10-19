import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

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

const q = query(colRef, orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  });
  addBookForm.reset();
});

const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const docRef = doc(db, "books", deleteBookForm.id.value);
  await deleteDoc(docRef);
  deleteBookForm.reset();
});

const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "books", updateForm.id.value);
  updateDoc(docRef, { title: "updated title" }).then(() => {
    updateForm.reset();
  });
});

const docRef = doc(db, "books", "QfcUDYINHtj83rI6jhdl");

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});
