@echo off
cls
setlocal EnableDelayedExpansion
rem 如果复选了多个图片，相对于打开多次这个批处理，所以每个批处理只处理一个对象就好，可以用sharp
rem node 执行指定文件要给出路径，不然会随着右击时候路径变化而找不到
node %~dp0sharp.js %1 %~dp0
