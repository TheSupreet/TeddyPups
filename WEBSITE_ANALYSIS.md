# TeddyPups website analysis

Reference inspected on 31 October 2026: [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/).

This note records the live site. It does not add pages, prices, or health claims that were not on the reference.

## Pages and URLs

| Page | URL | Role |
| --- | --- | --- |
| Home | `/` | Full marketing page |
| Available puppies | `/puppies` | Filterable catalogue |
| Breed or origin filter | `/puppies?breed=maltipoo`, `/puppies?origin=local`, `/puppies?origin=imported` | Same catalogue, one filter applied |
| Puppy detail | `/puppies/:slug` | Example: `/puppies/maltipoo-max-male` |
| Gone home | `/gone-home` | Puppies who already have families |
| Happy families | `/happy-families` | Testimonial and 64-photo gallery |
| How it works | `/how-it-works` | Local visit and import journeys |
| Delivery and collection | `/how-it-works#delivery` | A section on How it works, not its own page |
| FAQ | `/faq` | Nine questions |
| Visit and contact | `/contact` | Letter form, phone, email, map link |

External links: WhatsApp `https://wa.me/971541676733`, `tel:+971541676733`, `mailto:teddypupsadmin@gmail.com`, Instagram `https://www.instagram.com/teddypups.worldwide/`, TikTok `https://www.tiktok.com/@teddypupsuae`, Facebook `https://www.facebook.com/profile.php?id=61567496944539`, map `https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7`.

Prices are not shown on any inspected page.

## Header

- Cream background, logo image plus the word “TeddyPups”.
- Desktop (wide): Home, Puppies, Happy families, How it works, FAQ, Visit & contact. The current item is toffee and has a small paw under it. A green “WhatsApp us” pill sits at the end.
- Narrow screens: a “Menu” button opens the same links. A sticky bar at the bottom has “WhatsApp us” and “Call”, and shows `+971 54 167 6733`.
- A short splash covers the first view: diamond grid, a small mascot, and the handwritten line “every puppy is family”.

## Footer

Dark cocoa panel.

- “Home, at last.”
- “TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.”
- Explore: Available puppies, Gone home, Happy families, How it works, Delivery & collection, FAQ, Visit & contact.
- Say hello: WhatsApp +971 54 167 6733, teddypupsadmin@gmail.com, Downtown Dubai, United Arab Emirates.
- Instagram, TikTok, Facebook.
- Copyright line: “© 2026 TeddyPups U.A.E.” and the handwritten line “every puppy is family”.

## Homepage section order

1. Splash.
2. Hero. Eyebrow “every puppy is family”. Heading “Premium teacup puppies in Dubai”. Supporting line about the Dubai showroom and rare miniature breeds. Buttons: “View available puppies” and “Enquire on WhatsApp”. A row of scalloped photo arches sits under the copy.
3. Meet the pups. “Real puppies, real photos, looking for their families right now.” Fifteen available cards, then a “Meet them all” link to `/puppies`.
4. Two ways to meet your puppy. “Puppies in Dubai” links to `/puppies?origin=local`. “Imported for you” links to `/puppies?origin=imported`.
5. Your puppy journey. Three steps (choose a breed, get photos and details, secure delivery), a phone-style panel, and breed chips for Maltipoo, Pomeranian, Poodle, Cavapoo, and Shih Tzu. Those chips link to `/puppies?breed=...`.
6. Why families trust TeddyPups. Four points: vet-checked, Korea to Dubai, support 24/7, trusted worldwide.
7. Happy families and puppies. Sarah M., Dubai, UAE, plus a photo strip. Photos open a lightbox. “See every happy family” goes to `/happy-families`.
8. Questions, answered. The first three FAQ items, then “Read all questions”.
9. Ready to meet your new best friend? WhatsApp and Visit & contact buttons.
10. Footer.

## Puppy cards

Each available card shows a real photo, name, breed, gender, age, an Available label, and a video badge when that puppy has video. There is no price and no invented description. The whole card links to the detail page.

Visible available puppies, in order:

1. Max — Maltipoo, boy, 3 months, video — `/puppies/maltipoo-max-male`
2. Korean Teacup Maltipoo — girl, 2 months, video
3. Korean Teacup Poodle — girl, 2 months
4. Maltipoo & Cavapoo — boy, “3 months Maltipoo & 2 months Cavapoo”, video. The only listing description on the source is “Maltipoo (Left) & Cavapoo (Right).”
5. Toy Poodle — boy and girl, 2 months
6. Maltipoo — girl, 3 months, video
7. Pomeranian — girl, 3 months
8. Copper — Cavapoo, boy, 2 months
9. Shih Tzu — girl, 2 months
10. Shih Tzu — boy, 2 months
11. Maltipoo — girl, 2.5 months
12. Maltipoo — girl, 2 months
13. Korean Teacup Pomeranian — girl, 2 months
14. Korean Teacup Pomeranian — girl, 2 months
15. Korean Teacup Pomeranian — boy, 2 months

All fifteen available records on the source are marked imported. A local filter can therefore be empty. That is reported as an empty state, not filled with made-up local puppies.

## Listing filters

`/puppies` uses one active chip at a time:

- Everywhere
- Imported
- Korean Teacup (a collection, not a breed)
- Maltipoo, Pomeranian, Poodle, Cavapoo, Shih Tzu
- Boys, Girls

The page also says how many puppies are looking for a home, and shows a short “Already gone home” strip.

## Puppy detail

Observed on Max:

- Breadcrumb back to available puppies.
- Gallery with photos and, when present, video. Arrows and thumbnails.
- Handwritten “hello, it’s me”, then the name and breed.
- Facts: Breed, Boy or girl, Age, Where (“Imported for you” on Max).
- “Every Teddy Pup comes”: Vaccinated, Dewormed, Verified health certificate from licensed vets, Thoroughly checked before joining your family. This is the site-wide list. Individual certificates are not published, so they are not invented.
- “Coming home from abroad” with four steps for imported puppies.
- “Ask about {name}” form: name and phone required; email, area, and message optional; a hidden Website honeypot; “Send enquiry”; WhatsApp link.
- Previous and next puppy.

## Gone home

Ticket cards. Each ticket reads “one ticket home”, the name, breed and gender, either “TeddyPups” or “Dubai showroom”, then “home” and “admit one”. Twenty-seven tickets. Ages are not printed on these tickets, so the clone does not add them.

## Happy families

Heading, short introduction, “64 moments and counting”, Sarah M.’s quote, and a grid. Opening a photo shows a larger view. Eight photos carry the captions used on the homepage. The other photos have no caption on the source.

## How it works

- Intro about visiting locally or ordering from overseas.
- Two ways home: meet in person in Downtown Dubai (four steps) and order upon request (four steps).
- Premium puppy promise: hand-selected breeders, full transparency, safe delivery.
- Delivery and collection (`#delivery`): same day, delivery within Dubai, international cargo, worldwide delivery.
- Why choose us: international cargo, support 24/7, health guarantee (the same published wording).
- Closing note on guidance for training, nutrition, and care.

## FAQ

Nine accordion questions. There is no search box on the reference, so the clone does not add one. The homepage previews the first three.

## Contact

The form is written as a letter:

“Dear TeddyPups, my name is [name], and you can reach me on [phone] or by email at [email]. I live in [area], and I'm curious about [puppy]. [message]. with love, a future puppy parent.”

Name and phone are required. Email, area, puppy, and message are optional. The puppy menu lists available puppies. Submit label: “Post my letter”. A hidden Website field is the honeypot. Beside the letter: WhatsApp, call, email, and “Visit us in Downtown Dubai” with “Open in Google Maps”. There is no embedded map.

## Reusable pieces

- Header, footer, mobile action bar, splash.
- Pill buttons: primary (toffee), ghost (cocoa outline), WhatsApp green.
- Puppy card, filter chips, ticket card.
- Letter / enquiry form.
- Accordion, photo lightbox.
- Section heading with a handwritten eyebrow.
- Board: 3px cocoa border, about 1.6rem radius, milk fill.

## Interactive behaviour

- Menu opens and closes on small screens.
- Active nav state.
- Filter chips update the puppy list and the URL.
- Cards and tickets open a detail route.
- Gallery previous, next, and video play.
- FAQ rows expand and collapse.
- Family photos open and close a viewer.
- Forms validate required fields, show errors, and confirm a successful send.
- Splash can be dismissed.
- WhatsApp and call links leave the site.

## Design observations

Tokens read from the live stylesheet:

- Milk `#fffdf8`, cocoa `#2a170e`, cocoa soft `#5a3a28`
- Toffee `#c2622b`, toffee deep `#a24a1a`, toffee ink `#8e3f15`
- Honey `#f2be6b`, honey soft `#fbe3b4`
- Sky `#bfddf5`, blush `#f9cdbf`
- WhatsApp green `#1f7a4d`
- Body: Figtree. Headings: Fraunces. Handwriting: Shantell Sans.
- Buttons are pills, at least 3.25rem tall, with a cocoa shadow on the filled ones.
- Page background is warm milk, not pure white. The footer is cocoa with milk text.

## Assets

Photos, the logo, and client pictures load from the reference site’s media URLs. The walking splash mascot and the footer basket are simple drawings, because the live site animates those rather than shipping a single image file.

## Limits

- No prices exist on the reference.
- Most puppy records have an empty description. Only the Maltipoo & Cavapoo line quoted above is stored.
- Health copy is the published four-point list, not a per-puppy certificate.
- FAQ has no keyword search.
- Delivery is an anchor on How it works.
