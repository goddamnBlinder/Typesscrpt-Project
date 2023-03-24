function autobind(target: any, name: string, descriptor: PropertyDescriptor){
    const desc = descriptor.value;
    const newDescriptor:PropertyDescriptor = {
        configurable: true,
        get() {
            return desc
        },

    }

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
    title
    description
    people
    constructor(){
        this.form = document?.querySelector('form') as HTMLFormElement
        this.title = document?.querySelector('#title') as HTMLInputElement
        this.description = document?.querySelector('#description') as HTMLInputElement
        this.people= document?.querySelector('#people') as HTMLInputElement
     
    }
    @autobind
    configure(){
    this.form.addEventListener('click', this.submitHandler)
    }

    private submitHandler(e:Event){
         e.preventDefault()
       const titleValue =this.title.value;
       const descriptionValue = this.description.value;
       const peoplevalue = this.people.value
     console.log(titleValue,descriptionValue, peoplevalue);
         }
}

const projectIn = new projectInput()
