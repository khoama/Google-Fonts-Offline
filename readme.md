#Google Fonts Offline

This is for you if you ever need to download fonts & stylesheets Google Font for offline use (sites without internet access)

###Requirements:
- [NodeJs](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)

###Installation
```
git clone git@github.com:khoama/Google-Fonts-Offline.git

cd Google-Fonts-Offline

npm install
```

###Usage:
Add your desired fonts to Gruntfile.js

```
source_sans_pro: {
	options: {
		family: "Source Sans Pro", 
		sizes: [
			400,700
		],
		cssDestination: "./downloads/styles/source_sans_pro/",
		fontDestination: "./downloads/fonts/source_sans_pro/"
	}
}
```
To download fonts and stylesheets:

```
grunt local-googlefont:source_sans_pro
```