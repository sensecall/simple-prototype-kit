Node.js + Tailwind CSS Boilerplate
==================================

Features
--------
*   Express.js server
*   Nunjucks templating
*   Tailwind CSS integration
*   Live reload with Browser-sync
*   Automatic port management

Prerequisites
-------------
*   Node.js (Latest LTS version recommended)
*   npm (comes with Node.js)

Installation
------------

1.  Clone the repository:  
    `git clone [your-repository-url]`
2.  Navigate to project directory:  
    `cd tailwind-boilerplate`
3.  Install dependencies:  
    `npm install`

Development
-----------

Start development server with hot reload:

`npm run dev`

This will:

*   Watch for Tailwind CSS changes
*   Start the Express server
*   Launch Browser-sync for live reload

Production
----------
Start production server:

`npm start`


Customisation
-------------
To modify Tailwind CSS settings, edit the tailwind.config.js file.

To add new routes, create them in the src/routes directory.

To create new templates, add them to the src/views directory.