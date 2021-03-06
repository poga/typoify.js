# Typoify.js

符合人性的錯字產生器

data來源：https://github.com/g0v/zh-stroke-data/tree/compose

## Example

```
<div id="foo">
    我是天空裡的一片雲，
偶爾投影在你的波心──
你不必訝異，
更無須歡喜──
在轉瞬間消滅了蹤影。

你我相逢在黑夜的海上，
你有你的，我有我的，方向；
你記得也好，
　　最好你忘掉，
在這交會時互放的光亮！ 　　
</div>

$("#foo").typoify();

=>

<div id="foo">
    我是夭空輊的一片需，
偶爾投影在你的波心──
你不必訝異，
更無頗歡喜──
在轉瞬閭消滅了蹤影。

你我相逢在黑夜的海上，
你有你的，我有我的，方向；
你記祥也妤，
　　最好你忘掉，
在遑交會跨互放的光亮！ 　
</div>

```

## Options

```
$("#foo").typoify( {
  threshold: 140 //容許的錯字差異度，此值越低，錯字的輪廓越接近
  prob: 0.5      //錯誤率上限，由於錯字表有限，實際錯誤率會小於此值。
})
```
