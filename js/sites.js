const Sites = (() => {
  let defaultSites = [];

  async function loadDefaults() {
    try {
      const res = await fetch('config/sites.default.json');
      defaultSites = await res.json();
    } catch {
      defaultSites = [];
    }
  }

  function getSites() {
    const stored = Storage.get('sites');
    if (stored && Array.isArray(stored) && stored.length > 0) return stored;
    return defaultSites;
  }

  function saveSites(sites) {
    Storage.set('sites', sites);
  }

  function addSite(name, url) {
    if (!url.includes('{pseudo}')) return { ok: false, error: "L'URL doit contenir {pseudo}" };
    const sites = getSites();
    const id = 'site_' + Date.now();
    sites.push({ id, name: name.trim(), url: url.trim() });
    saveSites(sites);
    return { ok: true };
  }

  function removeSite(id) {
    const sites = getSites().filter(s => s.id !== id);
    saveSites(sites);
  }

  function resetToDefaults() {
    Storage.remove('sites');
  }

  function buildUrl(urlTemplate, variant) {
    return urlTemplate.replace('{pseudo}', encodeURIComponent(variant));
  }

  return { loadDefaults, getSites, saveSites, addSite, removeSite, resetToDefaults, buildUrl };
})();
