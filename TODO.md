# Home Page - Pending Changes

## Done
- [x] Replace letter placeholders (N, O, P) with `lucide-react` icons (`Network`, `Briefcase`, `User`)

---

## Still To Do

### Bug Fixes
- [ ] **`py-18` is not a valid Tailwind class** (line 54)
  - Change to `py-16` or `py-20`

### UI / Polish
- [ ] **"Learn more" button has no `href`** (line 47)
  - Either link it to a section with `<Link to="/#features">` or change to a `<button>`
- [ ] **Features section has no heading**
  - Add an `<h2>` above the card grid (e.g. "Everything you need to get hired")
  - Helps with readability and SEO

### Code Quality
- [ ] **Trailing whitespace in `className`** (lines 14–15)
  - The className string for the `search` image has an unnecessary newline inside it

### Future / Enhancements
- [ ] Add real images inside the feature cards (currently image-less)
- [ ] Hero section images could use a staggered animation on load (e.g. `animate-fade-in`)
- [ ] Consider adding a CTA / testimonial section below the feature cards
- [ ] Mobile: hero images are hidden on small screens — consider a single centered image for mobile
