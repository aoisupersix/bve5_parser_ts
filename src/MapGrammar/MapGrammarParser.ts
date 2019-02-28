import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Token } from 'antlr4ts'
import { MapGrammarVisitor, AstNode } from './MapGrammarVisitor'
import { MapGrammarLexer } from './Parser/MapGrammarLexer'
import * as parser from './Parser/MapGrammarParser'
import { MapGrammarErrorStrategy } from './mapGrammarErrorStrategy';
import { ParserErrorListener } from '../errorListener';

export class MapGrammarParser {

  errorListener: ANTLRErrorListener<Token> = new ParserErrorListener()

  parse(input: string) {
    let inputStream = new ANTLRInputStream(input)
    let lexer = new MapGrammarLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let antlrParser = new parser.MapGrammarParser(tokenStream)
    antlrParser.errorHandler = new MapGrammarErrorStrategy()
    antlrParser.addErrorListener(this.errorListener)
    let tree = antlrParser.root()
  
    const mapGrammarVisitor = new MapGrammarVisitor()
    return mapGrammarVisitor.visit(tree)
  }
}