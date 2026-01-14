# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Hugo

**macOS:**
```bash
brew install hugo
```

**Windows:**
Download from: https://github.com/gohugoio/hugo/releases

**Linux:**
```bash
sudo snap install hugo
# or
sudo apt install hugo
```

### 2. Run Your Blog

```bash
cd my-blog
hugo server
```

Open http://localhost:1313 in your browser.

### 3. Add New Posts

```bash
hugo new posts/my-awesome-post.md
```

Edit the file in `content/posts/my-awesome-post.md` and write in Markdown!

## Example Post

```markdown
---
title: "My First Post"
date: 2024-01-17
draft: false
tags: ["hello", "world"]
---

# Hello World!

This is my **first post** written in Markdown.

## Features I Love

- Easy to write
- Clean design
- Fast builds

Check out this code:

\`\`\`python
print("Hello, Hugo!")
\`\`\`

That's it!
```

## Customize

Edit `hugo.toml` to change:
- Site title
- Author name
- Description

Edit `static/css/style.css` to change colors and styling.

**Dark mode** is built-in - just click the 🌙/☀️ button!

**Tags** are automatic - just add them to your post's front matter.

---

**Check README.md for full documentation!**
