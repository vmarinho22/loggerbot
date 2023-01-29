import { ClientEvents, Awaitable, Client} from 'discord.js'

type LoggerFunction = (...args: unknown[]) => void

export interface EventsProps {
  client: Client,
  log: LoggerFunction
}

export type EventKeys = keyof ClientEvents

export type EventExec<T extends EventKeys> = (props: EventsProps, ...args: ClientEvents[T]) => Awaitable<void>

export interface Event<T extends EventKeys> {
  id: T,
  exec: EventExec<T>
}