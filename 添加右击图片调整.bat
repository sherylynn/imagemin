@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
@echo off
cls
setlocal EnableDelayedExpansion
Reg add HKCR\*\shell\image_resize_hide /ve /t REG_SZ /d "后台调整图片" /f
Reg add HKCR\*\shell\image_resize_hide /v "Icon" /t REG_SZ /d "%~dp0icon_small.ico" /f
Reg add HKCR\*\shell\image_resize_hide\command /ve /t REG_SZ /d "mshta vbscript:CreateObject(\"Shell.Application\").ShellExecute(\"cmd.exe\",\"/c %~dp0image_resize.bat %%1\",\"\",\"\",0)(window.close)"  /f


Reg add HKCR\*\shell\image_resize /ve /t REG_SZ /d "调整图片" /f
Reg add HKCR\*\shell\image_resize /v "Icon" /t REG_SZ /d "%~dp0icon_small.ico" /f
Reg add HKCR\*\shell\image_resize\command /ve /t REG_SZ /d "%~dp0image_resize.bat \"%%1\"" /f

rem 解除了打开不能超过15个的限制,然而是限制到100个 16进制 256的十进制换算十六进制是100个
Reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer /v "MultipleInvokePromptMinimum" /t REG_DWORD /d "00000256" /f

pause
