import { Component, EventEmitter, Output } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule, NgClass, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isCollapsed = false;
  @Output() collapseChange = new EventEmitter<boolean>();

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChange.emit(this.isCollapsed);
  }

  closeMenu() {
    this.isCollapsed = true;
    this.collapseChange.emit(this.isCollapsed);
  }
}
