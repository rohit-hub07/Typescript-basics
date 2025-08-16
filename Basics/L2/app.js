var person1 = {
    firstName: "Rohit",
    age: 21,
    xyz: {
        address: "nalbari",
    },
    skills: ["react", "node", "mongodb"],
};
console.log(person1.firstName);
console.log(person1.xyz);
console.log("person1: ", person1);
var favoriteLan;
favoriteLan = ["rohit", "sinngh"];
console.log(favoriteLan[1]);
//tuple
var person = {
    name: "rohit",
    age: 32,
    skills: ["react", "node"],
    product: [1, "honor"]
};
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["author"] = 1] = "author";
    Role[Role["read"] = 2] = "read";
    Role[Role["user"] = 3] = "user";
})(Role || (Role = {}));
var person3 = {
    name: "patel",
    age: 21,
    skills: ["node"],
    product: [1, "lol"],
    role: Role.read,
};
if (person3.role === Role.author) {
    console.log("author");
}
else if (person3.role === Role.admin) {
    console.log("admin");
}
else if (person3.role === Role.user) {
    console.log("user");
}
{
    console.log("read");
}
