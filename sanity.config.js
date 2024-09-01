'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schema'

export default defineConfig({
  projectId: 'zu2txfh1',
  dataset: 'production',
  schema,
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})