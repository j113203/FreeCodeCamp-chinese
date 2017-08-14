(new TextDecoder("utf-8").decode(new Zlib.Gunzip("".split("").map(function(e) {
    return 255 & e.charCodeAt(0)
})).decompress()));