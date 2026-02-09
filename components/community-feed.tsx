"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Share2,
  MapPin,
  Camera,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const feedTabs = [
  "All Posts",
  "Ride Stories",
  "Route Tips",
  "Bike Reviews",
  "Gear Talk",
  "Meetups",
];

const posts = [
  {
    id: 1,
    author: "Arjun Mehta",
    avatar: "AM",
    location: "Manali, Himachal Pradesh",
    bike: "Royal Enfield Himalayan",
    timeAgo: "2 hours ago",
    content:
      "Just completed the Manali to Rohtang Pass ride! The roads were challenging but the views at the top made it all worth it. Pro tip: carry extra layers, it gets freezing above 13,000 ft even in summer.",
    image: "/images/post-1.jpg",
    likes: 247,
    comments: 38,
    shares: 12,
    category: "Ride Stories",
  },
  {
    id: 2,
    author: "Priya Sharma",
    avatar: "PS",
    location: "Ziro Valley, Arunachal Pradesh",
    bike: "KTM 390 Adventure",
    timeAgo: "5 hours ago",
    content:
      "Northeast India is an absolute hidden gem for riders! The Ziro Valley route has barely any traffic, incredible bamboo forests, and the most welcoming Apatani tribe villages. A must-ride for anyone looking beyond the usual Ladakh circuit.",
    image: "/images/post-2.jpg",
    likes: 189,
    comments: 24,
    shares: 31,
    category: "Route Tips",
  },
  {
    id: 3,
    author: "Vikram Rathore",
    avatar: "VR",
    location: "Udupi Coast, Karnataka",
    bike: "Bajaj Dominar 400",
    timeAgo: "8 hours ago",
    content:
      "Sunset rides along the Karnataka coast hit different. The stretch from Udupi to Murudeshwar is one of the best coastal highways in India. Smooth roads, ocean breeze, and temples along the way. Pure bliss on two wheels.",
    image: "/images/post-3.jpg",
    likes: 312,
    comments: 45,
    shares: 18,
    category: "Ride Stories",
  },
];

function PostCard({ post }: { post: (typeof posts)[0] }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentCount, setCommentCount] = useState(post.comments);
  const [shareCount, setShareCount] = useState(post.shares);
  const [shared, setShared] = useState(false);

  function handleShare() {
    if (!shared) {
      setShareCount((prev) => prev + 1);
      setShared(true);
      if (navigator.share) {
        navigator.share({
          title: `${post.author}'s ride from ${post.location}`,
          text: post.content.slice(0, 100) + "...",
        });
      }
    }
  }

  function handlePostComment() {
    if (commentText.trim()) {
      setCommentCount((prev) => prev + 1);
      setCommentText("");
      setShowCommentBox(false);
    }
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-border/50 bg-card">
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg" alt={post.author} />
            <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
              {post.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{post.author}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {post.location}
              <span>{"  "}|{"  "}</span>
              {post.bike}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
          <button
            type="button"
            className="rounded-lg p-1 text-muted-foreground hover:bg-secondary"
            aria-label="More options"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      <p className="px-4 pb-3 text-sm leading-relaxed text-foreground/90">
        {post.content}
      </p>

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={`Ride photo from ${post.location}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between border-t border-border/30 p-3 px-4">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              liked
                ? "text-red-500"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            onClick={() => {
              setLiked(!liked);
              setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
            }}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
            {likeCount}
          </button>
          <button
            type="button"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              showCommentBox
                ? "text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            onClick={() => setShowCommentBox(!showCommentBox)}
          >
            <MessageCircle className="h-5 w-5" />
            {commentCount}
          </button>
          <button
            type="button"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              shared
                ? "text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5" />
            {shareCount}
          </button>
        </div>
        <button
          type="button"
          className={`rounded-lg p-2 transition-colors ${
            saved
              ? "text-accent"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
          onClick={() => setSaved(!saved)}
          aria-label={saved ? "Unsave post" : "Save post"}
        >
          <Bookmark className={`h-5 w-5 ${saved ? "fill-accent" : ""}`} />
        </button>
      </div>

      {showCommentBox && (
        <div className="border-t border-border/30 p-3 px-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 rounded-xl border border-border/50 bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
              onKeyDown={(e) => {
                if (e.key === "Enter") handlePostComment();
              }}
            />
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handlePostComment}
              disabled={!commentText.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      )}
    </article>
  );
}

export function CommunityFeed() {
  const [activeTab, setActiveTab] = useState("All Posts");
  const [newPostText, setNewPostText] = useState("");
  const [postSubmitted, setPostSubmitted] = useState(false);

  const filteredPosts =
    activeTab === "All Posts"
      ? posts
      : posts.filter((p) => p.category === activeTab);

  function handleNewPost() {
    if (newPostText.trim()) {
      setPostSubmitted(true);
      setNewPostText("");
      setTimeout(() => setPostSubmitted(false), 3000);
    }
  }

  return (
    <section id="feed" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Community <span className="text-primary">Feed</span>
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Real stories from real riders. Share your experiences, discover new
              routes, and connect with the riding community.
            </p>
          </div>
          <Button
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              const composeInput = document.getElementById("compose-input");
              if (composeInput) {
                composeInput.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => composeInput.focus(), 500);
              }
            }}
          >
            <Camera className="h-4 w-4" />
            Share Your Ride
          </Button>
        </div>

        <div className="mb-8 flex items-center gap-3 overflow-x-auto pb-2">
          {feedTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="mb-6 rounded-2xl border border-border/50 bg-card p-4">
            {postSubmitted && (
              <div className="mb-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2.5 text-sm text-green-400">
                Your ride has been shared with the community!
              </div>
            )}
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
                  YO
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <input
                  id="compose-input"
                  type="text"
                  placeholder="Share your ride experience..."
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleNewPost();
                  }}
                  className="w-full bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <div className="mt-2 flex items-center justify-between border-t border-border/30 pt-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Camera className="h-4 w-4" />
                      Photo
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <MapPin className="h-4 w-4" />
                      Location
                    </button>
                  </div>
                  <Button
                    size="sm"
                    className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleNewPost}
                    disabled={!newPostText.trim()}
                  >
                    <Send className="h-3.5 w-3.5" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-border/50 bg-card py-16 text-center">
              <Camera className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
              <p className="text-lg font-semibold text-foreground">
                No posts yet in this category
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Be the first to share a ride story!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
