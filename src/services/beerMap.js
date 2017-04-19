const api = 'https://beermapping.com/webservice/loccity/28fe1b19e0cb89c81f3345ed788e44a0/';
const json = '&s=json';

export default (location) => fetch(`${api}${location}${json}`)
  .then(res => res.ok ? res.json() : Promise.reject(res));
