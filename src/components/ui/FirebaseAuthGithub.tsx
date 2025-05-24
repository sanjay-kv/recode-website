import React, { useEffect, useState } from 'react';
import { auth } from '../../lib/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // You can add scopes and custom parameters here if needed
    },
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false, // Prevents redirect
  },
};

const FirebaseAuthGithub: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => setUser(user as firebase.User));
    return () => unregisterAuthObserver();
  }, []);

  if (user) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Signed in as {user.displayName || user.email}</p>
        <img src={user.photoURL || ''} alt="avatar" style={{ width: 48, borderRadius: '50%' }} />
        <br />
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 320, margin: '0 auto' }}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default FirebaseAuthGithub; 