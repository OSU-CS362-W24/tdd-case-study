const rot13 = require('./rot13')

test('rot13 produces empty string given empty string', function() {
	expect(rot13("")).toBe("")
})

test('rot13 produce n given a', function() {
	expect(rot13("a")).toBe("n")
})

test('rot13 produce a given n', function() {
	expect(rot13("n")).toBe("a")
})
