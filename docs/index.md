---
layout: default
title: SUPERNOVA Documentation
description: Public SUPERNOVA user documentation
---

# SUPERNOVA

SUPERNOVA is a local DICOM migration workstation for moving studies between folders and PACS systems. It packages a desktop interface and local backend together so the application can run on a workstation without requiring the end user to install Python, Node.js, or command-line services.

## What SUPERNOVA Does

- Configures source PACS, destination PACS, source folders, and destination folders.
- Runs directory-to-directory, directory-to-PACS, PACS-to-PACS, and PACS relay migrations.
- Tracks progress, failures, retries, migration reports, and history.
- Provides DICOM tools for connectivity tests, query/retrieve, header review, validation, anonymization, DICOMDIR, duplicate checks, and migration planning.
- Runs locally so migration activity stays under your workstation and network controls.

## Public Downloads

Download the latest installer from the public release page:

[Latest SUPERNOVA Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## Recommended Reading

1. [Downloads](downloads.html): choose the correct installer for your computer.
2. [Install](install.html): install and open SUPERNOVA on macOS or Windows.
3. [Quick Start](quick-start.html): configure your first source, destination, and migration.
4. [Migration Workflows](migration-workflows.html): understand which workflow fits your job.
5. [Data Safety](data-safety.html): review operational safeguards before using real clinical data.

## Current Platform Notes

- macOS release builds are Developer ID signed, notarized, stapled, and verified.
- Windows builds are bundled and verified, but Windows code signing is not configured yet.
- Windows SmartScreen may warn about an unknown publisher until Windows code signing is added.

## Source Code

The source code is private. This public repository contains downloads, public documentation, issues, and release notes only.
