---
title: 初识 Kafka
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

接下来只需要明白 Kafka 中定义的一些概念，即便不知道如何运行 Kafka 和 Python 调用 Kafka 的语法，也已经掌握了 Kafka 的 essence （本质，要素，精髓）了。 总结来说，Kafka 就是一个快递小哥，按设定的规则，把接到的快递单送给相应的客户。

## Kafka 的一些重要概念

### 生产者 与 消费者

在 Kafka 的逻辑里面，每一条消息就像一个原料由用户生产，所以用户，或者说，用户发起请求的服务，即为生产者。对应的，接受用户请求去完成实际任务的服务，相当于消费了用户产生的消息，所以被称为消费者。

总结对于消息队列而言，产生消息的就是生产者，处理消息的是消费者，传递的信息是消息本身。理清了一头一尾的数据源头之后，接下来要理解的是：数据传输的模式。

### 队列模式 与 发布/订阅模式

数据传输模式分为两种，一种称为 队列模式，一种称为 发布/订阅模式。

* 队列模式

  顾名思义，队列模式就像队列数据结构一样。 生产者产生消息之后，消息入队；消费者读取消息，消息出队。

  这种模式的特点是：一条消息只能由一个消费者处理。

   所以这种模式是一种单点对单点的传输模式，在上面那篇讲[消息队列的文章](https://cloud.tencent.com/developer/article/1006035)中，有清晰的描述。

  <img src="https://blog-10039692.file.myqcloud.com/1506330130593_2564_1506330132919.png">

* 发布/订阅模式

  发布/订阅模式是为了解决上面队列模式只能单点传输的限制而被提出的。

  在发布/订阅模式中，引入了消息主题的概念。不同的消费者可以订阅同一主题的消息，当有这种主题的消息被生产之后，所有订阅过的消费者都可以接受到此消息。

  为了更好地理解这一点，我喜欢引入报纸的比喻。 生产者相当于生产报纸的工厂，主题相当于报纸的种类（北京日报，北京晨报，北京晚报之类的），消息队列相当于送报纸的小哥，接受者相当于报纸的订阅者。只要接受者订阅了北京日报，小哥就得把生产的北京日报报纸送给他，有100个人订阅了就得送100份。

  需要单独说明的是：在 Kafka 中，还有消费者组的概念。一个消费者组由一到多个消费者组成，不同的消费者组可以订阅同一主题。同一主题产生的单条消息（比如消息A），会被传递给每一个订阅了此主题的消费者组。但是同一消费者组内部，只会有一个消费者去处理消息A。

  <img src="https://blog-10039692.file.myqcloud.com/1506330158945_9538_1506330161280.png">

  

读到这里，你已经明白了消息队列数据流的完整概念了。即便你现在不会任何的 Kafka 语法，你也能读懂 Kafka 的数据流和代码逻辑了。当然，除此以外还会有一些更加细节的概念，比如 partition, replicator, 等等，但是这些都不会成为妨碍你理解 Kafka 数据流的障碍，只要遇到，查一下，就能明白了。

## Kafka 的Docker-compose搭建

请参考 [Demo](https://github.com/Ecohnoch/kafka-python-demo) 中的 [dokcer-compose.yml](https://github.com/Ecohnoch/kafka-python-demo/blob/main/kafka/docker-compose.yml) 的写法。

或者参考 Kafka 的 [Docker Repo](https://github.com/wurstmeister/kafka-docker)。

<br/>

___



本来还想在这里记录一下 Python 调用 Kafka 和 Kafka 的配置。 但是写到这里之后又感觉不太需要了。

还是那句话，只要知道了逻辑，语法只是查一下记住多写几遍就会了。如果读者对这方面还是有需求，依然可以移步我朋友的[Demo](https://github.com/Ecohnoch/kafka-python-demo) ，看看源码，会发现非常简单。

当然这也只是 Kafka 的入门教程，关于 Kafka 的配置和调校肯定还有很多高深的知识。这部分笔者也没有涉及过，待以后有机会参与到高并发的项目构建中，再来留下笔记。

感谢阅读！这种学完之后再记录一遍，对于我自己的提升也是非常大。如果有疑问或者是想要讨论的地方，欢迎随时联系我。Bye Bye!









