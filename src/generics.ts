//generics: functionの型を仮でおいて呼び出す時に引数で型を指定する方法
function copy<T>(value: T): T {
  return value;
}
console.log(copy<string>("hello"));
console.log(copy({ name: "Quill" }));

//extends
function copy1<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy1({ name: "Quill" }));

//keyof演算子  型を取り出してunion型変える
function copy2<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(copy2({ name: "Quill", age: 38 }, "name"));

//interfaceにgenericsを使う
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
//type aliasでも使える
// type TmpDatabase<T> {
//   id: number;
//   data: T[];
// }
const TmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

//Utility型　型のutility
interface Todo {
  title: string;
  text: string;
}
//optional propertyにする
type Todoable = Partial<Todo>;
//readonlyにする
type ReadTodo = Readonly<Todo>;
//promiseオブジェクトにPromise型をつける
const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});
fetchData.then((data) => {
  data.toUpperCase();
});
const vegetables: Array<string> = ["tomato", "broccoli", "asparagus"];

//defaultの型パラメーターを使用することができる
interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;

//型のfor文 MappedTypes 型にロジックを入れる
interface Vegetables {
  readonly tomato: string;
  pumpkin?: string;
}
//keyofはunion型になる
let tmp3: keyof Vegetables;
//objectの中をfor文で回す
type MappedTypes = {
  -readonly [P in keyof Vegetables]-?: string;
};

//Conditional types型のif文
type ConditionalTypes = "tomato" extends string ? number : boolean;
//inferでもしtrueなら型推論してtomato型にする
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;
//DistributiveConditionalTypes
type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let temp4: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let temp5: NonNullable<string | null>;
