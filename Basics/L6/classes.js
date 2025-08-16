"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: ", this.name);
    }
}
const accounting = new Department("math");
accounting.describe();
