import { Denops } from "https://deno.land/x/denops_std@v5.2.0/mod.ts";

const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
];

const collector = (_denops: Denops, _option: unknown) => {
  return new ReadableStream<string[]>({
    start: (controller: ReadableStreamDefaultController<string[]>) => {
      controller.enqueue(loremIpsum);
    },
  });
};

export default collector;
