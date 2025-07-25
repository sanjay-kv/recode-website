import React, { useEffect, useState, useRef } from 'react';
import { auth } from '../../lib/firebase';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

const FirebaseAuthGithub: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => setUser(user as User));
    return () => unregisterAuthObserver();
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleGithubSignIn = async () => {
    setShowMenu(false);
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('GitHub sign-in error:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    setShowMenu(false);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  if (user) {
    return (
      <div style={{ textAlign: 'center' }} className='flex justify-center items-center gap-5 p-0'>
        <img src={user.photoURL || ''} alt="avatar" style={{ width: 48, borderRadius: '50%', border: '2px solid #000' }} />
        <br />
        <button
          onClick={() => auth.signOut()}
          className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-1 rounded flex items-center gap-2 transition-colors duration-200 shadow-md font-semibold"
        >
          <svg height="20" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', textAlign: 'center' }} className='flex justify-center items-center gap-5 p-0'>
      <button
        
  onClick={() => setShowMenu((v) => !v)}
  className="bg-black text-white px-4 py-2 rounded flex items-center"
>
  Sign in
</button>

      
      {showMenu && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: '110%',
            left: 0,
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 100,
            minWidth: 180,
            padding: 8,
          }}
          className="flex flex-col gap-2"
        >
          <button
            onClick={handleGithubSignIn}
            className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 text-black"
          >
            {/* New GitHub Octocat SVG */}
            <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#181717" d="M49 0C21.9 0 0 21.9 0 49c0 21.7 14 40.1 33.4 46.6 2.4.4 3.3-1 3.3-2.3v-8.1c-13.6 3-16.5-6.6-16.5-6.6-2.2-5.6-5.3-7.1-5.3-7.1-4.3-2.9.3-2.8.3-2.8 4.7.3 7.2 4.8 7.2 4.8 4.2 7.2 11 5.1 13.7 3.9.4-3 1.6-5.1 2.9-6.3-10.9-1.2-22.4-5.4-22.4-24.1 0-5.3 1.9-9.6 5-13-0.5-1.2-2.2-6.1.5-12.7 0 0 4.1-1.3 13.5 5 3.9-1.1 8-1.7 12.1-1.7s8.2.6 12.1 1.7c9.4-6.3 13.5-5 13.5-5 2.7 6.6 1 11.5.5 12.7 3.1 3.4 5 7.7 5 13 0 18.8-11.5 22.9-22.5 24.1 1.7 1.5 3.2 4.5 3.2 9.1v13.5c0 1.3.9 2.7 3.3 2.3C84 89.1 98 70.7 98 49 98 21.9 76.1 0 49 0z"/>
            </svg>
            Sign in with GitHub
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 text-black"
          >
            {/* Official Google icon */}
            <svg width="20" height="20" viewBox="0 0 48 48">
              <g>
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.5-7.6 21-17.5 0-1.4-.1-2.7-.3-4z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3c-7.2 0-13.4 3.1-17.7 8.1z"/>
                <path fill="#FBBC05" d="M24 45c5.8 0 10.7-1.9 14.6-5.1l-6.7-5.5C29.8 36 24 36 24 36c-5.8 0-10.7-1.9-14.6-5.1l6.7-5.5C18.2 31.9 21.1 33 24 33c3.1 0 5.9-1.1 8.1-2.9l6.4 6.4C34.5 42.9 29.5 45 24 45z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.1 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 5.1 29.5 3 24 3c-7.2 0-13.4 3.1-17.7 8.1z"/>
              </g>
            </svg>
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default FirebaseAuthGithub;