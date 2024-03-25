
# Boldo page

One page application, with responsive design for each type of devices (mobile phones, tablets, laptops and desctop version are here). 


## Boldo page on Netlify

https://boldo-p.netlify.app/


## Boldo page on GithubPages

https://theivanchornyi.github.io/boldo/


## Tech Stack

**Client:** React, Typescript, Emotion CSS, Swiper, ChartJs.



## Structure

The Frontend is written in React. For styling used Emotion. Every component has
.component in filename, hook - .hook, service - .service, styles file - .style,
types file - .type, util - .util ​ A brief overview of the contents of the src
folder:
- assets: Icons and images are used in the frontend
- shared: Common components, Base services, hooks, forms error handlers and
  validators, styles consts, types,services and util functions.
- modules: Main content of the frontend ​ Each logical segment of the frontend
  is a module (header, hero, etc.). Modules have a structure: ​

  - components
    - component
      - component.component.tsx
      - component.styles.ts
## Installation with yarn

1. Clone the project

```bash
  git clone https://github.com/theIvanChornyi/boldo.git
```

2. Go to the project directory

```bash
  cd boldo
```

3. Install dependencies

```bash
  yarn
```

4. Start the server

```bash
  yarn start
```



## Run Locally with Docker

1. Clone the project

```bash
  git clone https://github.com/theIvanChornyi/boldo.git
```

2. Go to the project directory

```bash
  cd boldo
```

3. Install dependencies and start the server

```bash
  docker compose up
```

In both cases, the project runs on the same port and is accessible via http://localhost:3000/
    

## Reference 
1. **Design** https://www.figma.com/community/file/1081611224529759785
2. **Specs** https://docs.google.com/document/d/1qOo1nQgRi81Iu_E3SMKRAF9adXVOEquPuOkN85qwriw/edit?usp=sharing
3. **Docs** https://readme.so/