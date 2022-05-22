import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productsList } from './courses/course-products';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: any = [];
  constructor(private httpClient: HttpClient) { 
  }

  getCoursesList(): Observable<productsList[]> {
    return this.httpClient.get<productsList[]>("assets/courses.json")
  }
}
