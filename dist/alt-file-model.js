;(function(ng) {
  "use strict";

  ng.module('alt.file-model', [])
    .directive('altFileModel', [function() {
      return {
        scope: {
          altFileModel: "="
        },
        link: function(scope, element, attrs) {
          element.bind("change", function(changeEv) {
            var reader = new FileReader();

            reader.onload = function(loadEv) {
              scope.$apply(function() {
                scope.ngFileModel = {
                  lastModified: changeEv.target.files[0].lastModified,
                  lastModifiedDate: changeEv.target.files[0].lastModifiedDate,
                  name: changeEv.target.files[0].name,
                  size: changeEv.target.files[0].size,
                  type: changeEv.target.files[0].type,
                  file: changeEv.target.files[0],
                  files: changeEv.target.files,

                  // data === file in b64
                  data: loadEv.target.result
                };
              });
            };

            reader.readAsDataURL(changeEv.target.files[0]);
          });
        }
      };
    }]);
}(window.angular));
