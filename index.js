const { adjektiv, substantiv, verb } = require('./words')

function generateWord() {
  let adj = adjektiv.words[Math.floor(Math.random() * adjektiv.length + 1)]
  let sub = substantiv.words[Math.floor(Math.random() * substantiv.length + 1)]
  let ver = verb.words[Math.floor(Math.random() * verb.length + 1)]
  return `${adj}-${sub}-${ver}`
}

module.exports = { generateWord }
