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

## macOS Install

1. Download the correct `.dmg` from the [latest release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest).
2. Open the `.dmg`.
3. Drag `SUPERNOVA.app` to the Applications folder if prompted.
4. Open SUPERNOVA from Applications.
5. Allow macOS to verify the application.

macOS release builds are Developer ID signed and notarized.

## Galaxy Windows Server Install

1. Install or update NEXUS on the Windows server.
2. Download `SUPERNOVA-Setup-*-x64.exe` from the [latest release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest).
3. Verify the published SHA-256 checksum.
4. Run the installer as a local administrator on the NEXUS server.
5. Sign in to NEXUS and open SUPERNOVA from the Applications page.

Windows builds are bundled and verified, but Windows code signing is not configured yet. This means Windows may describe the publisher as unknown until signing is added.

The installer creates the restricted `supernova` PostgreSQL role and database,
runs schema migrations, installs the `GalaxySupernova` service, verifies
readiness, and registers the application with NEXUS. Repair and ordinary
uninstall preserve product data.

## Legacy macOS desktop

The signed and notarized Apple Silicon desktop build remains available from the
v2.0.16 release while the Galaxy server edition is validated.

## Network and Firewall Notes

SUPERNOVA may need local network access when connecting to PACS systems. Your firewall or endpoint protection software may ask whether to allow the app to communicate on the network. Allow access only on trusted networks used for DICOM migration work.
