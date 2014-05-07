translate.js (v0.0.2)
=====================

Javascript micro library for translations (i18n) with support for placeholders and multiple plural forms.

Size: ~800 bytes minified and gziped.

Usage:
------

```JavaScript
var messages = {
  translationKey: 'translationValue'
}

var options = {
    debug: true, //[Boolean]: Logs missing translations to console. Defaults to false.
    namespaceSplitter: '.' //[String|RegExp]: You can customize the part which splits namespace and translationKeys. Defaults to '::'.
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
t('Prosa Key') => 'This is prosa!'

//namespace support
t('namespaceA::like') => 'I like this namespace.'

//palceholders
t('likeThing', {thing: 'the Sun'}) => 'I like the Sun!'

//count
t('simpleCounter', 25) => 'The count is 25'
t('hits', 0) => 'No Hits'
t('hits', 1) => '1 Hit'
t('hits', 3) => '3 Hitses'
t('hits', 99) => '99 Hits'

//combined count and placeholders
t('date', 2, {day: '13', year: 2014}) => '13. February 2014'

```