import { WORDS } from './constants/words.js';
import { SENTENCES } from './constants/sentences.js';

// seems like a good number
const NUM_SENTENCES_IN_PARAGRAPH = 8;

/**
 * Generate a random number between 0 and limit
 * @param  {Int} limit The upper limit of the random number
 * @return {Int}       A psuedo-random number
 */
const getRandom = limit => Math.floor(Math.random() * limit);

/**
 * Capitalize the first character of a string
 * @param  {String} sentence A string
 * @return {String}          The same string but with the first character capitalized
 */
const capitalize = sentence => sentence[0].toUpperCase() + sentence.slice(1);

/**
 * Select a random item from an array
 * @param  {Array}  items All items
 * @return {mixed}        One item, selected randomly
 */
const selectRandom = items => {
  const index = getRandom(items.length);
  return items[index];
}

/**
 * Generate a sentence of random words based on the supplied template
 * @param  {Array}  template A template of sentence parts
 * @return {String}          A generated sentence
 */
export const generateSentence = template => {
    const sentence = template.map( type => WORDS[type] ? ` ${selectRandom(WORDS[type])}` : type ).join('').trim();
    return capitalize(sentence);
}

/**
 * Generate a paragraph of random sentence templates
 * @param  {Int}    quantity The number of sentences in the paragraph
 * @return {String}          A generated paragraph
 */
export const generateParagraph = quantity => [...Array(quantity)].map( _ => `${generateSentence(selectRandom(SENTENCES))}.` ).join(' ');

/**
 * Generate a set of paragraphs
 * @param  {Int}    quantity The number of paragraphs
 * @return {String}          Generated paragraphs
 */
export const generateText = quantity => [...Array(quantity)].map( _ => `<p>${generateParagraph(NUM_SENTENCES_IN_PARAGRAPH)}</p>` ).join('');

