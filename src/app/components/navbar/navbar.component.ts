import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive: boolean = false;
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.isActive.subscribe((isActive) => {
      this.isActive = isActive;
    });
    console.log("aaa",this.isActive)
  }
}
