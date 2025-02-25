# SNACKBR-JS

Android-style snackbar in pure Javascript and CSS.

## SETTING

Download both `snackbr.min.css` and `snackbr.min.js` files, and upload them to the `HEAD` of the `HTML` file:

```HTML
<head>
<!-- Assuming you save each file in the CSS and JS folders -->
<link rel="stylesheet" href="./css/snackbr.min.css">
<script type="text/javascript" src="./js/snackbr.min.js"></script>
</head>
<body>
```

## PARAMETERS

```JAVASCRIPT
snackbr(VISIBLE, ERROR, TEXT, LOADING, TIMED, TIME, ICON);
```

| PARAMETER | DATA TYPE | DEFAULT | DESCRIPTION |
| --------- | ------------- | ----------- | ----------- |
| VISIBLE\* | boolean | indeterminate | Show or hide the snackbar. |
| ERROR\*\* | boolean | indeterminate | Shows in red if there is an error (true). |
| TEXT\*\* | string | indeterminate | The text to display (you can use HTML tags). |
| LOADING | boolean | false | Shows an animation of a rotating circle. |
| TIMED | boolean | false | Defines whether after a period of time in seconds it is automatically hidden or remains visible indefinitely. |
| TIME | int | 3 seconds | Time in seconds before self-concealment. |
| ICON | "adv", "err", "info" | indeterminate | Color of the icon in the shape of admiration (!). If not defined, it is not displayed. |

\**Mandatory.*
\*\**Required if `VISIBLE` is `TRUE`*

## USE
### To show;

This will display a message with the word ***test*** in bold, for 6 seconds, with a blue exclamation mark and a blue outline:
```JAVASCRIPT
snackbr(true, false, "<strong>Test</strong> Message", false, true, 6, "info");
```

This will display a message with the word ***Loading...***, with the circle animation rotating, and it is never hidden, until you click on it or with the hide command (see below):
```JAVASCRIPT
snackbr(true, false, "Loading...", true, false);
```

This will display a message with the word ***Error***, the outline turns red, for an indefinite amount of time, until you click on it or with the hide command (see below):
```JAVASCRIPT
snackbr(true, true, "Error");
```

### To hide;
```JAVASCRIPT
snackbr(false);
```

## POSITIONING

By default, it is set to center-bottom, but you can specify other options.

### Specify the position by calling the end of the body to:
```HTML
<script>
// Position the SNACKBR
// HEIGHT (string): "arriba", "abajo"
// SIDE (string): "izquierda", "centro", "derecha"
generarSnackbr(HEIGHT, SIDE);
</script>
```

## DARK MODE

You can leave the dark mode on auto by setting it to your system, or you can use the function to do so.

```JAVASCRIPT
// true = enable dark mode
// false = disable dark mode
snackbrOscuro(true|false);
```
Note that the auto mode is always on, if you want to disable it then set the `snackbrModoOscuro` variable to `false` before calling the script.

## SECURITY WARNING

Because it allows entering HTML tags, be careful when using AJAX or other technology as malicious code can easily be injected.

### FOR EXAMPLE

This generates a link within the Snackbar:
```JAVASCRIPT
snackbr(true, false, "This is a <a href='http://link.at/site/malicious'>link</a>");
```
## LICENSE

It is distributed under Apache 2.0 license [Go to license](LICENSE.txt)
