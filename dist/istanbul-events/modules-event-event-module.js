(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-event-event-module"],{

/***/ "./src/app/modules/base/base.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/base/base.module.ts ***!
  \*********************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/image.pipe */ "./src/app/modules/base/pipes/image.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagePipe"],
            ],
            exports: [
                _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagePipe"]
            ]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/modules/base/pipes/image.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/base/pipes/image.pipe.ts ***!
  \**************************************************/
/*! exports provided: ImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePipe", function() { return ImagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    ImagePipe.prototype.transform = function (value, args) {
        if (!value)
            return 'https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg';
        return value;
    };
    ImagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'image'
        })
    ], ImagePipe);
    return ImagePipe;
}());



/***/ }),

/***/ "./src/app/modules/event/event-create/event-create.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/event/event-create/event-create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-event-create\">\n    <div class=\"c-event-create__header\">\n        <h1>New Event</h1>\n        <hr>\n    </div>\n    <div class=\"c-event-create__content\">\n        <div class=\"o-form-actions\">\n            <button type=\"button\" class=\"o-form-actions--save\" (click)=\"onSave($event)\">Save</button>\n            <button type=\"button\" class=\"o-form-actions--cancel\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n    </div>\n</div>\n\n\n            "

/***/ }),

/***/ "./src/app/modules/event/event-create/event-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/event/event-create/event-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreateComponent", function() { return EventCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventCreateComponent = /** @class */ (function () {
    function EventCreateComponent(router) {
        this.router = router;
        this.isDirty = true;
    }
    EventCreateComponent.prototype.ngOnInit = function () {
    };
    EventCreateComponent.prototype.onSave = function (e) {
    };
    EventCreateComponent.prototype.onCancel = function (e) {
        this.router.navigate(['event']);
    };
    EventCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-create',
            template: __webpack_require__(/*! ./event-create.component.html */ "./src/app/modules/event/event-create/event-create.component.html")
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventCreateComponent);
    return EventCreateComponent;
}());



/***/ }),

/***/ "./src/app/modules/event/event-detail/event-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/event/event-detail/event-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-event-detail\">\n    <div class=\"c-event-detail__header\">\n      <h1>Event Detail</h1>\n      <hr>\n    </div>\n    <div class=\"c-event-detail__content\">\n      <div class=\"c-event-detail__event-info\">\n        <img class=\"c-event-detail__event-info-image\" [src]=\"event?.imageUrl | image\" />\n        \n      </div>\n      <div class=\"c-event-detail__content-right\">\n          <div class=\"c-event-detail__content-right-title\">{{ event?.name }}</div>\n          <div class=\"c-event-detail__content-right-date\">{{ event?.date | date:'MMMM d, EEEE '  }}</div>\n          <span class=\"c-event-detail__content-right-location\">{{ event?.location?.city }}</span>\n      </div>\n    </div>\n</div>\n\n  \n"

/***/ }),

/***/ "./src/app/modules/event/event-detail/event-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/event/event-detail/event-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/event.service */ "./src/app/shared/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.event = _this.eventService.getEventDetail(_this.id);
        });
    };
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/modules/event/event-detail/event-detail.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/event/event-list/event-item/event-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/event/event-list/event-item/event-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-event-item\">\n    <div class=\"c-event-item__image\">\n            <a [routerLink]=\"['/event/' + event?.id]\">\n                <img src=\"{{ event?.imageUrl | image }}\" alt=\"{{ event?.title }}\">\n            </a>\n            <div [ngSwitch]=\"event?.time\">\n                <span *ngSwitchCase=\"'08:00'\" class=\"event-badge\">Early Start</span>\n                <span *ngSwitchCase=\"'15:00'\" class=\"event-badge\">Late Start</span>\n                <span *ngSwitchDefault class=\"event-badge\">Normal Start</span>\n            </div>\n        </div>\n        <div class=\"c-event-item__content\">\n            <span class=\"c-event-item__content-title\">{{ event?.name }}</span>\n            <span class=\"c-event-item__content-date\">{{ event?.date | date:'MMMM d, EEEE ' }}</span>\n            <span class=\"c-event-item__content-location\">{{ event?.location?.city }}</span>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/event/event-list/event-item/event-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/event/event-list/event-item/event-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EventItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventItemComponent", function() { return EventItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventItemComponent = /** @class */ (function () {
    function EventItemComponent() {
    }
    EventItemComponent.prototype.ngOnInit = function () {
    };
    EventItemComponent.prototype.onEventCardSelected = function (e) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventItemComponent.prototype, "event", void 0);
    EventItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-item',
            template: __webpack_require__(/*! ./event-item.component.html */ "./src/app/modules/event/event-list/event-item/event-item.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EventItemComponent);
    return EventItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/event/event-list/event-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/event/event-list/event-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-event-list\">\n    <div class=\"c-event-list__header\">\n        <h1>All Events</h1>\n        <hr>\n    </div>\n    <div class=\"c-event-list__content-wrapper\">\n        <div *ngFor=\"let event of events\" class=\"c-event-list__content-item\">\n            <app-event-item [event]=\"event\"></app-event-item>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/event/event-list/event-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/event/event-list/event-list.component.ts ***!
  \******************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/event.service */ "./src/app/shared/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventService) {
        this.eventService = eventService;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.events = this.eventService.getEvents();
    };
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/modules/event/event-list/event-list.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/modules/event/event.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/event/event.module.ts ***!
  \***********************************************/
/*! exports provided: EventModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/modules/event/event-list/event-list.component.ts");
/* harmony import */ var _event_list_event_item_event_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-list/event-item/event-item.component */ "./src/app/modules/event/event-list/event-item/event-item.component.ts");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/modules/event/event-detail/event-detail.component.ts");
/* harmony import */ var _base_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/pipes/image.pipe */ "./src/app/modules/base/pipes/image.pipe.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base/base.module */ "./src/app/modules/base/base.module.ts");
/* harmony import */ var _shared_services_event_router_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/event-router.guard */ "./src/app/shared/services/event-router.guard.ts");
/* harmony import */ var _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-create/event-create.component */ "./src/app/modules/event/event-create/event-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'list', component: _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__["EventListComponent"] },
    { path: 'new', component: _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_9__["EventCreateComponent"], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: ':id', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailComponent"], canActivate: [_shared_services_event_router_guard__WEBPACK_IMPORTED_MODULE_8__["EventRouterGuard"]] },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];
var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _base_base_module__WEBPACK_IMPORTED_MODULE_7__["BaseModule"]
            ],
            declarations: [
                _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__["EventListComponent"],
                _event_list_event_item_event_item_component__WEBPACK_IMPORTED_MODULE_4__["EventItemComponent"],
                _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailComponent"],
                _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_9__["EventCreateComponent"]
            ],
            providers: [
                _base_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_6__["ImagePipe"],
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
            ],
        })
    ], EventModule);
    return EventModule;
}());

function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm("You haven't saved this event. Do you really want to cancel?");
    return true;
}


/***/ }),

/***/ "./src/app/shared/services/event-router.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/event-router.guard.ts ***!
  \*******************************************************/
/*! exports provided: EventRouterGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRouterGuard", function() { return EventRouterGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.service */ "./src/app/shared/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRouterGuard = /** @class */ (function () {
    function EventRouterGuard(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouterGuard.prototype.canActivate = function (next) {
        var eventExists = this.eventService.getEventDetail(+next.params['id']);
        if (!eventExists)
            this.router.navigate(['404']);
        return !!eventExists;
    };
    EventRouterGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventRouterGuard);
    return EventRouterGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/event.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/event.service.ts ***!
  \**************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EVENTLIST = [
    {
        id: 1,
        imageUrl: 'https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_960_720.jpg',
        name: 'Angular Connect',
        price: { amount: 10, currency: 'USD' },
        time: '08:00',
        date: new Date('2018-02-13'),
        location: {
            address: 'Nr: 23',
            city: 'denver',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 Pipes',
                presenter: 'Peter',
                duration: 1,
                level: 'Intermediate',
                abstract: 'Something happens'
            }
        ]
    },
    {
        id: 2,
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg',
        name: 'Angular Connect',
        price: { amount: 10, currency: 'USD' },
        time: '08:00',
        date: new Date('2018-02-13'),
        location: {
            address: 'Nr: 23',
            city: 'denver',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 Pipes',
                presenter: 'Peter',
                duration: 1,
                level: 'Intermediate',
                abstract: 'Something happens'
            }
        ]
    },
    {
        id: 2,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg',
        name: 'Angular Connect',
        price: { amount: 10, currency: 'USD' },
        time: '13:00',
        date: new Date('2018-02-13'),
        location: {
            address: 'Nr: 23',
            city: 'denver',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 Pipes',
                presenter: 'Peter',
                duration: 1,
                level: 'Intermediate',
                abstract: 'Something happens'
            }
        ]
    },
    {
        id: 3,
        imageUrl: 'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695_960_720.jpg',
        name: 'Angular Connect',
        price: { amount: 10, currency: 'USD' },
        time: '15:00',
        date: new Date('2018-02-13'),
        location: {
            address: 'Nr: 23',
            city: 'denver',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 Pipes',
                presenter: 'Peter',
                duration: 1,
                level: 'Intermediate',
                abstract: 'Something happens'
            }
        ]
    },
];
var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        return EVENTLIST;
    };
    EventService.prototype.getEventDetail = function (id) {
        return EVENTLIST.find(function (e) { return e.id === id; });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-event-event-module.js.map