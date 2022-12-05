# Useful VS Code Emmets to increase Productivity

## 1. HTML Structure

Shortcut:
```shell
!
```

Output:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

## 2. Tags

Shortcut:

```shell
input:time
```

Output:

```html
<input type="time" name="" id="">
```

Shortcut:

```shell
button:d
```

Output:

```html
<button disabled="disabled"></button>
```

## 3. Create elements with class or id

Shortcut:
```shell
ul.list
```

Output:
```html
<ul class="list"></ul>
```

Shortcut:
```shell
ul#list-id
```

Output:
```html
<ul id="list-id"></ul>
```

Shortcut:
```shell
.content
```

Output:
```html
<div class="content"></div>
```
Shortcut:
```shell
#content-id
```

Output:
```html
<div id="content-id"></div>
```

## 4. Children

Shortcut:
```shell
ul>li
```

Output:
```html
<ul>
    <li></li>
</ul>
```

Shortcut:
```shell
p>Lorem
```

Output:
```html
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur deserunt quam voluptatum quos ipsa cupiditate ipsum qui sequi illum? Qui exercitationem accusamus totam natus ut fugit magnam modi eaque doloremque.</p>
```

Shortcut:
```shell
ul>li.list>a.link
```

Output:
```html
<ul>
    <li class="list">
       <a href="" class="link"></a>
    </li>
</ul>
```

## 5. Multiplication

Shortcut:
```shell
ul>li*5
```

Output:
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

## 6. Siblings

Shortcut:
```shell
.bothers>.alex+.bob+.me
```

Output:
```html
<div class="bothers">
    <div class="alex"></div>
    <div class="bob"></div>
    <div class="me"></div>
</div>
```
## 7. Grouping

Shortcut:
```shell
ul>(li>a)*5
```

Output:
```html
<ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

Shortcut:
```shell
div>(header>ul>li*2>span.item)+section.content+(footer>(p>Lorem)*2)
```

Output:
```html
<div>
    <header>
        <ul>
            <li><span class="item"></span></li>
            <li><span class="item"></span></li>
        </ul>
    </header>
    <section class="content"></section>
    <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure quaerat, molestias dolore commodi sequi porro, delectus eius quos saepe recusandae veniam modi laudantium voluptatibus cumque odit similique beatae eos.</p>
        <p>Nemo sequi veniam est! Laborum rem iste id vel, harum repellendus, reiciendis labore minima eum voluptatem dicta error nesciunt fugiat! Ipsa, perferendis iste exercitationem explicabo ex consequuntur dicta iure ipsam.</p>
    </footer>
</div>
```

## 8. Numbering

Shortcut:

```shell
header>ul>li.item$*3
```

Output:

```html
<header>
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
    </ul>
</header>
```

## 9. Text

Shortcut:

```shell
h$*6{I am heading}
```

Output:

```html
  <h1>I am heading</h1>
  <h2>I am heading</h2>
  <h3>I am heading</h3>
  <h4>I am heading</h4>
  <h5>I am heading</h5>
  <h6>I am heading</h6>
```

Shortcut:

```shell
h$*6{I am heading $}
```

Output:

```html
  <h1>I am heading 1</h1>
  <h2>I am heading 2</h2>
  <h3>I am heading 3</h3>
  <h4>I am heading 4</h4>
  <h5>I am heading 5</h5>
  <h6>I am heading 6</h6>
```

## 10. Climb Up

Shortcut:

```shell
div>div>h3+span^div{I can climb up}
```

Output:

```html
<div>
  <div>
    <h3></h3>
    <span></span>
  </div>
  <div>I can climb up</div>
</div>
```

Shortcut:

```shell
div>div>h3+span^^div{I can climb up}
```

Output:

```html
<div>
    <div>
        <h3></h3>
        <span></span>
    </div>
</div>
<div>I can climb up</div>
```



