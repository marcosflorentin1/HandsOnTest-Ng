"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(employeeService) {
        this.employeeService = employeeService;
        this.title = 'ng-employee';
        this.showLoading = false;
        this.employees = [];
    }
    AppComponent.prototype.getEmployees = function (id) {
        var _this = this;
        this.showLoading = true;
        if (id) {
            this.employeeService.getEmployee(id)
                .then(function (employee) {
                _this.employees = [];
                if (employee) {
                    _this.employees.push(employee);
                }
                _this.showLoading = false;
            });
        }
        else {
            this.employeeService.getEmployees()
                .then(function (employees) {
                _this.employees = employees;
                _this.showLoading = false;
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map