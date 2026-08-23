---
layout: default
title: Install SUPERNOVA
description: Install SUPERNOVA in the Galaxy suite
---

# Install SUPERNOVA

SUPERNOVA 2.1 and newer is an independently installed Galaxy product. Install
the NEXUS foundation first; NEXUS provides authentication, the shared browser
gateway, and PostgreSQL. The SUPERNOVA installer adds only its product service,
database, configuration, and application files.

## Galaxy Windows Server Install

1. Install or update NEXUS to version 1.2.2 or newer on the Windows server.
2. Sign out of Windows and sign back in once so the NEXUS native-picker broker
   starts in the interactive desktop session.
3. Download `SUPERNOVA-Setup-*-x64.exe` from the [latest release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest).
4. Verify the published SHA-256 checksum.
5. Run the installer as a local administrator on the NEXUS server.
6. Sign in to NEXUS and open SUPERNOVA from the Applications page.

Windows builds are bundled and verified, but Windows code signing is not configured yet. This means Windows may describe the publisher as unknown until signing is added.

The installer creates the restricted `supernova` PostgreSQL role and database,
runs schema migrations, installs the `GalaxySupernova` service, verifies
readiness, and registers the application with NEXUS. Repair and ordinary
uninstall preserve product data.

## Network and Firewall Notes

SUPERNOVA may need local network access when connecting to PACS systems. Your firewall or endpoint protection software may ask whether to allow the app to communicate on the network. Allow access only on trusted networks used for DICOM migration work.
