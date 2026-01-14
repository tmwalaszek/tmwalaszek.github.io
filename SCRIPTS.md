# Blog Management Scripts

These scripts make it easy to manage your Hugo blog posts and tags.

## Available Commands

### 1. List All Posts
```bash
./list-posts.sh
```

Shows all blog posts with their title, date, draft status, and file path.

**Example output:**
```
=== Blog Posts ===

[1] getting-started.md
    Title: Getting Started with Hugo
    Date:  2024-01-15
    Draft: false
    Path:  content/posts/getting-started.md

[2] markdown-cheat-sheet.md
    Title: Markdown Cheat Sheet
    Date:  2024-01-16
    Draft: false
    Path:  content/posts/markdown-cheat-sheet.md

Total posts: 2
```

---

### 2. List All Tags
```bash
./list-tags.sh
```

Shows all unique tags used across your blog posts, with post counts.

**Example output:**
```
=== Blog Tags ===

Available tags:

  [1] blogging (2 posts)
  [2] hugo (3 posts)
  [3] markdown (2 posts)
  [4] tutorial (1 posts)

Total unique tags: 4
```

---

### 3. Create New Post
```bash
./new-post.sh <post-name> [tags]
```

Creates a new blog post with front matter already set up.

**Examples:**
```bash
# Simple post
./new-post.sh my-new-adventure

# Post with tags
./new-post.sh docker-tutorial docker,devops,containers

# Post with spaces (use dashes)
./new-post.sh how-to-code-better
```

The script will:
- Create the file in `content/posts/`
- Auto-generate a title from the filename
- Set today's date
- Add tags if provided
- Create a basic markdown template

---

### 4. Delete Post
```bash
./delete-post.sh <filename>
```

Deletes a blog post with confirmation.

**Examples:**
```bash
# Delete a specific post
./delete-post.sh old-post.md

# If you forget the filename, just run without arguments to see the list
./delete-post.sh
```

The script will:
- Show you the post details
- Ask for confirmation
- Delete only if you confirm with 'y'

---

## Quick Workflow

### Starting a new post:
```bash
# Create the post
./new-post.sh awesome-tutorial coding,tips

# Edit it
vim content/posts/awesome-tutorial.md

# Preview locally
hugo server

# Build for production
hugo
```

### Managing content:
```bash
# See all posts
./list-posts.sh

# See all tags
./list-tags.sh

# Remove old post
./delete-post.sh old-stuff.md
```

---

## Notes

- All scripts work from the blog root directory
- Posts are always created in `content/posts/`
- Scripts are safe - delete requires confirmation
- You can still use `hugo new posts/name.md` if you prefer

---

## Need Help?

Run any script without arguments to see usage examples:
```bash
./new-post.sh
./delete-post.sh
```
