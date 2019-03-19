// Generated from /Users/aoi/Documents/workspace/node/bve5_parser_ts/src/MapGrammar/SyntaxDefinitions/MapGrammarParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MapGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BVETS=1, MAP=2, SELECT_ENCODE=3, INCLUDE=4, CURVE=5, GRADIENT=6, TRACK=7, 
		STRUCTURE=8, REPEATER=9, BACKGROUND=10, STATION=11, SECTION=12, SIGNAL=13, 
		BEACON=14, SPEEDLIMIT=15, PRETRAIN=16, LIGHT=17, FOG=18, DRAWDISTANCE=19, 
		CABILLUMINANCE=20, IRREGULARITY=21, ADHESION=22, SOUND=23, SOUND3D=24, 
		ROLLINGNOISE=25, FLANGENOISE=26, JOINTNOISE=27, TRAIN=28, LEGACY=29, X_ELEMENT=30, 
		Y_ELEMENT=31, CANT_ELEMENT=32, SET_GAUGE=33, GAUGE=34, SET_CENTER=35, 
		SET_FUNCTION=36, SET=37, BEGIN_TRANSITION=38, BEGIN=39, BEGIN0=40, BEGIN_CIRCULAR=41, 
		BEGIN_CONST=42, BEGIN_NEW=43, END=44, INTERPOLATE=45, CHANGE=46, POSITION=47, 
		LOAD=48, PUT=49, PUT0=50, PUTBETWEEN=51, SET_SPEEDLIMIT=52, PASS=53, AMBIENT=54, 
		DIFFUSE=55, DIRECTION=56, PLAY=57, ADD=58, ENABLE=59, STOP=60, PITCH=61, 
		TURN=62, STATE_END=63, DOT=64, COMMA=65, NUM=66, NULL=67, DISTANCE=68, 
		EQUAL=69, PLUS=70, MINUS=71, MULT=72, DIV=73, MOD=74, ABS=75, ATAN2=76, 
		CEIL=77, COS=78, EXP=79, FLOOR=80, LOG=81, POW=82, RAND=83, SIN=84, SQRT=85, 
		OPN_PAR=86, CLS_PAR=87, OPN_BRA=88, CLS_BRA=89, WHITESPACE=90, COMMENT=91, 
		VAR_START=92, VAR=93, QUOTE=94, ERROR_TOKEN=95, RQUOTE=96, CHAR=97, E_WS=98, 
		ENCODE_END=99, ENCODE_CHAR=100;
	public static final int
		RULE_root = 0, RULE_statement = 1, RULE_distance = 2, RULE_include = 3, 
		RULE_curve = 4, RULE_gradient = 5, RULE_track = 6, RULE_structure = 7, 
		RULE_repeater = 8, RULE_background = 9, RULE_station = 10, RULE_section = 11, 
		RULE_signal = 12, RULE_beacon = 13, RULE_speedlimit = 14, RULE_pretrain = 15, 
		RULE_light = 16, RULE_fog = 17, RULE_drawdistance = 18, RULE_cabilluminance = 19, 
		RULE_irregularity = 20, RULE_adhesion = 21, RULE_sound = 22, RULE_sound3d = 23, 
		RULE_rollingnoise = 24, RULE_flangenoise = 25, RULE_jointnoise = 26, RULE_train = 27, 
		RULE_strkey = 28, RULE_exprArgs = 29, RULE_varAssign = 30, RULE_legacy = 31, 
		RULE_nullableExpr = 32, RULE_expr = 33, RULE_var = 34, RULE_string = 35, 
		RULE_string_text = 36, RULE_encoding = 37, RULE_encode_string = 38, RULE_error_tokens = 39;
	public static final String[] ruleNames = {
		"root", "statement", "distance", "include", "curve", "gradient", "track", 
		"structure", "repeater", "background", "station", "section", "signal", 
		"beacon", "speedlimit", "pretrain", "light", "fog", "drawdistance", "cabilluminance", 
		"irregularity", "adhesion", "sound", "sound3d", "rollingnoise", "flangenoise", 
		"jointnoise", "train", "strkey", "exprArgs", "varAssign", "legacy", "nullableExpr", 
		"expr", "var", "string", "string_text", "encoding", "encode_string", "error_tokens"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, "':'", null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, "';'", "'.'", "','", null, null, null, "'='", "'+'", 
		"'-'", "'*'", "'/'", "'%'", null, null, null, null, null, null, null, 
		null, null, null, null, "'('", "')'", "'['", "']'", null, null, "'$'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "BVETS", "MAP", "SELECT_ENCODE", "INCLUDE", "CURVE", "GRADIENT", 
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
		"COMMENT", "VAR_START", "VAR", "QUOTE", "ERROR_TOKEN", "RQUOTE", "CHAR", 
		"E_WS", "ENCODE_END", "ENCODE_CHAR"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MapGrammarParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MapGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RootContext extends ParserRuleContext {
		public Token version;
		public TerminalNode BVETS() { return getToken(MapGrammarParser.BVETS, 0); }
		public TerminalNode MAP() { return getToken(MapGrammarParser.MAP, 0); }
		public TerminalNode EOF() { return getToken(MapGrammarParser.EOF, 0); }
		public TerminalNode NUM() { return getToken(MapGrammarParser.NUM, 0); }
		public EncodingContext encoding() {
			return getRuleContext(EncodingContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> STATE_END() { return getTokens(MapGrammarParser.STATE_END); }
		public TerminalNode STATE_END(int i) {
			return getToken(MapGrammarParser.STATE_END, i);
		}
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(BVETS);
			setState(81);
			match(MAP);
			setState(82);
			((RootContext)_localctx).version = match(NUM);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SELECT_ENCODE) {
				{
				setState(83);
				encoding();
				}
			}

			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INCLUDE) | (1L << CURVE) | (1L << GRADIENT) | (1L << TRACK) | (1L << STRUCTURE) | (1L << REPEATER) | (1L << BACKGROUND) | (1L << STATION) | (1L << SECTION) | (1L << SIGNAL) | (1L << BEACON) | (1L << SPEEDLIMIT) | (1L << PRETRAIN) | (1L << LIGHT) | (1L << FOG) | (1L << DRAWDISTANCE) | (1L << CABILLUMINANCE) | (1L << IRREGULARITY) | (1L << ADHESION) | (1L << SOUND) | (1L << SOUND3D) | (1L << ROLLINGNOISE) | (1L << FLANGENOISE) | (1L << JOINTNOISE) | (1L << TRAIN) | (1L << LEGACY))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (NUM - 66)) | (1L << (DISTANCE - 66)) | (1L << (PLUS - 66)) | (1L << (MINUS - 66)) | (1L << (ABS - 66)) | (1L << (ATAN2 - 66)) | (1L << (CEIL - 66)) | (1L << (COS - 66)) | (1L << (EXP - 66)) | (1L << (FLOOR - 66)) | (1L << (LOG - 66)) | (1L << (POW - 66)) | (1L << (RAND - 66)) | (1L << (SIN - 66)) | (1L << (SQRT - 66)) | (1L << (OPN_PAR - 66)) | (1L << (VAR_START - 66)) | (1L << (QUOTE - 66)))) != 0)) {
				{
				{
				setState(86);
				statement();
				setState(87);
				match(STATE_END);
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StructureStateContext extends StatementContext {
		public TerminalNode STRUCTURE() { return getToken(MapGrammarParser.STRUCTURE, 0); }
		public StructureContext structure() {
			return getRuleContext(StructureContext.class,0);
		}
		public StructureStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CabilluminanceStateContext extends StatementContext {
		public TerminalNode CABILLUMINANCE() { return getToken(MapGrammarParser.CABILLUMINANCE, 0); }
		public CabilluminanceContext cabilluminance() {
			return getRuleContext(CabilluminanceContext.class,0);
		}
		public CabilluminanceStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class StationStateContext extends StatementContext {
		public TerminalNode STATION() { return getToken(MapGrammarParser.STATION, 0); }
		public StationContext station() {
			return getRuleContext(StationContext.class,0);
		}
		public StationStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SpeedlimitStateContext extends StatementContext {
		public TerminalNode SPEEDLIMIT() { return getToken(MapGrammarParser.SPEEDLIMIT, 0); }
		public SpeedlimitContext speedlimit() {
			return getRuleContext(SpeedlimitContext.class,0);
		}
		public SpeedlimitStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class LegacyStateContext extends StatementContext {
		public TerminalNode LEGACY() { return getToken(MapGrammarParser.LEGACY, 0); }
		public LegacyContext legacy() {
			return getRuleContext(LegacyContext.class,0);
		}
		public LegacyStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class TrainStateContext extends StatementContext {
		public TerminalNode TRAIN() { return getToken(MapGrammarParser.TRAIN, 0); }
		public TrainContext train() {
			return getRuleContext(TrainContext.class,0);
		}
		public TrainStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class CurveStateContext extends StatementContext {
		public TerminalNode CURVE() { return getToken(MapGrammarParser.CURVE, 0); }
		public CurveContext curve() {
			return getRuleContext(CurveContext.class,0);
		}
		public CurveStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class BackgroundStateContext extends StatementContext {
		public TerminalNode BACKGROUND() { return getToken(MapGrammarParser.BACKGROUND, 0); }
		public BackgroundContext background() {
			return getRuleContext(BackgroundContext.class,0);
		}
		public BackgroundStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RollingnoiseStateContext extends StatementContext {
		public TerminalNode ROLLINGNOISE() { return getToken(MapGrammarParser.ROLLINGNOISE, 0); }
		public RollingnoiseContext rollingnoise() {
			return getRuleContext(RollingnoiseContext.class,0);
		}
		public RollingnoiseStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class FogStateContext extends StatementContext {
		public TerminalNode FOG() { return getToken(MapGrammarParser.FOG, 0); }
		public FogContext fog() {
			return getRuleContext(FogContext.class,0);
		}
		public FogStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class IncludeStateContext extends StatementContext {
		public TerminalNode INCLUDE() { return getToken(MapGrammarParser.INCLUDE, 0); }
		public IncludeContext include() {
			return getRuleContext(IncludeContext.class,0);
		}
		public IncludeStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class PretrainStateContext extends StatementContext {
		public TerminalNode PRETRAIN() { return getToken(MapGrammarParser.PRETRAIN, 0); }
		public PretrainContext pretrain() {
			return getRuleContext(PretrainContext.class,0);
		}
		public PretrainStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class AdhesionStateContext extends StatementContext {
		public TerminalNode ADHESION() { return getToken(MapGrammarParser.ADHESION, 0); }
		public AdhesionContext adhesion() {
			return getRuleContext(AdhesionContext.class,0);
		}
		public AdhesionStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DrawdistanceStateContext extends StatementContext {
		public TerminalNode DRAWDISTANCE() { return getToken(MapGrammarParser.DRAWDISTANCE, 0); }
		public DrawdistanceContext drawdistance() {
			return getRuleContext(DrawdistanceContext.class,0);
		}
		public DrawdistanceStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class IrregularityStateContext extends StatementContext {
		public TerminalNode IRREGULARITY() { return getToken(MapGrammarParser.IRREGULARITY, 0); }
		public IrregularityContext irregularity() {
			return getRuleContext(IrregularityContext.class,0);
		}
		public IrregularityStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SoundStateContext extends StatementContext {
		public TerminalNode SOUND() { return getToken(MapGrammarParser.SOUND, 0); }
		public SoundContext sound() {
			return getRuleContext(SoundContext.class,0);
		}
		public SoundStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SectionStateContext extends StatementContext {
		public TerminalNode SECTION() { return getToken(MapGrammarParser.SECTION, 0); }
		public SectionContext section() {
			return getRuleContext(SectionContext.class,0);
		}
		public SectionStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class LightStateContext extends StatementContext {
		public TerminalNode LIGHT() { return getToken(MapGrammarParser.LIGHT, 0); }
		public LightContext light() {
			return getRuleContext(LightContext.class,0);
		}
		public LightStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class BeaconStateContext extends StatementContext {
		public TerminalNode BEACON() { return getToken(MapGrammarParser.BEACON, 0); }
		public BeaconContext beacon() {
			return getRuleContext(BeaconContext.class,0);
		}
		public BeaconStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class FlangenoiseStateContext extends StatementContext {
		public TerminalNode FLANGENOISE() { return getToken(MapGrammarParser.FLANGENOISE, 0); }
		public FlangenoiseContext flangenoise() {
			return getRuleContext(FlangenoiseContext.class,0);
		}
		public FlangenoiseStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DistStateContext extends StatementContext {
		public DistanceContext distance() {
			return getRuleContext(DistanceContext.class,0);
		}
		public DistStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class VarAssignStateContext extends StatementContext {
		public VarAssignContext varAssign() {
			return getRuleContext(VarAssignContext.class,0);
		}
		public VarAssignStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class RepeaterStateContext extends StatementContext {
		public TerminalNode REPEATER() { return getToken(MapGrammarParser.REPEATER, 0); }
		public RepeaterContext repeater() {
			return getRuleContext(RepeaterContext.class,0);
		}
		public RepeaterStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class GradientStateContext extends StatementContext {
		public TerminalNode GRADIENT() { return getToken(MapGrammarParser.GRADIENT, 0); }
		public GradientContext gradient() {
			return getRuleContext(GradientContext.class,0);
		}
		public GradientStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SignalStateContext extends StatementContext {
		public TerminalNode SIGNAL() { return getToken(MapGrammarParser.SIGNAL, 0); }
		public SignalContext signal() {
			return getRuleContext(SignalContext.class,0);
		}
		public SignalStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class JointnoiseStateContext extends StatementContext {
		public TerminalNode JOINTNOISE() { return getToken(MapGrammarParser.JOINTNOISE, 0); }
		public JointnoiseContext jointnoise() {
			return getRuleContext(JointnoiseContext.class,0);
		}
		public JointnoiseStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class TrackStateContext extends StatementContext {
		public TerminalNode TRACK() { return getToken(MapGrammarParser.TRACK, 0); }
		public TrackContext track() {
			return getRuleContext(TrackContext.class,0);
		}
		public TrackStateContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class Sound3dStateContext extends StatementContext {
		public TerminalNode SOUND3D() { return getToken(MapGrammarParser.SOUND3D, 0); }
		public Sound3dContext sound3d() {
			return getRuleContext(Sound3dContext.class,0);
		}
		public Sound3dStateContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new DistStateContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(96);
				distance();
				}
				break;
			case 2:
				_localctx = new IncludeStateContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(97);
				match(INCLUDE);
				setState(98);
				include();
				}
				break;
			case 3:
				_localctx = new CurveStateContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(99);
				match(CURVE);
				setState(100);
				curve();
				}
				break;
			case 4:
				_localctx = new GradientStateContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(101);
				match(GRADIENT);
				setState(102);
				gradient();
				}
				break;
			case 5:
				_localctx = new TrackStateContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(103);
				match(TRACK);
				setState(104);
				track();
				}
				break;
			case 6:
				_localctx = new StructureStateContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(105);
				match(STRUCTURE);
				setState(106);
				structure();
				}
				break;
			case 7:
				_localctx = new RepeaterStateContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(107);
				match(REPEATER);
				setState(108);
				repeater();
				}
				break;
			case 8:
				_localctx = new BackgroundStateContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(109);
				match(BACKGROUND);
				setState(110);
				background();
				}
				break;
			case 9:
				_localctx = new StationStateContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(111);
				match(STATION);
				setState(112);
				station();
				}
				break;
			case 10:
				_localctx = new SectionStateContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(113);
				match(SECTION);
				setState(114);
				section();
				}
				break;
			case 11:
				_localctx = new SignalStateContext(_localctx);
				enterOuterAlt(_localctx, 11);
				{
				setState(115);
				match(SIGNAL);
				setState(116);
				signal();
				}
				break;
			case 12:
				_localctx = new BeaconStateContext(_localctx);
				enterOuterAlt(_localctx, 12);
				{
				setState(117);
				match(BEACON);
				setState(118);
				beacon();
				}
				break;
			case 13:
				_localctx = new SpeedlimitStateContext(_localctx);
				enterOuterAlt(_localctx, 13);
				{
				setState(119);
				match(SPEEDLIMIT);
				setState(120);
				speedlimit();
				}
				break;
			case 14:
				_localctx = new PretrainStateContext(_localctx);
				enterOuterAlt(_localctx, 14);
				{
				setState(121);
				match(PRETRAIN);
				setState(122);
				pretrain();
				}
				break;
			case 15:
				_localctx = new LightStateContext(_localctx);
				enterOuterAlt(_localctx, 15);
				{
				setState(123);
				match(LIGHT);
				setState(124);
				light();
				}
				break;
			case 16:
				_localctx = new FogStateContext(_localctx);
				enterOuterAlt(_localctx, 16);
				{
				setState(125);
				match(FOG);
				setState(126);
				fog();
				}
				break;
			case 17:
				_localctx = new DrawdistanceStateContext(_localctx);
				enterOuterAlt(_localctx, 17);
				{
				setState(127);
				match(DRAWDISTANCE);
				setState(128);
				drawdistance();
				}
				break;
			case 18:
				_localctx = new CabilluminanceStateContext(_localctx);
				enterOuterAlt(_localctx, 18);
				{
				setState(129);
				match(CABILLUMINANCE);
				setState(130);
				cabilluminance();
				}
				break;
			case 19:
				_localctx = new IrregularityStateContext(_localctx);
				enterOuterAlt(_localctx, 19);
				{
				setState(131);
				match(IRREGULARITY);
				setState(132);
				irregularity();
				}
				break;
			case 20:
				_localctx = new AdhesionStateContext(_localctx);
				enterOuterAlt(_localctx, 20);
				{
				setState(133);
				match(ADHESION);
				setState(134);
				adhesion();
				}
				break;
			case 21:
				_localctx = new SoundStateContext(_localctx);
				enterOuterAlt(_localctx, 21);
				{
				setState(135);
				match(SOUND);
				setState(136);
				sound();
				}
				break;
			case 22:
				_localctx = new Sound3dStateContext(_localctx);
				enterOuterAlt(_localctx, 22);
				{
				setState(137);
				match(SOUND3D);
				setState(138);
				sound3d();
				}
				break;
			case 23:
				_localctx = new RollingnoiseStateContext(_localctx);
				enterOuterAlt(_localctx, 23);
				{
				setState(139);
				match(ROLLINGNOISE);
				setState(140);
				rollingnoise();
				}
				break;
			case 24:
				_localctx = new FlangenoiseStateContext(_localctx);
				enterOuterAlt(_localctx, 24);
				{
				setState(141);
				match(FLANGENOISE);
				setState(142);
				flangenoise();
				}
				break;
			case 25:
				_localctx = new JointnoiseStateContext(_localctx);
				enterOuterAlt(_localctx, 25);
				{
				setState(143);
				match(JOINTNOISE);
				setState(144);
				jointnoise();
				}
				break;
			case 26:
				_localctx = new TrainStateContext(_localctx);
				enterOuterAlt(_localctx, 26);
				{
				setState(145);
				match(TRAIN);
				setState(146);
				train();
				}
				break;
			case 27:
				_localctx = new VarAssignStateContext(_localctx);
				enterOuterAlt(_localctx, 27);
				{
				setState(147);
				varAssign();
				}
				break;
			case 28:
				_localctx = new LegacyStateContext(_localctx);
				enterOuterAlt(_localctx, 28);
				{
				setState(148);
				match(LEGACY);
				setState(149);
				legacy();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DistanceContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public DistanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_distance; }
	}

	public final DistanceContext distance() throws RecognitionException {
		DistanceContext _localctx = new DistanceContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_distance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IncludeContext extends ParserRuleContext {
		public StringContext path;
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public IncludeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_include; }
	}

	public final IncludeContext include() throws RecognitionException {
		IncludeContext _localctx = new IncludeContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_include);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			((IncludeContext)_localctx).path = string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CurveContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext value;
		public NullableExprContext x;
		public NullableExprContext id;
		public NullableExprContext radius;
		public NullableExprContext cant;
		public ExprContext radiusE;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode SET_GAUGE() { return getToken(MapGrammarParser.SET_GAUGE, 0); }
		public TerminalNode GAUGE() { return getToken(MapGrammarParser.GAUGE, 0); }
		public TerminalNode SET_CENTER() { return getToken(MapGrammarParser.SET_CENTER, 0); }
		public TerminalNode SET_FUNCTION() { return getToken(MapGrammarParser.SET_FUNCTION, 0); }
		public TerminalNode BEGIN_TRANSITION() { return getToken(MapGrammarParser.BEGIN_TRANSITION, 0); }
		public TerminalNode BEGIN() { return getToken(MapGrammarParser.BEGIN, 0); }
		public TerminalNode BEGIN_CIRCULAR() { return getToken(MapGrammarParser.BEGIN_CIRCULAR, 0); }
		public TerminalNode COMMA() { return getToken(MapGrammarParser.COMMA, 0); }
		public TerminalNode END() { return getToken(MapGrammarParser.END, 0); }
		public TerminalNode INTERPOLATE() { return getToken(MapGrammarParser.INTERPOLATE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public CurveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_curve; }
	}

	public final CurveContext curve() throws RecognitionException {
		CurveContext _localctx = new CurveContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_curve);
		int _la;
		try {
			setState(216);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(156);
				match(DOT);
				setState(157);
				((CurveContext)_localctx).func = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==SET_GAUGE || _la==GAUGE) ) {
					((CurveContext)_localctx).func = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(158);
				match(OPN_PAR);
				setState(159);
				((CurveContext)_localctx).value = nullableExpr();
				setState(160);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(162);
				match(DOT);
				setState(163);
				((CurveContext)_localctx).func = match(SET_CENTER);
				setState(164);
				match(OPN_PAR);
				setState(165);
				((CurveContext)_localctx).x = nullableExpr();
				setState(166);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(168);
				match(DOT);
				setState(169);
				((CurveContext)_localctx).func = match(SET_FUNCTION);
				setState(170);
				match(OPN_PAR);
				setState(171);
				((CurveContext)_localctx).id = nullableExpr();
				setState(172);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(174);
				match(DOT);
				setState(175);
				((CurveContext)_localctx).func = match(BEGIN_TRANSITION);
				setState(176);
				match(OPN_PAR);
				setState(177);
				match(CLS_PAR);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(178);
				match(DOT);
				setState(179);
				((CurveContext)_localctx).func = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==BEGIN || _la==BEGIN_CIRCULAR) ) {
					((CurveContext)_localctx).func = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(180);
				match(OPN_PAR);
				setState(181);
				((CurveContext)_localctx).radius = nullableExpr();
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(182);
					match(COMMA);
					setState(183);
					((CurveContext)_localctx).cant = nullableExpr();
					}
				}

				setState(186);
				match(CLS_PAR);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(188);
				match(DOT);
				setState(189);
				((CurveContext)_localctx).func = match(END);
				setState(190);
				match(OPN_PAR);
				setState(191);
				match(CLS_PAR);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(192);
				match(DOT);
				setState(193);
				((CurveContext)_localctx).func = match(INTERPOLATE);
				setState(194);
				match(OPN_PAR);
				setState(195);
				match(CLS_PAR);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(196);
				match(DOT);
				setState(197);
				((CurveContext)_localctx).func = match(INTERPOLATE);
				setState(198);
				match(OPN_PAR);
				setState(199);
				((CurveContext)_localctx).radiusE = expr(0);
				setState(200);
				match(CLS_PAR);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(202);
				match(DOT);
				setState(203);
				((CurveContext)_localctx).func = match(INTERPOLATE);
				setState(204);
				match(OPN_PAR);
				setState(205);
				((CurveContext)_localctx).radius = nullableExpr();
				setState(206);
				match(COMMA);
				setState(207);
				((CurveContext)_localctx).cant = nullableExpr();
				setState(208);
				match(CLS_PAR);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(210);
				match(DOT);
				setState(211);
				((CurveContext)_localctx).func = match(CHANGE);
				setState(212);
				match(OPN_PAR);
				setState(213);
				((CurveContext)_localctx).radius = nullableExpr();
				setState(214);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GradientContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext gradientArgs;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode BEGIN_TRANSITION() { return getToken(MapGrammarParser.BEGIN_TRANSITION, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public TerminalNode BEGIN() { return getToken(MapGrammarParser.BEGIN, 0); }
		public TerminalNode BEGIN_CONST() { return getToken(MapGrammarParser.BEGIN_CONST, 0); }
		public TerminalNode END() { return getToken(MapGrammarParser.END, 0); }
		public TerminalNode INTERPOLATE() { return getToken(MapGrammarParser.INTERPOLATE, 0); }
		public GradientContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gradient; }
	}

	public final GradientContext gradient() throws RecognitionException {
		GradientContext _localctx = new GradientContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_gradient);
		int _la;
		try {
			setState(238);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(218);
				match(DOT);
				setState(219);
				((GradientContext)_localctx).func = match(BEGIN_TRANSITION);
				setState(220);
				match(OPN_PAR);
				setState(221);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(222);
				match(DOT);
				setState(223);
				((GradientContext)_localctx).func = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==BEGIN || _la==BEGIN_CONST) ) {
					((GradientContext)_localctx).func = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(224);
				match(OPN_PAR);
				setState(225);
				((GradientContext)_localctx).gradientArgs = nullableExpr();
				setState(226);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(228);
				match(DOT);
				setState(229);
				((GradientContext)_localctx).func = match(END);
				setState(230);
				match(OPN_PAR);
				setState(231);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(232);
				match(DOT);
				setState(233);
				((GradientContext)_localctx).func = match(INTERPOLATE);
				setState(234);
				match(OPN_PAR);
				setState(235);
				((GradientContext)_localctx).gradientArgs = nullableExpr();
				setState(236);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrackContext extends ParserRuleContext {
		public ExprContext key;
		public Token element;
		public Token func;
		public ExprContext xE;
		public NullableExprContext x;
		public NullableExprContext radius;
		public NullableExprContext y;
		public NullableExprContext radiusH;
		public NullableExprContext radiusV;
		public NullableExprContext gauge;
		public NullableExprContext id;
		public NullableExprContext cant;
		public ExprContext cantE;
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public List<TerminalNode> DOT() { return getTokens(MapGrammarParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(MapGrammarParser.DOT, i);
		}
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode X_ELEMENT() { return getToken(MapGrammarParser.X_ELEMENT, 0); }
		public TerminalNode INTERPOLATE() { return getToken(MapGrammarParser.INTERPOLATE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode Y_ELEMENT() { return getToken(MapGrammarParser.Y_ELEMENT, 0); }
		public TerminalNode POSITION() { return getToken(MapGrammarParser.POSITION, 0); }
		public TerminalNode CANT_ELEMENT() { return getToken(MapGrammarParser.CANT_ELEMENT, 0); }
		public TerminalNode SET_CENTER() { return getToken(MapGrammarParser.SET_CENTER, 0); }
		public TerminalNode SET_GAUGE() { return getToken(MapGrammarParser.SET_GAUGE, 0); }
		public TerminalNode SET_FUNCTION() { return getToken(MapGrammarParser.SET_FUNCTION, 0); }
		public TerminalNode BEGIN_TRANSITION() { return getToken(MapGrammarParser.BEGIN_TRANSITION, 0); }
		public TerminalNode BEGIN() { return getToken(MapGrammarParser.BEGIN, 0); }
		public TerminalNode END() { return getToken(MapGrammarParser.END, 0); }
		public TerminalNode GAUGE() { return getToken(MapGrammarParser.GAUGE, 0); }
		public TrackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_track; }
	}

	public final TrackContext track() throws RecognitionException {
		TrackContext _localctx = new TrackContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_track);
		int _la;
		try {
			setState(442);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(240);
				match(OPN_BRA);
				setState(241);
				((TrackContext)_localctx).key = expr(0);
				setState(242);
				match(CLS_BRA);
				setState(243);
				match(DOT);
				setState(244);
				((TrackContext)_localctx).element = match(X_ELEMENT);
				setState(245);
				match(DOT);
				setState(246);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(247);
				match(OPN_PAR);
				setState(248);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(250);
				match(OPN_BRA);
				setState(251);
				((TrackContext)_localctx).key = expr(0);
				setState(252);
				match(CLS_BRA);
				setState(253);
				match(DOT);
				setState(254);
				((TrackContext)_localctx).element = match(X_ELEMENT);
				setState(255);
				match(DOT);
				setState(256);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(257);
				match(OPN_PAR);
				setState(258);
				((TrackContext)_localctx).xE = expr(0);
				setState(259);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(261);
				match(OPN_BRA);
				setState(262);
				((TrackContext)_localctx).key = expr(0);
				setState(263);
				match(CLS_BRA);
				setState(264);
				match(DOT);
				setState(265);
				((TrackContext)_localctx).element = match(X_ELEMENT);
				setState(266);
				match(DOT);
				setState(267);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(268);
				match(OPN_PAR);
				setState(269);
				((TrackContext)_localctx).x = nullableExpr();
				setState(270);
				match(COMMA);
				setState(271);
				((TrackContext)_localctx).radius = nullableExpr();
				setState(272);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(274);
				match(OPN_BRA);
				setState(275);
				((TrackContext)_localctx).key = expr(0);
				setState(276);
				match(CLS_BRA);
				setState(277);
				match(DOT);
				setState(278);
				((TrackContext)_localctx).element = match(Y_ELEMENT);
				setState(279);
				match(DOT);
				setState(280);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(281);
				match(OPN_PAR);
				setState(282);
				match(CLS_PAR);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(284);
				match(OPN_BRA);
				setState(285);
				((TrackContext)_localctx).key = expr(0);
				setState(286);
				match(CLS_BRA);
				setState(287);
				match(DOT);
				setState(288);
				((TrackContext)_localctx).element = match(Y_ELEMENT);
				setState(289);
				match(DOT);
				setState(290);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(291);
				match(OPN_PAR);
				setState(292);
				((TrackContext)_localctx).xE = expr(0);
				setState(293);
				match(CLS_PAR);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(295);
				match(OPN_BRA);
				setState(296);
				((TrackContext)_localctx).key = expr(0);
				setState(297);
				match(CLS_BRA);
				setState(298);
				match(DOT);
				setState(299);
				((TrackContext)_localctx).element = match(Y_ELEMENT);
				setState(300);
				match(DOT);
				setState(301);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(302);
				match(OPN_PAR);
				setState(303);
				((TrackContext)_localctx).x = nullableExpr();
				setState(304);
				match(COMMA);
				setState(305);
				((TrackContext)_localctx).radius = nullableExpr();
				setState(306);
				match(CLS_PAR);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(308);
				match(OPN_BRA);
				setState(309);
				((TrackContext)_localctx).key = expr(0);
				setState(310);
				match(CLS_BRA);
				setState(311);
				match(DOT);
				setState(312);
				((TrackContext)_localctx).func = match(POSITION);
				setState(313);
				match(OPN_PAR);
				setState(314);
				((TrackContext)_localctx).x = nullableExpr();
				setState(315);
				match(COMMA);
				setState(316);
				((TrackContext)_localctx).y = nullableExpr();
				setState(317);
				match(CLS_PAR);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(319);
				match(OPN_BRA);
				setState(320);
				((TrackContext)_localctx).key = expr(0);
				setState(321);
				match(CLS_BRA);
				setState(322);
				match(DOT);
				setState(323);
				((TrackContext)_localctx).func = match(POSITION);
				setState(324);
				match(OPN_PAR);
				setState(325);
				((TrackContext)_localctx).x = nullableExpr();
				setState(326);
				match(COMMA);
				setState(327);
				((TrackContext)_localctx).y = nullableExpr();
				setState(328);
				match(COMMA);
				setState(329);
				((TrackContext)_localctx).radiusH = nullableExpr();
				setState(330);
				match(CLS_PAR);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(332);
				match(OPN_BRA);
				setState(333);
				((TrackContext)_localctx).key = expr(0);
				setState(334);
				match(CLS_BRA);
				setState(335);
				match(DOT);
				setState(336);
				((TrackContext)_localctx).func = match(POSITION);
				setState(337);
				match(OPN_PAR);
				setState(338);
				((TrackContext)_localctx).x = nullableExpr();
				setState(339);
				match(COMMA);
				setState(340);
				((TrackContext)_localctx).y = nullableExpr();
				setState(341);
				match(COMMA);
				setState(342);
				((TrackContext)_localctx).radiusH = nullableExpr();
				setState(343);
				match(COMMA);
				setState(344);
				((TrackContext)_localctx).radiusV = nullableExpr();
				setState(345);
				match(CLS_PAR);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(347);
				match(OPN_BRA);
				setState(348);
				((TrackContext)_localctx).key = expr(0);
				setState(349);
				match(CLS_BRA);
				setState(350);
				match(DOT);
				setState(351);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(352);
				match(DOT);
				setState(353);
				((TrackContext)_localctx).func = match(SET_CENTER);
				setState(354);
				match(OPN_PAR);
				setState(355);
				((TrackContext)_localctx).x = nullableExpr();
				setState(356);
				match(CLS_PAR);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(358);
				match(OPN_BRA);
				setState(359);
				((TrackContext)_localctx).key = expr(0);
				setState(360);
				match(CLS_BRA);
				setState(361);
				match(DOT);
				setState(362);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(363);
				match(DOT);
				setState(364);
				((TrackContext)_localctx).func = match(SET_GAUGE);
				setState(365);
				match(OPN_PAR);
				setState(366);
				((TrackContext)_localctx).gauge = nullableExpr();
				setState(367);
				match(CLS_PAR);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(369);
				match(OPN_BRA);
				setState(370);
				((TrackContext)_localctx).key = expr(0);
				setState(371);
				match(CLS_BRA);
				setState(372);
				match(DOT);
				setState(373);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(374);
				match(DOT);
				setState(375);
				((TrackContext)_localctx).func = match(SET_FUNCTION);
				setState(376);
				match(OPN_PAR);
				setState(377);
				((TrackContext)_localctx).id = nullableExpr();
				setState(378);
				match(CLS_PAR);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(380);
				match(OPN_BRA);
				setState(381);
				((TrackContext)_localctx).key = expr(0);
				setState(382);
				match(CLS_BRA);
				setState(383);
				match(DOT);
				setState(384);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(385);
				match(DOT);
				setState(386);
				((TrackContext)_localctx).func = match(BEGIN_TRANSITION);
				setState(387);
				match(OPN_PAR);
				setState(388);
				match(CLS_PAR);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(390);
				match(OPN_BRA);
				setState(391);
				((TrackContext)_localctx).key = expr(0);
				setState(392);
				match(CLS_BRA);
				setState(393);
				match(DOT);
				setState(394);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(395);
				match(DOT);
				setState(396);
				((TrackContext)_localctx).func = match(BEGIN);
				setState(397);
				match(OPN_PAR);
				setState(398);
				((TrackContext)_localctx).cant = nullableExpr();
				setState(399);
				match(CLS_PAR);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(401);
				match(OPN_BRA);
				setState(402);
				((TrackContext)_localctx).key = expr(0);
				setState(403);
				match(CLS_BRA);
				setState(404);
				match(DOT);
				setState(405);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(406);
				match(DOT);
				setState(407);
				((TrackContext)_localctx).func = match(END);
				setState(408);
				match(OPN_PAR);
				setState(409);
				match(CLS_PAR);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(411);
				match(OPN_BRA);
				setState(412);
				((TrackContext)_localctx).key = expr(0);
				setState(413);
				match(CLS_BRA);
				setState(414);
				match(DOT);
				setState(415);
				((TrackContext)_localctx).element = match(CANT_ELEMENT);
				setState(416);
				match(DOT);
				setState(417);
				((TrackContext)_localctx).func = match(INTERPOLATE);
				setState(418);
				match(OPN_PAR);
				setState(420);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (NUM - 66)) | (1L << (DISTANCE - 66)) | (1L << (PLUS - 66)) | (1L << (MINUS - 66)) | (1L << (ABS - 66)) | (1L << (ATAN2 - 66)) | (1L << (CEIL - 66)) | (1L << (COS - 66)) | (1L << (EXP - 66)) | (1L << (FLOOR - 66)) | (1L << (LOG - 66)) | (1L << (POW - 66)) | (1L << (RAND - 66)) | (1L << (SIN - 66)) | (1L << (SQRT - 66)) | (1L << (OPN_PAR - 66)) | (1L << (VAR_START - 66)) | (1L << (QUOTE - 66)))) != 0)) {
					{
					setState(419);
					((TrackContext)_localctx).cantE = expr(0);
					}
				}

				setState(422);
				match(CLS_PAR);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(424);
				match(OPN_BRA);
				setState(425);
				((TrackContext)_localctx).key = expr(0);
				setState(426);
				match(CLS_BRA);
				setState(427);
				match(DOT);
				setState(428);
				((TrackContext)_localctx).func = match(CANT_ELEMENT);
				setState(429);
				match(OPN_PAR);
				setState(430);
				((TrackContext)_localctx).cantE = expr(0);
				setState(431);
				match(CLS_PAR);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(433);
				match(OPN_BRA);
				setState(434);
				((TrackContext)_localctx).key = expr(0);
				setState(435);
				match(CLS_BRA);
				setState(436);
				match(DOT);
				setState(437);
				((TrackContext)_localctx).func = match(GAUGE);
				setState(438);
				match(OPN_PAR);
				setState(439);
				((TrackContext)_localctx).gauge = nullableExpr();
				setState(440);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructureContext extends ParserRuleContext {
		public Token func;
		public StringContext path;
		public ExprContext key;
		public NullableExprContext trackkey;
		public NullableExprContext x;
		public NullableExprContext y;
		public NullableExprContext z;
		public NullableExprContext rx;
		public NullableExprContext ry;
		public NullableExprContext rz;
		public NullableExprContext tilt;
		public NullableExprContext span;
		public NullableExprContext trackkey1;
		public NullableExprContext trackkey2;
		public NullableExprContext flag;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode LOAD() { return getToken(MapGrammarParser.LOAD, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUT() { return getToken(MapGrammarParser.PUT, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode PUT0() { return getToken(MapGrammarParser.PUT0, 0); }
		public TerminalNode PUTBETWEEN() { return getToken(MapGrammarParser.PUTBETWEEN, 0); }
		public StructureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structure; }
	}

	public final StructureContext structure() throws RecognitionException {
		StructureContext _localctx = new StructureContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_structure);
		int _la;
		try {
			setState(503);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(444);
				match(DOT);
				setState(445);
				((StructureContext)_localctx).func = match(LOAD);
				setState(446);
				match(OPN_PAR);
				setState(447);
				((StructureContext)_localctx).path = string();
				setState(448);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(450);
				match(OPN_BRA);
				setState(451);
				((StructureContext)_localctx).key = expr(0);
				setState(452);
				match(CLS_BRA);
				setState(453);
				match(DOT);
				setState(454);
				((StructureContext)_localctx).func = match(PUT);
				setState(455);
				match(OPN_PAR);
				setState(456);
				((StructureContext)_localctx).trackkey = nullableExpr();
				setState(457);
				match(COMMA);
				setState(458);
				((StructureContext)_localctx).x = nullableExpr();
				setState(459);
				match(COMMA);
				setState(460);
				((StructureContext)_localctx).y = nullableExpr();
				setState(461);
				match(COMMA);
				setState(462);
				((StructureContext)_localctx).z = nullableExpr();
				setState(463);
				match(COMMA);
				setState(464);
				((StructureContext)_localctx).rx = nullableExpr();
				setState(465);
				match(COMMA);
				setState(466);
				((StructureContext)_localctx).ry = nullableExpr();
				setState(467);
				match(COMMA);
				setState(468);
				((StructureContext)_localctx).rz = nullableExpr();
				setState(469);
				match(COMMA);
				setState(470);
				((StructureContext)_localctx).tilt = nullableExpr();
				setState(471);
				match(COMMA);
				setState(472);
				((StructureContext)_localctx).span = nullableExpr();
				setState(473);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(475);
				match(OPN_BRA);
				setState(476);
				((StructureContext)_localctx).key = expr(0);
				setState(477);
				match(CLS_BRA);
				setState(478);
				match(DOT);
				setState(479);
				((StructureContext)_localctx).func = match(PUT0);
				setState(480);
				match(OPN_PAR);
				setState(481);
				((StructureContext)_localctx).trackkey = nullableExpr();
				setState(482);
				match(COMMA);
				setState(483);
				((StructureContext)_localctx).tilt = nullableExpr();
				setState(484);
				match(COMMA);
				setState(485);
				((StructureContext)_localctx).span = nullableExpr();
				setState(486);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(488);
				match(OPN_BRA);
				setState(489);
				((StructureContext)_localctx).key = expr(0);
				setState(490);
				match(CLS_BRA);
				setState(491);
				match(DOT);
				setState(492);
				((StructureContext)_localctx).func = match(PUTBETWEEN);
				setState(493);
				match(OPN_PAR);
				setState(494);
				((StructureContext)_localctx).trackkey1 = nullableExpr();
				setState(495);
				match(COMMA);
				setState(496);
				((StructureContext)_localctx).trackkey2 = nullableExpr();
				setState(499);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(497);
					match(COMMA);
					setState(498);
					((StructureContext)_localctx).flag = nullableExpr();
					}
				}

				setState(501);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RepeaterContext extends ParserRuleContext {
		public ExprContext key;
		public Token func;
		public NullableExprContext trackkey;
		public NullableExprContext x;
		public NullableExprContext y;
		public NullableExprContext z;
		public NullableExprContext rx;
		public NullableExprContext ry;
		public NullableExprContext rz;
		public NullableExprContext tilt;
		public NullableExprContext span;
		public NullableExprContext interval;
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode BEGIN() { return getToken(MapGrammarParser.BEGIN, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public List<StrkeyContext> strkey() {
			return getRuleContexts(StrkeyContext.class);
		}
		public StrkeyContext strkey(int i) {
			return getRuleContext(StrkeyContext.class,i);
		}
		public TerminalNode BEGIN0() { return getToken(MapGrammarParser.BEGIN0, 0); }
		public TerminalNode END() { return getToken(MapGrammarParser.END, 0); }
		public RepeaterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repeater; }
	}

	public final RepeaterContext repeater() throws RecognitionException {
		RepeaterContext _localctx = new RepeaterContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_repeater);
		int _la;
		try {
			setState(565);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(505);
				match(OPN_BRA);
				setState(506);
				((RepeaterContext)_localctx).key = expr(0);
				setState(507);
				match(CLS_BRA);
				setState(508);
				match(DOT);
				setState(509);
				((RepeaterContext)_localctx).func = match(BEGIN);
				setState(510);
				match(OPN_PAR);
				setState(511);
				((RepeaterContext)_localctx).trackkey = nullableExpr();
				setState(512);
				match(COMMA);
				setState(513);
				((RepeaterContext)_localctx).x = nullableExpr();
				setState(514);
				match(COMMA);
				setState(515);
				((RepeaterContext)_localctx).y = nullableExpr();
				setState(516);
				match(COMMA);
				setState(517);
				((RepeaterContext)_localctx).z = nullableExpr();
				setState(518);
				match(COMMA);
				setState(519);
				((RepeaterContext)_localctx).rx = nullableExpr();
				setState(520);
				match(COMMA);
				setState(521);
				((RepeaterContext)_localctx).ry = nullableExpr();
				setState(522);
				match(COMMA);
				setState(523);
				((RepeaterContext)_localctx).rz = nullableExpr();
				setState(524);
				match(COMMA);
				setState(525);
				((RepeaterContext)_localctx).tilt = nullableExpr();
				setState(526);
				match(COMMA);
				setState(527);
				((RepeaterContext)_localctx).span = nullableExpr();
				setState(528);
				match(COMMA);
				setState(529);
				((RepeaterContext)_localctx).interval = nullableExpr();
				setState(531); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(530);
					strkey();
					}
					}
					setState(533); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==COMMA );
				setState(535);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(537);
				match(OPN_BRA);
				setState(538);
				((RepeaterContext)_localctx).key = expr(0);
				setState(539);
				match(CLS_BRA);
				setState(540);
				match(DOT);
				setState(541);
				((RepeaterContext)_localctx).func = match(BEGIN0);
				setState(542);
				match(OPN_PAR);
				setState(543);
				((RepeaterContext)_localctx).trackkey = nullableExpr();
				setState(544);
				match(COMMA);
				setState(545);
				((RepeaterContext)_localctx).tilt = nullableExpr();
				setState(546);
				match(COMMA);
				setState(547);
				((RepeaterContext)_localctx).span = nullableExpr();
				setState(548);
				match(COMMA);
				setState(549);
				((RepeaterContext)_localctx).interval = nullableExpr();
				setState(551); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(550);
					strkey();
					}
					}
					setState(553); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==COMMA );
				setState(555);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(557);
				match(OPN_BRA);
				setState(558);
				((RepeaterContext)_localctx).key = expr(0);
				setState(559);
				match(CLS_BRA);
				setState(560);
				match(DOT);
				setState(561);
				((RepeaterContext)_localctx).func = match(END);
				setState(562);
				match(OPN_PAR);
				setState(563);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BackgroundContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext structurekey;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public BackgroundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_background; }
	}

	public final BackgroundContext background() throws RecognitionException {
		BackgroundContext _localctx = new BackgroundContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_background);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(567);
			match(DOT);
			setState(568);
			((BackgroundContext)_localctx).func = match(CHANGE);
			setState(569);
			match(OPN_PAR);
			setState(570);
			((BackgroundContext)_localctx).structurekey = nullableExpr();
			setState(571);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StationContext extends ParserRuleContext {
		public Token func;
		public StringContext path;
		public ExprContext key;
		public NullableExprContext door;
		public NullableExprContext margin1;
		public NullableExprContext margin2;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode LOAD() { return getToken(MapGrammarParser.LOAD, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUT() { return getToken(MapGrammarParser.PUT, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public StationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_station; }
	}

	public final StationContext station() throws RecognitionException {
		StationContext _localctx = new StationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_station);
		try {
			setState(592);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOT:
				enterOuterAlt(_localctx, 1);
				{
				setState(573);
				match(DOT);
				setState(574);
				((StationContext)_localctx).func = match(LOAD);
				setState(575);
				match(OPN_PAR);
				setState(576);
				((StationContext)_localctx).path = string();
				setState(577);
				match(CLS_PAR);
				}
				break;
			case OPN_BRA:
				enterOuterAlt(_localctx, 2);
				{
				setState(579);
				match(OPN_BRA);
				setState(580);
				((StationContext)_localctx).key = expr(0);
				setState(581);
				match(CLS_BRA);
				setState(582);
				match(DOT);
				setState(583);
				((StationContext)_localctx).func = match(PUT);
				setState(584);
				match(OPN_PAR);
				setState(585);
				((StationContext)_localctx).door = nullableExpr();
				setState(586);
				match(COMMA);
				setState(587);
				((StationContext)_localctx).margin1 = nullableExpr();
				setState(588);
				match(COMMA);
				setState(589);
				((StationContext)_localctx).margin2 = nullableExpr();
				setState(590);
				match(CLS_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SectionContext extends ParserRuleContext {
		public Token func;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode BEGIN() { return getToken(MapGrammarParser.BEGIN, 0); }
		public TerminalNode BEGIN_NEW() { return getToken(MapGrammarParser.BEGIN_NEW, 0); }
		public List<ExprArgsContext> exprArgs() {
			return getRuleContexts(ExprArgsContext.class);
		}
		public ExprArgsContext exprArgs(int i) {
			return getRuleContext(ExprArgsContext.class,i);
		}
		public TerminalNode SET_SPEEDLIMIT() { return getToken(MapGrammarParser.SET_SPEEDLIMIT, 0); }
		public SectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_section; }
	}

	public final SectionContext section() throws RecognitionException {
		SectionContext _localctx = new SectionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_section);
		int _la;
		try {
			setState(618);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(594);
				match(DOT);
				setState(595);
				((SectionContext)_localctx).func = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==BEGIN || _la==BEGIN_NEW) ) {
					((SectionContext)_localctx).func = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(596);
				match(OPN_PAR);
				setState(597);
				nullableExpr();
				setState(601);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(598);
					exprArgs();
					}
					}
					setState(603);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(604);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(606);
				match(DOT);
				setState(607);
				((SectionContext)_localctx).func = match(SET_SPEEDLIMIT);
				setState(608);
				match(OPN_PAR);
				setState(609);
				nullableExpr();
				setState(613);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(610);
					exprArgs();
					}
					}
					setState(615);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(616);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SignalContext extends ParserRuleContext {
		public Token func;
		public StringContext path;
		public ExprContext key;
		public NullableExprContext sectionArgs;
		public NullableExprContext trackkey;
		public NullableExprContext x;
		public NullableExprContext y;
		public NullableExprContext z;
		public NullableExprContext rx;
		public NullableExprContext ry;
		public NullableExprContext rz;
		public NullableExprContext tilt;
		public NullableExprContext span;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode LOAD() { return getToken(MapGrammarParser.LOAD, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode SPEEDLIMIT() { return getToken(MapGrammarParser.SPEEDLIMIT, 0); }
		public List<ExprArgsContext> exprArgs() {
			return getRuleContexts(ExprArgsContext.class);
		}
		public ExprArgsContext exprArgs(int i) {
			return getRuleContext(ExprArgsContext.class,i);
		}
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUT() { return getToken(MapGrammarParser.PUT, 0); }
		public SignalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_signal; }
	}

	public final SignalContext signal() throws RecognitionException {
		SignalContext _localctx = new SignalContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_signal);
		int _la;
		try {
			setState(680);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(620);
				match(DOT);
				setState(621);
				((SignalContext)_localctx).func = match(LOAD);
				setState(622);
				match(OPN_PAR);
				setState(623);
				((SignalContext)_localctx).path = string();
				setState(624);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(626);
				match(DOT);
				setState(627);
				((SignalContext)_localctx).func = match(SPEEDLIMIT);
				setState(628);
				match(OPN_PAR);
				setState(629);
				nullableExpr();
				setState(633);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(630);
					exprArgs();
					}
					}
					setState(635);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(636);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(638);
				match(OPN_BRA);
				setState(639);
				((SignalContext)_localctx).key = expr(0);
				setState(640);
				match(CLS_BRA);
				setState(641);
				match(DOT);
				setState(642);
				((SignalContext)_localctx).func = match(PUT);
				setState(643);
				match(OPN_PAR);
				setState(644);
				((SignalContext)_localctx).sectionArgs = nullableExpr();
				setState(645);
				match(COMMA);
				setState(646);
				((SignalContext)_localctx).trackkey = nullableExpr();
				setState(647);
				match(COMMA);
				setState(648);
				((SignalContext)_localctx).x = nullableExpr();
				setState(649);
				match(COMMA);
				setState(650);
				((SignalContext)_localctx).y = nullableExpr();
				setState(651);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(653);
				match(OPN_BRA);
				setState(654);
				((SignalContext)_localctx).key = expr(0);
				setState(655);
				match(CLS_BRA);
				setState(656);
				match(DOT);
				setState(657);
				((SignalContext)_localctx).func = match(PUT);
				setState(658);
				match(OPN_PAR);
				setState(659);
				((SignalContext)_localctx).sectionArgs = nullableExpr();
				setState(660);
				match(COMMA);
				setState(661);
				((SignalContext)_localctx).trackkey = nullableExpr();
				setState(662);
				match(COMMA);
				setState(663);
				((SignalContext)_localctx).x = nullableExpr();
				setState(664);
				match(COMMA);
				setState(665);
				((SignalContext)_localctx).y = nullableExpr();
				setState(666);
				match(COMMA);
				setState(667);
				((SignalContext)_localctx).z = nullableExpr();
				setState(668);
				match(COMMA);
				setState(669);
				((SignalContext)_localctx).rx = nullableExpr();
				setState(670);
				match(COMMA);
				setState(671);
				((SignalContext)_localctx).ry = nullableExpr();
				setState(672);
				match(COMMA);
				setState(673);
				((SignalContext)_localctx).rz = nullableExpr();
				setState(674);
				match(COMMA);
				setState(675);
				((SignalContext)_localctx).tilt = nullableExpr();
				setState(676);
				match(COMMA);
				setState(677);
				((SignalContext)_localctx).span = nullableExpr();
				setState(678);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BeaconContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext type;
		public NullableExprContext sectionArgs;
		public NullableExprContext sendData;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode PUT() { return getToken(MapGrammarParser.PUT, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public BeaconContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beacon; }
	}

	public final BeaconContext beacon() throws RecognitionException {
		BeaconContext _localctx = new BeaconContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_beacon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(682);
			match(DOT);
			setState(683);
			((BeaconContext)_localctx).func = match(PUT);
			setState(684);
			match(OPN_PAR);
			setState(685);
			((BeaconContext)_localctx).type = nullableExpr();
			setState(686);
			match(COMMA);
			setState(687);
			((BeaconContext)_localctx).sectionArgs = nullableExpr();
			setState(688);
			match(COMMA);
			setState(689);
			((BeaconContext)_localctx).sendData = nullableExpr();
			setState(690);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpeedlimitContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext v;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode BEGIN() { return getToken(MapGrammarParser.BEGIN, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public TerminalNode END() { return getToken(MapGrammarParser.END, 0); }
		public SpeedlimitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_speedlimit; }
	}

	public final SpeedlimitContext speedlimit() throws RecognitionException {
		SpeedlimitContext _localctx = new SpeedlimitContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_speedlimit);
		try {
			setState(702);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(692);
				match(DOT);
				setState(693);
				((SpeedlimitContext)_localctx).func = match(BEGIN);
				setState(694);
				match(OPN_PAR);
				setState(695);
				((SpeedlimitContext)_localctx).v = nullableExpr();
				setState(696);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(698);
				match(DOT);
				setState(699);
				((SpeedlimitContext)_localctx).func = match(END);
				setState(700);
				match(OPN_PAR);
				setState(701);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PretrainContext extends ParserRuleContext {
		public Token func;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode PASS() { return getToken(MapGrammarParser.PASS, 0); }
		public PretrainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pretrain; }
	}

	public final PretrainContext pretrain() throws RecognitionException {
		PretrainContext _localctx = new PretrainContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_pretrain);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(704);
			match(DOT);
			setState(705);
			((PretrainContext)_localctx).func = match(PASS);
			setState(706);
			match(OPN_PAR);
			setState(707);
			nullableExpr();
			setState(708);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LightContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext red;
		public NullableExprContext green;
		public NullableExprContext blue;
		public NullableExprContext pitch;
		public NullableExprContext yaw;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode AMBIENT() { return getToken(MapGrammarParser.AMBIENT, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode DIFFUSE() { return getToken(MapGrammarParser.DIFFUSE, 0); }
		public TerminalNode DIRECTION() { return getToken(MapGrammarParser.DIRECTION, 0); }
		public LightContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_light; }
	}

	public final LightContext light() throws RecognitionException {
		LightContext _localctx = new LightContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_light);
		try {
			setState(738);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(710);
				match(DOT);
				setState(711);
				((LightContext)_localctx).func = match(AMBIENT);
				setState(712);
				match(OPN_PAR);
				setState(713);
				((LightContext)_localctx).red = nullableExpr();
				setState(714);
				match(COMMA);
				setState(715);
				((LightContext)_localctx).green = nullableExpr();
				setState(716);
				match(COMMA);
				setState(717);
				((LightContext)_localctx).blue = nullableExpr();
				setState(718);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(720);
				match(DOT);
				setState(721);
				((LightContext)_localctx).func = match(DIFFUSE);
				setState(722);
				match(OPN_PAR);
				setState(723);
				((LightContext)_localctx).red = nullableExpr();
				setState(724);
				match(COMMA);
				setState(725);
				((LightContext)_localctx).green = nullableExpr();
				setState(726);
				match(COMMA);
				setState(727);
				((LightContext)_localctx).blue = nullableExpr();
				setState(728);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(730);
				match(DOT);
				setState(731);
				((LightContext)_localctx).func = match(DIRECTION);
				setState(732);
				match(OPN_PAR);
				setState(733);
				((LightContext)_localctx).pitch = nullableExpr();
				setState(734);
				match(COMMA);
				setState(735);
				((LightContext)_localctx).yaw = nullableExpr();
				setState(736);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FogContext extends ParserRuleContext {
		public Token func;
		public ExprContext densityE;
		public NullableExprContext density;
		public NullableExprContext red;
		public NullableExprContext green;
		public NullableExprContext blue;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode INTERPOLATE() { return getToken(MapGrammarParser.INTERPOLATE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode SET() { return getToken(MapGrammarParser.SET, 0); }
		public FogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fog; }
	}

	public final FogContext fog() throws RecognitionException {
		FogContext _localctx = new FogContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_fog);
		int _la;
		try {
			setState(762);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(740);
				match(DOT);
				setState(741);
				((FogContext)_localctx).func = match(INTERPOLATE);
				setState(742);
				match(OPN_PAR);
				setState(743);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(744);
				match(DOT);
				setState(745);
				((FogContext)_localctx).func = match(INTERPOLATE);
				setState(746);
				match(OPN_PAR);
				setState(747);
				((FogContext)_localctx).densityE = expr(0);
				setState(748);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(750);
				match(DOT);
				setState(751);
				((FogContext)_localctx).func = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==SET || _la==INTERPOLATE) ) {
					((FogContext)_localctx).func = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(752);
				match(OPN_PAR);
				setState(753);
				((FogContext)_localctx).density = nullableExpr();
				setState(754);
				match(COMMA);
				setState(755);
				((FogContext)_localctx).red = nullableExpr();
				setState(756);
				match(COMMA);
				setState(757);
				((FogContext)_localctx).green = nullableExpr();
				setState(758);
				match(COMMA);
				setState(759);
				((FogContext)_localctx).blue = nullableExpr();
				setState(760);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DrawdistanceContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext value;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public DrawdistanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_drawdistance; }
	}

	public final DrawdistanceContext drawdistance() throws RecognitionException {
		DrawdistanceContext _localctx = new DrawdistanceContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_drawdistance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			match(DOT);
			setState(765);
			((DrawdistanceContext)_localctx).func = match(CHANGE);
			setState(766);
			match(OPN_PAR);
			setState(767);
			((DrawdistanceContext)_localctx).value = nullableExpr();
			setState(768);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CabilluminanceContext extends ParserRuleContext {
		public Token func;
		public ExprContext value;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode INTERPOLATE() { return getToken(MapGrammarParser.INTERPOLATE, 0); }
		public TerminalNode SET() { return getToken(MapGrammarParser.SET, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public CabilluminanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cabilluminance; }
	}

	public final CabilluminanceContext cabilluminance() throws RecognitionException {
		CabilluminanceContext _localctx = new CabilluminanceContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_cabilluminance);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(770);
			match(DOT);
			setState(771);
			((CabilluminanceContext)_localctx).func = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==SET || _la==INTERPOLATE) ) {
				((CabilluminanceContext)_localctx).func = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(772);
			match(OPN_PAR);
			setState(774);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (NUM - 66)) | (1L << (DISTANCE - 66)) | (1L << (PLUS - 66)) | (1L << (MINUS - 66)) | (1L << (ABS - 66)) | (1L << (ATAN2 - 66)) | (1L << (CEIL - 66)) | (1L << (COS - 66)) | (1L << (EXP - 66)) | (1L << (FLOOR - 66)) | (1L << (LOG - 66)) | (1L << (POW - 66)) | (1L << (RAND - 66)) | (1L << (SIN - 66)) | (1L << (SQRT - 66)) | (1L << (OPN_PAR - 66)) | (1L << (VAR_START - 66)) | (1L << (QUOTE - 66)))) != 0)) {
				{
				setState(773);
				((CabilluminanceContext)_localctx).value = expr(0);
				}
			}

			setState(776);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IrregularityContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext x;
		public NullableExprContext y;
		public NullableExprContext r;
		public NullableExprContext lx;
		public NullableExprContext ly;
		public NullableExprContext lr;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public IrregularityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_irregularity; }
	}

	public final IrregularityContext irregularity() throws RecognitionException {
		IrregularityContext _localctx = new IrregularityContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_irregularity);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(778);
			match(DOT);
			setState(779);
			((IrregularityContext)_localctx).func = match(CHANGE);
			setState(780);
			match(OPN_PAR);
			setState(781);
			((IrregularityContext)_localctx).x = nullableExpr();
			setState(782);
			match(COMMA);
			setState(783);
			((IrregularityContext)_localctx).y = nullableExpr();
			setState(784);
			match(COMMA);
			setState(785);
			((IrregularityContext)_localctx).r = nullableExpr();
			setState(786);
			match(COMMA);
			setState(787);
			((IrregularityContext)_localctx).lx = nullableExpr();
			setState(788);
			match(COMMA);
			setState(789);
			((IrregularityContext)_localctx).ly = nullableExpr();
			setState(790);
			match(COMMA);
			setState(791);
			((IrregularityContext)_localctx).lr = nullableExpr();
			setState(792);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AdhesionContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext a;
		public NullableExprContext b;
		public NullableExprContext c;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public AdhesionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_adhesion; }
	}

	public final AdhesionContext adhesion() throws RecognitionException {
		AdhesionContext _localctx = new AdhesionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_adhesion);
		try {
			setState(810);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(794);
				match(DOT);
				setState(795);
				((AdhesionContext)_localctx).func = match(CHANGE);
				setState(796);
				match(OPN_PAR);
				setState(797);
				((AdhesionContext)_localctx).a = nullableExpr();
				setState(798);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(800);
				match(DOT);
				setState(801);
				((AdhesionContext)_localctx).func = match(CHANGE);
				setState(802);
				match(OPN_PAR);
				setState(803);
				((AdhesionContext)_localctx).a = nullableExpr();
				setState(804);
				match(COMMA);
				setState(805);
				((AdhesionContext)_localctx).b = nullableExpr();
				setState(806);
				match(COMMA);
				setState(807);
				((AdhesionContext)_localctx).c = nullableExpr();
				setState(808);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundContext extends ParserRuleContext {
		public Token func;
		public StringContext path;
		public ExprContext key;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode LOAD() { return getToken(MapGrammarParser.LOAD, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PLAY() { return getToken(MapGrammarParser.PLAY, 0); }
		public SoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sound; }
	}

	public final SoundContext sound() throws RecognitionException {
		SoundContext _localctx = new SoundContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_sound);
		try {
			setState(826);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOT:
				enterOuterAlt(_localctx, 1);
				{
				setState(812);
				match(DOT);
				setState(813);
				((SoundContext)_localctx).func = match(LOAD);
				setState(814);
				match(OPN_PAR);
				setState(815);
				((SoundContext)_localctx).path = string();
				setState(816);
				match(CLS_PAR);
				}
				break;
			case OPN_BRA:
				enterOuterAlt(_localctx, 2);
				{
				setState(818);
				match(OPN_BRA);
				setState(819);
				((SoundContext)_localctx).key = expr(0);
				setState(820);
				match(CLS_BRA);
				setState(821);
				match(DOT);
				setState(822);
				((SoundContext)_localctx).func = match(PLAY);
				setState(823);
				match(OPN_PAR);
				setState(824);
				match(CLS_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sound3dContext extends ParserRuleContext {
		public Token func;
		public StringContext path;
		public ExprContext key;
		public NullableExprContext x;
		public NullableExprContext y;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode LOAD() { return getToken(MapGrammarParser.LOAD, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public TerminalNode COMMA() { return getToken(MapGrammarParser.COMMA, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PUT() { return getToken(MapGrammarParser.PUT, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public Sound3dContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sound3d; }
	}

	public final Sound3dContext sound3d() throws RecognitionException {
		Sound3dContext _localctx = new Sound3dContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_sound3d);
		try {
			setState(845);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOT:
				enterOuterAlt(_localctx, 1);
				{
				setState(828);
				match(DOT);
				setState(829);
				((Sound3dContext)_localctx).func = match(LOAD);
				setState(830);
				match(OPN_PAR);
				setState(831);
				((Sound3dContext)_localctx).path = string();
				setState(832);
				match(CLS_PAR);
				}
				break;
			case OPN_BRA:
				enterOuterAlt(_localctx, 2);
				{
				setState(834);
				match(OPN_BRA);
				setState(835);
				((Sound3dContext)_localctx).key = expr(0);
				setState(836);
				match(CLS_BRA);
				setState(837);
				match(DOT);
				setState(838);
				((Sound3dContext)_localctx).func = match(PUT);
				setState(839);
				match(OPN_PAR);
				setState(840);
				((Sound3dContext)_localctx).x = nullableExpr();
				setState(841);
				match(COMMA);
				setState(842);
				((Sound3dContext)_localctx).y = nullableExpr();
				setState(843);
				match(CLS_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RollingnoiseContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext index;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public RollingnoiseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rollingnoise; }
	}

	public final RollingnoiseContext rollingnoise() throws RecognitionException {
		RollingnoiseContext _localctx = new RollingnoiseContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_rollingnoise);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(847);
			match(DOT);
			setState(848);
			((RollingnoiseContext)_localctx).func = match(CHANGE);
			setState(849);
			match(OPN_PAR);
			setState(850);
			((RollingnoiseContext)_localctx).index = nullableExpr();
			setState(851);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FlangenoiseContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext index;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CHANGE() { return getToken(MapGrammarParser.CHANGE, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public FlangenoiseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_flangenoise; }
	}

	public final FlangenoiseContext flangenoise() throws RecognitionException {
		FlangenoiseContext _localctx = new FlangenoiseContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_flangenoise);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(853);
			match(DOT);
			setState(854);
			((FlangenoiseContext)_localctx).func = match(CHANGE);
			setState(855);
			match(OPN_PAR);
			setState(856);
			((FlangenoiseContext)_localctx).index = nullableExpr();
			setState(857);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JointnoiseContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext index;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode PLAY() { return getToken(MapGrammarParser.PLAY, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public JointnoiseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jointnoise; }
	}

	public final JointnoiseContext jointnoise() throws RecognitionException {
		JointnoiseContext _localctx = new JointnoiseContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_jointnoise);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(859);
			match(DOT);
			setState(860);
			((JointnoiseContext)_localctx).func = match(PLAY);
			setState(861);
			match(OPN_PAR);
			setState(862);
			((JointnoiseContext)_localctx).index = nullableExpr();
			setState(863);
			match(CLS_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrainContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext trainkey;
		public ExprContext path;
		public NullableExprContext trackkey;
		public NullableExprContext direction;
		public ExprContext key;
		public NullableExprContext time;
		public NullableExprContext decelerate;
		public NullableExprContext stoptime;
		public NullableExprContext accelerate;
		public NullableExprContext speed;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode ADD() { return getToken(MapGrammarParser.ADD, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode OPN_BRA() { return getToken(MapGrammarParser.OPN_BRA, 0); }
		public TerminalNode CLS_BRA() { return getToken(MapGrammarParser.CLS_BRA, 0); }
		public TerminalNode LOAD() { return getToken(MapGrammarParser.LOAD, 0); }
		public TerminalNode ENABLE() { return getToken(MapGrammarParser.ENABLE, 0); }
		public TerminalNode STOP() { return getToken(MapGrammarParser.STOP, 0); }
		public TrainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_train; }
	}

	public final TrainContext train() throws RecognitionException {
		TrainContext _localctx = new TrainContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_train);
		try {
			setState(914);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(865);
				match(DOT);
				setState(866);
				((TrainContext)_localctx).func = match(ADD);
				setState(867);
				match(OPN_PAR);
				setState(868);
				((TrainContext)_localctx).trainkey = nullableExpr();
				setState(869);
				match(COMMA);
				setState(870);
				((TrainContext)_localctx).path = expr(0);
				setState(871);
				match(COMMA);
				setState(872);
				((TrainContext)_localctx).trackkey = nullableExpr();
				setState(873);
				match(COMMA);
				setState(874);
				((TrainContext)_localctx).direction = nullableExpr();
				setState(875);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(877);
				match(OPN_BRA);
				setState(878);
				((TrainContext)_localctx).key = expr(0);
				setState(879);
				match(CLS_BRA);
				setState(880);
				match(DOT);
				setState(881);
				((TrainContext)_localctx).func = match(LOAD);
				setState(882);
				match(OPN_PAR);
				setState(883);
				((TrainContext)_localctx).path = expr(0);
				setState(884);
				match(COMMA);
				setState(885);
				((TrainContext)_localctx).trackkey = nullableExpr();
				setState(886);
				match(COMMA);
				setState(887);
				((TrainContext)_localctx).direction = nullableExpr();
				setState(888);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(890);
				match(OPN_BRA);
				setState(891);
				((TrainContext)_localctx).key = expr(0);
				setState(892);
				match(CLS_BRA);
				setState(893);
				match(DOT);
				setState(894);
				((TrainContext)_localctx).func = match(ENABLE);
				setState(895);
				match(OPN_PAR);
				setState(896);
				((TrainContext)_localctx).time = nullableExpr();
				setState(897);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(899);
				match(OPN_BRA);
				setState(900);
				((TrainContext)_localctx).key = expr(0);
				setState(901);
				match(CLS_BRA);
				setState(902);
				match(DOT);
				setState(903);
				((TrainContext)_localctx).func = match(STOP);
				setState(904);
				match(OPN_PAR);
				setState(905);
				((TrainContext)_localctx).decelerate = nullableExpr();
				setState(906);
				match(COMMA);
				setState(907);
				((TrainContext)_localctx).stoptime = nullableExpr();
				setState(908);
				match(COMMA);
				setState(909);
				((TrainContext)_localctx).accelerate = nullableExpr();
				setState(910);
				match(COMMA);
				setState(911);
				((TrainContext)_localctx).speed = nullableExpr();
				setState(912);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrkeyContext extends ParserRuleContext {
		public StringContext key;
		public TerminalNode COMMA() { return getToken(MapGrammarParser.COMMA, 0); }
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public StrkeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strkey; }
	}

	public final StrkeyContext strkey() throws RecognitionException {
		StrkeyContext _localctx = new StrkeyContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_strkey);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(916);
			match(COMMA);
			setState(917);
			((StrkeyContext)_localctx).key = string();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprArgsContext extends ParserRuleContext {
		public NullableExprContext arg;
		public TerminalNode COMMA() { return getToken(MapGrammarParser.COMMA, 0); }
		public NullableExprContext nullableExpr() {
			return getRuleContext(NullableExprContext.class,0);
		}
		public ExprArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprArgs; }
	}

	public final ExprArgsContext exprArgs() throws RecognitionException {
		ExprArgsContext _localctx = new ExprArgsContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_exprArgs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(919);
			match(COMMA);
			setState(920);
			((ExprArgsContext)_localctx).arg = nullableExpr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarAssignContext extends ParserRuleContext {
		public VarContext v;
		public TerminalNode EQUAL() { return getToken(MapGrammarParser.EQUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public VarAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varAssign; }
	}

	public final VarAssignContext varAssign() throws RecognitionException {
		VarAssignContext _localctx = new VarAssignContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_varAssign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(922);
			((VarAssignContext)_localctx).v = var();
			setState(923);
			match(EQUAL);
			setState(924);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LegacyContext extends ParserRuleContext {
		public Token func;
		public NullableExprContext arg_start;
		public NullableExprContext arg_end;
		public NullableExprContext red;
		public NullableExprContext green;
		public NullableExprContext blue;
		public NullableExprContext radius;
		public NullableExprContext cant;
		public NullableExprContext rate;
		public NullableExprContext slope;
		public TerminalNode DOT() { return getToken(MapGrammarParser.DOT, 0); }
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MapGrammarParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MapGrammarParser.COMMA, i);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode FOG() { return getToken(MapGrammarParser.FOG, 0); }
		public List<NullableExprContext> nullableExpr() {
			return getRuleContexts(NullableExprContext.class);
		}
		public NullableExprContext nullableExpr(int i) {
			return getRuleContext(NullableExprContext.class,i);
		}
		public TerminalNode CURVE() { return getToken(MapGrammarParser.CURVE, 0); }
		public TerminalNode PITCH() { return getToken(MapGrammarParser.PITCH, 0); }
		public TerminalNode TURN() { return getToken(MapGrammarParser.TURN, 0); }
		public LegacyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_legacy; }
	}

	public final LegacyContext legacy() throws RecognitionException {
		LegacyContext _localctx = new LegacyContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_legacy);
		try {
			setState(960);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(926);
				match(DOT);
				setState(927);
				((LegacyContext)_localctx).func = match(FOG);
				setState(928);
				match(OPN_PAR);
				setState(929);
				((LegacyContext)_localctx).arg_start = nullableExpr();
				setState(930);
				match(COMMA);
				setState(931);
				((LegacyContext)_localctx).arg_end = nullableExpr();
				setState(932);
				match(COMMA);
				setState(933);
				((LegacyContext)_localctx).red = nullableExpr();
				setState(934);
				match(COMMA);
				setState(935);
				((LegacyContext)_localctx).green = nullableExpr();
				setState(936);
				match(COMMA);
				setState(937);
				((LegacyContext)_localctx).blue = nullableExpr();
				setState(938);
				match(CLS_PAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(940);
				match(DOT);
				setState(941);
				((LegacyContext)_localctx).func = match(CURVE);
				setState(942);
				match(OPN_PAR);
				setState(943);
				((LegacyContext)_localctx).radius = nullableExpr();
				setState(944);
				match(COMMA);
				setState(945);
				((LegacyContext)_localctx).cant = nullableExpr();
				setState(946);
				match(CLS_PAR);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(948);
				match(DOT);
				setState(949);
				((LegacyContext)_localctx).func = match(PITCH);
				setState(950);
				match(OPN_PAR);
				setState(951);
				((LegacyContext)_localctx).rate = nullableExpr();
				setState(952);
				match(CLS_PAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(954);
				match(DOT);
				setState(955);
				((LegacyContext)_localctx).func = match(TURN);
				setState(956);
				match(OPN_PAR);
				setState(957);
				((LegacyContext)_localctx).slope = nullableExpr();
				setState(958);
				match(CLS_PAR);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NullableExprContext extends ParserRuleContext {
		public Token nullSyntax;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode NULL() { return getToken(MapGrammarParser.NULL, 0); }
		public NullableExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nullableExpr; }
	}

	public final NullableExprContext nullableExpr() throws RecognitionException {
		NullableExprContext _localctx = new NullableExprContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_nullableExpr);
		try {
			setState(965);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM:
			case DISTANCE:
			case PLUS:
			case MINUS:
			case ABS:
			case ATAN2:
			case CEIL:
			case COS:
			case EXP:
			case FLOOR:
			case LOG:
			case POW:
			case RAND:
			case SIN:
			case SQRT:
			case OPN_PAR:
			case VAR_START:
			case QUOTE:
				enterOuterAlt(_localctx, 1);
				{
				setState(962);
				expr(0);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 2);
				{
				setState(963);
				((NullableExprContext)_localctx).nullSyntax = match(NULL);
				}
				break;
			case COMMA:
			case CLS_PAR:
				enterOuterAlt(_localctx, 3);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RandExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode RAND() { return getToken(MapGrammarParser.RAND, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public RandExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class SinExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode SIN() { return getToken(MapGrammarParser.SIN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public SinExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class SqrtExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode SQRT() { return getToken(MapGrammarParser.SQRT, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public SqrtExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class NumberExprContext extends ExprContext {
		public Token num;
		public TerminalNode NUM() { return getToken(MapGrammarParser.NUM, 0); }
		public NumberExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class FloorExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode FLOOR() { return getToken(MapGrammarParser.FLOOR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public FloorExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class AbsExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode ABS() { return getToken(MapGrammarParser.ABS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AbsExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ParensExprContext extends ExprContext {
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public ParensExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class Atan2ExprContext extends ExprContext {
		public Token func;
		public ExprContext y;
		public ExprContext x;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode ATAN2() { return getToken(MapGrammarParser.ATAN2, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public Atan2ExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class LogExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode LOG() { return getToken(MapGrammarParser.LOG, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public LogExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class StringExprContext extends ExprContext {
		public StringContext str;
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public StringExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class VarExprContext extends ExprContext {
		public VarContext v;
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public VarExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class InfixExprContext extends ExprContext {
		public ExprContext left;
		public Token op;
		public ExprContext right;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MULT() { return getToken(MapGrammarParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(MapGrammarParser.DIV, 0); }
		public TerminalNode PLUS() { return getToken(MapGrammarParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(MapGrammarParser.MINUS, 0); }
		public TerminalNode MOD() { return getToken(MapGrammarParser.MOD, 0); }
		public InfixExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryExprContext extends ExprContext {
		public Token op;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(MapGrammarParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(MapGrammarParser.MINUS, 0); }
		public UnaryExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class CeilExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode CEIL() { return getToken(MapGrammarParser.CEIL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public CeilExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class CosExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode COS() { return getToken(MapGrammarParser.COS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public CosExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class ExpExprContext extends ExprContext {
		public Token func;
		public ExprContext value;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode EXP() { return getToken(MapGrammarParser.EXP, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ExpExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class DistanceExprContext extends ExprContext {
		public Token dist;
		public TerminalNode DISTANCE() { return getToken(MapGrammarParser.DISTANCE, 0); }
		public DistanceExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	public static class PowExprContext extends ExprContext {
		public Token func;
		public ExprContext x;
		public ExprContext y;
		public TerminalNode OPN_PAR() { return getToken(MapGrammarParser.OPN_PAR, 0); }
		public TerminalNode CLS_PAR() { return getToken(MapGrammarParser.CLS_PAR, 0); }
		public TerminalNode POW() { return getToken(MapGrammarParser.POW, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public PowExprContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 66;
		enterRecursionRule(_localctx, 66, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1036);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPN_PAR:
				{
				_localctx = new ParensExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(968);
				match(OPN_PAR);
				setState(969);
				expr(0);
				setState(970);
				match(CLS_PAR);
				}
				break;
			case PLUS:
			case MINUS:
				{
				_localctx = new UnaryExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(972);
				((UnaryExprContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
					((UnaryExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(973);
				expr(18);
				}
				break;
			case ABS:
				{
				_localctx = new AbsExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(974);
				((AbsExprContext)_localctx).func = match(ABS);
				setState(975);
				match(OPN_PAR);
				setState(976);
				((AbsExprContext)_localctx).value = expr(0);
				setState(977);
				match(CLS_PAR);
				}
				break;
			case ATAN2:
				{
				_localctx = new Atan2ExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(979);
				((Atan2ExprContext)_localctx).func = match(ATAN2);
				setState(980);
				match(OPN_PAR);
				setState(981);
				((Atan2ExprContext)_localctx).y = expr(0);
				setState(982);
				((Atan2ExprContext)_localctx).x = expr(0);
				setState(983);
				match(CLS_PAR);
				}
				break;
			case CEIL:
				{
				_localctx = new CeilExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(985);
				((CeilExprContext)_localctx).func = match(CEIL);
				setState(986);
				match(OPN_PAR);
				setState(987);
				((CeilExprContext)_localctx).value = expr(0);
				setState(988);
				match(CLS_PAR);
				}
				break;
			case COS:
				{
				_localctx = new CosExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(990);
				((CosExprContext)_localctx).func = match(COS);
				setState(991);
				match(OPN_PAR);
				setState(992);
				((CosExprContext)_localctx).value = expr(0);
				setState(993);
				match(CLS_PAR);
				}
				break;
			case EXP:
				{
				_localctx = new ExpExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(995);
				((ExpExprContext)_localctx).func = match(EXP);
				setState(996);
				match(OPN_PAR);
				setState(997);
				((ExpExprContext)_localctx).value = expr(0);
				setState(998);
				match(CLS_PAR);
				}
				break;
			case FLOOR:
				{
				_localctx = new FloorExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1000);
				((FloorExprContext)_localctx).func = match(FLOOR);
				setState(1001);
				match(OPN_PAR);
				setState(1002);
				((FloorExprContext)_localctx).value = expr(0);
				setState(1003);
				match(CLS_PAR);
				}
				break;
			case LOG:
				{
				_localctx = new LogExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1005);
				((LogExprContext)_localctx).func = match(LOG);
				setState(1006);
				match(OPN_PAR);
				setState(1007);
				((LogExprContext)_localctx).value = expr(0);
				setState(1008);
				match(CLS_PAR);
				}
				break;
			case POW:
				{
				_localctx = new PowExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1010);
				((PowExprContext)_localctx).func = match(POW);
				setState(1011);
				match(OPN_PAR);
				setState(1012);
				((PowExprContext)_localctx).x = expr(0);
				setState(1013);
				((PowExprContext)_localctx).y = expr(0);
				setState(1014);
				match(CLS_PAR);
				}
				break;
			case RAND:
				{
				_localctx = new RandExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1016);
				((RandExprContext)_localctx).func = match(RAND);
				setState(1017);
				match(OPN_PAR);
				setState(1019);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (NUM - 66)) | (1L << (DISTANCE - 66)) | (1L << (PLUS - 66)) | (1L << (MINUS - 66)) | (1L << (ABS - 66)) | (1L << (ATAN2 - 66)) | (1L << (CEIL - 66)) | (1L << (COS - 66)) | (1L << (EXP - 66)) | (1L << (FLOOR - 66)) | (1L << (LOG - 66)) | (1L << (POW - 66)) | (1L << (RAND - 66)) | (1L << (SIN - 66)) | (1L << (SQRT - 66)) | (1L << (OPN_PAR - 66)) | (1L << (VAR_START - 66)) | (1L << (QUOTE - 66)))) != 0)) {
					{
					setState(1018);
					((RandExprContext)_localctx).value = expr(0);
					}
				}

				setState(1021);
				match(CLS_PAR);
				}
				break;
			case SIN:
				{
				_localctx = new SinExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1022);
				((SinExprContext)_localctx).func = match(SIN);
				setState(1023);
				match(OPN_PAR);
				setState(1024);
				((SinExprContext)_localctx).value = expr(0);
				setState(1025);
				match(CLS_PAR);
				}
				break;
			case SQRT:
				{
				_localctx = new SqrtExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1027);
				((SqrtExprContext)_localctx).func = match(SQRT);
				setState(1028);
				match(OPN_PAR);
				setState(1029);
				((SqrtExprContext)_localctx).value = expr(0);
				setState(1030);
				match(CLS_PAR);
				}
				break;
			case VAR_START:
				{
				_localctx = new VarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1032);
				((VarExprContext)_localctx).v = var();
				}
				break;
			case NUM:
				{
				_localctx = new NumberExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1033);
				((NumberExprContext)_localctx).num = match(NUM);
				}
				break;
			case QUOTE:
				{
				_localctx = new StringExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1034);
				((StringExprContext)_localctx).str = string();
				}
				break;
			case DISTANCE:
				{
				_localctx = new DistanceExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1035);
				((DistanceExprContext)_localctx).dist = match(DISTANCE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(1046);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1044);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
					case 1:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						((InfixExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(1038);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(1039);
						((InfixExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MULT || _la==DIV) ) {
							((InfixExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1040);
						((InfixExprContext)_localctx).right = expr(18);
						}
						break;
					case 2:
						{
						_localctx = new InfixExprContext(new ExprContext(_parentctx, _parentState));
						((InfixExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(1041);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(1042);
						((InfixExprContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & ((1L << (PLUS - 70)) | (1L << (MINUS - 70)) | (1L << (MOD - 70)))) != 0)) ) {
							((InfixExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1043);
						((InfixExprContext)_localctx).right = expr(17);
						}
						break;
					}
					} 
				}
				setState(1048);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class VarContext extends ParserRuleContext {
		public string | undefined varName;
		public Token v;
		public TerminalNode VAR_START() { return getToken(MapGrammarParser.VAR_START, 0); }
		public TerminalNode VAR() { return getToken(MapGrammarParser.VAR, 0); }
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1049);
			match(VAR_START);
			setState(1050);
			((VarContext)_localctx).v = match(VAR);
			 ((VarContext)_localctx).varName =  (((VarContext)_localctx).v!=null?((VarContext)_localctx).v.getText():null) ;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public string | undefined value;
		public String_textContext v;
		public TerminalNode QUOTE() { return getToken(MapGrammarParser.QUOTE, 0); }
		public TerminalNode RQUOTE() { return getToken(MapGrammarParser.RQUOTE, 0); }
		public String_textContext string_text() {
			return getRuleContext(String_textContext.class,0);
		}
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1053);
			match(QUOTE);
			setState(1054);
			((StringContext)_localctx).v = string_text();
			setState(1055);
			match(RQUOTE);
			 ((StringContext)_localctx).value =  (((StringContext)_localctx).v!=null?_input.getText(((StringContext)_localctx).v.start,((StringContext)_localctx).v.stop):null) ;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class String_textContext extends ParserRuleContext {
		public List<TerminalNode> CHAR() { return getTokens(MapGrammarParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(MapGrammarParser.CHAR, i);
		}
		public String_textContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_text; }
	}

	public final String_textContext string_text() throws RecognitionException {
		String_textContext _localctx = new String_textContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_string_text);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1061);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CHAR) {
				{
				{
				setState(1058);
				match(CHAR);
				}
				}
				setState(1063);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EncodingContext extends ParserRuleContext {
		public string | undefined value;
		public Encode_stringContext v;
		public TerminalNode SELECT_ENCODE() { return getToken(MapGrammarParser.SELECT_ENCODE, 0); }
		public Encode_stringContext encode_string() {
			return getRuleContext(Encode_stringContext.class,0);
		}
		public TerminalNode ENCODE_END() { return getToken(MapGrammarParser.ENCODE_END, 0); }
		public EncodingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_encoding; }
	}

	public final EncodingContext encoding() throws RecognitionException {
		EncodingContext _localctx = new EncodingContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_encoding);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1064);
			match(SELECT_ENCODE);
			setState(1065);
			((EncodingContext)_localctx).v = encode_string();
			setState(1067);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ENCODE_END) {
				{
				setState(1066);
				match(ENCODE_END);
				}
			}

			((EncodingContext)_localctx).value =  (((EncodingContext)_localctx).v!=null?_input.getText(((EncodingContext)_localctx).v.start,((EncodingContext)_localctx).v.stop):null); 
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Encode_stringContext extends ParserRuleContext {
		public List<TerminalNode> ENCODE_CHAR() { return getTokens(MapGrammarParser.ENCODE_CHAR); }
		public TerminalNode ENCODE_CHAR(int i) {
			return getToken(MapGrammarParser.ENCODE_CHAR, i);
		}
		public Encode_stringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_encode_string; }
	}

	public final Encode_stringContext encode_string() throws RecognitionException {
		Encode_stringContext _localctx = new Encode_stringContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_encode_string);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1074);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ENCODE_CHAR) {
				{
				{
				setState(1071);
				match(ENCODE_CHAR);
				}
				}
				setState(1076);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Error_tokensContext extends ParserRuleContext {
		public List<TerminalNode> ERROR_TOKEN() { return getTokens(MapGrammarParser.ERROR_TOKEN); }
		public TerminalNode ERROR_TOKEN(int i) {
			return getToken(MapGrammarParser.ERROR_TOKEN, i);
		}
		public Error_tokensContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_error_tokens; }
	}

	public final Error_tokensContext error_tokens() throws RecognitionException {
		Error_tokensContext _localctx = new Error_tokensContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_error_tokens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1080);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ERROR_TOKEN) {
				{
				{
				setState(1077);
				match(ERROR_TOKEN);
				}
				}
				setState(1082);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 33:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 17);
		case 1:
			return precpred(_ctx, 16);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3f\u043e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\3\2\3\2\3\2\3"+
		"\2\5\2W\n\2\3\2\3\2\3\2\7\2\\\n\2\f\2\16\2_\13\2\3\2\3\2\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u0099"+
		"\n\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00bb"+
		"\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00db\n\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\5\7\u00f1\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u01a7\n\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b"+
		"\u01bd\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\5\t\u01f6\n\t\3\t\3\t\5\t\u01fa\n\t\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\6\n\u0216\n\n\r\n\16\n\u0217\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\6\n\u022a\n\n\r\n\16\n\u022b"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u0238\n\n\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\5\f\u0253\n\f\3\r\3\r\3\r\3\r\3\r\7\r\u025a\n\r"+
		"\f\r\16\r\u025d\13\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u0266\n\r\f\r\16"+
		"\r\u0269\13\r\3\r\3\r\5\r\u026d\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\7\16\u027a\n\16\f\16\16\16\u027d\13\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\5\16\u02ab\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u02c1\n\20\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\5\22\u02e5\n\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\5\23\u02fd\n\23\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\5\25\u0309\n\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u032d\n\27\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u033d"+
		"\n\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\5\31\u0350\n\31\3\32\3\32\3\32\3\32\3\32\3\32\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\5\35\u0395\n\35\3\36\3\36\3\36\3\37\3\37\3\37\3 "+
		"\3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!"+
		"\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u03c3\n!\3\"\3\"\3\"\5\""+
		"\u03c8\n\"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3"+
		"#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3"+
		"#\3#\3#\3#\3#\3#\3#\3#\3#\3#\5#\u03fe\n#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3"+
		"#\3#\3#\3#\3#\3#\5#\u040f\n#\3#\3#\3#\3#\3#\3#\7#\u0417\n#\f#\16#\u041a"+
		"\13#\3$\3$\3$\3$\3%\3%\3%\3%\3%\3&\7&\u0426\n&\f&\16&\u0429\13&\3\'\3"+
		"\'\3\'\5\'\u042e\n\'\3\'\3\'\3(\7(\u0433\n(\f(\16(\u0436\13(\3)\7)\u0439"+
		"\n)\f)\16)\u043c\13)\3)\2\3D*\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 "+
		"\"$&(*,.\60\62\64\668:<>@BDFHJLNP\2\n\3\2#$\4\2))++\4\2)),,\4\2))--\4"+
		"\2\'\'//\3\2HI\3\2JK\4\2HILL\2\u0489\2R\3\2\2\2\4\u0098\3\2\2\2\6\u009a"+
		"\3\2\2\2\b\u009c\3\2\2\2\n\u00da\3\2\2\2\f\u00f0\3\2\2\2\16\u01bc\3\2"+
		"\2\2\20\u01f9\3\2\2\2\22\u0237\3\2\2\2\24\u0239\3\2\2\2\26\u0252\3\2\2"+
		"\2\30\u026c\3\2\2\2\32\u02aa\3\2\2\2\34\u02ac\3\2\2\2\36\u02c0\3\2\2\2"+
		" \u02c2\3\2\2\2\"\u02e4\3\2\2\2$\u02fc\3\2\2\2&\u02fe\3\2\2\2(\u0304\3"+
		"\2\2\2*\u030c\3\2\2\2,\u032c\3\2\2\2.\u033c\3\2\2\2\60\u034f\3\2\2\2\62"+
		"\u0351\3\2\2\2\64\u0357\3\2\2\2\66\u035d\3\2\2\28\u0394\3\2\2\2:\u0396"+
		"\3\2\2\2<\u0399\3\2\2\2>\u039c\3\2\2\2@\u03c2\3\2\2\2B\u03c7\3\2\2\2D"+
		"\u040e\3\2\2\2F\u041b\3\2\2\2H\u041f\3\2\2\2J\u0427\3\2\2\2L\u042a\3\2"+
		"\2\2N\u0434\3\2\2\2P\u043a\3\2\2\2RS\7\3\2\2ST\7\4\2\2TV\7D\2\2UW\5L\'"+
		"\2VU\3\2\2\2VW\3\2\2\2W]\3\2\2\2XY\5\4\3\2YZ\7A\2\2Z\\\3\2\2\2[X\3\2\2"+
		"\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^`\3\2\2\2_]\3\2\2\2`a\7\2\2\3a\3\3\2"+
		"\2\2b\u0099\5\6\4\2cd\7\6\2\2d\u0099\5\b\5\2ef\7\7\2\2f\u0099\5\n\6\2"+
		"gh\7\b\2\2h\u0099\5\f\7\2ij\7\t\2\2j\u0099\5\16\b\2kl\7\n\2\2l\u0099\5"+
		"\20\t\2mn\7\13\2\2n\u0099\5\22\n\2op\7\f\2\2p\u0099\5\24\13\2qr\7\r\2"+
		"\2r\u0099\5\26\f\2st\7\16\2\2t\u0099\5\30\r\2uv\7\17\2\2v\u0099\5\32\16"+
		"\2wx\7\20\2\2x\u0099\5\34\17\2yz\7\21\2\2z\u0099\5\36\20\2{|\7\22\2\2"+
		"|\u0099\5 \21\2}~\7\23\2\2~\u0099\5\"\22\2\177\u0080\7\24\2\2\u0080\u0099"+
		"\5$\23\2\u0081\u0082\7\25\2\2\u0082\u0099\5&\24\2\u0083\u0084\7\26\2\2"+
		"\u0084\u0099\5(\25\2\u0085\u0086\7\27\2\2\u0086\u0099\5*\26\2\u0087\u0088"+
		"\7\30\2\2\u0088\u0099\5,\27\2\u0089\u008a\7\31\2\2\u008a\u0099\5.\30\2"+
		"\u008b\u008c\7\32\2\2\u008c\u0099\5\60\31\2\u008d\u008e\7\33\2\2\u008e"+
		"\u0099\5\62\32\2\u008f\u0090\7\34\2\2\u0090\u0099\5\64\33\2\u0091\u0092"+
		"\7\35\2\2\u0092\u0099\5\66\34\2\u0093\u0094\7\36\2\2\u0094\u0099\58\35"+
		"\2\u0095\u0099\5> \2\u0096\u0097\7\37\2\2\u0097\u0099\5@!\2\u0098b\3\2"+
		"\2\2\u0098c\3\2\2\2\u0098e\3\2\2\2\u0098g\3\2\2\2\u0098i\3\2\2\2\u0098"+
		"k\3\2\2\2\u0098m\3\2\2\2\u0098o\3\2\2\2\u0098q\3\2\2\2\u0098s\3\2\2\2"+
		"\u0098u\3\2\2\2\u0098w\3\2\2\2\u0098y\3\2\2\2\u0098{\3\2\2\2\u0098}\3"+
		"\2\2\2\u0098\177\3\2\2\2\u0098\u0081\3\2\2\2\u0098\u0083\3\2\2\2\u0098"+
		"\u0085\3\2\2\2\u0098\u0087\3\2\2\2\u0098\u0089\3\2\2\2\u0098\u008b\3\2"+
		"\2\2\u0098\u008d\3\2\2\2\u0098\u008f\3\2\2\2\u0098\u0091\3\2\2\2\u0098"+
		"\u0093\3\2\2\2\u0098\u0095\3\2\2\2\u0098\u0096\3\2\2\2\u0099\5\3\2\2\2"+
		"\u009a\u009b\5D#\2\u009b\7\3\2\2\2\u009c\u009d\5H%\2\u009d\t\3\2\2\2\u009e"+
		"\u009f\7B\2\2\u009f\u00a0\t\2\2\2\u00a0\u00a1\7X\2\2\u00a1\u00a2\5B\""+
		"\2\u00a2\u00a3\7Y\2\2\u00a3\u00db\3\2\2\2\u00a4\u00a5\7B\2\2\u00a5\u00a6"+
		"\7%\2\2\u00a6\u00a7\7X\2\2\u00a7\u00a8\5B\"\2\u00a8\u00a9\7Y\2\2\u00a9"+
		"\u00db\3\2\2\2\u00aa\u00ab\7B\2\2\u00ab\u00ac\7&\2\2\u00ac\u00ad\7X\2"+
		"\2\u00ad\u00ae\5B\"\2\u00ae\u00af\7Y\2\2\u00af\u00db\3\2\2\2\u00b0\u00b1"+
		"\7B\2\2\u00b1\u00b2\7(\2\2\u00b2\u00b3\7X\2\2\u00b3\u00db\7Y\2\2\u00b4"+
		"\u00b5\7B\2\2\u00b5\u00b6\t\3\2\2\u00b6\u00b7\7X\2\2\u00b7\u00ba\5B\""+
		"\2\u00b8\u00b9\7C\2\2\u00b9\u00bb\5B\"\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb"+
		"\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd\7Y\2\2\u00bd\u00db\3\2\2\2\u00be"+
		"\u00bf\7B\2\2\u00bf\u00c0\7.\2\2\u00c0\u00c1\7X\2\2\u00c1\u00db\7Y\2\2"+
		"\u00c2\u00c3\7B\2\2\u00c3\u00c4\7/\2\2\u00c4\u00c5\7X\2\2\u00c5\u00db"+
		"\7Y\2\2\u00c6\u00c7\7B\2\2\u00c7\u00c8\7/\2\2\u00c8\u00c9\7X\2\2\u00c9"+
		"\u00ca\5D#\2\u00ca\u00cb\7Y\2\2\u00cb\u00db\3\2\2\2\u00cc\u00cd\7B\2\2"+
		"\u00cd\u00ce\7/\2\2\u00ce\u00cf\7X\2\2\u00cf\u00d0\5B\"\2\u00d0\u00d1"+
		"\7C\2\2\u00d1\u00d2\5B\"\2\u00d2\u00d3\7Y\2\2\u00d3\u00db\3\2\2\2\u00d4"+
		"\u00d5\7B\2\2\u00d5\u00d6\7\60\2\2\u00d6\u00d7\7X\2\2\u00d7\u00d8\5B\""+
		"\2\u00d8\u00d9\7Y\2\2\u00d9\u00db\3\2\2\2\u00da\u009e\3\2\2\2\u00da\u00a4"+
		"\3\2\2\2\u00da\u00aa\3\2\2\2\u00da\u00b0\3\2\2\2\u00da\u00b4\3\2\2\2\u00da"+
		"\u00be\3\2\2\2\u00da\u00c2\3\2\2\2\u00da\u00c6\3\2\2\2\u00da\u00cc\3\2"+
		"\2\2\u00da\u00d4\3\2\2\2\u00db\13\3\2\2\2\u00dc\u00dd\7B\2\2\u00dd\u00de"+
		"\7(\2\2\u00de\u00df\7X\2\2\u00df\u00f1\7Y\2\2\u00e0\u00e1\7B\2\2\u00e1"+
		"\u00e2\t\4\2\2\u00e2\u00e3\7X\2\2\u00e3\u00e4\5B\"\2\u00e4\u00e5\7Y\2"+
		"\2\u00e5\u00f1\3\2\2\2\u00e6\u00e7\7B\2\2\u00e7\u00e8\7.\2\2\u00e8\u00e9"+
		"\7X\2\2\u00e9\u00f1\7Y\2\2\u00ea\u00eb\7B\2\2\u00eb\u00ec\7/\2\2\u00ec"+
		"\u00ed\7X\2\2\u00ed\u00ee\5B\"\2\u00ee\u00ef\7Y\2\2\u00ef\u00f1\3\2\2"+
		"\2\u00f0\u00dc\3\2\2\2\u00f0\u00e0\3\2\2\2\u00f0\u00e6\3\2\2\2\u00f0\u00ea"+
		"\3\2\2\2\u00f1\r\3\2\2\2\u00f2\u00f3\7Z\2\2\u00f3\u00f4\5D#\2\u00f4\u00f5"+
		"\7[\2\2\u00f5\u00f6\7B\2\2\u00f6\u00f7\7 \2\2\u00f7\u00f8\7B\2\2\u00f8"+
		"\u00f9\7/\2\2\u00f9\u00fa\7X\2\2\u00fa\u00fb\7Y\2\2\u00fb\u01bd\3\2\2"+
		"\2\u00fc\u00fd\7Z\2\2\u00fd\u00fe\5D#\2\u00fe\u00ff\7[\2\2\u00ff\u0100"+
		"\7B\2\2\u0100\u0101\7 \2\2\u0101\u0102\7B\2\2\u0102\u0103\7/\2\2\u0103"+
		"\u0104\7X\2\2\u0104\u0105\5D#\2\u0105\u0106\7Y\2\2\u0106\u01bd\3\2\2\2"+
		"\u0107\u0108\7Z\2\2\u0108\u0109\5D#\2\u0109\u010a\7[\2\2\u010a\u010b\7"+
		"B\2\2\u010b\u010c\7 \2\2\u010c\u010d\7B\2\2\u010d\u010e\7/\2\2\u010e\u010f"+
		"\7X\2\2\u010f\u0110\5B\"\2\u0110\u0111\7C\2\2\u0111\u0112\5B\"\2\u0112"+
		"\u0113\7Y\2\2\u0113\u01bd\3\2\2\2\u0114\u0115\7Z\2\2\u0115\u0116\5D#\2"+
		"\u0116\u0117\7[\2\2\u0117\u0118\7B\2\2\u0118\u0119\7!\2\2\u0119\u011a"+
		"\7B\2\2\u011a\u011b\7/\2\2\u011b\u011c\7X\2\2\u011c\u011d\7Y\2\2\u011d"+
		"\u01bd\3\2\2\2\u011e\u011f\7Z\2\2\u011f\u0120\5D#\2\u0120\u0121\7[\2\2"+
		"\u0121\u0122\7B\2\2\u0122\u0123\7!\2\2\u0123\u0124\7B\2\2\u0124\u0125"+
		"\7/\2\2\u0125\u0126\7X\2\2\u0126\u0127\5D#\2\u0127\u0128\7Y\2\2\u0128"+
		"\u01bd\3\2\2\2\u0129\u012a\7Z\2\2\u012a\u012b\5D#\2\u012b\u012c\7[\2\2"+
		"\u012c\u012d\7B\2\2\u012d\u012e\7!\2\2\u012e\u012f\7B\2\2\u012f\u0130"+
		"\7/\2\2\u0130\u0131\7X\2\2\u0131\u0132\5B\"\2\u0132\u0133\7C\2\2\u0133"+
		"\u0134\5B\"\2\u0134\u0135\7Y\2\2\u0135\u01bd\3\2\2\2\u0136\u0137\7Z\2"+
		"\2\u0137\u0138\5D#\2\u0138\u0139\7[\2\2\u0139\u013a\7B\2\2\u013a\u013b"+
		"\7\61\2\2\u013b\u013c\7X\2\2\u013c\u013d\5B\"\2\u013d\u013e\7C\2\2\u013e"+
		"\u013f\5B\"\2\u013f\u0140\7Y\2\2\u0140\u01bd\3\2\2\2\u0141\u0142\7Z\2"+
		"\2\u0142\u0143\5D#\2\u0143\u0144\7[\2\2\u0144\u0145\7B\2\2\u0145\u0146"+
		"\7\61\2\2\u0146\u0147\7X\2\2\u0147\u0148\5B\"\2\u0148\u0149\7C\2\2\u0149"+
		"\u014a\5B\"\2\u014a\u014b\7C\2\2\u014b\u014c\5B\"\2\u014c\u014d\7Y\2\2"+
		"\u014d\u01bd\3\2\2\2\u014e\u014f\7Z\2\2\u014f\u0150\5D#\2\u0150\u0151"+
		"\7[\2\2\u0151\u0152\7B\2\2\u0152\u0153\7\61\2\2\u0153\u0154\7X\2\2\u0154"+
		"\u0155\5B\"\2\u0155\u0156\7C\2\2\u0156\u0157\5B\"\2\u0157\u0158\7C\2\2"+
		"\u0158\u0159\5B\"\2\u0159\u015a\7C\2\2\u015a\u015b\5B\"\2\u015b\u015c"+
		"\7Y\2\2\u015c\u01bd\3\2\2\2\u015d\u015e\7Z\2\2\u015e\u015f\5D#\2\u015f"+
		"\u0160\7[\2\2\u0160\u0161\7B\2\2\u0161\u0162\7\"\2\2\u0162\u0163\7B\2"+
		"\2\u0163\u0164\7%\2\2\u0164\u0165\7X\2\2\u0165\u0166\5B\"\2\u0166\u0167"+
		"\7Y\2\2\u0167\u01bd\3\2\2\2\u0168\u0169\7Z\2\2\u0169\u016a\5D#\2\u016a"+
		"\u016b\7[\2\2\u016b\u016c\7B\2\2\u016c\u016d\7\"\2\2\u016d\u016e\7B\2"+
		"\2\u016e\u016f\7#\2\2\u016f\u0170\7X\2\2\u0170\u0171\5B\"\2\u0171\u0172"+
		"\7Y\2\2\u0172\u01bd\3\2\2\2\u0173\u0174\7Z\2\2\u0174\u0175\5D#\2\u0175"+
		"\u0176\7[\2\2\u0176\u0177\7B\2\2\u0177\u0178\7\"\2\2\u0178\u0179\7B\2"+
		"\2\u0179\u017a\7&\2\2\u017a\u017b\7X\2\2\u017b\u017c\5B\"\2\u017c\u017d"+
		"\7Y\2\2\u017d\u01bd\3\2\2\2\u017e\u017f\7Z\2\2\u017f\u0180\5D#\2\u0180"+
		"\u0181\7[\2\2\u0181\u0182\7B\2\2\u0182\u0183\7\"\2\2\u0183\u0184\7B\2"+
		"\2\u0184\u0185\7(\2\2\u0185\u0186\7X\2\2\u0186\u0187\7Y\2\2\u0187\u01bd"+
		"\3\2\2\2\u0188\u0189\7Z\2\2\u0189\u018a\5D#\2\u018a\u018b\7[\2\2\u018b"+
		"\u018c\7B\2\2\u018c\u018d\7\"\2\2\u018d\u018e\7B\2\2\u018e\u018f\7)\2"+
		"\2\u018f\u0190\7X\2\2\u0190\u0191\5B\"\2\u0191\u0192\7Y\2\2\u0192\u01bd"+
		"\3\2\2\2\u0193\u0194\7Z\2\2\u0194\u0195\5D#\2\u0195\u0196\7[\2\2\u0196"+
		"\u0197\7B\2\2\u0197\u0198\7\"\2\2\u0198\u0199\7B\2\2\u0199\u019a\7.\2"+
		"\2\u019a\u019b\7X\2\2\u019b\u019c\7Y\2\2\u019c\u01bd\3\2\2\2\u019d\u019e"+
		"\7Z\2\2\u019e\u019f\5D#\2\u019f\u01a0\7[\2\2\u01a0\u01a1\7B\2\2\u01a1"+
		"\u01a2\7\"\2\2\u01a2\u01a3\7B\2\2\u01a3\u01a4\7/\2\2\u01a4\u01a6\7X\2"+
		"\2\u01a5\u01a7\5D#\2\u01a6\u01a5\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8"+
		"\3\2\2\2\u01a8\u01a9\7Y\2\2\u01a9\u01bd\3\2\2\2\u01aa\u01ab\7Z\2\2\u01ab"+
		"\u01ac\5D#\2\u01ac\u01ad\7[\2\2\u01ad\u01ae\7B\2\2\u01ae\u01af\7\"\2\2"+
		"\u01af\u01b0\7X\2\2\u01b0\u01b1\5D#\2\u01b1\u01b2\7Y\2\2\u01b2\u01bd\3"+
		"\2\2\2\u01b3\u01b4\7Z\2\2\u01b4\u01b5\5D#\2\u01b5\u01b6\7[\2\2\u01b6\u01b7"+
		"\7B\2\2\u01b7\u01b8\7$\2\2\u01b8\u01b9\7X\2\2\u01b9\u01ba\5B\"\2\u01ba"+
		"\u01bb\7Y\2\2\u01bb\u01bd\3\2\2\2\u01bc\u00f2\3\2\2\2\u01bc\u00fc\3\2"+
		"\2\2\u01bc\u0107\3\2\2\2\u01bc\u0114\3\2\2\2\u01bc\u011e\3\2\2\2\u01bc"+
		"\u0129\3\2\2\2\u01bc\u0136\3\2\2\2\u01bc\u0141\3\2\2\2\u01bc\u014e\3\2"+
		"\2\2\u01bc\u015d\3\2\2\2\u01bc\u0168\3\2\2\2\u01bc\u0173\3\2\2\2\u01bc"+
		"\u017e\3\2\2\2\u01bc\u0188\3\2\2\2\u01bc\u0193\3\2\2\2\u01bc\u019d\3\2"+
		"\2\2\u01bc\u01aa\3\2\2\2\u01bc\u01b3\3\2\2\2\u01bd\17\3\2\2\2\u01be\u01bf"+
		"\7B\2\2\u01bf\u01c0\7\62\2\2\u01c0\u01c1\7X\2\2\u01c1\u01c2\5H%\2\u01c2"+
		"\u01c3\7Y\2\2\u01c3\u01fa\3\2\2\2\u01c4\u01c5\7Z\2\2\u01c5\u01c6\5D#\2"+
		"\u01c6\u01c7\7[\2\2\u01c7\u01c8\7B\2\2\u01c8\u01c9\7\63\2\2\u01c9\u01ca"+
		"\7X\2\2\u01ca\u01cb\5B\"\2\u01cb\u01cc\7C\2\2\u01cc\u01cd\5B\"\2\u01cd"+
		"\u01ce\7C\2\2\u01ce\u01cf\5B\"\2\u01cf\u01d0\7C\2\2\u01d0\u01d1\5B\"\2"+
		"\u01d1\u01d2\7C\2\2\u01d2\u01d3\5B\"\2\u01d3\u01d4\7C\2\2\u01d4\u01d5"+
		"\5B\"\2\u01d5\u01d6\7C\2\2\u01d6\u01d7\5B\"\2\u01d7\u01d8\7C\2\2\u01d8"+
		"\u01d9\5B\"\2\u01d9\u01da\7C\2\2\u01da\u01db\5B\"\2\u01db\u01dc\7Y\2\2"+
		"\u01dc\u01fa\3\2\2\2\u01dd\u01de\7Z\2\2\u01de\u01df\5D#\2\u01df\u01e0"+
		"\7[\2\2\u01e0\u01e1\7B\2\2\u01e1\u01e2\7\64\2\2\u01e2\u01e3\7X\2\2\u01e3"+
		"\u01e4\5B\"\2\u01e4\u01e5\7C\2\2\u01e5\u01e6\5B\"\2\u01e6\u01e7\7C\2\2"+
		"\u01e7\u01e8\5B\"\2\u01e8\u01e9\7Y\2\2\u01e9\u01fa\3\2\2\2\u01ea\u01eb"+
		"\7Z\2\2\u01eb\u01ec\5D#\2\u01ec\u01ed\7[\2\2\u01ed\u01ee\7B\2\2\u01ee"+
		"\u01ef\7\65\2\2\u01ef\u01f0\7X\2\2\u01f0\u01f1\5B\"\2\u01f1\u01f2\7C\2"+
		"\2\u01f2\u01f5\5B\"\2\u01f3\u01f4\7C\2\2\u01f4\u01f6\5B\"\2\u01f5\u01f3"+
		"\3\2\2\2\u01f5\u01f6\3\2\2\2\u01f6\u01f7\3\2\2\2\u01f7\u01f8\7Y\2\2\u01f8"+
		"\u01fa\3\2\2\2\u01f9\u01be\3\2\2\2\u01f9\u01c4\3\2\2\2\u01f9\u01dd\3\2"+
		"\2\2\u01f9\u01ea\3\2\2\2\u01fa\21\3\2\2\2\u01fb\u01fc\7Z\2\2\u01fc\u01fd"+
		"\5D#\2\u01fd\u01fe\7[\2\2\u01fe\u01ff\7B\2\2\u01ff\u0200\7)\2\2\u0200"+
		"\u0201\7X\2\2\u0201\u0202\5B\"\2\u0202\u0203\7C\2\2\u0203\u0204\5B\"\2"+
		"\u0204\u0205\7C\2\2\u0205\u0206\5B\"\2\u0206\u0207\7C\2\2\u0207\u0208"+
		"\5B\"\2\u0208\u0209\7C\2\2\u0209\u020a\5B\"\2\u020a\u020b\7C\2\2\u020b"+
		"\u020c\5B\"\2\u020c\u020d\7C\2\2\u020d\u020e\5B\"\2\u020e\u020f\7C\2\2"+
		"\u020f\u0210\5B\"\2\u0210\u0211\7C\2\2\u0211\u0212\5B\"\2\u0212\u0213"+
		"\7C\2\2\u0213\u0215\5B\"\2\u0214\u0216\5:\36\2\u0215\u0214\3\2\2\2\u0216"+
		"\u0217\3\2\2\2\u0217\u0215\3\2\2\2\u0217\u0218\3\2\2\2\u0218\u0219\3\2"+
		"\2\2\u0219\u021a\7Y\2\2\u021a\u0238\3\2\2\2\u021b\u021c\7Z\2\2\u021c\u021d"+
		"\5D#\2\u021d\u021e\7[\2\2\u021e\u021f\7B\2\2\u021f\u0220\7*\2\2\u0220"+
		"\u0221\7X\2\2\u0221\u0222\5B\"\2\u0222\u0223\7C\2\2\u0223\u0224\5B\"\2"+
		"\u0224\u0225\7C\2\2\u0225\u0226\5B\"\2\u0226\u0227\7C\2\2\u0227\u0229"+
		"\5B\"\2\u0228\u022a\5:\36\2\u0229\u0228\3\2\2\2\u022a\u022b\3\2\2\2\u022b"+
		"\u0229\3\2\2\2\u022b\u022c\3\2\2\2\u022c\u022d\3\2\2\2\u022d\u022e\7Y"+
		"\2\2\u022e\u0238\3\2\2\2\u022f\u0230\7Z\2\2\u0230\u0231\5D#\2\u0231\u0232"+
		"\7[\2\2\u0232\u0233\7B\2\2\u0233\u0234\7.\2\2\u0234\u0235\7X\2\2\u0235"+
		"\u0236\7Y\2\2\u0236\u0238\3\2\2\2\u0237\u01fb\3\2\2\2\u0237\u021b\3\2"+
		"\2\2\u0237\u022f\3\2\2\2\u0238\23\3\2\2\2\u0239\u023a\7B\2\2\u023a\u023b"+
		"\7\60\2\2\u023b\u023c\7X\2\2\u023c\u023d\5B\"\2\u023d\u023e\7Y\2\2\u023e"+
		"\25\3\2\2\2\u023f\u0240\7B\2\2\u0240\u0241\7\62\2\2\u0241\u0242\7X\2\2"+
		"\u0242\u0243\5H%\2\u0243\u0244\7Y\2\2\u0244\u0253\3\2\2\2\u0245\u0246"+
		"\7Z\2\2\u0246\u0247\5D#\2\u0247\u0248\7[\2\2\u0248\u0249\7B\2\2\u0249"+
		"\u024a\7\63\2\2\u024a\u024b\7X\2\2\u024b\u024c\5B\"\2\u024c\u024d\7C\2"+
		"\2\u024d\u024e\5B\"\2\u024e\u024f\7C\2\2\u024f\u0250\5B\"\2\u0250\u0251"+
		"\7Y\2\2\u0251\u0253\3\2\2\2\u0252\u023f\3\2\2\2\u0252\u0245\3\2\2\2\u0253"+
		"\27\3\2\2\2\u0254\u0255\7B\2\2\u0255\u0256\t\5\2\2\u0256\u0257\7X\2\2"+
		"\u0257\u025b\5B\"\2\u0258\u025a\5<\37\2\u0259\u0258\3\2\2\2\u025a\u025d"+
		"\3\2\2\2\u025b\u0259\3\2\2\2\u025b\u025c\3\2\2\2\u025c\u025e\3\2\2\2\u025d"+
		"\u025b\3\2\2\2\u025e\u025f\7Y\2\2\u025f\u026d\3\2\2\2\u0260\u0261\7B\2"+
		"\2\u0261\u0262\7\66\2\2\u0262\u0263\7X\2\2\u0263\u0267\5B\"\2\u0264\u0266"+
		"\5<\37\2\u0265\u0264\3\2\2\2\u0266\u0269\3\2\2\2\u0267\u0265\3\2\2\2\u0267"+
		"\u0268\3\2\2\2\u0268\u026a\3\2\2\2\u0269\u0267\3\2\2\2\u026a\u026b\7Y"+
		"\2\2\u026b\u026d\3\2\2\2\u026c\u0254\3\2\2\2\u026c\u0260\3\2\2\2\u026d"+
		"\31\3\2\2\2\u026e\u026f\7B\2\2\u026f\u0270\7\62\2\2\u0270\u0271\7X\2\2"+
		"\u0271\u0272\5H%\2\u0272\u0273\7Y\2\2\u0273\u02ab\3\2\2\2\u0274\u0275"+
		"\7B\2\2\u0275\u0276\7\21\2\2\u0276\u0277\7X\2\2\u0277\u027b\5B\"\2\u0278"+
		"\u027a\5<\37\2\u0279\u0278\3\2\2\2\u027a\u027d\3\2\2\2\u027b\u0279\3\2"+
		"\2\2\u027b\u027c\3\2\2\2\u027c\u027e\3\2\2\2\u027d\u027b\3\2\2\2\u027e"+
		"\u027f\7Y\2\2\u027f\u02ab\3\2\2\2\u0280\u0281\7Z\2\2\u0281\u0282\5D#\2"+
		"\u0282\u0283\7[\2\2\u0283\u0284\7B\2\2\u0284\u0285\7\63\2\2\u0285\u0286"+
		"\7X\2\2\u0286\u0287\5B\"\2\u0287\u0288\7C\2\2\u0288\u0289\5B\"\2\u0289"+
		"\u028a\7C\2\2\u028a\u028b\5B\"\2\u028b\u028c\7C\2\2\u028c\u028d\5B\"\2"+
		"\u028d\u028e\7Y\2\2\u028e\u02ab\3\2\2\2\u028f\u0290\7Z\2\2\u0290\u0291"+
		"\5D#\2\u0291\u0292\7[\2\2\u0292\u0293\7B\2\2\u0293\u0294\7\63\2\2\u0294"+
		"\u0295\7X\2\2\u0295\u0296\5B\"\2\u0296\u0297\7C\2\2\u0297\u0298\5B\"\2"+
		"\u0298\u0299\7C\2\2\u0299\u029a\5B\"\2\u029a\u029b\7C\2\2\u029b\u029c"+
		"\5B\"\2\u029c\u029d\7C\2\2\u029d\u029e\5B\"\2\u029e\u029f\7C\2\2\u029f"+
		"\u02a0\5B\"\2\u02a0\u02a1\7C\2\2\u02a1\u02a2\5B\"\2\u02a2\u02a3\7C\2\2"+
		"\u02a3\u02a4\5B\"\2\u02a4\u02a5\7C\2\2\u02a5\u02a6\5B\"\2\u02a6\u02a7"+
		"\7C\2\2\u02a7\u02a8\5B\"\2\u02a8\u02a9\7Y\2\2\u02a9\u02ab\3\2\2\2\u02aa"+
		"\u026e\3\2\2\2\u02aa\u0274\3\2\2\2\u02aa\u0280\3\2\2\2\u02aa\u028f\3\2"+
		"\2\2\u02ab\33\3\2\2\2\u02ac\u02ad\7B\2\2\u02ad\u02ae\7\63\2\2\u02ae\u02af"+
		"\7X\2\2\u02af\u02b0\5B\"\2\u02b0\u02b1\7C\2\2\u02b1\u02b2\5B\"\2\u02b2"+
		"\u02b3\7C\2\2\u02b3\u02b4\5B\"\2\u02b4\u02b5\7Y\2\2\u02b5\35\3\2\2\2\u02b6"+
		"\u02b7\7B\2\2\u02b7\u02b8\7)\2\2\u02b8\u02b9\7X\2\2\u02b9\u02ba\5B\"\2"+
		"\u02ba\u02bb\7Y\2\2\u02bb\u02c1\3\2\2\2\u02bc\u02bd\7B\2\2\u02bd\u02be"+
		"\7.\2\2\u02be\u02bf\7X\2\2\u02bf\u02c1\7Y\2\2\u02c0\u02b6\3\2\2\2\u02c0"+
		"\u02bc\3\2\2\2\u02c1\37\3\2\2\2\u02c2\u02c3\7B\2\2\u02c3\u02c4\7\67\2"+
		"\2\u02c4\u02c5\7X\2\2\u02c5\u02c6\5B\"\2\u02c6\u02c7\7Y\2\2\u02c7!\3\2"+
		"\2\2\u02c8\u02c9\7B\2\2\u02c9\u02ca\78\2\2\u02ca\u02cb\7X\2\2\u02cb\u02cc"+
		"\5B\"\2\u02cc\u02cd\7C\2\2\u02cd\u02ce\5B\"\2\u02ce\u02cf\7C\2\2\u02cf"+
		"\u02d0\5B\"\2\u02d0\u02d1\7Y\2\2\u02d1\u02e5\3\2\2\2\u02d2\u02d3\7B\2"+
		"\2\u02d3\u02d4\79\2\2\u02d4\u02d5\7X\2\2\u02d5\u02d6\5B\"\2\u02d6\u02d7"+
		"\7C\2\2\u02d7\u02d8\5B\"\2\u02d8\u02d9\7C\2\2\u02d9\u02da\5B\"\2\u02da"+
		"\u02db\7Y\2\2\u02db\u02e5\3\2\2\2\u02dc\u02dd\7B\2\2\u02dd\u02de\7:\2"+
		"\2\u02de\u02df\7X\2\2\u02df\u02e0\5B\"\2\u02e0\u02e1\7C\2\2\u02e1\u02e2"+
		"\5B\"\2\u02e2\u02e3\7Y\2\2\u02e3\u02e5\3\2\2\2\u02e4\u02c8\3\2\2\2\u02e4"+
		"\u02d2\3\2\2\2\u02e4\u02dc\3\2\2\2\u02e5#\3\2\2\2\u02e6\u02e7\7B\2\2\u02e7"+
		"\u02e8\7/\2\2\u02e8\u02e9\7X\2\2\u02e9\u02fd\7Y\2\2\u02ea\u02eb\7B\2\2"+
		"\u02eb\u02ec\7/\2\2\u02ec\u02ed\7X\2\2\u02ed\u02ee\5D#\2\u02ee\u02ef\7"+
		"Y\2\2\u02ef\u02fd\3\2\2\2\u02f0\u02f1\7B\2\2\u02f1\u02f2\t\6\2\2\u02f2"+
		"\u02f3\7X\2\2\u02f3\u02f4\5B\"\2\u02f4\u02f5\7C\2\2\u02f5\u02f6\5B\"\2"+
		"\u02f6\u02f7\7C\2\2\u02f7\u02f8\5B\"\2\u02f8\u02f9\7C\2\2\u02f9\u02fa"+
		"\5B\"\2\u02fa\u02fb\7Y\2\2\u02fb\u02fd\3\2\2\2\u02fc\u02e6\3\2\2\2\u02fc"+
		"\u02ea\3\2\2\2\u02fc\u02f0\3\2\2\2\u02fd%\3\2\2\2\u02fe\u02ff\7B\2\2\u02ff"+
		"\u0300\7\60\2\2\u0300\u0301\7X\2\2\u0301\u0302\5B\"\2\u0302\u0303\7Y\2"+
		"\2\u0303\'\3\2\2\2\u0304\u0305\7B\2\2\u0305\u0306\t\6\2\2\u0306\u0308"+
		"\7X\2\2\u0307\u0309\5D#\2\u0308\u0307\3\2\2\2\u0308\u0309\3\2\2\2\u0309"+
		"\u030a\3\2\2\2\u030a\u030b\7Y\2\2\u030b)\3\2\2\2\u030c\u030d\7B\2\2\u030d"+
		"\u030e\7\60\2\2\u030e\u030f\7X\2\2\u030f\u0310\5B\"\2\u0310\u0311\7C\2"+
		"\2\u0311\u0312\5B\"\2\u0312\u0313\7C\2\2\u0313\u0314\5B\"\2\u0314\u0315"+
		"\7C\2\2\u0315\u0316\5B\"\2\u0316\u0317\7C\2\2\u0317\u0318\5B\"\2\u0318"+
		"\u0319\7C\2\2\u0319\u031a\5B\"\2\u031a\u031b\7Y\2\2\u031b+\3\2\2\2\u031c"+
		"\u031d\7B\2\2\u031d\u031e\7\60\2\2\u031e\u031f\7X\2\2\u031f\u0320\5B\""+
		"\2\u0320\u0321\7Y\2\2\u0321\u032d\3\2\2\2\u0322\u0323\7B\2\2\u0323\u0324"+
		"\7\60\2\2\u0324\u0325\7X\2\2\u0325\u0326\5B\"\2\u0326\u0327\7C\2\2\u0327"+
		"\u0328\5B\"\2\u0328\u0329\7C\2\2\u0329\u032a\5B\"\2\u032a\u032b\7Y\2\2"+
		"\u032b\u032d\3\2\2\2\u032c\u031c\3\2\2\2\u032c\u0322\3\2\2\2\u032d-\3"+
		"\2\2\2\u032e\u032f\7B\2\2\u032f\u0330\7\62\2\2\u0330\u0331\7X\2\2\u0331"+
		"\u0332\5H%\2\u0332\u0333\7Y\2\2\u0333\u033d\3\2\2\2\u0334\u0335\7Z\2\2"+
		"\u0335\u0336\5D#\2\u0336\u0337\7[\2\2\u0337\u0338\7B\2\2\u0338\u0339\7"+
		";\2\2\u0339\u033a\7X\2\2\u033a\u033b\7Y\2\2\u033b\u033d\3\2\2\2\u033c"+
		"\u032e\3\2\2\2\u033c\u0334\3\2\2\2\u033d/\3\2\2\2\u033e\u033f\7B\2\2\u033f"+
		"\u0340\7\62\2\2\u0340\u0341\7X\2\2\u0341\u0342\5H%\2\u0342\u0343\7Y\2"+
		"\2\u0343\u0350\3\2\2\2\u0344\u0345\7Z\2\2\u0345\u0346\5D#\2\u0346\u0347"+
		"\7[\2\2\u0347\u0348\7B\2\2\u0348\u0349\7\63\2\2\u0349\u034a\7X\2\2\u034a"+
		"\u034b\5B\"\2\u034b\u034c\7C\2\2\u034c\u034d\5B\"\2\u034d\u034e\7Y\2\2"+
		"\u034e\u0350\3\2\2\2\u034f\u033e\3\2\2\2\u034f\u0344\3\2\2\2\u0350\61"+
		"\3\2\2\2\u0351\u0352\7B\2\2\u0352\u0353\7\60\2\2\u0353\u0354\7X\2\2\u0354"+
		"\u0355\5B\"\2\u0355\u0356\7Y\2\2\u0356\63\3\2\2\2\u0357\u0358\7B\2\2\u0358"+
		"\u0359\7\60\2\2\u0359\u035a\7X\2\2\u035a\u035b\5B\"\2\u035b\u035c\7Y\2"+
		"\2\u035c\65\3\2\2\2\u035d\u035e\7B\2\2\u035e\u035f\7;\2\2\u035f\u0360"+
		"\7X\2\2\u0360\u0361\5B\"\2\u0361\u0362\7Y\2\2\u0362\67\3\2\2\2\u0363\u0364"+
		"\7B\2\2\u0364\u0365\7<\2\2\u0365\u0366\7X\2\2\u0366\u0367\5B\"\2\u0367"+
		"\u0368\7C\2\2\u0368\u0369\5D#\2\u0369\u036a\7C\2\2\u036a\u036b\5B\"\2"+
		"\u036b\u036c\7C\2\2\u036c\u036d\5B\"\2\u036d\u036e\7Y\2\2\u036e\u0395"+
		"\3\2\2\2\u036f\u0370\7Z\2\2\u0370\u0371\5D#\2\u0371\u0372\7[\2\2\u0372"+
		"\u0373\7B\2\2\u0373\u0374\7\62\2\2\u0374\u0375\7X\2\2\u0375\u0376\5D#"+
		"\2\u0376\u0377\7C\2\2\u0377\u0378\5B\"\2\u0378\u0379\7C\2\2\u0379\u037a"+
		"\5B\"\2\u037a\u037b\7Y\2\2\u037b\u0395\3\2\2\2\u037c\u037d\7Z\2\2\u037d"+
		"\u037e\5D#\2\u037e\u037f\7[\2\2\u037f\u0380\7B\2\2\u0380\u0381\7=\2\2"+
		"\u0381\u0382\7X\2\2\u0382\u0383\5B\"\2\u0383\u0384\7Y\2\2\u0384\u0395"+
		"\3\2\2\2\u0385\u0386\7Z\2\2\u0386\u0387\5D#\2\u0387\u0388\7[\2\2\u0388"+
		"\u0389\7B\2\2\u0389\u038a\7>\2\2\u038a\u038b\7X\2\2\u038b\u038c\5B\"\2"+
		"\u038c\u038d\7C\2\2\u038d\u038e\5B\"\2\u038e\u038f\7C\2\2\u038f\u0390"+
		"\5B\"\2\u0390\u0391\7C\2\2\u0391\u0392\5B\"\2\u0392\u0393\7Y\2\2\u0393"+
		"\u0395\3\2\2\2\u0394\u0363\3\2\2\2\u0394\u036f\3\2\2\2\u0394\u037c\3\2"+
		"\2\2\u0394\u0385\3\2\2\2\u03959\3\2\2\2\u0396\u0397\7C\2\2\u0397\u0398"+
		"\5H%\2\u0398;\3\2\2\2\u0399\u039a\7C\2\2\u039a\u039b\5B\"\2\u039b=\3\2"+
		"\2\2\u039c\u039d\5F$\2\u039d\u039e\7G\2\2\u039e\u039f\5D#\2\u039f?\3\2"+
		"\2\2\u03a0\u03a1\7B\2\2\u03a1\u03a2\7\24\2\2\u03a2\u03a3\7X\2\2\u03a3"+
		"\u03a4\5B\"\2\u03a4\u03a5\7C\2\2\u03a5\u03a6\5B\"\2\u03a6\u03a7\7C\2\2"+
		"\u03a7\u03a8\5B\"\2\u03a8\u03a9\7C\2\2\u03a9\u03aa\5B\"\2\u03aa\u03ab"+
		"\7C\2\2\u03ab\u03ac\5B\"\2\u03ac\u03ad\7Y\2\2\u03ad\u03c3\3\2\2\2\u03ae"+
		"\u03af\7B\2\2\u03af\u03b0\7\7\2\2\u03b0\u03b1\7X\2\2\u03b1\u03b2\5B\""+
		"\2\u03b2\u03b3\7C\2\2\u03b3\u03b4\5B\"\2\u03b4\u03b5\7Y\2\2\u03b5\u03c3"+
		"\3\2\2\2\u03b6\u03b7\7B\2\2\u03b7\u03b8\7?\2\2\u03b8\u03b9\7X\2\2\u03b9"+
		"\u03ba\5B\"\2\u03ba\u03bb\7Y\2\2\u03bb\u03c3\3\2\2\2\u03bc\u03bd\7B\2"+
		"\2\u03bd\u03be\7@\2\2\u03be\u03bf\7X\2\2\u03bf\u03c0\5B\"\2\u03c0\u03c1"+
		"\7Y\2\2\u03c1\u03c3\3\2\2\2\u03c2\u03a0\3\2\2\2\u03c2\u03ae\3\2\2\2\u03c2"+
		"\u03b6\3\2\2\2\u03c2\u03bc\3\2\2\2\u03c3A\3\2\2\2\u03c4\u03c8\5D#\2\u03c5"+
		"\u03c8\7E\2\2\u03c6\u03c8\3\2\2\2\u03c7\u03c4\3\2\2\2\u03c7\u03c5\3\2"+
		"\2\2\u03c7\u03c6\3\2\2\2\u03c8C\3\2\2\2\u03c9\u03ca\b#\1\2\u03ca\u03cb"+
		"\7X\2\2\u03cb\u03cc\5D#\2\u03cc\u03cd\7Y\2\2\u03cd\u040f\3\2\2\2\u03ce"+
		"\u03cf\t\7\2\2\u03cf\u040f\5D#\24\u03d0\u03d1\7M\2\2\u03d1\u03d2\7X\2"+
		"\2\u03d2\u03d3\5D#\2\u03d3\u03d4\7Y\2\2\u03d4\u040f\3\2\2\2\u03d5\u03d6"+
		"\7N\2\2\u03d6\u03d7\7X\2\2\u03d7\u03d8\5D#\2\u03d8\u03d9\5D#\2\u03d9\u03da"+
		"\7Y\2\2\u03da\u040f\3\2\2\2\u03db\u03dc\7O\2\2\u03dc\u03dd\7X\2\2\u03dd"+
		"\u03de\5D#\2\u03de\u03df\7Y\2\2\u03df\u040f\3\2\2\2\u03e0\u03e1\7P\2\2"+
		"\u03e1\u03e2\7X\2\2\u03e2\u03e3\5D#\2\u03e3\u03e4\7Y\2\2\u03e4\u040f\3"+
		"\2\2\2\u03e5\u03e6\7Q\2\2\u03e6\u03e7\7X\2\2\u03e7\u03e8\5D#\2\u03e8\u03e9"+
		"\7Y\2\2\u03e9\u040f\3\2\2\2\u03ea\u03eb\7R\2\2\u03eb\u03ec\7X\2\2\u03ec"+
		"\u03ed\5D#\2\u03ed\u03ee\7Y\2\2\u03ee\u040f\3\2\2\2\u03ef\u03f0\7S\2\2"+
		"\u03f0\u03f1\7X\2\2\u03f1\u03f2\5D#\2\u03f2\u03f3\7Y\2\2\u03f3\u040f\3"+
		"\2\2\2\u03f4\u03f5\7T\2\2\u03f5\u03f6\7X\2\2\u03f6\u03f7\5D#\2\u03f7\u03f8"+
		"\5D#\2\u03f8\u03f9\7Y\2\2\u03f9\u040f\3\2\2\2\u03fa\u03fb\7U\2\2\u03fb"+
		"\u03fd\7X\2\2\u03fc\u03fe\5D#\2\u03fd\u03fc\3\2\2\2\u03fd\u03fe\3\2\2"+
		"\2\u03fe\u03ff\3\2\2\2\u03ff\u040f\7Y\2\2\u0400\u0401\7V\2\2\u0401\u0402"+
		"\7X\2\2\u0402\u0403\5D#\2\u0403\u0404\7Y\2\2\u0404\u040f\3\2\2\2\u0405"+
		"\u0406\7W\2\2\u0406\u0407\7X\2\2\u0407\u0408\5D#\2\u0408\u0409\7Y\2\2"+
		"\u0409\u040f\3\2\2\2\u040a\u040f\5F$\2\u040b\u040f\7D\2\2\u040c\u040f"+
		"\5H%\2\u040d\u040f\7F\2\2\u040e\u03c9\3\2\2\2\u040e\u03ce\3\2\2\2\u040e"+
		"\u03d0\3\2\2\2\u040e\u03d5\3\2\2\2\u040e\u03db\3\2\2\2\u040e\u03e0\3\2"+
		"\2\2\u040e\u03e5\3\2\2\2\u040e\u03ea\3\2\2\2\u040e\u03ef\3\2\2\2\u040e"+
		"\u03f4\3\2\2\2\u040e\u03fa\3\2\2\2\u040e\u0400\3\2\2\2\u040e\u0405\3\2"+
		"\2\2\u040e\u040a\3\2\2\2\u040e\u040b\3\2\2\2\u040e\u040c\3\2\2\2\u040e"+
		"\u040d\3\2\2\2\u040f\u0418\3\2\2\2\u0410\u0411\f\23\2\2\u0411\u0412\t"+
		"\b\2\2\u0412\u0417\5D#\24\u0413\u0414\f\22\2\2\u0414\u0415\t\t\2\2\u0415"+
		"\u0417\5D#\23\u0416\u0410\3\2\2\2\u0416\u0413\3\2\2\2\u0417\u041a\3\2"+
		"\2\2\u0418\u0416\3\2\2\2\u0418\u0419\3\2\2\2\u0419E\3\2\2\2\u041a\u0418"+
		"\3\2\2\2\u041b\u041c\7^\2\2\u041c\u041d\7_\2\2\u041d\u041e\b$\1\2\u041e"+
		"G\3\2\2\2\u041f\u0420\7`\2\2\u0420\u0421\5J&\2\u0421\u0422\7b\2\2\u0422"+
		"\u0423\b%\1\2\u0423I\3\2\2\2\u0424\u0426\7c\2\2\u0425\u0424\3\2\2\2\u0426"+
		"\u0429\3\2\2\2\u0427\u0425\3\2\2\2\u0427\u0428\3\2\2\2\u0428K\3\2\2\2"+
		"\u0429\u0427\3\2\2\2\u042a\u042b\7\5\2\2\u042b\u042d\5N(\2\u042c\u042e"+
		"\7e\2\2\u042d\u042c\3\2\2\2\u042d\u042e\3\2\2\2\u042e\u042f\3\2\2\2\u042f"+
		"\u0430\b\'\1\2\u0430M\3\2\2\2\u0431\u0433\7f\2\2\u0432\u0431\3\2\2\2\u0433"+
		"\u0436\3\2\2\2\u0434\u0432\3\2\2\2\u0434\u0435\3\2\2\2\u0435O\3\2\2\2"+
		"\u0436\u0434\3\2\2\2\u0437\u0439\7a\2\2\u0438\u0437\3\2\2\2\u0439\u043c"+
		"\3\2\2\2\u043a\u0438\3\2\2\2\u043a\u043b\3\2\2\2\u043bQ\3\2\2\2\u043c"+
		"\u043a\3\2\2\2\'V]\u0098\u00ba\u00da\u00f0\u01a6\u01bc\u01f5\u01f9\u0217"+
		"\u022b\u0237\u0252\u025b\u0267\u026c\u027b\u02aa\u02c0\u02e4\u02fc\u0308"+
		"\u032c\u033c\u034f\u0394\u03c2\u03c7\u03fd\u040e\u0416\u0418\u0427\u042d"+
		"\u0434\u043a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}