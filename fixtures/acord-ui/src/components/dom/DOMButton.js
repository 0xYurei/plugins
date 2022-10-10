import swc from "@acord/modules/swc";

const buttonClasses = swc.findByProps("button", "lookFilled", "colorBrand");

export function DOMButton({ contents = "", className = "", color="colorBrand" } = {}) {
  return `
    <button class="${buttonClasses.button} ${buttonClasses.lookFilled} ${buttonClasses[color]} ${buttonClasses.sizeSmall} ${buttonClasses.grow} ${className}">
      <div class="${buttonClasses.contents}">${contents}</div>
    </button>
  `
}