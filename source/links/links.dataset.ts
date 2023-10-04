import { SegmentDataset } from "stew/config";
import { LinkItem } from "./LinkItem.ts";

export const linksDataset: SegmentDataset<LinkItem> = [
  {
    itemId: 0,
    linkTitle: "The Euclidean Algorithm Generates Traditional Musical Rhythms",
    linkHref: "http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf",
    linkAuthor: ["Godfried Toussaint"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230821125813/http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf",
      },
    ],
  },
  {
    itemId: 1,
    linkTitle: "Circles, Sines, and Signals",
    linkHref: "https://jackschaedler.github.io/circles-sines-signals/",
    linkAuthor: ["Jack Schaedler"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=9131706",
      },
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230906094100/https://jackschaedler.github.io/circles-sines-signals/",
      },
    ],
  },
  {
    itemId: 2,
    linkTitle: "A Visual, Intuitive Guide to Imaginary Numbers",
    linkHref:
      "https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/",
    linkAuthor: ["Kalid Azad"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230719081254/https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=17722790",
      },
    ],
  },
  {
    itemId: 3,
    linkTitle: "An Intuitive Guide to Linear Algebra",
    linkHref: "https://betterexplained.com/articles/linear-algebra-guide/",
    linkAuthor: ["Kalid Azad"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230926083923/https://betterexplained.com/articles/linear-algebra-guide/",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=22416319",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=30866244",
      },
    ],
  },
  {
    itemId: 4,
    linkTitle: "Immersive Linear Algebra",
    linkHref: "https://immersivemath.com/ila/index.html",
    linkAuthor: ["Jacob Ström", "Kalle Åström", "Tomas Akenine-Möller"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230909064031/http://immersivemath.com/ila/index.html",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=19264048",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=13904881",
      },
      {
        linkLabel: "hnews (3)",
        linkHref: "https://news.ycombinator.com/item?id=10183725",
      },
    ],
  },
  {
    itemId: 5,
    linkTitle: "Concurrency Glossary",
    linkHref: "https://slikts.github.io/concurrency-glossary",
    linkAuthor: ["Reinis Ivanovs"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=18502488",
      },
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230525124402/https://slikts.github.io/concurrency-glossary/",
      },
    ],
  },
  {
    itemId: 6,
    linkTitle: "Bartosz Ciechanowski",
    linkHref: "https://ciechanow.ski",
    linkAuthor: ["Bartosz Ciechanowski"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 7,
    linkTitle: "Julia Evans",
    linkHref: "https://jvns.ca",
    linkAuthor: ["Julia Evans"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 8,
    linkTitle: "Floating Point Visually Explained",
    linkHref: "https://fabiensanglard.net/floating_point_visually_explained",
    linkAuthor: ["Fabien Sanglard"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230917160850/https://fabiensanglard.net/floating_point_visually_explained/",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=15359574",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=23081924",
      },
      {
        linkLabel: "hnews (3)",
        linkHref: "https://news.ycombinator.com/item?id=29368529",
      },
    ],
  },
  {
    itemId: 9,
    linkTitle: "Float Exposed",
    linkHref: "https://float.exposed",
    linkAuthor: ["Bartosz Ciechanowski"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230922004644/https://float.exposed/0x44bf9400",
      },
    ],
  },
  {
    itemId: 10,
    linkTitle: "Exposing Floating Point",
    linkHref: "https://ciechanow.ski/exposing-floating-point/",
    linkAuthor: ["Bartosz Ciechanowski"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230912065316/https://ciechanow.ski/exposing-floating-point/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=36484932",
      },
    ],
  },
  {
    itemId: 11,
    linkTitle: "Vitalik Buterin",
    linkHref: "https://vitalik.ca",
    linkAuthor: ["Vitalik Buterin"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 12,
    linkTitle: "Jamie Tanna",
    linkHref: "https://www.jvt.me",
    linkAuthor: ["Jamie Tanna"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 13,
    linkTitle: "Bits About Money",
    linkHref: "https://www.bitsaboutmoney.com/archive/",
    linkAuthor: ["Patrick McKenzie"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 14,
    linkTitle:
      "What are effective and secure ways of shuffling a deck of cards in a contract?",
    linkHref: "https://ethereum.stackexchange.com/questions/376",
    linkAuthor: ["eth", "Tjaden Hess", "Others"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231003214740/https://ethereum.stackexchange.com/questions/376/what-are-effective-and-secure-ways-of-shuffling-a-deck-of-cards-in-a-contract",
      },
    ],
  },
  {
    itemId: 15,
    linkTitle: "An Intensive Introduction to Cryptography",
    linkHref: "https://intensecrypto.org",
    linkAuthor: ["Boaz Barak"],
    linkTags: ["math", "computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230626070456/https://intensecrypto.org/public/index.html",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=17896692",
      },
    ],
  },
  {
    itemId: 16,
    linkTitle: "Things to remember when compiling/linking C/C++ software",
    linkHref: "https://gist.github.com/gubatron/32f82053596c24b6bec6",
    linkAuthor: ["Angel Leon"],
    linkTags: ["dev-ops"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230925055805/https://gist.github.com/gubatron/32f82053596c24b6bec6",
      },
    ],
  },
  {
    itemId: 17,
    linkTitle: "What's the difference between 127.0.0.1 and 0.0.0.0?",
    linkHref:
      "https://superuser.com/questions/949428/whats-the-difference-between-127-0-0-1-and-0-0-0-0",
    linkAuthor: ["Sagnik Sarkar", "David Postill", "Others"],
    linkTags: ["networking"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230715103726/https://superuser.com/questions/949428/whats-the-difference-between-127-0-0-1-and-0-0-0-0",
      },
    ],
  },
  {
    itemId: 18,
    linkTitle: "Understanding Rate Control Modes",
    linkHref: "https://slhck.info/video/2017/03/01/rate-control.html",
    linkAuthor: ["Werner Robitza"],
    linkTags: ["video-encoding"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230929102248/https://slhck.info/video/2017/03/01/rate-control.html",
      },
    ],
  },
  {
    itemId: 19,
    linkTitle: "Eggs Curves and Ovals",
    linkHref: "https://www.mathematische-basteleien.de/eggcurves.htm",
    linkAuthor: ["Jürgen Köller"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230603022124/http://mathematische-basteleien.de/eggcurves.htm",
      },
    ],
  },
];

// Julien Verneuil
// https://www.onirom.fr

// Pen Plotter Art & Algorithms, Part 1
// https://mattdesl.svbtle.com/pen-plotter-1

// Visually stunning math concepts which are easy to explain
// https://math.stackexchange.com/questions/733754/visually-stunning-math-concepts-which-are-easy-to-explain

// Okhsv and Okhsl: Two new color spaces for color picking
// https://bottosson.github.io/posts/colorpicker/

// Why your website should use dithered images
// https://endtimes.dev/why-you-should-dither-images/

// SSH Tunneling Explained
// https://goteleport.com/blog/ssh-tunneling-explained/

// inconvergent
// https://inconvergent.net/#writing

// What is AT&T doing at 1111340002?
// https://web.archive.org/web/20230528040433/https://scribe.rip/telecom-expert/what-is-at-t-doing-at-1111340002-c418876c212c

// Is there cryptographic material in a phone's SIM card that can be used with RSA encryption
// https://security.stackexchange.com/questions/31041/is-there-cryptographic-material-in-a-phones-sim-card-that-can-be-used-with-rsa

// Trig without Tears
// https://brownmath.com/twt/index.htm

// Paul Bourke
// https://paulbourke.net

// inconvergent/weird
// https://github.com/inconvergent/weird

// Color Map Advice for Scientific Visualization
// https://www.kennethmoreland.com/color-advice/

// Turbo, An Improved Rainbow Colormap for Visualization
// https://blog.research.google/2019/08/turbo-improved-rainbow-colormap-for.html?m=1

// Real Life
// reallifemag.com

// A Primer on Bezier Curves
// https://pomax.github.io/bezierinfo/

// How Does Perspective Work in Pictures?
// https://aaronhertzmann.com/2022/02/28/how-does-perspective-work.html

// Surma
// surma.dev

// Elliptic Curve Cryptography: A Basic Introduction
// https://blog.boot.dev/cryptography/elliptic-curve-cryptography/
// https://news.ycombinator.com/item?id=31040571

// Exponentially Better Rotations
// https://thenumbat.github.io/Exponential-Rotations/
// https://news.ycombinator.com/item?id=31067525

// What chords do you need?
// https://www.jefftk.com/p/what-chords-do-you-need
// https://news.ycombinator.com/item?id=31109456

// Math Augmentation
// https://andrewhead.info/assets/pdf/augmented-formulas.pdf
// https://news.ycombinator.com/item?id=31208556

// How I draw figures for my mathematical lecture notes using Inkscape
// https://castel.dev/post/lecture-notes-2/

// Color Orbs
// https://www.dannyking.uk/artwork/colororbs
// https://news.ycombinator.com/item?id=31242010

// Instant Neural Graphics Primitives with a Multiresolution Hash Encoding
// https://news.ycombinator.com/item?id=29959700
// https://nvlabs.github.io/instant-ngp/

// Polygon Packing
// https://larswander.com/art/polygon-packing/

// A new algorithm for dense ellipse packing and polygonal structures generation in context of FEM or DEM
// https://chaire-digimu.cemef.mines-paristech.fr/wp-content/uploads/2016/11/Ilin_matecconf_numi2016_02004.pdf

// Off-Grid Cyberdeck with RPI and Pelican Case
// https://www.doscher.com/work-recovery-kit/
// https://news.ycombinator.com/item?id=31402558

// Custom made synth, audio, and retro-gaming gear
// https://www.lovehulten.com
// https://news.ycombinator.com/item?id=31403504

// SolveSpace - Parametric 2D/3D CAD
// https://solvespace.com/index.pl
// https://news.ycombinator.com/item?id=31468017

// Billy Wilcosky
// wilcosky.com

// Visual explanations of core machine learning concepts
// https://mlu-explain.github.io
// https://news.ycombinator.com/item?id=31455919

// SymForce
// https://news.ycombinator.com/item?id=31494328
// https://github.com/symforce-org/symforce

// Magical SVG Techniques
// https://www.smashingmagazine.com/2022/05/magical-svg-techniques/
// https://news.ycombinator.com/item?id=31502186

// mgramin/awesome-db-tools
// https://github.com/mgramin/awesome-db-tools
// https://news.ycombinator.com/item?id=31549918

// Deepkit
// https://deepkit.io
// https://news.ycombinator.com/item?id=31663298

// Charles Petzold
// https://www.charlespetzold.com

// Ask HN: Is it still conceivable to remain an anonymous developer nowadays?
// https://news.ycombinator.com/item?id=31763451

// The Animated Elliptic Curve
// https://curves.xargs.org
// https://news.ycombinator.com/item?id=31769059
// https://news.ycombinator.com/item?id=36574844

// Mathematical Marbling
// https://people.csail.mit.edu/jaffer/Marbling/
// https://news.ycombinator.com/item?id=32043539

// aweijnitz/recipe-el_fuego_viviente
// https://github.com/aweijnitz/recipe-el_fuego_viviente
// https://news.ycombinator.com/item?id=32079434

// Integer Math in Javascript
// https://james.darpinian.com/blog/integer-math-in-javascript
// https://news.ycombinator.com/item?id=32106442

// Differentiable programming from scratch
// https://thenumb.at/Autodiff/
// https://news.ycombinator.com/item?id=32300351

// The Illustrated TLS 1.3 Connection
// https://tls13.xargs.org
// https://news.ycombinator.com/item?id=18400158
// https://news.ycombinator.com/item?id=32333115

// Stack-safety for free?
// https://hurryabit.github.io/blog/stack-safety-for-free/
// https://news.ycombinator.com/item?id=29459432

// Computer Graphics from Scratch
// https://gabrielgambetta.com/computer-graphics-from-scratch/
// https://news.ycombinator.com/item?id=26017086
// https://news.ycombinator.com/item?id=19584921
// https://news.ycombinator.com/item?id=25266812

// Vector graphics on GPU
// https://gasiulis.name/vector-graphics-on-gpu/
// https://news.ycombinator.com/item?id=32384016

// Ultimate list of Japanese Vegetable Cutting Techniques
// https://thechefdojo.com/japanese-vegetable-cutting-techniques/
// https://news.ycombinator.com/item?id=32448687

// Deconstructing Bezier Curves
// http://blog.pkh.me/p/33-deconstructing-bézier-curves.html
// https://news.ycombinator.com/item?id=32479808

// Learn MYOG (Make Your Own Outdoor Gear)
// https://learnmyog.com
// https://news.ycombinator.com/item?id=32507843

// I built a vector map from scratch
// https://ckochis.com/building-a-vector-map-from-scratch
// https://news.ycombinator.com/item?id=32510759

// Why are D-sharp and E-flat considered to be two different notes?
// https://www.ethanhein.com/wp/2022/why-are-d-sharp-and-e-flat-considered-to-be-two-different-notes/
// https://news.ycombinator.com/item?id=32626218

// Physically-Based Shading at Disney
// https://static1.squarespace.com/static/58586fa5ebbd1a60e7d76d3e/t/593a3afa46c3c4a376d779f6/1496988449807/s2012_pbs_disney_brdf_notes_v2.pdf
// https://news.ycombinator.com/item?id=32720893

// Parallel Curves of Cubic Béziers
// https://raphlinus.github.io/curves/2022/09/09/parallel-beziers.html
// https://news.ycombinator.com/item?id=32784491

// Exploring FPGA Graphics
// https://projectf.io/posts/fpga-graphics/
// https://news.ycombinator.com/item?id=32807903
// https://news.ycombinator.com/item?id=25998154

// ianthehenry/bauble.studio
// https://github.com/ianthehenry/bauble.studio
// https://news.ycombinator.com/item?id=32809428

// An Algorithm for Polygon Intersections
// https://www.gorillasun.de/blog/an-algorithm-for-polygon-intersections/
// https://news.ycombinator.com/item?id=33053320

// The Fundamentals of Control Theory
// https://engineeringmedia.com/books
// https://news.ycombinator.com/item?id=33071119

// On AlphaTensor's new matrix multiplication algorithms
// https://fgiesen.wordpress.com/2022/10/06/on-alphatensors-new-matrix-multiplication-algorithms/
// https://news.ycombinator.com/item?id=33117192

// Expanding the Madelbrot Set into Higher Dimensions
// https://archive.bridgesmathart.org/2010/bridges2010-247.pdf
// https://news.ycombinator.com/item?id=33104980

// Lánczos Interpolation Explained
// https://mazzo.li/posts/lanczos.html

// Algebraic Geometry for Computer Graphics
// https://courses.cs.washington.edu/courses/cse590b/13au/
// https://news.ycombinator.com/item?id=33133369

// Why 23.976 and not 24 FPS?
// https://cinematography.com/index.php?/forums/topic/71346-why-23976-and-not-24-fps/&tab=comments#comment-455454
// https://news.ycombinator.com/item?id=33145470

// Seven sins of numerical linear algebra
// https://nhigham.com/2022/10/11/seven-sins-of-numerical-linear-algebra/
// https://news.ycombinator.com/item?id=33173443

// Introduction to math for game developers
// https://docs.godotengine.org/en/stable/tutorials/math/vector_math.html
// https://news.ycombinator.com/item?id=36637964

// What do numbers look like?
// https://johnhw.github.io/umap_primes/index.md.html
// https://news.ycombinator.com/item?id=33580136

// Spurious Splines
// https://inconvergent.net/2016/spurious-splines/
// https://news.ycombinator.com/item?id=13109225

// Demystifying Fourier analysis
// https://dsego.github.io/demystifying-fourier/
// https://news.ycombinator.com/item?id=33636639

// The 12-bit rainbow palette
// https://news.ycombinator.com/item?id=33651724
// https://iamkate.com/data/12-bit-rainbow/

// Run unsafe user generated JavaScript in the browser
// https://workerbox.net
// https://news.ycombinator.com/item?id=33673047

// Coloring for Colorblindness
// https://davidmathlogic.com/colorblind/
