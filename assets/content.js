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
    { file: "assets/talk/talk-1.jpg", caption: "Presenting at the AIAA conference, Irvine, April 2026" },
    { file: "assets/talk/talk-2.jpg", caption: "" },
    { file: "assets/talk/talk-3.jpg", caption: "" },
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
    /* The CAD & Design section and its menu link stay hidden until at
       least one project is listed here. Delete the slash-star and
       star-slash around the example below, fill it in, and copy it for
       each new project.

    {
      title: "Project name",
      category: "mechanisms",
      role: "Individual project",
      context: "Course or company",
      date: "Fall 2026",
      summary: "What it is, what you did, and what you learned (2–3 sentences).",
      tools: ["SolidWorks", "Assemblies", "Motion study"],
      images: ["assets/cad/project-1.jpg", "assets/cad/project-2.jpg"],
      captions: ["Rendered assembly", "Exploded view"],
      video: "",
    },
    */
  ],
};
