# Marcos Internos (Inner Frames)

## 📋 Descripción

El marco interno es el **borde decorativo del área de ilustración**. Enmarca la imagen del personaje y va encima de ella (z-index: 30).

## 🎯 Asset Base Predeterminado

- **URL**: https://i.ibb.co/TxVwb9Qf/Marco-interno-gris.webp
- **Nombre**: Marco interno gris
- **Función**: Borde del área de ilustración

## 📐 Especificaciones

- **Formato**: PNG con transparencia (o WebP)
- **Dimensiones exactas**: **346.1391 × 296.8294 px**
- **Centro**: Debe ser **transparente** para ver la ilustración
- **Grosor recomendado**: 4-8 px
- **Calidad**: Alta resolución

## 📍 Ubicación en la carta

El marco interno rodea **solo el área de ilustración**, dentro del template.

```
┌─────────────────────────┐
│ Template                │
│  ┌──────────────────┐   │
│  │ MARCO INTERNO    │   │ ← TÚ ESTÁS AQUÍ
│  │  ┌────────────┐  │   │
│  │  │Ilustración │  │   │ (z-20)
│  │  └────────────┘  │   │
│  └──────────────────┘   │
│  [Info debajo]          │
└─────────────────────────┘
```

## 💡 Cómo agregar un nuevo marco interno

1. **Crea tu marco** con las dimensiones exactas (346.1391 × 296.8294 px)
2. **Diseña el borde** (4-8 px grosor recomendado)
3. **Centro transparente** para ver la ilustración (337.3334 × 288.5933 px)
4. **Guarda como PNG** con transparencia
5. **Coloca el archivo** en esta carpeta: `/assets/inner-frames/`
6. **Edita** `/config/assets.ts`:

```typescript
// Agregar en INNER_FRAMES
mimarco: '/assets/inner-frames/mi-marco-interno.png',

// Agregar en INNER_FRAME_CONFIG
{
  id: 'mimarco',
  label: 'Mi Marco',
  image: INNER_FRAMES.mimarco,
}
```

7. **¡Listo!** Aparecerá en el selector.

## 🎨 Recomendaciones de diseño

### Estilo del borde:

- **Simple**: Línea delgada y elegante
- **Doble**: Dos líneas paralelas
- **Ornamentado**: Con decoraciones en esquinas
- **Temático**: Acorde a la clase/tipo
- **Degradado**: Transición de colores
- **Con textura**: Piedra, metal, madera, etc.

### Esquinas:

Puedes agregar elementos decorativos en las 4 esquinas:
- Símbolos
- Adornos
- Gemas
- Iconos temáticos

### Colores sugeridos:

- **Plata/Gris**: Neutro, versátil
- **Oro**: Premium, elegante
- **Bronce**: Común, rústico
- **Negro**: Moderno, contrastante
- **Blanco**: Limpio, minimalista

## 📦 Marcos internos sugeridos

- **Elegante**: Líneas dobles con esquinas redondeadas
- **Ornamental**: Decoración barroca en esquinas
- **Tecnológico**: Líneas rectas y ángulos
- **Místico**: Runas o símbolos mágicos
- **Natural**: Enredaderas o elementos orgánicos
- **Geométrico**: Patrones abstractos

## 🔧 Medidas importantes

### Área de ilustración (dentro del marco):
- **337.3334 × 288.5933 px**

### Grosor del marco:
- **Arriba/Abajo**: ~4 px
- **Izquierda/Derecha**: ~4 px

### Cálculo:
```
Marco interno: 346.1391 × 296.8294 px
Ilustración:   337.3334 × 288.5933 px
Grosor:        ~4-5 px por lado
```

## 📍 Orden de capas

El marco interno va **encima de la ilustración** pero **debajo de**:
- Iconos de clases (z-40)
- Textos y stats (z-60)
- Marco externo (z-70)

```
z-20: Ilustración
z-30: Marco interno ← TÚ ESTÁS AQUÍ
z-40: Iconos clases
z-70: Marco externo
```

## ⚠️ Importante

- El marco debe ser **sutil**, no robar protagonismo a la ilustración
- El centro debe ser **completamente transparente**
- El grosor debe ser **consistente** en todos los lados
- Debe combinar bien con diferentes templates y marcos externos

## 💡 Tips de diseño

### Para que se vea profesional:

1. **Contraste**: Debe destacar sobre la ilustración
2. **Sutil**: No debe ser demasiado grueso
3. **Consistente**: Mismo grosor en todos lados
4. **Limpio**: Bordes definidos y precisos
5. **Opcional**: Agrega sombra interior para profundidad

### Combinaciones sugeridas:

| Marco Externo | Marco Interno | Efecto |
|--------------|---------------|--------|
| Oro          | Oro           | Lujo total |
| Plata        | Blanco        | Elegante |
| Gris         | Gris          | Neutro |
| Colorido     | Neutro        | Equilibrado |

## 🎯 Casos de uso

- **Cartas comunes**: Marco interno simple y delgado
- **Cartas raras**: Marco interno con detalles en esquinas
- **Cartas legendarias**: Marco interno ornamentado
- **Cartas especiales**: Marco interno temático (fuego, agua, etc.)
- **Cartas promocionales**: Marco interno holográfico o con efectos

## 🖼️ Ejemplos visuales

### Marco simple:
```
┌────────────────┐
│ ┌────────────┐ │
│ │            │ │
│ │            │ │
│ └────────────┘ │
└────────────────┘
```

### Marco con esquinas:
```
┌─◆──────────◆─┐
│ ┌────────────┐ │
│ │            │ │
│ └────────────┘ │
└─◆──────────◆─┘
```

### Marco ornamentado:
```
╔═══════════════╗
║ ┌───────────┐ ║
║ │           │ ║
║ └───────────┘ ║
╚═══════════════╝
```
