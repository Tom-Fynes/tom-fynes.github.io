---
id: Git Add
sidebar_position: 2
---

Once you’ve made changes in your project, the next step is to stage those changes using `git add`. This prepares them to be included in your next commit.

## What Does `Git Add` Do?

`Git add` moves changes from the Working Directory to the Staging Area. If you edit a file and don’t run git add, the changes will not be added to your next commit. 

### Examples

Add a single file
```bash
git add <filename>
```

Add multiple files

```bash
git add file1.txt file2.txt
```

Add all changes

```bash
git add .
```

Add all changes (including deletions)

```bash
git add -A
```