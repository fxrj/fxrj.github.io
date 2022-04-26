---
layout: post
title: 机房计时管理系统
tags: 机房管理 上机计时 C/S 分布式
categories: 网络管理
---

* TOC
{:toc}

机房计时控制管理软件采用C/S架构，客户端程序和计时统计服务使用Delphi 10.2开发，服务器端使用Apache 2.4.39 + MySQL 5.7.26数据库 + php 7.3.4，通信协议http，数据交换格式JSON。

![机房计时管理系统] [HostManage]

## 主要功能
- C/S架构，计时客户端采用轻量化设计； 
- 客户端自动记录用户上机时间，并对用户上机行为进行管理； 
- 采用HTTP+JSON方式进行客户端与服务器端通讯； 
- 后台管理程序提供用户、部门、主机、客户端的管理功能； 
- 对主机使用情况进行统计汇总，可按用户、部门、主机进行统计分析； 
- 操作简单，安全可靠、运行效率高、易维护。

---

[论文《电视台非编机房计时管理系统的设计与应用》][论文地址]

[HostManage]: {{"/%E6%9C%BA%E6%88%BF%E8%AE%A1%E6%97%B6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F-%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84.png" | prepend: site.imgrepo }}
[论文地址]:https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CJFD&dbname=CJFDLAST2021&filename=DSZM202110015&uniplatform=NZKPT&v=nsPYJJIzNwanzm74g-0HCBpIHnohTHTIqfcgS4h1qJAqgndFxr56264ngJwxJh6i