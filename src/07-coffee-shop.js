/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  //   - If size is not "small", "medium", or "large", return -1
  //  *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
  //  *   - Return the total price rounded to 2 decimal places

  if (size != "small" && size != "medium" && size != "large") {
    return -1;
  } else if (
    type != "regular" &&
    type != "latte" &&
    type != "cappuccino" &&
    type != "mocha"
  ) {
    return -1;
  }

  let total_price;

  if (size === "small") {
    total_price = 3.0 + type_calculator(type);
  } else if (size === "medium") {
    total_price = 4.0 + type_calculator(type);
  } else if (size === "large") {
    total_price = 5.0 + type_calculator(type);
  }

  if (extras.extraShot === true && extras.whippedCream === true) {
    total_price = total_price + 0.5 + 0.75;
    return total_price;
  } else {
    if (extras.extraShot) {
      total_price = total_price + 0.75;
      return total_price;
    } else if (extras.whippedCream) {
      total_price = total_price + 0.5;
      return total_price;
    } else {
      return total_price;
    }
  }

  function type_calculator(type) {
    if (type === "regular") {
      return 0.0;
    } else if (type === "latte") {
      return 1.0;
    } else if (type === "cappuccino") {
      return 1.5;
    } else if (type === "mocha") {
      return 2.0;
    }
  }
}
