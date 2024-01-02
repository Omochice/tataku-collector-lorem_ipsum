# tataku-collector-lorem_ipsum 

The dummy collector module for tataku.vim.

## Contents 

- [tataku-collector-lorem_ipsum-dependencies](tataku-collector-lorem_ipsum-dependencies)
- [tataku-collector-lorem_ipsum-options](tataku-collector-lorem_ipsum-options)
- [tataku-collector-lorem_ipsum-samples](tataku-collector-lorem_ipsum-samples)

## Dependencies 

This plugin needs:

- [denops.vim](https://github.com/vim-denops/denops.vim)
- [tataku.vim](https://github.com/Omochice/tataku.vim)

## Options 

This module havs some options.

- `once` 

  Send sentence at once.
  Set `false` is useful to emurate stream response.
  Default: `true`
- `ms` 

  Gap milliseconds to send response.
  This only use `once` is `false`.
  Default: `250`

## Samples 

```vim
let g:tataku_recipes = #{
  \   sample: #{
  \     collector: #{ name: 'lorem_ipsum', options: #{ once: v:true, ms: 250 } }
  \   }
  \ }
```

