import AppDesignSystem from '@front/layouts/private/class/AppDesignSystem';

// The host's own app, under another paint. This layout extends the host's
// private layout in Twig and forwards its stylesheet in Sass; the script does
// the same, so whatever the host hangs in its chrome — a search box in the
// header, the services it needs, the api client it talks through — works here
// exactly as it does on the host's pages. A list of services kept by hand
// would be right until the host's header grew.
export default class extends AppDesignSystem {}
