"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(target, name, descriptor) {
    const desc = descriptor.value;
    const newDescriptor = {
        configurable: true,
        get() {
            return desc.bind(this);
        }
    };
    return newDescriptor;
}
var currentStatus;
(function (currentStatus) {
    currentStatus[currentStatus["Active"] = 0] = "Active";
    currentStatus[currentStatus["finish"] = 1] = "finish";
})(currentStatus || (currentStatus = {}));
class Project {
    constructor(id, titleEL, descriptionEL, peopleEL, status) {
        this.id = id;
        this.titleEL = titleEL;
        this.descriptionEL = descriptionEL;
        this.peopleEL = peopleEL;
        this.status = status;
    }
}
class projectInput {
    constructor() {
        this.titleEL = document === null || document === void 0 ? void 0 : document.querySelector('#title');
        this.descriptionEL = document === null || document === void 0 ? void 0 : document.querySelector('#description');
        this.peopleEL = document === null || document === void 0 ? void 0 : document.getElementById('people');
        this.btn = document === null || document === void 0 ? void 0 : document.getElementById('submit');
        this.configure();
    }
    configure() {
        var _a;
        (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.submitHandler.bind(this));
    }
    submitHandler(e) {
        e.preventDefault();
        this.gatherUserinput();
    }
    gatherUserinput() {
        var _a, _b, _c;
        const title = (_a = this.titleEL) === null || _a === void 0 ? void 0 : _a.value;
        const description = (_b = this.descriptionEL) === null || _b === void 0 ? void 0 : _b.value;
        const people = +((_c = this.peopleEL) === null || _c === void 0 ? void 0 : _c.value);
        const titleValidatable = {
            value: title,
            required: true
        };
        const descripValidatable = {
            value: description,
            required: true
        };
        const peopleValidatable = {
            value: people,
            required: true,
            min: 1,
            max: 10
        };
        validate();
        return [title, description, people];
    }
}
__decorate([
    autobind
], projectInput.prototype, "submitHandler", null);
const projectIn = new projectInput();
//# sourceMappingURL=main.js.map