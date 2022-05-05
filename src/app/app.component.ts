import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { routeAnimations } from "./shared/animations/routeAnimations";
import { slideInAnimation } from "./shared/animations/slideInAnimation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimations],
})
export class AppComponent {
  title = "KLG-Task";

  prepareRoute(outlet: RouterOutlet): RouterOutlet {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
