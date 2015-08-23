// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__13211 = s;
var map__13211__$1 = ((((!((map__13211 == null)))?((((map__13211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13211):map__13211);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13211__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13211__$1,cljs.core.cst$kw$info);
var d = (0);
var G__13214 = info;
var map__13215 = G__13214;
var map__13215__$1 = ((((!((map__13215 == null)))?((((map__13215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13215):map__13215);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13215__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__13214__$1 = G__13214;
while(true){
var d__$2 = d__$1;
var map__13217 = G__13214__$1;
var map__13217__$1 = ((((!((map__13217 == null)))?((((map__13217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13217):map__13217);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13217__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__13219 = (d__$2 + (1));
var G__13220 = shadow__$1;
d__$1 = G__13219;
G__13214__$1 = G__13220;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__13221){
var map__13227 = p__13221;
var map__13227__$1 = ((((!((map__13227 == null)))?((((map__13227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13227):map__13227);
var name_var = map__13227__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13227__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13227__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__13229 = info;
var map__13229__$1 = ((((!((map__13229 == null)))?((((map__13229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13229):map__13229);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13229__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13229__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__13231 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__13231) : cljs.compiler.munge.call(null,G__13231));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args13232 = [];
var len__5565__auto___13235 = arguments.length;
var i__5566__auto___13236 = (0);
while(true){
if((i__5566__auto___13236 < len__5565__auto___13235)){
args13232.push((arguments[i__5566__auto___13236]));

var G__13237 = (i__5566__auto___13236 + (1));
i__5566__auto___13236 = G__13237;
continue;
} else {
}
break;
}

var G__13234 = args13232.length;
switch (G__13234) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13232.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.core._hash(name);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__13240 = cp;
switch (G__13240) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__13246_13250 = cljs.core.seq(s);
var chunk__13247_13251 = null;
var count__13248_13252 = (0);
var i__13249_13253 = (0);
while(true){
if((i__13249_13253 < count__13248_13252)){
var c_13254 = chunk__13247_13251.cljs$core$IIndexed$_nth$arity$2(null,i__13249_13253);
sb.append(cljs.compiler.escape_char(c_13254));

var G__13255 = seq__13246_13250;
var G__13256 = chunk__13247_13251;
var G__13257 = count__13248_13252;
var G__13258 = (i__13249_13253 + (1));
seq__13246_13250 = G__13255;
chunk__13247_13251 = G__13256;
count__13248_13252 = G__13257;
i__13249_13253 = G__13258;
continue;
} else {
var temp__4425__auto___13259 = cljs.core.seq(seq__13246_13250);
if(temp__4425__auto___13259){
var seq__13246_13260__$1 = temp__4425__auto___13259;
if(cljs.core.chunked_seq_QMARK_(seq__13246_13260__$1)){
var c__5310__auto___13261 = cljs.core.chunk_first(seq__13246_13260__$1);
var G__13262 = cljs.core.chunk_rest(seq__13246_13260__$1);
var G__13263 = c__5310__auto___13261;
var G__13264 = cljs.core.count(c__5310__auto___13261);
var G__13265 = (0);
seq__13246_13250 = G__13262;
chunk__13247_13251 = G__13263;
count__13248_13252 = G__13264;
i__13249_13253 = G__13265;
continue;
} else {
var c_13266 = cljs.core.first(seq__13246_13260__$1);
sb.append(cljs.compiler.escape_char(c_13266));

var G__13267 = cljs.core.next(seq__13246_13260__$1);
var G__13268 = null;
var G__13269 = (0);
var G__13270 = (0);
seq__13246_13250 = G__13267;
chunk__13247_13251 = G__13268;
count__13248_13252 = G__13269;
i__13249_13253 = G__13270;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5420__auto__ = (function (){var G__13271 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13271) : cljs.core.atom.call(null,G__13271));
})();
var prefer_table__5421__auto__ = (function (){var G__13272 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13272) : cljs.core.atom.call(null,G__13272));
})();
var method_cache__5422__auto__ = (function (){var G__13273 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13273) : cljs.core.atom.call(null,G__13273));
})();
var cached_hierarchy__5423__auto__ = (function (){var G__13274 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13274) : cljs.core.atom.call(null,G__13274));
})();
var hierarchy__5424__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__5424__auto__,method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5955__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5955__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__13280_13285 = ast;
var map__13280_13286__$1 = ((((!((map__13280_13285 == null)))?((((map__13280_13285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13280_13285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13280_13285):map__13280_13285);
var env_13287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13280_13286__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_13287))){
var map__13282_13288 = env_13287;
var map__13282_13289__$1 = ((((!((map__13282_13288 == null)))?((((map__13282_13288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13282_13288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13282_13288):map__13282_13288);
var line_13290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282_13289__$1,cljs.core.cst$kw$line);
var column_13291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282_13289__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__13282_13288,map__13282_13289__$1,line_13290,column_13291,map__13280_13285,map__13280_13286__$1,env_13287,val__5955__auto__){
return (function (m){
var minfo = (function (){var G__13284 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
var G__13284__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13284,cljs.core.cst$kw$name,[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__13284);
return G__13284__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_13290 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__13282_13288,map__13282_13289__$1,line_13290,column_13291,map__13280_13285,map__13280_13286__$1,env_13287,val__5955__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13291)?(column_13291 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__13282_13288,map__13282_13289__$1,line_13290,column_13291,map__13280_13285,map__13280_13286__$1,env_13287,val__5955__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__13282_13288,map__13282_13289__$1,line_13290,column_13291,map__13280_13285,map__13280_13286__$1,env_13287,val__5955__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__13282_13288,map__13282_13289__$1,line_13290,column_13291,map__13280_13285,map__13280_13286__$1,env_13287,val__5955__auto__))
,cljs.core.sorted_map()));
});})(map__13282_13288,map__13282_13289__$1,line_13290,column_13291,map__13280_13285,map__13280_13286__$1,env_13287,val__5955__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__5955__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5572__auto__ = [];
var len__5565__auto___13298 = arguments.length;
var i__5566__auto___13299 = (0);
while(true){
if((i__5566__auto___13299 < len__5565__auto___13298)){
args__5572__auto__.push((arguments[i__5566__auto___13299]));

var G__13300 = (i__5566__auto___13299 + (1));
i__5566__auto___13299 = G__13300;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__13294_13301 = cljs.core.seq(xs);
var chunk__13295_13302 = null;
var count__13296_13303 = (0);
var i__13297_13304 = (0);
while(true){
if((i__13297_13304 < count__13296_13303)){
var x_13305 = chunk__13295_13302.cljs$core$IIndexed$_nth$arity$2(null,i__13297_13304);
if((x_13305 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_13305)){
cljs.compiler.emit(x_13305);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_13305)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_13305);
} else {
if(goog.isFunction(x_13305)){
(x_13305.cljs$core$IFn$_invoke$arity$0 ? x_13305.cljs$core$IFn$_invoke$arity$0() : x_13305.call(null));
} else {
var s_13306 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_13305], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__13294_13301,chunk__13295_13302,count__13296_13303,i__13297_13304,s_13306,x_13305){
return (function (p1__13292_SHARP_){
return (p1__13292_SHARP_ + cljs.core.count(s_13306));
});})(seq__13294_13301,chunk__13295_13302,count__13296_13303,i__13297_13304,s_13306,x_13305))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13306], 0));

}
}
}
}

var G__13307 = seq__13294_13301;
var G__13308 = chunk__13295_13302;
var G__13309 = count__13296_13303;
var G__13310 = (i__13297_13304 + (1));
seq__13294_13301 = G__13307;
chunk__13295_13302 = G__13308;
count__13296_13303 = G__13309;
i__13297_13304 = G__13310;
continue;
} else {
var temp__4425__auto___13311 = cljs.core.seq(seq__13294_13301);
if(temp__4425__auto___13311){
var seq__13294_13312__$1 = temp__4425__auto___13311;
if(cljs.core.chunked_seq_QMARK_(seq__13294_13312__$1)){
var c__5310__auto___13313 = cljs.core.chunk_first(seq__13294_13312__$1);
var G__13314 = cljs.core.chunk_rest(seq__13294_13312__$1);
var G__13315 = c__5310__auto___13313;
var G__13316 = cljs.core.count(c__5310__auto___13313);
var G__13317 = (0);
seq__13294_13301 = G__13314;
chunk__13295_13302 = G__13315;
count__13296_13303 = G__13316;
i__13297_13304 = G__13317;
continue;
} else {
var x_13318 = cljs.core.first(seq__13294_13312__$1);
if((x_13318 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_13318)){
cljs.compiler.emit(x_13318);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_13318)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_13318);
} else {
if(goog.isFunction(x_13318)){
(x_13318.cljs$core$IFn$_invoke$arity$0 ? x_13318.cljs$core$IFn$_invoke$arity$0() : x_13318.call(null));
} else {
var s_13319 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_13318], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__13294_13301,chunk__13295_13302,count__13296_13303,i__13297_13304,s_13319,x_13318,seq__13294_13312__$1,temp__4425__auto___13311){
return (function (p1__13292_SHARP_){
return (p1__13292_SHARP_ + cljs.core.count(s_13319));
});})(seq__13294_13301,chunk__13295_13302,count__13296_13303,i__13297_13304,s_13319,x_13318,seq__13294_13312__$1,temp__4425__auto___13311))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13319], 0));

}
}
}
}

var G__13320 = cljs.core.next(seq__13294_13312__$1);
var G__13321 = null;
var G__13322 = (0);
var G__13323 = (0);
seq__13294_13301 = G__13320;
chunk__13295_13302 = G__13321;
count__13296_13303 = G__13322;
i__13297_13304 = G__13323;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq13293){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13293));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5572__auto__ = [];
var len__5565__auto___13328 = arguments.length;
var i__5566__auto___13329 = (0);
while(true){
if((i__5566__auto___13329 < len__5565__auto___13328)){
args__5572__auto__.push((arguments[i__5566__auto___13329]));

var G__13330 = (i__5566__auto___13329 + (1));
i__5566__auto___13329 = G__13330;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__13325){
var map__13326 = p__13325;
var map__13326__$1 = ((((!((map__13326 == null)))?((((map__13326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13326):map__13326);
var m = map__13326__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13326__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq13324){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13324));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5481__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13333_13335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13334_13336 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13333_13335,_STAR_print_fn_STAR_13334_13336,sb__5481__auto__){
return (function (x__5482__auto__){
return sb__5481__auto__.append(x__5482__auto__);
});})(_STAR_print_newline_STAR_13333_13335,_STAR_print_fn_STAR_13334_13336,sb__5481__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13334_13336;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13333_13335;
}
return [cljs.core.str(sb__5481__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5420__auto__ = (function (){var G__13337 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13337) : cljs.core.atom.call(null,G__13337));
})();
var prefer_table__5421__auto__ = (function (){var G__13338 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13338) : cljs.core.atom.call(null,G__13338));
})();
var method_cache__5422__auto__ = (function (){var G__13339 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13339) : cljs.core.atom.call(null,G__13339));
})();
var cached_hierarchy__5423__auto__ = (function (){var G__13340 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13340) : cljs.core.atom.call(null,G__13340));
})();
var hierarchy__5424__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__5424__auto__,method_table__5420__auto__,prefer_table__5421__auto__,method_cache__5422__auto__,cached_hierarchy__5423__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__13341 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13341,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__13344_13346 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13344_13346) : cljs.compiler.emit_constant.call(null,G__13344_13346));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__13345_13347 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13345_13347) : cljs.compiler.emit_constant.call(null,G__13345_13347));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__13349_13350 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__13349_13350) : cljs.compiler.emit_constant.call(null,G__13349_13350));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__13351 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__13351) : x.call(null,G__13351));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__13352 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__13352) : x.call(null,G__13352));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid.toString(),"\")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__13354){
var map__13355 = p__13354;
var map__13355__$1 = ((((!((map__13355 == null)))?((((map__13355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13355):map__13355);
var arg = map__13355__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name)], null));
var or__4526__auto__ = js_module_name;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__13357 = info__$1;
var G__13357__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__13357):G__13357);
return G__13357__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__13358){
var map__13359 = p__13358;
var map__13359__$1 = ((((!((map__13359 == null)))?((((map__13359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13359):map__13359);
var arg = map__13359__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ana_SLASH_ast_QMARK_,cljs.core.cst$sym$sym)], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ana_SLASH_ast_QMARK_,cljs.core.cst$sym$meta)], 0)))].join('')));
}

var map__13361 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__13361__$1 = ((((!((map__13361 == null)))?((((map__13361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13361):map__13361);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,cljs.core.cst$kw$name);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__13363){
var map__13364 = p__13363;
var map__13364__$1 = ((((!((map__13364 == null)))?((((map__13364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13364):map__13364);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13364__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13364__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13364__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__13366_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__13366_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__13367){
var map__13368 = p__13367;
var map__13368__$1 = ((((!((map__13368 == null)))?((((map__13368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13368):map__13368);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13368__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13368__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13368__$1,cljs.core.cst$kw$vals);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__13370){
var map__13371 = p__13370;
var map__13371__$1 = ((((!((map__13371 == null)))?((((map__13371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13371):map__13371);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13371__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13371__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__13373){
var map__13374 = p__13373;
var map__13374__$1 = ((((!((map__13374 == null)))?((((map__13374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13374):map__13374);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13374__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13374__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_13376 = cljs.core.count(items);
if((cnt_13376 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_13376,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__13377_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__13377_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__13378){
var map__13379 = p__13378;
var map__13379__$1 = ((((!((map__13379 == null)))?((((map__13379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13379):map__13379);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13379__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13379__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__13381){
var map__13382 = p__13381;
var map__13382__$1 = ((((!((map__13382 == null)))?((((map__13382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13382):map__13382);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13382__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13382__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13382__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___13392 = cljs.core.seq(items);
if(temp__4425__auto___13392){
var items_13393__$1 = temp__4425__auto___13392;
var vec__13384_13394 = items_13393__$1;
var vec__13385_13395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13384_13394,(0),null);
var k_13396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385_13395,(0),null);
var v_13397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385_13395,(1),null);
var r_13398 = cljs.core.nthnext(vec__13384_13394,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_13396),"\": ",v_13397], 0));

var seq__13386_13399 = cljs.core.seq(r_13398);
var chunk__13387_13400 = null;
var count__13388_13401 = (0);
var i__13389_13402 = (0);
while(true){
if((i__13389_13402 < count__13388_13401)){
var vec__13390_13403 = chunk__13387_13400.cljs$core$IIndexed$_nth$arity$2(null,i__13389_13402);
var k_13404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390_13403,(0),null);
var v_13405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390_13403,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_13404__$1),"\": ",v_13405__$1], 0));

var G__13406 = seq__13386_13399;
var G__13407 = chunk__13387_13400;
var G__13408 = count__13388_13401;
var G__13409 = (i__13389_13402 + (1));
seq__13386_13399 = G__13406;
chunk__13387_13400 = G__13407;
count__13388_13401 = G__13408;
i__13389_13402 = G__13409;
continue;
} else {
var temp__4425__auto___13410__$1 = cljs.core.seq(seq__13386_13399);
if(temp__4425__auto___13410__$1){
var seq__13386_13411__$1 = temp__4425__auto___13410__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13386_13411__$1)){
var c__5310__auto___13412 = cljs.core.chunk_first(seq__13386_13411__$1);
var G__13413 = cljs.core.chunk_rest(seq__13386_13411__$1);
var G__13414 = c__5310__auto___13412;
var G__13415 = cljs.core.count(c__5310__auto___13412);
var G__13416 = (0);
seq__13386_13399 = G__13413;
chunk__13387_13400 = G__13414;
count__13388_13401 = G__13415;
i__13389_13402 = G__13416;
continue;
} else {
var vec__13391_13417 = cljs.core.first(seq__13386_13411__$1);
var k_13418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13391_13417,(0),null);
var v_13419__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13391_13417,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_13418__$1),"\": ",v_13419__$1], 0));

var G__13420 = cljs.core.next(seq__13386_13411__$1);
var G__13421 = null;
var G__13422 = (0);
var G__13423 = (0);
seq__13386_13399 = G__13420;
chunk__13387_13400 = G__13421;
count__13388_13401 = G__13422;
i__13389_13402 = G__13423;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__13424){
var map__13425 = p__13424;
var map__13425__$1 = ((((!((map__13425 == null)))?((((map__13425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13425):map__13425);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13425__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13425__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__13427){
var map__13430 = p__13427;
var map__13430__$1 = ((((!((map__13430 == null)))?((((map__13430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13430):map__13430);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13430__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13430__$1,cljs.core.cst$kw$form);
var and__4514__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__4514__auto__){
var and__4514__auto____$1 = form;
if(cljs.core.truth_(and__4514__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__13432){
var map__13435 = p__13432;
var map__13435__$1 = ((((!((map__13435 == null)))?((((map__13435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13435):map__13435);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13435__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13435__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4526__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__13437){
var map__13438 = p__13437;
var map__13438__$1 = ((((!((map__13438 == null)))?((((map__13438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13438):map__13438);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4526__auto__ = unchecked;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__13440){
var map__13441 = p__13440;
var map__13441__$1 = ((((!((map__13441 == null)))?((((map__13441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13441):map__13441);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__13443_13457 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__13444_13458 = null;
var count__13445_13459 = (0);
var i__13446_13460 = (0);
while(true){
if((i__13446_13460 < count__13445_13459)){
var vec__13447_13461 = chunk__13444_13458.cljs$core$IIndexed$_nth$arity$2(null,i__13446_13460);
var ts_13462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13447_13461,(0),null);
var then_13463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13447_13461,(1),null);
var seq__13448_13464 = cljs.core.seq(ts_13462);
var chunk__13449_13465 = null;
var count__13450_13466 = (0);
var i__13451_13467 = (0);
while(true){
if((i__13451_13467 < count__13450_13466)){
var test_13468 = chunk__13449_13465.cljs$core$IIndexed$_nth$arity$2(null,i__13451_13467);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13468,":"], 0));

var G__13469 = seq__13448_13464;
var G__13470 = chunk__13449_13465;
var G__13471 = count__13450_13466;
var G__13472 = (i__13451_13467 + (1));
seq__13448_13464 = G__13469;
chunk__13449_13465 = G__13470;
count__13450_13466 = G__13471;
i__13451_13467 = G__13472;
continue;
} else {
var temp__4425__auto___13473 = cljs.core.seq(seq__13448_13464);
if(temp__4425__auto___13473){
var seq__13448_13474__$1 = temp__4425__auto___13473;
if(cljs.core.chunked_seq_QMARK_(seq__13448_13474__$1)){
var c__5310__auto___13475 = cljs.core.chunk_first(seq__13448_13474__$1);
var G__13476 = cljs.core.chunk_rest(seq__13448_13474__$1);
var G__13477 = c__5310__auto___13475;
var G__13478 = cljs.core.count(c__5310__auto___13475);
var G__13479 = (0);
seq__13448_13464 = G__13476;
chunk__13449_13465 = G__13477;
count__13450_13466 = G__13478;
i__13451_13467 = G__13479;
continue;
} else {
var test_13480 = cljs.core.first(seq__13448_13474__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13480,":"], 0));

var G__13481 = cljs.core.next(seq__13448_13474__$1);
var G__13482 = null;
var G__13483 = (0);
var G__13484 = (0);
seq__13448_13464 = G__13481;
chunk__13449_13465 = G__13482;
count__13450_13466 = G__13483;
i__13451_13467 = G__13484;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_13463], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_13463], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__13485 = seq__13443_13457;
var G__13486 = chunk__13444_13458;
var G__13487 = count__13445_13459;
var G__13488 = (i__13446_13460 + (1));
seq__13443_13457 = G__13485;
chunk__13444_13458 = G__13486;
count__13445_13459 = G__13487;
i__13446_13460 = G__13488;
continue;
} else {
var temp__4425__auto___13489 = cljs.core.seq(seq__13443_13457);
if(temp__4425__auto___13489){
var seq__13443_13490__$1 = temp__4425__auto___13489;
if(cljs.core.chunked_seq_QMARK_(seq__13443_13490__$1)){
var c__5310__auto___13491 = cljs.core.chunk_first(seq__13443_13490__$1);
var G__13492 = cljs.core.chunk_rest(seq__13443_13490__$1);
var G__13493 = c__5310__auto___13491;
var G__13494 = cljs.core.count(c__5310__auto___13491);
var G__13495 = (0);
seq__13443_13457 = G__13492;
chunk__13444_13458 = G__13493;
count__13445_13459 = G__13494;
i__13446_13460 = G__13495;
continue;
} else {
var vec__13452_13496 = cljs.core.first(seq__13443_13490__$1);
var ts_13497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13452_13496,(0),null);
var then_13498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13452_13496,(1),null);
var seq__13453_13499 = cljs.core.seq(ts_13497);
var chunk__13454_13500 = null;
var count__13455_13501 = (0);
var i__13456_13502 = (0);
while(true){
if((i__13456_13502 < count__13455_13501)){
var test_13503 = chunk__13454_13500.cljs$core$IIndexed$_nth$arity$2(null,i__13456_13502);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13503,":"], 0));

var G__13504 = seq__13453_13499;
var G__13505 = chunk__13454_13500;
var G__13506 = count__13455_13501;
var G__13507 = (i__13456_13502 + (1));
seq__13453_13499 = G__13504;
chunk__13454_13500 = G__13505;
count__13455_13501 = G__13506;
i__13456_13502 = G__13507;
continue;
} else {
var temp__4425__auto___13508__$1 = cljs.core.seq(seq__13453_13499);
if(temp__4425__auto___13508__$1){
var seq__13453_13509__$1 = temp__4425__auto___13508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13453_13509__$1)){
var c__5310__auto___13510 = cljs.core.chunk_first(seq__13453_13509__$1);
var G__13511 = cljs.core.chunk_rest(seq__13453_13509__$1);
var G__13512 = c__5310__auto___13510;
var G__13513 = cljs.core.count(c__5310__auto___13510);
var G__13514 = (0);
seq__13453_13499 = G__13511;
chunk__13454_13500 = G__13512;
count__13455_13501 = G__13513;
i__13456_13502 = G__13514;
continue;
} else {
var test_13515 = cljs.core.first(seq__13453_13509__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_13515,":"], 0));

var G__13516 = cljs.core.next(seq__13453_13509__$1);
var G__13517 = null;
var G__13518 = (0);
var G__13519 = (0);
seq__13453_13499 = G__13516;
chunk__13454_13500 = G__13517;
count__13455_13501 = G__13518;
i__13456_13502 = G__13519;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_13498], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_13498], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__13520 = cljs.core.next(seq__13443_13490__$1);
var G__13521 = null;
var G__13522 = (0);
var G__13523 = (0);
seq__13443_13457 = G__13520;
chunk__13444_13458 = G__13521;
count__13445_13459 = G__13522;
i__13446_13460 = G__13523;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__13524){
var map__13525 = p__13524;
var map__13525__$1 = ((((!((map__13525 == null)))?((((map__13525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13525):map__13525);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13525__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13525__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$emit_comment_$_print_comment_lines(e){
var seq__13559 = cljs.core.seq(clojure.string.split_lines(e));
var chunk__13560 = null;
var count__13561 = (0);
var i__13562 = (0);
while(true){
if((i__13562 < count__13561)){
var next_line = chunk__13560.cljs$core$IIndexed$_nth$arity$2(null,i__13562);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.trim(next_line),"*/","* /")], 0));

var G__13567 = seq__13559;
var G__13568 = chunk__13560;
var G__13569 = count__13561;
var G__13570 = (i__13562 + (1));
seq__13559 = G__13567;
chunk__13560 = G__13568;
count__13561 = G__13569;
i__13562 = G__13570;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13559);
if(temp__4425__auto__){
var seq__13559__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13559__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__13559__$1);
var G__13571 = cljs.core.chunk_rest(seq__13559__$1);
var G__13572 = c__5310__auto__;
var G__13573 = cljs.core.count(c__5310__auto__);
var G__13574 = (0);
seq__13559 = G__13571;
chunk__13560 = G__13572;
count__13561 = G__13573;
i__13562 = G__13574;
continue;
} else {
var next_line = cljs.core.first(seq__13559__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.trim(next_line),"*/","* /")], 0));

var G__13575 = cljs.core.next(seq__13559__$1);
var G__13576 = null;
var G__13577 = (0);
var G__13578 = (0);
seq__13559 = G__13575;
chunk__13560 = G__13576;
count__13561 = G__13577;
i__13562 = G__13578;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__13563_13579 = cljs.core.seq(docs__$2);
var chunk__13564_13580 = null;
var count__13565_13581 = (0);
var i__13566_13582 = (0);
while(true){
if((i__13566_13582 < count__13565_13581)){
var e_13583 = chunk__13564_13580.cljs$core$IIndexed$_nth$arity$2(null,i__13566_13582);
if(cljs.core.truth_(e_13583)){
print_comment_lines(e_13583);
} else {
}

var G__13584 = seq__13563_13579;
var G__13585 = chunk__13564_13580;
var G__13586 = count__13565_13581;
var G__13587 = (i__13566_13582 + (1));
seq__13563_13579 = G__13584;
chunk__13564_13580 = G__13585;
count__13565_13581 = G__13586;
i__13566_13582 = G__13587;
continue;
} else {
var temp__4425__auto___13588 = cljs.core.seq(seq__13563_13579);
if(temp__4425__auto___13588){
var seq__13563_13589__$1 = temp__4425__auto___13588;
if(cljs.core.chunked_seq_QMARK_(seq__13563_13589__$1)){
var c__5310__auto___13590 = cljs.core.chunk_first(seq__13563_13589__$1);
var G__13591 = cljs.core.chunk_rest(seq__13563_13589__$1);
var G__13592 = c__5310__auto___13590;
var G__13593 = cljs.core.count(c__5310__auto___13590);
var G__13594 = (0);
seq__13563_13579 = G__13591;
chunk__13564_13580 = G__13592;
count__13565_13581 = G__13593;
i__13566_13582 = G__13594;
continue;
} else {
var e_13595 = cljs.core.first(seq__13563_13589__$1);
if(cljs.core.truth_(e_13595)){
print_comment_lines(e_13595);
} else {
}

var G__13596 = cljs.core.next(seq__13563_13589__$1);
var G__13597 = null;
var G__13598 = (0);
var G__13599 = (0);
seq__13563_13579 = G__13596;
chunk__13564_13580 = G__13597;
count__13565_13581 = G__13598;
i__13566_13582 = G__13599;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$options);
var and__4514__auto__ = cljs.core.some(((function (opts){
return (function (p1__13601_SHARP_){
return goog.string.startsWith(p1__13601_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4514__auto__)){
var and__4514__auto____$1 = opts;
if(cljs.core.truth_(and__4514__auto____$1)){
var and__4514__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__4514__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__4514__auto____$2;
}
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__13602){
var map__13603 = p__13602;
var map__13603__$1 = ((((!((map__13603 == null)))?((((map__13603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13603):map__13603);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13603__$1,cljs.core.cst$kw$var_DASH_ast);
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(init)){
cljs.compiler.emit_comment(doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4514__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4514__auto__)){
return test;
} else {
return and__4514__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13605){
var map__13622 = p__13605;
var map__13622__$1 = ((((!((map__13622 == null)))?((((map__13622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13622):map__13622);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13622__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13622__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13622__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__13624_13638 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__13625_13639 = null;
var count__13626_13640 = (0);
var i__13627_13641 = (0);
while(true){
if((i__13627_13641 < count__13626_13640)){
var vec__13628_13642 = chunk__13625_13639.cljs$core$IIndexed$_nth$arity$2(null,i__13627_13641);
var i_13643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628_13642,(0),null);
var param_13644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628_13642,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_13644);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__13645 = seq__13624_13638;
var G__13646 = chunk__13625_13639;
var G__13647 = count__13626_13640;
var G__13648 = (i__13627_13641 + (1));
seq__13624_13638 = G__13645;
chunk__13625_13639 = G__13646;
count__13626_13640 = G__13647;
i__13627_13641 = G__13648;
continue;
} else {
var temp__4425__auto___13649 = cljs.core.seq(seq__13624_13638);
if(temp__4425__auto___13649){
var seq__13624_13650__$1 = temp__4425__auto___13649;
if(cljs.core.chunked_seq_QMARK_(seq__13624_13650__$1)){
var c__5310__auto___13651 = cljs.core.chunk_first(seq__13624_13650__$1);
var G__13652 = cljs.core.chunk_rest(seq__13624_13650__$1);
var G__13653 = c__5310__auto___13651;
var G__13654 = cljs.core.count(c__5310__auto___13651);
var G__13655 = (0);
seq__13624_13638 = G__13652;
chunk__13625_13639 = G__13653;
count__13626_13640 = G__13654;
i__13627_13641 = G__13655;
continue;
} else {
var vec__13629_13656 = cljs.core.first(seq__13624_13650__$1);
var i_13657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629_13656,(0),null);
var param_13658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629_13656,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_13658);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__13659 = cljs.core.next(seq__13624_13650__$1);
var G__13660 = null;
var G__13661 = (0);
var G__13662 = (0);
seq__13624_13638 = G__13659;
chunk__13625_13639 = G__13660;
count__13626_13640 = G__13661;
i__13627_13641 = G__13662;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__13630_13663 = cljs.core.seq(params);
var chunk__13631_13664 = null;
var count__13632_13665 = (0);
var i__13633_13666 = (0);
while(true){
if((i__13633_13666 < count__13632_13665)){
var param_13667 = chunk__13631_13664.cljs$core$IIndexed$_nth$arity$2(null,i__13633_13666);
cljs.compiler.emit(param_13667);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13667,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13668 = seq__13630_13663;
var G__13669 = chunk__13631_13664;
var G__13670 = count__13632_13665;
var G__13671 = (i__13633_13666 + (1));
seq__13630_13663 = G__13668;
chunk__13631_13664 = G__13669;
count__13632_13665 = G__13670;
i__13633_13666 = G__13671;
continue;
} else {
var temp__4425__auto___13672 = cljs.core.seq(seq__13630_13663);
if(temp__4425__auto___13672){
var seq__13630_13673__$1 = temp__4425__auto___13672;
if(cljs.core.chunked_seq_QMARK_(seq__13630_13673__$1)){
var c__5310__auto___13674 = cljs.core.chunk_first(seq__13630_13673__$1);
var G__13675 = cljs.core.chunk_rest(seq__13630_13673__$1);
var G__13676 = c__5310__auto___13674;
var G__13677 = cljs.core.count(c__5310__auto___13674);
var G__13678 = (0);
seq__13630_13663 = G__13675;
chunk__13631_13664 = G__13676;
count__13632_13665 = G__13677;
i__13633_13666 = G__13678;
continue;
} else {
var param_13679 = cljs.core.first(seq__13630_13673__$1);
cljs.compiler.emit(param_13679);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13679,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13680 = cljs.core.next(seq__13630_13673__$1);
var G__13681 = null;
var G__13682 = (0);
var G__13683 = (0);
seq__13630_13663 = G__13680;
chunk__13631_13664 = G__13681;
count__13632_13665 = G__13682;
i__13633_13666 = G__13683;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__13634_13684 = cljs.core.seq(params);
var chunk__13635_13685 = null;
var count__13636_13686 = (0);
var i__13637_13687 = (0);
while(true){
if((i__13637_13687 < count__13636_13686)){
var param_13688 = chunk__13635_13685.cljs$core$IIndexed$_nth$arity$2(null,i__13637_13687);
cljs.compiler.emit(param_13688);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13688,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13689 = seq__13634_13684;
var G__13690 = chunk__13635_13685;
var G__13691 = count__13636_13686;
var G__13692 = (i__13637_13687 + (1));
seq__13634_13684 = G__13689;
chunk__13635_13685 = G__13690;
count__13636_13686 = G__13691;
i__13637_13687 = G__13692;
continue;
} else {
var temp__4425__auto___13693 = cljs.core.seq(seq__13634_13684);
if(temp__4425__auto___13693){
var seq__13634_13694__$1 = temp__4425__auto___13693;
if(cljs.core.chunked_seq_QMARK_(seq__13634_13694__$1)){
var c__5310__auto___13695 = cljs.core.chunk_first(seq__13634_13694__$1);
var G__13696 = cljs.core.chunk_rest(seq__13634_13694__$1);
var G__13697 = c__5310__auto___13695;
var G__13698 = cljs.core.count(c__5310__auto___13695);
var G__13699 = (0);
seq__13634_13684 = G__13696;
chunk__13635_13685 = G__13697;
count__13636_13686 = G__13698;
i__13637_13687 = G__13699;
continue;
} else {
var param_13700 = cljs.core.first(seq__13634_13694__$1);
cljs.compiler.emit(param_13700);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13700,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13701 = cljs.core.next(seq__13634_13694__$1);
var G__13702 = null;
var G__13703 = (0);
var G__13704 = (0);
seq__13634_13684 = G__13701;
chunk__13635_13685 = G__13702;
count__13636_13686 = G__13703;
i__13637_13687 = G__13704;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__13709 = cljs.core.seq(params);
var chunk__13710 = null;
var count__13711 = (0);
var i__13712 = (0);
while(true){
if((i__13712 < count__13711)){
var param = chunk__13710.cljs$core$IIndexed$_nth$arity$2(null,i__13712);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13713 = seq__13709;
var G__13714 = chunk__13710;
var G__13715 = count__13711;
var G__13716 = (i__13712 + (1));
seq__13709 = G__13713;
chunk__13710 = G__13714;
count__13711 = G__13715;
i__13712 = G__13716;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13709);
if(temp__4425__auto__){
var seq__13709__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13709__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__13709__$1);
var G__13717 = cljs.core.chunk_rest(seq__13709__$1);
var G__13718 = c__5310__auto__;
var G__13719 = cljs.core.count(c__5310__auto__);
var G__13720 = (0);
seq__13709 = G__13717;
chunk__13710 = G__13718;
count__13711 = G__13719;
i__13712 = G__13720;
continue;
} else {
var param = cljs.core.first(seq__13709__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13721 = cljs.core.next(seq__13709__$1);
var G__13722 = null;
var G__13723 = (0);
var G__13724 = (0);
seq__13709 = G__13721;
chunk__13710 = G__13722;
count__13711 = G__13723;
i__13712 = G__13724;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13725){
var map__13728 = p__13725;
var map__13728__$1 = ((((!((map__13728 == null)))?((((map__13728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13728):map__13728);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13728__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 * Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$and,cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$startslice,(0)),cljs.core.list(cljs.core.cst$sym$integer_QMARK_,cljs.core.cst$sym$startslice))], 0)))].join('')));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13730){
var map__13741 = p__13730;
var map__13741__$1 = ((((!((map__13741 == null)))?((((map__13741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13741):map__13741);
var f = map__13741__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13741__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_13751__$1 = (function (){var or__4526__auto__ = name;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13752 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13751__$1);
var delegate_name_13753 = [cljs.core.str(mname_13752),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_13753," = function ("], 0));

var seq__13743_13754 = cljs.core.seq(params);
var chunk__13744_13755 = null;
var count__13745_13756 = (0);
var i__13746_13757 = (0);
while(true){
if((i__13746_13757 < count__13745_13756)){
var param_13758 = chunk__13744_13755.cljs$core$IIndexed$_nth$arity$2(null,i__13746_13757);
cljs.compiler.emit(param_13758);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13758,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13759 = seq__13743_13754;
var G__13760 = chunk__13744_13755;
var G__13761 = count__13745_13756;
var G__13762 = (i__13746_13757 + (1));
seq__13743_13754 = G__13759;
chunk__13744_13755 = G__13760;
count__13745_13756 = G__13761;
i__13746_13757 = G__13762;
continue;
} else {
var temp__4425__auto___13763 = cljs.core.seq(seq__13743_13754);
if(temp__4425__auto___13763){
var seq__13743_13764__$1 = temp__4425__auto___13763;
if(cljs.core.chunked_seq_QMARK_(seq__13743_13764__$1)){
var c__5310__auto___13765 = cljs.core.chunk_first(seq__13743_13764__$1);
var G__13766 = cljs.core.chunk_rest(seq__13743_13764__$1);
var G__13767 = c__5310__auto___13765;
var G__13768 = cljs.core.count(c__5310__auto___13765);
var G__13769 = (0);
seq__13743_13754 = G__13766;
chunk__13744_13755 = G__13767;
count__13745_13756 = G__13768;
i__13746_13757 = G__13769;
continue;
} else {
var param_13770 = cljs.core.first(seq__13743_13764__$1);
cljs.compiler.emit(param_13770);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13770,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13771 = cljs.core.next(seq__13743_13764__$1);
var G__13772 = null;
var G__13773 = (0);
var G__13774 = (0);
seq__13743_13754 = G__13771;
chunk__13744_13755 = G__13772;
count__13745_13756 = G__13773;
i__13746_13757 = G__13774;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_13752," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_13775 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_13775,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_13753,".call(this,"], 0));

var seq__13747_13776 = cljs.core.seq(params);
var chunk__13748_13777 = null;
var count__13749_13778 = (0);
var i__13750_13779 = (0);
while(true){
if((i__13750_13779 < count__13749_13778)){
var param_13780 = chunk__13748_13777.cljs$core$IIndexed$_nth$arity$2(null,i__13750_13779);
cljs.compiler.emit(param_13780);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13780,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13781 = seq__13747_13776;
var G__13782 = chunk__13748_13777;
var G__13783 = count__13749_13778;
var G__13784 = (i__13750_13779 + (1));
seq__13747_13776 = G__13781;
chunk__13748_13777 = G__13782;
count__13749_13778 = G__13783;
i__13750_13779 = G__13784;
continue;
} else {
var temp__4425__auto___13785 = cljs.core.seq(seq__13747_13776);
if(temp__4425__auto___13785){
var seq__13747_13786__$1 = temp__4425__auto___13785;
if(cljs.core.chunked_seq_QMARK_(seq__13747_13786__$1)){
var c__5310__auto___13787 = cljs.core.chunk_first(seq__13747_13786__$1);
var G__13788 = cljs.core.chunk_rest(seq__13747_13786__$1);
var G__13789 = c__5310__auto___13787;
var G__13790 = cljs.core.count(c__5310__auto___13787);
var G__13791 = (0);
seq__13747_13776 = G__13788;
chunk__13748_13777 = G__13789;
count__13749_13778 = G__13790;
i__13750_13779 = G__13791;
continue;
} else {
var param_13792 = cljs.core.first(seq__13747_13786__$1);
cljs.compiler.emit(param_13792);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_13792,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__13793 = cljs.core.next(seq__13747_13786__$1);
var G__13794 = null;
var G__13795 = (0);
var G__13796 = (0);
seq__13747_13776 = G__13793;
chunk__13748_13777 = G__13794;
count__13749_13778 = G__13795;
i__13750_13779 = G__13796;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13752,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13752,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_13751__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13752,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13753,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_13752,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__13800){
var map__13801 = p__13800;
var map__13801__$1 = ((((!((map__13801 == null)))?((((map__13801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13801):map__13801);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13801__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13797_SHARP_){
var and__4514__auto__ = p1__13797_SHARP_;
if(cljs.core.truth_(and__4514__auto__)){
var G__13803 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__13797_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13803) : cljs.core.deref.call(null,G__13803));
} else {
return and__4514__auto__;
}
});})(map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_13823__$1 = (function (){var or__4526__auto__ = name;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_13824 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_13823__$1);
var maxparams_13825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_13826 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_13823__$1,mname_13824,maxparams_13825,loop_locals,map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_13824),cljs.core.str("__"),cljs.core.str(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13823__$1,mname_13824,maxparams_13825,loop_locals,map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13827 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_13823__$1,mname_13824,maxparams_13825,mmap_13826,loop_locals,map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13798_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13798_SHARP_)));
});})(name_13823__$1,mname_13824,maxparams_13825,mmap_13826,loop_locals,map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_13826));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_13824," = null;"], 0));

var seq__13804_13828 = cljs.core.seq(ms_13827);
var chunk__13805_13829 = null;
var count__13806_13830 = (0);
var i__13807_13831 = (0);
while(true){
if((i__13807_13831 < count__13806_13830)){
var vec__13808_13832 = chunk__13805_13829.cljs$core$IIndexed$_nth$arity$2(null,i__13807_13831);
var n_13833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808_13832,(0),null);
var meth_13834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808_13832,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_13833," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13834))){
cljs.compiler.emit_variadic_fn_method(meth_13834);
} else {
cljs.compiler.emit_fn_method(meth_13834);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__13835 = seq__13804_13828;
var G__13836 = chunk__13805_13829;
var G__13837 = count__13806_13830;
var G__13838 = (i__13807_13831 + (1));
seq__13804_13828 = G__13835;
chunk__13805_13829 = G__13836;
count__13806_13830 = G__13837;
i__13807_13831 = G__13838;
continue;
} else {
var temp__4425__auto___13839 = cljs.core.seq(seq__13804_13828);
if(temp__4425__auto___13839){
var seq__13804_13840__$1 = temp__4425__auto___13839;
if(cljs.core.chunked_seq_QMARK_(seq__13804_13840__$1)){
var c__5310__auto___13841 = cljs.core.chunk_first(seq__13804_13840__$1);
var G__13842 = cljs.core.chunk_rest(seq__13804_13840__$1);
var G__13843 = c__5310__auto___13841;
var G__13844 = cljs.core.count(c__5310__auto___13841);
var G__13845 = (0);
seq__13804_13828 = G__13842;
chunk__13805_13829 = G__13843;
count__13806_13830 = G__13844;
i__13807_13831 = G__13845;
continue;
} else {
var vec__13809_13846 = cljs.core.first(seq__13804_13840__$1);
var n_13847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809_13846,(0),null);
var meth_13848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809_13846,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_13847," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13848))){
cljs.compiler.emit_variadic_fn_method(meth_13848);
} else {
cljs.compiler.emit_fn_method(meth_13848);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__13849 = cljs.core.next(seq__13804_13840__$1);
var G__13850 = null;
var G__13851 = (0);
var G__13852 = (0);
seq__13804_13828 = G__13849;
chunk__13805_13829 = G__13850;
count__13806_13830 = G__13851;
i__13807_13831 = G__13852;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_13825),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_13825)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_13825));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__13810_13853 = cljs.core.seq(ms_13827);
var chunk__13811_13854 = null;
var count__13812_13855 = (0);
var i__13813_13856 = (0);
while(true){
if((i__13813_13856 < count__13812_13855)){
var vec__13814_13857 = chunk__13811_13854.cljs$core$IIndexed$_nth$arity$2(null,i__13813_13856);
var n_13858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814_13857,(0),null);
var meth_13859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814_13857,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13859))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_13860 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_13860," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_13861 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_13860," = new cljs.core.IndexedSeq(",a_13861,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13858,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13825)),(((cljs.core.count(maxparams_13825) > (1)))?", ":null),restarg_13860,");"], 0));
} else {
var pcnt_13862 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13859));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_13862,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13858,".call(this",(((pcnt_13862 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13862,maxparams_13825))),",")),");"], 0));
}

var G__13863 = seq__13810_13853;
var G__13864 = chunk__13811_13854;
var G__13865 = count__13812_13855;
var G__13866 = (i__13813_13856 + (1));
seq__13810_13853 = G__13863;
chunk__13811_13854 = G__13864;
count__13812_13855 = G__13865;
i__13813_13856 = G__13866;
continue;
} else {
var temp__4425__auto___13867 = cljs.core.seq(seq__13810_13853);
if(temp__4425__auto___13867){
var seq__13810_13868__$1 = temp__4425__auto___13867;
if(cljs.core.chunked_seq_QMARK_(seq__13810_13868__$1)){
var c__5310__auto___13869 = cljs.core.chunk_first(seq__13810_13868__$1);
var G__13870 = cljs.core.chunk_rest(seq__13810_13868__$1);
var G__13871 = c__5310__auto___13869;
var G__13872 = cljs.core.count(c__5310__auto___13869);
var G__13873 = (0);
seq__13810_13853 = G__13870;
chunk__13811_13854 = G__13871;
count__13812_13855 = G__13872;
i__13813_13856 = G__13873;
continue;
} else {
var vec__13815_13874 = cljs.core.first(seq__13810_13868__$1);
var n_13875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815_13874,(0),null);
var meth_13876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13815_13874,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13876))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_13877 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_13877," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_13878 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_13877," = new cljs.core.IndexedSeq(",a_13878,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13875,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_13825)),(((cljs.core.count(maxparams_13825) > (1)))?", ":null),restarg_13877,");"], 0));
} else {
var pcnt_13879 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13876));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_13879,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_13875,".call(this",(((pcnt_13879 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_13879,maxparams_13825))),",")),");"], 0));
}

var G__13880 = cljs.core.next(seq__13810_13868__$1);
var G__13881 = null;
var G__13882 = (0);
var G__13883 = (0);
seq__13810_13853 = G__13880;
chunk__13811_13854 = G__13881;
count__13812_13855 = G__13882;
i__13813_13856 = G__13883;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824,".cljs$lang$applyTo = ",cljs.core.some(((function (name_13823__$1,mname_13824,maxparams_13825,mmap_13826,ms_13827,loop_locals,map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13799_SHARP_){
var vec__13816 = p1__13799_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13816,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13816,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13823__$1,mname_13824,maxparams_13825,mmap_13826,ms_13827,loop_locals,map__13801,map__13801__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13827),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__13817_13884 = cljs.core.seq(ms_13827);
var chunk__13818_13885 = null;
var count__13819_13886 = (0);
var i__13820_13887 = (0);
while(true){
if((i__13820_13887 < count__13819_13886)){
var vec__13821_13888 = chunk__13818_13885.cljs$core$IIndexed$_nth$arity$2(null,i__13820_13887);
var n_13889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13821_13888,(0),null);
var meth_13890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13821_13888,(1),null);
var c_13891 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13890));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13890))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824,".cljs$core$IFn$_invoke$arity$variadic = ",n_13889,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824,".cljs$core$IFn$_invoke$arity$",c_13891," = ",n_13889,";"], 0));
}

var G__13892 = seq__13817_13884;
var G__13893 = chunk__13818_13885;
var G__13894 = count__13819_13886;
var G__13895 = (i__13820_13887 + (1));
seq__13817_13884 = G__13892;
chunk__13818_13885 = G__13893;
count__13819_13886 = G__13894;
i__13820_13887 = G__13895;
continue;
} else {
var temp__4425__auto___13896 = cljs.core.seq(seq__13817_13884);
if(temp__4425__auto___13896){
var seq__13817_13897__$1 = temp__4425__auto___13896;
if(cljs.core.chunked_seq_QMARK_(seq__13817_13897__$1)){
var c__5310__auto___13898 = cljs.core.chunk_first(seq__13817_13897__$1);
var G__13899 = cljs.core.chunk_rest(seq__13817_13897__$1);
var G__13900 = c__5310__auto___13898;
var G__13901 = cljs.core.count(c__5310__auto___13898);
var G__13902 = (0);
seq__13817_13884 = G__13899;
chunk__13818_13885 = G__13900;
count__13819_13886 = G__13901;
i__13820_13887 = G__13902;
continue;
} else {
var vec__13822_13903 = cljs.core.first(seq__13817_13897__$1);
var n_13904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822_13903,(0),null);
var meth_13905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822_13903,(1),null);
var c_13906 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_13905));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_13905))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824,".cljs$core$IFn$_invoke$arity$variadic = ",n_13904,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_13824,".cljs$core$IFn$_invoke$arity$",c_13906," = ",n_13904,";"], 0));
}

var G__13907 = cljs.core.next(seq__13817_13897__$1);
var G__13908 = null;
var G__13909 = (0);
var G__13910 = (0);
seq__13817_13884 = G__13907;
chunk__13818_13885 = G__13908;
count__13819_13886 = G__13909;
i__13820_13887 = G__13910;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_13824,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__13911){
var map__13912 = p__13911;
var map__13912__$1 = ((((!((map__13912 == null)))?((((map__13912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13912):map__13912);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13912__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13912__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13912__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4514__auto__ = statements;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__4514__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__13914_13918 = cljs.core.seq(statements);
var chunk__13915_13919 = null;
var count__13916_13920 = (0);
var i__13917_13921 = (0);
while(true){
if((i__13917_13921 < count__13916_13920)){
var s_13922 = chunk__13915_13919.cljs$core$IIndexed$_nth$arity$2(null,i__13917_13921);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13922], 0));

var G__13923 = seq__13914_13918;
var G__13924 = chunk__13915_13919;
var G__13925 = count__13916_13920;
var G__13926 = (i__13917_13921 + (1));
seq__13914_13918 = G__13923;
chunk__13915_13919 = G__13924;
count__13916_13920 = G__13925;
i__13917_13921 = G__13926;
continue;
} else {
var temp__4425__auto___13927 = cljs.core.seq(seq__13914_13918);
if(temp__4425__auto___13927){
var seq__13914_13928__$1 = temp__4425__auto___13927;
if(cljs.core.chunked_seq_QMARK_(seq__13914_13928__$1)){
var c__5310__auto___13929 = cljs.core.chunk_first(seq__13914_13928__$1);
var G__13930 = cljs.core.chunk_rest(seq__13914_13928__$1);
var G__13931 = c__5310__auto___13929;
var G__13932 = cljs.core.count(c__5310__auto___13929);
var G__13933 = (0);
seq__13914_13918 = G__13930;
chunk__13915_13919 = G__13931;
count__13916_13920 = G__13932;
i__13917_13921 = G__13933;
continue;
} else {
var s_13934 = cljs.core.first(seq__13914_13928__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_13934], 0));

var G__13935 = cljs.core.next(seq__13914_13928__$1);
var G__13936 = null;
var G__13937 = (0);
var G__13938 = (0);
seq__13914_13918 = G__13935;
chunk__13915_13919 = G__13936;
count__13916_13920 = G__13937;
i__13917_13921 = G__13938;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__4514__auto__ = statements;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__4514__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__13939){
var map__13940 = p__13939;
var map__13940__$1 = ((((!((map__13940 == null)))?((((map__13940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13940):map__13940);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13940__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13940__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13940__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13940__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13940__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4526__auto__ = name;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not_EQ_,cljs.core.cst$kw$constant,cljs.core.list(cljs.core.cst$kw$op,cljs.core.cst$sym$finally))], 0)))].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13942,is_loop){
var map__13954 = p__13942;
var map__13954__$1 = ((((!((map__13954 == null)))?((((map__13954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13954):map__13954);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13954__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13954__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13954__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_13956_13965 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_13956_13965,context,map__13954,map__13954__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash(name),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_13956_13965,context,map__13954,map__13954__$1,bindings,expr,env))
,bindings):null));

try{var seq__13957_13966 = cljs.core.seq(bindings);
var chunk__13958_13967 = null;
var count__13959_13968 = (0);
var i__13960_13969 = (0);
while(true){
if((i__13960_13969 < count__13959_13968)){
var map__13961_13970 = chunk__13958_13967.cljs$core$IIndexed$_nth$arity$2(null,i__13960_13969);
var map__13961_13971__$1 = ((((!((map__13961_13970 == null)))?((((map__13961_13970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13961_13970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13961_13970):map__13961_13970);
var binding_13972 = map__13961_13971__$1;
var init_13973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13961_13971__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_13972);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_13973,";"], 0));

var G__13974 = seq__13957_13966;
var G__13975 = chunk__13958_13967;
var G__13976 = count__13959_13968;
var G__13977 = (i__13960_13969 + (1));
seq__13957_13966 = G__13974;
chunk__13958_13967 = G__13975;
count__13959_13968 = G__13976;
i__13960_13969 = G__13977;
continue;
} else {
var temp__4425__auto___13978 = cljs.core.seq(seq__13957_13966);
if(temp__4425__auto___13978){
var seq__13957_13979__$1 = temp__4425__auto___13978;
if(cljs.core.chunked_seq_QMARK_(seq__13957_13979__$1)){
var c__5310__auto___13980 = cljs.core.chunk_first(seq__13957_13979__$1);
var G__13981 = cljs.core.chunk_rest(seq__13957_13979__$1);
var G__13982 = c__5310__auto___13980;
var G__13983 = cljs.core.count(c__5310__auto___13980);
var G__13984 = (0);
seq__13957_13966 = G__13981;
chunk__13958_13967 = G__13982;
count__13959_13968 = G__13983;
i__13960_13969 = G__13984;
continue;
} else {
var map__13963_13985 = cljs.core.first(seq__13957_13979__$1);
var map__13963_13986__$1 = ((((!((map__13963_13985 == null)))?((((map__13963_13985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13963_13985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13963_13985):map__13963_13985);
var binding_13987 = map__13963_13986__$1;
var init_13988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13963_13986__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_13987);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_13988,";"], 0));

var G__13989 = cljs.core.next(seq__13957_13979__$1);
var G__13990 = null;
var G__13991 = (0);
var G__13992 = (0);
seq__13957_13966 = G__13989;
chunk__13958_13967 = G__13990;
count__13959_13968 = G__13991;
i__13960_13969 = G__13992;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13956_13965;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__13993){
var map__13994 = p__13993;
var map__13994__$1 = ((((!((map__13994 == null)))?((((map__13994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13994):map__13994);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13994__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__5410__auto___13996 = cljs.core.count(exprs);
var i_13997 = (0);
while(true){
if((i_13997 < n__5410__auto___13996)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_13997) : temps.call(null,i_13997))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_13997) : exprs.call(null,i_13997)),";"], 0));

var G__13998 = (i_13997 + (1));
i_13997 = G__13998;
continue;
} else {
}
break;
}

var n__5410__auto___13999 = cljs.core.count(exprs);
var i_14000 = (0);
while(true){
if((i_14000 < n__5410__auto___13999)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_14000) : params.call(null,i_14000)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_14000) : temps.call(null,i_14000)),";"], 0));

var G__14001 = (i_14000 + (1));
i_14000 = G__14001;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__14002){
var map__14003 = p__14002;
var map__14003__$1 = ((((!((map__14003 == null)))?((((map__14003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14003):map__14003);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14003__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__14005_14013 = cljs.core.seq(bindings);
var chunk__14006_14014 = null;
var count__14007_14015 = (0);
var i__14008_14016 = (0);
while(true){
if((i__14008_14016 < count__14007_14015)){
var map__14009_14017 = chunk__14006_14014.cljs$core$IIndexed$_nth$arity$2(null,i__14008_14016);
var map__14009_14018__$1 = ((((!((map__14009_14017 == null)))?((((map__14009_14017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14009_14017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14009_14017):map__14009_14017);
var binding_14019 = map__14009_14018__$1;
var init_14020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14009_14018__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_14019)," = ",init_14020,";"], 0));

var G__14021 = seq__14005_14013;
var G__14022 = chunk__14006_14014;
var G__14023 = count__14007_14015;
var G__14024 = (i__14008_14016 + (1));
seq__14005_14013 = G__14021;
chunk__14006_14014 = G__14022;
count__14007_14015 = G__14023;
i__14008_14016 = G__14024;
continue;
} else {
var temp__4425__auto___14025 = cljs.core.seq(seq__14005_14013);
if(temp__4425__auto___14025){
var seq__14005_14026__$1 = temp__4425__auto___14025;
if(cljs.core.chunked_seq_QMARK_(seq__14005_14026__$1)){
var c__5310__auto___14027 = cljs.core.chunk_first(seq__14005_14026__$1);
var G__14028 = cljs.core.chunk_rest(seq__14005_14026__$1);
var G__14029 = c__5310__auto___14027;
var G__14030 = cljs.core.count(c__5310__auto___14027);
var G__14031 = (0);
seq__14005_14013 = G__14028;
chunk__14006_14014 = G__14029;
count__14007_14015 = G__14030;
i__14008_14016 = G__14031;
continue;
} else {
var map__14011_14032 = cljs.core.first(seq__14005_14026__$1);
var map__14011_14033__$1 = ((((!((map__14011_14032 == null)))?((((map__14011_14032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14011_14032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14011_14032):map__14011_14032);
var binding_14034 = map__14011_14033__$1;
var init_14035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14011_14033__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_14034)," = ",init_14035,";"], 0));

var G__14036 = cljs.core.next(seq__14005_14026__$1);
var G__14037 = null;
var G__14038 = (0);
var G__14039 = (0);
seq__14005_14013 = G__14036;
chunk__14006_14014 = G__14037;
count__14007_14015 = G__14038;
i__14008_14016 = G__14039;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__14042){
var map__14043 = p__14042;
var map__14043__$1 = ((((!((map__14043 == null)))?((((map__14043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14043):map__14043);
var expr = map__14043__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14043__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14043__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14043__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4514__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4514__auto__)){
var and__4514__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__4514__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4514__auto__ = protocol;
if(cljs.core.truth_(and__4514__auto__)){
var and__4514__auto____$1 = tag;
if(cljs.core.truth_(and__4514__auto____$1)){
var or__4526__auto__ = (function (){var and__4514__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4514__auto____$2)){
var and__4514__auto____$3 = protocol;
if(cljs.core.truth_(and__4514__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__4514__auto____$3;
}
} else {
return and__4514__auto____$2;
}
})();
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
var and__4514__auto____$2 = (function (){var or__4526__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4526__auto____$1)){
return or__4526__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4514__auto____$2)){
var or__4526__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4526__auto____$1){
return or__4526__auto____$1;
} else {
var and__4514__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__4514__auto____$3){
var and__4514__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null], null), null).call(null,tag));
if(and__4514__auto____$4){
var temp__4425__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4514__auto____$4;
}
} else {
return and__4514__auto____$3;
}
}
} else {
return and__4514__auto____$2;
}
}
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4526__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__4526__auto__){
return or__4526__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__14045 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4514__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4514__auto__)){
return (arity > mfa);
} else {
return and__4514__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env){
return (function (p1__14040_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14040_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env){
return (function (p1__14041_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14041_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14043,map__14043__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14045,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14045,(1),null);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14046 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_14046,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14047 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_14047,args)),(((mfa_14047 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_14047,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4526__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
var or__4526__auto____$1 = js_QMARK_;
if(or__4526__auto____$1){
return or__4526__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__4514__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var);
} else {
return and__4514__auto__;
}
})())){
var fprop_14048 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_14048," ? ",f__$1,fprop_14048,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__14049){
var map__14050 = p__14049;
var map__14050__$1 = ((((!((map__14050 == null)))?((((map__14050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14050):map__14050);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14050__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__14052){
var map__14053 = p__14052;
var map__14053__$1 = ((((!((map__14053 == null)))?((((map__14053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14053):map__14053);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14053__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14053__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14053__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__14059_14063 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__14060_14064 = null;
var count__14061_14065 = (0);
var i__14062_14066 = (0);
while(true){
if((i__14062_14066 < count__14061_14065)){
var lib_14067 = chunk__14060_14064.cljs$core$IIndexed$_nth$arity$2(null,i__14062_14066);
if(cljs.core.truth_((function (){var or__4526__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14067),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14067),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4526__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14067),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14067),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14067),"');"], 0));

}
}

var G__14068 = seq__14059_14063;
var G__14069 = chunk__14060_14064;
var G__14070 = count__14061_14065;
var G__14071 = (i__14062_14066 + (1));
seq__14059_14063 = G__14068;
chunk__14060_14064 = G__14069;
count__14061_14065 = G__14070;
i__14062_14066 = G__14071;
continue;
} else {
var temp__4425__auto___14072 = cljs.core.seq(seq__14059_14063);
if(temp__4425__auto___14072){
var seq__14059_14073__$1 = temp__4425__auto___14072;
if(cljs.core.chunked_seq_QMARK_(seq__14059_14073__$1)){
var c__5310__auto___14074 = cljs.core.chunk_first(seq__14059_14073__$1);
var G__14075 = cljs.core.chunk_rest(seq__14059_14073__$1);
var G__14076 = c__5310__auto___14074;
var G__14077 = cljs.core.count(c__5310__auto___14074);
var G__14078 = (0);
seq__14059_14063 = G__14075;
chunk__14060_14064 = G__14076;
count__14061_14065 = G__14077;
i__14062_14066 = G__14078;
continue;
} else {
var lib_14079 = cljs.core.first(seq__14059_14073__$1);
if(cljs.core.truth_((function (){var or__4526__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14079),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14079),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4526__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14079),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14079),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14079),"');"], 0));

}
}

var G__14080 = cljs.core.next(seq__14059_14073__$1);
var G__14081 = null;
var G__14082 = (0);
var G__14083 = (0);
seq__14059_14063 = G__14080;
chunk__14060_14064 = G__14081;
count__14061_14065 = G__14082;
i__14062_14066 = G__14083;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__14084){
var map__14085 = p__14084;
var map__14085__$1 = ((((!((map__14085 == null)))?((((map__14085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14085):map__14085);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$env);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__14087){
var map__14088 = p__14087;
var map__14088__$1 = ((((!((map__14088 == null)))?((((map__14088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14088):map__14088);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14088__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14088__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14088__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14088__$1,cljs.core.cst$kw$body);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__14090_14100 = cljs.core.seq(fields__$1);
var chunk__14091_14101 = null;
var count__14092_14102 = (0);
var i__14093_14103 = (0);
while(true){
if((i__14093_14103 < count__14092_14102)){
var fld_14104 = chunk__14091_14101.cljs$core$IIndexed$_nth$arity$2(null,i__14093_14103);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14104," = ",fld_14104,";"], 0));

var G__14105 = seq__14090_14100;
var G__14106 = chunk__14091_14101;
var G__14107 = count__14092_14102;
var G__14108 = (i__14093_14103 + (1));
seq__14090_14100 = G__14105;
chunk__14091_14101 = G__14106;
count__14092_14102 = G__14107;
i__14093_14103 = G__14108;
continue;
} else {
var temp__4425__auto___14109 = cljs.core.seq(seq__14090_14100);
if(temp__4425__auto___14109){
var seq__14090_14110__$1 = temp__4425__auto___14109;
if(cljs.core.chunked_seq_QMARK_(seq__14090_14110__$1)){
var c__5310__auto___14111 = cljs.core.chunk_first(seq__14090_14110__$1);
var G__14112 = cljs.core.chunk_rest(seq__14090_14110__$1);
var G__14113 = c__5310__auto___14111;
var G__14114 = cljs.core.count(c__5310__auto___14111);
var G__14115 = (0);
seq__14090_14100 = G__14112;
chunk__14091_14101 = G__14113;
count__14092_14102 = G__14114;
i__14093_14103 = G__14115;
continue;
} else {
var fld_14116 = cljs.core.first(seq__14090_14110__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14116," = ",fld_14116,";"], 0));

var G__14117 = cljs.core.next(seq__14090_14110__$1);
var G__14118 = null;
var G__14119 = (0);
var G__14120 = (0);
seq__14090_14100 = G__14117;
chunk__14091_14101 = G__14118;
count__14092_14102 = G__14119;
i__14093_14103 = G__14120;
continue;
}
} else {
}
}
break;
}

var seq__14094_14121 = cljs.core.seq(pmasks);
var chunk__14095_14122 = null;
var count__14096_14123 = (0);
var i__14097_14124 = (0);
while(true){
if((i__14097_14124 < count__14096_14123)){
var vec__14098_14125 = chunk__14095_14122.cljs$core$IIndexed$_nth$arity$2(null,i__14097_14124);
var pno_14126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14098_14125,(0),null);
var pmask_14127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14098_14125,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14126,"$ = ",pmask_14127,";"], 0));

var G__14128 = seq__14094_14121;
var G__14129 = chunk__14095_14122;
var G__14130 = count__14096_14123;
var G__14131 = (i__14097_14124 + (1));
seq__14094_14121 = G__14128;
chunk__14095_14122 = G__14129;
count__14096_14123 = G__14130;
i__14097_14124 = G__14131;
continue;
} else {
var temp__4425__auto___14132 = cljs.core.seq(seq__14094_14121);
if(temp__4425__auto___14132){
var seq__14094_14133__$1 = temp__4425__auto___14132;
if(cljs.core.chunked_seq_QMARK_(seq__14094_14133__$1)){
var c__5310__auto___14134 = cljs.core.chunk_first(seq__14094_14133__$1);
var G__14135 = cljs.core.chunk_rest(seq__14094_14133__$1);
var G__14136 = c__5310__auto___14134;
var G__14137 = cljs.core.count(c__5310__auto___14134);
var G__14138 = (0);
seq__14094_14121 = G__14135;
chunk__14095_14122 = G__14136;
count__14096_14123 = G__14137;
i__14097_14124 = G__14138;
continue;
} else {
var vec__14099_14139 = cljs.core.first(seq__14094_14133__$1);
var pno_14140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14099_14139,(0),null);
var pmask_14141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14099_14139,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14140,"$ = ",pmask_14141,";"], 0));

var G__14142 = cljs.core.next(seq__14094_14133__$1);
var G__14143 = null;
var G__14144 = (0);
var G__14145 = (0);
seq__14094_14121 = G__14142;
chunk__14095_14122 = G__14143;
count__14096_14123 = G__14144;
i__14097_14124 = G__14145;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__14146){
var map__14147 = p__14146;
var map__14147__$1 = ((((!((map__14147 == null)))?((((map__14147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14147):map__14147);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14147__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14147__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14147__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14147__$1,cljs.core.cst$kw$body);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__14149_14163 = cljs.core.seq(fields__$1);
var chunk__14150_14164 = null;
var count__14151_14165 = (0);
var i__14152_14166 = (0);
while(true){
if((i__14152_14166 < count__14151_14165)){
var fld_14167 = chunk__14150_14164.cljs$core$IIndexed$_nth$arity$2(null,i__14152_14166);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_14167], 0));

var G__14168 = seq__14149_14163;
var G__14169 = chunk__14150_14164;
var G__14170 = count__14151_14165;
var G__14171 = (i__14152_14166 + (1));
seq__14149_14163 = G__14168;
chunk__14150_14164 = G__14169;
count__14151_14165 = G__14170;
i__14152_14166 = G__14171;
continue;
} else {
var temp__4425__auto___14172 = cljs.core.seq(seq__14149_14163);
if(temp__4425__auto___14172){
var seq__14149_14173__$1 = temp__4425__auto___14172;
if(cljs.core.chunked_seq_QMARK_(seq__14149_14173__$1)){
var c__5310__auto___14174 = cljs.core.chunk_first(seq__14149_14173__$1);
var G__14175 = cljs.core.chunk_rest(seq__14149_14173__$1);
var G__14176 = c__5310__auto___14174;
var G__14177 = cljs.core.count(c__5310__auto___14174);
var G__14178 = (0);
seq__14149_14163 = G__14175;
chunk__14150_14164 = G__14176;
count__14151_14165 = G__14177;
i__14152_14166 = G__14178;
continue;
} else {
var fld_14179 = cljs.core.first(seq__14149_14173__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_14179], 0));

var G__14180 = cljs.core.next(seq__14149_14173__$1);
var G__14181 = null;
var G__14182 = (0);
var G__14183 = (0);
seq__14149_14163 = G__14180;
chunk__14150_14164 = G__14181;
count__14151_14165 = G__14182;
i__14152_14166 = G__14183;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __meta "], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __extmap"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {number|null} __hash"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__14153_14184 = cljs.core.seq(fields__$1);
var chunk__14154_14185 = null;
var count__14155_14186 = (0);
var i__14156_14187 = (0);
while(true){
if((i__14156_14187 < count__14155_14186)){
var fld_14188 = chunk__14154_14185.cljs$core$IIndexed$_nth$arity$2(null,i__14156_14187);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14188," = ",fld_14188,";"], 0));

var G__14189 = seq__14153_14184;
var G__14190 = chunk__14154_14185;
var G__14191 = count__14155_14186;
var G__14192 = (i__14156_14187 + (1));
seq__14153_14184 = G__14189;
chunk__14154_14185 = G__14190;
count__14155_14186 = G__14191;
i__14156_14187 = G__14192;
continue;
} else {
var temp__4425__auto___14193 = cljs.core.seq(seq__14153_14184);
if(temp__4425__auto___14193){
var seq__14153_14194__$1 = temp__4425__auto___14193;
if(cljs.core.chunked_seq_QMARK_(seq__14153_14194__$1)){
var c__5310__auto___14195 = cljs.core.chunk_first(seq__14153_14194__$1);
var G__14196 = cljs.core.chunk_rest(seq__14153_14194__$1);
var G__14197 = c__5310__auto___14195;
var G__14198 = cljs.core.count(c__5310__auto___14195);
var G__14199 = (0);
seq__14153_14184 = G__14196;
chunk__14154_14185 = G__14197;
count__14155_14186 = G__14198;
i__14156_14187 = G__14199;
continue;
} else {
var fld_14200 = cljs.core.first(seq__14153_14194__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_14200," = ",fld_14200,";"], 0));

var G__14201 = cljs.core.next(seq__14153_14194__$1);
var G__14202 = null;
var G__14203 = (0);
var G__14204 = (0);
seq__14153_14184 = G__14201;
chunk__14154_14185 = G__14202;
count__14155_14186 = G__14203;
i__14156_14187 = G__14204;
continue;
}
} else {
}
}
break;
}

var seq__14157_14205 = cljs.core.seq(pmasks);
var chunk__14158_14206 = null;
var count__14159_14207 = (0);
var i__14160_14208 = (0);
while(true){
if((i__14160_14208 < count__14159_14207)){
var vec__14161_14209 = chunk__14158_14206.cljs$core$IIndexed$_nth$arity$2(null,i__14160_14208);
var pno_14210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161_14209,(0),null);
var pmask_14211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161_14209,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14210,"$ = ",pmask_14211,";"], 0));

var G__14212 = seq__14157_14205;
var G__14213 = chunk__14158_14206;
var G__14214 = count__14159_14207;
var G__14215 = (i__14160_14208 + (1));
seq__14157_14205 = G__14212;
chunk__14158_14206 = G__14213;
count__14159_14207 = G__14214;
i__14160_14208 = G__14215;
continue;
} else {
var temp__4425__auto___14216 = cljs.core.seq(seq__14157_14205);
if(temp__4425__auto___14216){
var seq__14157_14217__$1 = temp__4425__auto___14216;
if(cljs.core.chunked_seq_QMARK_(seq__14157_14217__$1)){
var c__5310__auto___14218 = cljs.core.chunk_first(seq__14157_14217__$1);
var G__14219 = cljs.core.chunk_rest(seq__14157_14217__$1);
var G__14220 = c__5310__auto___14218;
var G__14221 = cljs.core.count(c__5310__auto___14218);
var G__14222 = (0);
seq__14157_14205 = G__14219;
chunk__14158_14206 = G__14220;
count__14159_14207 = G__14221;
i__14160_14208 = G__14222;
continue;
} else {
var vec__14162_14223 = cljs.core.first(seq__14157_14217__$1);
var pno_14224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162_14223,(0),null);
var pmask_14225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14162_14223,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_14224,"$ = ",pmask_14225,";"], 0));

var G__14226 = cljs.core.next(seq__14157_14217__$1);
var G__14227 = null;
var G__14228 = (0);
var G__14229 = (0);
seq__14157_14205 = G__14226;
chunk__14158_14206 = G__14227;
count__14159_14207 = G__14228;
i__14160_14208 = G__14229;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__14230){
var map__14231 = p__14230;
var map__14231__$1 = ((((!((map__14231 == null)))?((((map__14231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14231):map__14231);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14231__$1,cljs.core.cst$kw$env);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__14233){
var map__14234 = p__14233;
var map__14234__$1 = ((((!((map__14234 == null)))?((((map__14234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14234):map__14234);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14234__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14234__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14234__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14234__$1,cljs.core.cst$kw$args);
var env__6861__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6861__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__14244 = cljs.core.seq(table);
var chunk__14245 = null;
var count__14246 = (0);
var i__14247 = (0);
while(true){
if((i__14247 < count__14246)){
var vec__14248 = chunk__14245.cljs$core$IIndexed$_nth$arity$2(null,i__14247);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14248,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14248,(1),null);
var ns_14250 = cljs.core.namespace(sym);
var name_14251 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__14252 = seq__14244;
var G__14253 = chunk__14245;
var G__14254 = count__14246;
var G__14255 = (i__14247 + (1));
seq__14244 = G__14252;
chunk__14245 = G__14253;
count__14246 = G__14254;
i__14247 = G__14255;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14244);
if(temp__4425__auto__){
var seq__14244__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14244__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__14244__$1);
var G__14256 = cljs.core.chunk_rest(seq__14244__$1);
var G__14257 = c__5310__auto__;
var G__14258 = cljs.core.count(c__5310__auto__);
var G__14259 = (0);
seq__14244 = G__14256;
chunk__14245 = G__14257;
count__14246 = G__14258;
i__14247 = G__14259;
continue;
} else {
var vec__14249 = cljs.core.first(seq__14244__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(1),null);
var ns_14260 = cljs.core.namespace(sym);
var name_14261 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__14262 = cljs.core.next(seq__14244__$1);
var G__14263 = null;
var G__14264 = (0);
var G__14265 = (0);
seq__14244 = G__14262;
chunk__14245 = G__14263;
count__14246 = G__14264;
i__14247 = G__14265;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map