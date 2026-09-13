@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
title Configuracao inicial - Site Tiago Brugger
cd /d "%~dp0"

echo ============================================================
echo   CONFIGURACAO INICIAL DO SITE - rodar UMA VEZ so
echo ============================================================
echo.

where git >nul 2>&1
if errorlevel 1 goto SEM_GIT
echo [OK] Git encontrado.
echo.
goto IDENTIDADE

:SEM_GIT
echo [ERRO] O Git nao esta instalado neste computador.
echo.
echo   Baixe em: https://git-scm.com/download/win
echo   Instale com as opcoes padrao, feche esta janela e rode
echo   este arquivo de novo.
echo.
pause
exit /b 1

:IDENTIDADE
set "NOME="
for /f "tokens=*" %%i in ('git config --global user.name 2^>nul') do set "NOME=%%i"
if not "!NOME!"=="" goto EMAIL
echo Seu nome, que aparece nos commits:
set /p "NOME=> "
git config --global user.name "!NOME!"

:EMAIL
set "EMAIL="
for /f "tokens=*" %%i in ('git config --global user.email 2^>nul') do set "EMAIL=%%i"
if not "!EMAIL!"=="" goto REPO
echo Seu e-mail do GitHub:
set /p "EMAIL=> "
git config --global user.email "!EMAIL!"

:REPO
echo.
echo [OK] Identidade: !NOME! / !EMAIL!
echo.
echo ------------------------------------------------------------
echo  ANTES DE CONTINUAR, crie o repositorio no GitHub:
echo.
echo    1. Acesse https://github.com/new
echo    2. Repository name:  SEUUSUARIO.github.io
echo    3. Deixe PUBLICO
echo    4. NAO marque Add a README file
echo    5. Clique em Create repository
echo ------------------------------------------------------------
echo.
echo Digite seu usuario do GitHub:
set /p "USUARIO=> "
if "!USUARIO!"=="" goto SEM_USUARIO

set "URLREPO=https://github.com/!USUARIO!/!USUARIO!.github.io.git"

if exist ".git" goto TEM_GIT
git init -b main
goto REMOTO

:TEM_GIT
git branch -M main

:REMOTO
git remote remove origin >nul 2>&1
git remote add origin !URLREPO!

echo.
echo Enviando os arquivos para !URLREPO!
echo Na primeira vez, o GitHub vai pedir login. Autorize e aguarde.
echo.
git add -A
git commit -m "Publicacao inicial do site" >nul 2>&1
git push -u origin main
if errorlevel 1 goto FALHOU

echo.
echo ============================================================
echo   ENVIADO COM SUCESSO
echo ============================================================
echo.
echo  ULTIMO PASSO, uma vez so, para ligar o site:
echo.
echo    1. Na tela que vai abrir, em Source, escolha
echo       Deploy from a branch
echo    2. Branch: main   Pasta: / root
echo    3. Clique em Save e espere 1 a 2 minutos
echo.
echo  Seu site ficara em:  https://!USUARIO!.github.io
echo.
echo  Para atualizar o site depois, use o PUBLICAR.bat
echo.
start "" "https://github.com/!USUARIO!/!USUARIO!.github.io/settings/pages"
pause
exit /b 0

:SEM_USUARIO
echo.
echo Usuario vazio. Nada foi feito.
echo.
pause
exit /b 1

:FALHOU
echo.
echo [ERRO] O envio falhou. Causas comuns:
echo    - o repositorio ainda nao foi criado no GitHub
echo    - o nome de usuario foi digitado errado
echo    - o login do GitHub foi cancelado
echo.
echo Confira e rode este arquivo de novo.
echo.
pause
exit /b 1
