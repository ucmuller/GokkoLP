import firebase from 'firebase/compat/app';
import { credentials } from './credentials';

export const App: firebase.app.App = firebase.initializeApp(credentials.config)