DevUnpack Website
=================

Welcome to the GitHub repository for DevUnpack, a static site built with Nuxt 3. This project leverages the power of Nuxt 3 for SSG (Static Site Generation) and is designed to be fully customizable through environment variables. It features a blog section powered by Nuxt Content, making it easy to manage and write new posts.

Features
--------

-   Static Site Generation with Nuxt 3 for fast and secure websites.
-   Tailwind CSS for stylish and responsive design.
-   Nuxt Content integration for easy blog management.
-   Environment Customization for different deployment environments.
-   SEO Friendly with dynamic sitemap generation and Google Tag Manager integration.

Project Structure
-----------------

The key directories and files in this project include:

-   `assets/data/contents`: Contains the blog titles and section contents.
-   `.env`: Stores environment variables for site customization (GTM_ID, SITE_URL, etc.).
-   `components/`: Vue components used across the website.
-   `pages/`: The Nuxt pages representing the site's structure.
-   `public/`: Static files like images and fonts.
-   `scripts/`: Custom scripts for building and deploying the site.

<!-- Replace <screenshot-url-here> with the actual URL to the screenshot -->

Setup
-----

To run this project locally, follow these steps:

1.  Clone the repository:


```
`git clone <repository-url> devunpack-site
cd devunpack-site`
```

1.  Install dependencies:


```
`npm install`
```

1.  Set up your environment variables:

Copy the `.env.example` file to a new file named `.env` and update it with your environment-specific settings.

1.  Run the development server:


```
`npm run dev`
```

Visit `http://localhost:3000` to view the site.

## Structure of the .env File
Your .env file should contain key-value pairs, where each key represents a configurable aspect of your application, and the value is the setting you apply. Here’s a sample structure based on the details you provided:

# Google Tag Manager ID for tracking and analytics
GTM_ID=GTM-MDKNLLC

# The base URL of the site, used for generating absolute links and for SEO purposes
SITE_URL=https://devunpack.com

# The domain name of your site, utilized in various parts of the application
DOMAIN=devunpack.com

# External URLs for social media and content, allowing for easy updates and management
X_URL=https://twitter.com/DevUnpack
YOUTUBE_URL=https://www.youtube.com/@DevUnpack

# The name of your site or organization, used in titles, headers, or footers
NAME=DevUnpack


Deployment
----------

This project includes custom scripts for building and deploying to AWS. To build the site, run:


```
`npm run build`
```
 
Contributing
------------

Contributions to the DevUnpack website are welcome. Please read our contributing guidelines before submitting a pull request.

License
-------

This project is open-source and available under the MIT License.

* * * * *

Notes:

-   Replace `<repository-url>` with the actual URL of your GitHub repository.
-   If you have a screenshot of the project structure, replace `<screenshot-url-here>` with the actual URL to the screenshot.
-   You might also want to add a `LICENSE` file to your repository if you haven't already, especially if you mention it in the README.
-   This README assumes you have a `.env.example` file as a template for `.env`. If not, consider adding one as it's a best practice for projects that use environment variables.
-   Tailor the Contributing section based on whether you have specific guidelines for contributors.
-   Adjust the Deployment section according to your actual deployment process, especially if it's not AWS-specific or if you use a different service.