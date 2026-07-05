import type { MemoryClient } from "memsdk"

export interface WorldsMemoryClientOptions {
  worldsClient: unknown
}

export function createWorldsMemoryClient(
  _options: WorldsMemoryClientOptions,
): MemoryClient {
  throw new Error("createWorldsMemoryClient is not implemented yet")
}
