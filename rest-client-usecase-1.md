Wish this was possible
======================

Config spec
-----------

```js
  define({
    apiKey: "foobar"
  });
```

REST Client spec
----------------

```js
  define({
    $plugins: [ "rest/wire" ],
    client:
      rest: [
          {
            module: "rest/interceptor/defaultRequest",
            config: {
              params:
                api_key: { $ref: "apiKey" } // This will not work :(
            }
          }
      ]
  });
```

Main Spec
---------

```js
  define({
    config: {
      wire: { spec: 'config-spec' }
    }
    
    client: {
      wire: {
        spec: 'client-spec'
        provide: {
          apiKey: { $ref: 'config.apiKey' }
        }
      }
    }
  });
```
