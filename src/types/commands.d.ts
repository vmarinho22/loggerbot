import {
  Awaitable,
  Client,
  ChatInputCommandInteraction,
  SlashCommandBuilder
} from 'discord.js';
import { CommonProps } from './common';

export interface CommandProps extends CommonProps {
  interaction: ChatInputCommandInteraction,
}

export type CommandExec = (props: CommandProps) => Awaitable<unknown>

export type CommandMeta = SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">

export interface Command {
  meta: CommandMeta;
  exec: CommandExec;
}

export interface CommandCategory {
  name: string;
  commands: Command[];
}