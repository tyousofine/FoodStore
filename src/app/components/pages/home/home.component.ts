import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) {
        this.foods = this.foodService.getFoodBySearchTerm(params.searchTerm); 
      } else if(params.tag) {
        this.foods = this.foodService.getAllFoodByTag(params.tag)

      } else 
      this.foods = foodService.getAll();
    })   

  }

}
