"use strict";
//  Advanced Types
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Type Literals
//  - String literals
var my_name = "Maryam Rind";
console.log(my_name);
//  - Number literals
var my_number = 3245;
console.log(my_number);
//  - Boolean literals
var my_boolean = true;
console.log(my_boolean);
// 2. Type Union
var my_union;
my_union = "Maryam";
my_union = 3245;
my_union = false;
console.log(my_union);
var classroom = {
    student_name: "Zainab",
    roll_number: 93245,
    teacher_name: "Maryam",
    experience: 6
};
// 4. Nullable Type
var address;
// Assign a string value
address = 'Kokhan Colony, Baldia Town Karachi';
console.log(address);
// Assign undefined
address = undefined;
console.log(address);
//  5. optional Type
function from(name, feedback) {
    console.log(name);
}
from("Ahmed");
from("Ali");
var empty_tuple = [
    24, "Maryam", 6600
];
console.log(empty_tuple[1]);
// 7. Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.South);
console.log(Direction.North);
console.log(Direction.East);
console.log(Direction.West);
var Timming;
(function (Timming) {
    Timming["Morning"] = "2-5";
    Timming["Evening"] = "9-12";
    Timming["Night"] = "7-10";
    Timming[Timming["Phone"] = 92445671230] = "Phone";
})(Timming || (Timming = {}));
console.log(Timming.Evening);
var Main_Course = ["Biryani", "Beef Pullao", "Tikka", 123];
console.log(Main_Course);
;
var student_name = {
    name: "Ali",
    roll_number: 34567,
    batch: {
        batch_no: "2-5"
    }
};
console.log(student_name.batch.batch_no, student_name["name"]);
// 12. Unknown Type
var unknown_type;
unknown_type = "Maryam";
unknown_type = 3245;
unknown_type = true;
console.log(unknown_type);
// Emplicit Casting (data types)
var name = "Ali";
console.log(name);
