let hasValue: boolean = true;
let count: number = 11;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;
//object
const person = { name: { first: "Jack", last: "Smith" }, age: 21 };
//array
const fruits = ["Apple", "Banana", "Grape"];

//tuple
const book: [string, number, boolean] = ["business", 1500, false];
book.push(21);

//enum 列挙型 =〜を書かなければ数値になる/ パスカルケース、全部大文字にする
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.GRANDE;
// console.log(coffee.size);

//any型　 anyは何もしない型の恩恵は受けられない
let anything: any = true;
anything = "hello";
anything = ["hello", 33, true];
anything = {};
anything.test = 111;
let banana = "banana";
banana = anything;
// console.log(banana);

//union型
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"];
console.log(unionTypes);

//Literal型 constにすると自動的にLiteral型になる
const apple = "apple";
let clothSize: "small" | "medium" | "large" = "large";
//2つ3つとかであればenumではなくLiteral型を使った方がbetter
const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: "medium",
};

//typeエイリアス(別名)
type TshirtSize = "small" | "medium" | "large"; //型を定義する
const orange = "orange";

let TshirtSize: TshirtSize = "large"; //エイリアス
//2つ3つとかであればenumではなくLiteral型を使った方がbetter
const tshirt: {
  color: string;
  size: TshirtSize; //エイリアス
} = {
  color: "white",
  size: "medium",
};

//関数への型定義
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(add(3, 2));

//void型
function sayHello(): void {
  console.log("Hello!");
}
console.log(sayHello());

//null型
let tmp: null = null;

//関数型 型の定義はどちらに合っても良い
const anotherAdd: (n1: number, n2: number) => number = function add(
  num1,
  num2
): number {
  return num1 + num2;
};
// const doubleNumber = (number) => number * 2;
const doubleNumber: (num: number) => number = (num) => num * 2;

//callback関数に型をつける
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

//unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
// text = unknownInput; //unknown型は代入できない
//  stringのみ代入できる
if (typeof unknownInput === "string") {
  text = unknownInput;
}

//never型
function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error"));
