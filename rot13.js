module.exports = function rot13(input) {
	if (input === "") {
		return ""
	}
	const charCode = input.charCodeAt(0)

	if (charCode >= "a".charCodeAt(0) && charCode <= "m".charCodeAt(0)) {
		return String.fromCharCode(charCode + 13)
	} else if (charCode >= "n".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
		return String.fromCharCode(charCode - 13)
	}
}
