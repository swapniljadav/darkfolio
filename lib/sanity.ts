import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'h3rttk92',      // 🔁 use your actual project ID
  dataset: 'production',
  apiVersion: '2023-01-01',   // any past date works
  useCdn: true,
})
