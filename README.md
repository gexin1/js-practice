```javascript
//深度flat
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

```javascript
const byteSize = str => new Blob([str]).size;
```
