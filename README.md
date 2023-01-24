## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Documentation

### React vs. Next.js
When using Next.js as the underlying technology, you benefit from some features that, unlike plain React, are built right in. For example, routing, code splitting, API routes and image optimization.
Routing is of course also possible with plain React, but for this, for example, the react-router must be installed separately. Such steps can be avoided by using Next.js directly.

### UI
This project uses [Material UI](https://mui.com/material-ui/getting-started/overview/).
Normally I prefer css-modules, gladly also in connection with tailwindcss. This may sound strange at first, but I like to combine the advantages of modules with the shorter code of tailwind (by using the `@apply`-directive).
For smaller projects like this one, a library like Material UI is sufficient.

### Testing
Jest is used to test the components. Since these are simple components, only snapshot tests are created. For more extensive frontends I would also use Testcafe or Cypress for e2e tests.

### CI / CD
Two github actions are performed on each push. On the one hand a simple `npm run lint`, on the other hand the tests are executed.
Once something is pushed to main, it is automatically deployed to Vercel.

### Deployment
This project is deployed on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

You can visit the deployed version here: [githubfinder](https://githubfinder-fiercedmonkey.vercel.app/)