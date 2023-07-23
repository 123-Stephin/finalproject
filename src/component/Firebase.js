import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDe1sqdD2SryUEcdayJC5pDNFIcl409Cj8",
  authDomain: "cap-project-7ec00.firebaseapp.com",
  databaseURL: "https://cap-project-7ec00-default-rtdb.firebaseio.com",
  projectId: "cap-project-7ec00",
  storageBucket: "cap-project-7ec00.appspot.com",
  messagingSenderId: "1012177474754",
  appId: "1:1012177474754:web:52481cedc26e41b953975b",
  measurementId: "G-4QXC6QGF1Q"
};

      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);

export default db;
