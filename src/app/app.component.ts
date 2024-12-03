import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './pages/nav-bar/side-nav/side-nav.component';
import {NgClass} from '@angular/common';
import {GetMonitorsComponent} from './pages/functionality/get-monitors/get-monitors.component';
import {GetProjectorsComponent} from './pages/functionality/get-projectors/get-projectors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    SideNavComponent,
    NgClass,
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FRONTEND';

  isCollapsed = false;

  onCollapseChange(collapse: boolean) {
    this.isCollapsed = collapse;
  }
}
