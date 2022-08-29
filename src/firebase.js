import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBStMOAGlbZuw_AribwZD3inRwv74Ip-fs",
	authDomain: "clone-a59f0.firebaseapp.com",
	projectId: "clone-a59f0",
	storageBucket: "clone-a59f0.appspot.com",
	messagingSenderId: "876460295445",
	appId: "1:876460295445:web:451c7f8dd506bc3c92d51c",
	measurementId: "G-6YGW2ZCFEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
	return signOut(auth);
}
// custom Hook
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);
	return currentUser;
}
