import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  isActive: boolean = false;
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.isActive.subscribe((isActive) => {
      this.isActive = isActive;
    });
  }
}
