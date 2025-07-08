# CyberG-icons

🎨 **CyberG-icons** is an open-source custom icon font library for web projects, featuring 69 modern, Y2K-inspired icons. The icons are packaged as a webfont (WOFF2, WOFF, TTF) and are easy to use via CSS classes in React, Vue, or plain HTML. Perfect for fast, scalable, and stylish icons in any web application.

---

## Features

- 69 unique, Y2K-inspired icons
- Provided as webfont: **WOFF2**, **WOFF**, **TTF**
- Easy integration with **CDN** or local files
- Simple CSS class usage
- Works with **React**, **Vue**, or plain HTML
- Open source (MIT License)

---

## Repository Structure

```
CyberG-icons/
│
├── fonts/
│   ├── cyberG.woff2
│   ├── cyberG.woff
│   └── cyberG.ttf
│
├── cyberG.css
├── README.md
├── LICENSE
├── index.html
├── script.js
└── style.css
```

---

## Installation

### 1. Use via CDN

Add this line to your `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gheorghiciucgeorgia/CyberG-icons@v1.0.1/cyberG.css">
```

### 2. Use Locally

1. Download or clone this repository.
2. Copy the `fonts/` folder and `cyberG.css` into your project.
3. Add this to your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/cyberG.css">
```

---

## Usage

Add an icon to your HTML using the appropriate class:

```html
<i class="cybg-barcode cybg"></i>
```

Replace `cybg-barcode` with any icon name from the library.

---

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CyberG-icons Example</title>
  <link rel="stylesheet" href="cyberG.css">
</head>
<body>
  <i class="cybg-star-01 cybg"></i>
  <i class="cybg-heart-01 cybg"></i>
  <i class="cybg-flower-01 cybg"></i>
</body>
</html>
```

---

## License

This project is open source and licensed under the [MIT License](./LICENSE).

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## Author

Created by [gheorghiciucgeorgia](https://github.com/gheorghiciucgeorgia)