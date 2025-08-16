class Department{
  name : String;
  constructor(n: string){
    this.name = n;
  }
  describe(){
    console.log("Department: ", this.name);
  }
}

const accounting = new Department("math");
accounting.describe();