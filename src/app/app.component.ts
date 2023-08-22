import { Component } from '@angular/core';
import { navbarData } from '../app/nav-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BootstrapExamples';
  navData = navbarData;
}
