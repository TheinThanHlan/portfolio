import { Component } from "@angular/core";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [
    IntroComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
})
export class AppComponent {
  title = "portfolio";
}
