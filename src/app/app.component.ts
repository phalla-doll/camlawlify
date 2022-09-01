import {Component} from '@angular/core';
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNJO_jiIfNNt6_3UyFV4JeURgBm8K9KV8",
  authDomain: "camlawlify-dev.firebaseapp.com",
  projectId: "camlawlify-dev",
  storageBucket: "camlawlify-dev.appspot.com",
  messagingSenderId: "965467801768",
  appId: "1:965467801768:web:6cfa9e74a993ae37065a9d",
  measurementId: "G-F8236EP68M"
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'camlawlify-web';

  constructor() {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
