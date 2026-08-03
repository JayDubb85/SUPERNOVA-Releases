---
layout: default
title: Release Notes
description: SUPERNOVA public release notes
---

# Release Notes

Public release downloads are available on GitHub:

[Latest SUPERNOVA Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## v2.0.4

Highlights:

- Rebuilt the Duplicate Finder for large production directories with streaming scans, persistent duplicate review sessions, and CSV audit output.
- Added in-app duplicate review tools for quarantining, restoring, purging quarantined files, cleaning empty folders, and marking groups resolved.
- Added group and file selection controls for bulk quarantine and bulk resolve workflows.
- Added duplicate scan progress on the dashboard, including current directory feedback during scans.
- Improved duplicate reporting with transfer syntax, metadata, file size, hash, and difference summaries.

## v2.0.3

Highlights:

- Populates the migration CSV modifications column with transfer syntax conversion, skipped conversion, failed conversion, and no-modification audit notes.
- Adds clearer CSV audit text for PACS-to-PACS migrations that are managed by C-MOVE without local DICOM rewriting.

## v2.0.2

Highlights:

- Added additional DICOM pixel codec plugins for better JPEG, JPEG 2000, JPEG-LS, and RLE decode coverage.
- Added codec/plugin availability diagnostics to transfer syntax conversion logs.
- Preserves/copies DICOM objects with their original transfer syntax when compressed pixel data cannot be decoded.

## v2.0.1

Highlights:

- Added a required directory destination collision policy: skip existing files, replace existing files, or keep both using numbered filenames.
- Fixed migration progress reporting when directory scan estimates are lower than the final processed file count.
- Hardened progress API responses so completed migrations cannot exceed 100% and break dashboard polling.

## v2.0.0

Highlights:

- Added crash isolation for transfer syntax conversion so native codec failures do not take down the main backend service.
- Added log rotation for application and DICOM logs, capped at 100 MB per file with retained backups.
- Added resume-friendly directory output handling that can skip files already present in the destination.
- Reduced high-volume transfer syntax success logging during large migrations.
- Added current-directory progress feedback during directory scanning.
- Updated core frontend and backend dependencies for the 2.0 release line.

## v0.1.13

Highlights:

- Expanded the DICOM Anonymizer to support file and directory anonymization with selectable DICOM tags.
- Added live progress feedback for directory anonymization, including processed file counts and current file details.
- Improved directory anonymization speed with bounded parallel file processing.
- Skipped hidden system files such as `.DS_Store` during directory anonymization.
- Added anonymize support to DICOM tag manipulation rules using DICOM VR-safe replacement values.
- Hardened CSV-guided migration preview handling so empty preview matches cannot proceed unnoticed.
- Improved retry logging behavior around retry exhaustion.

## v0.1.12

Highlights:

- Added Institution Name as an optional root folder for directory-output workflows.
- Added smarter Study Date and Institution Name backfill for directory organization when matching study data is available.
- Added an Unknown Institution review workflow so users can locally assign institution names after a migration and reprocess files into the correct folders.
- Improved directory organization so Study Date and Patient ID layouts separate exams by accession number or numbered study folders.
- Added storage path details to migration CSV output.
- Added temp DICOM cleanup after successful processing.
- Added SCP port diagnostics to help identify which process is using the configured listener port.
- Improved transfer syntax handling so DICOM objects with missing or invalid pixel payloads can preserve their original syntax while still applying header-only updates.

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
