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

test('rot13 produce N given A', function() {
	expect(rot13("A")).toBe("N")
})

test('rot13 produce A given N', function() {
	expect(rot13("N")).toBe("A")
})

test('rot13 produce 0 given 0', function() {
	expect(rot13("0")).toBe("0")
})

test('rot13 produce ` given `', function() {
	expect(rot13("`")).toBe("`")
})

test('rot13 produce { given {', function() {
	expect(rot13("{")).toBe("{")
})

test('rot13 produce @ given @', function() {
	expect(rot13("@")).toBe("@")
})

test('rot13 produce [ given [', function() {
	expect(rot13("[")).toBe("[")
})

test('rot13 produce rotated lowercase alphabet given lowercase alphabet', function() {
	expect(rot13("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm")
})

test('rot13 produce rotated uppercase alphabet given uppercase alphabet', function() {
	expect(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("NOPQRSTUVWXYZABCDEFGHIJKLM")
})

test('rot13 throws an appropriate error given a non-string input', function() {
	expect(function() {
		rot13(15)
	}).toThrow("Expected string parameter")
})

test('rot13 does not encrypt non-english unicode characters', function() {
	expect(rot13("ñåéîøüç")).toBe("ñåéîøüç")
})
