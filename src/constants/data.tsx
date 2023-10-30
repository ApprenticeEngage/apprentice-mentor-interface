import { Lesson, Section, Test } from "../types/courseItem";


export const courseData = [
  {
    id: "1",
    title: "Introduction to Programming",
    price: 4.67,
    recommendations: 32,
    author: "Al-shevidat",
    published: "published", // or "draft"
  },
  {
    id: "2",
    title: "Web Development Fundamentals",
    price: 9.99,
    recommendations: 45,
    author: "John Doe",
    published: "published", // or "draft"
  },
  {
    id: "3",
    title: "Data Science Essentials",
    price: 19.99,
    recommendations: 56,
    author: "Jane Smith",
    published: "draft", // or "published"
  },
  {
    id: "4",
    title: "Mechanical Engineering",
    price: 19.99,
    recommendations: 56,
    author: "Jane Smith",
    published: "draft", // or "published"
  },

  {
    id: "5",
    title: "Aerospace Engineering",
    price: 19.99,
    recommendations: 56,
    author: "Jane Smith",
    published: "draft", // or "published"
  },
];

export const sections_data: Section[] = [
  {
    title: "Section 1",
    name: "Instruction",
    learningOutcome: "Learning outcome of Section 1",
    courseItems: [
      new Lesson("Hello World", "Content URL", "Description is beautiful", []),
      new Test("FOP", "Test Topic", "23-2-10"),
    ],
  },
  {
    title: "Section 2",
    name: "Wireshark",
    learningOutcome: "Learning outcome of Section 2",
    courseItems: [],
  },
];


export function addSection(): void {
  sections_data.push(newSection);
}

// Example of how to use the addSection function
export const newSection = {
  title: "Section 3",
  name: "New Section",
  learningOutcome: "Learning outcome of New Section",
  courseItems: [
    new Lesson("New Lesson", "New Content URL", "New Description", []),
  ],
};