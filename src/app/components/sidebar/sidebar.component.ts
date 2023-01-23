import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SidebarService } from '../../services/sidebar.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit{
  li:any;
  lis=[];
  data = [];

  constructor(public sidebarService: SidebarService, private http : HttpClient, public dataService: DataService) {
  }

  setActive() {
    this.sidebarService.setActive(!this.sidebarService.isActive.value);
  }

  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/herulhidayat/sg-attractions-db/attractions')
    .subscribe(Response => {
      if(Response){ 
        hideloader();
      }
      console.log(Response)
      this.li=Response;
      this.lis=this.li;
      this.dataService.sendData(this.lis);
    });

    function hideloader(){
        const loadingElement = document.getElementById('loading')
        if (loadingElement){
            loadingElement.style.display = 'none';
        }
    }
  }
}
