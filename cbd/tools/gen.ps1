param([string[]]$Names)
# 用法：powershell -File cbd\tools\gen.ps1 sky grass ...   （已有结果的会跳过）
$cb = "$env:USERPROFILE\.claude\skills\codex-bridge\codex-bridge.ps1"
$p = Get-Content -Raw -Encoding utf8 "$PSScriptRoot\prompts.json" | ConvertFrom-Json
$base = Join-Path $PSScriptRoot "..\assets\gen"
New-Item -ItemType Directory -Force $base | Out-Null
foreach ($n in $Names) {
  $out = Join-Path $base $n
  if ((Test-Path $out) -and (Get-ChildItem $out -Filter *.png -ErrorAction SilentlyContinue)) { "skip $n"; continue }
  "=== $n ==="
  & $cb image -Prompt $p.$n -Out $out
}
"ALL DONE"
