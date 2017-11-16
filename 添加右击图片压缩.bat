@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
@echo off
cls
setlocal EnableDelayedExpansion
Reg add HKCR\*\shell\imagemin /ve /t REG_SZ /d "压缩图片" /f
Reg add HKCR\*\shell\imagemin /v "Icon" /t REG_SZ /d "%~dp0icon_small.ico" /f
rem 这种是不显示进度条黑框
Reg add HKCR\*\shell\imagemin\command /ve /t REG_SZ /d "mshta vbscript:CreateObject(\"Shell.Application\").ShellExecute(\"cmd.exe\",\"/c %~dp0imagemin.bat %%1\",\"\",\"\",0)(window.close)"  /f
rem 这种是显示
echo Reg add HKCR\*\shell\imagemin\command /ve /t REG_SZ /d "%~dp0imagemin.bat \"%%1\"" /f

pause
