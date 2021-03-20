require("dotenv").config();
import path from "path";
import { CommandoClient } from "discord.js-commando";
import { prefix, currentOwner } from "./config.json";

( async () => {
  const client = new CommandoClient({
    owner: currentOwner,
    commandPrefix: prefix,
    disableMentions: "everyone",
  });

  client.registry
    .registerGroups([
      ["fun", "Fun"],
      ["util", "Utility"],
      ["commands", "Commands"],
    ])
    .registerDefaultTypes()
    .registerDefaultCommands()
    .registerCommandsIn({
      filter: /^([^.].*)\.(js|ts)$/,
      dirname: path.join(__dirname, "./commands"),
    });

  await client.login(process.env.CLIENT_TOKEN);
})();
