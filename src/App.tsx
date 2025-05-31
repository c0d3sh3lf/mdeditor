import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import {
  MDXEditor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertAdmonition,
  InsertFrontmatter,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  UndoRedo,
  Separator,
  toolbarPlugin,
  linkDialogPlugin,
  listsPlugin,
  thematicBreakPlugin,
  quotePlugin,
  headingsPlugin,
  tablePlugin,
  codeBlockPlugin,
  linkPlugin,
  markdownShortcutPlugin,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  imagePlugin,
  frontmatterPlugin,
  StrikeThroughSupSubToggles,
  diffSourcePlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

interface Config {
  primaryColor: string
  secondaryColor: string
  primaryTextColor: string
  secondaryTextColor: string
  title: string
  logo: string
}

interface AppProps {
  config: Config
  baseURL?: string
}

function App(appProps: AppProps) {
  const { config, baseURL = '/' } = appProps
  // const [oldMarkdown, setOldMarkdown] = useState<string>('')
  const [markdown, setMarkdown] = useState<string>('')

  // const setOldMarkdownHandler = (markdown: string) => {
  //   setOldMarkdown(markdown)
  // }

  const setMarkdownHandler = (markdown: string) => {
    setMarkdown(markdown)
  }

  // useEffect(() => {
  //   console.log(viewModeGlobal)
  //   if (viewModeGlobal != 'diff') {
  //     setOldMarkdownHandler(markdown)
  //   }
  // }, 1000)

  return (
    <div className='App'>
      <Header logoUrl={`${baseURL}${config.logo}`} title={config.title} />
      <MDXEditor
        onChange={setMarkdownHandler}
        markdown=''
        plugins={[
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                  <UndoRedo />
                  <Separator />
                  <BoldItalicUnderlineToggles />
                  <CodeToggle />
                  <Separator />
                  <StrikeThroughSupSubToggles />
                  <Separator />
                  <ListsToggle />
                  <Separator />
                  <BlockTypeSelect />
                  <Separator />
                  <CreateLink />
                  <InsertImage />
                  <Separator />
                  <InsertTable />
                  <InsertThematicBreak />
                  <Separator />
                  <InsertAdmonition />
                  <Separator />
                  <InsertFrontmatter />
                </DiffSourceToggleWrapper>
                {/* <DiffStatus /> */}
              </>
            ),
          }),
          linkDialogPlugin(),
          thematicBreakPlugin(),
          listsPlugin(),
          headingsPlugin(),
          quotePlugin(),
          tablePlugin(),
          codeBlockPlugin(),
          linkPlugin(),
          markdownShortcutPlugin(),
          imagePlugin(),
          frontmatterPlugin(),
          diffSourcePlugin({
            // diffMarkdown: oldMarkdown,
            viewMode: 'rich-text',
            readOnlyDiff: true,
          }),
        ]}
      />
    </div>
  )
}

export default App
