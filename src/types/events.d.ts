import { CommonProps } from './common';
import { ClientEvents, Awaitable, Client} from 'discord.js'

export interface EventsProps extends CommonProps {}

export type EventKeys = keyof ClientEvents

export type EventExec<T extends EventKeys> = (props: EventsProps, ...args: ClientEvents[T]) => Awaitable<unknown>

export interface Event<T extends EventKeys> {
  id: T,
  exec: EventExec<T>
}