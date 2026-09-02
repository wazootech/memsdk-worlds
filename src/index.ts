import type { SupermemoryInterface } from "memsdk"

export interface WorldsMemoryClientOptions {
  worldsClient: unknown
}

export function createSupermemory(
  _options: WorldsMemoryClientOptions,
): SupermemoryInterface {
  throw new Error("createSupermemory is not implemented yet")
}
