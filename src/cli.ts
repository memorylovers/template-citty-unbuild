import { runMain as _runMain, defineCommand } from "citty";
import { consola } from "consola";
import defu from "defu";
import { description, name, version } from "../package.json";
import { getMessage } from "./lib/message";
import type { Options } from "./types";

const DEFAULT_OPTION: Options = {
  prefix: "Hello, ",
  suffix: "",
  quote: false,
};

const main = defineCommand({
  meta: { name, version, description, },
  args: {
    text: {
      type: "positional",
      description: "base text",
      required: true,
    },
    prefix: {
      type: "string",
      alias: "p",
      description: "preffix text",
      default: DEFAULT_OPTION.prefix,
    },
    suffix: {
      type: "string",
      alias: "s",
      description: "suffix text",
    },
    quote: {
      type: "boolean",
      alias: "q",
      description: "append quotation",
      default: DEFAULT_OPTION.quote,
    },
  },
  run: async ({ args }) => {
    const options: Options = defu(args, DEFAULT_OPTION);

    const message = getMessage(args.text, options);

    consola.info(message);
  },
});

export const runMain = () => _runMain(main);