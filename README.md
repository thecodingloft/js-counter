# js-counter

In this project, you will build a simple counter object in JavaScript that lets you dynamically count from 0 to a certain number. 
You can set the steps and counting interval.

This is a really cool effect on website if you want to showcase some important numbers about your business, e.g. 23 countries or 24700 customers.

All you need is to provide a config object, then you create a new instance. 
In the config object, you need to define the selector of the html element where you want to display the number.

```js 
const configObject = {
    selector: '.any-class-or-id',
    countEnd: 23,
    steps: 1,
    intervalMS: 50,
}

const YourCounter = new Counter(configObject);
```
