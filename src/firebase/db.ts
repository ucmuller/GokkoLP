import { getFirestore } from "firebase/firestore";
import { App } from './app';

export const DB = getFirestore(App);
