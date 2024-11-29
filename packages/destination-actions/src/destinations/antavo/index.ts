import type { DestinationDefinition } from '@segment/actions-core'
import type { Settings } from './generated-types'

import event from './event'
import profile from './profile'

const destination: DestinationDefinition<Settings> = {
  name: 'Antavo',
  slug: 'actions-antavo',
  mode: 'cloud',
  authentication: {
    scheme: 'custom',
    fields: {
      stack: {
        label: 'Stack',
        description: 'Antavo stack',
        type: 'string',
        required: true
      },
      api_key: {
        label: 'API Key',
        description: 'Antavo brand API key',
        type: 'password',
        required: true
      }
    },
    testAuthentication: () => {
      return true
      // Return a request that tests/validates the user's credentials.
      // If you do not have a way to validate the authentication fields safely,
      // you can remove the `testAuthentication` function, though discouraged.
    }
  },

  onDelete: async () => {
    return true
    // Return a request that performs a GDPR delete for the provided Segment userId or anonymousId
    // provided in the payload. If your destination does not support GDPR deletion you should not
    // implement this function and should remove it completely.
  },

  actions: {
    event,
    profile
  }
}

export default destination
