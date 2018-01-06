import { Component, OnInit } from '@angular/core';
import $ from 'jquery/dist/jquery';
import { Console } from '@angular/core/src/console';
declare var require: any;
const usersModule = require ('../manage-users-cart');
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  noItems: Boolean = false;
  itemRemoved: Boolean = false;
  itemsInCart: any = [];
  noOfItems: Number = 0;
  grandTotal: Number = 0;
  cost: any = 0 ;
  /*** VAT cost is 5% */
  private VAT = .05 ;
  calculatedVAT: Number = 0 ;
  constructor() { }

  /************ setv value ******/
  setCalculation() {
    this.calculateTotalCost();
    this.noOfItems = this.itemsInCart.length;
  }
  /*********** ends *********/
  /********** get items in cart ***/
  extractItems() {
    localStorage.setItem('items', null);
    const data = usersModule.getUserData();
    const currentUser = usersModule.getCurrentUserByEmail(data.email);
    const users = usersModule.getAllRegisteredUsers() ;


    /********** guest users ******/
    if (!usersModule.isRegisteredUser()) {
      if (data) {
          this.itemsInCart = [];
          this.itemsInCart = data.guest_cart;
          this.setCalculation();  
      }else {
           this.noItems = true ;
      }
    }else {
            this.itemsInCart = [];
            this.itemsInCart = currentUser.items_in_cart;
            this.setCalculation();
    }
    localStorage.setItem('items', (String)(this.noOfItems));
  }
  /************* ends *************/
  removeItem(guid) {
    const data = usersModule.getUserData();
    const currentUser = usersModule.getCurrentUserByEmail(data.email);
    const users = usersModule.getAllRegisteredUsers() ;
    if (this.itemsInCart) {
       this.itemsInCart = this.itemsInCart.filter ( item =>  item.guid !== guid );
       if (!usersModule.isRegisteredUser()) {
           data.guest_cart = this.itemsInCart ;
           localStorage.setItem('guest_cart', JSON.stringify(this.itemsInCart));
           localStorage.setItem('user_data', JSON.stringify(data));
       }else {
              currentUser.items_in_cart = this.itemsInCart ;
              /*********** update user data in the storage ****/
              const filteredUsers = users.filter((user) => user.email !== data.email );
              filteredUsers.push(currentUser);
              localStorage.setItem('users', JSON.stringify(filteredUsers));
       }

      window.scroll(0, 0 );
      this.itemRemoved = true ;
      this.noItems = false ;
      setTimeout(() => {
       this.itemRemoved = false ;
      }, 2000);
      this.calculateTotalCost();
      $('.trigger').click();
    }
  }
  /********************** calculate cost *****/
  calculateTotalCost() {
    localStorage.setItem('grandTotal', null);
    localStorage.setItem('VAT', null);
    this.cost = 0;
    if (this.itemsInCart && this.itemsInCart.length !== 0) {
        Object.keys(this.itemsInCart).map((key, value) => {
        this.cost += (this.itemsInCart[value].price * this.itemsInCart[value].quantity);
      });

      this.grandTotal = this.cost + this.calculateVAT(this.cost);
      localStorage.setItem('grandTotal', (String)(this.grandTotal));
      localStorage.setItem('VAT', (String)(this.calculatedVAT));
    }else {
     setTimeout(() => {
      this.noItems = true;
     }, 3000);
    }
    this.noOfItems = this.itemsInCart.length;
    localStorage.setItem('items', (String)(this.noOfItems));
  }
  /********************ends ***************/
  /****************** calculate vat ****/
  calculateVAT(cost)
  {
    if(cost)
     this.calculatedVAT = this.VAT*cost
     return this.calculatedVAT;
  }
  /***************ends ***************/
  ngOnInit() {
    this.extractItems();
  }

}
