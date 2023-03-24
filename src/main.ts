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
    form: HTMLFormElement
    title: HTMLInputElement
    description: HTMLInputElement
    people: HTMLInputElement

    constructor(){
        this.form = document.querySelector('form')! as HTMLFormElement
        this.title = document.getElementById('title')! as HTMLInputElement
        this.description = document?.querySelector('#description')! as HTMLInputElement
        this.people= document?.querySelector('#people')! as HTMLInputElement
      
        this.configure()
    }

    configure(){
     this.form.addEventListener('click', this.submitHandler.bind(this))
    }
    @autobind
    submitHandler(e:Event){
       e.preventDefault()

       const titleValue =this.title.value;
       const descriptionValue = this.description.value;
       const peoplevalue = +this.people.value

     console.log(descriptionValue, peoplevalue);

         }
}

const projectIn = new projectInput()


