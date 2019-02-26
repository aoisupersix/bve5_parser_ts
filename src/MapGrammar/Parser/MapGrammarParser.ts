// Generated from src/MapGrammar/SyntaxDefinitions/MapGrammarParser.g4 by ANTLR 4.6-SNAPSHOT


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

import { MapGrammarParserListener } from "./MapGrammarParserListener";
import { MapGrammarParserVisitor } from "./MapGrammarParserVisitor";


export class MapGrammarParser extends Parser {
	public static readonly BVETS = 1;
	public static readonly MAP = 2;
	public static readonly SELECT_ENCODE = 3;
	public static readonly INCLUDE = 4;
	public static readonly CURVE = 5;
	public static readonly GRADIENT = 6;
	public static readonly TRACK = 7;
	public static readonly STRUCTURE = 8;
	public static readonly REPEATER = 9;
	public static readonly BACKGROUND = 10;
	public static readonly STATION = 11;
	public static readonly SECTION = 12;
	public static readonly SIGNAL = 13;
	public static readonly BEACON = 14;
	public static readonly SPEEDLIMIT = 15;
	public static readonly PRETRAIN = 16;
	public static readonly LIGHT = 17;
	public static readonly FOG = 18;
	public static readonly DRAWDISTANCE = 19;
	public static readonly CABILLUMINANCE = 20;
	public static readonly IRREGULARITY = 21;
	public static readonly ADHESION = 22;
	public static readonly SOUND = 23;
	public static readonly SOUND3D = 24;
	public static readonly ROLLINGNOISE = 25;
	public static readonly FLANGENOISE = 26;
	public static readonly JOINTNOISE = 27;
	public static readonly TRAIN = 28;
	public static readonly LEGACY = 29;
	public static readonly X_ELEMENT = 30;
	public static readonly Y_ELEMENT = 31;
	public static readonly CANT_ELEMENT = 32;
	public static readonly SET_GAUGE = 33;
	public static readonly GAUGE = 34;
	public static readonly SET_CENTER = 35;
	public static readonly SET_FUNCTION = 36;
	public static readonly SET = 37;
	public static readonly BEGIN_TRANSITION = 38;
	public static readonly BEGIN = 39;
	public static readonly BEGIN0 = 40;
	public static readonly BEGIN_CIRCULAR = 41;
	public static readonly BEGIN_CONST = 42;
	public static readonly BEGIN_NEW = 43;
	public static readonly END = 44;
	public static readonly INTERPOLATE = 45;
	public static readonly CHANGE = 46;
	public static readonly POSITION = 47;
	public static readonly LOAD = 48;
	public static readonly PUT = 49;
	public static readonly PUT0 = 50;
	public static readonly PUTBETWEEN = 51;
	public static readonly SET_SPEEDLIMIT = 52;
	public static readonly PASS = 53;
	public static readonly AMBIENT = 54;
	public static readonly DIFFUSE = 55;
	public static readonly DIRECTION = 56;
	public static readonly PLAY = 57;
	public static readonly ADD = 58;
	public static readonly ENABLE = 59;
	public static readonly STOP = 60;
	public static readonly PITCH = 61;
	public static readonly TURN = 62;
	public static readonly STATE_END = 63;
	public static readonly DOT = 64;
	public static readonly COMMA = 65;
	public static readonly NUM = 66;
	public static readonly NULL = 67;
	public static readonly DISTANCE = 68;
	public static readonly EQUAL = 69;
	public static readonly PLUS = 70;
	public static readonly MINUS = 71;
	public static readonly MULT = 72;
	public static readonly DIV = 73;
	public static readonly MOD = 74;
	public static readonly ABS = 75;
	public static readonly ATAN2 = 76;
	public static readonly CEIL = 77;
	public static readonly COS = 78;
	public static readonly EXP = 79;
	public static readonly FLOOR = 80;
	public static readonly LOG = 81;
	public static readonly POW = 82;
	public static readonly RAND = 83;
	public static readonly SIN = 84;
	public static readonly SQRT = 85;
	public static readonly OPN_PAR = 86;
	public static readonly CLS_PAR = 87;
	public static readonly OPN_BRA = 88;
	public static readonly CLS_BRA = 89;
	public static readonly WHITESPACE = 90;
	public static readonly COMMENT = 91;
	public static readonly VAR_START = 92;
	public static readonly VAR = 93;
	public static readonly QUOTE = 94;
	public static readonly ERROR_CHAR = 95;
	public static readonly RQUOTE = 96;
	public static readonly CHAR = 97;
	public static readonly E_WS = 98;
	public static readonly ENCODE_END = 99;
	public static readonly ENCODE_CHAR = 100;
	public static readonly RULE_root = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_distance = 2;
	public static readonly RULE_include = 3;
	public static readonly RULE_curve = 4;
	public static readonly RULE_gradient = 5;
	public static readonly RULE_track = 6;
	public static readonly RULE_structure = 7;
	public static readonly RULE_repeater = 8;
	public static readonly RULE_background = 9;
	public static readonly RULE_station = 10;
	public static readonly RULE_section = 11;
	public static readonly RULE_signal = 12;
	public static readonly RULE_beacon = 13;
	public static readonly RULE_speedlimit = 14;
	public static readonly RULE_pretrain = 15;
	public static readonly RULE_light = 16;
	public static readonly RULE_fog = 17;
	public static readonly RULE_drawdistance = 18;
	public static readonly RULE_cabilluminance = 19;
	public static readonly RULE_irregularity = 20;
	public static readonly RULE_adhesion = 21;
	public static readonly RULE_sound = 22;
	public static readonly RULE_sound3d = 23;
	public static readonly RULE_rollingnoise = 24;
	public static readonly RULE_flangenoise = 25;
	public static readonly RULE_jointnoise = 26;
	public static readonly RULE_train = 27;
	public static readonly RULE_strkey = 28;
	public static readonly RULE_exprArgs = 29;
	public static readonly RULE_varAssign = 30;
	public static readonly RULE_legacy = 31;
	public static readonly RULE_nullableExpr = 32;
	public static readonly RULE_expr = 33;
	public static readonly RULE_var = 34;
	public static readonly RULE_string = 35;
	public static readonly RULE_string_text = 36;
	public static readonly RULE_encoding = 37;
	public static readonly RULE_encode_string = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "statement", "distance", "include", "curve", "gradient", "track", 
		"structure", "repeater", "background", "station", "section", "signal", 
		"beacon", "speedlimit", "pretrain", "light", "fog", "drawdistance", "cabilluminance", 
		"irregularity", "adhesion", "sound", "sound3d", "rollingnoise", "flangenoise", 
		"jointnoise", "train", "strkey", "exprArgs", "varAssign", "legacy", "nullableExpr", 
		"expr", "var", "string", "string_text", "encoding", "encode_string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "':'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"';'", "'.'", "','", undefined, undefined, undefined, "'='", "'+'", "'-'", 
		"'*'", "'/'", "'%'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'('", 
		"')'", "'['", "']'", undefined, undefined, "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BVETS", "MAP", "SELECT_ENCODE", "INCLUDE", "CURVE", "GRADIENT", 
		"TRACK", "STRUCTURE", "REPEATER", "BACKGROUND", "STATION", "SECTION", 
		"SIGNAL", "BEACON", "SPEEDLIMIT", "PRETRAIN", "LIGHT", "FOG", "DRAWDISTANCE", 
		"CABILLUMINANCE", "IRREGULARITY", "ADHESION", "SOUND", "SOUND3D", "ROLLINGNOISE", 
		"FLANGENOISE", "JOINTNOISE", "TRAIN", "LEGACY", "X_ELEMENT", "Y_ELEMENT", 
		"CANT_ELEMENT", "SET_GAUGE", "GAUGE", "SET_CENTER", "SET_FUNCTION", "SET", 
		"BEGIN_TRANSITION", "BEGIN", "BEGIN0", "BEGIN_CIRCULAR", "BEGIN_CONST", 
		"BEGIN_NEW", "END", "INTERPOLATE", "CHANGE", "POSITION", "LOAD", "PUT", 
		"PUT0", "PUTBETWEEN", "SET_SPEEDLIMIT", "PASS", "AMBIENT", "DIFFUSE", 
		"DIRECTION", "PLAY", "ADD", "ENABLE", "STOP", "PITCH", "TURN", "STATE_END", 
		"DOT", "COMMA", "NUM", "NULL", "DISTANCE", "EQUAL", "PLUS", "MINUS", "MULT", 
		"DIV", "MOD", "ABS", "ATAN2", "CEIL", "COS", "EXP", "FLOOR", "LOG", "POW", 
		"RAND", "SIN", "SQRT", "OPN_PAR", "CLS_PAR", "OPN_BRA", "CLS_BRA", "WHITESPACE", 
		"COMMENT", "VAR_START", "VAR", "QUOTE", "ERROR_CHAR", "RQUOTE", "CHAR", 
		"E_WS", "ENCODE_END", "ENCODE_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MapGrammarParser._LITERAL_NAMES, MapGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MapGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MapGrammarParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return MapGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MapGrammarParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MapGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MapGrammarParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(MapGrammarParser.BVETS);
			this.state = 79;
			this.match(MapGrammarParser.MAP);
			this.state = 80;
			_localctx._version = this.match(MapGrammarParser.NUM);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGrammarParser.SELECT_ENCODE) {
				{
				this.state = 81;
				this.encoding();
				}
			}

			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MapGrammarParser.INCLUDE) | (1 << MapGrammarParser.CURVE) | (1 << MapGrammarParser.GRADIENT) | (1 << MapGrammarParser.TRACK) | (1 << MapGrammarParser.STRUCTURE) | (1 << MapGrammarParser.REPEATER) | (1 << MapGrammarParser.BACKGROUND) | (1 << MapGrammarParser.STATION) | (1 << MapGrammarParser.SECTION) | (1 << MapGrammarParser.SIGNAL) | (1 << MapGrammarParser.BEACON) | (1 << MapGrammarParser.SPEEDLIMIT) | (1 << MapGrammarParser.PRETRAIN) | (1 << MapGrammarParser.LIGHT) | (1 << MapGrammarParser.FOG) | (1 << MapGrammarParser.DRAWDISTANCE) | (1 << MapGrammarParser.CABILLUMINANCE) | (1 << MapGrammarParser.IRREGULARITY) | (1 << MapGrammarParser.ADHESION) | (1 << MapGrammarParser.SOUND) | (1 << MapGrammarParser.SOUND3D) | (1 << MapGrammarParser.ROLLINGNOISE) | (1 << MapGrammarParser.FLANGENOISE) | (1 << MapGrammarParser.JOINTNOISE) | (1 << MapGrammarParser.TRAIN) | (1 << MapGrammarParser.LEGACY))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MapGrammarParser.NUM - 66)) | (1 << (MapGrammarParser.DISTANCE - 66)) | (1 << (MapGrammarParser.PLUS - 66)) | (1 << (MapGrammarParser.MINUS - 66)) | (1 << (MapGrammarParser.ABS - 66)) | (1 << (MapGrammarParser.ATAN2 - 66)) | (1 << (MapGrammarParser.CEIL - 66)) | (1 << (MapGrammarParser.COS - 66)) | (1 << (MapGrammarParser.EXP - 66)) | (1 << (MapGrammarParser.FLOOR - 66)) | (1 << (MapGrammarParser.LOG - 66)) | (1 << (MapGrammarParser.POW - 66)) | (1 << (MapGrammarParser.RAND - 66)) | (1 << (MapGrammarParser.SIN - 66)) | (1 << (MapGrammarParser.SQRT - 66)) | (1 << (MapGrammarParser.OPN_PAR - 66)) | (1 << (MapGrammarParser.VAR_START - 66)) | (1 << (MapGrammarParser.QUOTE - 66)))) !== 0)) {
				{
				{
				this.state = 84;
				this.statement();
				this.state = 85;
				this.match(MapGrammarParser.STATE_END);
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
			this.match(MapGrammarParser.EOF);
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
		this.enterRule(_localctx, 2, MapGrammarParser.RULE_statement);
		try {
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				_localctx = new DistStateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.distance();
				}
				break;

			case 2:
				_localctx = new IncludeStateContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.match(MapGrammarParser.INCLUDE);
				this.state = 96;
				this.include();
				}
				break;

			case 3:
				_localctx = new CurveStateContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 97;
				this.match(MapGrammarParser.CURVE);
				this.state = 98;
				this.curve();
				}
				break;

			case 4:
				_localctx = new GradientStateContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				this.match(MapGrammarParser.GRADIENT);
				this.state = 100;
				this.gradient();
				}
				break;

			case 5:
				_localctx = new TrackStateContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 101;
				this.match(MapGrammarParser.TRACK);
				this.state = 102;
				this.track();
				}
				break;

			case 6:
				_localctx = new StructureStateContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 103;
				this.match(MapGrammarParser.STRUCTURE);
				this.state = 104;
				this.structure();
				}
				break;

			case 7:
				_localctx = new RepeaterStateContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 105;
				this.match(MapGrammarParser.REPEATER);
				this.state = 106;
				this.repeater();
				}
				break;

			case 8:
				_localctx = new BackgroundStateContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 107;
				this.match(MapGrammarParser.BACKGROUND);
				this.state = 108;
				this.background();
				}
				break;

			case 9:
				_localctx = new StationStateContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 109;
				this.match(MapGrammarParser.STATION);
				this.state = 110;
				this.station();
				}
				break;

			case 10:
				_localctx = new SectionStateContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 111;
				this.match(MapGrammarParser.SECTION);
				this.state = 112;
				this.section();
				}
				break;

			case 11:
				_localctx = new SignalStateContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 113;
				this.match(MapGrammarParser.SIGNAL);
				this.state = 114;
				this.signal();
				}
				break;

			case 12:
				_localctx = new BeaconStateContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 115;
				this.match(MapGrammarParser.BEACON);
				this.state = 116;
				this.beacon();
				}
				break;

			case 13:
				_localctx = new SpeedlimitStateContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 117;
				this.match(MapGrammarParser.SPEEDLIMIT);
				this.state = 118;
				this.speedlimit();
				}
				break;

			case 14:
				_localctx = new PretrainStateContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 119;
				this.match(MapGrammarParser.PRETRAIN);
				this.state = 120;
				this.pretrain();
				}
				break;

			case 15:
				_localctx = new LightStateContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 121;
				this.match(MapGrammarParser.LIGHT);
				this.state = 122;
				this.light();
				}
				break;

			case 16:
				_localctx = new FogStateContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 123;
				this.match(MapGrammarParser.FOG);
				this.state = 124;
				this.fog();
				}
				break;

			case 17:
				_localctx = new DrawdistanceStateContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 125;
				this.match(MapGrammarParser.DRAWDISTANCE);
				this.state = 126;
				this.drawdistance();
				}
				break;

			case 18:
				_localctx = new CabilluminanceStateContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 127;
				this.match(MapGrammarParser.CABILLUMINANCE);
				this.state = 128;
				this.cabilluminance();
				}
				break;

			case 19:
				_localctx = new IrregularityStateContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 129;
				this.match(MapGrammarParser.IRREGULARITY);
				this.state = 130;
				this.irregularity();
				}
				break;

			case 20:
				_localctx = new AdhesionStateContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 131;
				this.match(MapGrammarParser.ADHESION);
				this.state = 132;
				this.adhesion();
				}
				break;

			case 21:
				_localctx = new SoundStateContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 133;
				this.match(MapGrammarParser.SOUND);
				this.state = 134;
				this.sound();
				}
				break;

			case 22:
				_localctx = new Sound3dStateContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 135;
				this.match(MapGrammarParser.SOUND3D);
				this.state = 136;
				this.sound3d();
				}
				break;

			case 23:
				_localctx = new RollingnoiseStateContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 137;
				this.match(MapGrammarParser.ROLLINGNOISE);
				this.state = 138;
				this.rollingnoise();
				}
				break;

			case 24:
				_localctx = new FlangenoiseStateContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 139;
				this.match(MapGrammarParser.FLANGENOISE);
				this.state = 140;
				this.flangenoise();
				}
				break;

			case 25:
				_localctx = new JointnoiseStateContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 141;
				this.match(MapGrammarParser.JOINTNOISE);
				this.state = 142;
				this.jointnoise();
				}
				break;

			case 26:
				_localctx = new TrainStateContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 143;
				this.match(MapGrammarParser.TRAIN);
				this.state = 144;
				this.train();
				}
				break;

			case 27:
				_localctx = new VarAssignStateContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 145;
				this.varAssign();
				}
				break;

			case 28:
				_localctx = new LegacyStateContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 146;
				this.match(MapGrammarParser.LEGACY);
				this.state = 147;
				this.legacy();
				}
				break;
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
	public distance(): DistanceContext {
		let _localctx: DistanceContext = new DistanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MapGrammarParser.RULE_distance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.expr(0);
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
	public include(): IncludeContext {
		let _localctx: IncludeContext = new IncludeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MapGrammarParser.RULE_include);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			_localctx._path = this.string();
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
	public curve(): CurveContext {
		let _localctx: CurveContext = new CurveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MapGrammarParser.RULE_curve);
		let _la: number;
		try {
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.match(MapGrammarParser.DOT);
				this.state = 155;
				_localctx._func = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === MapGrammarParser.SET_GAUGE || _la === MapGrammarParser.GAUGE)) {
					_localctx._func = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 156;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 157;
				_localctx._value = this.nullableExpr();
				this.state = 158;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 160;
				this.match(MapGrammarParser.DOT);
				this.state = 161;
				_localctx._func = this.match(MapGrammarParser.SET_CENTER);
				this.state = 162;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 163;
				_localctx._x = this.nullableExpr();
				this.state = 164;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.match(MapGrammarParser.DOT);
				this.state = 167;
				_localctx._func = this.match(MapGrammarParser.SET_FUNCTION);
				this.state = 168;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 169;
				_localctx._id = this.nullableExpr();
				this.state = 170;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 172;
				this.match(MapGrammarParser.DOT);
				this.state = 173;
				_localctx._func = this.match(MapGrammarParser.BEGIN_TRANSITION);
				this.state = 174;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 175;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 176;
				this.match(MapGrammarParser.DOT);
				this.state = 177;
				_localctx._func = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === MapGrammarParser.BEGIN || _la === MapGrammarParser.BEGIN_CIRCULAR)) {
					_localctx._func = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 178;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 179;
				_localctx._radius = this.nullableExpr();
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MapGrammarParser.COMMA) {
					{
					this.state = 180;
					this.match(MapGrammarParser.COMMA);
					this.state = 181;
					_localctx._cant = this.nullableExpr();
					}
				}

				this.state = 184;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 186;
				this.match(MapGrammarParser.DOT);
				this.state = 187;
				_localctx._func = this.match(MapGrammarParser.END);
				this.state = 188;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 189;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 190;
				this.match(MapGrammarParser.DOT);
				this.state = 191;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 192;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 193;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 194;
				this.match(MapGrammarParser.DOT);
				this.state = 195;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 196;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 197;
				_localctx._radiusE = this.expr(0);
				this.state = 198;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 200;
				this.match(MapGrammarParser.DOT);
				this.state = 201;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 202;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 203;
				_localctx._radius = this.nullableExpr();
				this.state = 204;
				this.match(MapGrammarParser.COMMA);
				this.state = 205;
				_localctx._cant = this.nullableExpr();
				this.state = 206;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 208;
				this.match(MapGrammarParser.DOT);
				this.state = 209;
				_localctx._func = this.match(MapGrammarParser.CHANGE);
				this.state = 210;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 211;
				_localctx._radius = this.nullableExpr();
				this.state = 212;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public gradient(): GradientContext {
		let _localctx: GradientContext = new GradientContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MapGrammarParser.RULE_gradient);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.match(MapGrammarParser.DOT);
				this.state = 217;
				_localctx._func = this.match(MapGrammarParser.BEGIN_TRANSITION);
				this.state = 218;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 219;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 220;
				this.match(MapGrammarParser.DOT);
				this.state = 221;
				_localctx._func = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === MapGrammarParser.BEGIN || _la === MapGrammarParser.BEGIN_CONST)) {
					_localctx._func = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 222;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 223;
				_localctx._gradientArgs = this.nullableExpr();
				this.state = 224;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 226;
				this.match(MapGrammarParser.DOT);
				this.state = 227;
				_localctx._func = this.match(MapGrammarParser.END);
				this.state = 228;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 229;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.match(MapGrammarParser.DOT);
				this.state = 231;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 232;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 233;
				_localctx._gradientArgsE = this.expr(0);
				this.state = 234;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public track(): TrackContext {
		let _localctx: TrackContext = new TrackContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MapGrammarParser.RULE_track);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 238;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 239;
				_localctx._key = this.expr(0);
				this.state = 240;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 241;
				this.match(MapGrammarParser.DOT);
				this.state = 242;
				_localctx._element = this.match(MapGrammarParser.X_ELEMENT);
				this.state = 243;
				this.match(MapGrammarParser.DOT);
				this.state = 244;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 245;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 246;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 249;
				_localctx._key = this.expr(0);
				this.state = 250;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 251;
				this.match(MapGrammarParser.DOT);
				this.state = 252;
				_localctx._element = this.match(MapGrammarParser.X_ELEMENT);
				this.state = 253;
				this.match(MapGrammarParser.DOT);
				this.state = 254;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 255;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 256;
				_localctx._xE = this.expr(0);
				this.state = 257;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 259;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 260;
				_localctx._key = this.expr(0);
				this.state = 261;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 262;
				this.match(MapGrammarParser.DOT);
				this.state = 263;
				_localctx._element = this.match(MapGrammarParser.X_ELEMENT);
				this.state = 264;
				this.match(MapGrammarParser.DOT);
				this.state = 265;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 266;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 267;
				_localctx._x = this.nullableExpr();
				this.state = 268;
				this.match(MapGrammarParser.COMMA);
				this.state = 269;
				_localctx._radius = this.nullableExpr();
				this.state = 270;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 273;
				_localctx._key = this.expr(0);
				this.state = 274;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 275;
				this.match(MapGrammarParser.DOT);
				this.state = 276;
				_localctx._element = this.match(MapGrammarParser.Y_ELEMENT);
				this.state = 277;
				this.match(MapGrammarParser.DOT);
				this.state = 278;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 279;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 280;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 282;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 283;
				_localctx._key = this.expr(0);
				this.state = 284;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 285;
				this.match(MapGrammarParser.DOT);
				this.state = 286;
				_localctx._element = this.match(MapGrammarParser.Y_ELEMENT);
				this.state = 287;
				this.match(MapGrammarParser.DOT);
				this.state = 288;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 289;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 290;
				_localctx._xE = this.expr(0);
				this.state = 291;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 293;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 294;
				_localctx._key = this.expr(0);
				this.state = 295;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 296;
				this.match(MapGrammarParser.DOT);
				this.state = 297;
				_localctx._element = this.match(MapGrammarParser.Y_ELEMENT);
				this.state = 298;
				this.match(MapGrammarParser.DOT);
				this.state = 299;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 300;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 301;
				_localctx._x = this.nullableExpr();
				this.state = 302;
				this.match(MapGrammarParser.COMMA);
				this.state = 303;
				_localctx._radius = this.nullableExpr();
				this.state = 304;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 306;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 307;
				_localctx._key = this.expr(0);
				this.state = 308;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 309;
				this.match(MapGrammarParser.DOT);
				this.state = 310;
				_localctx._func = this.match(MapGrammarParser.POSITION);
				this.state = 311;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 312;
				_localctx._x = this.nullableExpr();
				this.state = 313;
				this.match(MapGrammarParser.COMMA);
				this.state = 314;
				_localctx._y = this.nullableExpr();
				this.state = 315;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 317;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 318;
				_localctx._key = this.expr(0);
				this.state = 319;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 320;
				this.match(MapGrammarParser.DOT);
				this.state = 321;
				_localctx._func = this.match(MapGrammarParser.POSITION);
				this.state = 322;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 323;
				_localctx._x = this.nullableExpr();
				this.state = 324;
				this.match(MapGrammarParser.COMMA);
				this.state = 325;
				_localctx._y = this.nullableExpr();
				this.state = 326;
				this.match(MapGrammarParser.COMMA);
				this.state = 327;
				_localctx._radiusH = this.nullableExpr();
				this.state = 328;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 330;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 331;
				_localctx._key = this.expr(0);
				this.state = 332;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 333;
				this.match(MapGrammarParser.DOT);
				this.state = 334;
				_localctx._func = this.match(MapGrammarParser.POSITION);
				this.state = 335;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 336;
				_localctx._x = this.nullableExpr();
				this.state = 337;
				this.match(MapGrammarParser.COMMA);
				this.state = 338;
				_localctx._y = this.nullableExpr();
				this.state = 339;
				this.match(MapGrammarParser.COMMA);
				this.state = 340;
				_localctx._radiusH = this.nullableExpr();
				this.state = 341;
				this.match(MapGrammarParser.COMMA);
				this.state = 342;
				_localctx._radiusV = this.nullableExpr();
				this.state = 343;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 345;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 346;
				_localctx._key = this.expr(0);
				this.state = 347;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 348;
				this.match(MapGrammarParser.DOT);
				this.state = 349;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 350;
				this.match(MapGrammarParser.DOT);
				this.state = 351;
				_localctx._func = this.match(MapGrammarParser.SET_CENTER);
				this.state = 352;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 353;
				_localctx._x = this.nullableExpr();
				this.state = 354;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 356;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 357;
				_localctx._key = this.expr(0);
				this.state = 358;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 359;
				this.match(MapGrammarParser.DOT);
				this.state = 360;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 361;
				this.match(MapGrammarParser.DOT);
				this.state = 362;
				_localctx._func = this.match(MapGrammarParser.SET_GAUGE);
				this.state = 363;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 364;
				_localctx._gauge = this.nullableExpr();
				this.state = 365;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 367;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 368;
				_localctx._key = this.expr(0);
				this.state = 369;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 370;
				this.match(MapGrammarParser.DOT);
				this.state = 371;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 372;
				this.match(MapGrammarParser.DOT);
				this.state = 373;
				_localctx._func = this.match(MapGrammarParser.SET_FUNCTION);
				this.state = 374;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 375;
				_localctx._id = this.nullableExpr();
				this.state = 376;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 378;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 379;
				_localctx._key = this.expr(0);
				this.state = 380;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 381;
				this.match(MapGrammarParser.DOT);
				this.state = 382;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 383;
				this.match(MapGrammarParser.DOT);
				this.state = 384;
				_localctx._func = this.match(MapGrammarParser.BEGIN_TRANSITION);
				this.state = 385;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 386;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 388;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 389;
				_localctx._key = this.expr(0);
				this.state = 390;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 391;
				this.match(MapGrammarParser.DOT);
				this.state = 392;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 393;
				this.match(MapGrammarParser.DOT);
				this.state = 394;
				_localctx._func = this.match(MapGrammarParser.BEGIN);
				this.state = 395;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 396;
				_localctx._cant = this.nullableExpr();
				this.state = 397;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 399;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 400;
				_localctx._key = this.expr(0);
				this.state = 401;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 402;
				this.match(MapGrammarParser.DOT);
				this.state = 403;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 404;
				this.match(MapGrammarParser.DOT);
				this.state = 405;
				_localctx._func = this.match(MapGrammarParser.END);
				this.state = 406;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 407;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 409;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 410;
				_localctx._key = this.expr(0);
				this.state = 411;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 412;
				this.match(MapGrammarParser.DOT);
				this.state = 413;
				_localctx._element = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 414;
				this.match(MapGrammarParser.DOT);
				this.state = 415;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 416;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MapGrammarParser.NUM - 66)) | (1 << (MapGrammarParser.DISTANCE - 66)) | (1 << (MapGrammarParser.PLUS - 66)) | (1 << (MapGrammarParser.MINUS - 66)) | (1 << (MapGrammarParser.ABS - 66)) | (1 << (MapGrammarParser.ATAN2 - 66)) | (1 << (MapGrammarParser.CEIL - 66)) | (1 << (MapGrammarParser.COS - 66)) | (1 << (MapGrammarParser.EXP - 66)) | (1 << (MapGrammarParser.FLOOR - 66)) | (1 << (MapGrammarParser.LOG - 66)) | (1 << (MapGrammarParser.POW - 66)) | (1 << (MapGrammarParser.RAND - 66)) | (1 << (MapGrammarParser.SIN - 66)) | (1 << (MapGrammarParser.SQRT - 66)) | (1 << (MapGrammarParser.OPN_PAR - 66)) | (1 << (MapGrammarParser.VAR_START - 66)) | (1 << (MapGrammarParser.QUOTE - 66)))) !== 0)) {
					{
					this.state = 417;
					_localctx._cantE = this.expr(0);
					}
				}

				this.state = 420;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 422;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 423;
				_localctx._key = this.expr(0);
				this.state = 424;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 425;
				this.match(MapGrammarParser.DOT);
				this.state = 426;
				_localctx._func = this.match(MapGrammarParser.CANT_ELEMENT);
				this.state = 427;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 428;
				_localctx._cantE = this.expr(0);
				this.state = 429;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 431;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 432;
				_localctx._key = this.expr(0);
				this.state = 433;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 434;
				this.match(MapGrammarParser.DOT);
				this.state = 435;
				_localctx._func = this.match(MapGrammarParser.GAUGE);
				this.state = 436;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 437;
				_localctx._gauge = this.nullableExpr();
				this.state = 438;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public structure(): StructureContext {
		let _localctx: StructureContext = new StructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MapGrammarParser.RULE_structure);
		let _la: number;
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.match(MapGrammarParser.DOT);
				this.state = 443;
				_localctx._func = this.match(MapGrammarParser.LOAD);
				this.state = 444;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 445;
				_localctx._path = this.string();
				this.state = 446;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 449;
				_localctx._key = this.expr(0);
				this.state = 450;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 451;
				this.match(MapGrammarParser.DOT);
				this.state = 452;
				_localctx._func = this.match(MapGrammarParser.PUT);
				this.state = 453;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 454;
				_localctx._trackkey = this.nullableExpr();
				this.state = 455;
				this.match(MapGrammarParser.COMMA);
				this.state = 456;
				_localctx._x = this.nullableExpr();
				this.state = 457;
				this.match(MapGrammarParser.COMMA);
				this.state = 458;
				_localctx._y = this.nullableExpr();
				this.state = 459;
				this.match(MapGrammarParser.COMMA);
				this.state = 460;
				_localctx._z = this.nullableExpr();
				this.state = 461;
				this.match(MapGrammarParser.COMMA);
				this.state = 462;
				_localctx._rx = this.nullableExpr();
				this.state = 463;
				this.match(MapGrammarParser.COMMA);
				this.state = 464;
				_localctx._ry = this.nullableExpr();
				this.state = 465;
				this.match(MapGrammarParser.COMMA);
				this.state = 466;
				_localctx._rz = this.nullableExpr();
				this.state = 467;
				this.match(MapGrammarParser.COMMA);
				this.state = 468;
				_localctx._tilt = this.nullableExpr();
				this.state = 469;
				this.match(MapGrammarParser.COMMA);
				this.state = 470;
				_localctx._span = this.nullableExpr();
				this.state = 471;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 473;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 474;
				_localctx._key = this.expr(0);
				this.state = 475;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 476;
				this.match(MapGrammarParser.DOT);
				this.state = 477;
				_localctx._func = this.match(MapGrammarParser.PUT0);
				this.state = 478;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 479;
				_localctx._trackkey = this.nullableExpr();
				this.state = 480;
				this.match(MapGrammarParser.COMMA);
				this.state = 481;
				_localctx._tilt = this.nullableExpr();
				this.state = 482;
				this.match(MapGrammarParser.COMMA);
				this.state = 483;
				_localctx._span = this.nullableExpr();
				this.state = 484;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 486;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 487;
				_localctx._key = this.expr(0);
				this.state = 488;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 489;
				this.match(MapGrammarParser.DOT);
				this.state = 490;
				_localctx._func = this.match(MapGrammarParser.PUTBETWEEN);
				this.state = 491;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 492;
				_localctx._trackkey1 = this.nullableExpr();
				this.state = 493;
				this.match(MapGrammarParser.COMMA);
				this.state = 494;
				_localctx._trackkey2 = this.nullableExpr();
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MapGrammarParser.COMMA) {
					{
					this.state = 495;
					this.match(MapGrammarParser.COMMA);
					this.state = 496;
					_localctx._flag = this.nullableExpr();
					}
				}

				this.state = 499;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public repeater(): RepeaterContext {
		let _localctx: RepeaterContext = new RepeaterContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MapGrammarParser.RULE_repeater);
		let _la: number;
		try {
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 504;
				_localctx._key = this.expr(0);
				this.state = 505;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 506;
				this.match(MapGrammarParser.DOT);
				this.state = 507;
				_localctx._func = this.match(MapGrammarParser.BEGIN);
				this.state = 508;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 509;
				_localctx._trackkey = this.nullableExpr();
				this.state = 510;
				this.match(MapGrammarParser.COMMA);
				this.state = 511;
				_localctx._x = this.nullableExpr();
				this.state = 512;
				this.match(MapGrammarParser.COMMA);
				this.state = 513;
				_localctx._y = this.nullableExpr();
				this.state = 514;
				this.match(MapGrammarParser.COMMA);
				this.state = 515;
				_localctx._z = this.nullableExpr();
				this.state = 516;
				this.match(MapGrammarParser.COMMA);
				this.state = 517;
				_localctx._rx = this.nullableExpr();
				this.state = 518;
				this.match(MapGrammarParser.COMMA);
				this.state = 519;
				_localctx._ry = this.nullableExpr();
				this.state = 520;
				this.match(MapGrammarParser.COMMA);
				this.state = 521;
				_localctx._rz = this.nullableExpr();
				this.state = 522;
				this.match(MapGrammarParser.COMMA);
				this.state = 523;
				_localctx._tilt = this.nullableExpr();
				this.state = 524;
				this.match(MapGrammarParser.COMMA);
				this.state = 525;
				_localctx._span = this.nullableExpr();
				this.state = 526;
				this.match(MapGrammarParser.COMMA);
				this.state = 527;
				_localctx._interval = this.nullableExpr();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 528;
					this.strkey();
					}
					}
					this.state = 531;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MapGrammarParser.COMMA);
				this.state = 533;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 536;
				_localctx._key = this.expr(0);
				this.state = 537;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 538;
				this.match(MapGrammarParser.DOT);
				this.state = 539;
				_localctx._func = this.match(MapGrammarParser.BEGIN0);
				this.state = 540;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 541;
				_localctx._trackkey = this.nullableExpr();
				this.state = 542;
				this.match(MapGrammarParser.COMMA);
				this.state = 543;
				_localctx._tilt = this.nullableExpr();
				this.state = 544;
				this.match(MapGrammarParser.COMMA);
				this.state = 545;
				_localctx._span = this.nullableExpr();
				this.state = 546;
				this.match(MapGrammarParser.COMMA);
				this.state = 547;
				_localctx._interval = this.nullableExpr();
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 548;
					this.strkey();
					}
					}
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MapGrammarParser.COMMA);
				this.state = 553;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 555;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 556;
				_localctx._key = this.expr(0);
				this.state = 557;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 558;
				this.match(MapGrammarParser.DOT);
				this.state = 559;
				_localctx._func = this.match(MapGrammarParser.END);
				this.state = 560;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 561;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public background(): BackgroundContext {
		let _localctx: BackgroundContext = new BackgroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MapGrammarParser.RULE_background);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(MapGrammarParser.DOT);
			this.state = 566;
			_localctx._func = this.match(MapGrammarParser.CHANGE);
			this.state = 567;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 568;
			_localctx._structurekey = this.nullableExpr();
			this.state = 569;
			this.match(MapGrammarParser.CLS_PAR);
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
	public station(): StationContext {
		let _localctx: StationContext = new StationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MapGrammarParser.RULE_station);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGrammarParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this.match(MapGrammarParser.DOT);
				this.state = 572;
				_localctx._func = this.match(MapGrammarParser.LOAD);
				this.state = 573;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 574;
				_localctx._path = this.string();
				this.state = 575;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.OPN_BRA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 578;
				_localctx._key = this.expr(0);
				this.state = 579;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 580;
				this.match(MapGrammarParser.DOT);
				this.state = 581;
				_localctx._func = this.match(MapGrammarParser.PUT);
				this.state = 582;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 583;
				_localctx._door = this.nullableExpr();
				this.state = 584;
				this.match(MapGrammarParser.COMMA);
				this.state = 585;
				_localctx._margin1 = this.nullableExpr();
				this.state = 586;
				this.match(MapGrammarParser.COMMA);
				this.state = 587;
				_localctx._margin2 = this.nullableExpr();
				this.state = 588;
				this.match(MapGrammarParser.CLS_PAR);
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
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MapGrammarParser.RULE_section);
		let _la: number;
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this.match(MapGrammarParser.DOT);
				this.state = 593;
				_localctx._func = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === MapGrammarParser.BEGIN || _la === MapGrammarParser.BEGIN_NEW)) {
					_localctx._func = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 594;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 595;
				this.nullableExpr();
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapGrammarParser.COMMA) {
					{
					{
					this.state = 596;
					this.exprArgs();
					}
					}
					this.state = 601;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 602;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.match(MapGrammarParser.DOT);
				this.state = 605;
				_localctx._func = this.match(MapGrammarParser.SET_SPEEDLIMIT);
				this.state = 606;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 607;
				this.nullableExpr();
				this.state = 611;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapGrammarParser.COMMA) {
					{
					{
					this.state = 608;
					this.exprArgs();
					}
					}
					this.state = 613;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 614;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public signal(): SignalContext {
		let _localctx: SignalContext = new SignalContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MapGrammarParser.RULE_signal);
		let _la: number;
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 618;
				this.match(MapGrammarParser.DOT);
				this.state = 619;
				_localctx._func = this.match(MapGrammarParser.LOAD);
				this.state = 620;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 621;
				_localctx._path = this.string();
				this.state = 622;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.match(MapGrammarParser.DOT);
				this.state = 625;
				_localctx._func = this.match(MapGrammarParser.SPEEDLIMIT);
				this.state = 626;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 627;
				this.nullableExpr();
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MapGrammarParser.COMMA) {
					{
					{
					this.state = 628;
					this.exprArgs();
					}
					}
					this.state = 633;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 634;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 636;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 637;
				_localctx._key = this.expr(0);
				this.state = 638;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 639;
				this.match(MapGrammarParser.DOT);
				this.state = 640;
				_localctx._func = this.match(MapGrammarParser.PUT);
				this.state = 641;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 642;
				_localctx._sectionArgs = this.nullableExpr();
				this.state = 643;
				this.match(MapGrammarParser.COMMA);
				this.state = 644;
				_localctx._trackkey = this.nullableExpr();
				this.state = 645;
				this.match(MapGrammarParser.COMMA);
				this.state = 646;
				_localctx._x = this.nullableExpr();
				this.state = 647;
				this.match(MapGrammarParser.COMMA);
				this.state = 648;
				_localctx._y = this.nullableExpr();
				this.state = 649;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 651;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 652;
				_localctx._key = this.expr(0);
				this.state = 653;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 654;
				this.match(MapGrammarParser.DOT);
				this.state = 655;
				_localctx._func = this.match(MapGrammarParser.PUT);
				this.state = 656;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 657;
				_localctx._sectionArgs = this.nullableExpr();
				this.state = 658;
				this.match(MapGrammarParser.COMMA);
				this.state = 659;
				_localctx._trackkey = this.nullableExpr();
				this.state = 660;
				this.match(MapGrammarParser.COMMA);
				this.state = 661;
				_localctx._x = this.nullableExpr();
				this.state = 662;
				this.match(MapGrammarParser.COMMA);
				this.state = 663;
				_localctx._y = this.nullableExpr();
				this.state = 664;
				this.match(MapGrammarParser.COMMA);
				this.state = 665;
				_localctx._z = this.nullableExpr();
				this.state = 666;
				this.match(MapGrammarParser.COMMA);
				this.state = 667;
				_localctx._rx = this.nullableExpr();
				this.state = 668;
				this.match(MapGrammarParser.COMMA);
				this.state = 669;
				_localctx._ry = this.nullableExpr();
				this.state = 670;
				this.match(MapGrammarParser.COMMA);
				this.state = 671;
				_localctx._rz = this.nullableExpr();
				this.state = 672;
				this.match(MapGrammarParser.COMMA);
				this.state = 673;
				_localctx._tilt = this.nullableExpr();
				this.state = 674;
				this.match(MapGrammarParser.COMMA);
				this.state = 675;
				_localctx._span = this.nullableExpr();
				this.state = 676;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public beacon(): BeaconContext {
		let _localctx: BeaconContext = new BeaconContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MapGrammarParser.RULE_beacon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(MapGrammarParser.DOT);
			this.state = 681;
			_localctx._func = this.match(MapGrammarParser.PUT);
			this.state = 682;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 683;
			_localctx._type = this.nullableExpr();
			this.state = 684;
			this.match(MapGrammarParser.COMMA);
			this.state = 685;
			_localctx._sectionArgs = this.nullableExpr();
			this.state = 686;
			this.match(MapGrammarParser.COMMA);
			this.state = 687;
			_localctx._sendData = this.nullableExpr();
			this.state = 688;
			this.match(MapGrammarParser.CLS_PAR);
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
	public speedlimit(): SpeedlimitContext {
		let _localctx: SpeedlimitContext = new SpeedlimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MapGrammarParser.RULE_speedlimit);
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 690;
				this.match(MapGrammarParser.DOT);
				this.state = 691;
				_localctx._func = this.match(MapGrammarParser.BEGIN);
				this.state = 692;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 693;
				_localctx._v = this.nullableExpr();
				this.state = 694;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.match(MapGrammarParser.DOT);
				this.state = 697;
				_localctx._func = this.match(MapGrammarParser.END);
				this.state = 698;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 699;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public pretrain(): PretrainContext {
		let _localctx: PretrainContext = new PretrainContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MapGrammarParser.RULE_pretrain);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(MapGrammarParser.DOT);
			this.state = 703;
			_localctx._func = this.match(MapGrammarParser.PASS);
			this.state = 704;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 705;
			this.nullableExpr();
			this.state = 706;
			this.match(MapGrammarParser.CLS_PAR);
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
	public light(): LightContext {
		let _localctx: LightContext = new LightContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MapGrammarParser.RULE_light);
		try {
			this.state = 736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 708;
				this.match(MapGrammarParser.DOT);
				this.state = 709;
				_localctx._func = this.match(MapGrammarParser.AMBIENT);
				this.state = 710;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 711;
				_localctx._red = this.nullableExpr();
				this.state = 712;
				this.match(MapGrammarParser.COMMA);
				this.state = 713;
				_localctx._green = this.nullableExpr();
				this.state = 714;
				this.match(MapGrammarParser.COMMA);
				this.state = 715;
				_localctx._blue = this.nullableExpr();
				this.state = 716;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 718;
				this.match(MapGrammarParser.DOT);
				this.state = 719;
				_localctx._func = this.match(MapGrammarParser.DIFFUSE);
				this.state = 720;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 721;
				_localctx._red = this.nullableExpr();
				this.state = 722;
				this.match(MapGrammarParser.COMMA);
				this.state = 723;
				_localctx._green = this.nullableExpr();
				this.state = 724;
				this.match(MapGrammarParser.COMMA);
				this.state = 725;
				_localctx._blue = this.nullableExpr();
				this.state = 726;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 728;
				this.match(MapGrammarParser.DOT);
				this.state = 729;
				_localctx._func = this.match(MapGrammarParser.DIRECTION);
				this.state = 730;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 731;
				_localctx._pitch = this.nullableExpr();
				this.state = 732;
				this.match(MapGrammarParser.COMMA);
				this.state = 733;
				_localctx._yaw = this.nullableExpr();
				this.state = 734;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public fog(): FogContext {
		let _localctx: FogContext = new FogContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MapGrammarParser.RULE_fog);
		let _la: number;
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 738;
				this.match(MapGrammarParser.DOT);
				this.state = 739;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 740;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 741;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 742;
				this.match(MapGrammarParser.DOT);
				this.state = 743;
				_localctx._func = this.match(MapGrammarParser.INTERPOLATE);
				this.state = 744;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 745;
				_localctx._densityE = this.expr(0);
				this.state = 746;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 748;
				this.match(MapGrammarParser.DOT);
				this.state = 749;
				_localctx._func = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === MapGrammarParser.SET || _la === MapGrammarParser.INTERPOLATE)) {
					_localctx._func = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 750;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 751;
				_localctx._density = this.nullableExpr();
				this.state = 752;
				this.match(MapGrammarParser.COMMA);
				this.state = 753;
				_localctx._red = this.nullableExpr();
				this.state = 754;
				this.match(MapGrammarParser.COMMA);
				this.state = 755;
				_localctx._green = this.nullableExpr();
				this.state = 756;
				this.match(MapGrammarParser.COMMA);
				this.state = 757;
				_localctx._blue = this.nullableExpr();
				this.state = 758;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public drawdistance(): DrawdistanceContext {
		let _localctx: DrawdistanceContext = new DrawdistanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MapGrammarParser.RULE_drawdistance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this.match(MapGrammarParser.DOT);
			this.state = 763;
			_localctx._func = this.match(MapGrammarParser.CHANGE);
			this.state = 764;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 765;
			_localctx._value = this.nullableExpr();
			this.state = 766;
			this.match(MapGrammarParser.CLS_PAR);
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
	public cabilluminance(): CabilluminanceContext {
		let _localctx: CabilluminanceContext = new CabilluminanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MapGrammarParser.RULE_cabilluminance);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.match(MapGrammarParser.DOT);
			this.state = 769;
			_localctx._func = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === MapGrammarParser.SET || _la === MapGrammarParser.INTERPOLATE)) {
				_localctx._func = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 770;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MapGrammarParser.NUM - 66)) | (1 << (MapGrammarParser.DISTANCE - 66)) | (1 << (MapGrammarParser.PLUS - 66)) | (1 << (MapGrammarParser.MINUS - 66)) | (1 << (MapGrammarParser.ABS - 66)) | (1 << (MapGrammarParser.ATAN2 - 66)) | (1 << (MapGrammarParser.CEIL - 66)) | (1 << (MapGrammarParser.COS - 66)) | (1 << (MapGrammarParser.EXP - 66)) | (1 << (MapGrammarParser.FLOOR - 66)) | (1 << (MapGrammarParser.LOG - 66)) | (1 << (MapGrammarParser.POW - 66)) | (1 << (MapGrammarParser.RAND - 66)) | (1 << (MapGrammarParser.SIN - 66)) | (1 << (MapGrammarParser.SQRT - 66)) | (1 << (MapGrammarParser.OPN_PAR - 66)) | (1 << (MapGrammarParser.VAR_START - 66)) | (1 << (MapGrammarParser.QUOTE - 66)))) !== 0)) {
				{
				this.state = 771;
				_localctx._value = this.expr(0);
				}
			}

			this.state = 774;
			this.match(MapGrammarParser.CLS_PAR);
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
	public irregularity(): IrregularityContext {
		let _localctx: IrregularityContext = new IrregularityContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MapGrammarParser.RULE_irregularity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(MapGrammarParser.DOT);
			this.state = 777;
			_localctx._func = this.match(MapGrammarParser.CHANGE);
			this.state = 778;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 779;
			_localctx._x = this.nullableExpr();
			this.state = 780;
			this.match(MapGrammarParser.COMMA);
			this.state = 781;
			_localctx._y = this.nullableExpr();
			this.state = 782;
			this.match(MapGrammarParser.COMMA);
			this.state = 783;
			_localctx._r = this.nullableExpr();
			this.state = 784;
			this.match(MapGrammarParser.COMMA);
			this.state = 785;
			_localctx._lx = this.nullableExpr();
			this.state = 786;
			this.match(MapGrammarParser.COMMA);
			this.state = 787;
			_localctx._ly = this.nullableExpr();
			this.state = 788;
			this.match(MapGrammarParser.COMMA);
			this.state = 789;
			_localctx._lr = this.nullableExpr();
			this.state = 790;
			this.match(MapGrammarParser.CLS_PAR);
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
	public adhesion(): AdhesionContext {
		let _localctx: AdhesionContext = new AdhesionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MapGrammarParser.RULE_adhesion);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 792;
				this.match(MapGrammarParser.DOT);
				this.state = 793;
				_localctx._func = this.match(MapGrammarParser.CHANGE);
				this.state = 794;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 795;
				_localctx._a = this.nullableExpr();
				this.state = 796;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 798;
				this.match(MapGrammarParser.DOT);
				this.state = 799;
				_localctx._func = this.match(MapGrammarParser.CHANGE);
				this.state = 800;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 801;
				_localctx._a = this.nullableExpr();
				this.state = 802;
				this.match(MapGrammarParser.COMMA);
				this.state = 803;
				_localctx._b = this.nullableExpr();
				this.state = 804;
				this.match(MapGrammarParser.COMMA);
				this.state = 805;
				_localctx._c = this.nullableExpr();
				this.state = 806;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public sound(): SoundContext {
		let _localctx: SoundContext = new SoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MapGrammarParser.RULE_sound);
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGrammarParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 810;
				this.match(MapGrammarParser.DOT);
				this.state = 811;
				_localctx._func = this.match(MapGrammarParser.LOAD);
				this.state = 812;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 813;
				_localctx._path = this.string();
				this.state = 814;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.OPN_BRA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 816;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 817;
				_localctx._key = this.expr(0);
				this.state = 818;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 819;
				this.match(MapGrammarParser.DOT);
				this.state = 820;
				_localctx._func = this.match(MapGrammarParser.PLAY);
				this.state = 821;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 822;
				this.match(MapGrammarParser.CLS_PAR);
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
	public sound3d(): Sound3dContext {
		let _localctx: Sound3dContext = new Sound3dContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MapGrammarParser.RULE_sound3d);
		try {
			this.state = 843;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGrammarParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 826;
				this.match(MapGrammarParser.DOT);
				this.state = 827;
				_localctx._func = this.match(MapGrammarParser.LOAD);
				this.state = 828;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 829;
				_localctx._path = this.string();
				this.state = 830;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.OPN_BRA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 832;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 833;
				_localctx._key = this.expr(0);
				this.state = 834;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 835;
				this.match(MapGrammarParser.DOT);
				this.state = 836;
				_localctx._func = this.match(MapGrammarParser.PUT);
				this.state = 837;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 838;
				_localctx._x = this.nullableExpr();
				this.state = 839;
				this.match(MapGrammarParser.COMMA);
				this.state = 840;
				_localctx._y = this.nullableExpr();
				this.state = 841;
				this.match(MapGrammarParser.CLS_PAR);
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
	public rollingnoise(): RollingnoiseContext {
		let _localctx: RollingnoiseContext = new RollingnoiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MapGrammarParser.RULE_rollingnoise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(MapGrammarParser.DOT);
			this.state = 846;
			_localctx._func = this.match(MapGrammarParser.CHANGE);
			this.state = 847;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 848;
			_localctx._index = this.nullableExpr();
			this.state = 849;
			this.match(MapGrammarParser.CLS_PAR);
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
	public flangenoise(): FlangenoiseContext {
		let _localctx: FlangenoiseContext = new FlangenoiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MapGrammarParser.RULE_flangenoise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.match(MapGrammarParser.DOT);
			this.state = 852;
			_localctx._func = this.match(MapGrammarParser.CHANGE);
			this.state = 853;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 854;
			_localctx._index = this.nullableExpr();
			this.state = 855;
			this.match(MapGrammarParser.CLS_PAR);
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
	public jointnoise(): JointnoiseContext {
		let _localctx: JointnoiseContext = new JointnoiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MapGrammarParser.RULE_jointnoise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(MapGrammarParser.DOT);
			this.state = 858;
			_localctx._func = this.match(MapGrammarParser.PLAY);
			this.state = 859;
			this.match(MapGrammarParser.OPN_PAR);
			this.state = 860;
			_localctx._index = this.nullableExpr();
			this.state = 861;
			this.match(MapGrammarParser.CLS_PAR);
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
	public train(): TrainContext {
		let _localctx: TrainContext = new TrainContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MapGrammarParser.RULE_train);
		try {
			this.state = 912;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 863;
				this.match(MapGrammarParser.DOT);
				this.state = 864;
				_localctx._func = this.match(MapGrammarParser.ADD);
				this.state = 865;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 866;
				_localctx._trainkey = this.nullableExpr();
				this.state = 867;
				this.match(MapGrammarParser.COMMA);
				this.state = 868;
				_localctx._path = this.expr(0);
				this.state = 869;
				this.match(MapGrammarParser.COMMA);
				this.state = 870;
				_localctx._trackkey = this.nullableExpr();
				this.state = 871;
				this.match(MapGrammarParser.COMMA);
				this.state = 872;
				_localctx._direction = this.nullableExpr();
				this.state = 873;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 876;
				_localctx._key = this.expr(0);
				this.state = 877;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 878;
				this.match(MapGrammarParser.DOT);
				this.state = 879;
				_localctx._func = this.match(MapGrammarParser.LOAD);
				this.state = 880;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 881;
				_localctx._path = this.expr(0);
				this.state = 882;
				this.match(MapGrammarParser.COMMA);
				this.state = 883;
				_localctx._trackkey = this.nullableExpr();
				this.state = 884;
				this.match(MapGrammarParser.COMMA);
				this.state = 885;
				_localctx._direction = this.nullableExpr();
				this.state = 886;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 888;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 889;
				_localctx._key = this.expr(0);
				this.state = 890;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 891;
				this.match(MapGrammarParser.DOT);
				this.state = 892;
				_localctx._func = this.match(MapGrammarParser.ENABLE);
				this.state = 893;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 894;
				_localctx._time = this.nullableExpr();
				this.state = 895;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 897;
				this.match(MapGrammarParser.OPN_BRA);
				this.state = 898;
				_localctx._key = this.expr(0);
				this.state = 899;
				this.match(MapGrammarParser.CLS_BRA);
				this.state = 900;
				this.match(MapGrammarParser.DOT);
				this.state = 901;
				_localctx._func = this.match(MapGrammarParser.STOP);
				this.state = 902;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 903;
				_localctx._decelerate = this.nullableExpr();
				this.state = 904;
				this.match(MapGrammarParser.COMMA);
				this.state = 905;
				_localctx._stoptime = this.nullableExpr();
				this.state = 906;
				this.match(MapGrammarParser.COMMA);
				this.state = 907;
				_localctx._accelerate = this.nullableExpr();
				this.state = 908;
				this.match(MapGrammarParser.COMMA);
				this.state = 909;
				_localctx._speed = this.nullableExpr();
				this.state = 910;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public strkey(): StrkeyContext {
		let _localctx: StrkeyContext = new StrkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MapGrammarParser.RULE_strkey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(MapGrammarParser.COMMA);
			this.state = 915;
			_localctx._key = this.string();
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
	public exprArgs(): ExprArgsContext {
		let _localctx: ExprArgsContext = new ExprArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MapGrammarParser.RULE_exprArgs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(MapGrammarParser.COMMA);
			this.state = 918;
			_localctx._arg = this.nullableExpr();
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
	public varAssign(): VarAssignContext {
		let _localctx: VarAssignContext = new VarAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MapGrammarParser.RULE_varAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			_localctx._v = this.var();
			this.state = 921;
			this.match(MapGrammarParser.EQUAL);
			this.state = 922;
			this.expr(0);
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
	public legacy(): LegacyContext {
		let _localctx: LegacyContext = new LegacyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MapGrammarParser.RULE_legacy);
		try {
			this.state = 958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 924;
				this.match(MapGrammarParser.DOT);
				this.state = 925;
				_localctx._func = this.match(MapGrammarParser.FOG);
				this.state = 926;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 927;
				_localctx._arg_start = this.nullableExpr();
				this.state = 928;
				this.match(MapGrammarParser.COMMA);
				this.state = 929;
				_localctx._arg_end = this.nullableExpr();
				this.state = 930;
				this.match(MapGrammarParser.COMMA);
				this.state = 931;
				_localctx._red = this.nullableExpr();
				this.state = 932;
				this.match(MapGrammarParser.COMMA);
				this.state = 933;
				_localctx._green = this.nullableExpr();
				this.state = 934;
				this.match(MapGrammarParser.COMMA);
				this.state = 935;
				_localctx._blue = this.nullableExpr();
				this.state = 936;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 938;
				this.match(MapGrammarParser.DOT);
				this.state = 939;
				_localctx._func = this.match(MapGrammarParser.CURVE);
				this.state = 940;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 941;
				_localctx._radius = this.nullableExpr();
				this.state = 942;
				this.match(MapGrammarParser.COMMA);
				this.state = 943;
				_localctx._cant = this.nullableExpr();
				this.state = 944;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 946;
				this.match(MapGrammarParser.DOT);
				this.state = 947;
				_localctx._func = this.match(MapGrammarParser.PITCH);
				this.state = 948;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 949;
				_localctx._rate = this.nullableExpr();
				this.state = 950;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 952;
				this.match(MapGrammarParser.DOT);
				this.state = 953;
				_localctx._func = this.match(MapGrammarParser.TURN);
				this.state = 954;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 955;
				_localctx._slope = this.nullableExpr();
				this.state = 956;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
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
	public nullableExpr(): NullableExprContext {
		let _localctx: NullableExprContext = new NullableExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MapGrammarParser.RULE_nullableExpr);
		try {
			this.state = 963;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGrammarParser.NUM:
			case MapGrammarParser.DISTANCE:
			case MapGrammarParser.PLUS:
			case MapGrammarParser.MINUS:
			case MapGrammarParser.ABS:
			case MapGrammarParser.ATAN2:
			case MapGrammarParser.CEIL:
			case MapGrammarParser.COS:
			case MapGrammarParser.EXP:
			case MapGrammarParser.FLOOR:
			case MapGrammarParser.LOG:
			case MapGrammarParser.POW:
			case MapGrammarParser.RAND:
			case MapGrammarParser.SIN:
			case MapGrammarParser.SQRT:
			case MapGrammarParser.OPN_PAR:
			case MapGrammarParser.VAR_START:
			case MapGrammarParser.QUOTE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 960;
				this.expr(0);
				}
				break;
			case MapGrammarParser.NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 961;
				_localctx._nullSyntax = this.match(MapGrammarParser.NULL);
				}
				break;
			case MapGrammarParser.COMMA:
			case MapGrammarParser.CLS_PAR:
				this.enterOuterAlt(_localctx, 3);
				// tslint:disable-next-line:no-empty
				{
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, MapGrammarParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MapGrammarParser.OPN_PAR:
				{
				_localctx = new ParensExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 966;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 967;
				this.expr(0);
				this.state = 968;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.PLUS:
			case MapGrammarParser.MINUS:
				{
				_localctx = new UnaryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 970;
				(_localctx as UnaryExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === MapGrammarParser.PLUS || _la === MapGrammarParser.MINUS)) {
					(_localctx as UnaryExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 971;
				this.expr(18);
				}
				break;
			case MapGrammarParser.ABS:
				{
				_localctx = new AbsExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 972;
				(_localctx as AbsExprContext)._func = this.match(MapGrammarParser.ABS);
				this.state = 973;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 974;
				(_localctx as AbsExprContext)._value = this.expr(0);
				this.state = 975;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.ATAN2:
				{
				_localctx = new Atan2ExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 977;
				(_localctx as Atan2ExprContext)._func = this.match(MapGrammarParser.ATAN2);
				this.state = 978;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 979;
				(_localctx as Atan2ExprContext)._y = this.expr(0);
				this.state = 980;
				(_localctx as Atan2ExprContext)._x = this.expr(0);
				this.state = 981;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.CEIL:
				{
				_localctx = new CeilExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 983;
				(_localctx as CeilExprContext)._func = this.match(MapGrammarParser.CEIL);
				this.state = 984;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 985;
				(_localctx as CeilExprContext)._value = this.expr(0);
				this.state = 986;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.COS:
				{
				_localctx = new CosExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 988;
				(_localctx as CosExprContext)._func = this.match(MapGrammarParser.COS);
				this.state = 989;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 990;
				(_localctx as CosExprContext)._value = this.expr(0);
				this.state = 991;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.EXP:
				{
				_localctx = new ExpExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 993;
				(_localctx as ExpExprContext)._func = this.match(MapGrammarParser.EXP);
				this.state = 994;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 995;
				(_localctx as ExpExprContext)._value = this.expr(0);
				this.state = 996;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.FLOOR:
				{
				_localctx = new FloorExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 998;
				(_localctx as FloorExprContext)._func = this.match(MapGrammarParser.FLOOR);
				this.state = 999;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 1000;
				(_localctx as FloorExprContext)._value = this.expr(0);
				this.state = 1001;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.LOG:
				{
				_localctx = new LogExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1003;
				(_localctx as LogExprContext)._func = this.match(MapGrammarParser.LOG);
				this.state = 1004;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 1005;
				(_localctx as LogExprContext)._value = this.expr(0);
				this.state = 1006;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.POW:
				{
				_localctx = new PowExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1008;
				(_localctx as PowExprContext)._func = this.match(MapGrammarParser.POW);
				this.state = 1009;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 1010;
				(_localctx as PowExprContext)._x = this.expr(0);
				this.state = 1011;
				(_localctx as PowExprContext)._y = this.expr(0);
				this.state = 1012;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.RAND:
				{
				_localctx = new RandExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1014;
				(_localctx as RandExprContext)._func = this.match(MapGrammarParser.RAND);
				this.state = 1015;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MapGrammarParser.NUM - 66)) | (1 << (MapGrammarParser.DISTANCE - 66)) | (1 << (MapGrammarParser.PLUS - 66)) | (1 << (MapGrammarParser.MINUS - 66)) | (1 << (MapGrammarParser.ABS - 66)) | (1 << (MapGrammarParser.ATAN2 - 66)) | (1 << (MapGrammarParser.CEIL - 66)) | (1 << (MapGrammarParser.COS - 66)) | (1 << (MapGrammarParser.EXP - 66)) | (1 << (MapGrammarParser.FLOOR - 66)) | (1 << (MapGrammarParser.LOG - 66)) | (1 << (MapGrammarParser.POW - 66)) | (1 << (MapGrammarParser.RAND - 66)) | (1 << (MapGrammarParser.SIN - 66)) | (1 << (MapGrammarParser.SQRT - 66)) | (1 << (MapGrammarParser.OPN_PAR - 66)) | (1 << (MapGrammarParser.VAR_START - 66)) | (1 << (MapGrammarParser.QUOTE - 66)))) !== 0)) {
					{
					this.state = 1016;
					(_localctx as RandExprContext)._value = this.expr(0);
					}
				}

				this.state = 1019;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.SIN:
				{
				_localctx = new SinExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1020;
				(_localctx as SinExprContext)._func = this.match(MapGrammarParser.SIN);
				this.state = 1021;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 1022;
				(_localctx as SinExprContext)._value = this.expr(0);
				this.state = 1023;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.SQRT:
				{
				_localctx = new SqrtExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1025;
				(_localctx as SqrtExprContext)._func = this.match(MapGrammarParser.SQRT);
				this.state = 1026;
				this.match(MapGrammarParser.OPN_PAR);
				this.state = 1027;
				(_localctx as SqrtExprContext)._value = this.expr(0);
				this.state = 1028;
				this.match(MapGrammarParser.CLS_PAR);
				}
				break;
			case MapGrammarParser.VAR_START:
				{
				_localctx = new VarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1030;
				(_localctx as VarExprContext)._v = this.var();
				}
				break;
			case MapGrammarParser.NUM:
				{
				_localctx = new NumberExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1031;
				(_localctx as NumberExprContext)._num = this.match(MapGrammarParser.NUM);
				}
				break;
			case MapGrammarParser.QUOTE:
				{
				_localctx = new StringExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1032;
				(_localctx as StringExprContext)._str = this.string();
				}
				break;
			case MapGrammarParser.DISTANCE:
				{
				_localctx = new DistanceExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1033;
				(_localctx as DistanceExprContext)._dist = this.match(MapGrammarParser.DISTANCE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1044;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1042;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MapGrammarParser.RULE_expr);
						this.state = 1036;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 1037;
						(_localctx as InfixExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === MapGrammarParser.MULT || _la === MapGrammarParser.DIV)) {
							(_localctx as InfixExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1038;
						(_localctx as InfixExprContext)._right = this.expr(18);
						}
						break;

					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MapGrammarParser.RULE_expr);
						this.state = 1039;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 1040;
						(_localctx as InfixExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (MapGrammarParser.PLUS - 70)) | (1 << (MapGrammarParser.MINUS - 70)) | (1 << (MapGrammarParser.MOD - 70)))) !== 0))) {
							(_localctx as InfixExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1041;
						(_localctx as InfixExprContext)._right = this.expr(17);
						}
						break;
					}
					}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MapGrammarParser.RULE_var);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(MapGrammarParser.VAR_START);
			this.state = 1048;
			_localctx._v = this.match(MapGrammarParser.VAR);
			 _localctx.varName =  (_localctx._v != null ? _localctx._v.text : undefined) ;
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
		this.enterRule(_localctx, 70, MapGrammarParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.match(MapGrammarParser.QUOTE);
			this.state = 1052;
			_localctx._v = this.string_text();
			this.state = 1053;
			this.match(MapGrammarParser.RQUOTE);
			 _localctx.value =  (_localctx._v != null ? this._input.getTextFromRange(_localctx._v._start, _localctx._v._stop) : undefined) ;
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
	public string_text(): String_textContext {
		let _localctx: String_textContext = new String_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MapGrammarParser.RULE_string_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGrammarParser.CHAR) {
				{
				{
				this.state = 1056;
				this.match(MapGrammarParser.CHAR);
				}
				}
				this.state = 1061;
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
	// @RuleVersion(0)
	public encoding(): EncodingContext {
		let _localctx: EncodingContext = new EncodingContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MapGrammarParser.RULE_encoding);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			this.match(MapGrammarParser.SELECT_ENCODE);
			this.state = 1063;
			_localctx._v = this.encode_string();
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MapGrammarParser.ENCODE_END) {
				{
				this.state = 1064;
				this.match(MapGrammarParser.ENCODE_END);
				}
			}

			_localctx.value =  (_localctx._v != null ? this._input.getTextFromRange(_localctx._v._start, _localctx._v._stop) : undefined); 
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
	public encode_string(): Encode_stringContext {
		let _localctx: Encode_stringContext = new Encode_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MapGrammarParser.RULE_encode_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MapGrammarParser.ENCODE_CHAR) {
				{
				{
				this.state = 1069;
				this.match(MapGrammarParser.ENCODE_CHAR);
				}
				}
				this.state = 1074;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 33:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03f\u0436\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x05\x02U\n\x02\x03\x02\x03\x02\x03\x02\x07\x02Z\n\x02\f\x02\x0E" +
		"\x02]\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\x97\n\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\xB9\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xD9" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xEF\n\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01A5\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01BB\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01F4\n\t\x03\t\x03\t\x05\t\u01F8\n\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x06\n\u0214\n\n\r\n\x0E\n\u0215\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x06\n\u0228\n\n\r\n\x0E\n\u0229\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u0236\n\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0251\n\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0258\n\r\f\r\x0E\r\u025B\v\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0264\n\r\f\r\x0E\r\u0267\v\r\x03" +
		"\r\x03\r\x05\r\u026B\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0278\n\x0E\f\x0E\x0E" +
		"\x0E\u027B\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u02A9\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u02BF\n\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u02E3\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u02FB\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0307" +
		"\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
		"\u032B\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u033B\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\u034E\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0393\n\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x05!\u03C1\n!\x03\"\x03\"\x03\"\x05\"\u03C6\n\"" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u03FC\n#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x05#\u040D\n#\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u0415\n#\f#\x0E#\u0418" +
		"\v#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03&\x07&\u0424\n&\f" +
		"&\x0E&\u0427\v&\x03\'\x03\'\x03\'\x05\'\u042C\n\'\x03\'\x03\'\x03(\x07" +
		"(\u0431\n(\f(\x0E(\u0434\v(\x03(\x02\x02\x03D)\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"\x02\n\x03\x02#$\x04\x02))++\x04\x02)),,\x04\x02))--\x04\x02\'\'//\x03" +
		"\x02HI\x03\x02JK\x04\x02HILL\u0481\x02P\x03\x02\x02\x02\x04\x96\x03\x02" +
		"\x02\x02\x06\x98\x03\x02\x02\x02\b\x9A\x03\x02\x02\x02\n\xD8\x03\x02\x02" +
		"\x02\f\xEE\x03\x02\x02\x02\x0E\u01BA\x03\x02\x02\x02\x10\u01F7\x03\x02" +
		"\x02\x02\x12\u0235\x03\x02\x02\x02\x14\u0237\x03\x02\x02\x02\x16\u0250" +
		"\x03\x02\x02\x02\x18\u026A\x03\x02\x02\x02\x1A\u02A8\x03\x02\x02\x02\x1C" +
		"\u02AA\x03\x02\x02\x02\x1E\u02BE\x03\x02\x02\x02 \u02C0\x03\x02\x02\x02" +
		"\"\u02E2\x03\x02\x02\x02$\u02FA\x03\x02\x02\x02&\u02FC\x03\x02\x02\x02" +
		"(\u0302\x03\x02\x02\x02*\u030A\x03\x02\x02\x02,\u032A\x03\x02\x02\x02" +
		".\u033A\x03\x02\x02\x020\u034D\x03\x02\x02\x022\u034F\x03\x02\x02\x02" +
		"4\u0355\x03\x02\x02\x026\u035B\x03\x02\x02\x028\u0392\x03\x02\x02\x02" +
		":\u0394\x03\x02\x02\x02<\u0397\x03\x02\x02\x02>\u039A\x03\x02\x02\x02" +
		"@\u03C0\x03\x02\x02\x02B\u03C5\x03\x02\x02\x02D\u040C\x03\x02\x02\x02" +
		"F\u0419\x03\x02\x02\x02H\u041D\x03\x02\x02\x02J\u0425\x03\x02\x02\x02" +
		"L\u0428\x03\x02\x02\x02N\u0432\x03\x02\x02\x02PQ\x07\x03\x02\x02QR\x07" +
		"\x04\x02\x02RT\x07D\x02\x02SU\x05L\'\x02TS\x03\x02\x02\x02TU\x03\x02\x02" +
		"\x02U[\x03\x02\x02\x02VW\x05\x04\x03\x02WX\x07A\x02\x02XZ\x03\x02\x02" +
		"\x02YV\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02" +
		"\x02\x02\\^\x03\x02\x02\x02][\x03\x02\x02\x02^_\x07\x02\x02\x03_\x03\x03" +
		"\x02\x02\x02`\x97\x05\x06\x04\x02ab\x07\x06\x02\x02b\x97\x05\b\x05\x02" +
		"cd\x07\x07\x02\x02d\x97\x05\n\x06\x02ef\x07\b\x02\x02f\x97\x05\f\x07\x02" +
		"gh\x07\t\x02\x02h\x97\x05\x0E\b\x02ij\x07\n\x02\x02j\x97\x05\x10\t\x02" +
		"kl\x07\v\x02\x02l\x97\x05\x12\n\x02mn\x07\f\x02\x02n\x97\x05\x14\v\x02" +
		"op\x07\r\x02\x02p\x97\x05\x16\f\x02qr\x07\x0E\x02\x02r\x97\x05\x18\r\x02" +
		"st\x07\x0F\x02\x02t\x97\x05\x1A\x0E\x02uv\x07\x10\x02\x02v\x97\x05\x1C" +
		"\x0F\x02wx\x07\x11\x02\x02x\x97\x05\x1E\x10\x02yz\x07\x12\x02\x02z\x97" +
		"\x05 \x11\x02{|\x07\x13\x02\x02|\x97\x05\"\x12\x02}~\x07\x14\x02\x02~" +
		"\x97\x05$\x13\x02\x7F\x80\x07\x15\x02\x02\x80\x97\x05&\x14\x02\x81\x82" +
		"\x07\x16\x02\x02\x82\x97\x05(\x15\x02\x83\x84\x07\x17\x02\x02\x84\x97" +
		"\x05*\x16\x02\x85\x86\x07\x18\x02\x02\x86\x97\x05,\x17\x02\x87\x88\x07" +
		"\x19\x02\x02\x88\x97\x05.\x18\x02\x89\x8A\x07\x1A\x02\x02\x8A\x97\x05" +
		"0\x19\x02\x8B\x8C\x07\x1B\x02\x02\x8C\x97\x052\x1A\x02\x8D\x8E\x07\x1C" +
		"\x02\x02\x8E\x97\x054\x1B\x02\x8F\x90\x07\x1D\x02\x02\x90\x97\x056\x1C" +
		"\x02\x91\x92\x07\x1E\x02\x02\x92\x97\x058\x1D\x02\x93\x97\x05> \x02\x94" +
		"\x95\x07\x1F\x02\x02\x95\x97\x05@!\x02\x96`\x03\x02\x02\x02\x96a\x03\x02" +
		"\x02\x02\x96c\x03\x02\x02\x02\x96e\x03\x02\x02\x02\x96g\x03\x02\x02\x02" +
		"\x96i\x03\x02\x02\x02\x96k\x03\x02\x02\x02\x96m\x03\x02\x02\x02\x96o\x03" +
		"\x02\x02\x02\x96q\x03\x02\x02\x02\x96s\x03\x02\x02\x02\x96u\x03\x02\x02" +
		"\x02\x96w\x03\x02\x02\x02\x96y\x03\x02\x02\x02\x96{\x03\x02\x02\x02\x96" +
		"}\x03\x02\x02\x02\x96\x7F\x03\x02\x02\x02\x96\x81\x03\x02\x02\x02\x96" +
		"\x83\x03\x02\x02\x02\x96\x85\x03\x02\x02\x02\x96\x87\x03\x02\x02\x02\x96" +
		"\x89\x03\x02\x02\x02\x96\x8B\x03\x02\x02\x02\x96\x8D\x03\x02\x02\x02\x96" +
		"\x8F\x03\x02\x02\x02\x96\x91\x03\x02\x02\x02\x96\x93\x03\x02\x02\x02\x96" +
		"\x94\x03\x02\x02\x02\x97\x05\x03\x02\x02\x02\x98\x99\x05D#\x02\x99\x07" +
		"\x03\x02\x02\x02\x9A\x9B\x05H%\x02\x9B\t\x03\x02\x02\x02\x9C\x9D\x07B" +
		"\x02\x02\x9D\x9E\t\x02\x02\x02\x9E\x9F\x07X\x02\x02\x9F\xA0\x05B\"\x02" +
		"\xA0\xA1\x07Y\x02\x02\xA1\xD9\x03\x02\x02\x02\xA2\xA3\x07B\x02\x02\xA3" +
		"\xA4\x07%\x02\x02\xA4\xA5\x07X\x02\x02\xA5\xA6\x05B\"\x02\xA6\xA7\x07" +
		"Y\x02\x02\xA7\xD9\x03\x02\x02\x02\xA8\xA9\x07B\x02\x02\xA9\xAA\x07&\x02" +
		"\x02\xAA\xAB\x07X\x02\x02\xAB\xAC\x05B\"\x02\xAC\xAD\x07Y\x02\x02\xAD" +
		"\xD9\x03\x02\x02\x02\xAE\xAF\x07B\x02\x02\xAF\xB0\x07(\x02\x02\xB0\xB1" +
		"\x07X\x02\x02\xB1\xD9\x07Y\x02\x02\xB2\xB3\x07B\x02\x02\xB3\xB4\t\x03" +
		"\x02\x02\xB4\xB5\x07X\x02\x02\xB5\xB8\x05B\"\x02\xB6\xB7\x07C\x02\x02" +
		"\xB7\xB9\x05B\"\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9" +
		"\xBA\x03\x02\x02\x02\xBA\xBB\x07Y\x02\x02\xBB\xD9\x03\x02\x02\x02\xBC" +
		"\xBD\x07B\x02\x02\xBD\xBE\x07.\x02\x02\xBE\xBF\x07X\x02\x02\xBF\xD9\x07" +
		"Y\x02\x02\xC0\xC1\x07B\x02\x02\xC1\xC2\x07/\x02\x02\xC2\xC3\x07X\x02\x02" +
		"\xC3\xD9\x07Y\x02\x02\xC4\xC5\x07B\x02\x02\xC5\xC6\x07/\x02\x02\xC6\xC7" +
		"\x07X\x02\x02\xC7\xC8\x05D#\x02\xC8\xC9\x07Y\x02\x02\xC9\xD9\x03\x02\x02" +
		"\x02\xCA\xCB\x07B\x02\x02\xCB\xCC\x07/\x02\x02\xCC\xCD\x07X\x02\x02\xCD" +
		"\xCE\x05B\"\x02\xCE\xCF\x07C\x02\x02\xCF\xD0\x05B\"\x02\xD0\xD1\x07Y\x02" +
		"\x02\xD1\xD9\x03\x02\x02\x02\xD2\xD3\x07B\x02\x02\xD3\xD4\x070\x02\x02" +
		"\xD4\xD5\x07X\x02\x02\xD5\xD6\x05B\"\x02\xD6\xD7\x07Y\x02\x02\xD7\xD9" +
		"\x03\x02\x02\x02\xD8\x9C\x03\x02\x02\x02\xD8\xA2\x03\x02\x02\x02\xD8\xA8" +
		"\x03\x02\x02\x02\xD8\xAE\x03\x02\x02\x02\xD8\xB2\x03\x02\x02\x02\xD8\xBC" +
		"\x03\x02\x02\x02\xD8\xC0\x03\x02\x02\x02\xD8\xC4\x03\x02\x02\x02\xD8\xCA" +
		"\x03\x02\x02\x02\xD8\xD2\x03\x02\x02\x02\xD9\v\x03\x02\x02\x02\xDA\xDB" +
		"\x07B\x02\x02\xDB\xDC\x07(\x02\x02\xDC\xDD\x07X\x02\x02\xDD\xEF\x07Y\x02" +
		"\x02\xDE\xDF\x07B\x02\x02\xDF\xE0\t\x04\x02\x02\xE0\xE1\x07X\x02\x02\xE1" +
		"\xE2\x05B\"\x02\xE2\xE3\x07Y\x02\x02\xE3\xEF\x03\x02\x02\x02\xE4\xE5\x07" +
		"B\x02\x02\xE5\xE6\x07.\x02\x02\xE6\xE7\x07X\x02\x02\xE7\xEF\x07Y\x02\x02" +
		"\xE8\xE9\x07B\x02\x02\xE9\xEA\x07/\x02\x02\xEA\xEB\x07X\x02\x02\xEB\xEC" +
		"\x05D#\x02\xEC\xED\x07Y\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xDA\x03\x02" +
		"\x02\x02\xEE\xDE\x03\x02\x02\x02\xEE\xE4\x03\x02\x02\x02\xEE\xE8\x03\x02" +
		"\x02\x02\xEF\r\x03\x02\x02\x02\xF0\xF1\x07Z\x02\x02\xF1\xF2\x05D#\x02" +
		"\xF2\xF3\x07[\x02\x02\xF3\xF4\x07B\x02\x02\xF4\xF5\x07 \x02\x02\xF5\xF6" +
		"\x07B\x02\x02\xF6\xF7\x07/\x02\x02\xF7\xF8\x07X\x02\x02\xF8\xF9\x07Y\x02" +
		"\x02\xF9\u01BB\x03\x02\x02\x02\xFA\xFB\x07Z\x02\x02\xFB\xFC\x05D#\x02" +
		"\xFC\xFD\x07[\x02\x02\xFD\xFE\x07B\x02\x02\xFE\xFF\x07 \x02\x02\xFF\u0100" +
		"\x07B\x02\x02\u0100\u0101\x07/\x02\x02\u0101\u0102\x07X\x02\x02\u0102" +
		"\u0103\x05D#\x02\u0103\u0104\x07Y\x02\x02\u0104\u01BB\x03\x02\x02\x02" +
		"\u0105\u0106\x07Z\x02\x02\u0106\u0107\x05D#\x02\u0107\u0108\x07[\x02\x02" +
		"\u0108\u0109\x07B\x02\x02\u0109\u010A\x07 \x02\x02\u010A\u010B\x07B\x02" +
		"\x02\u010B\u010C\x07/\x02\x02\u010C\u010D\x07X\x02\x02\u010D\u010E\x05" +
		"B\"\x02\u010E\u010F\x07C\x02\x02\u010F\u0110\x05B\"\x02\u0110\u0111\x07" +
		"Y\x02\x02\u0111\u01BB\x03\x02\x02\x02\u0112\u0113\x07Z\x02\x02\u0113\u0114" +
		"\x05D#\x02\u0114\u0115\x07[\x02\x02\u0115\u0116\x07B\x02\x02\u0116\u0117" +
		"\x07!\x02\x02\u0117\u0118\x07B\x02\x02\u0118\u0119\x07/\x02\x02\u0119" +
		"\u011A\x07X\x02\x02\u011A\u011B\x07Y\x02\x02\u011B\u01BB\x03\x02\x02\x02" +
		"\u011C\u011D\x07Z\x02\x02\u011D\u011E\x05D#\x02\u011E\u011F\x07[\x02\x02" +
		"\u011F\u0120\x07B\x02\x02\u0120\u0121\x07!\x02\x02\u0121\u0122\x07B\x02" +
		"\x02\u0122\u0123\x07/\x02\x02\u0123\u0124\x07X\x02\x02\u0124\u0125\x05" +
		"D#\x02\u0125\u0126\x07Y\x02\x02\u0126\u01BB\x03\x02\x02\x02\u0127\u0128" +
		"\x07Z\x02\x02\u0128\u0129\x05D#\x02\u0129\u012A\x07[\x02\x02\u012A\u012B" +
		"\x07B\x02\x02\u012B\u012C\x07!\x02\x02\u012C\u012D\x07B\x02\x02\u012D" +
		"\u012E\x07/\x02\x02\u012E\u012F\x07X\x02\x02\u012F\u0130\x05B\"\x02\u0130" +
		"\u0131\x07C\x02\x02\u0131\u0132\x05B\"\x02\u0132\u0133\x07Y\x02\x02\u0133" +
		"\u01BB\x03\x02\x02\x02\u0134\u0135\x07Z\x02\x02\u0135\u0136\x05D#\x02" +
		"\u0136\u0137\x07[\x02\x02\u0137\u0138\x07B\x02\x02\u0138\u0139\x071\x02" +
		"\x02\u0139\u013A\x07X\x02\x02\u013A\u013B\x05B\"\x02\u013B\u013C\x07C" +
		"\x02\x02\u013C\u013D\x05B\"\x02\u013D\u013E\x07Y\x02\x02\u013E\u01BB\x03" +
		"\x02\x02\x02\u013F\u0140\x07Z\x02\x02\u0140\u0141\x05D#\x02\u0141\u0142" +
		"\x07[\x02\x02\u0142\u0143\x07B\x02\x02\u0143\u0144\x071\x02\x02\u0144" +
		"\u0145\x07X\x02\x02\u0145\u0146\x05B\"\x02\u0146\u0147\x07C\x02\x02\u0147" +
		"\u0148\x05B\"\x02\u0148\u0149\x07C\x02\x02\u0149\u014A\x05B\"\x02\u014A" +
		"\u014B\x07Y\x02\x02\u014B\u01BB\x03\x02\x02\x02\u014C\u014D\x07Z\x02\x02" +
		"\u014D\u014E\x05D#\x02\u014E\u014F\x07[\x02\x02\u014F\u0150\x07B\x02\x02" +
		"\u0150\u0151\x071\x02\x02\u0151\u0152\x07X\x02\x02\u0152\u0153\x05B\"" +
		"\x02\u0153\u0154\x07C\x02\x02\u0154\u0155\x05B\"\x02\u0155\u0156\x07C" +
		"\x02\x02\u0156\u0157\x05B\"\x02\u0157\u0158\x07C\x02\x02\u0158\u0159\x05" +
		"B\"\x02\u0159\u015A\x07Y\x02\x02\u015A\u01BB\x03\x02\x02\x02\u015B\u015C" +
		"\x07Z\x02\x02\u015C\u015D\x05D#\x02\u015D\u015E\x07[\x02\x02\u015E\u015F" +
		"\x07B\x02\x02\u015F\u0160\x07\"\x02\x02\u0160\u0161\x07B\x02\x02\u0161" +
		"\u0162\x07%\x02\x02\u0162\u0163\x07X\x02\x02\u0163\u0164\x05B\"\x02\u0164" +
		"\u0165\x07Y\x02\x02\u0165\u01BB\x03\x02\x02\x02\u0166\u0167\x07Z\x02\x02" +
		"\u0167\u0168\x05D#\x02\u0168\u0169\x07[\x02\x02\u0169\u016A\x07B\x02\x02" +
		"\u016A\u016B\x07\"\x02\x02\u016B\u016C\x07B\x02\x02\u016C\u016D\x07#\x02" +
		"\x02\u016D\u016E\x07X\x02\x02\u016E\u016F\x05B\"\x02\u016F\u0170\x07Y" +
		"\x02\x02\u0170\u01BB\x03\x02\x02\x02\u0171\u0172\x07Z\x02\x02\u0172\u0173" +
		"\x05D#\x02\u0173\u0174\x07[\x02\x02\u0174\u0175\x07B\x02\x02\u0175\u0176" +
		"\x07\"\x02\x02\u0176\u0177\x07B\x02\x02\u0177\u0178\x07&\x02\x02\u0178" +
		"\u0179\x07X\x02\x02\u0179\u017A\x05B\"\x02\u017A\u017B\x07Y\x02\x02\u017B" +
		"\u01BB\x03\x02\x02\x02\u017C\u017D\x07Z\x02\x02\u017D\u017E\x05D#\x02" +
		"\u017E\u017F\x07[\x02\x02\u017F\u0180\x07B\x02\x02\u0180\u0181\x07\"\x02" +
		"\x02\u0181\u0182\x07B\x02\x02\u0182\u0183\x07(\x02\x02\u0183\u0184\x07" +
		"X\x02\x02\u0184\u0185\x07Y\x02\x02\u0185\u01BB\x03\x02\x02\x02\u0186\u0187" +
		"\x07Z\x02\x02\u0187\u0188\x05D#\x02\u0188\u0189\x07[\x02\x02\u0189\u018A" +
		"\x07B\x02\x02\u018A\u018B\x07\"\x02\x02\u018B\u018C\x07B\x02\x02\u018C" +
		"\u018D\x07)\x02\x02\u018D\u018E\x07X\x02\x02\u018E\u018F\x05B\"\x02\u018F" +
		"\u0190\x07Y\x02\x02\u0190\u01BB\x03\x02\x02\x02\u0191\u0192\x07Z\x02\x02" +
		"\u0192\u0193\x05D#\x02\u0193\u0194\x07[\x02\x02\u0194\u0195\x07B\x02\x02" +
		"\u0195\u0196\x07\"\x02\x02\u0196\u0197\x07B\x02\x02\u0197\u0198\x07.\x02" +
		"\x02\u0198\u0199\x07X\x02\x02\u0199\u019A\x07Y\x02\x02\u019A\u01BB\x03" +
		"\x02\x02\x02\u019B\u019C\x07Z\x02\x02\u019C\u019D\x05D#\x02\u019D\u019E" +
		"\x07[\x02\x02\u019E\u019F\x07B\x02\x02\u019F\u01A0\x07\"\x02\x02\u01A0" +
		"\u01A1\x07B\x02\x02\u01A1\u01A2\x07/\x02\x02\u01A2\u01A4\x07X\x02\x02" +
		"\u01A3\u01A5\x05D#\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4\u01A5\x03\x02" +
		"\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x07Y\x02\x02\u01A7\u01BB" +
		"\x03\x02\x02\x02\u01A8\u01A9\x07Z\x02\x02\u01A9\u01AA\x05D#\x02\u01AA" +
		"\u01AB\x07[\x02\x02\u01AB\u01AC\x07B\x02\x02\u01AC\u01AD\x07\"\x02\x02" +
		"\u01AD\u01AE\x07X\x02\x02\u01AE\u01AF\x05D#\x02\u01AF\u01B0\x07Y\x02\x02" +
		"\u01B0\u01BB\x03\x02\x02\x02\u01B1\u01B2\x07Z\x02\x02\u01B2\u01B3\x05" +
		"D#\x02\u01B3\u01B4\x07[\x02\x02\u01B4\u01B5\x07B\x02\x02\u01B5\u01B6\x07" +
		"$\x02\x02\u01B6\u01B7\x07X\x02\x02\u01B7\u01B8\x05B\"\x02\u01B8\u01B9" +
		"\x07Y\x02\x02\u01B9\u01BB\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01BA\xF0\x03\x02\x02\x02\u01BA\xFA\x03\x02\x02\x02\u01BA\u0105\x03\x02" +
		"\x02\x02\u01BA\u0112\x03\x02\x02\x02\u01BA\u011C\x03\x02\x02\x02\u01BA" +
		"\u0127\x03\x02\x02\x02\u01BA\u0134\x03\x02\x02\x02\u01BA\u013F\x03\x02" +
		"\x02\x02\u01BA\u014C\x03\x02\x02\x02\u01BA\u015B\x03\x02\x02\x02\u01BA" +
		"\u0166\x03\x02\x02\x02\u01BA\u0171\x03\x02\x02\x02\u01BA\u017C\x03\x02" +
		"\x02\x02\u01BA\u0186\x03\x02\x02\x02\u01BA\u0191\x03\x02\x02\x02\u01BA" +
		"\u019B\x03\x02\x02\x02\u01BA\u01A8\x03\x02\x02\x02\u01BA\u01B1\x03\x02" +
		"\x02\x02\u01BB\x0F\x03\x02\x02\x02\u01BC\u01BD\x07B\x02\x02\u01BD\u01BE" +
		"\x072\x02\x02\u01BE\u01BF\x07X\x02\x02\u01BF\u01C0\x05H%\x02\u01C0\u01C1" +
		"\x07Y\x02\x02\u01C1\u01F8\x03\x02\x02\x02\u01C2\u01C3\x07Z\x02\x02\u01C3" +
		"\u01C4\x05D#\x02\u01C4\u01C5\x07[\x02\x02\u01C5\u01C6\x07B\x02\x02\u01C6" +
		"\u01C7\x073\x02\x02\u01C7\u01C8\x07X\x02\x02\u01C8\u01C9\x05B\"\x02\u01C9" +
		"\u01CA\x07C\x02\x02\u01CA\u01CB\x05B\"\x02\u01CB\u01CC\x07C\x02\x02\u01CC" +
		"\u01CD\x05B\"\x02\u01CD\u01CE\x07C\x02\x02\u01CE\u01CF\x05B\"\x02\u01CF" +
		"\u01D0\x07C\x02\x02\u01D0\u01D1\x05B\"\x02\u01D1\u01D2\x07C\x02\x02\u01D2" +
		"\u01D3\x05B\"\x02\u01D3\u01D4\x07C\x02\x02\u01D4\u01D5\x05B\"\x02\u01D5" +
		"\u01D6\x07C\x02\x02\u01D6\u01D7\x05B\"\x02\u01D7\u01D8\x07C\x02\x02\u01D8" +
		"\u01D9\x05B\"\x02\u01D9\u01DA\x07Y\x02\x02\u01DA\u01F8\x03\x02\x02\x02" +
		"\u01DB\u01DC\x07Z\x02\x02\u01DC\u01DD\x05D#\x02\u01DD\u01DE\x07[\x02\x02" +
		"\u01DE\u01DF\x07B\x02\x02\u01DF\u01E0\x074\x02\x02\u01E0\u01E1\x07X\x02" +
		"\x02\u01E1\u01E2\x05B\"\x02\u01E2\u01E3\x07C\x02\x02\u01E3\u01E4\x05B" +
		"\"\x02\u01E4\u01E5\x07C\x02\x02\u01E5\u01E6\x05B\"\x02\u01E6\u01E7\x07" +
		"Y\x02\x02\u01E7\u01F8\x03\x02\x02\x02\u01E8\u01E9\x07Z\x02\x02\u01E9\u01EA" +
		"\x05D#\x02\u01EA\u01EB\x07[\x02\x02\u01EB\u01EC\x07B\x02\x02\u01EC\u01ED" +
		"\x075\x02\x02\u01ED\u01EE\x07X\x02\x02\u01EE\u01EF\x05B\"\x02\u01EF\u01F0" +
		"\x07C\x02\x02\u01F0\u01F3\x05B\"\x02\u01F1\u01F2\x07C\x02\x02\u01F2\u01F4" +
		"\x05B\"\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u01F6\x07Y\x02\x02\u01F6\u01F8\x03\x02\x02" +
		"\x02\u01F7\u01BC\x03\x02\x02\x02\u01F7\u01C2\x03\x02\x02\x02\u01F7\u01DB" +
		"\x03\x02\x02\x02\u01F7\u01E8\x03\x02\x02\x02\u01F8\x11\x03\x02\x02\x02" +
		"\u01F9\u01FA\x07Z\x02\x02\u01FA\u01FB\x05D#\x02\u01FB\u01FC\x07[\x02\x02" +
		"\u01FC\u01FD\x07B\x02\x02\u01FD\u01FE\x07)\x02\x02\u01FE\u01FF\x07X\x02" +
		"\x02\u01FF\u0200\x05B\"\x02\u0200\u0201\x07C\x02\x02\u0201\u0202\x05B" +
		"\"\x02\u0202\u0203\x07C\x02\x02\u0203\u0204\x05B\"\x02\u0204\u0205\x07" +
		"C\x02\x02\u0205\u0206\x05B\"\x02\u0206\u0207\x07C\x02\x02\u0207\u0208" +
		"\x05B\"\x02\u0208\u0209\x07C\x02\x02\u0209\u020A\x05B\"\x02\u020A\u020B" +
		"\x07C\x02\x02\u020B\u020C\x05B\"\x02\u020C\u020D\x07C\x02\x02\u020D\u020E" +
		"\x05B\"\x02\u020E\u020F\x07C\x02\x02\u020F\u0210\x05B\"\x02\u0210\u0211" +
		"\x07C\x02\x02\u0211\u0213\x05B\"\x02\u0212\u0214\x05:\x1E\x02\u0213\u0212" +
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02" +
		"\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x07" +
		"Y\x02\x02\u0218\u0236\x03\x02\x02\x02\u0219\u021A\x07Z\x02\x02\u021A\u021B" +
		"\x05D#\x02\u021B\u021C\x07[\x02\x02\u021C\u021D\x07B\x02\x02\u021D\u021E" +
		"\x07*\x02\x02\u021E\u021F\x07X\x02\x02\u021F\u0220\x05B\"\x02\u0220\u0221" +
		"\x07C\x02\x02\u0221\u0222\x05B\"\x02\u0222\u0223\x07C\x02\x02\u0223\u0224" +
		"\x05B\"\x02\u0224\u0225\x07C\x02\x02\u0225\u0227\x05B\"\x02\u0226\u0228" +
		"\x05:\x1E\x02\u0227\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02" +
		"\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03" +
		"\x02\x02\x02\u022B\u022C\x07Y\x02\x02\u022C\u0236\x03\x02\x02\x02\u022D" +
		"\u022E\x07Z\x02\x02\u022E\u022F\x05D#\x02\u022F\u0230\x07[\x02\x02\u0230" +
		"\u0231\x07B\x02\x02\u0231\u0232\x07.\x02\x02\u0232\u0233\x07X\x02\x02" +
		"\u0233\u0234\x07Y\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u01F9\x03" +
		"\x02\x02\x02\u0235\u0219\x03\x02\x02\x02\u0235\u022D\x03\x02\x02\x02\u0236" +
		"\x13\x03\x02\x02\x02\u0237\u0238\x07B\x02\x02\u0238\u0239\x070\x02\x02" +
		"\u0239\u023A\x07X\x02\x02\u023A\u023B\x05B\"\x02\u023B\u023C\x07Y\x02" +
		"\x02\u023C\x15\x03\x02\x02\x02\u023D\u023E\x07B\x02\x02\u023E\u023F\x07" +
		"2\x02\x02\u023F\u0240\x07X\x02\x02\u0240\u0241\x05H%\x02\u0241\u0242\x07" +
		"Y\x02\x02\u0242\u0251\x03\x02\x02\x02\u0243\u0244\x07Z\x02\x02\u0244\u0245" +
		"\x05D#\x02\u0245\u0246\x07[\x02\x02\u0246\u0247\x07B\x02\x02\u0247\u0248" +
		"\x073\x02\x02\u0248\u0249\x07X\x02\x02\u0249\u024A\x05B\"\x02\u024A\u024B" +
		"\x07C\x02\x02\u024B\u024C\x05B\"\x02\u024C\u024D\x07C\x02\x02\u024D\u024E" +
		"\x05B\"\x02\u024E\u024F\x07Y\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250" +
		"\u023D\x03\x02\x02\x02\u0250\u0243\x03\x02\x02\x02\u0251\x17\x03\x02\x02" +
		"\x02\u0252\u0253\x07B\x02\x02\u0253\u0254\t\x05\x02\x02\u0254\u0255\x07" +
		"X\x02\x02\u0255\u0259\x05B\"\x02\u0256\u0258\x05<\x1F\x02\u0257\u0256" +
		"\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02" +
		"\u0259\u025A\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B\u0259\x03" +
		"\x02\x02\x02\u025C\u025D\x07Y\x02\x02\u025D\u026B\x03\x02\x02\x02\u025E" +
		"\u025F\x07B\x02\x02\u025F\u0260\x076\x02\x02\u0260\u0261\x07X\x02\x02" +
		"\u0261\u0265\x05B\"\x02\u0262\u0264\x05<\x1F\x02\u0263\u0262\x03\x02\x02" +
		"\x02\u0264\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266" +
		"\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02" +
		"\u0268\u0269\x07Y\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A\u0252\x03" +
		"\x02\x02\x02\u026A\u025E\x03\x02\x02\x02\u026B\x19\x03\x02\x02\x02\u026C" +
		"\u026D\x07B\x02\x02\u026D\u026E\x072\x02\x02\u026E\u026F\x07X\x02\x02" +
		"\u026F\u0270\x05H%\x02\u0270\u0271\x07Y\x02\x02\u0271\u02A9\x03\x02\x02" +
		"\x02\u0272\u0273\x07B\x02\x02\u0273\u0274\x07\x11\x02\x02\u0274\u0275" +
		"\x07X\x02\x02\u0275\u0279\x05B\"\x02\u0276\u0278\x05<\x1F\x02\u0277\u0276" +
		"\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02" +
		"\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027C\u027D\x07Y\x02\x02\u027D\u02A9\x03\x02\x02\x02\u027E" +
		"\u027F\x07Z\x02\x02\u027F\u0280\x05D#\x02\u0280\u0281\x07[\x02\x02\u0281" +
		"\u0282\x07B\x02\x02\u0282\u0283\x073\x02\x02\u0283\u0284\x07X\x02\x02" +
		"\u0284\u0285\x05B\"\x02\u0285\u0286\x07C\x02\x02\u0286\u0287\x05B\"\x02" +
		"\u0287\u0288\x07C\x02\x02\u0288\u0289\x05B\"\x02\u0289\u028A\x07C\x02" +
		"\x02\u028A\u028B\x05B\"\x02\u028B\u028C\x07Y\x02\x02\u028C\u02A9\x03\x02" +
		"\x02\x02\u028D\u028E\x07Z\x02\x02\u028E\u028F\x05D#\x02\u028F\u0290\x07" +
		"[\x02\x02\u0290\u0291\x07B\x02\x02\u0291\u0292\x073\x02\x02\u0292\u0293" +
		"\x07X\x02\x02\u0293\u0294\x05B\"\x02\u0294\u0295\x07C\x02\x02\u0295\u0296" +
		"\x05B\"\x02\u0296\u0297\x07C\x02\x02\u0297\u0298\x05B\"\x02\u0298\u0299" +
		"\x07C\x02\x02\u0299\u029A\x05B\"\x02\u029A\u029B\x07C\x02\x02\u029B\u029C" +
		"\x05B\"\x02\u029C\u029D\x07C\x02\x02\u029D\u029E\x05B\"\x02\u029E\u029F" +
		"\x07C\x02\x02\u029F\u02A0\x05B\"\x02\u02A0\u02A1\x07C\x02\x02\u02A1\u02A2" +
		"\x05B\"\x02\u02A2\u02A3\x07C\x02\x02\u02A3\u02A4\x05B\"\x02\u02A4\u02A5" +
		"\x07C\x02\x02\u02A5\u02A6\x05B\"\x02\u02A6\u02A7\x07Y\x02\x02\u02A7\u02A9" +
		"\x03\x02\x02\x02\u02A8\u026C\x03\x02\x02\x02\u02A8\u0272\x03\x02\x02\x02" +
		"\u02A8\u027E\x03\x02\x02\x02\u02A8\u028D\x03\x02\x02\x02\u02A9\x1B\x03" +
		"\x02\x02\x02\u02AA\u02AB\x07B\x02\x02\u02AB\u02AC\x073\x02\x02\u02AC\u02AD" +
		"\x07X\x02\x02\u02AD\u02AE\x05B\"\x02\u02AE\u02AF\x07C\x02\x02\u02AF\u02B0" +
		"\x05B\"\x02\u02B0\u02B1\x07C\x02\x02\u02B1\u02B2\x05B\"\x02\u02B2\u02B3" +
		"\x07Y\x02\x02\u02B3\x1D\x03\x02\x02\x02\u02B4\u02B5\x07B\x02\x02\u02B5" +
		"\u02B6\x07)\x02\x02\u02B6\u02B7\x07X\x02\x02\u02B7\u02B8\x05B\"\x02\u02B8" +
		"\u02B9\x07Y\x02\x02\u02B9\u02BF\x03\x02\x02\x02\u02BA\u02BB\x07B\x02\x02" +
		"\u02BB\u02BC\x07.\x02\x02\u02BC\u02BD\x07X\x02\x02\u02BD\u02BF\x07Y\x02" +
		"\x02\u02BE\u02B4\x03\x02\x02\x02\u02BE\u02BA\x03\x02\x02\x02\u02BF\x1F" +
		"\x03\x02\x02\x02\u02C0\u02C1\x07B\x02\x02\u02C1\u02C2\x077\x02\x02\u02C2" +
		"\u02C3\x07X\x02\x02\u02C3\u02C4\x05B\"\x02\u02C4\u02C5\x07Y\x02\x02\u02C5" +
		"!\x03\x02\x02\x02\u02C6\u02C7\x07B\x02\x02\u02C7\u02C8\x078\x02\x02\u02C8" +
		"\u02C9\x07X\x02\x02\u02C9\u02CA\x05B\"\x02\u02CA\u02CB\x07C\x02\x02\u02CB" +
		"\u02CC\x05B\"\x02\u02CC\u02CD\x07C\x02\x02\u02CD\u02CE\x05B\"\x02\u02CE" +
		"\u02CF\x07Y\x02\x02\u02CF\u02E3\x03\x02\x02\x02\u02D0\u02D1\x07B\x02\x02" +
		"\u02D1\u02D2\x079\x02\x02\u02D2\u02D3\x07X\x02\x02\u02D3\u02D4\x05B\"" +
		"\x02\u02D4\u02D5\x07C\x02\x02\u02D5\u02D6\x05B\"\x02\u02D6\u02D7\x07C" +
		"\x02\x02\u02D7\u02D8\x05B\"\x02\u02D8\u02D9\x07Y\x02\x02\u02D9\u02E3\x03" +
		"\x02\x02\x02\u02DA\u02DB\x07B\x02\x02\u02DB\u02DC\x07:\x02\x02\u02DC\u02DD" +
		"\x07X\x02\x02\u02DD\u02DE\x05B\"\x02\u02DE\u02DF\x07C\x02\x02\u02DF\u02E0" +
		"\x05B\"\x02\u02E0\u02E1\x07Y\x02\x02\u02E1\u02E3\x03\x02\x02\x02\u02E2" +
		"\u02C6\x03\x02\x02\x02\u02E2\u02D0\x03\x02\x02\x02\u02E2\u02DA\x03\x02" +
		"\x02\x02\u02E3#\x03\x02\x02\x02\u02E4\u02E5\x07B\x02\x02\u02E5\u02E6\x07" +
		"/\x02\x02\u02E6\u02E7\x07X\x02\x02\u02E7\u02FB\x07Y\x02\x02\u02E8\u02E9" +
		"\x07B\x02\x02\u02E9\u02EA\x07/\x02\x02\u02EA\u02EB\x07X\x02\x02\u02EB" +
		"\u02EC\x05D#\x02\u02EC\u02ED\x07Y\x02\x02\u02ED\u02FB\x03\x02\x02\x02" +
		"\u02EE\u02EF\x07B\x02\x02\u02EF\u02F0\t\x06\x02\x02\u02F0\u02F1\x07X\x02" +
		"\x02\u02F1\u02F2\x05B\"\x02\u02F2\u02F3\x07C\x02\x02\u02F3\u02F4\x05B" +
		"\"\x02\u02F4\u02F5\x07C\x02\x02\u02F5\u02F6\x05B\"\x02\u02F6\u02F7\x07" +
		"C\x02\x02\u02F7\u02F8\x05B\"\x02\u02F8\u02F9\x07Y\x02\x02\u02F9\u02FB" +
		"\x03\x02\x02\x02\u02FA\u02E4\x03\x02\x02\x02\u02FA\u02E8\x03\x02\x02\x02" +
		"\u02FA\u02EE\x03\x02\x02\x02\u02FB%\x03\x02\x02\x02\u02FC\u02FD\x07B\x02" +
		"\x02\u02FD\u02FE\x070\x02\x02\u02FE\u02FF\x07X\x02\x02\u02FF\u0300\x05" +
		"B\"\x02\u0300\u0301\x07Y\x02\x02\u0301\'\x03\x02\x02\x02\u0302\u0303\x07" +
		"B\x02\x02\u0303\u0304\t\x06\x02\x02\u0304\u0306\x07X\x02\x02\u0305\u0307" +
		"\x05D#\x02\u0306\u0305\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307" +
		"\u0308\x03\x02\x02\x02\u0308\u0309\x07Y\x02\x02\u0309)\x03\x02\x02\x02" +
		"\u030A\u030B\x07B\x02\x02\u030B\u030C\x070\x02\x02\u030C\u030D\x07X\x02" +
		"\x02\u030D\u030E\x05B\"\x02\u030E\u030F\x07C\x02\x02\u030F\u0310\x05B" +
		"\"\x02\u0310\u0311\x07C\x02\x02\u0311\u0312\x05B\"\x02\u0312\u0313\x07" +
		"C\x02\x02\u0313\u0314\x05B\"\x02\u0314\u0315\x07C\x02\x02\u0315\u0316" +
		"\x05B\"\x02\u0316\u0317\x07C\x02\x02\u0317\u0318\x05B\"\x02\u0318\u0319" +
		"\x07Y\x02\x02\u0319+\x03\x02\x02\x02\u031A\u031B\x07B\x02\x02\u031B\u031C" +
		"\x070\x02\x02\u031C\u031D\x07X\x02\x02\u031D\u031E\x05B\"\x02\u031E\u031F" +
		"\x07Y\x02\x02\u031F\u032B\x03\x02\x02\x02\u0320\u0321\x07B\x02\x02\u0321" +
		"\u0322\x070\x02\x02\u0322\u0323\x07X\x02\x02\u0323\u0324\x05B\"\x02\u0324" +
		"\u0325\x07C\x02\x02\u0325\u0326\x05B\"\x02\u0326\u0327\x07C\x02\x02\u0327" +
		"\u0328\x05B\"\x02\u0328\u0329\x07Y\x02\x02\u0329\u032B\x03\x02\x02\x02" +
		"\u032A\u031A\x03\x02\x02\x02\u032A\u0320\x03\x02\x02\x02\u032B-\x03\x02" +
		"\x02\x02\u032C\u032D\x07B\x02\x02\u032D\u032E\x072\x02\x02\u032E\u032F" +
		"\x07X\x02\x02\u032F\u0330\x05H%\x02\u0330\u0331\x07Y\x02\x02\u0331\u033B" +
		"\x03\x02\x02\x02\u0332\u0333\x07Z\x02\x02\u0333\u0334\x05D#\x02\u0334" +
		"\u0335\x07[\x02\x02\u0335\u0336\x07B\x02\x02\u0336\u0337\x07;\x02\x02" +
		"\u0337\u0338\x07X\x02\x02\u0338\u0339\x07Y\x02\x02\u0339\u033B\x03\x02" +
		"\x02\x02\u033A\u032C\x03\x02\x02\x02\u033A\u0332\x03\x02\x02\x02\u033B" +
		"/\x03\x02\x02\x02\u033C\u033D\x07B\x02\x02\u033D\u033E\x072\x02\x02\u033E" +
		"\u033F\x07X\x02\x02\u033F\u0340\x05H%\x02\u0340\u0341\x07Y\x02\x02\u0341" +
		"\u034E\x03\x02\x02\x02\u0342\u0343\x07Z\x02\x02\u0343\u0344\x05D#\x02" +
		"\u0344\u0345\x07[\x02\x02\u0345\u0346\x07B\x02\x02\u0346\u0347\x073\x02" +
		"\x02\u0347\u0348\x07X\x02\x02\u0348\u0349\x05B\"\x02\u0349\u034A\x07C" +
		"\x02\x02\u034A\u034B\x05B\"\x02\u034B\u034C\x07Y\x02\x02\u034C\u034E\x03" +
		"\x02\x02\x02\u034D\u033C\x03\x02\x02\x02\u034D\u0342\x03\x02\x02\x02\u034E" +
		"1\x03\x02\x02\x02\u034F\u0350\x07B\x02\x02\u0350\u0351\x070\x02\x02\u0351" +
		"\u0352\x07X\x02\x02\u0352\u0353\x05B\"\x02\u0353\u0354\x07Y\x02\x02\u0354" +
		"3\x03\x02\x02\x02\u0355\u0356\x07B\x02\x02\u0356\u0357\x070\x02\x02\u0357" +
		"\u0358\x07X\x02\x02\u0358\u0359\x05B\"\x02\u0359\u035A\x07Y\x02\x02\u035A" +
		"5\x03\x02\x02\x02\u035B\u035C\x07B\x02\x02\u035C\u035D\x07;\x02\x02\u035D" +
		"\u035E\x07X\x02\x02\u035E\u035F\x05B\"\x02\u035F\u0360\x07Y\x02\x02\u0360" +
		"7\x03\x02\x02\x02\u0361\u0362\x07B\x02\x02\u0362\u0363\x07<\x02\x02\u0363" +
		"\u0364\x07X\x02\x02\u0364\u0365\x05B\"\x02\u0365\u0366\x07C\x02\x02\u0366" +
		"\u0367\x05D#\x02\u0367\u0368\x07C\x02\x02\u0368\u0369\x05B\"\x02\u0369" +
		"\u036A\x07C\x02\x02\u036A\u036B\x05B\"\x02\u036B\u036C\x07Y\x02\x02\u036C" +
		"\u0393\x03\x02\x02\x02\u036D\u036E\x07Z\x02\x02\u036E\u036F\x05D#\x02" +
		"\u036F\u0370\x07[\x02\x02\u0370\u0371\x07B\x02\x02\u0371\u0372\x072\x02" +
		"\x02\u0372\u0373\x07X\x02\x02\u0373\u0374\x05D#\x02\u0374\u0375\x07C\x02" +
		"\x02\u0375\u0376\x05B\"\x02\u0376\u0377\x07C\x02\x02\u0377\u0378\x05B" +
		"\"\x02\u0378\u0379\x07Y\x02\x02\u0379\u0393\x03\x02\x02\x02\u037A\u037B" +
		"\x07Z\x02\x02\u037B\u037C\x05D#\x02\u037C\u037D\x07[\x02\x02\u037D\u037E" +
		"\x07B\x02\x02\u037E\u037F\x07=\x02\x02\u037F\u0380\x07X\x02\x02\u0380" +
		"\u0381\x05B\"\x02\u0381\u0382\x07Y\x02\x02\u0382\u0393\x03\x02\x02\x02" +
		"\u0383\u0384\x07Z\x02\x02\u0384\u0385\x05D#\x02\u0385\u0386\x07[\x02\x02" +
		"\u0386\u0387\x07B\x02\x02\u0387\u0388\x07>\x02\x02\u0388\u0389\x07X\x02" +
		"\x02\u0389\u038A\x05B\"\x02\u038A\u038B\x07C\x02\x02\u038B\u038C\x05B" +
		"\"\x02\u038C\u038D\x07C\x02\x02\u038D\u038E\x05B\"\x02\u038E\u038F\x07" +
		"C\x02\x02\u038F\u0390\x05B\"\x02\u0390\u0391\x07Y\x02\x02\u0391\u0393" +
		"\x03\x02\x02\x02\u0392\u0361\x03\x02\x02\x02\u0392\u036D\x03\x02\x02\x02" +
		"\u0392\u037A\x03\x02\x02\x02\u0392\u0383\x03\x02\x02\x02\u03939\x03\x02" +
		"\x02\x02\u0394\u0395\x07C\x02\x02\u0395\u0396\x05H%\x02\u0396;\x03\x02" +
		"\x02\x02\u0397\u0398\x07C\x02\x02\u0398\u0399\x05B\"\x02\u0399=\x03\x02" +
		"\x02\x02\u039A\u039B\x05F$\x02\u039B\u039C\x07G\x02\x02\u039C\u039D\x05" +
		"D#\x02\u039D?\x03\x02\x02\x02\u039E\u039F\x07B\x02\x02\u039F\u03A0\x07" +
		"\x14\x02\x02\u03A0\u03A1\x07X\x02\x02\u03A1\u03A2\x05B\"\x02\u03A2\u03A3" +
		"\x07C\x02\x02\u03A3\u03A4\x05B\"\x02\u03A4\u03A5\x07C\x02\x02\u03A5\u03A6" +
		"\x05B\"\x02\u03A6\u03A7\x07C\x02\x02\u03A7\u03A8\x05B\"\x02\u03A8\u03A9" +
		"\x07C\x02\x02\u03A9\u03AA\x05B\"\x02\u03AA\u03AB\x07Y\x02\x02\u03AB\u03C1" +
		"\x03\x02\x02\x02\u03AC\u03AD\x07B\x02\x02\u03AD\u03AE\x07\x07\x02\x02" +
		"\u03AE\u03AF\x07X\x02\x02\u03AF\u03B0\x05B\"\x02\u03B0\u03B1\x07C\x02" +
		"\x02\u03B1\u03B2\x05B\"\x02\u03B2\u03B3\x07Y\x02\x02\u03B3\u03C1\x03\x02" +
		"\x02\x02\u03B4\u03B5\x07B\x02\x02\u03B5\u03B6\x07?\x02\x02\u03B6\u03B7" +
		"\x07X\x02\x02\u03B7\u03B8\x05B\"\x02\u03B8\u03B9\x07Y\x02\x02\u03B9\u03C1" +
		"\x03\x02\x02\x02\u03BA\u03BB\x07B\x02\x02\u03BB\u03BC\x07@\x02\x02\u03BC" +
		"\u03BD\x07X\x02\x02\u03BD\u03BE\x05B\"\x02\u03BE\u03BF\x07Y\x02\x02\u03BF" +
		"\u03C1\x03\x02\x02\x02\u03C0\u039E\x03\x02\x02\x02\u03C0\u03AC\x03\x02" +
		"\x02\x02\u03C0\u03B4\x03\x02\x02\x02\u03C0\u03BA\x03\x02\x02\x02\u03C1" +
		"A\x03\x02\x02\x02\u03C2\u03C6\x05D#\x02\u03C3\u03C6\x07E\x02\x02\u03C4" +
		"\u03C6\x03\x02\x02\x02\u03C5\u03C2\x03\x02\x02\x02\u03C5\u03C3\x03\x02" +
		"\x02\x02\u03C5\u03C4\x03\x02\x02\x02\u03C6C\x03\x02\x02\x02\u03C7\u03C8" +
		"\b#\x01\x02\u03C8\u03C9\x07X\x02\x02\u03C9\u03CA\x05D#\x02\u03CA\u03CB" +
		"\x07Y\x02\x02\u03CB\u040D\x03\x02\x02\x02\u03CC\u03CD\t\x07\x02\x02\u03CD" +
		"\u040D\x05D#\x14\u03CE\u03CF\x07M\x02\x02\u03CF\u03D0\x07X\x02\x02\u03D0" +
		"\u03D1\x05D#\x02\u03D1\u03D2\x07Y\x02\x02\u03D2\u040D\x03\x02\x02\x02" +
		"\u03D3\u03D4\x07N\x02\x02\u03D4\u03D5\x07X\x02\x02\u03D5\u03D6\x05D#\x02" +
		"\u03D6\u03D7\x05D#\x02\u03D7\u03D8\x07Y\x02\x02\u03D8\u040D\x03\x02\x02" +
		"\x02\u03D9\u03DA\x07O\x02\x02\u03DA\u03DB\x07X\x02\x02\u03DB\u03DC\x05" +
		"D#\x02\u03DC\u03DD\x07Y\x02\x02\u03DD\u040D\x03\x02\x02\x02\u03DE\u03DF" +
		"\x07P\x02\x02\u03DF\u03E0\x07X\x02\x02\u03E0\u03E1\x05D#\x02\u03E1\u03E2" +
		"\x07Y\x02\x02\u03E2\u040D\x03\x02\x02\x02\u03E3\u03E4\x07Q\x02\x02\u03E4" +
		"\u03E5\x07X\x02\x02\u03E5\u03E6\x05D#\x02\u03E6\u03E7\x07Y\x02\x02\u03E7" +
		"\u040D\x03\x02\x02\x02\u03E8\u03E9\x07R\x02\x02\u03E9\u03EA\x07X\x02\x02" +
		"\u03EA\u03EB\x05D#\x02\u03EB\u03EC\x07Y\x02\x02\u03EC\u040D\x03\x02\x02" +
		"\x02\u03ED\u03EE\x07S\x02\x02\u03EE\u03EF\x07X\x02\x02\u03EF\u03F0\x05" +
		"D#\x02\u03F0\u03F1\x07Y\x02\x02\u03F1\u040D\x03\x02\x02\x02\u03F2\u03F3" +
		"\x07T\x02\x02\u03F3\u03F4\x07X\x02\x02\u03F4\u03F5\x05D#\x02\u03F5\u03F6" +
		"\x05D#\x02\u03F6\u03F7\x07Y\x02\x02\u03F7\u040D\x03\x02\x02\x02\u03F8" +
		"\u03F9\x07U\x02\x02\u03F9\u03FB\x07X\x02\x02\u03FA\u03FC\x05D#\x02\u03FB" +
		"\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC\u03FD\x03\x02" +
		"\x02\x02\u03FD\u040D\x07Y\x02\x02\u03FE\u03FF\x07V\x02\x02\u03FF\u0400" +
		"\x07X\x02\x02\u0400\u0401\x05D#\x02\u0401\u0402\x07Y\x02\x02\u0402\u040D" +
		"\x03\x02\x02\x02\u0403\u0404\x07W\x02\x02\u0404\u0405\x07X\x02\x02\u0405" +
		"\u0406\x05D#\x02\u0406\u0407\x07Y\x02\x02\u0407\u040D\x03\x02\x02\x02" +
		"\u0408\u040D\x05F$\x02\u0409\u040D\x07D\x02\x02\u040A\u040D\x05H%\x02" +
		"\u040B\u040D\x07F\x02\x02\u040C\u03C7\x03\x02\x02\x02\u040C\u03CC\x03" +
		"\x02\x02\x02\u040C\u03CE\x03\x02\x02\x02\u040C\u03D3\x03\x02\x02\x02\u040C" +
		"\u03D9\x03\x02\x02\x02\u040C\u03DE\x03\x02\x02\x02\u040C\u03E3\x03\x02" +
		"\x02\x02\u040C\u03E8\x03\x02\x02\x02\u040C\u03ED\x03\x02\x02\x02\u040C" +
		"\u03F2\x03\x02\x02\x02\u040C\u03F8\x03\x02\x02\x02\u040C\u03FE\x03\x02" +
		"\x02\x02\u040C\u0403\x03\x02\x02\x02\u040C\u0408\x03\x02\x02\x02\u040C" +
		"\u0409\x03\x02\x02\x02\u040C\u040A\x03\x02\x02\x02\u040C\u040B\x03\x02" +
		"\x02\x02\u040D\u0416\x03\x02\x02\x02\u040E\u040F\f\x13\x02\x02\u040F\u0410" +
		"\t\b\x02\x02\u0410\u0415\x05D#\x14\u0411\u0412\f\x12\x02\x02\u0412\u0413" +
		"\t\t\x02\x02\u0413\u0415\x05D#\x13\u0414\u040E\x03\x02\x02\x02\u0414\u0411" +
		"\x03\x02\x02\x02\u0415\u0418\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02" +
		"\u0416\u0417\x03\x02\x02\x02\u0417E\x03\x02\x02\x02\u0418\u0416\x03\x02" +
		"\x02\x02\u0419\u041A\x07^\x02\x02\u041A\u041B\x07_\x02\x02\u041B\u041C" +
		"\b$\x01\x02\u041CG\x03\x02\x02\x02\u041D\u041E\x07`\x02\x02\u041E\u041F" +
		"\x05J&\x02\u041F\u0420\x07b\x02\x02\u0420\u0421\b%\x01\x02\u0421I\x03" +
		"\x02\x02\x02\u0422\u0424\x07c\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424" +
		"\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02" +
		"\x02\x02\u0426K\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428\u0429" +
		"\x07\x05\x02\x02\u0429\u042B\x05N(\x02\u042A\u042C\x07e\x02\x02\u042B" +
		"\u042A\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042D\x03\x02" +
		"\x02\x02\u042D\u042E\b\'\x01\x02\u042EM\x03\x02\x02\x02\u042F\u0431\x07" +
		"f\x02\x02\u0430\u042F\x03\x02\x02\x02\u0431\u0434\x03\x02\x02\x02\u0432" +
		"\u0430\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433O\x03\x02\x02" +
		"\x02\u0434\u0432\x03\x02\x02\x02&T[\x96\xB8\xD8\xEE\u01A4\u01BA\u01F3" +
		"\u01F7\u0215\u0229\u0235\u0250\u0259\u0265\u026A\u0279\u02A8\u02BE\u02E2" +
		"\u02FA\u0306\u032A\u033A\u034D\u0392\u03C0\u03C5\u03FB\u040C\u0414\u0416" +
		"\u0425\u042B\u0432";
	public static readonly _serializedATN: string = Utils.join(
		[
			MapGrammarParser._serializedATNSegment0,
			MapGrammarParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MapGrammarParser.__ATN) {
			MapGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MapGrammarParser._serializedATN));
		}

		return MapGrammarParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public _version: Token;
	public BVETS(): TerminalNode { return this.getToken(MapGrammarParser.BVETS, 0); }
	public MAP(): TerminalNode { return this.getToken(MapGrammarParser.MAP, 0); }
	public EOF(): TerminalNode { return this.getToken(MapGrammarParser.EOF, 0); }
	public NUM(): TerminalNode { return this.getToken(MapGrammarParser.NUM, 0); }
	public encoding(): EncodingContext | undefined {
		return this.tryGetRuleContext(0, EncodingContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public STATE_END(): TerminalNode[];
	public STATE_END(i: number): TerminalNode;
	public STATE_END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.STATE_END);
		} else {
			return this.getToken(MapGrammarParser.STATE_END, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_root; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return MapGrammarParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class StructureStateContext extends StatementContext {
	public STRUCTURE(): TerminalNode { return this.getToken(MapGrammarParser.STRUCTURE, 0); }
	public structure(): StructureContext {
		return this.getRuleContext(0, StructureContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterStructureState) {
			listener.enterStructureState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitStructureState) {
			listener.exitStructureState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitStructureState) {
			return visitor.visitStructureState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CabilluminanceStateContext extends StatementContext {
	public CABILLUMINANCE(): TerminalNode { return this.getToken(MapGrammarParser.CABILLUMINANCE, 0); }
	public cabilluminance(): CabilluminanceContext {
		return this.getRuleContext(0, CabilluminanceContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterCabilluminanceState) {
			listener.enterCabilluminanceState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitCabilluminanceState) {
			listener.exitCabilluminanceState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitCabilluminanceState) {
			return visitor.visitCabilluminanceState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StationStateContext extends StatementContext {
	public STATION(): TerminalNode { return this.getToken(MapGrammarParser.STATION, 0); }
	public station(): StationContext {
		return this.getRuleContext(0, StationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterStationState) {
			listener.enterStationState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitStationState) {
			listener.exitStationState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitStationState) {
			return visitor.visitStationState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpeedlimitStateContext extends StatementContext {
	public SPEEDLIMIT(): TerminalNode { return this.getToken(MapGrammarParser.SPEEDLIMIT, 0); }
	public speedlimit(): SpeedlimitContext {
		return this.getRuleContext(0, SpeedlimitContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSpeedlimitState) {
			listener.enterSpeedlimitState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSpeedlimitState) {
			listener.exitSpeedlimitState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSpeedlimitState) {
			return visitor.visitSpeedlimitState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyStateContext extends StatementContext {
	public LEGACY(): TerminalNode { return this.getToken(MapGrammarParser.LEGACY, 0); }
	public legacy(): LegacyContext {
		return this.getRuleContext(0, LegacyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterLegacyState) {
			listener.enterLegacyState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitLegacyState) {
			listener.exitLegacyState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitLegacyState) {
			return visitor.visitLegacyState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TrainStateContext extends StatementContext {
	public TRAIN(): TerminalNode { return this.getToken(MapGrammarParser.TRAIN, 0); }
	public train(): TrainContext {
		return this.getRuleContext(0, TrainContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterTrainState) {
			listener.enterTrainState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitTrainState) {
			listener.exitTrainState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitTrainState) {
			return visitor.visitTrainState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurveStateContext extends StatementContext {
	public CURVE(): TerminalNode { return this.getToken(MapGrammarParser.CURVE, 0); }
	public curve(): CurveContext {
		return this.getRuleContext(0, CurveContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterCurveState) {
			listener.enterCurveState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitCurveState) {
			listener.exitCurveState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitCurveState) {
			return visitor.visitCurveState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BackgroundStateContext extends StatementContext {
	public BACKGROUND(): TerminalNode { return this.getToken(MapGrammarParser.BACKGROUND, 0); }
	public background(): BackgroundContext {
		return this.getRuleContext(0, BackgroundContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterBackgroundState) {
			listener.enterBackgroundState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitBackgroundState) {
			listener.exitBackgroundState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitBackgroundState) {
			return visitor.visitBackgroundState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollingnoiseStateContext extends StatementContext {
	public ROLLINGNOISE(): TerminalNode { return this.getToken(MapGrammarParser.ROLLINGNOISE, 0); }
	public rollingnoise(): RollingnoiseContext {
		return this.getRuleContext(0, RollingnoiseContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterRollingnoiseState) {
			listener.enterRollingnoiseState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitRollingnoiseState) {
			listener.exitRollingnoiseState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitRollingnoiseState) {
			return visitor.visitRollingnoiseState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FogStateContext extends StatementContext {
	public FOG(): TerminalNode { return this.getToken(MapGrammarParser.FOG, 0); }
	public fog(): FogContext {
		return this.getRuleContext(0, FogContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterFogState) {
			listener.enterFogState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitFogState) {
			listener.exitFogState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitFogState) {
			return visitor.visitFogState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludeStateContext extends StatementContext {
	public INCLUDE(): TerminalNode { return this.getToken(MapGrammarParser.INCLUDE, 0); }
	public include(): IncludeContext {
		return this.getRuleContext(0, IncludeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterIncludeState) {
			listener.enterIncludeState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitIncludeState) {
			listener.exitIncludeState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitIncludeState) {
			return visitor.visitIncludeState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PretrainStateContext extends StatementContext {
	public PRETRAIN(): TerminalNode { return this.getToken(MapGrammarParser.PRETRAIN, 0); }
	public pretrain(): PretrainContext {
		return this.getRuleContext(0, PretrainContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterPretrainState) {
			listener.enterPretrainState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitPretrainState) {
			listener.exitPretrainState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitPretrainState) {
			return visitor.visitPretrainState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdhesionStateContext extends StatementContext {
	public ADHESION(): TerminalNode { return this.getToken(MapGrammarParser.ADHESION, 0); }
	public adhesion(): AdhesionContext {
		return this.getRuleContext(0, AdhesionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterAdhesionState) {
			listener.enterAdhesionState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitAdhesionState) {
			listener.exitAdhesionState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitAdhesionState) {
			return visitor.visitAdhesionState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DrawdistanceStateContext extends StatementContext {
	public DRAWDISTANCE(): TerminalNode { return this.getToken(MapGrammarParser.DRAWDISTANCE, 0); }
	public drawdistance(): DrawdistanceContext {
		return this.getRuleContext(0, DrawdistanceContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterDrawdistanceState) {
			listener.enterDrawdistanceState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitDrawdistanceState) {
			listener.exitDrawdistanceState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitDrawdistanceState) {
			return visitor.visitDrawdistanceState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IrregularityStateContext extends StatementContext {
	public IRREGULARITY(): TerminalNode { return this.getToken(MapGrammarParser.IRREGULARITY, 0); }
	public irregularity(): IrregularityContext {
		return this.getRuleContext(0, IrregularityContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterIrregularityState) {
			listener.enterIrregularityState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitIrregularityState) {
			listener.exitIrregularityState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitIrregularityState) {
			return visitor.visitIrregularityState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SoundStateContext extends StatementContext {
	public SOUND(): TerminalNode { return this.getToken(MapGrammarParser.SOUND, 0); }
	public sound(): SoundContext {
		return this.getRuleContext(0, SoundContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSoundState) {
			listener.enterSoundState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSoundState) {
			listener.exitSoundState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSoundState) {
			return visitor.visitSoundState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SectionStateContext extends StatementContext {
	public SECTION(): TerminalNode { return this.getToken(MapGrammarParser.SECTION, 0); }
	public section(): SectionContext {
		return this.getRuleContext(0, SectionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSectionState) {
			listener.enterSectionState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSectionState) {
			listener.exitSectionState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSectionState) {
			return visitor.visitSectionState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LightStateContext extends StatementContext {
	public LIGHT(): TerminalNode { return this.getToken(MapGrammarParser.LIGHT, 0); }
	public light(): LightContext {
		return this.getRuleContext(0, LightContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterLightState) {
			listener.enterLightState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitLightState) {
			listener.exitLightState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitLightState) {
			return visitor.visitLightState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeaconStateContext extends StatementContext {
	public BEACON(): TerminalNode { return this.getToken(MapGrammarParser.BEACON, 0); }
	public beacon(): BeaconContext {
		return this.getRuleContext(0, BeaconContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterBeaconState) {
			listener.enterBeaconState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitBeaconState) {
			listener.exitBeaconState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitBeaconState) {
			return visitor.visitBeaconState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FlangenoiseStateContext extends StatementContext {
	public FLANGENOISE(): TerminalNode { return this.getToken(MapGrammarParser.FLANGENOISE, 0); }
	public flangenoise(): FlangenoiseContext {
		return this.getRuleContext(0, FlangenoiseContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterFlangenoiseState) {
			listener.enterFlangenoiseState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitFlangenoiseState) {
			listener.exitFlangenoiseState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitFlangenoiseState) {
			return visitor.visitFlangenoiseState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistStateContext extends StatementContext {
	public distance(): DistanceContext {
		return this.getRuleContext(0, DistanceContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterDistState) {
			listener.enterDistState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitDistState) {
			listener.exitDistState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitDistState) {
			return visitor.visitDistState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarAssignStateContext extends StatementContext {
	public varAssign(): VarAssignContext {
		return this.getRuleContext(0, VarAssignContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterVarAssignState) {
			listener.enterVarAssignState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitVarAssignState) {
			listener.exitVarAssignState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitVarAssignState) {
			return visitor.visitVarAssignState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeaterStateContext extends StatementContext {
	public REPEATER(): TerminalNode { return this.getToken(MapGrammarParser.REPEATER, 0); }
	public repeater(): RepeaterContext {
		return this.getRuleContext(0, RepeaterContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterRepeaterState) {
			listener.enterRepeaterState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitRepeaterState) {
			listener.exitRepeaterState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitRepeaterState) {
			return visitor.visitRepeaterState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GradientStateContext extends StatementContext {
	public GRADIENT(): TerminalNode { return this.getToken(MapGrammarParser.GRADIENT, 0); }
	public gradient(): GradientContext {
		return this.getRuleContext(0, GradientContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterGradientState) {
			listener.enterGradientState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitGradientState) {
			listener.exitGradientState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitGradientState) {
			return visitor.visitGradientState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SignalStateContext extends StatementContext {
	public SIGNAL(): TerminalNode { return this.getToken(MapGrammarParser.SIGNAL, 0); }
	public signal(): SignalContext {
		return this.getRuleContext(0, SignalContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSignalState) {
			listener.enterSignalState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSignalState) {
			listener.exitSignalState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSignalState) {
			return visitor.visitSignalState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JointnoiseStateContext extends StatementContext {
	public JOINTNOISE(): TerminalNode { return this.getToken(MapGrammarParser.JOINTNOISE, 0); }
	public jointnoise(): JointnoiseContext {
		return this.getRuleContext(0, JointnoiseContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterJointnoiseState) {
			listener.enterJointnoiseState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitJointnoiseState) {
			listener.exitJointnoiseState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitJointnoiseState) {
			return visitor.visitJointnoiseState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TrackStateContext extends StatementContext {
	public TRACK(): TerminalNode { return this.getToken(MapGrammarParser.TRACK, 0); }
	public track(): TrackContext {
		return this.getRuleContext(0, TrackContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterTrackState) {
			listener.enterTrackState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitTrackState) {
			listener.exitTrackState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitTrackState) {
			return visitor.visitTrackState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Sound3dStateContext extends StatementContext {
	public SOUND3D(): TerminalNode { return this.getToken(MapGrammarParser.SOUND3D, 0); }
	public sound3d(): Sound3dContext {
		return this.getRuleContext(0, Sound3dContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSound3dState) {
			listener.enterSound3dState(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSound3dState) {
			listener.exitSound3dState(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSound3dState) {
			return visitor.visitSound3dState(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistanceContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_distance; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterDistance) {
			listener.enterDistance(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitDistance) {
			listener.exitDistance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitDistance) {
			return visitor.visitDistance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeContext extends ParserRuleContext {
	public _path: StringContext;
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_include; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterInclude) {
			listener.enterInclude(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitInclude) {
			listener.exitInclude(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitInclude) {
			return visitor.visitInclude(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CurveContext extends ParserRuleContext {
	public _func: Token;
	public _value: NullableExprContext;
	public _x: NullableExprContext;
	public _id: NullableExprContext;
	public _radius: NullableExprContext;
	public _cant: NullableExprContext;
	public _radiusE: ExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public SET_GAUGE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_GAUGE, 0); }
	public GAUGE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.GAUGE, 0); }
	public SET_CENTER(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_CENTER, 0); }
	public SET_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_FUNCTION, 0); }
	public BEGIN_TRANSITION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN_TRANSITION, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN, 0); }
	public BEGIN_CIRCULAR(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN_CIRCULAR, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.COMMA, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.END, 0); }
	public INTERPOLATE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.INTERPOLATE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CHANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_curve; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterCurve) {
			listener.enterCurve(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitCurve) {
			listener.exitCurve(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitCurve) {
			return visitor.visitCurve(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GradientContext extends ParserRuleContext {
	public _func: Token;
	public _gradientArgs: NullableExprContext;
	public _gradientArgsE: ExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public BEGIN_TRANSITION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN_TRANSITION, 0); }
	public nullableExpr(): NullableExprContext | undefined {
		return this.tryGetRuleContext(0, NullableExprContext);
	}
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN, 0); }
	public BEGIN_CONST(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN_CONST, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.END, 0); }
	public INTERPOLATE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.INTERPOLATE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_gradient; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterGradient) {
			listener.enterGradient(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitGradient) {
			listener.exitGradient(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitGradient) {
			return visitor.visitGradient(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrackContext extends ParserRuleContext {
	public _key: ExprContext;
	public _element: Token;
	public _func: Token;
	public _xE: ExprContext;
	public _x: NullableExprContext;
	public _radius: NullableExprContext;
	public _y: NullableExprContext;
	public _radiusH: NullableExprContext;
	public _radiusV: NullableExprContext;
	public _gauge: NullableExprContext;
	public _id: NullableExprContext;
	public _cant: NullableExprContext;
	public _cantE: ExprContext;
	public OPN_BRA(): TerminalNode { return this.getToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode { return this.getToken(MapGrammarParser.CLS_BRA, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.DOT);
		} else {
			return this.getToken(MapGrammarParser.DOT, i);
		}
	}
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public X_ELEMENT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.X_ELEMENT, 0); }
	public INTERPOLATE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.INTERPOLATE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public Y_ELEMENT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.Y_ELEMENT, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.POSITION, 0); }
	public CANT_ELEMENT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CANT_ELEMENT, 0); }
	public SET_CENTER(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_CENTER, 0); }
	public SET_GAUGE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_GAUGE, 0); }
	public SET_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_FUNCTION, 0); }
	public BEGIN_TRANSITION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN_TRANSITION, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.END, 0); }
	public GAUGE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.GAUGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_track; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterTrack) {
			listener.enterTrack(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitTrack) {
			listener.exitTrack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitTrack) {
			return visitor.visitTrack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureContext extends ParserRuleContext {
	public _func: Token;
	public _path: StringContext;
	public _key: ExprContext;
	public _trackkey: NullableExprContext;
	public _x: NullableExprContext;
	public _y: NullableExprContext;
	public _z: NullableExprContext;
	public _rx: NullableExprContext;
	public _ry: NullableExprContext;
	public _rz: NullableExprContext;
	public _tilt: NullableExprContext;
	public _span: NullableExprContext;
	public _trackkey1: NullableExprContext;
	public _trackkey2: NullableExprContext;
	public _flag: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.LOAD, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public OPN_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CLS_BRA, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PUT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PUT, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public PUT0(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PUT0, 0); }
	public PUTBETWEEN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PUTBETWEEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_structure; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterStructure) {
			listener.enterStructure(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitStructure) {
			listener.exitStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitStructure) {
			return visitor.visitStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeaterContext extends ParserRuleContext {
	public _key: ExprContext;
	public _func: Token;
	public _trackkey: NullableExprContext;
	public _x: NullableExprContext;
	public _y: NullableExprContext;
	public _z: NullableExprContext;
	public _rx: NullableExprContext;
	public _ry: NullableExprContext;
	public _rz: NullableExprContext;
	public _tilt: NullableExprContext;
	public _span: NullableExprContext;
	public _interval: NullableExprContext;
	public OPN_BRA(): TerminalNode { return this.getToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode { return this.getToken(MapGrammarParser.CLS_BRA, 0); }
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public strkey(): StrkeyContext[];
	public strkey(i: number): StrkeyContext;
	public strkey(i?: number): StrkeyContext | StrkeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrkeyContext);
		} else {
			return this.getRuleContext(i, StrkeyContext);
		}
	}
	public BEGIN0(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN0, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_repeater; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterRepeater) {
			listener.enterRepeater(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitRepeater) {
			listener.exitRepeater(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitRepeater) {
			return visitor.visitRepeater(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BackgroundContext extends ParserRuleContext {
	public _func: Token;
	public _structurekey: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CHANGE(): TerminalNode { return this.getToken(MapGrammarParser.CHANGE, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_background; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterBackground) {
			listener.enterBackground(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitBackground) {
			listener.exitBackground(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitBackground) {
			return visitor.visitBackground(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StationContext extends ParserRuleContext {
	public _func: Token;
	public _path: StringContext;
	public _key: ExprContext;
	public _door: NullableExprContext;
	public _margin1: NullableExprContext;
	public _margin2: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.LOAD, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public OPN_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CLS_BRA, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PUT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PUT, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_station; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterStation) {
			listener.enterStation(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitStation) {
			listener.exitStation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitStation) {
			return visitor.visitStation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	public _func: Token;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN, 0); }
	public BEGIN_NEW(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN_NEW, 0); }
	public exprArgs(): ExprArgsContext[];
	public exprArgs(i: number): ExprArgsContext;
	public exprArgs(i?: number): ExprArgsContext | ExprArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprArgsContext);
		} else {
			return this.getRuleContext(i, ExprArgsContext);
		}
	}
	public SET_SPEEDLIMIT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET_SPEEDLIMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_section; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSection) {
			listener.enterSection(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSection) {
			listener.exitSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSection) {
			return visitor.visitSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignalContext extends ParserRuleContext {
	public _func: Token;
	public _path: StringContext;
	public _key: ExprContext;
	public _sectionArgs: NullableExprContext;
	public _trackkey: NullableExprContext;
	public _x: NullableExprContext;
	public _y: NullableExprContext;
	public _z: NullableExprContext;
	public _rx: NullableExprContext;
	public _ry: NullableExprContext;
	public _rz: NullableExprContext;
	public _tilt: NullableExprContext;
	public _span: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.LOAD, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public SPEEDLIMIT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SPEEDLIMIT, 0); }
	public exprArgs(): ExprArgsContext[];
	public exprArgs(i: number): ExprArgsContext;
	public exprArgs(i?: number): ExprArgsContext | ExprArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprArgsContext);
		} else {
			return this.getRuleContext(i, ExprArgsContext);
		}
	}
	public OPN_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CLS_BRA, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PUT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_signal; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSignal) {
			listener.enterSignal(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSignal) {
			listener.exitSignal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSignal) {
			return visitor.visitSignal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeaconContext extends ParserRuleContext {
	public _func: Token;
	public _type: NullableExprContext;
	public _sectionArgs: NullableExprContext;
	public _sendData: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public PUT(): TerminalNode { return this.getToken(MapGrammarParser.PUT, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_beacon; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterBeacon) {
			listener.enterBeacon(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitBeacon) {
			listener.exitBeacon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitBeacon) {
			return visitor.visitBeacon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpeedlimitContext extends ParserRuleContext {
	public _func: Token;
	public _v: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.BEGIN, 0); }
	public nullableExpr(): NullableExprContext | undefined {
		return this.tryGetRuleContext(0, NullableExprContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_speedlimit; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSpeedlimit) {
			listener.enterSpeedlimit(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSpeedlimit) {
			listener.exitSpeedlimit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSpeedlimit) {
			return visitor.visitSpeedlimit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PretrainContext extends ParserRuleContext {
	public _func: Token;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public PASS(): TerminalNode { return this.getToken(MapGrammarParser.PASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_pretrain; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterPretrain) {
			listener.enterPretrain(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitPretrain) {
			listener.exitPretrain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitPretrain) {
			return visitor.visitPretrain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LightContext extends ParserRuleContext {
	public _func: Token;
	public _red: NullableExprContext;
	public _green: NullableExprContext;
	public _blue: NullableExprContext;
	public _pitch: NullableExprContext;
	public _yaw: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public AMBIENT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.AMBIENT, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public DIFFUSE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.DIFFUSE, 0); }
	public DIRECTION(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.DIRECTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_light; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterLight) {
			listener.enterLight(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitLight) {
			listener.exitLight(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitLight) {
			return visitor.visitLight(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FogContext extends ParserRuleContext {
	public _func: Token;
	public _densityE: ExprContext;
	public _density: NullableExprContext;
	public _red: NullableExprContext;
	public _green: NullableExprContext;
	public _blue: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public INTERPOLATE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.INTERPOLATE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_fog; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterFog) {
			listener.enterFog(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitFog) {
			listener.exitFog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitFog) {
			return visitor.visitFog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DrawdistanceContext extends ParserRuleContext {
	public _func: Token;
	public _value: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CHANGE(): TerminalNode { return this.getToken(MapGrammarParser.CHANGE, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_drawdistance; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterDrawdistance) {
			listener.enterDrawdistance(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitDrawdistance) {
			listener.exitDrawdistance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitDrawdistance) {
			return visitor.visitDrawdistance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CabilluminanceContext extends ParserRuleContext {
	public _func: Token;
	public _value: ExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public INTERPOLATE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.INTERPOLATE, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.SET, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_cabilluminance; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterCabilluminance) {
			listener.enterCabilluminance(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitCabilluminance) {
			listener.exitCabilluminance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitCabilluminance) {
			return visitor.visitCabilluminance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IrregularityContext extends ParserRuleContext {
	public _func: Token;
	public _x: NullableExprContext;
	public _y: NullableExprContext;
	public _r: NullableExprContext;
	public _lx: NullableExprContext;
	public _ly: NullableExprContext;
	public _lr: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CHANGE(): TerminalNode { return this.getToken(MapGrammarParser.CHANGE, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_irregularity; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterIrregularity) {
			listener.enterIrregularity(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitIrregularity) {
			listener.exitIrregularity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitIrregularity) {
			return visitor.visitIrregularity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdhesionContext extends ParserRuleContext {
	public _func: Token;
	public _a: NullableExprContext;
	public _b: NullableExprContext;
	public _c: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CHANGE(): TerminalNode { return this.getToken(MapGrammarParser.CHANGE, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_adhesion; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterAdhesion) {
			listener.enterAdhesion(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitAdhesion) {
			listener.exitAdhesion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitAdhesion) {
			return visitor.visitAdhesion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoundContext extends ParserRuleContext {
	public _func: Token;
	public _path: StringContext;
	public _key: ExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.LOAD, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public OPN_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CLS_BRA, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PLAY(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PLAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_sound; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSound) {
			listener.enterSound(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSound) {
			listener.exitSound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSound) {
			return visitor.visitSound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sound3dContext extends ParserRuleContext {
	public _func: Token;
	public _path: StringContext;
	public _key: ExprContext;
	public _x: NullableExprContext;
	public _y: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.LOAD, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public OPN_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CLS_BRA, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.COMMA, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PUT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PUT, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_sound3d; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSound3d) {
			listener.enterSound3d(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSound3d) {
			listener.exitSound3d(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSound3d) {
			return visitor.visitSound3d(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RollingnoiseContext extends ParserRuleContext {
	public _func: Token;
	public _index: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CHANGE(): TerminalNode { return this.getToken(MapGrammarParser.CHANGE, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_rollingnoise; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterRollingnoise) {
			listener.enterRollingnoise(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitRollingnoise) {
			listener.exitRollingnoise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitRollingnoise) {
			return visitor.visitRollingnoise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlangenoiseContext extends ParserRuleContext {
	public _func: Token;
	public _index: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CHANGE(): TerminalNode { return this.getToken(MapGrammarParser.CHANGE, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_flangenoise; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterFlangenoise) {
			listener.enterFlangenoise(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitFlangenoise) {
			listener.exitFlangenoise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitFlangenoise) {
			return visitor.visitFlangenoise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JointnoiseContext extends ParserRuleContext {
	public _func: Token;
	public _index: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public PLAY(): TerminalNode { return this.getToken(MapGrammarParser.PLAY, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_jointnoise; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterJointnoise) {
			listener.enterJointnoise(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitJointnoise) {
			listener.exitJointnoise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitJointnoise) {
			return visitor.visitJointnoise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrainContext extends ParserRuleContext {
	public _func: Token;
	public _trainkey: NullableExprContext;
	public _path: ExprContext;
	public _trackkey: NullableExprContext;
	public _direction: NullableExprContext;
	public _key: ExprContext;
	public _time: NullableExprContext;
	public _decelerate: NullableExprContext;
	public _stoptime: NullableExprContext;
	public _accelerate: NullableExprContext;
	public _speed: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.ADD, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OPN_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.OPN_BRA, 0); }
	public CLS_BRA(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CLS_BRA, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.LOAD, 0); }
	public ENABLE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.ENABLE, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_train; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterTrain) {
			listener.enterTrain(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitTrain) {
			listener.exitTrain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitTrain) {
			return visitor.visitTrain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrkeyContext extends ParserRuleContext {
	public _key: StringContext;
	public COMMA(): TerminalNode { return this.getToken(MapGrammarParser.COMMA, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_strkey; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterStrkey) {
			listener.enterStrkey(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitStrkey) {
			listener.exitStrkey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitStrkey) {
			return visitor.visitStrkey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprArgsContext extends ParserRuleContext {
	public _arg: NullableExprContext;
	public COMMA(): TerminalNode { return this.getToken(MapGrammarParser.COMMA, 0); }
	public nullableExpr(): NullableExprContext {
		return this.getRuleContext(0, NullableExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_exprArgs; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterExprArgs) {
			listener.enterExprArgs(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitExprArgs) {
			listener.exitExprArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitExprArgs) {
			return visitor.visitExprArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarAssignContext extends ParserRuleContext {
	public _v: VarContext;
	public EQUAL(): TerminalNode { return this.getToken(MapGrammarParser.EQUAL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_varAssign; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterVarAssign) {
			listener.enterVarAssign(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitVarAssign) {
			listener.exitVarAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitVarAssign) {
			return visitor.visitVarAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LegacyContext extends ParserRuleContext {
	public _func: Token;
	public _arg_start: NullableExprContext;
	public _arg_end: NullableExprContext;
	public _red: NullableExprContext;
	public _green: NullableExprContext;
	public _blue: NullableExprContext;
	public _radius: NullableExprContext;
	public _cant: NullableExprContext;
	public _rate: NullableExprContext;
	public _slope: NullableExprContext;
	public DOT(): TerminalNode { return this.getToken(MapGrammarParser.DOT, 0); }
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.COMMA);
		} else {
			return this.getToken(MapGrammarParser.COMMA, i);
		}
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public FOG(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.FOG, 0); }
	public nullableExpr(): NullableExprContext[];
	public nullableExpr(i: number): NullableExprContext;
	public nullableExpr(i?: number): NullableExprContext | NullableExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NullableExprContext);
		} else {
			return this.getRuleContext(i, NullableExprContext);
		}
	}
	public CURVE(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.CURVE, 0); }
	public PITCH(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PITCH, 0); }
	public TURN(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.TURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_legacy; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterLegacy) {
			listener.enterLegacy(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitLegacy) {
			listener.exitLegacy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitLegacy) {
			return visitor.visitLegacy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NullableExprContext extends ParserRuleContext {
	public _nullSyntax: Token;
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_nullableExpr; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterNullableExpr) {
			listener.enterNullableExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitNullableExpr) {
			listener.exitNullableExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitNullableExpr) {
			return visitor.visitNullableExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class RandExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public RAND(): TerminalNode { return this.getToken(MapGrammarParser.RAND, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterRandExpr) {
			listener.enterRandExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitRandExpr) {
			listener.exitRandExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitRandExpr) {
			return visitor.visitRandExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public SIN(): TerminalNode { return this.getToken(MapGrammarParser.SIN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSinExpr) {
			listener.enterSinExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSinExpr) {
			listener.exitSinExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSinExpr) {
			return visitor.visitSinExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SqrtExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public SQRT(): TerminalNode { return this.getToken(MapGrammarParser.SQRT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterSqrtExpr) {
			listener.enterSqrtExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitSqrtExpr) {
			listener.exitSqrtExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitSqrtExpr) {
			return visitor.visitSqrtExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExprContext extends ExprContext {
	public _num: Token;
	public NUM(): TerminalNode { return this.getToken(MapGrammarParser.NUM, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterNumberExpr) {
			listener.enterNumberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitNumberExpr) {
			listener.exitNumberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitNumberExpr) {
			return visitor.visitNumberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloorExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public FLOOR(): TerminalNode { return this.getToken(MapGrammarParser.FLOOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterFloorExpr) {
			listener.enterFloorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitFloorExpr) {
			listener.exitFloorExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitFloorExpr) {
			return visitor.visitFloorExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public ABS(): TerminalNode { return this.getToken(MapGrammarParser.ABS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterAbsExpr) {
			listener.enterAbsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitAbsExpr) {
			listener.exitAbsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitAbsExpr) {
			return visitor.visitAbsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensExprContext extends ExprContext {
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterParensExpr) {
			listener.enterParensExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitParensExpr) {
			listener.exitParensExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitParensExpr) {
			return visitor.visitParensExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Atan2ExprContext extends ExprContext {
	public _func: Token;
	public _y: ExprContext;
	public _x: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public ATAN2(): TerminalNode { return this.getToken(MapGrammarParser.ATAN2, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterAtan2Expr) {
			listener.enterAtan2Expr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitAtan2Expr) {
			listener.exitAtan2Expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitAtan2Expr) {
			return visitor.visitAtan2Expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public LOG(): TerminalNode { return this.getToken(MapGrammarParser.LOG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterLogExpr) {
			listener.enterLogExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitLogExpr) {
			listener.exitLogExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitLogExpr) {
			return visitor.visitLogExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExprContext extends ExprContext {
	public _str: StringContext;
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterStringExpr) {
			listener.enterStringExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitStringExpr) {
			listener.exitStringExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitStringExpr) {
			return visitor.visitStringExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarExprContext extends ExprContext {
	public _v: VarContext;
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterVarExpr) {
			listener.enterVarExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitVarExpr) {
			listener.exitVarExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitVarExpr) {
			return visitor.visitVarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixExprContext extends ExprContext {
	public _left: ExprContext;
	public _op: Token;
	public _right: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.DIV, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.MINUS, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterInfixExpr) {
			listener.enterInfixExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitInfixExpr) {
			listener.exitInfixExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitInfixExpr) {
			return visitor.visitInfixExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExprContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CeilExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public CEIL(): TerminalNode { return this.getToken(MapGrammarParser.CEIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterCeilExpr) {
			listener.enterCeilExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitCeilExpr) {
			listener.exitCeilExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitCeilExpr) {
			return visitor.visitCeilExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CosExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public COS(): TerminalNode { return this.getToken(MapGrammarParser.COS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterCosExpr) {
			listener.enterCosExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitCosExpr) {
			listener.exitCosExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitCosExpr) {
			return visitor.visitCosExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpExprContext extends ExprContext {
	public _func: Token;
	public _value: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public EXP(): TerminalNode { return this.getToken(MapGrammarParser.EXP, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterExpExpr) {
			listener.enterExpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitExpExpr) {
			listener.exitExpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitExpExpr) {
			return visitor.visitExpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistanceExprContext extends ExprContext {
	public _dist: Token;
	public DISTANCE(): TerminalNode { return this.getToken(MapGrammarParser.DISTANCE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterDistanceExpr) {
			listener.enterDistanceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitDistanceExpr) {
			listener.exitDistanceExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitDistanceExpr) {
			return visitor.visitDistanceExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowExprContext extends ExprContext {
	public _func: Token;
	public _x: ExprContext;
	public _y: ExprContext;
	public OPN_PAR(): TerminalNode { return this.getToken(MapGrammarParser.OPN_PAR, 0); }
	public CLS_PAR(): TerminalNode { return this.getToken(MapGrammarParser.CLS_PAR, 0); }
	public POW(): TerminalNode { return this.getToken(MapGrammarParser.POW, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterPowExpr) {
			listener.enterPowExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitPowExpr) {
			listener.exitPowExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitPowExpr) {
			return visitor.visitPowExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public varName: string | undefined;
	public _v: Token;
	public VAR_START(): TerminalNode { return this.getToken(MapGrammarParser.VAR_START, 0); }
	public VAR(): TerminalNode { return this.getToken(MapGrammarParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_var; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public value: string | undefined;
	public _v: String_textContext;
	public QUOTE(): TerminalNode { return this.getToken(MapGrammarParser.QUOTE, 0); }
	public RQUOTE(): TerminalNode { return this.getToken(MapGrammarParser.RQUOTE, 0); }
	public string_text(): String_textContext {
		return this.getRuleContext(0, String_textContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_string; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_textContext extends ParserRuleContext {
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.CHAR);
		} else {
			return this.getToken(MapGrammarParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_string_text; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterString_text) {
			listener.enterString_text(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitString_text) {
			listener.exitString_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitString_text) {
			return visitor.visitString_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EncodingContext extends ParserRuleContext {
	public value: string | undefined;
	public _v: Encode_stringContext;
	public SELECT_ENCODE(): TerminalNode { return this.getToken(MapGrammarParser.SELECT_ENCODE, 0); }
	public encode_string(): Encode_stringContext {
		return this.getRuleContext(0, Encode_stringContext);
	}
	public ENCODE_END(): TerminalNode | undefined { return this.tryGetToken(MapGrammarParser.ENCODE_END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_encoding; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterEncoding) {
			listener.enterEncoding(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitEncoding) {
			listener.exitEncoding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitEncoding) {
			return visitor.visitEncoding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Encode_stringContext extends ParserRuleContext {
	public ENCODE_CHAR(): TerminalNode[];
	public ENCODE_CHAR(i: number): TerminalNode;
	public ENCODE_CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MapGrammarParser.ENCODE_CHAR);
		} else {
			return this.getToken(MapGrammarParser.ENCODE_CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MapGrammarParser.RULE_encode_string; }
	// @Override
	public enterRule(listener: MapGrammarParserListener): void {
		if (listener.enterEncode_string) {
			listener.enterEncode_string(this);
		}
	}
	// @Override
	public exitRule(listener: MapGrammarParserListener): void {
		if (listener.exitEncode_string) {
			listener.exitEncode_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MapGrammarParserVisitor<Result>): Result {
		if (visitor.visitEncode_string) {
			return visitor.visitEncode_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


