import * as antlr from 'antlr4ts'

export class Token {
  constructor(
    public line: number,
    public charPositionInLine: number,
    public text: string | undefined
  ) {}

  static fromIToken(token: antlr.Token | undefined): Token | undefined {
    if (token === undefined) {
      return undefined
    }

    return new Token(token.line, token.charPositionInLine, token.text)
  }
}