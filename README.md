<p align="center">
  <img src="https://github.com/VictorGonzalezNahuat/GuinHouse/blob/main/public/assets/brand-logo.jpeg?raw=true" alt="GuinHouse Logo" width="180" style="border-radius: 12px;"/>
</p>

<h1 align="center">GUINHOUSE</h1>

<p align="center">
  <b>Cliente personalizado de ERPNext hecho en Angular 21</b>
</p>

---

 [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

## Requisitos de software
Asegúrate de tener instalados los siguientes componentes antes de clonar el proyecto:

1. **Node.js y npm**:
   - Requiere **Node.js (v20+ o superior)** y **npm 11+**.
   - Descárgalo e instálalo desde [nodejs.org](https://nodejs.org/).
   - Verifica tus versiones en la terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Angular CLI (Global)**:
   - Instala la CLI de Angular para gestionar el proyecto:
     ```bash
     npm install -g @angular/cli
     ```

---

## Instalación

1. **Clonar el repositorio y entrar a la carpeta:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DE_LA_CARPETA>
2. **Instalar las dependencias:**
    ```bash
    npm install

3. **Levantar el servidor de desarrollo utilizando la CLI local del proyecto:**
    ```bash
    npx ng serve
4. **Accede a http://localhost:4200/ desde el navegador**


## Modificacion del Frontend
El proyecto se estructura en un arbol de componentes alojados dentro de /src/app/components
```text
src/app/components/
├── login/                  
│   ├── login.ts
│   ├── login.html
│   └── login.css
│
└── app/                    
    ├── app.ts
    ├── app.html
    ├── app.css
    │      
    ├── home/           
    │   ├── home.ts
    │   ├── home.html
    │   └── home.css
    │
    └── inventario/    
        ├── inventario.ts
        ├── inventario.html
        └── inventario.css
````
### Estructura de un componente

Cada componente en este proyecto funciona como un módulo independiente y reutilizable. Para mantener el código ordenado y modular, Angular separa las responsabilidades en 3 archivos principales:

* **Vista y Estructura (`.html`)**  
  Define los elementos visuales e interactivos de la pantalla usando HTML estructurado.

* **Estilos y Paleta (`.css`)**  
  Contiene las reglas de diseño, clases de CSS, temas, efectos y maquetación visual.

* **Lógica y Estado (`.ts`)**  
  El archivo TypeScript actúa como el orquestador del componente: gestiona las variables, escucha los eventos del usuario y conecta el diseño con las funciones internas.

---

### Trabajo en equipo

Para coordinar el desarrollo y avanzar de forma ágil:

1. **Enfoque en UI/UX (`.html` y `.css`):**  
   Si tu objetivo es diseñar maquetas, ajustar componentes o mejorar la interfaz visual, solo necesitarás editar los archivos `.html` y `.css` del componente correspondiente.

2. **Integración de Lógica (`.ts` y Backend):**  
   Una vez que la estructura visual esté lista, la lógica de negocio, el manejo de estados en TypeScript y las llamadas a las APIs/servicios backend (ERPNext) se vincularán directamente desde el archivo `.ts`.

## Creación de Nuevos Componentes y Convenciones

Para mantener la arquitectura limpia a medida que el proyecto crezca, utilizaremos el generador de la CLI de Angular (`ng generate component`) siguiendo estas reglas de organización:

### 1. Comandos de Generación
Para crear un componente usa el comando `ng generate component` (o su alias `ng g c`):

```bash
# Ejemplo para un componente raíz
npx ng g c components/nombre-del-componente

# Ejemplo para un componente anidado
npx ng g c components/app/nombre-del-subcomponente
```

### 2. Reglas de Ubicación
#### Módulos Independientes (Raíz):

Si el componente representa una pantalla independiente que no comparte la interfaz general (como login, register o páginas de error), créalo directamente dentro de **src/app/components/**.

#### Componentes Anidados (Vistas de la App):

Si la vista se despliega dentro del layout principal del sistema (es decir, usa la barra lateral, el menú superior o el contenedor de app), debe anidarse dentro de **src/app/components/{componente}/** (remplazar {componente} por el real).

#### Componentes Universales / Reutilizables:

Si estás diseñando un elemento que se utilizará en múltiples pantallas (como un botón personalizado, una tarjeta de KPI, una tabla reutilizable o un modal), colócalo dentro de la carpeta global de compartidos: **src/app/components/shared/**

### IMPORTANTE: Revisa siempre la carpeta en la que te encuentras posicionado en la terminal antes de ejecutar ng g c para evitar crear carpetas huérfanas fuera de la estructura oficial.

