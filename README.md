# tmw

My blog at <https://tmwalaszek.github.io>, built with [Hugo](https://gohugo.io).
Every push to `main` rebuilds and deploys it to GitHub Pages (`.github/workflows/hugo.yaml`).

## Writing a post

```sh
hugo new posts/my-post-title.md   # creates content/posts/my-post-title.md (as a draft)
hugo server -D                    # preview at http://localhost:1313, -D includes drafts
```

Write in Markdown under the front matter. When it's ready, set `draft: false`, then commit and push.

```yaml
---
title: "My Post Title"
date: 2026-11-14T10:00:00+01:00
draft: false
tags: ["linux", "go"]
description: "Optional. One line for search results and link previews."
---
```

**Posts with images:** create a folder instead, put images next to `index.md`, and link them by file name:

```sh
hugo new posts/trip-report/index.md
# content/posts/trip-report/photo.jpg  →  ![A photo](photo.jpg)
```

Good to know:

- Posts with a future `date` stay hidden until that date.
- Code blocks get highlighting from a language tag (` ```go `). Highlight lines with ` ```go {hl_lines=[2,3]} `.

## Where things are

```
content/posts/          posts
layouts/                templates: baseof (shell), home, list, single, taxonomy (/tags/)
layouts/_partials/      post-list.html, shared by home, /posts/ and tag pages
assets/css/style.css    all styles; colours at the top, dark mode follows the OS
hugo.toml               title, description, author, email
```

Needs Hugo 0.146 or newer locally (Arch/CachyOS: `sudo pacman -S hugo`).
The CI version is pinned in the workflow (`HUGO_VERSION`).
