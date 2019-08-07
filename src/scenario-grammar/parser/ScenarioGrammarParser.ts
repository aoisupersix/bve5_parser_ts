// Generated from src/ScenarioGrammar/SyntaxDefinitions/ScenarioGrammarParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ScenarioGrammarParserListener } from "./ScenarioGrammarParserListener";
import { ScenarioGrammarParserVisitor } from "./ScenarioGrammarParserVisitor";


export class ScenarioGrammarParser extends Parser {
	public static readonly ROUTE = 1;
	public static readonly VEHICLE = 2;
	public static readonly TITLE = 3;
	public static readonly IMAGE = 4;
	public static readonly ROUTETITLE = 5;
	public static readonly VEHICLETITLE = 6;
	public static readonly AUTHOR = 7;
	public static readonly COMMENT = 8;
	public static readonly EQUAL = 9;
	public static readonly ESCAPE_COMMENT = 10;
	public static readonly WHITESPACE = 11;
	public static readonly P_WS = 12;
	public static readonly PATH_END = 13;
	public static readonly PATH_EQUAL = 14;
	public static readonly IP_WS = 15;
	public static readonly IP_COMMENT = 16;
	public static readonly INPUT_PATH_END = 17;
	public static readonly ASTERISK = 18;
	public static readonly SECTION = 19;
	public static readonly FILE_PATH = 20;
	public static readonly W_WS = 21;
	public static readonly NUM = 22;
	public static readonly IT_WS = 23;
	public static readonly IT_COMMENT = 24;
	public static readonly INPUT_TEXT_END = 25;
	public static readonly INPUT_TEXT_CHAR = 26;
	public static readonly RULE_root = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_weight_path = 2;
	public static readonly RULE_string = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "statement", "weight_path", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'*'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ROUTE", "VEHICLE", "TITLE", "IMAGE", "ROUTETITLE", "VEHICLETITLE", 
		"AUTHOR", "COMMENT", "EQUAL", "ESCAPE_COMMENT", "WHITESPACE", "P_WS", 
		"PATH_END", "PATH_EQUAL", "IP_WS", "IP_COMMENT", "INPUT_PATH_END", "ASTERISK", 
		"SECTION", "FILE_PATH", "W_WS", "NUM", "IT_WS", "IT_COMMENT", "INPUT_TEXT_END", 
		"INPUT_TEXT_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ScenarioGrammarParser._LITERAL_NAMES, ScenarioGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ScenarioGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ScenarioGrammarParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ScenarioGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ScenarioGrammarParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ScenarioGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ScenarioGrammarParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ScenarioGrammarParser.ROUTE) | (1 << ScenarioGrammarParser.VEHICLE) | (1 << ScenarioGrammarParser.TITLE) | (1 << ScenarioGrammarParser.IMAGE) | (1 << ScenarioGrammarParser.ROUTETITLE) | (1 << ScenarioGrammarParser.VEHICLETITLE) | (1 << ScenarioGrammarParser.AUTHOR) | (1 << ScenarioGrammarParser.COMMENT))) !== 0)) {
				{
				{
				this.state = 8;
				this.statement();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 14;
			this.match(ScenarioGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ScenarioGrammarParser.RULE_statement);
		let _la: number;
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ScenarioGrammarParser.ROUTE:
				_localctx = new RouteStateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 16;
				(_localctx as RouteStateContext)._stateName = this.match(ScenarioGrammarParser.ROUTE);
				this.state = 17;
				this.match(ScenarioGrammarParser.PATH_EQUAL);
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.FILE_PATH) {
					{
					this.state = 18;
					this.weight_path();
					this.state = 23;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ScenarioGrammarParser.SECTION) {
						{
						{
						this.state = 19;
						this.match(ScenarioGrammarParser.SECTION);
						this.state = 20;
						this.weight_path();
						}
						}
						this.state = 25;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.PATH_END || _la === ScenarioGrammarParser.INPUT_PATH_END) {
					{
					this.state = 28;
					_la = this._input.LA(1);
					if (!(_la === ScenarioGrammarParser.PATH_END || _la === ScenarioGrammarParser.INPUT_PATH_END)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case ScenarioGrammarParser.VEHICLE:
				_localctx = new VehicleStateContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				(_localctx as VehicleStateContext)._stateName = this.match(ScenarioGrammarParser.VEHICLE);
				this.state = 32;
				this.match(ScenarioGrammarParser.PATH_EQUAL);
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.FILE_PATH) {
					{
					this.state = 33;
					this.weight_path();
					this.state = 38;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ScenarioGrammarParser.SECTION) {
						{
						{
						this.state = 34;
						this.match(ScenarioGrammarParser.SECTION);
						this.state = 35;
						this.weight_path();
						}
						}
						this.state = 40;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.PATH_END || _la === ScenarioGrammarParser.INPUT_PATH_END) {
					{
					this.state = 43;
					_la = this._input.LA(1);
					if (!(_la === ScenarioGrammarParser.PATH_END || _la === ScenarioGrammarParser.INPUT_PATH_END)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case ScenarioGrammarParser.TITLE:
				_localctx = new TitleStateContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				(_localctx as TitleStateContext)._stateName = this.match(ScenarioGrammarParser.TITLE);
				this.state = 47;
				this.match(ScenarioGrammarParser.EQUAL);
				this.state = 48;
				this.string();
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.INPUT_TEXT_END) {
					{
					this.state = 49;
					this.match(ScenarioGrammarParser.INPUT_TEXT_END);
					}
				}

				}
				break;
			case ScenarioGrammarParser.IMAGE:
				_localctx = new ImageStateContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 52;
				(_localctx as ImageStateContext)._stateName = this.match(ScenarioGrammarParser.IMAGE);
				this.state = 53;
				this.match(ScenarioGrammarParser.EQUAL);
				this.state = 54;
				this.string();
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.INPUT_TEXT_END) {
					{
					this.state = 55;
					this.match(ScenarioGrammarParser.INPUT_TEXT_END);
					}
				}

				}
				break;
			case ScenarioGrammarParser.ROUTETITLE:
				_localctx = new RouteTitleStateContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 58;
				(_localctx as RouteTitleStateContext)._stateName = this.match(ScenarioGrammarParser.ROUTETITLE);
				this.state = 59;
				this.match(ScenarioGrammarParser.EQUAL);
				this.state = 60;
				this.string();
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.INPUT_TEXT_END) {
					{
					this.state = 61;
					this.match(ScenarioGrammarParser.INPUT_TEXT_END);
					}
				}

				}
				break;
			case ScenarioGrammarParser.VEHICLETITLE:
				_localctx = new VehicleTitleStateContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 64;
				(_localctx as VehicleTitleStateContext)._stateName = this.match(ScenarioGrammarParser.VEHICLETITLE);
				this.state = 65;
				this.match(ScenarioGrammarParser.EQUAL);
				this.state = 66;
				this.string();
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.INPUT_TEXT_END) {
					{
					this.state = 67;
					this.match(ScenarioGrammarParser.INPUT_TEXT_END);
					}
				}

				}
				break;
			case ScenarioGrammarParser.AUTHOR:
				_localctx = new AuthorStateContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 70;
				(_localctx as AuthorStateContext)._stateName = this.match(ScenarioGrammarParser.AUTHOR);
				this.state = 71;
				this.match(ScenarioGrammarParser.EQUAL);
				this.state = 72;
				this.string();
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.INPUT_TEXT_END) {
					{
					this.state = 73;
					this.match(ScenarioGrammarParser.INPUT_TEXT_END);
					}
				}

				}
				break;
			case ScenarioGrammarParser.COMMENT:
				_localctx = new CommentStateContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 76;
				(_localctx as CommentStateContext)._stateName = this.match(ScenarioGrammarParser.COMMENT);
				this.state = 77;
				this.match(ScenarioGrammarParser.EQUAL);
				this.state = 78;
				this.string();
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ScenarioGrammarParser.INPUT_TEXT_END) {
					{
					this.state = 79;
					this.match(ScenarioGrammarParser.INPUT_TEXT_END);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weight_path(): Weight_pathContext {
		let _localctx: Weight_pathContext = new Weight_pathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ScenarioGrammarParser.RULE_weight_path);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			_localctx._path = this.match(ScenarioGrammarParser.FILE_PATH);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ScenarioGrammarParser.ASTERISK) {
				{
				this.state = 85;
				this.match(ScenarioGrammarParser.ASTERISK);
				this.state = 86;
				this.match(ScenarioGrammarParser.NUM);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ScenarioGrammarParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ScenarioGrammarParser.INPUT_TEXT_CHAR) {
				{
				{
				this.state = 89;
				this.match(ScenarioGrammarParser.INPUT_TEXT_CHAR);
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1Cb\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x07\x02\f\n\x02" +
		"\f\x02\x0E\x02\x0F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\x18\n\x03\f\x03\x0E\x03\x1B\v\x03\x05\x03\x1D\n\x03\x03" +
		"\x03\x05\x03 \n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\'" +
		"\n\x03\f\x03\x0E\x03*\v\x03\x05\x03,\n\x03\x03\x03\x05\x03/\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x035\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03;\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03A\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03G\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03M\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03S\n\x03\x05" +
		"\x03U\n\x03\x03\x04\x03\x04\x03\x04\x05\x04Z\n\x04\x03\x05\x07\x05]\n" +
		"\x05\f\x05\x0E\x05`\v\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06" +
		"\x02\b\x02\x02\x03\x04\x02\x0F\x0F\x13\x13s\x02\r\x03\x02\x02\x02\x04" +
		"T\x03\x02\x02\x02\x06V\x03\x02\x02\x02\b^\x03\x02\x02\x02\n\f\x05\x04" +
		"\x03\x02\v\n\x03\x02\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02" +
		"\r\x0E\x03\x02\x02\x02\x0E\x10\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10" +
		"\x11\x07\x02\x02\x03\x11\x03\x03\x02\x02\x02\x12\x13\x07\x03\x02\x02\x13" +
		"\x1C\x07\x10\x02\x02\x14\x19\x05\x06\x04\x02\x15\x16\x07\x15\x02\x02\x16" +
		"\x18\x05\x06\x04\x02\x17\x15\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19" +
		"\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B" +
		"\x19\x03\x02\x02\x02\x1C\x14\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D" +
		"\x1F\x03\x02\x02\x02\x1E \t\x02\x02\x02\x1F\x1E\x03\x02\x02\x02\x1F \x03" +
		"\x02\x02\x02 U\x03\x02\x02\x02!\"\x07\x04\x02\x02\"+\x07\x10\x02\x02#" +
		"(\x05\x06\x04\x02$%\x07\x15\x02\x02%\'\x05\x06\x04\x02&$\x03\x02\x02\x02" +
		"\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02),\x03\x02\x02" +
		"\x02*(\x03\x02\x02\x02+#\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02" +
		"\x02-/\t\x02\x02\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/U\x03\x02\x02" +
		"\x0201\x07\x05\x02\x0212\x07\v\x02\x0224\x05\b\x05\x0235\x07\x1B\x02\x02" +
		"43\x03\x02\x02\x0245\x03\x02\x02\x025U\x03\x02\x02\x0267\x07\x06\x02\x02" +
		"78\x07\v\x02\x028:\x05\b\x05\x029;\x07\x1B\x02\x02:9\x03\x02\x02\x02:" +
		";\x03\x02\x02\x02;U\x03\x02\x02\x02<=\x07\x07\x02\x02=>\x07\v\x02\x02" +
		">@\x05\b\x05\x02?A\x07\x1B\x02\x02@?\x03\x02\x02\x02@A\x03\x02\x02\x02" +
		"AU\x03\x02\x02\x02BC\x07\b\x02\x02CD\x07\v\x02\x02DF\x05\b\x05\x02EG\x07" +
		"\x1B\x02\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02GU\x03\x02\x02\x02HI\x07" +
		"\t\x02\x02IJ\x07\v\x02\x02JL\x05\b\x05\x02KM\x07\x1B\x02\x02LK\x03\x02" +
		"\x02\x02LM\x03\x02\x02\x02MU\x03\x02\x02\x02NO\x07\n\x02\x02OP\x07\v\x02" +
		"\x02PR\x05\b\x05\x02QS\x07\x1B\x02\x02RQ\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02SU\x03\x02\x02\x02T\x12\x03\x02\x02\x02T!\x03\x02\x02\x02T0\x03\x02" +
		"\x02\x02T6\x03\x02\x02\x02T<\x03\x02\x02\x02TB\x03\x02\x02\x02TH\x03\x02" +
		"\x02\x02TN\x03\x02\x02\x02U\x05\x03\x02\x02\x02VY\x07\x16\x02\x02WX\x07" +
		"\x14\x02\x02XZ\x07\x18\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x07" +
		"\x03\x02\x02\x02[]\x07\x1C\x02\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02" +
		"^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\t\x03\x02\x02\x02`^\x03\x02\x02" +
		"\x02\x12\r\x19\x1C\x1F(+.4:@FLRTY^";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ScenarioGrammarParser.__ATN) {
			ScenarioGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ScenarioGrammarParser._serializedATN));
		}

		return ScenarioGrammarParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ScenarioGrammarParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScenarioGrammarParser.RULE_root; }
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScenarioGrammarParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageStateContext extends StatementContext {
	public _stateName: Token;
	public EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.EQUAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public IMAGE(): TerminalNode { return this.getToken(ScenarioGrammarParser.IMAGE, 0); }
	public INPUT_TEXT_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterImageState) {
			listener.enterImageState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitImageState) {
			listener.exitImageState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitImageState) {
			return visitor.visitImageState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentStateContext extends StatementContext {
	public _stateName: Token;
	public EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.EQUAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public COMMENT(): TerminalNode { return this.getToken(ScenarioGrammarParser.COMMENT, 0); }
	public INPUT_TEXT_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterCommentState) {
			listener.enterCommentState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitCommentState) {
			listener.exitCommentState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitCommentState) {
			return visitor.visitCommentState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RouteTitleStateContext extends StatementContext {
	public _stateName: Token;
	public EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.EQUAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public ROUTETITLE(): TerminalNode { return this.getToken(ScenarioGrammarParser.ROUTETITLE, 0); }
	public INPUT_TEXT_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterRouteTitleState) {
			listener.enterRouteTitleState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitRouteTitleState) {
			listener.exitRouteTitleState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitRouteTitleState) {
			return visitor.visitRouteTitleState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VehicleTitleStateContext extends StatementContext {
	public _stateName: Token;
	public EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.EQUAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public VEHICLETITLE(): TerminalNode { return this.getToken(ScenarioGrammarParser.VEHICLETITLE, 0); }
	public INPUT_TEXT_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterVehicleTitleState) {
			listener.enterVehicleTitleState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitVehicleTitleState) {
			listener.exitVehicleTitleState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitVehicleTitleState) {
			return visitor.visitVehicleTitleState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RouteStateContext extends StatementContext {
	public _stateName: Token;
	public PATH_EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.PATH_EQUAL, 0); }
	public ROUTE(): TerminalNode { return this.getToken(ScenarioGrammarParser.ROUTE, 0); }
	public weight_path(): Weight_pathContext[];
	public weight_path(i: number): Weight_pathContext;
	public weight_path(i?: number): Weight_pathContext | Weight_pathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Weight_pathContext);
		} else {
			return this.getRuleContext(i, Weight_pathContext);
		}
	}
	public INPUT_PATH_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_PATH_END, 0); }
	public PATH_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.PATH_END, 0); }
	public SECTION(): TerminalNode[];
	public SECTION(i: number): TerminalNode;
	public SECTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScenarioGrammarParser.SECTION);
		} else {
			return this.getToken(ScenarioGrammarParser.SECTION, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterRouteState) {
			listener.enterRouteState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitRouteState) {
			listener.exitRouteState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitRouteState) {
			return visitor.visitRouteState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TitleStateContext extends StatementContext {
	public _stateName: Token;
	public EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.EQUAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public TITLE(): TerminalNode { return this.getToken(ScenarioGrammarParser.TITLE, 0); }
	public INPUT_TEXT_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterTitleState) {
			listener.enterTitleState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitTitleState) {
			listener.exitTitleState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitTitleState) {
			return visitor.visitTitleState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AuthorStateContext extends StatementContext {
	public _stateName: Token;
	public EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.EQUAL, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public AUTHOR(): TerminalNode { return this.getToken(ScenarioGrammarParser.AUTHOR, 0); }
	public INPUT_TEXT_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_TEXT_END, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterAuthorState) {
			listener.enterAuthorState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitAuthorState) {
			listener.exitAuthorState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitAuthorState) {
			return visitor.visitAuthorState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VehicleStateContext extends StatementContext {
	public _stateName: Token;
	public PATH_EQUAL(): TerminalNode { return this.getToken(ScenarioGrammarParser.PATH_EQUAL, 0); }
	public VEHICLE(): TerminalNode { return this.getToken(ScenarioGrammarParser.VEHICLE, 0); }
	public weight_path(): Weight_pathContext[];
	public weight_path(i: number): Weight_pathContext;
	public weight_path(i?: number): Weight_pathContext | Weight_pathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Weight_pathContext);
		} else {
			return this.getRuleContext(i, Weight_pathContext);
		}
	}
	public INPUT_PATH_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.INPUT_PATH_END, 0); }
	public PATH_END(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.PATH_END, 0); }
	public SECTION(): TerminalNode[];
	public SECTION(i: number): TerminalNode;
	public SECTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScenarioGrammarParser.SECTION);
		} else {
			return this.getToken(ScenarioGrammarParser.SECTION, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterVehicleState) {
			listener.enterVehicleState(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitVehicleState) {
			listener.exitVehicleState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitVehicleState) {
			return visitor.visitVehicleState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weight_pathContext extends ParserRuleContext {
	public _path: Token;
	public FILE_PATH(): TerminalNode { return this.getToken(ScenarioGrammarParser.FILE_PATH, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.ASTERISK, 0); }
	public NUM(): TerminalNode | undefined { return this.tryGetToken(ScenarioGrammarParser.NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScenarioGrammarParser.RULE_weight_path; }
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterWeight_path) {
			listener.enterWeight_path(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitWeight_path) {
			listener.exitWeight_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitWeight_path) {
			return visitor.visitWeight_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public INPUT_TEXT_CHAR(): TerminalNode[];
	public INPUT_TEXT_CHAR(i: number): TerminalNode;
	public INPUT_TEXT_CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ScenarioGrammarParser.INPUT_TEXT_CHAR);
		} else {
			return this.getToken(ScenarioGrammarParser.INPUT_TEXT_CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ScenarioGrammarParser.RULE_string; }
	// @Override
	public enterRule(listener: ScenarioGrammarParserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: ScenarioGrammarParserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ScenarioGrammarParserVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


