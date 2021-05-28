<p align="center">
  <a href="#">
    <img src="https://raw.githubusercontent.com/Nelh/Next-sidebar/HEAD/assets/images/next-full.png">
  </a>
</p>

<h1 align="center">Next Sidebar</h1>

<p align="center">Minimalistic but perfect Sidebar Menu for your Admin Application (Built with bootstrap)<p>

<p align="center">	
  <a href="https://img.shields.io/npm/dt/next-sidebar">
  <img src="https://img.shields.io/npm/dt/next-sidebar" alt="downoad"></a>
  <a href="https://github.com/Nelh/Next-sidebar/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>	
  <a href="https://badge.fury.io/js/next-sidebar">
  <img src="https://badge.fury.io/js/next-sidebar.svg" alt="npm"></a>	
</p>

<p align="center"><a href="https://nodei.co/npm/next-sidebar/"><img src="https://nodei.co/npm/next-sidebar.png?downloads=true&downloadRank=true&stars=true"></a></p>

## Demo

[Check the demo here](https://next-sidebar.netlify.app/html/blank.html)

## Install


You can manually download Next-sidebar [css here](https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/css/next-sidebar.css) and [js here](https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/js/next-sidebar.js)

#### CDN jsDelivr
<p>When you only need to include Next-sidebar compiled CSS or JS, you can use [jsDelivr](https://www.jsdelivr.com/).</p>

```html
<!-- CSS only -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/css/next-sidebar.min.css">
```

```html
<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/js/next-sidebar.min.js"></script>
```

#### Download via npm

You can install and use next-sidebar with npm. It's registered
as [next-sidebar](https://www.npmjs.com/package/next-sidebar).

```js
$ npm install next-sidebar
```
#### From sources

If you want to use the development version of the plugin, build from source
manually. 

```js
$ git clone https://github.com/Nelh/Next-sidebar.git
$ cd next-sidebar
$ npm install
$ npm run dev
```

## Before using Next-sidebar

the following requirement should meet.

- Ensure you have bootstrap 4 or higher installed
- Ensure you have jquery 3x installed
- Ensure you have an icons library installed for this example we use font awesome 5

## How to use


```html
<body class="app is-collapsed">
    <!-- Sidebar content here -->
    <div class="container-wide">
        <!-- Page content here -->
    </div>
</body>
```
<p>if you want to have the sidebar minify by default remove the class `.is-collapsed` from the body tag</p>

```html
<div class="sidebar">
  <div class="sidebar-inner">
    <div class="sidebar-logo">
      <div class="d-flex align-items-center flex-nowrap">
        <a class="sidebar-link text-decoration-none" href="#">
          <div class="d-flex align-items-center flex-nowrap">
            <div class="logo-sm">
              <div class="logo d-flex align-items-center justify-content-center">
                <!-- The Minify logo here -->
              </div>
            </div>
            <div class="logo-text d-flex align-items-center justify-content-center">
                <!-- The Full Logo here -->
            </div>
          </div>
        </a>
        <div class="">
          <div class="mobile-toggle sidebar-toggle">
            <a href="#" class="text-decoration-none">
              <!-- closing sidebar icon here -->
            </a>
          </div>
        </div>
      </div>
    </div>

    <ul class="sidebar-menu scrollable position-relative">
      <li class="nav-item dropdown">
        <a class="nav-link" href="#">
            <!-- Navigation icon here  -->
          <span class="icon-holder">
            <i class="fal fa-home"></i>
          </span>
          <!-- Navigation link here -->
          <span class="title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#">
          <span class="icon-holder">
            <i class="fas fa-fingerprint"></i>
          </span>
          <span class="title">Auth</span>
          <!-- Icon for dropdown here -->
          <span class="arrow">
            <i class="fas fa-angle-right"></i>
          </span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="sidebar-link" href="#">404</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

```

<p>For dropdown and sub dropdown, you can use it as this</p>

```html
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#">
        <!-- First level -->
    </a>
    <ul class="dropdown-menu">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
                <!-- Second level -->
            </a>
        </li>
        <li class="nav-item dropdown">
            <a  class="nav-link dropdown-toggle" href="#">
                <!-- Third level -->
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#">
                        <!-- etc -->
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</li>
```

<p>Add the button that will trigger the collapsing of the navigation menu in the page content</p>

```html
<a id="sidebar-toggle" class="sidebar-toggle nav-link" href="#">
    <i class="fal fa-bars"></i>
</a>
```

## Requirement 

<p> Those are few dependencies you might need to run this library</p>

| Library     | version   | Description |
| --------- | ------ | ----------- |
| Bootstrap 4, 5+ (required) | 4x,5x |  Use as an extension of the bootstrap library |
| Jquery (required) | 3x |  Only use to trigger click event, can be alter and remove at your conveniance |
| Font awesome (optional) | 5x |  can be replace with any others icons library |
| Perfect Scrollbar (optional) | 1x |  - |


__

## Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
| --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

___

## Donating

If you want to support the development of this extension, you can buy me a coffee 

[![paypal](https://www.paypalobjects.com/en_AU/i/btn/btn_donateCC_LG.gif)](https://paypal.me/lembongui)
Thank you!

___

## Contributing

If you have any idea, feel free to open an issue to discuss a new feature or fork and submit your changes back to me.
