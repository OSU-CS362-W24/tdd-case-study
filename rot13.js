module.exports = function rot13(input) {
	if (input === "") {
		return ""
	}
	const charCode = input.charCodeAt(0)

	if (isBetween(charCode, "a", "m") || isBetween(charCode, "A", "M")) {
		return String.fromCharCode(charCode + 13)
	} else if (isBetween(charCode, "n", "z")) {
		return String.fromCharCode(charCode - 13)
	}
}

function charCodeFor(letter) {
	return letter.charCodeAt(0)
}

function isBetween(charCode, firstLetter, lastLetter) {
	return charCode >= charCodeFor(firstLetter) && charCode <= charCodeFor(lastLetter)
}
