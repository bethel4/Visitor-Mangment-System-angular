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


/***/ }),

/***/ 25429:
/*!*********************************************************************!*\
  !*** ./src/app/components/Admin/customer/state/customer.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/tap */ 64747);
/* harmony import */ var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _customer_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.store */ 79499);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);





class CustomerService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
    }
    get() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/get_customers.php`;
        return this.http.get(url)
            .pipe((0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            if (result.status == 1) {
                this.store.set(result);
            }
            else {
                console.log('error has occured');
            }
        }, error => {
            console.log(error.message);
        }));
    }
    add(data) {
        console.log(data);
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/reg_customer.php`;
        return this.http.post(url, data).pipe((0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            if (result.status == 1) {
                this.store.add(result.data);
            }
            else {
                console.log('error has occured');
            }
        }, (error) => {
            console.log(error.message);
        }));
    }
    update(data) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/edit_customer.php`;
        return this.http.put(url, data)
            .pipe((0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            if (result.status == 1) {
                console.log(result.data[0]);
                this.store.update(result.data[0].ID, result.data[0]);
            }
            else {
                console.log('error has occured');
            }
        }, error => {
            console.log(error.message);
        }));
    }
    delete(id) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/del_customer.php/?${id}`;
        return this.http.put(url, id)
            .pipe((0,rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            if (result.status == 1) {
                //this.store.remove(id);
                this.get().subscribe();
            }
            else {
                console.log('Error deleting');
            }
        }, error => {
            console.log(error.message);
        }));
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_customer_store__WEBPACK_IMPORTED_MODULE_1__.CustomerStore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map