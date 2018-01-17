import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
// import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  // images: any[];

  ngOnInit() {
      // this.images = [];
      // this.images.push({source: 'https://desertdecasa.ro/wp-content/uploads/2017/05/Prajitura-cu-ciocolata-si-capsuni-1-400x255.jpg',
      //  alt: 'Prajitura cu ciocolata si capsuni', title: 'Prajituri'});
      // this.images.push({source: 'https://pxwalls.nyc3.digitaloceanspaces.com/ns/2016/02/21266.jpg',
      // alt: 'Fructe in ciocolata', title: 'Dulciuri'});
      // this.images.push({source: 'https://prajiturilabirou.ro/wp-content/uploads/2014/11/imagine-featured.png',
      //  alt: 'Mini-tarte', title: 'Prajituri'});
      // this.images.push({source: 'http://simplufeminin.com/site/sites/default/files/DSC_1680.JPG',
      //  alt: 'Prajitura vegana', title: 'Prajituri'});
      // this.images.push({source: 'http://www.cronicadeiasi.ro/pictures/images/Mini+prajiturele_cu_crema_de_branza_si_unt_de_arahide.jpg',
      //  alt: 'Mini-prajiturele cu crema de branza si unt de arahide', title: 'Prajituri'});
      // this.images.push({source: 'https://www.bucataras.ro/uploads/modules/news/64466/656x440_cheesecake-cu-capsuni-338456.jpg',
      //  alt: 'Desert cheesecake cu capsun', title: 'Prajituri'});
  }
}
