# Iconos de Energías

Coloca aquí los iconos de los 3 tipos de energía del juego.

## 📋 Nomenclatura de archivos (nombres exactos):

- `energy-aceite.png` 🛢️ - Energía Aceite
- `energy-mana.png` ✨ - Energía Maná
- `energy-incolora.png` ⚪ - Energía Incolora

## 📐 Especificaciones recomendadas:

- **Formato**: PNG con transparencia (canal alpha)
- **Dimensiones**: 64x64 px o 128x128 px (cuadrado)
- **Fondo**: Transparente
- **Calidad**: Alta resolución
- **Estilo**: Iconos circulares o con forma definida

## 📍 Dónde se usan:

- Selector de costo de energía en ataques
- Indicadores de costo en la carta (parte izquierda de cada ataque)
- Se pueden apilar múltiples del mismo tipo

## 💡 Notas:

- Los iconos aparecen pequeños (aprox. 20-24px en la carta)
- Deben ser claramente distinguibles incluso a tamaño reducido
- El color de fondo se usa como fallback si la imagen no carga:
  - Aceite: Gris oscuro (#64748b)
  - Maná: Púrpura brillante (#8b5cf6)
  - Incolora: Gris claro (#d1d5db)

## ⚡ Sistema modular:

Para agregar una nueva energía en el futuro:
1. Coloca el icono aquí: `energy-nueva.png`
2. Edita `/config/assets.ts`
3. Agrega al array `ENERGY_TYPES`

## 📌 Estado actual:

✅ Sistema usa emojis provisionales hasta que coloques tus iconos reales
✅ Los slots están listos para recibir tus imágenes
✅ Sin necesidad de modificar código
