import { MapGrammarAstNode, MapGrammarType } from './map-grammar-ast-nodes'
import { statementNode } from './statement-node'
import { Token } from '../../token'
import { RootContext } from '../v2-parser/parser/MapGrammarV2Parser'

/**
 * ルートノード。
 * ASTの根となるノードで、範囲は全構文が含まれます。
 * 各構文はstatementsに格納されています。
 */
export class RootNode extends MapGrammarAstNode {
  private _version: string
  private _encoding: string | null
  private _statements: Array<statementNode>

  public get type(): MapGrammarType {
    return MapGrammarType.Root
  }

  public get version(): string {
    return this._version
  }
  public set version(v: string) {
    this._version = v
  }

  public get encoding(): string | null {
    return this._encoding
  }
  public set encoding(enc: string | null) {
    this.encoding = enc
  }

  public get statements(): ReadonlyArray<statementNode> {
    return this._statements as ReadonlyArray<statementNode>
  }

  /**
   * ベースクラスと同じコンストラクタ
   * @param start
   * @param end
   * @param text
   */
  constructor(start: Token, end: Token | undefined, text: string)

  /**
   * ParserContextからノードを生成します。
   * @param ctx RootContext
   */
  constructor(ctx: RootContext)

  constructor(startOrContext: Token | RootContext, end?: Token | undefined, text?: string) {
    if (startOrContext instanceof Token) {
      // Default
      super(startOrContext, end, text!)
    } else {
      // Get Token from Context
      const ctx = <RootContext>startOrContext
      super(Token.fromIToken(ctx.start)!, Token.fromIToken(ctx.stop), ctx.text)
    }

    this._encoding = null
    this._statements = []
  }

  /**
   * ステートメントを追加します。
   * @param statement statementNode
   */
  addStatement(statement: statementNode): void {
    this._statements.push(statement)
  }
}
