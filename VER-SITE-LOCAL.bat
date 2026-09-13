@echo off
chcp 65001 >nul
title Pre-visualizar site - Tiago Brugger
cd /d "%~dp0"
echo Abrindo o site no navegador em http://localhost:8000
echo.
echo Deixe esta janela ABERTA enquanto estiver visualizando.
echo Para encerrar, feche esta janela ou pressione Ctrl+C.
echo.
where python >nul 2>&1
if errorlevel 1 (
  echo Python nao encontrado - abrindo o arquivo direto no navegador.
  echo (O carrossel de publicacoes so funciona com o servidor local.)
  start "" "index.html"
  pause
  exit /b 0
)
start "" http://localhost:8000
python -m http.server 8000
