#!/usr/bin/env python3
"""Download official store photos from Google Maps and Instagram."""
from __future__ import annotations

import json
import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

UA = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
)

MAPS = [
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk48BG795AhfZuBeN_JKgLHaHWGI7xC8a5hWt32LEB4UA-2wDgHKsijKXbQ8QEvvDpRxCLIoB3AxLjg3cK_PN1AwlUBc55qeTJqj_usDvC1I4jAiGfERvxTBXyc5JDW7xCu7qs3IEq2daY0=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkfuzoXOy_lg8Lg8-zqesrxrWqjGLs_f3K69ksdcTHpW5CgyFPtHKWULL4UwJMBQHqnEHDqadWgjvVJulaJTj7w8Jmtpea54S7rJosS16MSoVe4p-FGwzzhZ0By3C0WaKuaz4r-vErIdwzL=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnNAPQX9ywxrZJDQEyPMvzHcUwPXnXznep6JqhcRR1BI5Y4sQVSzXWGgHAgquDVcmRcIkQ7uUiTzXj3UpjaedLeywcrpEXmonTUEuuorptmjAk_um-q3dBUCzpM9XpwivfaaxAaWgq_rk2Z=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3GwPtNDIBzoeO_Eh5HmiVnO773UQV_PHHxXKdXoZUEP75dEeZQdGKMa-F4W-vy1Mq9s_kZwniTx--FDvUJG9XF8HsGro_R49B8g5M81l54QIj0pYG86nwxo_M4IwUi9MV3uj-T5vkp-8m=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnPqpytFXbT06TOy_MOcPGRQsLc_6FoOPtUXD3tYmWsGgeRZuYKirc7Y8kILmjPGBKsL-2IC3FwZjSRM-9YuLKHPawCZOhR6UkVrqtGqWtlnlzOPB4p-Q92bnjTnovrkAj8Cnvmy02ZX-E=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl91FGYKbWm4lu_PvI-81C3GIfrNpwRwWG5z0C4fre9Bkk6Mt_5uPdBOrStobLP0yoGgAgQGB6OLo01XgXtOkL0XJP7k4Szqw8WlxHnjaB_gFs_TNihfCgM3QOo537WocjsHPgssvo5k018=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmTN4hcSV6I2ffzaBGgymX9KSvMCkxySk19OcmJhVOLne4Qrc4Ae0-RpuaNWxfZ1TiOz0mgKaKndLseDBbXcL1JnPJGyzK4pZw_yyGwbedYaaO37o_RHRc6p6n8cINmF1a_1SH9LuEaYmMj=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlObGHm8bBmTHKZhYf2HHBHj9TPbhP5QKAwake6Vh26fLgZHHl4SVW1YQD8OE-xVTiJCBBYAxidzddwgDVD_7F2aSBye1JMb_VOvK6Eaa2wGe-ENV2X5QEks9rHhlj4h0cylMibinblrbU=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCAMUKFAE2DSS8F88mBODK5AJJgAIDH0LHVDcVn_VsaiMhEyvs7kPxXWBhlrVq9qHpaGvgBpCLDN5H3IwvoV4MMfRm5VDPo7hm8lOOCE9GSjuZsVey96b87T_Cy7dfSibySd2sqPFWAVI=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-kSkaGXcPT-wdQQr-Pfq1QAGjSu9uLd75OPJNjLsm7tS7ddEqGO65Me5bVTSoX4RVoShZnNnfP4GZCdSlJA3aPyy5iG1444b0lSDv8iHlL6mRuswbsXS5ZoI4QT9_PqHtkNgTxMReSPcU=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlF6jBmIn6fUFvdicpbg4HCdPLGkmsE45P6bdw9gyRrFKoIA8kjYWboS33fMvZCT3d9ZqKdtWWx4n_4y9TNa-z9vw2AU_klGBsB-b4kKQZZrQ2qOC4b7bbsnK-JZUI3Wc99q-yEFmZf1h2o=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnZO2PklRPaW1MXBYYJaA1bHRlHPUCErfUSx42fN1Zg_oKFWFNrdxL3YtMX6wdgRqo_09jJzOrLA6bW-Al9xPLPqB4yQeYE_ID3OzJEFAB_6qkCZYCeDP19mByaoCRXrey68JO27YHeh8Gz=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl50945ve3Y9smiD_akjo4b-S6H8ZRTnG3NpCcGfr-jQBYGNzcbpNXAr7XxisOqfPVPtlI9WmdhbiSCMt2KB8hitN-uKXHCScJcpml9VShLbQxypmJaFHKRKHHMRF_Z-PuOc2HtQfXI3nud=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl37v9h1PmRCSexNkDyIhfXn9FZLIVx0G5GwoSWs5laEz3qyE2xbhi-n9CVBXt7hUK_V2VW8swfIIFd0ujTjhophLG55w5X9kNaeEGo_PHoSY5WbID9zRUmLDH62CKLrwtMVDJXFMgjhiLy=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlYsUwJvbYV1AA3ex-uTW5ftKDI-9d3zG_Wi-dzXRPV8erIDvnpnLaTWRMGlAkGbQiWoADluuKLxF1hzSxGDovSITsixFhTzi98oZWjR3d9X2e68cx2DoNC7wL0GloGfHsyRrRxGxUvcvI9=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnD-pd8wpNGy1VD3Hxd_3cMvruFg4Qrr-NZf8KTKKAlSP0ml4WqCBedbt2Hfq4Xz14aqvwFWrh0ThSJjxFKIHKkDL287tEf7S5ZD3a4QZtQdf8UEh3611bkZUkTLFB3DS-1w9X4W2tRGyI=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnsaboEGtQC1FrUycYpGAFVbxWgyI5nFVhw9fCDPvD5hpN2KyQq9XR-E6RbaeRhYj4nCvon3M2WXiyLYUMlraROkxeXXnGxHwurhR-lfe3E4w7G69_RGkQKp3MlY5iprSwa-BLIKCN9b4k=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljYz1NXM19LBFh4qR-Acc4Pdao-ZXqLYwmxhWjuOqcOhJPpXCHQrJ6TGXp9QsAj6ib9oSR8eFSdivhsLQvtdR0jGP_EVs0p2rd3yWkBLea6xsZJA6cVWP_W0y4FinwyMjzllHqH5Abupvn=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZE0IWrWBPRU3bowLGDG1E2FW7ec8mYYIO03wzxtdzUytOiWDY3FmQqZiVMZ0XZMOsPIr6NHBllGwL2bv4C_fbhSA56oAY5K97jx6DKu1sB6AJe7gNgk0TmItgiePq5di4EL4eX9aZWkym=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmuWe7V_C0s7GkM3VVnGw0-t6PoLMT-YdB1MIDpPDXo6DyMv_FHjmc8Xj-Tp1aivpcxBIPn4PmOAvJ8caKa4GqZo_MDnqW_FD9nQponnthYMP_WoG4f1MeSzIXKpImCmVISZWkJYIC4r5v=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdp8KceIv_ckxWQNeibjLm2NA-pbF1k-_-Md9PV1XXzPvVNOcHKEYrPBseeASRkl8cC1Lg2Zo991ActBS85B_mx59U9PyejxhS5GrNwY2A0-lVKiFZVKLA9KFqoO7Egxe5TSBAUFUt00mJ=s1600-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlw8L5bL5AzYvSmj3e7s2e1WOEdu25tOfXaDo99TtjS2lAJr2AC3NN_XvUaXIJGXYBKr8yPPgO-hwLVgea1P0GAK89Zxjd8LlWnweCi1ZHTkCLjsSMkBbEraUDh8ismhFfncmWq29zpjrBx=s1600-k-no",
]

ctx = ssl.create_default_context()


def download(url: str, dest: Path) -> bool:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": "https://www.google.com/"})
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=40) as res:
            data = res.read()
            if len(data) < 2000:
                print(f"SKIP small {dest.name} ({len(data)} bytes)")
                return False
            dest.write_bytes(data)
            print(f"OK {dest.name} {len(data)} bytes")
            return True
    except Exception as exc:
        print(f"FAIL {dest.name}: {exc}")
        return False


manifest = []
for i, url in enumerate(MAPS, 1):
    dest = OUT / f"maps-{i:02d}.jpg"
    if download(url, dest):
        manifest.append({"file": dest.name, "source": "google-maps"})

print(json.dumps(manifest, indent=2))
print("maps done", len(manifest))
