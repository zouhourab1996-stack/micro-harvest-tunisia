import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";

const blogPosts = [
  {
    id: "how-to-receive-prophetic-word-2025",
    title: "How to Receive Your Prophetic Word in 2025: Complete Guide",
    excerpt: "Discover the step-by-step process to receive an authentic prophetic word that reveals your divine purpose and direction for 2025.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Prophetic Guidance",
    keywords: "how to receive prophetic word, get prophetic word 2025, prophetic guidance process"
  },
  {
    id: "10-signs-you-need-prophetic-word",
    title: "10 Clear Signs You Need a Prophetic Word Right Now",
    excerpt: "Feeling stuck or uncertain? Learn the 10 unmistakable signs that indicate it's time to seek divine direction through prophetic guidance.",
    date: "2025-01-14",
    readTime: "6 min read",
    category: "Spiritual Guidance",
    keywords: "signs you need prophetic word, when to get prophetic guidance, spiritual direction signs"
  },
  {
    id: "dream-interpretation-biblical-meaning",
    title: "Dream Interpretation: Biblical Meaning & Spiritual Significance",
    excerpt: "Unlock the biblical meaning of your dreams and discover what God is revealing through your nighttime visions with this comprehensive guide.",
    date: "2025-01-14",
    readTime: "9 min read",
    category: "Dream Interpretation",
    keywords: "dream interpretation biblical meaning, spiritual dreams explained, biblical dream symbols, Christian dream interpretation"
  },
  {
    id: "prophetic-blessings-vs-prophetic-word",
    title: "Prophetic Blessings vs. Prophetic Word: What's the Difference?",
    excerpt: "Understanding the key differences between prophetic blessings and prophetic words helps you choose the right spiritual service for your needs.",
    date: "2025-01-13",
    readTime: "7 min read",
    category: "Biblical Wisdom",
    keywords: "prophetic blessings explained, difference prophetic word blessing, types of prophecy"
  },
  {
    id: "how-to-know-your-spiritual-gifts",
    title: "How to Know Your Spiritual Gifts: Complete Discovery Guide",
    excerpt: "Discover your unique spiritual gifts through biblical principles, prophetic insight, and practical exercises to activate your divine calling.",
    date: "2025-01-13",
    readTime: "10 min read",
    category: "Spiritual Gifts",
    keywords: "how to know your spiritual gifts, spiritual gifts test, discover spiritual gifts, spiritual gifts identification"
  },
  {
    id: "biblical-foundation-prophetic-ministry",
    title: "The Biblical Foundation of Prophetic Ministry in Modern Times",
    excerpt: "Explore the scriptural basis for prophetic ministry today and how it continues to guide believers toward their divine calling.",
    date: "2025-01-12",
    readTime: "10 min read",
    category: "Biblical Teachings",
    keywords: "biblical prophetic ministry, scripture on prophecy, modern day prophets"
  },
  {
    id: "online-prophetic-ministry-how-to-choose",
    title: "How to Choose a Legitimate Online Prophetic Ministry",
    excerpt: "Learn the essential criteria for selecting an authentic online prophetic ministry and avoid false prophets with this comprehensive guide.",
    date: "2025-01-12",
    readTime: "8 min read",
    category: "Ministry Selection",
    keywords: "legitimate prophetic ministry online, how to choose prophetic minister, authentic prophecy online, avoid false prophets"
  },
  {
    id: "preparing-heart-prophetic-word",
    title: "Preparing Your Heart to Receive a Prophetic Word",
    excerpt: "Essential spiritual preparation steps to ensure you're ready to receive and understand your prophetic word with clarity and faith.",
    date: "2025-01-11",
    readTime: "5 min read",
    category: "Spiritual Preparation",
    keywords: "prepare for prophetic word, spiritual readiness, receiving prophecy"
  },
  {
    id: "how-to-test-prophetic-word-accuracy",
    title: "How to Test the Accuracy of a Prophetic Word: Biblical Guidelines",
    excerpt: "Learn the biblical tests every prophetic word must pass to ensure authenticity, accuracy, and alignment with God's character.",
    date: "2025-01-11",
    readTime: "7 min read",
    category: "Prophetic Testing",
    keywords: "test prophetic word accuracy, biblical tests for prophecy, verify prophetic word, authentic prophecy validation"
  },
  {
    id: "biblical-guidance-for-major-life-decisions",
    title: "Biblical Guidance for Major Life Decisions: 7 Steps to Divine Direction",
    excerpt: "Make confident life decisions using biblical wisdom and prophetic guidance with these 7 proven steps for hearing God's voice clearly.",
    date: "2025-01-10",
    readTime: "9 min read",
    category: "Decision Making",
    keywords: "biblical guidance for decisions, divine direction for life choices, hearing God for decisions, spiritual guidance decisions"
  },
  {
    id: "testimonies-life-changing-prophetic-words",
    title: "Real Testimonies: Life-Changing Prophetic Words That Transformed Lives",
    excerpt: "Read powerful true stories of how prophetic words brought breakthrough, healing, and divine direction to people's lives.",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Testimonies",
    keywords: "prophetic word testimonies, real prophecy stories, life transformation through prophecy"
  },
  {
    id: "spiritual-breakthrough-how-prophetic-words-unlock",
    title: "Spiritual Breakthrough: How Prophetic Words Unlock Your Destiny",
    excerpt: "Discover how prophetic words remove spiritual barriers and unlock breakthrough in finances, relationships, ministry, and purpose.",
    date: "2025-01-09",
    readTime: "8 min read",
    category: "Breakthrough",
    keywords: "spiritual breakthrough prophetic word, breakthrough through prophecy, unlock destiny prophecy, prophetic breakthrough"
  },
  {
    id: "prophetic-word-vs-psychic-reading-difference",
    title: "Prophetic Word vs. Psychic Reading: Critical Differences Every Christian Should Know",
    excerpt: "Understand the fundamental differences between biblical prophetic words and psychic readings to protect your spiritual journey.",
    date: "2025-01-09",
    readTime: "6 min read",
    category: "Spiritual Discernment",
    keywords: "prophetic word vs psychic reading, difference prophecy psychic, Christian prophecy vs fortune telling, biblical prophecy explained"
  },
  {
    id: "how-prophetic-words-work-spiritually",
    title: "How Prophetic Words Work: The Spiritual Mechanics of Prophecy",
    excerpt: "Explore the spiritual mechanics of how prophetic words are received, delivered, and manifested in believers' lives.",
    date: "2025-01-08",
    readTime: "10 min read",
    category: "Prophetic Education",
    keywords: "how prophetic words work, prophecy spiritual mechanics, how prophecy functions, prophetic word explanation"
  }
];

const Blog = () => {
  const currentUrl = window.location.href;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Prophetic Word & Spiritual Guidance Blog",
    "description": "Expert insights on prophetic words, spiritual guidance, biblical wisdom, and divine direction for 2025",
    "url": currentUrl,
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "John S",
        "jobTitle": "Spiritual Advisor & Prophet"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Divine Spiritual Guidance Services"
      }
    }))
  };

  return (
    <>
      <SEO
        title="Prophetic Word Blog 2025 | Spiritual Guidance & Biblical Wisdom"
        description="Read expert articles on receiving prophetic words, spiritual guidance, biblical prophecy, and divine direction. Learn how to hear from God and understand His will for your life in 2025."
        keywords="prophetic word blog, spiritual guidance articles, biblical prophecy insights, how to receive prophecy, prophetic ministry teachings, divine direction blog, Christian prophecy 2025"
        canonicalUrl={currentUrl}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Prophetic Word & Spiritual Guidance Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert insights on receiving prophetic words, understanding biblical prophecy, and walking in your divine purpose for 2025
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-sm text-primary font-medium">
                      {post.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full group">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Receive Your Prophetic Word?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized spiritual guidance and divine direction for your life in 2025
            </p>
            <Link to="/">
              <Button size="lg" className="text-lg px-8">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;