## Time Ago

Time Ago is a javascript utility that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").

Install the package from [npm](https://npmjs.com/release)

```bash
npm install --save time-ago
```

## Usage

Just pass a Date object to the function and time-ago will convert it to a readable string.

#### Time ago supports the following epochs
* year
* month
* day
* hour
* minute

```js
import timeAgo from 'time-ago';

// Create a new date that reflects 2 minutes ago
const oneMinutesAgo = new Date().setMinutes(new Date().getMinutes() - 1);
// Create a new date that reflects 5 days ago
const oneDaysAgo = new Date().setDate(new Date().getDate() - 1);

timeAgo(oneMinutesAgo); // => '1 minute ago'
timeAgo(oneDaysAgo); // => '1 day ago'
```

If the returned value is greater then one, we will add a suffix to the epoch

```js
import timeAgo from 'time-ago';

// Create a new date that reflects 2 minutes ago
const twoMinutesAgo = new Date().setMinutes(new Date().getMinutes() - 2);
// Create a new date that reflects 5 days ago
const twoDaysAgo = new Date().setDate(new Date().getDate() - 2);

timeAgo(twoMinutesAgo); // => '2 minutes ago'
timeAgo(twoDaysAgo); // => '2 days ago'
```

## API

#### `timeAgo(date, [options])`

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
