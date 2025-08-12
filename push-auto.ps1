$fecha = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
git add .
git commit -m "Auto update: $fecha"
git push origin main