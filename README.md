# Chess

Online website to play chess with your friends.

this website is a Chess game using react deployed on 2 servers with a load balancer for better experience

Servers host website using Nginx and HAproxy load balancer on a third server



you can visit the website through [this Link](http://abdullahyehia.tech/)


## Setup:

In any terminal, type the following commands to install the necessary packages and run the app.

- Clone this repo on your device:

```bash
git clone https://github.com/A-Yehia19/Chess.git
cd Chess
npm install
```

#### To run in development mode:

```bash
npm run dev
```

#### To build the app:

```bash
npm run build
```

## Directory structure:

The app is located at `src/App.jsx`

The pages accessed by the router are in `src/pages/`

All components are stored in `src/components/`

- Common components to be used in multiple pages are in `src/components/common/`
- Page-specific components are in `src/components/<Page Name>/`
- Each page inside `src/components/` has a "styles" folder for css files to be used for its components
- All css files must be named after their component

All assets (images, icons, etc.) go in `src/assets/`


## Changelog:

All the changes made to the project are documented in the [CHANGELOG.md](CHANGELOG.md) file.


## Contributors:

- [Abdullah Yehia](https://github.com/A-Yehia19/)
