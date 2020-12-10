"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
        this.employeeUrl = 'http://localhost:64545/api/Employee';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.httpClient.get(this.employeeUrl)
            .toPromise();
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.httpClient.get(this.employeeUrl + '/' + id)
            .toPromise();
    };
    EmployeeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map