# Convert the newest PNG in each assets\gen\<name> folder to assets\tex\<name>.jpg (resized)
Add-Type -AssemblyName System.Drawing
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$gen = Join-Path $root "assets\gen"; $tex = Join-Path $root "assets\tex"
New-Item -ItemType Directory -Force $tex | Out-Null
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]90)
Get-ChildItem $gen -Directory | ForEach-Object {
  $png = Get-ChildItem $_.FullName -Filter *.png | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if (-not $png) { return }
  $img = [System.Drawing.Image]::FromFile($png.FullName)
  $max = 1536; if ($_.Name -like 'sky*') { $max = 2048 }
  $s = [Math]::Min(1.0, $max / [Math]::Max($img.Width, $img.Height))
  $w = [int]($img.Width * $s); $h = [int]($img.Height * $s)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp); $g.InterpolationMode = 'HighQualityBicubic'; $g.DrawImage($img, 0, 0, $w, $h); $g.Dispose()
  if (@('gunHip','gunAds','leafcard','kapoktree','streettree','scooters','plants','stools','bins','pole','leaves','paifang','skylineEast','skylineCity') -contains $_.Name) { $out = Join-Path $tex ($_.Name + ".png"); $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png) } else { $out = Join-Path $tex ($_.Name + ".jpg"); $bmp.Save($out, $enc, $ep) }
  $bmp.Dispose()
  "{0}: {1}x{2} -> {3}x{4}" -f $_.Name, $img.Width, $img.Height, $w, $h
  $img.Dispose()
}
