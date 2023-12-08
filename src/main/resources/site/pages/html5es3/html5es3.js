var portal = require('/lib/xp/portal');

exports.get = function(req) {

  const content = portal.getContent();
  const components = content.page.regions["main"].components || [];
  log.info('Main region = %s', components);

  // Render and return the result
  return {
    body: `<html><head>Placeholder demo</head><body><main data-portal-region="main">
    ${
        components.map((c) => `<!--# COMPONENT ${c.path} -->`).join('\n')
    }
    </main></body></html>`
  };
}