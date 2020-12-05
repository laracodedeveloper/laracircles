# How to setup

## Load the minified version of the jQuery

```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```

## Include plugin's code:

```
<script type="text/javascript" src="js/min/laracircles.min.js"></script>
```

### Include plugin style

```
<style type="text/css" href="css/laracircles.css"></style>
```


### Call the plugin

```
$(".target").laracircles({
	data: {
			id: 1,
			name: "Mitrovice",
			url: "http://google.com",
			size: 130 // kto jon raste sa raste i ka
		  },
});
```

### Every circle is object data


```
{
		id: 1,
		name: "Mitrovice",
		url: "http://google.com",
		size: 130 // kto jon raste sa raste i ka
}
```

![alt text](https://github.com/laracodedeveloper/laracircles/blob/main/image.jpg?raw=true)

