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
//?....................The function that validates the Input values..................//
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length == 0;
    }
    if (validatableInput.minLength != null &&
        typeof (validatableInput === null || validatableInput === void 0 ? void 0 : validatableInput.value) === 'string') {
        isValid = isValid &&
            validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid &&
            validatableInput.value.length <= validatableInput.maxLength;
    }
    //----------------------------------------------------------------------------//
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid &&
            validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
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
        this.titleEL = document === null || document === void 0 ? void 0 : document.querySelector("#Title");
        this.descriptionEL = document === null || document === void 0 ? void 0 : document.querySelector("#Description");
        this.peopleEL = document === null || document === void 0 ? void 0 : document.querySelector("#People");
        this.btn = document === null || document === void 0 ? void 0 : document.querySelector(".btn");
        this.configure();
    }
    configure() {
        var _a;
        (_a = this.btn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.submitHandler);
    }
    submitHandler(e) {
        e.preventDefault();
        const userInput = this.gatherUserinput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(userInput);
        }
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
            required: true,
            minLength: 4,
            maxLength: 12
        };
        const peopleValidatable = {
            value: people,
            required: true,
            min: 1,
            max: 12
        };
        if (!validate(titleValidatable) || !validate(descripValidatable) || !validate(peopleValidatable)) {
            return window.alert("Some values seems to be incorrect!");
        }
        return [title, description, people];
    }
}
__decorate([
    autobind
], projectInput.prototype, "submitHandler", null);
const projectIn = new projectInput();
//# sourceMappingURL=main.js.map