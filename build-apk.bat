@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    TONTONYUTA - ONE CLICK APK (v13.0 AUTO)
echo ==========================================

REM --------------------------------------------
REM 1. KIEM TRA DIEU KIEN
REM --------------------------------------------
where node >nul 2>nul || (echo [Loi] NodeJS chua duoc cai dat! && pause && exit /b)
where javac >nul 2>nul || (echo [Loi] Java JDK chua duoc cai dat! && pause && exit /b)

REM --------------------------------------------
REM 2. CAU HINH THONG TIN & AUTO VERSION
REM --------------------------------------------
echo.
echo [!] THIET LAP THONG TIN NHAN BAN
set /p APP_NAME="1. Nhap ten App (De trong de giu cu): "

REM Doc phien ban hien tai tu package.json
for /f "delims=" %%a in ('node -p "require('./package.json').version"') do set CURRENT_VER=%%a
echo    - Phien ban hien tai la: !CURRENT_VER!
set /p APP_VERSION="2. Nhap phien ban moi (An ENTER de tu dong tang len ban tiep theo): "

set /p TARGET_ID="3. Nhap ID moi (De trong de giu cu): "

REM Tu dong tang Version neu de trong
if "!APP_VERSION!"=="" (
    echo [OK] Dang tu dong tang Version...
    call npm version patch --no-git-tag-version >nul
    for /f "delims=" %%a in ('node -p "require('./package.json').version"') do set APP_VERSION=%%a
    echo =^> Phien ban OTA moi la: !APP_VERSION!
) else (
    call npm pkg set version="!APP_VERSION!"
)

REM Cap nhat version vao config.ts
echo [OK] Dang ghi version !APP_VERSION! vao ma nguon...
if exist "src\config.ts" (
    powershell -Command "$c = Get-Content 'src\config.ts'; $c = $c -replace 'export const APP_VERSION = ''.*?''', 'export const APP_VERSION = ''!APP_VERSION!'''; Set-Content 'src\config.ts' $c"
)

REM --------------------------------------------
REM 3. CHONG DONG BO NHAM
REM --------------------------------------------
echo.
if not "!TARGET_ID!"=="" (
    REM Cap nhat ID vao capacitor.config.json
    if exist "capacitor.config.json" (
        powershell -Command "$c = Get-Content 'capacitor.config.json'; $c = $c -replace '\"appId\":\s*\".*?\"', '\"appId\": \"!TARGET_ID!\"'; $c = $c -replace '\"appName\":\s*\".*?\"', '\"appName\": \"!APP_NAME!\"'; Set-Content 'capacitor.config.json' $c -Encoding UTF8"
    )

    REM Neu ID moi khac ID trong Android cu -> xoa android folder de rebuild
    if exist "android\app\build.gradle" (
        powershell -Command "$c = Get-Content 'android\app\build.gradle'; if ($c -match 'applicationId\s+\"!TARGET_ID!\"') { exit 0 } else { exit 1 }"
        if !errorlevel! neq 0 (
            echo [!] Phat hien ID moi. Dang xoa thu muc android cu de tranh nham du lieu...
            rmdir /s /q android
            echo [OK] Da don dep xong.
        )
    )
)

REM XOA CACHE WEB DE TRANH LAN DU LIEU LOP CU
if exist "dist" rmdir /s /q dist
if exist "android\app\src\main\assets\public" rmdir /s /q android\app\src\main\assets\public

REM --------------------------------------------
REM 4. BUILD GIAO DIEN WEB
REM --------------------------------------------
echo [2/9] Dang build Web (dist)...
call npm install
call npm run build || (echo [Loi] Build Web that bai! && pause && exit /b)

REM --------------------------------------------
REM 5. KHOI TAO ANDROID MOI
REM --------------------------------------------
if not exist android (
    echo [3/9] Dang tao khung Android moi...
    call npx cap add android

    REM Cap quyen Internet
    powershell -Command "$p='android\app\src\main\AndroidManifest.xml'; if (Test-Path $p) { $c=Get-Content $p; if($c -notmatch 'android.permission.INTERNET'){ $c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application' | Set-Content $p } }"
)

REM --------------------------------------------
REM 6. DONG BO & BOM PHIEN BAN
REM --------------------------------------------
echo [4/9] Dang dong bo du lieu vao Android...
call npx cap sync android

if exist "android\app\build.gradle" (
    powershell -Command "$file = 'android\app\build.gradle'; $c = Get-Content $file; $vCode = [int](Get-Date -UFormat '%%m%%d%%H%%M'); $c = $c -replace 'versionCode\s+\d+', \"versionCode $vCode\"; $c = $c -replace 'versionName\s+\".*?\"', \"versionName '!APP_VERSION!'\"; Set-Content $file $c"
)

REM --------------------------------------------
REM 7. XU LY ICON & SPLASH (FIXED)
REM --------------------------------------------
echo [5/9] Dang xử lý Icon từ thư mục gốc...

if not exist "assets" mkdir assets

if exist "icon.png" copy /y "icon.png" "assets\icon.png" >nul
if exist "splash.png" copy /y "splash.png" "assets\splash.png" >nul
if not exist "assets\splash.png" if exist "assets\icon.png" copy /y "assets\icon.png" "assets\splash.png" >nul

if exist "assets\icon.png" (
    echo [OK] Dang bơm Icon vao Android...
    call npx capacitor-assets generate --android --assetPath assets
) else (
    echo [Lỗi] Không tìm thấy file icon.png ngay ngoài thư mục gốc!
)

REM --------------------------------------------
REM 8. BUILD APK
REM --------------------------------------------
echo [6/9] Dang build APK...
cd android
call gradlew.bat assembleDebug --daemon
if !errorlevel! neq 0 (
    echo [Loi] Build APK that bai!
    cd ..
    pause
    exit /b
)
cd ..

REM --------------------------------------------
REM 9. TAO OTA & UPLOAD
REM --------------------------------------------
echo [7/9] Dang tao update.zip...
if exist "update.zip" del /f /q "update.zip"
cd dist && tar.exe -a -c -f ../update.zip * && cd ..

echo [8/9] Dang upload Github...
where gh >nul 2>nul
if !errorlevel! equ 0 (
    gh release create v!APP_VERSION! "update.zip" --title "v!APP_VERSION!" --notes "Update"
) else (
    echo [Canh bao] Chua cai GitHub CLI gh. Bo qua buoc upload.
)

REM --------------------------------------------
REM 10. BAO CAO GOOGLE SHEETS
REM --------------------------------------------
echo [9/9] Dang bao cao Sheets...
REM DAN LINK SCRIPT LOP 7 VAO DAY
curl -s -L -H "Content-Type: application/json" -d "{\"action\":\"update_version\", \"secret\":\"TontonYuta_Dep_Trai_2026\", \"newVersion\":\"!APP_VERSION!\"}" "https://script.google.com/macros/s/AKfycbwOpS-sBREJ7ngxb3vgZhi6c62uKt2VAs4SLQGBZ0DbunnbzHmJxqdFcuYajMw_-2Y6PA/exec"

powershell -c "[console]::beep(800, 300); [console]::beep(1200, 500)"
echo HOAN TAT TAT CA!
pause