import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

/**
 * ApiData component for fetching and displaying data from JSONPlaceholder API
 * @returns {JSX.Element} - ApiData component
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Simulate fetching data with reasonable English statements
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = [
          {
            id: 1,
            userId: 1,
            title: "Exploring the Wonders of Nature",
            body: "Nature offers endless opportunities for adventure and relaxation. From hiking through lush forests to swimming in crystal-clear lakes, the outdoors provides a perfect escape from the hustle and bustle of daily life. Embracing these experiences can lead to greater appreciation for the environment and personal well-being."
          },
          {
            id: 2,
            userId: 1,
            title: "The Importance of Healthy Eating",
            body: "Maintaining a balanced diet is crucial for overall health. Incorporating a variety of fruits, vegetables, lean proteins, and whole grains into your meals ensures that your body receives the necessary nutrients. Making conscious food choices can boost energy levels, improve mood, and prevent chronic diseases."
          },
          {
            id: 3,
            userId: 1,
            title: "Advancements in Technology",
            body: "Technology continues to evolve at a rapid pace, transforming how we live and work. Innovations in artificial intelligence, renewable energy, and communication tools are making the world more connected and efficient. Staying informed about these developments can help individuals adapt and thrive in a digital age."
          },
          {
            id: 4,
            userId: 1,
            title: "The Joy of Learning New Skills",
            body: "Learning new skills opens doors to personal growth and career opportunities. Whether it's picking up a musical instrument, mastering a programming language, or improving cooking techniques, the process of acquiring knowledge is both rewarding and fulfilling. Dedication and practice are key to achieving proficiency."
          },
          {
            id: 5,
            userId: 1,
            title: "Promoting Work-Life Balance",
            body: "Achieving a healthy work-life balance is essential for long-term happiness and productivity. Setting boundaries between professional responsibilities and personal time allows for better mental health and stronger relationships. Prioritizing self-care and leisure activities contributes to a more balanced and enjoyable life."
          },
          {
            id: 6,
            userId: 2,
            title: "The Benefits of Regular Exercise",
            body: "Engaging in regular physical activity has numerous health benefits, including improved cardiovascular health, stronger muscles, and enhanced mental clarity. Finding enjoyable forms of exercise, such as walking, cycling, or yoga, can make it easier to maintain a consistent routine and enjoy the positive effects on both body and mind."
          },
          {
            id: 7,
            userId: 2,
            title: "Cultivating Meaningful Relationships",
            body: "Building and nurturing relationships with family, friends, and colleagues enriches our lives. Open communication, empathy, and shared experiences strengthen bonds and provide support during challenging times. Investing time in these connections fosters a sense of belonging and emotional well-being."
          },
          {
            id: 8,
            userId: 2,
            title: "Sustainable Living Practices",
            body: "Adopting sustainable practices helps protect the planet for future generations. Simple actions like reducing waste, conserving energy, and choosing eco-friendly products make a significant impact. Educating ourselves and others about environmental issues encourages collective responsibility and positive change."
          },
          {
            id: 9,
            userId: 2,
            title: "The Power of Positive Thinking",
            body: "Maintaining a positive mindset can transform challenges into opportunities. Focusing on gratitude, optimism, and resilience helps overcome obstacles and achieve goals. Cultivating positive thoughts through mindfulness and affirmations promotes mental health and attracts success in various aspects of life."
          },
          {
            id: 10,
            userId: 2,
            title: "Exploring Cultural Diversity",
            body: "Embracing cultural diversity broadens our perspectives and enriches our understanding of the world. Learning about different traditions, languages, and customs fosters tolerance and appreciation for global communities. Engaging with diverse cultures through travel, art, and dialogue promotes unity and mutual respect."
          },
          {
            id: 11,
            userId: 3,
            title: "The Role of Education in Society",
            body: "Education plays a vital role in shaping individuals and societies. Access to quality learning opportunities empowers people to pursue their passions and contribute meaningfully to their communities. Lifelong learning ensures adaptability in a rapidly changing world and promotes intellectual growth."
          },
          {
            id: 12,
            userId: 3,
            title: "Managing Stress Effectively",
            body: "Effective stress management is key to maintaining well-being. Techniques such as deep breathing, meditation, and time management help reduce anxiety and improve focus. Recognizing stress triggers and developing coping strategies enables individuals to navigate life's demands more calmly and productively."
          },
          {
            id: 13,
            userId: 3,
            title: "The Impact of Art on Society",
            body: "Art serves as a powerful medium for expression and social commentary. Through paintings, music, literature, and performance, artists convey emotions and ideas that resonate with audiences. Supporting the arts encourages creativity, cultural preservation, and critical thinking in society."
          },
          {
            id: 14,
            userId: 3,
            title: "Financial Planning for the Future",
            body: "Sound financial planning provides security and peace of mind. Setting goals, budgeting, and investing wisely help build wealth over time. Seeking professional advice and staying informed about economic trends ensures informed decisions that support long-term financial stability."
          },
          {
            id: 15,
            userId: 3,
            title: "The Importance of Mental Health",
            body: "Prioritizing mental health is essential for overall well-being. Seeking support through therapy, self-care, and community resources addresses emotional challenges. Reducing stigma and promoting open conversations about mental health fosters a supportive environment for healing and growth."
          }
        ];
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, posts]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Loading posts...</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-600 dark:text-red-400">
          <p className="text-lg font-semibold">Error</p>
          <p>{error}</p>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-r from-white to-green-50 dark:from-gray-800 dark:to-gray-700 border border-green-200 dark:border-green-700">
        <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">API Data - Posts</h2>

        {/* Search input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          />
        </div>

        {/* Posts list */}
        <div className="space-y-4">
          {currentPosts.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              No posts found matching your search.
            </p>
          ) : (
            currentPosts.map((post) => (
              <Card key={post.id} className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2 capitalize text-purple-600 dark:text-purple-400">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Post ID: {post.id} | User ID: {post.userId}
                </p>
                <p className="text-gray-700 dark:text-gray-200">{post.body}</p>
              </Card>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-6">
            <Button
              variant="secondary"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              variant="secondary"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} posts
        </div>
      </Card>
    </div>
  );
};

export default ApiData;
