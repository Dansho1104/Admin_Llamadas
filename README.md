# Admin Agentes Llamadas

Sistema de administración para agentes de llamadas construido con React, Vite y Tailwind CSS.

## 🚀 Despliegue en GitHub Pages

### Configuración Automática

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Pasos para el despliegue:

1. **Subir el código a GitHub:**
   ```bash
   git add .
   git commit -m "Configuración para GitHub Pages"
   git push origin main
   ```

2. **Habilitar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Navega a Settings > Pages
   - En "Source", selecciona "GitHub Actions"
   - El workflow se ejecutará automáticamente

3. **Despliegue manual (opcional):**
   ```bash
   npm run deploy
   ```

### 🔧 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run deploy` - Desplegar a GitHub Pages
- `npm run lint` - Ejecutar ESLint

### 📁 Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas principales
├── hooks/         # Custom hooks
├── utils/         # Utilidades
└── assets/        # Recursos estáticos
```

### 🛠️ Tecnologías utilizadas

- React 19
- Vite
- Tailwind CSS
- Lucide React (iconos)
- React Router DOM
- Recharts
- Framer Motion

### 🌐 URL del sitio

Una vez desplegado, el sitio estará disponible en:
`git`

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
