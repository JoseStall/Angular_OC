import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-list-item',
	templateUrl: './post-list-item.component.html',
	styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	constructor() { }

	ngOnInit() {}

	loveIt() {
		var like = 0;
		var dislike = 0;
		var coloredLike = like - dislike ;
		return (coloredLike >= 0 ? true : false)
	};
	likeIt() {
	}
	dislikeIt() {
	}

}
