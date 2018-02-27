import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipes[ ] =[ 
  new Recipes('A Test Recipe','This Is Just A Test Recipe Only!', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipes('A Test Recipe','This Is Just A Test Recipe Only!', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipes('A Test Recipe','This Is Just A Test Recipe Only!', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];

  constructor() { }

  ngOnInit() {
  }

}
