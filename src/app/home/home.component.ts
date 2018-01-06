import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CategoryListingServiceService} from '../services/category-listing-service.service';
declare var $: any;
declare var require: any;
const cartModule = require('../add-item-to-cart.module');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ CategoryListingServiceService ]
})
export class HomeComponent implements OnInit, AfterViewInit {
 
  recommendations: any = [];
  categoryName: String = '';
  products: String[] = [];
  img: String = '';
  name: String = '';
  price: Number = 0;
  selectedQty = '0';
  qty: Number = 0;
  model: String = '';
  quantity: any [] = [];
  qtyNotSelected: Boolean = false;
  itemAdded: Boolean = false;
  fetchedData: any = {};
  constructor(private categoryListingService: CategoryListingServiceService) { }

  ngAfterViewInit(): void {
  //  $('#zoom').elevateZoom();
  }

    /*******************get most popular *************/
    loadRecommendations() {
      this.categoryListingService.getRecommendations().subscribe(data =>
        {
          if(data)
          { 
            this. recommendations = data;
          }
        }
          , err => console.log('error')
        );
    }
    /************************end *********************/
    quickView(product) {
      if ( product) {
        this.fetchedData  = [], this.quantity = [];
        this.img = product.img;
        this.name = product.cat_title;
        this.price = product.price;
        this.model = product.guid;
        for ( let i = 1; i <= product.quantity; i++) {
          this.quantity.push(i);
        }
        $('#quickView').modal('show');
        this.fetchedData = product ;
      }
    }

  ngOnInit() {
    window.scroll(0 , 0);
    this.loadRecommendations();
    this.categoryName = 'recommendations';
  
  }


  addToCart() {
    if ( this.selectedQty === '0') {
      this.qtyNotSelected = true;
      this.itemAdded = false;
      setTimeout(() => {
        this.qtyNotSelected = false;
      }, 3000);
    }else {
      cartModule.addItemToCustomerCart(this.fetchedData, this.selectedQty);
      this.itemAdded = true;
      this.qtyNotSelected = false;
      setTimeout(() => {
        this.itemAdded = false ;
        $('#quickView').modal('hide');
      }, 2000);
      $('.trigger').click();
      this.selectedQty = '0';
    }
  }
}
