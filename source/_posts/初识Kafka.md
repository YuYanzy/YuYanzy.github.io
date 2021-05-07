---
title: Docker Data Manage
date: 2021-05-07 
tags: [技术, 架构, Kafka, 消息队列]
categories: 技术
---


今天花了一下午时间初步了解了一下Kafka。

首先非常感谢朋友 [@Ecohnoch](https://github.com/Ecohnoch)  提供的讲解材料和 [Python Demo](git@github.com:Ecohnoch/kafka-python-demo.git)。如果读者对Kafka也感兴趣，建议在看完本文之后，也移步 [Demo](https://github.com/Ecohnoch/kafka-python-demo)，运行感受一下 Kafka 的消息分发机制。

初识 Kafka 要解决的第一个问题是： **什么是 Kafka？**

## Kafka的定义及作用

我们可以首先来参考一下维基百科对 Kafka 的一句话定义。

>**Kafka**是由[Apache软件基金会](https://zh.wikipedia.org/wiki/Apache软件基金会)开发的一个[开源](https://zh.wikipedia.org/wiki/开源)[流处理](https://zh.wikipedia.org/wiki/流处理)平台，由[Scala](https://zh.wikipedia.org/wiki/Scala)和[Java](https://zh.wikipedia.org/wiki/Java)编写。该项目的目标是为处理实时数据提供一个统一、高吞吐、低延迟的平台。其持久化层本质上是一个“按照分布式事务日志架构的大规模发布/订阅消息队列”，[[3\]](https://zh.wikipedia.org/wiki/Kafka#cite_note-3)这使它作为企业级基础设施来处理流式数据非常有价值。
>
>—— From 维基百科

在这句话中，我们运用初高中学习的语文缩写方法，提取出主谓宾，可以得到：<font color="#dd0000">“ **Kafka 是一个 消息队列**” </font>这样的关键信息。所以，想要理解 kafka 是什么，我们需要先知道什么是 **消息队列**。关于消息队列的定义，推荐一篇在google上查到的[文章](https://cloud.tencent.com/developer/article/1006035)，建议先移步阅读，理解消息队列的定义，意义和作用，常用的应用场景和主流的软件（Kaf）。

如果你认真阅读了这篇文章，基本上已经解决了 Kafka 的定义和作用两个关键的问题。

接下来只需要明白 Kafka 中定义的一些概念，即便不知道如何运行 Kafka 和 Python 调用 Kafka 的语法，也已经掌握了 Kafka 的 essence （本质，要素，精髓）了。

未完待续……

___



## Kafka 的一些重要概念





## Kafka 的Docker 运行教程



## Kafka-python 的语法介绍













