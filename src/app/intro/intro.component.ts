import { Component } from "@angular/core";

@Component({
  selector: "app-intro",
  imports: [],
  templateUrl: "./intro.component.html",
  styleUrl: "./intro.component.css",
})
export class IntroComponent {
  download() {
    window.open("assets/resume.pdf", "_blank");
  }
}
