import { StoryService } from './../services/story';
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
   
   loading = false;
    success = "";
    error = "";

   constructor(private fb: FormBuilder, private StoryService: StoryService) {
    this.addForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      imageUrl: ["", Validators.required],
      since: ["", Validators.required],
      author: ["", Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      views: [0, Validators.min(0)]
    });
}



submitForm() {

  if (this.addForm.invalid) {
    this.addForm.markAllAsTouched();
    return;
  }

  this.loading = true;
  this.success = "";
  this.error = "";

  this.StoryService.create(this.addForm.value).subscribe({

    next: () => {

      this.loading = false;
      this.success = "Thêm truyện thành công";

      this.addForm.reset({
        views: 0
      });

    },

    error: () => {

      this.loading = false;
      this.error = "Có lỗi xảy ra";

    }

  });

}

get title(){
  return this.addForm.get('title');
}

get price(){
  return this.addForm.get('price');
}
}