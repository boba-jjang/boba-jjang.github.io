# boba-jjang.github.io

Personal site for Jae-Won Jang — Senior Cyber Engineer at MITRE, Ph.D. in Computer Engineering. Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Local development

```bash
docker compose pull && docker compose up
# http://localhost:8080
```

See [AGENTS.md](AGENTS.md) for the full development workflow.

## Layout

- `_pages/` — top-level pages (about, blog, publications, projects, albums, cv)
- `_posts/` — blog posts
- `_projects/` — project entries
- `_recipes/` — homecooking archive (`/albums/homecooking/`)
- `_bibliography/` — BibTeX for publications
- `_data/cv.yml` — single source of truth for CV/experience
- `_sass/` — partials, split by feature (`_about`, `_albums`, `_recipes`, ...)
- `docs/upstream/` — original al-folio theme documentation (kept for reference)

## License

[MIT](LICENSE), inherited from the al-folio theme.
