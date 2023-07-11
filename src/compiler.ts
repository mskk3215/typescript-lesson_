function echo(message: string): string | null {
  let hello = "hello";
  return message;
}

let implicitAny;
implicitAny = "implicitAny";
implicitAny.toUpperCase();

let nullableMessage = echo("Hi");
let undefinedableMessage: string | undefined = undefined;
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;

if (nullableMessage) {
  nullableMessage.toUpperCase();
}
echo.call(null, "hi");
