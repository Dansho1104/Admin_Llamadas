const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde dist con la base URL correcta
app.use('/Admin_Llamadas', express.static(path.join(__dirname, 'dist')));

// Manejar rutas SPA - redirigir todo a index.html
app.get('/Admin_Llamadas/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Redirigir la raíz a la aplicación
app.get('/', (req, res) => {
  res.redirect('/Admin_Llamadas/');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor local ejecutándose en: http://localhost:${PORT}/Admin_Llamadas/`);
  console.log('📝 Usa este servidor para probar la aplicación localmente');
  console.log('🛑 Para detener el servidor, presiona Ctrl+C');
});