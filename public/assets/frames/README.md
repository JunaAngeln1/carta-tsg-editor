# Marcos de Cartas (Frames)

Coloca aquí las imágenes de los 4 marcos disponibles para las cartas.

## 📋 Nomenclatura de archivos (nombres exactos):

- `frame-cobre.png` - Marco de Cobre
- `frame-plata.png` - Marco de Plata
- `frame-oro.png` - Marco de Oro
- `frame-diamante.png` - Marco de Diamante 💎

## 📐 Especificaciones exactas:

- **Formato**: PNG con transparencia (canal alpha)
- **Dimensiones**: **413.9014 px × 578.148 px** (medida exacta de la carta)
- **Transparencia**: El centro del marco debe ser **completamente transparente**
- **Calidad**: Alta resolución (300 DPI para impresión)
- **Capa**: El marco va **encima de todo** (z-index más alto)

## 📍 Dónde se usa:

El marco es la capa visual superior que rodea toda la carta, dándole su aspecto premium y distintivo.

## 💡 Notas importantes:

- El marco debe tener el centro transparente para ver el contenido de la carta
- El grosor del borde puede variar según tu diseño
- Puedes incluir detalles decorativos en las esquinas
- El marco se renderiza al final, sobre todas las demás capas

## 🎨 Jerarquía de marcos:

- **Cobre**: Común/básico
- **Plata**: Poco común
- **Oro**: Raro
- **Diamante**: Ultra raro/premium 💎

## ⚡ Sin modificar código:

Solo coloca las 4 imágenes PNG con transparencia. El sistema las cargará automáticamente.

## 🔄 Fallback:

Si un marco no existe, el sistema mostrará:
- Un borde púrpura provisional
- Un efecto de sombra (box-shadow)
- Texto indicando el slot (ej: "slot_marco_oro")
