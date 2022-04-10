import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 8,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/pizza.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Salad',
        price: 1.75,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'western'],
        stars: 4.7,
        imageUrl: '/assets/Salad.jpg',
        tags: ['Salad', 'Breakfast'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 3.5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/hamberger.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/french-fried.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 6.5,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/soup.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Ham',
        price: 4.5,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/ham.jpg',
        tags: ['FastFood', 'ham', 'Lunch'],
      },
      {
        id: 7,
        name: 'Chicken',
        price: 5,
        cookTime: '25-35',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/chicken.jpg',
        tags: ['FastFood', 'chicken', 'Lunch'],
      },
      {
        id: 8,
        name: 'Sandwich',
        price: 1.5,
        cookTime: '10-15',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/sandwich.png',
        tags: ['FastFood', 'sandwich', 'Lunch'],
      },
      {
        id: 9,
        name: 'Bread',
        price: 1,
        cookTime: '0-5',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/bread.jpg',
        tags: ['FastFood', 'bread', 'breadkfast'],
      },
      {
        id: 10,
        name: 'Spaghetti',
        price: 7,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/spaghetti.jpg',
        tags: ['FastFood', 'Spaghetti', 'Lunch'],
      },
    ];
  }
}
