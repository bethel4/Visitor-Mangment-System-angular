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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Admin/visitor/state/vistior.service */ 6514);
/* harmony import */ var _Admin_customer_state_customer_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Admin/customer/state/customer.query */ 92732);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









function CustomerComponent_ngx_datatable_column_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-datatable-column", 13);
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", col_r4.name)("prop", col_r4.prop);
} }
function CustomerComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerComponent_ng_template_14_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const row_r5 = restoredCtx.row; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onApprove(row_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", row_r5.approvalStatus != "waiting" ? "btn btn-outline-primary disabled btn-xs" : "btn btn-outline-primary btn-xs")("disabled", row_r5.approvalStatus != "waiting");
} }
function CustomerComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomerComponent_ng_template_16_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const row_r9 = restoredCtx.row; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onReject(row_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", row_r9.approvalStatus != "waiting" ? "btn btn-outline-primary disabled btn-xs" : "btn btn-outline-primary btn-xs")("disabled", row_r9.approvalStatus != "waiting");
} }
class CustomerComponent {
    constructor(service, query, toster) {
        this.service = service;
        this.query = query;
        this.toster = toster;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.ColumnMode;
        this.rows = [];
        this.company = [];
        this.temp = [];
        this.columns = [
            { name: 'id' },
            { prop: 'visitor' },
            { name: 'Address' },
            { name: 'Timein ' },
            { name: 'Timeout' },
            { name: 'reason ' },
            { name: 'customer' },
            { name: 'ApprovalStatus' },
            { name: 'ApprovalTime' },
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
                        // telephone:data.data[i].contact_number,
                        approvalStatus: data.data[i].approval_status,
                        customer: data.data[i].customer_name,
                        address: data.data[i].address,
                        timein: data.data[i].time_in,
                        timeout: data.data[i].time_out,
                        reason: data.data[i].reason,
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
        console.log(data);
        let value = {
            approval_status: 'Approved',
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
            approval_status: 'Rejected',
            id: data.id,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD HH:mm:ss'),
        };
        this.service.requestStatus(value).subscribe(res => {
            if (res.status == 1) {
                this.toster.error(res.message);
                this.getRequest();
            }
            else {
                this.toster.error(res.message);
            }
        });
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_1__.VistiorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Admin_customer_state_customer_query__WEBPACK_IMPORTED_MODULE_2__.CustomerQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], viewQuery: function CustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 17, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "filter-ngx", "form-control", 3, "keyup"], ["rowHeight", "auto", 1, "bootstrap", 2, "width", "1300px", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows"], ["table", ""], [3, "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Approve", "sortable", "false", "prop", "id"], ["ngx-datatable-cell-template", ""], ["name", "Reject", "sortable", "false", "prop", "id"], [3, "name", "prop"], [3, "ngClass", "disabled", "click"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Visitors on waiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function CustomerComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ngx-datatable", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CustomerComponent_ngx_datatable_column_12_Template, 1, 2, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CustomerComponent_ng_template_14_Template, 2, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CustomerComponent_ng_template_16_Template, 2, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.columns);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass], styles: ["table[_ngcontent-%COMP%] {\n  width: 1400px;\n  height: 550px;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 1400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbnRhYmxlIHtcbiAgICB3aWR0aDogMTQwMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxNDAwcHg7XG4gIH1cbiBcblxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Admin/visitor/state/vistior.service */ 6514);
/* harmony import */ var _Admin_visitor_state_visitore_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Admin/visitor/state/visitore.query */ 59072);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);











function VisitorsComponent_ngx_datatable_column_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-datatable-column", 13);
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", col_r4.name)("prop", col_r4.prop);
} }
function VisitorsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VisitorsComponent_ng_template_14_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const row_r5 = restoredCtx.row; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.onApprove(row_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", row_r5.approvalStatus != "waiting" ? "btn btn-outline-primary disabled" : "btn btn-outline-primary btn-xs")("disabled", row_r5.approvalStatus != "waiting");
} }
function VisitorsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VisitorsComponent_ng_template_16_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const row_r9 = restoredCtx.row; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.onReject(row_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", row_r9.approvalStatus != "waiting" ? "btn btn-outline-primary disabled" : "btn btn-outline-primary btn-xs")("disabled", row_r9.approvalStatus != "waiting");
} }
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
            { name: 'roll' },
            { prop: 'visitor' },
            { name: 'Address' },
            { name: 'Timein ' },
            { name: 'Timeout' },
            { name: 'reason ' },
            { name: 'customer' },
            { name: 'ApprovalStatus' },
            { name: 'ApprovalTime' }
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
    ngOnInit() {
        let datas = [];
        this.service.get().subscribe((data) => {
            console.log(data);
            if (data.status) {
                console.log('kkk');
                for (let i = 0; i < data.data.length; i++) {
                    datas.push({
                        roll: data.data[i].id,
                        visitor: data.data[i].visitor,
                        // telephone:data.data[i].contact_number,
                        approvalStatus: data.data[i].approval_status,
                        customer: data.data[i].customer_name,
                        address: data.data[i].address,
                        timein: data.data[i].time_in,
                        timeout: data.data[i].time_out,
                        reason: data.data[i].reason,
                        approvalTime: data.data[i].approval_time,
                    });
                }
                this.data = datas;
            }
        });
        console.log(this.data);
    }
    onCheckOut(event) {
        let datas = [];
        console.log(event);
        var date = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss');
        const selectedId = event.roll;
        let data = {
            id: selectedId,
            exitTime: date,
        };
        console.log('sada');
        this.service.updateTime(data).subscribe();
        this.service.getRequest().subscribe((data) => {
            console.log(data);
            if (data.status) {
                console.log('kkk');
                for (let i = 0; i < data.data.length; i++) {
                    datas.push({
                        roll: data.data[i].id,
                        visitor: data.data[i].visitor,
                        // telephone:data.data[i].contact_number,
                        approvalStatus: data.data[i].approval_status,
                        customer: data.data[i].customer_name,
                        address: data.data[i].address,
                        timein: data.data[i].time_in,
                        timeout: data.data[i].time_out,
                        reason: data.data[i].reason,
                        approvalTime: data.data[i].approval_time,
                    });
                }
                this.data = datas;
            }
        });
    }
    onApprove(data) {
        console.log(data);
        let value = {
            approval_status: "Approved",
            id: data.roll,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss')
        };
        this.service.requestStatus(value).subscribe();
    }
    onReject(data) {
        let value = {
            approval_status: "Rejected",
            id: data.roll,
            approve_time: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss')
        };
        this.service.requestStatus(value).subscribe();
    }
}
VisitorsComponent.ɵfac = function VisitorsComponent_Factory(t) { return new (t || VisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Admin_visitor_state_vistior_service__WEBPACK_IMPORTED_MODULE_2__.VistiorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Admin_visitor_state_visitore_query__WEBPACK_IMPORTED_MODULE_3__.VisitorQuery), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService)); };
VisitorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: VisitorsComponent, selectors: [["app-visitor"]], viewQuery: function VisitorsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 17, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "custom-datatable"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "filter-ngx", "form-control", 3, "keyup"], ["rowHeight", "auto", 1, "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows"], ["table", ""], [3, "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Approve", "sortable", "false", "prop", "id"], ["ngx-datatable-cell-template", ""], ["name", "Reject", "sortable", "false", "prop", "id"], [3, "name", "prop"], [3, "ngClass", "disabled", "click"]], template: function VisitorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "All Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function VisitorsComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ngx-datatable", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, VisitorsComponent_ngx_datatable_column_12_Template, 1, 2, "ngx-datatable-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, VisitorsComponent_ng_template_14_Template, 2, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ngx-datatable-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, VisitorsComponent_ng_template_16_Template, 2, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.columns);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DatatableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _customer_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer/customer.routing.module */ 89531);
/* harmony import */ var _customer_container_customer_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../customer/container/customer/customer.component */ 23026);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer/container/myVisitor/visitor.component */ 19449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);









class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _customer_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_container_customer_customer_component__WEBPACK_IMPORTED_MODULE_2__.CustomerComponent, _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_3__.VisitorsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _customer_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_container_myVisitor_visitor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer/container/myVisitor/visitor.component */ 19449);
/* harmony import */ var _container_customer_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/customer/customer.component */ 23026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





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
            }
        ]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_customer_customer_module_ts.js.map