---
layout: default
title: SUPERNOVA Documentation
description: Public SUPERNOVA user documentation
---

# SUPERNOVA

SUPERNOVA is a NEXUS-managed Galaxy Imaging Suite application for moving studies between folders and PACS systems. NEXUS provides the authenticated browser gateway and shared platform services while SUPERNOVA runs as an independently installed Galaxy service.

## What SUPERNOVA Does

- Configures source PACS, destination PACS, source folders, and destination folders.
- Runs directory-to-directory, directory-to-PACS, PACS-to-PACS, and PACS relay migrations.
- Tracks progress, failures, retries, migration reports, and history.
- Provides DICOM tools for connectivity tests, query/retrieve, header review, validation, selected-tag de-identification, DICOMDIR, statistics, and duplicate checks.
- Runs inside the organization's NEXUS environment and network controls.

## Public Downloads

Download the latest installer from the public release page:

[Latest SUPERNOVA Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## Recommended Reading

1. [Downloads](downloads.html): download the Galaxy Windows Server installer.
2. [Install](install.html): install SUPERNOVA into NEXUS.
3. [Quick Start](quick-start.html): configure your first source, destination, and migration.
4. [Migration Workflows](migration-workflows.html): understand which workflow fits your job.
5. [Data Safety](data-safety.html): review operational safeguards before using real clinical data.

## Current Platform Notes

- Galaxy Windows builds are installed and lifecycle-tested against NEXUS in GitHub Actions.
- Windows SmartScreen may warn about an unknown publisher until Windows code signing is added.

## Source Code

The source code is private. This public repository contains downloads, public documentation, issues, and release notes only.
