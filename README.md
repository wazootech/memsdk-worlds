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
- Define the Worlds factory options (exported factory name settled:
  `createSupermemory`).

The implementation intentionally throws until the first mapping PR lands.
