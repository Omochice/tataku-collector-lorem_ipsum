import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import { Collector } from "https://raw.githubusercontent.com/Omochice/tataku.vim/master/denops/tataku/interface.ts";

export default class implements Collector {
  constructor(option: Record<string, unknown>) {
  }

  async run(_denops: Denops) {
    return [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ];
  }
}
