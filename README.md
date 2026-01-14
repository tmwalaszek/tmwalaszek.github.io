# Simple Hugo Blog

A clean and minimal Hugo blog with full Markdown support.

## Features

- ✓ Clean, minimal design
- ✓ Full Markdown support
- ✓ Syntax highlighting for code blocks
- ✓ **Optional dark mode** (auto-saved preference)
- ✓ **Tags system** with dedicated pages
- ✓ Responsive layout
- ✓ Easy to customize

## Installation

### Install Hugo

**macOS:**
```bash
brew install hugo
```

**Windows:**
```bash
choco install hugo-extended
```

**Linux:**
```bash
sudo apt-get install hugo
# or
sudo snap install hugo
```

Or download from: https://github.com/gohugoio/hugo/releases

## Usage

### Start the development server

```bash
cd my-blog
hugo server -D
```

Visit `http://localhost:1313` in your browser.

### Create a new post

```bash
hugo new posts/my-new-post.md
```

This creates a new Markdown file in `content/posts/` with the front matter already set up.

### Write your post

Edit the file in `content/posts/my-new-post.md`:

```markdown
---
title: "My New Post"
date: 2024-01-17
draft: false
tags: ["tag1", "tag2"]
---

Your content here in **Markdown**!

## Subheading

More content...
```

### Build the site

```bash
hugo
```

This generates the static site in the `public/` folder.

## Directory Structure

```
my-blog/
├── archetypes/          # Templates for new content
│   └── default.md       # Default post template
├── content/             # Your content goes here
│   └── posts/           # Blog posts
├── layouts/             # HTML templates
│   ├── _default/        # Default templates
│   ├── partials/        # Reusable components
│   └── index.html       # Homepage template
├── static/              # Static files (CSS, JS, images)
│   ├── css/
│   └── js/
└── hugo.toml            # Configuration file
```

## Adding Content

### Posts

Create new posts in `content/posts/`:

```bash
hugo new posts/my-post.md
```

### Front Matter

Each post needs front matter at the top:

```yaml
---
title: "Post Title"
date: 2024-01-17
draft: false
tags: ["hugo", "blogging"]
---
```

- `title`: Post title
- `date`: Publication date
- `draft`: Set to `false` to publish
- `tags`: Array of tags

## Customization

### Dark Mode

Dark mode is built-in and optional. Users can toggle it with the 🌙/☀️ button in the navigation. The preference is automatically saved in localStorage.

To customize dark mode colors, edit `static/css/style.css`:

```css
[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --link-color: #66b3ff;
    /* ... more colors */
}
```

### Tags

Posts automatically appear on tag pages when you add tags to the front matter:

```yaml
---
title: "My Post"
tags: ["hugo", "blogging", "web-dev"]
---
```

Visit `/tags/` to see all tags, or `/tags/hugo/` to see all posts with the "hugo" tag.

### Site Settings

Edit `hugo.toml`:

```toml
baseURL = 'https://yourdomain.com/'
title = 'Your Blog Title'

[params]
  description = "Your blog description"
  author = "Your Name"
```

### Styling

Edit `static/css/style.css` to customize the design.

### Colors

The CSS uses CSS variables for easy theming:

```css
:root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --link-color: #0066cc;
    --border-color: #e0e0e0;
    --code-bg: #f5f5f5;
    --header-bg: #fafafa;
}
```

## Markdown Support

Full Markdown support including:

- Headers
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Links
- Images
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Task lists

## Deployment

### Deploy to Netlify

1. Push your site to GitHub
2. Connect to Netlify
3. Set build command: `hugo`
4. Set publish directory: `public`

### Deploy to GitHub Pages

```bash
hugo
# Push the public/ folder to gh-pages branch
```

### Deploy to Any Static Host

Just upload the contents of the `public/` folder after running `hugo`.

## Tips

- Keep posts in `content/posts/`
- Images go in `static/images/`
- Set `draft: false` to publish a post
- Use `hugo server -D` to preview draft posts locally
- Run `hugo` to build before deploying

Enjoy your blogging!
