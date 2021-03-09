(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-view-item-view-module"],{

/***/ "GvJ5":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-view/item-view.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"content\">\n    <div>\n      <img src=\"{{item?.image}}\" alt=\"\">\n    </div>\n\n    <div>\n      <h1>{{item?.name}}</h1>\n      <p>{{item?.description}}</p>\n    </div>\n\n    <div class=\"content__buttons\">\n      <ion-button (click)=\"chooseVariant('100', 'price', false)\">100$</ion-button>\n      <ion-button (click)=\"chooseVariant('10', 'price', false)\">10$</ion-button>\n      <ion-button (click)=\"chooseVariant('2', 'qty', false)\">2</ion-button>\n      <ion-button (click)=\"chooseVariant('10', 'qty', false)\">10</ion-button>\n    </div>\n    \n    <div class=\"content__inputs\">\n      <ion-item>\n        <ion-label position=\"stacked\">Amount, $</ion-label>\n        <ion-input type=\"number\" (ionInput)=\"chooseVariant($event.target, 'price', true)\" value=\"{{price}}\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Quantity</ion-label>\n        <ion-input type=\"number\" (ionInput)=\"chooseVariant($event.target, 'qty', true)\" value=\"{{qty}}\"></ion-input>\n      </ion-item>\n    </div>\n    \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "JeHc":
/*!*******************************************************!*\
  !*** ./src/app/item-view/item-view-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ItemViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewPageRoutingModule", function() { return ItemViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _item_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-view.page */ "rJlH");




const routes = [
    {
        path: '',
        component: _item_view_page__WEBPACK_IMPORTED_MODULE_3__["ItemViewPage"]
    }
];
let ItemViewPageRoutingModule = class ItemViewPageRoutingModule {
};
ItemViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemViewPageRoutingModule);



/***/ }),

/***/ "dqpA":
/*!***********************************************!*\
  !*** ./src/app/item-view/item-view.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  padding: 20px;\n}\n.content__buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.content__inputs {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.content p {\n  color: #b7b7b7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2l0ZW0tdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7QUFESiIsImZpbGUiOiJpdGVtLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgJl9fYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICZfX2lucHV0cyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICNiN2I3YjcgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "ntxz":
/*!***********************************************!*\
  !*** ./src/app/item-view/item-view.module.ts ***!
  \***********************************************/
/*! exports provided: ItemViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewPageModule", function() { return ItemViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _item_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-view-routing.module */ "JeHc");
/* harmony import */ var _item_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-view.page */ "rJlH");







let ItemViewPageModule = class ItemViewPageModule {
};
ItemViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemViewPageRoutingModule"]
        ],
        declarations: [_item_view_page__WEBPACK_IMPORTED_MODULE_6__["ItemViewPage"]]
    })
], ItemViewPageModule);



/***/ }),

/***/ "rJlH":
/*!*********************************************!*\
  !*** ./src/app/item-view/item-view.page.ts ***!
  \*********************************************/
/*! exports provided: ItemViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewPage", function() { return ItemViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_item_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./item-view.page.html */ "GvJ5");
/* harmony import */ var _item_view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-view.page.scss */ "dqpA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "R7Hv");






let ItemViewPage = class ItemViewPage {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.price = '';
        this.qty = null;
    }
    ngOnInit() {
        const itemSku = +this.route.snapshot.params.sku;
        this.dataService.getItems().subscribe((res) => {
            this.item = res.find(item => item.sku === itemSku);
        });
    }
    chooseVariant(variant, type, caseInput) {
        const value = caseInput ? variant.value : variant;
        switch (type) {
            case 'price':
                this.price = value;
                this.qty = Math.round(Number(value) / this.item.price);
                break;
            case 'qty':
                this.qty = value;
                this.price = String(Math.round(this.item.price * value));
                break;
        }
    }
};
ItemViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
ItemViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-item-view',
        template: _raw_loader_item_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_item_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ItemViewPage);



/***/ })

}]);
//# sourceMappingURL=item-view-item-view-module.js.map