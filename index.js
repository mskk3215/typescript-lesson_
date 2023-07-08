var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var back = "hello";
//object
var person = { name: { first: "Jack", last: "Smith" }, age: 21 };
//array
var fruits = ["Apple", "Banana", "Grape"];
//tuple
var book = ["business", 1500, false];
book.push(21);
//enum 列挙型 =〜を書かなければ数値になる/ パスカルケース、全部大文字にする
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
coffee.size = CoffeeSize.GRANDE;
// console.log(coffee.size);
//any型　 anyは何もしない型の恩恵は受けられない
var anything = true;
anything = "hello";
anything = ["hello", 33, true];
anything = {};
anything.test = 111;
var banana = "banana";
banana = anything;
// console.log(banana);
//union型
var unionType = 10;
var unionTypes = [21, "hello"];
console.log(unionTypes);
//Literal型 constにすると自動的にLiteral型になる
var apple = "apple";
var clothSize = "large";
//2つ3つとかであればenumではなくLiteral型を使った方がbetter
var cloth = {
    color: "white",
    size: "medium",
};
var orange = "orange";
var TshirtSize = "large"; //エイリアス
//2つ3つとかであればenumではなくLiteral型を使った方がbetter
var tshirt = {
    color: "white",
    size: "medium",
};
//関数への型定義
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(3, 2));
//void型
function sayHello() {
    console.log("Hello!");
}
console.log(sayHello());
