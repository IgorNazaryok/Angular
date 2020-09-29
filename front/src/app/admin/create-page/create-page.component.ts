import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/shared/interface';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      title: new FormControl(null),
      text: new FormControl(null),
      author: new FormControl(null)
  })
  }
  submit(){
    const post:Post={
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.form.value.author,
      date: new Date()
    }
    console.log(post);
    
  }
}
