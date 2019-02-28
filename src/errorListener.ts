import { ANTLRErrorListener, Token, Recognizer, RecognitionException } from 'antlr4ts'

/**
 * パーサのデフォルトエラー処理クラス
 * パーサのエラーに対をErrorsプロパティに格納します。
 * このクラスを継承し、パーサのErrorListenerに指定することで構文解析のエラーを取得できます。
 */
export class ParserErrorListener implements ANTLRErrorListener<Token> {
  syntaxError<T extends Token>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined): void {

  }
}