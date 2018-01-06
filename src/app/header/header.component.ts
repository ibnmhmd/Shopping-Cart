import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms/src/directives/form_interface';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import SimpleCryptoJS from 'simple-crypto-js';
declare var require: any;
const usersModule = require('../manage-users-cart');
declare var $: any ;

const SECRET_KEY = 'XHER32985RTBDFMGNDKJS5643FAZQW';
const simpleCrypto = new SimpleCryptoJS(SECRET_KEY);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  counter: Number = 0 ;
  email: String = '';
  pass: String = '';
  loginForm: any;
  userError: Boolean = false;
  userLoggedOut: Boolean = true ;
  user: String = '';
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router) {
    this.loginForm = fb.group({
          password: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
          email: ['', Validators.email]
      });
  }

  /********* wrong email or password ******/
  wrongEmailAndOrPassword() {
    this.userError = true;
        setTimeout(() => {
          this.userError = false;
        }, 2000);
  }
  /*********** get first name ******/
  getFirstName(fullName) {
    if (fullName) {
        let _name = [];
        if ( fullName.indexOf(' ') !== -1 ) {
          _name = fullName.split(' ');
          return _name[0];
        }else {
          return fullName;
        }
    }else {
           return fullName;
    }
  }
  submitForm(form) {
    $('#loading').show();
   if ( form.valid) {
    if ( localStorage.getItem('users')) {
      const users = usersModule.getAllRegisteredUsers();
      const user = usersModule.getCurrentUserByEmail(form.value.email);
      if (user) {
           /************** passwords don't match ********/
            $('#loading').hide();
            if (simpleCrypto.decrypt(user.password) !== form.value.password) {
               this.wrongEmailAndOrPassword();
            }else {
              /*************** successfully login user ******/
              $('#loading').hide();
              this.user = this.getFirstName(user.name);
                    const user_data = {
                       'session' : 'loggedIn',
                       'mode': 'registered',
                       'name' : this.user,
                       'email': user.email
                    };
                    localStorage.setItem('user_data', JSON.stringify(user_data));
                    this.userLoggedOut = !this.userLoggedOut;
                    this.setCartCount();
                    $('#loading').hide();
                    this.router.navigate(['/']);

            }
      }else {
        /*********** no similar user ********/
        $('#loading').hide();
         this.wrongEmailAndOrPassword();
      }
    }else {
      this.wrongEmailAndOrPassword();
      this.userLoggedOut = true;
    }
   }
  }
/*************log out  ********/
logoutUser() {
  this.guestUserData();
  this.userLoggedOut = true;
  this.setCartCount();
}
  openPanel() {
    setTimeout(() => {
      $('.slideInRight').addClass('open');
      $(".dropdown-toggle").attr("aria-expanded","true"); 
    }, 1000);
  }
  /*************** cart count for guest and registered users************/
  setCartCount() {
   const data = usersModule.getUserData();
    setTimeout(() => {
      /*********** guest cart count *****/
  if (!usersModule.isRegisteredUser()) {
    if (data.guest_cart ) {
       this.counter = data.guest_cart.length;
     }else {
       this.counter = 0;
     }
    }else {
           if (localStorage.getItem('users')) {
              const registeredUser = usersModule.getCurrentUserByEmail(data.email);
              this.counter = registeredUser.items_in_cart.length;
           }else {
             this.counter = 0;
           }
    }
     }, 1000);
  }
/******************** ends  *************/
  ngOnInit() {
    this.setCartCount();
    if (localStorage.getItem('user_data')) {
      const user_data = JSON.parse(localStorage.getItem('user_data'));
      if (user_data.session === 'loggedIn') {
        this.userLoggedOut = !this.userLoggedOut;
        this.user = user_data.name;
      }
    }else {
      this.guestUserData();
    }
  }

  /************** set guest user info ****/
  guestUserData() {
    let cart ;
    if (localStorage.getItem('guest_cart')) {
      cart = JSON.parse(localStorage.getItem('guest_cart'));
    }else {
       cart = [];
     }
    const user_data = {
      'session' : 'loggedOut',
      'mode': 'guest',
      'name' : '',
      'email': '',
      'guest_cart': cart
    };
    localStorage.setItem('user_data', JSON.stringify(user_data));
    this.router.navigate(['/']);
  }
  /*************** ends  ********/
}
