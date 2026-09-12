# TerapiasKids Store

## Descripción del proyecto

TerapiasKids Store es un e-commerce desarrollado en **React + TypeScript + Vite** para la
psicóloga Elizabeth Rivero Arias. Permite a las familias explorar y "matricularse" en
programas de bienestar emocional para niños, adolescentes y adultos: buscar por nombre,
filtrar por categoría de público objetivo y armar una selección (carrito) con el total a
pagar antes de confirmar la inscripción.

Este proyecto corresponde a la Tarea 1 (Componentes Custom para E-commerce en React) del
diplomado, y no requiere backend: los productos se simulan con un array local en TypeScript.

## Componentes creados

Todos los componentes están organizados en `/src/components`, cada uno en su propia
carpeta con su archivo `.tsx` y su hoja de estilos `.css`:

| Componente | Ubicación | Descripción |
|---|---|---|
| **Header** | `src/components/Header` | Logo y nombre de la tienda (TerapiasKids), con el nombre de la profesional. |
| **SearchBar** | `src/components/SearchBar` | Input controlado para buscar programas por nombre o descripción. |
| **ProductCard** | `src/components/ProductCard` | Muestra la información de un producto (nombre, precio, imagen, categoría, etc.) recibida por **props**. Maneja su propio estado (`useState`) para la cantidad seleccionada. |
| **ProductList** | `src/components/ProductList` | Renderiza el listado de `ProductCard` usando `map()` y `key`. |
| **Button** | `src/components/Button` | Botón reutilizable con variantes `primary` / `secondary`. |
| **Footer** | `src/components/Footer` | Información básica de contacto y ubicación. |

**Manejo de estado (`useState`):** se usa en `App.tsx` (búsqueda, categoría seleccionada y
carrito) y en `ProductCard.tsx` (cantidad de cupos seleccionados por producto).

## Simulación de datos

Los productos se definen como un array de objetos TypeScript en `src/data/product.ts`,
cada uno con (como mínimo) `id`, `name`, `price`, `category` e `image`, además de campos
adicionales propios del rubro (edad, duración, modalidad, descripción, etc.).

## Tecnologías usadas

- React 19
- TypeScript
- Vite
- CSS puro (variables CSS para theming)

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio y entrar a la carpeta del proyecto.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador la URL que indique la terminal (por ejemplo `http://localhost:5173`).

Para generar la build de producción:
```bash
npm run build
```

## Capturas de pantalla

> Agrega aquí al menos 2 capturas del resultado final antes de entregar la tarea:
> 1. Vista general del e-commerce (catálogo + carrito).
> 2. Detalle de un `ProductCard` con la selección de cantidad activa.

```
![Vista general](./docs/screenshot-catalogo.png)
![Detalle de producto](./docs/screenshot-producto.png)
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Header/
│   ├── SearchBar/
│   ├── ProductCard/
│   ├── ProductList/
│   ├── Button/
│   └── Footer/
├── data/
│   └── product.ts
├── App.tsx
└── main.tsx
```
