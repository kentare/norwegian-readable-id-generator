const { adjektiv, substantiv, verb } = require('./words')

function generateWord() {
  let adj = adjektiv.words[Math.floor(Math.random() * adjektiv.length)]
  let sub = substantiv.words[Math.floor(Math.random() * substantiv.length)]
  let ver = verb.words[Math.floor(Math.random() * verb.length)]
  return `${adj}-${sub}-${ver}`
}

module.exports = { generateWord }
