# memsdk-worlds

`memsdk-worlds` will implement the `memsdk` Supermemory-compatible memory interface
using Worlds as the backend.

The intent is direct shape compatibility: callers use the Supermemory-style `memsdk`
contract, while Worlds provides RDF import, SPARQL traversal, hybrid search, provenance,
and governed write policy internally.

## Initial scope

- Establish the adapter package boundary.
- Depend on the review branch for `memsdk` while the core contract is not yet merged or
  published.
- Define the Worlds factory options (exported factory name settled: `createSupermemory`;
  options: `worldsClient`, `defaultWorldId`).

The implementation intentionally throws until the first mapping PR lands.

## Usage

```typescript
import { createSupermemory } from "memsdk-worlds"

// worldsClient is a client for the Worlds data plane (see @worlds/client).
// The stub throws until the first mapping PR lands.
const memory = createSupermemory({
  worldsClient,
  defaultWorldId: "user_123",
})

// All SupermemoryInterface methods are available:
// Supermemory API v5 contract: every call is scoped to a namespace.
await memory.add("user_123", {
  content: "Dhravya prefers ML over traditional programming.",
})

const profile = await memory.profile("user_123")

const docs = await memory.list("user_123", "documents")

const results = await memory.search("user_123", { query: "ML" })
```
