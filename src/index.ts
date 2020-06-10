import { readFileSync } from 'fs'
import { MapGrammarParser } from './map-grammar/parser'
import { MapGrammarType } from './map-grammar/ast-nodes/map-grammar-ast-nodes'
import { RootNode } from './map-grammar/ast-nodes/root-node'

const input = readFileSync('testMap.b5map', { encoding: 'utf-8' })
const parser = new MapGrammarParser()
const node = parser.parse(input)
if (node !== null && node.type === MapGrammarType.Root) {
  const root = <RootNode>node
  console.log(root.version)
}
