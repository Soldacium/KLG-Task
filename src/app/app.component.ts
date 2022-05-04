import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./shared/animations/slideInAnimation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = "KLG-Task";

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    console.log(
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
