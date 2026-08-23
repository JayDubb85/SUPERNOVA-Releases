---
layout: default
title: Release Notes
description: SUPERNOVA public release notes
---

# Release Notes

Public release downloads are available on GitHub:

[Latest SUPERNOVA Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## v2.1.5

Highlights:

- Made Galaxy Windows repair a dedicated, non-destructive operation that
  preserves SUPERNOVA configuration and database state.
- Repair now restores or refreshes the Windows service, machine permissions,
  recovery settings, readiness, and NEXUS registration without rerunning
  database migrations.
- Includes the Dashboard redesign and unified localhost Browse experience from
  the v2.1.3/v2.1.4 release candidates.

## v2.1.4

Highlights:

- Fixed Galaxy Windows repair so an existing SUPERNOVA service registration is
  safely reused and reconfigured instead of being recreated.
- Rebuilt the Dashboard in PULSAR's operational style with rolling migration
  metrics, service health, throughput, database state, and disk utilization.
- Unified file and directory Browse actions around a consistent localhost
  server-filesystem picker with automatic path population.
- Updated new Galaxy Windows installations to expose ready localhost filesystem
  drives while preserving administrator-defined filesystem root restrictions.

## v2.1.3

Highlights:

- Rebuilt the Dashboard in PULSAR's operational style with rolling migration
  metrics, service health, throughput, database state, and disk utilization.
- Unified every file and directory Browse action around a consistent
  server-filesystem picker that restores the current path and automatically
  populates the selected value.
- Updated Galaxy Windows installations to expose ready localhost filesystem
  drives while preserving administrator-defined filesystem root restrictions.
- Added automated frontend and backend coverage for dashboard reporting and
  server-path file and directory selection.

## v2.1.2

Highlights:

- Hardened the DICOM Header Viewer, Directory Validator, Statistics Generator,
  DICOM Anonymizer, DICOMDIR, and Duplicate Finder workflows.
- Combined DICOMDIR creation and existing-file review into one DICOMDIR tool.
- Added safer duplicate quarantine integrity checks and more accurate DICOM-only
  statistics and Part 10 validation reporting.
- Removed the Migration Planner tool and its unused PDF dependency.
- Updated the Galaxy Windows release workflow so validated installers publish
  correctly from the private source repository.
- Retired standalone Windows and macOS application builds; all future releases
  are NEXUS-managed Galaxy SUPERNOVA releases.

## v2.1.1

Highlights:

- Introduced the NEXUS-hosted Galaxy browser edition and in-app Settings page.
- Migrated Galaxy persistence to an isolated PostgreSQL database built from
  versioned migrations with default-only clean installation.
- Added an independent Windows Server installer, service recovery, repair,
  pre-upgrade backup, preserve-by-default uninstall, checksums, and SBOMs.
- Added NEXUS authentication/proxy enforcement, runtime ownership, readiness
  diagnostics, PHI-safe logging, and recovery coverage for all seven migration
  workflow types.
- Assigned the default DICOM listener to `SUPERNOVA:11116`.
- Hardened Windows service permissions with a per-service SID and machine-wide
  ProgramData paths, and separated installer-owned schema migration from
  read-only service startup checks.

## v2.1.0

This transitional release retained legacy desktop assets while Galaxy Windows
installer validation was completed. Galaxy administrators should use v2.1.1
or newer.

## v2.0.12

Highlights:

- Added DICOM tag manipulation actions to remove an exact prefix or suffix from existing tag values.
- Updated directory-output routing so Patient ID based folders can use transformed Patient IDs.
- Changed macOS distribution to Apple Silicon only and removed Intel macOS build targets.
- Hardened macOS release publishing so Mac assets no longer depend on Windows creating the release first.

## v2.0.11

Highlights:

- Added lock-aware SQLite retry/backoff around migration queue, heartbeat, progress, and failed-file writes.
- Added a directory-destination option to preserve unreadable DICOM candidates as-is under `_UNREADABLE_DICOM`.
- Kept PACS destinations strict so unreadable or invalid DICOM objects are logged and skipped instead of being sent to a DICOM node.
- Improved scanner handling for large mixed directories by skipping unsupported file extensions before DICOM validation.
- Added workspace/build guards and macOS signing cleanup for more reliable local and release builds.

## v2.0.10

Highlights:

- Improved large directory migration throughput with concurrent file processing while preserving directory routing guardrails.
- Added a separate Conversion Worker Count setting for transfer syntax conversion tuning.
- Reduced work-queue database contention with cached queue-table setup and bulk terminal status updates.
- Improved Directory-to-PACS and PACS Relay transfer syntax conversion worker pooling.
- Cleaned backend migration test noise and expanded work-queue coverage for bulk status updates.

## v2.0.9

Highlights:

- Hardened large Directory-to-Directory migrations with bounded scan queues and periodic scanner/processor status logging.
- Added conservative InstitutionName/StudyDate routing guardrails so metadata backfill can still work without letting unresolved files stall a migration indefinitely.
- Applied large-directory queue backpressure and status logging to Directory-to-PACS workflows.
- Added directory-destination routing safeguards for PACS Relay, PACS-to-Directory, and CSV-guided PACS directory output.
- Improved PACS-to-PACS resilience by retrying transient C-MOVE failures and keeping queue leases alive during long-running moves.

## v2.0.8

Highlights:

- Restored PACS-to-PACS regular-mode throughput by using the configured migration worker count instead of forcing single-study C-MOVE processing.
- Added a visible Migration Worker Count setting for workflows that process queued migration work items.
- Renamed the existing thread-pool setting to C-STORE Connection Count so direct-send DICOM connection tuning remains available and clearer.
- Improved PACS-to-PACS startup logging to report the exact concurrent C-MOVE worker count used by each migration.
- Clarified Regular Mode and Performance Mode descriptions in the migration wizard.

## v2.0.7

Highlights:

- Fixed SQLite lock contention that could stop directory-to-directory migrations shortly after startup.
- Reduced directory scanner write-lock duration by committing queued work before handing batches to processors.
- Hardened durable work queue updates to avoid SQLAlchemy autoflush rollback traps after busy database writes.
- Fixed directory-to-directory finalization so a crashed processing loop cannot be reported as completed.
- Applied the directory scanner lock-window fix to Directory to PACS workflows as well.

## v2.0.6

Highlights:

- Hardened PACS-to-PACS migrations with a safe regular-mode C-MOVE default and explicit performance-mode concurrency.
- Added C-MOVE failure-storm protection so SUPERNOVA stops claiming queued work when a remote PACS/destination begins failing repeatedly.
- Fixed PACS-to-PACS final status reporting so mixed success/failure runs are marked partial instead of completed.
- Improved failed migration records with more useful C-MOVE error details.
- Fixed duplicate SUCCESS CSV rows when analytics/export generation runs more than once.
- Improved in-app update lookup reliability when GitHub release metadata is temporarily stale or split across release records.

## v2.0.5

Highlights:

- Added durable database-backed migration work queues and recovery monitoring for long-running migrations.
- Added regular and performance query-processing modes for PACS query/retrieve workflows.
- Improved dashboard progress visibility for queued, active, completed, failed, and retryable work.
- Hardened CSV audit logging for concurrent workers and accurate partial migration counts.
- Improved migration wizard layout and added visible dropdown arrows across the app.

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
