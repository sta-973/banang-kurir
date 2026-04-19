const firebaseConfig = {
    apiKey: "ISI_API_KEY",
    authDomain: "ISI_DOMAIN",
    projectId: "ISI_PROJECT_ID",
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth().signInWithEmailAndPassword(email, password)