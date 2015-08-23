// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__11512){
var vec__11513 = p__11512;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11513,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__11515 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4425__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__11518 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11518,(4),null);
var vec__11519 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11519,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4526__auto__ = source;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4526__auto__ = line;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4526__auto__ = col;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4526__auto__ = name;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 * update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__11522 = segmap;
var map__11522__$1 = ((((!((map__11522 == null)))?((((map__11522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11522):map__11522);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11522__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11522,map__11522__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11522,map__11522__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11522,map__11522__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__11522,map__11522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11522,map__11522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__11522,map__11522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args11524 = [];
var len__5565__auto___11528 = arguments.length;
var i__5566__auto___11529 = (0);
while(true){
if((i__5566__auto___11529 < len__5565__auto___11528)){
args11524.push((arguments[i__5566__auto___11529]));

var G__11530 = (i__5566__auto___11529 + (1));
i__5566__auto___11529 = G__11530;
continue;
} else {
}
break;
}

var G__11526 = args11524.length;
switch (G__11526) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11524.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__11527 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__11532 = cljs.core.next(segs__$1);
var G__11533 = nrelseg;
var G__11534 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__11532;
relseg__$1 = G__11533;
result__$1 = G__11534;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11527,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11527,(1),null);
var G__11535 = (gline + (1));
var G__11536 = cljs.core.next(lines__$1);
var G__11537 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__11538 = result__$1;
gline = G__11535;
lines__$1 = G__11536;
relseg = G__11537;
result = G__11538;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 * segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__11542 = segmap;
var map__11542__$1 = ((((!((map__11542 == null)))?((((map__11542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11542):map__11542);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11542__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11542__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11542__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11542__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11542__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11542,map__11542__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__11542,map__11542__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__11539_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__11539_SHARP_,d__$1);
});})(map__11542,map__11542__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__11542,map__11542__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args11544 = [];
var len__5565__auto___11548 = arguments.length;
var i__5566__auto___11549 = (0);
while(true){
if((i__5566__auto___11549 < len__5565__auto___11548)){
args11544.push((arguments[i__5566__auto___11549]));

var G__11550 = (i__5566__auto___11549 + (1));
i__5566__auto___11549 = G__11550;
continue;
} else {
}
break;
}

var G__11546 = args11544.length;
switch (G__11546) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11544.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__11547 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__11552 = cljs.core.next(segs__$1);
var G__11553 = nrelseg;
var G__11554 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__11552;
relseg__$1 = G__11553;
result__$1 = G__11554;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(1),null);
var G__11555 = (gline + (1));
var G__11556 = cljs.core.next(lines__$1);
var G__11557 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__11558 = result__$1;
gline = G__11555;
lines__$1 = G__11556;
relseg = G__11557;
result = G__11558;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__11566 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11566) : cljs.core.atom.call(null,G__11566));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__11567){
var vec__11568 = p__11567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__11569){
var vec__11570 = p__11569;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11570,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11570,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11570,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11570,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11570,(4),null);
var seg = vec__11570;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__11570,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11571){
var vec__11572 = p__11571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4526__auto__ = name;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11570,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__11631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11631) : cljs.core.atom.call(null,G__11631));
})();
var names__GT_idx = (function (){var G__11632 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11632) : cljs.core.atom.call(null,G__11632));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4526__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__11633 = cljs.core.seq(infos);
var chunk__11634 = null;
var count__11635 = (0);
var i__11636 = (0);
while(true){
if((i__11636 < count__11635)){
var info = chunk__11634.cljs$core$IIndexed$_nth$arity$2(null,i__11636);
var segv_11686 = info__GT_segv(info,source_idx,line,col);
var gline_11687 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_11688 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_11687 > (lc_11688 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11633,chunk__11634,count__11635,i__11636,segv_11686,gline_11687,lc_11688,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_11687 - (lc_11688 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11686], null));
});})(seq__11633,chunk__11634,count__11635,i__11636,segv_11686,gline_11687,lc_11688,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11633,chunk__11634,count__11635,i__11636,segv_11686,gline_11687,lc_11688,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11687], null),cljs.core.conj,segv_11686);
});})(seq__11633,chunk__11634,count__11635,i__11636,segv_11686,gline_11687,lc_11688,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11689 = seq__11633;
var G__11690 = chunk__11634;
var G__11691 = count__11635;
var G__11692 = (i__11636 + (1));
seq__11633 = G__11689;
chunk__11634 = G__11690;
count__11635 = G__11691;
i__11636 = G__11692;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11633);
if(temp__4425__auto__){
var seq__11633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11633__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__11633__$1);
var G__11693 = cljs.core.chunk_rest(seq__11633__$1);
var G__11694 = c__5310__auto__;
var G__11695 = cljs.core.count(c__5310__auto__);
var G__11696 = (0);
seq__11633 = G__11693;
chunk__11634 = G__11694;
count__11635 = G__11695;
i__11636 = G__11696;
continue;
} else {
var info = cljs.core.first(seq__11633__$1);
var segv_11697 = info__GT_segv(info,source_idx,line,col);
var gline_11698 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_11699 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_11698 > (lc_11699 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11633,chunk__11634,count__11635,i__11636,segv_11697,gline_11698,lc_11699,info,seq__11633__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_11698 - (lc_11699 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11697], null));
});})(seq__11633,chunk__11634,count__11635,i__11636,segv_11697,gline_11698,lc_11699,info,seq__11633__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__11633,chunk__11634,count__11635,i__11636,segv_11697,gline_11698,lc_11699,info,seq__11633__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11698], null),cljs.core.conj,segv_11697);
});})(seq__11633,chunk__11634,count__11635,i__11636,segv_11697,gline_11698,lc_11699,info,seq__11633__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11700 = cljs.core.next(seq__11633__$1);
var G__11701 = null;
var G__11702 = (0);
var G__11703 = (0);
seq__11633 = G__11700;
chunk__11634 = G__11701;
count__11635 = G__11702;
i__11636 = G__11703;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__11637_11704 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11638_11705 = null;
var count__11639_11706 = (0);
var i__11640_11707 = (0);
while(true){
if((i__11640_11707 < count__11639_11706)){
var vec__11641_11708 = chunk__11638_11705.cljs$core$IIndexed$_nth$arity$2(null,i__11640_11707);
var source_idx_11709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11641_11708,(0),null);
var vec__11642_11710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11641_11708,(1),null);
var __11711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11642_11710,(0),null);
var lines_11712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11642_11710,(1),null);
var seq__11643_11713 = cljs.core.seq(lines_11712__$1);
var chunk__11644_11714 = null;
var count__11645_11715 = (0);
var i__11646_11716 = (0);
while(true){
if((i__11646_11716 < count__11645_11715)){
var vec__11647_11717 = chunk__11644_11714.cljs$core$IIndexed$_nth$arity$2(null,i__11646_11716);
var line_11718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11647_11717,(0),null);
var cols_11719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11647_11717,(1),null);
var seq__11648_11720 = cljs.core.seq(cols_11719);
var chunk__11649_11721 = null;
var count__11650_11722 = (0);
var i__11651_11723 = (0);
while(true){
if((i__11651_11723 < count__11650_11722)){
var vec__11652_11724 = chunk__11649_11721.cljs$core$IIndexed$_nth$arity$2(null,i__11651_11723);
var col_11725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11652_11724,(0),null);
var infos_11726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11652_11724,(1),null);
encode_cols(infos_11726,source_idx_11709,line_11718,col_11725);

var G__11727 = seq__11648_11720;
var G__11728 = chunk__11649_11721;
var G__11729 = count__11650_11722;
var G__11730 = (i__11651_11723 + (1));
seq__11648_11720 = G__11727;
chunk__11649_11721 = G__11728;
count__11650_11722 = G__11729;
i__11651_11723 = G__11730;
continue;
} else {
var temp__4425__auto___11731 = cljs.core.seq(seq__11648_11720);
if(temp__4425__auto___11731){
var seq__11648_11732__$1 = temp__4425__auto___11731;
if(cljs.core.chunked_seq_QMARK_(seq__11648_11732__$1)){
var c__5310__auto___11733 = cljs.core.chunk_first(seq__11648_11732__$1);
var G__11734 = cljs.core.chunk_rest(seq__11648_11732__$1);
var G__11735 = c__5310__auto___11733;
var G__11736 = cljs.core.count(c__5310__auto___11733);
var G__11737 = (0);
seq__11648_11720 = G__11734;
chunk__11649_11721 = G__11735;
count__11650_11722 = G__11736;
i__11651_11723 = G__11737;
continue;
} else {
var vec__11653_11738 = cljs.core.first(seq__11648_11732__$1);
var col_11739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11653_11738,(0),null);
var infos_11740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11653_11738,(1),null);
encode_cols(infos_11740,source_idx_11709,line_11718,col_11739);

var G__11741 = cljs.core.next(seq__11648_11732__$1);
var G__11742 = null;
var G__11743 = (0);
var G__11744 = (0);
seq__11648_11720 = G__11741;
chunk__11649_11721 = G__11742;
count__11650_11722 = G__11743;
i__11651_11723 = G__11744;
continue;
}
} else {
}
}
break;
}

var G__11745 = seq__11643_11713;
var G__11746 = chunk__11644_11714;
var G__11747 = count__11645_11715;
var G__11748 = (i__11646_11716 + (1));
seq__11643_11713 = G__11745;
chunk__11644_11714 = G__11746;
count__11645_11715 = G__11747;
i__11646_11716 = G__11748;
continue;
} else {
var temp__4425__auto___11749 = cljs.core.seq(seq__11643_11713);
if(temp__4425__auto___11749){
var seq__11643_11750__$1 = temp__4425__auto___11749;
if(cljs.core.chunked_seq_QMARK_(seq__11643_11750__$1)){
var c__5310__auto___11751 = cljs.core.chunk_first(seq__11643_11750__$1);
var G__11752 = cljs.core.chunk_rest(seq__11643_11750__$1);
var G__11753 = c__5310__auto___11751;
var G__11754 = cljs.core.count(c__5310__auto___11751);
var G__11755 = (0);
seq__11643_11713 = G__11752;
chunk__11644_11714 = G__11753;
count__11645_11715 = G__11754;
i__11646_11716 = G__11755;
continue;
} else {
var vec__11654_11756 = cljs.core.first(seq__11643_11750__$1);
var line_11757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11654_11756,(0),null);
var cols_11758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11654_11756,(1),null);
var seq__11655_11759 = cljs.core.seq(cols_11758);
var chunk__11656_11760 = null;
var count__11657_11761 = (0);
var i__11658_11762 = (0);
while(true){
if((i__11658_11762 < count__11657_11761)){
var vec__11659_11763 = chunk__11656_11760.cljs$core$IIndexed$_nth$arity$2(null,i__11658_11762);
var col_11764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11659_11763,(0),null);
var infos_11765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11659_11763,(1),null);
encode_cols(infos_11765,source_idx_11709,line_11757,col_11764);

var G__11766 = seq__11655_11759;
var G__11767 = chunk__11656_11760;
var G__11768 = count__11657_11761;
var G__11769 = (i__11658_11762 + (1));
seq__11655_11759 = G__11766;
chunk__11656_11760 = G__11767;
count__11657_11761 = G__11768;
i__11658_11762 = G__11769;
continue;
} else {
var temp__4425__auto___11770__$1 = cljs.core.seq(seq__11655_11759);
if(temp__4425__auto___11770__$1){
var seq__11655_11771__$1 = temp__4425__auto___11770__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11655_11771__$1)){
var c__5310__auto___11772 = cljs.core.chunk_first(seq__11655_11771__$1);
var G__11773 = cljs.core.chunk_rest(seq__11655_11771__$1);
var G__11774 = c__5310__auto___11772;
var G__11775 = cljs.core.count(c__5310__auto___11772);
var G__11776 = (0);
seq__11655_11759 = G__11773;
chunk__11656_11760 = G__11774;
count__11657_11761 = G__11775;
i__11658_11762 = G__11776;
continue;
} else {
var vec__11660_11777 = cljs.core.first(seq__11655_11771__$1);
var col_11778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11660_11777,(0),null);
var infos_11779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11660_11777,(1),null);
encode_cols(infos_11779,source_idx_11709,line_11757,col_11778);

var G__11780 = cljs.core.next(seq__11655_11771__$1);
var G__11781 = null;
var G__11782 = (0);
var G__11783 = (0);
seq__11655_11759 = G__11780;
chunk__11656_11760 = G__11781;
count__11657_11761 = G__11782;
i__11658_11762 = G__11783;
continue;
}
} else {
}
}
break;
}

var G__11784 = cljs.core.next(seq__11643_11750__$1);
var G__11785 = null;
var G__11786 = (0);
var G__11787 = (0);
seq__11643_11713 = G__11784;
chunk__11644_11714 = G__11785;
count__11645_11715 = G__11786;
i__11646_11716 = G__11787;
continue;
}
} else {
}
}
break;
}

var G__11788 = seq__11637_11704;
var G__11789 = chunk__11638_11705;
var G__11790 = count__11639_11706;
var G__11791 = (i__11640_11707 + (1));
seq__11637_11704 = G__11788;
chunk__11638_11705 = G__11789;
count__11639_11706 = G__11790;
i__11640_11707 = G__11791;
continue;
} else {
var temp__4425__auto___11792 = cljs.core.seq(seq__11637_11704);
if(temp__4425__auto___11792){
var seq__11637_11793__$1 = temp__4425__auto___11792;
if(cljs.core.chunked_seq_QMARK_(seq__11637_11793__$1)){
var c__5310__auto___11794 = cljs.core.chunk_first(seq__11637_11793__$1);
var G__11795 = cljs.core.chunk_rest(seq__11637_11793__$1);
var G__11796 = c__5310__auto___11794;
var G__11797 = cljs.core.count(c__5310__auto___11794);
var G__11798 = (0);
seq__11637_11704 = G__11795;
chunk__11638_11705 = G__11796;
count__11639_11706 = G__11797;
i__11640_11707 = G__11798;
continue;
} else {
var vec__11661_11799 = cljs.core.first(seq__11637_11793__$1);
var source_idx_11800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11661_11799,(0),null);
var vec__11662_11801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11661_11799,(1),null);
var __11802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11662_11801,(0),null);
var lines_11803__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11662_11801,(1),null);
var seq__11663_11804 = cljs.core.seq(lines_11803__$1);
var chunk__11664_11805 = null;
var count__11665_11806 = (0);
var i__11666_11807 = (0);
while(true){
if((i__11666_11807 < count__11665_11806)){
var vec__11667_11808 = chunk__11664_11805.cljs$core$IIndexed$_nth$arity$2(null,i__11666_11807);
var line_11809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11667_11808,(0),null);
var cols_11810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11667_11808,(1),null);
var seq__11668_11811 = cljs.core.seq(cols_11810);
var chunk__11669_11812 = null;
var count__11670_11813 = (0);
var i__11671_11814 = (0);
while(true){
if((i__11671_11814 < count__11670_11813)){
var vec__11672_11815 = chunk__11669_11812.cljs$core$IIndexed$_nth$arity$2(null,i__11671_11814);
var col_11816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11672_11815,(0),null);
var infos_11817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11672_11815,(1),null);
encode_cols(infos_11817,source_idx_11800,line_11809,col_11816);

var G__11818 = seq__11668_11811;
var G__11819 = chunk__11669_11812;
var G__11820 = count__11670_11813;
var G__11821 = (i__11671_11814 + (1));
seq__11668_11811 = G__11818;
chunk__11669_11812 = G__11819;
count__11670_11813 = G__11820;
i__11671_11814 = G__11821;
continue;
} else {
var temp__4425__auto___11822__$1 = cljs.core.seq(seq__11668_11811);
if(temp__4425__auto___11822__$1){
var seq__11668_11823__$1 = temp__4425__auto___11822__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11668_11823__$1)){
var c__5310__auto___11824 = cljs.core.chunk_first(seq__11668_11823__$1);
var G__11825 = cljs.core.chunk_rest(seq__11668_11823__$1);
var G__11826 = c__5310__auto___11824;
var G__11827 = cljs.core.count(c__5310__auto___11824);
var G__11828 = (0);
seq__11668_11811 = G__11825;
chunk__11669_11812 = G__11826;
count__11670_11813 = G__11827;
i__11671_11814 = G__11828;
continue;
} else {
var vec__11673_11829 = cljs.core.first(seq__11668_11823__$1);
var col_11830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11673_11829,(0),null);
var infos_11831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11673_11829,(1),null);
encode_cols(infos_11831,source_idx_11800,line_11809,col_11830);

var G__11832 = cljs.core.next(seq__11668_11823__$1);
var G__11833 = null;
var G__11834 = (0);
var G__11835 = (0);
seq__11668_11811 = G__11832;
chunk__11669_11812 = G__11833;
count__11670_11813 = G__11834;
i__11671_11814 = G__11835;
continue;
}
} else {
}
}
break;
}

var G__11836 = seq__11663_11804;
var G__11837 = chunk__11664_11805;
var G__11838 = count__11665_11806;
var G__11839 = (i__11666_11807 + (1));
seq__11663_11804 = G__11836;
chunk__11664_11805 = G__11837;
count__11665_11806 = G__11838;
i__11666_11807 = G__11839;
continue;
} else {
var temp__4425__auto___11840__$1 = cljs.core.seq(seq__11663_11804);
if(temp__4425__auto___11840__$1){
var seq__11663_11841__$1 = temp__4425__auto___11840__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11663_11841__$1)){
var c__5310__auto___11842 = cljs.core.chunk_first(seq__11663_11841__$1);
var G__11843 = cljs.core.chunk_rest(seq__11663_11841__$1);
var G__11844 = c__5310__auto___11842;
var G__11845 = cljs.core.count(c__5310__auto___11842);
var G__11846 = (0);
seq__11663_11804 = G__11843;
chunk__11664_11805 = G__11844;
count__11665_11806 = G__11845;
i__11666_11807 = G__11846;
continue;
} else {
var vec__11674_11847 = cljs.core.first(seq__11663_11841__$1);
var line_11848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11674_11847,(0),null);
var cols_11849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11674_11847,(1),null);
var seq__11675_11850 = cljs.core.seq(cols_11849);
var chunk__11676_11851 = null;
var count__11677_11852 = (0);
var i__11678_11853 = (0);
while(true){
if((i__11678_11853 < count__11677_11852)){
var vec__11679_11854 = chunk__11676_11851.cljs$core$IIndexed$_nth$arity$2(null,i__11678_11853);
var col_11855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11679_11854,(0),null);
var infos_11856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11679_11854,(1),null);
encode_cols(infos_11856,source_idx_11800,line_11848,col_11855);

var G__11857 = seq__11675_11850;
var G__11858 = chunk__11676_11851;
var G__11859 = count__11677_11852;
var G__11860 = (i__11678_11853 + (1));
seq__11675_11850 = G__11857;
chunk__11676_11851 = G__11858;
count__11677_11852 = G__11859;
i__11678_11853 = G__11860;
continue;
} else {
var temp__4425__auto___11861__$2 = cljs.core.seq(seq__11675_11850);
if(temp__4425__auto___11861__$2){
var seq__11675_11862__$1 = temp__4425__auto___11861__$2;
if(cljs.core.chunked_seq_QMARK_(seq__11675_11862__$1)){
var c__5310__auto___11863 = cljs.core.chunk_first(seq__11675_11862__$1);
var G__11864 = cljs.core.chunk_rest(seq__11675_11862__$1);
var G__11865 = c__5310__auto___11863;
var G__11866 = cljs.core.count(c__5310__auto___11863);
var G__11867 = (0);
seq__11675_11850 = G__11864;
chunk__11676_11851 = G__11865;
count__11677_11852 = G__11866;
i__11678_11853 = G__11867;
continue;
} else {
var vec__11680_11868 = cljs.core.first(seq__11675_11862__$1);
var col_11869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11680_11868,(0),null);
var infos_11870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11680_11868,(1),null);
encode_cols(infos_11870,source_idx_11800,line_11848,col_11869);

var G__11871 = cljs.core.next(seq__11675_11862__$1);
var G__11872 = null;
var G__11873 = (0);
var G__11874 = (0);
seq__11675_11850 = G__11871;
chunk__11676_11851 = G__11872;
count__11677_11852 = G__11873;
i__11678_11853 = G__11874;
continue;
}
} else {
}
}
break;
}

var G__11875 = cljs.core.next(seq__11663_11841__$1);
var G__11876 = null;
var G__11877 = (0);
var G__11878 = (0);
seq__11663_11804 = G__11875;
chunk__11664_11805 = G__11876;
count__11665_11806 = G__11877;
i__11666_11807 = G__11878;
continue;
}
} else {
}
}
break;
}

var G__11879 = cljs.core.next(seq__11637_11793__$1);
var G__11880 = null;
var G__11881 = (0);
var G__11882 = (0);
seq__11637_11704 = G__11879;
chunk__11638_11705 = G__11880;
count__11639_11706 = G__11881;
i__11640_11707 = G__11882;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11681 = {"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11573_SHARP_){
return [cljs.core.str(p1__11573_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11574_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11574_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11575_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__11575_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
var G__11681__$1 = (cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__11682 = G__11681;
var G__11683_11883 = G__11682;
var G__11684_11884 = "sourcesContent";
var G__11685_11885 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__11683_11883,G__11684_11884,G__11685_11885);

return G__11682;
})():G__11681);
return G__11681__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__11891 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__11892 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11892,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11892,(1),null);
var G__11896 = cljs.core.next(col_map_seq);
var G__11897 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11892,col,infos,vec__11891,line,col_map){
return (function (v,p__11893){
var map__11894 = p__11893;
var map__11894__$1 = ((((!((map__11894 == null)))?((((map__11894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11894):map__11894);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11894__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11894__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11892,col,infos,vec__11891,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11896;
new_cols = G__11897;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11898 = cljs.core.next(line_map_seq);
var G__11899 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__11898;
new_lines = G__11899;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__11951 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11951) : cljs.core.atom.call(null,G__11951));
})();
var seq__11952_12002 = cljs.core.seq(reverse_map);
var chunk__11953_12003 = null;
var count__11954_12004 = (0);
var i__11955_12005 = (0);
while(true){
if((i__11955_12005 < count__11954_12004)){
var vec__11956_12006 = chunk__11953_12003.cljs$core$IIndexed$_nth$arity$2(null,i__11955_12005);
var line_12007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11956_12006,(0),null);
var columns_12008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11956_12006,(1),null);
var seq__11957_12009 = cljs.core.seq(columns_12008);
var chunk__11958_12010 = null;
var count__11959_12011 = (0);
var i__11960_12012 = (0);
while(true){
if((i__11960_12012 < count__11959_12011)){
var vec__11961_12013 = chunk__11958_12010.cljs$core$IIndexed$_nth$arity$2(null,i__11960_12012);
var column_12014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961_12013,(0),null);
var column_info_12015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961_12013,(1),null);
var seq__11962_12016 = cljs.core.seq(column_info_12015);
var chunk__11963_12017 = null;
var count__11964_12018 = (0);
var i__11965_12019 = (0);
while(true){
if((i__11965_12019 < count__11964_12018)){
var map__11966_12020 = chunk__11963_12017.cljs$core$IIndexed$_nth$arity$2(null,i__11965_12019);
var map__11966_12021__$1 = ((((!((map__11966_12020 == null)))?((((map__11966_12020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11966_12020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11966_12020):map__11966_12020);
var gline_12022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11966_12021__$1,cljs.core.cst$kw$gline);
var gcol_12023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11966_12021__$1,cljs.core.cst$kw$gcol);
var name_12024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11966_12021__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12022], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11962_12016,chunk__11963_12017,count__11964_12018,i__11965_12019,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11966_12020,map__11966_12021__$1,gline_12022,gcol_12023,name_12024,vec__11961_12013,column_12014,column_info_12015,vec__11956_12006,line_12007,columns_12008,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12014], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12007,cljs.core.cst$kw$col,column_12014,cljs.core.cst$kw$name,name_12024], null));
});})(seq__11962_12016,chunk__11963_12017,count__11964_12018,i__11965_12019,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11966_12020,map__11966_12021__$1,gline_12022,gcol_12023,name_12024,vec__11961_12013,column_12014,column_info_12015,vec__11956_12006,line_12007,columns_12008,inverted))
,cljs.core.sorted_map()));

var G__12025 = seq__11962_12016;
var G__12026 = chunk__11963_12017;
var G__12027 = count__11964_12018;
var G__12028 = (i__11965_12019 + (1));
seq__11962_12016 = G__12025;
chunk__11963_12017 = G__12026;
count__11964_12018 = G__12027;
i__11965_12019 = G__12028;
continue;
} else {
var temp__4425__auto___12029 = cljs.core.seq(seq__11962_12016);
if(temp__4425__auto___12029){
var seq__11962_12030__$1 = temp__4425__auto___12029;
if(cljs.core.chunked_seq_QMARK_(seq__11962_12030__$1)){
var c__5310__auto___12031 = cljs.core.chunk_first(seq__11962_12030__$1);
var G__12032 = cljs.core.chunk_rest(seq__11962_12030__$1);
var G__12033 = c__5310__auto___12031;
var G__12034 = cljs.core.count(c__5310__auto___12031);
var G__12035 = (0);
seq__11962_12016 = G__12032;
chunk__11963_12017 = G__12033;
count__11964_12018 = G__12034;
i__11965_12019 = G__12035;
continue;
} else {
var map__11968_12036 = cljs.core.first(seq__11962_12030__$1);
var map__11968_12037__$1 = ((((!((map__11968_12036 == null)))?((((map__11968_12036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11968_12036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11968_12036):map__11968_12036);
var gline_12038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11968_12037__$1,cljs.core.cst$kw$gline);
var gcol_12039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11968_12037__$1,cljs.core.cst$kw$gcol);
var name_12040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11968_12037__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12038], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11962_12016,chunk__11963_12017,count__11964_12018,i__11965_12019,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11968_12036,map__11968_12037__$1,gline_12038,gcol_12039,name_12040,seq__11962_12030__$1,temp__4425__auto___12029,vec__11961_12013,column_12014,column_info_12015,vec__11956_12006,line_12007,columns_12008,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12014], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12007,cljs.core.cst$kw$col,column_12014,cljs.core.cst$kw$name,name_12040], null));
});})(seq__11962_12016,chunk__11963_12017,count__11964_12018,i__11965_12019,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11968_12036,map__11968_12037__$1,gline_12038,gcol_12039,name_12040,seq__11962_12030__$1,temp__4425__auto___12029,vec__11961_12013,column_12014,column_info_12015,vec__11956_12006,line_12007,columns_12008,inverted))
,cljs.core.sorted_map()));

var G__12041 = cljs.core.next(seq__11962_12030__$1);
var G__12042 = null;
var G__12043 = (0);
var G__12044 = (0);
seq__11962_12016 = G__12041;
chunk__11963_12017 = G__12042;
count__11964_12018 = G__12043;
i__11965_12019 = G__12044;
continue;
}
} else {
}
}
break;
}

var G__12045 = seq__11957_12009;
var G__12046 = chunk__11958_12010;
var G__12047 = count__11959_12011;
var G__12048 = (i__11960_12012 + (1));
seq__11957_12009 = G__12045;
chunk__11958_12010 = G__12046;
count__11959_12011 = G__12047;
i__11960_12012 = G__12048;
continue;
} else {
var temp__4425__auto___12049 = cljs.core.seq(seq__11957_12009);
if(temp__4425__auto___12049){
var seq__11957_12050__$1 = temp__4425__auto___12049;
if(cljs.core.chunked_seq_QMARK_(seq__11957_12050__$1)){
var c__5310__auto___12051 = cljs.core.chunk_first(seq__11957_12050__$1);
var G__12052 = cljs.core.chunk_rest(seq__11957_12050__$1);
var G__12053 = c__5310__auto___12051;
var G__12054 = cljs.core.count(c__5310__auto___12051);
var G__12055 = (0);
seq__11957_12009 = G__12052;
chunk__11958_12010 = G__12053;
count__11959_12011 = G__12054;
i__11960_12012 = G__12055;
continue;
} else {
var vec__11970_12056 = cljs.core.first(seq__11957_12050__$1);
var column_12057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11970_12056,(0),null);
var column_info_12058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11970_12056,(1),null);
var seq__11971_12059 = cljs.core.seq(column_info_12058);
var chunk__11972_12060 = null;
var count__11973_12061 = (0);
var i__11974_12062 = (0);
while(true){
if((i__11974_12062 < count__11973_12061)){
var map__11975_12063 = chunk__11972_12060.cljs$core$IIndexed$_nth$arity$2(null,i__11974_12062);
var map__11975_12064__$1 = ((((!((map__11975_12063 == null)))?((((map__11975_12063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11975_12063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11975_12063):map__11975_12063);
var gline_12065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11975_12064__$1,cljs.core.cst$kw$gline);
var gcol_12066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11975_12064__$1,cljs.core.cst$kw$gcol);
var name_12067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11975_12064__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12065], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11971_12059,chunk__11972_12060,count__11973_12061,i__11974_12062,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11975_12063,map__11975_12064__$1,gline_12065,gcol_12066,name_12067,vec__11970_12056,column_12057,column_info_12058,seq__11957_12050__$1,temp__4425__auto___12049,vec__11956_12006,line_12007,columns_12008,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12057], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12007,cljs.core.cst$kw$col,column_12057,cljs.core.cst$kw$name,name_12067], null));
});})(seq__11971_12059,chunk__11972_12060,count__11973_12061,i__11974_12062,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11975_12063,map__11975_12064__$1,gline_12065,gcol_12066,name_12067,vec__11970_12056,column_12057,column_info_12058,seq__11957_12050__$1,temp__4425__auto___12049,vec__11956_12006,line_12007,columns_12008,inverted))
,cljs.core.sorted_map()));

var G__12068 = seq__11971_12059;
var G__12069 = chunk__11972_12060;
var G__12070 = count__11973_12061;
var G__12071 = (i__11974_12062 + (1));
seq__11971_12059 = G__12068;
chunk__11972_12060 = G__12069;
count__11973_12061 = G__12070;
i__11974_12062 = G__12071;
continue;
} else {
var temp__4425__auto___12072__$1 = cljs.core.seq(seq__11971_12059);
if(temp__4425__auto___12072__$1){
var seq__11971_12073__$1 = temp__4425__auto___12072__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11971_12073__$1)){
var c__5310__auto___12074 = cljs.core.chunk_first(seq__11971_12073__$1);
var G__12075 = cljs.core.chunk_rest(seq__11971_12073__$1);
var G__12076 = c__5310__auto___12074;
var G__12077 = cljs.core.count(c__5310__auto___12074);
var G__12078 = (0);
seq__11971_12059 = G__12075;
chunk__11972_12060 = G__12076;
count__11973_12061 = G__12077;
i__11974_12062 = G__12078;
continue;
} else {
var map__11977_12079 = cljs.core.first(seq__11971_12073__$1);
var map__11977_12080__$1 = ((((!((map__11977_12079 == null)))?((((map__11977_12079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11977_12079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11977_12079):map__11977_12079);
var gline_12081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11977_12080__$1,cljs.core.cst$kw$gline);
var gcol_12082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11977_12080__$1,cljs.core.cst$kw$gcol);
var name_12083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11977_12080__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12081], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11971_12059,chunk__11972_12060,count__11973_12061,i__11974_12062,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11977_12079,map__11977_12080__$1,gline_12081,gcol_12082,name_12083,seq__11971_12073__$1,temp__4425__auto___12072__$1,vec__11970_12056,column_12057,column_info_12058,seq__11957_12050__$1,temp__4425__auto___12049,vec__11956_12006,line_12007,columns_12008,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12057], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12007,cljs.core.cst$kw$col,column_12057,cljs.core.cst$kw$name,name_12083], null));
});})(seq__11971_12059,chunk__11972_12060,count__11973_12061,i__11974_12062,seq__11957_12009,chunk__11958_12010,count__11959_12011,i__11960_12012,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11977_12079,map__11977_12080__$1,gline_12081,gcol_12082,name_12083,seq__11971_12073__$1,temp__4425__auto___12072__$1,vec__11970_12056,column_12057,column_info_12058,seq__11957_12050__$1,temp__4425__auto___12049,vec__11956_12006,line_12007,columns_12008,inverted))
,cljs.core.sorted_map()));

var G__12084 = cljs.core.next(seq__11971_12073__$1);
var G__12085 = null;
var G__12086 = (0);
var G__12087 = (0);
seq__11971_12059 = G__12084;
chunk__11972_12060 = G__12085;
count__11973_12061 = G__12086;
i__11974_12062 = G__12087;
continue;
}
} else {
}
}
break;
}

var G__12088 = cljs.core.next(seq__11957_12050__$1);
var G__12089 = null;
var G__12090 = (0);
var G__12091 = (0);
seq__11957_12009 = G__12088;
chunk__11958_12010 = G__12089;
count__11959_12011 = G__12090;
i__11960_12012 = G__12091;
continue;
}
} else {
}
}
break;
}

var G__12092 = seq__11952_12002;
var G__12093 = chunk__11953_12003;
var G__12094 = count__11954_12004;
var G__12095 = (i__11955_12005 + (1));
seq__11952_12002 = G__12092;
chunk__11953_12003 = G__12093;
count__11954_12004 = G__12094;
i__11955_12005 = G__12095;
continue;
} else {
var temp__4425__auto___12096 = cljs.core.seq(seq__11952_12002);
if(temp__4425__auto___12096){
var seq__11952_12097__$1 = temp__4425__auto___12096;
if(cljs.core.chunked_seq_QMARK_(seq__11952_12097__$1)){
var c__5310__auto___12098 = cljs.core.chunk_first(seq__11952_12097__$1);
var G__12099 = cljs.core.chunk_rest(seq__11952_12097__$1);
var G__12100 = c__5310__auto___12098;
var G__12101 = cljs.core.count(c__5310__auto___12098);
var G__12102 = (0);
seq__11952_12002 = G__12099;
chunk__11953_12003 = G__12100;
count__11954_12004 = G__12101;
i__11955_12005 = G__12102;
continue;
} else {
var vec__11979_12103 = cljs.core.first(seq__11952_12097__$1);
var line_12104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979_12103,(0),null);
var columns_12105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979_12103,(1),null);
var seq__11980_12106 = cljs.core.seq(columns_12105);
var chunk__11981_12107 = null;
var count__11982_12108 = (0);
var i__11983_12109 = (0);
while(true){
if((i__11983_12109 < count__11982_12108)){
var vec__11984_12110 = chunk__11981_12107.cljs$core$IIndexed$_nth$arity$2(null,i__11983_12109);
var column_12111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984_12110,(0),null);
var column_info_12112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984_12110,(1),null);
var seq__11985_12113 = cljs.core.seq(column_info_12112);
var chunk__11986_12114 = null;
var count__11987_12115 = (0);
var i__11988_12116 = (0);
while(true){
if((i__11988_12116 < count__11987_12115)){
var map__11989_12117 = chunk__11986_12114.cljs$core$IIndexed$_nth$arity$2(null,i__11988_12116);
var map__11989_12118__$1 = ((((!((map__11989_12117 == null)))?((((map__11989_12117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11989_12117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11989_12117):map__11989_12117);
var gline_12119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11989_12118__$1,cljs.core.cst$kw$gline);
var gcol_12120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11989_12118__$1,cljs.core.cst$kw$gcol);
var name_12121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11989_12118__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12119], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11985_12113,chunk__11986_12114,count__11987_12115,i__11988_12116,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11989_12117,map__11989_12118__$1,gline_12119,gcol_12120,name_12121,vec__11984_12110,column_12111,column_info_12112,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12111], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12104,cljs.core.cst$kw$col,column_12111,cljs.core.cst$kw$name,name_12121], null));
});})(seq__11985_12113,chunk__11986_12114,count__11987_12115,i__11988_12116,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11989_12117,map__11989_12118__$1,gline_12119,gcol_12120,name_12121,vec__11984_12110,column_12111,column_info_12112,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted))
,cljs.core.sorted_map()));

var G__12122 = seq__11985_12113;
var G__12123 = chunk__11986_12114;
var G__12124 = count__11987_12115;
var G__12125 = (i__11988_12116 + (1));
seq__11985_12113 = G__12122;
chunk__11986_12114 = G__12123;
count__11987_12115 = G__12124;
i__11988_12116 = G__12125;
continue;
} else {
var temp__4425__auto___12126__$1 = cljs.core.seq(seq__11985_12113);
if(temp__4425__auto___12126__$1){
var seq__11985_12127__$1 = temp__4425__auto___12126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11985_12127__$1)){
var c__5310__auto___12128 = cljs.core.chunk_first(seq__11985_12127__$1);
var G__12129 = cljs.core.chunk_rest(seq__11985_12127__$1);
var G__12130 = c__5310__auto___12128;
var G__12131 = cljs.core.count(c__5310__auto___12128);
var G__12132 = (0);
seq__11985_12113 = G__12129;
chunk__11986_12114 = G__12130;
count__11987_12115 = G__12131;
i__11988_12116 = G__12132;
continue;
} else {
var map__11991_12133 = cljs.core.first(seq__11985_12127__$1);
var map__11991_12134__$1 = ((((!((map__11991_12133 == null)))?((((map__11991_12133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11991_12133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11991_12133):map__11991_12133);
var gline_12135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11991_12134__$1,cljs.core.cst$kw$gline);
var gcol_12136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11991_12134__$1,cljs.core.cst$kw$gcol);
var name_12137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11991_12134__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12135], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11985_12113,chunk__11986_12114,count__11987_12115,i__11988_12116,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11991_12133,map__11991_12134__$1,gline_12135,gcol_12136,name_12137,seq__11985_12127__$1,temp__4425__auto___12126__$1,vec__11984_12110,column_12111,column_info_12112,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12111], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12104,cljs.core.cst$kw$col,column_12111,cljs.core.cst$kw$name,name_12137], null));
});})(seq__11985_12113,chunk__11986_12114,count__11987_12115,i__11988_12116,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11991_12133,map__11991_12134__$1,gline_12135,gcol_12136,name_12137,seq__11985_12127__$1,temp__4425__auto___12126__$1,vec__11984_12110,column_12111,column_info_12112,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted))
,cljs.core.sorted_map()));

var G__12138 = cljs.core.next(seq__11985_12127__$1);
var G__12139 = null;
var G__12140 = (0);
var G__12141 = (0);
seq__11985_12113 = G__12138;
chunk__11986_12114 = G__12139;
count__11987_12115 = G__12140;
i__11988_12116 = G__12141;
continue;
}
} else {
}
}
break;
}

var G__12142 = seq__11980_12106;
var G__12143 = chunk__11981_12107;
var G__12144 = count__11982_12108;
var G__12145 = (i__11983_12109 + (1));
seq__11980_12106 = G__12142;
chunk__11981_12107 = G__12143;
count__11982_12108 = G__12144;
i__11983_12109 = G__12145;
continue;
} else {
var temp__4425__auto___12146__$1 = cljs.core.seq(seq__11980_12106);
if(temp__4425__auto___12146__$1){
var seq__11980_12147__$1 = temp__4425__auto___12146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11980_12147__$1)){
var c__5310__auto___12148 = cljs.core.chunk_first(seq__11980_12147__$1);
var G__12149 = cljs.core.chunk_rest(seq__11980_12147__$1);
var G__12150 = c__5310__auto___12148;
var G__12151 = cljs.core.count(c__5310__auto___12148);
var G__12152 = (0);
seq__11980_12106 = G__12149;
chunk__11981_12107 = G__12150;
count__11982_12108 = G__12151;
i__11983_12109 = G__12152;
continue;
} else {
var vec__11993_12153 = cljs.core.first(seq__11980_12147__$1);
var column_12154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993_12153,(0),null);
var column_info_12155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11993_12153,(1),null);
var seq__11994_12156 = cljs.core.seq(column_info_12155);
var chunk__11995_12157 = null;
var count__11996_12158 = (0);
var i__11997_12159 = (0);
while(true){
if((i__11997_12159 < count__11996_12158)){
var map__11998_12160 = chunk__11995_12157.cljs$core$IIndexed$_nth$arity$2(null,i__11997_12159);
var map__11998_12161__$1 = ((((!((map__11998_12160 == null)))?((((map__11998_12160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11998_12160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11998_12160):map__11998_12160);
var gline_12162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11998_12161__$1,cljs.core.cst$kw$gline);
var gcol_12163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11998_12161__$1,cljs.core.cst$kw$gcol);
var name_12164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11998_12161__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12162], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11994_12156,chunk__11995_12157,count__11996_12158,i__11997_12159,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11998_12160,map__11998_12161__$1,gline_12162,gcol_12163,name_12164,vec__11993_12153,column_12154,column_info_12155,seq__11980_12147__$1,temp__4425__auto___12146__$1,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12154], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12104,cljs.core.cst$kw$col,column_12154,cljs.core.cst$kw$name,name_12164], null));
});})(seq__11994_12156,chunk__11995_12157,count__11996_12158,i__11997_12159,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__11998_12160,map__11998_12161__$1,gline_12162,gcol_12163,name_12164,vec__11993_12153,column_12154,column_info_12155,seq__11980_12147__$1,temp__4425__auto___12146__$1,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted))
,cljs.core.sorted_map()));

var G__12165 = seq__11994_12156;
var G__12166 = chunk__11995_12157;
var G__12167 = count__11996_12158;
var G__12168 = (i__11997_12159 + (1));
seq__11994_12156 = G__12165;
chunk__11995_12157 = G__12166;
count__11996_12158 = G__12167;
i__11997_12159 = G__12168;
continue;
} else {
var temp__4425__auto___12169__$2 = cljs.core.seq(seq__11994_12156);
if(temp__4425__auto___12169__$2){
var seq__11994_12170__$1 = temp__4425__auto___12169__$2;
if(cljs.core.chunked_seq_QMARK_(seq__11994_12170__$1)){
var c__5310__auto___12171 = cljs.core.chunk_first(seq__11994_12170__$1);
var G__12172 = cljs.core.chunk_rest(seq__11994_12170__$1);
var G__12173 = c__5310__auto___12171;
var G__12174 = cljs.core.count(c__5310__auto___12171);
var G__12175 = (0);
seq__11994_12156 = G__12172;
chunk__11995_12157 = G__12173;
count__11996_12158 = G__12174;
i__11997_12159 = G__12175;
continue;
} else {
var map__12000_12176 = cljs.core.first(seq__11994_12170__$1);
var map__12000_12177__$1 = ((((!((map__12000_12176 == null)))?((((map__12000_12176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12000_12176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12000_12176):map__12000_12176);
var gline_12178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000_12177__$1,cljs.core.cst$kw$gline);
var gcol_12179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000_12177__$1,cljs.core.cst$kw$gcol);
var name_12180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000_12177__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12178], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11994_12156,chunk__11995_12157,count__11996_12158,i__11997_12159,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__12000_12176,map__12000_12177__$1,gline_12178,gcol_12179,name_12180,seq__11994_12170__$1,temp__4425__auto___12169__$2,vec__11993_12153,column_12154,column_info_12155,seq__11980_12147__$1,temp__4425__auto___12146__$1,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_12154], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_12104,cljs.core.cst$kw$col,column_12154,cljs.core.cst$kw$name,name_12180], null));
});})(seq__11994_12156,chunk__11995_12157,count__11996_12158,i__11997_12159,seq__11980_12106,chunk__11981_12107,count__11982_12108,i__11983_12109,seq__11952_12002,chunk__11953_12003,count__11954_12004,i__11955_12005,map__12000_12176,map__12000_12177__$1,gline_12178,gcol_12179,name_12180,seq__11994_12170__$1,temp__4425__auto___12169__$2,vec__11993_12153,column_12154,column_info_12155,seq__11980_12147__$1,temp__4425__auto___12146__$1,vec__11979_12103,line_12104,columns_12105,seq__11952_12097__$1,temp__4425__auto___12096,inverted))
,cljs.core.sorted_map()));

var G__12181 = cljs.core.next(seq__11994_12170__$1);
var G__12182 = null;
var G__12183 = (0);
var G__12184 = (0);
seq__11994_12156 = G__12181;
chunk__11995_12157 = G__12182;
count__11996_12158 = G__12183;
i__11997_12159 = G__12184;
continue;
}
} else {
}
}
break;
}

var G__12185 = cljs.core.next(seq__11980_12147__$1);
var G__12186 = null;
var G__12187 = (0);
var G__12188 = (0);
seq__11980_12106 = G__12185;
chunk__11981_12107 = G__12186;
count__11982_12108 = G__12187;
i__11983_12109 = G__12188;
continue;
}
} else {
}
}
break;
}

var G__12189 = cljs.core.next(seq__11952_12097__$1);
var G__12190 = null;
var G__12191 = (0);
var G__12192 = (0);
seq__11952_12002 = G__12189;
chunk__11953_12003 = G__12190;
count__11954_12004 = G__12191;
i__11955_12005 = G__12192;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});

//# sourceMappingURL=source_map.js.map