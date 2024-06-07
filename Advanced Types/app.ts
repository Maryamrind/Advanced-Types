//  Advanced Types

import { log } from "console";

// 1. Type Literals

//  - String literals

let my_name: string ="Maryam Rind";
console.log(my_name);

//  - Number literals
let my_number: number = 3245;
console.log(my_number);

//  - Boolean literals

let my_boolean: boolean = true;
console.log(my_boolean);

// 2. Type Union

let my_union: string | number | boolean;
my_union = "Maryam";
my_union = 3245;
my_union = false;
console.log(my_union);

// 3. Type Intersection

type student = {
    student_name:string,
    roll_number:number
}

type teacher ={
    teacher_name:string,
    experience:number | number
}

type ClassRoom = student & teacher

let classroom: ClassRoom = {
    student_name: "Zainab",
    roll_number: 93245,
    teacher_name: "Maryam",
    experience: 6

}
// 4. Nullable Type

let address: string | undefined;

// Assign a string value
address = 'Kokhan Colony, Baldia Town Karachi';
console.log(address); 

// Assign undefined
address = undefined;
console.log(address); 

//  5. optional Type

function from (name:string,feedback?:string){
    console.log(name);
}
from("Ahmed")
from("Ali")

// 6. Tuple Type 

type  tuple_type=[number,string,number,]
const empty_tuple: tuple_type=[
    24,"Maryam",6600
]
console.log(empty_tuple[1]);

// 7. Enum Type

enum Direction{
    North,
    South,
    East,
    West
}
console.log(Direction.South);
console.log(Direction.North);
console.log(Direction.East);
console.log(Direction.West);

enum Timming{
    Morning="2-5",
    Evening="9-12",
    Night="7-10",
    Phone= 92445671230
}
console.log(Timming.Evening);

// 10. Type Alias

type mainCourse = (string|number)[];
let Main_Course:mainCourse=["Biryani","Beef Pullao","Tikka",123]
console.log(Main_Course);

// 11.Type Interface

interface Name{
    name:string,
    roll_number:number,
    batch:{
        batch_no:string
    }
};
const student_name:Name={
    name:"Ali",
    roll_number:34567,
    batch:{
        batch_no:"2-5"
    }
};
console.log(student_name.batch.batch_no,student_name["name"]);

// 12. Unknown Type

let unknown_type: unknown;
unknown_type = "Maryam";
unknown_type = 3245;
unknown_type = true;
console.log(unknown_type);

// Emplicit Casting (data types)

let name:unknown = "Ali";

console.log(
    name as string
);






