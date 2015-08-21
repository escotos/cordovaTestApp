cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device-tests/tests.js",
        "id": "cordova-plugin-device-tests.tests"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/tests.js",
        "id": "cordova-plugin-test-framework.cdvtests"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/jasmine_helpers.js",
        "id": "cordova-plugin-test-framework.jasmine_helpers"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/medic.js",
        "id": "cordova-plugin-test-framework.medic"
    },
    {
        "file": "plugins/cordova-plugin-test-framework/www/main.js",
        "id": "cordova-plugin-test-framework.main"
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPClient.js",
        "id": "ibm-mfp-core.MFPClient",
        "clobbers": [
            "MFPClient"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPResourceRequest.js",
        "id": "ibm-mfp-core.MFPResourceRequest",
        "clobbers": [
            "MFPResourceRequest"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device-tests": "1.0.2-dev",
    "cordova-plugin-test-framework": "1.0.1",
    "cordova-plugin-whitelist": "1.0.0",
    "ibm-mfp-core": "0.0.1"
}
// BOTTOM OF METADATA
});