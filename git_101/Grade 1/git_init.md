---
id: Git Init
sidebar_position: 4
---

The first step to using Git in any project is to initialize a repository. This sets up a hidden `.git` directory that tracks your changes, branches, history, and more.

## What is a Repository

A repository (or repo) is a directory where Git tracks and stores versions of your files. You can initialize a new Git repository in any folder using the `git init` command.

Once initialized, Git will start tracking changes in that folder — but only for files you tell it to track.

## Create Your First Repository 

1. Open your terminal
2. Navigate to the `git-101` folder created at the start of this course
    * if you mised this step please see [here](/git_101/intro) 
```bash
cd git-101
```
3. Initialize the repository:
```bash
git init
```

4. You should see: 
```bash
Initialized empty Git repository in /your/path/git-101/.git/
```
5. Confirm Git is now tracking the folder:
```bash
ls -a  # or `dir /a` on Windows
```

:::tip
This command can be used on existing codebases or folders to track the chages of the files inside, not just new directories you create.
:::