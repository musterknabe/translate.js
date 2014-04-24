translate.js (v0.0.1)
=====================

Javascript micro library for translations (i18n) with support for placeholders and multiple plural forms.


Usage:
------

```
var yourTranslationsObject = {
  translationKey: 'translationValue'
}

var t = tinyTranslate.getTranslationFunction(yourTranslationsObject, debugModeBoolean)

t('translationKey')
t('translationKey', 2)
t('translationKey', {replaceKey: 'replacevalue'})
t('translationKey', 2, {replaceKey: 'replacevalue'})
t('moduleA.translationKey')
```

Example:
--------

```
var yourTranslationsObject = {
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

//simple
t('like') => 'I like this.'
t('Prosa Key') => 'This is prosa!'

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

//namespace support
t('namespaceA:like') => 'I like this namespace.'
```
