import { Token } from "../token";
import { MapElement } from "../mapElement";
import { MapFunction } from "../mapFunction";

/**
 * マップ構文のASTノード種類
 */
export enum MapGrammarType {
  Root,
  Distance,
}

/**
 * マップ構文のASTノードベースクラス。
 * 全てのASTノードがこのクラスを継承しています。
 */
export abstract class MapGrammarAstNode {

  /**
   * Astノードの種類
   */
  abstract type: MapGrammarType

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
 * 構文のASTノードベースクラス。
 */
export abstract class SyntaxNode extends MapGrammarAstNode {
  static readonly mapElement: MapElement
  static readonly function: MapFunction
}

/**
 * キーを保持する構文のASTノードベースクラス。
 */
export abstract class SyntaxWithKeyNode extends SyntaxNode {
  key: MapGrammarAstNode | null = null
}

/**
 * ルートノード。
 * ASTの根となるノードで、範囲は全構文が含まれます。
 * 各構文はstatementsに格納されています。
 */
export class RootNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Root
  version: string | null = null
  encoding: string | null = null
  statements: Array<MapGrammarAstNode> = []
}

/**
 * 距離程ノード。
 */
export class DistanceNode extends MapGrammarAstNode {
  type: MapGrammarType = MapGrammarType.Distance
  value: MapGrammarAstNode | null = null
}