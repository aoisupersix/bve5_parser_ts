import { readFileSync } from 'fs';
import { MapGrammarParser } from './MapGrammar/MapGrammarParser';
import { MapGrammarType, RootNode } from './MapGrammar/AstNodes/mapGrammarAstNodes';

const input = readFileSync("testMap.b5map", {encoding: "utf-8"})
const parser = new MapGrammarParser()
const node = parser.parse(input)
if (node !== null && node.type === MapGrammarType.Root) {
  const root = <RootNode>node
  console.log(root.version)
}
