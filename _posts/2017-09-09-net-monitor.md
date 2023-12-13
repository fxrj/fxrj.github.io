---
layout: post
title: 节目生产网络监控系统
author: 贺斌
tags: 网络管理 资源监控 远程管理 C/S 分布式
categories: 网络管理
---

* TOC
{:toc}

节目生产网络监控软件可以实时收集节目生产网络的共享磁盘状态、服务器/工作站状态、服务运行状态等数据，发现异常情况时，通过大屏幕提醒、手机消息等方式通知技术人员。整套软件系统包括五个部分：服务监控客户端、监控分布客户端、信息汇聚服务、提醒服务、网监程序。

**技术特点**

- 两层结构分布式设计；
- 通过软件实现对后台各类服务工作状态的监控；
- 可获取服务运行状态、执行进度等数据；
- 支持对各业务子网监控内容的灵活自定义；
- 采用HTTP+JSON方式进行各级监控程序的数据交换；
- 支持数据通过网闸在高安全区与低安全区交互；
- 支持对服务器桌面的集中监看管理；
- 支持大屏显示网络监控数据；
- 发现异常支持手机消息通知。

`生产业务网的状态监控：`<br/>
<a data-fancybox="gallery" href="{{'/节目生产网络监控系统-生产业务网的状态监控.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/节目生产网络监控系统-生产业务网的状态监控.jpg' | prepend: site.imgrepo }}" alt="节目生产网络监控系统-生产业务网的状态监控" />
</a>

`服务器桌面多屏监控：`<br/>
<a data-fancybox="gallery" href="{{'/节目生产网络监控系统-服务器桌面多屏监控.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/节目生产网络监控系统-服务器桌面多屏监控.jpg' | prepend: site.imgrepo }}" alt="节目生产网络监控系统-服务器桌面多屏监控" />
</a>

`敦煌制作网任务监看：`<br/>
<a data-fancybox="gallery" href="{{'/节目生产网络监控系统-敦煌制作网任务监看.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/节目生产网络监控系统-敦煌制作网任务监看.jpg' | prepend: site.imgrepo }}" alt="节目生产网络监控系统-敦煌制作网任务监看" />
</a>

`在手机上查看监控状态：`<br/>
<a data-fancybox="gallery" href="{{'/节目生产网络监控系统-手机上查看.png' | prepend: site.imgrepo }}">
    <img src="{{'/small/节目生产网络监控系统-手机上查看.jpg' | prepend: site.imgrepo }}" alt="节目生产网络监控系统-手机上查看" />
</a>

---

[论文《台内节目生产网络监控系统的设计与实现》][论文地址]


[论文地址]:https://kns.cnki.net/kcms/detail/detail.aspx?filename=DSZM201901019&dbcode=CJFQ&dbname=CJFD2019&v=nObC302BMhD21XqCtCQ9Stk2bf5wgPBgvJ0kQdhJdu14j5CA2wSagVogRMLoMmDP