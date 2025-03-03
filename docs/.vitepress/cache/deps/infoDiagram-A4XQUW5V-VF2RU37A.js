import {
  parse
} from "./chunk-U73DD44Q.js";
import "./chunk-N24DMRJV.js";
import "./chunk-6FQAT3ND.js";
import "./chunk-F7AGKHG5.js";
import "./chunk-M6ZRQSDL.js";
import "./chunk-BMJ2FTWD.js";
import "./chunk-JKJPHIEP.js";
import "./chunk-W4C6O4J6.js";
import {
  version
} from "./chunk-TK75WW6R.js";
import {
  selectSvgElement
} from "./chunk-UCCX5VAL.js";
import "./chunk-2VRVB2MD.js";
import {
  __name,
  configureSvgSize,
  log
} from "./chunk-VUFVSM32.js";
import "./chunk-4UTD2NOI.js";
import "./chunk-N2GSAKPN.js";
import "./chunk-ZR7N7HH5.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-A4XQUW5V.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = { version };
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version2) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version2}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-A4XQUW5V-VF2RU37A.js.map
