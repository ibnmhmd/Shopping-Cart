import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import SimpleCryptoJS from 'simple-crypto-js';

declare var $: any ;

const USER_TOKEN  = SimpleCryptoJS.generateRandom();
const SECRET_KEY = 'XHER32985RTBDFMGNDKJS5643FAZQW' ;
const simpleCrypto = new SimpleCryptoJS(SECRET_KEY);

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  name: String = '';
  email: String = '';
  pass: String = '';
  repass: String = '';
  nameFlag: Boolean = false ;
  emailFlag: Boolean = false ;
  passFlag: Boolean = false ;
  repassFlag: Boolean = false ;
  passwordError: Boolean = false;
  user: any = {};
  created: Boolean = false;
  errorLog: String = '';
  
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  createAccount() {
    $('#loading').show();
    this.validateInputs();
    if (this.nameFlag && this.passFlag && this.repassFlag && this.emailFlag) {
      if (this.pass !== this.repass) {
        this.passwordError = true;
        this.errorLog = 'Error!  Password mismatched .';
        setTimeout(() => {
          this.passwordError = false;
          this.errorLog = '';
        }, 3000);

        $('#loading').hide();
      }else {
        this.user = {
          'name': this.name,
          'email': this.email,
          'password': simpleCrypto.encrypt(this.pass.toString()),
          'user_token': USER_TOKEN,
          'items_in_cart': []
        };
        let usersArray = [];
        if ( localStorage.getItem('users')) {
          usersArray = JSON.parse(localStorage.getItem('users'));
          /********* check for existing user *****/
          Object.keys(usersArray).map((key, value) => {
            if ( usersArray[value].email === this.email) {
              this.errorLog = 'Sorry, (' + this.email + ') is already in use .';
              this.passwordError = true;
              setTimeout(() => {
                this.errorLog = '';
                this.passwordError = false ;
              }, 3000);
            }
          });
        }

        if ( this.passwordError ) {
          return ;
        } 
        usersArray.push(this.user);
        localStorage.setItem('users', JSON.stringify(usersArray));
        this.created = true ;
        this.email = '';
        this.name = '';
        this.pass = '';
        this.repass = '';
        window.scroll( 0, 0);

        setTimeout(() => {
          this.created = false;
          this.router.navigate(['/']);
        }, 3000);

        $('#loading').hide();
      }
    }
  }

  open() {
     this.router.navigate(['/']);
    $('.userPanel').click();
  }
  /************validate*****/
  validateInputs() {
    if (this.name === '' || this.name.length < 5) {
      $('#name').addClass('danger');
      this.nameFlag = false;
    }else {
      $('#name').removeClass('danger');
      this.nameFlag = true;
    }

    if (this.email === '' || ! this.validateEmail(this.email)) {
      $('#email').addClass('danger');
      this.emailFlag = false;
    }else {
      $('#email').removeClass('danger');
      this.emailFlag = true;
    }

    if (this.pass === '' || this.pass.length < 5) {
      $('#pass').addClass('danger');
      this.passFlag = false;
    }else {
      $('#pass').removeClass('danger');
      this.passFlag = true;
    }

    if (this.repass === '' || this.repass.length < 5) {
      $('#re-pass').addClass('danger');
      this.repassFlag = false;
    }else {
      $('#re-pass').removeClass('danger');
      this.repassFlag = true;
    }

  }
  /**************end ***********/

   validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
  ngOnInit() {
  }

}
