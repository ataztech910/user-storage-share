// @ts-ignore
function lzw_encode(s) {
    var dict = {};
    var data = (s + '').split('');
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        // @ts-ignore
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            // @ts-ignore
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            // @ts-ignore
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    // @ts-ignore
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join('');
}

// Decompress an LZW-encoded string
// @ts-ignore
function lzw_decode(s) {
    var dict = {};
    var data = (s + '').split('');
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
            // @ts-ignore
            phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        // @ts-ignore
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join('');
}

// @ts-ignore
const stringifyJSON = function (obj) {
    var objKeys = Object.keys(obj);
    var keyValueArray = new Array();
    for (var i = 0; i < objKeys.length; i++) {
        var keyValueString = '"' + objKeys[i] + '":';
        var objValue = obj[objKeys[i]];
        keyValueString = (typeof objValue == "string") ? 
            keyValueString = keyValueString + '"' + objValue + '"' : 
            keyValueString = keyValueString + stringifyJSON(objValue);
        keyValueArray.push(keyValueString);
    }
    return "{" + keyValueArray.join(",") + "}";
}

export { lzw_decode, lzw_encode, stringifyJSON }