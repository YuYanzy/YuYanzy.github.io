---
title: 算法学习之路-Day 1 C++回顾
date: 2021-05-10
tags: [算法，数据结构, C++]
categories: 算法学习
---

今天是算法学习正式开始的第一天。

按照我的规划，我会先用一个星期的时间全面复习一下C++语法。介绍一下我用到的学习资料是Acwing.com 的[语法基础课](https://www.acwing.com/activity/content/21/)，一共15节课，25课时。

今天买课之后也看完了第一集[试听课](https://www.bilibili.com/video/BV1G7411F7eA?t=4259)，发现每节课大概时长2个小时左右，一共有136道练习题。

如果我每天花两个小时看课，两个小时写课后题，就是四个小时了，但是依然无法在一个星期内覆盖所有的课程内容。

不过无所谓了，计划是可以调整的，我先按照这样的安排来吧，每天早上早起，花4个小时写作业看课，然后吃中饭，2333。晚上的时候来一波总结和文档的撰写。

---

接下来总结一下今天的学习内容：

今天课程的主题是：变量、输入输出、表达式和顺序语句。 

首先这门语法基础课的定位是面向算法的C++语法介绍。而在算法题中，一般不会写很多面向对象的语法，所以不会这门课不会讲类之类、继承之类的语法。

我本人的话，大一下的时候是学过C++的，但是自此之后基本上再也没有写过C++，基本上所有的内容已经忘光了（当然很多概念还是知道的）。老实说，今天上来写第一个例题（输入两个数字，输出结果数字之和），面对空白的编辑器，我的脑子里也是一片空白的，我完全忘记了C++的输入输出写法，也忘了C++要先引入头文件和使用命名空间。

由此不由得想到，经典的Hello World，2333。

```c++
#include<iostream>

using namespace std;

int main(){
  cout << "Hello World" << endl;
    
  return 0;
}
```

这样一个简单的 Hello World 程序，已经定义清楚了C++代码的基本组成部分，和如何输出。

回想起来，当我后来去学一门新的语言的时候（Python, Swift, Javascript），我最早想搞清楚的，就是这门语言怎么输入输出，2333。

一种语言，最基础的部分是什么呢？我曾经也想过这些问题，但是不成体系。直到我看到了SICP的第一节课，是一节让我启迪，开悟的课，让我第一次触及到了语言的本质。建议所有 Programer， 都可以花时间去看看这节课。

我到现在依然无法完全总结出语言的组成成分，等我两个月后潜心学习完SICP之后再回来填坑。

那么对于今天的学习来说，内容可以总结成以下这些：

* 变量的概念和变量类型

  这里的变量类型肯定指的是基本的变量类型，也就是 int, char, float, double, long long, bool。

  不同的变量类型的存储空间大小，输入输出的表达符号，已经类型之间互相转换和混合运算

* 输入输出流

  有两种输入输出的方式

  ```c++
  #include<iostream>
  using namespace std;
  cin >> ;
  cout << << end;
  ```

  ```C++
  #include<cstdio>
  
  scanf()
  printf()
  ```

  第二种的运行速度比第一种快。

  但是第一种写起来比较简单，2333， cin 可以过滤掉输入中的空格。

  头文件也是对应的包含关系。

  除此以外，就是各种输入输出的实例了。

  以上就是今天的学习内容总结，我觉得还是比较满意的吧，虽然自己现在写题的速度还比较慢，希望这136题刷完，我至少对C++语法和写题速度会提升上来吧。

  我觉得大雪菜有一句话说的非常对

  >编程学习相对于别的学习最大的区别就是需要大量练习，多写还要写得快。要训练自己写得快和Debug快的能力。

  哎，总而言之吧，语法学习，就是多练，多练就会了。

  晚安，欧亚斯密。

  