replgoog.provide('cljsrepl.core');
replgoog.require('replgoog.array');
replgoog.require('replgoog.object');
replgoog.require('replgoog.string.StringBuffer');
replgoog.require('replgoog.string');
cljsrepl.core._STAR_unchecked_if_STAR_ = false;
cljsrepl.core._STAR_assert_STAR_ = true;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljsrepl.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljsrepl.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljsrepl.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljsrepl.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljsrepl.core.not = (function not(x){
if(cljsrepl.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljsrepl.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[replgoog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljsrepl.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljsrepl.core._STAR_main_cli_fn_STAR_ = null;
cljsrepl.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",replgoog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljsrepl.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljsrepl.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljsrepl.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljsrepl.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__3183__delegate = function (array,i,idxs){
return cljsrepl.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__3183 = function (array,i,var_args){
var idxs = null;
if (replgoog.isDef(var_args)) {
  idxs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3183__delegate.call(this, array, i, idxs);
};
G__3183.cljs$lang$maxFixedArity = 2;
G__3183.cljs$lang$applyTo = (function (arglist__3184){
var array = cljsrepl.core.first(arglist__3184);
var i = cljsrepl.core.first(cljsrepl.core.next(arglist__3184));
var idxs = cljsrepl.core.rest(cljsrepl.core.next(arglist__3184));
return G__3183__delegate(array, i, idxs);
});
G__3183.cljs$lang$arity$variadic = G__3183__delegate;
return G__3183;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljsrepl.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljsrepl.core.alength = (function alength(array){
return array.length;
});
cljsrepl.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljsrepl.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljsrepl.core.IFn = {};
cljsrepl.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._invoke[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljsrepl.core.ICounted = {};
cljsrepl.core._count = (function _count(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._count[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._count["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.IEmptyableCollection = {};
cljsrepl.core._empty = (function _empty(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._empty[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._empty["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.ICollection = {};
cljsrepl.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._conj[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._conj["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljsrepl.core.IIndexed = {};
cljsrepl.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._nth[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._nth[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljsrepl.core.ASeq = {};
cljsrepl.core.ISeq = {};
cljsrepl.core._first = (function _first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._first[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core._rest = (function _rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._rest[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.INext = {};
cljsrepl.core._next = (function _next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._next[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.ILookup = {};
cljsrepl.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._lookup[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._lookup[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljsrepl.core.IAssociative = {};
cljsrepl.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._contains_key_QMARK_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._contains_key_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljsrepl.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._assoc[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._assoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljsrepl.core.IMap = {};
cljsrepl.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._dissoc[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._dissoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljsrepl.core.IMapEntry = {};
cljsrepl.core._key = (function _key(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._key[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core._val = (function _val(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._val[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._val["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.ISet = {};
cljsrepl.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._disjoin[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._disjoin["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljsrepl.core.IStack = {};
cljsrepl.core._peek = (function _peek(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._peek[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._peek["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core._pop = (function _pop(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._pop[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._pop["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.IVector = {};
cljsrepl.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._assoc_n[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._assoc_n["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljsrepl.core.IDeref = {};
cljsrepl.core._deref = (function _deref(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._deref[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._deref["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljsrepl.core.IDerefWithTimeout = {};
cljsrepl.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._deref_with_timeout[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._deref_with_timeout["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljsrepl.core.IMeta = {};
cljsrepl.core._meta = (function _meta(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._meta[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljsrepl.core.IWithMeta = {};
cljsrepl.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._with_meta[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._with_meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljsrepl.core.IReduce = {};
cljsrepl.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._reduce[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._reduce[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljsrepl.core.IKVReduce = {};
cljsrepl.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._kv_reduce[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._kv_reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljsrepl.core.IEquiv = {};
cljsrepl.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._equiv[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._equiv["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljsrepl.core.IHash = {};
cljsrepl.core._hash = (function _hash(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._hash[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._hash["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljsrepl.core.ISeqable = {};
cljsrepl.core._seq = (function _seq(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._seq[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljsrepl.core.ISymbol = {};
cljsrepl.core.ISequential = {};
cljsrepl.core.IList = {};
cljsrepl.core.IRecord = {};
cljsrepl.core.IReversible = {};
cljsrepl.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._rseq[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._rseq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.ISorted = {};
cljsrepl.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._sorted_seq[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._sorted_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljsrepl.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._sorted_seq_from[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._sorted_seq_from["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljsrepl.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._entry_key[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._entry_key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljsrepl.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._comparator[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._comparator["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.IPrintable = {};
cljsrepl.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._pr_seq[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._pr_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljsrepl.core.IWriter = {};
cljsrepl.core._write = (function _write(writer,s){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2061__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (cljsrepl.core._write[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._write["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljsrepl.core._flush = (function _flush(writer){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2061__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (cljsrepl.core._flush[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._flush["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljsrepl.core.IPrintWithWriter = {};
cljsrepl.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2061__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljsrepl.core._pr_writer[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._pr_writer["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljsrepl.core.IPending = {};
cljsrepl.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto__ = d;
if(and__3941__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2061__auto__ = (((d == null))?null:d);
return (function (){var or__3943__auto__ = (cljsrepl.core._realized_QMARK_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._realized_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljsrepl.core.IWatchable = {};
cljsrepl.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._notify_watches[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._notify_watches["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljsrepl.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._add_watch[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._add_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljsrepl.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2061__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljsrepl.core._remove_watch[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._remove_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljsrepl.core.IEditableCollection = {};
cljsrepl.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._as_transient[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._as_transient["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.ITransientCollection = {};
cljsrepl.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._conj_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._conj_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljsrepl.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._persistent_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._persistent_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljsrepl.core.ITransientAssociative = {};
cljsrepl.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._assoc_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._assoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljsrepl.core.ITransientMap = {};
cljsrepl.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._dissoc_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._dissoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljsrepl.core.ITransientVector = {};
cljsrepl.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._assoc_n_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._assoc_n_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljsrepl.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._pop_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._pop_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljsrepl.core.ITransientSet = {};
cljsrepl.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2061__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljsrepl.core._disjoin_BANG_[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._disjoin_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljsrepl.core.IComparable = {};
cljsrepl.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2061__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljsrepl.core._compare[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._compare["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljsrepl.core.IChunk = {};
cljsrepl.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._drop_first[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._drop_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.IChunkedSeq = {};
cljsrepl.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._chunked_first[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._chunked_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._chunked_rest[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._chunked_rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljsrepl.core.IChunkedNext = {};
cljsrepl.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2061__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljsrepl.core._chunked_next[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._chunked_next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljsrepl.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3186 = coll;
if(G__3186)
{if((function (){var or__3943__auto__ = (G__3186.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3186.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__3186.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ASeq,G__3186);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ASeq,G__3186);
}
})())
{return coll;
} else
{return cljsrepl.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljsrepl.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3188 = coll;
if(G__3188)
{if((function (){var or__3943__auto__ = (G__3188.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3188.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3188.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3188);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3188);
}
})())
{return cljsrepl.core._first.call(null,coll);
} else
{var s = cljsrepl.core.seq.call(null,coll);
if((s == null))
{return null;
} else
{return cljsrepl.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljsrepl.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__3190 = coll;
if(G__3190)
{if((function (){var or__3943__auto__ = (G__3190.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3190.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3190.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3190);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3190);
}
})())
{return cljsrepl.core._rest.call(null,coll);
} else
{var s = cljsrepl.core.seq.call(null,coll);
if(!((s == null)))
{return cljsrepl.core._rest.call(null,s);
} else
{return cljsrepl.core.List.EMPTY;
}
}
} else
{return cljsrepl.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljsrepl.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3192 = coll;
if(G__3192)
{if((function (){var or__3943__auto__ = (G__3192.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3192.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__3192.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.INext,G__3192);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.INext,G__3192);
}
})())
{return cljsrepl.core._next.call(null,coll);
} else
{return cljsrepl.core.seq.call(null,cljsrepl.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljsrepl.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto__ = (x === y);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__3193__delegate = function (x,y,more){
while(true){
if(cljsrepl.core.truth_(_EQ_.call(null,x,y)))
{if(cljsrepl.core.next.call(null,more))
{{
var G__3194 = y;
var G__3195 = cljsrepl.core.first.call(null,more);
var G__3196 = cljsrepl.core.next.call(null,more);
x = G__3194;
y = G__3195;
more = G__3196;
continue;
}
} else
{return _EQ_.call(null,y,cljsrepl.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3193 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3193__delegate.call(this, x, y, more);
};
G__3193.cljs$lang$maxFixedArity = 2;
G__3193.cljs$lang$applyTo = (function (arglist__3197){
var x = cljsrepl.core.first(arglist__3197);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3197));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3197));
return G__3193__delegate(x, y, more);
});
G__3193.cljs$lang$arity$variadic = G__3193__delegate;
return G__3193;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljsrepl.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljsrepl.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljsrepl.core.IHash["null"] = true);
(cljsrepl.core._hash["null"] = (function (o){
return 0;
}));
(cljsrepl.core.ILookup["null"] = true);
(cljsrepl.core._lookup["null"] = (function() {
var G__3198 = null;
var G__3198__2 = (function (o,k){
return null;
});
var G__3198__3 = (function (o,k,not_found){
return not_found;
});
G__3198 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__3198__2.call(this,o,k);
case 3:
return G__3198__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3198;
})()
);
(cljsrepl.core.IAssociative["null"] = true);
(cljsrepl.core._assoc["null"] = (function (_,k,v){
return cljsrepl.core.hash_map.call(null,k,v);
}));
(cljsrepl.core.INext["null"] = true);
(cljsrepl.core._next["null"] = (function (_){
return null;
}));
(cljsrepl.core.IPrintWithWriter["null"] = true);
(cljsrepl.core._pr_writer["null"] = (function (o,writer,_){
return cljsrepl.core._write.call(null,writer,"nil");
}));
(cljsrepl.core.ICollection["null"] = true);
(cljsrepl.core._conj["null"] = (function (_,o){
return cljsrepl.core.list.call(null,o);
}));
(cljsrepl.core.IReduce["null"] = true);
(cljsrepl.core._reduce["null"] = (function() {
var G__3199 = null;
var G__3199__2 = (function (_,f){
return f.call(null);
});
var G__3199__3 = (function (_,f,start){
return start;
});
G__3199 = function(_,f,start){
switch(arguments.length){
case 2:
return G__3199__2.call(this,_,f);
case 3:
return G__3199__3.call(this,_,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3199;
})()
);
(cljsrepl.core.IPrintable["null"] = true);
(cljsrepl.core._pr_seq["null"] = (function (o){
return cljsrepl.core.list.call(null,"nil");
}));
(cljsrepl.core.ISet["null"] = true);
(cljsrepl.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljsrepl.core.ICounted["null"] = true);
(cljsrepl.core._count["null"] = (function (_){
return 0;
}));
(cljsrepl.core.IStack["null"] = true);
(cljsrepl.core._peek["null"] = (function (_){
return null;
}));
(cljsrepl.core._pop["null"] = (function (_){
return null;
}));
(cljsrepl.core.ISeq["null"] = true);
(cljsrepl.core._first["null"] = (function (_){
return null;
}));
(cljsrepl.core._rest["null"] = (function (_){
return cljsrepl.core.list.call(null);
}));
(cljsrepl.core.IEquiv["null"] = true);
(cljsrepl.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljsrepl.core.IWithMeta["null"] = true);
(cljsrepl.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljsrepl.core.IMeta["null"] = true);
(cljsrepl.core._meta["null"] = (function (_){
return null;
}));
(cljsrepl.core.IIndexed["null"] = true);
(cljsrepl.core._nth["null"] = (function() {
var G__3200 = null;
var G__3200__2 = (function (_,n){
return null;
});
var G__3200__3 = (function (_,n,not_found){
return not_found;
});
G__3200 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__3200__2.call(this,_,n);
case 3:
return G__3200__3.call(this,_,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3200;
})()
);
(cljsrepl.core.IEmptyableCollection["null"] = true);
(cljsrepl.core._empty["null"] = (function (_){
return null;
}));
(cljsrepl.core.IMap["null"] = true);
(cljsrepl.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto__ = cljsrepl.core.instance_QMARK_.call(null,Date,other);
if(and__3941__auto__)
{return (o.toString() === other.toString());
} else
{return and__3941__auto__;
}
});
(cljsrepl.core.IHash["number"] = true);
(cljsrepl.core._hash["number"] = (function (o){
return o;
}));
(cljsrepl.core.IEquiv["number"] = true);
(cljsrepl.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljsrepl.core.IHash["boolean"] = true);
(cljsrepl.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljsrepl.core.IHash["_"] = true);
(cljsrepl.core._hash["_"] = (function (o){
return replgoog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljsrepl.core.inc = (function inc(x){
return (x + 1);
});
replgoog.provide('cljsrepl.core.Reduced');

/**
* @constructor
*/
cljsrepl.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljsrepl.core.Reduced.cljs$lang$type = true;
cljsrepl.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Reduced");
});
cljsrepl.core.Reduced.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Reduced");
});
cljsrepl.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
return self__.val;
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljsrepl.core.reduced = (function reduced(x){
return (new cljsrepl.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljsrepl.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljsrepl.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljsrepl.core._count.call(null,cicoll);
if((cnt === 0))
{return f.call(null);
} else
{var val = cljsrepl.core._nth.call(null,cicoll,0);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,cljsrepl.core._nth.call(null,cicoll,n));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3201 = nval;
var G__3202 = (n + 1);
val = G__3201;
n = G__3202;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljsrepl.core._count.call(null,cicoll);
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljsrepl.core._nth.call(null,cicoll,n));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3203 = nval;
var G__3204 = (n + 1);
val__$1 = G__3203;
n = G__3204;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljsrepl.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljsrepl.core._nth.call(null,cicoll,n));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3205 = nval;
var G__3206 = (n + 1);
val__$1 = G__3205;
n = G__3206;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljsrepl.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val = (arr[0]);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3207 = nval;
var G__3208 = (n + 1);
val = G__3207;
n = G__3208;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3209 = nval;
var G__3210 = (n + 1);
val__$1 = G__3209;
n = G__3210;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3211 = nval;
var G__3212 = (n + 1);
val__$1 = G__3211;
n = G__3212;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljsrepl.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__3214 = x;
if(G__3214)
{if((function (){var or__3943__auto__ = (G__3214.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3214.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__3214.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ICounted,G__3214);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ICounted,G__3214);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljsrepl.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__3216 = x;
if(G__3216)
{if((function (){var or__3943__auto__ = (G__3216.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3216.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3216.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IIndexed,G__3216);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IIndexed,G__3216);
}
});
replgoog.provide('cljsrepl.core.IndexedSeq');

/**
* @constructor
*/
cljsrepl.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljsrepl.core.IndexedSeq.cljs$lang$type = true;
cljsrepl.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/IndexedSeq");
});
cljsrepl.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/IndexedSeq");
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.hash_coll.call(null,coll);
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljsrepl.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return null;
}
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var c = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c > 0))
{return (new cljsrepl.core.RSeq(coll,(c - 1),null));
} else
{return cljsrepl.core.List.EMPTY;
}
});
cljsrepl.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
if(cljsrepl.core.counted_QMARK_.call(null,self__.a))
{return cljsrepl.core.ci_reduce.call(null,self__.a,f,(self__.a[self__.i]),(self__.i + 1));
} else
{return cljsrepl.core.ci_reduce.call(null,coll,f,(self__.a[self__.i]),0);
}
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
if(cljsrepl.core.counted_QMARK_.call(null,self__.a))
{return cljsrepl.core.ci_reduce.call(null,self__.a,f,start,self__.i);
} else
{return cljsrepl.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.a.length - self__.i);
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
return (self__.a[self__.i]);
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljsrepl.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return cljsrepl.core.list.call(null);
}
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return null;
}
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return not_found;
}
});
cljsrepl.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.List.EMPTY;
});
cljsrepl.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length))
{return (new cljsrepl.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljsrepl.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljsrepl.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljsrepl.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljsrepl.core.IReduce["array"] = true);
(cljsrepl.core._reduce["array"] = (function() {
var G__3217 = null;
var G__3217__2 = (function (array,f){
return cljsrepl.core.ci_reduce.call(null,array,f);
});
var G__3217__3 = (function (array,f,start){
return cljsrepl.core.ci_reduce.call(null,array,f,start);
});
G__3217 = function(array,f,start){
switch(arguments.length){
case 2:
return G__3217__2.call(this,array,f);
case 3:
return G__3217__3.call(this,array,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3217;
})()
);
(cljsrepl.core.ILookup["array"] = true);
(cljsrepl.core._lookup["array"] = (function() {
var G__3218 = null;
var G__3218__2 = (function (array,k){
return (array[k]);
});
var G__3218__3 = (function (array,k,not_found){
return cljsrepl.core._nth.call(null,array,k,not_found);
});
G__3218 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__3218__2.call(this,array,k);
case 3:
return G__3218__3.call(this,array,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3218;
})()
);
(cljsrepl.core.IIndexed["array"] = true);
(cljsrepl.core._nth["array"] = (function() {
var G__3219 = null;
var G__3219__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__3219__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__3219 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__3219__2.call(this,array,n);
case 3:
return G__3219__3.call(this,array,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3219;
})()
);
(cljsrepl.core.ICounted["array"] = true);
(cljsrepl.core._count["array"] = (function (a){
return a.length;
}));
(cljsrepl.core.ISeqable["array"] = true);
(cljsrepl.core._seq["array"] = (function (array){
return cljsrepl.core.array_seq.call(null,array,0);
}));
replgoog.provide('cljsrepl.core.RSeq');

/**
* @constructor
*/
cljsrepl.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljsrepl.core.RSeq.cljs$lang$type = true;
cljsrepl.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/RSeq");
});
cljsrepl.core.RSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/RSeq");
});
cljsrepl.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.hash_coll.call(null,coll);
});
cljsrepl.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.RSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.i + 1);
});
cljsrepl.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._nth.call(null,self__.ci,self__.i);
});
cljsrepl.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.i > 0))
{return (new cljsrepl.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return cljsrepl.core.List.EMPTY;
}
});
cljsrepl.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
return (new cljsrepl.core.RSeq(self__.ci,self__.i,new_meta));
});
cljsrepl.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
/**
* Same as (first (next x))
*/
cljsrepl.core.second = (function second(coll){
return cljsrepl.core.first.call(null,cljsrepl.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljsrepl.core.ffirst = (function ffirst(coll){
return cljsrepl.core.first.call(null,cljsrepl.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljsrepl.core.nfirst = (function nfirst(coll){
return cljsrepl.core.next.call(null,cljsrepl.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljsrepl.core.fnext = (function fnext(coll){
return cljsrepl.core.first.call(null,cljsrepl.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljsrepl.core.nnext = (function nnext(coll){
return cljsrepl.core.next.call(null,cljsrepl.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljsrepl.core.last = (function last(s){
while(true){
var sn = cljsrepl.core.next.call(null,s);
if(!((sn == null)))
{{
var G__3220 = sn;
s = G__3220;
continue;
}
} else
{return cljsrepl.core.first.call(null,s);
}
break;
}
});
(cljsrepl.core.IEquiv["_"] = true);
(cljsrepl.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljsrepl.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljsrepl.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__3221__delegate = function (coll,x,xs){
while(true){
if(cljsrepl.core.truth_(xs))
{{
var G__3222 = conj.call(null,coll,x);
var G__3223 = cljsrepl.core.first.call(null,xs);
var G__3224 = cljsrepl.core.next.call(null,xs);
coll = G__3222;
x = G__3223;
xs = G__3224;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3221 = function (coll,x,var_args){
var xs = null;
if (replgoog.isDef(var_args)) {
  xs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3221__delegate.call(this, coll, x, xs);
};
G__3221.cljs$lang$maxFixedArity = 2;
G__3221.cljs$lang$applyTo = (function (arglist__3225){
var coll = cljsrepl.core.first(arglist__3225);
var x = cljsrepl.core.first(cljsrepl.core.next(arglist__3225));
var xs = cljsrepl.core.rest(cljsrepl.core.next(arglist__3225));
return G__3221__delegate(coll, x, xs);
});
G__3221.cljs$lang$arity$variadic = G__3221__delegate;
return G__3221;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljsrepl.core.empty = (function empty(coll){
return cljsrepl.core._empty.call(null,coll);
});
cljsrepl.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljsrepl.core.seq.call(null,coll);
var acc = 0;
while(true){
if(cljsrepl.core.counted_QMARK_.call(null,s))
{return (acc + cljsrepl.core._count.call(null,s));
} else
{{
var G__3226 = cljsrepl.core.next.call(null,s);
var G__3227 = (acc + 1);
s = G__3226;
acc = G__3227;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljsrepl.core.count = (function count(coll){
if(cljsrepl.core.counted_QMARK_.call(null,coll))
{return cljsrepl.core._count.call(null,coll);
} else
{return cljsrepl.core.accumulating_seq_count.call(null,coll);
}
});
cljsrepl.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljsrepl.core.seq.call(null,coll))
{return cljsrepl.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljsrepl.core.indexed_QMARK_.call(null,coll))
{return cljsrepl.core._nth.call(null,coll,n);
} else
{if(cljsrepl.core.seq.call(null,coll))
{{
var G__3228 = cljsrepl.core.next.call(null,coll);
var G__3229 = (n - 1);
coll = G__3228;
n = G__3229;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljsrepl.core.seq.call(null,coll))
{return cljsrepl.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljsrepl.core.indexed_QMARK_.call(null,coll))
{return cljsrepl.core._nth.call(null,coll,n,not_found);
} else
{if(cljsrepl.core.seq.call(null,coll))
{{
var G__3230 = cljsrepl.core.next.call(null,coll);
var G__3231 = (n - 1);
var G__3232 = not_found;
coll = G__3230;
n = G__3231;
not_found = G__3232;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljsrepl.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__3235 = coll;
if(G__3235)
{if((function (){var or__3943__auto__ = (G__3235.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3235.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3235.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IIndexed,G__3235);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IIndexed,G__3235);
}
})())
{return cljsrepl.core._nth.call(null,coll,Math.floor(n));
} else
{return cljsrepl.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__3236 = coll;
if(G__3236)
{if((function (){var or__3943__auto__ = (G__3236.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3236.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3236.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IIndexed,G__3236);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IIndexed,G__3236);
}
})())
{return cljsrepl.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljsrepl.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljsrepl.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljsrepl.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljsrepl.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljsrepl.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljsrepl.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__3237__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.call(null,coll,k,v);
if(cljsrepl.core.truth_(kvs))
{{
var G__3238 = ret;
var G__3239 = cljsrepl.core.first.call(null,kvs);
var G__3240 = cljsrepl.core.second.call(null,kvs);
var G__3241 = cljsrepl.core.nnext.call(null,kvs);
coll = G__3238;
k = G__3239;
v = G__3240;
kvs = G__3241;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3237 = function (coll,k,v,var_args){
var kvs = null;
if (replgoog.isDef(var_args)) {
  kvs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3237__delegate.call(this, coll, k, v, kvs);
};
G__3237.cljs$lang$maxFixedArity = 3;
G__3237.cljs$lang$applyTo = (function (arglist__3242){
var coll = cljsrepl.core.first(arglist__3242);
var k = cljsrepl.core.first(cljsrepl.core.next(arglist__3242));
var v = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3242)));
var kvs = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3242)));
return G__3237__delegate(coll, k, v, kvs);
});
G__3237.cljs$lang$arity$variadic = G__3237__delegate;
return G__3237;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljsrepl.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljsrepl.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__3243__delegate = function (coll,k,ks){
while(true){
var ret = dissoc.call(null,coll,k);
if(cljsrepl.core.truth_(ks))
{{
var G__3244 = ret;
var G__3245 = cljsrepl.core.first.call(null,ks);
var G__3246 = cljsrepl.core.next.call(null,ks);
coll = G__3244;
k = G__3245;
ks = G__3246;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3243 = function (coll,k,var_args){
var ks = null;
if (replgoog.isDef(var_args)) {
  ks = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3243__delegate.call(this, coll, k, ks);
};
G__3243.cljs$lang$maxFixedArity = 2;
G__3243.cljs$lang$applyTo = (function (arglist__3247){
var coll = cljsrepl.core.first(arglist__3247);
var k = cljsrepl.core.first(cljsrepl.core.next(arglist__3247));
var ks = cljsrepl.core.rest(cljsrepl.core.next(arglist__3247));
return G__3243__delegate(coll, k, ks);
});
G__3243.cljs$lang$arity$variadic = G__3243__delegate;
return G__3243;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljsrepl.core.with_meta = (function with_meta(o,meta){
return cljsrepl.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljsrepl.core.meta = (function meta(o){
if((function (){var G__3249 = o;
if(G__3249)
{if((function (){var or__3943__auto__ = (G__3249.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3249.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3249.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMeta,G__3249);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMeta,G__3249);
}
})())
{return cljsrepl.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljsrepl.core.peek = (function peek(coll){
return cljsrepl.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljsrepl.core.pop = (function pop(coll){
return cljsrepl.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljsrepl.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljsrepl.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__3250__delegate = function (coll,k,ks){
while(true){
var ret = disj.call(null,coll,k);
if(cljsrepl.core.truth_(ks))
{{
var G__3251 = ret;
var G__3252 = cljsrepl.core.first.call(null,ks);
var G__3253 = cljsrepl.core.next.call(null,ks);
coll = G__3251;
k = G__3252;
ks = G__3253;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3250 = function (coll,k,var_args){
var ks = null;
if (replgoog.isDef(var_args)) {
  ks = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3250__delegate.call(this, coll, k, ks);
};
G__3250.cljs$lang$maxFixedArity = 2;
G__3250.cljs$lang$applyTo = (function (arglist__3254){
var coll = cljsrepl.core.first(arglist__3254);
var k = cljsrepl.core.first(cljsrepl.core.next(arglist__3254));
var ks = cljsrepl.core.rest(cljsrepl.core.next(arglist__3254));
return G__3250__delegate(coll, k, ks);
});
G__3250.cljs$lang$arity$variadic = G__3250__delegate;
return G__3250;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljsrepl.core.string_hash_cache = {};
cljsrepl.core.string_hash_cache_count = 0;
cljsrepl.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = replgoog.string.hashCode(k);
(cljsrepl.core.string_hash_cache[k] = h);
cljsrepl.core.string_hash_cache_count = (cljsrepl.core.string_hash_cache_count + 1);
return h;
});
cljsrepl.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljsrepl.core.string_hash_cache_count > 255))
{cljsrepl.core.string_hash_cache = {};
cljsrepl.core.string_hash_cache_count = 0;
} else
{}
var h = (cljsrepl.core.string_hash_cache[k]);
if(!((h == null)))
{return h;
} else
{return cljsrepl.core.add_to_string_hash_cache.call(null,k);
}
});
cljsrepl.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto__ = replgoog.isString(o);
if(and__3941__auto__)
{return check_cache;
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.check_string_hash_cache.call(null,o);
} else
{return cljsrepl.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljsrepl.core.empty_QMARK_ = (function empty_QMARK_(coll){
var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.not.call(null,cljsrepl.core.seq.call(null,coll));
}
});
/**
* Returns true if x satisfies ICollection
*/
cljsrepl.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3256 = x;
if(G__3256)
{if((function (){var or__3943__auto__ = (G__3256.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3256.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__3256.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ICollection,G__3256);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ICollection,G__3256);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljsrepl.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3258 = x;
if(G__3258)
{if((function (){var or__3943__auto__ = (G__3258.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3258.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__3258.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISet,G__3258);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISet,G__3258);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljsrepl.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__3260 = x;
if(G__3260)
{if((function (){var or__3943__auto__ = (G__3260.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3260.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__3260.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IAssociative,G__3260);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IAssociative,G__3260);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljsrepl.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__3262 = x;
if(G__3262)
{if((function (){var or__3943__auto__ = (G__3262.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3262.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__3262.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISequential,G__3262);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISequential,G__3262);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljsrepl.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__3264 = x;
if(G__3264)
{if((function (){var or__3943__auto__ = (G__3264.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3264.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3264.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReduce,G__3264);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReduce,G__3264);
}
});
/**
* Return true if x satisfies IMap
*/
cljsrepl.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3266 = x;
if(G__3266)
{if((function (){var or__3943__auto__ = (G__3266.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3266.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__3266.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMap,G__3266);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMap,G__3266);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljsrepl.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__3268 = x;
if(G__3268)
{if((function (){var or__3943__auto__ = (G__3268.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3268.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__3268.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IVector,G__3268);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IVector,G__3268);
}
});
cljsrepl.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__3270 = x;
if(G__3270)
{if((function (){var or__3943__auto__ = (G__3270.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3270.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__3270.cljs$lang$protocol_mask$partition1$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IChunkedSeq,G__3270);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IChunkedSeq,G__3270);
}
});
/**
* @param {...*} var_args
*/
cljsrepl.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__3271__delegate = function (keyvals){
return cljsrepl.core.apply.call(null,replgoog.object.create,keyvals);
};
var G__3271 = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3271__delegate.call(this, keyvals);
};
G__3271.cljs$lang$maxFixedArity = 0;
G__3271.cljs$lang$applyTo = (function (arglist__3272){
var keyvals = cljsrepl.core.seq(arglist__3272);;
return G__3271__delegate(keyvals);
});
G__3271.cljs$lang$arity$variadic = G__3271__delegate;
return G__3271;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljsrepl.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljsrepl.core.js_keys = (function js_keys(obj){
var keys = [];
replgoog.object.forEach(obj,(function (val,key,obj__$1){
return keys.push(key);
}));
return keys;
});
cljsrepl.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljsrepl.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__3273 = (i__$1 + 1);
var G__3274 = (j__$1 + 1);
var G__3275 = (len__$1 - 1);
i__$1 = G__3273;
j__$1 = G__3274;
len__$1 = G__3275;
continue;
}
}
break;
}
});
cljsrepl.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - 1));
var j__$1 = (j + (len - 1));
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__3276 = (i__$1 - 1);
var G__3277 = (j__$1 - 1);
var G__3278 = (len__$1 - 1);
i__$1 = G__3276;
j__$1 = G__3277;
len__$1 = G__3278;
continue;
}
}
break;
}
});
cljsrepl.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljsrepl.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljsrepl.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
/**
* Return true if object exists, false otherwise.
*/
cljsrepl.core.exists_QMARK_ = (function exists_QMARK_(x){
return cljsrepl.core.not_EQ_.call(null,"undefined",replgoog.typeOf(x));
});
cljsrepl.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljsrepl.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__3280 = s;
if(G__3280)
{if((function (){var or__3943__auto__ = (G__3280.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3280.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3280.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3280);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3280);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljsrepl.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__3282 = s;
if(G__3282)
{if((function (){var or__3943__auto__ = (G__3282.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3282.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__3282.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeqable,G__3282);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeqable,G__3282);
}
});
cljsrepl.core.boolean$ = (function boolean$(x){
if(cljsrepl.core.truth_(x))
{return true;
} else
{return false;
}
});
cljsrepl.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto__ = replgoog.isString(x);
if(and__3941__auto__)
{return !((x.charAt(0) === "\uFDD0"));
} else
{return and__3941__auto__;
}
});
cljsrepl.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto__ = replgoog.isString(x);
if(and__3941__auto__)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto__;
}
});
cljsrepl.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var G__3284 = x;
if(G__3284)
{if(cljsrepl.core.truth_((function (){var or__3943__auto__ = null;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__3284.cljs$core$ISymbol$;
}
})()))
{return true;
} else
{if((!G__3284.cljs$lang$protocol_mask$partition$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISymbol,G__3284);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISymbol,G__3284);
}
});
cljsrepl.core.number_QMARK_ = (function number_QMARK_(n){
return replgoog.isNumber(n);
});
cljsrepl.core.fn_QMARK_ = (function fn_QMARK_(f){
return replgoog.isFunction(f);
});
cljsrepl.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto__ = cljsrepl.core.fn_QMARK_.call(null,f);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__3286 = f;
if(G__3286)
{if((function (){var or__3943__auto____$1 = (G__3286.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__3286.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__3286.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IFn,G__3286);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IFn,G__3286);
}
}
});
/**
* Returns true if n is an integer.
*/
cljsrepl.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto__ = cljsrepl.core.number_QMARK_.call(null,n);
if(and__3941__auto__)
{var and__3941__auto____$1 = !(isNaN(n));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = !((n === Infinity));
if(and__3941__auto____$2)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljsrepl.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljsrepl.core._lookup.call(null,coll,v,cljsrepl.core.lookup_sentinel) === cljsrepl.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljsrepl.core.find = (function find(coll,k){
if((function (){var and__3941__auto__ = !((coll == null));
if(and__3941__auto__)
{var and__3941__auto____$1 = cljsrepl.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____$1)
{return cljsrepl.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.PersistentVector.fromArray([k,cljsrepl.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljsrepl.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljsrepl.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__3287__delegate = function (x,y,more){
if(!(cljsrepl.core._EQ_.call(null,x,y)))
{var s = cljsrepl.core.PersistentHashSet.fromArray([y,x]);
var xs = more;
while(true){
var x__$1 = cljsrepl.core.first.call(null,xs);
var etc = cljsrepl.core.next.call(null,xs);
if(cljsrepl.core.truth_(xs))
{if(cljsrepl.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__3288 = cljsrepl.core.conj.call(null,s,x__$1);
var G__3289 = etc;
s = G__3288;
xs = G__3289;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3287 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3287__delegate.call(this, x, y, more);
};
G__3287.cljs$lang$maxFixedArity = 2;
G__3287.cljs$lang$applyTo = (function (arglist__3290){
var x = cljsrepl.core.first(arglist__3290);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3290));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3290));
return G__3287__delegate(x, y, more);
});
G__3287.cljs$lang$arity$variadic = G__3287__delegate;
return G__3287;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljsrepl.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljsrepl.core.type.call(null,x) === cljsrepl.core.type.call(null,y)))
{if((function (){var G__3292 = x;
if(G__3292)
{if((function (){var or__3943__auto__ = (G__3292.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3292.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__3292.cljs$lang$protocol_mask$partition1$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IComparable,G__3292);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IComparable,G__3292);
}
})())
{return cljsrepl.core._compare.call(null,x,y);
} else
{return replgoog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljsrepl.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljsrepl.core.count.call(null,xs);
var yl = cljsrepl.core.count.call(null,ys);
if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljsrepl.core.compare.call(null,cljsrepl.core.nth.call(null,xs,n),cljsrepl.core.nth.call(null,ys,n));
if((function (){var and__3941__auto__ = (d === 0);
if(and__3941__auto__)
{return ((n + 1) < len);
} else
{return and__3941__auto__;
}
})())
{{
var G__3293 = xs;
var G__3294 = ys;
var G__3295 = len;
var G__3296 = (n + 1);
xs = G__3293;
ys = G__3294;
len = G__3295;
n = G__3296;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljsrepl.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljsrepl.core._EQ_.call(null,f,cljsrepl.core.compare))
{return cljsrepl.core.compare;
} else
{return (function (x,y){
var r = f.call(null,x,y);
if(cljsrepl.core.number_QMARK_.call(null,r))
{return r;
} else
{if(cljsrepl.core.truth_(r))
{return -1;
} else
{if(cljsrepl.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljsrepl.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljsrepl.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljsrepl.core.seq.call(null,coll))
{var a = cljsrepl.core.to_array.call(null,coll);
replgoog.array.stableSort(a,cljsrepl.core.fn__GT_comparator.call(null,comp));
return cljsrepl.core.seq.call(null,a);
} else
{return cljsrepl.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljsrepl.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljsrepl.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljsrepl.core.sort.call(null,(function (x,y){
return cljsrepl.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljsrepl.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return cljsrepl.core.reduce.call(null,f,cljsrepl.core.first.call(null,s),cljsrepl.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljsrepl.core.seq.call(null,coll);
while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljsrepl.core.first.call(null,coll__$1));
if(cljsrepl.core.reduced_QMARK_.call(null,nval))
{return cljsrepl.core.deref.call(null,nval);
} else
{{
var G__3297 = nval;
var G__3298 = cljsrepl.core.next.call(null,coll__$1);
val__$1 = G__3297;
coll__$1 = G__3298;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljsrepl.core.shuffle = (function shuffle(coll){
var a = cljsrepl.core.to_array.call(null,coll);
replgoog.array.shuffle(a);
return cljsrepl.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljsrepl.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__3301 = coll;
if(G__3301)
{if((function (){var or__3943__auto__ = (G__3301.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3301.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3301.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReduce,G__3301);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReduce,G__3301);
}
})())
{return cljsrepl.core._reduce.call(null,coll,f);
} else
{return cljsrepl.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__3302 = coll;
if(G__3302)
{if((function (){var or__3943__auto__ = (G__3302.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3302.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3302.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReduce,G__3302);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReduce,G__3302);
}
})())
{return cljsrepl.core._reduce.call(null,coll,f,val);
} else
{return cljsrepl.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljsrepl.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljsrepl.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljsrepl.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__3303__delegate = function (x,y,more){
return cljsrepl.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3303 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3303__delegate.call(this, x, y, more);
};
G__3303.cljs$lang$maxFixedArity = 2;
G__3303.cljs$lang$applyTo = (function (arglist__3304){
var x = cljsrepl.core.first(arglist__3304);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3304));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3304));
return G__3303__delegate(x, y, more);
});
G__3303.cljs$lang$arity$variadic = G__3303__delegate;
return G__3303;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljsrepl.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__3305__delegate = function (x,y,more){
return cljsrepl.core.reduce.call(null,_,(x - y),more);
};
var G__3305 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3305__delegate.call(this, x, y, more);
};
G__3305.cljs$lang$maxFixedArity = 2;
G__3305.cljs$lang$applyTo = (function (arglist__3306){
var x = cljsrepl.core.first(arglist__3306);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3306));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3306));
return G__3305__delegate(x, y, more);
});
G__3305.cljs$lang$arity$variadic = G__3305__delegate;
return G__3305;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljsrepl.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__3307__delegate = function (x,y,more){
return cljsrepl.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3307 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3307__delegate.call(this, x, y, more);
};
G__3307.cljs$lang$maxFixedArity = 2;
G__3307.cljs$lang$applyTo = (function (arglist__3308){
var x = cljsrepl.core.first(arglist__3308);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3308));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3308));
return G__3307__delegate(x, y, more);
});
G__3307.cljs$lang$arity$variadic = G__3307__delegate;
return G__3307;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljsrepl.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__3309__delegate = function (x,y,more){
return cljsrepl.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3309 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3309__delegate.call(this, x, y, more);
};
G__3309.cljs$lang$maxFixedArity = 2;
G__3309.cljs$lang$applyTo = (function (arglist__3310){
var x = cljsrepl.core.first(arglist__3310);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3310));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3310));
return G__3309__delegate(x, y, more);
});
G__3309.cljs$lang$arity$variadic = G__3309__delegate;
return G__3309;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljsrepl.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__3311__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljsrepl.core.next.call(null,more))
{{
var G__3312 = y;
var G__3313 = cljsrepl.core.first.call(null,more);
var G__3314 = cljsrepl.core.next.call(null,more);
x = G__3312;
y = G__3313;
more = G__3314;
continue;
}
} else
{return (y < cljsrepl.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3311 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3311__delegate.call(this, x, y, more);
};
G__3311.cljs$lang$maxFixedArity = 2;
G__3311.cljs$lang$applyTo = (function (arglist__3315){
var x = cljsrepl.core.first(arglist__3315);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3315));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3315));
return G__3311__delegate(x, y, more);
});
G__3311.cljs$lang$arity$variadic = G__3311__delegate;
return G__3311;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljsrepl.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__3316__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljsrepl.core.next.call(null,more))
{{
var G__3317 = y;
var G__3318 = cljsrepl.core.first.call(null,more);
var G__3319 = cljsrepl.core.next.call(null,more);
x = G__3317;
y = G__3318;
more = G__3319;
continue;
}
} else
{return (y <= cljsrepl.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3316 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3316__delegate.call(this, x, y, more);
};
G__3316.cljs$lang$maxFixedArity = 2;
G__3316.cljs$lang$applyTo = (function (arglist__3320){
var x = cljsrepl.core.first(arglist__3320);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3320));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3320));
return G__3316__delegate(x, y, more);
});
G__3316.cljs$lang$arity$variadic = G__3316__delegate;
return G__3316;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljsrepl.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__3321__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljsrepl.core.next.call(null,more))
{{
var G__3322 = y;
var G__3323 = cljsrepl.core.first.call(null,more);
var G__3324 = cljsrepl.core.next.call(null,more);
x = G__3322;
y = G__3323;
more = G__3324;
continue;
}
} else
{return (y > cljsrepl.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3321 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3321__delegate.call(this, x, y, more);
};
G__3321.cljs$lang$maxFixedArity = 2;
G__3321.cljs$lang$applyTo = (function (arglist__3325){
var x = cljsrepl.core.first(arglist__3325);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3325));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3325));
return G__3321__delegate(x, y, more);
});
G__3321.cljs$lang$arity$variadic = G__3321__delegate;
return G__3321;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljsrepl.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__3326__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljsrepl.core.next.call(null,more))
{{
var G__3327 = y;
var G__3328 = cljsrepl.core.first.call(null,more);
var G__3329 = cljsrepl.core.next.call(null,more);
x = G__3327;
y = G__3328;
more = G__3329;
continue;
}
} else
{return (y >= cljsrepl.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3326 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3326__delegate.call(this, x, y, more);
};
G__3326.cljs$lang$maxFixedArity = 2;
G__3326.cljs$lang$applyTo = (function (arglist__3330){
var x = cljsrepl.core.first(arglist__3330);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3330));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3330));
return G__3326__delegate(x, y, more);
});
G__3326.cljs$lang$arity$variadic = G__3326__delegate;
return G__3326;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljsrepl.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljsrepl.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__3331__delegate = function (x,y,more){
return cljsrepl.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3331 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3331__delegate.call(this, x, y, more);
};
G__3331.cljs$lang$maxFixedArity = 2;
G__3331.cljs$lang$applyTo = (function (arglist__3332){
var x = cljsrepl.core.first(arglist__3332);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3332));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3332));
return G__3331__delegate(x, y, more);
});
G__3331.cljs$lang$arity$variadic = G__3331__delegate;
return G__3331;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljsrepl.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__3333__delegate = function (x,y,more){
return cljsrepl.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3333 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3333__delegate.call(this, x, y, more);
};
G__3333.cljs$lang$maxFixedArity = 2;
G__3333.cljs$lang$applyTo = (function (arglist__3334){
var x = cljsrepl.core.first(arglist__3334);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3334));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3334));
return G__3333__delegate(x, y, more);
});
G__3333.cljs$lang$arity$variadic = G__3333__delegate;
return G__3333;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljsrepl.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljsrepl.core.int$ = (function int$(x){
return cljsrepl.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljsrepl.core.long$ = (function long$(x){
return cljsrepl.core.fix.call(null,x);
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljsrepl.core.js_mod = (function js_mod(n,d){
return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljsrepl.core.mod = (function mod(n,d){
return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljsrepl.core.quot = (function quot(n,d){
var rem = (n % d);
return cljsrepl.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljsrepl.core.rem = (function rem(n,d){
var q = cljsrepl.core.quot.call(null,n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljsrepl.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljsrepl.core.rand_int = (function rand_int(n){
return cljsrepl.core.fix.call(null,cljsrepl.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljsrepl.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljsrepl.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljsrepl.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljsrepl.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljsrepl.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljsrepl.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljsrepl.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljsrepl.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljsrepl.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljsrepl.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljsrepl.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljsrepl.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljsrepl.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> 1) & 1431655765));
var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));
return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljsrepl.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljsrepl.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__3335__delegate = function (x,y,more){
while(true){
if(cljsrepl.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljsrepl.core.next.call(null,more))
{{
var G__3336 = y;
var G__3337 = cljsrepl.core.first.call(null,more);
var G__3338 = cljsrepl.core.next.call(null,more);
x = G__3336;
y = G__3337;
more = G__3338;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljsrepl.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3335 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3335__delegate.call(this, x, y, more);
};
G__3335.cljs$lang$maxFixedArity = 2;
G__3335.cljs$lang$applyTo = (function (arglist__3339){
var x = cljsrepl.core.first(arglist__3339);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3339));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3339));
return G__3335__delegate(x, y, more);
});
G__3335.cljs$lang$arity$variadic = G__3335__delegate;
return G__3335;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljsrepl.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljsrepl.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljsrepl.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljsrepl.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljsrepl.core.seq.call(null,coll);
while(true){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = xs;
if(and__3941__auto__)
{return (n__$1 > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3340 = (n__$1 - 1);
var G__3341 = cljsrepl.core.next.call(null,xs);
n__$1 = G__3340;
xs = G__3341;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljsrepl.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__3342__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljsrepl.core.truth_(more))
{{
var G__3343 = sb.append(str_STAR_.call(null,cljsrepl.core.first.call(null,more)));
var G__3344 = cljsrepl.core.next.call(null,more);
sb = G__3343;
more = G__3344;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new replgoog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3342 = function (x,var_args){
var ys = null;
if (replgoog.isDef(var_args)) {
  ys = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3342__delegate.call(this, x, ys);
};
G__3342.cljs$lang$maxFixedArity = 1;
G__3342.cljs$lang$applyTo = (function (arglist__3345){
var x = cljsrepl.core.first(arglist__3345);
var ys = cljsrepl.core.rest(arglist__3345);
return G__3342__delegate(x, ys);
});
G__3342.cljs$lang$arity$variadic = G__3342__delegate;
return G__3342;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljsrepl.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljsrepl.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljsrepl.core.keyword_QMARK_.call(null,x))
{return cljsrepl.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljsrepl.core.truth_(cljsrepl.core.regexp_QMARK_.call(null,x)))
{return x.source;
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__3346__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljsrepl.core.truth_(more))
{{
var G__3347 = sb.append(str.call(null,cljsrepl.core.first.call(null,more)));
var G__3348 = cljsrepl.core.next.call(null,more);
sb = G__3347;
more = G__3348;
continue;
}
} else
{return cljsrepl.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new replgoog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3346 = function (x,var_args){
var ys = null;
if (replgoog.isDef(var_args)) {
  ys = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3346__delegate.call(this, x, ys);
};
G__3346.cljs$lang$maxFixedArity = 1;
G__3346.cljs$lang$applyTo = (function (arglist__3349){
var x = cljsrepl.core.first(arglist__3349);
var ys = cljsrepl.core.rest(arglist__3349);
return G__3346__delegate(x, ys);
});
G__3346.cljs$lang$arity$variadic = G__3346__delegate;
return G__3346;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljsrepl.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljsrepl.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using replgoog.string.format.
* @param {...*} var_args
*/
cljsrepl.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = cljsrepl.core.map.call(null,(function (x){
if((function (){var or__3943__auto__ = cljsrepl.core.keyword_QMARK_.call(null,x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljsrepl.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljsrepl.core.apply.call(null,replgoog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__3350){
var fmt = cljsrepl.core.first(arglist__3350);
var args = cljsrepl.core.rest(arglist__3350);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljsrepl.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljsrepl.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljsrepl.core.string_QMARK_.call(null,name))
{return (new cljsrepl.core.Symbol(null,name));
} else
{if("\uFDD0'else")
{throw (new Error("Symbol name must be string or symbol"));
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,[cljsrepl.core.str(ns),cljsrepl.core.str("/"),cljsrepl.core.str(name)].join(''));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljsrepl.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljsrepl.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljsrepl.core.symbol_QMARK_.call(null,name))
{return cljsrepl.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{if("\uFDD0'else")
{return cljsrepl.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,(cljsrepl.core.truth_(ns)?cljsrepl.core.str_STAR_.call(null,ns,"/",name):name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljsrepl.core.equiv_sequential = (function equiv_sequential(x,y){
return cljsrepl.core.boolean$.call(null,((cljsrepl.core.sequential_QMARK_.call(null,y))?(function (){var xs = cljsrepl.core.seq.call(null,x);
var ys = cljsrepl.core.seq.call(null,y);
while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljsrepl.core._EQ_.call(null,cljsrepl.core.first.call(null,xs),cljsrepl.core.first.call(null,ys)))
{{
var G__3351 = cljsrepl.core.next.call(null,xs);
var G__3352 = cljsrepl.core.next.call(null,ys);
xs = G__3351;
ys = G__3352;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljsrepl.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljsrepl.core.hash_coll = (function hash_coll(coll){
return cljsrepl.core.reduce.call(null,(function (p1__3353_SHARP_,p2__3354_SHARP_){
return cljsrepl.core.hash_combine.call(null,p1__3353_SHARP_,cljsrepl.core.hash.call(null,p2__3354_SHARP_,false));
}),cljsrepl.core.hash.call(null,cljsrepl.core.first.call(null,coll),false),cljsrepl.core.next.call(null,coll));
});
cljsrepl.core.hash_imap = (function hash_imap(m){
var h = 0;
var s = cljsrepl.core.seq.call(null,m);
while(true){
if(s)
{var e = cljsrepl.core.first.call(null,s);
{
var G__3355 = ((h + (cljsrepl.core.hash.call(null,cljsrepl.core.key.call(null,e)) ^ cljsrepl.core.hash.call(null,cljsrepl.core.val.call(null,e)))) % 4503599627370496);
var G__3356 = cljsrepl.core.next.call(null,s);
h = G__3355;
s = G__3356;
continue;
}
} else
{return h;
}
break;
}
});
cljsrepl.core.hash_iset = (function hash_iset(s){
var h = 0;
var s__$1 = cljsrepl.core.seq.call(null,s);
while(true){
if(s__$1)
{var e = cljsrepl.core.first.call(null,s__$1);
{
var G__3357 = ((h + cljsrepl.core.hash.call(null,e)) % 4503599627370496);
var G__3358 = cljsrepl.core.next.call(null,s__$1);
h = G__3357;
s__$1 = G__3358;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljsrepl.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3361_3363 = cljsrepl.core.seq.call(null,fn_map);
while(true){
if(G__3361_3363)
{var vec__3362_3364 = cljsrepl.core.first.call(null,G__3361_3363);
var key_name_3365 = cljsrepl.core.nth.call(null,vec__3362_3364,0,null);
var f_3366 = cljsrepl.core.nth.call(null,vec__3362_3364,1,null);
var str_name_3367 = cljsrepl.core.name.call(null,key_name_3365);
(obj[str_name_3367] = f_3366);
{
var G__3368 = cljsrepl.core.next.call(null,G__3361_3363);
G__3361_3363 = G__3368;
continue;
}
} else
{}
break;
}
return obj;
});
replgoog.provide('cljsrepl.core.List');

/**
* @constructor
*/
cljsrepl.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljsrepl.core.List.cljs$lang$type = true;
cljsrepl.core.List.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/List");
});
cljsrepl.core.List.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/List");
});
cljsrepl.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
cljsrepl.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljsrepl.core.List(self__.meta,o,coll,(self__.count + 1),null));
});
cljsrepl.core.List.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljsrepl.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljsrepl.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljsrepl.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljsrepl.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return cljsrepl.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljsrepl.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljsrepl.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.List.EMPTY;
});
replgoog.provide('cljsrepl.core.EmptyList');

/**
* @constructor
*/
cljsrepl.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljsrepl.core.EmptyList.cljs$lang$type = true;
cljsrepl.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/EmptyList");
});
cljsrepl.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/EmptyList");
});
cljsrepl.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljsrepl.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljsrepl.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljsrepl.core.List(self__.meta,o,null,1,null));
});
cljsrepl.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljsrepl.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljsrepl.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljsrepl.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
throw (new Error("Can't pop empty list"));
});
cljsrepl.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljsrepl.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.List.EMPTY;
});
cljsrepl.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.EmptyList(meta__$1));
});
cljsrepl.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.List.EMPTY = (new cljsrepl.core.EmptyList(null));
cljsrepl.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__3370 = coll;
if(G__3370)
{if((function (){var or__3943__auto__ = (G__3370.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3370.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__3370.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReversible,G__3370);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IReversible,G__3370);
}
});
cljsrepl.core.rseq = (function rseq(coll){
return cljsrepl.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljsrepl.core.reverse = (function reverse(coll){
if(cljsrepl.core.reversible_QMARK_.call(null,coll))
{return cljsrepl.core.rseq.call(null,coll);
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core.conj,cljsrepl.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljsrepl.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljsrepl.core.List.EMPTY;
});
var list__1 = (function (x){
return cljsrepl.core.conj.call(null,cljsrepl.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljsrepl.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljsrepl.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__3371__delegate = function (x,y,z,items){
return cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,cljsrepl.core.reduce.call(null,cljsrepl.core.conj,cljsrepl.core.List.EMPTY,cljsrepl.core.reverse.call(null,items)),z),y),x);
};
var G__3371 = function (x,y,z,var_args){
var items = null;
if (replgoog.isDef(var_args)) {
  items = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3371__delegate.call(this, x, y, z, items);
};
G__3371.cljs$lang$maxFixedArity = 3;
G__3371.cljs$lang$applyTo = (function (arglist__3372){
var x = cljsrepl.core.first(arglist__3372);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3372));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3372)));
var items = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3372)));
return G__3371__delegate(x, y, z, items);
});
G__3371.cljs$lang$arity$variadic = G__3371__delegate;
return G__3371;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;
replgoog.provide('cljsrepl.core.Cons');

/**
* @constructor
*/
cljsrepl.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljsrepl.core.Cons.cljs$lang$type = true;
cljsrepl.core.Cons.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Cons");
});
cljsrepl.core.Cons.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Cons");
});
cljsrepl.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return null;
} else
{return cljsrepl.core._seq.call(null,self__.rest);
}
});
cljsrepl.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljsrepl.core.Cons(null,o,coll,self__.__hash));
});
cljsrepl.core.Cons.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljsrepl.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return cljsrepl.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljsrepl.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljsrepl.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljsrepl.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__3374 = coll;
if(G__3374)
{if((function (){var or__3943__auto____$1 = (G__3374.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__3374.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3374.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3374);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.ISeq,G__3374);
}
}
})())
{return (new cljsrepl.core.Cons(null,x,coll,null));
} else
{return (new cljsrepl.core.Cons(null,x,cljsrepl.core.seq.call(null,coll),null));
}
});
cljsrepl.core.list_QMARK_ = (function list_QMARK_(x){
var G__3376 = x;
if(G__3376)
{if((function (){var or__3943__auto__ = (G__3376.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3376.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__3376.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IList,G__3376);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IList,G__3376);
}
});
(cljsrepl.core.IReduce["string"] = true);
(cljsrepl.core._reduce["string"] = (function() {
var G__3377 = null;
var G__3377__2 = (function (string,f){
return cljsrepl.core.ci_reduce.call(null,string,f);
});
var G__3377__3 = (function (string,f,start){
return cljsrepl.core.ci_reduce.call(null,string,f,start);
});
G__3377 = function(string,f,start){
switch(arguments.length){
case 2:
return G__3377__2.call(this,string,f);
case 3:
return G__3377__3.call(this,string,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3377;
})()
);
(cljsrepl.core.ILookup["string"] = true);
(cljsrepl.core._lookup["string"] = (function() {
var G__3378 = null;
var G__3378__2 = (function (string,k){
return cljsrepl.core._nth.call(null,string,k);
});
var G__3378__3 = (function (string,k,not_found){
return cljsrepl.core._nth.call(null,string,k,not_found);
});
G__3378 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__3378__2.call(this,string,k);
case 3:
return G__3378__3.call(this,string,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3378;
})()
);
(cljsrepl.core.IIndexed["string"] = true);
(cljsrepl.core._nth["string"] = (function() {
var G__3379 = null;
var G__3379__2 = (function (string,n){
if((n < cljsrepl.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__3379__3 = (function (string,n,not_found){
if((n < cljsrepl.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3379 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__3379__2.call(this,string,n);
case 3:
return G__3379__3.call(this,string,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3379;
})()
);
(cljsrepl.core.ICounted["string"] = true);
(cljsrepl.core._count["string"] = (function (s){
return s.length;
}));
(cljsrepl.core.ISeqable["string"] = true);
(cljsrepl.core._seq["string"] = (function (string){
return cljsrepl.core.prim_seq.call(null,string,0);
}));
(cljsrepl.core.IHash["string"] = true);
(cljsrepl.core._hash["string"] = (function (o){
return replgoog.string.hashCode(o);
}));
replgoog.provide('cljsrepl.core.Symbol');

/**
* @constructor
*/
cljsrepl.core.Symbol = (function (meta,sym){
this.meta = meta;
this.sym = sym;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6684929;
})
cljsrepl.core.Symbol.cljs$lang$type = true;
cljsrepl.core.Symbol.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Symbol");
});
cljsrepl.core.Symbol.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Symbol");
});
cljsrepl.core.Symbol.prototype.call = (function() {
var G__3384 = null;
var G__3384__2 = (function (this_sym3382,coll){
var self__ = this;
var this_sym3382__$1 = this;
var sym__$1 = this_sym3382__$1;
if((coll == null))
{return null;
} else
{return cljsrepl.core._lookup.call(null,coll,sym__$1,null);
}
});
var G__3384__3 = (function (this_sym3383,coll,not_found){
var self__ = this;
var this_sym3383__$1 = this;
var _ = this_sym3383__$1;
if((coll == null))
{return not_found;
} else
{return cljsrepl.core._lookup.call(null,coll,self__.sym,not_found);
}
});
G__3384 = function(this_sym3383,coll,not_found){
switch(arguments.length){
case 2:
return G__3384__2.call(this,this_sym3383,coll);
case 3:
return G__3384__3.call(this,this_sym3383,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3384;
})()
;
cljsrepl.core.Symbol.prototype.apply = (function (this_sym3380,args3381){
var self__ = this;
return this_sym3380.call.apply(this_sym3380,[this_sym3380].concat(args3381.slice()));
});
cljsrepl.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (sym__$1,new_meta){
var self__ = this;
return (new cljsrepl.core.Symbol(new_meta,[cljsrepl.core.str(sym__$1)].join('')));
});
cljsrepl.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (sym__$1){
var self__ = this;
return self__.meta;
});
cljsrepl.core.Symbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (sym__$1,k){
var self__ = this;
return null;
});
cljsrepl.core.Symbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (sym__$1,k,not_found){
var self__ = this;
return not_found;
});
cljsrepl.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var or__3943__auto__ = (o === other);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto__ = cljsrepl.core.symbol_QMARK_.call(null,other);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,replgoog.string.hashCode(cljsrepl.core.str_STAR_.call(null,"\uFDD1","'",o)),cljsrepl.core.hash.call(null,other));
} else
{return and__3941__auto__;
}
}
});
cljsrepl.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (o){
var self__ = this;
return replgoog.string.hashCode(cljsrepl.core.str_STAR_.call(null,"\uFDD1","'",o));
});
cljsrepl.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.sym;
});
cljsrepl.core.Symbol.prototype.cljs$core$ISymbol$ = true;
replgoog.provide('cljsrepl.core.Keyword');

/**
* @constructor
*/
cljsrepl.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljsrepl.core.Keyword.cljs$lang$type = true;
cljsrepl.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Keyword");
});
cljsrepl.core.Keyword.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Keyword");
});
cljsrepl.core.Keyword.prototype.call = (function() {
var G__3389 = null;
var G__3389__2 = (function (this_sym3387,coll){
var self__ = this;
var this_sym3387__$1 = this;
var _ = this_sym3387__$1;
if((coll == null))
{return null;
} else
{var strobj = coll.strobj;
if((strobj == null))
{return cljsrepl.core._lookup.call(null,coll,self__.k,null);
} else
{return (strobj[self__.k]);
}
}
});
var G__3389__3 = (function (this_sym3388,coll,not_found){
var self__ = this;
var this_sym3388__$1 = this;
var _ = this_sym3388__$1;
if((coll == null))
{return not_found;
} else
{return cljsrepl.core._lookup.call(null,coll,self__.k,not_found);
}
});
G__3389 = function(this_sym3388,coll,not_found){
switch(arguments.length){
case 2:
return G__3389__2.call(this,this_sym3388,coll);
case 3:
return G__3389__3.call(this,this_sym3388,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3389;
})()
;
cljsrepl.core.Keyword.prototype.apply = (function (this_sym3385,args3386){
var self__ = this;
return this_sym3385.call.apply(this_sym3385,[this_sym3385].concat(args3386.slice()));
});
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3394 = null;
var G__3394__2 = (function (this_sym3392,coll){
var this_sym3392__$1 = this;
var this$ = this_sym3392__$1;
return cljsrepl.core._lookup.call(null,coll,this$.toString(),null);
});
var G__3394__3 = (function (this_sym3393,coll,not_found){
var this_sym3393__$1 = this;
var this$ = this_sym3393__$1;
return cljsrepl.core._lookup.call(null,coll,this$.toString(),not_found);
});
G__3394 = function(this_sym3393,coll,not_found){
switch(arguments.length){
case 2:
return G__3394__2.call(this,this_sym3393,coll);
case 3:
return G__3394__3.call(this,this_sym3393,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3394;
})()
;
String.prototype.apply = (function (this_sym3390,args3391){
return this_sym3390.call.apply(this_sym3390,[this_sym3390].concat(args3391.slice()));
});
String.prototype.apply = (function (s,args){
if((cljsrepl.core.count.call(null,args) < 2))
{return cljsrepl.core._lookup.call(null,(args[0]),s,null);
} else
{return cljsrepl.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljsrepl.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x = lazy_seq.x;
if(lazy_seq.realized)
{return x;
} else
{lazy_seq.x = x.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});
replgoog.provide('cljsrepl.core.LazySeq');

/**
* @constructor
*/
cljsrepl.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljsrepl.core.LazySeq.cljs$lang$type = true;
cljsrepl.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/LazySeq");
});
cljsrepl.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/LazySeq");
});
cljsrepl.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljsrepl.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.seq.call(null,cljsrepl.core.lazy_seq_value.call(null,coll));
});
cljsrepl.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.first.call(null,cljsrepl.core.lazy_seq_value.call(null,coll));
});
cljsrepl.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.rest.call(null,cljsrepl.core.lazy_seq_value.call(null,coll));
});
cljsrepl.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.LazySeq(meta__$1,self__.realized,self__.x,self__.__hash));
});
cljsrepl.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
replgoog.provide('cljsrepl.core.ChunkBuffer');

/**
* @constructor
*/
cljsrepl.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljsrepl.core.ChunkBuffer.cljs$lang$type = true;
cljsrepl.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ChunkBuffer");
});
cljsrepl.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ChunkBuffer");
});
cljsrepl.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return self__.end;
});
cljsrepl.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);
return self__.end = (self__.end + 1);
});
cljsrepl.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljsrepl.core.ArrayChunk(self__.buf,0,self__.end));
self__.buf = null;
return ret;
});
cljsrepl.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljsrepl.core.ChunkBuffer(cljsrepl.core.make_array.call(null,capacity),0));
});
replgoog.provide('cljsrepl.core.ArrayChunk');

/**
* @constructor
*/
cljsrepl.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljsrepl.core.ArrayChunk.cljs$lang$type = true;
cljsrepl.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ArrayChunk");
});
cljsrepl.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ArrayChunk");
});
cljsrepl.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljsrepl.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
cljsrepl.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
return cljsrepl.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
cljsrepl.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljsrepl.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljsrepl.core.ArrayChunk(self__.arr,(self__.off + 1),self__.end));
}
});
cljsrepl.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
return (self__.arr[(self__.off + i)]);
});
cljsrepl.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (i >= 0);
if(and__3941__auto__)
{return (i < (self__.end - self__.off));
} else
{return and__3941__auto__;
}
})())
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljsrepl.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.end - self__.off);
});
cljsrepl.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljsrepl.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;
replgoog.provide('cljsrepl.core.ChunkedCons');

/**
* @constructor
*/
cljsrepl.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljsrepl.core.ChunkedCons.cljs$lang$type = true;
cljsrepl.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ChunkedCons");
});
cljsrepl.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ChunkedCons");
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,this$);
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._nth.call(null,self__.chunk,0);
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((cljsrepl.core._count.call(null,self__.chunk) > 1))
{return (new cljsrepl.core.ChunkedCons(cljsrepl.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljsrepl.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return (new cljsrepl.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return self__.chunk;
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return cljsrepl.core.List.EMPTY;
} else
{return self__.more;
}
});
cljsrepl.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljsrepl.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljsrepl.core.ChunkedCons(chunk,rest,null,null));
}
});
cljsrepl.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljsrepl.core.chunk = (function chunk(b){
return b.chunk();
});
cljsrepl.core.chunk_first = (function chunk_first(s){
return cljsrepl.core._chunked_first.call(null,s);
});
cljsrepl.core.chunk_rest = (function chunk_rest(s){
return cljsrepl.core._chunked_rest.call(null,s);
});
cljsrepl.core.chunk_next = (function chunk_next(s){
if((function (){var G__3396 = s;
if(G__3396)
{if((function (){var or__3943__auto__ = (G__3396.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3396.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__3396.cljs$lang$protocol_mask$partition1$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IChunkedNext,G__3396);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IChunkedNext,G__3396);
}
})())
{return cljsrepl.core._chunked_next.call(null,s);
} else
{return cljsrepl.core.seq.call(null,cljsrepl.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljsrepl.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljsrepl.core.seq.call(null,s__$1))
{ary.push(cljsrepl.core.first.call(null,s__$1));
{
var G__3397 = cljsrepl.core.next.call(null,s__$1);
s__$1 = G__3397;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljsrepl.core.to_array_2d = (function to_array_2d(coll){
var ret = cljsrepl.core.make_array.call(null,cljsrepl.core.count.call(null,coll));
var i_3398 = 0;
var xs_3399 = cljsrepl.core.seq.call(null,coll);
while(true){
if(xs_3399)
{(ret[i_3398] = cljsrepl.core.to_array.call(null,cljsrepl.core.first.call(null,xs_3399)));
{
var G__3400 = (i_3398 + 1);
var G__3401 = cljsrepl.core.next.call(null,xs_3399);
i_3398 = G__3400;
xs_3399 = G__3401;
continue;
}
} else
{}
break;
}
return ret;
});
cljsrepl.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljsrepl.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljsrepl.core.seq_QMARK_.call(null,size_or_seq))
{return cljsrepl.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = cljsrepl.core.make_array.call(null,size);
if(cljsrepl.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljsrepl.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljsrepl.core.first.call(null,s__$1));
{
var G__3402 = (i + 1);
var G__3403 = cljsrepl.core.next.call(null,s__$1);
i = G__3402;
s__$1 = G__3403;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2205__auto___3404 = size;
var i_3405 = 0;
while(true){
if((i_3405 < n__2205__auto___3404))
{(a[i_3405] = init_val_or_seq);
{
var G__3406 = (i_3405 + 1);
i_3405 = G__3406;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljsrepl.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljsrepl.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljsrepl.core.seq_QMARK_.call(null,size_or_seq))
{return cljsrepl.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = cljsrepl.core.make_array.call(null,size);
if(cljsrepl.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljsrepl.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljsrepl.core.first.call(null,s__$1));
{
var G__3407 = (i + 1);
var G__3408 = cljsrepl.core.next.call(null,s__$1);
i = G__3407;
s__$1 = G__3408;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2205__auto___3409 = size;
var i_3410 = 0;
while(true){
if((i_3410 < n__2205__auto___3409))
{(a[i_3410] = init_val_or_seq);
{
var G__3411 = (i_3410 + 1);
i_3410 = G__3411;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljsrepl.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljsrepl.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljsrepl.core.seq_QMARK_.call(null,size_or_seq))
{return cljsrepl.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = cljsrepl.core.make_array.call(null,size);
if(cljsrepl.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljsrepl.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljsrepl.core.first.call(null,s__$1));
{
var G__3412 = (i + 1);
var G__3413 = cljsrepl.core.next.call(null,s__$1);
i = G__3412;
s__$1 = G__3413;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2205__auto___3414 = size;
var i_3415 = 0;
while(true){
if((i_3415 < n__2205__auto___3414))
{(a[i_3415] = init_val_or_seq);
{
var G__3416 = (i_3415 + 1);
i_3415 = G__3416;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljsrepl.core.bounded_count = (function bounded_count(s,n){
if(cljsrepl.core.counted_QMARK_.call(null,s))
{return cljsrepl.core.count.call(null,s);
} else
{var s__$1 = s;
var i = n;
var sum = 0;
while(true){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = (i > 0);
if(and__3941__auto__)
{return cljsrepl.core.seq.call(null,s__$1);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3417 = cljsrepl.core.next.call(null,s__$1);
var G__3418 = (i - 1);
var G__3419 = (sum + 1);
s__$1 = G__3417;
i = G__3418;
sum = G__3419;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljsrepl.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljsrepl.core.next.call(null,arglist) == null))
{return cljsrepl.core.seq.call(null,cljsrepl.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,arglist),spread.call(null,cljsrepl.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljsrepl.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljsrepl.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljsrepl.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s = cljsrepl.core.seq.call(null,x);
if(s)
{if(cljsrepl.core.chunked_seq_QMARK_.call(null,s))
{return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk_first.call(null,s),concat.call(null,cljsrepl.core.chunk_rest.call(null,s),y));
} else
{return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,s),concat.call(null,cljsrepl.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__3420__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var xys__$1 = cljsrepl.core.seq.call(null,xys);
if(xys__$1)
{if(cljsrepl.core.chunked_seq_QMARK_.call(null,xys__$1))
{return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk_first.call(null,xys__$1),cat.call(null,cljsrepl.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,xys__$1),cat.call(null,cljsrepl.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(cljsrepl.core.truth_(zs__$1))
{return cat.call(null,cljsrepl.core.first.call(null,zs__$1),cljsrepl.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,concat.call(null,x,y),zs);
};
var G__3420 = function (x,y,var_args){
var zs = null;
if (replgoog.isDef(var_args)) {
  zs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3420__delegate.call(this, x, y, zs);
};
G__3420.cljs$lang$maxFixedArity = 2;
G__3420.cljs$lang$applyTo = (function (arglist__3421){
var x = cljsrepl.core.first(arglist__3421);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3421));
var zs = cljsrepl.core.rest(cljsrepl.core.next(arglist__3421));
return G__3420__delegate(x, y, zs);
});
G__3420.cljs$lang$arity$variadic = G__3420__delegate;
return G__3420;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljsrepl.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljsrepl.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljsrepl.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljsrepl.core.cons.call(null,a,cljsrepl.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljsrepl.core.cons.call(null,a,cljsrepl.core.cons.call(null,b,cljsrepl.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__3422__delegate = function (a,b,c,d,more){
return cljsrepl.core.cons.call(null,a,cljsrepl.core.cons.call(null,b,cljsrepl.core.cons.call(null,c,cljsrepl.core.cons.call(null,d,cljsrepl.core.spread.call(null,more)))));
};
var G__3422 = function (a,b,c,d,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3422__delegate.call(this, a, b, c, d, more);
};
G__3422.cljs$lang$maxFixedArity = 4;
G__3422.cljs$lang$applyTo = (function (arglist__3423){
var a = cljsrepl.core.first(arglist__3423);
var b = cljsrepl.core.first(cljsrepl.core.next(arglist__3423));
var c = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3423)));
var d = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3423))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3423))));
return G__3422__delegate(a, b, c, d, more);
});
G__3422.cljs$lang$arity$variadic = G__3422__delegate;
return G__3422;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljsrepl.core.transient$ = (function transient$(coll){
return cljsrepl.core._as_transient.call(null,coll);
});
cljsrepl.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljsrepl.core._persistent_BANG_.call(null,tcoll);
});
cljsrepl.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljsrepl.core._conj_BANG_.call(null,tcoll,val);
});
cljsrepl.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljsrepl.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljsrepl.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljsrepl.core._dissoc_BANG_.call(null,tcoll,key);
});
cljsrepl.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljsrepl.core._pop_BANG_.call(null,tcoll);
});
cljsrepl.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljsrepl.core._disjoin_BANG_.call(null,tcoll,val);
});
cljsrepl.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljsrepl.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a = cljsrepl.core._first.call(null,args__$1);
var args__$2 = cljsrepl.core._rest.call(null,args__$1);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a);
} else
{return f.call(null,a);
}
} else
{var b = cljsrepl.core._first.call(null,args__$2);
var args__$3 = cljsrepl.core._rest.call(null,args__$2);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a,b);
} else
{return f.call(null,a,b);
}
} else
{var c = cljsrepl.core._first.call(null,args__$3);
var args__$4 = cljsrepl.core._rest.call(null,args__$3);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a,b,c);
} else
{return f.call(null,a,b,c);
}
} else
{var d = cljsrepl.core._first.call(null,args__$4);
var args__$5 = cljsrepl.core._rest.call(null,args__$4);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a,b,c,d);
} else
{return f.call(null,a,b,c,d);
}
} else
{var e = cljsrepl.core._first.call(null,args__$5);
var args__$6 = cljsrepl.core._rest.call(null,args__$5);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a,b,c,d,e);
} else
{return f.call(null,a,b,c,d,e);
}
} else
{var f__$1 = cljsrepl.core._first.call(null,args__$6);
var args__$7 = cljsrepl.core._rest.call(null,args__$6);
if((argc === 6))
{if(f__$1.cljs$lang$arity$6)
{return f__$1.cljs$lang$arity$6(a,b,c,d,e,f__$1);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1);
}
} else
{var g = cljsrepl.core._first.call(null,args__$7);
var args__$8 = cljsrepl.core._rest.call(null,args__$7);
if((argc === 7))
{if(f__$1.cljs$lang$arity$7)
{return f__$1.cljs$lang$arity$7(a,b,c,d,e,f__$1,g);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g);
}
} else
{var h = cljsrepl.core._first.call(null,args__$8);
var args__$9 = cljsrepl.core._rest.call(null,args__$8);
if((argc === 8))
{if(f__$1.cljs$lang$arity$8)
{return f__$1.cljs$lang$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h);
}
} else
{var i = cljsrepl.core._first.call(null,args__$9);
var args__$10 = cljsrepl.core._rest.call(null,args__$9);
if((argc === 9))
{if(f__$1.cljs$lang$arity$9)
{return f__$1.cljs$lang$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i);
}
} else
{var j = cljsrepl.core._first.call(null,args__$10);
var args__$11 = cljsrepl.core._rest.call(null,args__$10);
if((argc === 10))
{if(f__$1.cljs$lang$arity$10)
{return f__$1.cljs$lang$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}
} else
{var k = cljsrepl.core._first.call(null,args__$11);
var args__$12 = cljsrepl.core._rest.call(null,args__$11);
if((argc === 11))
{if(f__$1.cljs$lang$arity$11)
{return f__$1.cljs$lang$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}
} else
{var l = cljsrepl.core._first.call(null,args__$12);
var args__$13 = cljsrepl.core._rest.call(null,args__$12);
if((argc === 12))
{if(f__$1.cljs$lang$arity$12)
{return f__$1.cljs$lang$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}
} else
{var m = cljsrepl.core._first.call(null,args__$13);
var args__$14 = cljsrepl.core._rest.call(null,args__$13);
if((argc === 13))
{if(f__$1.cljs$lang$arity$13)
{return f__$1.cljs$lang$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}
} else
{var n = cljsrepl.core._first.call(null,args__$14);
var args__$15 = cljsrepl.core._rest.call(null,args__$14);
if((argc === 14))
{if(f__$1.cljs$lang$arity$14)
{return f__$1.cljs$lang$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}
} else
{var o = cljsrepl.core._first.call(null,args__$15);
var args__$16 = cljsrepl.core._rest.call(null,args__$15);
if((argc === 15))
{if(f__$1.cljs$lang$arity$15)
{return f__$1.cljs$lang$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}
} else
{var p = cljsrepl.core._first.call(null,args__$16);
var args__$17 = cljsrepl.core._rest.call(null,args__$16);
if((argc === 16))
{if(f__$1.cljs$lang$arity$16)
{return f__$1.cljs$lang$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}
} else
{var q = cljsrepl.core._first.call(null,args__$17);
var args__$18 = cljsrepl.core._rest.call(null,args__$17);
if((argc === 17))
{if(f__$1.cljs$lang$arity$17)
{return f__$1.cljs$lang$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}
} else
{var r = cljsrepl.core._first.call(null,args__$18);
var args__$19 = cljsrepl.core._rest.call(null,args__$18);
if((argc === 18))
{if(f__$1.cljs$lang$arity$18)
{return f__$1.cljs$lang$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}
} else
{var s = cljsrepl.core._first.call(null,args__$19);
var args__$20 = cljsrepl.core._rest.call(null,args__$19);
if((argc === 19))
{if(f__$1.cljs$lang$arity$19)
{return f__$1.cljs$lang$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
} else
{var t = cljsrepl.core._first.call(null,args__$20);
var args__$21 = cljsrepl.core._rest.call(null,args__$20);
if((argc === 20))
{if(f__$1.cljs$lang$arity$20)
{return f__$1.cljs$lang$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljsrepl.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljsrepl.core.bounded_count.call(null,args,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljsrepl.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljsrepl.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljsrepl.core.list_STAR_.call(null,x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljsrepl.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljsrepl.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljsrepl.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljsrepl.core.list_STAR_.call(null,x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljsrepl.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljsrepl.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljsrepl.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljsrepl.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljsrepl.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljsrepl.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljsrepl.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__3424__delegate = function (f,a,b,c,d,args){
var arglist = cljsrepl.core.cons.call(null,a,cljsrepl.core.cons.call(null,b,cljsrepl.core.cons.call(null,c,cljsrepl.core.cons.call(null,d,cljsrepl.core.spread.call(null,args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljsrepl.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljsrepl.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljsrepl.core.to_array.call(null,arglist));
}
};
var G__3424 = function (f,a,b,c,d,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3424__delegate.call(this, f, a, b, c, d, args);
};
G__3424.cljs$lang$maxFixedArity = 5;
G__3424.cljs$lang$applyTo = (function (arglist__3425){
var f = cljsrepl.core.first(arglist__3425);
var a = cljsrepl.core.first(cljsrepl.core.next(arglist__3425));
var b = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3425)));
var c = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3425))));
var d = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3425)))));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3425)))));
return G__3424__delegate(f, a, b, c, d, args);
});
G__3424.cljs$lang$arity$variadic = G__3424__delegate;
return G__3424;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljsrepl.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljsrepl.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljsrepl.core.with_meta.call(null,obj,cljsrepl.core.apply.call(null,f,cljsrepl.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3426){
var obj = cljsrepl.core.first(arglist__3426);
var f = cljsrepl.core.first(cljsrepl.core.next(arglist__3426));
var args = cljsrepl.core.rest(cljsrepl.core.next(arglist__3426));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljsrepl.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljsrepl.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__3427__delegate = function (x,y,more){
return cljsrepl.core.not.call(null,cljsrepl.core.apply.call(null,cljsrepl.core._EQ_,x,y,more));
};
var G__3427 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3427__delegate.call(this, x, y, more);
};
G__3427.cljs$lang$maxFixedArity = 2;
G__3427.cljs$lang$applyTo = (function (arglist__3428){
var x = cljsrepl.core.first(arglist__3428);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3428));
var more = cljsrepl.core.rest(cljsrepl.core.next(arglist__3428));
return G__3427__delegate(x, y, more);
});
G__3427.cljs$lang$arity$variadic = G__3427__delegate;
return G__3427;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljsrepl.core.not_empty = (function not_empty(coll){
if(cljsrepl.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljsrepl.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljsrepl.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljsrepl.core.truth_(pred.call(null,cljsrepl.core.first.call(null,coll))))
{{
var G__3429 = pred;
var G__3430 = cljsrepl.core.next.call(null,coll);
pred = G__3429;
coll = G__3430;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljsrepl.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljsrepl.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljsrepl.core.some = (function some(pred,coll){
while(true){
if(cljsrepl.core.seq.call(null,coll))
{var or__3943__auto__ = pred.call(null,cljsrepl.core.first.call(null,coll));
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{{
var G__3431 = pred;
var G__3432 = cljsrepl.core.next.call(null,coll);
pred = G__3431;
coll = G__3432;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljsrepl.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljsrepl.core.not.call(null,cljsrepl.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljsrepl.core.even_QMARK_ = (function even_QMARK_(n){
if(cljsrepl.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljsrepl.core.str("Argument must be an integer: "),cljsrepl.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljsrepl.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljsrepl.core.even_QMARK_.call(null,n));
});
cljsrepl.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljsrepl.core.complement = (function complement(f){
return (function() {
var G__3433 = null;
var G__3433__0 = (function (){
return cljsrepl.core.not.call(null,f.call(null));
});
var G__3433__1 = (function (x){
return cljsrepl.core.not.call(null,f.call(null,x));
});
var G__3433__2 = (function (x,y){
return cljsrepl.core.not.call(null,f.call(null,x,y));
});
var G__3433__3 = (function() { 
var G__3434__delegate = function (x,y,zs){
return cljsrepl.core.not.call(null,cljsrepl.core.apply.call(null,f,x,y,zs));
};
var G__3434 = function (x,y,var_args){
var zs = null;
if (replgoog.isDef(var_args)) {
  zs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3434__delegate.call(this, x, y, zs);
};
G__3434.cljs$lang$maxFixedArity = 2;
G__3434.cljs$lang$applyTo = (function (arglist__3435){
var x = cljsrepl.core.first(arglist__3435);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3435));
var zs = cljsrepl.core.rest(cljsrepl.core.next(arglist__3435));
return G__3434__delegate(x, y, zs);
});
G__3434.cljs$lang$arity$variadic = G__3434__delegate;
return G__3434;
})()
;
G__3433 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__3433__0.call(this);
case 1:
return G__3433__1.call(this,x);
case 2:
return G__3433__2.call(this,x,y);
default:
return G__3433__3.cljs$lang$arity$variadic(x,y, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3433.cljs$lang$maxFixedArity = 2;
G__3433.cljs$lang$applyTo = G__3433__3.cljs$lang$applyTo;
return G__3433;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljsrepl.core.constantly = (function constantly(x){
return (function() { 
var G__3436__delegate = function (args){
return x;
};
var G__3436 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3436__delegate.call(this, args);
};
G__3436.cljs$lang$maxFixedArity = 0;
G__3436.cljs$lang$applyTo = (function (arglist__3437){
var args = cljsrepl.core.seq(arglist__3437);;
return G__3436__delegate(args);
});
G__3436.cljs$lang$arity$variadic = G__3436__delegate;
return G__3436;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljsrepl.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljsrepl.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__3438 = null;
var G__3438__0 = (function (){
return f.call(null,g.call(null));
});
var G__3438__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3438__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3438__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3438__4 = (function() { 
var G__3439__delegate = function (x,y,z,args){
return f.call(null,cljsrepl.core.apply.call(null,g,x,y,z,args));
};
var G__3439 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3439__delegate.call(this, x, y, z, args);
};
G__3439.cljs$lang$maxFixedArity = 3;
G__3439.cljs$lang$applyTo = (function (arglist__3440){
var x = cljsrepl.core.first(arglist__3440);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3440));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3440)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3440)));
return G__3439__delegate(x, y, z, args);
});
G__3439.cljs$lang$arity$variadic = G__3439__delegate;
return G__3439;
})()
;
G__3438 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3438__0.call(this);
case 1:
return G__3438__1.call(this,x);
case 2:
return G__3438__2.call(this,x,y);
case 3:
return G__3438__3.call(this,x,y,z);
default:
return G__3438__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3438.cljs$lang$maxFixedArity = 3;
G__3438.cljs$lang$applyTo = G__3438__4.cljs$lang$applyTo;
return G__3438;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__3441 = null;
var G__3441__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3441__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3441__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3441__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3441__4 = (function() { 
var G__3442__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljsrepl.core.apply.call(null,h,x,y,z,args)));
};
var G__3442 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3442__delegate.call(this, x, y, z, args);
};
G__3442.cljs$lang$maxFixedArity = 3;
G__3442.cljs$lang$applyTo = (function (arglist__3443){
var x = cljsrepl.core.first(arglist__3443);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3443));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3443)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3443)));
return G__3442__delegate(x, y, z, args);
});
G__3442.cljs$lang$arity$variadic = G__3442__delegate;
return G__3442;
})()
;
G__3441 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3441__0.call(this);
case 1:
return G__3441__1.call(this,x);
case 2:
return G__3441__2.call(this,x,y);
case 3:
return G__3441__3.call(this,x,y,z);
default:
return G__3441__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3441.cljs$lang$maxFixedArity = 3;
G__3441.cljs$lang$applyTo = G__3441__4.cljs$lang$applyTo;
return G__3441;
})()
});
var comp__4 = (function() { 
var G__3444__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljsrepl.core.reverse.call(null,cljsrepl.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__3445__delegate = function (args){
var ret = cljsrepl.core.apply.call(null,cljsrepl.core.first.call(null,fs__$1),args);
var fs__$2 = cljsrepl.core.next.call(null,fs__$1);
while(true){
if(fs__$2)
{{
var G__3446 = cljsrepl.core.first.call(null,fs__$2).call(null,ret);
var G__3447 = cljsrepl.core.next.call(null,fs__$2);
ret = G__3446;
fs__$2 = G__3447;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3445 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3445__delegate.call(this, args);
};
G__3445.cljs$lang$maxFixedArity = 0;
G__3445.cljs$lang$applyTo = (function (arglist__3448){
var args = cljsrepl.core.seq(arglist__3448);;
return G__3445__delegate(args);
});
G__3445.cljs$lang$arity$variadic = G__3445__delegate;
return G__3445;
})()
;
};
var G__3444 = function (f1,f2,f3,var_args){
var fs = null;
if (replgoog.isDef(var_args)) {
  fs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3444__delegate.call(this, f1, f2, f3, fs);
};
G__3444.cljs$lang$maxFixedArity = 3;
G__3444.cljs$lang$applyTo = (function (arglist__3449){
var f1 = cljsrepl.core.first(arglist__3449);
var f2 = cljsrepl.core.first(cljsrepl.core.next(arglist__3449));
var f3 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3449)));
var fs = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3449)));
return G__3444__delegate(f1, f2, f3, fs);
});
G__3444.cljs$lang$arity$variadic = G__3444__delegate;
return G__3444;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljsrepl.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__3450__delegate = function (args){
return cljsrepl.core.apply.call(null,f,arg1,args);
};
var G__3450 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3450__delegate.call(this, args);
};
G__3450.cljs$lang$maxFixedArity = 0;
G__3450.cljs$lang$applyTo = (function (arglist__3451){
var args = cljsrepl.core.seq(arglist__3451);;
return G__3450__delegate(args);
});
G__3450.cljs$lang$arity$variadic = G__3450__delegate;
return G__3450;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__3452__delegate = function (args){
return cljsrepl.core.apply.call(null,f,arg1,arg2,args);
};
var G__3452 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3452__delegate.call(this, args);
};
G__3452.cljs$lang$maxFixedArity = 0;
G__3452.cljs$lang$applyTo = (function (arglist__3453){
var args = cljsrepl.core.seq(arglist__3453);;
return G__3452__delegate(args);
});
G__3452.cljs$lang$arity$variadic = G__3452__delegate;
return G__3452;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3454__delegate = function (args){
return cljsrepl.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3454 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3454__delegate.call(this, args);
};
G__3454.cljs$lang$maxFixedArity = 0;
G__3454.cljs$lang$applyTo = (function (arglist__3455){
var args = cljsrepl.core.seq(arglist__3455);;
return G__3454__delegate(args);
});
G__3454.cljs$lang$arity$variadic = G__3454__delegate;
return G__3454;
})()
;
});
var partial__5 = (function() { 
var G__3456__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3457__delegate = function (args){
return cljsrepl.core.apply.call(null,f,arg1,arg2,arg3,cljsrepl.core.concat.call(null,more,args));
};
var G__3457 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3457__delegate.call(this, args);
};
G__3457.cljs$lang$maxFixedArity = 0;
G__3457.cljs$lang$applyTo = (function (arglist__3458){
var args = cljsrepl.core.seq(arglist__3458);;
return G__3457__delegate(args);
});
G__3457.cljs$lang$arity$variadic = G__3457__delegate;
return G__3457;
})()
;
};
var G__3456 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3456__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3456.cljs$lang$maxFixedArity = 4;
G__3456.cljs$lang$applyTo = (function (arglist__3459){
var f = cljsrepl.core.first(arglist__3459);
var arg1 = cljsrepl.core.first(cljsrepl.core.next(arglist__3459));
var arg2 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3459)));
var arg3 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3459))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3459))));
return G__3456__delegate(f, arg1, arg2, arg3, more);
});
G__3456.cljs$lang$arity$variadic = G__3456__delegate;
return G__3456;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljsrepl.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__3460 = null;
var G__3460__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__3460__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__3460__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__3460__4 = (function() { 
var G__3461__delegate = function (a,b,c,ds){
return cljsrepl.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__3461 = function (a,b,c,var_args){
var ds = null;
if (replgoog.isDef(var_args)) {
  ds = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3461__delegate.call(this, a, b, c, ds);
};
G__3461.cljs$lang$maxFixedArity = 3;
G__3461.cljs$lang$applyTo = (function (arglist__3462){
var a = cljsrepl.core.first(arglist__3462);
var b = cljsrepl.core.first(cljsrepl.core.next(arglist__3462));
var c = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3462)));
var ds = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3462)));
return G__3461__delegate(a, b, c, ds);
});
G__3461.cljs$lang$arity$variadic = G__3461__delegate;
return G__3461;
})()
;
G__3460 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__3460__1.call(this,a);
case 2:
return G__3460__2.call(this,a,b);
case 3:
return G__3460__3.call(this,a,b,c);
default:
return G__3460__4.cljs$lang$arity$variadic(a,b,c, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3460.cljs$lang$maxFixedArity = 3;
G__3460.cljs$lang$applyTo = G__3460__4.cljs$lang$applyTo;
return G__3460;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__3463 = null;
var G__3463__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__3463__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__3463__4 = (function() { 
var G__3464__delegate = function (a,b,c,ds){
return cljsrepl.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__3464 = function (a,b,c,var_args){
var ds = null;
if (replgoog.isDef(var_args)) {
  ds = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3464__delegate.call(this, a, b, c, ds);
};
G__3464.cljs$lang$maxFixedArity = 3;
G__3464.cljs$lang$applyTo = (function (arglist__3465){
var a = cljsrepl.core.first(arglist__3465);
var b = cljsrepl.core.first(cljsrepl.core.next(arglist__3465));
var c = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3465)));
var ds = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3465)));
return G__3464__delegate(a, b, c, ds);
});
G__3464.cljs$lang$arity$variadic = G__3464__delegate;
return G__3464;
})()
;
G__3463 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__3463__2.call(this,a,b);
case 3:
return G__3463__3.call(this,a,b,c);
default:
return G__3463__4.cljs$lang$arity$variadic(a,b,c, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3463.cljs$lang$maxFixedArity = 3;
G__3463.cljs$lang$applyTo = G__3463__4.cljs$lang$applyTo;
return G__3463;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__3466 = null;
var G__3466__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__3466__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__3466__4 = (function() { 
var G__3467__delegate = function (a,b,c,ds){
return cljsrepl.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__3467 = function (a,b,c,var_args){
var ds = null;
if (replgoog.isDef(var_args)) {
  ds = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3467__delegate.call(this, a, b, c, ds);
};
G__3467.cljs$lang$maxFixedArity = 3;
G__3467.cljs$lang$applyTo = (function (arglist__3468){
var a = cljsrepl.core.first(arglist__3468);
var b = cljsrepl.core.first(cljsrepl.core.next(arglist__3468));
var c = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3468)));
var ds = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3468)));
return G__3467__delegate(a, b, c, ds);
});
G__3467.cljs$lang$arity$variadic = G__3467__delegate;
return G__3467;
})()
;
G__3466 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__3466__2.call(this,a,b);
case 3:
return G__3466__3.call(this,a,b,c);
default:
return G__3466__4.cljs$lang$arity$variadic(a,b,c, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3466.cljs$lang$maxFixedArity = 3;
G__3466.cljs$lang$applyTo = G__3466__4.cljs$lang$applyTo;
return G__3466;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljsrepl.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.chunked_seq_QMARK_.call(null,s))
{var c = cljsrepl.core.chunk_first.call(null,s);
var size = cljsrepl.core.count.call(null,c);
var b = cljsrepl.core.chunk_buffer.call(null,size);
var n__2205__auto___3469 = size;
var i_3470 = 0;
while(true){
if((i_3470 < n__2205__auto___3469))
{cljsrepl.core.chunk_append.call(null,b,f.call(null,(idx + i_3470),cljsrepl.core._nth.call(null,c,i_3470)));
{
var G__3471 = (i_3470 + 1);
i_3470 = G__3471;
continue;
}
} else
{}
break;
}
return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b),mapi.call(null,(idx + size),cljsrepl.core.chunk_rest.call(null,s)));
} else
{return cljsrepl.core.cons.call(null,f.call(null,idx,cljsrepl.core.first.call(null,s)),mapi.call(null,(idx + 1),cljsrepl.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
return mapi.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljsrepl.core.keep = (function keep(f,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.chunked_seq_QMARK_.call(null,s))
{var c = cljsrepl.core.chunk_first.call(null,s);
var size = cljsrepl.core.count.call(null,c);
var b = cljsrepl.core.chunk_buffer.call(null,size);
var n__2205__auto___3472 = size;
var i_3473 = 0;
while(true){
if((i_3473 < n__2205__auto___3472))
{var x_3474 = f.call(null,cljsrepl.core._nth.call(null,c,i_3473));
if((x_3474 == null))
{} else
{cljsrepl.core.chunk_append.call(null,b,x_3474);
}
{
var G__3475 = (i_3473 + 1);
i_3473 = G__3475;
continue;
}
} else
{}
break;
}
return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b),keep.call(null,f,cljsrepl.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,cljsrepl.core.first.call(null,s));
if((x == null))
{return keep.call(null,f,cljsrepl.core.rest.call(null,s));
} else
{return cljsrepl.core.cons.call(null,x,keep.call(null,f,cljsrepl.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljsrepl.core.keep_indexed = (function keep_indexed(f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.chunked_seq_QMARK_.call(null,s))
{var c = cljsrepl.core.chunk_first.call(null,s);
var size = cljsrepl.core.count.call(null,c);
var b = cljsrepl.core.chunk_buffer.call(null,size);
var n__2205__auto___3482 = size;
var i_3483 = 0;
while(true){
if((i_3483 < n__2205__auto___3482))
{var x_3484 = f.call(null,(idx + i_3483),cljsrepl.core._nth.call(null,c,i_3483));
if((x_3484 == null))
{} else
{cljsrepl.core.chunk_append.call(null,b,x_3484);
}
{
var G__3485 = (i_3483 + 1);
i_3483 = G__3485;
continue;
}
} else
{}
break;
}
return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b),keepi.call(null,(idx + size),cljsrepl.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,idx,cljsrepl.core.first.call(null,s));
if((x == null))
{return keepi.call(null,(idx + 1),cljsrepl.core.rest.call(null,s));
} else
{return cljsrepl.core.cons.call(null,x,keepi.call(null,(idx + 1),cljsrepl.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
return keepi.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljsrepl.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljsrepl.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{return p.call(null,y);
} else
{return and__3941__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return p.call(null,z);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__3492__delegate = function (x,y,z,args){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = ep1.call(null,x,y,z);
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto__;
}
})());
};
var G__3492 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3492__delegate.call(this, x, y, z, args);
};
G__3492.cljs$lang$maxFixedArity = 3;
G__3492.cljs$lang$applyTo = (function (arglist__3493){
var x = cljsrepl.core.first(arglist__3493);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3493));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3493)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3493)));
return G__3492__delegate(x, y, z, args);
});
G__3492.cljs$lang$arity$variadic = G__3492__delegate;
return G__3492;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{return p2.call(null,x);
} else
{return and__3941__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p2.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$2))
{return p2.call(null,y);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p1.call(null,z);
if(cljsrepl.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p2.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$4))
{return p2.call(null,z);
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__3494__delegate = function (x,y,z,args){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = ep2.call(null,x,y,z);
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.every_QMARK_.call(null,(function (p1__3476_SHARP_){
var and__3941__auto____$1 = p1.call(null,p1__3476_SHARP_);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return p2.call(null,p1__3476_SHARP_);
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__3494 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3494__delegate.call(this, x, y, z, args);
};
G__3494.cljs$lang$maxFixedArity = 3;
G__3494.cljs$lang$applyTo = (function (arglist__3495){
var x = cljsrepl.core.first(arglist__3495);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3495));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3495)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3495)));
return G__3494__delegate(x, y, z, args);
});
G__3494.cljs$lang$arity$variadic = G__3494__delegate;
return G__3494;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return p3.call(null,x);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p3.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p1.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$4))
{return p3.call(null,y);
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p3.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p1.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$4))
{var and__3941__auto____$5 = p3.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$5))
{var and__3941__auto____$6 = p1.call(null,z);
if(cljsrepl.core.truth_(and__3941__auto____$6))
{var and__3941__auto____$7 = p2.call(null,z);
if(cljsrepl.core.truth_(and__3941__auto____$7))
{return p3.call(null,z);
} else
{return and__3941__auto____$7;
}
} else
{return and__3941__auto____$6;
}
} else
{return and__3941__auto____$5;
}
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__3496__delegate = function (x,y,z,args){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = ep3.call(null,x,y,z);
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.every_QMARK_.call(null,(function (p1__3477_SHARP_){
var and__3941__auto____$1 = p1.call(null,p1__3477_SHARP_);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p2.call(null,p1__3477_SHARP_);
if(cljsrepl.core.truth_(and__3941__auto____$2))
{return p3.call(null,p1__3477_SHARP_);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__3496 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3496__delegate.call(this, x, y, z, args);
};
G__3496.cljs$lang$maxFixedArity = 3;
G__3496.cljs$lang$applyTo = (function (arglist__3497){
var x = cljsrepl.core.first(arglist__3497);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3497));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3497)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3497)));
return G__3496__delegate(x, y, z, args);
});
G__3496.cljs$lang$arity$variadic = G__3496__delegate;
return G__3496;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__3498__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljsrepl.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljsrepl.core.every_QMARK_.call(null,(function (p1__3478_SHARP_){
return p1__3478_SHARP_.call(null,x);
}),ps__$1);
});
var epn__2 = (function (x,y){
return cljsrepl.core.every_QMARK_.call(null,(function (p1__3479_SHARP_){
var and__3941__auto__ = p1__3479_SHARP_.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{return p1__3479_SHARP_.call(null,y);
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){
return cljsrepl.core.every_QMARK_.call(null,(function (p1__3480_SHARP_){
var and__3941__auto__ = p1__3480_SHARP_.call(null,x);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1__3480_SHARP_.call(null,y);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return p1__3480_SHARP_.call(null,z);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__4 = (function() { 
var G__3499__delegate = function (x,y,z,args){
return cljsrepl.core.boolean$.call(null,(function (){var and__3941__auto__ = epn.call(null,x,y,z);
if(cljsrepl.core.truth_(and__3941__auto__))
{return cljsrepl.core.every_QMARK_.call(null,(function (p1__3481_SHARP_){
return cljsrepl.core.every_QMARK_.call(null,p1__3481_SHARP_,args);
}),ps__$1);
} else
{return and__3941__auto__;
}
})());
};
var G__3499 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3499__delegate.call(this, x, y, z, args);
};
G__3499.cljs$lang$maxFixedArity = 3;
G__3499.cljs$lang$applyTo = (function (arglist__3500){
var x = cljsrepl.core.first(arglist__3500);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3500));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3500)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3500)));
return G__3499__delegate(x, y, z, args);
});
G__3499.cljs$lang$arity$variadic = G__3499__delegate;
return G__3499;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__3498 = function (p1,p2,p3,var_args){
var ps = null;
if (replgoog.isDef(var_args)) {
  ps = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3498__delegate.call(this, p1, p2, p3, ps);
};
G__3498.cljs$lang$maxFixedArity = 3;
G__3498.cljs$lang$applyTo = (function (arglist__3501){
var p1 = cljsrepl.core.first(arglist__3501);
var p2 = cljsrepl.core.first(cljsrepl.core.next(arglist__3501));
var p3 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3501)));
var ps = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3501)));
return G__3498__delegate(p1, p2, p3, ps);
});
G__3498.cljs$lang$arity$variadic = G__3498__delegate;
return G__3498;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljsrepl.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto__ = p.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto__ = p.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__3503__delegate = function (x,y,z,args){
var or__3943__auto__ = sp1.call(null,x,y,z);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.some.call(null,p,args);
}
};
var G__3503 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3503__delegate.call(this, x, y, z, args);
};
G__3503.cljs$lang$maxFixedArity = 3;
G__3503.cljs$lang$applyTo = (function (arglist__3504){
var x = cljsrepl.core.first(arglist__3504);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3504));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3504)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3504)));
return G__3503__delegate(x, y, z, args);
});
G__3503.cljs$lang$arity$variadic = G__3503__delegate;
return G__3503;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p2.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p1.call(null,z);
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p2.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__3505__delegate = function (x,y,z,args){
var or__3943__auto__ = sp2.call(null,x,y,z);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.some.call(null,(function (p1__3486_SHARP_){
var or__3943__auto____$1 = p1.call(null,p1__3486_SHARP_);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p2.call(null,p1__3486_SHARP_);
}
}),args);
}
};
var G__3505 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3505__delegate.call(this, x, y, z, args);
};
G__3505.cljs$lang$maxFixedArity = 3;
G__3505.cljs$lang$applyTo = (function (arglist__3506){
var x = cljsrepl.core.first(arglist__3506);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3506));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3506)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3506)));
return G__3505__delegate(x, y, z, args);
});
G__3505.cljs$lang$arity$variadic = G__3505__delegate;
return G__3505;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p3.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p1.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto__ = p1.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p3.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p1.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{var or__3943__auto____$5 = p3.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$5))
{return or__3943__auto____$5;
} else
{var or__3943__auto____$6 = p1.call(null,z);
if(cljsrepl.core.truth_(or__3943__auto____$6))
{return or__3943__auto____$6;
} else
{var or__3943__auto____$7 = p2.call(null,z);
if(cljsrepl.core.truth_(or__3943__auto____$7))
{return or__3943__auto____$7;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__3507__delegate = function (x,y,z,args){
var or__3943__auto__ = sp3.call(null,x,y,z);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.some.call(null,(function (p1__3487_SHARP_){
var or__3943__auto____$1 = p1.call(null,p1__3487_SHARP_);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p2.call(null,p1__3487_SHARP_);
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return p3.call(null,p1__3487_SHARP_);
}
}
}),args);
}
};
var G__3507 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3507__delegate.call(this, x, y, z, args);
};
G__3507.cljs$lang$maxFixedArity = 3;
G__3507.cljs$lang$applyTo = (function (arglist__3508){
var x = cljsrepl.core.first(arglist__3508);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3508));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3508)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3508)));
return G__3507__delegate(x, y, z, args);
});
G__3507.cljs$lang$arity$variadic = G__3507__delegate;
return G__3507;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__3509__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljsrepl.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljsrepl.core.some.call(null,(function (p1__3488_SHARP_){
return p1__3488_SHARP_.call(null,x);
}),ps__$1);
});
var spn__2 = (function (x,y){
return cljsrepl.core.some.call(null,(function (p1__3489_SHARP_){
var or__3943__auto__ = p1__3489_SHARP_.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p1__3489_SHARP_.call(null,y);
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){
return cljsrepl.core.some.call(null,(function (p1__3490_SHARP_){
var or__3943__auto__ = p1__3490_SHARP_.call(null,x);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1__3490_SHARP_.call(null,y);
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p1__3490_SHARP_.call(null,z);
}
}
}),ps__$1);
});
var spn__4 = (function() { 
var G__3510__delegate = function (x,y,z,args){
var or__3943__auto__ = spn.call(null,x,y,z);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.some.call(null,(function (p1__3491_SHARP_){
return cljsrepl.core.some.call(null,p1__3491_SHARP_,args);
}),ps__$1);
}
};
var G__3510 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3510__delegate.call(this, x, y, z, args);
};
G__3510.cljs$lang$maxFixedArity = 3;
G__3510.cljs$lang$applyTo = (function (arglist__3511){
var x = cljsrepl.core.first(arglist__3511);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3511));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3511)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3511)));
return G__3510__delegate(x, y, z, args);
});
G__3510.cljs$lang$arity$variadic = G__3510__delegate;
return G__3510;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__3509 = function (p1,p2,p3,var_args){
var ps = null;
if (replgoog.isDef(var_args)) {
  ps = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3509__delegate.call(this, p1, p2, p3, ps);
};
G__3509.cljs$lang$maxFixedArity = 3;
G__3509.cljs$lang$applyTo = (function (arglist__3512){
var p1 = cljsrepl.core.first(arglist__3512);
var p2 = cljsrepl.core.first(cljsrepl.core.next(arglist__3512));
var p3 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3512)));
var ps = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3512)));
return G__3509__delegate(p1, p2, p3, ps);
});
G__3509.cljs$lang$arity$variadic = G__3509__delegate;
return G__3509;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljsrepl.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.chunked_seq_QMARK_.call(null,s))
{var c = cljsrepl.core.chunk_first.call(null,s);
var size = cljsrepl.core.count.call(null,c);
var b = cljsrepl.core.chunk_buffer.call(null,size);
var n__2205__auto___3513 = size;
var i_3514 = 0;
while(true){
if((i_3514 < n__2205__auto___3513))
{cljsrepl.core.chunk_append.call(null,b,f.call(null,cljsrepl.core._nth.call(null,c,i_3514)));
{
var G__3515 = (i_3514 + 1);
i_3514 = G__3515;
continue;
}
} else
{}
break;
}
return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b),map.call(null,f,cljsrepl.core.chunk_rest.call(null,s)));
} else
{return cljsrepl.core.cons.call(null,f.call(null,cljsrepl.core.first.call(null,s)),map.call(null,f,cljsrepl.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s1 = cljsrepl.core.seq.call(null,c1);
var s2 = cljsrepl.core.seq.call(null,c2);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.cons.call(null,f.call(null,cljsrepl.core.first.call(null,s1),cljsrepl.core.first.call(null,s2)),map.call(null,f,cljsrepl.core.rest.call(null,s1),cljsrepl.core.rest.call(null,s2)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s1 = cljsrepl.core.seq.call(null,c1);
var s2 = cljsrepl.core.seq.call(null,c2);
var s3 = cljsrepl.core.seq.call(null,c3);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{var and__3941__auto____$1 = s2;
if(and__3941__auto____$1)
{return s3;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.cons.call(null,f.call(null,cljsrepl.core.first.call(null,s1),cljsrepl.core.first.call(null,s2),cljsrepl.core.first.call(null,s3)),map.call(null,f,cljsrepl.core.rest.call(null,s1),cljsrepl.core.rest.call(null,s2),cljsrepl.core.rest.call(null,s3)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__3516__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var ss = map.call(null,cljsrepl.core.seq,cs);
if(cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.identity,ss))
{return cljsrepl.core.cons.call(null,map.call(null,cljsrepl.core.first,ss),step.call(null,map.call(null,cljsrepl.core.rest,ss)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__3502_SHARP_){
return cljsrepl.core.apply.call(null,f,p1__3502_SHARP_);
}),step.call(null,cljsrepl.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3516 = function (f,c1,c2,c3,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3516__delegate.call(this, f, c1, c2, c3, colls);
};
G__3516.cljs$lang$maxFixedArity = 4;
G__3516.cljs$lang$applyTo = (function (arglist__3517){
var f = cljsrepl.core.first(arglist__3517);
var c1 = cljsrepl.core.first(cljsrepl.core.next(arglist__3517));
var c2 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3517)));
var c3 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3517))));
var colls = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3517))));
return G__3516__delegate(f, c1, c2, c3, colls);
});
G__3516.cljs$lang$arity$variadic = G__3516__delegate;
return G__3516;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljsrepl.core.take = (function take(n,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,s),take.call(null,(n - 1),cljsrepl.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljsrepl.core.drop = (function drop(n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljsrepl.core.seq.call(null,coll__$1);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = (n__$1 > 0);
if(and__3941__auto__)
{return s;
} else
{return and__3941__auto__;
}
})()))
{{
var G__3518 = (n__$1 - 1);
var G__3519 = cljsrepl.core.rest.call(null,s);
n__$1 = G__3518;
coll__$1 = G__3519;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljsrepl.core.LazySeq(null,false,(function (){
return step.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljsrepl.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljsrepl.core.map.call(null,(function (x,_){
return x;
}),s,cljsrepl.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljsrepl.core.take_last = (function take_last(n,coll){
var s = cljsrepl.core.seq.call(null,coll);
var lead = cljsrepl.core.seq.call(null,cljsrepl.core.drop.call(null,n,coll));
while(true){
if(lead)
{{
var G__3520 = cljsrepl.core.next.call(null,s);
var G__3521 = cljsrepl.core.next.call(null,lead);
s = G__3520;
lead = G__3521;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljsrepl.core.drop_while = (function drop_while(pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljsrepl.core.seq.call(null,coll__$1);
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = s;
if(and__3941__auto__)
{return pred__$1.call(null,cljsrepl.core.first.call(null,s));
} else
{return and__3941__auto__;
}
})()))
{{
var G__3522 = pred__$1;
var G__3523 = cljsrepl.core.rest.call(null,s);
pred__$1 = G__3522;
coll__$1 = G__3523;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljsrepl.core.LazySeq(null,false,(function (){
return step.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljsrepl.core.cycle = (function cycle(coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljsrepl.core.concat.call(null,s,cycle.call(null,s));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljsrepl.core.split_at = (function split_at(n,coll){
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.take.call(null,n,coll),cljsrepl.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljsrepl.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljsrepl.core.LazySeq(null,false,(function (){
return cljsrepl.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljsrepl.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljsrepl.core.replicate = (function replicate(n,x){
return cljsrepl.core.take.call(null,n,cljsrepl.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljsrepl.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljsrepl.core.LazySeq(null,false,(function (){
return cljsrepl.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljsrepl.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljsrepl.core.iterate = (function iterate(f,x){
return cljsrepl.core.cons.call(null,x,(new cljsrepl.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljsrepl.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s1 = cljsrepl.core.seq.call(null,c1);
var s2 = cljsrepl.core.seq.call(null,c2);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})())
{return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,s1),cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,s2),interleave.call(null,cljsrepl.core.rest.call(null,s1),cljsrepl.core.rest.call(null,s2))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__3524__delegate = function (c1,c2,colls){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var ss = cljsrepl.core.map.call(null,cljsrepl.core.seq,cljsrepl.core.conj.call(null,colls,c2,c1));
if(cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.identity,ss))
{return cljsrepl.core.concat.call(null,cljsrepl.core.map.call(null,cljsrepl.core.first,ss),cljsrepl.core.apply.call(null,interleave,cljsrepl.core.map.call(null,cljsrepl.core.rest,ss)));
} else
{return null;
}
}),null));
};
var G__3524 = function (c1,c2,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3524__delegate.call(this, c1, c2, colls);
};
G__3524.cljs$lang$maxFixedArity = 2;
G__3524.cljs$lang$applyTo = (function (arglist__3525){
var c1 = cljsrepl.core.first(arglist__3525);
var c2 = cljsrepl.core.first(cljsrepl.core.next(arglist__3525));
var colls = cljsrepl.core.rest(cljsrepl.core.next(arglist__3525));
return G__3524__delegate(c1, c2, colls);
});
G__3524.cljs$lang$arity$variadic = G__3524__delegate;
return G__3524;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljsrepl.core.interpose = (function interpose(sep,coll){
return cljsrepl.core.drop.call(null,1,cljsrepl.core.interleave.call(null,cljsrepl.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljsrepl.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4090__auto__)
{var coll__$1 = temp__4090__auto__;
return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,coll__$1),cat.call(null,cljsrepl.core.rest.call(null,coll__$1),colls__$1));
} else
{if(cljsrepl.core.seq.call(null,colls__$1))
{return cat.call(null,cljsrepl.core.first.call(null,colls__$1),cljsrepl.core.rest.call(null,colls__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljsrepl.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljsrepl.core.flatten1.call(null,cljsrepl.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__3526__delegate = function (f,coll,colls){
return cljsrepl.core.flatten1.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.map,f,coll,colls));
};
var G__3526 = function (f,coll,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3526__delegate.call(this, f, coll, colls);
};
G__3526.cljs$lang$maxFixedArity = 2;
G__3526.cljs$lang$applyTo = (function (arglist__3527){
var f = cljsrepl.core.first(arglist__3527);
var coll = cljsrepl.core.first(cljsrepl.core.next(arglist__3527));
var colls = cljsrepl.core.rest(cljsrepl.core.next(arglist__3527));
return G__3526__delegate(f, coll, colls);
});
G__3526.cljs$lang$arity$variadic = G__3526__delegate;
return G__3526;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljsrepl.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljsrepl.core.filter = (function filter(pred,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.chunked_seq_QMARK_.call(null,s))
{var c = cljsrepl.core.chunk_first.call(null,s);
var size = cljsrepl.core.count.call(null,c);
var b = cljsrepl.core.chunk_buffer.call(null,size);
var n__2205__auto___3528 = size;
var i_3529 = 0;
while(true){
if((i_3529 < n__2205__auto___3528))
{if(cljsrepl.core.truth_(pred.call(null,cljsrepl.core._nth.call(null,c,i_3529))))
{cljsrepl.core.chunk_append.call(null,b,cljsrepl.core._nth.call(null,c,i_3529));
} else
{}
{
var G__3530 = (i_3529 + 1);
i_3529 = G__3530;
continue;
}
} else
{}
break;
}
return cljsrepl.core.chunk_cons.call(null,cljsrepl.core.chunk.call(null,b),filter.call(null,pred,cljsrepl.core.chunk_rest.call(null,s)));
} else
{var f = cljsrepl.core.first.call(null,s);
var r = cljsrepl.core.rest.call(null,s);
if(cljsrepl.core.truth_(pred.call(null,f)))
{return cljsrepl.core.cons.call(null,f,filter.call(null,pred,r));
} else
{return filter.call(null,pred,r);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljsrepl.core.remove = (function remove(pred,coll){
return cljsrepl.core.filter.call(null,cljsrepl.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljsrepl.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljsrepl.core.LazySeq(null,false,(function (){
return cljsrepl.core.cons.call(null,node,(cljsrepl.core.truth_(branch_QMARK_.call(null,node))?cljsrepl.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljsrepl.core.flatten = (function flatten(x){
return cljsrepl.core.filter.call(null,(function (p1__3531_SHARP_){
return !(cljsrepl.core.sequential_QMARK_.call(null,p1__3531_SHARP_));
}),cljsrepl.core.rest.call(null,cljsrepl.core.tree_seq.call(null,cljsrepl.core.sequential_QMARK_,cljsrepl.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljsrepl.core.into = (function into(to,from){
if((function (){var G__3533 = to;
if(G__3533)
{if((function (){var or__3943__auto__ = (G__3533.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3533.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__3533.cljs$lang$protocol_mask$partition1$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IEditableCollection,G__3533);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IEditableCollection,G__3533);
}
})())
{return cljsrepl.core.persistent_BANG_.call(null,cljsrepl.core.reduce.call(null,cljsrepl.core._conj_BANG_,cljsrepl.core.transient$.call(null,to),from));
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljsrepl.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljsrepl.core.persistent_BANG_.call(null,cljsrepl.core.reduce.call(null,(function (v,o){
return cljsrepl.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljsrepl.core.into.call(null,cljsrepl.core.PersistentVector.EMPTY,cljsrepl.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljsrepl.core.into.call(null,cljsrepl.core.PersistentVector.EMPTY,cljsrepl.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__3534__delegate = function (f,c1,c2,c3,colls){
return cljsrepl.core.into.call(null,cljsrepl.core.PersistentVector.EMPTY,cljsrepl.core.apply.call(null,cljsrepl.core.map,f,c1,c2,c3,colls));
};
var G__3534 = function (f,c1,c2,c3,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3534__delegate.call(this, f, c1, c2, c3, colls);
};
G__3534.cljs$lang$maxFixedArity = 4;
G__3534.cljs$lang$applyTo = (function (arglist__3535){
var f = cljsrepl.core.first(arglist__3535);
var c1 = cljsrepl.core.first(cljsrepl.core.next(arglist__3535));
var c2 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3535)));
var c3 = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3535))));
var colls = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3535))));
return G__3534__delegate(f, c1, c2, c3, colls);
});
G__3534.cljs$lang$arity$variadic = G__3534__delegate;
return G__3534;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljsrepl.core.filterv = (function filterv(pred,coll){
return cljsrepl.core.persistent_BANG_.call(null,cljsrepl.core.reduce.call(null,(function (v,o){
if(cljsrepl.core.truth_(pred.call(null,o)))
{return cljsrepl.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljsrepl.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = cljsrepl.core.take.call(null,n,s);
if((n === cljsrepl.core.count.call(null,p)))
{return cljsrepl.core.cons.call(null,p,partition.call(null,n,step,cljsrepl.core.drop.call(null,step,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = cljsrepl.core.take.call(null,n,s);
if((n === cljsrepl.core.count.call(null,p)))
{return cljsrepl.core.cons.call(null,p,partition.call(null,n,step,pad,cljsrepl.core.drop.call(null,step,s)));
} else
{return cljsrepl.core.list.call(null,cljsrepl.core.take.call(null,n,cljsrepl.core.concat.call(null,p,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljsrepl.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljsrepl.core.reduce.call(null,cljsrepl.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljsrepl.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljsrepl.core.seq.call(null,ks);
while(true){
if(ks__$1)
{var m__$2 = cljsrepl.core._lookup.call(null,m__$1,cljsrepl.core.first.call(null,ks__$1),sentinel);
if((sentinel === m__$2))
{return not_found;
} else
{{
var G__3536 = sentinel;
var G__3537 = m__$2;
var G__3538 = cljsrepl.core.next.call(null,ks__$1);
sentinel = G__3536;
m__$1 = G__3537;
ks__$1 = G__3538;
continue;
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljsrepl.core.assoc_in = (function assoc_in(m,p__3539,v){
var vec__3541 = p__3539;
var k = cljsrepl.core.nth.call(null,vec__3541,0,null);
var ks = cljsrepl.core.nthnext.call(null,vec__3541,1);
if(cljsrepl.core.truth_(ks))
{return cljsrepl.core.assoc.call(null,m,k,assoc_in.call(null,cljsrepl.core._lookup.call(null,m,k,null),ks,v));
} else
{return cljsrepl.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljsrepl.core.update_in = (function() { 
var update_in__delegate = function (m,p__3542,f,args){
var vec__3544 = p__3542;
var k = cljsrepl.core.nth.call(null,vec__3544,0,null);
var ks = cljsrepl.core.nthnext.call(null,vec__3544,1);
if(cljsrepl.core.truth_(ks))
{return cljsrepl.core.assoc.call(null,m,k,cljsrepl.core.apply.call(null,update_in,cljsrepl.core._lookup.call(null,m,k,null),ks,f,args));
} else
{return cljsrepl.core.assoc.call(null,m,k,cljsrepl.core.apply.call(null,f,cljsrepl.core._lookup.call(null,m,k,null),args));
}
};
var update_in = function (m,p__3542,f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3542, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3545){
var m = cljsrepl.core.first(arglist__3545);
var p__3542 = cljsrepl.core.first(cljsrepl.core.next(arglist__3545));
var f = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3545)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3545)));
return update_in__delegate(m, p__3542, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;
replgoog.provide('cljsrepl.core.Vector');

/**
* @constructor
*/
cljsrepl.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljsrepl.core.Vector.cljs$lang$type = true;
cljsrepl.core.Vector.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Vector");
});
cljsrepl.core.Vector.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Vector");
});
cljsrepl.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljsrepl.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljsrepl.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var new_array = self__.array.slice();
(new_array[k] = v);
return (new cljsrepl.core.Vector(self__.meta,new_array,null));
});
cljsrepl.core.Vector.prototype.call = (function() {
var G__3550 = null;
var G__3550__2 = (function (this_sym3548,k){
var self__ = this;
var this_sym3548__$1 = this;
var coll = this_sym3548__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3550__3 = (function (this_sym3549,k,not_found){
var self__ = this;
var this_sym3549__$1 = this;
var coll = this_sym3549__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3550 = function(this_sym3549,k,not_found){
switch(arguments.length){
case 2:
return G__3550__2.call(this,this_sym3549,k);
case 3:
return G__3550__3.call(this,this_sym3549,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3550;
})()
;
cljsrepl.core.Vector.prototype.apply = (function (this_sym3546,args3547){
var self__ = this;
return this_sym3546.call.apply(this_sym3546,[this_sym3546].concat(args3547.slice()));
});
cljsrepl.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var new_array = self__.array.slice();
new_array.push(o);
return (new cljsrepl.core.Vector(self__.meta,new_array,null));
});
cljsrepl.core.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,self__.array,f);
});
cljsrepl.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,self__.array,f,start);
});
cljsrepl.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var vector_seq = (function vector_seq(i){
return (new cljsrepl.core.LazySeq(null,false,(function (){
if((i < self__.array.length))
{return cljsrepl.core.cons.call(null,(self__.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq.call(null,0);
} else
{return null;
}
});
cljsrepl.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.array.length;
});
cljsrepl.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var count = self__.array.length;
if((count > 0))
{return (self__.array[(count - 1)]);
} else
{return null;
}
});
cljsrepl.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var new_array = self__.array.slice();
new_array.pop();
return (new cljsrepl.core.Vector(self__.meta,new_array,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljsrepl.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljsrepl.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.Vector(meta__$1,self__.array,self__.__hash));
});
cljsrepl.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})())
{return (self__.array[n]);
} else
{return null;
}
});
cljsrepl.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})())
{return (self__.array[n]);
} else
{return not_found;
}
});
cljsrepl.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.Vector.EMPTY,self__.meta);
});
cljsrepl.core.Vector.EMPTY = (new cljsrepl.core.Vector(null,[],0));
cljsrepl.core.Vector.fromArray = (function (xs){
return (new cljsrepl.core.Vector(null,xs,null));
});
replgoog.provide('cljsrepl.core.VectorNode');

/**
* @constructor
*/
cljsrepl.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljsrepl.core.VectorNode.cljs$lang$type = true;
cljsrepl.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2004__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/VectorNode");
});
cljsrepl.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__2004__auto__,writer__2005__auto__,opts__2006__auto__){
return cljsrepl.core._write.call(null,writer__2005__auto__,"cljsrepl.core/VectorNode");
});
cljsrepl.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljsrepl.core.VectorNode(edit,cljsrepl.core.make_array.call(null,32)));
});
cljsrepl.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljsrepl.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljsrepl.core.pv_clone_node = (function pv_clone_node(node){
return (new cljsrepl.core.VectorNode(node.edit,node.arr.slice()));
});
cljsrepl.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < 32))
{return 0;
} else
{return (((cnt - 1) >>> 5) << 5);
}
});
cljsrepl.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === 0))
{return ret;
} else
{var embed = ret;
var r = cljsrepl.core.pv_fresh_node.call(null,edit);
var _ = cljsrepl.core.pv_aset.call(null,r,0,embed);
{
var G__3551 = (ll - 5);
var G__3552 = r;
ll = G__3551;
ret = G__3552;
continue;
}
}
break;
}
});
cljsrepl.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljsrepl.core.pv_clone_node.call(null,parent);
var subidx = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljsrepl.core.pv_aset.call(null,ret,subidx,tailnode);
return ret;
} else
{var child = cljsrepl.core.pv_aget.call(null,parent,subidx);
if(!((child == null)))
{var node_to_insert = push_tail.call(null,pv,(level - 5),child,tailnode);
cljsrepl.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljsrepl.core.new_path.call(null,null,(level - 5),tailnode);
cljsrepl.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
}
}
});
cljsrepl.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < pv.cnt);
} else
{return and__3941__auto__;
}
})())
{if((i >= cljsrepl.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node = pv.root;
var level = pv.shift;
while(true){
if((level > 0))
{{
var G__3553 = cljsrepl.core.pv_aget.call(null,node,((i >>> level) & 31));
var G__3554 = (level - 5);
node = G__3553;
level = G__3554;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljsrepl.core.str("No item "),cljsrepl.core.str(i),cljsrepl.core.str(" in vector of length "),cljsrepl.core.str(pv.cnt)].join('')));
}
});
cljsrepl.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljsrepl.core.pv_clone_node.call(null,node);
if((level === 0))
{cljsrepl.core.pv_aset.call(null,ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);
cljsrepl.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - 5),cljsrepl.core.pv_aget.call(null,node,subidx),i,val));
return ret;
}
});
cljsrepl.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = pop_tail.call(null,pv,(level - 5),cljsrepl.core.pv_aget.call(null,node,subidx));
if((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{var ret = cljsrepl.core.pv_clone_node.call(null,node);
cljsrepl.core.pv_aset.call(null,ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret = cljsrepl.core.pv_clone_node.call(null,node);
cljsrepl.core.pv_aset.call(null,ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});
replgoog.provide('cljsrepl.core.PersistentVector');

/**
* @constructor
*/
cljsrepl.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljsrepl.core.PersistentVector.cljs$lang$type = true;
cljsrepl.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentVector");
});
cljsrepl.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentVector");
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljsrepl.core.TransientVector(self__.cnt,self__.shift,cljsrepl.core.tv_editable_root.call(null,self__.root),cljsrepl.core.tv_editable_tail.call(null,self__.tail)));
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= k);
if(and__3941__auto__)
{return (k < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{if((cljsrepl.core.tail_off.call(null,coll) <= k))
{var new_tail = self__.tail.slice();
(new_tail[(k & 31)] = v);
return (new cljsrepl.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljsrepl.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljsrepl.core.do_assoc.call(null,coll,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljsrepl.core.str("Index "),cljsrepl.core.str(k),cljsrepl.core.str(" out of bounds  [0,"),cljsrepl.core.str(self__.cnt),cljsrepl.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljsrepl.core.PersistentVector.prototype.call = (function() {
var G__3559 = null;
var G__3559__2 = (function (this_sym3557,k){
var self__ = this;
var this_sym3557__$1 = this;
var coll = this_sym3557__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3559__3 = (function (this_sym3558,k,not_found){
var self__ = this;
var this_sym3558__$1 = this;
var coll = this_sym3558__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3559 = function(this_sym3558,k,not_found){
switch(arguments.length){
case 2:
return G__3559__2.call(this,this_sym3558,k);
case 3:
return G__3559__3.call(this,this_sym3558,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3559;
})()
;
cljsrepl.core.PersistentVector.prototype.apply = (function (this_sym3555,args3556){
var self__ = this;
return this_sym3555.call.apply(this_sym3555,[this_sym3555].concat(args3556.slice()));
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var step_init = [0,init];
var i = 0;
while(true){
if((i < self__.cnt))
{var arr = cljsrepl.core.array_for.call(null,v,i);
var len = arr.length;
var init__$1 = (function (){var j = 0;
var init__$1 = (step_init[1]);
while(true){
if((j < len))
{var init__$2 = f.call(null,init__$1,(j + i),(arr[j]));
if(cljsrepl.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{{
var G__3560 = (j + 1);
var G__3561 = init__$2;
j = G__3560;
init__$1 = G__3561;
continue;
}
}
} else
{(step_init[0] = len);
(step_init[1] = init__$1);
return init__$1;
}
break;
}
})();
if(cljsrepl.core.reduced_QMARK_.call(null,init__$1))
{return cljsrepl.core.deref.call(null,init__$1);
} else
{{
var G__3562 = (i + (step_init[0]));
i = G__3562;
continue;
}
}
} else
{return (step_init[1]);
}
break;
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(((self__.cnt - cljsrepl.core.tail_off.call(null,coll)) < 32))
{var new_tail = self__.tail.slice();
new_tail.push(o);
return (new cljsrepl.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljsrepl.core.pv_fresh_node.call(null,null);
cljsrepl.core.pv_aset.call(null,n_r,0,self__.root);
cljsrepl.core.pv_aset.call(null,n_r,1,cljsrepl.core.new_path.call(null,null,self__.shift,(new cljsrepl.core.VectorNode(null,self__.tail))));
return n_r;
})():cljsrepl.core.push_tail.call(null,coll,self__.shift,self__.root,(new cljsrepl.core.VectorNode(null,self__.tail))));
return (new cljsrepl.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return (new cljsrepl.core.RSeq(coll,(self__.cnt - 1),null));
} else
{return cljsrepl.core.List.EMPTY;
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljsrepl.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,v,f);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,v,f,start);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{return null;
} else
{return cljsrepl.core.chunked_seq.call(null,coll,0,0);
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(self__.cnt - 1));
} else
{return null;
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljsrepl.core._with_meta.call(null,cljsrepl.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - cljsrepl.core.tail_off.call(null,coll))))
{return (new cljsrepl.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail = cljsrepl.core.array_for.call(null,coll,(self__.cnt - 2));
var nr = cljsrepl.core.pop_tail.call(null,coll,self__.shift,self__.root);
var new_root = (((nr == null))?cljsrepl.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - 1);
if((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (cljsrepl.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3941__auto__;
}
})())
{return (new cljsrepl.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),cljsrepl.core.pv_aget.call(null,new_root,0),new_tail,null));
} else
{return (new cljsrepl.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return (cljsrepl.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentVector.EMPTY,self__.meta);
});
cljsrepl.core.PersistentVector.EMPTY_NODE = cljsrepl.core.pv_fresh_node.call(null,null);
cljsrepl.core.PersistentVector.EMPTY = (new cljsrepl.core.PersistentVector(null,0,5,cljsrepl.core.PersistentVector.EMPTY_NODE,[],0));
cljsrepl.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = (((no_clone === true))?xs:xs.slice());
if((l < 32))
{return (new cljsrepl.core.PersistentVector(null,l,5,cljsrepl.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);
var v = (new cljsrepl.core.PersistentVector(null,32,5,cljsrepl.core.PersistentVector.EMPTY_NODE,node,null));
var i = 32;
var out = cljsrepl.core._as_transient.call(null,v);
while(true){
if((i < l))
{{
var G__3563 = (i + 1);
var G__3564 = cljsrepl.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__3563;
out = G__3564;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
cljsrepl.core.vec = (function vec(coll){
return cljsrepl.core._persistent_BANG_.call(null,cljsrepl.core.reduce.call(null,cljsrepl.core._conj_BANG_,cljsrepl.core._as_transient.call(null,cljsrepl.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljsrepl.core.vector = (function() { 
var vector__delegate = function (args){
return cljsrepl.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3565){
var args = cljsrepl.core.seq(arglist__3565);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;
replgoog.provide('cljsrepl.core.ChunkedSeq');

/**
* @constructor
*/
cljsrepl.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljsrepl.core.ChunkedSeq.cljs$lang$type = true;
cljsrepl.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ChunkedSeq");
});
cljsrepl.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ChunkedSeq");
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = cljsrepl.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return null;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return (self__.node[self__.off]);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = cljsrepl.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return cljsrepl.core.List.EMPTY;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljsrepl.core._count.call(null,self__.vec)))?cljsrepl.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return null;
} else
{return s;
}
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return cljsrepl.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentVector.EMPTY,self__.meta);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.array_chunk.call(null,self__.node,self__.off);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljsrepl.core._count.call(null,self__.vec)))?cljsrepl.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return cljsrepl.core.List.EMPTY;
} else
{return s;
}
});
cljsrepl.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljsrepl.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljsrepl.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;
replgoog.provide('cljsrepl.core.Subvec');

/**
* @constructor
*/
cljsrepl.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljsrepl.core.Subvec.cljs$lang$type = true;
cljsrepl.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Subvec");
});
cljsrepl.core.Subvec.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Subvec");
});
cljsrepl.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljsrepl.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljsrepl.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var v_pos = (self__.start + key);
return (new cljsrepl.core.Subvec(self__.meta,cljsrepl.core._assoc.call(null,self__.v,v_pos,val),self__.start,((self__.end > (v_pos + 1)) ? self__.end : (v_pos + 1)),null));
});
cljsrepl.core.Subvec.prototype.call = (function() {
var G__3570 = null;
var G__3570__2 = (function (this_sym3568,k){
var self__ = this;
var this_sym3568__$1 = this;
var coll = this_sym3568__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3570__3 = (function (this_sym3569,k,not_found){
var self__ = this;
var this_sym3569__$1 = this;
var coll = this_sym3569__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3570 = function(this_sym3569,k,not_found){
switch(arguments.length){
case 2:
return G__3570__2.call(this,this_sym3569,k);
case 3:
return G__3570__3.call(this,this_sym3569,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3570;
})()
;
cljsrepl.core.Subvec.prototype.apply = (function (this_sym3566,args3567){
var self__ = this;
return this_sym3566.call.apply(this_sym3566,[this_sym3566].concat(args3567.slice()));
});
cljsrepl.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljsrepl.core.Subvec(self__.meta,cljsrepl.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + 1),null));
});
cljsrepl.core.Subvec.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,coll,f);
});
cljsrepl.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,coll,f,start__$1);
});
cljsrepl.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var subvec_seq = (function subvec_seq(i){
if((i === self__.end))
{return null;
} else
{return cljsrepl.core.cons.call(null,cljsrepl.core._nth.call(null,self__.v,i),(new cljsrepl.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq.call(null,self__.start);
});
cljsrepl.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.end - self__.start);
});
cljsrepl.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._nth.call(null,self__.v,(self__.end - 1));
});
cljsrepl.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljsrepl.core.Subvec(self__.meta,self__.v,self__.start,(self__.end - 1),null));
}
});
cljsrepl.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljsrepl.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.Subvec(meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});
cljsrepl.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return cljsrepl.core._nth.call(null,self__.v,(self__.start + n));
});
cljsrepl.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
return cljsrepl.core._nth.call(null,self__.v,(self__.start + n),not_found);
});
cljsrepl.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.Vector.EMPTY,self__.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljsrepl.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljsrepl.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljsrepl.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljsrepl.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljsrepl.core.VectorNode(edit,node.arr.slice()));
}
});
cljsrepl.core.tv_editable_root = (function tv_editable_root(node){
return (new cljsrepl.core.VectorNode({},node.arr.slice()));
});
cljsrepl.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = cljsrepl.core.make_array.call(null,32);
cljsrepl.core.array_copy.call(null,tl,0,ret,0,tl.length);
return ret;
});
cljsrepl.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljsrepl.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx = (((tv.cnt - 1) >>> level) & 31);
cljsrepl.core.pv_aset.call(null,ret,subidx,(((level === 5))?tail_node:(function (){var child = cljsrepl.core.pv_aget.call(null,ret,subidx);
if(!((child == null)))
{return tv_push_tail.call(null,tv,(level - 5),child,tail_node);
} else
{return cljsrepl.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
cljsrepl.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljsrepl.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = tv_pop_tail.call(null,tv,(level - 5),cljsrepl.core.pv_aget.call(null,node__$1,subidx));
if((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{cljsrepl.core.pv_aset.call(null,node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{cljsrepl.core.pv_aset.call(null,node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljsrepl.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < tv.cnt);
} else
{return and__3941__auto__;
}
})())
{if((i >= cljsrepl.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > 0))
{{
var G__3571 = cljsrepl.core.tv_ensure_editable.call(null,root.edit,cljsrepl.core.pv_aget.call(null,node,((i >>> level) & 31)));
var G__3572 = (level - 5);
node = G__3571;
level = G__3572;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljsrepl.core.str("No item "),cljsrepl.core.str(i),cljsrepl.core.str(" in transient vector of length "),cljsrepl.core.str(tv.cnt)].join('')));
}
});
replgoog.provide('cljsrepl.core.TransientVector');

/**
* @constructor
*/
cljsrepl.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljsrepl.core.TransientVector.cljs$lang$type = true;
cljsrepl.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/TransientVector");
});
cljsrepl.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/TransientVector");
});
cljsrepl.core.TransientVector.prototype.call = (function() {
var G__3577 = null;
var G__3577__2 = (function (this_sym3575,k){
var self__ = this;
var this_sym3575__$1 = this;
var coll = this_sym3575__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3577__3 = (function (this_sym3576,k,not_found){
var self__ = this;
var this_sym3576__$1 = this;
var coll = this_sym3576__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3577 = function(this_sym3576,k,not_found){
switch(arguments.length){
case 2:
return G__3577__2.call(this,this_sym3576,k);
case 3:
return G__3577__3.call(this,this_sym3576,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3577;
})()
;
cljsrepl.core.TransientVector.prototype.apply = (function (this_sym3573,args3574){
var self__ = this;
return this_sym3573.call.apply(this_sym3573,[this_sym3573].concat(args3574.slice()));
});
cljsrepl.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljsrepl.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljsrepl.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if(self__.root.edit)
{return (cljsrepl.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljsrepl.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljsrepl.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljsrepl.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
if(self__.root.edit)
{if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{if((cljsrepl.core.tail_off.call(null,tcoll) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root = (function go(level,node){
var node__$1 = cljsrepl.core.tv_ensure_editable.call(null,self__.root.edit,node);
if((level === 0))
{cljsrepl.core.pv_aset.call(null,node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);
cljsrepl.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - 5),cljsrepl.core.pv_aget.call(null,node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);
self__.root = new_root;
return tcoll;
}
} else
{if((n === self__.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljsrepl.core.str("Index "),cljsrepl.core.str(n),cljsrepl.core.str(" out of bounds for TransientVector of length"),cljsrepl.core.str(self__.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljsrepl.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
return tcoll;
} else
{if((((self__.cnt - 1) & 31) > 0))
{self__.cnt = (self__.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail = cljsrepl.core.editable_array_for.call(null,tcoll,(self__.cnt - 2));
var new_root = (function (){var nr = cljsrepl.core.tv_pop_tail.call(null,tcoll,self__.shift,self__.root);
if(!((nr == null)))
{return nr;
} else
{return (new cljsrepl.core.VectorNode(self__.root.edit,cljsrepl.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (cljsrepl.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3941__auto__;
}
})())
{var new_root__$1 = cljsrepl.core.tv_ensure_editable.call(null,self__.root.edit,cljsrepl.core.pv_aget.call(null,new_root,0));
self__.root = new_root__$1;
self__.shift = (self__.shift - 5);
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljsrepl.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljsrepl.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(self__.root.edit)
{if(((self__.cnt - cljsrepl.core.tail_off.call(null,tcoll)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var tail_node = (new cljsrepl.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = cljsrepl.core.make_array.call(null,32);
(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = cljsrepl.core.make_array.call(null,32);
var new_shift = (self__.shift + 5);
(new_root_array[0] = self__.root);
(new_root_array[1] = cljsrepl.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));
self__.root = (new cljsrepl.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var new_root = cljsrepl.core.tv_push_tail.call(null,tcoll,self__.shift,self__.root,tail_node);
self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljsrepl.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljsrepl.core.tail_off.call(null,tcoll));
var trimmed_tail = cljsrepl.core.make_array.call(null,len);
cljsrepl.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,len);
return (new cljsrepl.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
replgoog.provide('cljsrepl.core.PersistentQueueSeq');

/**
* @constructor
*/
cljsrepl.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljsrepl.core.PersistentQueueSeq.cljs$lang$type = true;
cljsrepl.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentQueueSeq");
});
cljsrepl.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentQueueSeq");
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._first.call(null,self__.front);
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var temp__4090__auto__ = cljsrepl.core.next.call(null,self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new cljsrepl.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljsrepl.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
replgoog.provide('cljsrepl.core.PersistentQueue');

/**
* @constructor
*/
cljsrepl.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljsrepl.core.PersistentQueue.cljs$lang$type = true;
cljsrepl.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentQueue");
});
cljsrepl.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentQueue");
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(cljsrepl.core.truth_(self__.front))
{return (new cljsrepl.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,cljsrepl.core.conj.call(null,(function (){var or__3943__auto__ = self__.rear;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljsrepl.core.PersistentQueue(self__.meta,(self__.count + 1),cljsrepl.core.conj.call(null,self__.front,o),cljsrepl.core.PersistentVector.EMPTY,null));
}
});
cljsrepl.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var rear__$1 = cljsrepl.core.seq.call(null,self__.rear);
if(cljsrepl.core.truth_((function (){var or__3943__auto__ = self__.front;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljsrepl.core.PersistentQueueSeq(null,self__.front,cljsrepl.core.seq.call(null,rear__$1),null));
} else
{return null;
}
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._first.call(null,self__.front);
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if(cljsrepl.core.truth_(self__.front))
{var temp__4090__auto__ = cljsrepl.core.next.call(null,self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new cljsrepl.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new cljsrepl.core.PersistentQueue(self__.meta,(self__.count - 1),cljsrepl.core.seq.call(null,self__.rear),cljsrepl.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.first.call(null,self__.front);
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.rest.call(null,cljsrepl.core.seq.call(null,coll));
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.PersistentQueue.EMPTY;
});
cljsrepl.core.PersistentQueue.EMPTY = (new cljsrepl.core.PersistentQueue(null,0,null,cljsrepl.core.PersistentVector.EMPTY,0));
replgoog.provide('cljsrepl.core.NeverEquiv');

/**
* @constructor
*/
cljsrepl.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljsrepl.core.NeverEquiv.cljs$lang$type = true;
cljsrepl.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/NeverEquiv");
});
cljsrepl.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/NeverEquiv");
});
cljsrepl.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return false;
});
cljsrepl.core.never_equiv = (new cljsrepl.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljsrepl.core.equiv_map = (function equiv_map(x,y){
return cljsrepl.core.boolean$.call(null,((cljsrepl.core.map_QMARK_.call(null,y))?(((cljsrepl.core.count.call(null,x) === cljsrepl.core.count.call(null,y)))?cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.identity,cljsrepl.core.map.call(null,(function (xkv){
return cljsrepl.core._EQ_.call(null,cljsrepl.core._lookup.call(null,y,cljsrepl.core.first.call(null,xkv),cljsrepl.core.never_equiv),cljsrepl.core.second.call(null,xkv));
}),x)):null):null));
});
cljsrepl.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = 0;
while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__3578 = (i + incr);
i = G__3578;
continue;
}
}
} else
{return null;
}
break;
}
});
cljsrepl.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljsrepl.core.hash.call(null,a);
var b__$1 = cljsrepl.core.hash.call(null,b);
if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljsrepl.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var out = cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentHashMap.EMPTY,cljsrepl.core.meta.call(null,m));
var i = 0;
var out__$1 = cljsrepl.core.transient$.call(null,out);
while(true){
if((i < len))
{var k__$1 = (ks[i]);
{
var G__3579 = (i + 1);
var G__3580 = cljsrepl.core.assoc_BANG_.call(null,out__$1,k__$1,(so[k__$1]));
i = G__3579;
out__$1 = G__3580;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,cljsrepl.core.assoc_BANG_.call(null,out__$1,k,v));
}
break;
}
});
cljsrepl.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = {};
var l = ks.length;
var i_3582 = 0;
while(true){
if((i_3582 < l))
{var k_3583 = (ks[i_3582]);
(new_obj[k_3583] = (obj[k_3583]));
{
var G__3584 = (i_3582 + 1);
i_3582 = G__3584;
continue;
}
} else
{}
break;
}
return new_obj;
});
replgoog.provide('cljsrepl.core.ObjMap');

/**
* @constructor
*/
cljsrepl.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljsrepl.core.ObjMap.cljs$lang$type = true;
cljsrepl.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ObjMap");
});
cljsrepl.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ObjMap");
});
cljsrepl.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.transient$.call(null,cljsrepl.core.into.call(null,cljsrepl.core.hash_map.call(null),coll));
});
cljsrepl.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_imap.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljsrepl.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = replgoog.isString(k);
if(and__3941__auto__)
{return !((cljsrepl.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljsrepl.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if(replgoog.isString(k))
{if((function (){var or__3943__auto__ = (self__.update_count > cljsrepl.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (self__.keys.length >= cljsrepl.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljsrepl.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljsrepl.core.scan_array.call(null,1,k,self__.keys) == null)))
{var new_strobj = cljsrepl.core.obj_clone.call(null,self__.strobj,self__.keys);
(new_strobj[k] = v);
return (new cljsrepl.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = cljsrepl.core.obj_clone.call(null,self__.strobj,self__.keys);
var new_keys = self__.keys.slice();
(new_strobj[k] = v);
new_keys.push(k);
return (new cljsrepl.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return cljsrepl.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljsrepl.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3941__auto__ = replgoog.isString(k);
if(and__3941__auto__)
{return !((cljsrepl.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{return true;
} else
{return false;
}
});
cljsrepl.core.ObjMap.prototype.call = (function() {
var G__3589 = null;
var G__3589__2 = (function (this_sym3587,k){
var self__ = this;
var this_sym3587__$1 = this;
var coll = this_sym3587__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3589__3 = (function (this_sym3588,k,not_found){
var self__ = this;
var this_sym3588__$1 = this;
var coll = this_sym3588__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3589 = function(this_sym3588,k,not_found){
switch(arguments.length){
case 2:
return G__3589__2.call(this,this_sym3588,k);
case 3:
return G__3589__3.call(this,this_sym3588,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3589;
})()
;
cljsrepl.core.ObjMap.prototype.apply = (function (this_sym3585,args3586){
var self__ = this;
return this_sym3585.call.apply(this_sym3585,[this_sym3585].concat(args3586.slice()));
});
cljsrepl.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljsrepl.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljsrepl.core._nth.call(null,entry,0),cljsrepl.core._nth.call(null,entry,1));
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,coll,entry);
}
});
cljsrepl.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.keys.length > 0))
{return cljsrepl.core.map.call(null,(function (p1__3581_SHARP_){
return cljsrepl.core.vector.call(null,p1__3581_SHARP_,(self__.strobj[p1__3581_SHARP_]));
}),self__.keys.sort(cljsrepl.core.obj_map_compare_keys));
} else
{return null;
}
});
cljsrepl.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.keys.length;
});
cljsrepl.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_map.call(null,coll,other);
});
cljsrepl.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljsrepl.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.ObjMap.EMPTY,self__.meta);
});
cljsrepl.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3941__auto__ = replgoog.isString(k);
if(and__3941__auto__)
{return !((cljsrepl.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{var new_keys = self__.keys.slice();
var new_strobj = cljsrepl.core.obj_clone.call(null,self__.strobj,self__.keys);
new_keys.splice(cljsrepl.core.scan_array.call(null,1,k,new_keys),1);
cljsrepl.core.js_delete.call(null,new_strobj,k);
return (new cljsrepl.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll;
}
});
cljsrepl.core.ObjMap.EMPTY = (new cljsrepl.core.ObjMap(null,[],{},0,0));
cljsrepl.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljsrepl.core.ObjMap.fromObject = (function (ks,obj){
return (new cljsrepl.core.ObjMap(null,ks,obj,0,null));
});
replgoog.provide('cljsrepl.core.HashMap');

/**
* @constructor
*/
cljsrepl.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljsrepl.core.HashMap.cljs$lang$type = true;
cljsrepl.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/HashMap");
});
cljsrepl.core.HashMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/HashMap");
});
cljsrepl.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_imap.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljsrepl.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var bucket = (self__.hashobj[cljsrepl.core.hash.call(null,k)]);
var i = (cljsrepl.core.truth_(bucket)?cljsrepl.core.scan_array.call(null,2,k,bucket):null);
if(cljsrepl.core.truth_(i))
{return (bucket[(i + 1)]);
} else
{return not_found;
}
});
cljsrepl.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var h = cljsrepl.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
if(cljsrepl.core.truth_(bucket))
{var new_bucket = bucket.slice();
var new_hashobj = replgoog.object.clone(self__.hashobj);
(new_hashobj[h] = new_bucket);
var temp__4090__auto__ = cljsrepl.core.scan_array.call(null,2,k,new_bucket);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
(new_bucket[(i + 1)] = v);
return (new cljsrepl.core.HashMap(self__.meta,self__.count,new_hashobj,null));
} else
{new_bucket.push(k,v);
return (new cljsrepl.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
} else
{var new_hashobj = replgoog.object.clone(self__.hashobj);
(new_hashobj[h] = [k,v]);
return (new cljsrepl.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
});
cljsrepl.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var bucket = (self__.hashobj[cljsrepl.core.hash.call(null,k)]);
var i = (cljsrepl.core.truth_(bucket)?cljsrepl.core.scan_array.call(null,2,k,bucket):null);
if(cljsrepl.core.truth_(i))
{return true;
} else
{return false;
}
});
cljsrepl.core.HashMap.prototype.call = (function() {
var G__3595 = null;
var G__3595__2 = (function (this_sym3593,k){
var self__ = this;
var this_sym3593__$1 = this;
var coll = this_sym3593__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3595__3 = (function (this_sym3594,k,not_found){
var self__ = this;
var this_sym3594__$1 = this;
var coll = this_sym3594__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3595 = function(this_sym3594,k,not_found){
switch(arguments.length){
case 2:
return G__3595__2.call(this,this_sym3594,k);
case 3:
return G__3595__3.call(this,this_sym3594,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3595;
})()
;
cljsrepl.core.HashMap.prototype.apply = (function (this_sym3591,args3592){
var self__ = this;
return this_sym3591.call.apply(this_sym3591,[this_sym3591].concat(args3592.slice()));
});
cljsrepl.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljsrepl.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljsrepl.core._nth.call(null,entry,0),cljsrepl.core._nth.call(null,entry,1));
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,coll,entry);
}
});
cljsrepl.core.HashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.count > 0))
{var hashes = cljsrepl.core.js_keys.call(null,self__.hashobj).sort();
return cljsrepl.core.mapcat.call(null,(function (p1__3590_SHARP_){
return cljsrepl.core.map.call(null,cljsrepl.core.vec,cljsrepl.core.partition.call(null,2,(self__.hashobj[p1__3590_SHARP_])));
}),hashes);
} else
{return null;
}
});
cljsrepl.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljsrepl.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_map.call(null,coll,other);
});
cljsrepl.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.HashMap(meta__$1,self__.count,self__.hashobj,self__.__hash));
});
cljsrepl.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.HashMap.EMPTY,self__.meta);
});
cljsrepl.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var h = cljsrepl.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
var i = (cljsrepl.core.truth_(bucket)?cljsrepl.core.scan_array.call(null,2,k,bucket):null);
if(cljsrepl.core.not.call(null,i))
{return coll;
} else
{var new_hashobj = replgoog.object.clone(self__.hashobj);
if((3 > bucket.length))
{cljsrepl.core.js_delete.call(null,new_hashobj,h);
} else
{var new_bucket_3596 = bucket.slice();
new_bucket_3596.splice(i,2);
(new_hashobj[h] = new_bucket_3596);
}
return (new cljsrepl.core.HashMap(self__.meta,(self__.count - 1),new_hashobj,null));
}
});
cljsrepl.core.HashMap.EMPTY = (new cljsrepl.core.HashMap(null,0,{},0));
cljsrepl.core.HashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljsrepl.core.HashMap.EMPTY;
while(true){
if((i < len))
{{
var G__3597 = (i + 1);
var G__3598 = cljsrepl.core.assoc.call(null,out,(ks[i]),(vs[i]));
i = G__3597;
out = G__3598;
continue;
}
} else
{return out;
}
break;
}
});
cljsrepl.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
var len = arr.length;
var i = 0;
while(true){
if((len <= i))
{return -1;
} else
{if(cljsrepl.core._EQ_.call(null,(arr[i]),k))
{return i;
} else
{if("\uFDD0'else")
{{
var G__3599 = (i + 2);
i = G__3599;
continue;
}
} else
{return null;
}
}
}
break;
}
});
replgoog.provide('cljsrepl.core.PersistentArrayMap');

/**
* @constructor
*/
cljsrepl.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljsrepl.core.PersistentArrayMap.cljs$lang$type = true;
cljsrepl.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentArrayMap");
});
cljsrepl.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentArrayMap");
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljsrepl.core.TransientArrayMap({},self__.arr.length,self__.arr.slice()));
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_imap.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var idx = cljsrepl.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var idx = cljsrepl.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{if((self__.cnt < cljsrepl.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljsrepl.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),(function (){var G__3602 = self__.arr.slice();
G__3602.push(k);
G__3602.push(v);
return G__3602;
})(),null));
} else
{return cljsrepl.core.persistent_BANG_.call(null,cljsrepl.core.assoc_BANG_.call(null,cljsrepl.core.transient$.call(null,cljsrepl.core.into.call(null,cljsrepl.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.PersistentArrayMap(self__.meta,self__.cnt,(function (){var G__3603 = self__.arr.slice();
(G__3603[(idx + 1)] = v);
return G__3603;
})(),null));
} else
{return null;
}
}
}
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((cljsrepl.core.array_map_index_of.call(null,coll,k) === -1));
});
cljsrepl.core.PersistentArrayMap.prototype.call = (function() {
var G__3606 = null;
var G__3606__2 = (function (this_sym3604,k){
var self__ = this;
var this_sym3604__$1 = this;
var coll = this_sym3604__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3606__3 = (function (this_sym3605,k,not_found){
var self__ = this;
var this_sym3605__$1 = this;
var coll = this_sym3605__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3606 = function(this_sym3605,k,not_found){
switch(arguments.length){
case 2:
return G__3606__2.call(this,this_sym3605,k);
case 3:
return G__3606__3.call(this,this_sym3605,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3606;
})()
;
cljsrepl.core.PersistentArrayMap.prototype.apply = (function (this_sym3600,args3601){
var self__ = this;
return this_sym3600.call.apply(this_sym3600,[this_sym3600].concat(args3601.slice()));
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)]));
if(cljsrepl.core.reduced_QMARK_.call(null,init__$2))
{return cljsrepl.core.deref.call(null,init__$2);
} else
{{
var G__3607 = (i + 2);
var G__3608 = init__$2;
i = G__3607;
init__$1 = G__3608;
continue;
}
}
} else
{return null;
}
break;
}
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljsrepl.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljsrepl.core._nth.call(null,entry,0),cljsrepl.core._nth.call(null,entry,1));
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,coll,entry);
}
});
cljsrepl.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var len = self__.arr.length;
var array_map_seq = (function array_map_seq(i){
return (new cljsrepl.core.LazySeq(null,false,(function (){
if((i < len))
{return cljsrepl.core.cons.call(null,cljsrepl.core.PersistentVector.fromArray([(self__.arr[i]),(self__.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq.call(null,0);
} else
{return null;
}
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_map.call(null,coll,other);
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._with_meta.call(null,cljsrepl.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var idx = cljsrepl.core.array_map_index_of.call(null,coll,k);
if((idx >= 0))
{var len = self__.arr.length;
var new_len = (len - 2);
if((new_len === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr = cljsrepl.core.make_array.call(null,new_len);
var s = 0;
var d = 0;
while(true){
if((s >= len))
{return (new cljsrepl.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(cljsrepl.core._EQ_.call(null,k,(self__.arr[s])))
{{
var G__3609 = (s + 2);
var G__3610 = d;
s = G__3609;
d = G__3610;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__3611 = (s + 2);
var G__3612 = (d + 2);
s = G__3611;
d = G__3612;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljsrepl.core.PersistentArrayMap.EMPTY = (new cljsrepl.core.PersistentArrayMap(null,0,[],null));
cljsrepl.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljsrepl.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len = cljsrepl.core.count.call(null,ks);
var i = 0;
var out = cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len))
{{
var G__3613 = (i + 1);
var G__3614 = cljsrepl.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__3613;
out = G__3614;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,out);
}
break;
}
});
replgoog.provide('cljsrepl.core.TransientArrayMap');

/**
* @constructor
*/
cljsrepl.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljsrepl.core.TransientArrayMap.cljs$lang$type = true;
cljsrepl.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/TransientArrayMap");
});
cljsrepl.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/TransientArrayMap");
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
if(cljsrepl.core.truth_(self__.editable_QMARK_))
{var idx = cljsrepl.core.array_map_index_of.call(null,tcoll,key);
if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__3615_3617 = self__.arr;
G__3615_3617.pop();
G__3615_3617.pop();
self__.len = (self__.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
if(cljsrepl.core.truth_(self__.editable_QMARK_))
{var idx = cljsrepl.core.array_map_index_of.call(null,tcoll,key);
if((idx === -1))
{if(((self__.len + 2) <= (2 * cljsrepl.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll;
} else
{return cljsrepl.core.assoc_BANG_.call(null,cljsrepl.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else
{if((val === (self__.arr[(idx + 1)])))
{return tcoll;
} else
{(self__.arr[(idx + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(cljsrepl.core.truth_(self__.editable_QMARK_))
{if((function (){var G__3616 = o;
if(G__3616)
{if((function (){var or__3943__auto__ = (G__3616.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3616.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__3616.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMapEntry,G__3616);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMapEntry,G__3616);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljsrepl.core.key.call(null,o),cljsrepl.core.val.call(null,o));
} else
{var es = cljsrepl.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = cljsrepl.core.first.call(null,es);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__3618 = cljsrepl.core.next.call(null,es);
var G__3619 = tcoll__$1.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__$1,cljsrepl.core.key.call(null,e),cljsrepl.core.val.call(null,e));
es = G__3618;
tcoll__$1 = G__3619;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(cljsrepl.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljsrepl.core.PersistentArrayMap(null,cljsrepl.core.quot.call(null,self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if(cljsrepl.core.truth_(self__.editable_QMARK_))
{var idx = cljsrepl.core.array_map_index_of.call(null,tcoll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljsrepl.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
if(cljsrepl.core.truth_(self__.editable_QMARK_))
{return cljsrepl.core.quot.call(null,self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljsrepl.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljsrepl.core.transient$.call(null,cljsrepl.core.ObjMap.EMPTY);
var i = 0;
while(true){
if((i < len))
{{
var G__3620 = cljsrepl.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + 1)]));
var G__3621 = (i + 2);
out = G__3620;
i = G__3621;
continue;
}
} else
{return out;
}
break;
}
});
replgoog.provide('cljsrepl.core.Box');

/**
* @constructor
*/
cljsrepl.core.Box = (function (val){
this.val = val;
})
cljsrepl.core.Box.cljs$lang$type = true;
cljsrepl.core.Box.cljs$lang$ctorPrSeq = (function (this__2004__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Box");
});
cljsrepl.core.Box.cljs$lang$ctorPrWriter = (function (this__2004__auto__,writer__2005__auto__,opts__2006__auto__){
return cljsrepl.core._write.call(null,writer__2005__auto__,"cljsrepl.core/Box");
});
cljsrepl.core.key_test = (function key_test(key,other){
if(replgoog.isString(key))
{return (key === other);
} else
{return cljsrepl.core._EQ_.call(null,key,other);
}
});
cljsrepl.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljsrepl.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__3624 = arr.slice();
(G__3624[i] = a);
return G__3624;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__3625 = arr.slice();
(G__3625[i] = a);
(G__3625[j] = b);
return G__3625;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljsrepl.core.remove_pair = (function remove_pair(arr,i){
var new_arr = cljsrepl.core.make_array.call(null,(arr.length - 2));
cljsrepl.core.array_copy.call(null,arr,0,new_arr,0,(2 * i));
cljsrepl.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
cljsrepl.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljsrepl.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljsrepl.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljsrepl.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljsrepl.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);
if(!((k == null)))
{return f.call(null,init__$1,k,(arr[(i + 1)]));
} else
{var node = (arr[(i + 1)]);
if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();
if(cljsrepl.core.reduced_QMARK_.call(null,init__$2))
{return cljsrepl.core.deref.call(null,init__$2);
} else
{{
var G__3626 = (i + 2);
var G__3627 = init__$2;
i = G__3626;
init__$1 = G__3627;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
replgoog.provide('cljsrepl.core.BitmapIndexedNode');

/**
* @constructor
*/
cljsrepl.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljsrepl.core.BitmapIndexedNode.cljs$lang$type = true;
cljsrepl.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/BitmapIndexedNode");
});
cljsrepl.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/BitmapIndexedNode");
});
cljsrepl.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);
cljsrepl.core.array_copy.call(null,earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljsrepl.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljsrepl.core.bit_count.call(null,self__.bitmap);
if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;
cljsrepl.core.array_copy_downward.call(null,earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = cljsrepl.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_3628 = 0;
var j_3629 = 0;
while(true){
if((i_3628 < 32))
{if((((self__.bitmap >>> i_3628) & 1) === 0))
{{
var G__3630 = (i_3628 + 1);
var G__3631 = j_3629;
i_3628 = G__3630;
j_3629 = G__3631;
continue;
}
} else
{(nodes[i_3628] = ((!(((self__.arr[j_3629]) == null)))?cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),cljsrepl.core.hash.call(null,(self__.arr[j_3629])),(self__.arr[j_3629]),(self__.arr[(j_3629 + 1)]),added_leaf_QMARK_):(self__.arr[(j_3629 + 1)])));
{
var G__3632 = (i_3628 + 1);
var G__3633 = (j_3629 + 2);
i_3628 = G__3632;
j_3629 = G__3633;
continue;
}
}
} else
{}
break;
}
return (new cljsrepl.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if("\uFDD0'else")
{var new_arr = cljsrepl.core.make_array.call(null,(2 * (n + 4)));
cljsrepl.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljsrepl.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(cljsrepl.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,(2 * idx),null,((2 * idx) + 1),cljsrepl.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val));
} else
{return null;
}
}
}
}
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljsrepl.core.create_inode_seq.call(null,self__.arr);
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljsrepl.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljsrepl.core.key_test.call(null,key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
cljsrepl.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var n = cljsrepl.core.bit_count.call(null,self__.bitmap);
var new_arr = cljsrepl.core.make_array.call(null,(((n < 0))?4:(2 * (n + 1))));
cljsrepl.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * n));
return (new cljsrepl.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljsrepl.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljsrepl.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljsrepl.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljsrepl.core.key_test.call(null,key,key_or_nil))
{return cljsrepl.core.PersistentVector.fromArray([key_or_nil,val_or_node], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljsrepl.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljsrepl.core.BitmapIndexedNode(null,self__.bitmap,cljsrepl.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljsrepl.core.remove_pair.call(null,self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljsrepl.core.key_test.call(null,key,key_or_nil))
{return (new cljsrepl.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljsrepl.core.remove_pair.call(null,self__.arr,idx)));
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljsrepl.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljsrepl.core.bit_count.call(null,self__.bitmap);
if((n >= 16))
{var nodes = cljsrepl.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_3634 = 0;
var j_3635 = 0;
while(true){
if((i_3634 < 32))
{if((((self__.bitmap >>> i_3634) & 1) === 0))
{{
var G__3636 = (i_3634 + 1);
var G__3637 = j_3635;
i_3634 = G__3636;
j_3635 = G__3637;
continue;
}
} else
{(nodes[i_3634] = ((!(((self__.arr[j_3635]) == null)))?cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljsrepl.core.hash.call(null,(self__.arr[j_3635])),(self__.arr[j_3635]),(self__.arr[(j_3635 + 1)]),added_leaf_QMARK_):(self__.arr[(j_3635 + 1)])));
{
var G__3638 = (i_3634 + 1);
var G__3639 = (j_3635 + 2);
i_3634 = G__3638;
j_3635 = G__3639;
continue;
}
}
} else
{}
break;
}
return (new cljsrepl.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = cljsrepl.core.make_array.call(null,(2 * (n + 1)));
cljsrepl.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljsrepl.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljsrepl.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return (new cljsrepl.core.BitmapIndexedNode(null,self__.bitmap,cljsrepl.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
}
} else
{if(cljsrepl.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljsrepl.core.BitmapIndexedNode(null,self__.bitmap,cljsrepl.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljsrepl.core.BitmapIndexedNode(null,self__.bitmap,cljsrepl.core.clone_and_set.call(null,self__.arr,(2 * idx),null,((2 * idx) + 1),cljsrepl.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljsrepl.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljsrepl.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljsrepl.core.key_test.call(null,key,key_or_nil))
{return val_or_node;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljsrepl.core.BitmapIndexedNode.EMPTY = (new cljsrepl.core.BitmapIndexedNode(null,0,cljsrepl.core.make_array.call(null,0)));
cljsrepl.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = (2 * (array_node.cnt - 1));
var new_arr = cljsrepl.core.make_array.call(null,len);
var i = 0;
var j = 1;
var bitmap = 0;
while(true){
if((i < len))
{if((function (){var and__3941__auto__ = !((i === idx));
if(and__3941__auto__)
{return !(((arr[i]) == null));
} else
{return and__3941__auto__;
}
})())
{(new_arr[j] = (arr[i]));
{
var G__3640 = (i + 1);
var G__3641 = (j + 2);
var G__3642 = (bitmap | (1 << i));
i = G__3640;
j = G__3641;
bitmap = G__3642;
continue;
}
} else
{{
var G__3643 = (i + 1);
var G__3644 = j;
var G__3645 = bitmap;
i = G__3643;
j = G__3644;
bitmap = G__3645;
continue;
}
}
} else
{return (new cljsrepl.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});
replgoog.provide('cljsrepl.core.ArrayNode');

/**
* @constructor
*/
cljsrepl.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljsrepl.core.ArrayNode.cljs$lang$type = true;
cljsrepl.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ArrayNode");
});
cljsrepl.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ArrayNode");
});
cljsrepl.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{var editable = cljsrepl.core.edit_and_set.call(null,inode,edit__$1,idx,cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});
cljsrepl.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljsrepl.core.create_array_node_seq.call(null,self__.arr);
});
cljsrepl.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljsrepl.core.pack_array_node.call(null,inode,edit__$1,idx);
} else
{var editable = cljsrepl.core.edit_and_set.call(null,inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if("\uFDD0'else")
{return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
cljsrepl.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{return (new cljsrepl.core.ArrayNode(e,self__.cnt,self__.arr.slice()));
}
});
cljsrepl.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var node = (self__.arr[i]);
if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);
if(cljsrepl.core.reduced_QMARK_.call(null,init__$2))
{return cljsrepl.core.deref.call(null,init__$2);
} else
{{
var G__3646 = (i + 1);
var G__3647 = init__$2;
i = G__3646;
init__$1 = G__3647;
continue;
}
}
} else
{return null;
}
} else
{return init__$1;
}
break;
}
});
cljsrepl.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljsrepl.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{var n = node.inode_without((shift + 5),hash,key);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljsrepl.core.pack_array_node.call(null,inode,null,idx);
} else
{return (new cljsrepl.core.ArrayNode(null,(self__.cnt - 1),cljsrepl.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.ArrayNode(null,self__.cnt,cljsrepl.core.clone_and_set.call(null,self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
cljsrepl.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return (new cljsrepl.core.ArrayNode(null,(self__.cnt + 1),cljsrepl.core.clone_and_set.call(null,self__.arr,idx,cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return (new cljsrepl.core.ArrayNode(null,self__.cnt,cljsrepl.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});
cljsrepl.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljsrepl.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = (2 * cnt);
var i = 0;
while(true){
if((i < lim))
{if(cljsrepl.core.key_test.call(null,key,(arr[i])))
{return i;
} else
{{
var G__3648 = (i + 2);
i = G__3648;
continue;
}
}
} else
{return -1;
}
break;
}
});
replgoog.provide('cljsrepl.core.HashCollisionNode');

/**
* @constructor
*/
cljsrepl.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljsrepl.core.HashCollisionNode.cljs$lang$type = true;
cljsrepl.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/HashCollisionNode");
});
cljsrepl.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/HashCollisionNode");
});
cljsrepl.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljsrepl.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = cljsrepl.core.edit_and_set.call(null,inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;
var new_arr = cljsrepl.core.make_array.call(null,(len + 2));
cljsrepl.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return cljsrepl.core.edit_and_set.call(null,inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new cljsrepl.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljsrepl.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljsrepl.core.create_inode_seq.call(null,self__.arr);
});
cljsrepl.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljsrepl.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{(removed_leaf_QMARK_[0] = true);
if((self__.cnt === 1))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[((2 * self__.cnt) - 2)]));
(earr[(idx + 1)] = (earr[((2 * self__.cnt) - 1)]));
(earr[((2 * self__.cnt) - 1)] = null);
(earr[((2 * self__.cnt) - 2)] = null);
editable.cnt = (editable.cnt - 1);
return editable;
}
}
});
cljsrepl.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var new_arr = cljsrepl.core.make_array.call(null,(2 * (self__.cnt + 1)));
cljsrepl.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new cljsrepl.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljsrepl.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljsrepl.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljsrepl.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljsrepl.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljsrepl.core.key_test.call(null,key,(self__.arr[idx])))
{return cljsrepl.core.PersistentVector.fromArray([(self__.arr[idx]),(self__.arr[(idx + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljsrepl.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljsrepl.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),cljsrepl.core.remove_pair.call(null,self__.arr,cljsrepl.core.quot.call(null,idx,2))));
} else
{return null;
}
}
}
});
cljsrepl.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljsrepl.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{var len = self__.arr.length;
var new_arr = cljsrepl.core.make_array.call(null,(len + 2));
cljsrepl.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljsrepl.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(cljsrepl.core._EQ_.call(null,(self__.arr[idx]),val))
{return inode;
} else
{return (new cljsrepl.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljsrepl.core.clone_and_set.call(null,self__.arr,(idx + 1),val)));
}
}
} else
{return (new cljsrepl.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljsrepl.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljsrepl.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljsrepl.core.key_test.call(null,key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljsrepl.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljsrepl.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljsrepl.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljsrepl.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new cljsrepl.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljsrepl.core.Box(false));
return cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljsrepl.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new cljsrepl.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljsrepl.core.Box(false));
return cljsrepl.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;
replgoog.provide('cljsrepl.core.NodeSeq');

/**
* @constructor
*/
cljsrepl.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljsrepl.core.NodeSeq.cljs$lang$type = true;
cljsrepl.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/NodeSeq");
});
cljsrepl.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/NodeSeq");
});
cljsrepl.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljsrepl.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljsrepl.core.PersistentVector.fromArray([(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], true);
} else
{return cljsrepl.core.first.call(null,self__.s);
}
});
cljsrepl.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljsrepl.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null);
} else
{return cljsrepl.core.create_inode_seq.call(null,self__.nodes,self__.i,cljsrepl.core.next.call(null,self__.s));
}
});
cljsrepl.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljsrepl.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
cljsrepl.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljsrepl.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4090__auto__ = (nodes[(j + 1)]);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;
var temp__4090__auto____$1 = node.inode_seq();
if(cljsrepl.core.truth_(temp__4090__auto____$1))
{var node_seq = temp__4090__auto____$1;
return (new cljsrepl.core.NodeSeq(null,nodes,(j + 2),node_seq,null));
} else
{{
var G__3649 = (j + 2);
j = G__3649;
continue;
}
}
} else
{{
var G__3650 = (j + 2);
j = G__3650;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljsrepl.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;
replgoog.provide('cljsrepl.core.ArrayNodeSeq');

/**
* @constructor
*/
cljsrepl.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljsrepl.core.ArrayNodeSeq.cljs$lang$type = true;
cljsrepl.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/ArrayNodeSeq");
});
cljsrepl.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/ArrayNodeSeq");
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.first.call(null,self__.s);
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljsrepl.core.next.call(null,self__.s));
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
cljsrepl.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{var temp__4090__auto__ = (nodes[j]);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var nj = temp__4090__auto__;
var temp__4090__auto____$1 = nj.inode_seq();
if(cljsrepl.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;
return (new cljsrepl.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__3651 = (j + 1);
j = G__3651;
continue;
}
}
} else
{{
var G__3652 = (j + 1);
j = G__3652;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljsrepl.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
replgoog.provide('cljsrepl.core.PersistentHashMap');

/**
* @constructor
*/
cljsrepl.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljsrepl.core.PersistentHashMap.cljs$lang$type = true;
cljsrepl.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentHashMap");
});
cljsrepl.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentHashMap");
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljsrepl.core.TransientHashMap({},self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_imap.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return self__.root.inode_lookup(0,cljsrepl.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((k == null))
{if((function (){var and__3941__auto__ = self__.has_nil_QMARK_;
if(and__3941__auto__)
{return (v === self__.nil_val);
} else
{return and__3941__auto__;
}
})())
{return coll;
} else
{return (new cljsrepl.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + 1)),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljsrepl.core.Box(false));
var new_root = (((self__.root == null))?cljsrepl.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljsrepl.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((new_root === self__.root))
{return coll;
} else
{return (new cljsrepl.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + 1):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((self__.root.inode_lookup(0,cljsrepl.core.hash.call(null,k),k,cljsrepl.core.lookup_sentinel) === cljsrepl.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljsrepl.core.PersistentHashMap.prototype.call = (function() {
var G__3657 = null;
var G__3657__2 = (function (this_sym3655,k){
var self__ = this;
var this_sym3655__$1 = this;
var coll = this_sym3655__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3657__3 = (function (this_sym3656,k,not_found){
var self__ = this;
var this_sym3656__$1 = this;
var coll = this_sym3656__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3657 = function(this_sym3656,k,not_found){
switch(arguments.length){
case 2:
return G__3657__2.call(this,this_sym3656,k);
case 3:
return G__3657__3.call(this,this_sym3656,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3657;
})()
;
cljsrepl.core.PersistentHashMap.prototype.apply = (function (this_sym3653,args3654){
var self__ = this;
return this_sym3653.call.apply(this_sym3653,[this_sym3653].concat(args3654.slice()));
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);
if(cljsrepl.core.reduced_QMARK_.call(null,init__$1))
{return cljsrepl.core.deref.call(null,init__$1);
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if("\uFDD0'else")
{return init__$1;
} else
{return null;
}
}
}
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljsrepl.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljsrepl.core._nth.call(null,entry,0),cljsrepl.core._nth.call(null,entry,1));
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,coll,entry);
}
});
cljsrepl.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_)
{return cljsrepl.core.cons.call(null,cljsrepl.core.PersistentVector.fromArray([null,self__.nil_val], true),s);
} else
{return s;
}
} else
{return null;
}
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_map.call(null,coll,other);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._with_meta.call(null,cljsrepl.core.PersistentHashMap.EMPTY,self__.meta);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljsrepl.core.PersistentHashMap(self__.meta,(self__.cnt - 1),self__.root,false,null,null));
} else
{return coll;
}
} else
{if((self__.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root = self__.root.inode_without(0,cljsrepl.core.hash.call(null,k),k);
if((new_root === self__.root))
{return coll;
} else
{return (new cljsrepl.core.PersistentHashMap(self__.meta,(self__.cnt - 1),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
cljsrepl.core.PersistentHashMap.EMPTY = (new cljsrepl.core.PersistentHashMap(null,0,null,false,null,0));
cljsrepl.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentHashMap.EMPTY);
while(true){
if((i < len))
{{
var G__3658 = (i + 1);
var G__3659 = cljsrepl.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__3658;
out = G__3659;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,out);
}
break;
}
});
replgoog.provide('cljsrepl.core.TransientHashMap');

/**
* @constructor
*/
cljsrepl.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljsrepl.core.TransientHashMap.cljs$lang$type = true;
cljsrepl.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/TransientHashMap");
});
cljsrepl.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/TransientHashMap");
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
return tcoll.without_BANG_(key);
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.assoc_BANG_(key,val);
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
return tcoll.conj_BANG_(val);
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return tcoll.persistent_BANG_();
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup(0,cljsrepl.core.hash.call(null,k),k);
}
}
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup(0,cljsrepl.core.hash.call(null,k),k,not_found);
}
}
});
cljsrepl.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljsrepl.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((function (){var G__3660 = o;
if(G__3660)
{if((function (){var or__3943__auto__ = (G__3660.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3660.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__3660.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMapEntry,G__3660);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMapEntry,G__3660);
}
})())
{return tcoll.assoc_BANG_(cljsrepl.core.key.call(null,o),cljsrepl.core.val.call(null,o));
} else
{var es = cljsrepl.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = cljsrepl.core.first.call(null,es);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__3661 = cljsrepl.core.next.call(null,es);
var G__3662 = tcoll__$1.assoc_BANG_(cljsrepl.core.key.call(null,e),cljsrepl.core.val.call(null,e));
es = G__3661;
tcoll__$1 = G__3662;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljsrepl.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + 1);
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljsrepl.core.Box(false));
var node = (((self__.root == null))?cljsrepl.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljsrepl.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + 1);
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljsrepl.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - 1);
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljsrepl.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,0,cljsrepl.core.hash.call(null,k),k,removed_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(cljsrepl.core.truth_((removed_leaf_QMARK_[0])))
{self__.count = (self__.count - 1);
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljsrepl.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit)
{self__.edit = null;
return (new cljsrepl.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljsrepl.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null)))
{{
var G__3663 = ((ascending_QMARK_)?t.left:t.right);
var G__3664 = cljsrepl.core.conj.call(null,stack__$1,t);
t = G__3663;
stack__$1 = G__3664;
continue;
}
} else
{return stack__$1;
}
break;
}
});
replgoog.provide('cljsrepl.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljsrepl.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljsrepl.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljsrepl.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentTreeMapSeq");
});
cljsrepl.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentTreeMapSeq");
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,coll);
});
cljsrepl.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt < 0))
{return (cljsrepl.core.count.call(null,cljsrepl.core.next.call(null,coll)) + 1);
} else
{return self__.cnt;
}
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
return cljsrepl.core.peek.call(null,self__.stack);
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var t = cljsrepl.core.first.call(null,self__.stack);
var next_stack = cljsrepl.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),cljsrepl.core.next.call(null,self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null)))
{return (new cljsrepl.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return cljsrepl.core.List.EMPTY;
}
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
cljsrepl.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljsrepl.core.PersistentTreeMapSeq(null,cljsrepl.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljsrepl.core.balance_left = (function balance_left(key,val,ins,right){
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,ins))
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,ins.left))
{return (new cljsrepl.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljsrepl.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,ins.right))
{return (new cljsrepl.core.RedNode(ins.right.key,ins.right.val,(new cljsrepl.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljsrepl.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljsrepl.core.BlackNode(key,val,ins,right,null));
}
});
cljsrepl.core.balance_right = (function balance_right(key,val,left,ins){
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,ins))
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,ins.right))
{return (new cljsrepl.core.RedNode(ins.key,ins.val,(new cljsrepl.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,ins.left))
{return (new cljsrepl.core.RedNode(ins.left.key,ins.left.val,(new cljsrepl.core.BlackNode(key,val,left,ins.left.left,null)),(new cljsrepl.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljsrepl.core.BlackNode(key,val,left,ins,null));
}
});
cljsrepl.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,del))
{return (new cljsrepl.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.BlackNode,right))
{return cljsrepl.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,right);
if(and__3941__auto__)
{return cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.BlackNode,right.left);
} else
{return and__3941__auto__;
}
})())
{return (new cljsrepl.core.RedNode(right.left.key,right.left.val,(new cljsrepl.core.BlackNode(key,val,del,right.left.left,null)),cljsrepl.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljsrepl.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,del))
{return (new cljsrepl.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.BlackNode,left))
{return cljsrepl.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto__ = cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,left);
if(and__3941__auto__)
{return cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.BlackNode,left.right);
} else
{return and__3941__auto__;
}
})())
{return (new cljsrepl.core.RedNode(left.right.key,left.right.val,cljsrepl.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljsrepl.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljsrepl.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = f.call(null,init,node.key,node.val);
if(cljsrepl.core.reduced_QMARK_.call(null,init__$1))
{return cljsrepl.core.deref.call(null,init__$1);
} else
{var init__$2 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__$1):init__$1);
if(cljsrepl.core.reduced_QMARK_.call(null,init__$2))
{return cljsrepl.core.deref.call(null,init__$2);
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);
if(cljsrepl.core.reduced_QMARK_.call(null,init__$3))
{return cljsrepl.core.deref.call(null,init__$3);
} else
{return init__$3;
}
}
}
});
replgoog.provide('cljsrepl.core.BlackNode');

/**
* @constructor
*/
cljsrepl.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljsrepl.core.BlackNode.cljs$lang$type = true;
cljsrepl.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/BlackNode");
});
cljsrepl.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/BlackNode");
});
cljsrepl.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljsrepl.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljsrepl.core.assoc.call(null,cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljsrepl.core.BlackNode.prototype.call = (function() {
var G__3669 = null;
var G__3669__2 = (function (this_sym3667,k){
var self__ = this;
var this_sym3667__$1 = this;
var node = this_sym3667__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__3669__3 = (function (this_sym3668,k,not_found){
var self__ = this;
var this_sym3668__$1 = this;
var node = this_sym3668__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__3669 = function(this_sym3668,k,not_found){
switch(arguments.length){
case 2:
return G__3669__2.call(this,this_sym3668,k);
case 3:
return G__3669__3.call(this,this_sym3668,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3669;
})()
;
cljsrepl.core.BlackNode.prototype.apply = (function (this_sym3665,args3666){
var self__ = this;
return this_sym3665.call.apply(this_sym3665,[this_sym3665].concat(args3666.slice()));
});
cljsrepl.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljsrepl.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljsrepl.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});
cljsrepl.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljsrepl.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljsrepl.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljsrepl.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});
cljsrepl.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljsrepl.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljsrepl.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljsrepl.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljsrepl.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljsrepl.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});
cljsrepl.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});
cljsrepl.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljsrepl.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljsrepl.core.BlackNode.prototype.toString = (function() {
var G__3670 = null;
var G__3670__0 = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
G__3670 = function(){
switch(arguments.length){
case 0:
return G__3670__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3670;
})()
;
cljsrepl.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljsrepl.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljsrepl.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});
cljsrepl.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,node,f);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,node,f,start);
});
cljsrepl.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljsrepl.core.list.call(null,self__.key,self__.val);
});
cljsrepl.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljsrepl.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljsrepl.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljsrepl.core.PersistentVector.fromArray([self__.key], true);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljsrepl.core._assoc_n.call(null,cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljsrepl.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljsrepl.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljsrepl.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljsrepl.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljsrepl.core.PersistentVector.EMPTY;
});
replgoog.provide('cljsrepl.core.RedNode');

/**
* @constructor
*/
cljsrepl.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljsrepl.core.RedNode.cljs$lang$type = true;
cljsrepl.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/RedNode");
});
cljsrepl.core.RedNode.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/RedNode");
});
cljsrepl.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljsrepl.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljsrepl.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljsrepl.core.assoc.call(null,cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljsrepl.core.RedNode.prototype.call = (function() {
var G__3675 = null;
var G__3675__2 = (function (this_sym3673,k){
var self__ = this;
var this_sym3673__$1 = this;
var node = this_sym3673__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__3675__3 = (function (this_sym3674,k,not_found){
var self__ = this;
var this_sym3674__$1 = this;
var node = this_sym3674__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__3675 = function(this_sym3674,k,not_found){
switch(arguments.length){
case 2:
return G__3675__2.call(this,this_sym3674,k);
case 3:
return G__3675__3.call(this,this_sym3674,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3675;
})()
;
cljsrepl.core.RedNode.prototype.apply = (function (this_sym3671,args3672){
var self__ = this;
return this_sym3671.call.apply(this_sym3671,[this_sym3671].concat(args3672.slice()));
});
cljsrepl.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljsrepl.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljsrepl.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljsrepl.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljsrepl.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljsrepl.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});
cljsrepl.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljsrepl.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljsrepl.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljsrepl.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljsrepl.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljsrepl.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljsrepl.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljsrepl.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljsrepl.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljsrepl.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljsrepl.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,self__.left))
{return (new cljsrepl.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljsrepl.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,self__.right))
{return (new cljsrepl.core.RedNode(self__.right.key,self__.right.val,(new cljsrepl.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljsrepl.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
cljsrepl.core.RedNode.prototype.toString = (function() {
var G__3676 = null;
var G__3676__0 = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
G__3676 = function(){
switch(arguments.length){
case 0:
return G__3676__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3676;
})()
;
cljsrepl.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,self__.right))
{return (new cljsrepl.core.RedNode(self__.key,self__.val,(new cljsrepl.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,self__.left))
{return (new cljsrepl.core.RedNode(self__.left.key,self__.left.val,(new cljsrepl.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljsrepl.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljsrepl.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
cljsrepl.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljsrepl.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljsrepl.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,node,f);
});
cljsrepl.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,node,f,start);
});
cljsrepl.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljsrepl.core.list.call(null,self__.key,self__.val);
});
cljsrepl.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljsrepl.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljsrepl.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljsrepl.core.PersistentVector.fromArray([self__.key], true);
});
cljsrepl.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljsrepl.core._assoc_n.call(null,cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljsrepl.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,coll,other);
});
cljsrepl.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljsrepl.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljsrepl.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljsrepl.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljsrepl.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljsrepl.core.PersistentVector.EMPTY;
});
cljsrepl.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljsrepl.core.RedNode(k,v,null,null,null));
} else
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljsrepl.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,left))
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,right))
{var app = tree_map_append.call(null,left.right,right.left);
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,app))
{return (new cljsrepl.core.RedNode(app.key,app.val,(new cljsrepl.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljsrepl.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljsrepl.core.RedNode(left.key,left.val,left.left,(new cljsrepl.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljsrepl.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,right))
{return (new cljsrepl.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app = tree_map_append.call(null,left.right,right.left);
if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.RedNode,app))
{return (new cljsrepl.core.RedNode(app.key,app.val,(new cljsrepl.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljsrepl.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljsrepl.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljsrepl.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljsrepl.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return cljsrepl.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.BlackNode,tree.left))
{return cljsrepl.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else
{return (new cljsrepl.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.BlackNode,tree.right))
{return cljsrepl.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else
{return (new cljsrepl.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljsrepl.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = comp.call(null,k,tk);
if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
replgoog.provide('cljsrepl.core.PersistentTreeMap');

/**
* @constructor
*/
cljsrepl.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljsrepl.core.PersistentTreeMap.cljs$lang$type = true;
cljsrepl.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentTreeMap");
});
cljsrepl.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentTreeMap");
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_imap.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var n = coll.entry_at(k);
if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var found = [null];
var t = cljsrepl.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);
if((t == null))
{var found_node = cljsrepl.core.nth.call(null,found,0);
if(cljsrepl.core._EQ_.call(null,v,found_node.val))
{return coll;
} else
{return (new cljsrepl.core.PersistentTreeMap(self__.comp,cljsrepl.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljsrepl.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((coll.entry_at(k) == null));
});
cljsrepl.core.PersistentTreeMap.prototype.call = (function() {
var G__3681 = null;
var G__3681__2 = (function (this_sym3679,k){
var self__ = this;
var this_sym3679__$1 = this;
var coll = this_sym3679__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3681__3 = (function (this_sym3680,k,not_found){
var self__ = this;
var this_sym3680__$1 = this;
var coll = this_sym3680__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3681 = function(this_sym3680,k,not_found){
switch(arguments.length){
case 2:
return G__3681__2.call(this,this_sym3680,k);
case 3:
return G__3681__3.call(this,this_sym3680,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3681;
})()
;
cljsrepl.core.PersistentTreeMap.prototype.apply = (function (this_sym3677,args3678){
var self__ = this;
return this_sym3677.call.apply(this_sym3677,[this_sym3677].concat(args3678.slice()));
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
if(!((self__.tree == null)))
{return cljsrepl.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else
{return init;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljsrepl.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljsrepl.core._nth.call(null,entry,0),cljsrepl.core._nth.call(null,entry,1));
} else
{return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,coll,entry);
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljsrepl.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljsrepl.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__3682 = t.left;
t = G__3682;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__3683 = t.right;
t = G__3683;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{return cljsrepl.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{var stack = null;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return (new cljsrepl.core.PersistentTreeMapSeq(null,cljsrepl.core.conj.call(null,stack,t),ascending_QMARK_,-1,null));
} else
{if(cljsrepl.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__3684 = cljsrepl.core.conj.call(null,stack,t);
var G__3685 = t.left;
stack = G__3684;
t = G__3685;
continue;
}
} else
{{
var G__3686 = stack;
var G__3687 = t.right;
stack = G__3686;
t = G__3687;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c > 0))
{{
var G__3688 = cljsrepl.core.conj.call(null,stack,t);
var G__3689 = t.right;
stack = G__3688;
t = G__3689;
continue;
}
} else
{{
var G__3690 = stack;
var G__3691 = t.left;
stack = G__3690;
t = G__3691;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljsrepl.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null));
}
}
break;
}
} else
{return null;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return cljsrepl.core.key.call(null,entry);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return self__.comp;
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljsrepl.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljsrepl.core.equiv_map.call(null,coll,other);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var found = [null];
var t = cljsrepl.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);
if((t == null))
{if((cljsrepl.core.nth.call(null,found,0) == null))
{return coll;
} else
{return (new cljsrepl.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null));
}
} else
{return (new cljsrepl.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - 1),self__.meta,null));
}
});
cljsrepl.core.PersistentTreeMap.EMPTY = (new cljsrepl.core.PersistentTreeMap(cljsrepl.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljsrepl.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljsrepl.core.seq.call(null,keyvals);
var out = cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentHashMap.EMPTY);
while(true){
if(in$)
{{
var G__3692 = cljsrepl.core.nnext.call(null,in$);
var G__3693 = cljsrepl.core.assoc_BANG_.call(null,out,cljsrepl.core.first.call(null,in$),cljsrepl.core.second.call(null,in$));
in$ = G__3692;
out = G__3693;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3694){
var keyvals = cljsrepl.core.seq(arglist__3694);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljsrepl.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljsrepl.core.PersistentArrayMap(null,cljsrepl.core.quot.call(null,cljsrepl.core.count.call(null,keyvals),2),cljsrepl.core.apply.call(null,cljsrepl.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__3695){
var keyvals = cljsrepl.core.seq(arglist__3695);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljsrepl.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = {};
var kvs = cljsrepl.core.seq.call(null,keyvals);
while(true){
if(kvs)
{ks.push(cljsrepl.core.first.call(null,kvs));
(obj[cljsrepl.core.first.call(null,kvs)] = cljsrepl.core.second.call(null,kvs));
{
var G__3696 = cljsrepl.core.nnext.call(null,kvs);
kvs = G__3696;
continue;
}
} else
{return cljsrepl.core.ObjMap.fromObject.call(null,ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__3697){
var keyvals = cljsrepl.core.seq(arglist__3697);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljsrepl.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljsrepl.core.seq.call(null,keyvals);
var out = cljsrepl.core.PersistentTreeMap.EMPTY;
while(true){
if(in$)
{{
var G__3698 = cljsrepl.core.nnext.call(null,in$);
var G__3699 = cljsrepl.core.assoc.call(null,out,cljsrepl.core.first.call(null,in$),cljsrepl.core.second.call(null,in$));
in$ = G__3698;
out = G__3699;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__3700){
var keyvals = cljsrepl.core.seq(arglist__3700);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljsrepl.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljsrepl.core.seq.call(null,keyvals);
var out = (new cljsrepl.core.PersistentTreeMap(cljsrepl.core.fn__GT_comparator.call(null,comparator),null,0,null,0));
while(true){
if(in$)
{{
var G__3701 = cljsrepl.core.nnext.call(null,in$);
var G__3702 = cljsrepl.core.assoc.call(null,out,cljsrepl.core.first.call(null,in$),cljsrepl.core.second.call(null,in$));
in$ = G__3701;
out = G__3702;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__3703){
var comparator = cljsrepl.core.first(arglist__3703);
var keyvals = cljsrepl.core.rest(arglist__3703);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljsrepl.core.keys = (function keys(hash_map){
return cljsrepl.core.seq.call(null,cljsrepl.core.map.call(null,cljsrepl.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljsrepl.core.key = (function key(map_entry){
return cljsrepl.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljsrepl.core.vals = (function vals(hash_map){
return cljsrepl.core.seq.call(null,cljsrepl.core.map.call(null,cljsrepl.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljsrepl.core.val = (function val(map_entry){
return cljsrepl.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljsrepl.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljsrepl.core.truth_(cljsrepl.core.some.call(null,cljsrepl.core.identity,maps)))
{return cljsrepl.core.reduce.call(null,(function (p1__3704_SHARP_,p2__3705_SHARP_){
return cljsrepl.core.conj.call(null,(function (){var or__3943__auto__ = p1__3704_SHARP_;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.ObjMap.EMPTY;
}
})(),p2__3705_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (replgoog.isDef(var_args)) {
  maps = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3706){
var maps = cljsrepl.core.seq(arglist__3706);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljsrepl.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljsrepl.core.truth_(cljsrepl.core.some.call(null,cljsrepl.core.identity,maps)))
{var merge_entry = (function (m,e){
var k = cljsrepl.core.first.call(null,e);
var v = cljsrepl.core.second.call(null,e);
if(cljsrepl.core.contains_QMARK_.call(null,m,k))
{return cljsrepl.core.assoc.call(null,m,k,f.call(null,cljsrepl.core._lookup.call(null,m,k,null),v));
} else
{return cljsrepl.core.assoc.call(null,m,k,v);
}
});
var merge2 = (function (m1,m2){
return cljsrepl.core.reduce.call(null,merge_entry,(function (){var or__3943__auto__ = m1;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.ObjMap.EMPTY;
}
})(),cljsrepl.core.seq.call(null,m2));
});
return cljsrepl.core.reduce.call(null,merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (replgoog.isDef(var_args)) {
  maps = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3707){
var f = cljsrepl.core.first(arglist__3707);
var maps = cljsrepl.core.rest(arglist__3707);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Like merge-with, but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
* 
* (deepmerge + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
cljsrepl.core.deep_merge_with = (function() { 
var deep_merge_with__delegate = function (f,maps){
return cljsrepl.core.apply.call(null,(function() { 
var m__delegate = function (maps__$1){
if(cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.map_QMARK_,maps__$1))
{return cljsrepl.core.apply.call(null,cljsrepl.core.merge_with,m,maps__$1);
} else
{return cljsrepl.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;
if (replgoog.isDef(var_args)) {
  maps__$1 = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return m__delegate.call(this, maps__$1);
};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__3708){
var maps__$1 = cljsrepl.core.seq(arglist__3708);;
return m__delegate(maps__$1);
});
m.cljs$lang$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var deep_merge_with = function (f,var_args){
var maps = null;
if (replgoog.isDef(var_args)) {
  maps = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return deep_merge_with__delegate.call(this, f, maps);
};
deep_merge_with.cljs$lang$maxFixedArity = 1;
deep_merge_with.cljs$lang$applyTo = (function (arglist__3709){
var f = cljsrepl.core.first(arglist__3709);
var maps = cljsrepl.core.rest(arglist__3709);
return deep_merge_with__delegate(f, maps);
});
deep_merge_with.cljs$lang$arity$variadic = deep_merge_with__delegate;
return deep_merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljsrepl.core.select_keys = (function select_keys(map,keyseq){
var ret = cljsrepl.core.ObjMap.EMPTY;
var keys = cljsrepl.core.seq.call(null,keyseq);
while(true){
if(keys)
{var key = cljsrepl.core.first.call(null,keys);
var entry = cljsrepl.core._lookup.call(null,map,key,"\uFDD0'cljsrepl.core/not-found");
{
var G__3710 = ((cljsrepl.core.not_EQ_.call(null,entry,"\uFDD0'cljsrepl.core/not-found"))?cljsrepl.core.assoc.call(null,ret,key,entry):ret);
var G__3711 = cljsrepl.core.next.call(null,keys);
ret = G__3710;
keys = G__3711;
continue;
}
} else
{return ret;
}
break;
}
});
replgoog.provide('cljsrepl.core.PersistentHashSet');

/**
* @constructor
*/
cljsrepl.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljsrepl.core.PersistentHashSet.cljs$lang$type = true;
cljsrepl.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentHashSet");
});
cljsrepl.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentHashSet");
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljsrepl.core.TransientHashSet(cljsrepl.core.transient$.call(null,self__.hash_map)));
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_iset.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
if(cljsrepl.core.truth_(cljsrepl.core._contains_key_QMARK_.call(null,self__.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljsrepl.core.PersistentHashSet.prototype.call = (function() {
var G__3717 = null;
var G__3717__2 = (function (this_sym3715,k){
var self__ = this;
var this_sym3715__$1 = this;
var coll = this_sym3715__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3717__3 = (function (this_sym3716,k,not_found){
var self__ = this;
var this_sym3716__$1 = this;
var coll = this_sym3716__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3717 = function(this_sym3716,k,not_found){
switch(arguments.length){
case 2:
return G__3717__2.call(this,this_sym3716,k);
case 3:
return G__3717__3.call(this,this_sym3716,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3717;
})()
;
cljsrepl.core.PersistentHashSet.prototype.apply = (function (this_sym3713,args3714){
var self__ = this;
return this_sym3713.call.apply(this_sym3713,[this_sym3713].concat(args3714.slice()));
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljsrepl.core.PersistentHashSet(self__.meta,cljsrepl.core.assoc.call(null,self__.hash_map,o,null),null));
});
cljsrepl.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.keys.call(null,self__.hash_map);
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljsrepl.core.PersistentHashSet(self__.meta,cljsrepl.core.dissoc.call(null,self__.hash_map,v),null));
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.count.call(null,cljsrepl.core.seq.call(null,coll));
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = cljsrepl.core.set_QMARK_.call(null,other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (cljsrepl.core.count.call(null,coll) === cljsrepl.core.count.call(null,other));
if(and__3941__auto____$1)
{return cljsrepl.core.every_QMARK_.call(null,(function (p1__3712_SHARP_){
return cljsrepl.core.contains_QMARK_.call(null,coll,p1__3712_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentHashSet.EMPTY,self__.meta);
});
cljsrepl.core.PersistentHashSet.EMPTY = (new cljsrepl.core.PersistentHashSet(null,cljsrepl.core.hash_map.call(null),0));
cljsrepl.core.PersistentHashSet.fromArray = (function (items){
var len = cljsrepl.core.count.call(null,items);
var i = 0;
var out = cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentHashSet.EMPTY);
while(true){
if((i < len))
{{
var G__3718 = (i + 1);
var G__3719 = cljsrepl.core.conj_BANG_.call(null,out,(items[i]));
i = G__3718;
out = G__3719;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,out);
}
break;
}
});
replgoog.provide('cljsrepl.core.TransientHashSet');

/**
* @constructor
*/
cljsrepl.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljsrepl.core.TransientHashSet.cljs$lang$type = true;
cljsrepl.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/TransientHashSet");
});
cljsrepl.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/TransientHashSet");
});
cljsrepl.core.TransientHashSet.prototype.call = (function() {
var G__3725 = null;
var G__3725__2 = (function (this_sym3723,k){
var self__ = this;
var this_sym3723__$1 = this;
var tcoll = this_sym3723__$1;
if((cljsrepl.core._lookup.call(null,self__.transient_map,k,cljsrepl.core.lookup_sentinel) === cljsrepl.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__3725__3 = (function (this_sym3724,k,not_found){
var self__ = this;
var this_sym3724__$1 = this;
var tcoll = this_sym3724__$1;
if((cljsrepl.core._lookup.call(null,self__.transient_map,k,cljsrepl.core.lookup_sentinel) === cljsrepl.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__3725 = function(this_sym3724,k,not_found){
switch(arguments.length){
case 2:
return G__3725__2.call(this,this_sym3724,k);
case 3:
return G__3725__3.call(this,this_sym3724,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3725;
})()
;
cljsrepl.core.TransientHashSet.prototype.apply = (function (this_sym3721,args3722){
var self__ = this;
return this_sym3721.call.apply(this_sym3721,[this_sym3721].concat(args3722.slice()));
});
cljsrepl.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljsrepl.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
if((cljsrepl.core._lookup.call(null,self__.transient_map,v,cljsrepl.core.lookup_sentinel) === cljsrepl.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljsrepl.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
return cljsrepl.core.count.call(null,self__.transient_map);
});
cljsrepl.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
self__.transient_map = cljsrepl.core.dissoc_BANG_.call(null,self__.transient_map,v);
return tcoll;
});
cljsrepl.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
self__.transient_map = cljsrepl.core.assoc_BANG_.call(null,self__.transient_map,o,null);
return tcoll;
});
cljsrepl.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return (new cljsrepl.core.PersistentHashSet(null,cljsrepl.core.persistent_BANG_.call(null,self__.transient_map),null));
});
replgoog.provide('cljsrepl.core.PersistentTreeSet');

/**
* @constructor
*/
cljsrepl.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljsrepl.core.PersistentTreeSet.cljs$lang$type = true;
cljsrepl.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/PersistentTreeSet");
});
cljsrepl.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/PersistentTreeSet");
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_iset.call(null,coll);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljsrepl.core.PersistentTreeSet.prototype.call = (function() {
var G__3730 = null;
var G__3730__2 = (function (this_sym3728,k){
var self__ = this;
var this_sym3728__$1 = this;
var coll = this_sym3728__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3730__3 = (function (this_sym3729,k,not_found){
var self__ = this;
var this_sym3729__$1 = this;
var coll = this_sym3729__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3730 = function(this_sym3729,k,not_found){
switch(arguments.length){
case 2:
return G__3730__2.call(this,this_sym3729,k);
case 3:
return G__3730__3.call(this,this_sym3729,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3730;
})()
;
cljsrepl.core.PersistentTreeSet.prototype.apply = (function (this_sym3726,args3727){
var self__ = this;
return this_sym3726.call.apply(this_sym3726,[this_sym3726].concat(args3727.slice()));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljsrepl.core.PersistentTreeSet(self__.meta,cljsrepl.core.assoc.call(null,self__.tree_map,o,null),null));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.map.call(null,cljsrepl.core.key,cljsrepl.core.rseq.call(null,self__.tree_map));
});
cljsrepl.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
return cljsrepl.core.map.call(null,cljsrepl.core.key,cljsrepl.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
return cljsrepl.core.map.call(null,cljsrepl.core.key,cljsrepl.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return entry;
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core._comparator.call(null,self__.tree_map);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.keys.call(null,self__.tree_map);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljsrepl.core.PersistentTreeSet(self__.meta,cljsrepl.core.dissoc.call(null,self__.tree_map,v),null));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.count.call(null,self__.tree_map);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = cljsrepl.core.set_QMARK_.call(null,other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (cljsrepl.core.count.call(null,coll) === cljsrepl.core.count.call(null,other));
if(and__3941__auto____$1)
{return cljsrepl.core.every_QMARK_.call(null,(function (p1__3720_SHARP_){
return cljsrepl.core.contains_QMARK_.call(null,coll,p1__3720_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljsrepl.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljsrepl.core.PersistentTreeSet.EMPTY = (new cljsrepl.core.PersistentTreeSet(null,cljsrepl.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljsrepl.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljsrepl.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__3731__delegate = function (keys){
var in$ = cljsrepl.core.seq.call(null,keys);
var out = cljsrepl.core.transient$.call(null,cljsrepl.core.PersistentHashSet.EMPTY);
while(true){
if(cljsrepl.core.seq.call(null,in$))
{{
var G__3732 = cljsrepl.core.next.call(null,in$);
var G__3733 = cljsrepl.core.conj_BANG_.call(null,out,cljsrepl.core.first.call(null,in$));
in$ = G__3732;
out = G__3733;
continue;
}
} else
{return cljsrepl.core.persistent_BANG_.call(null,out);
}
break;
}
};
var G__3731 = function (var_args){
var keys = null;
if (replgoog.isDef(var_args)) {
  keys = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3731__delegate.call(this, keys);
};
G__3731.cljs$lang$maxFixedArity = 0;
G__3731.cljs$lang$applyTo = (function (arglist__3734){
var keys = cljsrepl.core.seq(arglist__3734);;
return G__3731__delegate(keys);
});
G__3731.cljs$lang$arity$variadic = G__3731__delegate;
return G__3731;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljsrepl.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljsrepl.core.set = (function set(coll){
return cljsrepl.core.apply.call(null,cljsrepl.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljsrepl.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,cljsrepl.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (replgoog.isDef(var_args)) {
  keys = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__3735){
var keys = cljsrepl.core.seq(arglist__3735);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljsrepl.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljsrepl.core.reduce.call(null,cljsrepl.core._conj,(new cljsrepl.core.PersistentTreeSet(null,cljsrepl.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (replgoog.isDef(var_args)) {
  keys = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__3737){
var comparator = cljsrepl.core.first(arglist__3737);
var keys = cljsrepl.core.rest(arglist__3737);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljsrepl.core.replace = (function replace(smap,coll){
if(cljsrepl.core.vector_QMARK_.call(null,coll))
{var n = cljsrepl.core.count.call(null,coll);
return cljsrepl.core.reduce.call(null,(function (v,i){
var temp__4090__auto__ = cljsrepl.core.find.call(null,smap,cljsrepl.core.nth.call(null,v,i));
if(cljsrepl.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return cljsrepl.core.assoc.call(null,v,i,cljsrepl.core.second.call(null,e));
} else
{return v;
}
}),coll,cljsrepl.core.take.call(null,n,cljsrepl.core.iterate.call(null,cljsrepl.core.inc,0)));
} else
{return cljsrepl.core.map.call(null,(function (p1__3736_SHARP_){
var temp__4090__auto__ = cljsrepl.core.find.call(null,smap,p1__3736_SHARP_);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return cljsrepl.core.second.call(null,e);
} else
{return p1__3736_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljsrepl.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljsrepl.core.LazySeq(null,false,(function (){
return (function (p__3744,seen__$1){
while(true){
var vec__3745 = p__3744;
var f = cljsrepl.core.nth.call(null,vec__3745,0,null);
var xs__$1 = vec__3745;
var temp__4092__auto__ = cljsrepl.core.seq.call(null,xs__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.contains_QMARK_.call(null,seen__$1,f))
{{
var G__3746 = cljsrepl.core.rest.call(null,s);
var G__3747 = seen__$1;
p__3744 = G__3746;
seen__$1 = G__3747;
continue;
}
} else
{return cljsrepl.core.cons.call(null,f,step.call(null,cljsrepl.core.rest.call(null,s),cljsrepl.core.conj.call(null,seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step.call(null,coll,cljsrepl.core.PersistentHashSet.EMPTY);
});
cljsrepl.core.butlast = (function butlast(s){
var ret = cljsrepl.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljsrepl.core.next.call(null,s__$1))
{{
var G__3748 = cljsrepl.core.conj.call(null,ret,cljsrepl.core.first.call(null,s__$1));
var G__3749 = cljsrepl.core.next.call(null,s__$1);
ret = G__3748;
s__$1 = G__3749;
continue;
}
} else
{return cljsrepl.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljsrepl.core.name = (function name(x){
if(cljsrepl.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljsrepl.core.symbol_QMARK_.call(null,x))
{var x__$1 = [cljsrepl.core.str(x)].join('');
var i = x__$1.lastIndexOf("/");
if((function (){var or__3943__auto__ = (i < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x__$1 === "/");
}
})())
{return x__$1;
} else
{return cljsrepl.core.subs.call(null,x__$1,(i + 1));
}
} else
{if(cljsrepl.core.keyword_QMARK_.call(null,x))
{var i = x.lastIndexOf("/");
if((i < 0))
{return cljsrepl.core.subs.call(null,x,2);
} else
{return cljsrepl.core.subs.call(null,x,(i + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljsrepl.core.str("Doesn't support name: "),cljsrepl.core.str(x)].join('')));
} else
{return null;
}
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljsrepl.core.namespace = (function namespace(x){
if(cljsrepl.core.symbol_QMARK_.call(null,x))
{var x__$1 = [cljsrepl.core.str(x)].join('');
var i = x__$1.lastIndexOf("/");
if((function (){var or__3943__auto__ = (i < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x__$1 === "/");
}
})())
{return null;
} else
{return cljsrepl.core.subs.call(null,x__$1,0,i);
}
} else
{if(cljsrepl.core.keyword_QMARK_.call(null,x))
{var i = x.lastIndexOf("/");
if((i > -1))
{return cljsrepl.core.subs.call(null,x,2,i);
} else
{return null;
}
} else
{if("\uFDD0'else")
{throw (new Error([cljsrepl.core.str("Doesn't support namespace: "),cljsrepl.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljsrepl.core.zipmap = (function zipmap(keys,vals){
var map = cljsrepl.core.ObjMap.EMPTY;
var ks = cljsrepl.core.seq.call(null,keys);
var vs = cljsrepl.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto__ = ks;
if(and__3941__auto__)
{return vs;
} else
{return and__3941__auto__;
}
})())
{{
var G__3752 = cljsrepl.core.assoc.call(null,map,cljsrepl.core.first.call(null,ks),cljsrepl.core.first.call(null,vs));
var G__3753 = cljsrepl.core.next.call(null,ks);
var G__3754 = cljsrepl.core.next.call(null,vs);
map = G__3752;
ks = G__3753;
vs = G__3754;
continue;
}
} else
{return map;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljsrepl.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__3757__delegate = function (k,x,y,more){
return cljsrepl.core.reduce.call(null,(function (p1__3750_SHARP_,p2__3751_SHARP_){
return max_key.call(null,k,p1__3750_SHARP_,p2__3751_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3757 = function (k,x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3757__delegate.call(this, k, x, y, more);
};
G__3757.cljs$lang$maxFixedArity = 3;
G__3757.cljs$lang$applyTo = (function (arglist__3758){
var k = cljsrepl.core.first(arglist__3758);
var x = cljsrepl.core.first(cljsrepl.core.next(arglist__3758));
var y = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3758)));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3758)));
return G__3757__delegate(k, x, y, more);
});
G__3757.cljs$lang$arity$variadic = G__3757__delegate;
return G__3757;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljsrepl.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__3759__delegate = function (k,x,y,more){
return cljsrepl.core.reduce.call(null,(function (p1__3755_SHARP_,p2__3756_SHARP_){
return min_key.call(null,k,p1__3755_SHARP_,p2__3756_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3759 = function (k,x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3759__delegate.call(this, k, x, y, more);
};
G__3759.cljs$lang$maxFixedArity = 3;
G__3759.cljs$lang$applyTo = (function (arglist__3760){
var k = cljsrepl.core.first(arglist__3760);
var x = cljsrepl.core.first(cljsrepl.core.next(arglist__3760));
var y = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3760)));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3760)));
return G__3759__delegate(k, x, y, more);
});
G__3759.cljs$lang$arity$variadic = G__3759__delegate;
return G__3759;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljsrepl.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljsrepl.core.cons.call(null,cljsrepl.core.take.call(null,n,s),partition_all.call(null,n,step,cljsrepl.core.drop.call(null,step,s)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljsrepl.core.take_while = (function take_while(pred,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljsrepl.core.truth_(pred.call(null,cljsrepl.core.first.call(null,s))))
{return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,s),take_while.call(null,pred,cljsrepl.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljsrepl.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljsrepl.core._comparator.call(null,sc);
return test.call(null,comp.call(null,cljsrepl.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljsrepl.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljsrepl.core.mk_bound_fn.call(null,sc,test,key);
if(cljsrepl.core.truth_(cljsrepl.core.PersistentHashSet.fromArray([cljsrepl.core._GT_,cljsrepl.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto__ = cljsrepl.core._sorted_seq_from.call(null,sc,key,true);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var vec__3763 = temp__4092__auto__;
var e = cljsrepl.core.nth.call(null,vec__3763,0,null);
var s = vec__3763;
if(cljsrepl.core.truth_(include.call(null,e)))
{return s;
} else
{return cljsrepl.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljsrepl.core.take_while.call(null,include,cljsrepl.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = cljsrepl.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var vec__3764 = temp__4092__auto__;
var e = cljsrepl.core.nth.call(null,vec__3764,0,null);
var s = vec__3764;
return cljsrepl.core.take_while.call(null,cljsrepl.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljsrepl.core.truth_(cljsrepl.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljsrepl.core.next.call(null,s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljsrepl.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljsrepl.core.mk_bound_fn.call(null,sc,test,key);
if(cljsrepl.core.truth_(cljsrepl.core.PersistentHashSet.fromArray([cljsrepl.core._LT_,cljsrepl.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto__ = cljsrepl.core._sorted_seq_from.call(null,sc,key,false);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var vec__3767 = temp__4092__auto__;
var e = cljsrepl.core.nth.call(null,vec__3767,0,null);
var s = vec__3767;
if(cljsrepl.core.truth_(include.call(null,e)))
{return s;
} else
{return cljsrepl.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljsrepl.core.take_while.call(null,include,cljsrepl.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = cljsrepl.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var vec__3768 = temp__4092__auto__;
var e = cljsrepl.core.nth.call(null,vec__3768,0,null);
var s = vec__3768;
return cljsrepl.core.take_while.call(null,cljsrepl.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljsrepl.core.truth_(cljsrepl.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljsrepl.core.next.call(null,s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;
replgoog.provide('cljsrepl.core.Range');

/**
* @constructor
*/
cljsrepl.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljsrepl.core.Range.cljs$lang$type = true;
cljsrepl.core.Range.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Range");
});
cljsrepl.core.Range.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Range");
});
cljsrepl.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var h__1882__auto__ = self__.__hash;
if(!((h__1882__auto__ == null)))
{return h__1882__auto__;
} else
{var h__1882__auto____$1 = cljsrepl.core.hash_coll.call(null,rng);
self__.__hash = h__1882__auto____$1;
return h__1882__auto____$1;
}
});
cljsrepl.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if(((self__.start + self__.step) < self__.end))
{return (new cljsrepl.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljsrepl.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljsrepl.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
return cljsrepl.core.cons.call(null,o,rng);
});
cljsrepl.core.Range.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,rng,f);
});
cljsrepl.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var self__ = this;
return cljsrepl.core.ci_reduce.call(null,rng,f,s);
});
cljsrepl.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if((self__.start < self__.end))
{return rng;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng;
} else
{return null;
}
}
});
cljsrepl.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
if(cljsrepl.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljsrepl.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
return self__.start;
});
cljsrepl.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljsrepl.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljsrepl.core.List.EMPTY;
}
});
cljsrepl.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
return cljsrepl.core.equiv_sequential.call(null,rng,other);
});
cljsrepl.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
return (new cljsrepl.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljsrepl.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
return self__.meta;
});
cljsrepl.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})())
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljsrepl.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})())
{return self__.start;
} else
{return not_found;
}
}
});
cljsrepl.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
return cljsrepl.core.with_meta.call(null,cljsrepl.core.List.EMPTY,self__.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljsrepl.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljsrepl.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljsrepl.core.take_nth = (function take_nth(n,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,s),take_nth.call(null,n,cljsrepl.core.drop.call(null,n,s)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljsrepl.core.split_with = (function split_with(pred,coll){
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.take_while.call(null,pred,coll),cljsrepl.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljsrepl.core.partition_by = (function partition_by(f,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var fst = cljsrepl.core.first.call(null,s);
var fv = f.call(null,fst);
var run = cljsrepl.core.cons.call(null,fst,cljsrepl.core.take_while.call(null,(function (p1__3769_SHARP_){
return cljsrepl.core._EQ_.call(null,fv,f.call(null,p1__3769_SHARP_));
}),cljsrepl.core.next.call(null,s)));
return cljsrepl.core.cons.call(null,run,partition_by.call(null,f,cljsrepl.core.seq.call(null,cljsrepl.core.drop.call(null,cljsrepl.core.count.call(null,run),s))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljsrepl.core.frequencies = (function frequencies(coll){
return cljsrepl.core.persistent_BANG_.call(null,cljsrepl.core.reduce.call(null,(function (counts,x){
return cljsrepl.core.assoc_BANG_.call(null,counts,x,(cljsrepl.core._lookup.call(null,counts,x,0) + 1));
}),cljsrepl.core.transient$.call(null,cljsrepl.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljsrepl.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return reductions.call(null,f,cljsrepl.core.first.call(null,s),cljsrepl.core.rest.call(null,s));
} else
{return cljsrepl.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljsrepl.core.cons.call(null,init,(new cljsrepl.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return reductions.call(null,f,f.call(null,init,cljsrepl.core.first.call(null,s)),cljsrepl.core.rest.call(null,s));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljsrepl.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__3780 = null;
var G__3780__0 = (function (){
return cljsrepl.core.vector.call(null,f.call(null));
});
var G__3780__1 = (function (x){
return cljsrepl.core.vector.call(null,f.call(null,x));
});
var G__3780__2 = (function (x,y){
return cljsrepl.core.vector.call(null,f.call(null,x,y));
});
var G__3780__3 = (function (x,y,z){
return cljsrepl.core.vector.call(null,f.call(null,x,y,z));
});
var G__3780__4 = (function() { 
var G__3781__delegate = function (x,y,z,args){
return cljsrepl.core.vector.call(null,cljsrepl.core.apply.call(null,f,x,y,z,args));
};
var G__3781 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3781__delegate.call(this, x, y, z, args);
};
G__3781.cljs$lang$maxFixedArity = 3;
G__3781.cljs$lang$applyTo = (function (arglist__3782){
var x = cljsrepl.core.first(arglist__3782);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3782));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3782)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3782)));
return G__3781__delegate(x, y, z, args);
});
G__3781.cljs$lang$arity$variadic = G__3781__delegate;
return G__3781;
})()
;
G__3780 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3780__0.call(this);
case 1:
return G__3780__1.call(this,x);
case 2:
return G__3780__2.call(this,x,y);
case 3:
return G__3780__3.call(this,x,y,z);
default:
return G__3780__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3780.cljs$lang$maxFixedArity = 3;
G__3780.cljs$lang$applyTo = G__3780__4.cljs$lang$applyTo;
return G__3780;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__3783 = null;
var G__3783__0 = (function (){
return cljsrepl.core.vector.call(null,f.call(null),g.call(null));
});
var G__3783__1 = (function (x){
return cljsrepl.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3783__2 = (function (x,y){
return cljsrepl.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3783__3 = (function (x,y,z){
return cljsrepl.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3783__4 = (function() { 
var G__3784__delegate = function (x,y,z,args){
return cljsrepl.core.vector.call(null,cljsrepl.core.apply.call(null,f,x,y,z,args),cljsrepl.core.apply.call(null,g,x,y,z,args));
};
var G__3784 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3784__delegate.call(this, x, y, z, args);
};
G__3784.cljs$lang$maxFixedArity = 3;
G__3784.cljs$lang$applyTo = (function (arglist__3785){
var x = cljsrepl.core.first(arglist__3785);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3785));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3785)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3785)));
return G__3784__delegate(x, y, z, args);
});
G__3784.cljs$lang$arity$variadic = G__3784__delegate;
return G__3784;
})()
;
G__3783 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3783__0.call(this);
case 1:
return G__3783__1.call(this,x);
case 2:
return G__3783__2.call(this,x,y);
case 3:
return G__3783__3.call(this,x,y,z);
default:
return G__3783__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3783.cljs$lang$maxFixedArity = 3;
G__3783.cljs$lang$applyTo = G__3783__4.cljs$lang$applyTo;
return G__3783;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__3786 = null;
var G__3786__0 = (function (){
return cljsrepl.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3786__1 = (function (x){
return cljsrepl.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3786__2 = (function (x,y){
return cljsrepl.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3786__3 = (function (x,y,z){
return cljsrepl.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3786__4 = (function() { 
var G__3787__delegate = function (x,y,z,args){
return cljsrepl.core.vector.call(null,cljsrepl.core.apply.call(null,f,x,y,z,args),cljsrepl.core.apply.call(null,g,x,y,z,args),cljsrepl.core.apply.call(null,h,x,y,z,args));
};
var G__3787 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3787__delegate.call(this, x, y, z, args);
};
G__3787.cljs$lang$maxFixedArity = 3;
G__3787.cljs$lang$applyTo = (function (arglist__3788){
var x = cljsrepl.core.first(arglist__3788);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3788));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3788)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3788)));
return G__3787__delegate(x, y, z, args);
});
G__3787.cljs$lang$arity$variadic = G__3787__delegate;
return G__3787;
})()
;
G__3786 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3786__0.call(this);
case 1:
return G__3786__1.call(this,x);
case 2:
return G__3786__2.call(this,x,y);
case 3:
return G__3786__3.call(this,x,y,z);
default:
return G__3786__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3786.cljs$lang$maxFixedArity = 3;
G__3786.cljs$lang$applyTo = G__3786__4.cljs$lang$applyTo;
return G__3786;
})()
});
var juxt__4 = (function() { 
var G__3789__delegate = function (f,g,h,fs){
var fs__$1 = cljsrepl.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__3790 = null;
var G__3790__0 = (function (){
return cljsrepl.core.reduce.call(null,(function (p1__3770_SHARP_,p2__3771_SHARP_){
return cljsrepl.core.conj.call(null,p1__3770_SHARP_,p2__3771_SHARP_.call(null));
}),cljsrepl.core.PersistentVector.EMPTY,fs__$1);
});
var G__3790__1 = (function (x){
return cljsrepl.core.reduce.call(null,(function (p1__3772_SHARP_,p2__3773_SHARP_){
return cljsrepl.core.conj.call(null,p1__3772_SHARP_,p2__3773_SHARP_.call(null,x));
}),cljsrepl.core.PersistentVector.EMPTY,fs__$1);
});
var G__3790__2 = (function (x,y){
return cljsrepl.core.reduce.call(null,(function (p1__3774_SHARP_,p2__3775_SHARP_){
return cljsrepl.core.conj.call(null,p1__3774_SHARP_,p2__3775_SHARP_.call(null,x,y));
}),cljsrepl.core.PersistentVector.EMPTY,fs__$1);
});
var G__3790__3 = (function (x,y,z){
return cljsrepl.core.reduce.call(null,(function (p1__3776_SHARP_,p2__3777_SHARP_){
return cljsrepl.core.conj.call(null,p1__3776_SHARP_,p2__3777_SHARP_.call(null,x,y,z));
}),cljsrepl.core.PersistentVector.EMPTY,fs__$1);
});
var G__3790__4 = (function() { 
var G__3791__delegate = function (x,y,z,args){
return cljsrepl.core.reduce.call(null,(function (p1__3778_SHARP_,p2__3779_SHARP_){
return cljsrepl.core.conj.call(null,p1__3778_SHARP_,cljsrepl.core.apply.call(null,p2__3779_SHARP_,x,y,z,args));
}),cljsrepl.core.PersistentVector.EMPTY,fs__$1);
};
var G__3791 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3791__delegate.call(this, x, y, z, args);
};
G__3791.cljs$lang$maxFixedArity = 3;
G__3791.cljs$lang$applyTo = (function (arglist__3792){
var x = cljsrepl.core.first(arglist__3792);
var y = cljsrepl.core.first(cljsrepl.core.next(arglist__3792));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3792)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3792)));
return G__3791__delegate(x, y, z, args);
});
G__3791.cljs$lang$arity$variadic = G__3791__delegate;
return G__3791;
})()
;
G__3790 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3790__0.call(this);
case 1:
return G__3790__1.call(this,x);
case 2:
return G__3790__2.call(this,x,y);
case 3:
return G__3790__3.call(this,x,y,z);
default:
return G__3790__4.cljs$lang$arity$variadic(x,y,z, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3790.cljs$lang$maxFixedArity = 3;
G__3790.cljs$lang$applyTo = G__3790__4.cljs$lang$applyTo;
return G__3790;
})()
};
var G__3789 = function (f,g,h,var_args){
var fs = null;
if (replgoog.isDef(var_args)) {
  fs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3789__delegate.call(this, f, g, h, fs);
};
G__3789.cljs$lang$maxFixedArity = 3;
G__3789.cljs$lang$applyTo = (function (arglist__3793){
var f = cljsrepl.core.first(arglist__3793);
var g = cljsrepl.core.first(cljsrepl.core.next(arglist__3793));
var h = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3793)));
var fs = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3793)));
return G__3789__delegate(f, g, h, fs);
});
G__3789.cljs$lang$arity$variadic = G__3789__delegate;
return G__3789;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljsrepl.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljsrepl.core.seq.call(null,coll))
{{
var G__3794 = cljsrepl.core.next.call(null,coll);
coll = G__3794;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core.seq.call(null,coll);
if(and__3941__auto__)
{return (n > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3795 = (n - 1);
var G__3796 = cljsrepl.core.next.call(null,coll);
n = G__3795;
coll = G__3796;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljsrepl.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljsrepl.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljsrepl.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljsrepl.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljsrepl.core.re_matches = (function re_matches(re,s){
var matches = re.exec(s);
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.first.call(null,matches),s))
{if((cljsrepl.core.count.call(null,matches) === 1))
{return cljsrepl.core.first.call(null,matches);
} else
{return cljsrepl.core.vec.call(null,matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljsrepl.core.re_find = (function re_find(re,s){
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((cljsrepl.core.count.call(null,matches) === 1))
{return cljsrepl.core.first.call(null,matches);
} else
{return cljsrepl.core.vec.call(null,matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljsrepl.core.re_seq = (function re_seq(re,s){
var match_data = cljsrepl.core.re_find.call(null,re,s);
var match_idx = s.search(re);
var match_str = ((cljsrepl.core.coll_QMARK_.call(null,match_data))?cljsrepl.core.first.call(null,match_data):match_data);
var post_match = cljsrepl.core.subs.call(null,s,(match_idx + cljsrepl.core.count.call(null,match_str)));
if(cljsrepl.core.truth_(match_data))
{return (new cljsrepl.core.LazySeq(null,false,(function (){
return cljsrepl.core.cons.call(null,match_data,(((cljsrepl.core.count.call(null,post_match) > 0))?re_seq.call(null,re,post_match):null));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljsrepl.core.re_pattern = (function re_pattern(s){
var vec__3799 = cljsrepl.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljsrepl.core.nth.call(null,vec__3799,0,null);
var flags = cljsrepl.core.nth.call(null,vec__3799,1,null);
var pattern = cljsrepl.core.nth.call(null,vec__3799,2,null);
return (new RegExp(pattern,flags));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljsrepl.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray([begin], true),cljsrepl.core.flatten1.call(null,cljsrepl.core.interpose.call(null,cljsrepl.core.PersistentVector.fromArray([sep], true),cljsrepl.core.map.call(null,(function (p1__3797_SHARP_){
return print_one.call(null,p1__3797_SHARP_,opts);
}),coll))),cljsrepl.core.PersistentVector.fromArray([end], true));
});
cljsrepl.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljsrepl.core._write.call(null,writer,begin);
if(cljsrepl.core.seq.call(null,coll))
{print_one.call(null,cljsrepl.core.first.call(null,coll),writer,opts);
} else
{}
var G__3801_3802 = cljsrepl.core.seq.call(null,cljsrepl.core.next.call(null,coll));
while(true){
if(G__3801_3802)
{var o_3803 = cljsrepl.core.first.call(null,G__3801_3802);
cljsrepl.core._write.call(null,writer,sep);
print_one.call(null,o_3803,writer,opts);
{
var G__3804 = cljsrepl.core.next.call(null,G__3801_3802);
G__3801_3802 = G__3804;
continue;
}
} else
{}
break;
}
return cljsrepl.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljsrepl.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__3806 = cljsrepl.core.seq.call(null,ss);
while(true){
if(G__3806)
{var s = cljsrepl.core.first.call(null,G__3806);
cljsrepl.core._write.call(null,writer,s);
{
var G__3807 = cljsrepl.core.next.call(null,G__3806);
G__3806 = G__3807;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (replgoog.isDef(var_args)) {
  ss = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__3808){
var writer = cljsrepl.core.first(arglist__3808);
var ss = cljsrepl.core.rest(arglist__3808);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljsrepl.core.string_print = (function string_print(x){
cljsrepl.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljsrepl.core.flush = (function flush(){
return null;
});
replgoog.provide('cljsrepl.core.StringBufferWriter');

/**
* @constructor
*/
cljsrepl.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljsrepl.core.StringBufferWriter.cljs$lang$type = true;
cljsrepl.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/StringBufferWriter");
});
cljsrepl.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/StringBufferWriter");
});
cljsrepl.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
return self__.sb.append(s);
});
cljsrepl.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
return null;
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljsrepl.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljsrepl.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljsrepl.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljsrepl.core.concat.call(null,(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__3811 = obj;
if(G__3811)
{if((function (){var or__3943__auto__ = (G__3811.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3811.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3811.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMeta,G__3811);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMeta,G__3811);
}
})();
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return cljsrepl.core.meta.call(null,obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())?cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljsrepl.core.meta.call(null,obj),opts),cljsrepl.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__3812 = obj;
if(G__3812)
{if((function (){var or__3943__auto__ = (G__3812.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3812.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3812.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IPrintable,G__3812);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IPrintable,G__3812);
}
})())?cljsrepl.core._pr_seq.call(null,obj,opts):(cljsrepl.core.truth_(cljsrepl.core.regexp_QMARK_.call(null,obj))?cljsrepl.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljsrepl.core.list.call(null,"#<",[cljsrepl.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljsrepl.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljsrepl.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljsrepl.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__3816 = obj;
if(G__3816)
{if((function (){var or__3943__auto__ = (G__3816.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3816.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3816.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMeta,G__3816);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IMeta,G__3816);
}
})();
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return cljsrepl.core.meta.call(null,obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljsrepl.core._write.call(null,writer,"^");
pr_writer.call(null,cljsrepl.core.meta.call(null,obj),writer,opts);
cljsrepl.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__3817 = obj;
if(G__3817)
{if((function (){var or__3943__auto__ = (G__3817.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3817.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__3817.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IPrintWithWriter,G__3817);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IPrintWithWriter,G__3817);
}
})())
{return cljsrepl.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__3818 = obj;
if(G__3818)
{if((function (){var or__3943__auto__ = (G__3818.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3818.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3818.cljs$lang$protocol_mask$partition0$))
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IPrintable,G__3818);
} else
{return false;
}
}
} else
{return cljsrepl.core.type_satisfies_.call(null,cljsrepl.core.IPrintable,G__3818);
}
})())
{return cljsrepl.core.apply.call(null,cljsrepl.core.write_all,writer,cljsrepl.core._pr_seq.call(null,obj,opts));
} else
{if(cljsrepl.core.truth_(cljsrepl.core.regexp_QMARK_.call(null,obj)))
{return cljsrepl.core.write_all.call(null,writer,"#\"",obj.source.split("\\/").join("/"),"\"");
} else
{if("\uFDD0'else")
{return cljsrepl.core.write_all.call(null,writer,"#<",[cljsrepl.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljsrepl.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljsrepl.core.pr_writer.call(null,cljsrepl.core.first.call(null,objs),writer,opts);
var G__3820 = cljsrepl.core.seq.call(null,cljsrepl.core.next.call(null,objs));
while(true){
if(G__3820)
{var obj = cljsrepl.core.first.call(null,G__3820);
cljsrepl.core._write.call(null,writer," ");
cljsrepl.core.pr_writer.call(null,obj,writer,opts);
{
var G__3821 = cljsrepl.core.next.call(null,G__3820);
G__3820 = G__3821;
continue;
}
} else
{return null;
}
break;
}
});
cljsrepl.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new replgoog.string.StringBuffer());
var writer = (new cljsrepl.core.StringBufferWriter(sb));
cljsrepl.core.pr_seq_writer.call(null,objs,writer,opts);
cljsrepl.core._flush.call(null,writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljsrepl.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljsrepl.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljsrepl.core.str(cljsrepl.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljsrepl.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljsrepl.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb = cljsrepl.core.pr_sb_with_opts.call(null,objs,opts);
sb.append("\n");
return [cljsrepl.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljsrepl.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljsrepl.core.string_print.call(null,cljsrepl.core.pr_str_with_opts.call(null,objs,opts));
});
cljsrepl.core.newline = (function newline(opts){
cljsrepl.core.string_print.call(null,"\n");
if(cljsrepl.core.truth_(cljsrepl.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljsrepl.core.flush.call(null);
} else
{return null;
}
});
cljsrepl.core._STAR_flush_on_newline_STAR_ = true;
cljsrepl.core._STAR_print_readably_STAR_ = true;
cljsrepl.core._STAR_print_meta_STAR_ = false;
cljsrepl.core._STAR_print_dup_STAR_ = false;
cljsrepl.core.pr_opts = (function pr_opts(){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljsrepl.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljsrepl.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljsrepl.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljsrepl.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljsrepl.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljsrepl.core.pr_str_with_opts.call(null,objs,cljsrepl.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3822){
var objs = cljsrepl.core.seq(arglist__3822);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljsrepl.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljsrepl.core.prn_str_with_opts.call(null,objs,cljsrepl.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__3823){
var objs = cljsrepl.core.seq(arglist__3823);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljsrepl.core.pr = (function() { 
var pr__delegate = function (objs){
return cljsrepl.core.pr_with_opts.call(null,objs,cljsrepl.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3824){
var objs = cljsrepl.core.seq(arglist__3824);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljsrepl.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljsrepl.core.pr_with_opts.call(null,objs,cljsrepl.core.assoc.call(null,cljsrepl.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3825){
var objs = cljsrepl.core.seq(arglist__3825);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljsrepl.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljsrepl.core.pr_str_with_opts.call(null,objs,cljsrepl.core.assoc.call(null,cljsrepl.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__3826){
var objs = cljsrepl.core.seq(arglist__3826);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljsrepl.core.println = (function() { 
var println__delegate = function (objs){
cljsrepl.core.pr_with_opts.call(null,objs,cljsrepl.core.assoc.call(null,cljsrepl.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljsrepl.core.newline.call(null,cljsrepl.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3827){
var objs = cljsrepl.core.seq(arglist__3827);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljsrepl.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljsrepl.core.prn_str_with_opts.call(null,objs,cljsrepl.core.assoc.call(null,cljsrepl.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__3828){
var objs = cljsrepl.core.seq(arglist__3828);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljsrepl.core.prn = (function() { 
var prn__delegate = function (objs){
cljsrepl.core.pr_with_opts.call(null,objs,cljsrepl.core.pr_opts.call(null));
return cljsrepl.core.newline.call(null,cljsrepl.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3829){
var objs = cljsrepl.core.seq(arglist__3829);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljsrepl.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljsrepl.core.print.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__3830){
var fmt = cljsrepl.core.first(arglist__3830);
var args = cljsrepl.core.rest(arglist__3830);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljsrepl.core.char_escapes = cljsrepl.core.ObjMap.fromObject(["\"","\\","\b","\f","\n","\r","\t"],{"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"});
cljsrepl.core.quote_string = (function quote_string(s){
return [cljsrepl.core.str("\""),cljsrepl.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return cljsrepl.core._lookup.call(null,cljsrepl.core.char_escapes,match,null);
}))),cljsrepl.core.str("\"")].join('');
});
cljsrepl.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
(cljsrepl.core.IPrintable["number"] = true);
(cljsrepl.core._pr_seq["number"] = (function (n,opts){
return cljsrepl.core.list.call(null,[cljsrepl.core.str(n)].join(''));
}));
cljsrepl.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"["," ","]",opts,coll);
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"#queue ["," ","]",opts,cljsrepl.core.seq.call(null,coll));
});
cljsrepl.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljsrepl.core.IPrintable["boolean"] = true);
(cljsrepl.core._pr_seq["boolean"] = (function (bool,opts){
return cljsrepl.core.list.call(null,[cljsrepl.core.str(bool)].join(''));
}));
(cljsrepl.core.IPrintable["string"] = true);
(cljsrepl.core._pr_seq["string"] = (function (obj,opts){
if(cljsrepl.core.keyword_QMARK_.call(null,obj))
{return cljsrepl.core.list.call(null,[cljsrepl.core.str(":"),cljsrepl.core.str((function (){var temp__4092__auto__ = cljsrepl.core.namespace.call(null,obj);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [cljsrepl.core.str(nspc),cljsrepl.core.str("/")].join('');
} else
{return null;
}
})()),cljsrepl.core.str(cljsrepl.core.name.call(null,obj))].join(''));
} else
{if(cljsrepl.core.symbol_QMARK_.call(null,obj))
{return cljsrepl.core.list.call(null,[cljsrepl.core.str((function (){var temp__4092__auto__ = cljsrepl.core.namespace.call(null,obj);
if(cljsrepl.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [cljsrepl.core.str(nspc),cljsrepl.core.str("/")].join('');
} else
{return null;
}
})()),cljsrepl.core.str(cljsrepl.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljsrepl.core.list.call(null,(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'readably")).call(null,opts))?cljsrepl.core.quote_string.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljsrepl.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"["," ","]",opts,coll);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"["," ","]",opts,coll);
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"#{"," ","}",opts,coll);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"["," ","]",opts,coll);
});
cljsrepl.core.List.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
(cljsrepl.core.IPrintable["array"] = true);
(cljsrepl.core._pr_seq["array"] = (function (a,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljsrepl.core.IPrintable["function"] = true);
(cljsrepl.core._pr_seq["function"] = (function (this$){
return cljsrepl.core.list.call(null,"#<",[cljsrepl.core.str(this$)].join(''),">");
}));
cljsrepl.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.list.call(null,"()");
});
cljsrepl.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize = (function (n,len){
var ns = [cljsrepl.core.str(n)].join('');
while(true){
if((cljsrepl.core.count.call(null,ns) < len))
{{
var G__3831 = [cljsrepl.core.str("0"),cljsrepl.core.str(ns)].join('');
ns = G__3831;
continue;
}
} else
{return ns;
}
break;
}
});
return cljsrepl.core.list.call(null,[cljsrepl.core.str("#inst \""),cljsrepl.core.str(d.getUTCFullYear()),cljsrepl.core.str("-"),cljsrepl.core.str(normalize.call(null,(d.getUTCMonth() + 1),2)),cljsrepl.core.str("-"),cljsrepl.core.str(normalize.call(null,d.getUTCDate(),2)),cljsrepl.core.str("T"),cljsrepl.core.str(normalize.call(null,d.getUTCHours(),2)),cljsrepl.core.str(":"),cljsrepl.core.str(normalize.call(null,d.getUTCMinutes(),2)),cljsrepl.core.str(":"),cljsrepl.core.str(normalize.call(null,d.getUTCSeconds(),2)),cljsrepl.core.str("."),cljsrepl.core.str(normalize.call(null,d.getUTCMilliseconds(),3)),cljsrepl.core.str("-"),cljsrepl.core.str("00:00\"")].join(''));
});
cljsrepl.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.Range.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljsrepl.core.pr_sequential.call(null,cljsrepl.core.pr_seq,"("," ",")",opts,coll);
});
cljsrepl.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
(cljsrepl.core.IPrintWithWriter["number"] = true);
(cljsrepl.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljsrepl.core._write.call(null,writer,[cljsrepl.core.str(n)].join(''));
}));
cljsrepl.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"["," ","]",opts,coll);
});
cljsrepl.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"#queue ["," ","]",opts,cljsrepl.core.seq.call(null,coll));
});
cljsrepl.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljsrepl.core.IPrintWithWriter["boolean"] = true);
(cljsrepl.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljsrepl.core._write.call(null,writer,[cljsrepl.core.str(bool)].join(''));
}));
(cljsrepl.core.IPrintWithWriter["string"] = true);
(cljsrepl.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljsrepl.core.keyword_QMARK_.call(null,obj))
{cljsrepl.core._write.call(null,writer,":");
var temp__4092__auto___3832 = cljsrepl.core.namespace.call(null,obj);
if(cljsrepl.core.truth_(temp__4092__auto___3832))
{var nspc_3833 = temp__4092__auto___3832;
cljsrepl.core.write_all.call(null,writer,[cljsrepl.core.str(nspc_3833)].join(''),"/");
} else
{}
return cljsrepl.core._write.call(null,writer,cljsrepl.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljsrepl.core._write.call(null,writer,cljsrepl.core.quote_string.call(null,obj));
} else
{return cljsrepl.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}));
cljsrepl.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"["," ","]",opts,coll);
});
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"["," ","]",opts,coll);
});
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"#{"," ","}",opts,coll);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"["," ","]",opts,coll);
});
cljsrepl.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
(cljsrepl.core.IPrintWithWriter["array"] = true);
(cljsrepl.core._pr_writer["array"] = (function (a,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljsrepl.core.IPrintWithWriter["function"] = true);
(cljsrepl.core._pr_writer["function"] = (function (this$,writer,_){
return cljsrepl.core.write_all.call(null,writer,"#<",[cljsrepl.core.str(this$)].join(''),">");
}));
cljsrepl.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core._write.call(null,writer,"()");
});
cljsrepl.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize = (function (n,len){
var ns = [cljsrepl.core.str(n)].join('');
while(true){
if((cljsrepl.core.count.call(null,ns) < len))
{{
var G__3834 = [cljsrepl.core.str("0"),cljsrepl.core.str(ns)].join('');
ns = G__3834;
continue;
}
} else
{return ns;
}
break;
}
});
return cljsrepl.core.write_all.call(null,writer,"#inst \"",[cljsrepl.core.str(d.getUTCFullYear())].join(''),"-",normalize.call(null,(d.getUTCMonth() + 1),2),"-",normalize.call(null,d.getUTCDate(),2),"T",normalize.call(null,d.getUTCHours(),2),":",normalize.call(null,d.getUTCMinutes(),2),":",normalize.call(null,d.getUTCSeconds(),2),".",normalize.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljsrepl.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,""," ","",opts,keyval);
});
return cljsrepl.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljsrepl.core.Symbol.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s,writer,_){
var temp__4092__auto___3835 = cljsrepl.core.namespace.call(null,s);
if(cljsrepl.core.truth_(temp__4092__auto___3835))
{var nspc_3836 = temp__4092__auto___3835;
cljsrepl.core.write_all.call(null,writer,[cljsrepl.core.str(nspc_3836)].join(''),"/");
} else
{}
return cljsrepl.core._write.call(null,writer,cljsrepl.core.name.call(null,s));
});
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljsrepl.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljsrepl.core.pr_sequential_writer.call(null,writer,cljsrepl.core.pr_writer,"("," ",")",opts,coll);
});
cljsrepl.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljsrepl.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljsrepl.core.compare_indexed.call(null,x,y);
});
replgoog.provide('cljsrepl.core.Atom');

/**
* @constructor
*/
cljsrepl.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljsrepl.core.Atom.cljs$lang$type = true;
cljsrepl.core.Atom.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Atom");
});
cljsrepl.core.Atom.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Atom");
});
cljsrepl.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return replgoog.getUid(this$);
});
cljsrepl.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3837 = cljsrepl.core.seq.call(null,self__.watches);
while(true){
if(G__3837)
{var vec__3838 = cljsrepl.core.first.call(null,G__3837);
var key = cljsrepl.core.nth.call(null,vec__3838,0,null);
var f = cljsrepl.core.nth.call(null,vec__3838,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__3839 = cljsrepl.core.next.call(null,G__3837);
G__3837 = G__3839;
continue;
}
} else
{return null;
}
break;
}
});
cljsrepl.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljsrepl.core.assoc.call(null,self__.watches,key,f);
});
cljsrepl.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljsrepl.core.dissoc.call(null,self__.watches,key);
});
cljsrepl.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
cljsrepl.core._write.call(null,writer,"#<Atom: ");
cljsrepl.core._pr_writer.call(null,self__.state,writer,opts);
return cljsrepl.core._write.call(null,writer,">");
});
cljsrepl.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljsrepl.core.concat.call(null,cljsrepl.core.PersistentVector.fromArray(["#<Atom: "], true),cljsrepl.core._pr_seq.call(null,self__.state,opts),">");
});
cljsrepl.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return self__.meta;
});
cljsrepl.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.state;
});
cljsrepl.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljsrepl.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljsrepl.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__3843__delegate = function (x,p__3840){
var map__3842 = p__3840;
var map__3842__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__3842))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__3842):map__3842);
var validator = cljsrepl.core._lookup.call(null,map__3842__$1,"\uFDD0'validator",null);
var meta = cljsrepl.core._lookup.call(null,map__3842__$1,"\uFDD0'meta",null);
return (new cljsrepl.core.Atom(x,meta,validator,null));
};
var G__3843 = function (x,var_args){
var p__3840 = null;
if (replgoog.isDef(var_args)) {
  p__3840 = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3843__delegate.call(this, x, p__3840);
};
G__3843.cljs$lang$maxFixedArity = 1;
G__3843.cljs$lang$applyTo = (function (arglist__3844){
var x = cljsrepl.core.first(arglist__3844);
var p__3840 = cljsrepl.core.rest(arglist__3844);
return G__3843__delegate(x, p__3840);
});
G__3843.cljs$lang$arity$variadic = G__3843__delegate;
return G__3843;
})()
;
atom = function(x,var_args){
var p__3840 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljsrepl.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljsrepl.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto___3845 = a.validator;
if(cljsrepl.core.truth_(temp__4092__auto___3845))
{var validate_3846 = temp__4092__auto___3845;
if(cljsrepl.core.truth_(validate_3846.call(null,new_value)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Validator rejected reference state"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"validate")),(new cljsrepl.core.Symbol(null,"new-value"))),cljsrepl.core.hash_map("\uFDD0'line",6797,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value_3847 = a.state;
a.state = new_value;
cljsrepl.core._notify_watches.call(null,a,old_value_3847,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljsrepl.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljsrepl.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljsrepl.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljsrepl.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljsrepl.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__3848__delegate = function (a,f,x,y,z,more){
return cljsrepl.core.reset_BANG_.call(null,a,cljsrepl.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3848 = function (a,f,x,y,z,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3848__delegate.call(this, a, f, x, y, z, more);
};
G__3848.cljs$lang$maxFixedArity = 5;
G__3848.cljs$lang$applyTo = (function (arglist__3849){
var a = cljsrepl.core.first(arglist__3849);
var f = cljsrepl.core.first(cljsrepl.core.next(arglist__3849));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3849)));
var y = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3849))));
var z = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3849)))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3849)))));
return G__3848__delegate(a, f, x, y, z, more);
});
G__3848.cljs$lang$arity$variadic = G__3848__delegate;
return G__3848;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljsrepl.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljsrepl.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljsrepl.core._EQ_.call(null,a.state,oldval))
{cljsrepl.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljsrepl.core.deref = (function deref(o){
return cljsrepl.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljsrepl.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljsrepl.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljsrepl.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljsrepl.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3850){
var iref = cljsrepl.core.first(arglist__3850);
var f = cljsrepl.core.first(cljsrepl.core.next(arglist__3850));
var args = cljsrepl.core.rest(cljsrepl.core.next(arglist__3850));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljsrepl.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljsrepl.core.add_watch = (function add_watch(iref,key,f){
return cljsrepl.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljsrepl.core.remove_watch = (function remove_watch(iref,key){
return cljsrepl.core._remove_watch.call(null,iref,key);
});
cljsrepl.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljsrepl.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljsrepl.core.gensym_counter == null))
{cljsrepl.core.gensym_counter = cljsrepl.core.atom.call(null,0);
} else
{}
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str(prefix_string),cljsrepl.core.str(cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.gensym_counter,cljsrepl.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljsrepl.core.fixture1 = 1;
cljsrepl.core.fixture2 = 2;
replgoog.provide('cljsrepl.core.Delay');

/**
* @constructor
*/
cljsrepl.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljsrepl.core.Delay.cljs$lang$type = true;
cljsrepl.core.Delay.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/Delay");
});
cljsrepl.core.Delay.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/Delay");
});
cljsrepl.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
return (new cljsrepl.core.Keyword("\uFDD0'done")).call(null,cljsrepl.core.deref.call(null,self__.state));
});
cljsrepl.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return (new cljsrepl.core.Keyword("\uFDD0'value")).call(null,cljsrepl.core.swap_BANG_.call(null,self__.state,(function (p__3851){
var map__3852 = p__3851;
var map__3852__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__3852))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__3852):map__3852);
var curr_state = map__3852__$1;
var done = cljsrepl.core._lookup.call(null,map__3852__$1,"\uFDD0'done",null);
if(cljsrepl.core.truth_(done))
{return curr_state;
} else
{return cljsrepl.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":self__.f.call(null)});
}
})));
});
/**
* returns true if x is a Delay created with delay
*/
cljsrepl.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljsrepl.core.force = (function force(x){
if(cljsrepl.core.delay_QMARK_.call(null,x))
{return cljsrepl.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljsrepl.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljsrepl.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljsrepl.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3858 = options;
var map__3858__$1 = ((cljsrepl.core.seq_QMARK_.call(null,map__3858))?cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,map__3858):map__3858);
var keywordize_keys = cljsrepl.core._lookup.call(null,map__3858__$1,"\uFDD0'keywordize-keys",null);
var keyfn = (cljsrepl.core.truth_(keywordize_keys)?cljsrepl.core.keyword:cljsrepl.core.str);
var f = (function thisfn(x__$1){
if(cljsrepl.core.seq_QMARK_.call(null,x__$1))
{return cljsrepl.core.doall.call(null,cljsrepl.core.map.call(null,thisfn,x__$1));
} else
{if(cljsrepl.core.coll_QMARK_.call(null,x__$1))
{return cljsrepl.core.into.call(null,cljsrepl.core.empty.call(null,x__$1),cljsrepl.core.map.call(null,thisfn,x__$1));
} else
{if(cljsrepl.core.truth_(replgoog.isArray(x__$1)))
{return cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,thisfn,x__$1));
} else
{if((cljsrepl.core.type.call(null,x__$1) === Object))
{return cljsrepl.core.into.call(null,cljsrepl.core.ObjMap.EMPTY,(function (){var iter__2140__auto__ = (function iter__3861(s__3862){
return (new cljsrepl.core.LazySeq(null,false,(function (){
var s__3862__$1 = s__3862;
while(true){
var temp__4092__auto__ = cljsrepl.core.seq.call(null,s__3862__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var k = cljsrepl.core.first.call(null,xs__4579__auto__);
return cljsrepl.core.cons.call(null,cljsrepl.core.PersistentVector.fromArray([keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], true),iter__3861.call(null,cljsrepl.core.rest.call(null,s__3862__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2140__auto__.call(null,cljsrepl.core.js_keys.call(null,x__$1));
})());
} else
{if("\uFDD0'else")
{return x__$1;
} else
{return null;
}
}
}
}
}
});
return f.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (replgoog.isDef(var_args)) {
  options = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3863){
var x = cljsrepl.core.first(arglist__3863);
var options = cljsrepl.core.rest(arglist__3863);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljsrepl.core.memoize = (function memoize(f){
var mem = cljsrepl.core.atom.call(null,cljsrepl.core.ObjMap.EMPTY);
return (function() { 
var G__3864__delegate = function (args){
var temp__4090__auto__ = cljsrepl.core._lookup.call(null,cljsrepl.core.deref.call(null,mem),args,null);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;
return v;
} else
{var ret = cljsrepl.core.apply.call(null,f,args);
cljsrepl.core.swap_BANG_.call(null,mem,cljsrepl.core.assoc,args,ret);
return ret;
}
};
var G__3864 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3864__delegate.call(this, args);
};
G__3864.cljs$lang$maxFixedArity = 0;
G__3864.cljs$lang$applyTo = (function (arglist__3865){
var args = cljsrepl.core.seq(arglist__3865);;
return G__3864__delegate(args);
});
G__3864.cljs$lang$arity$variadic = G__3864__delegate;
return G__3864;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljsrepl.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = f.call(null);
if(cljsrepl.core.fn_QMARK_.call(null,ret))
{{
var G__3866 = ret;
f = G__3866;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__3867__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljsrepl.core.apply.call(null,f,args);
}));
};
var G__3867 = function (f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3867__delegate.call(this, f, args);
};
G__3867.cljs$lang$maxFixedArity = 1;
G__3867.cljs$lang$applyTo = (function (arglist__3868){
var f = cljsrepl.core.first(arglist__3868);
var args = cljsrepl.core.rest(arglist__3868);
return G__3867__delegate(f, args);
});
G__3867.cljs$lang$arity$variadic = G__3867__delegate;
return G__3867;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljsrepl.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljsrepl.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljsrepl.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljsrepl.core.rand_nth = (function rand_nth(coll){
return cljsrepl.core.nth.call(null,coll,cljsrepl.core.rand_int.call(null,cljsrepl.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljsrepl.core.group_by = (function group_by(f,coll){
return cljsrepl.core.reduce.call(null,(function (ret,x){
var k = f.call(null,x);
return cljsrepl.core.assoc.call(null,ret,k,cljsrepl.core.conj.call(null,cljsrepl.core._lookup.call(null,ret,k,cljsrepl.core.PersistentVector.EMPTY),x));
}),cljsrepl.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljsrepl.core.make_hierarchy = (function make_hierarchy(){
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljsrepl.core.ObjMap.EMPTY,"\uFDD0'descendants":cljsrepl.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljsrepl.core.ObjMap.EMPTY});
});
cljsrepl.core.global_hierarchy = cljsrepl.core.atom.call(null,cljsrepl.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljsrepl.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto__ = cljsrepl.core._EQ_.call(null,child,parent);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljsrepl.core.contains_QMARK_.call(null,(new cljsrepl.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = cljsrepl.core.vector_QMARK_.call(null,parent);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljsrepl.core.vector_QMARK_.call(null,child);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (cljsrepl.core.count.call(null,parent) === cljsrepl.core.count.call(null,child));
if(and__3941__auto____$2)
{var ret = true;
var i = 0;
while(true){
if((function (){var or__3943__auto____$2 = cljsrepl.core.not.call(null,ret);
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (i === cljsrepl.core.count.call(null,parent));
}
})())
{return ret;
} else
{{
var G__3869 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__3870 = (i + 1);
ret = G__3869;
i = G__3870;
continue;
}
}
break;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljsrepl.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljsrepl.core.not_empty.call(null,cljsrepl.core._lookup.call(null,(new cljsrepl.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljsrepl.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljsrepl.core.not_empty.call(null,cljsrepl.core._lookup.call(null,(new cljsrepl.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljsrepl.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljsrepl.core.not_empty.call(null,cljsrepl.core._lookup.call(null,(new cljsrepl.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljsrepl.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljsrepl.core.truth_(cljsrepl.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"namespace")),(new cljsrepl.core.Symbol(null,"parent"))),cljsrepl.core.hash_map("\uFDD0'line",7081,"\uFDD0'column",12))))].join('')));
}
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljsrepl.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"not=")),(new cljsrepl.core.Symbol(null,"tag")),(new cljsrepl.core.Symbol(null,"parent"))),cljsrepl.core.hash_map("\uFDD0'line",7085,"\uFDD0'column",12))))].join('')));
}
var tp = (new cljsrepl.core.Keyword("\uFDD0'parents")).call(null,h);
var td = (new cljsrepl.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta = (new cljsrepl.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf = (function (m,source,sources,target,targets){
return cljsrepl.core.reduce.call(null,(function (ret,k){
return cljsrepl.core.assoc.call(null,ret,k,cljsrepl.core.reduce.call(null,cljsrepl.core.conj,cljsrepl.core._lookup.call(null,targets,k,cljsrepl.core.PersistentHashSet.EMPTY),cljsrepl.core.cons.call(null,target,targets.call(null,target))));
}),m,cljsrepl.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto__ = ((cljsrepl.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){if(cljsrepl.core.contains_QMARK_.call(null,ta.call(null,tag),parent))
{throw (new Error([cljsrepl.core.str(tag),cljsrepl.core.str("already has"),cljsrepl.core.str(parent),cljsrepl.core.str("as ancestor")].join('')));
} else
{}
if(cljsrepl.core.contains_QMARK_.call(null,ta.call(null,parent),tag))
{throw (new Error([cljsrepl.core.str("Cyclic derivation:"),cljsrepl.core.str(parent),cljsrepl.core.str("has"),cljsrepl.core.str(tag),cljsrepl.core.str("as ancestor")].join('')));
} else
{}
return cljsrepl.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljsrepl.core.assoc.call(null,(new cljsrepl.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljsrepl.core.conj.call(null,cljsrepl.core._lookup.call(null,tp,tag,cljsrepl.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf.call(null,(new cljsrepl.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td,parent,ta),"\uFDD0'descendants":tf.call(null,(new cljsrepl.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta,tag,td)});
})());
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljsrepl.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = (new cljsrepl.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents = (cljsrepl.core.truth_(parentMap.call(null,tag))?cljsrepl.core.disj.call(null,parentMap.call(null,tag),parent):cljsrepl.core.PersistentHashSet.EMPTY);
var newParents = (cljsrepl.core.truth_(cljsrepl.core.not_empty.call(null,childsParents))?cljsrepl.core.assoc.call(null,parentMap,tag,childsParents):cljsrepl.core.dissoc.call(null,parentMap,tag));
var deriv_seq = cljsrepl.core.flatten.call(null,cljsrepl.core.map.call(null,(function (p1__3871_SHARP_){
return cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,p1__3871_SHARP_),cljsrepl.core.interpose.call(null,cljsrepl.core.first.call(null,p1__3871_SHARP_),cljsrepl.core.second.call(null,p1__3871_SHARP_)));
}),cljsrepl.core.seq.call(null,newParents)));
if(cljsrepl.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))
{return cljsrepl.core.reduce.call(null,(function (p1__3872_SHARP_,p2__3873_SHARP_){
return cljsrepl.core.apply.call(null,cljsrepl.core.derive,p1__3872_SHARP_,p2__3873_SHARP_);
}),cljsrepl.core.make_hierarchy.call(null),cljsrepl.core.partition.call(null,2,deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljsrepl.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljsrepl.core.swap_BANG_.call(null,method_cache,(function (_){
return cljsrepl.core.deref.call(null,method_table);
}));
return cljsrepl.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljsrepl.core.deref.call(null,hierarchy);
}));
});
cljsrepl.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = cljsrepl.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto__ = (cljsrepl.core.truth_((function (){var and__3941__auto__ = xprefs;
if(cljsrepl.core.truth_(and__3941__auto__))
{return xprefs.call(null,y);
} else
{return and__3941__auto__;
}
})())?true:null);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var ps = cljsrepl.core.parents.call(null,y);
while(true){
if((cljsrepl.core.count.call(null,ps) > 0))
{if(cljsrepl.core.truth_(prefers_STAR_.call(null,x,cljsrepl.core.first.call(null,ps),prefer_table)))
{} else
{}
{
var G__3874 = cljsrepl.core.rest.call(null,ps);
ps = G__3874;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){var ps = cljsrepl.core.parents.call(null,x);
while(true){
if((cljsrepl.core.count.call(null,ps) > 0))
{if(cljsrepl.core.truth_(prefers_STAR_.call(null,cljsrepl.core.first.call(null,ps),y,prefer_table)))
{} else
{}
{
var G__3875 = cljsrepl.core.rest.call(null,ps);
ps = G__3875;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return false;
}
}
}
});
cljsrepl.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto__ = cljsrepl.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.isa_QMARK_.call(null,x,y);
}
});
cljsrepl.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljsrepl.core.reduce.call(null,(function (be,p__3878){
var vec__3879 = p__3878;
var k = cljsrepl.core.nth.call(null,vec__3879,0,null);
var _ = cljsrepl.core.nth.call(null,vec__3879,1,null);
var e = vec__3879;
if(cljsrepl.core.isa_QMARK_.call(null,dispatch_val,k))
{var be2 = (cljsrepl.core.truth_((function (){var or__3943__auto__ = (be == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljsrepl.core.dominates.call(null,k,cljsrepl.core.first.call(null,be),prefer_table);
}
})())?e:be);
if(cljsrepl.core.truth_(cljsrepl.core.dominates.call(null,cljsrepl.core.first.call(null,be2),k,prefer_table)))
{} else
{throw (new Error([cljsrepl.core.str("Multiple methods in multimethod '"),cljsrepl.core.str(name),cljsrepl.core.str("' match dispatch value: "),cljsrepl.core.str(dispatch_val),cljsrepl.core.str(" -> "),cljsrepl.core.str(k),cljsrepl.core.str(" and "),cljsrepl.core.str(cljsrepl.core.first.call(null,be2)),cljsrepl.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,cljsrepl.core.deref.call(null,method_table));
if(cljsrepl.core.truth_(best_entry))
{if(cljsrepl.core._EQ_.call(null,cljsrepl.core.deref.call(null,cached_hierarchy),cljsrepl.core.deref.call(null,hierarchy)))
{cljsrepl.core.swap_BANG_.call(null,method_cache,cljsrepl.core.assoc,dispatch_val,cljsrepl.core.second.call(null,best_entry));
return cljsrepl.core.second.call(null,best_entry);
} else
{cljsrepl.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljsrepl.core.IMultiFn = {};
cljsrepl.core._reset = (function _reset(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._reset[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._reset["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljsrepl.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._add_method[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._add_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljsrepl.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._remove_method[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._remove_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljsrepl.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._prefer_method[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._prefer_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljsrepl.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._get_method[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._get_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljsrepl.core._methods = (function _methods(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._methods[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._methods["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljsrepl.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._prefers[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._prefers["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljsrepl.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2061__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljsrepl.core._dispatch[replgoog.typeOf(x__2061__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljsrepl.core._dispatch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljsrepl.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljsrepl.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val = cljsrepl.core.apply.call(null,dispatch_fn,args);
var target_fn = cljsrepl.core._get_method.call(null,mf,dispatch_val);
if(cljsrepl.core.truth_(target_fn))
{} else
{throw (new Error([cljsrepl.core.str("No method in multimethod '"),cljsrepl.core.str(cljsrepl.core.name),cljsrepl.core.str("' for dispatch value: "),cljsrepl.core.str(dispatch_val)].join('')));
}
return cljsrepl.core.apply.call(null,target_fn,args);
});
replgoog.provide('cljsrepl.core.MultiFn');

/**
* @constructor
*/
cljsrepl.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljsrepl.core.MultiFn.cljs$lang$type = true;
cljsrepl.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/MultiFn");
});
cljsrepl.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/MultiFn");
});
cljsrepl.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return replgoog.getUid(this$);
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
cljsrepl.core.swap_BANG_.call(null,self__.method_table,(function (mf__$1){
return cljsrepl.core.ObjMap.EMPTY;
}));
cljsrepl.core.swap_BANG_.call(null,self__.method_cache,(function (mf__$1){
return cljsrepl.core.ObjMap.EMPTY;
}));
cljsrepl.core.swap_BANG_.call(null,self__.prefer_table,(function (mf__$1){
return cljsrepl.core.ObjMap.EMPTY;
}));
cljsrepl.core.swap_BANG_.call(null,self__.cached_hierarchy,(function (mf__$1){
return null;
}));
return mf;
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
cljsrepl.core.swap_BANG_.call(null,self__.method_table,cljsrepl.core.assoc,dispatch_val,method);
cljsrepl.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
cljsrepl.core.swap_BANG_.call(null,self__.method_table,cljsrepl.core.dissoc,dispatch_val);
cljsrepl.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.deref.call(null,self__.cached_hierarchy),cljsrepl.core.deref.call(null,self__.hierarchy)))
{} else
{cljsrepl.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4090__auto__ = cljsrepl.core.deref.call(null,self__.method_cache).call(null,dispatch_val);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var target_fn = temp__4090__auto__;
return target_fn;
} else
{var temp__4090__auto____$1 = cljsrepl.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljsrepl.core.truth_(temp__4090__auto____$1))
{var target_fn = temp__4090__auto____$1;
return target_fn;
} else
{return cljsrepl.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
if(cljsrepl.core.truth_(cljsrepl.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([cljsrepl.core.str("Preference conflict in multimethod '"),cljsrepl.core.str(self__.name),cljsrepl.core.str("': "),cljsrepl.core.str(dispatch_val_y),cljsrepl.core.str(" is already preferred to "),cljsrepl.core.str(dispatch_val_x)].join('')));
} else
{}
cljsrepl.core.swap_BANG_.call(null,self__.prefer_table,(function (old){
return cljsrepl.core.assoc.call(null,old,dispatch_val_x,cljsrepl.core.conj.call(null,cljsrepl.core._lookup.call(null,old,dispatch_val_x,cljsrepl.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljsrepl.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
return cljsrepl.core.deref.call(null,self__.method_table);
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
return cljsrepl.core.deref.call(null,self__.prefer_table);
});
cljsrepl.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var self__ = this;
return cljsrepl.core.do_dispatch.call(null,mf,self__.dispatch_fn,args);
});
cljsrepl.core.MultiFn.prototype.call = (function() { 
var G__3880__delegate = function (_,args){
var self = this;
return cljsrepl.core._dispatch.call(null,self,args);
};
var G__3880 = function (_,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3880__delegate.call(this, _, args);
};
G__3880.cljs$lang$maxFixedArity = 1;
G__3880.cljs$lang$applyTo = (function (arglist__3881){
var _ = cljsrepl.core.first(arglist__3881);
var args = cljsrepl.core.rest(arglist__3881);
return G__3880__delegate(_, args);
});
G__3880.cljs$lang$arity$variadic = G__3880__delegate;
return G__3880;
})()
;
cljsrepl.core.MultiFn.prototype.apply = (function (_,args){
var self = this;
return cljsrepl.core._dispatch.call(null,self,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljsrepl.core.remove_all_methods = (function remove_all_methods(multifn){
return cljsrepl.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljsrepl.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljsrepl.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljsrepl.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljsrepl.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljsrepl.core.methods$ = (function methods$(multifn){
return cljsrepl.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljsrepl.core.get_method = (function get_method(multifn,dispatch_val){
return cljsrepl.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljsrepl.core.prefers = (function prefers(multifn){
return cljsrepl.core._prefers.call(null,multifn);
});
replgoog.provide('cljsrepl.core.UUID');

/**
* @constructor
*/
cljsrepl.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljsrepl.core.UUID.cljs$lang$type = true;
cljsrepl.core.UUID.cljs$lang$ctorPrSeq = (function (this__2001__auto__){
return cljsrepl.core.list.call(null,"cljsrepl.core/UUID");
});
cljsrepl.core.UUID.cljs$lang$ctorPrWriter = (function (this__2001__auto__,writer__2002__auto__,opt__2003__auto__){
return cljsrepl.core._write.call(null,writer__2002__auto__,"cljsrepl.core/UUID");
});
cljsrepl.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return replgoog.string.hashCode(cljsrepl.core.pr_str.call(null,this$));
});
cljsrepl.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
return cljsrepl.core._write.call(null,writer,[cljsrepl.core.str("#uuid \""),cljsrepl.core.str(self__.uuid),cljsrepl.core.str("\"")].join(''));
});
cljsrepl.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_,___$1){
var self__ = this;
return cljsrepl.core.list.call(null,[cljsrepl.core.str("#uuid \""),cljsrepl.core.str(self__.uuid),cljsrepl.core.str("\"")].join(''));
});
cljsrepl.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var and__3941__auto__ = cljsrepl.core.instance_QMARK_.call(null,cljsrepl.core.UUID,other);
if(and__3941__auto__)
{return (self__.uuid === other.uuid);
} else
{return and__3941__auto__;
}
});
cljsrepl.core.UUID.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljsrepl.core.pr_str.call(null,this$);
});
cljsrepl.core.destructure = (function destructure(bindings){
var bents = cljsrepl.core.partition.call(null,2,bindings);
var pb = (function pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = cljsrepl.core.gensym.call(null,"vec__");
var ret = cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,bvec__$1,gvec),val);
var n = 0;
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljsrepl.core.seq.call(null,bs))
{var firstb = cljsrepl.core.first.call(null,bs);
if(cljsrepl.core._EQ_.call(null,firstb,(new cljsrepl.core.Symbol(null,"&"))))
{{
var G__3886 = pb.call(null,ret,cljsrepl.core.second.call(null,bs),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/nthnext")),gvec,n));
var G__3887 = n;
var G__3888 = cljsrepl.core.nnext.call(null,bs);
var G__3889 = true;
ret = G__3886;
n = G__3887;
bs = G__3888;
seen_rest_QMARK_ = G__3889;
continue;
}
} else
{if(cljsrepl.core._EQ_.call(null,firstb,"\uFDD0'as"))
{return pb.call(null,ret,cljsrepl.core.second.call(null,bs),gvec);
} else
{if("\uFDD0'else")
{if(cljsrepl.core.truth_(seen_rest_QMARK_))
{throw (new cljsrepl.core.Exception("Unsupported binding form, only :as can follow & parameter"));
} else
{{
var G__3890 = pb.call(null,ret,firstb,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/nth")),gvec,n,null));
var G__3891 = (n + 1);
var G__3892 = cljsrepl.core.next.call(null,bs);
var G__3893 = seen_rest_QMARK_;
ret = G__3890;
n = G__3891;
bs = G__3892;
seen_rest_QMARK_ = G__3893;
continue;
}
}
} else
{return null;
}
}
}
} else
{return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = cljsrepl.core.gensym.call(null,"map__");
var defaults = (new cljsrepl.core.Keyword("\uFDD0'or")).call(null,b__$1);
var ret = (function (ret){
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'as")).call(null,b__$1)))
{return cljsrepl.core.conj.call(null,ret,(new cljsrepl.core.Keyword("\uFDD0'as")).call(null,b__$1),gmap);
} else
{return ret;
}
}).call(null,cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/seq?"))),cljsrepl.core.list.call(null,gmap)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/apply"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/hash-map"))),cljsrepl.core.list.call(null,gmap)))),cljsrepl.core.list.call(null,gmap)))));
var bes = cljsrepl.core.reduce.call(null,(function (bes,entry){
return cljsrepl.core.reduce.call(null,(function (p1__3882_SHARP_,p2__3883_SHARP_){
return cljsrepl.core.assoc.call(null,p1__3882_SHARP_,p2__3883_SHARP_,cljsrepl.core.val.call(null,entry).call(null,p2__3883_SHARP_));
}),cljsrepl.core.dissoc.call(null,bes,cljsrepl.core.key.call(null,entry)),cljsrepl.core.key.call(null,entry).call(null,bes));
}),cljsrepl.core.dissoc.call(null,b__$1,"\uFDD0'as","\uFDD0'or"),cljsrepl.core.ObjMap.fromObject(["\uFDD0'keys","\uFDD0'strs","\uFDD0'syms"],{"\uFDD0'keys":(function (p1__3884_SHARP_){
return cljsrepl.core.keyword.call(null,[cljsrepl.core.str(p1__3884_SHARP_)].join(''));
}),"\uFDD0'strs":cljsrepl.core.str,"\uFDD0'syms":(function (p1__3885_SHARP_){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),p1__3885_SHARP_);
})}));
while(true){
if(cljsrepl.core.seq.call(null,bes))
{var bb = cljsrepl.core.key.call(null,cljsrepl.core.first.call(null,bes));
var bk = cljsrepl.core.val.call(null,cljsrepl.core.first.call(null,bes));
var has_default = cljsrepl.core.contains_QMARK_.call(null,defaults,bb);
{
var G__3894 = pb.call(null,ret,bb,((has_default)?cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/get")),gmap,bk,defaults.call(null,bb)):cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/get")),gmap,bk)));
var G__3895 = cljsrepl.core.next.call(null,bes);
ret = G__3894;
bes = G__3895;
continue;
}
} else
{return ret;
}
break;
}
});
if(cljsrepl.core.symbol_QMARK_.call(null,b))
{return cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,bvec,b),v);
} else
{if(cljsrepl.core.vector_QMARK_.call(null,b))
{return pvec.call(null,bvec,b,v);
} else
{if(cljsrepl.core.map_QMARK_.call(null,b))
{return pmap.call(null,bvec,b,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljsrepl.core.str("Unsupported binding form: "),cljsrepl.core.str(b)].join('')));
} else
{return null;
}
}
}
}
});
var process_entry = (function (bvec,b){
return pb.call(null,bvec,cljsrepl.core.first.call(null,b),cljsrepl.core.second.call(null,b));
});
if(cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.symbol_QMARK_,cljsrepl.core.map.call(null,cljsrepl.core.first,bents)))
{return bindings;
} else
{return cljsrepl.core.reduce.call(null,process_entry,cljsrepl.core.PersistentVector.EMPTY,bents);
}
});
cljsrepl.core.namespaces = cljsrepl.core.atom.call(null,cljsrepl.core.hash_map((new cljsrepl.core.Symbol(null,"cljsrepl.core")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.core"))),(new cljsrepl.core.Symbol(null,"cljsrepl.user")),cljsrepl.core.hash_map("\uFDD0'name",(new cljsrepl.core.Symbol(null,"cljsrepl.user")))));
/**
* Returns the namespace named by the symbol or nil if it doesn't
* exist.
*/
cljsrepl.core.find_ns = (function find_ns(sym){
return cljsrepl.core.deref.call(null,cljsrepl.core.namespaces).call(null,sym);
});
/**
* Create a new namespace named by the symbol if one doesn't already
* exist, returns it or the already-existing namespace of the same
* name.
*/
cljsrepl.core.create_ns = (function create_ns(sym){
var ns = cljsrepl.core.find_ns.call(null,sym);
if(cljsrepl.core.truth_(ns))
{return ns;
} else
{cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.assoc_in,cljsrepl.core.PersistentVector.fromArray([sym,"\uFDD0'name"], true),sym);
return cljsrepl.core.find_ns.call(null,sym);
}
});
cljsrepl.core.in_ns = (function in_ns(name){
if(cljsrepl.core.symbol_QMARK_.call(null,name))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("Unable to resolve namespace name"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"symbol?")),(new cljsrepl.core.Symbol(null,"name"))),cljsrepl.core.hash_map("\uFDD0'line",7403,"\uFDD0'column",11))))].join('')));
}
cljsrepl.analyzer._STAR_cljs_ns_STAR_ = name;
return cljsrepl.core._STAR_ns_sym_STAR_ = name;
});
/**
* Returns the "var" to which a symbol will be resolved in the
* namespace, else nil.
*/
cljsrepl.core.ns_resolve = (function ns_resolve(ns,sym){
return cljsrepl.core.get_in.call(null,ns,cljsrepl.core.PersistentVector.fromArray(["\uFDD0'defs",sym], true));
});
/**
* same as (ns-resolve (find-ns *ns-sym*) symbol)
*/
cljsrepl.core.resolve = (function resolve(sym){
return cljsrepl.core.ns_resolve.call(null,cljsrepl.core.find_ns.call(null,cljsrepl.core._STAR_ns_sym_STAR_),sym);
});
cljsrepl.core.setMacro = (function setMacro(sym){
var ns_3898 = cljsrepl.core.symbol.call(null,(function (){var or__3943__auto__ = cljsrepl.core.namespace.call(null,sym);
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljsrepl.core._STAR_ns_sym_STAR_;
if(cljsrepl.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){try{return cljsrepl.analyzer._STAR_cljs_ns_STAR_;
}catch (e3897){if(cljsrepl.core.instance_QMARK_.call(null,Error,e3897))
{var e = e3897;
return (new cljsrepl.core.Symbol(null,"cljsrepl.core"));
} else
{if("\uFDD0'else")
{throw e3897;
} else
{return null;
}
}
}})();
if(cljsrepl.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return (new cljsrepl.core.Symbol(null,"cljsrepl.core"));
}
}
}
})());
var name_3899 = cljsrepl.core.symbol.call(null,cljsrepl.core.name.call(null,sym));
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.assoc_in,cljsrepl.core.PersistentVector.fromArray([ns_3898,"\uFDD0'defs",name_3899,"\uFDD0'macro?"], true),true);
return null;
});
/**
* @param {...*} var_args
*/
cljsrepl.core.let$ = (function() { 
var let$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"let*")),decl);
};
var let$ = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (replgoog.isDef(var_args)) {
  decl = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return let$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
let$.cljs$lang$maxFixedArity = 2;
let$.cljs$lang$applyTo = (function (arglist__3900){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3900);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3900));
var decl = cljsrepl.core.rest(cljsrepl.core.next(arglist__3900));
return let$__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
let$.cljs$lang$arity$variadic = let$__delegate;
return let$;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"let")));
/**
* @param {...*} var_args
*/
cljsrepl.core.loop = (function() { 
var loop__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"loop*")),decl);
};
var loop = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (replgoog.isDef(var_args)) {
  decl = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return loop__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
loop.cljs$lang$maxFixedArity = 2;
loop.cljs$lang$applyTo = (function (arglist__3901){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3901);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3901));
var decl = cljsrepl.core.rest(cljsrepl.core.next(arglist__3901));
return loop__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
loop.cljs$lang$arity$variadic = loop__delegate;
return loop;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"loop")));
/**
* @param {...*} var_args
*/
cljsrepl.core.fn = (function() { 
var fn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return cljsrepl.core.with_meta.call(null,cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"fn*")),decl),cljsrepl.core.meta.call(null,_AMPERSAND_form));
};
var fn = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (replgoog.isDef(var_args)) {
  decl = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
fn.cljs$lang$maxFixedArity = 2;
fn.cljs$lang$applyTo = (function (arglist__3902){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3902);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3902));
var decl = cljsrepl.core.rest(cljsrepl.core.next(arglist__3902));
return fn__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
fn.cljs$lang$arity$variadic = fn__delegate;
return fn;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"fn")));
/**
* Sequentially read and evaluate the set of forms contained in the
* file. Returns a compile-forms* map that contains the emitted
* JavaScript string (:emit-str) and the output (:output).
*/
cljsrepl.core.load_file_STAR_ = (function load_file_STAR_(name){
var _STAR_ns_sym_STAR_3905 = cljsrepl.core._STAR_ns_sym_STAR_;
var _STAR_cljs_ns_STAR_3906 = cljsrepl.analyzer._STAR_cljs_ns_STAR_;
try{cljsrepl.core._STAR_ns_sym_STAR_ = cljsrepl.core._STAR_ns_sym_STAR_;
cljsrepl.analyzer._STAR_cljs_ns_STAR_ = cljsrepl.analyzer._STAR_cljs_ns_STAR_;
return cljsrepl.compiler.compile_and_eval_forms.call(null,cljsrepl.compiler.forms_seq.call(null,name));
}finally {cljsrepl.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_3906;
cljsrepl.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_3905;
}});
/**
* Sequentially read and evaluate the set of forms contained in the
* file.
*/
cljsrepl.core.load_file = (function load_file(name){
var lf = cljsrepl.core.load_file_STAR_.call(null,name);
cljsrepl.core.print.call(null,(new cljsrepl.core.Keyword("\uFDD0'output")).call(null,lf));
return cljsrepl.core.dissoc.call(null,lf,"\uFDD0'output","\uFDD0'emit-str");
});
/**
* Returns the root directory path for a lib
*/
cljsrepl.core.root_resource = (function root_resource(lib){
return [cljsrepl.core.str("/"),cljsrepl.core.str(cljsrepl.core.name.call(null,lib).replace("-","_").replace(".","/"))].join('');
});
cljsrepl.core.lib__GT_path = (function lib__GT_path(lib){
return [cljsrepl.core.str("../src/cljs"),cljsrepl.core.str(cljsrepl.core.root_resource.call(null,lib)),cljsrepl.core.str(".cljs")].join('');
});
/**
* @param {...*} var_args
*/
cljsrepl.core.require = (function() { 
var require__delegate = function (libs){
var G__3908 = cljsrepl.core.seq.call(null,libs);
while(true){
if(G__3908)
{var lib = cljsrepl.core.first.call(null,G__3908);
if(cljsrepl.core.truth_(cljsrepl.core.get_in.call(null,cljsrepl.core.deref.call(null,cljsrepl.core.namespaces),cljsrepl.core.PersistentVector.fromArray([lib,"\uFDD0'defs"], true))))
{} else
{cljsrepl.core.load_file.call(null,cljsrepl.core.lib__GT_path.call(null,lib));
}
{
var G__3909 = cljsrepl.core.next.call(null,G__3908);
G__3908 = G__3909;
continue;
}
} else
{return null;
}
break;
}
};
var require = function (var_args){
var libs = null;
if (replgoog.isDef(var_args)) {
  libs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return require__delegate.call(this, libs);
};
require.cljs$lang$maxFixedArity = 0;
require.cljs$lang$applyTo = (function (arglist__3910){
var libs = cljsrepl.core.seq(arglist__3910);;
return require__delegate(libs);
});
require.cljs$lang$arity$variadic = require__delegate;
return require;
})()
;
cljsrepl.core.assert_valid_fdecl = (function assert_valid_fdecl(fdecl){
return null;
});
cljsrepl.core.sigs = (function sigs(fdecl){
cljsrepl.core.assert_valid_fdecl.call(null,fdecl);
var asig = (function (fdecl__$1){
var arglist = cljsrepl.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Symbol(null,"&form")),cljsrepl.core.first.call(null,arglist)))?cljsrepl.core.subvec.call(null,arglist,2,cljsrepl.core.count.call(null,arglist)):arglist);
var body = cljsrepl.core.next.call(null,fdecl__$1);
if(cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,body)))
{if(cljsrepl.core.next.call(null,body))
{return cljsrepl.core.with_meta.call(null,arglist__$1,cljsrepl.core.conj.call(null,(cljsrepl.core.truth_(cljsrepl.core.meta.call(null,arglist__$1))?cljsrepl.core.meta.call(null,arglist__$1):cljsrepl.core.ObjMap.EMPTY),cljsrepl.core.first.call(null,body)));
} else
{return arglist__$1;
}
} else
{return arglist__$1;
}
});
if(cljsrepl.core.seq_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl)))
{var ret = cljsrepl.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljsrepl.core.truth_(fdecls))
{{
var G__3911 = cljsrepl.core.conj.call(null,ret,asig.call(null,cljsrepl.core.first.call(null,fdecls)));
var G__3912 = cljsrepl.core.next.call(null,fdecls);
ret = G__3911;
fdecls = G__3912;
continue;
}
} else
{return cljsrepl.core.seq.call(null,ret);
}
break;
}
} else
{return cljsrepl.core.list.call(null,asig.call(null,fdecl));
}
});
/**
* Same as (def name (fn [params* ] exprs*)) or (def
* name (fn ([params* ] exprs*)+)) with any doc-string or attrs added
* to the var metadata. prepost-map defines a map with optional keys
* :pre and :post that contain collections of pre or post conditions.
* @param {...*} var_args
*/
cljsrepl.core.defn = (function() { 
var defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if(cljsrepl.core.symbol_QMARK_.call(null,name))
{} else
{throw (new Error("First argument to defn must be a symbol"));
}
var m = ((cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl)))?cljsrepl.core.ObjMap.fromObject(["\uFDD0'doc"],{"\uFDD0'doc":cljsrepl.core.first.call(null,fdecl)}):cljsrepl.core.ObjMap.EMPTY);
var fdecl__$1 = ((cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl)))?cljsrepl.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl__$1)))?cljsrepl.core.conj.call(null,m,cljsrepl.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl__$1)))?cljsrepl.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljsrepl.core.vector_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl__$2)))?cljsrepl.core.list.call(null,fdecl__$2):fdecl__$2);
var m__$2 = ((cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.last.call(null,fdecl__$3)))?cljsrepl.core.conj.call(null,m__$1,cljsrepl.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.last.call(null,fdecl__$3)))?cljsrepl.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljsrepl.core.conj.call(null,cljsrepl.core.ObjMap.fromObject(["\uFDD0'arglists"],{"\uFDD0'arglists":cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),cljsrepl.core.sigs.call(null,fdecl__$4))}),m__$2);
var m__$4 = cljsrepl.core.conj.call(null,(cljsrepl.core.truth_(cljsrepl.core.meta.call(null,name))?cljsrepl.core.meta.call(null,name):cljsrepl.core.ObjMap.EMPTY),m__$3);
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"def")),cljsrepl.core.with_meta.call(null,name,m__$4),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"fn")),fdecl__$4));
};
var defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (replgoog.isDef(var_args)) {
  fdecl = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, fdecl);
};
defn.cljs$lang$maxFixedArity = 3;
defn.cljs$lang$applyTo = (function (arglist__3913){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3913);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3913));
var name = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3913)));
var fdecl = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3913)));
return defn__delegate(_AMPERSAND_form, _AMPERSAND_env, name, fdecl);
});
defn.cljs$lang$arity$variadic = defn__delegate;
return defn;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defn")));
/**
* Like defn, but the resulting function name is declared as a
* macro and will be used as a macro by the compiler when it is
* called.
* @param {...*} var_args
*/
cljsrepl.core.defmacro = (function() { 
var defmacro__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = cljsrepl.core.list.call(null,name);
var args__$1 = args;
while(true){
var f = cljsrepl.core.first.call(null,args__$1);
if(cljsrepl.core.string_QMARK_.call(null,f))
{{
var G__3914 = cljsrepl.core.cons.call(null,f,p);
var G__3915 = cljsrepl.core.next.call(null,args__$1);
p = G__3914;
args__$1 = G__3915;
continue;
}
} else
{if(cljsrepl.core.map_QMARK_.call(null,f))
{{
var G__3916 = cljsrepl.core.cons.call(null,f,p);
var G__3917 = cljsrepl.core.next.call(null,args__$1);
p = G__3916;
args__$1 = G__3917;
continue;
}
} else
{return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,fd)))
{{
var G__3918 = cljsrepl.core.next.call(null,fd);
fd = G__3918;
continue;
}
} else
{if(cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,fd)))
{{
var G__3919 = cljsrepl.core.next.call(null,fd);
fd = G__3919;
continue;
}
} else
{return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljsrepl.core.vector_QMARK_.call(null,cljsrepl.core.first.call(null,fdecl)))?cljsrepl.core.list.call(null,fdecl):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljsrepl.core.first.call(null,fd);
return cljsrepl.core.cons.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"&form")),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"&env")),args__$1))),cljsrepl.core.next.call(null,fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null))
{return acc;
} else
{var d = cljsrepl.core.first.call(null,ds);
if(cljsrepl.core.map_QMARK_.call(null,d))
{return cljsrepl.core.conj.call(null,acc,d);
} else
{{
var G__3920 = cljsrepl.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__3921 = cljsrepl.core.next.call(null,ds);
acc = G__3920;
ds = G__3921;
continue;
}
}
}
break;
}
});
var fdecl__$2 = cljsrepl.core.seq.call(null,add_args.call(null,cljsrepl.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljsrepl.core.truth_(p))
{{
var G__3922 = cljsrepl.core.next.call(null,p);
var G__3923 = cljsrepl.core.cons.call(null,cljsrepl.core.first.call(null,p),d);
p = G__3922;
d = G__3923;
continue;
}
} else
{return d;
}
break;
}
})();
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do")),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"defn")),decl),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/setMacro")),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),name)));
};
var defmacro = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defmacro__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, args);
};
defmacro.cljs$lang$maxFixedArity = 3;
defmacro.cljs$lang$applyTo = (function (arglist__3924){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3924);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3924));
var name = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3924)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3924)));
return defmacro__delegate(_AMPERSAND_form, _AMPERSAND_env, name, args);
});
defmacro.cljs$lang$arity$variadic = defmacro__delegate;
return defmacro;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/defmacro")));
/**
* Evaluates test. If logical true, evaluates body in an implicit do.
* @param {...*} var_args
*/
cljsrepl.core.when = (function() { 
var when__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if")),test,cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"do")),body));
};
var when = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
when.cljs$lang$maxFixedArity = 3;
when.cljs$lang$applyTo = (function (arglist__3925){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3925);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3925));
var test = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3925)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3925)));
return when__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
when.cljs$lang$arity$variadic = when__delegate;
return when;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"when")));
/**
* Evaluates test. If logical false, evaluates body in an implicit do.
* @param {...*} var_args
*/
cljsrepl.core.when_not = (function() { 
var when_not__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if")),test,null,cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"do")),body));
};
var when_not = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when_not__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
when_not.cljs$lang$maxFixedArity = 3;
when_not.cljs$lang$applyTo = (function (arglist__3926){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3926);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3926));
var test = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3926)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3926)));
return when_not__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
when_not.cljs$lang$arity$variadic = when_not__delegate;
return when_not;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"when-not")));
/**
* Takes a set of test/expr pairs. It evaluates each test one at a
* time.  If a test returns logical true, cond evaluates and returns
* the value of the corresponding expr and doesn't evaluate any of the
* other tests or exprs. (cond) returns nil.
* @param {...*} var_args
*/
cljsrepl.core.cond = (function() { 
var cond__delegate = function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljsrepl.core.truth_(clauses))
{return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if")),cljsrepl.core.first.call(null,clauses),((cljsrepl.core.next.call(null,clauses))?cljsrepl.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"cond")),cljsrepl.core.next.call(null,cljsrepl.core.next.call(null,clauses))));
} else
{return null;
}
};
var cond = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var clauses = null;
if (replgoog.isDef(var_args)) {
  clauses = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return cond__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, clauses);
};
cond.cljs$lang$maxFixedArity = 2;
cond.cljs$lang$applyTo = (function (arglist__3927){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3927);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3927));
var clauses = cljsrepl.core.rest(cljsrepl.core.next(arglist__3927));
return cond__delegate(_AMPERSAND_form, _AMPERSAND_env, clauses);
});
cond.cljs$lang$arity$variadic = cond__delegate;
return cond;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"cond")));
/**
* Evaluates test. If logical false, evaluates and returns then expr,
* otherwise else expr, if supplied, else nil.
*/
cljsrepl.core.if_not = (function() {
var if_not = null;
var if_not__4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/if-not"))),cljsrepl.core.list.call(null,test),cljsrepl.core.list.call(null,then),cljsrepl.core.list.call(null,null)));
});
var if_not__5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/not"))),cljsrepl.core.list.call(null,test)))),cljsrepl.core.list.call(null,then),cljsrepl.core.list.call(null,else$)));
});
if_not = function(_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
switch(arguments.length){
case 4:
return if_not__4.call(this,_AMPERSAND_form,_AMPERSAND_env,test,then);
case 5:
return if_not__5.call(this,_AMPERSAND_form,_AMPERSAND_env,test,then,else$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_not.cljs$lang$arity$4 = if_not__4;
if_not.cljs$lang$arity$5 = if_not__5;
return if_not;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"if-not")));
/**
* Evaluates exprs one at a time, from left to right. If a form
* returns logical false (nil or false), and returns that value and
* doesn't evaluate any of the other expressions, otherwise it returns
* the value of the last expr. (and) returns true.
* @param {...*} var_args
*/
cljsrepl.core.and = (function() {
var and = null;
var and__2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});
var and__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var and__4 = (function() { 
var G__3930__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"and__3928__auto__"))),cljsrepl.core.list.call(null,x))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"and__3928__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/and"))),next))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"and__3928__auto__"))))))));
};
var G__3930 = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = null;
if (replgoog.isDef(var_args)) {
  next = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3930__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, next);
};
G__3930.cljs$lang$maxFixedArity = 3;
G__3930.cljs$lang$applyTo = (function (arglist__3931){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3931);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3931));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3931)));
var next = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3931)));
return G__3930__delegate(_AMPERSAND_form, _AMPERSAND_env, x, next);
});
G__3930.cljs$lang$arity$variadic = G__3930__delegate;
return G__3930;
})()
;
and = function(_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = var_args;
switch(arguments.length){
case 2:
return and__2.call(this,_AMPERSAND_form,_AMPERSAND_env);
case 3:
return and__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
default:
return and__4.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
and.cljs$lang$maxFixedArity = 3;
and.cljs$lang$applyTo = and__4.cljs$lang$applyTo;
and.cljs$lang$arity$2 = and__2;
and.cljs$lang$arity$3 = and__3;
and.cljs$lang$arity$variadic = and__4.cljs$lang$arity$variadic;
return and;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"and")));
/**
* Evaluates exprs one at a time, from left to right. If a form
* returns a logical true value, or returns that value and doesn't
* evaluate any of the other expressions, otherwise it returns the
* value of the last expression. (or) returns nil.
* @param {...*} var_args
*/
cljsrepl.core.or = (function() {
var or = null;
var or__2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});
var or__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var or__4 = (function() { 
var G__3932__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"or__3929__auto__"))),cljsrepl.core.list.call(null,x))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"or__3929__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"or__3929__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/or"))),next))))))));
};
var G__3932 = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = null;
if (replgoog.isDef(var_args)) {
  next = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3932__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, next);
};
G__3932.cljs$lang$maxFixedArity = 3;
G__3932.cljs$lang$applyTo = (function (arglist__3933){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3933);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3933));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3933)));
var next = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3933)));
return G__3932__delegate(_AMPERSAND_form, _AMPERSAND_env, x, next);
});
G__3932.cljs$lang$arity$variadic = G__3932__delegate;
return G__3932;
})()
;
or = function(_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = var_args;
switch(arguments.length){
case 2:
return or__2.call(this,_AMPERSAND_form,_AMPERSAND_env);
case 3:
return or__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
default:
return or__4.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x, cljsrepl.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
or.cljs$lang$maxFixedArity = 3;
or.cljs$lang$applyTo = or__4.cljs$lang$applyTo;
or.cljs$lang$arity$2 = or__2;
or.cljs$lang$arity$3 = or__3;
or.cljs$lang$arity$variadic = or__4.cljs$lang$arity$variadic;
return or;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"or")));
/**
* form => fieldName-symbol or (instanceMethodName-symbol args*)
* 
* Expands into a member access (.) of the first member on the first
* argument, followed by the next member on the result, etc. For
* instance:
* 
* (.. System (getProperties) (get "os.name"))
* 
* expands to:
* 
* (. (. System (getProperties)) (get "os.name"))
* 
* but is easier to write, read, and understand.
* @param {...*} var_args
*/
cljsrepl.core._DOTDOT_ = (function() {
var _DOTDOT_ = null;
var _DOTDOT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,form)));
});
var _DOTDOT___5 = (function() { 
var G__3934__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/.."))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,form)))),more));
};
var G__3934 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3934__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__3934.cljs$lang$maxFixedArity = 4;
G__3934.cljs$lang$applyTo = (function (arglist__3935){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3935);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3935));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3935)));
var form = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3935))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3935))));
return G__3934__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__3934.cljs$lang$arity$variadic = G__3934__delegate;
return G__3934;
})()
;
_DOTDOT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return _DOTDOT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return _DOTDOT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_DOTDOT_.cljs$lang$maxFixedArity = 4;
_DOTDOT_.cljs$lang$applyTo = _DOTDOT___5.cljs$lang$applyTo;
_DOTDOT_.cljs$lang$arity$4 = _DOTDOT___4;
_DOTDOT_.cljs$lang$arity$variadic = _DOTDOT___5.cljs$lang$arity$variadic;
return _DOTDOT_;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"..")));
/**
* Threads the expr through the forms. Inserts x as the
* second item in the first form, making a list of it if it is not a
* list already. If there are more forms, inserts the first form as the
* second item in second form, etc.
* @param {...*} var_args
*/
cljsrepl.core.__GT_ = (function() {
var __GT_ = null;
var __GT___3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var __GT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
if(cljsrepl.core.seq_QMARK_.call(null,form))
{return cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,form)),cljsrepl.core.list.call(null,x),cljsrepl.core.next.call(null,form))),cljsrepl.core.meta.call(null,form));
} else
{return cljsrepl.core.list.call(null,form,x);
}
});
var __GT___5 = (function() { 
var G__3936__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/->"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/->"))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,form)))),more));
};
var G__3936 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3936__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__3936.cljs$lang$maxFixedArity = 4;
G__3936.cljs$lang$applyTo = (function (arglist__3937){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3937);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3937));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3937)));
var form = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3937))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3937))));
return G__3936__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__3936.cljs$lang$arity$variadic = G__3936__delegate;
return G__3936;
})()
;
__GT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return __GT___3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
case 4:
return __GT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return __GT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_.cljs$lang$maxFixedArity = 4;
__GT_.cljs$lang$applyTo = __GT___5.cljs$lang$applyTo;
__GT_.cljs$lang$arity$3 = __GT___3;
__GT_.cljs$lang$arity$4 = __GT___4;
__GT_.cljs$lang$arity$variadic = __GT___5.cljs$lang$arity$variadic;
return __GT_;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"->")));
/**
* Threads the expr through the forms. Inserts x as the
* last item in the first form, making a list of it if it is not a
* list already. If there are more forms, inserts the first form as the
* last item in second form, etc.
* @param {...*} var_args
*/
cljsrepl.core.__GT__GT_ = (function() {
var __GT__GT_ = null;
var __GT__GT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
if(cljsrepl.core.seq_QMARK_.call(null,form))
{return cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,form)),cljsrepl.core.next.call(null,form),cljsrepl.core.list.call(null,x))),cljsrepl.core.meta.call(null,form));
} else
{return cljsrepl.core.list.call(null,form,x);
}
});
var __GT__GT___5 = (function() { 
var G__3939__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/->>"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/->>"))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,form)))),more));
};
var G__3939 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3939__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__3939.cljs$lang$maxFixedArity = 4;
G__3939.cljs$lang$applyTo = (function (arglist__3940){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3940);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3940));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3940)));
var form = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3940))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3940))));
return G__3939__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__3939.cljs$lang$arity$variadic = G__3939__delegate;
return G__3939;
})()
;
__GT__GT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return __GT__GT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return __GT__GT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT__GT_.cljs$lang$maxFixedArity = 4;
__GT__GT_.cljs$lang$applyTo = __GT__GT___5.cljs$lang$applyTo;
__GT__GT_.cljs$lang$arity$4 = __GT__GT___4;
__GT__GT_.cljs$lang$arity$variadic = __GT__GT___5.cljs$lang$arity$variadic;
return __GT__GT_;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"->>")));
/**
* bindings => binding-form test
* 
* If test is true, evaluates then with binding-form bound to the value of
* test, if not, yields else
* @param {...*} var_args
*/
cljsrepl.core.if_let = (function() {
var if_let = null;
var if_let__4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/if-let"))),cljsrepl.core.list.call(null,bindings),cljsrepl.core.list.call(null,then),cljsrepl.core.list.call(null,null)));
});
var if_let__6 = (function() { 
var G__3942__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (nil? oldform)"));
}
if("1 or 2 forms after binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var form = bindings.call(null,0);
var tst = bindings.call(null,1);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"temp__3938__auto__"))),cljsrepl.core.list.call(null,tst))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"temp__3938__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,form),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"temp__3938__auto__"))))))),cljsrepl.core.list.call(null,then)))),cljsrepl.core.list.call(null,else$))))));
};
var G__3942 = function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,var_args){
var oldform = null;
if (replgoog.isDef(var_args)) {
  oldform = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3942__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, then, else$, oldform);
};
G__3942.cljs$lang$maxFixedArity = 5;
G__3942.cljs$lang$applyTo = (function (arglist__3943){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3943);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3943));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3943)));
var then = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3943))));
var else$ = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3943)))));
var oldform = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3943)))));
return G__3942__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, then, else$, oldform);
});
G__3942.cljs$lang$arity$variadic = G__3942__delegate;
return G__3942;
})()
;
if_let = function(_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,var_args){
var oldform = var_args;
switch(arguments.length){
case 4:
return if_let__4.call(this,_AMPERSAND_form,_AMPERSAND_env,bindings,then);
default:
return if_let__6.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$, cljsrepl.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_let.cljs$lang$maxFixedArity = 5;
if_let.cljs$lang$applyTo = if_let__6.cljs$lang$applyTo;
if_let.cljs$lang$arity$4 = if_let__4;
if_let.cljs$lang$arity$variadic = if_let__6.cljs$lang$arity$variadic;
return if_let;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"if-let")));
/**
* bindings => binding-form test
* 
* When test is true, evaluates body with binding-form bound to the value of test
* @param {...*} var_args
*/
cljsrepl.core.when_let = (function() { 
var when_let__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var form = bindings.call(null,0);
var tst = bindings.call(null,1);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"temp__3941__auto__"))),cljsrepl.core.list.call(null,tst))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"temp__3941__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,form),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"temp__3941__auto__"))))))),body))))))));
};
var when_let = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when_let__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
when_let.cljs$lang$maxFixedArity = 3;
when_let.cljs$lang$applyTo = (function (arglist__3945){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3945);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3945));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3945)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3945)));
return when_let__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
when_let.cljs$lang$arity$variadic = when_let__delegate;
return when_let;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"when-let")));
/**
* defs the supplied var names with no bindings, useful for making forward declarations.
* @param {...*} var_args
*/
cljsrepl.core.declare = (function() { 
var declare__delegate = function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.map.call(null,(function (p1__3944_SHARP_){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"def")),cljsrepl.core.vary_meta.call(null,p1__3944_SHARP_,cljsrepl.core.assoc,"\uFDD0'declared",true));
}),names)));
};
var declare = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var names = null;
if (replgoog.isDef(var_args)) {
  names = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return declare__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, names);
};
declare.cljs$lang$maxFixedArity = 2;
declare.cljs$lang$applyTo = (function (arglist__3946){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3946);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3946));
var names = cljsrepl.core.rest(cljsrepl.core.next(arglist__3946));
return declare__delegate(_AMPERSAND_form, _AMPERSAND_env, names);
});
declare.cljs$lang$arity$variadic = declare__delegate;
return declare;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"declare")));
/**
* Evaluates x then calls all of the methods and functions with the
* value of x supplied at the front of the given arguments.  The forms
* are evaluated in order.  Returns x.
* 
* (doto (new js/Array) (.push "a") (.push "b"))
* @param {...*} var_args
*/
cljsrepl.core.doto = (function() { 
var doto__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljsrepl.core.gensym.call(null);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,gx),cljsrepl.core.list.call(null,x))))),cljsrepl.core.map.call(null,(function (f){
if(cljsrepl.core.seq_QMARK_.call(null,f))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,f)),cljsrepl.core.list.call(null,gx),cljsrepl.core.next.call(null,f)));
} else
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,f),cljsrepl.core.list.call(null,gx)));
}
}),forms),cljsrepl.core.list.call(null,gx)));
};
var doto = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var forms = null;
if (replgoog.isDef(var_args)) {
  forms = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return doto__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, forms);
};
doto.cljs$lang$maxFixedArity = 3;
doto.cljs$lang$applyTo = (function (arglist__3947){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3947);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3947));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3947)));
var forms = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3947)));
return doto__delegate(_AMPERSAND_form, _AMPERSAND_env, x, forms);
});
doto.cljs$lang$arity$variadic = doto__delegate;
return doto;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"doto")));
/**
* Expands into code that creates a fn that expects to be passed an
* object and any args and calls the named instance method on the
* object passing the args. Use when you want to treat a Java method as
* a first-class fn. name may be type-hinted with the method receiver's
* type in order to avoid reflective calls.
* @param {...*} var_args
*/
cljsrepl.core.memfn = (function() { 
var memfn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljsrepl.core.with_meta.call(null,cljsrepl.core.gensym.call(null,"target"),cljsrepl.core.meta.call(null,name));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,t),args)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,t),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,name),args))))))));
};
var memfn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return memfn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, args);
};
memfn.cljs$lang$maxFixedArity = 3;
memfn.cljs$lang$applyTo = (function (arglist__3948){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3948);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3948));
var name = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3948)));
var args = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3948)));
return memfn__delegate(_AMPERSAND_form, _AMPERSAND_env, name, args);
});
memfn.cljs$lang$arity$variadic = memfn__delegate;
return memfn;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"memfn")));
cljsrepl.core.maybe_destructured = (function maybe_destructured(params,body){
if(cljsrepl.core.every_QMARK_.call(null,cljsrepl.core.symbol_QMARK_,params))
{return cljsrepl.core.cons.call(null,params,body);
} else
{var params__$1 = params;
var new_params = cljsrepl.core.PersistentVector.EMPTY;
var lets = cljsrepl.core.PersistentVector.EMPTY;
while(true){
if(cljsrepl.core.truth_(params__$1))
{if(cljsrepl.core.symbol_QMARK_.call(null,cljsrepl.core.first.call(null,params__$1)))
{{
var G__3949 = cljsrepl.core.next.call(null,params__$1);
var G__3950 = cljsrepl.core.conj.call(null,new_params,cljsrepl.core.first.call(null,params__$1));
var G__3951 = lets;
params__$1 = G__3949;
new_params = G__3950;
lets = G__3951;
continue;
}
} else
{var gparam = cljsrepl.core.gensym.call(null,"p__");
{
var G__3952 = cljsrepl.core.next.call(null,params__$1);
var G__3953 = cljsrepl.core.conj.call(null,new_params,gparam);
var G__3954 = cljsrepl.core.conj.call(null,cljsrepl.core.conj.call(null,lets,cljsrepl.core.first.call(null,params__$1)),gparam);
params__$1 = G__3952;
new_params = G__3953;
lets = G__3954;
continue;
}
}
} else
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,new_params),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,lets),body)))));
}
break;
}
}
});
/**
* params => positional-params* , or positional-params* & next-param
* positional-param => binding-form
* next-param => binding-form
* name => symbol
* 
* Defines a function
* @param {...*} var_args
*/
cljsrepl.core.fn = (function() { 
var fn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = ((cljsrepl.core.symbol_QMARK_.call(null,cljsrepl.core.first.call(null,sigs)))?cljsrepl.core.first.call(null,sigs):null);
var sigs__$1 = (cljsrepl.core.truth_(name)?cljsrepl.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljsrepl.core.vector_QMARK_.call(null,cljsrepl.core.first.call(null,sigs__$1)))?cljsrepl.core.list.call(null,sigs__$1):((cljsrepl.core.seq_QMARK_.call(null,cljsrepl.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljsrepl.core.seq.call(null,sigs__$1))?[cljsrepl.core.str("Parameter declaration "),cljsrepl.core.str(cljsrepl.core.first.call(null,sigs__$1)),cljsrepl.core.str(" should be a vector")].join(''):[cljsrepl.core.str("Parameter declaration missing")].join(''))))})()));
var psig = (function (sig){
if(!(cljsrepl.core.seq_QMARK_.call(null,sig)))
{throw (new Error([cljsrepl.core.str("Invalid signature "),cljsrepl.core.str(sig),cljsrepl.core.str(" should be a list")].join('')));
} else
{}
var vec__3957 = sig;
var params = cljsrepl.core.nth.call(null,vec__3957,0,null);
var body = cljsrepl.core.nthnext.call(null,vec__3957,1);
var _ = ((!(cljsrepl.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljsrepl.core.seq_QMARK_.call(null,cljsrepl.core.first.call(null,sigs__$2)))?[cljsrepl.core.str("Parameter declaration "),cljsrepl.core.str(params),cljsrepl.core.str(" should be a vector")].join(''):[cljsrepl.core.str("Invalid signature "),cljsrepl.core.str(sig),cljsrepl.core.str(" should be a list")].join(''))))})():null);
var conds = (cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.core.next.call(null,body);
if(and__3941__auto__)
{return cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,body));
} else
{return and__3941__auto__;
}
})())?cljsrepl.core.first.call(null,body):null);
var body__$1 = (cljsrepl.core.truth_(conds)?cljsrepl.core.next.call(null,body):body);
var conds__$1 = (function (){var or__3943__auto__ = conds;
if(cljsrepl.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljsrepl.core.meta.call(null,params);
}
})();
var pre = (new cljsrepl.core.Keyword("\uFDD0'pre")).call(null,conds__$1);
var post = (new cljsrepl.core.Keyword("\uFDD0'post")).call(null,conds__$1);
var body__$2 = (cljsrepl.core.truth_(post)?cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"%"))),cljsrepl.core.list.call(null,(((1 < cljsrepl.core.count.call(null,body__$1)))?cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),body__$1)):cljsrepl.core.first.call(null,body__$1))))))),cljsrepl.core.map.call(null,(function (c){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/assert"))),cljsrepl.core.list.call(null,c)));
}),post),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"%")))))))):body__$1);
var body__$3 = (cljsrepl.core.truth_(pre)?cljsrepl.core.concat.call(null,cljsrepl.core.map.call(null,(function (c){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/assert"))),cljsrepl.core.list.call(null,c)));
}),pre),body__$2):body__$2);
return cljsrepl.core.maybe_destructured.call(null,params,body__$3);
});
var new_sigs = cljsrepl.core.map.call(null,psig,sigs__$2);
return cljsrepl.core.with_meta.call(null,(cljsrepl.core.truth_(name)?cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,"fn*")),name,new_sigs):cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"fn*")),new_sigs)),cljsrepl.core.meta.call(null,_AMPERSAND_form));
};
var fn = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var sigs = null;
if (replgoog.isDef(var_args)) {
  sigs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, sigs);
};
fn.cljs$lang$maxFixedArity = 2;
fn.cljs$lang$applyTo = (function (arglist__3958){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3958);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3958));
var sigs = cljsrepl.core.rest(cljsrepl.core.next(arglist__3958));
return fn__delegate(_AMPERSAND_form, _AMPERSAND_env, sigs);
});
fn.cljs$lang$arity$variadic = fn__delegate;
return fn;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"fn")));
/**
* bindings => x xs
* 
* Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
* @param {...*} var_args
*/
cljsrepl.core.when_first = (function() { 
var when_first__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var vec__3960 = bindings;
var x = cljsrepl.core.nth.call(null,vec__3960,0,null);
var xs = cljsrepl.core.nth.call(null,vec__3960,1,null);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when-let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"xs__3955__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/seq"))),cljsrepl.core.list.call(null,xs)))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/first"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"xs__3955__auto__")))))))))),body)))));
};
var when_first = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when_first__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
when_first.cljs$lang$maxFixedArity = 3;
when_first.cljs$lang$applyTo = (function (arglist__3961){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3961);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3961));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3961)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3961)));
return when_first__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
when_first.cljs$lang$arity$variadic = when_first__delegate;
return when_first;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"when-first")));
/**
* Ignores body, yields nil
* @param {...*} var_args
*/
cljsrepl.core.comment = (function() { 
var comment__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
};
var comment = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return comment__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
comment.cljs$lang$maxFixedArity = 2;
comment.cljs$lang$applyTo = (function (arglist__3962){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3962);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3962));
var body = cljsrepl.core.rest(cljsrepl.core.next(arglist__3962));
return comment__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
comment.cljs$lang$arity$variadic = comment__delegate;
return comment;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"comment")));
/**
* same as defn, yielding non-public def
* @param {...*} var_args
*/
cljsrepl.core.defn_ = (function() { 
var defn___delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/defn")),cljsrepl.core.with_meta.call(null,name,cljsrepl.core.assoc.call(null,cljsrepl.core.meta.call(null,name),"\uFDD0'private",true)),decls);
};
var defn_ = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var decls = null;
if (replgoog.isDef(var_args)) {
  decls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defn___delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, decls);
};
defn_.cljs$lang$maxFixedArity = 3;
defn_.cljs$lang$applyTo = (function (arglist__3963){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3963);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3963));
var name = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3963)));
var decls = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3963)));
return defn___delegate(_AMPERSAND_form, _AMPERSAND_env, name, decls);
});
defn_.cljs$lang$arity$variadic = defn___delegate;
return defn_;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defn-")));
/**
* defs name to have the root value of the expr if the named var has
* no root value, else expr is unevaluated
*/
cljsrepl.core.defonce = (function defonce(_AMPERSAND_form,_AMPERSAND_env,name,expr){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when-not"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/resolve"))),cljsrepl.core.list.call(null,name)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"def"))),cljsrepl.core.list.call(null,name),cljsrepl.core.list.call(null,expr))))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defonce")));
/**
* Repeatedly executes body while test expression is true. Presumes
* some side-effect will cause test to become false/nil. Returns nil
* @param {...*} var_args
*/
cljsrepl.core.while$ = (function() { 
var while$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/loop"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,test),body,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur")))))))))));
};
var while$ = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return while$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
while$.cljs$lang$maxFixedArity = 3;
while$.cljs$lang$applyTo = (function (arglist__3965){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3965);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3965));
var test = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3965)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3965)));
return while$__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
while$.cljs$lang$arity$variadic = while$__delegate;
return while$;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"while")));
/**
* fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
* 
* Takes a vector of function specs and a body, and generates a set of
* bindings of functions to their names. All of the names are available
* in all of the definitions of the functions, as well as the body.
* @param {...*} var_args
*/
cljsrepl.core.letfn = (function() { 
var letfn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"letfn*"))),cljsrepl.core.list.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.interleave.call(null,cljsrepl.core.map.call(null,cljsrepl.core.first,fnspecs),cljsrepl.core.map.call(null,(function (p1__3964_SHARP_){
return cljsrepl.core.cons.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn")),p1__3964_SHARP_);
}),fnspecs)))),body));
};
var letfn = function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return letfn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, fnspecs, body);
};
letfn.cljs$lang$maxFixedArity = 3;
letfn.cljs$lang$applyTo = (function (arglist__3966){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3966);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3966));
var fnspecs = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3966)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3966)));
return letfn__delegate(_AMPERSAND_form, _AMPERSAND_env, fnspecs, body);
});
letfn.cljs$lang$arity$variadic = letfn__delegate;
return letfn;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"letfn")));
/**
* binding => binding-form init-expr
* 
* Evaluates the exprs in a lexical context in which the symbols in
* the binding-forms are bound to their respective init-exprs or parts
* therein.
* @param {...*} var_args
*/
cljsrepl.core.let$ = (function() { 
var let$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (even? (count bindings))"));
}
if("an even number of forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"let*"))),cljsrepl.core.list.call(null,cljsrepl.core.destructure.call(null,bindings)),body));
};
var let$ = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return let$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
let$.cljs$lang$maxFixedArity = 3;
let$.cljs$lang$applyTo = (function (arglist__3967){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3967);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3967));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3967)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3967)));
return let$__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
let$.cljs$lang$arity$variadic = let$__delegate;
return let$;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"let")));
/**
* Evaluates the exprs in a lexical context in which the symbols in
* the binding-forms are bound to their respective init-exprs or parts
* therein. Acts as a recur target.
* @param {...*} var_args
*/
cljsrepl.core.loop = (function() { 
var loop__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (even? (count bindings))"));
}
if("an even number of forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var db = cljsrepl.core.destructure.call(null,bindings);
if(cljsrepl.core._EQ_.call(null,db,bindings))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"loop*"))),cljsrepl.core.list.call(null,bindings),body));
} else
{var vs = cljsrepl.core.take_nth.call(null,2,cljsrepl.core.drop.call(null,1,bindings));
var bs = cljsrepl.core.take_nth.call(null,2,bindings);
var gs = cljsrepl.core.map.call(null,(function (b){
if(cljsrepl.core.symbol_QMARK_.call(null,b))
{return b;
} else
{return cljsrepl.core.gensym.call(null);
}
}),bs);
var bfs = cljsrepl.core.reduce.call(null,(function (ret,p__3971){
var vec__3972 = p__3971;
var b = cljsrepl.core.nth.call(null,vec__3972,0,null);
var v = cljsrepl.core.nth.call(null,vec__3972,1,null);
var g = cljsrepl.core.nth.call(null,vec__3972,2,null);
if(cljsrepl.core.symbol_QMARK_.call(null,b))
{return cljsrepl.core.conj.call(null,ret,g,v);
} else
{return cljsrepl.core.conj.call(null,ret,g,v,b,g);
}
}),cljsrepl.core.PersistentVector.EMPTY,cljsrepl.core.map.call(null,cljsrepl.core.vector,bs,vs,gs));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,bfs),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"loop*"))),cljsrepl.core.list.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.interleave.call(null,gs,gs))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.interleave.call(null,bs,gs))),body))))))));
}
};
var loop = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return loop__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
loop.cljs$lang$maxFixedArity = 3;
loop.cljs$lang$applyTo = (function (arglist__3973){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3973);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3973));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3973)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3973)));
return loop__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
loop.cljs$lang$arity$variadic = loop__delegate;
return loop;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"loop")));
/**
* protocol fqn -> [partition number, bit]
*/
cljsrepl.core.fast_path_protocols = cljsrepl.core.zipmap.call(null,cljsrepl.core.map.call(null,(function (p1__3968_SHARP_){
return cljsrepl.core.symbol.call(null,"cljsrepl.core",[cljsrepl.core.str(p1__3968_SHARP_)].join(''));
}),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"IFn")),(new cljsrepl.core.Symbol(null,"ICounted")),(new cljsrepl.core.Symbol(null,"IEmptyableCollection")),(new cljsrepl.core.Symbol(null,"ICollection")),(new cljsrepl.core.Symbol(null,"IIndexed")),(new cljsrepl.core.Symbol(null,"ASeq")),(new cljsrepl.core.Symbol(null,"ISeq")),(new cljsrepl.core.Symbol(null,"INext")),(new cljsrepl.core.Symbol(null,"ILookup")),(new cljsrepl.core.Symbol(null,"IAssociative")),(new cljsrepl.core.Symbol(null,"IMap")),(new cljsrepl.core.Symbol(null,"IMapEntry")),(new cljsrepl.core.Symbol(null,"ISet")),(new cljsrepl.core.Symbol(null,"IStack")),(new cljsrepl.core.Symbol(null,"IVector")),(new cljsrepl.core.Symbol(null,"IDeref")),(new cljsrepl.core.Symbol(null,"IDerefWithTimeout")),(new cljsrepl.core.Symbol(null,"IMeta")),(new cljsrepl.core.Symbol(null,"IWithMeta")),(new cljsrepl.core.Symbol(null,"IReduce")),(new cljsrepl.core.Symbol(null,"IKVReduce")),(new cljsrepl.core.Symbol(null,"IEquiv")),(new cljsrepl.core.Symbol(null,"IHash")),(new cljsrepl.core.Symbol(null,"ISeqable")),(new cljsrepl.core.Symbol(null,"ISequential")),(new cljsrepl.core.Symbol(null,"IList")),(new cljsrepl.core.Symbol(null,"IRecord")),(new cljsrepl.core.Symbol(null,"IReversible")),(new cljsrepl.core.Symbol(null,"ISorted")),(new cljsrepl.core.Symbol(null,"IPrintable")),(new cljsrepl.core.Symbol(null,"IWriter")),(new cljsrepl.core.Symbol(null,"IPrintWithWriter")),(new cljsrepl.core.Symbol(null,"IPending")),(new cljsrepl.core.Symbol(null,"IWatchable")),(new cljsrepl.core.Symbol(null,"IEditableCollection")),(new cljsrepl.core.Symbol(null,"ITransientCollection")),(new cljsrepl.core.Symbol(null,"ITransientAssociative")),(new cljsrepl.core.Symbol(null,"ITransientMap")),(new cljsrepl.core.Symbol(null,"ITransientVector")),(new cljsrepl.core.Symbol(null,"ITransientSet")),(new cljsrepl.core.Symbol(null,"IMultiFn")),(new cljsrepl.core.Symbol(null,"IChunkedSeq")),(new cljsrepl.core.Symbol(null,"IChunkedNext")),(new cljsrepl.core.Symbol(null,"IComparable"))])),cljsrepl.core.iterate.call(null,(function (p__3974){
var vec__3975 = p__3974;
var p = cljsrepl.core.nth.call(null,vec__3975,0,null);
var b = cljsrepl.core.nth.call(null,vec__3975,1,null);
if((2147483648 === b))
{return cljsrepl.core.PersistentVector.fromArray([(p + 1),1], true);
} else
{return cljsrepl.core.PersistentVector.fromArray([p,(b << 1)], true);
}
}),cljsrepl.core.PersistentVector.fromArray([0,1], true)));
/**
* total number of partitions
*/
cljsrepl.core.fast_path_protocol_partitions_count = (function (){var c = cljsrepl.core.count.call(null,cljsrepl.core.fast_path_protocols);
var m = cljsrepl.core.mod.call(null,c,32);
if((m === 0))
{return cljsrepl.core.quot.call(null,c,32);
} else
{return (cljsrepl.core.quot.call(null,c,32) + 1);
}
})();
cljsrepl.core.bool_expr = (function bool_expr(e){
return cljsrepl.core.vary_meta.call(null,e,cljsrepl.core.assoc,"\uFDD0'tag",(new cljsrepl.core.Symbol(null,"boolean")));
});
cljsrepl.core.coercive_not = (function coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljsrepl.core.bool_expr.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*")),"(!~{})",x));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"coercive-not")));
/**
* @param {...*} var_args
*/
cljsrepl.core.unsafe_bit_and = (function() {
var unsafe_bit_and = null;
var unsafe_bit_and__4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljsrepl.core.bool_expr.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*")),"(~{} & ~{})",x,y));
});
var unsafe_bit_and__5 = (function() { 
var G__3976__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/unsafe-bit-and"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/unsafe-bit-and"))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,y)))),more));
};
var G__3976 = function (_AMPERSAND_form,_AMPERSAND_env,x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3976__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, y, more);
};
G__3976.cljs$lang$maxFixedArity = 4;
G__3976.cljs$lang$applyTo = (function (arglist__3977){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3977);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3977));
var x = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3977)));
var y = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3977))));
var more = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__3977))));
return G__3976__delegate(_AMPERSAND_form, _AMPERSAND_env, x, y, more);
});
G__3976.cljs$lang$arity$variadic = G__3976__delegate;
return G__3976;
})()
;
unsafe_bit_and = function(_AMPERSAND_form,_AMPERSAND_env,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return unsafe_bit_and__4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,y);
default:
return unsafe_bit_and__5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,y, cljsrepl.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsafe_bit_and.cljs$lang$maxFixedArity = 4;
unsafe_bit_and.cljs$lang$applyTo = unsafe_bit_and__5.cljs$lang$applyTo;
unsafe_bit_and.cljs$lang$arity$4 = unsafe_bit_and__4;
unsafe_bit_and.cljs$lang$arity$variadic = unsafe_bit_and__5.cljs$lang$arity$variadic;
return unsafe_bit_and;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"unsafe-bit-and")));
cljsrepl.core.base_type = cljsrepl.core.PersistentArrayMap.fromArrays([null,(new cljsrepl.core.Symbol(null,"object")),(new cljsrepl.core.Symbol(null,"string")),(new cljsrepl.core.Symbol(null,"number")),(new cljsrepl.core.Symbol(null,"array")),(new cljsrepl.core.Symbol(null,"function")),(new cljsrepl.core.Symbol(null,"boolean")),(new cljsrepl.core.Symbol(null,"default"))],["null","object","string","number","array","function","boolean","_"]);
/**
* @param {...*} var_args
*/
cljsrepl.core.reify = (function() { 
var reify__delegate = function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljsrepl.core.gensym.call(null,"t");
var meta_sym = cljsrepl.core.gensym.call(null,"meta");
var this_sym = cljsrepl.core.gensym.call(null,"_");
var locals = cljsrepl.core.keys.call(null,(new cljsrepl.core.Keyword("\uFDD0'locals")).call(null,_AMPERSAND_env));
var ns = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,_AMPERSAND_env));
var munge = cljsrepl.compiler.munge;
var ns_t = cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*")),[cljsrepl.core.str(munge.call(null,ns)),cljsrepl.core.str("."),cljsrepl.core.str(munge.call(null,t))].join(''));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/undefined?"))),cljsrepl.core.list.call(null,ns_t)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/deftype"))),cljsrepl.core.list.call(null,t),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,locals,cljsrepl.core.list.call(null,meta_sym))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/IWithMeta"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-with-meta"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,this_sym),cljsrepl.core.list.call(null,meta_sym))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,t),locals,cljsrepl.core.list.call(null,meta_sym))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/IMeta"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-meta"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,this_sym))))),cljsrepl.core.list.call(null,meta_sym)))),impls)))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,t),locals,cljsrepl.core.list.call(null,null))))));
};
var reify = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return reify__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, impls);
};
reify.cljs$lang$maxFixedArity = 2;
reify.cljs$lang$applyTo = (function (arglist__3978){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3978);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3978));
var impls = cljsrepl.core.rest(cljsrepl.core.next(arglist__3978));
return reify__delegate(_AMPERSAND_form, _AMPERSAND_env, impls);
});
reify.cljs$lang$arity$variadic = reify__delegate;
return reify;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"reify")));
/**
* Defines a scope where JavaScript's implicit "this" is bound to the name provided.
* @param {...*} var_args
*/
cljsrepl.core.this_as = (function() { 
var this_as__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,name),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*"))),cljsrepl.core.list.call(null,"this")))))))),body));
};
var this_as = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return this_as__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, body);
};
this_as.cljs$lang$maxFixedArity = 3;
this_as.cljs$lang$applyTo = (function (arglist__3979){
var _AMPERSAND_form = cljsrepl.core.first(arglist__3979);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__3979));
var name = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__3979)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__3979)));
return this_as__delegate(_AMPERSAND_form, _AMPERSAND_env, name, body);
});
this_as.cljs$lang$arity$variadic = this_as__delegate;
return this_as;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"this-as")));
cljsrepl.core.to_property = (function to_property(sym){
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str("-"),cljsrepl.core.str(sym)].join(''));
});
cljsrepl.core.parse_impls = (function parse_impls(specs){
var ret = cljsrepl.core.ObjMap.EMPTY;
var s = specs;
while(true){
if(cljsrepl.core.seq.call(null,s))
{{
var G__3982 = cljsrepl.core.assoc.call(null,ret,cljsrepl.core.first.call(null,s),cljsrepl.core.take_while.call(null,cljsrepl.core.seq_QMARK_,cljsrepl.core.next.call(null,s)));
var G__3983 = cljsrepl.core.drop_while.call(null,cljsrepl.core.seq_QMARK_,cljsrepl.core.next.call(null,s));
ret = G__3982;
s = G__3983;
continue;
}
} else
{return ret;
}
break;
}
});
/**
* @param {...*} var_args
*/
cljsrepl.core.extend_type = (function() { 
var extend_type__delegate = function (_AMPERSAND_form,_AMPERSAND_env,tsym,impls){
var resolve = (function (p1__3980_SHARP_){
var ret = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),p1__3980_SHARP_));
if(cljsrepl.core.truth_(ret))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str([cljsrepl.core.str("Can't resolve: "),cljsrepl.core.str(p1__3980_SHARP_)].join('')),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,(new cljsrepl.core.Symbol(null,"ret"))))].join('')));
}
return ret;
});
var impl_map = cljsrepl.core.parse_impls.call(null,impls);
var warn_if_not_protocol = (function (p1__3981_SHARP_){
if(cljsrepl.core._EQ_.call(null,(new cljsrepl.core.Symbol(null,"Object")),p1__3981_SHARP_))
{return null;
} else
{if(cljsrepl.core.truth_(cljsrepl.analyzer._STAR_cljs_warn_on_undeclared_STAR_))
{var temp__4090__auto__ = cljsrepl.analyzer.resolve_existing_var.call(null,cljsrepl.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),p1__3981_SHARP_);
if(cljsrepl.core.truth_(temp__4090__auto__))
{var var$ = temp__4090__auto__;
if(cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'protocol-symbol")).call(null,var$)))
{} else
{cljsrepl.analyzer.warning.call(null,_AMPERSAND_env,[cljsrepl.core.str("WARNING: Symbol "),cljsrepl.core.str(p1__3981_SHARP_),cljsrepl.core.str(" is not a protocol")].join(''));
}
if(cljsrepl.core.truth_((function (){var and__3941__auto__ = cljsrepl.analyzer._STAR_cljs_warn_protocol_deprecated_STAR_;
if(cljsrepl.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (new cljsrepl.core.Keyword("\uFDD0'deprecated")).call(null,var$);
if(cljsrepl.core.truth_(and__3941__auto____$1))
{return cljsrepl.core.not.call(null,(new cljsrepl.core.Keyword("\uFDD0'deprecation-nowarn")).call(null,cljsrepl.core.meta.call(null,p1__3981_SHARP_)));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return cljsrepl.analyzer.warning.call(null,_AMPERSAND_env,[cljsrepl.core.str("WARNING: Protocol "),cljsrepl.core.str(p1__3981_SHARP_),cljsrepl.core.str(" is deprecated")].join(''));
} else
{return null;
}
} else
{return cljsrepl.analyzer.warning.call(null,_AMPERSAND_env,[cljsrepl.core.str("WARNING: Can't resolve protocol symbol "),cljsrepl.core.str(p1__3981_SHARP_)].join(''));
}
} else
{return null;
}
}
});
var skip_flag = cljsrepl.core.set.call(null,(new cljsrepl.core.Keyword("\uFDD0'skip-protocol-flag")).call(null,cljsrepl.core.meta.call(null,tsym)));
if(cljsrepl.core.truth_(cljsrepl.core.base_type.call(null,tsym)))
{var t = cljsrepl.core.base_type.call(null,tsym);
var assign_impls = (function (p__4006){
var vec__4007 = p__4006;
var p = cljsrepl.core.nth.call(null,vec__4007,0,null);
var sigs = cljsrepl.core.nth.call(null,vec__4007,1,null);
warn_if_not_protocol.call(null,p);
var psym = resolve.call(null,p);
var pfn_prefix = cljsrepl.core.subs.call(null,[cljsrepl.core.str(psym)].join(''),0,([cljsrepl.core.str(psym)].join('').indexOf("/") + 1));
return cljsrepl.core.cons.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aset"))),cljsrepl.core.list.call(null,psym),cljsrepl.core.list.call(null,t),cljsrepl.core.list.call(null,true))),cljsrepl.core.map.call(null,(function (p__4008){
var vec__4009 = p__4008;
var f = cljsrepl.core.nth.call(null,vec__4009,0,null);
var meths = cljsrepl.core.nthnext.call(null,vec__4009,1);
var form = vec__4009;
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aset"))),cljsrepl.core.list.call(null,cljsrepl.core.symbol.call(null,[cljsrepl.core.str(pfn_prefix),cljsrepl.core.str(f)].join(''))),cljsrepl.core.list.call(null,t),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),meths)),cljsrepl.core.meta.call(null,form)))));
}),sigs));
});
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.mapcat.call(null,assign_impls,impl_map)));
} else
{var t = resolve.call(null,tsym);
var prototype_prefix = (function (sym){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/.."))),cljsrepl.core.list.call(null,tsym),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-prototype"))),cljsrepl.core.list.call(null,cljsrepl.core.to_property.call(null,sym))));
});
var assign_impls = (function (p__4010){
var vec__4011 = p__4010;
var p = cljsrepl.core.nth.call(null,vec__4011,0,null);
var sigs = cljsrepl.core.nth.call(null,vec__4011,1,null);
warn_if_not_protocol.call(null,p);
var psym = resolve.call(null,p);
var pprefix = cljsrepl.compiler.protocol_prefix.call(null,psym);
if(cljsrepl.core._EQ_.call(null,p,(new cljsrepl.core.Symbol(null,"Object"))))
{var adapt_params = (function (p__4012){
var vec__4013 = p__4012;
var sig = cljsrepl.core.nth.call(null,vec__4013,0,null);
var body = cljsrepl.core.nthnext.call(null,vec__4013,1);
var vec__4014 = sig;
var tname = cljsrepl.core.nth.call(null,vec__4014,0,null);
var args = cljsrepl.core.nthnext.call(null,vec__4014,1);
return cljsrepl.core.list.call(null,cljsrepl.core.vec.call(null,args),cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,"this-as")),cljsrepl.core.vary_meta.call(null,tname,cljsrepl.core.assoc,"\uFDD0'tag",t),body));
});
return cljsrepl.core.map.call(null,(function (p__4015){
var vec__4016 = p__4015;
var f = cljsrepl.core.nth.call(null,vec__4016,0,null);
var meths = cljsrepl.core.nthnext.call(null,vec__4016,1);
var form = vec__4016;
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,prototype_prefix.call(null,f)),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.map.call(null,adapt_params,meths))),cljsrepl.core.meta.call(null,form)))));
}),sigs);
} else
{return cljsrepl.core.concat.call(null,(cljsrepl.core.truth_(skip_flag.call(null,psym))?null:cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,prototype_prefix.call(null,pprefix)),cljsrepl.core.list.call(null,true)))], true)),cljsrepl.core.mapcat.call(null,(function (p__4017){
var vec__4018 = p__4017;
var f = cljsrepl.core.nth.call(null,vec__4018,0,null);
var meths = cljsrepl.core.nthnext.call(null,vec__4018,1);
var form = vec__4018;
if(cljsrepl.core._EQ_.call(null,psym,(new cljsrepl.core.Symbol(null,"cljsrepl.core/IFn"))))
{var adapt_params = (function (p__4019){
var vec__4020 = p__4019;
var vec__4021 = cljsrepl.core.nth.call(null,vec__4020,0,null);
var targ = cljsrepl.core.nth.call(null,vec__4021,0,null);
var args = cljsrepl.core.nthnext.call(null,vec__4021,1);
var sig = vec__4021;
var body = cljsrepl.core.nthnext.call(null,vec__4020,1);
var this_sym = cljsrepl.core.with_meta.call(null,cljsrepl.core.gensym.call(null,"this-sym"),cljsrepl.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":t}));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.cons.call(null,this_sym,args))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/this-as"))),cljsrepl.core.list.call(null,this_sym),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,targ),cljsrepl.core.list.call(null,this_sym))))),body))))))));
});
var meths__$1 = cljsrepl.core.map.call(null,adapt_params,meths);
var this_sym = cljsrepl.core.with_meta.call(null,cljsrepl.core.gensym.call(null,"this-sym"),cljsrepl.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":t}));
var argsym = cljsrepl.core.gensym.call(null,"args");
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,prototype_prefix.call(null,(new cljsrepl.core.Symbol(null,"call")))),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),meths__$1)),cljsrepl.core.meta.call(null,form))))),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,prototype_prefix.call(null,(new cljsrepl.core.Symbol(null,"apply")))),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.PersistentVector.fromArray([this_sym,argsym], true)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".apply"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-call"))),cljsrepl.core.list.call(null,this_sym)))),cljsrepl.core.list.call(null,this_sym),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".concat"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/array"))),cljsrepl.core.list.call(null,this_sym)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aclone"))),cljsrepl.core.list.call(null,argsym)))))))))))),cljsrepl.core.meta.call(null,form)))))], true);
} else
{var pf = [cljsrepl.core.str(pprefix),cljsrepl.core.str(f)].join('');
var adapt_params = (function (p__4022){
var vec__4023 = p__4022;
var vec__4024 = cljsrepl.core.nth.call(null,vec__4023,0,null);
var targ = cljsrepl.core.nth.call(null,vec__4024,0,null);
var args = cljsrepl.core.nthnext.call(null,vec__4024,1);
var sig = vec__4024;
var body = cljsrepl.core.nthnext.call(null,vec__4023,1);
return cljsrepl.core.cons.call(null,cljsrepl.core.vec.call(null,cljsrepl.core.cons.call(null,cljsrepl.core.vary_meta.call(null,targ,cljsrepl.core.assoc,"\uFDD0'tag",t),args)),body);
});
if(cljsrepl.core.vector_QMARK_.call(null,cljsrepl.core.first.call(null,meths)))
{return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,prototype_prefix.call(null,[cljsrepl.core.str(pf),cljsrepl.core.str("$arity$"),cljsrepl.core.str(cljsrepl.core.count.call(null,cljsrepl.core.first.call(null,meths)))].join(''))),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),adapt_params.call(null,meths))),cljsrepl.core.meta.call(null,form)))))], true);
} else
{return cljsrepl.core.map.call(null,(function (p__4025){
var vec__4026 = p__4025;
var sig = cljsrepl.core.nth.call(null,vec__4026,0,null);
var body = cljsrepl.core.nthnext.call(null,vec__4026,1);
var meth = vec__4026;
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,prototype_prefix.call(null,[cljsrepl.core.str(pf),cljsrepl.core.str("$arity$"),cljsrepl.core.str(cljsrepl.core.count.call(null,sig))].join(''))),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,adapt_params.call(null,meth)))),cljsrepl.core.meta.call(null,form)))));
}),meths);
}
}
}),sigs));
}
});
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.mapcat.call(null,assign_impls,impl_map)));
}
};
var extend_type = function (_AMPERSAND_form,_AMPERSAND_env,tsym,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return extend_type__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, tsym, impls);
};
extend_type.cljs$lang$maxFixedArity = 3;
extend_type.cljs$lang$applyTo = (function (arglist__4027){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4027);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4027));
var tsym = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4027)));
var impls = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4027)));
return extend_type__delegate(_AMPERSAND_form, _AMPERSAND_env, tsym, impls);
});
extend_type.cljs$lang$arity$variadic = extend_type__delegate;
return extend_type;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"extend-type")));
cljsrepl.core.prepare_protocol_masks = (function prepare_protocol_masks(env,t,impls){
var resolve = (function (p1__3984_SHARP_){
var ret = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,env,"\uFDD0'locals"),p1__3984_SHARP_));
if(cljsrepl.core.truth_(ret))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str([cljsrepl.core.str("Can't resolve: "),cljsrepl.core.str(p1__3984_SHARP_)].join('')),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,(new cljsrepl.core.Symbol(null,"ret"))))].join('')));
}
return ret;
});
var impl_map = (function (){var ret = cljsrepl.core.ObjMap.EMPTY;
var s = impls;
while(true){
if(cljsrepl.core.seq.call(null,s))
{{
var G__4029 = cljsrepl.core.assoc.call(null,ret,cljsrepl.core.first.call(null,s),cljsrepl.core.take_while.call(null,cljsrepl.core.seq_QMARK_,cljsrepl.core.next.call(null,s)));
var G__4030 = cljsrepl.core.drop_while.call(null,cljsrepl.core.seq_QMARK_,cljsrepl.core.next.call(null,s));
ret = G__4029;
s = G__4030;
continue;
}
} else
{return ret;
}
break;
}
})();
var temp__4090__auto__ = cljsrepl.core.seq.call(null,cljsrepl.core.keep.call(null,cljsrepl.core.fast_path_protocols,cljsrepl.core.map.call(null,resolve,cljsrepl.core.keys.call(null,impl_map))));
if(temp__4090__auto__)
{var fpp_pbs = temp__4090__auto__;
var fpps = cljsrepl.core.into.call(null,cljsrepl.core.PersistentHashSet.EMPTY,cljsrepl.core.filter.call(null,cljsrepl.core.partial.call(null,cljsrepl.core.contains_QMARK_,cljsrepl.core.fast_path_protocols),cljsrepl.core.map.call(null,resolve,cljsrepl.core.keys.call(null,impl_map))));
var fpp_partitions = cljsrepl.core.group_by.call(null,cljsrepl.core.first,fpp_pbs);
var fpp_partitions__$1 = cljsrepl.core.into.call(null,cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.map.call(null,cljsrepl.core.juxt.call(null,cljsrepl.core.key,cljsrepl.core.comp.call(null,cljsrepl.core.partial.call(null,cljsrepl.core.map,cljsrepl.core.peek),cljsrepl.core.val)),fpp_partitions));
var fpp_partitions__$2 = cljsrepl.core.into.call(null,cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.map.call(null,cljsrepl.core.juxt.call(null,cljsrepl.core.key,cljsrepl.core.comp.call(null,cljsrepl.core.partial.call(null,cljsrepl.core.reduce,cljsrepl.core.bit_or),cljsrepl.core.val)),fpp_partitions__$1));
return cljsrepl.core.PersistentVector.fromArray([fpps,cljsrepl.core.reduce.call(null,(function (ps,p){
return cljsrepl.core.update_in.call(null,ps,cljsrepl.core.PersistentVector.fromArray([p], true),cljsrepl.core.fnil.call(null,cljsrepl.core.identity,0));
}),fpp_partitions__$2,cljsrepl.core.range.call(null,cljsrepl.core.fast_path_protocol_partitions_count))], true);
} else
{return null;
}
});
cljsrepl.core.dt__GT_et = (function() {
var dt__GT_et = null;
var dt__GT_et__3 = (function (t,specs,fields){
return dt__GT_et.call(null,t,specs,fields,false);
});
var dt__GT_et__4 = (function (t,specs,fields,inline){
var ret = cljsrepl.core.PersistentVector.EMPTY;
var s = specs;
while(true){
if(cljsrepl.core.seq.call(null,s))
{{
var G__4036 = cljsrepl.core.into.call(null,cljsrepl.core.conj.call(null,ret,cljsrepl.core.first.call(null,s)),cljsrepl.core.reduce.call(null,((function (ret,s){
return (function (v,p__4034){
var vec__4035 = p__4034;
var f = cljsrepl.core.nth.call(null,vec__4035,0,null);
var sigs = cljsrepl.core.nth.call(null,vec__4035,1,null);
return cljsrepl.core.conj.call(null,v,cljsrepl.core.vary_meta.call(null,cljsrepl.core.cons.call(null,f,cljsrepl.core.map.call(null,((function (ret,s,vec__4035,f,sigs){
return (function (p1__4028_SHARP_){
return cljsrepl.core.cons.call(null,cljsrepl.core.second.call(null,p1__4028_SHARP_),cljsrepl.core.nnext.call(null,p1__4028_SHARP_));
});})(ret,s,vec__4035,f,sigs))
,sigs)),cljsrepl.core.assoc,"\uFDD0'cljsrepl.analyzer/type",t,"\uFDD0'cljsrepl.analyzer/fields",fields,"\uFDD0'protocol-impl",true,"\uFDD0'protocol-inline",inline));
});})(ret,s))
,cljsrepl.core.PersistentVector.EMPTY,cljsrepl.core.group_by.call(null,cljsrepl.core.first,cljsrepl.core.take_while.call(null,cljsrepl.core.seq_QMARK_,cljsrepl.core.next.call(null,s)))));
var G__4037 = cljsrepl.core.drop_while.call(null,cljsrepl.core.seq_QMARK_,cljsrepl.core.next.call(null,s));
ret = G__4036;
s = G__4037;
continue;
}
} else
{return ret;
}
break;
}
});
dt__GT_et = function(t,specs,fields,inline){
switch(arguments.length){
case 3:
return dt__GT_et__3.call(this,t,specs,fields);
case 4:
return dt__GT_et__4.call(this,t,specs,fields,inline);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt__GT_et.cljs$lang$arity$3 = dt__GT_et__3;
dt__GT_et.cljs$lang$arity$4 = dt__GT_et__4;
return dt__GT_et;
})()
;
cljsrepl.core.collect_protocols = (function collect_protocols(impls,env){
return cljsrepl.core.into.call(null,cljsrepl.core.PersistentHashSet.EMPTY,cljsrepl.core.map.call(null,(function (p1__4031_SHARP_){
return (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,env,"\uFDD0'locals"),p1__4031_SHARP_));
}),cljsrepl.core.filter.call(null,cljsrepl.core.symbol_QMARK_,impls)));
});
/**
* @param {...*} var_args
*/
cljsrepl.core.deftype = (function() { 
var deftype__delegate = function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
var r = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),t));
var vec__4046 = cljsrepl.core.prepare_protocol_masks.call(null,_AMPERSAND_env,t,impls);
var fpps = cljsrepl.core.nth.call(null,vec__4046,0,null);
var pmasks = cljsrepl.core.nth.call(null,vec__4046,1,null);
var protocols = cljsrepl.core.collect_protocols.call(null,impls,_AMPERSAND_env);
var t__$1 = cljsrepl.core.vary_meta.call(null,t,cljsrepl.core.assoc,"\uFDD0'protocols",protocols,"\uFDD0'skip-protocol-flag",fpps);
if(cljsrepl.core.seq.call(null,impls))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"deftype*"))),cljsrepl.core.list.call(null,t__$1),cljsrepl.core.list.call(null,fields),cljsrepl.core.list.call(null,pmasks)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$type"))),cljsrepl.core.list.call(null,t__$1)))),cljsrepl.core.list.call(null,true)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),cljsrepl.core.list.call(null,t__$1)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4038__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/list"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(r)].join(''))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),cljsrepl.core.list.call(null,t__$1)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4038__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4039__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"opt__4040__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-write"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4039__auto__"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(r)].join(''))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/extend-type"))),cljsrepl.core.list.call(null,t__$1),cljsrepl.core.dt__GT_et.call(null,t__$1,impls,fields,true)))),cljsrepl.core.list.call(null,t__$1)));
} else
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"deftype*"))),cljsrepl.core.list.call(null,t__$1),cljsrepl.core.list.call(null,fields),cljsrepl.core.list.call(null,pmasks)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$type"))),cljsrepl.core.list.call(null,t__$1)))),cljsrepl.core.list.call(null,true)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),cljsrepl.core.list.call(null,t__$1)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4041__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/list"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(r)].join(''))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),cljsrepl.core.list.call(null,t__$1)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4041__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4042__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"opts__4043__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-write"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4042__auto__"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(r)].join(''))))))))))),cljsrepl.core.list.call(null,t__$1)));
}
};
var deftype = function (_AMPERSAND_form,_AMPERSAND_env,t,fields,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return deftype__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, t, fields, impls);
};
deftype.cljs$lang$maxFixedArity = 4;
deftype.cljs$lang$applyTo = (function (arglist__4047){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4047);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4047));
var t = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4047)));
var fields = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4047))));
var impls = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4047))));
return deftype__delegate(_AMPERSAND_form, _AMPERSAND_env, t, fields, impls);
});
deftype.cljs$lang$arity$variadic = deftype__delegate;
return deftype;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"deftype")));
cljsrepl.core.caching_hash = (function caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"h__4044__auto__"))),cljsrepl.core.list.call(null,hash_key))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/if-not"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/nil?"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"h__4044__auto__")))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"h__4044__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"h__4044__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,hash_fn),cljsrepl.core.list.call(null,coll)))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,hash_key),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"h__4044__auto__")))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"h__4044__auto__")))))))))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"caching-hash")));
/**
* Do not use this directly - use defrecord
*/
cljsrepl.core.emit_defrecord = (function emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljsrepl.core.vec.call(null,cljsrepl.core.map.call(null,(function (p1__4048_SHARP_){
return cljsrepl.core.with_meta.call(null,p1__4048_SHARP_,null);
}),fields));
var base_fields = fields__$1;
var fields__$2 = cljsrepl.core.conj.call(null,fields__$1,(new cljsrepl.core.Symbol(null,"__meta")),(new cljsrepl.core.Symbol(null,"__extmap")),cljsrepl.core.with_meta.call(null,(new cljsrepl.core.Symbol(null,"__hash")),cljsrepl.core.ObjMap.fromObject(["\uFDD0'mutable"],{"\uFDD0'mutable":true})));
var gs = cljsrepl.core.gensym.call(null);
var ksym = cljsrepl.core.gensym.call(null,"k");
var impls__$1 = cljsrepl.core.concat.call(null,impls,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"IRecord")),(new cljsrepl.core.Symbol(null,"IHash")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-hash"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4049__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/caching-hash"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4049__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"hash-imap"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__hash")))))))),(new cljsrepl.core.Symbol(null,"IEquiv")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-equiv"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4050__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"other__4051__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/and"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"other__4051__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/identical?"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-constructor"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4050__auto__")))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-constructor"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"other__4051__auto__"))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/equiv-map"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4050__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"other__4051__auto__"))))))))),cljsrepl.core.list.call(null,true),cljsrepl.core.list.call(null,false)))))),(new cljsrepl.core.Symbol(null,"IMeta")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-meta"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4052__auto__"))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__meta"))))),(new cljsrepl.core.Symbol(null,"IWithMeta")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-with-meta"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4053__auto__"))),cljsrepl.core.list.call(null,gs))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,tagname),cljsrepl.core.replace.call(null,cljsrepl.core.PersistentArrayMap.fromArrays([(new cljsrepl.core.Symbol(null,"__meta"))],[gs]),fields__$2)))))),(new cljsrepl.core.Symbol(null,"ILookup")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-lookup"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4054__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4055__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-lookup"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4054__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4055__auto__"))),cljsrepl.core.list.call(null,null)))))),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-lookup"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4056__auto__"))),cljsrepl.core.list.call(null,ksym),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"else__4057__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/cond"))),cljsrepl.core.mapcat.call(null,(function (f){
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/identical?"))),cljsrepl.core.list.call(null,ksym),cljsrepl.core.list.call(null,cljsrepl.core.keyword.call(null,f)))),f], true);
}),base_fields),cljsrepl.core.list.call(null,"\uFDD0'else"),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/get"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__extmap"))),cljsrepl.core.list.call(null,ksym),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"else__4057__auto__"))))))))))),(new cljsrepl.core.Symbol(null,"ICounted")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-count"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4058__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/+"))),cljsrepl.core.list.call(null,cljsrepl.core.count.call(null,base_fields)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/count"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__extmap"))))))))))),(new cljsrepl.core.Symbol(null,"ICollection")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-conj"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4059__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"entry__4060__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/vector?"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"entry__4060__auto__")))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-assoc"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4059__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-nth"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"entry__4060__auto__"))),cljsrepl.core.list.call(null,0)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-nth"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"entry__4060__auto__"))),cljsrepl.core.list.call(null,1))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/reduce"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-conj"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4059__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"entry__4060__auto__"))))))))))),(new cljsrepl.core.Symbol(null,"IAssociative")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-assoc"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4061__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4062__auto__"))),cljsrepl.core.list.call(null,gs))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/condp"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/identical?"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4062__auto__"))),cljsrepl.core.mapcat.call(null,(function (fld){
return cljsrepl.core.PersistentVector.fromArray([cljsrepl.core.keyword.call(null,fld),cljsrepl.core.list_STAR_.call(null,(new cljsrepl.core.Symbol(null,"new")),tagname,cljsrepl.core.replace.call(null,cljsrepl.core.PersistentArrayMap.fromArrays([fld,(new cljsrepl.core.Symbol(null,"__hash"))],[gs,null]),fields__$2))], true);
}),base_fields),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,tagname),cljsrepl.core.remove.call(null,cljsrepl.core.PersistentHashSet.fromArray([(new cljsrepl.core.Symbol(null,"__extmap")),(new cljsrepl.core.Symbol(null,"__hash"))]),fields__$2),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/assoc"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__extmap"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4062__auto__"))),cljsrepl.core.list.call(null,gs)))),cljsrepl.core.list.call(null,null))))))))),(new cljsrepl.core.Symbol(null,"IMap")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-dissoc"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4063__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4064__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/contains?"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_set,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.map.call(null,cljsrepl.core.keyword,base_fields))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4064__auto__")))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/dissoc"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/with-meta"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/into"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null)))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4063__auto__")))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__meta")))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4064__auto__")))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,tagname),cljsrepl.core.remove.call(null,cljsrepl.core.PersistentHashSet.fromArray([(new cljsrepl.core.Symbol(null,"__extmap")),(new cljsrepl.core.Symbol(null,"__hash"))]),fields__$2),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/not-empty"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/dissoc"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__extmap"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"k__4064__auto__"))))))))),cljsrepl.core.list.call(null,null))))))))),(new cljsrepl.core.Symbol(null,"ISeqable")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-seq"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4066__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/seq"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/concat"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.map.call(null,(function (p1__4065_SHARP_){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/vector")),cljsrepl.core.keyword.call(null,p1__4065_SHARP_),p1__4065_SHARP_);
}),base_fields))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__extmap"))))))))))),(new cljsrepl.core.Symbol(null,"IPrintWithWriter")),cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"-pr-writer"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4068__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4069__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"opts__4070__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"pr-pair__4071__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"keyval__4072__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/pr-sequential-writer"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4069__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/pr-writer"))),cljsrepl.core.list.call(null,""),cljsrepl.core.list.call(null," "),cljsrepl.core.list.call(null,""),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"opts__4070__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"keyval__4072__auto__"))))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/pr-sequential-writer"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4069__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"pr-pair__4071__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,"#"),cljsrepl.core.list.call(null,cljsrepl.core.name.call(null,rname)),cljsrepl.core.list.call(null,"{")))),cljsrepl.core.list.call(null,", "),cljsrepl.core.list.call(null,"}"),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"opts__4070__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/concat"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.map.call(null,(function (p1__4067_SHARP_){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/vector")),cljsrepl.core.keyword.call(null,p1__4067_SHARP_),p1__4067_SHARP_);
}),base_fields))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"__extmap"))))))))))))))], true));
var vec__4074 = cljsrepl.core.prepare_protocol_masks.call(null,env,tagname,impls__$1);
var fpps = cljsrepl.core.nth.call(null,vec__4074,0,null);
var pmasks = cljsrepl.core.nth.call(null,vec__4074,1,null);
var protocols = cljsrepl.core.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljsrepl.core.vary_meta.call(null,tagname,cljsrepl.core.assoc,"\uFDD0'protocols",protocols,"\uFDD0'skip-protocol-flag",fpps);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"defrecord*"))),cljsrepl.core.list.call(null,tagname__$1),cljsrepl.core.list.call(null,hinted_fields),cljsrepl.core.list.call(null,pmasks)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/extend-type"))),cljsrepl.core.list.call(null,tagname__$1),cljsrepl.core.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))))));
});
cljsrepl.core.build_positional_factory = (function build_positional_factory(rsym,rname,fields){
var fn_name = cljsrepl.core.symbol.call(null,[cljsrepl.core.str((new cljsrepl.core.Symbol(null,"->"))),cljsrepl.core.str(rsym)].join(''));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/defn"))),cljsrepl.core.list.call(null,fn_name),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,fields)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,rname),fields)))));
});
cljsrepl.core.build_map_factory = (function build_map_factory(rsym,rname,fields){
var fn_name = cljsrepl.core.symbol.call(null,[cljsrepl.core.str((new cljsrepl.core.Symbol(null,"map->"))),cljsrepl.core.str(rsym)].join(''));
var ms = cljsrepl.core.gensym.call(null);
var ks = cljsrepl.core.map.call(null,cljsrepl.core.keyword,fields);
var getters = cljsrepl.core.map.call(null,(function (k){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,k),cljsrepl.core.list.call(null,ms)));
}),ks);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/defn"))),cljsrepl.core.list.call(null,fn_name),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,ms))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,rname),getters,cljsrepl.core.list.call(null,null),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/dissoc"))),cljsrepl.core.list.call(null,ms),ks))))))));
});
/**
* @param {...*} var_args
*/
cljsrepl.core.defrecord = (function() { 
var defrecord__delegate = function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
var r = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),rsym));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null)))),cljsrepl.core.list.call(null,cljsrepl.core.emit_defrecord.call(null,_AMPERSAND_env,rsym,r,fields,impls)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$type"))),cljsrepl.core.list.call(null,r)))),cljsrepl.core.list.call(null,true)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),cljsrepl.core.list.call(null,r)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4075__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/list"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(r)].join(''))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),cljsrepl.core.list.call(null,r)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"this__4075__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4076__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-write"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"writer__4076__auto__"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(r)].join(''))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.build_positional_factory.call(null,rsym,r,fields)),cljsrepl.core.list.call(null,cljsrepl.core.build_map_factory.call(null,rsym,r,fields)),cljsrepl.core.list.call(null,r)));
};
var defrecord = function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return defrecord__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, rsym, fields, impls);
};
defrecord.cljs$lang$maxFixedArity = 4;
defrecord.cljs$lang$applyTo = (function (arglist__4078){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4078);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4078));
var rsym = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4078)));
var fields = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4078))));
var impls = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4078))));
return defrecord__delegate(_AMPERSAND_form, _AMPERSAND_env, rsym, fields, impls);
});
defrecord.cljs$lang$arity$variadic = defrecord__delegate;
return defrecord;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defrecord")));
/**
* @param {...*} var_args
*/
cljsrepl.core.defprotocol = (function() { 
var defprotocol__delegate = function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),psym));
var psym__$1 = cljsrepl.core.vary_meta.call(null,psym,cljsrepl.core.assoc,"\uFDD0'protocol-symbol",true);
var ns_name = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,(new cljsrepl.core.Keyword("\uFDD0'ns")).call(null,_AMPERSAND_env));
var fqn = (function (n){
return cljsrepl.core.symbol.call(null,[cljsrepl.core.str(ns_name),cljsrepl.core.str("."),cljsrepl.core.str(n)].join(''));
});
var prefix = cljsrepl.compiler.protocol_prefix.call(null,p);
var methods$ = ((cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,doc_PLUS_methods)))?cljsrepl.core.next.call(null,doc_PLUS_methods):doc_PLUS_methods);
var expand_sig = (function (fname,slot,sig){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,sig),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/and"))),cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,sig)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,sig)),cljsrepl.core.list.call(null,cljsrepl.core.symbol.call(null,[cljsrepl.core.str("-"),cljsrepl.core.str(slot)].join(''))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,sig)),cljsrepl.core.list.call(null,slot),sig))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"x__4077__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/nil?"))),cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,sig))))),cljsrepl.core.list.call(null,null),cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,sig))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/or"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aget"))),cljsrepl.core.list.call(null,fqn.call(null,fname)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"replgoog.typeOf"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"x__4077__auto__"))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aget"))),cljsrepl.core.list.call(null,fqn.call(null,fname)),cljsrepl.core.list.call(null,"_")))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"throw"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/missing-protocol"))),cljsrepl.core.list.call(null,[cljsrepl.core.str(psym__$1),cljsrepl.core.str("."),cljsrepl.core.str(fname)].join('')),cljsrepl.core.list.call(null,cljsrepl.core.first.call(null,sig))))))))))),sig)))))))))));
});
var method = (function (p__4081){
var vec__4082 = p__4081;
var fname = cljsrepl.core.nth.call(null,vec__4082,0,null);
var sigs = cljsrepl.core.nthnext.call(null,vec__4082,1);
var sigs__$1 = cljsrepl.core.take_while.call(null,cljsrepl.core.vector_QMARK_,sigs);
var slot = cljsrepl.core.symbol.call(null,[cljsrepl.core.str(prefix),cljsrepl.core.str(cljsrepl.core.name.call(null,fname))].join(''));
var fname__$1 = cljsrepl.core.vary_meta.call(null,fname,cljsrepl.core.assoc,"\uFDD0'protocol",p);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/defn"))),cljsrepl.core.list.call(null,fname__$1),cljsrepl.core.map.call(null,(function (sig){
return expand_sig.call(null,fname__$1,cljsrepl.core.symbol.call(null,[cljsrepl.core.str(slot),cljsrepl.core.str("$arity$"),cljsrepl.core.str(cljsrepl.core.count.call(null,sig))].join('')),sig);
}),sigs__$1)));
});
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"*unchecked-if*"))),cljsrepl.core.list.call(null,true)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"def"))),cljsrepl.core.list.call(null,psym__$1),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*"))),cljsrepl.core.list.call(null,"{}"))))))),cljsrepl.core.map.call(null,method,methods$),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"*unchecked-if*"))),cljsrepl.core.list.call(null,false))))));
};
var defprotocol = function (_AMPERSAND_form,_AMPERSAND_env,psym,var_args){
var doc_PLUS_methods = null;
if (replgoog.isDef(var_args)) {
  doc_PLUS_methods = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defprotocol__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, psym, doc_PLUS_methods);
};
defprotocol.cljs$lang$maxFixedArity = 3;
defprotocol.cljs$lang$applyTo = (function (arglist__4083){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4083);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4083));
var psym = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4083)));
var doc_PLUS_methods = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4083)));
return defprotocol__delegate(_AMPERSAND_form, _AMPERSAND_env, psym, doc_PLUS_methods);
});
defprotocol.cljs$lang$arity$variadic = defprotocol__delegate;
return defprotocol;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defprotocol")));
cljsrepl.core.emit_extend_protocol = (function emit_extend_protocol(p,specs){
var impls = cljsrepl.core.parse_impls.call(null,specs);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.map.call(null,(function (p__4086){
var vec__4087 = p__4086;
var t = cljsrepl.core.nth.call(null,vec__4087,0,null);
var fs = cljsrepl.core.nth.call(null,vec__4087,1,null);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/extend-type"))),cljsrepl.core.list.call(null,t),cljsrepl.core.list.call(null,p),fs));
}),impls)));
});
/**
* Useful when you want to provide several implementations of the same
* protocol all at once. Takes a single protocol and the implementation
* of that protocol for one or more types. Expands into calls to
* extend-type:
* 
* (extend-protocol Protocol
* AType
* (foo [x] ...)
* (bar [x y] ...)
* BType
* (foo [x] ...)
* (bar [x y] ...)
* AClass
* (foo [x] ...)
* (bar [x y] ...)
* nil
* (foo [x] ...)
* (bar [x y] ...))
* 
* expands into:
* 
* (do
* (replclojure.core/extend-type AType Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (replclojure.core/extend-type BType Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (replclojure.core/extend-type AClass Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (replclojure.core/extend-type nil Protocol
* (foo [x] ...)
* (bar [x y] ...)))
* @param {...*} var_args
*/
cljsrepl.core.extend_protocol = (function() { 
var extend_protocol__delegate = function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljsrepl.core.emit_extend_protocol.call(null,p,specs);
};
var extend_protocol = function (_AMPERSAND_form,_AMPERSAND_env,p,var_args){
var specs = null;
if (replgoog.isDef(var_args)) {
  specs = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return extend_protocol__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, p, specs);
};
extend_protocol.cljs$lang$maxFixedArity = 3;
extend_protocol.cljs$lang$applyTo = (function (arglist__4088){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4088);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4088));
var p = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4088)));
var specs = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4088)));
return extend_protocol__delegate(_AMPERSAND_form, _AMPERSAND_env, p, specs);
});
extend_protocol.cljs$lang$arity$variadic = extend_protocol__delegate;
return extend_protocol;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"extend-protocol")));
/**
* Returns true if x satisfies the protocol
*/
cljsrepl.core.satisfies_QMARK_ = (function satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = (new cljsrepl.core.Keyword("\uFDD0'name")).call(null,cljsrepl.analyzer.resolve_var.call(null,cljsrepl.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),psym));
var prefix = cljsrepl.compiler.protocol_prefix.call(null,p);
var xsym = cljsrepl.core.bool_expr.call(null,cljsrepl.core.gensym.call(null));
var vec__4090 = cljsrepl.core.fast_path_protocols.call(null,p);
var part = cljsrepl.core.nth.call(null,vec__4090,0,null);
var bit = cljsrepl.core.nth.call(null,vec__4090,1,null);
var msym = cljsrepl.core.symbol.call(null,[cljsrepl.core.str("-cljs$lang$protocol_mask$partition"),cljsrepl.core.str(part),cljsrepl.core.str("$")].join(''));
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,xsym),cljsrepl.core.list.call(null,x))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,xsym),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/or"))),cljsrepl.core.list.call(null,(cljsrepl.core.truth_(bit)?cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/unsafe-bit-and"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,xsym),cljsrepl.core.list.call(null,msym)))),cljsrepl.core.list.call(null,bit))):null)),cljsrepl.core.list.call(null,cljsrepl.core.bool_expr.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,xsym),cljsrepl.core.list.call(null,cljsrepl.core.symbol.call(null,[cljsrepl.core.str("-"),cljsrepl.core.str(prefix)].join('')))))))))),cljsrepl.core.list.call(null,true),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/coercive-not"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"."))),cljsrepl.core.list.call(null,xsym),cljsrepl.core.list.call(null,msym))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/type_satisfies_"))),cljsrepl.core.list.call(null,psym),cljsrepl.core.list.call(null,xsym)))),cljsrepl.core.list.call(null,false))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/type_satisfies_"))),cljsrepl.core.list.call(null,psym),cljsrepl.core.list.call(null,xsym)))))))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"satisfies?")));
/**
* @param {...*} var_args
*/
cljsrepl.core.lazy_seq = (function() { 
var lazy_seq__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/LazySeq"))),cljsrepl.core.list.call(null,null),cljsrepl.core.list.call(null,false),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null)))),body))),cljsrepl.core.list.call(null,null)));
};
var lazy_seq = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return lazy_seq__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
lazy_seq.cljs$lang$maxFixedArity = 2;
lazy_seq.cljs$lang$applyTo = (function (arglist__4091){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4091);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4091));
var body = cljsrepl.core.rest(cljsrepl.core.next(arglist__4091));
return lazy_seq__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
lazy_seq.cljs$lang$arity$variadic = lazy_seq__delegate;
return lazy_seq;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"lazy-seq")));
/**
* @param {...*} var_args
*/
cljsrepl.core.delay = (function() { 
var delay__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"new"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/Delay"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/atom"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,"\uFDD0'done"),cljsrepl.core.list.call(null,false),cljsrepl.core.list.call(null,"\uFDD0'value"),cljsrepl.core.list.call(null,null)))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null)))),body)))));
};
var delay = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return delay__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
delay.cljs$lang$maxFixedArity = 2;
delay.cljs$lang$applyTo = (function (arglist__4092){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4092);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4092));
var body = cljsrepl.core.rest(cljsrepl.core.next(arglist__4092));
return delay__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
delay.cljs$lang$arity$variadic = delay__delegate;
return delay;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"delay")));
/**
* binding => var-symbol init-expr
* 
* Creates new bindings for the (already-existing) vars, with the
* supplied initial values, executes the exprs in an implicit do, then
* re-establishes the bindings that existed before.  The new bindings
* are made in parallel (unlike let); all init-exprs are evaluated
* before the vars are bound to their new values.
* @param {...*} var_args
*/
cljsrepl.core.binding = (function() { 
var binding__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljsrepl.core.take_nth.call(null,2,bindings);
var vals = cljsrepl.core.take_nth.call(null,2,cljsrepl.core.drop.call(null,1,bindings));
var tempnames = cljsrepl.core.map.call(null,cljsrepl.core.comp.call(null,cljsrepl.core.gensym,cljsrepl.core.name),names);
var binds = cljsrepl.core.map.call(null,cljsrepl.core.vector,names,vals);
var resets = cljsrepl.core.reverse.call(null,cljsrepl.core.map.call(null,cljsrepl.core.vector,names,tempnames));
cljsrepl.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.interleave.call(null,tempnames,names))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"try"))),cljsrepl.core.map.call(null,(function (p__4098){
var vec__4099 = p__4098;
var k = cljsrepl.core.nth.call(null,vec__4099,0,null);
var v = cljsrepl.core.nth.call(null,vec__4099,1,null);
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!")),k,v);
}),binds),body,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"finally"))),cljsrepl.core.map.call(null,(function (p__4100){
var vec__4101 = p__4100;
var k = cljsrepl.core.nth.call(null,vec__4101,0,null);
var v = cljsrepl.core.nth.call(null,vec__4101,1,null);
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"set!")),k,v);
}),resets)))))))));
};
var binding = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return binding__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
binding.cljs$lang$maxFixedArity = 3;
binding.cljs$lang$applyTo = (function (arglist__4102){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4102);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4102));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4102)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4102)));
return binding__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
binding.cljs$lang$arity$variadic = binding__delegate;
return binding;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"binding")));
/**
* Takes a binary predicate, an expression, and a set of clauses.
* Each clause can take the form of either:
* 
* test-expr result-expr
* 
* test-expr :>> result-fn
* 
* Note :>> is an ordinary keyword.
* 
* For each clause, (pred test-expr expr) is evaluated. If it returns
* logical true, the clause is a match. If a binary clause matches, the
* result-expr is returned, if a ternary clause matches, its result-fn,
* which must be a unary function, is called with the result of the
* predicate as its argument, the result of that call being the return
* value of condp. A single default expression can follow the clauses,
* and its value will be returned if no clause matches. If no default
* expression is provided and no clause matches, an
* IllegalArgumentException is thrown.
* @param {...*} var_args
*/
cljsrepl.core.condp = (function() { 
var condp__delegate = function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljsrepl.core.gensym.call(null,"pred__");
var gexpr = cljsrepl.core.gensym.call(null,"expr__");
var emit = (function emit(pred__$1,expr__$1,args){
var vec__4109 = cljsrepl.core.split_at.call(null,((cljsrepl.core._EQ_.call(null,"\uFDD0'>>",cljsrepl.core.second.call(null,args)))?3:2),args);
var vec__4110 = cljsrepl.core.nth.call(null,vec__4109,0,null);
var a = cljsrepl.core.nth.call(null,vec__4110,0,null);
var b = cljsrepl.core.nth.call(null,vec__4110,1,null);
var c = cljsrepl.core.nth.call(null,vec__4110,2,null);
var clause = vec__4110;
var more = cljsrepl.core.nth.call(null,vec__4109,1,null);
var n = cljsrepl.core.count.call(null,clause);
if(cljsrepl.core._EQ_.call(null,0,n))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"throw"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js/Error."))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,"No matching clause: "),cljsrepl.core.list.call(null,expr__$1)))))))));
} else
{if(cljsrepl.core._EQ_.call(null,1,n))
{return a;
} else
{if(cljsrepl.core._EQ_.call(null,2,n))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,pred__$1),cljsrepl.core.list.call(null,a),cljsrepl.core.list.call(null,expr__$1)))),cljsrepl.core.list.call(null,b),cljsrepl.core.list.call(null,emit.call(null,pred__$1,expr__$1,more))));
} else
{if("\uFDD0'else")
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/if-let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"p__4093__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,pred__$1),cljsrepl.core.list.call(null,a),cljsrepl.core.list.call(null,expr__$1)))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,c),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"p__4093__auto__")))))),cljsrepl.core.list.call(null,emit.call(null,pred__$1,expr__$1,more))));
} else
{return null;
}
}
}
}
});
var gres = cljsrepl.core.gensym.call(null,"res__");
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,gpred),cljsrepl.core.list.call(null,pred),cljsrepl.core.list.call(null,gexpr),cljsrepl.core.list.call(null,expr))))),cljsrepl.core.list.call(null,emit.call(null,gpred,gexpr,clauses))));
};
var condp = function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,var_args){
var clauses = null;
if (replgoog.isDef(var_args)) {
  clauses = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return condp__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, pred, expr, clauses);
};
condp.cljs$lang$maxFixedArity = 4;
condp.cljs$lang$applyTo = (function (arglist__4111){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4111);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4111));
var pred = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4111)));
var expr = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4111))));
var clauses = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4111))));
return condp__delegate(_AMPERSAND_form, _AMPERSAND_env, pred, expr, clauses);
});
condp.cljs$lang$arity$variadic = condp__delegate;
return condp;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"condp")));
/**
* @param {...*} var_args
*/
cljsrepl.core.case$ = (function() { 
var case$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljsrepl.core.odd_QMARK_.call(null,cljsrepl.core.count.call(null,clauses)))?cljsrepl.core.last.call(null,clauses):cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"throw"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js/Error."))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,"No matching clause: "),cljsrepl.core.list.call(null,e))))))))));
var assoc_test = (function assoc_test(m,test,expr){
if(cljsrepl.core.contains_QMARK_.call(null,m,test))
{throw (new Error([cljsrepl.core.str("Duplicate case test constant '"),cljsrepl.core.str(test),cljsrepl.core.str("'"),cljsrepl.core.str((cljsrepl.core.truth_((new cljsrepl.core.Keyword("\uFDD0'line")).call(null,_AMPERSAND_env))?[cljsrepl.core.str(" on line "),cljsrepl.core.str((new cljsrepl.core.Keyword("\uFDD0'line")).call(null,_AMPERSAND_env)),cljsrepl.core.str(" "),cljsrepl.core.str(cljsrepl.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else
{return cljsrepl.core.assoc.call(null,m,test,expr);
}
});
var pairs = cljsrepl.core.reduce.call(null,(function (m,p__4118){
var vec__4119 = p__4118;
var test = cljsrepl.core.nth.call(null,vec__4119,0,null);
var expr = cljsrepl.core.nth.call(null,vec__4119,1,null);
if(cljsrepl.core.seq_QMARK_.call(null,test))
{return cljsrepl.core.reduce.call(null,(function (m__$1,test__$1){
var test__$2 = ((cljsrepl.core.symbol_QMARK_.call(null,test__$1))?cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),test__$1):test__$1);
return assoc_test.call(null,m__$1,test__$2,expr);
}),m,test);
} else
{if(cljsrepl.core.symbol_QMARK_.call(null,test))
{return assoc_test.call(null,m,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote")),test),expr);
} else
{if("\uFDD0'else")
{return assoc_test.call(null,m,test,expr);
} else
{return null;
}
}
}
}),cljsrepl.core.ObjMap.EMPTY,cljsrepl.core.partition.call(null,2,clauses));
var esym = cljsrepl.core.gensym.call(null);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,esym),cljsrepl.core.list.call(null,e))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/cond"))),cljsrepl.core.mapcat.call(null,(function (p__4120){
var vec__4121 = p__4120;
var m = cljsrepl.core.nth.call(null,vec__4121,0,null);
var c = cljsrepl.core.nth.call(null,vec__4121,1,null);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/="))),cljsrepl.core.list.call(null,m),cljsrepl.core.list.call(null,esym)))),cljsrepl.core.list.call(null,c)));
}),pairs),cljsrepl.core.list.call(null,"\uFDD0'else"),cljsrepl.core.list.call(null,default$))))));
};
var case$ = function (_AMPERSAND_form,_AMPERSAND_env,e,var_args){
var clauses = null;
if (replgoog.isDef(var_args)) {
  clauses = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return case$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, e, clauses);
};
case$.cljs$lang$maxFixedArity = 3;
case$.cljs$lang$applyTo = (function (arglist__4122){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4122);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4122));
var e = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4122)));
var clauses = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4122)));
return case$__delegate(_AMPERSAND_form, _AMPERSAND_env, e, clauses);
});
case$.cljs$lang$arity$variadic = case$__delegate;
return case$;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"case")));
/**
* (try expr* catch-clause* finally-clause?)
* 
* Special Form
* 
* catch-clause => (catch protoname name expr*)
* finally-clause => (finally expr*)
* 
* Catches and handles JavaScript exceptions.
* @param {...*} var_args
*/
cljsrepl.core.try$ = (function() { 
var try$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,forms){
var catch_QMARK_ = (function (p1__4112_SHARP_){
var and__3941__auto__ = cljsrepl.core.list_QMARK_.call(null,p1__4112_SHARP_);
if(and__3941__auto__)
{return cljsrepl.core._EQ_.call(null,cljsrepl.core.first.call(null,p1__4112_SHARP_),(new cljsrepl.core.Symbol(null,"catch")));
} else
{return and__3941__auto__;
}
});
var vec__4127 = cljsrepl.core.split_with.call(null,cljsrepl.core.complement.call(null,catch_QMARK_),forms);
var body = cljsrepl.core.nth.call(null,vec__4127,0,null);
var catches = cljsrepl.core.nth.call(null,vec__4127,1,null);
var vec__4128 = cljsrepl.core.split_with.call(null,catch_QMARK_,catches);
var catches__$1 = cljsrepl.core.nth.call(null,vec__4128,0,null);
var fin = cljsrepl.core.nth.call(null,vec__4128,1,null);
var e = cljsrepl.core.gensym.call(null,"e");
if(cljsrepl.core.every_QMARK_.call(null,(function (p1__4113_SHARP_){
return (cljsrepl.core.count.call(null,p1__4113_SHARP_) > 2);
}),catches__$1))
{} else
{throw (new Error([cljsrepl.core.str("Assert failed: "),cljsrepl.core.str("catch block must specify a prototype and a name"),cljsrepl.core.str("\n"),cljsrepl.core.str(cljsrepl.core.pr_str.call(null,cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"every?")),cljsrepl.core.list((new cljsrepl.core.Symbol(null,"fn*")),cljsrepl.core.vec([(new cljsrepl.core.Symbol(null,"p1__4113#"))]),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"cljsrepl.core/>")),cljsrepl.core.with_meta(cljsrepl.core.list((new cljsrepl.core.Symbol(null,"count")),(new cljsrepl.core.Symbol(null,"p1__4113#"))),cljsrepl.core.hash_map("\uFDD0'line",8571,"\uFDD0'column",35)),2),cljsrepl.core.hash_map("\uFDD0'line",8571,"\uFDD0'column",22))),(new cljsrepl.core.Symbol(null,"catches"))),cljsrepl.core.hash_map("\uFDD0'line",8571,"\uFDD0'column",13))))].join('')));
}
if(cljsrepl.core.seq.call(null,catches__$1))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"try*"))),body,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"catch"))),cljsrepl.core.list.call(null,e),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/cond"))),cljsrepl.core.mapcat.call(null,(function (p__4129){
var vec__4130 = p__4129;
var _ = cljsrepl.core.nth.call(null,vec__4130,0,null);
var type = cljsrepl.core.nth.call(null,vec__4130,1,null);
var name = cljsrepl.core.nth.call(null,vec__4130,2,null);
var cb = cljsrepl.core.nthnext.call(null,vec__4130,3);
return cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/instance?"))),cljsrepl.core.list.call(null,type),cljsrepl.core.list.call(null,e)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,name),cljsrepl.core.list.call(null,e))))),cb))))));
}),catches__$1),cljsrepl.core.list.call(null,"\uFDD0'else"),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"throw"))),cljsrepl.core.list.call(null,e)))))))))),fin));
} else
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"try*"))),body,fin));
}
};
var try$ = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var forms = null;
if (replgoog.isDef(var_args)) {
  forms = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return try$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, forms);
};
try$.cljs$lang$maxFixedArity = 2;
try$.cljs$lang$applyTo = (function (arglist__4131){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4131);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4131));
var forms = cljsrepl.core.rest(cljsrepl.core.next(arglist__4131));
return try$__delegate(_AMPERSAND_form, _AMPERSAND_env, forms);
});
try$.cljs$lang$arity$variadic = try$__delegate;
return try$;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"try")));
/**
* Evaluates expr and throws an exception if it does not evaluate to
* logical true.
*/
cljsrepl.core.assert = (function() {
var assert = null;
var assert__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljsrepl.core.truth_(cljsrepl.core._STAR_assert_STAR_))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when-not"))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"throw"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js/Error."))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,"Assert failed: "),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/pr-str"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote"))),cljsrepl.core.list.call(null,x))))))))))))))))));
} else
{return null;
}
});
var assert__4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljsrepl.core.truth_(cljsrepl.core._STAR_assert_STAR_))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when-not"))),cljsrepl.core.list.call(null,x),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"throw"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js/Error."))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,"Assert failed: "),cljsrepl.core.list.call(null,message),cljsrepl.core.list.call(null,"\n"),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/pr-str"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"quote"))),cljsrepl.core.list.call(null,x))))))))))))))))));
} else
{return null;
}
});
assert = function(_AMPERSAND_form,_AMPERSAND_env,x,message){
switch(arguments.length){
case 3:
return assert__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
case 4:
return assert__4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assert.cljs$lang$arity$3 = assert__3;
assert.cljs$lang$arity$4 = assert__4;
return assert;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"assert")));
/**
* List comprehension. Takes a vector of one or more
* binding-form/collection-expr pairs, each followed by zero or more
* modifiers, and yields a lazy sequence of evaluations of expr.
* Collections are iterated in a nested fashion, rightmost fastest,
* and nested coll-exprs can refer to bindings created in prior
* binding-forms.  Supported modifiers are: :let [binding-form expr ...],
* :while test, :when test.
* 
* (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
*/
cljsrepl.core.for$ = (function for$(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljsrepl.core.vector_QMARK_.call(null,seq_exprs))
{} else
{throw (new java.lang.IllegalArgumentException("for requires a vector for its binding"));
}
if(cljsrepl.core.even_QMARK_.call(null,cljsrepl.core.count.call(null,seq_exprs)))
{} else
{throw (new java.lang.IllegalArgumentException("for requires an even number of forms in binding vector"));
}
var to_groups = (function (seq_exprs__$1){
return cljsrepl.core.reduce.call(null,(function (groups,p__4156){
var vec__4157 = p__4156;
var k = cljsrepl.core.nth.call(null,vec__4157,0,null);
var v = cljsrepl.core.nth.call(null,vec__4157,1,null);
if(cljsrepl.core.keyword_QMARK_.call(null,k))
{return cljsrepl.core.conj.call(null,cljsrepl.core.pop.call(null,groups),cljsrepl.core.conj.call(null,cljsrepl.core.peek.call(null,groups),cljsrepl.core.PersistentVector.fromArray([k,v], true)));
} else
{return cljsrepl.core.conj.call(null,groups,cljsrepl.core.PersistentVector.fromArray([k,v], true));
}
}),cljsrepl.core.PersistentVector.EMPTY,cljsrepl.core.partition.call(null,2,seq_exprs__$1));
});
var err = (function() { 
var G__4177__delegate = function (msg){
throw (new Error(cljsrepl.core.apply.call(null,cljsrepl.core.str,msg)));
};
var G__4177 = function (var_args){
var msg = null;
if (replgoog.isDef(var_args)) {
  msg = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4177__delegate.call(this, msg);
};
G__4177.cljs$lang$maxFixedArity = 0;
G__4177.cljs$lang$applyTo = (function (arglist__4178){
var msg = cljsrepl.core.seq(arglist__4178);;
return G__4177__delegate(msg);
});
G__4177.cljs$lang$arity$variadic = G__4177__delegate;
return G__4177;
})()
;
var emit_bind = (function emit_bind(p__4158){
var vec__4168 = p__4158;
var vec__4169 = cljsrepl.core.nth.call(null,vec__4168,0,null);
var bind = cljsrepl.core.nth.call(null,vec__4169,0,null);
var expr = cljsrepl.core.nth.call(null,vec__4169,1,null);
var mod_pairs = cljsrepl.core.nthnext.call(null,vec__4169,2);
var vec__4170 = cljsrepl.core.nthnext.call(null,vec__4168,1);
var vec__4171 = cljsrepl.core.nth.call(null,vec__4170,0,null);
var _ = cljsrepl.core.nth.call(null,vec__4171,0,null);
var next_expr = cljsrepl.core.nth.call(null,vec__4171,1,null);
var next_groups = vec__4170;
var giter = cljsrepl.core.gensym.call(null,"iter__");
var gxs = cljsrepl.core.gensym.call(null,"s__");
var do_mod = (function do_mod(p__4172){
var vec__4175 = p__4172;
var vec__4176 = cljsrepl.core.nth.call(null,vec__4175,0,null);
var k = cljsrepl.core.nth.call(null,vec__4176,0,null);
var v = cljsrepl.core.nth.call(null,vec__4176,1,null);
var pair = vec__4176;
var etc = cljsrepl.core.nthnext.call(null,vec__4175,1);
if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'let"))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,v),cljsrepl.core.list.call(null,do_mod.call(null,etc))));
} else
{if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'while"))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,v),cljsrepl.core.list.call(null,do_mod.call(null,etc))));
} else
{if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'when"))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,v),cljsrepl.core.list.call(null,do_mod.call(null,etc)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/rest"))),cljsrepl.core.list.call(null,gxs)))))))));
} else
{if(cljsrepl.core.keyword_QMARK_.call(null,k))
{return err.call(null,"Invalid 'for' keyword ",k);
} else
{if(cljsrepl.core.truth_(next_groups))
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"iterys__4132__auto__"))),cljsrepl.core.list.call(null,emit_bind.call(null,next_groups)),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"fs__4133__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/seq"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"iterys__4132__auto__"))),cljsrepl.core.list.call(null,next_expr))))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"fs__4133__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/concat"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"fs__4133__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,giter),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/rest"))),cljsrepl.core.list.call(null,gxs)))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/rest"))),cljsrepl.core.list.call(null,gxs))))))))))));
} else
{if("\uFDD0'else")
{return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/cons"))),cljsrepl.core.list.call(null,body_expr),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,giter),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/rest"))),cljsrepl.core.list.call(null,gxs)))))))));
} else
{return null;
}
}
}
}
}
}
});
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,giter),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,gxs))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/lazy-seq"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/loop"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,gxs),cljsrepl.core.list.call(null,gxs))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when-first"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,bind),cljsrepl.core.list.call(null,gxs))))),cljsrepl.core.list.call(null,do_mod.call(null,mod_pairs)))))))))))));
});
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"iter__4134__auto__"))),cljsrepl.core.list.call(null,emit_bind.call(null,to_groups.call(null,seq_exprs))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"iter__4134__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.second.call(null,seq_exprs)))))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"for")));
/**
* Repeatedly executes body (presumably for side-effects) with
* bindings and filtering as provided by "for".  Does not retain
* the head of the sequence. Returns nil.
* @param {...*} var_args
*/
cljsrepl.core.doseq = (function() { 
var doseq__delegate = function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljsrepl.core.vector_QMARK_.call(null,seq_exprs))
{} else
{throw (new java.lang.IllegalArgumentException("doseq requires a vector for its binding"));
}
if(cljsrepl.core.even_QMARK_.call(null,cljsrepl.core.count.call(null,seq_exprs)))
{} else
{throw (new java.lang.IllegalArgumentException("doseq requires an even number of forms in binding vector"));
}
var step = (function step(recform,exprs){
if(cljsrepl.core.not.call(null,exprs))
{return cljsrepl.core.PersistentVector.fromArray([true,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),body))], true);
} else
{var k = cljsrepl.core.first.call(null,exprs);
var v = cljsrepl.core.second.call(null,exprs);
var seqsym = ((cljsrepl.core.keyword_QMARK_.call(null,k))?null:cljsrepl.core.gensym.call(null));
var recform__$1 = ((cljsrepl.core.keyword_QMARK_.call(null,k))?recform:cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/next"))),cljsrepl.core.list.call(null,seqsym)))))));
var steppair = step.call(null,recform__$1,cljsrepl.core.nnext.call(null,exprs));
var needrec = steppair.call(null,0);
var subform = steppair.call(null,1);
if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'let"))
{return cljsrepl.core.PersistentVector.fromArray([needrec,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,v),cljsrepl.core.list.call(null,subform)))], true);
} else
{if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'while"))
{return cljsrepl.core.PersistentVector.fromArray([false,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,v),cljsrepl.core.list.call(null,subform),(cljsrepl.core.truth_(needrec)?cljsrepl.core.PersistentVector.fromArray([recform__$1], true):null)))], true);
} else
{if(cljsrepl.core._EQ_.call(null,k,"\uFDD0'when"))
{return cljsrepl.core.PersistentVector.fromArray([false,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,v),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,subform),(cljsrepl.core.truth_(needrec)?cljsrepl.core.PersistentVector.fromArray([recform__$1], true):null)))),cljsrepl.core.list.call(null,recform__$1)))], true);
} else
{if("\uFDD0'else")
{return cljsrepl.core.PersistentVector.fromArray([true,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/loop"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,seqsym),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/seq"))),cljsrepl.core.list.call(null,v)))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,seqsym),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,k),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/first"))),cljsrepl.core.list.call(null,seqsym)))))))),cljsrepl.core.list.call(null,subform),(cljsrepl.core.truth_(needrec)?cljsrepl.core.PersistentVector.fromArray([recform__$1], true):null)))))))))], true);
} else
{return null;
}
}
}
}
}
});
return cljsrepl.core.nth.call(null,step.call(null,null,cljsrepl.core.seq.call(null,seq_exprs)),1);
};
var doseq = function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return doseq__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, seq_exprs, body);
};
doseq.cljs$lang$maxFixedArity = 3;
doseq.cljs$lang$applyTo = (function (arglist__4179){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4179);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4179));
var seq_exprs = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4179)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4179)));
return doseq__delegate(_AMPERSAND_form, _AMPERSAND_env, seq_exprs, body);
});
doseq.cljs$lang$arity$variadic = doseq__delegate;
return doseq;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"doseq")));
/**
* @param {...*} var_args
*/
cljsrepl.core.array = (function() { 
var array__delegate = function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljsrepl.core.apply.call(null,cljsrepl.core.str,cljsrepl.core.interpose.call(null,",",cljsrepl.core.take.call(null,cljsrepl.core.count.call(null,rest),cljsrepl.core.repeat.call(null,"~{}"))));
return cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*")),[cljsrepl.core.str("["),cljsrepl.core.str(xs_str),cljsrepl.core.str("]")].join('')),rest);
};
var array = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var rest = null;
if (replgoog.isDef(var_args)) {
  rest = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return array__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, rest);
};
array.cljs$lang$maxFixedArity = 2;
array.cljs$lang$applyTo = (function (arglist__4180){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4180);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4180));
var rest = cljsrepl.core.rest(cljsrepl.core.next(arglist__4180));
return array__delegate(_AMPERSAND_form, _AMPERSAND_env, rest);
});
array.cljs$lang$arity$variadic = array__delegate;
return array;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"array")));
cljsrepl.core.alength = (function alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*")),"~{}.length",a);
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"alength")));
cljsrepl.core.aclone = (function aclone(_AMPERSAND_form,_AMPERSAND_env,a){
return cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js*")),"~{}.slice()",a);
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"aclone")));
/**
* Maps an expression across an array a, using an index named idx, and
* return value named ret, initialized to a clone of a, then setting
* each element of ret to the evaluation of expr, returning the new
* array ret.
*/
cljsrepl.core.amap = (function amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"a__4181__auto__"))),cljsrepl.core.list.call(null,a),cljsrepl.core.list.call(null,ret),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aclone"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"a__4181__auto__")))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/loop"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,idx),cljsrepl.core.list.call(null,0))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/<"))),cljsrepl.core.list.call(null,idx),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/alength"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"a__4181__auto__"))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"do"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/aset"))),cljsrepl.core.list.call(null,ret),cljsrepl.core.list.call(null,idx),cljsrepl.core.list.call(null,expr)))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/inc"))),cljsrepl.core.list.call(null,idx)))))))))),cljsrepl.core.list.call(null,ret)))))))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"amap")));
/**
* Reduces an expression across an array a, using an index named idx,
* and return value named ret, initialized to init, setting ret to the
* evaluation of expr at each step, returning ret.
*/
cljsrepl.core.areduce = (function areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"a__4182__auto__"))),cljsrepl.core.list.call(null,a))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/loop"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,idx),cljsrepl.core.list.call(null,0),cljsrepl.core.list.call(null,ret),cljsrepl.core.list.call(null,init))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"if"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/<"))),cljsrepl.core.list.call(null,idx),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/alength"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"a__4182__auto__"))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/inc"))),cljsrepl.core.list.call(null,idx)))),cljsrepl.core.list.call(null,expr)))),cljsrepl.core.list.call(null,ret)))))))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"areduce")));
/**
* bindings => name n
* 
* Repeatedly executes body (presumably for side-effects) with name
* bound to integers from 0 through n-1.
* @param {...*} var_args
*/
cljsrepl.core.dotimes = (function() { 
var dotimes__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljsrepl.core.first.call(null,bindings);
var n = cljsrepl.core.second.call(null,bindings);
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"n__4183__auto__"))),cljsrepl.core.list.call(null,n))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/loop"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,i),cljsrepl.core.list.call(null,0))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/when"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/<"))),cljsrepl.core.list.call(null,i),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"n__4183__auto__")))))),body,cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"recur"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/inc"))),cljsrepl.core.list.call(null,i)))))))))))))));
};
var dotimes = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return dotimes__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
dotimes.cljs$lang$maxFixedArity = 3;
dotimes.cljs$lang$applyTo = (function (arglist__4185){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4185);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4185));
var bindings = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4185)));
var body = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4185)));
return dotimes__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
dotimes.cljs$lang$arity$variadic = dotimes__delegate;
return dotimes;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"dotimes")));
/**
* Throws an exception if the given option map contains keys not listed
* as valid, else returns nil.
* @param {...*} var_args
*/
cljsrepl.core.check_valid_options = (function() { 
var check_valid_options__delegate = function (options,valid_keys){
if(cljsrepl.core.seq.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.disj,cljsrepl.core.apply.call(null,cljsrepl.core.hash_set,cljsrepl.core.keys.call(null,options)),valid_keys)))
{throw cljsrepl.core.apply.call(null,cljsrepl.core.str,"Only these options are valid: ",cljsrepl.core.first.call(null,valid_keys),cljsrepl.core.map.call(null,(function (p1__4184_SHARP_){
return [cljsrepl.core.str(", "),cljsrepl.core.str(p1__4184_SHARP_)].join('');
}),cljsrepl.core.rest.call(null,valid_keys)));
} else
{return null;
}
};
var check_valid_options = function (options,var_args){
var valid_keys = null;
if (replgoog.isDef(var_args)) {
  valid_keys = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return check_valid_options__delegate.call(this, options, valid_keys);
};
check_valid_options.cljs$lang$maxFixedArity = 1;
check_valid_options.cljs$lang$applyTo = (function (arglist__4191){
var options = cljsrepl.core.first(arglist__4191);
var valid_keys = cljsrepl.core.rest(arglist__4191);
return check_valid_options__delegate(options, valid_keys);
});
check_valid_options.cljs$lang$arity$variadic = check_valid_options__delegate;
return check_valid_options;
})()
;
/**
* Creates a new multimethod with the associated dispatch function.
* The docstring and attribute-map are optional.
* 
* Options are key-value pairs and may be one of:
* :default    the default dispatch value, defaults to :default
* :hierarchy  the isa? hierarchy to use for dispatching
* defaults to the global hierarchy
* @param {...*} var_args
*/
cljsrepl.core.defmulti = (function() { 
var defmulti__delegate = function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,options)))?cljsrepl.core.first.call(null,options):null);
var options__$1 = ((cljsrepl.core.string_QMARK_.call(null,cljsrepl.core.first.call(null,options)))?cljsrepl.core.next.call(null,options):options);
var m = ((cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,options__$1)))?cljsrepl.core.first.call(null,options__$1):cljsrepl.core.ObjMap.EMPTY);
var options__$2 = ((cljsrepl.core.map_QMARK_.call(null,cljsrepl.core.first.call(null,options__$1)))?cljsrepl.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljsrepl.core.first.call(null,options__$2);
var options__$3 = cljsrepl.core.next.call(null,options__$2);
var m__$1 = (cljsrepl.core.truth_(docstring)?cljsrepl.core.assoc.call(null,m,"\uFDD0'doc",docstring):m);
var m__$2 = (cljsrepl.core.truth_(cljsrepl.core.meta.call(null,mm_name))?cljsrepl.core.conj.call(null,cljsrepl.core.meta.call(null,mm_name),m__$1):m__$1);
if(cljsrepl.core._EQ_.call(null,cljsrepl.core.count.call(null,options__$3),1))
{throw "The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)";
} else
{}
var options__$4 = cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,options__$3);
var default$ = cljsrepl.core._lookup.call(null,options__$4,"\uFDD0'default","\uFDD0'default");
cljsrepl.core.check_valid_options.call(null,options__$4,"\uFDD0'default","\uFDD0'hierarchy");
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"def"))),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,mm_name,m__$2)),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"method-table__4186__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/atom"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"prefer-table__4187__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/atom"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"method-cache__4188__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/atom"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cached-hierarchy__4189__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/atom"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.hash_map,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"hierarchy__4190__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/get"))),cljsrepl.core.list.call(null,options__$4),cljsrepl.core.list.call(null,"\uFDD0'hierarchy"),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/global-hierarchy")))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/MultiFn."))),cljsrepl.core.list.call(null,cljsrepl.core.name.call(null,mm_name)),cljsrepl.core.list.call(null,dispatch_fn),cljsrepl.core.list.call(null,default$),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"hierarchy__4190__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"method-table__4186__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"prefer-table__4187__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"method-cache__4188__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cached-hierarchy__4189__auto__")))))))))));
};
var defmulti = function (_AMPERSAND_form,_AMPERSAND_env,mm_name,var_args){
var options = null;
if (replgoog.isDef(var_args)) {
  options = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defmulti__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, mm_name, options);
};
defmulti.cljs$lang$maxFixedArity = 3;
defmulti.cljs$lang$applyTo = (function (arglist__4192){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4192);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4192));
var mm_name = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4192)));
var options = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(arglist__4192)));
return defmulti__delegate(_AMPERSAND_form, _AMPERSAND_env, mm_name, options);
});
defmulti.cljs$lang$arity$variadic = defmulti__delegate;
return defmulti;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defmulti")));
/**
* Creates and installs a new method of multimethod associated with dispatch-value.
* @param {...*} var_args
*/
cljsrepl.core.defmethod = (function() { 
var defmethod__delegate = function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-add-method"))),cljsrepl.core.list.call(null,cljsrepl.core.with_meta.call(null,multifn,cljsrepl.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":(new cljsrepl.core.Symbol(null,"cljsrepl.core/MultiFn"))}))),cljsrepl.core.list.call(null,dispatch_val),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),fn_tail)))));
};
var defmethod = function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,var_args){
var fn_tail = null;
if (replgoog.isDef(var_args)) {
  fn_tail = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return defmethod__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, multifn, dispatch_val, fn_tail);
};
defmethod.cljs$lang$maxFixedArity = 4;
defmethod.cljs$lang$applyTo = (function (arglist__4195){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4195);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4195));
var multifn = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(arglist__4195)));
var dispatch_val = cljsrepl.core.first(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4195))));
var fn_tail = cljsrepl.core.rest(cljsrepl.core.next(cljsrepl.core.next(cljsrepl.core.next(arglist__4195))));
return defmethod__delegate(_AMPERSAND_form, _AMPERSAND_env, multifn, dispatch_val, fn_tail);
});
defmethod.cljs$lang$arity$variadic = defmethod__delegate;
return defmethod;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"defmethod")));
/**
* Evaluates expr and prints the time it took. Returns the value of expr.
*/
cljsrepl.core.time = (function time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"start__4193__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".getTime"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js/Date."))))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"ret__4194__auto__"))),cljsrepl.core.list.call(null,expr))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/prn"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,"Elapsed time: "),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/-"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".getTime"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"js/Date."))))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"start__4193__auto__")))))),cljsrepl.core.list.call(null," msecs"))))))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"ret__4194__auto__")))));
});
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"time")));
/**
* Evaluates exprs in a context in which *print-fn* is bound to .append
* on a fresh StringBuffer.  Returns the string created by any nested
* printing calls.
* @param {...*} var_args
*/
cljsrepl.core.with_out_str = (function() { 
var with_out_str__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/let"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"sb__4196__auto__"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"replgoog.string/StringBuffer.")))))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/binding"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/*print-fn*"))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/fn"))),cljsrepl.core.list.call(null,cljsrepl.core.apply.call(null,cljsrepl.core.vector,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"x__4197__auto__"))))))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,".append"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"sb__4196__auto__"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"x__4197__auto__"))))))))))))),body))),cljsrepl.core.list.call(null,cljsrepl.core.seq.call(null,cljsrepl.core.concat.call(null,cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"cljsrepl.core/str"))),cljsrepl.core.list.call(null,(new cljsrepl.core.Symbol(null,"sb__4196__auto__"))))))));
};
var with_out_str = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return with_out_str__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
with_out_str.cljs$lang$maxFixedArity = 2;
with_out_str.cljs$lang$applyTo = (function (arglist__4198){
var _AMPERSAND_form = cljsrepl.core.first(arglist__4198);
var _AMPERSAND_env = cljsrepl.core.first(cljsrepl.core.next(arglist__4198));
var body = cljsrepl.core.rest(cljsrepl.core.next(arglist__4198));
return with_out_str__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
with_out_str.cljs$lang$arity$variadic = with_out_str__delegate;
return with_out_str;
})()
;
cljsrepl.core.setMacro.call(null,(new cljsrepl.core.Symbol(null,"with-out-str")));

// Analyzer namespace snapshot:
cljsrepl.core.swap_BANG_.call(null,cljsrepl.core.namespaces,cljsrepl.core.update_in,cljsrepl.core.PersistentVector.fromArray([(new cljsrepl.core.Symbol(null,"cljsrepl.core"))], true),(function (old){
return cljsrepl.core.deep_merge_with.call(null,(function() { 
var G__4199__delegate = function (m){
return cljsrepl.core.first.call(null,m);
};
var G__4199 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = cljsrepl.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4199__delegate.call(this, m);
};
G__4199.cljs$lang$maxFixedArity = 0;
G__4199.cljs$lang$applyTo = (function (arglist__4200){
var m = cljsrepl.core.seq(arglist__4200);;
return G__4199__delegate(m);
});
G__4199.cljs$lang$arity$variadic = G__4199__delegate;
return G__4199;
})()
}));