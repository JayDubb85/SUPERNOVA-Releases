---
layout: default
title: Data Safety
description: Operational safety guidance for SUPERNOVA users
---

# Data Safety

SUPERNOVA is intended for controlled workstation and network environments. DICOM migration can involve protected health information and clinical systems, so use careful operational controls.

## Protected Health Information

DICOM files often contain patient identifiers in metadata and sometimes burned into pixel data.

Do not upload DICOM files, logs containing patient information, screenshots with identifiers, or PACS credentials to public GitHub issues.

## Test Before Production

Before running a real migration:

1. Test C-ECHO against source and destination PACS nodes.
2. Run a narrow query or small directory test.
3. Confirm the destination receives and displays studies correctly.
4. Review logs and failed-file output.
5. Confirm storage paths and temporary paths have enough free space.

## Validate Destination Data

After migration, validate the destination through your normal operational process. SUPERNOVA can report send status and errors, but the receiving system should still be checked.

## Transformation Rules

Transformation rules can change DICOM metadata. Test rules carefully before using them on production data.

Changing identifiers, UIDs, institution tags, or patient tags can affect downstream matching and clinical workflows.

## Network Exposure

SUPERNOVA does not currently include a user authentication layer. Run it only on trusted workstations and controlled networks.

Do not expose the local backend service directly to untrusted networks.

## Backups

Keep source data available until the migration has been validated. Do not treat a migration as complete solely because files were sent.
