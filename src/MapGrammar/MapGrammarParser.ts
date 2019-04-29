import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Token } from 'antlr4ts'
import { MapGrammarV2Visitor } from './V2Parser/MapGrammarV2Visitor'
import { MapGrammarV2Lexer } from './V2Parser/Parser/MapGrammarV2Lexer'
import * as v2parser from './V2Parser/Parser/MapGrammarV2Parser'
import { ParseError } from '../parseError';
import { MapGrammarV2ErrorStrategy } from './V2Parser/mapGrammarV2ErrorStrategy';

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
    let lexer = new MapGrammarV2Lexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let antlrParser = new v2parser.MapGrammarV2Parser(tokenStream)
    antlrParser.errorHandler = new MapGrammarV2ErrorStrategy(this.errors)

    if (this.errorListener !== null) {
      antlrParser.addErrorListener(this.errorListener)
    }
    let tree = antlrParser.root()
  
    const mapGrammarVisitor = new MapGrammarV2Visitor()
    return mapGrammarVisitor.visit(tree)
  }
}