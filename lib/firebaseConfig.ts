import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || undefined,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || undefined,
};

let app;
if (firebaseConfig.apiKey && firebaseConfig.projectId && !getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps().length ? getApp() : undefined;
  if (!app && typeof console !== 'undefined') {
    // eslint-disable-next-line no-console
    console.warn('Firebase app not initialized: missing env vars. Add .env.local or platform env and restart dev.');
  }
}

export default app;
