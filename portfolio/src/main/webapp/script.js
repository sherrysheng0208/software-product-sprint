// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Not today.', 'I am sher locked.', 'Why so serious?', 'Bazinga!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getRandomQuoteUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((quote) => {
    document.getElementById('quote-container').innerText = quote;
  });
}

function getJsonMessage() {
  fetch('/data').then(response => response.json()).then((message) => {
    document.getElementById('json-container').innerText = message;
  });
}

function getSubtractionGame() {
  fetch('/data').then(response => response.json()).then((comment) => {
    document.getElementById('comment').innerText = comment;
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
function requestTranslation() {
        const text = document.getElementById('text').value;
        const languageCode = document.getElementById('language').value;
        const resultContainer = document.getElementById('result');
        resultContainer.innerText = 'Loading...';

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/data', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }

