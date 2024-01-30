const rot13 = require('./rot13')

test('rot13 produces empty string given empty string', function() {
	expect(rot13("")).toBe("")
})
