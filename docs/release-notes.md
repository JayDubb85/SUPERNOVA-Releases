---
layout: default
title: Release Notes
description: SUPERNOVA public release notes
---

# Release Notes

Public release downloads are available on GitHub:

[Latest SUPERNOVA Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## v0.1.8

Fixes:

- Improved PACS-to-PACS CSV audit rows so C-FIND accession number, institution name, and modality metadata are preserved when available.

## v0.1.7

Fixes:

- Fixed threaded PACS-to-PACS and directory-to-PACS transfers so worker threads no longer reuse live database-bound PACS configuration objects.

## v0.1.6

Fixes:

- Removed SUPERNOVA's hard-coded 2000-result assumptions from PACS query preview behavior.
- Improved C-FIND handling for large query result streams.
- Fixed stored PACS query results so one query can correctly contain multiple study rows.

## v0.1.0

Initial public desktop release.

Highlights:

- Bundled macOS and Windows desktop applications.
- Local backend starts with the desktop app.
- Directory and PACS migration workflows.
- DICOM utility tools.
- macOS release builds are signed and notarized.
- Windows builds are bundled and verified, but not yet code-signed.

## Future Releases

Future release notes will summarize installer changes, workflow updates, fixes, and known issues relevant to end users.
