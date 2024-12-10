import { Component } from "@angular/core";

interface Skill {
  name: String;
  wellness: number;
}
@Component({
  selector: "app-skills",
  imports: [],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: "hibernate", wellness: 99 },
    { name: "Java", wellness: 90 },
    { name: "flutter/dart", wellness: 90 },
    { name: "Angular/TypeScript", wellness: 90 },
    { name: "Agile Software Development", wellness: 80 },
    { name: "Linux adminstration", wellness: 50 },
    { name: "Python", wellness: 80 },
    { name: "C++", wellness: 80 },
    { name: "sql", wellness: 80 },
    { name: "Design Patterns", wellness: 50 },
    { name: "Datastructures And Algorithms", wellness: 30 },
    { name: "Spring", wellness: 30 },
    { name: "HTML", wellness: 30 },
    { name: "CSS", wellness: 30 },
    { name: "JavaScript", wellness: 30 },
    { name: "RUST", wellness: 10 },
    { name: "Flask", wellness: 10 },
    { name: "Electrical Engineering", wellness: 10 },
    { name: "UI/UX Design", wellness: 5 },
  ];
  constructor() {
    this.skills = this.skills.sort((a2, a1) => {
      if (a1.wellness > a2.wellness) {
        return 1;
      }
      if (a1.wellness < a2.wellness) {
        return -1;
      }
      return 0;
    });
  }
}
