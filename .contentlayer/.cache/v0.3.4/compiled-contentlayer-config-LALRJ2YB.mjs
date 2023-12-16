// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    }
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    url: {
      type: "string",
      resolve: (post) => `/public/assets/blog/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LALRJ2YB.mjs.map
