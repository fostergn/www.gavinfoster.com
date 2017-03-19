# www.gavinfoster.com

This site shows work and offers support chat functionality. It uses react and redux and was built with [React Create App](https://github.com/facebookincubator/create-react-app) as a boilerplate.

## Getting Started

Start docker for local development

`docker-compose up --build`

`open http://localhost:3000`

### Deployment
`npm run build && rsync -av build/ gavin@45.55.67.227:/var/www/gavinfoster.com/html`
