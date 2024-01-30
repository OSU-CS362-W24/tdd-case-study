module.exports = function rot13(input) {
	if (input === "") {
		return ""
	}
	const charCode = input.charCodeAt(0)
	return String.fromCharCode(charCode + 13)
}
