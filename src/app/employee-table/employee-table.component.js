"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTableComponent = void 0;
var core_1 = require("@angular/core");
var EmployeeTableComponent = /** @class */ (function () {
    function EmployeeTableComponent() {
        this.headers = [
            'Id',
            'Name',
            'ContractTypeName',
            'RoleId',
            'RoleName',
            'RoleDescription',
            'AnnualSalary'
        ];
    }
    EmployeeTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], EmployeeTableComponent.prototype, "employees", void 0);
    EmployeeTableComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-table',
            templateUrl: './employee-table.component.html',
            styleUrls: ['./employee-table.component.css']
        })
    ], EmployeeTableComponent);
    return EmployeeTableComponent;
}());
exports.EmployeeTableComponent = EmployeeTableComponent;
//# sourceMappingURL=employee-table.component.js.map