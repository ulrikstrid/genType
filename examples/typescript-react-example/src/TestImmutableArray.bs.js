// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ImmutableArray from "./ImmutableArray.bs.js";

function testImmutableArrayGet(arr) {
  return ImmutableArray.$$Array[/* get */0](arr, 3);
}

function testBeltArrayGet(arr) {
  return Belt_Array.get(arr, 3);
}

function testBeltArraySet(arr) {
  return Belt_Array.set(arr, 3, 4);
}

export {
  testImmutableArrayGet ,
  testBeltArrayGet ,
  testBeltArraySet ,
  
}
/* No side effect */
