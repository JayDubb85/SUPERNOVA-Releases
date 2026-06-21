---
layout: default
title: Migration Workflows
description: SUPERNOVA migration workflow guide
---

# Migration Workflows

SUPERNOVA supports four primary migration workflows.

## Directory to Directory

Use this when you need to copy or reorganize DICOM files from one folder to another.

Typical use cases:

- Preparing a clean output folder.
- Testing filters and transformations.
- Organizing files before sending them elsewhere.

Review destination free space before starting.

## Directory to PACS

Use this when DICOM files already exist on disk and need to be sent to a destination PACS.

Before starting:

- Confirm the destination PACS details.
- Run C-ECHO.
- Start with a small test set.
- Confirm the destination PACS accepts the modalities and transfer syntaxes you are sending.

## PACS to PACS

Use this when the source PACS can send directly to the destination PACS.

This workflow depends heavily on PACS-side configuration. The source PACS may need to know the destination AE Title, host, and port.

## PACS Relay

Use this when SUPERNOVA should retrieve studies first, optionally process them, and then send them to a destination PACS.

This is useful when:

- You need local processing or transformation.
- Direct PACS-to-PACS routing is not available.
- You want SUPERNOVA to track intermediate progress and cleanup.

Make sure temporary storage has enough free space.

## Filters

Filters reduce migration scope. Useful filters include:

- Patient ID.
- Patient Name.
- Study Date.
- Modality.
- Accession Number.
- Institution Name.

When testing, use a narrow date range or a single Patient ID.

## During a Migration

Use the progress view to monitor status. Depending on the workflow, you may be able to pause, resume, cancel, retry failed files, or generate a report.

## After a Migration

Review:

- Migration history.
- Failed-file records.
- CSV or report output.
- App and DICOM logs.

Do not delete source data until the destination has been validated through your normal operational process.
