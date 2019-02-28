import { Token } from "./MapGrammar/token";

/**
 * bve5_parsingのパースエラー種別です。
 */
export enum ErrorLevel {
  /**
   * 警告
   */
  Warning,

  /**
   * エラー
   */
  Error
}

/**
 * パーサのエラー情報を格納するクラスです。
 * 必要に応じてエラーをコンソールに表示するなどして下さい。
 */
export class ParseError {

  constructor(
    /**
     * エラー種別
     */
    public errorLevel: ErrorLevel,

    /**
     * エラー対象構文の開始トークン
     */
    public start: Token,

    /**
     * エラー対象構文の終了トークン
     */
    public end: Token | null,

    /**
     * エラーメッセージ
     */
    public msg: string
  ) { }

}