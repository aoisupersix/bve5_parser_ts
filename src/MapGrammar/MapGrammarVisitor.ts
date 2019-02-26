import { MapGrammarParserVisitor } from './Parser/MapGrammarParserVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { RootContext, DistStateContext, IncludeContext, IncludeStateContext } from './Parser/MapGrammarParser';
import * as ast from './AstNodes/mapGrammarAstNodes';
import { Token } from './token';

export type AstNode = ast.MapGrammarAstNode | null

export class MapGrammarVisitor extends AbstractParseTreeVisitor<AstNode> implements MapGrammarParserVisitor<AstNode> {

  defaultResult() {
    return null
  }

  /**
   * ルートの巡回
   * @param ctx 
   */
  visitRoot(ctx: RootContext): AstNode {
    const node = new ast.RootNode(
      Token.fromIToken(ctx.start)!,
      Token.fromIToken(ctx.stop),
      ctx.text
    )

    if (ctx._version.text !== undefined) {
      node.version = ctx._version.text
    }
    var encodeCtx = ctx.encoding()
    if (encodeCtx !== undefined) {
      node.encoding = encodeCtx.text
    }

    for(const statement of ctx.statement()) {
      const child = this.visit(statement)
      if (child !== null) {
        node.statements.push(child)
      }
    }
    
    return node
  }

  //#region ステートメントVisitors
  /**
   * 距離程ステートメントの巡回
   * @param ctx 
   */
  visitDistState(ctx: DistStateContext): AstNode {
    return this.visit(ctx.distance())
  }

  /**
   * インクルードステートメントの巡回
   * @param ctx 
   */
  visitIncludeState(ctx: IncludeStateContext): AstNode {
    return this.visit(ctx.include())
  }

  //#endregion
}

