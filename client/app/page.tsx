'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PostCard from '@/components/PostCard';
import { useAuthStore } from '@/store/authStore';
import { Skeleton } from '@/components/Skeleton';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mobile-container pb-20">
      {/* Stories Section */}
      <div className="px-4 py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5">
                <div className="w-full h-full rounded-full bg-gray-900 p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-700" />
                </div>
              </div>
              <span className="text-xs text-gray-400">User {i}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="px-4">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-4 bg-cyan-500 text-white p-4 rounded-full shadow-lg shadow-cyan-500/50"
      >
        <PlusCircle size={24} />
      </motion.button>
    </div>
  );
}
