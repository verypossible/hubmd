# HubMD

Quick utility for converting markdown to html.

## Usage

```
# install script globally
npm install -g hubmd

# convert markdown file to html
hubmd -i my-blog-post.md -o post.html

# convert markdown file with syntax highlighting
hubmd -i my-blog-post.md -o post.html -l javascript
```

Behind the scenes we are using the following packages:
* prismjs
* remarkable
* yargs

If anything seems weird, issues and PR's are welcome.
