# iadb

**Internet Auto Database** — a lightweight utility library for car makes and models.

## Installation

```bash
npm install iadb
```

## Usage

```js
const iadb = require('iadb');
```

## API

### `getMakes()`
Returns an array of all car makes.
```js
iadb.getMakes();
// ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', ...]
```

### `getModels(make)`
Returns an array of models for a given make. Case-insensitive.
```js
iadb.getModels('Toyota');
// ['4Runner', 'Camry', 'Corolla', 'RAV4', ...]

iadb.getModels('invalid make');
// []
```

### `isValidMake(make)`
Returns `true` if the make exists in the database. Case-insensitive.
```js
iadb.isValidMake('Ford');   // true
iadb.isValidMake('Forddd'); // false
```

### `isValidModel(make, model)`
Returns `true` if the model exists for the given make. Case-insensitive.
```js
iadb.isValidModel('Honda', 'Civic');  // true
iadb.isValidModel('Honda', 'Camry');  // false
```

### `searchMakes(query)`
Search makes by partial string. Case-insensitive.
```js
iadb.searchMakes('mer');
// ['Mercedes-Benz']
```

### `searchModels(query, make?)`
Search models by partial string, optionally filtered by make. Returns an array of `{ make, model }` objects.
```js
iadb.searchModels('sport');
// [{ make: 'Hyundai', model: 'Tucson' }, { make: 'Nissan', model: 'Rogue Sport' }, ...]

iadb.searchModels('sport', 'Nissan');
// [{ make: 'Nissan', model: 'Rogue Sport' }]
```

### `getAll()`
Returns the full raw dataset.
```js
iadb.getAll();
// { makes: [ { name: 'Acura', models: [...] }, ... ] }
```

## License

MIT
