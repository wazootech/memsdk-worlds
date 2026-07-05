import { describe, expect, it } from "vitest"
import { createWorldsMemoryClient } from "../src/index.ts"

describe("memsdk-worlds exports", () => {
  it("exposes an explicit Worlds factory stub", () => {
    expect(() => createWorldsMemoryClient({ worldsClient: {} })).toThrow(
      "createWorldsMemoryClient is not implemented yet",
    )
  })
})
