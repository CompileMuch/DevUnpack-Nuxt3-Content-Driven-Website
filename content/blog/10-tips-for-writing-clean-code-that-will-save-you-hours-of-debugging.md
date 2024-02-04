---
title: '10 Tips for Writing Clean Code That Will Save You Hours of Debugging'
description: "As a software developer, writing clean code is essential to ensuring the longevity and maintainability of your projects. Clean code makes it easier to debug, update, and optimize your code, which ultimately saves you time and effort in the long run. Here are 10 tips for writing clean code that will save you hours of debugging."
cover: /blog/10-tips-for-writing-clean-code-that-will-save-you-hours-of-debugging.jpg
date: 2023-02-08
layout: article
---
---

 ![Blazor is a framework for building web applications using C# and .NET. It allows developers to create interactive web UIs using C# instead of JavaScript, making it a great choice for those who are already familiar with the C# language and the .NET ecosystem.](/blog/10-tips-for-writing-clean-code-that-will-save-you-hours-of-debugging.jpg)

---
# 10 Tips for Writing Clean Code That Will Save You Hours of Debugging
 
As a software developer, writing clean code is essential to ensuring the longevity and maintainability of your projects. Clean code makes it easier to debug, update, and optimize your code, which ultimately saves you time and effort in the long run. Here are 10 tips for writing clean code that will save you hours of debugging.

## Use Descriptive Variable Names

The use of descriptive variable names can greatly improve the readability of your code. Instead of using generic names like "x" or "temp", use descriptive names that accurately convey the purpose of the variable.

```csharp
// Bad Example:
const x = 10;
const temp = "hello";

// Good Example:
const numberOfUsers = 10;
const greetingMessage = "Hello, world!";
```

In the bad example, it's unclear what the variable "x" and "temp" represent. In the good example, the variable names clearly describe their purpose, making the code more readable and easier to understand. This helps prevent confusion and makes debugging easier in case of errors.

Keep Functions Short and Focused

Functions should ideally do one thing and do it well. Keeping functions short and focused makes them easier to understand, test, and modify. Aim for functions that are no longer than 20 lines of code.

```typescript
// Bad Example:
function calculateSumAndAverage(numbers: number[]): [number, number] {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  average = sum / numbers.length;

  return [sum, average];
}

// Good Example:
function calculateSum(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function calculateAverage(numbers: number[]): number {
  const sum = calculateSum(numbers);
  const average = sum / numbers.length;

  return average;
}
```

In the bad example, the calculateSumAndAverage function is doing two things: calculating the sum and average of an array of numbers. This makes the function long and harder to understand.

In the good example, we've separated the logic into two smaller, focused functions: calculateSum and calculateAverage. Each function does one thing and does it well. This makes the code easier to read, understand, and debug.

## Avoid Nested Code

Nesting code can quickly lead to unreadable and difficult-to-debug code. Use early returns, break statements, and guard clauses to avoid nesting.
```typescript
// Bad Example:
function checkIfUserIsAdmin(user: any) {
  if (user.role === "admin") {
    if (user.isActive) {
      return true;
    }
  }

  return false;
}

// Good Example:
function checkIfUserIsAdmin(user: any) {
  if (user.role === "admin" && user.isActive) {
    return true;
  }

  return false;
}
```

In the bad example, the code is nested, making it harder to read and understand. The conditions inside the if statement are nested within each other, making it difficult to follow the flow of the code.

In the good example, we've used a single if statement with the conditions combined using the && operator. This makes the code simpler and easier to read, while still achieving the same functionality as the nested code.

## Use Comments Sparingly

Comments can be helpful for explaining complex code, but overusing them can clutter your code and make it harder to read. Only use comments when necessary and try to write self-explanatory code.
```typescript
// Bad Example:
function calculateTotalPrice(items: any[], discount: number) {
  // Calculate the total price
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  // Apply discount
  totalPrice -= totalPrice * (discount / 100);

  // Return the total price
  return totalPrice;
}

// Good Example:
function calculateTotalPrice(items: any[], discount: number) {
  let totalPrice = 0;

  // Calculate the total price
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  // Apply discount
  totalPrice -= totalPrice * (discount / 100);

  return totalPrice;
}
```

In the bad example, there are comments for every step of the function. While comments can be helpful for explaining complex code, in this case they are redundant and make the code harder to read.

In the good example, we've removed the comments that explain what the code is doing since the code itself is self-explanatory. Instead, we've added a comment to explain the purpose of the function. This makes the code cleaner and easier to read, while still providing enough information for someone to understand what the function does.

## Limit the Use of Global Variables

Global variables can cause unintended side effects and make it harder to reason about the behavior of your code. Whenever possible, use local variables and pass data between functions through parameters.
```typescript
// Bad Example:
let totalPrice = 0;

function calculateTotalPrice(items: any[], discount: number) {
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  totalPrice -= totalPrice * (discount / 100);

  return totalPrice;
}

// Good Example:
function calculateTotalPrice(items: any[], discount: number) {
  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  totalPrice -= totalPrice * (discount / 100);

  return totalPrice;
}
```

In the bad example, totalPrice is declared as a global variable, making it accessible from outside the function. This can cause unintended side effects and make it harder to reason about the behavior of the code.

In the good example, we've declared totalPrice as a local variable inside the calculateTotalPrice function. This ensures that totalPrice is only accessible within the function and avoids any potential side effects caused by using global variables.

## Write Unit Tests:

Writing unit tests can help you catch bugs early and ensure that your code works as intended. Aim to write tests for every function or method in your code.
```typescript
function sum(a: number, b: number): number {
  return a + b;
}

describe("sum", () => {
  it("adds two numbers correctly", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("returns a number", () => {
    expect(typeof sum(2, 2)).toBe("number");
  });
});
```

In this example, we have a simple sum function that takes two numbers and returns their sum. We then use the Jest testing framework to write unit tests for the function. The describe function groups the tests together and provides a description of what is being tested. The it functions define individual tests and use the expect function to make assertions about the behavior of the code.

In the first test, we assert that sum(2, 2) returns 4, which is the expected result. In the second test, we assert that the result of sum(2, 2) is a number. These tests ensure that the sum function works as expected and help prevent bugs and regressions in the future.

## DRY (Don't Repeat Yourself):

DRY is a programming principle that advocates for avoiding code duplication. When you find yourself copying and pasting code, try to abstract the common functionality into a reusable function or class.
```typescript
// Bad Example:
function calculateAreaOfSquare(sideLength: number): number {
  return sideLength * sideLength;
}

function calculateVolumeOfCube(sideLength: number): number {
  return sideLength * sideLength * sideLength;
}

// Good Example:
function calculatePower(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function calculateAreaOfSquare(sideLength: number): number {
  return calculatePower(sideLength, 2);
}

function calculateVolumeOfCube(sideLength: number): number {
  return calculatePower(sideLength, 3);
}
```

In the bad example, the code for calculating the area of a square and the volume of a cube are very similar. This violates the DRY principle, which advocates for avoiding code duplication.

In the good example, we've created a new function calculatePower that calculates the power of a number given a base and an exponent. We then use this function in the calculateAreaOfSquare and calculateVolumeOfCube functions to avoid code duplication. This makes the code more readable, easier to maintain, and reduces the risk of introducing bugs due to duplicated code.

## Use Consistent Formatting

Consistent formatting makes your code more readable and easier to navigate. Use consistent indentation, spacing, and naming conventions throughout your codebase.

```typescript
// Bad Example:
function addNumbers( a:number, b:number){
let result:number=a+b;
return result;}

// Good Example:
function addNumbers(a: number, b: number): number {
  let result: number = a + b;
  return result;
}
```

In the bad example, there are inconsistent spaces between the function name, parameter list, and curly braces. The variable declarations and return statement are also not properly indented.

In the good example, we've used consistent formatting throughout the code. There are spaces after the function name and before the parameter list. The curly braces are on their own line and properly indented. The variable declarations and return statement are also properly indented. This makes the code more readable and easier to navigate, especially when dealing with larger codebases.

## Don't Optimize Too Early

Premature optimization can lead to overly complex and hard-to-maintain code. Focus on writing clean and functional code first, then optimize only when necessary.
```typescript
// Bad Example:
function isPrime(number: number): boolean {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Good Example:
function isPrime(number: number): boolean {
  if (number < 2) {
    return false;
  }

  const maxDivisor = Math.sqrt(number);
  for (let i = 2; i <= maxDivisor; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
```

In the bad example, the isPrime function uses a brute force approach to check if a number is prime by testing all integers between 2 and the number. This is inefficient and can cause performance issues for large numbers.

In the good example, we've optimized the function by using the fact that the largest possible divisor of a number is its square root. By only checking up to the square root of the number, we can significantly reduce the number of calculations required and improve the performance of the function. This demonstrates the importance of not optimizing too early and waiting until performance issues become evident before making optimizations.

## Refactor Often

Refactoring is the process of restructuring code to make it cleaner and more maintainable. Refactoring should be an ongoing process as you add new features and improve existing ones.
```typescript
// Bad Example:
function calculateAreaOfRectangle(width: number, height: number) {
  const area = width * height;
  return area.toFixed(2);
}

// Good Example:
function calculateAreaOfRectangle(width: number, height: number): number {
  return width * height;
}
```

In the bad example, the calculateAreaOfRectangle function calculates the area of a rectangle and returns a string representation of the result with two decimal places using the toFixed method. This can make the code harder to read and understand, and potentially cause issues if the function is used in further calculations.

In the good example, we've removed the use of toFixed and made the function return the calculated area as a number. This makes the code simpler, easier to read, and less error-prone. If the result needs to be formatted as a string with two decimal places, that can be done outside of the function using methods like toFixed or toLocaleString.

## Conclusion

By following these 10 tips, you can greatly improve the quality of your code and save yourself hours of debugging in the long run. Remember, writing clean code isn't just about aesthetics or adherence to best practices, it's about building software that is efficient, maintainable, and robust.