# Frames & Iframes in Playwright

## What is a Frame?

A **frame** is an HTML document embedded within another HTML document. There are two types:

- **`<iframe>`** - Inline frame, the most common way to embed external content
- **`<frameset>`** - A legacy approach that divides the browser window into multiple frames

### Why Frames Matter for Testing

Frames create isolated DOM contexts. You **cannot directly access elements inside a frame** from the parent page. Playwright provides the `frameLocator` API to interact with content inside frames.

---

## Key Syntax

### 1. Accessing a Frame via Selector

```typescript
const frame = page.frameLocator("#frame-id");
```

- Returns a `FrameLocator` object
- Use CSS selectors, XPath, or any valid locator to identify the frame
- You can also use `name` or `src` attributes: `page.frameLocator("[name='myFrame']")`

### 2. Locating Elements Inside a Frame

```typescript
await frame.locator("#element-id").fill("text");
await frame.locator(".class-name").click();
```

Once you have a `FrameLocator`, use `.locator()` to find elements **inside** that frame.

### 3. Accessing a Frame via URL

```typescript
const frame = page.frame({ url: /.*pattern.*/ });
```

- Useful when the frame doesn't have a unique ID
- Accepts a string or RegExp

### 4. Multiple Frames

For pages with multiple frames (like a frameset):

```typescript
const frames = page.frames();
console.log(`Total frames: ${frames.length}`);

for (const frame of frames) {
    console.log(`Frame URL: ${frame.url()}`);
}
```

---

## Practical Example

From `262_Iframe.spec.ts`:

```typescript
import { test, expect, FrameLocator } from "@playwright/test";

test('Iframe basic', async ({ page }) => {
    // 1. Navigate to the page containing the iframe
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    // 2. Get the frame locator using the iframe's ID
    let vehicleFrame: FrameLocator = page.frameLocator("#frame-one");

    // 3. Interact with elements INSIDE the frame
    await vehicleFrame.locator("#RESULT_TextField-1").fill("CIaZ");
    await vehicleFrame.locator("#RESULT_TextField-2").fill("Pramod Dutta");
    await vehicleFrame.locator("#RESULT_TextField-3").fill("2012");
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    // 4. Click elements inside the frame
    await vehicleFrame.getByText('Submit registration', { exact: true }).click();

    // 5. Read output from inside the frame
    let output = await vehicleFrame.locator("#vehicle-output").innerText();
    console.log(output);
});
```

---

## Quick Reference

| Method | Purpose |
|--------|---------|
| `page.frameLocator(selector)` | Get a `FrameLocator` for an iframe |
| `page.frame({ url })` | Get a `Frame` by URL |
| `page.frames()` | Get all frames on the page |
| `frame.locator(selector)` | Find an element inside the frame |
| `frame.getByText(text)` | Find element by text inside frame |
| `frame.nth(index)` | Access frame by index (0-based) |
| `frame.first` | Access first frame |
| `frame.last` | Access last frame |

---

## Nested Frames

For iframes inside iframes, chain `frameLocator` calls:

```typescript
const outerFrame = page.frameLocator("#outer-frame");
const innerFrame = outerFrame.frameLocator("#inner-frame");

await innerFrame.locator("#element").click();
```

---

## Common Pitfalls

1. **Using `page.locator()` for frame elements** - This won't work. Always use `frame.locator()`
2. **Not waiting for frame to load** - Use `await page.waitForSelector()` or Playwright's auto-waiting
3. **Cross-origin frames** - Playwright handles these automatically, no extra config needed
4. **Dynamic frames** - If the frame loads dynamically, ensure it exists before accessing

---

## Waiting for Frames

```typescript
// Wait for a frame to appear
await page.waitForSelector("#frame-id");

// Then access it
const frame = page.frameLocator("#frame-id");
```

Or use Playwright's built-in auto-waiting with `frameLocator` - it waits for the frame to be attached to the DOM.
