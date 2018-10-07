import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postCreatedAt: Date;
	@Input() postLoveIts: number;
	lastUpdate = new Date();

	constructor() {

	 }

	ngOnInit() {
	}

}
