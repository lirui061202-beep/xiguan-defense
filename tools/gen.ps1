param([string[]]$Names)
$cb = "$env:USERPROFILE\.claude\skills\codex-bridge\codex-bridge.ps1"
$p = Get-Content -Raw -Encoding utf8 "$PSScriptRoot\prompts.json" | ConvertFrom-Json
$base = Resolve-Path (Join-Path $PSScriptRoot "..\assets\gen")
$refs = @{ gunAds = 'gunHip' }
foreach ($n in $Names) {
  $out = Join-Path $base $n
  if ((Test-Path $out) -and (Get-ChildItem $out -Filter *.png -ErrorAction SilentlyContinue)) { "skip $n"; continue }
  "=== $n ==="
  if ($refs.ContainsKey($n)) {
    $r = Get-ChildItem (Join-Path $base $refs[$n]) -Filter *.png | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    & $cb image -Prompt $p.$n -Out $out -Ref $r.FullName
  } else {
    & $cb image -Prompt $p.$n -Out $out
  }
}
"ALL DONE"
