import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  public islike: boolean;
  public gender: any;
  public Male = {
    name: "Alex",
    imgUrl: "../../../assets/images/download.jfif"
  };
  public Female = {
    name: "Ellie",
    imgUrl: "../../../assets/images/1004667_340322516098945_78645588_n.jpg"
  };
  constructor() {}
  likeHeart() {
    this.islike = !this.islike;
  }

  ngOnInit() {}
}
