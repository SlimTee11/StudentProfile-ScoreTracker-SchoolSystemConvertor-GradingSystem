//declaration of variables
let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

//conversion of studentAge to a whole number.I will use the conversion method of string to number parseInt because the student age is in string and must be converted to a whole number. And parseInt is a way of passing and Interger.
studentAge = parseInt(studentAge);
console.log(typeof studentAge, studentAge)

//conversion of examScore to a decimal number. I will use method parseFloat because am converting it to a decimal number.
examScore = parseFloat(examScore);
console.log(typeof examScore, examScore)

//conversion of passMark into number. Using number(). I am using this based on the instruction of the teacher and also a person mark can either be integer or in decimal.
passMark = Number(passMark);
console.log(typeof passMark, passMark)

//conversion of studentName to string. I will use the string() method to convert this becuase a person name is a string.
studentName = String(studentName);
console.log(typeof studentName, studentName)

//checking the values
let compare = examScore > passMark;
console.log(compare)

