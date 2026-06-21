---
layout: default
title: Logs and Troubleshooting
description: Troubleshoot SUPERNOVA installs and migrations
---

# Logs and Troubleshooting

This page lists common issues and what to check first.

## Backend Shows Offline

Try these steps:

1. Close SUPERNOVA.
2. Wait a few seconds.
3. Reopen the app.
4. Confirm no other process is using the local backend port.
5. Check security software that may block local services.

If the problem continues, include your operating system and SUPERNOVA version in a support issue.

## PACS C-ECHO Fails

Check:

- Host or IP address.
- Port.
- Called AE Title.
- Calling AE Title expected by the PACS.
- Firewall rules.
- Whether the PACS allows your workstation.

## Migration Finds No Studies

Check:

- Patient ID spelling.
- Study date format.
- Modality filter.
- Query level supported by the source PACS.
- Whether the studies actually exist on the source system.

## Destination Rejects Files

Check:

- Destination AE Title, host, and port.
- Destination storage permissions.
- Supported SOP Classes.
- Supported transfer syntaxes.
- Whether transformation rules changed required tags.

## Disk Space Problems

Large migrations can use significant temporary storage, especially PACS relay workflows. Confirm there is enough free space before starting.

## Reporting an Issue

Open a public issue here:

[SUPERNOVA Issues](https://github.com/JayDubb85/SUPERNOVA-Releases/issues)

Include:

- SUPERNOVA version.
- Operating system.
- Migration workflow.
- Source and destination type.
- Error message.

Do not include protected health information, patient identifiers, PACS credentials, or real DICOM files.
