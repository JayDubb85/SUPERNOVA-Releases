---
layout: default
title: Quick Start
description: Run your first SUPERNOVA migration
---

# Quick Start

This guide walks through the basic setup for a first migration.

## 1. Open SUPERNOVA

Launch the desktop app. Confirm the status area shows that the backend is connected.

## 2. Configure a Source

A source is where DICOM studies come from. SUPERNOVA supports:

- A local source folder.
- A source PACS node.

For a local folder, choose a folder that contains DICOM files. For a PACS source, enter the AE Title, host, and port provided by your PACS administrator.

## 3. Configure a Destination

A destination is where studies are sent or written. SUPERNOVA supports:

- A local destination folder.
- A destination PACS node.

For PACS destinations, run a C-ECHO test before starting a migration.

## 4. Choose a Migration Workflow

Pick the workflow that matches your job:

| Goal | Workflow |
|------|----------|
| Copy DICOM files from one folder to another | Directory to Directory |
| Send files from a folder to PACS | Directory to PACS |
| Move studies directly between PACS systems | PACS to PACS |
| Retrieve through SUPERNOVA, process, then send onward | PACS Relay |

## 5. Add Filters

Use filters to limit the migration scope. Common filters include Patient ID, Patient Name, Study Date, Modality, Accession Number, and Institution Name.

Start narrow when testing a new source or destination.

## 6. Preview and Start

Preview the migration when available, review the settings, then start the migration.

During the run, monitor:

- Current status.
- Processed files or studies.
- Failed files.
- Runtime messages.

## 7. Review Results

After the migration finishes, review the migration history, report, failed-file list, and logs.

If there are failures, review the error messages before retrying. Do not blindly retry large jobs without understanding the failure type.
