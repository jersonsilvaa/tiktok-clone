import { initializeApp } from 'firebase/app'

import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import {
    getAuth,
    signInWithPopup,
    EmailAuthProvider,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
    onAuthStateChanged
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
const db = getFirestore()


const mapUserFirebaseAuth = () => {
    const user = auth.currentUser

    const username = user.displayName
    const photoURL = user.photoURL
    const uid = user.uid

    return {
        username,
        photoURL,
        uid
    }
}

// Signup with

export const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
        .then(() => {
            mapUserFirebaseAuth()
        })
}

export const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider()
    signInWithPopup(auth, githubProvider)
        .then(() => {
            mapUserFirebaseAuth()
        })
}

export const signInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider()
    signInWithPopup(auth, facebookProvider)
        .then(() => {
            mapUserFirebaseAuth()
        })
}

export const authStateChanged = onchange => {
    return onAuthStateChanged(auth, (user) => {
        const normalizeUser = user ? mapUserFirebaseAuth(user) : null
        onchange(normalizeUser)
    })
}