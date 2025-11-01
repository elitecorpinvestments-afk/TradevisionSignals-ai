
```typescript
// app/layout.tsx

import { initializeApp } from "firebase/app";

**Important:**

*   **You'll also need to add the other Firebase configuration values (apiKey, authDomain, projectId, etc.) to your `.env.local` file.**  You can find these values in your Firebase project settings.  They should look like this:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDaaaga1tjSf38Mw3qRCeHY2P5ZEzPZi7U
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=studio-2286465257-eec82.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=studio-2286465257-eec82
NEXT_PUBLIC_FIREBASE_APP_ID=1:471472965723:web:baf7ce467325989b37177e
# NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=studio-2286465257-eec82.appspot.com
# NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=471472965723

*   Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., with the actual values from your Firebase project.

**5. Restart Your Development Server**

After making changes to `.env.local` and `app/layout.tsx`, you *must* restart your Next.js development server.  Stop the server (usually by pressing Ctrl+C in the terminal) and then run `npm run dev` or `yarn dev` (depending on which package manager you're using).

**6. Using the Firebase SDK in Your Components**

Now that Firebase is initialized, you can use the Firebase SDK in your components to perform authentication or other Firebase operations.  For example, to sign in with a provider:

```typescript
// Example in a component
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

async function signInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    // Handle successful sign-in
    console.log(result);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}


