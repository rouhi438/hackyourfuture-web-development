# Git – Most Used Commands Cheat Sheet

This file contains the **most commonly used Git commands** for daily development work. You can keep this file in your repository as a quick reference.

---

## 🔹 Initial Setup

```bash
git init                     # Initialize a new git repository
git clone <repo-url>          # Clone a repository from GitHub
```

---

## 🔹 Repository Status & Info

```bash
git status                   # Check current status
git log                      # View commit history
git log --oneline            # Short commit history
git diff                     # Show file changes (not staged)
```

---

## 🔹 Staging & Committing

```bash
git add .                    # Stage all changes
git add <file>               # Stage specific file
git commit -m "message"      # Commit staged changes
git commit -am "message"     # Stage + commit tracked files
```

---

## 🔹 Branching

```bash
git branch                   # List branches
git branch <name>            # Create new branch
git checkout <branch>        # Switch branch
git checkout -b <name>       # Create and switch branch
git switch <branch>          # Switch branch (new syntax)
git merge <branch>           # Merge branch into current branch
git branch -d <branch>       # Delete branch
```

---

## 🔹 Remote (GitHub)

```bash
git remote -v                # Show remote repositories
git remote add origin <url>  # Add remote repository
git push                     # Push changes
git push -u origin main      # Push and set upstream
git pull                     # Pull latest changes
git fetch                    # Fetch changes (no merge)
```

---

## 🔹 Undo & Fix Mistakes

```bash
git restore <file>           # Discard file changes
git restore --staged <file>  # Unstage file
git reset --soft HEAD~1      # Undo last commit (keep changes)
git reset --hard HEAD~1      # Undo last commit (delete changes)
```

---

## 🔹 Stash (Temporary Save)

```bash
git stash                    # Save work temporarily
git stash list               # List stashes
git stash pop                # Apply and remove last stash
git stash apply              # Apply stash (keep it)
```

---

## 🔹 Tags

```bash
git tag                      # List tags
git tag v1.0                 # Create tag
git push origin v1.0         # Push tag
```

---

## 🔹 Useful Short Workflow

```bash
git status
git add .
git commit -m "your message"
git push
```

---

## ✅ Best Practices

- Commit often with clear messages
- One feature or fix per commit
- Pull before starting new work
- Keep `main` branch stable

---

Happy coding 🚀
