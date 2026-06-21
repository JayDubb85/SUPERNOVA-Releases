---
layout: default
title: DICOM Nodes
description: Configure PACS and directory sources and destinations
---

# DICOM Nodes

DICOM node setup determines whether SUPERNOVA can connect to your source and destination systems.

## Source PACS

A source PACS is queried or retrieved from. You usually need:

- Name.
- AE Title.
- Hostname or IP address.
- Port.
- Optional description.

Ask your PACS administrator whether the SUPERNOVA workstation must be added to an allowlist.

## Destination PACS

A destination PACS receives DICOM objects. You need the same connection details as a source PACS.

Always run C-ECHO before sending data to a destination.

## Directory Sources

A directory source is a local or mounted folder that contains DICOM files. Confirm the current user can read the folder and that it contains the expected files.

## Directory Destinations

A directory destination is where SUPERNOVA writes DICOM files. Confirm the current user can write to the folder and that the disk has enough free space.

## Connection Testing

Use C-ECHO to validate:

- The host is reachable.
- The port is open.
- The AE Title is accepted.
- Firewalls are not blocking the association.

If C-ECHO fails, fix connectivity before running a migration.

## Common PACS Setup Issues

| Symptom | Likely Cause |
|---------|--------------|
| Timeout | Wrong host, closed port, firewall, or network route issue |
| Association rejected | AE Title mismatch or PACS allowlist issue |
| Send fails after echo succeeds | Destination storage SCP permissions or transfer syntax support |
| Query returns no studies | Filters too narrow or query level mismatch |
