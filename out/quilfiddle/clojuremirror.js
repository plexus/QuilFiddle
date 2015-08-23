// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('quilfiddle.clojuremirror');
goog.require('cljs.core');
quilfiddle.clojuremirror.cursor = (function quilfiddle$clojuremirror$cursor(cm){
return cm.getCursor();
});
quilfiddle.clojuremirror.token_at = (function quilfiddle$clojuremirror$token_at(cm,pos){
return cm.getTokenAt(pos);
});
quilfiddle.clojuremirror.current_indent_stack = (function quilfiddle$clojuremirror$current_indent_stack(cm){
return quilfiddle.clojuremirror.token_at(cm,cm,quilfiddle.clojuremirror.cursor(cm)).state.indentStack;
});
quilfiddle.clojuremirror.set_selection_BANG_ = (function quilfiddle$clojuremirror$set_selection_BANG_(cm,start,end){
return cm.setSelection(start,end);
});
quilfiddle.clojuremirror.selection = (function quilfiddle$clojuremirror$selection(cm){
return cm.getSelection();
});

//# sourceMappingURL=clojuremirror.js.map