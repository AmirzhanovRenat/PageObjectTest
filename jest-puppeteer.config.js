module.exports = {
  launch: {
    //   dumpio: true,
    headless: !Boolean(process.env.HEAD), // если ничего нет то придет тру, если что то хоть написано придет фалс
    product: 'chrome',
    slowMo: 80, //
    // slowMo: !Boolean(process.env.HEAD) ? 100 : 80, // если в безголовом режиме то будет задержка, иначе без задержки -- отключили т.к. тесты п
    defaultViewport: { width: 1920, height: 1080 },
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
      '--single-process', // <- this one doesn't works in Windows
      '--disable-accelerated-2d-canvas',
      '--start-maximized',
      '--ignore-certificate-errors',
    ],
    timeout: 60000,
  },
  // browserContext: 'default',

  // headless: false,
  // args: ['--use-gl=egl'],
};
