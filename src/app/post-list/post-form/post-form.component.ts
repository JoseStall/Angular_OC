import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/Post.model';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
    private router: Router) { }
  postForm: FormGroup;


  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    newPost.created_at = Date.now();
    newPost.loveIts = 0;
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}

