describe("translate.js", function() {
	var translationsObject = {
        plain: 'I like this.',
        like: 'I like {thing}!',
        simpleCounter: 'The count is {n}.',
        hits: {
            0: 'No Hits',
            1: '{n} Hit',
            2: '{n} Hitse',  //some slavic langs have multiple plural forms
            3: '{n} Hitses', //some slavic langs have multiple plural forms
            n: '{n} Hits'
        },
        date: {
            1: '{day}. January {year}',
            2: '{day}. February {year}',
            3: '{day}. March {year}',
            4: '{day}. April {year}',
            5: '{day}. May {year}',
            6: '{day}. June {year}',
            7: '{day}. July {year}',
            8: '{day}. August {year}',
            9: '{day}. September {year}',
            10: '{day}. October {year}',
            11: '{day}. November {year}',
            12: '{day}. December {year}'
        },

        'Prosa Key': 'This is prosa!',

	    namespaceA: {
	        plain: 'I like this.',
	        like: 'I like {thing}!',
	        simpleCounter: 'The count is {n}.',
	        hits: {
	            0: 'No Hits',
	            1: '{n} Hit',
	            2: '{n} Hitse',  //some slavic langs have multiple plural forms
	            3: '{n} Hitses', //some slavic langs have multiple plural forms
	            n: '{n} Hits'
	        },
	        date: {
	            1: '{day}. January {year}',
	            2: '{day}. February {year}',
	            3: '{day}. March {year}',
	            4: '{day}. April {year}',
	            5: '{day}. May {year}',
	            6: '{day}. June {year}',
	            7: '{day}. July {year}',
	            8: '{day}. August {year}',
	            9: '{day}. September {year}',
	            10: '{day}. October {year}',
	            11: '{day}. November {year}',
	            12: '{day}. December {year}'
	        },

	        'Prosa Key': 'This is prosa!'
	    }
	}

	var t = tinyTranslate.getTranslationFunction(translationsObject);

	it("should return @@translationKey@@ if no translation is found", function() {
		expect(t('nonexistentkey')).toEqual('@@nonexistentkey@@');
	});

	it("should return a translated string", function() {
		expect(t('plain')).toEqual('I like this.');
	});

	it("should return a translated string for prosa keys", function() {
		expect(t('Prosa Key')).toEqual('This is prosa!');
	});

	it("should return a translated string and replace a placeholder ", function() {
		expect(t('like', {thing: 'Sun'})).toEqual('I like Sun!');
	});

	it("should return a translated string and show missing placeholders", function() {
		expect(t('like')).toEqual('I like {thing}!');
	});

	it("should return a translated string and replace a count", function() {
		expect(t('simpleCounter', 25)).toEqual('The count is 25.');
	});

	it("should return a translated string with the correct plural form (0)", function() {
		expect(t('hits', 0)).toEqual('No Hits');
	});

	it("should return a translated string with the correct plural form (1)", function() {
		expect(t('hits', 1)).toEqual('1 Hit');
	});

	it("should return a translated string with the correct plural form (2)", function() {
		expect(t('hits', 2)).toEqual('2 Hitse');
	});

	it("should return a translated string with the correct plural form (3)", function() {
		expect(t('hits', 3)).toEqual('3 Hitses');
	});

	it("should return a translated string with the correct plural form (4)", function() {
		expect(t('hits', 4)).toEqual('4 Hits');
	});

	it("should return a translated string with the correct plural form and replaced placeholders: t(key, replacements, count)", function() {
		expect(t('date', {day: '13', year: 2014}, 2)).toEqual('13. February 2014');
	});

	it("should return a translated string with the correct plural form and replaced placeholders: t(key, count, replacements)", function() {
		expect(t('date', 2, {day: '13', year: 2014})).toEqual('13. February 2014');
	});


	//every thing with namespace support
	it("should return @@translationKey@@ if no translation is found [namespace support]", function() {
		expect(t('namespaceA::nonexistentkey')).toEqual('@@namespaceA::nonexistentkey@@');
	});

	it("should return a translated string [namespace support]", function() {
		expect(t('namespaceA::plain')).toEqual('I like this.');
	});

	it("should return a translated string for prosa keys  [namespace support]", function() {
		expect(t('namespaceA::Prosa Key')).toEqual('This is prosa!');
	});

	it("should return a translated string and replace a placeholder  [namespace support]", function() {
		expect(t('namespaceA::like', {thing: 'Sun'})).toEqual('I like Sun!');
	});

	it("should return a translated string and show missing placeholders [namespace support]", function() {
		expect(t('namespaceA::like')).toEqual('I like {thing}!');
	});

	it("should return a translated string and replace a count [namespace support]", function() {
		expect(t('namespaceA::simpleCounter', 25)).toEqual('The count is 25.');
	});

	it("should return a translated string with the correct plural form (0) [namespace support]", function() {
		expect(t('namespaceA::hits', 0)).toEqual('No Hits');
	});

	it("should return a translated string with the correct plural form (1) [namespace support]", function() {
		expect(t('namespaceA::hits', 1)).toEqual('1 Hit');
	});

	it("should return a translated string with the correct plural form (2) [namespace support]", function() {
		expect(t('namespaceA::hits', 2)).toEqual('2 Hitse');
	});

	it("should return a translated string with the correct plural form (3) [namespace support]", function() {
		expect(t('namespaceA::hits', 3)).toEqual('3 Hitses');
	});

	it("should return a translated string with the correct plural form (4) [namespace support]", function() {
		expect(t('namespaceA::hits', 4)).toEqual('4 Hits');
	});

	it("should return a translated string with the correct plural form and replaced placeholders: t(key, replacements, count) [namespace support]", function() {
		expect(t('namespaceA::date', {day: '13', year: 2014}, 2)).toEqual('13. February 2014');
	});

	it("should return a translated string with the correct plural form and replaced placeholders: t(key, count, replacements) [namespace support]", function() {
		expect(t('namespaceA::date', 2, {day: '13', year: 2014})).toEqual('13. February 2014');
	});

	// it("should return ", function() {
	// 	expect(t()).toEqual();
	// });
});