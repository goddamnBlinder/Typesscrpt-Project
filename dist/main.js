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
// lemme explain this validate Function for you for beta understanding
// it takes an input (validatableInput) which could be string or number
// the first IF statement says IF "validatableInput.required", thats means IF true.. note: if a condition is true it'll excute the block scope
// the block scope of the IF statement is reasigning the value of isValid variable thats why isValid was decleared with let key word, so it can be re asign
// the logic is, valid is now equal to =  true + (true or false depending on the ValidateInput)
//  this "validatableInput.value.toString().trim().length! == 0;" means.. the length of that input is not equal to zero. (if its not zero itll return true, if its zero itll return false)
// the toString() method simply conveert ur value to string, while the trim() method trim out white space between you input values.
// so now back to true + (true or false depending on the ValidateInput).  lets assume its true + true. and remember AND gate was used that means I && I = I (true).
// if thats is Valid is still true, it'll move to the second IF statement otherwise the whole function will return false and the validation will fail.
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    //  ...................................................................//
    // string validate//
    //the IF statement says IF "min length is not null && the type is string", thats means IF true && true (I && I = I). if it's equal to true it'll excute the block scope, but if false it wont.
    // the logic is, valid is now equal to =  true + (true or false depending on the ValidateInput).
    // validatableInput.value.length >= validatableInput.minLength means, the length of the value is greater than or equal to the minlength you set in that object. if its greater than it, itll be true.
    // that means isValid = true && true which will return true.
    // is Valid is still true.
    // the second if statement is same, just that its checking if its less than the maxlength you set.
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
    // number validate//
    // same logic with that string validation,
    // if all IF statement was passed, the isValid will remain true, that means that your if statement below in your ProjectInput class that you chained with || will not excute. if it dont excute then it'll return [title, description, people];.
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
            //   ****ignore this code snippet, its just to display the user input. you can replace it with yours.*****
            const displayList = document.querySelector(".display_list");
            let data = document.createElement("li");
            data.innerHTML = `<li>${title}</li>
                        <li>${description}</li>
                        <li>${people}</li>`;
            displayList === null || displayList === void 0 ? void 0 : displayList.appendChild(data);
            //   *************
        }
    }
    gatherUserinput() {
        var _a, _b, _c;
        const title = (_a = this.titleEL) === null || _a === void 0 ? void 0 : _a.value;
        const description = (_b = this.descriptionEL) === null || _b === void 0 ? void 0 : _b.value;
        const people = +((_c = this.peopleEL) === null || _c === void 0 ? void 0 : _c.value);
        const titleValidatable = {
            value: title,
            required: true,
        };
        const descripValidatable = {
            value: description,
            required: true,
            minLength: 4,
            maxLength: 12,
        };
        const peopleValidatable = {
            value: people,
            required: true,
            min: 1,
            max: 12,
        };
        // problem NO.1
        // ---> your validate function wasn't passing its test, thats why it always alert ..."Some values seems to be incorrect!"...
        // ---> the validate function was to retun "true" so that the the array of value can be sent .."[title, description, people] "..
        // lemme explain that your IF statement down below, incase you need better understanding..
        // it says IF the Validate function retuns false. that ! at the front of the validate() is a NOT gate which means, if the validate()
        // retuns the opposite of what its suppose to return. (remember if you check you'll see that the validate() was suppose to return True.)
        // the OR gate || attached between the three validate() calls means that if "any" of that Validate() return false, then alert("some...")
        // even if its one that returns false, it will give that alert.
        // ******  I HAVE FIXED YOUR VALIDATION *****
        if (!validate(titleValidatable) || !validate(descripValidatable) || !validate(peopleValidatable)) {
            return window.alert("Some values seems to be incorrect!");
        }
        //  method 2
        // note: if you need this pattern, youll delete that  return [title, description, people]; blow at the bottom.
        // if(validate(titleValidatable) || validate(descripValidatable) || validate(peopleValidatable)){
        //     return [title, description, people]
        // }else{
        //     return window.alert("Some values seems to be incorrect!");
        // }
        return [title, description, people];
    }
}
__decorate([
    autobind
], projectInput.prototype, "submitHandler", null);
const projectIn = new projectInput();
//# sourceMappingURL=main.js.map