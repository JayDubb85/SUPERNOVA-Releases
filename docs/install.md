---
layout: default
title: Install SUPERNOVA
description: Install SUPERNOVA on macOS and Windows
---

# Install SUPERNOVA

SUPERNOVA is distributed as a bundled desktop app. The local backend starts automatically when the app opens, so end users do not need to install Python, Node.js, or separate services.

## macOS Install

1. Download the correct `.dmg` from the [latest release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest).
2. Open the `.dmg`.
3. Drag `SUPERNOVA.app` to the Applications folder if prompted.
4. Open SUPERNOVA from Applications.
5. Allow macOS to verify the application.

macOS release builds are Developer ID signed and notarized.

## Windows Install

1. Download `SUPERNOVA.Setup.*.exe` from the [latest release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest).
2. Run the installer.
3. If SmartScreen appears, confirm the file came from the official SUPERNOVA release page.
4. Complete the installer and open SUPERNOVA.

Windows builds are bundled and verified, but Windows code signing is not configured yet. This means Windows may describe the publisher as unknown until signing is added.

## First Launch

When SUPERNOVA starts, it launches two pieces together:

- The desktop interface.
- A local backend service on the same workstation.

If the app reports that the backend is offline, close SUPERNOVA, wait a few seconds, and reopen it. If the issue continues, see [Logs and Troubleshooting](troubleshooting.html).

## Network and Firewall Notes

SUPERNOVA may need local network access when connecting to PACS systems. Your firewall or endpoint protection software may ask whether to allow the app to communicate on the network. Allow access only on trusted networks used for DICOM migration work.
