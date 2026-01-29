# Capstone Project: Home Services Clone

## About This Project

This project is a web application that clones the basic functionality of a home services marketplace like Urban Company (formerly UrbanClap). It provides a user-friendly interface for users to browse and select various home services.

The current version features:
- A home page displaying a list of available services.
- A functional Login/Sign Up page (UI only).
- A theme toggle for switching between light and dark modes.
- A responsive design for mobile and desktop viewing.

The front-end is built using React (via CDN) within a single HTML file, styled with CSS.

## Next Steps

The following tasks are planned for the next phase of development:

1.  **Service-Specific Templates:**
    *   Create a dedicated template/page for the "Plumber" service.
    *   When a user clicks on the "Plumber" card on the home page, the application should navigate to this new page.

2.  **Plumber Service Options:**
    *   The "Plumber" page should display a list of specific plumbing services available (e.g., "Tap Repair," "Drain Cleaning," "Toilet Installation").
    *   Each service option should have a description and possibly a price.

3.  **Add to Cart Functionality:**
    *   Implement an "Add to Cart" button for each plumbing service.
    *   Create a shopping cart system to manage the selected services.
    *   Display the items in the cart and calculate the total cost.

4.  **Backend Integration:**
    *   Develop a backend (e.g., using Flask or Node.js) to handle user authentication, service data, and order processing.
    *   Replace the current static data with data fetched from the backend API.
