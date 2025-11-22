import * as Babel from "@babel/standalone";
import React from "react";

export function compileJsxToComponent(jsx: string) {
  const compiled = Babel.transform(jsx, {
    presets: ["react"],
  }).code;

  const Component = new Function("React", `${compiled}; return Component`)(
    React
  );

  return Component;
}
