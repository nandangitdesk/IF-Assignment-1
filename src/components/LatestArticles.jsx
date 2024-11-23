import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
import image1 from '../assets/assignmentBlogImg1.png';
import image2 from '../assets/assignmentBlogImg2.png';
import image3 from '../assets/assignmentBlogImg3.png';
import image4 from '../assets/assignmentBlogImg4.png';
import image5 from '../assets/assignmentBlogImg5.png';
import image6 from '../assets/assignmentBlogImg6.png';

// {/* Data for the articles */}
const articles = [
  {
    id: 1,
    title: 'Grilled Tomatoes at Home',
    description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    image: image1,
  },
  {
    id: 2,
    title: 'Snacks for Travel',
    description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    image: image2,
  },
  {
    id: 3,
    title: 'Post-workout Recipes',
    description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    image: image3,
  },
  {
    id: 4,
    title: 'How To Grill Corn',
    description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    image: image4,
  },
  {
    id: 5,
    title: 'Crunchwrap Supreme',
    description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    image: image5,
  },
  {
    id: 6,
    title: 'Broccoli Cheese Soup',
    description: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s...',
    image: image6,
  },
];

const ITEMS_PER_PAGE = 3;

export default function LatestArticles() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="mt-24">
      <motion.div
        className="w-full md:px-[104px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="mb-12 text-3xl leading-[54px] text-center md:text-left font-bold text-[#0E2368] md:text-4xl lg:text-5xl">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <motion.div
              key={article.id}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * article.id }}
            >
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
              />
            </motion.div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </motion.div>
    </section>
  );
}
