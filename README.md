# Speeding Tickets Display

This project is a simple web application that displays speeding ticket data recorded on July 4th, 2014. It uses a JSON data file to populate a table that shows details such as the ticket date, time, actual speed, posted speed, speed over the limit, the violator's age, and sex. The front end is built with Vue.js and styled with Bootstrap.

## Features

- **Dynamic Data Loading:** Ticket information is loaded from a JSON file.
- **Responsive UI:** Uses Bootstrap for a responsive and clean design.
- **Data Presentation:** Displays key details (date, time, speeds, age, sex) in a structured table.
- **Extensible:** The setup can be adapted for additional filtering or features.

## File Structure

- **index.html**  
  The main HTML file that sets up the Vue.js application. It contains the structure for displaying the speeding tickets along with Bootstrap styling and JavaScript to fetch and render the data.

- **tickets1.json**  
  The JSON file containing an array of speeding ticket records. Each record includes details such as actual speed, posted speed, date, time, age, ticket ID, and violator sex.

> **Note:** In `index.html`, the Vue.js app fetches data from `citations.json`. If you intend to use `tickets1.json` as your data source, update the fetch URL in the Vue application accordingly.

## Setup and Usage

1. **Clone or Download the Repository:**
   ```bash
   git clone [repository-url]
   ```
2. **Adjust Data File Reference (if needed):**  
   Open `index.html` and change the fetch URL in the Vue.js app from:
   ```js
   const response = await fetch('citations.json')
   ```
   to:
   ```js
   const response = await fetch('tickets1.json')
   ```
   This ensures that the correct JSON file is loaded.

3. **Run the Application:**
   - **Option 1:** Open `index.html` directly in your web browser.
   - **Option 2:** Run a local web server (recommended for fetch requests):
     ```bash
     python -m http.server
     ```
     Then open your browser and navigate to `http://localhost:8000`.

## Dependencies

- **Vue.js:** Used for building the dynamic user interface.
- **Bootstrap 3:** Provides styling for a responsive and modern design.
- **(Optional) Handlebars.js:** There is some legacy code that uses Handlebars for filtering. This is not actively used in the current ticket display setup and can be removed if unnecessary.

## Customization

- **Data Updates:**  
  To update the speeding ticket records, modify the JSON file (`tickets1.json`). Ensure that the structure of each record remains consistent.

- **UI Enhancements:**  
  You can further customize the table styling or add additional filtering options using Vue.js, or remove unused code (such as the Handlebars filtering logic) if it is not required.
