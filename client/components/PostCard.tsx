'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react';
import { useState } from 'react';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    price: number;
    location: string;
    images: string[];
    likes: number;
    comments: number;
    author: {
      username: string;
      avatar: string;
      isVerified: boolean;
    };
  };
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass-card mb-4 overflow-hidden"
    >
      {/* Image Gallery */}
      <div className="relative h-64 w-full">
        <Image
          src={post.images[0]}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
          {post.images.length} 📸
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-white">{post.title}</h3>
            <p className="text-2xl font-bold text-cyan-400 mt-1">
              ${post.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <MapPin size={14} />
          <span>{post.location}</span>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-2 mb-3">
          <div className="relative w-8 h-8">
            <Image
              src={post.author.avatar}
              alt={post.author.username}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-300">{post.author.username}</span>
          {post.author.isVerified && (
            <span className="text-xs bg-blue-500 px-1 rounded">✓</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-around pt-3 border-t border-white/10">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Heart size={20} fill={isLiked ? 'red' : 'none'} />
            <span>{likesCount}</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <MessageCircle size={20} />
            <span>{post.comments}</span>
          </button>
          
          <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
