import { event } from "../utils";
import { Events } from 'discord.js';
import { createBaseChannel } from '../functions';

export default event(Events.ClientReady, ({ log }, client) => {
  createBaseChannel(client);
  log(`Logged is as ${client.user.tag}`)
})