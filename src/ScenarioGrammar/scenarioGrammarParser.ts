import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener, Token } from 'antlr4ts'
import { ScenarioGrammarLexer } from './Parser/ScenarioGrammarLexer'
import { ScenarioGrammarVisitor } from './scenarioGrammarVisitor'
import * as sParser from './Parser/ScenarioGrammarParser'
import { ParseError } from '../parseError';

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
  parse(input: string) {
    let inputStream = new ANTLRInputStream(input)
    let lexer = new ScenarioGrammarLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let antlrParser = new sParser.ScenarioGrammarParser(tokenStream)

    if (this.errorListener !== null) {
      antlrParser.addErrorListener(this.errorListener)
    }
    let tree = antlrParser.root()
  
    const mapGrammarVisitor = new ScenarioGrammarVisitor()
    return mapGrammarVisitor.visit(tree)
  }
}