---
layout: post
title: 多路推流软件（Live Stream Publisher）
author: 贺斌
tags: 推流 直播 流媒体 SRT RTMP ffmpeg
categories: 流媒体
---

* TOC
{:toc}

多路推流软件，支持视频流的多路分发，实现拉取rtmp、rtsp、srt、hls、hdl视频流后再通过rtmp、srt协议推流到其他流媒体服务器。实现对推流任务的管理、调度，支持服务器集群以容纳更多的推流任务。基于ffmpeg开发，拉取视频流后将视音频数据二次封装后推流，不进行重新编码，降低CPU使用率。即可以作为客户端软件运行在单机，也可以集成到视频直播云平台中实现对视流频的推流任务的远程管理。

![多路推流软件][LiveStreamPublisher]

**主要功能：**

- 实现拉取rtmp、rtsp、srt、hls、hdl视频流后再通过rtmp、srt协议推流到其他流媒体服务器。 
- 实现对推流任务的管理、调度。 
- 支持服务器集群以容纳更多的推流任务。 
- 支持推流任务的手动、定时开始和结束。 
- 支持对服务器状态的监看。 
- 支持多用户Web远程管理。

`软件主界面：`<br/>
![多路推流软件主界面][LiveStreamPublisher-Server]

`远程控制 Web 页面：`<br/>
![多路推流软件远程控制 Web 页面][LiveStreamPublisher-Remote]

---

[多路推流软件说明书](/docs/live-stream-publisher-help)


[LiveStreamPublisher]: {{"/LiveStreamPublisher.png" | prepend: site.imgrepo }}
[LiveStreamPublisher-Server]: {{"/LiveStreamPublisher-Server.png" | prepend: site.imgrepo }}
[LiveStreamPublisher-Remote]: {{"/LiveStreamPublisher-Remote.png" | prepend: site.imgrepo }}