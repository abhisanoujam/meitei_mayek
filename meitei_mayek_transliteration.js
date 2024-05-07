/**
 * Copyright: All rights reserved by Abhi Sanoujam.
 * 
 * A simple rule based transliterator for Manipuri language (aka Meiteilon, Meiteilol, Meiteiron, Meiteirol) to convert manipuri
 * written in english letters to unicode Meitei Mayek.
 */

const MEITEI_MAYEK_PHONEMES = [
    { "phoneme": "a", "isVowel": true, "asVowel": "\uABE5", "asConsonant": "ꯑ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "aa", "isVowel": true, "asVowel": "\uABE5", "asConsonant": "ꯑ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "b", "isVowel": false, "asVowel": "", "asConsonant": "ꯕ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "bh", "isVowel": false, "asVowel": "", "asConsonant": "ꯚ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "c", "isVowel": false, "asVowel": "", "asConsonant": "ꯆ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "ch", "isVowel": false, "asVowel": "", "asConsonant": "ꯆ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "d", "isVowel": false, "asVowel": "", "asConsonant": "ꯗ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "dh", "isVowel": false, "asVowel": "", "asConsonant": "ꯙ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "e", "isVowel": true, "asVowel": "\uABE6", "asConsonant": "ꯑ\uABE6", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "ee", "isVowel": true, "asVowel": "\uABE4", "asConsonant": "ꯏ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "ei", "isVowel": true, "asVowel": "\uABE9", "asConsonant": "ꯑ\uABE9", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "f", "isVowel": false, "asVowel": "", "asConsonant": "ꯐ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "g", "isVowel": false, "asVowel": "", "asConsonant": "ꯒ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "gh", "isVowel": false, "asVowel": "", "asConsonant": "ꯘ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "h", "isVowel": false, "asVowel": "", "asConsonant": "ꯍ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "i", "isVowel": true, "asVowel": "\uABE4", "asConsonant": "ꯏ", "canBeLonsum": true, "asLonsum": "ꯢ" },
    { "phoneme": "j", "isVowel": false, "asVowel": "", "asConsonant": "ꯖ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "jh", "isVowel": false, "asVowel": "", "asConsonant": "ꯓ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "k", "isVowel": false, "asVowel": "", "asConsonant": "ꯀ", "canBeLonsum": true, "asLonsum": "ꯛ" },
    { "phoneme": "kh", "isVowel": false, "asVowel": "", "asConsonant": "ꯈ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "l", "isVowel": false, "asVowel": "", "asConsonant": "ꯂ", "canBeLonsum": true, "asLonsum": "ꯜ" },
    { "phoneme": "m", "isVowel": false, "asVowel": "", "asConsonant": "ꯃ", "canBeLonsum": true, "asLonsum": "ꯝ" },
    { "phoneme": "n", "isVowel": false, "asVowel": "", "asConsonant": "ꯅ", "canBeLonsum": true, "asLonsum": "ꯟ" },
    { "phoneme": "ng", "isVowel": false, "asVowel": "\uABEA", "asConsonant": "ꯉ", "canBeLonsum": true, "asLonsum": "ꯡ" },
    { "phoneme": "o", "isVowel": true, "asVowel": "\uABE3", "asConsonant": "ꯑ\uABE3", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "oo", "isVowel": true, "asVowel": "\uABE8", "asConsonant": "ꯎ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "ou", "isVowel": true, "asVowel": "\uABE7", "asConsonant": "ꯑ\uABE7", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "p", "isVowel": false, "asVowel": "", "asConsonant": "ꯄ", "canBeLonsum": true, "asLonsum": "ꯞ" },
    { "phoneme": "ph", "isVowel": false, "asVowel": "", "asConsonant": "ꯐ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "r", "isVowel": false, "asVowel": "", "asConsonant": "ꯔ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "s", "isVowel": false, "asVowel": "", "asConsonant": "ꯁ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "t", "isVowel": false, "asVowel": "", "asConsonant": "ꯇ", "canBeLonsum": true, "asLonsum": "ꯠ" },
    { "phoneme": "th", "isVowel": false, "asVowel": "", "asConsonant": "ꯊ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "u", "isVowel": true, "asVowel": "\uABE8", "asConsonant": "ꯎ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "w", "isVowel": false, "asVowel": "", "asConsonant": "ꯋ", "canBeLonsum": false, "asLonsum": "" },
    { "phoneme": "y", "isVowel": false, "asVowel": "", "asConsonant": "ꯌ", "canBeLonsum": false, "asLonsum": "" },
    // add phoneme for 'cheikhei'/full-stop
    { "phoneme": ".", "isVowel": false, "asVowel": "", "asConsonant": "\uABEB", "canBeLonsum": false, "asLonsum": "" },
    // add phonemes for missing english letters Q and X
    // Q = kok + apun_mayek + wai (kw sound)
    { "phoneme": "q", "isVowel": false, "asVowel": "", "asConsonant": "ꯀ\uABEDꯋ", "canBeLonsum": false, "asLonsum": "" },
    // X = kok + apun_mayek + sam (ks sound)
    { "phoneme": "x", "isVowel": false, "asVowel": "", "asConsonant": "ꯀ\uABEDꯁ", "canBeLonsum": false, "asLonsum": "" },
];

const MEITEI_MAYEK_NUMBERS = {
    '꯰': '0',
    '꯱': '1',
    '꯲': '2',
    '꯳': '3',
    '꯴': '4',
    '꯵': '5',
    '꯶': '6',
    '꯷': '7',
    '꯸': '8',
    '꯹': '9'
};

/**
 * In linguistics, a phoneme is the smallest unit of sound in a language that can distinguish one word from another.
 * A grapheme is the smallest functional unit of a writing system. It's a written symbol or a group of symbols that represents 
 * a sound in a language.
 * 
 * The class below actually represents a Grapheme, but I like Phoneme more :)
 */
class Phoneme {

    constructor(phoneme, isVowel = false, asVowel = '', asConsonant = '', canBeLonsum = false, asLonsum = '', isNumeric = false) {
        this.phoneme = phoneme;
        this.isVowel = isVowel;
        this.asVowel = asVowel;
        this.asConsonant = asConsonant;
        this.canBeLonsum = canBeLonsum;
        this.asLonsum = asLonsum;
        this.isNumeric = isNumeric;

        this.isUnknown = false;
        if (phoneme.length <= 0) {
            this.isUnknown = true;
        } else {
            const next = phoneme[0];
            if (!((next >= 'a' && next <= 'z') || (next >= '0' && next <= '9'))) {
                // any non alpha-numeric phoneme is unknown to us.
                this.isUnknown = true;
            }
        }
    }

}

/**
 * Utility for greedily mapping english letters to meitei mayek phonemes and numbers.
 */
class Mapper {

    constructor() {
        this.phonemes = new Map();
        for (let i = 0; i < MEITEI_MAYEK_PHONEMES.length; i++) {
            // initialize all known phonemes
            const phoneme = MEITEI_MAYEK_PHONEMES[i];
            this.phonemes.set(phoneme.phoneme, new Phoneme(
                phoneme.phoneme,
                phoneme.isVowel,
                phoneme.asVowel,
                phoneme.asConsonant,
                phoneme.canBeLonsum,
                phoneme.asLonsum
            ));
        }
        for (const [key, value] of Object.entries(MEITEI_MAYEK_NUMBERS)) {
            // initialize numbers as phonemes
            this.phonemes.set(value, new Phoneme(value, false, '', key, false, '', true));
        }
    }

    mapToPhonemeOrNull(curr, next = '') {
        if (this.phonemes.has(curr + next)) {
            return this.phonemes.get(curr + next);
        }
        return null;
    }
}




const MAPPER = new Mapper();
const PHI = new Phoneme('');

/**
 * Represents consonant-vowel-consonant state of the word.
 */
const CVCState = {
    NONE: 0,
    CONSONANT: 1,
    VOWEL: 2,
};

/**
 * Output mode of the phoneme.
 */
const OutputMode = {
    VOWEL: 0,
    CONSONANT: 1,
    LONSUM: 2,
};

/**
 * Stores the phoneme and the output mode to use for it.
 */
class PhonemeOutput {
    constructor(phoneme, outputMode) {
        this.phoneme = phoneme;
        this.outputMode = outputMode;
    }

    getOutput() {
        switch (this.outputMode) {
            case OutputMode.VOWEL: return this.phoneme.asVowel;
            case OutputMode.CONSONANT: return this.phoneme.asConsonant;
            case OutputMode.LONSUM: return this.phoneme.asLonsum;
        }
        // default to use as consonant. Should never reach here.
        return phoneme.asConsonant;
    }
}

/**
 * Transliterator for Meitei Mayek.
 */
class MeiteiMayekTransliterator {

    /**
     * 
     * @param text The input text using english/latin letters (most likely written in manipuri).
     * @returns Transliterated text in unicode Meitei Mayek according to the pronunciation of the word based on rules for Manipuri language.
     */
    transliterate(text) {
        let prev = PHI;
        let phonemes = [];
        text = text || '';
        // case is ignored in meitei mayek
        text = text.toLowerCase();
        // first get all phonemes from the input text
        for (let i = 0; i < text.length; i++) {
            const next = text[i];
            if (!((next >= 'a' && next <= 'z') || (next >= '0' && next <= '9') || next == '.')) {
                const nextPhoneme = new Phoneme(next, false, '', next);
                // pass through all non-alpha-numeric as-is
                phonemes.push(nextPhoneme);
                prev = nextPhoneme;
                continue;
            }
            // try to match greedily digraph phonemes (two letters)
            const digraphPhoneme = MAPPER.mapToPhonemeOrNull(prev.phoneme, next);
            if (digraphPhoneme === null) {
                // no match, use phoneme for current letter
                const nextPhoneme = MAPPER.mapToPhonemeOrNull(next);
                phonemes.push(nextPhoneme);
                prev = nextPhoneme;
            } else {
                // use the greedily matched digraph instead of single letter phoneme from previous
                phonemes.pop();
                phonemes.push(digraphPhoneme);
                prev = digraphPhoneme;
            }
        }
        // then convert the phonemes to meitei mayek based on CVC rules for Manipuri language.
        return this._convertToMMCVC(phonemes);
    }

    _convertToMMCVC(phonemes) {
        const output = [];

        // start from blank
        let state = CVCState.NONE;
        let prev = new PhonemeOutput(PHI, OutputMode.CONSONANT);
        for (let i = 0; i < phonemes.length; i++) {
            const curr = phonemes[i];
            if (curr.isUnknown) {
                // for unknown phonemes, output as-is and continue. Reset state to NONE
                output.push(new PhonemeOutput(curr, OutputMode.CONSONANT));
                state = CVCState.NONE;
                continue;
            }
            if (state === CVCState.NONE) {
                // always start syllable as a consonant
                const nextOutput = new PhonemeOutput(curr, OutputMode.CONSONANT);
                output.push(nextOutput);

                // if current phoneme is numeric, keep state as NONE. Change state to vowel if starts with vowel (so that next letter can be C)
                state = curr.isNumeric ? CVCState.NONE : curr.isVowel ? CVCState.VOWEL : CVCState.CONSONANT;
                prev = nextOutput;
            } else if (state === CVCState.CONSONANT) {
                // previous was a consonant
                if (curr.isVowel) {
                    // CV...
                    const next = new PhonemeOutput(curr, OutputMode.VOWEL);
                    output.push(next);

                    state = CVCState.VOWEL;
                    // if previous was used as lonsum, start a new syllable by flipping previous consonant as current is vowel
                    if (prev.outputMode == OutputMode.LONSUM) {
                        prev.outputMode = OutputMode.CONSONANT;
                    }
                    prev = next;
                } else {
                    // CC...
                    // special handling for 'nung' consonant that can be used as vowel
                    if (curr.phoneme === 'ng') {
                        // is this the correct usage? To always prefer 'nung' instead of 'ngou lonsum' (if not preceded by another vowel).
                        const next = new PhonemeOutput(curr, OutputMode.VOWEL);
                        output.push(next);

                        state = CVCState.VOWEL;
                        prev = next;
                    } else {
                        // use as lonsum greedily if possible. But no consecutive lonsums
                        const next = new PhonemeOutput(curr,
                            curr.canBeLonsum ?
                                prev.outputMode != OutputMode.LONSUM ? OutputMode.LONSUM : OutputMode.CONSONANT
                                : OutputMode.CONSONANT
                        );
                        output.push(next);

                        state = CVCState.CONSONANT;
                        prev = next;
                    }
                }
            } else {
                // previous was a VOWEL
                // VV... or VC...
                if (curr.isVowel) {
                    // VV...
                    // flip current vowel to use as a consonant as it's preceeded by a vowel (VV), e.g ai, ou, au etc
                    const next = new PhonemeOutput(curr, OutputMode.CONSONANT);
                    output.push(next);
                    state = CVCState.CONSONANT;
                    prev = next;
                } else {
                    // VC...
                    // use as lonsum greedily if possible
                    const next = new PhonemeOutput(curr, curr.canBeLonsum ? OutputMode.LONSUM : OutputMode.CONSONANT);
                    output.push(next);
                    state = CVCState.CONSONANT;
                    prev = next;
                }
            }
        }
        const text = [];
        output.forEach((next) => {
            text.push(next.getOutput());
        });
        return text.join('');
    };
};



/** UNCOMMENT below to run the test locally using node js */
/** Install node js, and run `node meitei_mayek_transliteration.js` */
/*
function test() {
    const engine = new MeiteiMayekTransliterator();
    const tests = {
        'angangba machuse 1adum phjei': 'ꯑꯉꯥꯡꯕꯥ ꯃꯥꯆꯨꯁꯦ ꯱ꯑꯗꯨꯝ ꯐꯖꯩ',
        'aingbi': 'ꯑꯏꯪꯕꯤ',
        'eikhoigi': 'ꯑꯩꯈꯣꯏꯒꯤ',
        'khwaidagi': 'ꯈꯋꯥꯏꯗꯥꯒꯤ',
        'adubu': 'ꯑꯗꯨꯕꯨ',
        'akhangba': 'ꯑꯈꯥꯡꯕꯥ',
        'chao': 'ꯆꯥꯑꯣ',
        'chaoo': 'ꯆꯥꯎ',
        'chau': 'ꯆꯥꯎ',
        'chou': 'ꯆꯧ',
        'jou': 'ꯖꯧ',
        'jao': 'ꯖꯥꯑꯣ',
        'npsnb': 'ꯅꯞꯁꯟꯕ',
        'npira': 'ꯅꯄꯤꯔꯥ',
        'queen': 'ꯀ꯭ꯋꯨꯏꯟ',
        'xmas tree': 'ꯀ꯭ꯁꯃꯥꯁ ꯇꯔꯤ',
        'apex': 'ꯑꯄꯦꯀ꯭ꯁ',
        'kung': 'ꯀꯨꯡ',
        'kangi': 'ꯀꯥꯉꯤ',
        'kanggi': 'ꯀꯥꯡꯒꯤ',
        'kang gi': 'ꯀꯥꯡ ꯒꯤ',
        'kang': 'ꯀꯥꯡ',
        'nng': 'ꯅꯪ',
        'kng': 'ꯀꯪ',
        'kng gi': 'ꯀꯪ ꯒꯤ',
        '3218765425975': '꯳꯲꯱꯸꯷꯶꯵꯴꯲꯵꯹꯷꯵',
        'se ei': 'ꯁꯦ ꯑꯩ',
        'chatlge .': 'ꯆꯥꯠꯂꯒꯦ ꯫'
    };
    let passedCount = 0;
    let failedCount = 0;
    for (const [input, expectedOutput] of Object.entries(tests)) {
        const output = engine.transliterate(input);
        const pass = output === expectedOutput;
        if (pass) {
            passedCount++;
        } else {
            failedCount++;
        }
        console.log(input + ': ' + output + ' => ' + (pass ? 'PASSED' : 'FAILED'));
    }
    console.log('\n');
    console.log(' ----------- Tests results [ ' + (failedCount > 0 ? 'FAILURE' : 'SUCCESS') + ' ] ----------- ')
    console.log('    Total: ' + (passedCount + failedCount) + ', Passed: ' + passedCount + ', Failed: ' + failedCount);
    console.log(' ------------------------------------------------ ')
    console.log('\n');

}

test();
*/

