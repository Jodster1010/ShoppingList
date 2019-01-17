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
//toggle checked/unchecked
//toggleClass() "shopping-item shopping-item__checked"

//delete items

//submit()

//closet() is probably needed?