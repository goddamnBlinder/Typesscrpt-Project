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
    constructor(){
        this.projectInput() 
    }
    projectInput(){
        let form = document?.querySelector('form') as HTMLFormElement
        let title = document?.querySelector('#title') as HTMLInputElement
        let description = document?.querySelector('#title') as HTMLInputElement
        let people= document?.querySelector('#title') as HTMLInputElement
    }
}
