var myApp = angular.module('myApp');

myApp.service('cludoService', function() {
  console.log('in the service');

  var sv = this;

  sv.games = [{
      game: 'Fallout 4',
      image: 'images/317272-fallout-4-playstation-4-front-cover.jpg',
      systems: [{
          system: 'Playstation 4',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'Xbox One',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'PC',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout',
      image: 'images/Boxart.jpg',
      systems: [{
          system: 'Linux',
          help: ['FAQS', 'Q&A', 'Board']
        },
        {
          system: 'Macintosh',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'PC',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout 3',
      image: 'images/Fallout_3_cover_art.png',
      systems: [{
          system: 'Playstation 3',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'Xbox 360',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'PC',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout 2',
      image: 'images/2911-fallout-2-windows-front-cover.jpg',
      systems: [{
          system: 'Macintosh',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'PC',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout: New Vegas',
      image: 'images/FNV_box_art_(US).jpg',
      systems: [{
          system: 'Playstation 3',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'Xbox 360',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout Shelter',
      image: 'images/Fallout-293x300.png',
      systems: [{
          system: 'Android',
          help: ['FAQS', 'Q&A', 'Board']
        },
        {
          system: 'iOS',
          help: ['FAQS', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout: Pip-Boy',
      image: 'images/pip-boy.png',
      systems: [{
          system: 'Android',
          help: ['FAQS', 'Q&A', 'Board']
        },
        {
          system: 'iOS',
          help: ['FAQS', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout: Brotherhood of Steel',
      image: 'images/BoxArt_FOB.jpg',
      systems: [{
          system: 'Playstation 2',
          help: ['FAQS', 'Q&A', 'Board']
        },
        {
          system: 'Xbox',
          help: ['FAQS', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout: New Vegas - Ultimate Edition',
      image: 'images/3max.jpg',
      systems: [{
          system: 'Playstation 3',
          help: ['FAQS', 'Q&A', 'Board']
        },
        {
          system: 'Xbox 360',
          help: ['FAQS', 'Q&A', 'Board']
        },
        {
          system: 'PC',
          help: ['FAQS', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout 4: Game of the Year Edition',
      image: 'images/gamebox1502375831.png',
      systems: [{
          system: 'Playstation 4',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'Xbox One',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        },
        {
          system: 'PC',
          help: ['FAQS', 'Cheats', 'Q&A', 'Board']
        }
      ]
    },
    {
      game: 'Fallout: Tactics',
      image: 'images/Fallout_Tactics_Box.jpg',
      systems: [{
        system: 'PC',
        help: ['FAQS', 'Q&A', 'Board']
      }]
    }
  ];

  sv.systemsArray = [{
    name: "PC",
    on: false,
    amount: 7
  }, {
    name: "PlayStation 4",
    on: false,
    amount: 2
  }, {
    name: "Xbox One",
    on: false,
    amount: 2
  }, {
    name: "Android",
    on: false,
    amount: 2
  }, {
    name: "iOS",
    on: false,
    amount: 2
  }, {
    name: "PlayStation 3",
    on: false,
    amount: 3
  }, {
    name: "Xbox 360",
    on: false,
    amount: 3
  }, {
    name: "Linux",
    on: false,
    amount: 1
  }, {
    name: "Macintosh",
    on: false,
    amount: 2
  }];

});
