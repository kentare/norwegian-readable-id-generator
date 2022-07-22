const fs = require('fs')

function getTrimmedList(filepath, objectName) {
  var data = fs.readFileSync(filepath)
  data = data
    .toString()
    .split('\n')
    .map((str) => `"${str.trim()}"`)
  return `const ${objectName} = { words: [${data.join(',\n')}], length: ${
    data.length
  }}`
}

var file = `
${getTrimmedList('adjektiv.txt', 'adjektiv')}
${getTrimmedList('substantiv.txt', 'substantiv')}
${getTrimmedList('verb.txt', 'verb')}
module.exports = { adjektiv, substantiv, verb }
`
fs.writeFileSync('words.js', file)
