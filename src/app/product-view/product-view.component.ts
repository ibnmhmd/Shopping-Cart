import { Component, OnInit } from '@angular/core';
import {CategoryListingServiceService} from '../services/category-listing-service.service';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Categories } from '../enum/categories.enum';
import { ShoppingCategoryServiceService } from '../services/shopping-categories.service';
declare var require: any;

const cartModule = require('../add-item-to-cart.module');

declare var $: any;

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ CategoryListingServiceService, ShoppingCategoryServiceService ]
})
export class ProductViewComponent implements OnInit {
  recommendations: String[] = [];
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
  noItems: Boolean = false;

  constructor(private categoryListingService: CategoryListingServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCategories: ShoppingCategoryServiceService) { }

    /*******************get most popular *************/
    loadRecommendations() {
      this.categoryListingService.getRecommendations().subscribe(data => {
          if ( data ) {
            this. recommendations = data;
          }
        }
          , err => console.log('error')
        );
    }
    /************************end *********************/
    quickView(product, qty) {
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
    /************* add to cart ***********/
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
  ngOnInit() {
    this.loadRecommendations();
    this.products = [];
    $('#loading').show();
    /*************on route change ********/
    this.route.params.forEach(params => {
      window.scroll(0, 0 );
          if(this.route.snapshot.params ['category'])
          {
            this.categoryName = this.route.snapshot.params ['category'];
          }else{
            this.categoryName = ' Not Available ';
          }
          /***********map routing request and fetch corresponding data ****/
          let category = this.categoryName.toLowerCase();
          if (category)
          {
             this.shoppingCategories.getShoppingCategories(category).subscribe(data => {
               if(data.length > 0)
               {
                 this.products = data;
                 this.noItems = false ;
               }else {
                this.noItems = true ;
                this.products = [];
               }
               $('#loading').hide();
             }, err => {
               console.log('Error fetching men\'s categories !!!!');
             })
          }
    
    });
  }

}
