---
layout: post
title: 视频流录制软件（Live Stream Recorder）说明书
date: 2021-04-09
author: 贺斌
tags: [录制,拉流,直播,流媒体,SRT,RTMP,ffmpeg]
categories: 流媒体
styles: [highlight.css, post.css]
scripts: [post.js]
---

* TOC 
{:toc}

# 1	服务器的安装部署

## 1.1	Live Stream Recorder

Live Stream Recorder 使用Delphi 10.2.3开发。可以自动录制或手动录制rtmp、m3u8等视频流。基于ffmpeg开发，直接将视频流中的视音频数据封装成mp4、mkv、ts等文件，不进行重新编码，降低CPU使用率。

具有Web远程管理功能，需要注册为增强版。Web远程管理功能采用4.1.2部分介绍的代理服务（Apache+PHP）实现。

建议安装到Windows Server操作系统上。把软件包解压到D:\LiveStreamRecorder（举例），双击“LiveStreamRecorder.exe”启动程序。

在菜单“工具”“设置”下，可进行如下设置。
 
- 录制视频保存路径：有效的本地磁盘路径，分区可用空间充足。
- 保存类型：默认是mp4，该格式在录制中如果程序出现意外，会导致录制的视频文件损坏。建议使用ts格式。
- HTTP端口：默认8081，可根据实际清空修改。 

## 1.2	代理服务（Apache + PHP）

如果不需要使用Web远程管理功能，可跳过阅读本小节。

phpStudy Pro是一个PHP调试环境的程序集成包，软件一键安装，安装完成之后不在需要配置就能够使用，非常的简单方便，可以说是非常好用的PHP调试环境。

通过 phpstudy pro 提供的Apache、PHP功能作为Web服务器提供远程管理功能，同时作为代理服务器与Live Stream Recorder的API接口进行数据交互。

网站目录：D:\phpstudy_pro\WWW（举例），把代理服务软件包解压到D:\software\phpstudy_pro\WWW\LiveStream中。

IP地址：202.112.18.8                    （举例）

HTTP端口：8082                        （举例）

参考下图，修改网站目录下LiveStream\js\record_tasks.js文件中的record_task_manage_url的值为Live Stream Recorder运行主机的实际IP地址和端口。
 
需要新建网站虚拟目录 /Clips（对应于F:\clips目录），用于远程http下载或预览素材。通过修改Apache配置文件D:\phpstudy_pro\Extensions\Apache2.4.39\conf\httpd.conf 实现，如下图，实际中可以根据需要参照修改。
 

## 1.3	防火墙

Web远程管理功能需要在Windows防火墙开放8082端口（Apache HTTP 端口）。


# 2	 软件使用

## 2.1	Live Stream Recorder 的使用

### 2.1.1	 录制任务管理

新建、修改、删除录制任务。

- 任务名：录制任务的名称，便于识别，不允许重复。录制的文件会存放在录制视频保存路径下的以任务名命名的文件夹中。
- 流地址：支持rtmp、m3u8等视频流。
- 保存路径：服务器上的本地磁盘路径。默认为设置中预置的路径。
- 手动录制：勾选后，只能手动开始或停止录制；不勾选，可以定时自动开始录制，到时间自动停止录制。
- 重复：不勾选“手动录制”，可以设置每周的哪些天的什么时间段开始录制和结束。不勾选周日——周六，可以设定一个具体的时间段开始录制和结束。
 
### 2.1.2	用户管理

设置Web远程管理的登录用户及其权限。增强版专用。注意：服务器端运行的Live Stream Recorder不需要登录，直接以admin运行。
 
### 2.1.3	HTTP Server

提供远程管理API接口，供Apache + PHP调用。增强版专用。
 
## 2.2	远程管理的使用

管理地址：http://202.112.18.8:8082/LiveStream/ （举例）。增强版专用。管理员：admin，初始密码：admin。

主界面及功能和服务器端的Live Stream Recorder基本一样。根据登录用户的权限的不同，用户可用的功能亦有所不同。
  
点击“下载文件”按钮，可以浏览服务器已经录制完成的视频文件，可以在线预览也可以下载到本地电脑上。注意：在线预览需要浏览器支持Flash功能。
 
## 2.3	日志
Live Stream Recorder有比较完备的运行日志，分为主日志、录制日志、HTTP日志。主日志记录程序开始录制、停止录制等主要信息。录制日志记录ffmpeg运行的输出信息。HTTP日志记录所有接口的调用信息。这些日志位于程序安装目录下的Log目录内。

