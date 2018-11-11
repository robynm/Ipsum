import { generateText } from './generators.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ipsum-form');
  const textContainer = document.getElementById('text-response');
  const selectionContainer = document.getElementById('selection-response');
  const copyButton = document.getElementById('copy-text');

  // copy text to clipboard
  copyButton.addEventListener('click', e => {
    selectionContainer.select();
    document.execCommand('copy');
  });

  // generate text
  form.addEventListener('submit', e => {
    e.preventDefault();
    const paragraphs = parseInt(document.getElementById('paragraphs').value);

    if ( !paragraphs ) {
      return;
    }

    const text = generateText(paragraphs);

    textContainer.innerHTML = text;
    selectionContainer.innerHTML = text;
    // show copy button when text is generated
    copyButton.classList.remove('hide');
  });
});
