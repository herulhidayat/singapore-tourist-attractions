import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public sidebarService: SidebarService) {
    console.log('SidebarService is instantiated');
  }

  setActive() {
    this.sidebarService.setActive(!this.sidebarService.isActive.value);
  }
}
