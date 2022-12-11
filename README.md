# Angular SPA Ironhack Challenge

I built a Single-Page Application with [Angular CLI](https://github.com/angular/angular-cli), consisting of multiple views and implemented all CRUD actions. I styled the SPA's UI using CSS and Angular Material and used a JSON Server as REST API.

## Wireframes and Project Management

I created some wireframes using Miro that aided me in mocking up the main page structure and functionalities. Once I had outlined the main layout, I used Trello to project manage, keep track the tasks and ensure the project was completed in time. This project took approximately 45h, and having a strong wireframe foundation helped me make sure a MVP was delivered on time.

<br>

**Wireframe:**

<p align="center">
  <img src="/src/assets/images/readme/miro-wireframe.png"/>
</p>

<br>

**Task management:**

<p align="center">
  <img src="/src/assets/images/readme/trello-task-management.png"/>
</p>

## Setup

### JSON server

Run `json-server --watch db.json --port 8000` on the directory `/src/assets/data`, where our JSON DB file is stored. This command runs JSON Server on `http://localhost:8000/`. You can view the DB resources on `http://localhost:8000/cats` and use HTTP methods to access and modify resources.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Technologies Used

**Languages:**

- HTML
- CSS
- TypeScript
- JavaScript (data)

**Deployment and control system:**

- Git
- GitHub

**Additional tools:**

- Miro
- Trello
- Angular Material
- Procreate (logo)
- Postman
- VSC

## Components and Pages Structure

Despite the project being quite an ambitious one, built with several functionalities and components, I aimed to write clean, modular and efficient code and used a logical and consistent distribution of files and folders. To understand how the SPA is structure we should look at `/src`, which contains the `/app` and `/assets` directories. `/app` stores our app components, models, services, state (Redux), utils, our routing module, our app module and many other key files. Regarding `/assets` this is the directory where you can find the app's audio files, images and data (JSON).

### Main functionalities and characteristics

- Components serve to separate both HTML blocks and functionality between parts of the project
- Responsive and mobile first approach
- Pleasant UI and a consistent design system using Angular Material
- Strong build in and custom form validation build with Reactive Forms
- Application state is managed and centralised using Redux
- Cats can only be editable (updatable and deletable) from the DB when they're user-made
- Stores are dynamic and store data generated both locally and from API calls
- Users can perform a variety of CRUD operations
- Sharp and smooth routing and navigation between components
- Extra features to enhance UX, such as CSS animations

## Demo

**Mobile first**
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/mobile-first.gif"/>
</p>
<br>

**Responsive and material design**
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/responsive-design.gif"/>
</p>
<br>

**Navigation between components**
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/navigation.gif"/>
</p>
<br>

**Error page**
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/error-page.png"/>
</p>
<br>

**Create a cat**
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/create-cat.gif"/>
</p>
<br>

**Update a cat** \*Option only available on user-made cats
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/update-cat.gif"/>
</p>
<br>

**Delete a cat** \*Option only available on user-made cats
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/delete-cat.gif"/>
</p>
<br>

**Bonus features**
<br>
<br>

<p align="center">
  <img src="/src/assets/readme/animation.gif"/>
</p>
<br>

<p align="center">
  <img src="/src/assets/readme/audio-secret-feature.png"/>
</p>
<br>

## Future Work

There are a few iterations that could make this project even better:

- Allow user to filter cats by breed and specifications
- Add a favicon
- Provide a default cat image so an image isn't required when creating a new cat
- Create a come back to top feature
- Load only n number of cats from the database, perhaps implement a load on scroll
- Implement a 'mark as favourite' feature so users can save cats they're interested in
- Avoid duplicates, e.g. by looking for duplicate images when users create cats
- Improve error handing adding some error log, try/catch structures on service, etc
- Currently our 404 page only appears on `/**`, it'd be good to find a way in which users were taken to that error page when browsing pages such as `/cats/not-a-valid-id`

## Resources

- [Angular documentation](https://angular.io/docs)
- [Angular material](https://material.angular.io/)
- [Material design](https://m3.material.io/)
- [Cat API](https://thecatapi.com/)

## Team members

I built this project with the advice and assistance of my Ironhack mentors:

- [Shaun](https://github.com/IronhackShaun)
- [Raymond](https://github.com/RaymondMaroun)
