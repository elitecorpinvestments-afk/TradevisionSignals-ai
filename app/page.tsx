// app/page.tsx
'use client';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export default function Page() {
  useEffect(() => {
    initializeApp(firebaseConfig);
    console.log('Firebase initialized for AI subdomain');
  }, []);

  return (
    <main style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '4rem' }}>
      <h1>AI TradeVision Signals</h1>
      <p>Firebase connected — app build verified ✅</p>
    </main>
  );
}