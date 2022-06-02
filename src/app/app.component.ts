import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PixelSky Studios';

  public animation2() {
    window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth'
   });
 }
}
