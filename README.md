# Midtrans Wi-fi Authentication
This is react version of website for authenticating WiFi connection on Midtrans office

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)


## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies
* `npm start` to start the dev server

## Running the app
After you have installed all dependencies you can now run the app. Run `npm start` to start a local server using `express` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:5000`.

### server
```bash
# development
npm run server
# production
npm run prod
npm run server:prod
#open page
open http://localhost:5000
```

## Other commands

### build files
```bash
# development
npm run dev
# production
npm run prod
```

### watch and build files
```bash
npm run watch
```
