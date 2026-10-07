/* =====================================================================
   SITE CONTENT — the only file you need to edit to add photos, CAD
   projects and videos. Edit it on GitHub with the pencil icon.

   Rules (very important):
   • Every line inside { } ends with a comma, except it is fine to keep
     a comma after the last one too.
   • Text goes inside straight quotes: "like this". If your text needs a
     quote mark inside it, use ’ (curly) instead of ' or ".
   • File paths are case-sensitive: "assets/cad/Tower-1.JPG" is NOT the
     same as "assets/cad/tower-1.jpg". Use lowercase names, no spaces.
   • If a listed image file does not exist yet, the site simply hides it.
   ===================================================================== */

window.SITE = {

  /* ---------- 1. AIAA talk photos ----------------------------------
     Upload photos to assets/talk/ and list them here. They appear in
     the Talk entry, before the two research figures. */
  talkPhotos: [
    { file: "assets/talk/talk-1.jpg", caption: "Presenting the closed-loop results at the AIAA conference, Irvine, April 2026" },
  ],

  /* ---------- 2. CAD & Design projects ---------------------------
     Shown as a slider: video on the left, text on the right.
       title     project name
       tags      bullet-point labels, e.g. ["Team project", "MAE 183"]
       summary   one or two sentences: what it is
       bulletsTitle  heading above the bullets, e.g. "How it works"
       bullets   3–4 short points: mechanism, dynamics or core value
       video     an .mp4 in assets/cad/ (put a .webm with the same name
                 next to it); poster = still image shown before playing
       link / linkText   optional external link (e.g. Google Drive)   */
  cadProjects: [
    {
      title: "Jellyfish walking robot",
      tags: ["Team project", "MAE 183", "SolidWorks", "Linkage design"],
      summary: "A jellyfish-shaped walking robot whose legs are driven by a single motor through crank linkages, modeled and animated in SolidWorks.",
      bulletsTitle: "How it walks",
      bullets: [
        "Each leg is a one-degree-of-freedom planar linkage: a rotating crank drives a coupler and rocker links that end in a triangular foot link.",
        "One crank turn traces a closed foot path: a low, flat stance stroke that pushes the body forward, then a raised swing stroke that brings the foot back.",
        "The cranks are phase-shifted so that some feet are always on the ground, which keeps the body supported and moving steadily.",
        "One motor drives every crank through a spur-gear stage, so the gait comes from the linkage geometry rather than from per-leg actuators or control.",
      ],
      video: "assets/cad/jellyfish-walker.mp4",
      poster: "assets/cad/jellyfish-walker-poster.jpg",
    },
    {
      title: "Transformable Soundwave model",
      tags: ["Individual project", "MAE 52", "SolidWorks", "Fall 2024"],
      summary: "A multi-part SolidWorks model of Soundwave from Transformers, built in both its robot form and its cassette-player form.",
      bulletsTitle: "What it shows",
      bullets: [
        "Modeled every part and assembled the full robot with mates, plus an exploded view of the assembly.",
        "Built the cassette-player form as a second assembly from the same parts.",
        "Ran thermal and static stress studies on individual parts in SolidWorks Simulation.",
      ],
      video: "assets/cad/soundwave.mp4",
      poster: "assets/cad/soundwave-poster.jpg",
      link: "https://drive.google.com/file/d/17twNkx_UZeD2f2tQKKyNYUqLZr97756B/view?usp=sharing",
      linkText: "Watch on Google Drive",
    },
  ],
};
