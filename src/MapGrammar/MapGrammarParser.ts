import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { MapGrammarVisitor, AstNode } from './MapGrammarVisitor'
import { MapGrammarLexer } from './Parser/MapGrammarLexer'
import * as parser from './Parser/MapGrammarParser'
import { RootNode, MapGrammarType } from './AstNodes/mapGrammarAstNodes';

export class MapGrammarParser {
  parse(input: string) {
    let inputStream = new ANTLRInputStream(input)
    let lexer = new MapGrammarLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let antlrParser = new parser.MapGrammarParser(tokenStream)
  
    let tree = antlrParser.root()
  
    const mapGrammarVisitor = new MapGrammarVisitor()
    return mapGrammarVisitor.visit(tree)
  }
}