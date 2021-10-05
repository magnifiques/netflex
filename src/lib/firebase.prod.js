import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed';

// here we need to seed the database

// here we need a config

const config = {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
      
        authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
      
        projectId: `${process.env.REACT_APP_PROJECT_ID}`,
      
        storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
      
        messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
      
        appId: `${process.env.REACT_APP_APP_ID}`
         
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);


export { firebase }

