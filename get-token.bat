@echo off
set CLIENT_ID=60527413a28449f5a7f4d4ffcb5d3fa1
set CLIENT_SECRET=89c686a600d74120b0faab819d8aa295
set REDIRECT_URI=http://127.0.0.1:8888/callback


echo.
echo Abriendo navegador para autorizar Spotify...
start "" "https://accounts.spotify.com/authorize?response_type=code&client_id=%CLIENT_ID%^&scope=user-read-currently-playing%20user-read-playback-state^&redirect_uri=%REDIRECT_URI%"

echo.
echo 1) Inicia sesion en Spotify y copia el valor del parametro CODE de la URL.
set /p CODE=2) Pega aqui el code: 

echo.
echo Solicitando REFRESH TOKEN a Spotify...
curl -X POST "https://accounts.spotify.com/api/token" ^
 -H "Content-Type: application/x-www-form-urlencoded" ^
 -u %CLIENT_ID%:%CLIENT_SECRET% ^
 -d grant_type=authorization_code ^
 -d code=%CODE% ^
 -d redirect_uri=%REDIRECT_URI%

pause
