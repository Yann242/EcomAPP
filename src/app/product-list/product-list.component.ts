import { Component, OnInit, Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  
  constructor(private dataService : DataServiceService) {}
  data : any;
  ngOnInit() {
    this.dataService.getProduct().subscribe(data => {
      this.data = data
      return this.data;
    }) 
    
  }

}
