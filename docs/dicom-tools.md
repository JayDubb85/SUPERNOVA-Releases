---
layout: default
title: DICOM Tools
description: SUPERNOVA DICOM utility tools
---

# DICOM Tools

SUPERNOVA includes tools for common DICOM migration checks.

## C-ECHO

Tests whether a PACS node is reachable and accepts DICOM associations.

Use this before any PACS migration.

## C-FIND

Queries a PACS for matching studies. Use it to confirm filters before running retrieval or migration work.

## C-MOVE

Requests that a PACS send studies to a destination AE Title.

## C-STORE

Sends DICOM objects to a destination PACS.

## Header Viewer

Reads DICOM metadata so you can inspect patient, study, series, and instance tags.

Do not copy protected health information into public support tickets.

## Directory Validation

Scans a folder and reports DICOM validity issues. Use it before large directory migrations.

## Anonymizer

Creates anonymized output for supported DICOM files. Validate anonymized output before sharing it outside your organization.

## Duplicate Finder

Finds duplicate DICOM objects, often by SOP Instance UID or related identifiers.

## Migration Planner

Reviews a folder and estimates migration scope. Use it to understand volume before starting a larger run.

## DICOMDIR Tools

SUPERNOVA can read, generate, and inspect DICOMDIR structures for media-oriented workflows.
