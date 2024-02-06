import { Denops } from "https://deno.land/x/denops_std@v5.3.0/mod.ts";
import {
  assert,
  is,
  type PredicateType,
} from "https://deno.land/x/unknownutil@v3.15.0/mod.ts";

const isOption = is.ObjectOf({
  once: is.OptionalOf(is.Boolean),
  ms: is.OptionalOf(is.Number),
});

type Option = PredicateType<typeof isOption>;

const defaults: Required<Option> = {
  once: true,
  ms: 250,
};

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(undefined), ms));
}

const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
];

const collector = (_denops: Denops, option: unknown) => {
  assert(option, isOption);
  const opt = { ...defaults, ...option };
  return new ReadableStream<string[]>({
    start: async (controller: ReadableStreamDefaultController<string[]>) => {
      if (opt.once) {
        controller.enqueue(loremIpsum);
        return;
      }
      for (const line of loremIpsum) {
        await wait(opt.ms);
        controller.enqueue([line]);
      }
    },
  });
};

export default collector;
