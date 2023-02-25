import fs from "fs";
import path from "path";
import type {} from "unist";
import { type Node } from "unist";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: {
    __rawString__?: string;
    __className__?: string;
    [key: string]: unknown;
  };
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}

export function rehypeComponentFileSource() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      const { value: filesrc } = getNodeAttributeByName(node, "filesrc") || {};
      const { value: filelanguage } =
        getNodeAttributeByName(node, "filelanguage") || {};

      if (node.name === "ComponentExample") {
        const source = getComponentSourceFileContent(node);
        if (!source) {
          return;
        }

        // Replace the Example component with a pre element.
        node.children?.push(
          u("element", {
            tagName: "pre",
            properties: {
              __filesrc__: filesrc,
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: [
                    filelanguage
                      ? `language-${filelanguage as string}`
                      : "language-tsx",
                  ],
                },
                children: [
                  {
                    type: "text",
                    value: source,
                  },
                ],
              }),
            ],
          })
        );
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

function getComponentSourceFileContent(node: UnistNode) {
  const src = getNodeAttributeByName(node, "filesrc")?.value as string;

  if (!src) {
    return null;
  }

  // Read the source file.
  const filePath = path.join(process.cwd(), "src", src);
  const source = fs.readFileSync(filePath, "utf8");

  return source;
}
