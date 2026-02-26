# Specification

## Summary
**Goal:** Replace the second image in the "Our Campus" gallery section on the homepage with a school corridor photo.

**Planned changes:**
- Edit the corridor photo (IMG_6461.png) by cropping to landscape orientation, removing phone UI chrome (status bar and browser bar) from top and bottom, and slightly enhancing brightness; save as `campus-corridor.dim_800x600.jpg`
- In `Home.tsx`, update the second image slot in the "Our Campus" gallery section to source `campus-corridor.dim_800x600.jpg` with `object-fit: cover`

**User-visible outcome:** The second card in the "Our Campus" gallery section displays the school corridor photo, consistently styled with the other gallery images.
