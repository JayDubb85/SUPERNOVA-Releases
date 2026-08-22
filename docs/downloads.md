---
layout: default
title: Downloads
description: Download SUPERNOVA Galaxy and desktop installers
---

# Downloads

SUPERNOVA downloads are published as GitHub Release assets. Use the latest release unless support asks you to test a specific version.

[SUPERNOVA Latest Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## Which File Should I Download?

| Platform | Download |
|----------|----------|
| Galaxy on Windows Server | `SUPERNOVA-Setup-*-x64.exe` |
| Legacy Apple Silicon desktop | `SUPERNOVA-*-arm64.dmg` from v2.0.16 |

SUPERNOVA macOS builds support Apple Silicon Macs only.

## Checksums

Each release includes SHA-256 checksum files. These can be used to confirm a downloaded installer matches the published release artifact.

## macOS

macOS release builds are signed and notarized. Most users should be able to open the `.dmg` normally.

If macOS warns about a download, confirm that the file came from the official SUPERNOVA release page and that you selected the Apple Silicon build.

## Windows

The Galaxy Windows release includes SHA-256 checksums, CycloneDX software bills
of materials, and GitHub build-provenance attestations. Windows Authenticode
signing is not configured yet. If SmartScreen warns about an unknown publisher,
confirm the installer came from the official SUPERNOVA release page and verify
its checksum before continuing.

## Release Artifacts

Some older release files, such as `.blockmap`, `latest.yml`, or `.zip`, are used
by legacy desktop update tooling. Galaxy administrators should download the
hyphenated `SUPERNOVA-Setup-*-x64.exe` server installer.
