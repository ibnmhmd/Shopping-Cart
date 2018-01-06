import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Categories } from '../enum/categories.enum';
import { ShoppingCategoryServiceService } from '../services/shopping-categories.service';
import $ from 'jquery/dist/jquery';
import { FormsModule } from '@angular/forms';
declare var require: any;

const cartModule = require('../add-item-to-cart.module');

@Component({
  selector: 'app-product-full-view',
  templateUrl: './product-full-view.component.html',
  styleUrls: ['./product-full-view.component.scss'],
  providers: [ShoppingCategoryServiceService]
})
export class ProductFullViewComponent implements OnInit, AfterViewInit {

category: String = '';
guid: String = '';
fetchedData: String[] = [];
slicedObject: any;
quantities: Number[] = [];
quantity: any;
selectedValue: any = 0;
qtyNotSelected: Boolean = false;
cartItem: any ;
itemAdded: Boolean = false ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCategories: ShoppingCategoryServiceService) { }

    ngAfterViewInit(): void {
    
    }


/**************get men's categories **********/
loadShoppingCategories(guid, category) {
  this.shoppingCategories.getShoppingCategories(category).subscribe(data => {
    if (data) {
      this.extractProductFromObject(guid, data);
    }
  }, err =>
   console.log('Error occured !!!!'));
}
/**************** ends *********************/

/*************extract clicked product detailes */
extractProductFromObject(guid, object)
{
  this.quantities = [];
  this.slicedObject = object.find((sliced) => {
    return sliced.guid === guid ;
  });
    
  if( this.slicedObject ) {
    for( let i = 1 ; i <= this.slicedObject.quantity; i++)
    {
       this.quantities.push( i );
    }
  }
}

/************** add item to cart *******/
addToCart() {
   /***************** set error message if quantity not set *****/
   if (0 === this.selectedValue || '0' === this.selectedValue ) {
     this.qtyNotSelected = true ;
     this.itemAdded = false ;
     window.scroll(0, 0 );
     setTimeout(() => {
      this.qtyNotSelected = false ;
      window.scrollTo(0, document.body.scrollHeight);
     }, 2000);
   }else {
     /*********** extract the old values in the storage and append the new ones  ****/
     cartModule.addItemToCustomerCart(this.slicedObject, this.selectedValue);

     this.qtyNotSelected = false ;
     this.itemAdded = true ;
     window.scroll(0, 0 );
     setTimeout(() => {
      this.itemAdded = false ;
     }, 2000);
     $('.trigger').click();
   }
}
/*************** ends *****************/

setQty()
{

}
  ngOnInit() {

    /****************check the category through url and load it's corresponding data ***/
    this.category = this.route.snapshot.params['category'];
    this.guid = this.route.snapshot.params['guid'];
    let category = this.category.toLowerCase();
    if(this.category)
    {
        this.loadShoppingCategories(this.guid,category);
    }
    console.log(this.route.snapshot.params['category']);
  }

}
