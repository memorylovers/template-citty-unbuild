import { getMessage } from "template-citty-unbuild";

const message = getMessage("AAA", {
  prefix: "Hello, ",
  suffix: "",
  quote: false,
});

console.log(message);