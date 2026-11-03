# Vivek — React Portfolio

A responsive single-page developer portfolio built with React, Vite, Lucide icons, and custom CSS.

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open the folder in VS Code.
3. Open the terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite (usually http://localhost:5173).

## Personalize before publishing

Open `src/main.jsx` and update the `profile` object:
- Name
- Email
- GitHub URL
- LinkedIn URL
- Location

Then update the `projects` array:
- Replace project descriptions with what you actually built.
- Replace `github: "#"` and `demo: "#"` with real links.
- Remove any project you have not built yet.
- Add screenshots or project preview links when available.

Add your resume as `public/resume.pdf` (create the `public` folder if needed).

## Build for deployment

```bash
npm run build
```

The production-ready site will be generated in the `dist` folder. You can deploy it using Vercel, Netlify, or GitHub Pages.

## Important

Project entries are starter content based on the projects discussed. Confirm each description and technology list matches your actual implementation before publishing.
