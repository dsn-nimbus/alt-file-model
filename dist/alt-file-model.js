;(function(ng) {
  "use strict";

  ng.module('alt.file-model', [])
    .directive('altFileModel', [function() {
      return {
        scope: {
          altFileModel: "="
        },
        link: function(scope, element, attrs) {
          element.bind("change", function(ev) {
            var reader = new FileReader();

            reader.onload = function(loadEv) {
              scope.$apply(function() {
                scope.ngFileModel = {
                  lastModified: ev.target.files[0].lastModified,
                  lastModifiedDate: ev.target.files[0].lastModifiedDate,
                  name: ev.target.files[0].name,
                  size: ev.target.files[0].size,
                  type: ev.target.files[0].type,
                  file: ev.target.files[0],
                  files: ev.target.files,

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
