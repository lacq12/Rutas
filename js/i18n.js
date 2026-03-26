
const dict = {
  es: {
    ready: 'Listo para buscar rutas.',
    load_error: 'Error cargando datos.',
    invalid_stops: 'Selecciona origen y destino válidos de la lista.',
    same_stops: 'El origen y el destino no pueden ser iguales.'
  },
  en: {
    ready: 'Ready to search routes.',
    load_error: 'Failed to load data.',
    invalid_stops: 'Please choose a valid origin/destination from the list.',
    same_stops: 'Origin and destination must be different.'
  }
};

export const i18n = {
  lang: 'es',
  t(key){ return (dict[this.lang] && dict[this.lang][key]) || key; }
};

export function setLang(lang) { i18n.lang = (lang === 'en') ? 'en' : 'es'; }
