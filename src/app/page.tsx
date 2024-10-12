"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { blogPosts } from './blogPosts';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(2);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const loadMorePosts = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + 2, blogPosts.length));
  };

  return (
    <div className={`${styles.page} ${isDarkMode ? styles.darkMode : ''}`}>
      <header className={styles.header}>
        <nav>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('blog')}>Blog</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <button onClick={toggleDarkMode} className={styles.modeToggle}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h1 className={styles.title}>Jonathan Aaron Rocha</h1>
              <p className={styles.description}>
                Welcome to my personal website. I&apos;m a digital marketing professional and full-stack web developer based in Austin, TX.
                With over 5 years of experience, I specialize in creating SEO-optimized content, managing online
                communities, and building dynamic, user-friendly websites.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/profile-image.jpg"
                alt="Jonathan Aaron Rocha smiling in a blue shirt and black tie"
                width={300}
                height={300}
                className={styles.profileImage}
              />
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.project}>
              <h3>E-commerce Platform</h3>
              <p>Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features such as user authentication, product catalog, shopping cart, and payment integration.</p>
            </div>
            <div className={styles.project}>
              <h3>SEO Optimization Campaign</h3>
              <p>Led an SEO optimization campaign for a client&apos;s website, resulting in a 150% increase in organic traffic over 6 months. Implemented technical SEO improvements and created a content strategy.</p>
            </div>
            <div className={styles.project}>
              <h3>Content Management System</h3>
              <p>Built a custom CMS using Python and Django, allowing non-technical users to easily manage website content. Integrated with a headless CMS for flexible content delivery.</p>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillList}>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>SEO Optimization</li>
            <li>Content Strategy</li>
            <li>Digital Marketing</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </section>

        <section id="blog" className={styles.section}>
          <h2>Blog</h2>
          <div className={styles.blogGrid}>
            {blogPosts.slice(0, visiblePosts).map((post) => (
              <article key={post.id} className={styles.blogPost}>
                <h3>{post.title}</h3>
                <p className={styles.postMeta}>Posted on {post.date}</p>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className={styles.readMore}>
                  Read More
                </Link>
              </article>
            ))}
          </div>
          {visiblePosts < blogPosts.length && (
            <div className={styles.loadMoreContainer}>
              <button onClick={loadMorePosts} className={styles.loadMoreBtn}>Load More</button>
            </div>
          )}
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact Me</h2>
          <p>Get in touch with me at: jonx03@pm.me</p>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="mailto:jonx03@pm.me"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/jonathan-rocha"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/jonathan-rocha"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jonathanrocha00"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="mailto:jonx03@pm.me"
        >
          Email Me
        </a>
      </footer>
    </div>
  );
}
