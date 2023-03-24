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
enum currentStatus {
    Active,
    finish
}
class Project {
    constructor(
        public id: string, 
        public title: string,  
        public description: string, 
        public people: number,
        public status: currentStatus ){

       
    }
}
class projectInput {
    // form: HTMLFormElement
    title
    description
    people
    button
    constructor(){
        // this.form = document.querySelector('form') as HTMLFormElement
        this.button = document?.querySelector('#submit') as HTMLButtonElement
        this.title = document?.querySelector('#title') as HTMLInputElement
        this.description = document?.querySelector('#description') as HTMLInputElement
        this.people= document?.querySelector('#people') as HTMLInputElement
     
    }
   
    configure(){
     this.button?.addEventListener('click', (e:Event) => {
            e.preventDefault()
           return this.submitHandler
        });
    //  this.form.addEventListener('click', this.submitHandler)
    }
    @autobind
    private submitHandler(){

       const titleValue =this.title.value;
       const descriptionValue = this.description.value;
       const peoplevalue = this.people.value
     console.log(titleValue,descriptionValue, peoplevalue);
         }
}

const projectIn = new projectInput()
