import { describe, expect, it } from "vitest"
import { createSupermemory } from "@"

describe("memsdk-worlds exports", () => {
  it("exposes an explicit Worlds factory stub", () => {
    expect(() =>
      createSupermemory({ worldsClient: {}, defaultWorldId: "world_1" }),
    ).toThrow("createSupermemory is not implemented yet")
  })
})
