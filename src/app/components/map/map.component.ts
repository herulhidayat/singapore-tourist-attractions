import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import * as L from 'leaflet';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit {
  isActive: boolean = false;
  private map: any;
  data = [];

  initMap(): void {
    
  }
  
  constructor(public sidebarService: SidebarService, public dataService: DataService) { }

  ngOnInit(): void {
    this.map = L.map('map').setView([1.290270, 103.851959], 15);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.sidebarService.isActive.subscribe((isActive) => {
      this.isActive = isActive;
    });
    this.dataService.data.subscribe((data) => {
      this.data = data
      for(let i=0;i<data.length;i++){
        const lat = data[i].lat
        const long = data[i].long
        const name = data[i].name
        const desc = data[i].description
        var myIcon = L.icon({
            iconUrl: '../../../assets/images/point.svg',
            iconSize: [30, 80],
            iconAnchor: [20, 60],
            popupAnchor: [-5, -40],
        });
        L.marker([lat, long], {icon: myIcon}).addTo(this.map)
            .bindPopup(name +"</br></br>"+ desc)
            .openPopup();
      }
    })
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
