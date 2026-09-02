import { describe, expect, it } from "vitest"
import { createSupermemory } from "../src/index.ts"

describe("memsdk-worlds exports", () => {
  it("exposes an explicit Worlds factory stub", () => {
    expect(() => createSupermemory({ worldsClient: {} })).toThrow(
      "createSupermemory is not implemented yet",
    )
  })
})
