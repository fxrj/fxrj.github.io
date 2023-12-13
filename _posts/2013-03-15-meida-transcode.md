---
layout: post
title: 媒体文件转码上传系统
author: 贺斌
tags: 媒体文件 转码 上传 ffmpeg mencoder mplayer C/S FTP
categories: 多媒体
---

* TOC
{:toc}

电视节目制作的首要前提是资源安全，但随着节目来源渠道的日益广泛，每天都会有大量素材需要杀毒、转码后进入制作系统进行编辑。本软件系统解决了外来素材便捷、高效、安全的进入节目制作系统的问题。

**技术特点**

- 对媒体文件进行检查，根据文件结构，识别出文件的真实类型。
- 对媒体文件占用的磁盘空间进行有效管理。
- 采用C/S架构，支持多客户端同时转码上传。
- 所有上传的文件都有详细的日志记录。

`工作原理：`<br/>

<a data-fancybox="gallery" href="{{'/媒体文件转码上传系统-工作原理图.png' | prepend: site.imgrepo }}">
    <img src="{{'/媒体文件转码上传系统-工作原理图.png' | prepend: site.imgrepo }}" alt="媒体文件转码上传系统-工作原理图" />
</a>

`客户端主窗口：`<br/>

<a data-fancybox="gallery" href="{{'/媒体文件转码上传系统-客户端主窗口2.png' | prepend: site.imgrepo }}">
    <img src="{{'/媒体文件转码上传系统-客户端主窗口2.png' | prepend: site.imgrepo }}" alt="媒体文件转码上传系统-客户端主窗口" />
</a>

`Web用户管理：`<br/>

<a data-fancybox="gallery" href="{{'/媒体文件转码上传系统-Web用户管理.png' | prepend: site.imgrepo }}">
    <img src="{{'/媒体文件转码上传系统-Web用户管理.png' | prepend: site.imgrepo }}" alt="媒体文件转码上传系统-Web用户管理" />
</a>

`Web日志管理：`<br/>

<a data-fancybox="gallery" href="{{'/媒体文件转码上传系统-Web日志管理.png' | prepend: site.imgrepo }}">
    <img src="{{'/媒体文件转码上传系统-Web日志管理.png' | prepend: site.imgrepo }}" alt="媒体文件转码上传系统-Web日志管理" />
</a>

