import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { MapGrammarVisitor, AstNode } from './MapGrammar/MapGrammarVisitor'
import { MapGrammarLexer } from './MapGrammar/Parser/MapGrammarLexer'
import { MapGrammarParser } from './MapGrammar/Parser/MapGrammarParser'
import { RootNode, MapGrammarType } from './MapGrammar/AstNodes/mapGrammarAstNodes';
import { readFileSync } from 'fs';

export function parse(input: string): AstNode {
  let inputStream = new ANTLRInputStream(input)
  let lexer = new MapGrammarLexer(inputStream)
  let tokenStream = new CommonTokenStream(lexer)
  let parser = new MapGrammarParser(tokenStream)

  let tree = parser.root()

  const mapGrammarVisitor = new MapGrammarVisitor()
  return mapGrammarVisitor.visit(tree)
}

const input = readFileSync("testMap.b5map", {encoding: "utf-8"})
const node = parse(input)
if (node !== null && node.type === MapGrammarType.Root) {
  const root = <RootNode>node
  console.log(root.version)
}
