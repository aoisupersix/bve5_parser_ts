import { Token } from '../token'

export enum ScenarioGrammarType {
  Root,
  WeightStatement,
  TextStatement,
  WeightPath,
}

export abstract class ScenarioGrammarAstNode {
  /**
   * Astノードの種類
   */
  abstract readonly type: ScenarioGrammarType

  constructor(
    /**
     * ノードの開始トークン
     */
    public start: Token,

    /**
     * ノードの終了トークン
     */
    public end: Token | undefined,

    /**
     * ノードの入力文字列
     */
    public text: string
  ) {}
}

/**
 * ルートノード。
 * ASTの根となるノードで、範囲は全構文が含まれます。
 * 各構文はstatementsに格納されています。
 */
export class RootNode extends ScenarioGrammarAstNode {
  readonly type: ScenarioGrammarType = ScenarioGrammarType.Root
  version: string
  encoding: string | null = null
  statements: Array<StatementNode> = []
}

/**
 * ステートメント親ノード
 */
export abstract class StatementNode extends ScenarioGrammarAstNode {
  stateName: string
}

/**
 * 重み付けステートメント
 */
export class WeightStatementNode extends StatementNode {
  readonly type: ScenarioGrammarType = ScenarioGrammarType.WeightStatement
  pathList: Array<WeightPathNode> = []
}

/**
 * テキストステートメント
 */
export class TextStatementNode extends StatementNode {
  readonly type: ScenarioGrammarType = ScenarioGrammarType.TextStatement
  text: string
}

/**
 * 重み付けパス
 */
export class WeightPathNode extends ScenarioGrammarAstNode {
  readonly type: ScenarioGrammarType = ScenarioGrammarType.TextStatement
  path: string
  weight: number
}
