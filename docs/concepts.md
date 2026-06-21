---
layout: default
title: Core Concepts
description: SUPERNOVA concepts for end users
---

# Core Concepts

SUPERNOVA uses a few DICOM and migration concepts throughout the app.

## Source

A source is where DICOM data comes from. It can be a folder on disk or a PACS node on the network.

## Destination

A destination is where DICOM data goes. It can be a folder on disk or a PACS node.

## AE Title

An AE Title identifies a DICOM application entity. PACS systems often require the calling AE Title to be approved before they accept connections.

## C-ECHO

C-ECHO is a DICOM connectivity test. Use it to confirm a PACS node is reachable and accepts associations from SUPERNOVA.

## C-FIND

C-FIND queries a PACS for matching studies, series, or instances.

## C-MOVE

C-MOVE asks a PACS to send matching DICOM objects to a destination AE Title.

## C-STORE

C-STORE sends DICOM objects to a destination PACS.

## Transfer Syntax

Transfer syntax describes how DICOM data is encoded. Some workflows can preserve or convert transfer syntax depending on the source files, destination support, and selected settings.

## Transformation Rules

Transformation rules modify selected DICOM tags during supported workflows. Use them carefully and test with non-production data first.

## Local Backend

The desktop app starts a local backend service. This backend performs migration work, DICOM networking, logging, and database updates. It is intended for trusted local workstation use.
