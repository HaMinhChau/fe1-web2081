import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Story {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  views: number;
  since: string;
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: Story[] = [];

  loading = false;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.http.get<Story[]>("http://localhost:3000/stories").subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        console.log("Không thể tải dữ liệu");
        this.loading = false;
        this.error = true;
      },
    });
  }

  deleteStory(id: number) {
    if (!confirm("Có muốn xoá không")) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter(story => story.id !== id);
        alert("Xoá thành công");
      },
      error: () => {
        alert("Xoá thất bại");
      },
    });
  }
}