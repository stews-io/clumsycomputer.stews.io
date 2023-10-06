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
  {
    itemId: 20,
    linkTitle: "Julien Verneuil",
    linkHref: "https://www.onirom.fr",
    linkAuthor: ["Julien Verneuil"],
    linkTags: ["personal"],
    secondaryLinks: [],
  },
  {
    itemId: 21,
    linkTitle: "Pen Plotter Art & Algorithms, Part 1",
    linkHref: "https://mattdesl.svbtle.com/pen-plotter-1",
    linkAuthor: ["Matt Deslauriers"],
    linkTags: ["art"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230609042623/https://mattdesl.svbtle.com/pen-plotter-1",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=28354641",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=16043159",
      },
    ],
  },
  {
    itemId: 22,
    linkTitle: "Visually stunning math concepts which are easy to explain",
    linkHref:
      "https://math.stackexchange.com/questions/733754/visually-stunning-math-concepts-which-are-easy-to-explain",
    linkAuthor: ["Others"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230711042023/https://math.stackexchange.com/questions/733754/visually-stunning-math-concepts-which-are-easy-to-explain",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=28489582",
      },
    ],
  },
  {
    itemId: 23,
    linkTitle: "Okhsv and Okhsl: Two new color spaces for color picking",
    linkHref: "https://bottosson.github.io/posts/colorpicker/",
    linkAuthor: ["Björn Ottosson"],
    linkTags: ["color"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231001054745/https://bottosson.github.io/posts/colorpicker/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=28500014",
      },
    ],
  },
  {
    itemId: 24,
    linkTitle: "Why your website should use dithered images",
    linkHref: "https://endtimes.dev/why-you-should-dither-images/",
    linkAuthor: ["Nathaniel"],
    linkTags: ["image-encoding"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230605183701/https://endtimes.dev/why-you-should-dither-images/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=28696014",
      },
    ],
  },
  {
    itemId: 25,
    linkTitle: "SSH Tunneling Explained",
    linkHref: "https://goteleport.com/blog/ssh-tunneling-explained/",
    linkAuthor: ["Sakshyam Shah"],
    linkTags: ["networking"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231002223911/https://goteleport.com/blog/ssh-tunneling-explained/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=28802493",
      },
    ],
  },
  {
    itemId: 26,
    linkTitle: "Inconvergent",
    linkHref: "https://inconvergent.net/#writing",
    linkAuthor: ["Anders Hoff"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 27,
    linkTitle: "What is AT&T doing at 1111340002?",
    linkHref:
      "https://medium.com/telecom-expert/what-is-at-t-doing-at-1111340002-c418876c212c",
    linkAuthor: ["David Allen Burgess "],
    linkTags: ["networking"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230528040433/https://scribe.rip/telecom-expert/what-is-at-t-doing-at-1111340002-c418876c212c",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=29135559",
      },
    ],
  },
  {
    itemId: 28,
    linkTitle:
      "Is there cryptographic material in a phone's SIM card that can be used with RSA encryption",
    linkHref:
      "https://security.stackexchange.com/questions/31041/is-there-cryptographic-material-in-a-phones-sim-card-that-can-be-used-with-rsa",
    linkAuthor: ["makerofthings7", "Thomas Pornin", "others"],
    linkTags: ["security"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20220502152132/https://security.stackexchange.com/questions/31041/is-there-cryptographic-material-in-a-phones-sim-card-that-can-be-used-with-rsa",
      },
    ],
  },
  {
    itemId: 29,
    linkTitle: "Trig without Tears",
    linkHref: "https://brownmath.com/twt/index.htm",
    linkAuthor: ["Stan Brown"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230727201155/https://brownmath.com/twt/index.htm",
      },
    ],
  },
  {
    itemId: 30,
    linkTitle: "Paul Bourke",
    linkHref: "https://paulbourke.net",
    linkAuthor: ["Paul Bourke"],
    linkTags: ["personal"],
    secondaryLinks: [],
  },
  {
    itemId: 31,
    linkTitle: "inconvergent/weird",
    linkHref: "https://github.com/inconvergent/weird",
    linkAuthor: ["Anders Hoff"],
    linkTags: ["repo"],
    secondaryLinks: [
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=29536703",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=28868842",
      },
    ],
  },
  {
    itemId: 32,
    linkTitle: "Color Map Advice for Scientific Visualization",
    linkHref: "https://www.kennethmoreland.com/color-advice/",
    linkAuthor: ["Kenneth Moreland"],
    linkTags: ["color"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230801074625/https://www.kennethmoreland.com/color-advice/",
      },
    ],
  },
  {
    itemId: 33,
    linkTitle: "Turbo, An Improved Rainbow Colormap for Visualization",
    linkHref:
      "https://blog.research.google/2019/08/turbo-improved-rainbow-colormap-for.html",
    linkAuthor: ["Anton Mikhailov"],
    linkTags: ["color"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230914214029/https://blog.research.google/2019/08/turbo-improved-rainbow-colormap-for.html",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=20754364",
      },
    ],
  },
  {
    itemId: 34,
    linkTitle: "Real Life",
    linkHref: "https://reallifemag.com",
    linkAuthor: ["Nathan Jurgenson", "Others"],
    linkTags: ["technology"],
    secondaryLinks: [],
  },
  {
    itemId: 35,
    linkTitle: "A Primer on Bezier Curves",
    linkHref: "https://pomax.github.io/bezierinfo/",
    linkAuthor: ["Pomax"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230919204439/https://pomax.github.io/bezierinfo/",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=14191577",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=20751074",
      },
      {
        linkLabel: "hnews (3)",
        linkHref: "https://news.ycombinator.com/item?id=30100427",
      },
      {
        linkLabel: "hnews (4)",
        linkHref: "https://news.ycombinator.com/item?id=11402656",
      },
    ],
  },
  {
    itemId: 36,
    linkTitle: "How Does Perspective Work in Pictures?",
    linkHref:
      "https://aaronhertzmann.com/2022/02/28/how-does-perspective-work.html",
    linkAuthor: ["Aaron Hertzmann"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230909023943/https://aaronhertzmann.com/2022/02/28/how-does-perspective-work.html",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=30527692",
      },
    ],
  },
  {
    itemId: 37,
    linkTitle: "Surma",
    linkHref: "https://surma.dev",
    linkAuthor: ["Surma"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 38,
    linkTitle: "Elliptic Curve Cryptography: A Basic Introduction",
    linkHref: "https://blog.boot.dev/cryptography/elliptic-curve-cryptography/",
    linkAuthor: ["Lane Wagner"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230605235915/https://blog.boot.dev/cryptography/elliptic-curve-cryptography/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31040571",
      },
    ],
  },
  {
    itemId: 39,
    linkTitle: "Exponentially Better Rotations",
    linkHref: "https://thenumbat.github.io/Exponential-Rotations/",
    linkAuthor: ["Max Slater"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230309032143/https://thenumb.at/Exponential-Rotations/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31067525",
      },
    ],
  },
  {
    itemId: 40,
    linkTitle: "What chords do you need?",
    linkHref: "https://www.jefftk.com/p/what-chords-do-you-need",
    linkAuthor: ["Jeff Kaufman"],
    linkTags: ["music"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230707064929/https://www.jefftk.com/p/what-chords-do-you-need",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31109456",
      },
    ],
  },
  {
    itemId: 41,
    linkTitle: "Math Augmentation",
    linkHref: "https://andrewhead.info/assets/pdf/augmented-formulas.pdf",
    linkAuthor: ["Andrew Head"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230323013919/https://andrewhead.info/assets/pdf/augmented-formulas.pdf",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31208556",
      },
    ],
  },
  {
    itemId: 42,
    linkTitle:
      "How I draw figures for my mathematical lecture notes using Inkscape",
    linkHref: "https://castel.dev/post/lecture-notes-2/",
    linkAuthor: ["Gilles Castel"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230919164915/https://castel.dev/post/lecture-notes-2/",
      },
    ],
  },
  {
    itemId: 43,
    linkTitle: "Color Orbs",
    linkHref: "https://www.dannyking.uk/artwork/colororbs",
    linkAuthor: ["Danny King"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31242010",
      },
    ],
  },
  {
    itemId: 44,
    linkTitle:
      "Instant Neural Graphics Primitives with a Multiresolution Hash Encoding",
    linkHref: "https://nvlabs.github.io/instant-ngp/",
    linkAuthor: [
      "Thomas Müller",
      "Alex Evans",
      "Christoph Schied",
      "Alexander Keller",
    ],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=29959700",
      },
    ],
  },
  {
    itemId: 45,
    linkTitle: "Polygon Packing",
    linkHref: "https://larswander.com/art/polygon-packing/",
    linkAuthor: ["Lars Wander"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20220521161825/https://larswander.com/art/polygon-packing/",
      },
    ],
  },
  {
    itemId: 46,
    linkTitle:
      "A new algorithm for dense ellipse packing and polygonal structures generation in context of FEM or DEM",
    linkHref:
      "https://chaire-digimu.cemef.mines-paristech.fr/wp-content/uploads/2016/11/Ilin_matecconf_numi2016_02004.pdf",
    linkAuthor: ["Dmitrii N. Ilin", "Marc Bernacki"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231005221038/https://chaire-digimu.cemef.mines-paristech.fr/wp-content/uploads/2016/11/Ilin_matecconf_numi2016_02004.pdf",
      },
    ],
  },
  {
    itemId: 47,
    linkTitle: "Off-Grid Cyberdeck with RPI and Pelican Case",
    linkHref: "https://www.doscher.com/work-recovery-kit/",
    linkAuthor: ["Jay Doscher"],
    linkTags: ["diy"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230829063620/https://www.doscher.com/work-recovery-kit/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31402558",
      },
    ],
  },
  {
    itemId: 48,
    linkTitle: "Custom made synth, audio, and retro-gaming gear",
    linkHref: "https://www.lovehulten.com",
    linkAuthor: ["Love Hultén"],
    linkTags: ["personal"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231004004023/https://www.lovehulten.com/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31403504",
      },
    ],
  },
  {
    itemId: 49,
    linkTitle: "SolveSpace - Parametric 2D/3D CAD",
    linkHref: "https://solvespace.com/index.pl",
    linkAuthor: ["Jonathan Westhues", "whitequark", "Paul Kahler"],
    linkTags: ["software"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230930101557/https://solvespace.com/index.pl",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31468017",
      },
    ],
  },
  {
    itemId: 50,
    linkTitle: "Billy Wilcosky",
    linkHref: "https://wilcosky.com",
    linkAuthor: ["Billy Wilcosky"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 51,
    linkTitle: "Visual explanations of core machine learning concepts",
    linkHref: "https://mlu-explain.github.io",
    linkAuthor: ["Jared Wilber"],
    linkTags: ["machine learning"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230925221201/https://mlu-explain.github.io/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31455919",
      },
    ],
  },
  {
    itemId: 52,
    linkTitle: "symforce-org/symforce",
    linkHref: "https://github.com/symforce-org/symforce",
    linkAuthor: ["Aaron Miller"],
    linkTags: ["repo"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31494328",
      },
    ],
  },
  {
    itemId: 53,
    linkTitle: "Magical SVG Techniques",
    linkHref:
      "https://www.smashingmagazine.com/2022/05/magical-svg-techniques/",
    linkAuthor: ["Cosima Mielke"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230915230218/https://www.smashingmagazine.com/2022/05/magical-svg-techniques/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31502186",
      },
    ],
  },
  {
    itemId: 54,
    linkTitle: "mgramin/awesome-db-tools",
    linkHref: "https://github.com/mgramin/awesome-db-tools",
    linkAuthor: ["Maksim Gramin"],
    linkTags: ["repo"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31549918",
      },
    ],
  },
  {
    itemId: 55,
    linkTitle: "deepkit/deepkit-framework",
    linkHref: "https://github.com/deepkit/deepkit-framework",
    linkAuthor: ["Marc J. Schmidt"],
    linkTags: ["repo", "typescript"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=31663298",
      },
    ],
  },
  {
    itemId: 56,
    linkTitle: "Charles Petzold",
    linkHref: "https://www.charlespetzold.com",
    linkAuthor: ["Charles Petzold"],
    linkTags: ["blog"],
    secondaryLinks: [],
  },
  {
    itemId: 57,
    linkTitle:
      "Ask HN: Is it still conceivable to remain an anonymous developer nowadays?",
    linkHref: "https://news.ycombinator.com/item?id=31763451",
    linkAuthor: ["synappser", "Others"],
    linkTags: ["discussion"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20221016185942/https://news.ycombinator.com/item?id=31763451",
      },
    ],
  },
  {
    itemId: 58,
    linkTitle: "The Animated Elliptic Curve",
    linkHref: "https://curves.xargs.org",
    linkAuthor: ["Michael Driscoll"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230909140228/https://curves.xargs.org/",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=31769059",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=36574844",
      },
    ],
  },
  {
    itemId: 59,
    linkTitle: "Mathematical Marbling",
    linkHref: "https://people.csail.mit.edu/jaffer/Marbling/",
    linkAuthor: ["Aubrey G. Jaffer"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20221106025258/https://people.csail.mit.edu/jaffer/Marbling/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32043539",
      },
    ],
  },
  {
    itemId: 60,
    linkTitle: "aweijnitz/recipe-el_fuego_viviente",
    linkHref: "https://github.com/aweijnitz/recipe-el_fuego_viviente",
    linkAuthor: ["Anders Weijnitz"],
    linkTags: ["repo", "cooking"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20220715134235/https://github.com/aweijnitz/recipe-el_fuego_viviente/blob/master/README.md",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32079434",
      },
    ],
  },
  {
    itemId: 61,
    linkTitle: "Integer Math in Javascript",
    linkHref: "https://james.darpinian.com/blog/integer-math-in-javascript",
    linkAuthor: ["James Darpinian"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230610182748/https://james.darpinian.com/blog/integer-math-in-javascript",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32106442",
      },
    ],
  },
  {
    itemId: 62,
    linkTitle: "Differentiable programming from scratch",
    linkHref: "https://thenumb.at/Autodiff/",
    linkAuthor: ["Max Slater"],
    linkTags: ["math"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230604182605/https://thenumb.at/Autodiff/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32300351",
      },
    ],
  },
  {
    itemId: 63,
    linkTitle: "The Illustrated TLS 1.3 Connection",
    linkHref: "https://tls13.xargs.org",
    linkAuthor: ["Michael Driscoll"],
    linkTags: ["networking"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231001234909/https://tls13.xargs.org/",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=18400158",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=32333115",
      },
    ],
  },
  {
    itemId: 64,
    linkTitle: "Stack-safety for free?",
    linkHref: "https://hurryabit.github.io/blog/stack-safety-for-free/",
    linkAuthor: ["Martin Huschenbett"],
    linkTags: ["computation"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20220527180733/https://hurryabit.github.io/blog/stack-safety-for-free/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=29459432",
      },
    ],
  },
  {
    itemId: 65,
    linkTitle: " Computer Graphics from Scratch",
    linkHref: "https://gabrielgambetta.com/computer-graphics-from-scratch/",
    linkAuthor: ["Gabriel Gambetta"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20231005191227/https://gabrielgambetta.com/computer-graphics-from-scratch/",
      },
      {
        linkLabel: "hnews (1)",
        linkHref: "https://news.ycombinator.com/item?id=26017086",
      },
      {
        linkLabel: "hnews (2)",
        linkHref: "https://news.ycombinator.com/item?id=19584921",
      },
      {
        linkLabel: "hnews (3)",
        linkHref: "https://news.ycombinator.com/item?id=25266812",
      },
    ],
  },
  {
    itemId: 66,
    linkTitle: "Vector graphics on GPU",
    linkHref: "https://gasiulis.name/vector-graphics-on-gpu/",
    linkAuthor: ["Aurimas Gasiulis"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230415163406/https://gasiulis.name/vector-graphics-on-gpu/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32384016",
      },
    ],
  },
  {
    itemId: 67,
    linkTitle: "Ultimate list of Japanese Vegetable Cutting Techniques",
    linkHref: "https://thechefdojo.com/japanese-vegetable-cutting-techniques/",
    linkAuthor: ["Chef Goku"],
    linkTags: ["cooking"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230603052924/https://thechefdojo.com/japanese-vegetable-cutting-techniques/",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32448687",
      },
    ],
  },
  {
    itemId: 68,
    linkTitle: "Deconstructing Bezier Curves",
    linkHref:
      "https://blog.pkh.me/p/33-deconstructing-be%CC%81zier-curves.html",
    linkAuthor: ["Clément Bœsch"],
    linkTags: ["graphics"],
    secondaryLinks: [
      {
        linkLabel: "archive",
        linkHref:
          "https://web.archive.org/web/20230928002315/http://blog.pkh.me/p/33-deconstructing-be%CC%81zier-curves.html",
      },
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32479808",
      },
    ],
  },
  {
    itemId: 69,
    linkTitle: "Learn MYOG",
    linkHref: "https://learnmyog.com",
    linkAuthor: ["Tim@MYOG"],
    linkTags: ["diy"],
    secondaryLinks: [
      {
        linkLabel: "hnews",
        linkHref: "https://news.ycombinator.com/item?id=32507843",
      },
    ],
  },
];

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
