// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE


function testWithPayload(x) {
  return x;
}

function printEnumValue(x) {
  if (typeof x === "number") {
    if (x >= 98) {
      if (x >= 937218926) {
        console.log("printEnumValue: True");
        return /* () */0;
      } else {
        console.log("printEnumValue: b");
        return /* () */0;
      }
    } else if (x >= 97) {
      console.log("printEnumValue: a");
      return /* () */0;
    } else {
      console.log("printEnumValue: Twenty");
      return /* () */0;
    }
  } else {
    var payload = x[1];
    console.log("printEnumValue x:", payload[/* x */0], "y:", payload[/* y */1]);
    return /* () */0;
  }
}

export {
  testWithPayload ,
  printEnumValue ,
  
}
/* No side effect */