@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
@echo off
cls
setlocal EnableDelayedExpansion
Reg add HKCR\*\shell\imagemin_hide /ve /t REG_SZ /d "后台压缩图片" /f
Reg add HKCR\*\shell\imagemin_hide /v "Icon" /t REG_SZ /d "%~dp0icon_small.ico" /f
Reg add HKCR\*\shell\imagemin_hide\command /ve /t REG_SZ /d "mshta vbscript:CreateObject(\"Shell.Application\").ShellExecute(\"cmd.exe\",\"/c %~dp0imagemin.bat %%1\",\"\",\"\",0)(window.close)"  /f


Reg add HKCR\*\shell\imagemin /ve /t REG_SZ /d "压缩图片" /f
Reg add HKCR\*\shell\imagemin /v "Icon" /t REG_SZ /d "%~dp0icon_small.ico" /f
Reg add HKCR\*\shell\imagemin\command /ve /t REG_SZ /d "%~dp0imagemin.bat \"%%1\"" /f

rem 解除了打开不能超过15个的限制,然而是限制到16个
Reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer /v "MultipleInvokePromptMinimum" /t REG_DWORD /d "00000032" /f

pause
