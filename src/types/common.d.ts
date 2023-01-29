import {
  Client
} from 'discord.js';

export type LoggerFunction = (...args: unknown[]) => void;

export interface CommonProps {
  client: Client,
  log: LoggerFunction
}