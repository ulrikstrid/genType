// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ImportHooks from "./ImportHooks.bs.js";

function Hooks(Props) {
  var vehicle = Props.vehicle;
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var count = match[0];
  return React.createElement("div", undefined, React.createElement("p", undefined, "Hooks example " + (vehicle[/* name */0] + (" clicked " + (String(count) + " times")))), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count + 1 | 0;
                                  }));
                    })
                }, "Click me"), React.createElement(ImportHooks.make, {
                  person: /* record */[
                    /* name */"Mary",
                    /* age */71
                  ],
                  children: null
                }, "child1", "child2"));
}

function Hooks$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner$Inner2(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner$Inner2$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

var Inner2 = /* module */[
  /* make */Hooks$Inner$Inner2,
  /* anotherComponent */Hooks$Inner$Inner2$anotherComponent
];

var Inner = /* module */[
  /* make */Hooks$Inner,
  /* anotherComponent */Hooks$Inner$anotherComponent,
  /* Inner2 */Inner2
];

function Hooks$makeWithRef(Props, ref) {
  var vehicle = Props.vehicle;
  if (!(ref == null)) {
    ref.current = 10;
  }
  return vehicle[/* name */0];
}

var testForwardRef = React.forwardRef(Hooks$makeWithRef);

var make = Hooks;

var $$default = Hooks;

var anotherComponent = Hooks$anotherComponent;

var makeWithRef = Hooks$makeWithRef;

export {
  make ,
  $$default ,
  $$default as default,
  anotherComponent ,
  Inner ,
  makeWithRef ,
  testForwardRef ,
  
}
/* testForwardRef Not a pure module */
