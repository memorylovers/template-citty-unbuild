# template-citty-unbuild

Template for CLI and npm package powered by [citty](https://github.com/unjs/citty) and [unbuild](https://github.com/unjs/unbuild).

## How To Use

You can easily download this template using [unjs/giget](https://github.com/unjs/giget).

```shell
# create package by this template
$ npx giget@latest gh:memorylovers/template-citty-unbuild my-cli
# or 
$ pnpm dlx giget@latest gh:memorylovers/template-citty-unbuild my-cli
#
$ cd my-cli 
```

## Using Packages

- [unjs/citty](https://github.com/unjs/citty) ... CLI Builder
- [unjs/unbuild](https://github.com/unjs/unbuild) ... Build System
- [vitest](https://vitest.dev/) ... Testing Framework

and,

- [unjs/consola](https://github.com/unjs/consola) ... Elegant console.log
- [unjs/jiti](https://github.com/unjs/jiti) ... Execute .ts file
- [unjs/defu](https://github.com/unjs/defu) ... Assign default properties

## Directory Structure

```text
.
├── bin/
│   └── cli.mjs      ... CLI command
├── playground/
├── src/
│   ├── lib/         ... library sorce codes
│   ├── cli.ts       ... CLI command definition
│   ├── index.ts     ... exports
│   └── types.ts
├── tests/           ... test files
├── build.config.ts  ... "unbuild" config file
├── package.json
├── tsconfig.json
└── vitest.config.ts ... "vitest" config file
```

For more information please see my blog.

[cittyとunbuildでCLIツールを作ってみた(テンプレート付き) - くらげになりたい。](https://www.memory-lovers.blog/entry/2025/01/06/084007)

## License

[MIT License](/LICENSE) / [©Memory Lovers, LLC](https://memory-lovers.com)

## Author

- [GitHub(@memory-lovers)](https://github.com/memory-lovers)
- [Blog(くらげになりたい。)](https://memory-lovers.blog/)  
- [Twitter/X(@kira_puka)](https://twitter.com/kira_puka)
