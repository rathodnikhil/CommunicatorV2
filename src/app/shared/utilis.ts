export class Utils {
    /*
     * Function to get Site Collection URL
     * Samples:
     *      'https://domain.sharepoint.com/sites/intranet'
     */
    public static getSiteCollectionUrl(): string {
      if (window
              && 'location' in window
              && 'protocol' in window.location
              && 'pathname' in window.location
              && 'host' in window.location) {
        let baseUrl = window.location.protocol + '//' + window.location.host;
        const pathname = window.location.pathname;
        const siteCollectionDetector = '/sites/';
        if (pathname.indexOf(siteCollectionDetector) >= 0) {
          baseUrl += pathname.substring(0, pathname.indexOf('/', siteCollectionDetector.length));
        }
        return baseUrl;
      }
      return null;
    }
    /*
     * Function to get Current Site Url
     * Samples:
     *      'https://domain.sharepoint.com/sites/intranet/subsite/Pages/Home.aspx'
     */
    public static getCurrentAbsoluteSiteUrl(): string {
      if (window
          && 'location' in window
          && 'protocol' in window.location
          && 'pathname' in window.location
          && 'host' in window.location) {
        return window.location.protocol + '//' + window.location.host + window.location.pathname;
      }
      return null;
    }
    /*
     * Function to get Current Site Url
     * Samples:
     *      '/sites/intranet'
     */
    public static getWebServerRelativeUrl(): string {
      if (window
        && 'location' in window
        && 'pathname' in window.location) {
        return  window.location.pathname.replace(/\/$/, '');
      }
      return null;
    }
     /*
     * Function to get Layout Page Url
     * Replacement in SPFx for SP.Utilities.Utility.getLayoutsPageUrl('sp.js')
     * Samples:
     *      getLayoutsPageUrl('sp.js')
     *      '/sites/intranet/_layouts/15/sp.js'
     */
    public static getLayoutsPageUrl(libraryName: string): string {
      if (window
        && 'location' in window
        && 'pathname' in window.location
        && libraryName !== '') {
        return  window.location.pathname.replace(/\/$/, '') + '/_layouts/15/' + libraryName;
      }
      return null;
    }
    /*
     * Function to get Current Domain Url
     * Samples:
     *      'https://domain.sharepoint.com'
     */
    public static getAbsoluteDomainUrl(): string {
        if (window
            && 'location' in window
            && 'protocol' in window.location
            && 'host' in window.location) {
            return window.location.protocol + '//' + window.location.host + '/';
        }
        return null;
    }

    // **************** Constant Arrays***************************
        // get duration values to schedule meeting
    public static getDurationArray(): string[] {
       const durationArray = ['15 Min', '30 Min', '45 Min', '60 Min (1 Hour)', '90 Min (1.5 Hour)', '120 Min (2 Hour)',
        '150 Min (2.5 Hour)', '180 Min (3 Hour)', '240 Min (4 Hour)', '300 Min (5 Hour)', '360 Min (6 Hour)', '420 Min (7 Hour)',
         '480 Min (8 Hour)'];
      return durationArray;
    }

    // get timezone values to schedule meeting
    public static getTimezoneArray(): string[] {
    const timeZoneArray = [
    'Pacific/Tongatapu (GMT+13:00) Nukualofa',
    'Pacific/Fiji (GMT+12:00) Fiji, Kamchatka, Marshall Is/',
    'Pacific/Auckland (GMT+12:00) Auckland, Wellington',
    'Asia/Magadan (GMT+11:00) Magadan, Solomon Is/, New Caledonia',
    'Australia/Currie (GMT+11:00) Currie',
    'Asia/Vladivostok (GMT+10:00) Vladivostok',
    'Australia/Hobart (GMT+10:00) Hobart',
    'Pacific/Guam (GMT+10:00) Guam, Port Moresby',
    'Australia/Sydney (GMT+10:00) Canberra, Melbourne, Sydney',
    'Australia/Brisbane (GMT+10:00) Brisbane',
    'Australia/Darwin (GMT+09:30) Darwin',
    'Australia/Adelaide (GMT+09:30) Adelaide',
    'Asia/Yakutsk (GMT+09:00) Yakutsk',
    'Asia/Seoul (GMT+09:00) Seoul',
    'Asia/Tokyo (GMT+09:00) Osaka, Sapporo, Tokyo',
    'Asia/Taipei (GMT+08:00) Taipei',
    'Australia/Perth (GMT+08:00) Perth',
    'Asia/Singapore (GMT+08:00) Kuala Lumpur, Singapore',
    'Asia/Irkutsk (GMT+08:00) Irkutsk, Ulaan Bataar',
    'Asia/Shanghai (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    'Asia/Krasnoyarsk (GMT+07:00) Krasnoyarsk',
    'Asia/Bangkok GMT+07:00) Bangkok',
    'Asia/Jakarta (GMT+07:00) Hanoi, Jakarta',
    'Asia/Rangoon (GMT+06:30) Rangoon',
    'Asia/Colombo (GMT+06:00) Sri Jayawardenepura',
    'Asia/Dhaka (GMT+06:00) Astana, Dhaka',
    'Asia/Novosibirsk (GMT+06:00) Almaty, Novosibirsk',
    'Asia/Katmandu (GMT+05:45) Kathmandu',
    'Asia/Calcutta (GMT+05:30) Calcutta, Chennai, Mumbai, New Delhi',
    'Asia/Karachi (GMT+05:00) Islamabad, Karachi, Tashkent',
    'Asia/Yekaterinburg (GMT+05:00) Ekaterinburg',
    'Asia/Kabul (GMT+04:30) Kabul',
    'Asia/Tbilisi (GMT+04:00) Baku, Tbilisi, Yerevan',
    'Asia/Muscat (GMT+04:00) Abu Dhabi, Muscat',
    'Asia/Tehran (GMT+03:30) Tehran',
    'Africa/Nairobi (GMT+13:00) Nukualofa',
    'Europe/Moscow (GMT+03:00) Moscow, St/ Petersburg, Volgograd',
    'Asia/Kuwait (GMT+03:00) Kuwait, Riyadh',
    'Asia/Baghdad (GMT+03:00) Baghdad',
    'Asia/Jerusalem (GMT+02:00) Jerusalem',
    'Europe/Helsinki (GMT+02:00) Helsinki, Riga, Tallinn',
    'Africa/Harare (GMT+02:00) Harare, Pretoria',
    'Africa/Cairo (GMT+02:00) Cairo',
    'Europe/Bucharest (GMT+02:00) Bucharest',
    'Europe/Athens (GMT+02:00) Athens, Istanbul, Minsk, Vilnius',
    'Africa/Malabo (GMT+01:00) West Central Africa',
    'Europe/Warsaw (GMT+01:00) Sarajevo, Skopje, Sofija, Warsaw, Zagreb',
    'Europe/Brussels (GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
    'Europe/Prague (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    'Europe/Amsterdam (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    'GMT (GMT) Greenwich Mean Time',
    'Africa/Casablanca (GMT) Casablanca, Monrovia',
    'Atlantic/Cape_Verde (GMT-01:00) Cape Verde Is/',
    'Atlantic/Azores (GMT-01:00) Azores',
    'America/Buenos_Aires (GMT-03:00) Buenos Aires, Georgetown',
    'America/Sao_Paulo (GMT-03:00) Brasilia',
    'America/St_Johns (GMT-03:30) Newfoundland',
    'America/Santiago (GMT-04:00) Santiago',
    'America/Caracas (GMT-04:00) Caracas, La Paz',
    'America/Halifax (GMT-04:00) Atlantic Time (Canada)',
    'America/Indianapolis (GMT-05:00) Indiana (East)',
    'America/New_York (GMT-05:00) Eastern Time (US and Canada)',
    'America/Bogota (GMT-05:00) Bogota, Lima, Quito',
    'America/Mexico_City (GMT-06:00) Mexico City',
    'America/Guatemala (GMT-06:00) Guatemala',
    'America/Chicago (GMT-06:00) Central Time (US and Canada)',
    'America/Denver (GMT-07:00) Mountain Time (US and Canada)',
    'America/Phoenix (GMT-07:00) Arizona',
    'America/Los_Angeles (GMT-08:00) Pacific Time (US and Canada); Tijuana',
    'America/Anchorage (GMT-09:00) Alaska',
    'Pacific/Honolulu (GMT-10:00) Hawaii',
    'Pacific/Midway (GMT-11:00) Midway Island, Samoa',
    'Europe/London (GMT) Dublin, Edinburgh, Lisbon, London'];
    return timeZoneArray;
  }
}
