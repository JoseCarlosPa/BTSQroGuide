---
sidebar_position: 1
title: Gestión de Configuración (CM)
---

# [PRO-SC-01] Gestión de Configuración (SCM)

| Campo | Detalle |
|---|---|
| **Código** | PRO-SC-01 |
| **Versión** | 1.0 |
| **Área CMMI** | Configuration Management (CM) |
| **Responsable** | DevOps / Tech Leads |

---

## 1. Propósito
Establecer y mantener la integridad de los productos de trabajo mediante la identificación de elementos de configuración, control de cambios, auditorías de configuración y control de versiones.

## 2. Elementos de Configuración (CI)
Todo proyecto debe identificar bajo control de versiones:
- Código fuente y scripts de infraestructura como código (Terraform, Dockerfiles).
- Archivos de configuración de CI/CD (GitHub Actions workflows).
- Documentación técnica y especificaciones de requerimientos.
- Versiones de librerías y dependencias (archivos `lockfile` como `package-lock.json`).

## 3. Versionamiento Semántico y Etiquetado (Tags)
Seguimos estrictamente [SemVer (Semantic Versioning)](https://semver.org/):
- Formato: `vMAJOR.MINOR.PATCH` (ej. `v2.4.1`).
- Cada despliegue a producción requiere un **Git Tag** firmado y notas de versión (*Release Notes / Changelog*) asociadas.
