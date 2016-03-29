# abada.materialicons
An Alloy widget creates an icon label using Google material icons . [![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)

## Overview
This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform.

The widget provides a simple [Google material icons](https://design.google.com/icons/) support for labels.

## Features
* Full support for all [Google material icons](https://design.google.com/icons/).
* Refer to icons by their [name](https://design.google.com/icons/) like "star" , "radio_button_checked".
* It can be styled like a normal label.
* Supported events.

## Screenshot
![Screenshot](https://raw.github.com/abada/abada.materialicons/master/docs/screenshot.png)

## Quick Start [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/abada.materialicons)
* Use `gittio install com.rolandschwan.iconlabel` to install via [gitTio](http://gitt.io/cli) or:

  * Download the latest [release](https://github.com/abada/abada.materialicons/releases) of the widget.
  * Unzip the folder to your project under `app/widgets/abada.materialicons`.
  * Add the widget as a dependency to your `app/config.json` file:

        ```javascript
        "dependencies": {
            "abada.materialicons":"*"
        }
        ```
  * Put [MaterialIcons-Regular.ttf](https://github.com/google/material-design-icons/blob/master/iconfont/MaterialIcons-Regular.ttf) under  `app/assets/fonts` .


  ## Usage
  Style it like a normal label.
  To generate a icon just write the [name](https://design.google.com/icons) of the icon and it will automatically be generated.

	**index.xml**

	```xml
	<Alloy>
		<Window>
			<Widget id="mystar" src="abada.materialicons" color="red" icon="star" size="100"  onClick="clickMe"  />
		</Window>
	</Alloy>
	```

  ## License

  <pre>
  Copyright 2016 Abada Henno

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  </pre>
