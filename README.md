Acceptance criteria</br> goit-js-hw-08 repository created.</br> In your
submitted homework, there are two links: to the source files and your working
page on GitHub Pages.</br> During live page visits, there are no errors or
warnings generated in the console.</br> Project built with
parcel-project-template.</br> Code formatted with Prettier.</br> Start
files</br> Download the startup files with the layout, styles, and attached
script files for each task. Copy them to your project, completely overwriting
the src folder in parcel-project-template.</br>

Task 1 - SimpleLightbox library

Do this task in the 01-gallery.html and 01-gallery.js files. Break it down into
several subtasks:

Add the SimpleLightbox library as a project dependency using npm (the CDN link
from your past work is no longer needed).</br> Use your JavaScript code from the
previous homework, but refactor it given that the library was installed via npm
(import/export syntax).</br> In order to add the CSS code of the library to the
project, you need to add one more import, aside from the one described in the
documentation.</br>

// Described in documentation;

import SimpleLightbox from "simplelightbox"; // Additional styles import

import "simplelightbox/dist/simple-lightbox.min.css";

Task 2 - video player

In HTML, there is iframe with video for Vimeo player. Write a script that will
save the current video playback time to local storage and, upon page reload,
continue to play the video from that time.

<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

Do this task in the 02-video.html and 02-video.js files. Break it down into
several subtasks:

Check out the documentation of the Vimeo player library.</br> Add the library as
a project dependency via npm.</br> Initialize the player in the script file as
described in the pre-existing player section, but note that you have added the
player as an npm package, not via CDN.</br> Read the documentation of the on()
method and start tracking the timeupdate event - playback time update.</br> Save
playback time to local storage. Let the key for the storage be the
"videoplayer-current-time" string.</br> When reloading the page, use the
setCurrentTime() method to resume playback from the saved position.</br> Add the
lodash.throttle library to the project and make sure that the playback time is
updated in the storage once a second or less frequent.</br>

Task 3 - feedback form

In HTML, there is form markup. Write a script that will save field values to
local storage when the user types something.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Do this task in the 03-feedback.html and 03-feedback.js files. Break it down
into several subtasks:

Track the input event on the form, and each time write to local storage an
object with the email and message fields, in which you save the current values
of the form fields. Let the key for the storage be the "feedback-form-state"
string.</br> When loading the page, check the state of the storage, and if it
stores some data, use it to fill in the form fields. Otherwise, the fields must
be empty.</br> When submitting the form, clear the storage and form fields, and
also display the object with the email and message fields and their current
values in the console.</br> Make sure that the storage is updated no more than
once every 500 milliseconds. To do this, add to the project and use the
lodash.throttle library.</br>

# Parcel template

This project was created with Parcel. For familiarization and setting additional
features [refer to documentation](https://parceljs.org/).

## Preparing a new project

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Clone this repository.
3. Change the folder name from `parcel-project-template` to the name of your
   project.
4. Create a new empty GitHub repository.
5. Open the project in VSCode, launch the terminal and link the project to the
   GitHub repository
   [by instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Install the project's dependencies in the terminal with the `npm install`
   command.
7. Start development mode by running the `npm start` command.
8. Go to [http://localhost:1234](http://localhost:1234) in your browser. This
   page will automatically reload after saving changes to the project files.

## Files and folders

- All stylesheet parshas should be in the `src/sass` folder and imported into
  the page stylesheets. For example, for `index.html` the style file is named
  `index.scss`.
- Add images to the `src/images` folder. The assembler optimizes them, but only
  when deploying the production version of the project. All this happens in the
  cloud so as not to burden your computer, as it can take a long time on weak
  machines.

## Deploy

To set up a project deployment, you need to perform a few additional steps to
set up your repository. Go to the `Settings` tab and in the `Actions` subsection
select the `General` item.

![GitHub actions settings](./assets/actions-config-step-1.png)

Scroll the page to the last section, in which make sure the options are selected
as in the following image and click `Save`. Without these settings, the build
will not have enough rights to automate the deployment process.

![GitHub actions settings](./assets/actions-config-step-2.png)

The production version of the project will be automatically built and deployed
to GitHub Pages, in the `gh-pages` branch, every time the `main` branch is
updated. For example, after a direct push or an accepted pull request. To do
this, you need to edit the `homepage` field and the `build` script in the
`package.json` file, replacing `your_username` and `your_repo_name` with your
own, and submit the changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Next, you need to go to the settings of the GitHub repository (`Settings` >
`Pages`) and set the distribution of the production version of files from the
`/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

The deployment status of the latest commit is displayed with an icon next to its
ID.

- **Yellow color** - the project is being built and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deployment.

More detailed information about the status can be viewed by clicking on the
icon, and in the drop-down window, follow the link `Details`.

![Deployment status](./assets/status.png)

### Live page

After some time, usually a couple of minutes, the live page can be viewed at the
address specified in the edited `homepage` property. For example, here is a link
to a live version for this repository
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

If a blank page opens, make sure there are no errors in the `Console` tab
related to incorrect paths to the CSS and JS files of the project (**404**).
Most likely you have the wrong value for the `homepage` property or the `build`
script in the `package.json` file.

## How it works

![How it works](./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) is launched from the `.github/workflows/deploy.yml`
   file.
2. All repository files are copied to the server, where the project is
   initialized and built before deployment.
3. If all steps are successful, the built production version of the project
   files is sent to the `gh-pages` branch. Otherwise, the script execution log
   will indicate what the problem is.
