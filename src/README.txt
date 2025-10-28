Navin S Portfolio (React + Vite + Tailwind)

Quick Start:
1. Open this folder in VS Code.
2. Place your photo file as: public/photo.jpg
3. Place your resume as: public/Navin_resume_new.pdf

Install & Run:
npm install
npm run dev

Open:
http://localhost:5173

Build for deploy:
npm run build
Use dist/ to deploy to Vercel or GitHub Pages.

To deploy to GitHub Pages:
- install gh-pages as dev dependency:
  npm install gh-pages --save-dev
- add "homepage": "https://<your-username>.github.io/navin_portfolio" to package.json
- add "deploy" script: "gh-pages -d dist"
- run: npm run build && npm run deploy
