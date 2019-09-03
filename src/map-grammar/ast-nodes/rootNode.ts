import { MapGrammarAstNode, MapGrammarType } from './mapGrammarAstNodes'
import { statementNode } from './statementNode'

/**
 * ルートノード。
 * ASTの根となるノードで、範囲は全構文が含まれます。
 * 各構文はstatementsに格納されています。
 */
export class RootNode extends MapGrammarAstNode {
    public get type(): MapGrammarType { return MapGrammarType.Root }
    version: string
    encoding: string | null = null
    statements: Array<statementNode> = []
}
