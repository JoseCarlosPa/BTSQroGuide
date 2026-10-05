# 📘 BTS Querétaro Guide

Portal centralizado de documentación, procesos y operaciones para la oficina de **BTS Querétaro**, construido con [Docusaurus 3](https://docusaurus.io/).

- 🌐 **Sitio en vivo (GitHub Pages)**: [https://josecarlospa.github.io/BTSQroGuide/](https://josecarlospa.github.io/BTSQroGuide/)
- 🐙 **Repositorio**: [https://github.com/JoseCarlosPa/BTSQroGuide](https://github.com/JoseCarlosPa/BTSQroGuide)

---

## 🚀 Inicio Rápido (Desarrollo Local)

### 1. Requisitos Previos
- Node.js >= 20.0
- npm >= 10.0

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el servidor de desarrollo local
```bash
npm start
```
El portal estará disponible en [http://localhost:3000/BTSQroGuide/](http://localhost:3000/BTSQroGuide/) con recarga en caliente (*hot-reloading*).

### 4. Generar compilación de producción
```bash
npm run build
```
Puedes previsualizar el resultado compilado localmente con:
```bash
npm run serve
```

---

## ⚙️ Despliegue Automático en GitHub Pages

El proyecto incluye un flujo de trabajo de GitHub Actions en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) que compila y publica automáticamente el sitio en cada `push` a la rama `main`.

### Activación requerida en GitHub (una sola vez):
1. Ve a tu repositorio en GitHub: [https://github.com/JoseCarlosPa/BTSQroGuide](https://github.com/JoseCarlosPa/BTSQroGuide).
2. Entra a **Settings** > **Pages** (menú izquierdo).
3. En la sección **Build and deployment**:
   - Bajo **Source**, cambia la opción a **GitHub Actions**.
4. ¡Listo! A partir de ese momento, cada commit en `main` desplegará automáticamente la versión más reciente en:
   👉 **[https://josecarlospa.github.io/BTSQroGuide/](https://josecarlospa.github.io/BTSQroGuide/)**
