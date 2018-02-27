import { Component } from '@angular/core';

class Product{
  Image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Book';
  listOfProduct:Product[]=[{
    Image:"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
  },
  ]
}
