function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Services/apiparser/apiparser.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Services/apiparser/apiparser.service.ts ***!
    \*********************************************************/

  /*! exports provided: ApiparserService */

  /***/
  function srcAppServicesApiparserApiparserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiparserService", function () {
      return ApiparserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ApiparserService = /*#__PURE__*/function () {
      function ApiparserService(httpClient, Router) {
        _classCallCheck(this, ApiparserService);

        this.httpClient = httpClient;
        this.Router = Router;
      }

      _createClass(ApiparserService, [{
        key: "hit",
        value: function hit(url, method, data) {
          var needRaw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          url = "https://dots-assignment.herokuapp.com" + url;
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.parse(this.httpClient[method](url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(60000)), needRaw, headers);
        }
      }, {
        key: "file",
        value: function file(url, method, data) {
          var needRaw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          url = "https://dots-assignment.herokuapp.com" + url;
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.parse(this.httpClient[method](url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(60000)), needRaw, headers);
        }
      }, {
        key: "parse",
        value: function parse(reqPromise, needRaw, headers) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            reqPromise.subscribe(function (res) {
              var response = res ? res.data || res : res;
              resolve(response);
            }, function (res) {
              if (res && res.status === 401) {
                _this.Router.navigate(['/']);
              }

              reject(res.error);
            });
          });
        }
      }]);

      return ApiparserService;
    }();

    ApiparserService.ɵfac = function ApiparserService_Factory(t) {
      return new (t || ApiparserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ApiparserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiparserService,
      factory: ApiparserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiparserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/registration/registration.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Services/registration/registration.service.ts ***!
    \***************************************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppServicesRegistrationRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../apiparser/apiparser.service */
    "./src/app/Services/apiparser/apiparser.service.ts");

    var RegistrationService = /*#__PURE__*/function () {
      function RegistrationService(parser) {
        var _this2 = this;

        _classCallCheck(this, RegistrationService);

        this.parser = parser;

        this.login = function (params) {
          return _this2.parser.hit('/user/login', 'post', params);
        };
      }

      _createClass(RegistrationService, [{
        key: "register",
        value: function register(params) {
          return this.parser.hit('/user/register', 'post', params);
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ɵfac = function RegistrationService_Factory(t) {
      return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__["ApiparserService"]));
    };

    RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistrationService,
      factory: RegistrationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__["ApiparserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./views/common/header/header.component */
    "./src/app/views/common/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/common/footer/footer.component */
    "./src/app/views/common/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontEnd';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_views_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-module/main-module.module */
    "./src/app/main-module/main-module.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./views/common/header/header.component */
    "./src/app/views/common/header/header.component.ts");
    /* harmony import */


    var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./views/common/footer/footer.component */
    "./src/app/views/common/footer/footer.component.ts");
    /* harmony import */


    var _file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./file-upload/file-upload.module */
    "./src/app/file-upload/file-upload.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-upload/file-upload.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/file-upload/file-upload.component.ts ***!
    \******************************************************/

  /*! exports provided: FileUploadComponent */

  /***/
  function srcAppFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
      return FileUploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/apiparser/apiparser.service */
    "./src/app/Services/apiparser/apiparser.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FileUploadComponent_p_17_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_p_17_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password with 8 charecters.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FileUploadComponent_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_p_17_span_1_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FileUploadComponent_p_17_span_2_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
      }
    }

    function FileUploadComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your File Is Uploaded");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var FileUploadComponent = /*#__PURE__*/function () {
      function FileUploadComponent(ApiParser) {
        _classCallCheck(this, FileUploadComponent);

        this.ApiParser = ApiParser;
        this.uploaded = false;
      }

      _createClass(FileUploadComponent, [{
        key: "fileattach",
        value: function fileattach(event) {
          this.file = event.target.files[0];
        }
      }, {
        key: "upload",
        value: function upload(user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    data = new FormData();
                    data.append('file', this.file);
                    data.append('password', user.form.value.password);
                    this.ApiParser.file('/upload', 'post', data).then(function (result) {
                      if (result[0] === "true") {
                        _this3.uploaded = true;
                      }
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FileUploadComponent;
    }();

    FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
      return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_2__["ApiparserService"]));
    };

    FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FileUploadComponent,
      selectors: [["app-file-upload"]],
      decls: 26,
      vars: 2,
      consts: [[1, "home-main-container"], [1, "developer_registartion"], [1, "container"], [1, "main-registration-part"], [1, "step-1-section"], [1, "step-form-information"], [1, "row"], [1, "col-md-6", "col-sm-6"], [1, "w_60", 3, "ngSubmit"], ["user", "ngForm"], [1, "form-group"], ["ngModel", "", "required", "", "type", "password", "name", "password", "placeholder", "Password", "minlength", "8", 1, "form-control"], ["password", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "type", "file", "name", "file", 1, "form-control", 3, "change"], ["file", "ngModel"], ["type", "submit", 1, "button", "btn-steps"], [4, "ngIf"], [1, "text-danger"], ["class", "d-block text-left mt-1 ml-1 small text-danger", 4, "ngIf"], [1, "d-block", "text-left", "mt-1", "ml-1", "small", "text-danger"]],
      template: function FileUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fill Your Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FileUploadComponent_Template_form_ngSubmit_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

            return ctx.upload(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FileUploadComponent_p_17_Template, 3, 2, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Select File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_21_listener($event) {
            return ctx.fileattach($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FileUploadComponent_div_25_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r1.valid && _r0.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploaded);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  font-family: Lato-Light;\n}\n.home-main-container[_ngcontent-%COMP%] {\n  margin-bottom: 170px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n  background-color: #232633;\n  width: 100%;\n  padding: 23px 55px 56px 104px;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: -28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: -62px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  width: 375px;\n  box-shadow: 0px 6px 9px -1px #4a4a4a;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-image: url(/assets/images/down-arrow.png);\n  background-repeat: no-repeat;\n  background-position: right 15px bottom 7px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .opp-text[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 14px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .pad-2[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   .main_title[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 82%;\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 45px;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 40px;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 5px 0px;\n  font-size: 20px;\n  font-style: italic;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 15px 0px;\n  font-size: 17px;\n  letter-spacing: 2px;\n  line-height: 25px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #949494;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7777;\n  font-size: 18px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  margin-top: 9px;\n  height: 83px;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 29px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #727272;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #727272;\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: flex;\n  flex: 1 1 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 28px 20px;\n  text-align: center;\n  box-shadow: -3px 2px 13px 0px #c0cdce;\n  width: 100%;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  height: 80px;\n  font-size: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #ff6b81;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 18px;\n  margin: 30px 0px 90px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .icon-tab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ff6b81;\n  border-radius: 50px;\n  display: inline-block;\n  margin: 15px 4px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n  padding: 22px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 47px;\n  background: #7365a8;\n  color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: Lato-Regular;\n  border-radius: 4px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n  padding: 0px 50px;\n  margin-bottom: 30px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 40px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding: 7px 20px;\n  margin: 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-family: Lato-Regular;\n  margin-left: 30px;\n  display: block;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #595959;\n  font-weight: normal;\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  float: left;\n  border: 1px solid #a6a6a6;\n  margin-right: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%] {\n  padding: 34px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Lato-Regular;\n  color: #595959;\n  font-weight: 100;\n  margin-bottom: 8px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .custom-idea[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  border-radius: 6px;\n  border: 1px solid #a6a6a6;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 320px;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  padding: 20px 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%] {\n  padding: 0px 35px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  padding: 20px 35px;\n  list-style: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #32d039;\n  margin-right: 10px;\n  font-weight: bold;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  top: -2px;\n  float: right;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-color: #abaaaa;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\u2713\";\n  position: absolute;\n  display: none;\n  color: #32d039;\n  top: 0;\n  left: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  background-color: #f8204f;\n  border-width: 2px;\n  border-color: #f8204f;\n  color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f8204f;\n  background-color: #fff;\n  color: #f8204f;\n  border-radius: 20px;\n  transform-style: 2s;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ff6b81;\n  font-size: 24px;\n  margin: 0px 27px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n  clear: both;\n  float: right;\n  margin: 6px 0px;\n  color: #404040;\n  background: transparent;\n  font-size: 24px;\n}\n@media screen and (max-width: 1200px) {\n  .home-main-container[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 94px;\n    font-size: 21px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n    height: 84px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 0px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #ff6b81;\n    border-radius: 50px;\n    display: inline-block;\n    margin: 15px 1px 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 0px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px 12px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .mar-right[_ngcontent-%COMP%] {\n    border-right: 0px;\n    border-bottom: 1px solid #DCDCDC;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 60px 0px 38px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 336px;\n    margin: 0 auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-bottom: 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n    box-shadow: 0px 2px 13px 0px #c0cdce !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 50px !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 640px) {\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n    margin-bottom: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    border: 1px solid #ccc;\n    width: 100%;\n    float: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    padding-left: 25px;\n    margin-bottom: 12px;\n    top: -2px;\n    float: right;\n    cursor: pointer;\n    font-size: 15px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n    position: relative;\n    top: 3px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border-color: #abaaaa;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n    background-color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\u2713\";\n    position: absolute;\n    display: none;\n    color: #32d039;\n    top: 0;\n    left: 2px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    background-color: #f8204f;\n    border-width: 2px;\n    border-color: #f8204f;\n    color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n    border-color: #f8204f;\n    background-color: #fff;\n    color: #f8204f;\n    border-radius: 20px;\n    transform-style: 2s;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #000;\n    font-family: Lato-Regular;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #979696;\n    font-size: 16px;\n    margin: 15px 0 20px 0;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #b7b7b7;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #ff6b81;\n    font-size: 24px;\n    margin: 0px 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n    clear: both;\n    float: right;\n    margin: 6px 0px;\n    color: #404040;\n    background: transparent;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 7px 77px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 42px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    height: 58px;\n    font-size: 20px;\n    margin-top: 15px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 21px 7px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%] {\n    margin: 0px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 30px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 25px 14px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 25px 7px;\n  }\n}\n.apllied[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 20%;\n  text-align: center;\n  padding: 50px;\n  border: #595959 solid 1px;\n}\n.ha[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  margin: 15px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.pa[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n  margin: 15px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n  display: block;\n  font-weight: 600;\n}\n.allData[_ngcontent-%COMP%] {\n  border: 1px solid #595959;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 5px;\n}\n.tableRow[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.tableCell[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 16%;\n  box-sizing: border-box;\n  font-size: 14px;\n  overflow: auto;\n  border: 1px solid black;\n  margin-bottom: 1px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n}\n.tableCell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin: 0 !important;\n  overflow-wrap: break-word;\n}\n.imgContainer[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n.loginContainer[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.formLogin[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.QuizContainer[_ngcontent-%COMP%] {\n  margin: 2% 5% 2% 5%;\n  border: 1px solid black;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 5px;\n}\n.infoSection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  margin: 2px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n.QuizHeading[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Lato-Light;\n  color: #595959;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n}\n.counterBox[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  font-family: Lato-Light;\n}\n.timerBox[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  font-family: Lato-Light;\n  color: #7365a8;\n}\n.questionBox[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.question[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: flex;\n  font-size: 22px;\n  font-family: Lato-Light;\n}\n.nextButton[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 22px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n  border-radius: 5px;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.resultContainer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.circle[_ngcontent-%COMP%] {\n  display: flex;\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  color: white;\n  font-size: x-large;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  margin-left: 25%;\n}\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #1d57a3;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: #123a27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS95YXNraWNrZXIvRG9jdW1lbnRzL0RvdHMtQXNzaWdubWVudC9BbGdvRm9jdXNGcm9udEVuZC1tYXN0ZXIvc3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx1QkFBQTtFQUNBLHFDQUFBO0FERUo7QUNBRTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7QURFSjtBQ0FFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBRTtFQUNFLG9CQUFBO0FER0o7QUNGSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QURJTjtBQ0hNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURLUjtBQ0pRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRE1WO0FDSlE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBRE1WO0FDTFU7RUFDRSxtQkFBQTtBRE9aO0FDTlk7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QURRZDtBQ05ZO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFFkO0FDTlk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEUWQ7QUNOWTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEUWQ7QUNMVTtFQUNFLFlBQUE7QURPWjtBQ0ZVO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FESVo7QUNGVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FESVo7QUNEUTtFQUNFLFdBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREVWO0FDRUk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FEQU47QUNDTTtFQUNFLGtCQUFBO0FEQ1I7QUNBUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBREVWO0FDQ007RUFDRSxtQkFBQTtBRENSO0FDR1U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FERFo7QUNFWTtFQUNFLHFCQUFBO0FEQWQ7QUNFWTtFQUNFLGlCQUFBO0FEQWQ7QUNDYztFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBRENoQjtBQ0NjO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURDaEI7QUNHVTtFQUNFLGtCQUFBO0FERFo7QUNFWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQWQ7QUNFWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEQWQ7QUNHVTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRERaO0FDRVk7RUFDRSxXQUFBO0FEQWQ7QUNNSTtFQVFFLG1CQUFBO0FEWE47QUNNUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBREpWO0FDUU07RUFDRSxnQkFBQTtBRE5SO0FDT1E7RUFDRSxnQkFBQTtBRExWO0FDTVU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBREpaO0FDTVU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURKWjtBQ1NJO0VBQ0UsZUFBQTtFQVFBLG1CQUFBO0VBQ0EsZ0JBQUE7QURkTjtBQ09RO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURMVjtBQ1VNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FEUlI7QUNTUTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURQVjtBQ1FVO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUROWjtBQ09ZO0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRE5kO0FDUVk7RUFDRSx5QkFBQTtBRE5kO0FDU1k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEUGQ7QUNTWTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBRFBkO0FDU1k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FEUGQ7QUNhSTtFQUNFLGlCQUFBO0FEWE47QUNZTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEVlI7QUNZTTtFQVlFLGlCQUFBO0VBQ0EsbUJBQUE7QURyQlI7QUNVVTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBRFJaO0FDVVU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FEUlo7QUNhUTtFQTRCRSxnQkFBQTtFQUNBLGdCQUFBO0FEdENWO0FDV1k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBRFRkO0FDVWM7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FEUmhCO0FDU2dCO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURQbEI7QUNRa0I7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FETnBCO0FDY1U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRFpaO0FDZ0JVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRGRaO0FDZ0JVO0VBQ0UsaUJBQUE7QURkWjtBQ2VZO0VBQ0UsVUFBQTtBRGJkO0FDZVk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRGJkO0FDZVk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURiZDtBQ2dCVTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURkWjtBQ2VZO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBRGJkO0FDZVk7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QURiZDtBQ2NjO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FEWmhCO0FDZVk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FEYmQ7QUNjYztFQUNFLGtCQUFBO0FEWmhCO0FDYWdCO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURYbEI7QUNrQlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FEaEJaO0FDa0JVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBRGhCWjtBQ2tCVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURoQlo7QUNrQlU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRGhCWjtBQ2tCVTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FEaEJaO0FDaUJZO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRGZkO0FDa0JVO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGhCWjtBQ2tCVTtFQUNFLHNCQUFBO0FEaEJaO0FDa0JVO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBRGhCWjtBQ21CWTtFQUNFLGNBQUE7QURqQmQ7QUNnQ1U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUQ5Qlo7QUMrQlk7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUQ3QmQ7QUNnQ1U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBRDlCWjtBQ2dDVTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUQ5Qlo7QUNpQ1E7RUFDRSxnQkFBQTtBRC9CVjtBQ2dDVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUQ5Qlo7QUNnQ1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FEOUJaO0FDa0NjO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURoQ2hCO0FDa0NjO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEaENoQjtBQ21DWTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURqQ2Q7QUNtQ1k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FEakNkO0FDeUNFO0VBRUk7SUFDRSxzQkFBQTtFRHZDTjtFQ3lDSTtJQUNFLGtCQUFBO0VEdkNOO0VDd0NNO0lBQ0UsbUJBQUE7RUR0Q1I7RUMyQ1k7SUFDRSxVQUFBO0VEekNkO0VDNkNZO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUQzQ2Q7RUM2Q1k7SUFDRSxlQUFBO0VEM0NkO0VDZ0RjO0lBQ0UsZUFBQTtFRDlDaEI7RUNrRFU7SUFDRSxZQUFBO0VEaERaO0VDcURJO0lBSUUsaUJBQUE7RUR0RE47RUNtRE07SUFDRSxtQkFBQTtFRGpEUjtFQ3NESTtJQUNFLGtCQUFBO0VEcEROO0VDcURNO0lBQ0UsZ0JBQUE7RURuRFI7RUNxRFU7SUFDRSxlQUFBO0VEbkRaO0VDcURVO0lBQ0UsZUFBQTtFRG5EWjtFQ3FEVTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7RURuRFo7QUFDRjtBQzBERTtFQUVJO0lBQ0Usc0JBQUE7RUR6RE47RUMwRE07SUFDRSxzQkFBQTtJQUNBLGNBQUE7RUR4RFI7RUMyREk7SUFDRSx1QkFBQTtFRHpETjtFQzJEUTtJQUNFLGlCQUFBO0lBQ0EsZ0NBQUE7RUR6RFY7RUMyRFE7SUFLRSxxQkFBQTtFRDdEVjtFQ3lEVTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VEdkRaO0VDMkRZO0lBQ0UsWUFBQTtFRHpEZDtFQzZEWTtJQUNFLFdBQUE7RUQzRGQ7RUNvRVU7SUFDRSxlQUFBO0VEbEVaO0VDb0VVO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VEbEVaO0VDd0VNO0lBT0UsY0FBQTtFRDVFUjtFQ3NFUTtJQUNFLCtDQUFBO0VEcEVWO0VDcUVVO0lBQ0UsdUJBQUE7RURuRVo7RUN1RVE7SUFDRSxtQkFBQTtFRHJFVjtBQUNGO0FDMkVFO0VBRUk7SUFDRSxzQkFBQTtFRDFFTjtFQzJFTTtJQUNFLGdCQUFBO0VEekVSO0VDMEVRO0lBQ0UsYUFBQTtFRHhFVjtBQUNGO0FDNkVFO0VBRUU7SUFDRSxnQkFBQTtFRDVFSjtFQzZFSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VEM0VOO0VDNkVJO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFRDNFTjtFQzZFUTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFRDNFVjtFQ2dGVTtJQUNFLFdBQUE7RUQ5RVo7RUNpRlE7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUQvRVY7RUNtRlE7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtFRGpGVjtFQ2tGVTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RURoRlo7RUNtRlE7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VEakZWO0VDbUZRO0lBQ0Usc0JBQUE7RURqRlY7RUNtRlE7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0VEakZWO0VDb0ZVO0lBQ0UsY0FBQTtFRGxGWjtFQ2lHUTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtFRC9GVjtFQ2dHVTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFRDlGWjtFQ2lHUTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VEL0ZWO0VDaUdRO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFRC9GVjtFQ2tHTTtJQUNFLGdCQUFBO0VEaEdSO0VDaUdRO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtFRC9GVjtFQ2lHUTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7RUQvRlY7RUNtR1k7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFRGpHZDtFQ21HWTtJQUNFLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFRGpHZDtFQ29HVTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RURsR1o7RUNvR1U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VEbEdaO0FBQ0Y7QUN5R0U7RUFFSTtJQUNFLHFCQUFBO0VEeEdOO0VDMkdVO0lBQ0UsZUFBQTtFRHpHWjtFQzZHVTtJQUNFLFlBQUE7RUQzR1o7RUM2R1U7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VEM0daO0VDZ0hJO0lBQ0UsaUJBQUE7RUQ5R047RUNnSFE7SUFDRSxlQUFBO0VEOUdWO0VDaUhNO0lBQ0UsZUFBQTtFRC9HUjtFQ2dIUTtJQUlFLGdCQUFBO0VEakhWO0VDOEdVO0lBQ0UsV0FBQTtFRDVHWjtFQ2dIWTtJQUNFLG1CQUFBO0VEOUdkO0VDb0hJO0lBQ0Usa0JBQUE7RURsSE47RUNvSEk7SUFDRSxpQkFBQTtFRGxITjtBQUNGO0FDc0hFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QURwSEo7QUNzSEk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRG5ITjtBQ3FISTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURsSE47QUNxSEk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QURsSE47QUNxSEk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FEbEhOO0FDb0hJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGpITjtBQ29ISTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBRGpITjtBQ29ISTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FEakhOO0FDb0hJO0VBQ0UsYUFBQTtBRGpITjtBQ21ISTtFQUNFLHNCQUFBO0FEaEhOO0FDb0hJO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEakhOO0FDcUhJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbEhOO0FDcUhJO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QURsSE47QUNxSEk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FEbEhOO0FDcUhJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FEbEhOO0FDc0hJO0VBQ0UsYUFBQTtBRG5ITjtBQ3NISTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FEbkhOO0FDc0hJO0VBQ0UsVUFBQTtFQUNNLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FEbkhaO0FDcUhJO0VBQ0UsYUFBQTtBRGxITjtBQ29ISTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURqSE47QUNtSEk7RUFDRSxxQkFBQTtBRGhITjtBQ2tISTtFQUNFLHlCQUFBO0FEL0dOO0FDaUhJO0VBQ0UseUJBQUE7QUQ5R04iLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tTGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1SZWd1bGFyLnR0Zik7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xufVxuXG4uaG9tZS1tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE3MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyM3B4IDU1cHggNTZweCAxMDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZG90dGVkLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogLTYycHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNzVweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA5cHggLTFweCAjNGE0YTRhO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Rvd24tYXJyb3cucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTVweCBib3R0b20gN3B4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgLm9wcC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgLmZvcm0tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLnBhZC0yIHtcbiAgcGFkZGluZzogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IC5tYWluX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA4MiU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5oZWFkaW5nLXRleHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5idG4tY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5oZWFkaW5nLXRleHQtMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLm1hci1ib3QtMjUge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IHtcbiAgcGFkZGluZzogNXB4IDlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IC51c2VyLWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3gge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggaDMge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggcCB7XG4gIGNvbG9yOiAjN2E3Nzc3O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgcCB7XG4gIGNvbG9yOiAjOTc5Njk2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuaGVhZGluZy10ZXh0LTIgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgaDMge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgcCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM3cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSAwO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogLTNweCAycHggMTNweCAwcHggI2MwY2RjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IC53b3JrLWJveC0xIGgyIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjZiODE7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBwIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAzMHB4IDBweCA5MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEgLmljb24tdGFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSAuY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHggNHB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIHtcbiAgcGFkZGluZzogMjJweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAuYnRuLXN0ZXBzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDdweDtcbiAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IHtcbiAgcGFkZGluZzogMHB4IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuaGVhZGluZy0xMSBoMiB7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLmhlYWRpbmctMTEgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDQwcHggMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5zdGVwcy1kZXRhaWxzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5zdGVwcy1kZXRhaWxzIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuc3RlcHMtZGV0YWlscyB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLnN0ZXBzLWRldGFpbHMgdWwgbGkgYSBzcGFuIHtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5Db2xvdW1uLWdhcCB7XG4gIHdpZHRoOiAzMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIHtcbiAgcGFkZGluZzogMzRweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiAud182MCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIC5jdXN0b20taWRlYSB7XG4gIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAzMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmZyZWUge1xuICBwYWRkaW5nOiAwcHggMzVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAuZnJlZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDM1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIC5saXN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAubGlzdCBsaSBzcGFuIHtcbiAgY29sb3I6ICMzMmQwMzk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIHAge1xuICBjb2xvcjogIzk3OTY5NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gaDQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5mb3JtLWN1c3RvbSB7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHRvcDogLTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICMzMmQwMzk7XG4gIHRvcDogMDtcbiAgbGVmdDogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICNmODIwNGY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0bjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmODIwNGY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogMnM7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmJ0bi1jdXN0b20ge1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHAge1xuICBjb2xvcjogIzk3OTY5NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIGZvcm0gLmZvcm0tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIGZvcm0gLmJ0bi1hZGQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjZiODE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwcHggMjdweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1jdXN0b20uZm9ybS1idG4ge1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1hZGQuc2tpcC1kZXRhaWxzIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA2cHggMHB4O1xuICBjb2xvcjogIzQwNDA0MDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mb3JtLWJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gICAgcGFkZGluZzogNTBweCAyNXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLm1hci1ib3QtMjUge1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAudXNlci1ib3ggaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3ggLnRleHQtYm94IHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IHtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmhlYWRpbmctdGV4dC0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQge1xuICAgIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLndvcmstYm94LTEgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIC5jaXJjbGUge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2YjgxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMTVweCAxcHggMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweCA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gICAgcGFkZGluZzogNTBweCAyNXB4IDEycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFyLXJpZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENEQztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDYwcHggMHB4IDM4cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IHtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgaDIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIC5mYXEtcXVlc3Rpb25zIC5mYXEtMSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgcCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEzcHggMHB4ICNjMGNkY2UgIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIGgyIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNHB4IDI1cHggNTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmRvdHRlZC1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5idG4tc3RlcHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjdweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLkNvbG91bW4tZ2FwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiAud182MCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgdG9wOiAtMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCLinJNcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogIzMyZDAzOTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY3VzdC1idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MjA0ZjtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6ICNmODIwNGY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNmODIwNGY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5idG4tY3VzdG9tIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHAge1xuICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSBmb3JtIC5mb3JtLWN1c3RvbSB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gZm9ybSAuYnRuLWFkZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZjZiODE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMHB4IDI3cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSAuYnRuLWN1c3RvbS5mb3JtLWJ0biB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1hZGQuc2tpcC1kZXRhaWxzIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA2cHggMHB4O1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNHB4IDdweCA3N3B4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmhlYWRpbmctdGV4dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1jdXN0b20ge1xuICAgIGhlaWdodDogNDJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmJ0bi1jdXN0b20ge1xuICAgIGhlaWdodDogNThweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIHtcbiAgICBwYWRkaW5nOiAyMXB4IDdweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5oZWFkaW5nLXRleHQtMiBoMiB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMge1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE0cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCB7XG4gICAgcGFkZGluZzogMjVweCA3cHg7XG4gIH1cbn1cbi5hcGxsaWVkIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXI6ICM1OTU5NTkgc29saWQgMXB4O1xufVxuXG4uaGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG4ucGEge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWxsRGF0YSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTU5NTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi50YWJsZVJvdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YWJsZUNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNiU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRhYmxlQ2VsbCBwIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4uaW1nQ29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5sb2dpbkNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb3JtTG9naW4ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uUXVpekNvbnRhaW5lciB7XG4gIG1hcmdpbjogMiUgNSUgMiUgNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbmZvU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLlF1aXpIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5jb3VudGVyQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbn1cblxuLnRpbWVyQm94IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzczNjVhODtcbn1cblxuLnF1ZXN0aW9uQm94IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlc3VsdENvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jaXJjbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNTdhMztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyM2EyNztcbn0iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1MaWdodC50dGYpO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xuICB9XG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAxNzBweDtcbiAgICAubWFpbi1zZWN0aW9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYzMztcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBwYWRkaW5nOiAyM3B4IDU1cHggNTZweCAxMDRweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC5pbmZvcm1hdGlvbi1mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgICAgIC5kb3R0ZWQtaW1ne1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICBib3R0b206IC02MnB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDM3NXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggOXB4IC0xcHggIzRhNGE0YTtcbiAgICAgICAgICAuZm9ybS1ncm91cHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBzZWxlY3R7XG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNXB4IGJvdHRvbSA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcHAtdGV4dHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWN1c3RvbXtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWQtMntcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC5tYWluX3RpdGxle1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLy8gaGVpZ2h0OiA2N3B4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNlY3Rpb24tMntcbiAgICAgIHBhZGRpbmc6NTBweCAxMTVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAuaGVhZGluZy10ZXh0LTJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDJ7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1hci1ib3QtMjV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICB9XG4gICAgICAuam9pbi1zZWN0aW9ucyB7XG4gICAgICAgIC5tYWluLWJveC1zZWN0aW9ue1xuICAgICAgICAgIC5maXJzdC1ib3h7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggOXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLnVzZXItYm94e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dC1ib3h7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM5NDk0OTQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhNzc3NztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmJveC10ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogODNweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIGNvbG9yOiM5Nzk2OTY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXItYm94LWNvbm5lY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5mYXEtc2VjdGlvbntcbiAgICAgIC5oZWFkaW5nLXRleHQtMntcbiAgXG4gICAgICAgIGgye1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhZGRpbmc6NTBweCAxMTVweDtcbiAgICAgIC5mYXEtcXVlc3Rpb25ze1xuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgIC5mYXEtMXtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgIGNvbG9yOiM3MjcyNzI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzcyNzI3MjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWN0aW9uLTR7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAuaGVhZGluZy10ZXh0LTJ7XG4gICAgICAgIGgye1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFkZGluZzo1MHB4IDExNXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC53b3JrLXN0ZXBze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAuc2FtZS1ib3h7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAud29yay1ib3gtMXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOjI4cHggMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMnB4IDEzcHggMHB4ICNjMGNkY2U7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAvLyBjb2xvcjojZmY2YjgxO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhye1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2YjgxO1xuICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggOTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29uLXRhYntcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNpcmNsZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggNHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRldmVsb3Blcl9yZWdpc3RhcnRpb257XG4gICAgICBwYWRkaW5nOiAyMnB4IDBweDtcbiAgICAgIC5idG4tc3RlcHN7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgICAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XG4gICAgICAgIC5oZWFkaW5nLTExIHtcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLnRhYi1zZWN0aW9uIHtcbiAgICAgICAgICAuc3RlcHMtZGV0YWlscyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtYXJnaW46IDQwcHggMHB4O1xuICAgICAgICAgIC5Db2xvdW1uLWdhcCB7XG4gICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGVwLTEtc2VjdGlvbiB7XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM0cHggMHB4O1xuICAgICAgICAgICAgLndfNjB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXN0b20taWRlYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJlZS1wb2ludHMge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZyZWV7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzNXB4O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzNXB4O1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzJkMDM5O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGVwLTItc2VjdGlvbntcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0tY3VzdG9te1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayB7XG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIC8vICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAvLyAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VzdC1idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XG4gICAgICAgICAgICBmb3Jte1xuICAgICAgICAgICAgICAuZm9ybS1jdXN0b217XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5idG4tYWRke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAyN3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWN1c3RvbS5mb3JtLWJ0bntcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWFkZC5za2lwLWRldGFpbHN7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5mb3JtLWJhY2tncm91bmQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnNlY3Rpb24tMiB7XG4gICAgICAgIHBhZGRpbmc6NTBweCAyNXB4O1xuICAgICAgICAubWFyLWJvdC0yNXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5qb2luLXNlY3Rpb25zIHtcbiAgICAgICAgICAubWFpbi1ib3gtc2VjdGlvbiB7XG4gICAgICAgICAgICAudXNlci1ib3h7XG4gICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gtdGV4dHtcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlyc3QtYm94e1xuICAgICAgICAgICAgICAudGV4dC1ib3h7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlci1ib3gtY29ubmVjdHtcbiAgICAgICAgICAgICAgaGVpZ2h0Ojg0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmFxLXNlY3Rpb257XG4gICAgICAgIC5oZWFkaW5nLXRleHQtMntcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmc6MHB4IDI1cHg7XG4gICAgICB9XG4gIFxuICAgICAgLnNlY3Rpb24tNCB7XG4gICAgICAgIHBhZGRpbmc6NTBweCAyNXB4O1xuICAgICAgICAud29yay1zdGVwcyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAud29yay1ib3gtMXtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2YjgxO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAwcHggMjVweCA1MHB4O1xuICAgICAgICAuaW5mb3JtYXRpb24tZm9ybSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi0ye1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDI1cHggMTJweDtcbiAgICAgICAgLmpvaW4tc2VjdGlvbnN7XG4gICAgICAgICAgLm1hci1yaWdodHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWJveC1zZWN0aW9ue1xuICAgICAgICAgICAgLmZpcnN0LWJveHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbjogNjBweCAwcHggMzhweDtcbiAgICAgICAgICAgIC5ib3gtdGV4dCB7XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLWJveC1jb25uZWN0e1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmFxLXNlY3Rpb257XG4gICAgICAgIC5mYXEtcXVlc3Rpb25ze1xuICAgICAgICAgIC5mYXEtMXtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNlY3Rpb24tNHtcbiAgICAgICAgLndvcmstc3RlcHMge1xuICAgICAgICAgIC53b3JrLWJveC0xe1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxM3B4IDBweCAjYzBjZGNlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC5zYW1lLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA0cHggMjVweCA1MHB4O1xuICAgICAgICAuaW5mb3JtYXRpb24tZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICAgICAgICAuZG90dGVkLWltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbntcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAuYnRuLXN0ZXBze1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgICAgfVxuICAgICAgLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQge1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgLnRhYi1zZWN0aW9uIHtcbiAgICAgICAgICAuQ29sb3Vtbi1nYXAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0xLXNlY3Rpb24ge1xuICAgICAgICAgIC5zdGVwLWZvcm0taW5mb3JtYXRpb24ge1xuICAgICAgICAgICAgLndfNjB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJlZS1wb2ludHMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0yLXNlY3Rpb257XG4gICAgICAgICAgLmNoZWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayB7XG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIC8vICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAvLyAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VzdC1idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XG4gICAgICAgICAgICBmb3Jte1xuICAgICAgICAgICAgICAuZm9ybS1jdXN0b217XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5idG4tYWRke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAyN3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWN1c3RvbS5mb3JtLWJ0bntcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWFkZC5za2lwLWRldGFpbHN7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA0cHggN3B4IDc3cHg7XG4gICAgICAgIC5pbmZvcm1hdGlvbi1mb3Jte1xuICAgICAgICAgIC5oZWFkaW5nLXRleHR7XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0tYmFja2dyb3VuZHtcbiAgICAgICAgICAgIC5mb3JtLWN1c3RvbSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi0yIHtcbiAgICAgICAgcGFkZGluZzogMjFweCA3cHg7XG4gICAgICAgIC5oZWFkaW5nLXRleHQtMntcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5qb2luLXNlY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgICAgICAgLm1haW4tYm94LXNlY3Rpb24ge1xuICAgICAgICAgICAgLmZpcnN0LWJveHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHg7XG4gICAgICAgICAgICAuYm94LXRleHR7XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmFxLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDE0cHg7XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi00IHtcbiAgICAgICAgcGFkZGluZzogMjVweCA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYXBsbGllZHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYm9yZGVyOiAjNTk1OTU5IHNvbGlkIDFweDtcbiAgfVxuICAgIC5oYXtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICB9XG4gICAgLnBhe1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5hbGxEYXRhe1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU5NTk1OTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4gOiA1cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlUm93e1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC50YWJsZUNlbGx7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTYlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC50YWJsZUNlbGwgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLmltZ0NvbnRhaW5lcntcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAubG9naW5Db250YWluZXJ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuZm9ybUxvZ2lue1xuICAgICAgd2lkdGggOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbiAgICAuUXVpekNvbnRhaW5lcntcbiAgICAgIG1hcmdpbjogMiUgNSUgMiUgNSU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgfVxuXG4gICAgLmluZm9TZWN0aW9ue1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLlF1aXpIZWFkaW5ne1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuXG4gICAgLmNvdW50ZXJCb3h7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgfVxuXG4gICAgLnRpbWVyQm94e1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgICAgY29sb3I6ICM3MzY1YTg7XG5cbiAgICB9XG5cbiAgICAucXVlc3Rpb25Cb3h7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5xdWVzdGlvbntcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICB9XG5cbiAgICAubmV4dEJ1dHRvbntcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnJlc3VsdENvbnRhaW5lcntcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5jaXJjbGV7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgfVxuICAgIC5yZWR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxuICAgIC5ibHVle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMWQ1N2EzO1xuICAgIH1cbiAgICAuZ3JlZW57XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMjNhMjc7XG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-file-upload',
          templateUrl: './file-upload.component.html',
          styleUrls: ['./file-upload.component.scss']
        }]
      }], function () {
        return [{
          type: _Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_2__["ApiparserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-upload/file-upload.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/file-upload/file-upload.module.ts ***!
    \***************************************************/

  /*! exports provided: FileUploadModule */

  /***/
  function srcAppFileUploadFileUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _file_upload_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./file-upload.routing */
    "./src/app/file-upload/file-upload.routing.ts");
    /* harmony import */


    var _file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./file-upload.component */
    "./src/app/file-upload/file-upload.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var FileUploadModule = function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    };

    FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileUploadModule
    });
    FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FileUploadModule_Factory(t) {
        return new (t || FileUploadModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _file_upload_routing__WEBPACK_IMPORTED_MODULE_3__["FileUploadRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
        declarations: [_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _file_upload_routing__WEBPACK_IMPORTED_MODULE_3__["FileUploadRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _file_upload_routing__WEBPACK_IMPORTED_MODULE_3__["FileUploadRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-upload/file-upload.routing.ts":
  /*!****************************************************!*\
    !*** ./src/app/file-upload/file-upload.routing.ts ***!
    \****************************************************/

  /*! exports provided: FileUploadRoutingModule */

  /***/
  function srcAppFileUploadFileUploadRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadRoutingModule", function () {
      return FileUploadRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./file-upload.component */
    "./src/app/file-upload/file-upload.component.ts");

    var routes = [{
      path: 'upload',
      component: _file_upload_component__WEBPACK_IMPORTED_MODULE_2__["FileUploadComponent"]
    }];

    var FileUploadRoutingModule = function FileUploadRoutingModule() {
      _classCallCheck(this, FileUploadRoutingModule);
    };

    FileUploadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileUploadRoutingModule
    });
    FileUploadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FileUploadRoutingModule_Factory(t) {
        return new (t || FileUploadRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-module/main-module.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main-module/main-module.component.ts ***!
    \******************************************************/

  /*! exports provided: MainModuleComponent */

  /***/
  function srcAppMainModuleMainModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModuleComponent", function () {
      return MainModuleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/registration/registration.service */
    "./src/app/Services/registration/registration.service.ts");
    /* harmony import */


    var _Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/apiparser/apiparser.service */
    "./src/app/Services/apiparser/apiparser.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MainModuleComponent_div_0_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_14_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First Name is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_14_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid Name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_14_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_14_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.errors.pattern);
      }
    }

    function MainModuleComponent_div_0_div_30_p_20_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last Name is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_20_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid last name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_20_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_20_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.errors.pattern);
      }
    }

    function MainModuleComponent_div_0_div_30_p_26_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_26_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_26_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_26_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r14.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r14.errors.pattern);
      }
    }

    function MainModuleComponent_div_0_div_30_p_32_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_32_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password with 8 charecters.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_32_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_32_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r16.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r16.errors.minlength);
      }
    }

    function MainModuleComponent_div_0_div_30_p_38_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Branch is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_38_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid Branch Name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_38_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_38_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r18.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r18.errors.pattern);
      }
    }

    function MainModuleComponent_div_0_div_30_p_44_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Semester is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_44_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a single digit Semester.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_44_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_44_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r20.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r20.errors.pattern);
      }
    }

    function MainModuleComponent_div_0_div_30_p_64_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_64_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_64_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_64_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r23.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r23.errors.pattern);
      }
    }

    function MainModuleComponent_div_0_div_30_p_70_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_70_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter a valid password with 8 charecters.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_0_div_30_p_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_0_div_30_p_70_span_1_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_0_div_30_p_70_span_2_Template, 2, 0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r25.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r25.errors.minlength);
      }
    }

    function MainModuleComponent_div_0_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Fill Your Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MainModuleComponent_div_0_div_30_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r43.register(_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MainModuleComponent_div_0_div_30_p_14_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MainModuleComponent_div_0_div_30_p_20_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MainModuleComponent_div_0_div_30_p_26_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, MainModuleComponent_div_0_div_30_p_32_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Branch");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, MainModuleComponent_div_0_div_30_p_38_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Semester");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, MainModuleComponent_div_0_div_30_p_44_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "You\u2019ll love OfQuiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Free!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Login Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "form", 39, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MainModuleComponent_div_0_div_30_Template_form_ngSubmit_57_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r45.login(_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 41, 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, MainModuleComponent_div_0_div_30_p_64_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 43, 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, MainModuleComponent_div_0_div_30_p_70_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);

        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);

        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);

        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r10.valid && _r9.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r12.valid && _r9.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r14.valid && _r9.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r16.valid && _r9.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r18.valid && _r9.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r18.valid && _r9.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r23.valid && _r22.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r25.valid && _r22.submitted);
      }
    }

    function MainModuleComponent_div_0_div_31_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainModuleComponent_div_0_div_31_div_7_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

          var i_r48 = ctx.index;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r49.startQuize(i_r48);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "start Now");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var quize_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](quize_r47.Name);
      }
    }

    function MainModuleComponent_div_0_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "start Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MainModuleComponent_div_0_div_31_div_7_Template, 5, 1, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.quizeList);
      }
    }

    function MainModuleComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Join OfQuiz ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Submit your details for Sign-Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MainModuleComponent_div_0_li_13_Template, 2, 0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MainModuleComponent_div_0_li_14_Template, 2, 0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Step 1: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Complete the form");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MainModuleComponent_div_0_li_23_Template, 2, 0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MainModuleComponent_div_0_li_24_Template, 2, 0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Step 2: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Save and Veiw Quizes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MainModuleComponent_div_0_div_30_Template, 74, 8, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MainModuleComponent_div_0_div_31_Template, 8, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.step == 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.step == 2));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);
      }
    }

    function MainModuleComponent_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MainModuleComponent_div_1_div_13_Template_input_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

          var i_r53 = ctx.index;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r54.storeAnswere(i_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answere_r52 = ctx.$implicit;
        var i_r53 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", answere_r52, " ");
      }
    }

    function MainModuleComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Quiz 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MainModuleComponent_div_1_div_13_Template, 5, 2, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainModuleComponent_div_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r56.QuestionChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainModuleComponent_div_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r58.submitQuiz();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Submit Quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Question : ", ctx_r1.currentQuestion + 1, "/20");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" :", ctx_r1.timer, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Question Number ", ctx_r1.currentQuestion + 1, ": ", ctx_r1.quizeList[ctx_r1.currentQuiz].questions[ctx_r1.currentQuestion].question, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.quizeList[ctx_r1.currentQuiz].questions[ctx_r1.currentQuestion].answers);
      }
    }

    function MainModuleComponent_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r59.result, "% ");
      }
    }

    function MainModuleComponent_div_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r60.result, "% ");
      }
    }

    function MainModuleComponent_div_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r61.result, "% ");
      }
    }

    function MainModuleComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Following Is Your Result:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainModuleComponent_div_2_div_5_Template, 2, 1, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainModuleComponent_div_2_div_6_Template, 2, 1, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MainModuleComponent_div_2_div_7_Template, 2, 1, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainModuleComponent_div_2_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r62.home();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.red);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.blue);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.green);
      }
    }

    var MainModuleComponent = /*#__PURE__*/function () {
      function MainModuleComponent(router, route, RegistrationService, ApiParser) {
        var _this4 = this;

        _classCallCheck(this, MainModuleComponent);

        this.router = router;
        this.route = route;
        this.RegistrationService = RegistrationService;
        this.ApiParser = ApiParser;
        this.step = 1;
        this.QuestionCounter = 0;
        this.resultArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.timer = 30;
        this.stopTimer = 0;
        this.currentQuestion = 0;
        this.currentAnswere = 0;
        this.result = 0;
        this.red = false;
        this.blue = false;
        this.green = false;

        this.storeAnswere = function (data) {
          _this4.currentAnswere = data;
        };

        this.submitQuiz = function () {
          var sum = 0;

          for (var i = 0; i < 20; ++i) {
            if (_this4.resultArray[i] === parseInt(_this4.quizeList[_this4.currentQuiz].questions[i].correct_answer)) {
              ++sum;
            }
          }

          _this4.result = sum / 20 * 100;

          if (_this4.result >= 85) {
            _this4.green = true;
          }

          if (_this4.result < 85 && _this4.result >= 45) {
            _this4.blue = true;
          }

          if (_this4.result < 45) {
            _this4.red = true;
          }

          console.log(_this4.result);

          _this4["continue"]();
        };

        this.QuestionChange = function () {
          if (_this4.currentQuestion < 20) {
            _this4.resultArray[_this4.currentQuestion] = _this4.currentAnswere + 1;
            ++_this4.currentQuestion;
            _this4.timer = 30;
          }

          if (_this4.currentQuestion === 19) {
            document.getElementById("submitQuiz").click();
          }
        };

        this.start = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("start called");

                    if (this.stopTimer === 0) {
                      this.timerFunc();
                    }

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        };

        this.timerFunc = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.timer === 0) {
                      document.getElementById("nextQuestion").click();
                      this.start();
                    } else {
                      setTimeout(function () {
                        --_this5.timer;

                        _this5.start();
                      }, 1000);
                    }

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        };

        this.startQuize = function (index) {
          _this4.currentQuiz = index;

          _this4["continue"]();

          _this4.start();
        };

        this.login = function (user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(!user || !user.valid)) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 2:
                    this.RegistrationService.login(user.form.value).then(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (resp[0] === 'LoggedIn') {
                                  console.log(resp[1]);
                                  this.userDetails = resp[1];
                                  this.quizeList = resp[2];
                                  console.log(this.quizeList);
                                  this.step = 2;
                                }

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        };
      }

      _createClass(MainModuleComponent, [{
        key: "home",
        value: function home() {
          this.step = 2;
        }
      }, {
        key: "register",
        value: function register(user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var userToSend;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(!user || !user.valid)) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return");

                  case 2:
                    userToSend = user.form.value;
                    console.log(userToSend);
                    this.RegistrationService.register(userToSend).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (result[0] === 'Recieved') {
                                  this.userDetails = user.form.value;
                                  this.quizeList = result[1];
                                  this.step = 2;
                                }

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    })["catch"](function (err) {
                      err = err || new Object();
                    });

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "continue",
        value: function _continue() {
          this.step = this.step + 1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainModuleComponent;
    }();

    MainModuleComponent.ɵfac = function MainModuleComponent_Factory(t) {
      return new (t || MainModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_4__["ApiparserService"]));
    };

    MainModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainModuleComponent,
      selectors: [["app-main-module"]],
      decls: 3,
      vars: 3,
      consts: [["class", "home-main-container", 4, "ngIf"], [4, "ngIf"], [1, "home-main-container"], [1, "developer_registartion"], [1, "container"], [1, "main-registration-part"], [1, "heading-11"], [1, "tab-section"], [1, "Coloumn-gap"], [1, "steps-details"], [2, "margin-top", "4px !important"], ["src", "assets/images/Head-Icon.png", "alt", ""], ["src", "assets/images/HeadGrey.png", "alt", ""], ["src", "assets/images/link_icon_grey.png", "alt", ""], ["src", "assets/images/link_icon_blue.png", "alt", ""], [1, "step-1-section"], [1, "step-form-information"], [1, "row"], [1, "col-md-6", "col-sm-6"], [1, "w_60", 3, "ngSubmit"], ["user", "ngForm"], [1, "form-group"], ["ngModel", "", "required", "", "type", "text", "name", "firstName", "placeholder", "First Name", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["firstName", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "type", "text", "name", "lastName", "placeholder", "Last Name", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["lastName", "ngModel"], ["ngModel", "", "required", "", "type", "email", "name", "email", "placeholder", "Email", "pattern", "^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$", 1, "form-control"], ["email", "ngModel"], ["ngModel", "", "required", "", "type", "password", "name", "password", "placeholder", "Password", "minlength", "8", 1, "form-control"], ["password", "ngModel"], ["ngModel", "", "required", "", "type", "text", "name", "branch", "placeholder", "Branch", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["branch", "ngModel"], ["ngModel", "", "required", "", "type", "text", "name", "Semester", "placeholder", "Semester", "pattern", "[0-9]", "maxlength", "1", 1, "form-control"], ["Semester", "ngModel"], ["type", "submit", 1, "button", "btn-steps"], [1, "free-points"], [1, "free"], [1, "loginContainer"], [1, "w_60", "formLogin", 3, "ngSubmit"], ["user1", "ngForm"], ["ngModel", "", "required", "", "type", "email", "name", "email1", "placeholder", "Email", "pattern", "^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$", 1, "form-control"], ["email1", "ngModel"], ["ngModel", "", "required", "", "type", "password", "name", "password1", "placeholder", "Password", "minlength", "8", 1, "form-control"], ["password1", "ngModel"], [1, "for-group"], [1, "text-danger"], ["class", "d-block text-left mt-1 ml-1 small text-danger", 4, "ngIf"], [1, "d-block", "text-left", "mt-1", "ml-1", "small", "text-danger"], [1, "step-2-section"], [1, "tableRow"], [1, "tableCell"], ["class", "tableRow", 4, "ngFor", "ngForOf"], [1, "tableCell", 3, "click"], [1, "QuizContainer"], [1, "infoSection"], [1, "QuizHeading"], [1, "counterBox"], [1, "timerBox"], [1, "questionBox"], [1, "question"], [1, "optionBox"], ["class", "form-group", 4, "ngFor", "ngForOf"], ["id", "nextQuestion", 1, "button", "nextButton", 3, "click"], ["id", "submitQuiz", 1, "button", "nextButton", 3, "click"], [1, "form-control"], [1, "radio-inline"], ["type", "radio", "name", "options", 3, "value", "change"], [1, "resultContainer"], ["class", "circle red", 4, "ngIf"], ["class", "circle blue", 4, "ngIf"], ["class", "circle green", 4, "ngIf"], [1, "button", "nextButton", 3, "click"], [1, "circle", "red"], [1, "circle", "blue"], [1, "circle", "green"]],
      template: function MainModuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MainModuleComponent_div_0_Template, 32, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainModuleComponent_div_1_Template, 18, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainModuleComponent_div_2_Template, 10, 3, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 1 || ctx.step === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  font-family: Lato-Light;\n}\n.home-main-container[_ngcontent-%COMP%] {\n  margin-bottom: 170px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n  background-color: #232633;\n  width: 100%;\n  padding: 23px 55px 56px 104px;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: -28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: -62px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  width: 375px;\n  box-shadow: 0px 6px 9px -1px #4a4a4a;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-image: url(/assets/images/down-arrow.png);\n  background-repeat: no-repeat;\n  background-position: right 15px bottom 7px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .opp-text[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 14px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .pad-2[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   .main_title[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 82%;\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 45px;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 40px;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 5px 0px;\n  font-size: 20px;\n  font-style: italic;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 15px 0px;\n  font-size: 17px;\n  letter-spacing: 2px;\n  line-height: 25px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #949494;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7777;\n  font-size: 18px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  margin-top: 9px;\n  height: 83px;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 29px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #727272;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #727272;\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: flex;\n  flex: 1 1 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 28px 20px;\n  text-align: center;\n  box-shadow: -3px 2px 13px 0px #c0cdce;\n  width: 100%;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  height: 80px;\n  font-size: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #ff6b81;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 18px;\n  margin: 30px 0px 90px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .icon-tab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ff6b81;\n  border-radius: 50px;\n  display: inline-block;\n  margin: 15px 4px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n  padding: 22px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 47px;\n  background: #7365a8;\n  color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: Lato-Regular;\n  border-radius: 4px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n  padding: 0px 50px;\n  margin-bottom: 30px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 40px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding: 7px 20px;\n  margin: 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-family: Lato-Regular;\n  margin-left: 30px;\n  display: block;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #595959;\n  font-weight: normal;\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  float: left;\n  border: 1px solid #a6a6a6;\n  margin-right: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%] {\n  padding: 34px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Lato-Regular;\n  color: #595959;\n  font-weight: 100;\n  margin-bottom: 8px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .custom-idea[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  border-radius: 6px;\n  border: 1px solid #a6a6a6;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 320px;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  padding: 20px 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%] {\n  padding: 0px 35px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  padding: 20px 35px;\n  list-style: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #32d039;\n  margin-right: 10px;\n  font-weight: bold;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  top: -2px;\n  float: right;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-color: #abaaaa;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\u2713\";\n  position: absolute;\n  display: none;\n  color: #32d039;\n  top: 0;\n  left: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  background-color: #f8204f;\n  border-width: 2px;\n  border-color: #f8204f;\n  color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f8204f;\n  background-color: #fff;\n  color: #f8204f;\n  border-radius: 20px;\n  transform-style: 2s;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ff6b81;\n  font-size: 24px;\n  margin: 0px 27px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n  clear: both;\n  float: right;\n  margin: 6px 0px;\n  color: #404040;\n  background: transparent;\n  font-size: 24px;\n}\n@media screen and (max-width: 1200px) {\n  .home-main-container[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 94px;\n    font-size: 21px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n    height: 84px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 0px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #ff6b81;\n    border-radius: 50px;\n    display: inline-block;\n    margin: 15px 1px 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 0px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px 12px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .mar-right[_ngcontent-%COMP%] {\n    border-right: 0px;\n    border-bottom: 1px solid #DCDCDC;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 60px 0px 38px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 336px;\n    margin: 0 auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-bottom: 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n    box-shadow: 0px 2px 13px 0px #c0cdce !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 50px !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 640px) {\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n    margin-bottom: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    border: 1px solid #ccc;\n    width: 100%;\n    float: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    padding-left: 25px;\n    margin-bottom: 12px;\n    top: -2px;\n    float: right;\n    cursor: pointer;\n    font-size: 15px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n    position: relative;\n    top: 3px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border-color: #abaaaa;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n    background-color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\u2713\";\n    position: absolute;\n    display: none;\n    color: #32d039;\n    top: 0;\n    left: 2px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    background-color: #f8204f;\n    border-width: 2px;\n    border-color: #f8204f;\n    color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n    border-color: #f8204f;\n    background-color: #fff;\n    color: #f8204f;\n    border-radius: 20px;\n    transform-style: 2s;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #000;\n    font-family: Lato-Regular;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #979696;\n    font-size: 16px;\n    margin: 15px 0 20px 0;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #b7b7b7;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #ff6b81;\n    font-size: 24px;\n    margin: 0px 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n    clear: both;\n    float: right;\n    margin: 6px 0px;\n    color: #404040;\n    background: transparent;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 7px 77px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 42px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    height: 58px;\n    font-size: 20px;\n    margin-top: 15px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 21px 7px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%] {\n    margin: 0px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 30px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 25px 14px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 25px 7px;\n  }\n}\n.apllied[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 20%;\n  text-align: center;\n  padding: 50px;\n  border: #595959 solid 1px;\n}\n.ha[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  margin: 15px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.pa[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n  margin: 15px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n  display: block;\n  font-weight: 600;\n}\n.allData[_ngcontent-%COMP%] {\n  border: 1px solid #595959;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 5px;\n}\n.tableRow[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.tableCell[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 16%;\n  box-sizing: border-box;\n  font-size: 14px;\n  overflow: auto;\n  border: 1px solid black;\n  margin-bottom: 1px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2px;\n}\n.tableCell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  margin: 0 !important;\n  overflow-wrap: break-word;\n}\n.imgContainer[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n.loginContainer[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.formLogin[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.QuizContainer[_ngcontent-%COMP%] {\n  margin: 2% 5% 2% 5%;\n  border: 1px solid black;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 5px;\n}\n.infoSection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  margin: 2px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n.QuizHeading[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Lato-Light;\n  color: #595959;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n}\n.counterBox[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  font-family: Lato-Light;\n}\n.timerBox[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  font-family: Lato-Light;\n  color: #7365a8;\n}\n.questionBox[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.question[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: flex;\n  font-size: 22px;\n  font-family: Lato-Light;\n}\n.nextButton[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 22px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n  border-radius: 5px;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.resultContainer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.circle[_ngcontent-%COMP%] {\n  display: flex;\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  color: white;\n  font-size: x-large;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  margin-left: 25%;\n}\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #1d57a3;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: #123a27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tb2R1bGUvbWFpbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS95YXNraWNrZXIvRG9jdW1lbnRzL0RvdHMtQXNzaWdubWVudC9BbGdvRm9jdXNGcm9udEVuZC1tYXN0ZXIvc3JjL2FwcC9tYWluLW1vZHVsZS9tYWluLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx1QkFBQTtFQUNBLHFDQUFBO0FERUo7QUNBRTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7QURFSjtBQ0FFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBRTtFQUNFLG9CQUFBO0FER0o7QUNGSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QURJTjtBQ0hNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURLUjtBQ0pRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRE1WO0FDSlE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBRE1WO0FDTFU7RUFDRSxtQkFBQTtBRE9aO0FDTlk7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QURRZDtBQ05ZO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFFkO0FDTlk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEUWQ7QUNOWTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEUWQ7QUNMVTtFQUNFLFlBQUE7QURPWjtBQ0ZVO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGVTtFQUNFLFdBQUE7RUFDQSxlQUFB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Q0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FEbkhaO0FDcUhJO0VBQ0UsYUFBQTtBRGxITjtBQ29ISTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURqSE47QUNtSEk7RUFDRSxxQkFBQTtBRGhITjtBQ2tISTtFQUNFLHlCQUFBO0FEL0dOO0FDaUhJO0VBQ0UseUJBQUE7QUQ5R04iLCJmaWxlIjoic3JjL2FwcC9tYWluLW1vZHVsZS9tYWluLW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tTGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1SZWd1bGFyLnR0Zik7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xufVxuXG4uaG9tZS1tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE3MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyM3B4IDU1cHggNTZweCAxMDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZG90dGVkLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogLTYycHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNzVweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA5cHggLTFweCAjNGE0YTRhO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Rvd24tYXJyb3cucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTVweCBib3R0b20gN3B4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgLm9wcC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgLmZvcm0tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLnBhZC0yIHtcbiAgcGFkZGluZzogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IC5tYWluX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA4MiU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5oZWFkaW5nLXRleHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5idG4tY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5oZWFkaW5nLXRleHQtMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLm1hci1ib3QtMjUge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IHtcbiAgcGFkZGluZzogNXB4IDlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IC51c2VyLWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3gge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggaDMge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggcCB7XG4gIGNvbG9yOiAjN2E3Nzc3O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgcCB7XG4gIGNvbG9yOiAjOTc5Njk2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuaGVhZGluZy10ZXh0LTIgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgaDMge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgcCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM3cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSAwO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogLTNweCAycHggMTNweCAwcHggI2MwY2RjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IC53b3JrLWJveC0xIGgyIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjZiODE7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBwIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAzMHB4IDBweCA5MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEgLmljb24tdGFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSAuY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHggNHB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIHtcbiAgcGFkZGluZzogMjJweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAuYnRuLXN0ZXBzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDdweDtcbiAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IHtcbiAgcGFkZGluZzogMHB4IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuaGVhZGluZy0xMSBoMiB7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLmhlYWRpbmctMTEgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDQwcHggMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5zdGVwcy1kZXRhaWxzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5zdGVwcy1kZXRhaWxzIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuc3RlcHMtZGV0YWlscyB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLnN0ZXBzLWRldGFpbHMgdWwgbGkgYSBzcGFuIHtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5Db2xvdW1uLWdhcCB7XG4gIHdpZHRoOiAzMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIHtcbiAgcGFkZGluZzogMzRweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiAud182MCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIC5jdXN0b20taWRlYSB7XG4gIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAzMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmZyZWUge1xuICBwYWRkaW5nOiAwcHggMzVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAuZnJlZSBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDM1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIC5saXN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAubGlzdCBsaSBzcGFuIHtcbiAgY29sb3I6ICMzMmQwMzk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIHAge1xuICBjb2xvcjogIzk3OTY5NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gaDQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5mb3JtLWN1c3RvbSB7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHRvcDogLTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICMzMmQwMzk7XG4gIHRvcDogMDtcbiAgbGVmdDogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICNmODIwNGY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0bjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmODIwNGY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogMnM7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmJ0bi1jdXN0b20ge1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHAge1xuICBjb2xvcjogIzk3OTY5NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIGZvcm0gLmZvcm0tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIGZvcm0gLmJ0bi1hZGQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjZiODE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwcHggMjdweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1jdXN0b20uZm9ybS1idG4ge1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1hZGQuc2tpcC1kZXRhaWxzIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA2cHggMHB4O1xuICBjb2xvcjogIzQwNDA0MDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mb3JtLWJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gICAgcGFkZGluZzogNTBweCAyNXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLm1hci1ib3QtMjUge1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAudXNlci1ib3ggaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgICBoZWlnaHQ6IDk0cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3ggLnRleHQtYm94IHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IHtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmhlYWRpbmctdGV4dC0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQge1xuICAgIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLndvcmstYm94LTEgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIC5jaXJjbGUge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2YjgxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMTVweCAxcHggMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHggMjVweCA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gICAgcGFkZGluZzogNTBweCAyNXB4IDEycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFyLXJpZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENEQztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDYwcHggMHB4IDM4cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IHtcbiAgICB3aWR0aDogMzM2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgaDIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIC5mYXEtcXVlc3Rpb25zIC5mYXEtMSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgcCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEzcHggMHB4ICNjMGNkY2UgIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIGgyIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNHB4IDI1cHggNTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmRvdHRlZC1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5idG4tc3RlcHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjdweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLkNvbG91bW4tZ2FwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiAud182MCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgdG9wOiAtMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCLinJNcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogIzMyZDAzOTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY3VzdC1idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MjA0ZjtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6ICNmODIwNGY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jdXN0LWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNmODIwNGY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5idG4tY3VzdG9tIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIHAge1xuICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSBmb3JtIC5mb3JtLWN1c3RvbSB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gZm9ybSAuYnRuLWFkZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZjZiODE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMHB4IDI3cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSAuYnRuLWN1c3RvbS5mb3JtLWJ0biB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1hZGQuc2tpcC1kZXRhaWxzIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiA2cHggMHB4O1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNHB4IDdweCA3N3B4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmhlYWRpbmctdGV4dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1jdXN0b20ge1xuICAgIGhlaWdodDogNDJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmJ0bi1jdXN0b20ge1xuICAgIGhlaWdodDogNThweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIHtcbiAgICBwYWRkaW5nOiAyMXB4IDdweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5oZWFkaW5nLXRleHQtMiBoMiB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMge1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE0cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCB7XG4gICAgcGFkZGluZzogMjVweCA3cHg7XG4gIH1cbn1cbi5hcGxsaWVkIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xuICBib3JkZXI6ICM1OTU5NTkgc29saWQgMXB4O1xufVxuXG4uaGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuXG4ucGEge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYWxsRGF0YSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1OTU5NTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi50YWJsZVJvdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YWJsZUNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNiU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRhYmxlQ2VsbCBwIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4uaW1nQ29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5sb2dpbkNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb3JtTG9naW4ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uUXVpekNvbnRhaW5lciB7XG4gIG1hcmdpbjogMiUgNSUgMiUgNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbmZvU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLlF1aXpIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5jb3VudGVyQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbn1cblxuLnRpbWVyQm94IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzczNjVhODtcbn1cblxuLnF1ZXN0aW9uQm94IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlc3VsdENvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jaXJjbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNTdhMztcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyM2EyNztcbn0iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1MaWdodC50dGYpO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xuICB9XG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAxNzBweDtcbiAgICAubWFpbi1zZWN0aW9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYzMztcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBwYWRkaW5nOiAyM3B4IDU1cHggNTZweCAxMDRweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC5pbmZvcm1hdGlvbi1mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgICAgIC5kb3R0ZWQtaW1ne1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICBib3R0b206IC02MnB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDM3NXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggOXB4IC0xcHggIzRhNGE0YTtcbiAgICAgICAgICAuZm9ybS1ncm91cHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBzZWxlY3R7XG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNXB4IGJvdHRvbSA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcHAtdGV4dHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLWN1c3RvbXtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWQtMntcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC5tYWluX3RpdGxle1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgye1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLy8gaGVpZ2h0OiA2N3B4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNlY3Rpb24tMntcbiAgICAgIHBhZGRpbmc6NTBweCAxMTVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAuaGVhZGluZy10ZXh0LTJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDJ7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1hci1ib3QtMjV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICB9XG4gICAgICAuam9pbi1zZWN0aW9ucyB7XG4gICAgICAgIC5tYWluLWJveC1zZWN0aW9ue1xuICAgICAgICAgIC5maXJzdC1ib3h7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggOXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLnVzZXItYm94e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dC1ib3h7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM5NDk0OTQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhNzc3NztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmJveC10ZXh0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogODNweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIGNvbG9yOiM5Nzk2OTY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXItYm94LWNvbm5lY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5mYXEtc2VjdGlvbntcbiAgICAgIC5oZWFkaW5nLXRleHQtMntcbiAgXG4gICAgICAgIGgye1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhZGRpbmc6NTBweCAxMTVweDtcbiAgICAgIC5mYXEtcXVlc3Rpb25ze1xuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgIC5mYXEtMXtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgIGNvbG9yOiM3MjcyNzI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzcyNzI3MjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWN0aW9uLTR7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAuaGVhZGluZy10ZXh0LTJ7XG4gICAgICAgIGgye1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFkZGluZzo1MHB4IDExNXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC53b3JrLXN0ZXBze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAuc2FtZS1ib3h7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAud29yay1ib3gtMXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOjI4cHggMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMnB4IDEzcHggMHB4ICNjMGNkY2U7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAvLyBjb2xvcjojZmY2YjgxO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhye1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2YjgxO1xuICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggOTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29uLXRhYntcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNpcmNsZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggNHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRldmVsb3Blcl9yZWdpc3RhcnRpb257XG4gICAgICBwYWRkaW5nOiAyMnB4IDBweDtcbiAgICAgIC5idG4tc3RlcHN7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgICAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XG4gICAgICAgIC5oZWFkaW5nLTExIHtcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgLnRhYi1zZWN0aW9uIHtcbiAgICAgICAgICAuc3RlcHMtZGV0YWlscyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtYXJnaW46IDQwcHggMHB4O1xuICAgICAgICAgIC5Db2xvdW1uLWdhcCB7XG4gICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGVwLTEtc2VjdGlvbiB7XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM0cHggMHB4O1xuICAgICAgICAgICAgLndfNjB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jdXN0b20taWRlYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJlZS1wb2ludHMge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZyZWV7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzNXB4O1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzNXB4O1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzJkMDM5O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zdGVwLTItc2VjdGlvbntcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0tY3VzdG9te1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayB7XG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIC8vICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAvLyAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VzdC1idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XG4gICAgICAgICAgICBmb3Jte1xuICAgICAgICAgICAgICAuZm9ybS1jdXN0b217XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5idG4tYWRke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAyN3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWN1c3RvbS5mb3JtLWJ0bntcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWFkZC5za2lwLWRldGFpbHN7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5mb3JtLWJhY2tncm91bmQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnNlY3Rpb24tMiB7XG4gICAgICAgIHBhZGRpbmc6NTBweCAyNXB4O1xuICAgICAgICAubWFyLWJvdC0yNXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5qb2luLXNlY3Rpb25zIHtcbiAgICAgICAgICAubWFpbi1ib3gtc2VjdGlvbiB7XG4gICAgICAgICAgICAudXNlci1ib3h7XG4gICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gtdGV4dHtcbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlyc3QtYm94e1xuICAgICAgICAgICAgICAudGV4dC1ib3h7XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlci1ib3gtY29ubmVjdHtcbiAgICAgICAgICAgICAgaGVpZ2h0Ojg0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmFxLXNlY3Rpb257XG4gICAgICAgIC5oZWFkaW5nLXRleHQtMntcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmc6MHB4IDI1cHg7XG4gICAgICB9XG4gIFxuICAgICAgLnNlY3Rpb24tNCB7XG4gICAgICAgIHBhZGRpbmc6NTBweCAyNXB4O1xuICAgICAgICAud29yay1zdGVwcyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAud29yay1ib3gtMXtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2YjgxO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAwcHggMjVweCA1MHB4O1xuICAgICAgICAuaW5mb3JtYXRpb24tZm9ybSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi0ye1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDI1cHggMTJweDtcbiAgICAgICAgLmpvaW4tc2VjdGlvbnN7XG4gICAgICAgICAgLm1hci1yaWdodHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWJveC1zZWN0aW9ue1xuICAgICAgICAgICAgLmZpcnN0LWJveHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbjogNjBweCAwcHggMzhweDtcbiAgICAgICAgICAgIC5ib3gtdGV4dCB7XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLWJveC1jb25uZWN0e1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmFxLXNlY3Rpb257XG4gICAgICAgIC5mYXEtcXVlc3Rpb25ze1xuICAgICAgICAgIC5mYXEtMXtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNlY3Rpb24tNHtcbiAgICAgICAgLndvcmstc3RlcHMge1xuICAgICAgICAgIC53b3JrLWJveC0xe1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxM3B4IDBweCAjYzBjZGNlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC5zYW1lLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA0cHggMjVweCA1MHB4O1xuICAgICAgICAuaW5mb3JtYXRpb24tZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICAgICAgICAuZG90dGVkLWltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbntcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAuYnRuLXN0ZXBze1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgICAgfVxuICAgICAgLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQge1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgLnRhYi1zZWN0aW9uIHtcbiAgICAgICAgICAuQ29sb3Vtbi1nYXAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0xLXNlY3Rpb24ge1xuICAgICAgICAgIC5zdGVwLWZvcm0taW5mb3JtYXRpb24ge1xuICAgICAgICAgICAgLndfNjB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZnJlZS1wb2ludHMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0yLXNlY3Rpb257XG4gICAgICAgICAgLmNoZWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGVjayB7XG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIC8vICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAvLyAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgICAgIC8vICAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY3VzdC1idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTc5Njk2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XG4gICAgICAgICAgICBmb3Jte1xuICAgICAgICAgICAgICAuZm9ybS1jdXN0b217XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5idG4tYWRke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAyN3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWN1c3RvbS5mb3JtLWJ0bntcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWFkZC5za2lwLWRldGFpbHN7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA0cHggN3B4IDc3cHg7XG4gICAgICAgIC5pbmZvcm1hdGlvbi1mb3Jte1xuICAgICAgICAgIC5oZWFkaW5nLXRleHR7XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0tYmFja2dyb3VuZHtcbiAgICAgICAgICAgIC5mb3JtLWN1c3RvbSB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi0yIHtcbiAgICAgICAgcGFkZGluZzogMjFweCA3cHg7XG4gICAgICAgIC5oZWFkaW5nLXRleHQtMntcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5qb2luLXNlY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgICAgICAgLm1haW4tYm94LXNlY3Rpb24ge1xuICAgICAgICAgICAgLmZpcnN0LWJveHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHg7XG4gICAgICAgICAgICAuYm94LXRleHR7XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmFxLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDE0cHg7XG4gICAgICB9XG4gICAgICAuc2VjdGlvbi00IHtcbiAgICAgICAgcGFkZGluZzogMjVweCA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYXBsbGllZHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYm9yZGVyOiAjNTk1OTU5IHNvbGlkIDFweDtcbiAgfVxuICAgIC5oYXtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgICB9XG4gICAgLnBhe1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5hbGxEYXRhe1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU5NTk1OTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW4gOiA1cHg7XG4gICAgfVxuXG4gICAgLnRhYmxlUm93e1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC50YWJsZUNlbGx7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTYlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIC50YWJsZUNlbGwgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLmltZ0NvbnRhaW5lcntcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAubG9naW5Db250YWluZXJ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuZm9ybUxvZ2lue1xuICAgICAgd2lkdGggOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbiAgICAuUXVpekNvbnRhaW5lcntcbiAgICAgIG1hcmdpbjogMiUgNSUgMiUgNSU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgfVxuXG4gICAgLmluZm9TZWN0aW9ue1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW46IDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLlF1aXpIZWFkaW5ne1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuXG4gICAgLmNvdW50ZXJCb3h7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgfVxuXG4gICAgLnRpbWVyQm94e1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICAgICAgY29sb3I6ICM3MzY1YTg7XG5cbiAgICB9XG5cbiAgICAucXVlc3Rpb25Cb3h7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5xdWVzdGlvbntcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICB9XG5cbiAgICAubmV4dEJ1dHRvbntcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnJlc3VsdENvbnRhaW5lcntcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5jaXJjbGV7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgfVxuICAgIC5yZWR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfVxuICAgIC5ibHVle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMWQ1N2EzO1xuICAgIH1cbiAgICAuZ3JlZW57XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMjNhMjc7XG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main-module',
          templateUrl: './main-module.component.html',
          styleUrls: ['./main-module.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
        }, {
          type: _Services_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_4__["ApiparserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-module/main-module.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/main-module/main-module.module.ts ***!
    \***************************************************/

  /*! exports provided: MainModuleModule */

  /***/
  function srcAppMainModuleMainModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModuleModule", function () {
      return MainModuleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _main_module_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-module.routing */
    "./src/app/main-module/main-module.routing.ts");
    /* harmony import */


    var _main_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-module.component */
    "./src/app/main-module/main-module.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var MainModuleModule = function MainModuleModule() {
      _classCallCheck(this, MainModuleModule);
    };

    MainModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainModuleModule
    });
    MainModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainModuleModule_Factory(t) {
        return new (t || MainModuleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModuleModule, {
        declarations: [_main_module_component__WEBPACK_IMPORTED_MODULE_4__["MainModuleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_module_component__WEBPACK_IMPORTED_MODULE_4__["MainModuleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-module/main-module.routing.ts":
  /*!****************************************************!*\
    !*** ./src/app/main-module/main-module.routing.ts ***!
    \****************************************************/

  /*! exports provided: MainModuleRoutingModule */

  /***/
  function srcAppMainModuleMainModuleRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModuleRoutingModule", function () {
      return MainModuleRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-module.component */
    "./src/app/main-module/main-module.component.ts");

    var routes = [{
      path: '',
      component: _main_module_component__WEBPACK_IMPORTED_MODULE_2__["MainModuleComponent"]
    }];

    var MainModuleRoutingModule = function MainModuleRoutingModule() {
      _classCallCheck(this, MainModuleRoutingModule);
    };

    MainModuleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainModuleRoutingModule
    });
    MainModuleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainModuleRoutingModule_Factory(t) {
        return new (t || MainModuleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModuleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/common/footer/footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/common/footer/footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppViewsCommonFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 7,
      vars: 0,
      consts: [[1, "footer-class"], [1, "footer-logo"], ["href", "#"], ["src", "assets/images/logo-new.png"], [1, "copy-text"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA9 Copyright 2020, Offorms. All rights reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer-class[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 50px 115px;\n  color: #fff;\n  background-color: #232633;\n}\n.footer-class[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 767px) {\n  .footer-class[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhc2tpY2tlci9Eb2N1bWVudHMvRG90cy1Bc3NpZ25tZW50L0FsZ29Gb2N1c0Zyb250RW5kLW1hc3Rlci9zcmMvYXBwL3ZpZXdzL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0U7SUFDRSxrQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY2xhc3N7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtYXJnaW4tdG9wOiAxNzBweDtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbiAgY29sb3I6I2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYzMztcbiAgLmZvb3Rlci1sb2dvIGltZ3tcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3Rlci1jbGFzc3tcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbiIsIi5mb290ZXItY2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG59XG4uZm9vdGVyLWNsYXNzIC5mb290ZXItbG9nbyBpbWcge1xuICB3aWR0aDogMTc1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXItY2xhc3Mge1xuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/common/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/common/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppViewsCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.loggedIn = false;
      }

      _createClass(HeaderComponent, [{
        key: "home",
        value: function home() {
          this.router.navigate(['']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 0,
      consts: [[1, "header-class"], [1, "header-logo"], [3, "click"], ["src", "assets/images/logo-new.png"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
            return ctx.home();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\n.header-class[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #232633;\n  padding: 16px 25px;\n  font-family: Lato-Light;\n}\n.header-class[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  cursor: pointer;\n}\n.header-class[_ngcontent-%COMP%]   .logout-div[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -40px;\n  color: white;\n  font-weight: bold;\n  padding: 12px;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhc2tpY2tlci9Eb2N1bWVudHMvRG90cy1Bc3NpZ25tZW50L0FsZ29Gb2N1c0Zyb250RW5kLW1hc3Rlci9zcmMvYXBwL3ZpZXdzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQUY7QURDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLUxpZ2h0LnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xufVxuXG4uaGVhZGVyLWNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYzMztcbiAgcGFkZGluZzogMTZweCAyNXB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgLmhlYWRlci1sb2dvIGltZ3tcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5sb2dvdXQtZGl2e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLUxpZ2h0LnR0Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xufVxuLmhlYWRlci1jbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNjMzO1xuICBwYWRkaW5nOiAxNnB4IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xufVxuLmhlYWRlci1jbGFzcyAuaGVhZGVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLWNsYXNzIC5sb2dvdXQtZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/yaskicker/Documents/Dots-Assignment/AlgoFocusFrontEnd-master/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map