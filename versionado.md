# Estrategia de Control de Versiones – Proyecto Calculadora Básica

## 1. ¿Qué es Git Flow, GitHub Flow y Trunk-Based Development?

### ✅ Git Flow
Git Flow es una estrategia de ramificación estructurada. Se trabaja con ramas específicas para desarrollo (`develop`), producción (`main` o `master`) y funcionalidades (`feature/`), además de ramas para preparaciones de versiones (`release/`) y correcciones (`hotfix/`). Es ideal para proyectos grandes y complejos, donde se requiere un control estricto de las versiones.

**Ventajas:**
- Muy organizado para equipos grandes.
- Ideal para software con muchas versiones.

**Desventajas:**
- Requiere más pasos y puede ser confuso para principiantes.
- Poco flexible para proyectos pequeños o rápidos.

---

### ✅ GitHub Flow
GitHub Flow es una estrategia más simple, basada en el uso de GitHub. Se trabaja directamente desde la rama `main`, pero cada nueva funcionalidad o mejora se desarrolla en una rama separada. Luego se hace un "pull request" para revisar los cambios antes de unirlos a `main`.

**Ventajas:**
- Simple de aplicar.
- Ideal para proyectos pequeños o colaborativos escolares.
- Facilita el trabajo en equipo desde GitHub.
- No requiere ramas de desarrollo ni producción complejas.

**Desventajas:**
- Puede ser riesgoso si se trabaja directamente con `main` sin revisión (aunque los pull request lo solucionan).

---

### ✅ Trunk-Based Development
Todos los integrantes trabajan directamente sobre una rama principal (como `main` o `trunk`). Las funcionalidades se agregan con cambios pequeños y frecuentes, manteniendo el proyecto constantemente funcional.

**Ventajas:**
- Promueve integración continua.
- Cambios rápidos y simples.

**Desventajas:**
- Requiere muy buena coordinación.
- Riesgo de conflictos si no se controla bien.

---

## 2. ¿Cuál estrategia elegimos?

Después de investigar y discutir en equipo, decidimos utilizar **GitHub Flow** para nuestro proyecto de Calculadora Básica.

---

## 3. Justificación de nuestra elección

Elegimos **GitHub Flow** porque es:

- **Fácil de entender y aplicar**, ideal para nuestro nivel como estudiantes.
- **Colaborativo**, ya que cada miembro puede crear su propia rama, trabajar en su parte y luego subirla.
- **Perfecto para GitHub**, donde llevamos el control de versiones y revisión de cambios mediante pull requests.
- **Ágil**, no requiere pasos complejos como Git Flow ni la coordinación estricta de Trunk-Based.
- **Seguro**, ya que no se modifica la rama `main` directamente.

---

## 4. Cómo lo aplicamos

- Creamos una rama por integrante (ej. `Evelin`, `Ulises`, `Sebas`, etc.).
- Cada quien hizo al menos dos *commits* con mensajes claros.
- Subimos nuestros cambios con `git push origin <nombre-de-la-rama>`.
- Unimos nuestras ramas a `main` una vez revisados los cambios.
- Evitamos conflictos y mantuvimos el código limpio y funcional.

---

## 5. Conclusión

**GitHub Flow** fue la mejor estrategia para nuestro equipo porque nos permitió aprender, colaborar y versionar nuestro proyecto de manera sencilla y ordenada. Fue la mejor opción para un equipo pequeño que desarrolla una app escolar.

