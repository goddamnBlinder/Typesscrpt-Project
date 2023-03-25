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

function validate()
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
     this.btn?.addEventListener('click', this.submitHandler.bind(this))
    }
    @autobind
    submitHandler(e:Event){
       e.preventDefault()
          
          this.gatherUserinput()
         }
     private gatherUserinput() : [string, string, number]{
        const title=this.titleEL?.value;
        const description = this.descriptionEL?.value;
        const people = +this.peopleEL?.value;

        const titleValidatable : Validatable = {
          value: title,
          required: true
        }

        const descripValidatable: Validatable= {
           value: description,
           required: true
  
        }

        const peopleValidatable : Validatable= {
           value:people,
           required:true,
           min: 1,
           max: 10
        }

        validate()

        return [title, description, people]  
    }

}  
    

const projectIn = new projectInput()


