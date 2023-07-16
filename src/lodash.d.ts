import axios from "axios";
declare module "axios" {
  export function shuffle<T>(arr: T[]): T[];
}
declare module "lodash" {
  interface hello {}
}
