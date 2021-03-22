# toktok

A clone of UNIX talk written using the Fluid Framework and Deno.

## Run it

With Skypack:

```shell
deno run --allow-read --allow-env --unstable src/toktok.ts
```

**note:** This will fail with the following error:

```txt
error: Uncaught Error: [Package Error] "punycode" does not exist. (Imported by "@fluidframework/driver-utils").
throw new Error("[Package Error] \"punycode\" does not exist. (Imported by \"@fluidframework/driver-utils\").");
      ^
    at https://cdn.skypack.dev/error/node:punycode?from=@fluidframework/driver-utils:14:7
```

With import-map and jspm:

```shell
deno run --allow-read --allow-env --unstable --import-map src/import_map.json src/toktok.ts
```

**note:** This will fail with the following error:

```txt
error: Uncaught SyntaxError: The requested module 'uuid' does not provide an export named 'default'
    at <anonymous> (https://ga.jspm.io/npm:@fluidframework/driver-utils@0.35.6/dist/index.js:1:149)
```

## Updating deps and lockfile

With Skypack:

```shell
deno cache --lock=lock.json --lock-write --unstable src/deps.ts
```

With import-map and jspm:

```shell
deno cache --lock=lock.json --lock-write --unstable --import-map src/import_map.json src/deps.ts
```
