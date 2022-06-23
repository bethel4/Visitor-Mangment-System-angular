(self["webpackChunkcuba"] = self["webpackChunkcuba"] || []).push([["src_app_components_customer_customer_module_ts"],{

/***/ 23026:
/*!******************************************************************************!*\
  !*** ./src/app/components/customer/container/customer/customer.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Admin/visitor/state/vistior.service */ 6514);
/* harmony import */ var _Admin_customer_state_customer_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Admin/customer/state/customer.query */ 92732);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/table/table.component */ 36709);









class CustomerComponent {
    constructor(service, query, toster, router) {
        this.service = service;
        this.query = query;
        this.toster = toster;
        this.router = router;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.ColumnMode;
        this.rows = [];
        this.company = [];
        this.temp = [];
        this.columns = [
            { name: 'id', label: 'S.NO' },
            { name: 'visitor', label: 'Visitor' },
            { name: 'contact_number', label: 'Mobile' },
            { name: 'address', label: 'Address' },
            { name: 'reason', label: 'Reason' },
            { name: 'customer_name', label: 'Customer Name' },
            { name: 'security_name', label: 'Security Name' },
            { name: 'time_in', label: 'Timein' },
            { name: 'time_out', label: 'Timeout' },
            { name: 'approval_status', label: 'ApprovalStatus' },
            { name: 'ApprovalTime', label: 'ApprovalTime' }
        ];
        //  this.company = companyDB.data;
        // cache our list
        this.temp = [...this.company];
        // push our inital complete list
        this.rows = this.company;
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        console.log(val);
        // filter our data
        const temp = this.data.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.data = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getRequest() {
        let datas = [];
        this.service.getRequest().subscribe((data) => {
            console.log(data);
            if (data.status) {
                console.log('kkk');
                for (let i = 0; i < data.data.length; i++) {
                    datas.push({
                        id: data.data[i].id,
                        visitor: data.data[i].visitor,
                        contact_number: data.data[i].contact_number,
                        address: data.data[i].address,
                        reason: data.data[i].reason,
                        customer_name: data.data[i].customer_name,
                        security_name: data.data[i].security_name,
                        time_in: data.data[i].time_in,
                        time_out: data.data[i].time_out,
                        approval_status: data.data[i].approval_status,
                        approvalTime: data.data[i].approval_time,
                    });
                }
                return this.data = datas;
            }
            else {
                return this.data = [];
            }
        });
    }
    ngOnInit() {
        this.getRequest();
        this.interval = setInterval(() => { this.getRequest(); }, 5000);
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    onApprove(data) {
        console.log(data.id);
        let value = {
            approval_status: 'approved',
            id: data.id,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD HH:mm:ss'),
        };
        this.service.requestStatus(value).subscribe(res => {
            if (res.status == 1) {
                this.toster.success(res.message);
                this.getRequest();
            }
            else {
                this.toster.error(res.message);
            }
        });
    }
    onReject(data) {
        let value = {
            approval_status: 'rejected',
            id: data.id,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD HH:mm:ss'),
        };
        this.service.requestStatus(value).subscribe(res => {
            if (res.status == 1) {
                this.toster.success(res.message);
                this.getRequest();
            }
            else {
                this.toster.error(res.message);
            }
        });
    }
    onView(row) {
        console.log(row.id);
        this.router.navigate(['customer/visitor_detail', row.id]);
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_1__.VistiorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Admin_customer_state_customer_query__WEBPACK_IMPORTED_MODULE_2__.CustomerQuery), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], viewQuery: function CustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "filter-ngx", "form-control", 3, "keyup"], [3, "user_data", "columns", "onapprove", "onreject", "view"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Visitors on waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function CustomerComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onapprove", function CustomerComponent_Template_app_table_onapprove_10_listener($event) { return ctx.onApprove($event); })("onreject", function CustomerComponent_Template_app_table_onreject_10_listener($event) { return ctx.onReject($event); })("view", function CustomerComponent_Template_app_table_view_10_listener($event) { return ctx.onView($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user_data", ctx.data)("columns", ctx.columns);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent], styles: ["table[_ngcontent-%COMP%] {\n  width: 1400px;\n  height: 550px;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 1400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbnRhYmxlIHtcbiAgICB3aWR0aDogMTQwMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxNDAwcHg7XG4gIH1cbiBcblxuIl19 */"] });


/***/ }),

/***/ 19449:
/*!******************************************************************************!*\
  !*** ./src/app/components/customer/container/myVisitor/visitor.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitorsComponent": () => (/* binding */ VisitorsComponent)
/* harmony export */ });
/* harmony import */ var _shared_tables_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/tables/company */ 86305);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Admin/visitor/state/vistior.service */ 6514);
/* harmony import */ var _Admin_visitor_state_visitore_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Admin/visitor/state/visitore.query */ 59072);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/table/table.component */ 36709);










class VisitorsComponent {
    constructor(service, query, router, toster) {
        this.service = service;
        this.query = query;
        this.router = router;
        this.toster = toster;
        this.rows = [];
        this.company = [];
        this.temp = [];
        this.columns = [
            { name: 'id', label: 'S.NO' },
            { name: 'visitor', label: 'Visitor' },
            { name: 'contact_number', label: 'Mobile' },
            { name: 'address', label: 'Address' },
            { name: 'reason', label: 'Reason' },
            { name: 'security_name', label: 'Security Name' },
            { name: 'time_in', label: 'Timein' },
            { name: 'time_out', label: 'Timeout' },
            { name: 'approval_status', label: 'ApprovalStatus' },
            { name: 'approved_time', label: 'Approval Time' }
        ];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.ColumnMode;
        this.company = _shared_tables_company__WEBPACK_IMPORTED_MODULE_0__.companyDB.data;
        // cache our list
        this.temp = [...this.company];
        // push our inital complete list
        this.rows = this.company;
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        console.log(val);
        // filter our data
        const temp = this.data.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.data = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    get() {
        let datas = [];
        this.service.get().subscribe((data) => {
            console.log(data);
            if (data.status) {
                console.log('kkk');
                for (let i = 0; i < data.data.length; i++) {
                    datas.push({
                        id: data.data[i].id,
                        visitor: data.data[i].visitor,
                        contact_number: data.data[i].contact_number,
                        address: data.data[i].address,
                        reason: data.data[i].reason,
                        customer_name: data.data[i].customer_name,
                        security_name: data.data[i].security_name,
                        time_in: data.data[i].time_in,
                        time_out: data.data[i].time_out,
                        approval_status: data.data[i].approval_status,
                        approved_time: data.data[i].approved_time,
                    });
                }
                return this.data = datas;
            }
            else {
                return this.data = [];
            }
        });
    }
    ngOnInit() {
        this.get();
        this.interval = setInterval(() => { this.get(); }, 5000);
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    onCheckOut(event) {
        let datas = [];
        console.log(event);
        var date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss');
        const selectedId = event.id;
        let data = {
            id: selectedId,
            exitTime: date,
        };
        console.log('sada');
        this.service.updateTime(data).subscribe();
        this.get();
    }
    onApprove(data) {
        console.log(data.id);
        let value = {
            approval_status: 'approved',
            id: data.id,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss'),
        };
        this.service.requestStatus(value).subscribe(res => {
            if (res.status == 1) {
                this.toster.success(res.message);
                this.get();
            }
            else {
                this.toster.error(res.message);
            }
        });
    }
    onReject(data) {
        let value = {
            approval_status: 'rejected',
            id: data.id,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss'),
        };
        this.service.requestStatus(value).subscribe(res => {
            if (res.status == 1) {
                this.toster.error(res.message);
                this.get();
            }
            else {
                this.toster.error(res.message);
            }
        });
    }
    onView(row) {
        console.log(row);
        this.router.navigate(['customer/visitor_detail', row.id]);
    }
}
VisitorsComponent.ɵfac = function VisitorsComponent_Factory(t) { return new (t || VisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_2__.VistiorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Admin_visitor_state_visitore_query__WEBPACK_IMPORTED_MODULE_3__.VisitorQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService)); };
VisitorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VisitorsComponent, selectors: [["app-visitor"]], viewQuery: function VisitorsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "filter-ngx", "form-control", 3, "keyup"], [3, "user_data", "columns", "onapprove", "onReject", "view"]], template: function VisitorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "All Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function VisitorsComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onapprove", function VisitorsComponent_Template_app_table_onapprove_10_listener($event) { return ctx.onApprove($event); })("onReject", function VisitorsComponent_Template_app_table_onReject_10_listener($event) { return ctx.onReject($event); })("view", function VisitorsComponent_Template_app_table_view_10_listener($event) { return ctx.onView($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("user_data", ctx.data)("columns", ctx.columns);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 23812:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/customer/container/visitor-detail/visitor-profile.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitiorProfileComponent": () => (/* binding */ VisitiorProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Admin/visitor/state/vistior.service */ 6514);
/* harmony import */ var _shared_components_visitor_details_visitor_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/visitor-details/visitor-detail.component */ 20697);




class VisitiorProfileComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
        this.selectedID = this.route.snapshot.paramMap.get('id');
    }
    ;
    ngOnInit() {
        let datas = [];
        this.service.get().subscribe((data) => {
            console.log(data);
            if (data.status) {
                for (let i = 0; i < data.data.length; i++) {
                    datas.push({
                        id: data.data[i].id,
                        visitor: data.data[i].visitor,
                        contact_number: data.data[i].contact_number,
                        approval_status: data.data[i].approval_status,
                        customer_name: data.data[i].customer_name,
                        address: data.data[i].address,
                        email: data.data[i].email,
                        time_in: data.data[i].time_in,
                        time_out: data.data[i].time_out,
                        visitor_role: data.data[i].visitor_role,
                        reason: data.data[i].reason,
                        approval_time: data.data[i].approval_time,
                        qr_code: data.data[i].qr_code
                    });
                }
                this.row = datas.filter(data => data.id == this.selectedID);
            }
        });
    }
}
VisitiorProfileComponent.ɵfac = function VisitiorProfileComponent_Factory(t) { return new (t || VisitiorProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_0__.VistiorService)); };
VisitiorProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VisitiorProfileComponent, selectors: [["app-visitor-profile"]], decls: 1, vars: 1, consts: [[3, "user_data"]], template: function VisitiorProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-visitor-details", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user_data", ctx.row);
    } }, directives: [_shared_components_visitor_details_visitor_detail_component__WEBPACK_IMPORTED_MODULE_1__.VisitiorDetailsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdG9yLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 15785:
/*!********************************************************!*\
  !*** ./src/app/components/customer/customer.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _customer_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer/customer.routing.module */ 89531);
/* harmony import */ var _customer_container_customer_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../customer/container/customer/customer.component */ 23026);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer/container/myVisitor/visitor.component */ 19449);
/* harmony import */ var _ui_visitorform_visitorform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/visitorform/visitorform.component */ 84438);
/* harmony import */ var _customer_container_visitor_detail_visitor_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer/container/visitor-detail/visitor-profile.component */ 23812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);











class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _customer_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_container_customer_customer_component__WEBPACK_IMPORTED_MODULE_2__.CustomerComponent, _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_3__.VisitorsComponent, _ui_visitorform_visitorform_component__WEBPACK_IMPORTED_MODULE_4__.VisitorFormComponent, _customer_container_visitor_detail_visitor_profile_component__WEBPACK_IMPORTED_MODULE_5__.VisitiorProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _customer_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule] }); })();


/***/ }),

/***/ 89531:
/*!****************************************************************!*\
  !*** ./src/app/components/customer/customer.routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRoutingModule": () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer/container/myVisitor/visitor.component */ 19449);
/* harmony import */ var _container_customer_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/customer/customer.component */ 23026);
/* harmony import */ var _customer_ui_visitorform_visitorform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer/ui/visitorform/visitorform.component */ 84438);
/* harmony import */ var _container_visitor_detail_visitor_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/visitor-detail/visitor-profile.component */ 23812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);







const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _container_customer_customer_component__WEBPACK_IMPORTED_MODULE_1__.CustomerComponent
            },
            {
                path: 'visitors',
                component: _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__.VisitorsComponent
            },
            {
                path: 'addvisitor',
                component: _customer_ui_visitorform_visitorform_component__WEBPACK_IMPORTED_MODULE_2__.VisitorFormComponent
            },
            {
                path: 'visitor_detail/:id',
                component: _container_visitor_detail_visitor_profile_component__WEBPACK_IMPORTED_MODULE_3__.VisitiorProfileComponent
            }
        ]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 84438:
/*!*****************************************************************************!*\
  !*** ./src/app/components/customer/ui/visitorform/visitorform.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitorFormComponent": () => (/* binding */ VisitorFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Admin/visitor/state/vistior.service */ 6514);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _shared_components_form_addForm_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/form/addForm/form.component */ 72930);






class VisitorFormComponent {
    constructor(service, toster, router) {
        this.service = service;
        this.toster = toster;
        this.router = router;
        this.title = 'Add New Request';
    }
    ngOnInit() { }
    onSubmit(fromValue) {
        this.service.customerRequest(fromValue).subscribe((res) => {
            if (res.status) {
                this.toster.success(res.message);
                this.router.navigate(['customer/visitors']);
            }
            else {
                this.toster.error(res.message);
            }
        });
    }
}
VisitorFormComponent.ɵfac = function VisitorFormComponent_Factory(t) { return new (t || VisitorFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_0__.VistiorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
VisitorFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VisitorFormComponent, selectors: [["app-visitorform"]], decls: 2, vars: 1, consts: [[3, "title", "formSubmit"]], template: function VisitorFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("formSubmit", function VisitorFormComponent_Template_app_form_formSubmit_1_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.title);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_form_addForm_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  color: #1a1f36;\n  box-sizing: border-box;\n  word-wrap: break-word;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Ubuntu, sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #ffffff;\n}\n\nh1[_ngcontent-%COMP%] {\n  letter-spacing: -1px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #5469d4;\n  text-decoration: unset;\n}\n\n.login-root[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.loginbackground[_ngcontent-%COMP%] {\n  min-height: 692px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.flex-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.center-center[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n\n.box-root[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.flex-direction--column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.box-divider--light-all-2[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2px #e3e8ee;\n}\n\n.box-background--blue[_ngcontent-%COMP%] {\n  background-color: #5469d4;\n}\n\n.box-background--white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.box-background--blue800[_ngcontent-%COMP%] {\n  background-color: #212d63;\n}\n\n.box-background--gray100[_ngcontent-%COMP%] {\n  background-color: #e3e8ee;\n}\n\n.box-background--cyan200[_ngcontent-%COMP%] {\n  background-color: #7fd3ed;\n}\n\n.padding-top--64[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n\n.padding-top--24[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n\n.padding-top--48[_ngcontent-%COMP%] {\n  padding-top: 48px;\n}\n\n.padding-bottom--24[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.padding-horizontal--48[_ngcontent-%COMP%] {\n  padding: 48px;\n}\n\n.padding-bottom--15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.flex-justifyContent--center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  line-height: 28px;\n  color: #1a1f36;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.reset-pass[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  display: block;\n}\n\n.btnRegister[_ngcontent-%COMP%] {\n  float: right;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 10px;\n  background: #181c32;\n  padding-left: 25px;\n  color: #fff;\n  font-weight: 600;\n  width: 150px;\n  cursor: pointer;\n}\n\n.reset-pass[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 10px;\n}\n\n.grid--50-50[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  align-items: center;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 28px;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 44px;\n  border: unset;\n  border-radius: 4px;\n  outline-color: rgba(84, 105, 212, 0.5);\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  background-color: #090d20;\n  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, #5469d4 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.field-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 15px;\n  margin-right: 5px;\n  box-shadow: unset;\n  min-height: unset;\n}\n\n.field-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\na.ssolink[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n}\n\n.footer-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\n\n.listing[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #697386;\n  font-weight: 600;\n  margin: 0 10px;\n}\n\n.animationRightLeft[_ngcontent-%COMP%] {\n  animation: animationRightLeft 2s ease-in-out infinite;\n}\n\n.animationLeftRight[_ngcontent-%COMP%] {\n  animation: animationLeftRight 2s ease-in-out infinite;\n}\n\n.tans3s[_ngcontent-%COMP%] {\n  animation: animationLeftRight 3s ease-in-out infinite;\n}\n\n.tans4s[_ngcontent-%COMP%] {\n  animation: animationLeftRight 4s ease-in-out infinite;\n}\n\n@keyframes animationLeftRight {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(1000px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n\n@keyframes animationRightLeft {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(-1000px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0b3Jmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9HQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUFOQTtFQUNFLHNCQUFBO0FBU0Y7O0FBUEE7RUFFRSxzQkFBQTtBQVVGOztBQVBBO0VBQ0UsbUNBQUE7QUFVRjs7QUFSQTtFQUNFLHlCQUFBO0FBV0Y7O0FBVEE7RUFDRSx5QkFBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7QUFhRjs7QUFYQTtFQUNFLHlCQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UsaUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxpQkFBQTtBQWlCRjs7QUFmQTtFQUNFLGlCQUFBO0FBa0JGOztBQWhCQTtFQUNFLG9CQUFBO0FBbUJGOztBQWpCQTtFQUNFLGFBQUE7QUFvQkY7O0FBbEJBO0VBQ0Usb0JBQUE7QUFxQkY7O0FBbEJBO0VBRUUsdUJBQUE7QUFxQkY7O0FBbEJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsbUJBQUE7QUFzQkY7O0FBcEJBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF1QkY7O0FBckJBO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF1QkY7O0FBckJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQXdCRjs7QUF0QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXlCRjs7QUF0QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSw4UEFBQTtBQXlCRjs7QUFuQkE7RUFDRSx5QkFBQTtFQUNBLHdQQUFBO0VBSUEsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBcUJGOztBQW5CQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBc0JGOztBQXBCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBd0JGOztBQXJCQTtFQUNFLHFEQUFBO0FBd0JGOztBQXRCQTtFQUNFLHFEQUFBO0FBeUJGOztBQXZCQTtFQUNFLHFEQUFBO0FBMEJGOztBQXhCQTtFQUNFLHFEQUFBO0FBMkJGOztBQXhCQTtFQUNFO0lBQ0UsMEJBQUE7RUEyQkY7RUF6QkE7SUFDRSw2QkFBQTtFQTJCRjtFQXpCQTtJQUNFLDBCQUFBO0VBMkJGO0FBQ0Y7O0FBeEJBO0VBQ0U7SUFDRSwwQkFBQTtFQTBCRjtFQXhCQTtJQUNFLDhCQUFBO0VBMEJGO0VBeEJBO0lBQ0UsMEJBQUE7RUEwQkY7QUFDRiIsImZpbGUiOiJ2aXNpdG9yZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMWExZjM2O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgSGVsdmV0aWNhIE5ldWUsIFVidW50dSwgc2Fucy1zZXJpZjtcbn1cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuaDEge1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbmEge1xuICBjb2xvcjogIzU0NjlkNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcbn1cbi5sb2dpbi1yb290IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxvZ2luYmFja2dyb3VuZCB7XG4gIG1pbi1oZWlnaHQ6IDY5MnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbGV4LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFsaWduLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2VudGVyLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJveC1yb290IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5mbGV4LWRpcmVjdGlvbi0tY29sdW1uIHtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3gtZGl2aWRlci0tbGlnaHQtYWxsLTIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggI2UzZThlZTtcbn1cbi5ib3gtYmFja2dyb3VuZC0tYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDY5ZDQ7XG59XG4uYm94LWJhY2tncm91bmQtLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5ib3gtYmFja2dyb3VuZC0tYmx1ZTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNjM7XG59XG4uYm94LWJhY2tncm91bmQtLWdyYXkxMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOGVlO1xufVxuLmJveC1iYWNrZ3JvdW5kLS1jeWFuMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmZDNlZDtcbn1cbi5wYWRkaW5nLXRvcC0tNjQge1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5wYWRkaW5nLXRvcC0tMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5wYWRkaW5nLXRvcC0tNDgge1xuICBwYWRkaW5nLXRvcDogNDhweDtcbn1cbi5wYWRkaW5nLWJvdHRvbS0tMjQge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbi5wYWRkaW5nLWhvcml6b250YWwtLTQ4IHtcbiAgcGFkZGluZzogNDhweDtcbn1cbi5wYWRkaW5nLWJvdHRvbS0tMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmZsZXgtanVzdGlmeUNvbnRlbnQtLWNlbnRlciB7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6ICMxYTFmMzY7XG59XG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVzZXQtcGFzcyBhLFxubGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJ0blJlZ2lzdGVye1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxODFjMzI7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc2V0LXBhc3MgPiBhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZ3JpZC0tNTAtNTAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWVsZCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgYm9yZGVyOiB1bnNldDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lLWNvbG9yOiByZ2IoODQgMTA1IDIxMiAvIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LCByZ2JhKDYwLCA2NiwgODcsIDAuMTYpIDBweCAwcHggMHB4IDFweCxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDBweCAwcHggMHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTMsIDMyKTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAxcHggMHB4LCByZ2IoODQsIDEwNSwgMjEyKSAwcHggMHB4IDBweCAxcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwcHggMHB4IDBweCAwcHgsIHJnYmEoMCwgMCwgMCwgMCkgMHB4IDBweCAwcHggMHB4LFxuICAgIHJnYmEoNjAsIDY2LCA4NywgMC4wOCkgMHB4IDJweCA1cHggMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZpZWxkLWNoZWNrYm94IGlucHV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbn1cbi5maWVsZC1jaGVja2JveCBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbmEuc3NvbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZm9vdGVyLWxpbmsgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3RpbmcgYSB7XG4gIGNvbG9yOiAjNjk3Mzg2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmFuaW1hdGlvblJpZ2h0TGVmdCB7XG4gIGFuaW1hdGlvbjogYW5pbWF0aW9uUmlnaHRMZWZ0IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLmFuaW1hdGlvbkxlZnRSaWdodCB7XG4gIGFuaW1hdGlvbjogYW5pbWF0aW9uTGVmdFJpZ2h0IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLnRhbnMzcyB7XG4gIGFuaW1hdGlvbjogYW5pbWF0aW9uTGVmdFJpZ2h0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLnRhbnM0cyB7XG4gIGFuaW1hdGlvbjogYW5pbWF0aW9uTGVmdFJpZ2h0IDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbkxlZnRSaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0aW9uUmlnaHRMZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_components_customer_customer_module_ts.js.map