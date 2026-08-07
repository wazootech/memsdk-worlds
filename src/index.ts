import type { SupermemoryInterface } from "memsdk"

export interface WorldsMemoryClientOptions {
  worldsClient: unknown
}

export function createWorldsMemoryClient(
  _options: WorldsMemoryClientOptions,
): SupermemoryInterface {
  throw new Error("createWorldsMemoryClient is not implemented yet")
}
