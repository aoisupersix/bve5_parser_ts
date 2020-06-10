import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import * as ast from './ast-nodes'
import { ParserRuleContext } from 'antlr4ts'
import { Token } from '../token'
import { ScenarioGrammarParserVisitor } from './parser/ScenarioGrammarParserVisitor'

export type AstNode = ast.ScenarioGrammarAstNode | null

export class ScenarioGrammarVisitor extends AbstractParseTreeVisitor<AstNode>
  implements ScenarioGrammarParserVisitor<AstNode> {
  /**
   * SyntaxNodeのインスタンス化に必要なデータをコンテキストから取得して返します。
   * @param ctx 構文の文脈データ
   */
  private getSyntaxData(ctx: ParserRuleContext): [Token, Token | undefined, string] {
    let start = ctx.start
    let text = ctx.text
    if (ctx.parent !== undefined) {
      start = ctx.parent.start
      text = start.text! + ctx.text
    }
    const st = Token.fromIToken(start)!
    const et = Token.fromIToken(ctx.stop)

    return [st, et, text]
  }

  defaultResult(): null {
    return null
  }
}
