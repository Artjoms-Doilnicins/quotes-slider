# Quotes Slider

A dynamic quotes slider that displays quotes from famous personalities along with their photos. The slider updates every 4 seconds, showing a new quote and rotating through a predefined list of quotes.

This project combines **HTML** , **CSS** , and **JavaScript**  to create a sleek and functional quotes slider. The design is modern and visually appealing with smooth transitions and automatic quote updates every few seconds.

## Features

### HTML

The interface consists of:
- **Image**: A circular image of the author is displayed above the quote text.
- **Quote Display**: Each quote is displayed with an associated image and text.
- **Name**: The author of the quote is displayed below the text.

### CSS
  - A gradient background for a visually appealing backdrop.
  - A card-like design for displaying the quotes with a box shadow, padding, and rounded corners.
  - The image of the author is circular and positioned above the quote text for a clean layout.

### JavaScript

- The quotes are stored in an array of objects, each containing the author's image, quote text, and name.
- Every 4 seconds, the quote and image are updated by calling the `updateQuotes()` function.
- The function retrieves the quote information from the array, updates the image and text, and moves to the next quote in the array. If the end of the array is reached, it loops back to the beginning.
- The image is updated by setting the `src` attribute of the `img` element.
 - The quote text and author's name are updated using `textContent`.

## How It Works

1. The quotes will automatically rotate every 4 seconds.

2. Each quote will display the author’s image, quote text, and name.
