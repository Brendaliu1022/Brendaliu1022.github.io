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
       images    instead of a video: a list of pictures shown as a
                 gallery with thumbnails, e.g.
                 { file: "assets/cad/x.jpg", caption: "Isometric view" }
       role      optional "My role" paragraph (for team projects)
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
    {
      title: "Pneumatic autonomous rover",
      tags: ["Team project", "MAE 106", "SolidWorks", "Arduino"],
      summary: "A compass-guided rover driven by compressed air: a solenoid-fired piston turns the rear axle through a rack and pinion, and a servo steers the front wheels through an Ackermann linkage.",
      bulletsTitle: "How it works",
      bullets: [
        "Air stored in the large tire on top is released through a solenoid valve to fire a piston; a 3D-printed rack and pinion turns each stroke into rotation of the rear axle.",
        "A servo steers the front wheels through an Ackermann linkage, so both wheels follow the right turning radii in tight 90° turns. The frame is three laser-cut plywood platforms on vertical struts.",
        "Heading comes from a tilt-compensated magnetometer and accelerometer (LIS3MDL and LSM6), low-pass filtered and fed to a PD steering controller. A reed switch counts wheel turns to trigger the turns and the stop.",
        "A sweep of the proportional gain (5 values, 10 runs each) found that Kp = 0.6 gave the lowest mean heading error: 10.3°, against 32.9° at Kp = 0.2.",
      ],
      role: "Modeling and building the robot, and the Arduino automation and control code: the heading-control loop, piston timing, distance-triggered turns and stop, and the impulse-test logger whose data I fed into the course simulator.",
      images: [
        { file: "assets/cad/mae106-iso.jpg", caption: "Full assembly, isometric view" },
        { file: "assets/cad/mae106-side.jpg", caption: "Side view: air-tank tire, electronics deck and drive deck" },
        { file: "assets/cad/mae106-steering.jpg", caption: "Servo-driven Ackermann steering linkage" },
        { file: "assets/cad/mae106-propulsion.jpg", caption: "Propulsion: piston cylinder with rack and pinion on the rear axle" },
        { file: "assets/cad/mae106-drive-top.jpg", caption: "Drive deck from above: steering at the front, piston and rack at the rear" },
        { file: "assets/cad/mae106-wiring.jpg", caption: "Wiring: Arduino, magnetometer, MOSFET-switched solenoid, servo, reed switch, 12 V battery and 12 V to 6 V converter" },
        { file: "assets/cad/mae106-kp-sweep.jpg", caption: "Steering accuracy against proportional gain Kp (mean ± spread of 10 runs)" },
      ],
    },
    {
      title: "Mechanical clock movement",
      tags: ["Personal project", "SolidWorks", "Gear train", "Escapement"],
      summary: "A complete mechanical clock movement modeled and assembled in SolidWorks, from the mainspring barrel and gear train to the escapement, balance wheel and hands.",
      bulletsTitle: "What it shows",
      bullets: [
        "The mainspring barrel drives a multi-stage train of wheels and pinions, each on its own arbor, stepping the speed toward the escapement.",
        "A lever escapement (escape wheel, pallet fork with red jewel pallets, and balance wheel) releases the train one tooth at a time, which sets the rate of the clock.",
        "A winding stem and crown wind the barrel, and the motion works on the center arbor drive the hour and minute hands over the dial ring, with a small seconds hand.",
        "Every part is assembled with mates so the gear meshes and arbors line up, shown here in front, isometric, top and side views.",
      ],
      images: [
        { file: "assets/cad/clock-front.jpg", caption: "Front view: gear train, escapement, balance wheel and hands" },
        { file: "assets/cad/clock-iso.jpg", caption: "Isometric view" },
        { file: "assets/cad/clock-top.jpg", caption: "Top view: the stacked arbors and the winding stem" },
        { file: "assets/cad/clock-side.jpg", caption: "Side view: layering of the barrel, train and motion works behind the dial" },
      ],
    },
  ],
};
