import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'mon premier blog ';
	posts = [
	{
		title: 'Mon premier post',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsum quos expedita sapiente, saepe officia quaerat quidem autem aperiam ea ex suscipit velit! Beatae id itaque autem nulla nihil, iusto in, asperiores perspiciatis illo cupiditate tempora totam placeat quibusdam laboriosam consequatur voluptatum culpa nam. Esse excepturi natus commodi, tenetur maiores.',
		loveIts: 0,
		created_at: new Date()
	},
	{
		title: 'Mon second post',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit hic quasi libero neque, iusto? In, hic, distinctio! Dolor similique inventore est fuga, nisi molestiae velit impedit laborum, saepe ducimus optio dolores eaque nulla in, obcaecati eius. Commodi fuga earum molestiae voluptates ex, ducimus amet beatae. Eius rem modi, aliquam dicta nemo? Explicabo sint cum, ratione commodi vel repellendus illo quo cupiditate fugiat, dolorum possimus eius iure veritatis esse at eaque placeat accusamus nesciunt molestias quam quod enim animi aspernatur consequuntur distinctio. Odio aperiam vero culpa maiores ratione nam quam quos aliquam libero temporibus, quae laborum suscipit quis laboriosam, quod iste.',
		loveIts: -5,
		created_at: new Date()
	},
	{
		title: 'Encore un post..',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique officia aperiam fuga eum eveniet, provident voluptates, nisi tenetur autem, cum earum. Ipsa modi quia dolor placeat officia sit, adipisci tempora quisquam, sequi similique minus, blanditiis et ex aperiam nulla, quas minima ad architecto id. Eveniet magni molestiae aspernatur perferendis eius odit voluptatum ratione aliquid non expedita quas earum, modi sit consequatur nobis, itaque temporibus, ullam dicta sint? Libero provident quam optio dolor odio quod quos?',
		loveIts: 5,
		created_at: new Date()
	}
	]
}
