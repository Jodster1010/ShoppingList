//add new items
//submit and inclue event.preventDefault()
//submission is cleared?
'use strict';
function getUserInput() {
  return $('#shopping-list-entry').val();
}

function generateHtmlItem(item) {
  return `
    <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
  `;
}

function addResults(html) { 
  $('.shopping-list').append(html); 
}
//toggle checked/unchecked
//toggleClass() "shopping-item shopping-item__checked"

//delete items

//submit()
function main() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const item = getUserInput();
    this.reset();
    const html = generateHtmlItem(item);
    addResults(html);
    $('.shopping-item-toggle').on('click', event => {
      const targetItem = $(event.currentTarget).closest('.shopping-item');
      targetItem.toggleClass('.shopping-item shopping-item__checked');
    });
  });
}

$(main);
//closet() is probably needed?