import * as Babel from "@babel/standalone";
import React from "react";

export function compileJsxToComponent(rawJsx: string) {
  const jsx = `
    function Component() {
      return (
        <>
          ${rawJsx}
        </>
      );
    }
  `;

  const compiled = Babel.transform(jsx, {
    presets: ["react"],
  }).code;

  const Component = new Function("React", `${compiled}; return Component`)(
    React
  );

  return Component;
}
