(ns quilfiddle.clojuremirror
  "Clojurescript wrapper for CodeMirror"
  )

(defn cursor [cm]
  (.getCursor cm))

(defn token-at [cm pos]
  (.getTokenAt cm pos))

(defn current-indent-stack [cm]
  (-> cm (token-at cm (cursor cm)) .-state .-indentStack))

(defn set-selection! [cm start end]
  (.setSelection cm start end))

(defn selection [cm]
  (.getSelection cm))

