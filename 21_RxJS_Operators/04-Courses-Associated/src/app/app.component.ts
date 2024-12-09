import { Component } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  User = [
    {id:1,name:'User 1'},
    {id:2,name:'User 2'},
    {id:3,name:'User 3'}
  ];

  Courses = [
    {
      courseId:1,
      title: 'JavaScript'
    },
    {
      courseId:1,
      title: 'Python'
    },
    {
      courseId:2,
      title: 'C'
    },
    {
      courseId:3,
      title: 'C++'
    },
    {
      courseId:3,
      title: 'Java'
    }
  ];

  ngOnInit(){

    from(this.User)
    .pipe(
      mergeMap((user)=>{
        const courseData = this.Courses.filter(
          (course) => course.courseId === user.id
        );
        return of({user,courses:courseData});
      })
    ).subscribe((res)=>{
      console.log("Combined User & Courses: ", res);
    })
  }
}
