import { Denops } from "jsr:@denops/std@7.3.1";
import {
  as,
  assert,
  is,
  type PredicateType,
} from "jsr:@core/unknownutil@4.3.0";

const isOption = is.ObjectOf({
  once: as.Optional(is.Boolean),
  ms: as.Optional(is.Number),
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
