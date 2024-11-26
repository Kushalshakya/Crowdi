import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_CROWDI_API_KEY,
  authDomain:import.meta.env.VITE_CROWDI_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_CROWDI_PROJECT_ID,
  storageBucket: import.meta.env.VITE_CROWDI_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_CROWDI_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_CROWDI_APP_ID,
  measurementId: import.meta.env.VITE_CROWDI_MEASUREMENT_ID,
};

console.log("Firebase Config:", firebaseConfig); // Debugging

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);