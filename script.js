document.addEventListener('DOMContentLoaded', function () {
  const extensionId = 'PontusHenriksson.lotus-language-support';
  const apiUrl =
    'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery';

  const requestData = {
    filters: [
      {
        criteria: [
          {
            filterType: 7,
            value: extensionId,
          },
        ],
      },
    ],
    flags: 914,
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json;api-version=3.0-preview.1',
    },
    body: JSON.stringify(requestData),
  })
    .then(response => response.json())
    .then(data => {
      const stats = data.results[0].extensions[0].statistics;
      const downloadCount = stats.find(
        stat => stat.statisticName === 'install'
      ).value;

      document.getElementById(
        'downloadCount'
      ).innerText = `Downloads: ${downloadCount}`;
    })
    .catch(err => console.error(err));
});
