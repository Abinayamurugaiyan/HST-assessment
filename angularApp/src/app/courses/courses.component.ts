import { Component, OnInit } from '@angular/core';
import { productsList } from './course-products';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses!: productsList[];
  selectedCourse: productsList;
  crossSellingItems: productsList[] = [];
  isOpenBasketOverlay: boolean = false;
  quantity: string = '1';
  constructor(private coursesService: CoursesService) {
    this.selectedCourse = {} as productsList;
  }

  ngOnInit() {
    this.coursesService.getCoursesList().subscribe(data => {
      this.courses = data;
    });
  }

  openBasketOverlay(course: productsList, quantity: HTMLInputElement) {
    this.isOpenBasketOverlay = true;
    this.quantity = quantity.value;
    this.selectedCourse = course;
    this.courses.map(item => {
      this.selectedCourse.CrossSells.forEach(crossSellItem => {
        if (crossSellItem.ProductId === item.Id) {
          this.crossSellingItems.push(item);
        }
      })
    })
  }

}
