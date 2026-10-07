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

  /* ---------- 2. CAD categories ------------------------------------
     The filter buttons above the CAD gallery. Only categories that are
     used by at least one project are shown. Rename or add freely. */
  cadCategories: [
    { id: "mechanisms", name: "Mechanisms & motion" },
    { id: "structures", name: "Structures" },
    { id: "machines",   name: "Machines & equipment" },
    { id: "industry",   name: "Internship parts & drawings" },
  ],

  /* ---------- 3. CAD projects --------------------------------------
     Copy one { ... }, block, paste it, and change the fields.
       title     project name
       category  one of the ids above, e.g. "mechanisms"
       role      e.g. "Individual project" or "Team of 4, I led the CAD"
       context   course or company, e.g. "MAE 151A, UC Irvine"
       date      e.g. "Fall 2025"
       summary   2–3 sentences: what it is, what you did, what you learned
       tools     short tags shown as chips
       images    list of image files; the FIRST one is the cover
       captions  optional, one caption per image (same order)
       video     "" for none, an .mp4 in assets/cad/ (under 25 MB),
                 or a YouTube link (unlisted is fine)              */
  cadProjects: [
    {
      title: "Transformable Soundwave model",
      category: "mechanisms",
      role: "Individual final project",
      context: "SolidWorks",
      date: "Fall 2024",
      summary: "A multi-part SolidWorks model of Soundwave from Transformers, built in both its robot form and its cassette-player form. I modeled the parts and assemblies, made an exploded view, and ran thermal and static stress studies on individual parts.",
      tools: ["SolidWorks", "Assemblies", "Exploded view", "Thermal study", "Static stress study"],
      images: ["assets/cad/soundwave-1.jpg", "assets/cad/soundwave-2.jpg", "assets/cad/soundwave-3.jpg", "assets/cad/soundwave-4.jpg", "assets/cad/soundwave-5.jpg"],
      captions: ["Robot form", "Exploded view of the assembly", "Cassette-player form", "Thermal study of the hand cannon", "Static stress study of a body part"],
      video: "assets/cad/soundwave.mp4",
      link: "https://drive.google.com/file/d/17twNkx_UZeD2f2tQKKyNYUqLZr97756B/view?usp=sharing",
      linkText: "Watch the full video on Google Drive",
    },

    /* To add a project, copy the block above (from { to },) and paste
       it here, then change the fields. */
  ],
};
