'use client';
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session)
    return (
      <div style={{ textAlign: "center" }}>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}