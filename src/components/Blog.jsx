
import { createSignal } from 'solid-js';
import { Router, Route, Routes } from "@solidjs/router";
import { Card } from './Card/Card';

const blogData = [
  // Your health blog data goes here (include image, category, title, date, reading time, description, and author info)
  // Example:
  {
    id: 1,
    image: "https://example.com/blog-image-1.jpg",
    category: "Fitness",
    title: "10 Tips for a Healthy Workout Routine",
    date: "June 21, 2023",
    readTime: "11 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "John Doe",
      image: "https://example.com/author-image-1.jpg"
    }
  },
  {
    id: 2,
    image: "https://example.com/blog-image-2.jpg",
    category: "Nutrition",
    title: "Healthy Eating: Tips for a Balanced Diet",
    date: "July 15, 2023",
    readTime: "8 min read",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Jane Smith",
      image: "https://example.com/author-image-2.jpg"
    }
  },
  {
    id: 3,
    image: "https://example.com/blog-image-3.jpg",
    category: "Mental Health",
    title: "Practicing Mindfulness for Stress Reduction",
    date: "August 5, 2023",
    readTime: "7 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet erLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Alex Johnson",
      image: "https://example.com/author-image-3.jpg"
    }
  },
  {
    id: 4,
    image: "https://example.com/blog-image-4.jpg",
    category: "Weight Loss",
    title: "Effective Strategies for Losing Weight",
    date: "September 10, 2023",
    readTime: "9 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Emily Adams",
      image: "https://example.com/author-image-4.jpg"
    }
  },
  {
    id: 5,
    image: "https://example.com/blog-image-5.jpg",
    category: "Yoga",
    title: "The Benefits of Practicing Yoga Regularly",
    date: "October 2, 2023",
    readTime: "6 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Michael Brown",
      image: "https://example.com/author-image-5.jpg"
    }
  },
  {
    id: 6,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 7,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 8,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },

  {
    id: 9,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 10,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 11,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 12,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 13,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 14,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 15,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  },
  {
    id: 16,
    image: "https://example.com/blog-image-6.jpg",
    category: "Nutrition",
    title: "The Role of Nutrition in a Healthy Lifestyle",
    date: "November 12, 2023",
    readTime: "10 min read",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo eu velit facilisis viverra eu at nulla. Nam sed justo sit amet eros sodales maximus vitae ut arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: {
      name: "Sophia Lee",
      image: "https://example.com/author-image-6.jpg"
    }
  }
  // Add more health blog data objects as needed
];

function Blog() {
  const [blogPosts, setBlogPosts] = createSignal(blogData);




  return (
    <div class="container m-auto">
      <h1 className="text-center mt-5 mb-10 font-bold text-5xl">My Blog</h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 my-4">
        <For each={blogPosts()}>
          {(post) => (
            <Card post={post}/>
          )}
        </For>


      </div>
    </div>
  )
}

export default Blog
