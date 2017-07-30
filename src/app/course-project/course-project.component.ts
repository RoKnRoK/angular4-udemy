import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-project',
  templateUrl: './course-project.component.html',
  styleUrls: ['./course-project.component.css']
})
export class CourseProjectComponent implements OnInit {
  detailsDisplayed = true;
  displayDetailsClicks = [];
  constructor() { }

  ngOnInit() {
  }
  onDisplayDetails(){
    this.detailsDisplayed = !this.detailsDisplayed;
    this.displayDetailsClicks.push({
      status: "Button was clicked, details " + (this.detailsDisplayed ? 'displayed' : 'hidden'),
      count: this.displayDetailsClicks.length + 1
    })
  }

  getBackgroundColor(index){
    return (index > 3 ? 'blue' : '');
  }
}
