#Currently Not Working
Due to an error with a dependency in NPM's [Marky-Markdown](https://github.com/npm/marky-markdown) the code can not be compiled.  

An issue has been submited about this. Track it [here](https://github.com/npm/marky-markdown/issues/46)

![Codeship Status](https://codeship.com/projects/YOUR_PROJECT_UUID/status?branch=v2)

#Polymer-Markdown-Tag
Polymer element for displaying Github style markdown

#Features
- Uses NPM's [Marky-Markdown](https://github.com/npm/marky-markdown)
	- Parses markdown
	- Sanatizes HTML
	- Applies syntax highlighting
	- Converts headings(`h1`, `h2`, `h3`, ...) to anchor hyperlinks

#Installing
Install Polymer-Markdown-Tag via NPM with:

```
npm install polymer-markdown-tag --save
```

#Building From Source
Clone from github

```
git clone git@github.com:Noah-Huppert/Polymer-Markdown-Tag.git
```

Install NPM dependencies

```
npm install
```

Build with Grunt

```
grunt
```

#Usage
Import Polymer-Markdown-Tag

```html
<link rel="import" href="node_modules/polymer-markdown-tag/dist/polymer-markdown-tag.html">
```

Use the `<mark-down />` tag. Set the `src` attribute of the `<mark-down />` tag to the raw markdown you want processed.  

**Example**:

```html
<mark-down src="**bold** and *italics*"></mark-down>
```

would turn into:
**bold** and *italics*

**Data binding Exmaple:**  

```html
<template is="auto-bindind">
	<textarea value="{{RawMarkdown}}"></textarea>

	<mark-down src="{{RawMarkdown}}"></mark-down>
</template>
```

When you change the text in the `textarea` the content will be transformed into markdown.

#Documentation
##Attributes
| Name | Type     | Description                 |
| ---- | -------- | --------------------------- |
| src  | `String` | The raw markdown to compile |

##Methods
| Name   | Returns | Description                                    |
| ------ | ------- | ---------------------------------------------- |
| update | `None`  | Recompiles the contents of the `src` attribute |

##Properties
None

##Events
None
