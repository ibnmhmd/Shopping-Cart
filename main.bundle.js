webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\n<section>\n    <div class=\"container\">\n      <div class=\"row\">\n        <app-product-category></app-product-category>\n           <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n               <div class=\"row\">\n                 <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                   <h2 class=\"text-center text-underline\">{{categoryName | uppercase}}</h2></div>\n               </div>\n\n                <!-- info -->\n                <div  class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center media media-bold\">\n                    <div class=\"col-xs-12\"><h3 class=\"media-bold noResult\"><i>Who are we ?</i></h3></div>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n\n                    <div class=\"col-xs-12 checkout\"><h3 class=\"media-bold noResult\"><i>Our History</i></h3></div>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    <!-- contact-us button -->\n                    <div class=\"col-xs-12 checkout contact-us\"><a class=\"btn btn-block btn-warning \" routerLink = \"/contact-us\"><i class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></i>Contact Us</a></div>\n                    <!-- button ends -->\n                </div>\n                <!-- info ends -->\n          </div>\n      </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-us {\n  padding-bottom: 2em; }\n\n.glyphicon {\n  margin-right: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = (function () {
    function AboutUsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.categoryName = 'About Us';
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            window.scroll(0, 0);
            if (_this.route.snapshot.params['category']) {
                _this.categoryName = _this.route.snapshot.params['category'];
            }
        });
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-item-to-cart.module.js":
/***/ (function(module, exports, __webpack_require__) {

const usersModule = __webpack_require__("../../../../../src/app/manage-users-cart.js");

addItemToCustomerCart = (fetchedData, selectedQty) => {
    const data = usersModule.getUserData();
    const users = usersModule.getAllRegisteredUsers() ;
    let currentUser ;
/*********** extract the old values in the storage and append the new ones  ****/
let _extract_data = [];
if (!usersModule.isRegisteredUser()) {
  _extract_data = data.guest_cart ;
  _extract_data = _extract_data.filter (object => object.guid !== fetchedData.guid );

}else {
     currentUser = usersModule.getCurrentUserByEmail( data.email );
     _extract_data = currentUser.items_in_cart ;
     _extract_data = _extract_data.filter (object => object.guid !== fetchedData.guid );
}
 fetchedData['quantity'] = selectedQty;
 /********** set new value **********/
 if ( _extract_data === null) {
   _extract_data = [];
 }
 _extract_data.push(fetchedData );
 /************* new value ends ******/

/******************* guest user *******/
if (!usersModule.isRegisteredUser()) {
 data.guest_cart = _extract_data ;
 localStorage.setItem('guest_cart', JSON.stringify(_extract_data ));
 localStorage.setItem('user_data', JSON.stringify(data));
}else
  /*************** customer user*****/
if (usersModule.isRegisteredUser()) {
  /*********** add items to cart *****/
  currentUser.items_in_cart = _extract_data ;
  /******* replace customer object ******/
  const fresh_users = users.filter((user) => user.email !== data.email);
  fresh_users.push(currentUser);
  localStorage.setItem('users', JSON.stringify(fresh_users));
}
    
}

module.exports = {
    addItemToCustomerCart
}

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_view_product_view_component__ = __webpack_require__("../../../../../src/app/product-view/product-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_full_view_product_full_view_component__ = __webpack_require__("../../../../../src/app/product-full-view/product-full-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_items_cart_items_component__ = __webpack_require__("../../../../../src/app/cart-items/cart-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__thankyou_thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'view-product',
        component: __WEBPACK_IMPORTED_MODULE_3__product_view_product_view_component__["a" /* ProductViewComponent */]
    },
    {
        path: 'view-product/:category',
        component: __WEBPACK_IMPORTED_MODULE_3__product_view_product_view_component__["a" /* ProductViewComponent */]
    },
    {
        path: 'full-view/:category/:guid',
        component: __WEBPACK_IMPORTED_MODULE_4__product_full_view_product_full_view_component__["a" /* ProductFullViewComponent */]
    },
    {
        path: 'cart-view',
        component: __WEBPACK_IMPORTED_MODULE_5__cart_items_cart_items_component__["a" /* CartItemsComponent */]
    },
    {
        path: 'secure-checkout',
        component: __WEBPACK_IMPORTED_MODULE_6__checkout_checkout_component__["a" /* CheckoutComponent */]
    }, {
        path: 'thank-you',
        component: __WEBPACK_IMPORTED_MODULE_7__thankyou_thankyou_component__["a" /* ThankyouComponent */]
    },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component__["a" /* AboutUsComponent */]
    }, {
        path: 'contact-us',
        component: __WEBPACK_IMPORTED_MODULE_9__contact_us_contact_us_component__["a" /* ContactUsComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<!-- <div id=\"loading\" class=\"modal\">             \n    <img  src=\"assets/img/ajax-loader.gif\" id=\"imageR\">\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 99999;\n  /* Sit on top */\n  padding-top: 70px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(4, 4, 4, 0.81);\n  /* Black w/ opacity */\n  text-align: center; }\n\n#imageR {\n  margin-top: 11%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partials_partials_component__ = __webpack_require__("../../../../../src/app/partials/partials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_view_product_view_component__ = __webpack_require__("../../../../../src/app/product-view/product-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partials_product_category_product_category_component__ = __webpack_require__("../../../../../src/app/partials/product-category/product-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_full_view_product_full_view_component__ = __webpack_require__("../../../../../src/app/product-full-view/product-full-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partials_breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/partials/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_items_cart_items_component__ = __webpack_require__("../../../../../src/app/cart-items/cart-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__thankyou_thankyou_component__ = __webpack_require__("../../../../../src/app/thankyou/thankyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__partials_partials_component__["a" /* PartialsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_view_product_view_component__["a" /* ProductViewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__partials_product_category_product_category_component__["a" /* ProductCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_full_view_product_full_view_component__["a" /* ProductFullViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__partials_breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__cart_items_cart_items_component__["a" /* CartItemsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__thankyou_thankyou_component__["a" /* ThankyouComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__contact_us_contact_us_component__["a" /* ContactUsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cart-items/cart-items.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>  \n    <section>\n        <div class=\"container\">      \n          <div class=\"row\">\n            <app-product-category></app-product-category>\n                  <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n                        <div *ngIf=\"noItems\" class=\"alert alert-danger\">\n                            <strong>OOPS ! No Items Added To The Cart. </strong>\n                        </div>\n                        <a *ngIf=\"noItems\" class=\"btn btn-block btn-warning\" routerLink = '/'>Shop Now</a>\n                        <div *ngIf=\"itemRemoved\" class=\"alert alert-success\">\n                            <strong>Item Has Been Successfuly Removed From The Cart.</strong>\n                        </div>\n\n                    <div class=\"row media\" *ngFor =\"let item of itemsInCart\">\n                      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n                        <!-- items in cart -->\n                        <figure>\n                           <a><img src = \"{{item.thumbnail_img}}\" class=\"img-responsive\"></a> \n                        </figure>\n                        <!-- items in cart end -->\n                      </div>\n\n                      <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 info\">\n                          <!-- items in cart -->\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"><h4>{{item?.cat_title}}</h4></div>          \n                          <!-- items in cart end -->\n                      </div>\n\n                         <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 info\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><h4>Quantity : {{item?.quantity}}</h4></div>\n                            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><h4>AED{{item?.price}}</h4></div>   \n                            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><h5><i (click)= \"removeItem(item.guid)\" class=\"fa fa-trash move\" aria-hidden=\"true\"></i><span class=\"move\" (click)= \"removeItem(item.guid)\">Remove</span></h5></div>\n                            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><h5><i class=\"fa fa-pencil-square-o move\" aria-hidden=\"true\" [routerLink] = \"['/full-view/',item.category, item.guid]\"></i><span [routerLink] = \"['/full-view/',item.category, item.guid]\" class=\"move\">Edit</span></h5></div>\n                        </div>\n                    </div>\n                 </div>\n                    <!-- cart info -->\n                     <div *ngIf=\"!noItems\" class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center media media-bold\">\n                        <div class=\"col-xs-12\"><h4 class=\"media-bold\"><i>Order Summary</i></h4></div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><span>Item(s) :</span><span class=\"result\">{{noOfItems}}</span></div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><span>Ship To :</span><span class=\"result\">Dubai</span></div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><span>VAT (5%):</span><span class=\"result\"> AED {{calculatedVAT}}</span></div>\n                        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><span>Grand Total :</span><span class=\"result\">{{grandTotal}}</span> </div>\n                        <!-- checkout button -->\n                        <div class=\"col-xs-12 checkout\"><a class=\"btn btn-block btn-warning \" routerLink = \"/secure-checkout\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Secure Checkout</a></div>\n                        <!-- checkout button ends -->\n                    </div>\n                    <!-- info ends -->\n                    <div class=\"clearfix\"></div>\n           </div>\n          \n       </div>\n   </section>"

/***/ }),

/***/ "../../../../../src/app/cart-items/cart-items.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img:hover {\n  cursor: pointer; }\n\n.move {\n  margin-right: 0.5em; }\n\n.move:hover {\n  cursor: pointer;\n  color: darkorange; }\n\n.info {\n  text-align: center; }\n\n.result {\n  margin-left: 0.5em; }\n\n.media-bold {\n  font-weight: bold; }\n\n.checkout {\n  padding: 1em 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart-items/cart-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var usersModule = __webpack_require__("../../../../../src/app/manage-users-cart.js");
var CartItemsComponent = (function () {
    function CartItemsComponent() {
        this.noItems = false;
        this.itemRemoved = false;
        this.itemsInCart = [];
        this.noOfItems = 0;
        this.grandTotal = 0;
        this.cost = 0;
        /*** VAT cost is 5% */
        this.VAT = .05;
        this.calculatedVAT = 0;
    }
    /************ setv value ******/
    CartItemsComponent.prototype.setCalculation = function () {
        this.calculateTotalCost();
        this.noOfItems = this.itemsInCart.length;
    };
    /*********** ends *********/
    /********** get items in cart ***/
    CartItemsComponent.prototype.extractItems = function () {
        localStorage.setItem('items', null);
        var data = usersModule.getUserData();
        var currentUser = usersModule.getCurrentUserByEmail(data.email);
        var users = usersModule.getAllRegisteredUsers();
        /********** guest users ******/
        if (!usersModule.isRegisteredUser()) {
            if (data) {
                this.itemsInCart = [];
                this.itemsInCart = data.guest_cart;
                this.setCalculation();
            }
            else {
                this.noItems = true;
            }
        }
        else {
            this.itemsInCart = [];
            this.itemsInCart = currentUser.items_in_cart;
            this.setCalculation();
        }
        localStorage.setItem('items', (String)(this.noOfItems));
    };
    /************* ends *************/
    CartItemsComponent.prototype.removeItem = function (guid) {
        var _this = this;
        var data = usersModule.getUserData();
        var currentUser = usersModule.getCurrentUserByEmail(data.email);
        var users = usersModule.getAllRegisteredUsers();
        if (this.itemsInCart) {
            this.itemsInCart = this.itemsInCart.filter(function (item) { return item.guid !== guid; });
            if (!usersModule.isRegisteredUser()) {
                data.guest_cart = this.itemsInCart;
                localStorage.setItem('guest_cart', JSON.stringify(this.itemsInCart));
                localStorage.setItem('user_data', JSON.stringify(data));
            }
            else {
                currentUser.items_in_cart = this.itemsInCart;
                /*********** update user data in the storage ****/
                var filteredUsers = users.filter(function (user) { return user.email !== data.email; });
                filteredUsers.push(currentUser);
                localStorage.setItem('users', JSON.stringify(filteredUsers));
            }
            window.scroll(0, 0);
            this.itemRemoved = true;
            this.noItems = false;
            setTimeout(function () {
                _this.itemRemoved = false;
            }, 2000);
            this.calculateTotalCost();
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.trigger').click();
        }
    };
    /********************** calculate cost *****/
    CartItemsComponent.prototype.calculateTotalCost = function () {
        var _this = this;
        localStorage.setItem('grandTotal', null);
        localStorage.setItem('VAT', null);
        this.cost = 0;
        if (this.itemsInCart && this.itemsInCart.length !== 0) {
            Object.keys(this.itemsInCart).map(function (key, value) {
                _this.cost += (_this.itemsInCart[value].price * _this.itemsInCart[value].quantity);
            });
            this.grandTotal = this.cost + this.calculateVAT(this.cost);
            localStorage.setItem('grandTotal', (String)(this.grandTotal));
            localStorage.setItem('VAT', (String)(this.calculatedVAT));
        }
        else {
            setTimeout(function () {
                _this.noItems = true;
            }, 3000);
        }
        this.noOfItems = this.itemsInCart.length;
        localStorage.setItem('items', (String)(this.noOfItems));
    };
    /********************ends ***************/
    /****************** calculate vat ****/
    CartItemsComponent.prototype.calculateVAT = function (cost) {
        if (cost)
            this.calculatedVAT = this.VAT * cost;
        return this.calculatedVAT;
    };
    /***************ends ***************/
    CartItemsComponent.prototype.ngOnInit = function () {
        this.extractItems();
    };
    CartItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart-items',
            template: __webpack_require__("../../../../../src/app/cart-items/cart-items.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart-items/cart-items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartItemsComponent);
    return CartItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>  \n    <section>\n        <div class=\"container\">      \n          <div class=\"row\">\n            <app-product-category></app-product-category>\n                  <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n                         <div *ngIf=\"orderError\" class=\"alert alert-danger\">\n                            <strong>Error ! Error Processing Your Order Please Fill all Inputs. </strong>\n                         </div>\n\n                         <div *ngIf=\"addressSet\" class=\"alert alert-success\">\n                            <strong>{{addressMessage}}</strong>\n                         </div>\n                        <a *ngIf=\"orderError\" class=\"btn btn-block btn-warning\" routerLink = '/'>Shop Now</a>                     \n                        <div class=\"row media\">\n                               <!-- shipping info -->\n                               <div class=\"col-xs-12 col-sm-12\">\n                                  <h3 class=\"text-center\"> Shipping Information</h3>                              \n                              </div>\n                               <!--  end -->\n\n                               <!-- input fields -->\n                                <div class=\"col-xs-12 form-group\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" id=\"firstName\" [(ngModel)] = \"firstName\" (change) =\"changeEvent()\">\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" id=\"lastName\" [(ngModel)] = \"lastName\">\n                                  </div>\n                                </div>\n\n                                <div class=\"col-xs-12 form-group\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" id=\"phone\" [(ngModel)] = \"phone\" ><span id=\"errmsg\"></span>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                      <input type=\"text\" class=\"form-control\" value = \"United Arab Emirates\" [disabled] =\"disable\">\n                                  </div>\n                               </div>\n\n\n                               <div class=\"col-xs-12 form-group\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                      <select name=\"\" id=\"\" class=\"form-control\" id=\"city\" [(ngModel)] = \"city\">>\n                                         <option value=\"0\"> -- Select City -- </option>\n                                         <option value=\"Dubai\"> Dubai</option>\n                                         <option value=\"Abu Dhabi\">Abu Dhabi</option>\n                                         <option value=\"Sharjah\">Sharjah</option>\n                                      </select>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Address\" id=\"address\" [(ngModel)] = \"address\">\n                                  </div>\n                               </div>\n\n\n                               <div class=\"col-xs-12 form-group radio-group\">\n                                   <input type=\"radio\" name = \"address\" class=\"radio-button\" checked=\"checked\" value=\"Home\"><label class=\"radio-button\" >Deliver To Home</label>\n                                   <input type=\"radio\"  name = \"address\" class=\"radio-button\"  value=\"Office\"><label class=\"radio-button\">Deliver To Office</label>\n                                   <a class=\"btn btn-block btn-warning\" (click) =\"setInformation()\"> Set Information</a>\n                               </div>     \n                       </div>\n                    <!-- ends -->\n                       <!-- address -->\n                       <div class=\"row media summary-block\" *ngIf= \"showAddressSet\">\n                          <!-- shipping info -->\n                          <div class=\"col-xs-12 col-sm-12\">\n                             <h3 class=\"text-center\">Order Summary</h3>                              \n                         </div>\n                          <!--  end -->\n                          <div class=\"col-xs-12\">\n\n                             \n                              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 setAddress addressBlock\">                             \n                                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                                    <span>{{ storedAddress?.firstName }} - {{ storedAddress?.lastName }}</span>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                                    <span>United Arab Emirates</span>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                                    <span>{{ storedAddress?.city }}</span>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                                    <span>{{ storedAddress?.phoneNumber }}</span>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                                    <span>{{storedAddress?.address }}</span>\n                                  </div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                                    <span>Deliver To: {{storedAddress?.delivery }}</span>\n                                  </div>\n\n                                  <span class=\"remove\" (click) = \"removeAddress()\"><i (click) = \"removeAddress()\" class=\"fa fa-trash move\" aria-hidden=\"true\" ></i></span> \n                                  <span class=\"edit pull-right\" (click) = \"editAddress()\"><i (click) = \"editAddress()\" class=\"fa fa-pencil-square-o move\" aria-hidden=\"true\" ></i></span> \n                             </div>\n\n                             \n                              <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 setAddress\">\n                                <h5> Items(s) : {{items}}</h5>\n                                <h5> VAT (5%): {{VAT}}</h5>\n                                <h5> Grand Total : {{grandTotal}}</h5>\n                             </div>\n                          </div>\n                          \n                  </div>\n                       <!-- ends -->\n\n                       <!-- payment information -->\n                       <div class=\"row media\" *ngIf = \"showAddressSet\">\n                          <!-- shipping info -->\n                          <div class=\"col-xs-12 col-sm-12\">\n                             <h3 class=\"text-center\"> Payment Information</h3>                              \n                         </div>\n                          <!--  end -->\n\n                          <!-- payment input fields -->\n                           <div class=\"col-xs-12 form-group\">\n                             <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                               <input type=\"text\" class=\"form-control\" placeholder=\"CARD NUMBER\" id=\"cardNumber\" minlength=\"12\" maxlength=\"12\" [(ngModel)] = \"cardNumber\" (keydown) = \"setOrder()\"><span id=\"cardmsg\"></span>\n                             </div>                        \n                           </div>\n\n                           <div class=\"col-xs-12 form-group\">\n                             <div class=\"col-xs-12 col-sm-12 col-md-2\">\n                                 <input type=\"text\" class=\"form-control monthPicker\"\n                                  placeholder=\"MONTH\" minlength=\"2\" maxlength=\"2\"  [(ngModel)] = \"month\"  id=\"month\" name=\"month\" (keydown) = \"setOrder()\"><span id=\"monthmsg\"></span>\n                             </div>\n                              <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                                  <input type=\"text\" class=\"form-control monthPicker\"\n                                   placeholder=\"YEAR\"  [(ngModel)] = \"year\" minlength=\"4\" maxlength=\"4\" id=\"year\" (keydown) = \"setOrder()\"><span id=\"yearmsg\"></span>\n                              </div>\n\n                              <div class=\"col-xs-4 col-sm-4 col-md-2\">\n                                  <input type=\"text\" class=\"form-control\" minlength=\"3\" maxlength=\"3\" (keydown) = \"setOrder()\" placeholder=\"CVV\" id=\"cvv\" [(ngModel)] = \"cvv\" id=\"cvv\"><span id=\"cvvmsg\"></span>\n                                \n                              </div>\n\n                              <div class=\"col-xs-4 col-sm-4 col-md-2\">                              \n                                  <h5><span class=\"visa\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-cc-visa\" aria-hidden=\"true\"></i></span></h5> \n\n                                    <!-- master -->\n                                    <h5> <span class=\"visa\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-cc-mastercard\" aria-hidden=\"true\"></i></span></h5>\n                              </div>  \n                           </div> \n                            <!-- place order -->\n                             <div class=\"col-xs-12 col-sm-12 placeOrder\">\n                                <a class=\"btn btn-block btn-warning \" (click) =\"placeOrder()\" > Place Order</a>                           \n                            </div>\n                             <!--  end -->\n                          \n                  </div>\n                       <!-- ends -->\n                 </div>\n                   \n                    <div class=\"clearfix\"></div>\n           </div>\n          \n       </div>\n   </section>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  border: 1px solid #337ab7;\n  border-radius: 0px;\n  height: 45px; }\n\n.radio-group {\n  margin: 1em; }\n  .radio-group .radio-button {\n    margin-left: 0.5em; }\n\n#errmsg, #cvvmsg, #cardmsg, #monthmsg, #yearmsg {\n  color: red; }\n\n.setAddress {\n  background: lightgray;\n  border-radius: 4px; }\n\n.edit:hover {\n  color: darkorange;\n  cursor: pointer; }\n\n.remove {\n  position: absolute;\n  bottom: 0.5em;\n  right: 3em; }\n  .remove:hover {\n    cursor: pointer;\n    color: darkorange; }\n\n.summary-block {\n  padding-bottom: 1em; }\n\n.addressBlock {\n  padding-bottom: 0.4em; }\n\n.fa-check {\n  color: green; }\n\n.placeOrder {\n  padding-bottom: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var usersModule = __webpack_require__("../../../../../src/app/manage-users-cart.js");
var CheckoutComponent = (function () {
    function CheckoutComponent(route, router) {
        this.route = route;
        this.router = router;
        this.orderError = false;
        this.disable = true;
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.city = '0';
        this.address = '';
        this.addressInterface = { firstName: '', lastName: '', phoneNumber: 0, city: '', address: '', delivery: '' };
        this.addressSet = false;
        this.showAddressSet = false;
        this.addressMessage = '';
        this.cardNumber = '';
        this.month = '';
        this.year = '';
        this.cvv = '';
        this.card = false;
        this.cvvB = false;
        this.monthB = false;
        this.yearB = false;
    }
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        this.showError("phone", 'errmsg');
        this.showError("cardNumber", 'cardmsg');
        this.showError("cvv", 'cvvmsg');
        this.showError("cvv", 'cvvmsg');
        this.showError("month", 'monthmsg');
        this.showError("year", 'yearmsg');
    };
    CheckoutComponent.prototype.showError = function (id, span) {
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()("#" + id).keypress(function (e) {
            //if the letter is not digit then display error and don't type anything
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                //display error message
                __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()("#" + span).html("Digits Only").show().fadeOut(1000);
                return false;
            }
        });
    };
    CheckoutComponent.prototype.placeOrder = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#loading').show();
        /*********validate input ****/
        if (this.cardNumber === '' || this.cardNumber.length < 12) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#cardNumber').addClass('danger');
            this.card = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#cardNumber').removeClass('danger');
            this.card = true;
        }
        if (this.month === '' || this.month.length < 2) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#month').addClass('danger');
            this.monthB = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#month').removeClass('danger');
            this.monthB = true;
        }
        if (this.year === '' || this.year.length < 4) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#year').addClass('danger');
            this.yearB = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#year').removeClass('danger');
            this.yearB = true;
        }
        if (this.cvv === '' || this.cvv.length < 3) {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#cvv').addClass('danger');
            this.cvvB = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#cvv').removeClass('danger');
            this.cvvB = true;
        }
        /***************place order ******/
        if (this.card && this.cvvB && this.monthB && this.yearB) {
            var data_1 = usersModule.getUserData();
            var currentUser = usersModule.getCurrentUserByEmail(data_1.email);
            var users = usersModule.getAllRegisteredUsers();
            if (!usersModule.isRegisteredUser()) {
                data_1.guest_cart = [];
                localStorage.setItem('guest_cart', JSON.stringify(data_1.guest_cart));
                localStorage.setItem('user_data', JSON.stringify(data_1));
            }
            else {
                var filteredUsers = users.filter(function (user) { return user.email !== data_1.email; });
                currentUser.items_in_cart = [];
                filteredUsers.push(currentUser);
                localStorage.setItem('users', JSON.stringify(filteredUsers));
            }
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#loading').hide();
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('.trigger').click();
            this.router.navigate(['/thank-you']);
        }
        /*****************ends  **************/
    };
    CheckoutComponent.prototype.setOrder = function () {
    };
    /****************set info ********* */
    CheckoutComponent.prototype.changeEvent = function () {
    };
    CheckoutComponent.prototype.setInformation = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#loading').show();
        /*********validate input ****/
        if (this.firstName === '') {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#firstName').addClass('danger');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#firstName').removeClass('danger');
        }
        if (this.lastName === '') {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#lastName').addClass('danger');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#lastName').removeClass('danger');
        }
        if (this.phone === '') {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#phone').addClass('danger');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#phone').removeClass('danger');
        }
        if (this.city === '0') {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#city').addClass('danger');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#city').removeClass('danger');
        }
        if (this.address === '') {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#address').addClass('danger');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#address').removeClass('danger');
        }
        /*****************ends  **************/
        /***************set info ***********/
        if (this.firstName !== '' && this.lastName !== ''
            && this.phone !== '' && this.city !== '0' && this.address !== '') {
            var radio = __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()("input[name='address']:checked").val();
            this.addressInterface.firstName = this.firstName;
            this.addressInterface.lastName = this.lastName;
            this.addressInterface.phoneNumber = (Number)(this.phone);
            this.addressInterface.city = this.city;
            this.addressInterface.address = this.address;
            this.addressInterface.delivery = radio;
            this.addressSet = true;
            this.showAddressSet = true;
            var addressObject = this.addressInterface;
            localStorage.setItem('address', null);
            this.addressMessage = 'Address Has Been Successfuly Set.';
            setTimeout(function () {
                _this.addressSet = false;
                _this.firstName = '';
                _this.lastName = '';
                _this.city = '0';
                _this.phone = '';
                _this.address = '';
                _this.addressMessage = '';
            }, 2000);
            localStorage.setItem('address', JSON.stringify(addressObject));
            if (localStorage.getItem('address')) {
                this.storedAddress = JSON.parse(localStorage.getItem('address'));
            }
            this.items = localStorage.getItem('items');
            this.VAT = localStorage.getItem('VAT');
            this.grandTotal = localStorage.getItem('grandTotal');
        }
        __WEBPACK_IMPORTED_MODULE_1_jquery_dist_jquery___default()('#loading').hide();
    };
    /****************edit address ************/
    CheckoutComponent.prototype.editAddress = function () {
        this.firstName = this.storedAddress.firstName;
        this.lastName = this.storedAddress.lastName;
        this.city = this.storedAddress.city;
        this.phone = (String)(this.storedAddress.phoneNumber);
        this.address = this.storedAddress.address;
        window.scroll(0, 0);
    };
    CheckoutComponent.prototype.removeAddress = function () {
        var _this = this;
        localStorage.setItem('address', null);
        this.showAddressSet = false;
        this.addressMessage = 'Address Has Been Successfuly Removed.';
        this.addressSet = true;
        setTimeout(function () {
            _this.addressSet = false;
            _this.addressMessage = '';
        }, 2000);
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        this.showAddressSet = false;
        if (null !== localStorage.getItem('address') && 'null' !== localStorage.getItem('address')) {
            this.storedAddress = JSON.parse(localStorage.getItem('address'));
            this.showAddressSet = true;
            this.items = localStorage.getItem('items');
            this.VAT = localStorage.getItem('VAT');
            this.grandTotal = localStorage.getItem('grandTotal');
        }
        else {
            this.showAddressSet = false;
        }
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>\n<section>\n    <div class=\"container\">\n      <div class=\"row\">\n        <app-product-category></app-product-category>\n           <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n               <div class=\"row\">\n                 <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                   <h2 class=\"text-center text-underline\">CONTACT US</h2></div>\n               </div>\n\n                <!-- info -->\n                <div  class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center media media-bold\">\n                    <div class=\"col-xs-12\"><h3 class=\"media-bold noResult\"><i>Welcome here </i></h3></div>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium.</p>\n\n                    <div class=\"col-xs-12 checkout\"><h3 class=\"media-bold noResult\"><i>Keep in touch using the form below</i></h3></div>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ad asperiores quaerat repellat dolor pariatur, officia veritatis eius non vero fuga, ipsam animi, tempore praesentium. </p>\n                    \n                    <div class=\"col-xs-12 checkout fom\">\n                      <div class=\"wrapper\">\n                        <div class=\"inner-box\">\n                            <form  class=\"\">                       \n                                 <div class=\"form-group\">\n                                  <label>Your name</label>\n                                  <input name = \"name\" [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" id= \"name\" placeholder=\"Your name here\" maxlength=\"20\">\n                                </div>\n            \n                                <div class=\"form-group\">\n                                    <label>Your email</label>\n                                    <input name=\"email\" [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email here\">\n                                </div>\n\n                                  <div class=\"form-group\">\n                                      <label>Your message</label>\n                                      <textarea maxlength=\"20\" name=\"message\" [(ngModel)]=\"message\" class=\"form-control\" id=\"message\"></textarea>\n                                 </div> \n                                 \n                                 <a class=\"btn btn-block btn-warning text-center text-uppercase\" style=\"color: white; font-weight: bold\" (click)=\"sendMessage()\"> Send Message</a>\n                              </form>\n                        </div>\n                      </div>\n                      <div *ngIf=\"created\" class=\"alert alert-success text-center\">\n                         <strong >Thank you ! message has been sent, we'll get back to you as soon as possible . </strong>\n                     </div>\n                    </div>\n                    <!-- contact-us button -->\n                    <!-- button ends -->\n                </div>\n                <!-- info ends -->\n          </div>\n      </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-us {\n  padding-bottom: 2em; }\n\n.glyphicon {\n  margin-right: 0.5em; }\n\n.form-group {\n  text-align: left; }\n  .form-group label {\n    color: black; }\n\n.wrapper {\n  border: 1px solid #337ab7;\n  border-radius: 5px; }\n\n.fom {\n  padding-bottom: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.name = '';
        this.email = '';
        this.message = '';
        this.nameFlag = false;
        this.emailFlag = false;
        this.messageFlag = false;
        this.created = false;
    }
    ContactUsComponent.prototype.sendMessage = function () {
        var _this = this;
        this.validateInputs();
        if (this.nameFlag && this.messageFlag && this.emailFlag) {
            this.email = '';
            this.message = '';
            this.name = '';
            this.created = true;
            setTimeout(function () {
                _this.created = false;
                window.scroll(0, 0);
            }, 7000);
        }
    };
    /************validate*****/
    ContactUsComponent.prototype.validateInputs = function () {
        if (this.name === '' || this.name.length < 5) {
            $('#name').addClass('danger');
            this.nameFlag = false;
        }
        else {
            $('#name').removeClass('danger');
            this.nameFlag = true;
        }
        if (this.email === '' || !this.validateEmail(this.email)) {
            $('#email').addClass('danger');
            this.emailFlag = false;
        }
        else {
            $('#email').removeClass('danger');
            this.emailFlag = true;
        }
        if (this.message === '' || this.message.length < 10) {
            $('#message').addClass('danger');
            this.messageFlag = false;
        }
        else {
            $('#message').removeClass('danger');
            this.messageFlag = true;
        }
    };
    /**************end ***********/
    ContactUsComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/enum/categories.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories; });
var Categories;
(function (Categories) {
    Categories["men"] = "men";
    Categories["women"] = "women";
    Categories["electronics"] = "electronics";
    Categories["recommendations"] = "recommendations";
})(Categories || (Categories = {}));


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n         <h4 class=\"text-center\">2018 &copy; All Rights Reserved</h4>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  margin-top: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPaths; });
var GlobalPaths = Object.freeze({
    CAT_PATH: '../zassets/data/categories.json',
    POP_PATH: '../assets/data/most_popular.json',
    REC_PATH: '../assets/data/recommendations.json',
    MEN_PATH: '../assets/data/mens_categories.json',
    ELEC_PATH: '../assets/data/electronics.json',
    USERS_PATH: '../assets/data/users_data.json',
    NO_DATA_PATH: '../assets/data/no_data.json'
});


/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n\n        <div class=\"navbar-header\">\n          <a><img src = \"../assets/img/shoppingcart.png\" class = \"logo\"></a>\n        </div>\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand bold\" routerLink = \"/\">Mini Shopping Cart</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"bold\"> <a routerLink = \"/\"><span class=\"glyphicon glyphicon-home\"> </span> Home</a></li>\n      <li class=\"bold\" routerLink = \"/about-us\"> <a routerLink = \"/about-us\"><i class=\"fa fa-users shift\" aria-hidden=\"true\"></i>About Us</a></li>\n      <li class=\"bold\" routerLink = \"/contact-us\"> <a routerLink = \"/contact-us\"><span class=\"glyphicon glyphicon-envelope shift\"></span>Contact Us</a></li>\n    </ul>\n    <!-- log in/out  -->\n     <ul class=\"nav navbar-nav navbar-right\">\n    <ng-container *ngIf =\"userLoggedOut\">\n      <li class=\"bold\" routerLink = \"/sign-up\"><a routerLink = \"/sign-up\"><span  class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n    </ng-container>\n      <!-- new one -->\n      <ng-container *ngIf =\"userLoggedOut\">\n      <li class=\"bold dropdown log\"> \n        <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-log-in\"  id=\"log\"></span> Login</a>\n          <!-- <a >Log In <span class=\"caret\"></span></a> -->\n          <ul class=\"dropdown-menu dropdown-lr animated slideInRight\" role=\"menu\">\n            <div class=\"col-lg-12\">\n              <div class=\"text-center\">\n                <h3><b>Log In</b></h3></div>\n              <form [formGroup]=\"loginForm\" id=\"ajax-login-form\" role=\"form\" autocomplete=\"off\" (ngSubmit)=\"submitForm(loginForm)\">\n                <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input formControlName=\"email\" type=\"text\" name=\"username\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"off\">\n                  <span class=\"validEmail\" *ngIf=\"loginForm.hasError('email', 'email') && loginForm.get('email').touched\">\n                    Please provide valid email address.\n                  </span>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input  formControlName=\"password\" type=\"password\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"off\">\n                  <span class=\"validEmail\" *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">\n                    Password must be 6 characters or more.\n                  </span>\n\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                     <div class=\"col-xs-12\">\n                      <span class=\"validEmail\" *ngIf=\"userError\">\n                          Wrong Email and or Password. \n                      </span>\n                    </div>\n                    <div class=\"col-xs-12\">\n                      <input [disabled]=\"!loginForm.valid\" type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-warning\" value=\"Log In\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"text-center\">\n                        <span tabindex=\"5\" class=\"forgot-password\">Don't have an account ?</span> <span class=\"join\" routerLink=\"/sign-up\">JOIN US</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <input type=\"hidden\" class=\"hide\" name=\"token\" id=\"token\" value=\"a465a2791ae0bae853cf4bf485dbe1b6\">\n              </form>\n            </div>\n          </ul>\n        </li>\n      </ng-container>\n      <!-- ends here -->\n      <!-- logged in user -->\n      <ng-container *ngIf =\"!userLoggedOut\">\n          <li class=\"bold dropdown log\" > \n              <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"> Welcome {{user}} <span class=\"fa fa-caret-down\" aria-hidden=\"true\"></span></a>\n                <!-- <a >Log In <span class=\"caret\"></span></a> -->\n                <ul class=\"dropdown-menu dropdown-lr animated slideInRight\" role=\"menu\">\n                  <div class=\"col-lg-12\">\n                    <div class=\"text-center\">\n                      <h3><b>{{user | uppercase}}</b></h3>\n                    </div>\n\n                    <form [formGroup]=\"loginForm\" id=\"ajax-login-form\" role=\"form\" autocomplete=\"off\" (ngSubmit)=\"logoutUser()\">\n                      <div class=\"form-group\">\n                        <label for=\"username\">Track Order</label>                       \n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"username\">Previous Orders</label>                        \n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"password\">Manage Account</label>                     \n                      </div>      \n                          <div class=\"col-xs-12\">\n                            <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-warning\" value=\"Log out\">\n                          </div>\n                           \n                      <input type=\"hidden\" class=\"hide\" name=\"token\" id=\"token\" value=\"a465a2791ae0bae853cf4bf485dbe1b6\">\n                    </form>\n                  </div>\n                </ul>\n              </li>\n      </ng-container>\n      <!-- ends -->\n      \n      \n      \n      <!-- <li class=\"bold\"><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li> -->\n      <li><span *ngIf =\"counter>0\" class=\"badge badge-success cartCounter\" routerLink = \"/cart-view\">{{counter}}</span> <a routerLink = \"/cart-view\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></a></li>\n    </ul>\n    <button class=\"hidden trigger\" (click) = \"setCartCount()\"></button>\n    <button class=\"hidden userPanel\" (click) = \"openPanel()\"></button>\n      <!-- log out  -->\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-radius: 0px !important; }\n  .navbar .logo {\n    width: 60px;\n    height: 50px; }\n  .navbar .bold {\n    font-weight: bold;\n    color: white; }\n    .navbar .bold a {\n      color: white; }\n  .navbar .fa-shopping-cart {\n    font-size: 2rem !important;\n    color: white; }\n  .navbar .fa-shopping-cart:hover, .navbar .fa-shopping-cart:focus {\n    color: darkorange; }\n  .navbar .badge {\n    background-color: darkorange;\n    color: black;\n    position: absolute;\n    top: 0.5em;\n    left: 2em;\n    z-index: 100; }\n  .navbar .badge:hover {\n    cursor: pointer;\n    color: white;\n    background-color: darkorange; }\n  .navbar .shift {\n    margin-right: 0.5em; }\n\n.navbar-inverse {\n  background-color: #337ab7 !important;\n  border-color: #337ab7 !important; }\n\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .active > a:hover {\n  color: darkorange !important;\n  background-color: inherit !important; }\n\n.bold a:hover, .bold a:focus {\n  color: darkorange !important; }\n\n.slideInRight {\n  min-width: 20em !important; }\n\n.join:hover {\n  cursor: pointer;\n  color: darkorange; }\n\n.dropdown-toggle {\n  background: #337ab7 !important; }\n\n.validEmail {\n  color: darkred;\n  text-align: center; }\n\n.open {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_crypto_js__ = __webpack_require__("../../../../simple-crypto-js/crypto.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var usersModule = __webpack_require__("../../../../../src/app/manage-users-cart.js");
var SECRET_KEY = 'XHER32985RTBDFMGNDKJS5643FAZQW';
var simpleCrypto = new __WEBPACK_IMPORTED_MODULE_3_simple_crypto_js___default.a(SECRET_KEY);
var HeaderComponent = (function () {
    function HeaderComponent(fb, route, router) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.counter = 0;
        this.email = '';
        this.pass = '';
        this.userError = false;
        this.userLoggedOut = true;
        this.user = '';
        this.loginForm = fb.group({
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]
        });
    }
    /********* wrong email or password ******/
    HeaderComponent.prototype.wrongEmailAndOrPassword = function () {
        var _this = this;
        this.userError = true;
        setTimeout(function () {
            _this.userError = false;
        }, 2000);
    };
    /*********** get first name ******/
    HeaderComponent.prototype.getFirstName = function (fullName) {
        if (fullName) {
            var _name = [];
            if (fullName.indexOf(' ') !== -1) {
                _name = fullName.split(' ');
                return _name[0];
            }
            else {
                return fullName;
            }
        }
        else {
            return fullName;
        }
    };
    HeaderComponent.prototype.submitForm = function (form) {
        $('#loading').show();
        if (form.valid) {
            if (localStorage.getItem('users')) {
                var users = usersModule.getAllRegisteredUsers();
                var user = usersModule.getCurrentUserByEmail(form.value.email);
                if (user) {
                    /************** passwords don't match ********/
                    $('#loading').hide();
                    if (simpleCrypto.decrypt(user.password) !== form.value.password) {
                        this.wrongEmailAndOrPassword();
                    }
                    else {
                        /*************** successfully login user ******/
                        $('#loading').hide();
                        this.user = this.getFirstName(user.name);
                        var user_data = {
                            'session': 'loggedIn',
                            'mode': 'registered',
                            'name': this.user,
                            'email': user.email
                        };
                        localStorage.setItem('user_data', JSON.stringify(user_data));
                        this.userLoggedOut = !this.userLoggedOut;
                        this.setCartCount();
                        $('#loading').hide();
                        this.router.navigate(['/']);
                    }
                }
                else {
                    /*********** no similar user ********/
                    $('#loading').hide();
                    this.wrongEmailAndOrPassword();
                }
            }
            else {
                this.wrongEmailAndOrPassword();
                this.userLoggedOut = true;
            }
        }
    };
    /*************log out  ********/
    HeaderComponent.prototype.logoutUser = function () {
        this.guestUserData();
        this.userLoggedOut = true;
        this.setCartCount();
    };
    HeaderComponent.prototype.openPanel = function () {
        setTimeout(function () {
            $('.slideInRight').addClass('open');
            $(".dropdown-toggle").attr("aria-expanded", "true");
        }, 1000);
    };
    /*************** cart count for guest and registered users************/
    HeaderComponent.prototype.setCartCount = function () {
        var _this = this;
        var data = usersModule.getUserData();
        setTimeout(function () {
            /*********** guest cart count *****/
            if (!usersModule.isRegisteredUser()) {
                if (data.guest_cart) {
                    _this.counter = data.guest_cart.length;
                }
                else {
                    _this.counter = 0;
                }
            }
            else {
                if (localStorage.getItem('users')) {
                    var registeredUser = usersModule.getCurrentUserByEmail(data.email);
                    _this.counter = registeredUser.items_in_cart.length;
                }
                else {
                    _this.counter = 0;
                }
            }
        }, 1000);
    };
    /******************** ends  *************/
    HeaderComponent.prototype.ngOnInit = function () {
        this.setCartCount();
        if (localStorage.getItem('user_data')) {
            var user_data = JSON.parse(localStorage.getItem('user_data'));
            if (user_data.session === 'loggedIn') {
                this.userLoggedOut = !this.userLoggedOut;
                this.user = user_data.name;
            }
        }
        else {
            this.guestUserData();
        }
    };
    /************** set guest user info ****/
    HeaderComponent.prototype.guestUserData = function () {
        var cart;
        if (localStorage.getItem('guest_cart')) {
            cart = JSON.parse(localStorage.getItem('guest_cart'));
        }
        else {
            cart = [];
        }
        var user_data = {
            'session': 'loggedOut',
            'mode': 'guest',
            'name': '',
            'email': '',
            'guest_cart': cart
        };
        localStorage.setItem('user_data', JSON.stringify(user_data));
        this.router.navigate(['/']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <app-product-category></app-product-category>\n       <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n        <!-- carousel starts -->\n            <div class=\"bs-example\">\n              <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                  <!-- Carousel indicators -->\n                  <ol class=\"carousel-indicators\">\n                      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n                      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n                      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n                  </ol>   \n                  <!-- Wrapper for carousel items -->\n                  <div class=\"carousel-inner\">\n                       <div class=\"item active\">\n                          <img src=\"../assets/img/woman-1.jpg\" alt=\"First Slide\">\n                      </div>\n                      <div class=\"item\">\n                          <img src=\"../assets/img/woman-2.jpg\" alt=\"Second Slide\">\n                      </div>\n                      <div class=\"item\">\n                          <img src=\"../assets/img/man-1.jpg\" alt=\"Third Slide\">\n                      </div>\n\n                      <div class=\"item\">\n                        <img src=\"../assets/img/shoes.jpg\" alt=\"Third Slide\">\n                      </div>\n                  </div>\n                  <!-- Carousel controls -->\n                  <a class=\"carousel-control left\" href=\"#myCarousel\" data-slide=\"prev\">\n                      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </a>\n                  <a class=\"carousel-control right\" href=\"#myCarousel\" data-slide=\"next\">\n                      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                  </a>\n              </div>\n          </div>\n      <!-- carousel ends -->\n      </div>\n\n       <!-- recommendations -->\n       <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n          <!-- recommendations carrousel -->\n                  <div class=\"row\">\n                      <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n                          <h3 class=\"text-center\"> Recommendations for You</h3>\n                      </div>\n                      <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n                          <!-- Controls -->\n                          <div class=\"controls pull-right \">\n                              <a class=\"left fa fa-chevron-left btn btn-primary\" href=\"#carousel-example-generic\"\n                                  data-slide=\"prev\"></a><a class=\"right fa fa-chevron-right btn btn-primary\" href=\"#carousel-example-generic\"\n                                      data-slide=\"next\"></a>\n                          </div>\n                      </div>\n                  </div>\n                  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n                      <!-- Wrapper for slides -->\n                      <div class=\"carousel-inner\">\n                          <div class=\"item active\">\n\n                              <div class=\"row\">\n                                  <div class=\"col-sm-4 hoverClassParent\" *ngFor = \"let recommendation of recommendations\">\n                                      <div class=\"col-item\">\n                                          <div class=\"photo\">\n                                              <img src=\"{{recommendation.img}}\" class=\"img-responsive\" alt=\"a\" />\n                                          </div>\n                                          <div class=\"info\">\n                                              <div class=\"row\">\n                                                  <div class=\"price col-sx-12 col-sm-12 col-md-12 col-lg-12\">\n                                                      <h5 class=\" title\"> {{ recommendation.cat_title }}</h5>                                                  \n                                                  </div>\n                                                 \n                                                  <div class=\"price col-sx-12 col-sm-12 col-md-12 col-lg-1\">\n                                                      <h5 class=\"text-center price\"> AED{{ recommendation.price }} </h5>                                                    \n                                                  </div>\n                                                </div>\n\n                                                  <div class=\"separator clear-left\">\n                                                      <p class=\"btn-add\">\n                                                          <i [routerLink] = \"['/full-view/',categoryName, recommendation.guid]\" class=\"fa fa-shopping-cart hoverClass\"></i><a [routerLink] = \"['/full-view/',categoryName, recommendation.guid]\" class=\"hidden-sm hoverClass\">Add to cart</a></p>\n                                                      <p class=\"btn-details\">\n                                                          <i (click) =\"quickView(recommendation)\" class=\"fa fa-eye hoverClass\"></i><a (click) =\"quickView(recommendation)\" class=\"hidden-sm hoverClass\">View</a></p>\n                                                  </div>\n                                                 <div class=\"clearfix\">\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>   \n                              </div>\n                          </div>\n                          <div class=\"item\">\n                              <div class=\"row\">\n                                  <div class=\"col-sm-4 hoverClassParent\" *ngFor =\" let recommendation of recommendations\">\n                                      <div class=\"col-item\">\n                                          <div class=\"photo\">\n                                              <img id=\"zoom\" src=\"{{recommendation.img}}\" class=\"img-responsive\" alt=\"a\" data-zoom-image=\"recommendation.img\"/>\n                                          </div>\n                                          <div class=\"info\">\n                                              <div class=\"row\">\n                                                  <div class=\"price col-sx-12 col-sm-12 col-md-12 col-lg-12\">\n                                                      <h5 class=\" title\"> {{ recommendation.cat_title }}</h5>                                                  \n                                                  </div>\n                                                 \n                                                  <div class=\"price col-sx-12 col-sm-12 col-md-12 col-lg-1\">\n                                                      <h5 class=\"text-center price\"> AED{{ recommendation.price }} </h5>                                                    \n                                                  </div>\n                                                </div>\n\n                                                <div class=\"separator clear-left\">\n                                                    <p class=\"btn-add\">\n                                                        <i [routerLink] = \"['/full-view/',categoryName, recommendation.guid]\" class=\"fa fa-shopping-cart hoverClass\"></i><a [routerLink] = \"['/full-view/',categoryName, recommendation.guid]\" class=\"hidden-sm hoverClass\">Add to cart</a></p>\n                                                    <p class=\"btn-details\">\n                                                        <i (click) =\"quickView(recommendation)\" class=\"fa fa-eye hoverClass\"></i><a (click) =\"quickView(recommendation)\" class=\"hidden-sm hoverClass\">View</a></p>\n                                                </div>\n                                                 <div class=\"clearfix\">\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>   \n                              </div>\n                          </div>\n                      </div>\n                  </div>\n          <!-- recommendation carrousel end -->\n          \n      </div>\n      <!-- recommendation ends -->\n\n    </div>\n  </div>\n</section>\n\n<!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg\" id=\"quickView\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"mmodal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"exampleModalLabel\"> Item Quick View\n    \n                <button type=\"button\" class=\"close pull-right\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </h4>\n              \n            </div>\n            <div class=\"modal-body\">\n                  <div class=\"row\">\n                       <div class=\"col-xs-12\">\n                                <div *ngIf = \"qtyNotSelected\" class=\"alert alert-danger\">\n                                    <strong>OOPS ! Please Choose Quantity Before Adding This Item To The Cart. </strong>\n                                </div>\n    \n                                <div *ngIf=\"itemAdded\" class=\"alert alert-success\">\n                                        <strong>Item Has Been Successfuly Added To The Cart.</strong>\n                                    </div>\n                      </div>\n                       <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                         <figure>\n                             <a href=\"\">\n                                <img src= \"{{img}}\" class=\"img-responsive\">\n                            </a>\n                        </figure>\n                      </div>\n                         <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                            <div class=\"col-xs-12 info\">\n                                <h3 class=\"text-uppercase bold\">{{name}}</h3>\n                                <h4 class=\"bold\">AED {{price}}&nbsp; &nbsp; <span class=\"stock\">In Stock</span></h4>\n                                <h4>{{model}}</h4>\n                            </div>\n                            <div class=\"col-xs-12\">\n                                <div class=\"form-group\">\n                                    <select class=\"form-control view-drop\" [(ngModel)] = \"selectedQty\">\n                                        <option value = \"0\">-- Select Quantity --</option>\n                                        <option value = \"{{q}}\" *ngFor =\"let q of quantity\">{{q}}</option>                              \n                                    </select>\n                                </div>\n                            </div>\n                           \n                            <div class=\"col-xs-12\">\n                                <a class=\"btn btn-block btn-warning\" (click) = \"addToCart()\"><i (click) = \"addToCart()\" class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i> Add to cart </a>\n                            </div>\n                            <div class=\" col-xs-12 name text-center padding-bottom\"><i class=\"fa fa-truck\" aria-hidden=\"true\"></i> <span class=\"truck\">Delivery :</span>\n                                Order in the next 07 hrs 23 mins and receive it in  Dubai\n                                by Sat, Jan 6. </div>                    \n                  </div>\n                       <!-- tabs -->\n                       <div class=\"col-xs-12 name-price clearfix no-border-top\">\n                        <div id=\"exTab3\" class=\"\">\t\n                            <ul  class=\"nav nav-pills\">\n                                  <li class=\"active\">\n                                    <a  href=\"#1b\" data-toggle=\"tab\">Overview</a>\n                                  </li>\n                                  <li><a href=\"#2b\" data-toggle=\"tab\">Description</a>\n                                  </li>\n                                 \n                                </ul>\n                            \n                                  <div class=\"tab-content clearfix\">\n                                    <div class=\"tab-pane active\" id=\"1b\">\n                                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias, accusantium nulla commodi minus quidem ullam amet saepe consequatur quibusdam nesciunt </h5>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"2b\">\n                                      <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus, repudiandae repellendus vero excepturi velit odit eveniet.</h5>\n                                    </div>                                  \n                                  </div>\n                           </div>\n                    </div>\n              </div>\n            </div>\n            <!-- <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            </div> -->\n          </div>\n        </div>\n      </div>\n      <!-- ends -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".porductHolder {\n  margin-top: 1em; }\n\n.mmodal-dialog {\n  margin: 0 auto; }\n  .mmodal-dialog .close {\n    border: 1px solid red; }\n\n.stock {\n  color: green;\n  text-decoration: underline; }\n\n.info {\n  padding-bottom: 2em; }\n\n.btn-block, .btn-block i {\n  font-weight: bold; }\n\n.padding-bottom {\n  padding-bottom: 1.5em; }\n\n.padding-top {\n  padding-top: 1em; }\n\n.select {\n  padding-bottom: 1em; }\n\n.fa-truck, .truck {\n  color: green; }\n\n.name {\n  padding-top: 1em; }\n\n.tab-content {\n  border: 1px solid #337ab7;\n  border-radius: 5px;\n  padding: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__ = __webpack_require__("../../../../../src/app/services/category-listing-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var cartModule = __webpack_require__("../../../../../src/app/add-item-to-cart.module.js");
var HomeComponent = (function () {
    function HomeComponent(categoryListingService) {
        this.categoryListingService = categoryListingService;
        this.recommendations = [];
        this.categoryName = '';
        this.products = [];
        this.img = '';
        this.name = '';
        this.price = 0;
        this.selectedQty = '0';
        this.qty = 0;
        this.model = '';
        this.quantity = [];
        this.qtyNotSelected = false;
        this.itemAdded = false;
        this.fetchedData = {};
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        //  $('#zoom').elevateZoom();
    };
    /*******************get most popular *************/
    HomeComponent.prototype.loadRecommendations = function () {
        var _this = this;
        this.categoryListingService.getRecommendations().subscribe(function (data) {
            if (data) {
                _this.recommendations = data;
            }
        }, function (err) { return console.log('error'); });
    };
    /************************end *********************/
    HomeComponent.prototype.quickView = function (product) {
        if (product) {
            this.fetchedData = [], this.quantity = [];
            this.img = product.img;
            this.name = product.cat_title;
            this.price = product.price;
            this.model = product.guid;
            for (var i = 1; i <= product.quantity; i++) {
                this.quantity.push(i);
            }
            $('#quickView').modal('show');
            this.fetchedData = product;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.loadRecommendations();
        this.categoryName = 'recommendations';
    };
    HomeComponent.prototype.addToCart = function () {
        var _this = this;
        if (this.selectedQty === '0') {
            this.qtyNotSelected = true;
            this.itemAdded = false;
            setTimeout(function () {
                _this.qtyNotSelected = false;
            }, 3000);
        }
        else {
            cartModule.addItemToCustomerCart(this.fetchedData, this.selectedQty);
            this.itemAdded = true;
            this.qtyNotSelected = false;
            setTimeout(function () {
                _this.itemAdded = false;
                $('#quickView').modal('hide');
            }, 2000);
            $('.trigger').click();
            this.selectedQty = '0';
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__["a" /* CategoryListingServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__["a" /* CategoryListingServiceService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-users-cart.js":
/***/ (function(module, exports) {

getUserData = () => {
    let data = [];
    if (localStorage.getItem('user_data') ) {
      data = JSON.parse(localStorage.getItem('user_data'));
    }
    return data;
}

isRegisteredUser = () => {
    let user_data = [] ;
    if (localStorage.getItem('user_data')) {
       user_data = JSON.parse(localStorage.getItem('user_data'));
        if ('guest' === user_data.mode) {
          return false;
        }else
            if ('registered' === user_data.mode) {
              return true;
          }
        }
}

getCurrentUserByEmail = (email) => {
    if(localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = users.find(user => user.email === email);
        return currentUser ;
    }
}
getAllRegisteredUsers = () =>{
    if(localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    }
}

module.exports =
{
    getUserData ,
    isRegisteredUser,
    getCurrentUserByEmail,
    getAllRegisteredUsers
}

/***/ }),

/***/ "../../../../../src/app/partials/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<section> \n <div class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <ul class=\"breadCrums clearfix\">\n        <li><a  routerLink = \"/\"> HOME</a> </li>\n        <li *ngIf =\"categoryName !== '' \"><a [routerLink] = \"['/view-product', categoryName]\">{{categoryName | uppercase}}</a> </li>\n        <li *ngIf =\"categoryName === '' \"><a [routerLink] = \"['/', newPath]\">{{newPath | uppercase}}</a> </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/partials/breadcrumbs/breadcrumbs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadCrums li {\n  float: left;\n  margin: 0 .5em; }\n  .breadCrums li:before {\n    content: \"\\25BA\"; }\n  .breadCrums li a {\n    cursor: pointer;\n    text-decoration: none;\n    color: black; }\n    .breadCrums li a:hover {\n      color: darkorange; }\n\n.breadCrums {\n  list-style: none;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.path = '';
        this.categoryName = '';
        this.defaultPath = '';
        this.newPath = '';
        this.defaultPath = route.url['value'][0].path;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.path);
        this.route.params.forEach(function (params) {
            if (_this.route.snapshot.params['category']) {
                _this.categoryName = _this.route.snapshot.params['category'];
            }
            else {
                _this.categoryName = '';
            }
            if (_this.categoryName === '') {
                _this.newPath = _this.defaultPath;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], BreadcrumbsComponent.prototype, "path", void 0);
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__("../../../../../src/app/partials/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/breadcrumbs/breadcrumbs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/partials.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  partials works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/partials/partials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/partials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartialsComponent = (function () {
    function PartialsComponent() {
    }
    PartialsComponent.prototype.ngOnInit = function () {
    };
    PartialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-partials',
            template: __webpack_require__("../../../../../src/app/partials/partials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/partials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartialsComponent);
    return PartialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/product-category/product-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-lg-4\">\n\n    <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item active\">\n           Categories\n        </a>\n        <a *ngFor =\"let category of categories\" class=\"list-group-item child\" [routerLink] = \"['/view-product/',category.router]\">\n          {{category.cat_title}}\n        </a>\n      </div>\n\n      <!-- most popular -->\n      <div class=\"list-group\">\n          <a href=\"#\" class=\"list-group-item active\">\n             Most Popular\n          </a>\n          <a *ngFor =\"let category of most_popular\" class=\"list-group-item child\" [routerLink] = \"['/view-product/',category.router]\">\n            {{category.cat_title}}\n          </a>\n        </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/partials/product-category/product-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  color: white;\n  border-color: #337ab7;\n  background-color: #337ab7;\n  font-weight: bold;\n  font-size: 1.2em; }\n\n.child:focus, .child:hover {\n  color: darkorange; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/product-category/product-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__ = __webpack_require__("../../../../../src/app/services/category-listing-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCategoryComponent = (function () {
    function ProductCategoryComponent(categoryListingService) {
        this.categoryListingService = categoryListingService;
        this.categories = [];
        this.most_popular = [];
    }
    /*************get categories from mock data  ********/
    ProductCategoryComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categoryListingService.getCategories().subscribe(function (data) {
            if (data) {
                _this.categories = data;
            }
            $('#loading').hide();
        }, function (err) { return console.log('error'); });
    };
    /********************* ends **********************/
    /*******************get most popular *************/
    ProductCategoryComponent.prototype.loadMostPopular = function () {
        var _this = this;
        this.categoryListingService.getMostPopular().subscribe(function (data) {
            if (data) {
                _this.most_popular = data;
            }
            $('#loading').hide();
        }, function (err) { return console.log('error'); });
    };
    /************************end *********************/
    ProductCategoryComponent.prototype.ngOnInit = function () {
        $('#loading').show();
        this.loadCategories();
        this.loadMostPopular();
    };
    ProductCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-category',
            template: __webpack_require__("../../../../../src/app/partials/product-category/product-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/product-category/product-category.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__["a" /* CategoryListingServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__["a" /* CategoryListingServiceService */]])
    ], ProductCategoryComponent);
    return ProductCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-full-view/product-full-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>  \n    <section>\n        <div class=\"container\">      \n          <div class=\"row\">\n            <app-product-category></app-product-category>\n                  <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n                        <div *ngIf=\"qtyNotSelected\" class=\"alert alert-danger\">\n                            <strong>OOPS ! Please Choose Quantity Before Adding This Item To The Cart. </strong>\n                        </div>\n\n                        <div *ngIf=\"itemAdded\" class=\"alert alert-success\">\n                            <strong>Item Has Been Successfuly Added To The Cart.</strong>\n                        </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                         <figure>\n                            <img class=\"img-responsive\" src=\"{{slicedObject?.img}}\">\n                        </figure>\n                      </div>\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                          <div class=\"row\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 \">\n                                <div class=\"name-price clearfix\">\n                                  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\"> <h4 class=\"text-center\">{{slicedObject?.cat_title}}</h4></div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\"> <h4 class=\"text-center\">AED{{slicedObject?.price}}</h4></div>\n                                  <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\"> <h4 class=\"text-center stock\">In Stock</h4></div>\n                                  <div class=\"name text-center padding-bottom\"><i class=\"fa fa-truck\" aria-hidden=\"true\"></i> <span>Delivery :</span>\n                                    Order in the next 07 hrs 23 mins and receive it in  Dubai\n                                    by Sat, Jan 6. </div>\n                                  </div>\n\n                                  <!-- second block -->\n                                   <div class=\"name-price clearfix no-border-top\">\n\n                                      <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">   <h4 class=\"text-center margin-top\">Model : <i>{{slicedObject?.guid | uppercase}}</i></h4></div>\n                                       <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-8\"> \n                                        <div class=\" margin-top select\">\n                                               <select #corporation [(ngModel)]=\"selectedValue\" class=\"form-control inputstl\" id=\"gender1\">\n                                                       <option value=\"0\">-- Quantity --</option>\n                                                       <option  *ngFor = \"let qty of quantities\" value = \"{{qty}}\">{{qty}}</option>                                                   \n                                               </select>          \n                                              \n                                        </div>\n\n                                            <div class=\"name text-center padding-bottom\">\n                                              <a class =\"btn btn-block btn-warning\" (click) = \"addToCart()\"><i (click) = \"addToCart()\" class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i> Add to cart</a>                                                   \n                                            </div>\n                                        </div>\n                                  </div>\n\n                                  <!-- tabs -->\n                                  <div class=\"name-price clearfix no-border-top\">\n                                  <div id=\"exTab3\" class=\"\">\t\n                                      <ul  class=\"nav nav-pills\">\n                                            <li class=\"active\">\n                                              <a  href=\"#1b\" data-toggle=\"tab\">Overview</a>\n                                            </li>\n                                            <li><a href=\"#2b\" data-toggle=\"tab\">Description</a>\n                                            </li>\n                                            <li><a href=\"#3b\" data-toggle=\"tab\">Size Chart</a>\n                                            </li>\n                                            <li><a href=\"#4a\" data-toggle=\"tab\">Utlization</a>\n                                            </li>\n                                          </ul>\n                                      \n                                            <div class=\"tab-content clearfix\">\n                                              <div class=\"tab-pane active\" id=\"1b\">\n                                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias, accusantium nulla commodi minus quidem ullam amet saepe consequatur quibusdam nesciunt cumque architecto repellat quam beatae eius aliquam, qui perferendis?</h4>\n                                              </div>\n                                              <div class=\"tab-pane\" id=\"2b\">\n                                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus, repudiandae repellendus vero excepturi velit odit eveniet voluptas quasi eum illum maiores, corrupti atque ipsam alias illo totam nostrum ad.</h4>\n                                              </div>\n                                              <div class=\"tab-pane\" id=\"3b\">\n                                                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat laudantium reprehenderit eos! Accusamus aperiam labore eligendi nisi officiis ullam veniam. Mollitia tenetur voluptate adipisci magni, maiores quasi debitis vero aliquam.</h4>                                              </div>\n                                                <div class=\"tab-pane\" id=\"4b\">\n                                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore saepe perferendis rem nihil consectetur neque labore, voluptatum accusantium voluptas veniam ducimus architecto obcaecati dolor nostrum quasi asperiores reiciendis animi! Obcaecati?</h4>                                              </div>\n                                            </div>\n                                     </div>\n                                    </div>\n                                  </div>             \n                        </div>\n                      </div>\n                    </div>\n                 </div>\n           </div>\n       </div>\n   </section>"

/***/ }),

/***/ "../../../../../src/app/product-full-view/product-full-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".name-price {\n  border: 1px solid #337ab7;\n  border-radius: 5px;\n  /* remove border radius for the tab */\n  /* change border radius for the tab , apply corners on top*/ }\n  .name-price .stock {\n    color: green; }\n  .name-price .name {\n    color: gray; }\n    .name-price .name .fa-truck, .name-price .name span {\n      color: green; }\n  .name-price #exTab1 .tab-content {\n    color: black;\n    background-color: darkorange;\n    padding: 5px 15px; }\n  .name-price #exTab2 h3 {\n    color: white;\n    background-color: black;\n    padding: 5px 15px; }\n  .name-price #exTab1 .nav-pills > li > a {\n    border-radius: 0; }\n  .name-price #exTab3 .nav-pills > li > a {\n    border-radius: 4px 4px 0 0; }\n  .name-price #exTab3 .tab-content {\n    color: black;\n    background-color: lightgray;\n    padding: 5px 15px; }\n\n.nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {\n  color: black !important;\n  background-color: #337ab7; }\n\n/***************** drop down style **************/\n.inputstl {\n  padding: 9px;\n  border: solid 1px #337ab7;\n  outline: 0;\n  background: -moz-linear-gradient(top, #FFFFFF, #C6ECFF 1px, #FFFFFF 25px);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px; }\n\n.inputstl:hover {\n  cursor: pointer; }\n\n.margin-top {\n  margin-top: 1em; }\n\n.nav-pills li a {\n  color: black !important;\n  font-weight: bold; }\n\n.btn-block, .btn-block i {\n  font-weight: bold; }\n\n.padding-bottom {\n  padding-bottom: 1.5em; }\n\n.padding-top {\n  padding-top: 1em; }\n\n.select {\n  padding-bottom: 1em; }\n\n.fa-shopping-bag {\n  color: white; }\n  .fa-shopping-bag:hover {\n    color: #337ab7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-full-view/product-full-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFullViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_categories_service__ = __webpack_require__("../../../../../src/app/services/shopping-categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var cartModule = __webpack_require__("../../../../../src/app/add-item-to-cart.module.js");
var ProductFullViewComponent = (function () {
    function ProductFullViewComponent(route, router, shoppingCategories) {
        this.route = route;
        this.router = router;
        this.shoppingCategories = shoppingCategories;
        this.category = '';
        this.guid = '';
        this.fetchedData = [];
        this.quantities = [];
        this.selectedValue = 0;
        this.qtyNotSelected = false;
        this.itemAdded = false;
    }
    ProductFullViewComponent.prototype.ngAfterViewInit = function () {
    };
    /**************get men's categories **********/
    ProductFullViewComponent.prototype.loadShoppingCategories = function (guid, category) {
        var _this = this;
        this.shoppingCategories.getShoppingCategories(category).subscribe(function (data) {
            if (data) {
                _this.extractProductFromObject(guid, data);
            }
        }, function (err) {
            return console.log('Error occured !!!!');
        });
    };
    /**************** ends *********************/
    /*************extract clicked product detailes */
    ProductFullViewComponent.prototype.extractProductFromObject = function (guid, object) {
        this.quantities = [];
        this.slicedObject = object.find(function (sliced) {
            return sliced.guid === guid;
        });
        if (this.slicedObject) {
            for (var i = 1; i <= this.slicedObject.quantity; i++) {
                this.quantities.push(i);
            }
        }
    };
    /************** add item to cart *******/
    ProductFullViewComponent.prototype.addToCart = function () {
        var _this = this;
        /***************** set error message if quantity not set *****/
        if (0 === this.selectedValue || '0' === this.selectedValue) {
            this.qtyNotSelected = true;
            this.itemAdded = false;
            window.scroll(0, 0);
            setTimeout(function () {
                _this.qtyNotSelected = false;
                window.scrollTo(0, document.body.scrollHeight);
            }, 2000);
        }
        else {
            /*********** extract the old values in the storage and append the new ones  ****/
            cartModule.addItemToCustomerCart(this.slicedObject, this.selectedValue);
            this.qtyNotSelected = false;
            this.itemAdded = true;
            window.scroll(0, 0);
            setTimeout(function () {
                _this.itemAdded = false;
            }, 2000);
            __WEBPACK_IMPORTED_MODULE_3_jquery_dist_jquery___default()('.trigger').click();
        }
    };
    /*************** ends *****************/
    ProductFullViewComponent.prototype.setQty = function () {
    };
    ProductFullViewComponent.prototype.ngOnInit = function () {
        /****************check the category through url and load it's corresponding data ***/
        this.category = this.route.snapshot.params['category'];
        this.guid = this.route.snapshot.params['guid'];
        var category = this.category.toLowerCase();
        if (this.category) {
            this.loadShoppingCategories(this.guid, category);
        }
        console.log(this.route.snapshot.params['category']);
    };
    ProductFullViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-full-view',
            template: __webpack_require__("../../../../../src/app/product-full-view/product-full-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-full-view/product-full-view.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_shopping_categories_service__["a" /* ShoppingCategoryServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_categories_service__["a" /* ShoppingCategoryServiceService */]])
    ], ProductFullViewComponent);
    return ProductFullViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-view/product-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs [path] = 'categoryName'></app-breadcrumbs>\n<section>\n    <div class=\"container\">\n      <div class=\"row\">\n        <app-product-category></app-product-category>\n           <div class=\"col-xs-12 col-sm-8 col-lg-8\">\n               <div class=\"row\">\n                 <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                   <h2 class=\"text-center text-underline\">{{categoryName | uppercase}}</h2></div>\n               </div>\n\n                <!-- no items info -->\n                <div *ngIf=\"noItems\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center media media-bold\">\n                    <div class=\"col-xs-12\"><h5 class=\"media-bold noResult\"><i>Sorry no products found for catgeory ( {{categoryName}} )</i></h5></div>\n                    <div class=\"col-xs-12\"><h5 class=\"media-bold\"><i>Please browse other categories using the button below</i></h5></div>\n\n                    <!-- checkout button -->\n                    <div class=\"col-xs-12 checkout\"><a class=\"btn btn-block btn-warning \" routerLink = \"/\"><i class=\"fa fa-chrome\" aria-hidden=\"true\"></i> Browse other categories</a></div>\n                    <!-- checkout button ends -->\n                </div>\n                <!-- info ends -->\n\n              <div class=\"row\" *ngIf=\"!noItems\">\n                  <div class=\"col-sm-4 hoverClassParent porductHolder\" *ngFor = \"let product of products\">\n                      <div class=\"col-item\">\n                          <div class=\"photo\">\n                    \n                              <img src=\"{{product.thumbnail_img}}\" class=\"img-responsive\" alt=\"a\" />\n                          </div>\n                          <div class=\"info\">\n                              <div class=\"row\">\n                                  <div class=\"price col-sx-12 col-sm-12 col-md-12 col-lg-12\">\n                                      <h5 class=\" title\"> {{ product.cat_title }}</h5>                                                  \n                                  </div>\n                                 \n                                  <div class=\"price col-sx-12 col-sm-12 col-md-12 col-lg-1\">\n                                      <h5 class=\"text-center price\"> AED{{ product.price }} </h5>                                                    \n                                  </div>\n                                </div>\n\n                                  <div class=\"separator clear-left\">\n                                      <p class=\"btn-add\">\n                                          <i class=\"fa fa-shopping-cart hoverClass\" [routerLink] = \"['/full-view/',categoryName, product.guid]\"></i><a class=\"hidden-sm hoverClass\" [routerLink] = \"['/full-view/',categoryName, product.guid]\">Add to cart</a></p>\n                                      <p class=\"btn-details\">\n                                          <i class=\"fa fa-eye hoverClass\" (click) =\"quickView(product)\"></i><a class=\"hidden-sm hoverClass\" (click) =\"quickView(product, product.quantity)\">View</a></p>\n                                  </div>\n                                 <div class=\"clearfix\">\n                              </div>\n                          </div>\n                      </div>\n                  </div>   \n              </div>\n\n          </div>\n      </div>\n    </div>\n</section>\n\n<!-- Modal -->\n<div class=\"modal fade bd-example-modal-lg\" id=\"quickView\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"mmodal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\"> Item Quick View\n\n            <button type=\"button\" class=\"close pull-right\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </h4>\n          \n        </div>\n        <div class=\"modal-body\">\n              <div class=\"row\">\n                   <div class=\"col-xs-12\">\n                            <div *ngIf = \"qtyNotSelected\" class=\"alert alert-danger\">\n                                <strong>OOPS ! Please Choose Quantity Before Adding This Item To The Cart. </strong>\n                            </div>\n\n                            <div *ngIf=\"itemAdded\" class=\"alert alert-success\">\n                                    <strong>Item Has Been Successfuly Added To The Cart.</strong>\n                                </div>\n                  </div>\n                   <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                     <figure>\n                         <a href=\"\">\n                            <img src= \"{{img}}\" class=\"img-responsive\">\n                        </a>\n                    </figure>\n                  </div>\n                     <div class=\"col-xs-12 col-sm-12 col-md-6\">\n                        <div class=\"col-xs-12 info\">\n                            <h3 class=\"text-uppercase bold\">{{name}}</h3>\n                            <h4 class=\"bold\">AED {{price}}&nbsp; &nbsp; <span class=\"stock\">In Stock</span></h4>\n                            <h4>{{model}}</h4>\n                        </div>\n                        <div class=\"col-xs-12\">\n                            <div class=\"form-group\">\n                                <select class=\"form-control view-drop\" [(ngModel)] = \"selectedQty\">\n                                    <option value = \"0\">-- Select Quantity --</option>\n                                    <option value = \"{{q}}\" *ngFor =\"let q of quantity\">{{q}}</option>                              \n                                </select>\n                            </div>\n                        </div>\n                       \n                        <div class=\"col-xs-12\">\n                            <a class=\"btn btn-block btn-warning\" (click) = \"addToCart()\"><i (click) = \"addToCart()\" class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i> Add to cart </a>\n                        </div>\n                        <div class=\" col-xs-12 name text-center padding-bottom\"><i class=\"fa fa-truck\" aria-hidden=\"true\"></i> <span class=\"truck\">Delivery :</span>\n                            Order in the next 07 hrs 23 mins and receive it in  Dubai\n                            by Sat, Jan 6. </div>     \n                   </div>\n                        <!-- tabs -->\n                        <div class=\"col-xs-12 name-price clearfix no-border-top\">\n                            <div id=\"exTab3\" class=\"\">\t\n                                <ul  class=\"nav nav-pills\">\n                                      <li class=\"active\">\n                                        <a  href=\"#1b\" data-toggle=\"tab\">Overview</a>\n                                      </li>\n                                      <li><a href=\"#2b\" data-toggle=\"tab\">Description</a>\n                                      </li>\n                                     \n                                    </ul>\n                                \n                                      <div class=\"tab-content clearfix\">\n                                        <div class=\"tab-pane active\" id=\"1b\">\n                                          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias, accusantium nulla commodi minus quidem ullam amet saepe consequatur quibusdam nesciunt </h5>\n                                        </div>\n                                        <div class=\"tab-pane\" id=\"2b\">\n                                          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus, repudiandae repellendus vero excepturi velit odit eveniet.</h5>\n                                        </div>\n                                       \n                                      </div>\n                               </div>\n                     </div>\n          </div>\n        </div>\n        <!-- <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n  <!-- ends -->"

/***/ }),

/***/ "../../../../../src/app/product-view/product-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".porductHolder {\n  margin-top: 1em; }\n\n.mmodal-dialog {\n  margin: 0 auto; }\n  .mmodal-dialog .close {\n    border: 1px solid red; }\n\n.stock {\n  color: green;\n  text-decoration: underline; }\n\n.info {\n  padding-bottom: 2em; }\n\n.btn-block, .btn-block i {\n  font-weight: bold; }\n\n.padding-bottom {\n  padding-bottom: 1.5em; }\n\n.padding-top {\n  padding-top: 1em; }\n\n.select {\n  padding-bottom: 1em; }\n\n.fa-truck, .truck {\n  color: green; }\n\n.name {\n  padding-top: 1em; }\n\n.media-bold {\n  font-weight: bold; }\n\n.noResult {\n  color: red; }\n\n.checkout {\n  padding-bottom: 2em; }\n\n.tab-content {\n  border: 1px solid #337ab7;\n  border-radius: 5px;\n  padding: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-view/product-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__ = __webpack_require__("../../../../../src/app/services/category-listing-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_categories_service__ = __webpack_require__("../../../../../src/app/services/shopping-categories.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var cartModule = __webpack_require__("../../../../../src/app/add-item-to-cart.module.js");
var ProductViewComponent = (function () {
    function ProductViewComponent(categoryListingService, route, router, shoppingCategories) {
        this.categoryListingService = categoryListingService;
        this.route = route;
        this.router = router;
        this.shoppingCategories = shoppingCategories;
        this.recommendations = [];
        this.categoryName = '';
        this.products = [];
        this.img = '';
        this.name = '';
        this.price = 0;
        this.selectedQty = '0';
        this.qty = 0;
        this.model = '';
        this.quantity = [];
        this.qtyNotSelected = false;
        this.itemAdded = false;
        this.fetchedData = {};
        this.noItems = false;
    }
    /*******************get most popular *************/
    ProductViewComponent.prototype.loadRecommendations = function () {
        var _this = this;
        this.categoryListingService.getRecommendations().subscribe(function (data) {
            if (data) {
                _this.recommendations = data;
            }
        }, function (err) { return console.log('error'); });
    };
    /************************end *********************/
    ProductViewComponent.prototype.quickView = function (product, qty) {
        if (product) {
            this.fetchedData = [], this.quantity = [];
            this.img = product.img;
            this.name = product.cat_title;
            this.price = product.price;
            this.model = product.guid;
            for (var i = 1; i <= product.quantity; i++) {
                this.quantity.push(i);
            }
            $('#quickView').modal('show');
            this.fetchedData = product;
        }
    };
    /************* add to cart ***********/
    ProductViewComponent.prototype.addToCart = function () {
        var _this = this;
        if (this.selectedQty === '0') {
            this.qtyNotSelected = true;
            this.itemAdded = false;
            setTimeout(function () {
                _this.qtyNotSelected = false;
            }, 3000);
        }
        else {
            cartModule.addItemToCustomerCart(this.fetchedData, this.selectedQty);
            this.itemAdded = true;
            this.qtyNotSelected = false;
            setTimeout(function () {
                _this.itemAdded = false;
                $('#quickView').modal('hide');
            }, 2000);
            $('.trigger').click();
            this.selectedQty = '0';
        }
    };
    ProductViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadRecommendations();
        this.products = [];
        $('#loading').show();
        /*************on route change ********/
        this.route.params.forEach(function (params) {
            window.scroll(0, 0);
            if (_this.route.snapshot.params['category']) {
                _this.categoryName = _this.route.snapshot.params['category'];
            }
            else {
                _this.categoryName = ' Not Available ';
            }
            /***********map routing request and fetch corresponding data ****/
            var category = _this.categoryName.toLowerCase();
            if (category) {
                _this.shoppingCategories.getShoppingCategories(category).subscribe(function (data) {
                    if (data.length > 0) {
                        _this.products = data;
                        _this.noItems = false;
                    }
                    else {
                        _this.noItems = true;
                        _this.products = [];
                    }
                    $('#loading').hide();
                }, function (err) {
                    console.log('Error fetching men\'s categories !!!!');
                });
            }
        });
    };
    ProductViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-view',
            template: __webpack_require__("../../../../../src/app/product-view/product-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-view/product-view.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__["a" /* CategoryListingServiceService */], __WEBPACK_IMPORTED_MODULE_3__services_shopping_categories_service__["a" /* ShoppingCategoryServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_listing_service_service__["a" /* CategoryListingServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_shopping_categories_service__["a" /* ShoppingCategoryServiceService */]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/category-listing-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListingServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/app/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryListingServiceService = (function () {
    function CategoryListingServiceService(http) {
        this.http = http;
        this.CATEGORY_PATH = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GlobalPaths */].CAT_PATH;
        this.MOST_POPULAR_PATH = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GlobalPaths */].POP_PATH;
        this.RECOM_POPULAR_PATH = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GlobalPaths */].REC_PATH;
    }
    /***********get categories  **************/
    CategoryListingServiceService.prototype.getCategories = function () {
        return this.http
            .get(this.CATEGORY_PATH)
            .map(function (resp) { return resp.json().categories; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    /******************* ends ********************/
    /***********get categories  **************/
    CategoryListingServiceService.prototype.getMostPopular = function () {
        return this.http
            .get(this.MOST_POPULAR_PATH)
            .map(function (resp) { return resp.json().most_popular; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    /******************** ends  ***************/
    /***********get recommendations  **************/
    CategoryListingServiceService.prototype.getRecommendations = function () {
        return this.http
            .get(this.RECOM_POPULAR_PATH)
            .map(function (resp) { return resp.json().recommendations; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    CategoryListingServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CategoryListingServiceService);
    return CategoryListingServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shopping-categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCategoryServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/app/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enum_categories_enum__ = __webpack_require__("../../../../../src/app/enum/categories.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShoppingCategoryServiceService = (function () {
    function ShoppingCategoryServiceService(http) {
        this.http = http;
        this.CATEGORY_PATH = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GlobalPaths */].MEN_PATH;
        this.ELECTRONICS_PATH = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GlobalPaths */].ELEC_PATH;
        this.NO_DATA_PATH = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GlobalPaths */].NO_DATA_PATH;
    }
    /************get shopping categories *********/
    ShoppingCategoryServiceService.prototype.getShoppingCategories = function (type) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_4__enum_categories_enum__["a" /* Categories */].men:
                return this.getMenCategories();
            case __WEBPACK_IMPORTED_MODULE_4__enum_categories_enum__["a" /* Categories */].electronics:
                return this.getElectronicsCategories();
            case __WEBPACK_IMPORTED_MODULE_4__enum_categories_enum__["a" /* Categories */].recommendations:
                return this.getElectronicsCategories();
            default:
                return this.noData();
        }
    };
    /******************* ends ********************/
    /*************** get men's ******/
    ShoppingCategoryServiceService.prototype.getMenCategories = function () {
        return this.http
            .get(this.CATEGORY_PATH)
            .map(function (resp) { return resp.json().men; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    /*************** get electronics ********/
    ShoppingCategoryServiceService.prototype.getElectronicsCategories = function () {
        return this.http
            .get(this.ELECTRONICS_PATH)
            .map(function (resp) { return resp.json().electronics; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    /*************** get electronics ********/
    ShoppingCategoryServiceService.prototype.noData = function () {
        return this.http
            .get(this.NO_DATA_PATH)
            .map(function (resp) { return resp.json().no_data; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    /******************* get users ******/
    ShoppingCategoryServiceService.prototype.getUsers = function () {
        return this.http.get('/getUsers').map(function (data) { return data.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json()); });
    };
    ShoppingCategoryServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ShoppingCategoryServiceService);
    return ShoppingCategoryServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n           <h3 class=\"text-uppercase text-center\">Sign Up</h3>\n          <div class=\"wrapper\">\n            <div class=\"inner-box\">\n                <form  class=\"\">\n                    <div *ngIf=\"created\" class=\"alert alert-success text-center\">\n                        <strong >Congrats!  Account has been successfuly created . </strong>\n                     </div>\n\n                     <div class=\"form-group\">\n                      <label>Your name</label>\n                      <input name = \"name\" [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" id= \"name\" placeholder=\"Your name here\" maxlength=\"20\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Your email</label>\n                        <input name=\"email\" [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email here\">\n                    </div>\n\n                      <div class=\"form-group\">\n                        <label>Password</label>\n                        <input maxlength=\"20\" name=\"pass\" [(ngModel)]=\"pass\" type=\"password\" class=\"form-control\" placeholder=\"Atleast 6 characters\" id=\"pass\" minlength=\"6\" placeholder=\"**************\">\n                      </div>\n\n                      <div class=\"form-group\">\n                          <label>Re-enter password</label>\n                          <input maxlength=\"20\" name=\"repass\" [(ngModel)]=\"repass\" type=\"password\" class=\"form-control\" id=\"re-pass\" placeholder=\"*************\">\n                     </div> \n                     <div *ngIf=\"passwordError\" class=\"alert alert-danger text-center\">\n                        <strong >{{errorLog}} </strong>\n                     </div>\n                     <a class=\"btn btn-block btn-warning text-center text-uppercase\" style=\"color: white; font-weight: bold\" (click)=\"createAccount()\"> create account</a>\n                  </form>\n\n                  <p class=\"note\">By creating an account, you agree to our <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>\n\n                  <h5 class =\"text-center text-uppercase have-account\">already have an account ? <a (click) = \"open()\" class=\"sign-in\" id=\"in\"> sign in </a></h5>\n            </div>\n          </div>\n     \n    </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 50%;\n  margin: 0 auto;\n  border: 1px solid #337ab7;\n  border-radius: 5px; }\n\n.inner-box {\n  padding: 1em;\n  background: #337ab7;\n  box-shadow: 0pt 2px 5px rgba(105, 108, 109, 0.7), 0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset; }\n  .inner-box .form-control {\n    height: 45px;\n    border-radius: 0px; }\n  .inner-box .note {\n    padding-top: 1em; }\n    .inner-box .note a:hover {\n      cursor: pointer;\n      color: darkorange; }\n\n.have-account {\n  padding-top: 1em;\n  border-top: 1px solid gray;\n  font-weight: bold; }\n\n.sign-in {\n  font-weight: bold; }\n  .sign-in:hover {\n    cursor: pointer;\n    color: darkorange; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_crypto_js__ = __webpack_require__("../../../../simple-crypto-js/crypto.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_simple_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_simple_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var USER_TOKEN = __WEBPACK_IMPORTED_MODULE_2_simple_crypto_js___default.a.generateRandom();
var SECRET_KEY = 'XHER32985RTBDFMGNDKJS5643FAZQW';
var simpleCrypto = new __WEBPACK_IMPORTED_MODULE_2_simple_crypto_js___default.a(SECRET_KEY);
var SignUpComponent = (function () {
    function SignUpComponent(route, router) {
        this.route = route;
        this.router = router;
        this.name = '';
        this.email = '';
        this.pass = '';
        this.repass = '';
        this.nameFlag = false;
        this.emailFlag = false;
        this.passFlag = false;
        this.repassFlag = false;
        this.passwordError = false;
        this.user = {};
        this.created = false;
        this.errorLog = '';
    }
    SignUpComponent.prototype.createAccount = function () {
        var _this = this;
        $('#loading').show();
        this.validateInputs();
        if (this.nameFlag && this.passFlag && this.repassFlag && this.emailFlag) {
            if (this.pass !== this.repass) {
                this.passwordError = true;
                this.errorLog = 'Error!  Password mismatched .';
                setTimeout(function () {
                    _this.passwordError = false;
                    _this.errorLog = '';
                }, 3000);
                $('#loading').hide();
            }
            else {
                this.user = {
                    'name': this.name,
                    'email': this.email,
                    'password': simpleCrypto.encrypt(this.pass.toString()),
                    'user_token': USER_TOKEN,
                    'items_in_cart': []
                };
                var usersArray_1 = [];
                if (localStorage.getItem('users')) {
                    usersArray_1 = JSON.parse(localStorage.getItem('users'));
                    /********* check for existing user *****/
                    Object.keys(usersArray_1).map(function (key, value) {
                        if (usersArray_1[value].email === _this.email) {
                            _this.errorLog = 'Sorry, (' + _this.email + ') is already in use .';
                            _this.passwordError = true;
                            setTimeout(function () {
                                _this.errorLog = '';
                                _this.passwordError = false;
                            }, 3000);
                        }
                    });
                }
                if (this.passwordError) {
                    return;
                }
                usersArray_1.push(this.user);
                localStorage.setItem('users', JSON.stringify(usersArray_1));
                this.created = true;
                this.email = '';
                this.name = '';
                this.pass = '';
                this.repass = '';
                window.scroll(0, 0);
                setTimeout(function () {
                    _this.created = false;
                    _this.router.navigate(['/']);
                }, 3000);
                $('#loading').hide();
            }
        }
    };
    SignUpComponent.prototype.open = function () {
        this.router.navigate(['/']);
        $('.userPanel').click();
    };
    /************validate*****/
    SignUpComponent.prototype.validateInputs = function () {
        if (this.name === '' || this.name.length < 5) {
            $('#name').addClass('danger');
            this.nameFlag = false;
        }
        else {
            $('#name').removeClass('danger');
            this.nameFlag = true;
        }
        if (this.email === '' || !this.validateEmail(this.email)) {
            $('#email').addClass('danger');
            this.emailFlag = false;
        }
        else {
            $('#email').removeClass('danger');
            this.emailFlag = true;
        }
        if (this.pass === '' || this.pass.length < 5) {
            $('#pass').addClass('danger');
            this.passFlag = false;
        }
        else {
            $('#pass').removeClass('danger');
            this.passFlag = true;
        }
        if (this.repass === '' || this.repass.length < 5) {
            $('#re-pass').addClass('danger');
            this.repassFlag = false;
        }
        else {
            $('#re-pass').removeClass('danger');
            this.repassFlag = true;
        }
    };
    /**************end ***********/
    SignUpComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/thankyou/thankyou.component.html":
/***/ (function(module, exports) {

module.exports = "<app-breadcrumbs></app-breadcrumbs>  \n    <section>\n        <div class=\"container\">      \n          <div class=\"row\">\n            <app-product-category></app-product-category>\n                  <div class=\"col-xs-12 col-sm-8 col-lg-8\">                   \n                                            \n                        <div class=\"row media thankyou\">\n                               <!-- shipping info -->\n                               <div class=\"col-xs-12 col-sm-12\">\n                                  <h3 class=\"text-center text-uppercase\"> Congratulations .</h3>  \n                                  <h4 class=\"text-center text-uppercase\"> your order has been successfuly placed .</h4>  \n                                  <h5 class=\"text-center text-uppercase\"> we hope you enjoyed shopping with us .</h5>\n                                  <h5 class=\"text-center text-uppercase\"> we'll contact you as soon as your order is shipped for delivery .</h5>\n                                  <h5 class=\"text-center text-uppercase\">Thank you .</h5>\n                              </div>\n                              <div class=\"col-xs-12 col-sm-12\">\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt cupiditate, officia quae ullam dolores voluptates provident dolorum at blanditiis inventore? Possimus sequi placeat neque necessitatibus non voluptatum minima in!</p>\n                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ratione cupiditate aliquam veritatis enim, totam deleniti. Excepturi autem assumenda, odit vero, sint dolorem nisi ad omnis hic iusto quibusdam delectus!</p>\n                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nisi iste magnam cum nihil ad sit assumenda quo reiciendis fugit aliquam vel minus harum, a dolorem, corrupti deleniti non? Beatae.</p> \n\n                                <a  class=\"btn btn-block btn-warning text-uppercase\" routerLink = '/'>explore more ...</a>\n                              </div>\n\n                             \n                        </div>\n                       \n                       \n                  </div>\n            </div>\n          </div>\n        </section>\n                      "

/***/ }),

/***/ "../../../../../src/app/thankyou/thankyou.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thankyou {\n  background-color: lightblue !important;\n  padding-bottom: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thankyou/thankyou.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyouComponent = (function () {
    function ThankyouComponent() {
    }
    ThankyouComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    ThankyouComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thankyou',
            template: __webpack_require__("../../../../../src/app/thankyou/thankyou.component.html"),
            styles: [__webpack_require__("../../../../../src/app/thankyou/thankyou.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map