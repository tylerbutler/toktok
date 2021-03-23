import { Arguments } from "https://deno.land/x/yargs/deno-types.ts";

// import blessed from "https://cdn.skypack.dev/blessed?dts";
// import blessedContrib from "https://cdn.skypack.dev/blessed-contrib?dts";
import yargs from "https://deno.land/x/yargs@v16.2.0-deno/deno.ts";
import { Command } from "https://cdn.depjs.com/cmd/mod.ts";
import React from "https://cdn.skypack.dev/react?dts";
import ReactDOM from "https://cdn.skypack.dev/react?dts";

// import fluidExperimentalDataObjects from "https://cdn.skypack.dev/@fluid-experimental/data-objects?dts";
import { DataObject, DataObjectFactory } from "https://cdn.skypack.dev/@fluidframework/aqueduct@^0.35.0";
// import { DataObject, DataObjectFactory } from "@fluidframework/aqueduct";
// import fluidFrameworkAqueduct from "https://dev.jspm.io/@fluidframework/aqueduct@0.35.0";

import { SharedDirectory, SharedMap } from "https://cdn.skypack.dev/@fluidframework/map@^0.35.0";
// import SharedMap from "https://dev.jspm.io/@fluidframework/map@0.35.0";

// import fluidFrameworkDriverUtils from "https://cdn.skypack.dev/@fluidframework/driver-utils@^0.35.0";
// import vorpal from "https://cdn.skypack.dev/vorpal?dts";

// import type { EventEmitter } from "events";
// import dateFns from "https://dev.jspm.io/date-fns";

export {
    //Aqueduct,
    // blessed,
    // blessedContrib,
    Command,
    // dateFns,
    // fluidExperimentalDataObjects,
    // fluidFrameworkAqueduct,
    // fluidFrameworkDriverUtils,
    DataObject,
    DataObjectFactory,
    SharedDirectory,
    SharedMap,
    // Map,
    React,
    ReactDOM,
    // vorpal,
    yargs,
    // path,
    // leftPad,
};

export type { Arguments };
