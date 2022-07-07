(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["common"],{

/***/ 92732:
/*!*******************************************************************!*\
  !*** ./src/app/components/Admin/customer/state/customer.query.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerQuery": () => (/* binding */ CustomerQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 22788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _customer_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.store */ 79499);



class CustomerQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.QueryEntity {
    constructor(store) {
        super(store);
        this.store = store;
    }
    selectCustomer() {
        return this.select((state) => { var _a; return (_a = state.entities) === null || _a === void 0 ? void 0 : _a.data; });
    }
}
CustomerQuery.ɵfac = function CustomerQuery_Factory(t) { return new (t || CustomerQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_customer_store__WEBPACK_IMPORTED_MODULE_1__.CustomerStore)); };
CustomerQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomerQuery, factory: CustomerQuery.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map