// intersecion型
type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
type EngineerBlogger = Engineer & Blogger;
const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

//type guard 型を絞り込む
//typeof演算子
// function toUpperCase(x: string | number) {
//   if (typeof x === "string") {
//     return x.toUpperCase();
//   }
//   return "";
// }
//in演算子
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

//instanceof演算子
class Dog {
  //tagつきunion型
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}
class Bird {
  //tagつきunion型
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

//型アサーション
const input = document.getElementById("input") as HTMLInputElement;
input.value = "initial input value";
<HTMLInputElement>document.getElementById("input")= "initial input value";

//non-null assertion operator
// const input1 = document.getElementById("input")!;
// input1.value = "initial input value";
// <HTMLInputElement>document.getElementById("input")= "initial input value";

//index signiture
interface Designer {
  name:string;
  [index: string]:string;
}
const designer:Designer ={
  name:"Quill",
  role:"web"
}

//function overload
function toUpperCase(x:string):string;
function toUpperCase(x:number):number;
function toUpperCase(x:string | number){
  if(typeof x === "string"){
    return x.toUpperCase()
  }
  return x;
}
const upperHello = toUpperCase("hello")

//optional chaining
interface DownloadedData{
  id: number;
  user?:{
    name?:{
      first:string;
      last:string;
    }
  }
}
const downloadedData: DownloadedData={
  id:1
}
console.log(downloadedData.user?.name?.first)

//Nullish coalescing
const userData = downloadedData.user ?? "no-user";

//lookup型
type id = DownloadedData["id"|"user"]
