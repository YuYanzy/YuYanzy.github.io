---
layout: post
title: "D3 的初步使用记录"
subtitle: "关于 D3 的一些方法的记录"
author: "YuYan"
date: 2021-09-19
header_img: /img/in-post/2021-09-19/D3.png
catalog: true
tags:
  - Frontend
---
::: tip D3 Description
D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
:::
d3 的操作流程一般是，选择某个 html 元素， 然后对其进行操作。

可能的操作有： 添加元素 和 修改元素。

## 选择 元素

d3有两种选择方法 `selectAll()`  和 `select()`。均可以通过 CSS 选择器选择 HTML 元素。

在 CSS 选择器中，可以通过以下三种方式选择 HTML 元素：

- HTML 元素的标记（例如 div, h1, p, span 等）
- HTML 元素的类名 （通过 .classname 选择）
- HTML 元素的ID （通过 #id 选择）

```jsx
// Example
let svg = d3.selectAll("svg")

let svg = d3.selectAll(".class")

let svg1 = d3.select("#svg1")
```

## 添加 DOM 元素

d3 提供了两种方法添加 DOM 元素。

一种是 `append()` 方法。 append() 方法将新元素作为当前选择中元素的最后一个子元素附加。 

```jsx
// Example
d3.select("#div1").append("span")
```

另外一种是 text() 方法。 text() 方法用于设置元素的内容。

```jsx
// Example
d3.select("#div1").append("span").text("哈喽！")
```

D3.js 使用了一种称为 chain syntax 的语法，通过将方法与句点连接在一起，可以在一行代码中执行多个操作。

## 修改元素

html()，用于设置元素的 html 内容。

```html
<!DOCTYPE html>
<html>
   <head>
      <script type = "text/javascript" src = "https://d3js.org/d3.v4.min.js"></script>
   </head>
   <body>
      <div class = "myclass">
         Hello World!
      </div>
      <script>
         d3.select(".myclass").html("Hello World! <span>from D3.js</span>");
      </script>
   </body>
</html>
```

attr() 方法，用于添加或者更新所选元素的属性。

```html
<!DOCTYPE html>
<html>
   <head>
      <script type = "text/javascript" src = "https://d3js.org/d3.v4.min.js"></script>
   </head>
   <body>
      <div class = "myclass">
         Hello World!
      </div>
      <script>
         d3.select(".myclass").attr("style", "color: red");
      </script>
   </body>
</html>
```

style() 方法，用于设置元素的样式属性。

```html
<!DOCTYPE html>
<html>
   <head>
      <script type = "text/javascript" src = "https://d3js.org/d3.v4.min.js"></script>
   </head>
   <body>
      <div class = "myclass">
         Hello World!
      </div>
      <script>
         d3.select(".myclass").style("color", "red");
      </script>
   </body>
</html>
```

classed() 方法，设置 HTML 元素的 ”class“ 属性。

如果需要增加类，必须将此方法的第二个参数设为 true。

```jsx
d3.select(".myclass").classed("myanotherclass", true)
```

如果需要移除类，必须将此方法的第二个参数设为 false。

```jsx
d3.select(".myclass").classed("myanotherclass", false)
```

检查类是否存在，只需要省略第二个参数并传递要查询的类名。如果存在则返回true，不存在则返回 false。

```jsx
ds.select(".myclass").classed("myanotherclass")
```

---

能够选择元素和修改元素只是d3基础的功能。作为一个画图工具，它至少应该支持绑定数据，操作数据。 d3 的绘图往往是和 svg 绑定的。所以一般绘图的逻辑是：导入数据，用 d3 处理数据，然后用 d3 创造 svg 元素，并且根据数据修改元素。

## 数据连接的方法 - Data Join

d3 提供了四种数据连接的方法。

datum() 方法用于为 HTML 文档中的单个元素设置值。 一旦使用选择器选择元素，就会使用它，例如可以使用 select() 方法选择现有元素 p， 然后用 datum() 方法设置数据。 可以更改所选元素的文本，或者添加新元素，并使用 datum() 方法设置的数据分配文本。

```html
<!DOCTYPE html>
<html>
   <head>
      <script type = "text/javascript" src = "https://d3js.org/d3.v4.min.js"></script>
   </head>
   <body>
      <p></p>
      <div></div>
      <script>
         d3.select("p")
         .datum(50)
         .text(function(d) { 
            return "Used existing paragraph element and the data " + d + " is assigned."; 
         });
         d3.select("div")
         .datum(100)
         .append("p")
         .text(function(d) { 
            return "Created new paragraph element and the data " + d + " is assigned."; 
         });
      </script>
   </body>
</html>
```

data() 方法用于将数据集分配给 HTML 文档中的元素集合。

```jsx
d3.select("#list").selectAll("li")
   .data([10, 20, 30, 25, 15]);
```

enter() 放大输出之前没有图形元素的数据项集。比如可以用它来创建新的 li 元素。

```jsx
d3.select("#list").selectAll("li")
   .data([10, 20, 30, 25, 15])
   .text(function(d) { return "This is pre-existing element and the value is " + d; })
   .enter()
   .append("li")
   .text(function(d) { return "This is dynamically created element and the value is " + d; });
```

exit() 方法输出不再存在数据的图形元素集。比如通过它删除数据集中的数据选项来动态删除其中的一个li元素。

```jsx
d3.selectAll("li")
      .data([10, 20, 30, 15])
      .exit()
      .remove()
// 25 被移除了
```

在上述这些例子中可以发现， d3 提供的操作 DOM 的函数，如 style()，text() 等，不仅可以接受常量作为输入，还可以接受 匿名函数 作为输入。 

```jsx
<!DOCTYPE html>
<html>
   <head>
      <script type = "text/javascript" src = "https://d3js.org/d3.v4.min.js"></script>
      <style>
         body { font-family: Arial; }
      </style>
   </head>
   <body>
      <p></p>
      <p></p>
      <p></p>
      <script>
         var data = [1, 2, 3];
         var paragraph = d3.select("body")
         .selectAll("p")
         .data(data)
         .text(function (d, i) {
            console.log("d: " + d);
            console.log("i: " + i);
            console.log("this: " + this);
            return "The index is " + i + " and the data is " + d;
         });
      </script>
   </body>
</html>
```

## 使用 D3 对 SVG 进行转换

d3 有一个单独的库来管理转换， 提供 transform()， translate()， scale() 和 rotate() 等方法。

导入的方法是

```jsx
<script src = "http://d3js.org/d3.v4.min.js"></script>
<script src = "d3-transform.js"></script>
```

## D3 实现过渡 Transition

过渡是指从一个状态转换到另一个状态的过程。 D3.js 提供了一个 transition() 方法，在 HTML 页面中执行过渡。

transition() 方法可以用于所有选择器，并启动转换过程。 支持大多数选择方法，比如 attr()， style()等。 但是不支持 append() 和 data() 方法。

(未完待续)