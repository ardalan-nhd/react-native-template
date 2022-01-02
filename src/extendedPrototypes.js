// We extend main JS prototypes here.
// This file should be imported at top level of app

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + (replacement.length > 0 ? replacement.length : 1));
}

Number.prototype.withCommas = function () {
    const splitArray = this.toString().split('.')
    if (splitArray.length === 1) return parseFloat(splitArray[0]).toLocaleString();
    return parseFloat(splitArray[0]).toLocaleString() + '.' + splitArray[1]
}

String.prototype.withCommas = function () {
    const splitArray = this.split('.')
    if (splitArray.length === 1) return parseFloat(splitArray[0]).toLocaleString();
    return parseFloat(splitArray[0]).toLocaleString() + '.' + splitArray[1]
}