import { MapGrammarAstNode, MapGrammarType } from './mapGrammarAstNodes'
import { exprNode } from './exprNode'
import { SyntaxNode } from './syntaxNode'

/**
 * 全てのマップ構文ASTノードです。
 * RootNodeのstatementsは型を絞れた方がいいと思うので距離程、変数宣言、マップ構文のみ許可します。
 * ASTの構造としてはルートノードの下にこれらのノードが構文分だけぶら下がる形になります。
 */
export type statementNode = DistanceNode | VarAssignNode | SyntaxNode

/**
 * 距離程ノード。
 */
export class DistanceNode extends MapGrammarAstNode {
    public get type(): MapGrammarType { return MapGrammarType.Distance }
    value: exprNode | null = null
}

/**
 * 変数宣言ノード。
 */
export class VarAssignNode extends MapGrammarAstNode {
    public get type(): MapGrammarType { return MapGrammarType.VarAssign }
    varName: string | null = null
    value: exprNode | null = null
}
