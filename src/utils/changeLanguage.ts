import i18next from "i18next"

export const changeLanguage = (locale: string) => {
  i18next.changeLanguage(locale, (err, t) => {
    if (err) return console.log('something went wrong loading', err)
    t('key')
  })
}