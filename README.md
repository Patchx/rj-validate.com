# Official repo for rj-validate.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b2523d2-9538-4cbc-96e4-c891ed964d78/deploy-status)](https://app.netlify.com/sites/rj-validate/deploys)

http://rj-validate.com

https://www.npmjs.com/package/rj-validate


Todo:


- Make a review info page, that mentions it only uses backend validation (has inputs for all previous steps, to modify)

- Use Netlify Functions to validate the review page and display the results back to the user if there is an error

- Update the netlify.toml with the location of the functions folder

- See if you can specify the branch deploy settings in the netlify.toml

- Use FaunaDB to store and retrieve the data

- Save the Fauna ID to Local Storage

- If the ID exists in local storage, show the form submission and allow editing it

- Make editing work

- Show a link to load a chartJS of everyone's results