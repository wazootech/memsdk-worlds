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
await memory.add({
  content: "Dhravya prefers ML over traditional programming.",
  containerTag: "user_123",
})

const profile = await memory.profile({ containerTag: "user_123" })

const docs = await memory.documents.list({ containerTags: ["user_123"] })

const results = await memory.search.documents({ q: "ML", containerTag: "user_123" })
```
