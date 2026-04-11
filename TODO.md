# Home Page - Pending Changes

## Done
- [x] Replace letter placeholders (N, O, P) with `lucide-react` icons (`Network`, `Briefcase`, `User`)
- [x] Fix `py-18` → `py-20` (invalid Tailwind class)
- [x] Add features section heading ("Everything you need to get hired")
- [x] Add `bg-gray-50` background to features section
- [x] Strengthen "Learn more" button border (`border-gray-300`)

---

## Still To Do

### UI / Polish
- [ ] **"Learn more" button has no `href`**
  - Either link it to the features section or change to a `<button>`
- [ ] **Hero image layout** — SVGs are scattered, need a visual anchor
  - Idea: blue irregular blob/shape behind the images (no extra packages needed, pure CSS `border-radius` trick)

### Code Quality
- [ ] **Trailing whitespace in `className`** (search image)
  - The className string has an unnecessary newline inside it

### Future / Enhancements
- [ ] Add real images inside the feature cards (currently image-less)
- [ ] Hero section images could use a staggered animation on load
- [ ] Consider adding a CTA / testimonial section below the feature cards
- [ ] Mobile: hero images are hidden on small screens — consider a single centered image for mobile
