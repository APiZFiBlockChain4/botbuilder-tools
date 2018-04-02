"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
program
    .description("The msbot program makes it easy to manipulate .bot files for Microsoft Bot Framework tools");
program
    .command('init', 'create a new .bot file');
program
    .command('export [.bot]', 'export all connected services');
program
    .command('clone [.bot]', 'clone a bot');
program
    .command('endpoints', 'add/remove endpoints');
program
    .command('connect <service>', 'connect to a service');
program
    .command('disconnect <service>', 'disconnect from a service');
program
    .command('list', 'list all connected resource');
program.parse(process.argv);
//# sourceMappingURL=msbot.js.map