# CV template

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Enviroment preparation

To prepare the workspace, run:

```bash
npm install
npm start
```

This will install

## Development

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Adding new components

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

To generate new class, run:

```bash
ng generate class class-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Setting your own data

To modify the template with your own data you need to edit three places.

1. ```src/app/nav-bar/nav-bar.component.html```

    In the ```<div class="right-nav">``` section you can provide link to your own externall sites. As example provided are links to GitHub and Linkedin.

2. ```src/app/page/page.component.ts```

    On this page you can edit personal data embeded into the CV like your name and contact info.

3. ```public/locale/*.json```

    Here you can edit localized data for multiple lanmguages. In this tempalte provided are Polish and English locale files. To add more you need to also edit ```supportedLanguages``` in ```src/app/app.component.ts``` and add appropriate button to the ```<div class="left-nav">``` in ```src/app/nav-bar/nav-bar.component.html```.

## Deployment

This project is optimized for deployment via Cloudflare Workers & Pages. To configure worker see https://developers.cloudflare.com/workers/wrangler/configuration/.

To deploy finished configuration run: ```npx wrangler deploy```
