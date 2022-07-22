## Overview

Lightweight library to create random norwegian word sequences in the format: `adjective-noun-verb`.

Possible combinations: 2 377 452.

This package was originally created for generating readable prefixes for ecommerce order ids. This package is _NOT_ enough to ensure uniqueness.

## Getting Started

```
npm install --save norwegian-readable-id-generator
```

### TypeScript

norwegian-readable-id-generator comes with types file

## Example

```javascript
import { generateWord } from 'norwegian-readable-id-generator'

const word = generateWord()
console.log(word)
// ekkel-blod-sparer
```

```javascript
const { generateWord } = 'norwegian-readable-id-generator'

const word = generateWord()
console.log(word)
// fryktelig-bild-gjetter
```

## License

ISC
