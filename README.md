# SNACKBR-JS

Snackbar al estilo Android en puro Javascript y CSS.

## CONFIGURACIÓN

Descargue ambos archivos `snackbr.min.css` y `snackbr.min.js`, y cárguelos en el `HEAD` del archivo `HTML`:

```HTML
<head>
<!-- Asumiendo que guarda en las carpetas CSS y JS cada archivo -->
<link rel="stylesheet" href="./css/snackbr.min.css">
<script type="text/javascript" src="./js/snackbr.min.js"></script>
</head>
<body>
```

## PARÁMETROS

```JAVASCRIPT
snackbr(VISIBLE, ERROR, TEXTO, CARGANDO, TEMPORIZADO, TIEMPO, ICONO);
```

| PARÁMETRO | TIPO DE DATOS | POR DEFECTO | DESCRIPCIÓN |
| --------- | ------------- | ----------- | ----------- |
| VISIBLE\* | boolean | indeterminado | Muestra u oculta el snackbar. |
| ERROR\*\* | boolean | indeterminado | Muestra en color rojo si hay error (true). |
| TEXTO\*\* | string | indeterminado | El texto a mostrar (se puede usar etiquetas HTML). |
| CARGANDO | boolean | false | Muestra una animación de un circulo girando. |
| TEMPORIZADO | boolean | false | Define si pasado un tiempo en segundos se oculta automáticamente o queda visible indefinidamente. |
| TIEMPO | int | 3 segundos | Tiempo en segundos antes de auto-ocultarse. |
| ICONO | "adv", "err", "info" | indeterminado | Color del ícono en forma de admiración (!). Si no se define, no se muestra. |

\**Obligatorio.*
\*\**Obligatorio si `VISIBLE` es `TRUE`*

## USO
### Para mostrar;

Esto mostrará un mensaje con la palabra ***prueba*** en negrita, durante 6 segundos, con un signo de admiración en azul y el contorno también de color azul:
```JAVASCRIPT
snackbr(true, false, "Mensaje de <strong>prueba</strong>", false, true, 6, "info");
```

Esto mostrará un mensaje con la palabra ***Cargando...***, con la animación del círculo girando, y no se oculta nunca, hasta hacer clic en él o con el comando para ocultar (ver más abajo):
```JAVASCRIPT
snackbr(true, false, "Cargando...", true, false);
```

Esto mostrará un mensaje con la palabra ***Error***, el contorno se vuelve rojo, por un tiempo indeterminado, hasta hacer clic en él o con el comando para ocultar (ver más abajo):
```JAVASCRIPT
snackbr(true, true, "Error");
```
		
### Para ocultar;
```JAVASCRIPT
snackbr(false);
```

## POSICIONAMIENTO

Por defecto, se autoconfigura en el centro-abajo, pero puede especificar otras opciones.

### Especificar la posición llamando al final del body a:
```HTML
<script>
// Posicionar el SNACKBR
// ALTO (string): "arriba", "abajo"
// LADO (string): "izquierda", "centro", "derecha"
generarSnackbr(ALTO, LADO);
</script>
```

## ADVERTENCIA DE SEGURIDAD

Debido a que permite ingresar etiquetas HTML, tenga cuidado al usar AJAX u otra tecnología ya que puede ser inyectado facilmente código malicioso.

### POR EJEMPLO

Esto genera un enlace dentro del Snackbar:
```JAVASCRIPT
snackbr(true, false, "Esto es un <a href='http://enlace.al/sitio/malicioso'>enlace</a>");
```
## LICENCIA

Se distribuye bajo licencia Apache 2.0 [Ir a la licencia](LICENSE.txt)
