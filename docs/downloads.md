---
layout: default
title: Downloads
description: Download the Galaxy SUPERNOVA installer
---

# Downloads

SUPERNOVA downloads are published as GitHub Release assets. Use the latest release unless support asks you to test a specific version.

[SUPERNOVA Latest Release](https://github.com/JayDubb85/SUPERNOVA-Releases/releases/latest)

## Which File Should I Download?

| Platform | Download |
|----------|----------|
| Galaxy on Windows Server | `SUPERNOVA-Setup-*-x64.exe` |
Standalone Windows and macOS editions are retired and are not produced for new releases.

## Checksums

Each release includes SHA-256 checksum files. These can be used to confirm a downloaded installer matches the published release artifact.

## Windows

The Galaxy Windows release includes SHA-256 checksums and CycloneDX software
bills of materials. GitHub-hosted build-provenance attestations are requested
by the release workflow but are not currently available for the private,
user-owned source repository. Windows Authenticode signing is also not
configured yet. If SmartScreen warns about an unknown publisher, confirm the
installer came from the official SUPERNOVA release page and verify its checksum
before continuing.

## Release Artifacts

Galaxy administrators should download the hyphenated
`SUPERNOVA-Setup-*-x64.exe` server installer. Older desktop artifacts remain
historical and must not be used for current deployments.
