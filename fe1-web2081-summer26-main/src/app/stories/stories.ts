import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-stories',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: "Dragon Ball",
      since: "1980",
      author: "Tin",
      price: "50000",
      views: 100000,
      imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Attack-On-Titan-Characters.jpg"
    },
    {
      title: "Attack On Titan",
      since: "2010",
      author: "Bảo",
      price: "50000",
      views: 900000,
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBJQEw7i9GWRWgW9YTyJqot8WLJfFMoPBsmg3dIVNoVXMAnqDtqkBsZG9gVgOc"
    },
    {
      title: "Bleach",
      since: "1990",
      author: "Băng",
      price: "5000",
      views: 400000,
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbprTrqQv2sq_mSBcxrX8B4TsM682Vrd4UGKJYWqBbmcohhPGrSvAnWlV8cVFy"
    }
  ];
}