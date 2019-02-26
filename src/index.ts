import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { MapGrammarVisitor } from './MapGrammar/MapGrammarVisitor'
import { MapGrammarLexer } from './MapGrammar/Parser/MapGrammarLexer'
import { MapGrammarParser } from './MapGrammar/Parser/MapGrammarParser'

// Create the lexer and parser
let inputStream = new ANTLRInputStream("BveTs Map 2.02 \n Curve.Begin(4,3);")
let lexer = new MapGrammarLexer(inputStream)
let tokenStream = new CommonTokenStream(lexer)
let parser = new MapGrammarParser(tokenStream)

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.root()

// Create the visitor
const mapGrammarVisitor = new MapGrammarVisitor()
// Use the visitor entry point
mapGrammarVisitor.visit(tree)