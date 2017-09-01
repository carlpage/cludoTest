var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('cludoController', ['cludoService', function(cludoService) {
  console.log('in the controller');

  var vm = this;

  vm.viewBy = 9;
  vm.itemsPerPage = vm.viewBy;
  vm.numPerPage = 9;
  vm.currentPage = 1;
  vm.systems = [];
  vm.games = [];

  vm.setPage = function(pageNo) {
    vm.currentPage = pageNo;
  };

  vm.pageChanged = function() {
    console.log('Page changed to: ' + vm.currentPage);
  }; // logs in the console that pagination has occurred

  vm.setItemsPerPage = function(num) {
    vm.itemsPerPage = num;
    vm.currentPage;
  }

  vm.getGames = function() {
    vm.games = cludoService.games;
    vm.systems = cludoService.systemsArray;
  };

  vm.getGames();

  vm.showAll = true;

  vm.checkChange = function() {
    for (t in vm.systems) {
      if (vm.systems[t].on) {
        vm.showAll = false;
        return;
      }
    }
    vm.showAll = true;
  }; // end checkChange

  vm.myFunc = function(a) {
    if (vm.showAll) {
      return true;
    }
    var sel = false;
    for (tech in vm.systems) {
      var t = vm.systems[tech];
      if (t.on) {
        for (var i = 0; i < vm.games.length; i++) {
          for (var j = 0; j < vm.games[i].systems.length; j++) {
            if (vm.games[i].systems[j].system.indexOf(t.name) == -1) {
              // console.log('{{{{{{}}}}}}', vm.games[i].systems[j].system.indexOf(t.name));
            }
          } // end j for loop
        } // end i for loop
        return false;
      } else {
        sel = true;
      }
    } // end for tech
    return sel;
  }; // end myFunc

  // vm.systemIncludes = [];
  //
  // vm.includeSystem = function(query) {
  //   if (vm.systemIncludes.includes(query)) {
  //     vm.systemIncludes.splice(query, 1);
  //   } else {
  //     console.log('whoa');
  // vm.systemIncludes.splice(query, 1);
  // for (var i = 0; i < vm.games.length; i++) {
  //   for (var j = 0; j < vm.games[i].systems.length; j++) {
  //     if (vm.games[i].systems[j].system == query) {
  //       console.log('{{{{{{}}}}}}', vm.games[i]);
  //       console.log(vm.systemIncludes.includes(query));
  // if (vm.systemIncludes.includes(query)) {
  //   console.log('whoa');
  //   vm.systemIncludes.splice(query, 1);
  // } else {
  // console.log('heyyoooooo');
  // vm.systemIncludes.push(vm.games[i].systems[j].system);
  // }
  // console.log('deeeeeeeeeeeerp', vm.systemIncludes);
  // return;
  //   }
  //
  // }
  // } // end j for loop
  // } // end i for loop
  // } // end includeSystem


  // vm.systemFilter = function(a) {
  // if (vm.systemIncludes.length > 0) {
  //   if ($.inArray(a.system, vm.systemIncludes) < 0)
  //     return;
  // }
  // console.log(a);
  // return a;
  // } // end systemFilter

}]); // end controller
