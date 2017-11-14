@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
@echo off
cls
setlocal EnableDelayedExpansion
Reg add HKCR\*\shell\imagemin /ve /t REG_SZ /d "Àı–°Õº∆¨" /f
Reg add HKCR\*\shell\imagemin /v "Icon" /t REG_SZ /d "%~dp0icon_small.ico" /f
Reg add HKCR\*\shell\imagemin\command /ve /t REG_SZ /d "%~dp0imagemin.bat \"%%1\"" /f

pause
