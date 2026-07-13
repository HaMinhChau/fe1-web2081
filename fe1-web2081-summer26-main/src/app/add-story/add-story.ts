import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {

   addForm: FormGroup;

   constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      imageUrl: ["", Validators.required],
      since: ["", Validators.required],
      author: ["", Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      views: [0, Validators.min(0)]
    });
}

submitForm(){
  console.log(this.addForm.value);
  
}

get title(){
  return this.addForm.get('title');
}

get price(){
  return this.addForm.get('price');
}
}