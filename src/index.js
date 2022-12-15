import React from 'react'
import { render } from 'react-dom'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { en, es, de } from 'make-plural/plurals'
import { messages as enMessages} from './locales/en/messages'
import { messages as esMessages} from './locales/es/messages'
import { messages as deMessages} from './locales/de/messages'
import SimpleApp from './SimpleApp'

i18n.loadLocaleData({
  en: { plurals: en },
  es: { plurals: es },
  de: { plurals: de }
})
i18n.load({'en': enMessages, 'es': esMessages, 'de': deMessages})
i18n.activate('es')

const App = () => (
  <I18nProvider i18n={i18n}>
    <SimpleApp />
  </I18nProvider>
)

render(<App />, document.getElementById('root'))