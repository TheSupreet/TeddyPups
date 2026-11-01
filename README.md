# TeddyPups clone

A responsive React clone of [TeddyPups U.A.E.](https://puppy.instabizweb.com/). The pages, copy, colours, and puppy records follow the live site. Prices are not shown, because the reference does not show them.

Photos, the logo, and family pictures load from the reference site's own media URLs. They belong to TeddyPups. See [WEBSITE_ANALYSIS.md](WEBSITE_ANALYSIS.md). Do not publish this project with those files presented as your own.

## Technologies

- React, Vite, JavaScript, Tailwind CSS, React Router, Lucide React

## Project structure

```
teddypups-clone/
├── src/             React app and the puppy catalogue
├── WEBSITE_ANALYSIS.md
└── README.md
```

The puppy records live in `src/data/puppies.json`: 15 available puppies and 27 gone-home puppies taken from the reference. Available puppies keep the site's published four-point health list. Gone-home puppies do not get an age, because the tickets do not show one. The app does not use a server or a database.

## Installation

From `teddypups-clone`:

```bash
npm install
```

## Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Pages

- `/` Home
- `/puppies` Available puppies and filters
- `/puppies/:slug` Puppy detail, gallery, and enquiry
- `/gone-home`
- `/happy-families`
- `/how-it-works` and `/how-it-works#delivery`
- `/faq`
- `/contact`

Filters on the puppies page match breed, gender (`male` or `female`), origin (`local` or `imported`), and collection (for example `korean-teacup`). A boy or girl filter also includes records marked `male-female`.

The letter and enquiry forms check the name and phone in the browser, then show the same received note. A filled hidden `website` field is treated as a honeypot and is ignored. Nothing is stored.

## Testing

1. Open Home and confirm the puppy cards load.
2. Open Puppies, press Maltipoo, Boys, and Korean Teacup, and confirm the list changes.
3. Open a puppy, move through the gallery, and send an enquiry with a name and phone. Submitting with those fields empty should show an error.
4. Open Gone home, Happy families (open a photo), How it works (the delivery section), FAQ (open a question), and Contact (post a letter).
5. Narrow the window to 360px and 390px. Use the menu. Confirm the page does not scroll sideways.

## Notes for an interview

- Cards, filters, and detail pages read `src/data/puppies.json`. The pages do not hardcode each puppy in their components.
- FAQ, how-it-works copy, and family captions stay in `src/content` and `src/data` because the reference has no separate source for them.
- Letters are acknowledged on the page. There is no admin screen and no saved enquiry list.
- The splash mascot and footer mark are simple drawings. The live site animates those instead of using a single image file.
