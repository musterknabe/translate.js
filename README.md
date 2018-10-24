translate.js (v1.1.0)
=====================

Javascript micro library for translations (i18n) with support for placeholders and multiple plural forms.

Size: ~800 bytes minified and gziped.

:black_joker: *If you need more features (translations within translations, custom pluralize functions, npm support, etc.) check out [this fork] (https://github.com/StephanHoyer/translate.js).*

Usage:
------

```JavaScript
var messages = {
  translationKey: 'translationValue'
}

var options = {
    // These are the defaults:
    debug: false, //[Boolean]: Logs missing translations to console and adds @@-markers around output.
    namespaceSplitter: '::' //[String|RegExp]: You can customize the part which splits namespace and translationKeys.
}

var t = libTranslate.getTranslationFunction(messages, [options])

t('translationKey')
t('translationKey', count)
t('translationKey', {replaceKey: 'replacevalue'})
t('translationKey', count, {replaceKey: 'replacevalue'})
t('translationKey', {replaceKey: 'replacevalue'}, count)
t('moduleA::translationKey')

```

Example:
--------

First create a language specific object for your translations:

```JavaScript
var messages = {
    like: 'I like this.',
    likeThing: 'I like {thing}!',
    simpleCounter: 'The count is {n}.', //{n} is automatically replace with count
    hits: {
        0: 'No Hits',
        1: '{n} Hit',
        2: '{n} Hitse',  //some slavic languages have multiple plural forms
        3: '{n} Hitses', //some slavic languages have multiple plural forms
        n: '{n} Hits', //use 'n' as key to match everything not matched more explicitly
        gt99: '99+ Hits' //greater than support (gtX where X is an integer)
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

    'Prose Key': 'This is prose!',  

    namespaceA: {
        like: 'I like this namespace.',
    }
}
```

Then bind the translation function to something short:
```JavaScript
var t = libTranslate.getTranslationFunction(messages)
```

And use it like this:
```JavaScript
//simple
t('like') => 'I like this.'
t('Prose Key') => 'This is prose!'

//namespace support
t('namespaceA::like') => 'I like this namespace.'

//placeholders
t('likeThing', {thing: 'the Sun'}) => 'I like the Sun!'

//count
t('simpleCounter', 25) => 'The count is 25'
t('hits', 0) => 'No Hits'
t('hits', 1) => '1 Hit'
t('hits', 3) => '3 Hitses'
t('hits', 99) => '99 Hits'
t('hits', 100) => '99+ Hits'

//combined count and placeholders
t('date', 2, {day: '13', year: 2014}) => '13. February 2014'

```
