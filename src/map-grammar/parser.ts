import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Token } from 'antlr4ts'
import { MapGrammarV2Visitor, AstNode } from './v2-parser/visitor'
import { MapGrammarV2Lexer } from './v2-parser/parser/MapGrammarV2Lexer'
import * as v2parser from './v2-parser/parser/MapGrammarV2Parser'
import { ParseError } from '../parse-error'
import { MapGrammarV2ErrorStrategy } from './v2-parser/error-strategy'

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
  parse(input: string): AstNode {
    const inputStream = new ANTLRInputStream(input)
    const lexer = new MapGrammarV2Lexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const antlrParser = new v2parser.MapGrammarV2Parser(tokenStream)
    antlrParser.errorHandler = new MapGrammarV2ErrorStrategy(this.errors)

    if (this.errorListener !== null) {
      antlrParser.addErrorListener(this.errorListener)
    }
    const tree = antlrParser.root()

    const mapGrammarVisitor = new MapGrammarV2Visitor()
    return mapGrammarVisitor.visit(tree)
  }
}
