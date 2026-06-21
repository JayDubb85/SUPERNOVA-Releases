---
layout: default
title: Downloads
description: Download SUPERNOVA desktop installers
---

# Downloads

SUPERNOVA downloads are published as GitHub Release assets. Use the latest release unless support asks you to test a specific version.

[SUPERNOVA Latest Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## Which File Should I Download?

| Platform | Download |
|----------|----------|
| Apple Silicon Mac | `SUPERNOVA-*-arm64.dmg` |
| Intel Mac | `SUPERNOVA-*.dmg` without `arm64` in the name |
| Windows | `SUPERNOVA.Setup.*.exe` |

Most modern MacBook Pro, MacBook Air, Mac mini, and iMac models use Apple Silicon. Older Intel Macs should use the Intel build.

## Checksums

Each release includes SHA-256 checksum files. These can be used to confirm a downloaded installer matches the published release artifact.

## macOS

macOS release builds are signed and notarized. Most users should be able to open the `.dmg` normally.

If macOS warns about a download, confirm that the file came from the official SUPERNOVA release page and that you selected the correct Apple Silicon or Intel build.

## Windows

Windows builds are currently unsigned. If SmartScreen warns about an unknown publisher, confirm the installer came from the official SUPERNOVA release page before continuing.

## Release Artifacts

Some release files, such as `.blockmap`, `latest.yml`, or `.zip`, are used by packaging and update tooling. Most users should download the `.dmg` on macOS or the `SUPERNOVA.Setup.*.exe` installer on Windows.
