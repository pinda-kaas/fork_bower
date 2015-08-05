exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/richlist_test.js'],
  baseUrl: 'http://localhost:9001' //default test port with Yeoman

}
