# toktok

A clone of UNIX talk written using the Fluid Framework and Deno.

## Run it

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

## Updating deps and lockfile

```shell
deno cache --lock=lock.json --lock-write --unstable src/deps.ts
```
