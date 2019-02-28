import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { MapGrammarVisitor } from './MapGrammar/MapGrammarVisitor'
import { MapGrammarLexer } from './MapGrammar/Parser/MapGrammarLexer'
import { MapGrammarParser } from './MapGrammar/Parser/MapGrammarParser'
import { RootNode, MapGrammarType } from './MapGrammar/AstNodes/mapGrammarAstNodes';

// Create the lexer and parser
let inputStream = new ANTLRInputStream("BveTs Map 2.02 \n 0; $a = 5; Curve.SetGauge($a);")
let lexer = new MapGrammarLexer(inputStream)
let tokenStream = new CommonTokenStream(lexer)
let parser = new MapGrammarParser(tokenStream)

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.root()

// Create the visitor
const mapGrammarVisitor = new MapGrammarVisitor()
// Use the visitor entry point
const node = mapGrammarVisitor.visit(tree)
if (node !== null && node.type === MapGrammarType.Root) {
  const root = <RootNode>node
  console.log(root.version)
}
