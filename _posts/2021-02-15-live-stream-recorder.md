---
layout: post
title: 视频流录制软件（Live Stream Recorder）
author: 贺斌
tags: 录制 拉流 直播 流媒体 SRT RTMP ffmpeg
categories: 流媒体
---

* TOC
{:toc}

视频流录制软件，支持对rtmp、rstp、srt、hdl、hls等视频流的手动、自动录制保存。即可以作为客户端软件运行在单机，也可以集成到视频直播云平台中实现对视流频的录制任务的远程管理、录制文件的预览和下载。

<a data-fancybox="gallery" href="{{'/LiveStreamRecorder.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/LiveStreamRecorder.jpg' | prepend: site.imgrepo }}" alt="视频流录制软件" />
</a>

## 主要功能

- 支持将rtmp、rtsp、srt、hls、hdl视频流保存到文件。 
- 支持的保存的文件格式有 mp4、mkv、ts、flv 等。
- 实现对录制任务的管理、调度。 
- 支持服务器集群以容纳更多的录制任务。 
- 支持录制任务的手动、定时开始和结束。 
- 支持对服务器状态的监看。 
- 支持多用户Web远程管理。

`软件主界面：`<br/>
<a data-fancybox="gallery" href="{{'/LiveStreamRecorder-Server.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/LiveStreamRecorder-Server.jpg' | prepend: site.imgrepo }}" alt="视频流录制软件主界面" />
</a>

`远程控制 Web 页面：`<br/>
<a data-fancybox="gallery" href="{{'/LiveStreamRecorder-Remote.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/LiveStreamRecorder-Remote.jpg' | prepend: site.imgrepo }}" alt="频流录制软件远程控制 Web 页面" />
</a>


## 产品选择

- **未注册** － 只能添加一条录制任务，不支持Web远程管理。
- **标准版** － 不支持Web远程管理。
- **增强版** － 全部功能（需要联系作者获取此功能）。

## 软件下载

<a href="javascript:alert('请联系作者！');">标准版</a> \| <a href="javascript:alert('请联系作者！');">增强版</a> 

## 软件说明书

[视频流录制软件说明书](/docs/live-stream-recorder-help)

