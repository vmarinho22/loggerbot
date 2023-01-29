import { event } from "../utils";
import { Events } from 'discord.js'


export default event(Events.ClientReady, ({ log }, client) => {
  log(`Logged is as ${client.user.tag}`)
})