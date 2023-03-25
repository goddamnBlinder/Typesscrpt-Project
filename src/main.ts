function autobind(target: any, name: string, descriptor: PropertyDescriptor){
    const desc = descriptor.value;
    const newDescriptor:PropertyDescriptor = {
        configurable: true,
            get() {
                return desc.bind(this)
        } 
    }
    return newDescriptor 
} 
//?....................The function that validates the Input values..................//
function validate(validatableInput:Validatable) : boolean{
     let isValid = true

     if(validatableInput.required){
        isValid = isValid && validatableInput.value.toString().trim().length! === 0
     
     }
     if(validatableInput.minLength! === null && 
        typeof validatableInput.value === 'string' ){
      
            isValid = isValid && validatableInput.value.length >= validatableInput.minLength
     }
     if(validatableInput.maxLength! === null && 
        typeof validatableInput.value === 'string' ){
      
            isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
     }
     //--------------------------------------------------------------------------//

     if(validatableInput.min! === null && typeof validatableInput.value === 'number' ){
      
            isValid = isValid && validatableInput.value >= validatableInput.min
     }
     if(validatableInput.max! === null &&  typeof validatableInput.value === 'number'){
      
            isValid = isValid && validatableInput.value <= validatableInput.max
     }

  return isValid;
}

interface Validatable {
    value: string | number,
    required?: true,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,
    
}

enum currentStatus {
    Active,
    finish
}
class Project {
    constructor(
        public id: string, 
        public titleEL: string,  
        public descriptionEL: string, 
        public peopleEL: number,
        public status: currentStatus ){

       
    }
}
class projectInput {
    titleEL: HTMLInputElement
    descriptionEL: HTMLInputElement
    peopleEL: HTMLInputElement
    btn: HTMLButtonElement
    
    constructor(){
        this.titleEL = document?.querySelector('#title') as HTMLInputElement
        this.descriptionEL = document?.querySelector('#description') as HTMLInputElement
        this.peopleEL= document?.getElementById('people') as HTMLInputElement
        this.btn = document?.getElementById('submit') as HTMLButtonElement
      
        this.configure()
    }

    configure(){
     this.btn?.addEventListener('click', this.submitHandler)
    }

    @autobind
    submitHandler(e:Event){
       e.preventDefault()
 
         const userInput = this.gatherUserinput()
         if(Array.isArray(userInput)){
          const [title, description, people] = userInput
          console.log(userInput);
          
         }

         }
     private gatherUserinput() : [string, string, number] | void{
        const title=this.titleEL?.value;
        const description = this.descriptionEL?.value;
        const people = +this.peopleEL?.value;

        const titleValidatable : Validatable = {
          value: title,
          required: true
        }

        const descripValidatable: Validatable= {
           value: description,
           required: true,
           minLength:4,
           maxLength:12
  
        }

        const peopleValidatable : Validatable= {
           value:people,
           required:true,
           min: 1,
           max: 10
        }

       if( !validate(titleValidatable) || !validate(descripValidatable) || !validate(peopleValidatable)){
           return window.alert("The values seems to be incorrect!")
       }

        return [title, description, people]  
    }

}  
    

const projectIn = new projectInput()


