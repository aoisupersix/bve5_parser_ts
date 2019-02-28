import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Token } from 'antlr4ts'
import { MapGrammarVisitor, AstNode } from './MapGrammarVisitor'
import { MapGrammarLexer } from './Parser/MapGrammarLexer'
import * as parser from './Parser/MapGrammarParser'
import { MapGrammarErrorStrategy } from './mapGrammarErrorStrategy';
import { ParseError } from '../parseError';

export class MapGrammarParser {

  /**
   * パースエラーです。
   */
  errors: Array<ParseError> = []

  /**
   * パースエラーの取得クラスです。
   * antlr4tsパッケージのANTLRErrorListener<Token>を継承したクラスを指定することで、任意のエラー処理を実装できます。
   */
  errorListener: ANTLRErrorListener<Token> | null = null

  /**
   * 引数に与えられた文字列をパースしてASTノードを返します。
   * @param input マップ構文を表す文字列
   */
  parse(input: string) {
    let inputStream = new ANTLRInputStream(input)
    let lexer = new MapGrammarLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let antlrParser = new parser.MapGrammarParser(tokenStream)
    antlrParser.errorHandler = new MapGrammarErrorStrategy(this.errors)

    if (this.errorListener !== null) {
      antlrParser.addErrorListener(this.errorListener)
    }
    let tree = antlrParser.root()
  
    const mapGrammarVisitor = new MapGrammarVisitor()
    return mapGrammarVisitor.visit(tree)
  }
}