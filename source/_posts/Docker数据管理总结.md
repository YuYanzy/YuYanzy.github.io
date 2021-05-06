---
title:Docker Data Manage
date: 2021-05-06 
tags: [技术，Docker]
categories: 技术
---


在Docker Container中 Data有两种存在的状态。

状态一： 写入容器的数据

一种Data是直接存在Docker container的一个可写入层中，这种存储方式使得此种数据具有以下的特性：

- 数据不能持久化，数据的生命周期与container的生命周期保持一致
- 数据只能存在container中，相当于数据与容器绑定死了。数据不能是远端的，也不能是其他容器中的。
- 相对性能较差（暂时不能理解）

状态二： 容器外部的数据

另一种Data是存在容器外的，container能够访问到这种数据，在容器内进行正常的读写。对应的这种数据的好处如下：

- 数据可以持久化，即便容器删除，数据依然可以保存。
- 数据与容器分离，数据甚至可以存在远端。多个容器可以访问同一种数据，实现容器之间数据流的协同。
- 方便维护管理，轻易复制。

感觉有点像生物里面的 结构水和自由水的概念。

显然第二种数据是会更受大家喜欢的。

为了实现第二种数据的存储，有两种方式，分别是 volume 和 bind mounts。除此以外，在linux系统中可以使用tmpfs，在windows系统中可以使用 named pipe。（后面这两种我觉得应该不会用的很多）

[![glLTMR.png](https://z3.ax1x.com/2021/05/06/glLTMR.png)](https://imgtu.com/i/glLTMR)

首先，无论是volume 还是 bind mount， 文件在container中的存在方式，都是一个文件目录的形式。所以在docker 里面看到的都是文件夹·。tmpfs看起来是直接存在主机的内存里面的，并不是以硬盘上的文件形式存在。

既然最终的表现形式一样，那么volume和bind mount有什么区别呢？

先来看volume和Bind mount的定义有什么区别。

Volume 是存在 /var/lib/docker/volume 目录下的， 完全有Docker这个进程来管理，别的软件没有访问权限。

Bind Mount 在主机上的文件夹可以存在任何地方，甚至可以使重要的系统文件和目录。主机上非Docker的进程也可以随意访问修改它。

所以总结来说，这两种方式最大的区别在于它们的来源的区别。Volume相当于是遵守Docker内部规则的亲儿子，而bind mount相当于是外包。

再来仔细看一下Volume和Bind Mount分别有哪些细节上的差别。

Volume 的创建和管理都由Docker实现。

有两种创建方式。

- 直接通过 docker volume create 命令来创建
- Docker在创建conatiner或者service的流程中创建

volume在创建之后，存在/var/lib/docker/container中。同一个volume可以同时被多个container mount。 没有container使用的volume不会自动删除。可以使用 docker volume prune 的方式删除没有被任何container使用的volume。

volume有 named 和 anonymous 两种， anonymous的volume会被随机编码命名。

volume支持使用 volume drivers （不懂）， 可以允许 把数据存放在远端。

Bind Mount 与volume相比，有些限制的地方。它的文件必须依赖主机操作系统的文件结构。（好像也没啥不好啊）。 也不能通过docker cli command直接管理 bind mounts。 推荐使用volume。

container可以通过bind mount这种方式，直接修改主机的文件，从而可以影响到主机的一些其他进程。这样好像一方面破坏了docker的隔离性，另外一方面又好像使得docker更加powerful了。也是个trade off吧。

volume 的 good use cases：

- 在多个容器之间分享数据，还可以定制读写权限

- 把文件存储的形式和主机做隔离，不受主机结构的限制。

- 可以把数据存在远端

- 方便 备份 还原 迁移

- volume存在linux虚拟机中，支持高I /O， 延迟低 When your application requires high-performance I/O on Docker Desktop. Volumes are stored in the Linux VM rather than the host, which means that the reads and writes have much lower latency and higher throughput.

- When your application requires fully native file system behavior on Docker Desktop. For example, a database engine requires precise control over disk flushing to guarantee transaction durability. Volumes are stored in the Linux VM and can make these guarantees, whereas bind mounts are remoted to macOS or Windows, where the file systems behave slightly differently.

  总结来说，还是volume的文件目录不受主机操作系统影响吧。

bind mount的good use cases:

- Sharing configuration files from the host machine to containers. This is how Docker provides DNS resolution to containers by default, by mounting /etc/resolv.conf from the host machine into each container.
- Sharing source code or build artifacts between a development environment on the Docker host and a container. For instance, you may mount a Maven target/ directory into a container, and each time you build the Maven project on the Docker host, the container gets access to the rebuilt artifacts.
- When the file or directory structure of the Docker host is guaranteed to be consistent with the bind mounts the containers require.

Reference:

[Manage data in Docker](https://docs.docker.com/storage/)

