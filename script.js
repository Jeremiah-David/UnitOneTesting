let results = {
  foundElements: [],
  testsFailed: [],
};

let expand = true;

let rubricPoints = 0;

let bioPage = [
  {
    elements: ["h1", "h2", "h3", "h4", "h5", "h6"],
    passesNeeded: 2,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["p a"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["p"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["hr"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["b", "strong", "i", "em", "mark", "small", "sub", "sup"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["img"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: ["src"],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["ol"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["ul"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
];

let fosterPet = [
  {
    elements: ["table"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["thead"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },

  {
    elements: ["td"],
    passesNeeded: 12,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["form"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["form input:not([type='submit'])"],
    passesNeeded: 10,
    rubricPoints: 1,
    attributes: ["type"],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["form label"],
    passesNeeded: 9,
    rubricPoints: 1,
    attributes: ["for"],
    styles: [],
    levelUp: false,
  },
  {
    elements: ["img"],
    passesNeeded: 4,
    rubricPoints: 1,
    attributes: ["src"],
    styles: [],
    levelUp: true,
    levelUpFeedback: `Level Up Detected \n 4 additional <img>s found`,
  },
  {
    elements: ["th"],
    passesNeeded: 4,
    rubricPoints: 1,
    attributes: ["scope"],
    styles: [],
    levelUp: true,
    levelUpFeedback: `Level Up Detected \n At least 4 <th> have scope attribute`,
  },
  {
    elements: ["img"],
    passesNeeded: 4,
    rubricPoints: 1,
    attributes: ["alt||aria-labelledby"],
    styles: [],
    levelUp: true,
    levelUpFeedback: `Level Up Detected \n All <imgs> have alt or aria-labelledby for screen reader accessabilty`,
  },
];

let fransFlowers = [
  {
    elements: ["body"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["color", "rgb(65, 105, 225)", "!"],
      ["background-color", "rgb(255, 228, 196)", "!"],
      ["font-family", "Comic Sans MS", "!"],
    ],
    levelUp: false,
  },
  {
    elements: ["header"],
    passesNeeded: [1],
    rubricPoints: [1],
    attributes: [],
    styles: [
      ["color", "rgb(247, 86, 124)"],
      ["font-family", "Dancing Script"],
      ["font-size", "36px"],
    ],
    levelUp: false,
  },
  {
    elements: ["hr"],
    passesNeeded: [1],
    rubricPoints: [1],
    attributes: [],
    styles: [
      ["overflow", "visible"],
      ["padding", "0"],
      ["text-align", "center"],
    ],
    levelUp: false,
  },
  {
    elements: ["h2"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["font-family", "Abril Fatface"],
      ["letter-spacing", "3px"],
    ],
    levelUp: false,
  },
  {
    elements: ["#donation"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["color", "rgb(247, 86, 124)"]],
    levelUp: false,
  },
  {
    elements: ["h5"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["text-decoration", "line-through"]],
    levelUp: false,
  },
  {
    elements: ["address"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["font-weight", "700"]],
    levelUp: false,
  },
];

let carpetCleaner = [
  {
    elements: ["body"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["margin", "0"]],
    levelUp: false,
  },
  {
    elements: ["header"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["height", "100px"]],
    levelUp: false,
  },
  {
    elements: ["img"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["position", "absolute"],
      ["top", "20px"],
      ["left", "20px"],
    ],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".nav ul"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["list-style", "none"],
      ["margin", "0"],
      ["padding", "20px 0px 0px"],
      ["text-align", "center"],
    ],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".nav li"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["display", "inline-block"],
      ["padding", "20px"],
      ["margin", "0px 10px"],
    ],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["section"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["width", "840px"]],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".section-box"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["display", "inline-block"],
      ["width", "400px"],
      ["height", "200px"],
      ["vertical-align", "top"],
      ["box-sizing", "border-box"],
    ],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#quote-offer-container"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["margin-right", "40px"]],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#quote-form-container"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [
      ["padding", "20px"],
      ["margin-top", "30px"],
      ["height", "200px"],
    ],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".form-field"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["margin-bottom", "15px"]],
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#quote-form"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    styles: [["text-align", "center"]],
    levelUp: false,
    levelUpFeedback: [],
  },
];

let portfolio = [
  // **********Hero Section************
  {
    elements: ["#hero-section", "#hero-section *"],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["background-attachment", "fixed"]],
    lookingFor: `creates a parallax effect when scrolling the page.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#hero-section img"],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [
      ["borderEndEndRadius", "0px", "!"],
      ["borderBlockWidth", "0", "!"],
    ],
    lookingFor: `Should include a centered, circular headshot image with a border.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [
      "#hero-section h1",
      "#hero-section h2",
      "#hero-section h3",
      "#hero-section h4",
      "#hero-section h5",
      "#hero-section h6",
    ],
    passesNeeded: 2,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should include a centered <h1> with your name. Should include a centered tagline.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  // *********Navabar************
  {
    elements: ["nav"],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["position", "fixed"]],
    lookingFor: `Should be fixed to the top of the page.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".navbar-toggler"],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["display", "none"]],
    lookingFor: `Should collapse with a “hamburger” button at small screen resolutions. `,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["nav img", "nav i"],
    passesNeeded: 1,
    rubricPoints: 1,
    lookingFor: `Should collapse with a “hamburger” button at small screen resolutions. `,
    levelUp: false,
    levelUpFeedback: [],
  },
  // ******Inspiration*****
  {
    elements: [
      "#inspiration-section h1",
      "#inspiration-section h2",
      "#inspiration-section h3",
    ],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should contain a centered heading.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#inspiration-section div"],
    passesNeeded: 1,
    rubricPoints: 1,
    classes: "carousel",
    lookingFor: `Should contain a Bootstrap carousel component`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".carousel-control-prev"],
    passesNeeded: 1,
    rubricPoints: 1,
    attributes: [],
    lookingFor: `The carousel should have controls. `,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".carousel-caption"],
    passesNeeded: 3,
    rubricPoints: 1,
    lookingFor: `The carousel should captions.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".carousel-indicators"],
    passesNeeded: 1,
    rubricPoints: 1,
    lookingFor: `The carousel should have indicators.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".carousel-item img"],
    passesNeeded: 3,
    rubricPoints: 1,
    lookingFor: `Each carousel item should have a photo of someone who inspires you.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".carousel-caption h5"],
    passesNeeded: 3,
    rubricPoints: 1,
    lookingFor: `Each carousel item should have  caption containing a quote.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: [".carousel-caption p"],
    passesNeeded: 3,
    rubricPoints: 1,
    lookingFor: `Each carousel item should have a attribution.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  // *****Mission Section*****
  {
    elements: [
      "#mission-section h1",
      "#mission-section h2",
      "#mission-section h3",
    ],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should contain a centered heading.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#mission-section *", "#mission-section"],
    passesNeeded: 1,
    rubricPoints: 1,
    classes: "row",
    lookingFor: `Looking for a div element with the "row" class name.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#mission-section img"],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should contain an image.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#mission-section p"],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should contain a paragraph of text.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#mission-section row *, #mission-section.row *"],
    passesNeeded: 2,
    rubricPoints: 1,
    classes: "col-md-6",
    lookingFor: `Image and text should be displayed in two columns on medium screen sizes and above.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  // *****Skill Section*****
  {
    elements: [
      "#skill-section h1",
      "#skill-section h2",
      "#skill-section h3",
      "#skill-section h4",
      "#skill-section h5",
      "#skill-section h6",
    ],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should contain a centered heading.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#skill-section img", "#skill-section i"],
    passesNeeded: 4,
    rubricPoints: 1,
    lookingFor: `Should include 4 skills. Each skill should have an image `,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#skill-section p"],
    passesNeeded: 4,
    rubricPoints: 1,
    lookingFor: `Should include 4 skills with some text underneath.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#skill-section", "#skill-section *"],
    passesNeeded: 1,
    rubricPoints: 1,
    classes: "row",
    lookingFor: `Looking for a div element with the "row" class name.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#skill-section.row div", "#skill-section .row div"],
    passesNeeded: 4,
    rubricPoints: 1,
    classes: "col-md-6",
    lookingFor: `Skills should be displayed as four columns (one row) on large-sized screens, two columns (two rows) on medium-sized screens, and a single column (four rows) on smaller screens.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#skill-section.row div", "#skill-section .row div"],
    passesNeeded: 4,
    rubricPoints: 1,
    classes: "col-lg-3",
    lookingFor: `Skills should be displayed as four columns (one row) on large-sized screens, two columns (two rows) on medium-sized screens, and a single column (four rows) on smaller screens.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  // ****Contact Section****
  {
    elements: [
      "#contact-section h1",
      "#contact-section h2",
      "#contact-section h3",
      "#contact-section h4",
      "#contact-section h5",
      "#contact-section h6",
    ],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Should contain a centered heading.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#contact-section i"],
    passesNeeded: 3,
    rubricPoints: 1,
    lookingFor: `Should contain three or more social icons.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  {
    elements: ["#contact-section .row *", "#contact-section.row *"],
    passesNeeded: 3,
    rubricPoints: 1,
    classes: "col-md-4",
    lookingFor: `Icons should be displayed as three columns on medium screen sizes and above and collapse into rows at small screen sizes.`,
    levelUp: false,
    levelUpFeedback: [],
  },
  // ***Footer Section***
  {
    elements: [
      "#footer-section h1",
      "#footer-section h2",
      "#footer-section h3",
      "#footer-section h4",
      "#footer-section h5",
      "#footer-section h6",
      "#footer-section p",
    ],
    passesNeeded: 1,
    rubricPoints: 1,
    styles: [["textAlign", "center"]],
    lookingFor: `Text content should be horizontally centered.`,
    levelUp: false,
    levelUpFeedback: [],
  },
];

// // RUBRIC KEYS
//     elements:
//     passesNeeded:
//     rubricPoints:
//     attributes:
//     styles:
//     levelUp:
//     levelUpFeedback:
let milestone = null;
let meta = document.getElementsByTagName("meta");
for (let i = 0; i < meta.length; i++) {
  if (meta[i].name === "milestone") {
    switch (meta[i].content) {
      case "Foster-Pet":
        milestone = fosterPet;
        break;
      case "Bio-Page":
        milestone = bioPage;
        break;
      case "Frans-Flowers":
        milestone = fransFlowers;
        break;
      case "Carpet-Cleaner":
        milestone = carpetCleaner;
        break;
      case "Portfolio":
        milestone = portfolio;
        break;
      default:
        milestone = bioPage;
    }
  }
}

selfClosingTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
  "i",
];
function didArrayPassRubric(resultsArray, elementsNeededToPassRubric) {
  for (let i = 0; i < resultsArray.length; i++) {
    if (resultsArray[i].length >= elementsNeededToPassRubric[i].passesNeeded) {
      let pointsEarned = parseInt(milestone[i].rubricPoints);
      rubricPoints += pointsEarned;
      if (milestone[i].levelUp) {
        console.log(`${milestone[i].levelUpFeedback}`);
      }
    } else if (!milestone[i].levelUp) {
      if (elementsNeededToPassRubric[i].lookingFor !== undefined) {
        results.testsFailed.push(
          `The element ${elementsNeededToPassRubric[i].elements} did not pass our test`
        );
        results.testsFailed.push(
          `We tested for ${elementsNeededToPassRubric[i].lookingFor}`
        );
      } else {
        results.testsFailed.push(
          `The element ${elementsNeededToPassRubric[i].elements} did not pass our test.`
        );
      }
    }
  }
}

function doesElementClose(element) {
  if (element === "body") {
    return true;
  }
  htmlOfElement = document.querySelector(element);
  let serializer = new XMLSerializer();
  if (htmlOfElement !== null) {
    htmlOfElement = serializer.serializeToString(htmlOfElement);
  }
  if (element.indexOf(" ") !== -1) {
    element = element.slice(element.indexOf(" ") + 1);
  }
  if (selfClosingTags.includes(element)) {
    return true;
  }
  if (!htmlOfElement.includes(`<script`)) {
    return true;
  } else {
    return false;
  }
}

function doesElementHaveContent(element) {
  if (element === "body") {
    return true;
  }
  if (element.indexOf(" ") !== -1) {
    element = element.slice(element.indexOf(" ") + 1);
  }
  if (element.indexOf(":") !== -1) {
    element = element.slice(0, element.indexOf(":"));
  }
  if (selfClosingTags.includes(element)) {
    return true;
  }
  element = document.querySelector(element).innerHTML;
  const characters = /\w+/;
  if (characters.test(element)) {
    return true;
  }
  return false;
}

function checkAttribute(iteration, element, rubric) {
  k = iteration;
  elementForFeedBack = element;
  if (rubric.attributes === undefined) {
    return true;
  }
  HTMLelement = document.querySelectorAll(element);
  for (let j = 0; j < rubric.attributes.length; j++) {
    if (rubric.attributes[j].indexOf("||") !== -1) {
      let attributes = attributes[j].split("||");
      for (let i = 0; i < attributes.length; i++) {
        if (HTMLelement[k].hasAttribute(attributes[i]) == true) {
          return true;
        }
      }
      return false;
    }
    if (HTMLelement[k].hasAttribute(rubric.attributes[j]) == false) {
      if (rubric.levelUp == false) {
        return false;
      }
    }
  }
  return true;
}

function checkElementsStyles(iteration, element, rubric) {
  k = iteration;
  HTMLelement = document.querySelectorAll(element);
  if (rubric.styles === undefined) {
    return true;
  }
  for (let j = 0; j < rubric.styles.length; j++) {
    let computedStyles = getComputedStyle(HTMLelement[k]);
    let stylePropertyToTest = rubric.styles[j][0];
    if (rubric.styles[j][2] === "!") {
      if (computedStyles[stylePropertyToTest].includes(rubric.styles[j][1])) {
        return false;
      }
    } else {
      if (!computedStyles[stylePropertyToTest].includes(rubric.styles[j][1])) {
        return false;
      }
    }
  }
  return true;
}

function checkElementsClasses(iteration, element, rubric) {
  k = iteration;
  HTMLelement = document.querySelectorAll(element);
  if (rubric.classes === undefined) {
    return true;
  }
  if (!HTMLelement[k].classList.contains(rubric.classes)) {
    return false;
  }
  return true;
}

function findElement(elems) {
  for (let i = 0; i < elems.length; i++) {
    results.foundElements.push([]);
    for (let j = 0; j < elems[i].elements.length; j++) {
      element = document.querySelectorAll(elems[i].elements[j]);
      for (let k = 0; k < element.length; k++) {
        if (element["length"] !== 0) {
          if (
            doesElementClose(elems[i].elements[j]) &&
            doesElementHaveContent(elems[i].elements[j]) &&
            checkAttribute(k, elems[i].elements[j], elems[i]) &&
            checkElementsStyles(k, elems[i].elements[j], elems[i]) &&
            checkElementsClasses(k, elems[i].elements[j], elems[i])
          ) {
            results.foundElements[i].push(elems[i].elements[j]);
          }
        }
      }
    }
  }

  didArrayPassRubric(results.foundElements, milestone);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function percentage(percent, total) {
  return ((percent / total) * 100).toFixed(2);
}

function rubricPointsWithoutLevelUps() {
  let milestoneLength = 0;
  for (let i = 0; i < milestone.length; i++) {
    if (milestone[i].levelUp !== true) {
      milestoneLength++;
    }
  }
  return milestoneLength;
}

function feedBackFunc(milestone) {
  let standardMessage = `We ran tests of expected DOM elements and properties, and this work passed ${rubricPoints} out of ${rubricPointsWithoutLevelUps()} or ${percentage(
    rubricPoints,
    rubricPointsWithoutLevelUps()
  )}% of our tests.`;
  return `${standardMessage}`;
}

function test() {
  findElement(milestone);
  console.log(feedBackFunc(milestone));
  console.log("Results", results);
  console.log(
    `A quick note on our tests. We analyze DOM elements for expected values if the student completed the requirements for each project. A low test score could indicate that the student was not able to meet requirements for this project, OR that they went above and beyond what we asked them to do, or a level up where we can not anticipate the values the student will use. If the test score is low, please inspect the project.`
  );

  results = {
    foundElements: [],
    testsFailed: [],
  };
  rubricPoints = 0;

  return teacherQuotes[getRandomIntInclusive(0, 16)];
}

teacherQuotes = [
  `I cannot teach anybody anything; I can only make them think. – Socrates`,
  `Tell me and I forget. Teach me and I remember. Involve me and I learn. – Benjamin Franklin`,
  `Teaching is the greatest act of optimism. – Colleen Wilcox`,
  `If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.– Chinese Proverb`,
  `Education is not preparation for life; education is life itself.– John Dewey`,
  `What sculpture is to a block of marble, education is to a human soul.– Joseph Addison`,
  `Teaching is the one profession that creates all other professions. – Unknown`,
  `Education breeds confidence. Confidence breeds hope. Hope breeds peace.– Confucius`,
  `The dream begins, most of the time, with a teacher who believes in you, who tugs and pushes and leads you on to the next plateau, sometimes poking you with a sharp stick called truth.– Dan Rather`,
  `The art of teaching is the art of assisting discovery.– Mark Van Doren`,
  `What the teacher is, is more important than what he teaches.– Karl Meninger`,
  `The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.`,
  `Better than a thousand days of diligent study is one day with a great teacher.– Japanese Proverb`,
  `A good teacher is like a candle—it consumes itself to light the way for others.– Mustafa Kemal Atatürk`,
  `Education is not the filling of a pail but the lighting of a fire.– William Butler Yeats`,
  `Teaching is more than imparting knowledge; it is inspiring change. Learning is more than absorbing facts; it is acquiring understanding.– William Arthur Ward`,
  `You can teach a student a lesson for a day, but if you can teach them to learn by creating curiosity, they will continue the learning process as long as they live.– Clay P. Bedford`,
];
