# Ignore list

No leer, buscar, indexar ni modificar los siguientes archivos/directorios salvo petición explícita:

## Dependencias y builds
- node_modules/
- vendor/
- dist/
- build/
- out/
- .next/
- .nuxt/
- coverage/
- __pycache__/
- *.pyc
- .venv/ venv/

## Control de versiones y herramientas
- .git/
- .idea/
- .vscode/
- .DS_Store

## Secretos y credenciales
- .env, .env.*
- *.pem, *.key, *.crt
- credentials*, secrets*

## Archivos generados / pesados
- *.log
- *.lock (package-lock.json, yarn.lock, pnpm-lock.yaml, composer.lock)
- *.min.js, *.min.css
- *.map
- *.zip, *.tar.gz, *.rar
- *.sql, *.dump, *.bak
- uploads/, cache/, tmp/
