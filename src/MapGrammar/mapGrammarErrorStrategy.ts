import { DefaultErrorStrategy, Parser, InputMismatchException, NoViableAltException, RecognitionException, Token } from "antlr4ts";
import { MapGrammarLexer } from "./Parser/MapGrammarLexer";
import * as btoken from './token'
import { ParseError, ErrorLevel } from "../parseError";

/**
 * MapGrammarのエラー処理クラス
 */
export class MapGrammarErrorStrategy extends DefaultErrorStrategy {

  constructor(protected errors: Array<ParseError>) {
    super()
  }

  reportFailedPredicate(recognizer: Parser, e: InputMismatchException): void {
    const tokenDisplay = this.getTokenErrorDisplay(e.getOffendingToken(recognizer))
    const msg = `${tokenDisplay}の検証に失敗しました。`

    this.addError(recognizer, msg)

    // エラーがコンソールに出力されてしまうのでコメントアウト
    // this.notifyErrorListeners(recognizer, msg, e)
  }

  reportInputMismatch(recognizer: Parser, e: InputMismatchException): void {
    const token = this.getTokenErrorDisplay(e.getOffendingToken(recognizer))
		const expectedString = e.expectedTokens ? e.expectedTokens.toStringVocabulary(recognizer.vocabulary) : "";
    const msg = `入力文字列${token}が予期されたマップ構文'${expectedString}'と一致しませんでした。`

    this.addError(recognizer, msg)

    // エラーがコンソールに出力されてしまうのでコメントアウト
    // this.notifyErrorListeners(recognizer, msg, e)
  }

  reportMissingToken(recognizer: Parser): void {
    if (this.inErrorRecoveryMode(recognizer)) {
      return
    }
    this.beginErrorCondition(recognizer)
    const token = recognizer.currentToken
    const expectedString = this.getExpectedTokens(recognizer)
    const msg = `入力文字列${token.text}にマップ構文'${expectedString}'がありません。`

    this.addError(recognizer, msg)

    // エラーがコンソールに出力されてしまうのでコメントアウト
    // this.notifyErrorListenersFromToken(recognizer, msg, token)
  }

  reportNoViableAlternative(recognizer: Parser, e: NoViableAltException): void {
    const token = this.getTokenErrorDisplay(e.getOffendingToken(recognizer))
    const msg = `入力文字列${token}の構文を特定できませんでした。`

    this.addError(recognizer, msg)

    // エラーがコンソールに出力されてしまうのでコメントアウト
    // this.notifyErrorListeners(recognizer, msg, e)
  }

  reportUnwantedToken(recognizer: Parser): void {
    if (this.inErrorRecoveryMode(recognizer)) {
      return
    }
    this.beginErrorCondition(recognizer)
    const token = recognizer.currentToken
    const msg = `入力文字列${token.text}が予期されたマップ構文と一致しませんでした。`

    this.addError(recognizer, msg)

    // エラーがコンソールに出力されてしまうのでコメントアウト
    // this.notifyErrorListenersFromToken(recognizer, msg, token)
  }

  addError(recognizer: Parser, msg: string): void {
    const start = btoken.Token.fromIToken(recognizer.currentToken)!
    const err = new ParseError(ErrorLevel.Error, start, null, msg)
    this.errors.push(err)
  }

  notifyErrorListenersFromToken(recognizer: Parser, message: string, offendingToken: Token, ) {
    recognizer.notifyErrorListeners(message, offendingToken, undefined)
  }

  recover(recognizer: Parser, e: RecognitionException): void {
    let ttype = recognizer.inputStream.LA(1)
    while(ttype !== MapGrammarLexer.EOF && ttype != MapGrammarLexer.STATE_END) {
      recognizer.consume()
      ttype = recognizer.inputStream.LA(1)
    }
  }
}