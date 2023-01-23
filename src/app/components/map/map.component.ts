import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit {
  isActive: boolean = false;
  private map: any;

  private initMap(): void {
    this.map = L.map('map').setView([1.290270, 103.851959], 15);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.isActive.subscribe((isActive) => {
      this.isActive = isActive;
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
