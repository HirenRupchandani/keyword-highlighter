# Keyword Highlighter

Keyword Highlighter is a Chrome extension that highlights specified keywords on all websites you visit. This extension helps you easily spot important terms or phrases across different webpages. 
Motivation: Made it as a personal project to highlight sponsorship details in large job descriptions. Was tired of pressing CTRL+F and searching different words for the visa sponsorship.

## Features

- Automatically highlights user-specified keywords on all websites.
- Simple and intuitive interface to set keywords.
- Highlights keywords in yellow for easy visibility.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle at the top right.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the options page.
2. Enter the keywords you want to highlight, separated by commas.
3. Click "Save".
4. The specified keywords will be highlighted in yellow on all webpages you visit.

## File Structure

- `manifest.json` : Configuration file for the Chrome extension.
- `background.js` : Background script (optional) that initializes the extension.
- `content.js` : Content script that performs the keyword highlighting.
- `options.html` : HTML file for the options page UI.
- `options.js` : JavaScript file for handling options page interactions.

## Development

### manifest.json

Defines the extension's properties and permissions.

### background.js

Logs a message when the extension is installed.

### content.js

Fetches keywords from Chrome storage and highlights them on the webpage.

### options.html

Provides a simple UI for entering and saving keywords.

### options.js

Handles saving and retrieving keywords from Chrome storage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
