import * as antlr from 'antlr4ts'

/**
 * 字句
 */
export class Token {
  constructor(
    public line: number,
    public charPositionInLine: number,
    public lengthnull: number | null,
    public text: string | undefined
  ) {}

  /**
   * Antlrの字句をbve5parser上の字句に変換して返します
   * @param token Antlr字句
   */
  static fromIToken(token: antlr.Token): Token {
    let len: number | null = token.stopIndex - token.startIndex + 1
    if (len <= 0) {
      len = null
    }

    return new Token(token.line, token.charPositionInLine, len, token.text)
  }

  /**
   * Antlrの字句をbve5parser上の字句に変換して返します
   * tokenがundefinedの場合はそのままundefinedを返します
   * @param token Antlr字句
   */
  static fromITokenOrUndefined(token: antlr.Token | undefined): Token | undefined {
    if (token === undefined) {
      return undefined
    }
    return this.fromIToken(token)
  }
}
