function getUrlVars() {
    var vars = new Object();
    var hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //var hashes = window.search.substring(1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = unescape(hash[1]);
    }
    return vars;
}
function getUrlVar(name) {
    var vals = getUrlVars()[name];
    if (vals)
        return vals;
    return "";
}