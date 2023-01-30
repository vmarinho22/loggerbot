import { Client, ChannelType } from 'discord.js';
import keys from '../../keys';


export function createBaseChannel(client: Client): void {
  const server = client.guilds.cache.get(keys.testGuild);

  if (!server) {
    throw new Error("Error on find server guild");
  }

  const channel = server.channels.cache.find((channel => channel.name === 'logbot'))

  const channelsLength = server.channels.cache.size;

  if (!channel) {
    server.channels.create({
      name: "logbot",
      type: ChannelType.GuildCategory,
      position: channelsLength + 1,
    }).then((category) => {
      server.channels.create({
        name: "logs",
        type: ChannelType.GuildText,
        position: channelsLength + 1,
        parent: category.id
      })
    })
  }
}