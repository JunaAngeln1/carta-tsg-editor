# 📂 Carpeta de Assets

Esta carpeta contiene todos los recursos visuales personalizados para el Editor de Cartas TSG.

## 🎯 Estructura

Cada subcarpeta tiene su propio `README.md` con instrucciones detalladas sobre qué archivos colocar.

```
assets/
├── frames/           → Marcos/bordes de las cartas
├── templates/        → Plantillas base por generación
├── energy-icons/     → Iconos de tipos de energía
├── hp-icons/         → Iconos de puntos de salud
├── symbols/          → Logos, símbolos de rareza, etc.
├── backgrounds/      → Fondos temáticos predefinidos
└── fonts/            → Fuentes tipográficas personalizadas
```

## 📖 Guía completa

Para instrucciones detalladas sobre cada tipo de asset, consulta:

👉 **[INSTRUCCIONES-ASSETS.md](../INSTRUCCIONES-ASSETS.md)** en la raíz del proyecto

## ⚡ Inicio Rápido

1. Abre cada subcarpeta y lee su `README.md`
2. Coloca tus imágenes con los nombres especificados
3. Si cambias nombres, edita `/config/assets.ts`
4. Recarga la aplicación para ver los cambios

## ✅ Checklist Básico

Para que el editor funcione con tus assets personalizados, necesitas como mínimo:

- [ ] **4 marcos** en `/frames/` (gold, stars, rare, common)
- [ ] **3 plantillas** en `/templates/` (gen1, gen2, gen3)
- [ ] **10 iconos de energía** en `/energy-icons/`
- [ ] **1 icono de HP** en `/hp-icons/`
- [ ] **1 logo TSG** en `/symbols/`

Todo lo demás es opcional pero recomendado para mayor personalización.

## 🔄 Actualización de Assets

Al agregar o cambiar un asset:

1. Coloca el archivo en la carpeta correspondiente
2. Asegúrate de que el nombre coincida con `/config/assets.ts`
3. Recarga el navegador (Ctrl+R o Cmd+R)

## 📐 Especificaciones Técnicas Generales

- **Marcos**: PNG transparente, 400x560px
- **Plantillas**: PNG/JPG, 400x560px
- **Iconos de energía**: PNG transparente, 64x64px o 128x128px
- **Icono HP**: PNG transparente, 32x32px o 64x64px
- **Fondos**: PNG/JPG, 400x280px o mayor
- **Logo**: PNG transparente, altura ~50-100px

## 🎨 Recomendaciones de Diseño

1. **Consistencia**: Mantén un estilo visual coherente
2. **Calidad**: Usa 300 DPI para assets destinados a impresión
3. **Formato**: PNG para elementos con transparencia, JPG para fondos
4. **Tamaño**: No excedas 2MB por imagen para mantener rendimiento
5. **Nombres**: Usa solo letras, números y guiones (no espacios ni acentos)

## ⚠️ Importante

- Los nombres de archivo son **case-sensitive** (distinguen mayúsculas/minúsculas)
- Usa guiones `-` en lugar de guiones bajos `_` o espacios
- Asegúrate de que las imágenes tengan las extensiones correctas (.png, .jpg)
- Los archivos PNG con transparencia deben tener el canal alpha guardado

## 🔍 Solución de Problemas

### "La imagen no aparece"
- Verifica que el nombre del archivo coincida exactamente con `/config/assets.ts`
- Confirma que la extensión sea correcta (.png, no .PNG)
- Recarga la página con Ctrl+Shift+R (hard reload)

### "La imagen se ve pixelada"
- Aumenta la resolución de tu imagen
- Asegúrate de exportar en alta calidad
- Usa PNG en lugar de JPG para gráficos con bordes definidos

### "El marco no cubre toda la carta"
- Verifica que las dimensiones sean 400x560px
- Asegúrate de que el marco tenga el centro transparente
- Revisa que la imagen esté en formato PNG con canal alpha

## 📞 Soporte

Si tienes problemas:

1. Revisa el `README.md` de la carpeta específica
2. Consulta `/INSTRUCCIONES-ASSETS.md`
3. Verifica `/config/assets.ts` para las rutas correctas
4. Busca comentarios en los archivos `.tsx` del código
