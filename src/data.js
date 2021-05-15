import { HiCake, HiMoon } from "react-icons/hi";

const data = [
  {
    id: 1,
    name: "Guards",
    icon: <HiCake className="icon" />,
    activeRoom: 0,
    users: [
      {
        id: 1,
        name: "Princess Leia",
      },
      {
        id: 2,
        name: "Han Solo",
      },
      {
        id: 3,
        name: "General Grievous",
      },
      {
        id: 4,
        name: "Obi-Wan Kenobi",
      },
    ],
    rooms: [
      {
        id: 1,
        name: "Room 1",
        messages: [
          {
            id: 1,
            user: "Obi-Wan Kenobi",
            timestamp: "5/9/2021",
            text: "Hello there!",
          },
          {
            id: 2,
            user: "General Grievous",
            timestamp: "5/9/2021",
            text: "General Kenobi!!",
          },
        ],
      },
      {
        id: 2,
        name: "Room 2",
        messages: [
          {
            id: 1,
            user: "Princess Leia",
            timestamp: "5/9/2021",
            text: "I love you!",
          },
          {
            id: 2,
            user: "Han Solo",
            timestamp: "5/9/2021",
            text: "I know",
          },
        ],
      },
      {
        id: 3,
        name: "Room 3",
        messages: [
          {
            id: 1,
            user: "Obi-Wan Kenobi",
            timestamp: "5/9/2021",
            text: "Hello there!",
          },
          {
            id: 2,
            user: "General Grievous",
            timestamp: "5/9/2021",
            text: "General Kenobi!!",
          },
        ],
      },
      {
        id: 4,
        name: "Room 4",
        messages: [
          {
            id: 1,
            user: "Obi-Wan Kenobi",
            timestamp: "5/9/2021",
            text: "Hello there!",
          },
          {
            id: 2,
            user: "General Grievous",
            timestamp: "5/9/2021",
            text: "General Kenobi!!",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Blarg",
    icon: <HiMoon className="icon" />,
    activeRoom: 3,
    users: [
      {
        id: 1,
        name: "Princess Lazer",
      },
      {
        id: 2,
        name: "Han Swolo",
      },
      {
        id: 3,
        name: "General Grifter",
      },
      {
        id: 4,
        name: "Obi-Wan Bronobi",
      },
    ],
    rooms: [
      {
        id: 1,
        name: "Room 1",
        messages: [
          {
            id: 1,
            user: "Obi-Wan Bronobi",
            timestamp: "5/9/2021",
            text: "Hello there!",
          },
          {
            id: 2,
            user: "General Grifter",
            timestamp: "5/9/2021",
            text: "General Bronobi!!",
          },
        ],
      },
      {
        id: 2,
        name: "Room 2",
        messages: [
          {
            id: 1,
            user: "Princess Lazer",
            timestamp: "5/9/2021",
            text: "I love you!",
          },
          {
            id: 2,
            user: "Han Swolo",
            timestamp: "5/9/2021",
            text: "I know",
          },
        ],
      },
      {
        id: 3,
        name: "Room 56",
        messages: [
          {
            id: 1,
            user: "Obi-Wan Kenobi",
            timestamp: "5/9/2021",
            text: "Hello there!",
          },
          {
            id: 2,
            user: "General Grievous",
            timestamp: "5/9/2021",
            text: "General Kenobi!!",
          },
        ],
      },
      {
        id: 4,
        name: "Battle Room",
        messages: [
          {
            id: 1,
            user: "Obi-Wan Bronobi",
            timestamp: "5/9/2021",
            text: "Hello there!",
          },
          {
            id: 2,
            user: "General Grifter",
            timestamp: "5/9/2021",
            text: "General Kenobi!!",
          },
        ],
      },
    ],
  },
];

export default data;
