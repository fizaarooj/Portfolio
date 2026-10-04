# Fiza Arooj — Portfolio

React + Vite + plain CSS. No UI libraries.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

Deploy the `dist` folder to Netlify, Vercel, GitHub Pages or any static host.

## Where to edit things

| What | File |
| --- | --- |
| Email, phone, GitHub, Instagram, LinkedIn, photo, CV path | `src/data/profile.js` |
| About text, skills, experience, projects, education, certifications | `src/data/content.js` |
| Colours, fonts, spacing | top of `src/styles/index.css` (`:root` variables) |

## Add your graphic-design work

1. Put images in `public/designs/` (JPG/PNG/WebP, ideally under 400 KB each).
2. Add an entry to the `designs` array in `src/data/content.js`:

```js
{
  id: 'poster-01',
  title: 'Event Poster',
  category: 'Posters', // Branding | Social Media | Posters | UI Design | Marketing | Photography
  image: './designs/poster-01.jpg',
  description: 'What the project was and what you did.',
  tools: ['Photoshop', 'Illustrator'],
  height: 'tall', // optional
}
```

The gallery, filters and lightbox update automatically. Until you add work, the section shows a clean "being added" message.

## Add project screenshots

Put the image in `public/projects/` and set `image: './projects/kpi.png'` on the project in `content.js`. Check that Airblue is happy for screenshots of the internal system to be public first.

## Contact form

By default "Send Message" opens the visitor's email app addressed to you. To receive messages directly, create a free form endpoint (e.g. Formspree) and add it to a `.env` file:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
```

## Update the CV

Replace `public/Fiza_Arooj_CV.pdf` with the new file (keep the same name).
