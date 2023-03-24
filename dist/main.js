"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(id, name, descriptor) {
    const desc = ;
}
var currentStatus;
(function (currentStatus) {
    currentStatus[currentStatus["Active"] = 0] = "Active";
    currentStatus[currentStatus["finish"] = 1] = "finish";
})(currentStatus || (currentStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class projectInput {
    constructor() {
        this.form = document === null || document === void 0 ? void 0 : document.querySelector('form');
        this.title = document === null || document === void 0 ? void 0 : document.querySelector('#title');
        this.description = document === null || document === void 0 ? void 0 : document.querySelector('#description');
        this.people = document === null || document === void 0 ? void 0 : document.querySelector('#people');
    }
    configure() {
        this.form.addEventListener('click', this.submitHandler);
    }
    submitHandler(e) {
        e.preventDefault();
        const titleValue = this.title.value;
        const descriptionValue = this.description.value;
        const peoplevalue = this.people.value;
        console.log(titleValue, descriptionValue, peoplevalue);
    }
}
__decorate([
    autobind
], projectInput.prototype, "configure", null);
const projectIn = new projectInput();
//# sourceMappingURL=main.js.map