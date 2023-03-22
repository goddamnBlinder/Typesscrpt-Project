class Project {
    constructor(
        public id: string, 
        public title: string,  
        public description: string, 
        public people: number ){
   
    }
    projectInput(){
        this.title = document?.querySelector('#title') as HTMLInputElement
        this.description = document?.querySelector('#title') as HTMLInputElement
        this.people= document?.querySelector('#title') as HTMLInputElement
    }
    
}