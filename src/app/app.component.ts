import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() {
		const config = {
			apiKey: "AIzaSyC9EP-ZELwFw5tp44Bpm8IsUdgjSi97Q1s",
			authDomain: "http-client-blog.firebaseapp.com",
			databaseURL: "https://http-client-blog.firebaseio.com",
			projectId: "http-client-blog",
			storageBucket: "http-client-blog.appspot.com",
			messagingSenderId: "934211235126"
		};
		firebase.initializeApp(config);
	}
}
