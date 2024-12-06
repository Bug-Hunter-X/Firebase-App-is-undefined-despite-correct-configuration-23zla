import { initializeApp, getApps } from "firebase/app";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Check if Firebase is already initialized to prevent duplicate app creation
if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully:', app);
} else {
  console.log('Firebase already initialized');
}

// ... rest of your Firebase code