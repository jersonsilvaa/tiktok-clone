import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const mapUserFromFirebaseAuth = (user) => {
  user = auth.currentUser

  const username = user.displayName
  const avatar = user.photoURL
  const uid = user.uid

  return {
    username,
    avatar,
    uid
  }
}

export const authStateChanged = (onChange) => {
  return onAuthStateChanged(auth, user => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth, githubProvider)
}

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

export const loginWithFacebook = () => {
  const facebookProvider = new FacebookAuthProvider()
  return signInWithPopup(auth, facebookProvider)
}