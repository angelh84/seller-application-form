# seller-application-form

1. Clone down the repository

    ```bash
    git clone https://github.com/angelh84/seller-application-form.git
    ```

2. Enter the repo directory

    ```bash
    cd seller-application-form
    ```

3. Install the dependencies (requires Node v. >=11.10.1)

    ```bash
    npm install
    ```

4. Run the app

    ```bash
    npm run serve
    ```

## Overview
a. Forms are one of the most tedius aspects of front-end development and so I went with the easiest method of executing this by using tailwind as a dependency.

b. I setup the tailwind.config.js file with base theme properties that I gathered from the figma project.  

c. I then setup base global styling properties in the tailwind.css file for base theming. 

d. I wrote the markup while gradually styling elements.  Once I finished desktop, I moved on to work on responsive functionality and styling.

e. I added front-end validation to all form fields, if there are any missing fields on either step, the app does not let the user proceed and visually cue's the missing required fields.

f. I attempted to sign up and setup a Fauna DB but was unsuccessful after a legthy attempt so I decided to 'fake' the storing of data locally by using Vuex. 

## CRUD

*NOTE - Hard refresh removes the state of the app since this information is not being saved or retrieved from an api (would love to have a conversation about what I missed when attempting to setup a Fauna DB).

1. Create: A user can be created with all required fields and will land on the thank you page. 

2. Read: Once on the thank you page, the logo can be clicked to arrive back on step 1 and to populate your existing information, update the url by replacing the /new/ part of the url to /{firstName-lastName}/.  (So for me it would be /angel-hernandez/)

3. Update: Once you have completed step 2, the form should be populated with the corresponding information and will allow you to update any fields and save the form all over again.  

*NOTE -- This only happens if there is an existing name in the url that matches with an existing form in the local store. 

**NOTE -- If on the /new/ route and the user attempts to create a new user with an existing first and last name, the app will throw a modal on submission that lets the user know that there is an existing entry with the same name.

## Conclusion

Hooking the data up to an endpoint would be trivial at this point, the problem was getting Fauna DB to work locally for me but setting up a fetch / axios call to save, retrieve and update this information would be easy.