# 📘 BTS Querétaro Guide

Portal centralizado de documentación, procesos basados en **CMMI** y operaciones para la oficina de **BTS Querétaro**, construido con [Docusaurus 3](https://docusaurus.io/).

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
El portal estará disponible automáticamente en [http://localhost:3000](http://localhost:3000) con recarga en caliente (*hot-reloading*).

### 4. Generar compilación de producción
```bash
npm run build
```
Los archivos estáticos se generarán en la carpeta `build/`. Puedes previsualizarlos localmente con:
```bash
npm run serve
```

---

## 📂 Estructura del Proyecto

```text
BTSQroGuide/
├── docs/                                # Documentación principal
│   ├── intro.md                         # Portada y bienvenida
│   ├── cmmi/                            # Marco y procesos CMMI
│   │   ├── introduccion.md              # Resumen del modelo de madurez
│   │   ├── plantilla-proceso.md         # Plantilla estándar para nuevos procesos
│   │   ├── 01-gestion-proyectos/        # Planificación (PP), Monitoreo (PMC)
│   │   ├── 02-ingenieria-desarrollo/    # Requerimientos (RD), Solución (TS), QA
│   │   └── 03-soporte-calidad/          # Configuración (CM), PPQA, Métricas
│   └── oficina-qro/                     # Operación local de Querétaro
│       ├── onboarding.md                # Guía de bienvenida para nuevos ingresos
│       ├── instalaciones.md             # Uso de salas, horarios y normas
│       └── herramientas-sistemas.md     # Accesos, VPNs, GitHub, Jira
├── blog/                                # Anuncios, notas de versión y eventos
├── src/                                 # Componentes React y estilos personalizados
├── static/                              # Recursos estáticos (imágenes, logos)
├── docusaurus.config.ts                 # Configuración general del sitio
└── sidebars.ts                          # Configuración de menús de navegación lateral
```

---

## 📝 ¿Cómo agregar o documentar un nuevo proceso?

1. Ve a [`docs/cmmi/plantilla-proceso.md`](file:///docs/cmmi/plantilla-proceso.md) y copia el formato base.
2. Crea un archivo `.md` dentro de la subcarpeta que corresponda (`01-gestion-proyectos/`, `02-ingenieria-desarrollo/` o `03-soporte-calidad/`).
3. Completa los campos:
   - Propósito y Alcance.
   - Matriz RACI de responsabilidades.
   - Flujo del proceso (puedes usar diagramas `mermaid`).
   - Entradas, Salidas y Métricas.
4. Valida los cambios localmente con `npm start`.
5. Envía un Pull Request para revisión del equipo.
