@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
title Publicar site - Tiago Brugger
cd /d "%~dp0"

echo ============================================================
echo   PUBLICANDO O SITE NA INTERNET
echo ============================================================
echo.

where git >nul 2>&1
if errorlevel 1 goto SEM_GIT
if not exist ".git" goto NAO_CONFIGURADO

git remote get-url origin >nul 2>&1
if errorlevel 1 goto NAO_CONFIGURADO

git add -A
git diff --cached --quiet
if not errorlevel 1 goto SEM_MUDANCA

echo Alteracoes encontradas:
git diff --cached --name-status
echo.

for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set "DIA=%%a-%%b-%%c"
for /f "tokens=1-2 delims=:" %%a in ("%time%") do set "HORA=%%a:%%b"

git commit -m "Atualizacao do site !DIA! !HORA!" >nul
if errorlevel 1 goto ERRO_COMMIT

echo Enviando para o GitHub...
git push origin main
if errorlevel 1 goto ERRO_PUSH

for /f "tokens=*" %%i in ('git remote get-url origin') do set "URL=%%i"
echo.
echo ============================================================
echo   PUBLICADO COM SUCESSO
echo ============================================================
echo.
echo  O site atualiza em ate 2 minutos.
echo  Repositorio: !URL!
echo.
pause
exit /b 0

:SEM_GIT
echo [ERRO] Git nao instalado. Rode o CONFIGURAR-GITHUB.bat primeiro.
echo.
pause
exit /b 1

:NAO_CONFIGURADO
echo [AVISO] Este site ainda nao foi configurado.
echo         Rode o arquivo CONFIGURAR-GITHUB.bat primeiro.
echo.
pause
exit /b 1

:SEM_MUDANCA
echo Nenhuma alteracao nova para publicar. O site ja esta atualizado.
echo.
pause
exit /b 0

:ERRO_COMMIT
echo [ERRO] Falha ao registrar as alteracoes.
echo.
pause
exit /b 1

:ERRO_PUSH
echo.
echo [ERRO] O envio falhou. Verifique a conexao com a internet e
echo        o login do GitHub, depois tente de novo.
echo.
pause
exit /b 1
