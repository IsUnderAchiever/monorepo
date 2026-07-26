import $ from "jquery";

/**
 * Mount a click counter on the #counter button element.
 * Safe to call on any page — silently no-ops if #counter doesn't exist.
 */
export function setupCounter() {
  const $btn = $("#counter");
  if (!$btn.length) return;

  let counter = 0;
  $btn.on("click", () => {
    counter += 1;
    $btn.text(`Count is ${counter}`);
  });
}
