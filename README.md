## Datun.js

Datun.hjs is a javascript utility that makes it easy to print readable dates, e.g. 4 minutes ago.

Install the package from [npm](https://npmjs.com/release)

```bash
npm install --save datum.js
```

## Usage

Just pass a Date object to the function and datum.js will convert it to a readable string.

#### Time ago supports the following epochs
* year
* month
* day
* hour
* minute

```js
import datum from 'datum.js';

// Create a new date that reflects 2 minutes ago
const oneMinutesAgo = new Date().setMinutes(new Date().getMinutes() - 1);
// Create a new date that reflects 5 days ago
const oneDaysAgo = new Date().setDate(new Date().getDate() - 1);

datum(oneMinutesAgo); // => '1 minute ago'
datum(oneDaysAgo); // => '1 day ago'
```

If the returned value is greater then one, we will add a suffix to the epoch

```js
import datum from 'datum.js';

// Create a new date that reflects 2 minutes ago
const twoMinutesAgo = new Date().setMinutes(new Date().getMinutes() - 2);
// Create a new date that reflects 5 days ago
const twoDaysAgo = new Date().setDate(new Date().getDate() - 2);

datum(twoMinutesAgo); // => '2 minutes ago'
datum(twoDaysAgo); // => '2 days ago'
```

## API

#### `datum(date, [options])`

The parse method takes a Date object and returns a string

#### `date`
The date param always need to be a date object and will always return a string.

### Options
```javascript
var options = {
    exeption: '0 minutes a go',
};
```

## License

[MIT](LICENSE). Copyright (c) 2016 Philip Knape.
