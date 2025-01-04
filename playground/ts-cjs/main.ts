import * as lib from "template-citty-unbuild";

const message = lib.getMessage("AAA", {
  prefix: "Hello, ",
  suffix: "",
  quote: false,
});

console.log(message);