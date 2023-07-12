// // type alias
// type Human = {
//   name: string;
//   age: number;
// };

// interface オブジェクトの構造を示したもの
interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}
const human: Human = {
  name: "Quill",
  age: 38,
  greeting(message: string): void {
    console.log(message);
  },
};
let developer: Human;

// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

type Nameable = {
  name: string;
  nickName?: string;
};
const nameable: Nameable = {
  name: "Quill",
};
