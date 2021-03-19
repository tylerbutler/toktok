import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);
const { format } = require("date-fns");

console.log(format(new Date(), "dd/MM/yyyy"));
