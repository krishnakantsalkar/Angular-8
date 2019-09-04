import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property",
  templateUrl: "./property.component.html",
  styleUrls: ["./property.component.css"]
})
export class PropertyComponent implements OnInit {
  constructor() {}
  public username: string = "Alex Mercer";
  public courses: string[] = ["Angular", "React", "Node", "Javascript"];
  public protagonist = [
    {
      name: "Alex",
      id: 1,
      email: "alexmerecer09@gmail.com"
    },
    {
      name: "Prophet",
      id: 2,
      email: "prophet@outlook.com"
    },
    {
      name: "Soap",
      id: 3,
      email: "mactavish@outlook.co.id"
    },
    {
      sessions: [
        {
          batch: 1
        },
        { batch: 2 },
        { batch: 3 }
      ]
    },
    {
      name: "isaac",
      id: 4,
      email: "IsaacClarke@earthgov.org"
    }
  ];
  ngOnInit() {}
}
