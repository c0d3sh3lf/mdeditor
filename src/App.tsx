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
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertSandpack,
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
  sandpackPlugin,
  imagePlugin,
  frontmatterPlugin,
  StrikeThroughSupSubToggles,
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
  return (
    <div className='App'>
      <Header logoUrl={`${baseURL}${config.logo}`} title={config.title} />
      <MDXEditor
        markdown=''
        plugins={[
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
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
                <DiffSourceToggleWrapper />
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
        ]}
      />
    </div>
  )
}

export default App
