---
layout: post
title: CSV format
date: 2019-12-12 09:30:00
categories: [Data]
tags: [csv]
---

[RFC 4180](https://www.ietf.org/rfc/rfc4180.txt) defines the CSV format according to the following points:

**CSV Format**

1.  Each record is located on a separate line, delimited by a line break (CRLF).  
For example:

		aaa,bbb,ccc CRLF

		zzz,yyy,xxx CRLF

2.  The last record in the file may or may not have an ending line break.  
For example:

		aaa,bbb,ccc CRLF

		zzz,yyy,xxx

3.  There maybe an optional header line appearing as the first line of the file with 		 the same format as normal record lines.  This header will contain names corresponding to the fields in the file and should contain the same number of fields as the records in the rest of the file (the presence or absence of the header line should be indicated via the optional "header" parameter of this MIME type).  For example:

		field_name,field_name,field_name CRLF

		aaa,bbb,ccc CRLF

		zzz,yyy,xxx CRLF
