# Changesets

This directory contains changesets for versioning and publishing packages.

## Creating a Changeset

```bash
bun changeset
```

Follow the prompts to:
1. Select which packages have changed
2. Choose the semver bump type (major, minor, patch)
3. Write a summary of changes

## Versioning Packages

```bash
bun version-packages
```

This updates package versions and CHANGELOGs based on changesets.

## Publishing

Publishing is automated via GitHub Actions on push to `main`.
