import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Token } from 'antlr4ts'
import { ScenarioGrammarLexer } from './parser/ScenarioGrammarLexer'
import { ScenarioGrammarVisitor, AstNode } from './visitor'
import * as sParser from './parser/ScenarioGrammarParser'
import { ParseError } from '../parse-error'

export class ScenarioGrammarParser {
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
    const lexer = new ScenarioGrammarLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const antlrParser = new sParser.ScenarioGrammarParser(tokenStream)

    if (this.errorListener !== null) {
      antlrParser.addErrorListener(this.errorListener)
    }
    const tree = antlrParser.root()

    const mapGrammarVisitor = new ScenarioGrammarVisitor()
    return mapGrammarVisitor.visit(tree)
  }
}
