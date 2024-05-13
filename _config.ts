import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import favicon from "lume/plugins/favicon.ts";
import jsx from "lume/plugins/jsx.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import transform_images from "lume/plugins/transform_images.ts";
import robots from "lume/plugins/robots.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(attributes());
site.use(date());
site.use(esbuild());
site.use(favicon());
site.use(jsx());
site.use(nav());
site.use(picture());
site.use(transform_images());
site.use(robots());
site.use(tailwindcss());
site.use(postcss());

export default site;
