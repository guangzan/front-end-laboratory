import React from 'react';
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { commonmark } from '@milkdown/preset-commonmark';
import { ReactEditor, useEditor } from '@milkdown/react';
import { history } from '@milkdown/plugin-history';
import { gfm } from '@milkdown/preset-gfm';
import { clipboard } from '@milkdown/plugin-clipboard';
import { table } from '@milkdown/plugin-table';
import { prism } from '@milkdown/plugin-prism';
import { math } from '@milkdown/plugin-math';
import { tooltip } from '@milkdown/plugin-tooltip';
import { slash } from '@milkdown/plugin-slash';
import { emoji } from '@milkdown/plugin-emoji';

const MilkdownEditor: React.FC = () => {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => ctx.set(rootCtx, root))
      .use(nord)
      .use(commonmark)
      .use(clipboard)
      .use(gfm)
      // .use(table)
      .use(prism)
      .use(math)
      .use(slash)
      .use(tooltip)
      .use(slash)
      .use(emoji)
      .use(history),
  );

  return <ReactEditor editor={editor} />;
};

export default MilkdownEditor;
