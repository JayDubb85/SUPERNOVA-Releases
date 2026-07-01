---
layout: default
title: Release Notes
description: SUPERNOVA public release notes
---

# Release Notes

Public release downloads are available on GitHub:

[Latest SUPERNOVA Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## v0.1.11

Highlights:

- Added CSV-driven PACS migration support for Study UID, accession number, patient ID, and other selected query columns.
- Added PACS-to-directory migration support with directory organization options.
- Improved migration progress feedback, preview behavior, retry details, and failure CSV handling.
- Added native file and folder picker integration for packaged desktop builds.
- Improved DICOM tag transformations with prefix and suffix actions.
- Improved transfer syntax handling for objects that should preserve their original syntax.
- Fixed Settings validation so SUPERNOVA's own active SCP listener is not reported as a port conflict.
- Removed the unused dashboard Analytics widget.

## v0.1.10

Fixes:

- Fixed the Logs page so DICOM logs switch to the active migration-specific DICOM log file during migrations.
- Improved Logs page controls so refresh buttons keep their labels on one line.
- Added explicit DICOM tag transformation actions for prefixing and suffixing existing tag values.
- Fixed DICOM tag rule validation so delete-tag rules are accepted and applied consistently.

## v0.1.9

Fixes:

- Fixed Windows runtime storage defaults so logs, CSV audit files, temp DICOM files, and the local database use the writable per-user app data folder.
- Fixed Windows log file encoding so SUPERNOVA application and migration logs can write formatted status symbols reliably.
- Improved default settings initialization so CSV, log, and temp storage paths are persisted on fresh installs.

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
