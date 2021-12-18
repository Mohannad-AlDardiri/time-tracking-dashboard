// import React from "react";
import workIcon from "./images/icon-work.svg";
import playIcon from "./images/icon-play.svg";
import studyIcon from "./images/icon-study.svg";
import exerciseIcon from "./images/icon-exercise.svg";
import socialIcon from "./images/icon-social.svg";
import selfCareIcon from "./images/icon-self-care.svg";

const Data = [
  {
    id: 0,
    title: "Work",
    bgIcon: workIcon,
    IconAlt: "work icon",
    bgColor: "liteRed",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    id: 1,
    title: "Play",
    bgIcon: playIcon,
    IconAlt: "play icon",
    bgColor: "softBlue",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    id: 2,
    title: "Study",
    bgIcon: studyIcon,
    IconAlt: "study icon",
    bgColor: "darkRed",

    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    id: 3,

    title: "Exercise",
    bgIcon: exerciseIcon,
    IconAlt: "Exercise icon",
    bgColor: "limeGreen",

    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    id: 4,

    title: "Social",
    bgIcon: socialIcon,
    IconAlt: "social icon",
    bgColor: "violet",

    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    id: 5,

    title: "Self Care",
    bgIcon: selfCareIcon,
    IconAlt: "self care icon",
    bgColor: "softOrange",

    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
];

export default Data;
