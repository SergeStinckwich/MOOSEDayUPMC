module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "MOOSEDay@UPMC 2014",
      description: "MOOSE, Custom analyses made easy",
      date: "June 5-6",
      // If your event is free, just comment this line
      // price: "Free",
      venue: "Université Pierre and Marie Curie",
      address: "Pierre and Marie Curie University, 4 place Jussieu",
      city: "Paris",
      state: "France"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://docs.google.com/forms/d/1m6f6mNMmYp6HgcEG3sVq-mVJMWnHwkNCZswAyRvOq1o/viewform"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-9711668-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "Thuesday, 9h30"
      },
      {
        name: "Thierry Goubier",
        photo: "themes/yellow-swan/img/thierry_goubier.jpg",
        bio: "Thierry Goubier, currently research engineer and expert for CEA List, working on programming languages and compilers for manycores (ΣC, τC) and HPC. Previously at UBO, Curtin University Sarawak, Diponegoro University doing  logic synthesis for turbo codes, parallel programming, hypertexts and GUI framework. Graduated from Telecom Bretagne in 1992, with a MSc (94) and a PhD (1998) from University of Rennes I.",
        company: "CEA LIST",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "GitFileTree: a convenient Monticello workflow with Git",
          description: "GitFileTree, or, how to easily and safely integrate Pharo development in a git workflow (from Monticello/Metacello to Github without touching the command line)",
          time: "Thuesday, 10h00"
        }
      },
      {
        name: "Alexandre Bergel",
        photo: "themes/yellow-swan/img/alexandre_bergel.jpg",
        bio: "Alexandre Bergel is Assistant Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering and software quality, more specifically on code profiling, testing and data visualization. Alexandre Bergel has authored over 60 articles, published in international and peer reviewed scientific forums, including the most competitive conferences and journals in the field of software engineering. Several of his research prototypes have been turned into products and adopted by major companies in the semi-conductor industry and certification of critical software systems.",
        company: "DCC, University of Chile",
        link: {
          href: "http://www.bergel.eu/",
          text: "Web page"
        },
        presentation: {
          title: "Roassal2: Next Generation of Visualization Engine",
          description: "Roassal2 is a complete revamp of Roassal. It is based on Athens and Cairo for Smooth drawing and animation. Roassal2 comes with a number of API to easily build charts, geographical maps, animations.",
          time: "Thuesday, 10h30"
        }
      },
      {
        name: "Serge Stinckwich",
        photo: "themes/yellow-swan/img/speaker.png",
        bio:"",
        company:"UMMISCO (IRD/UPMC)",
        link: {
            href: "",
            text: "Thuesday, 11h00"
          },
        presentation: {
            title: "Process Mining and visualization with MOOSE",
            description: "",
            time: ""
          }
        },
      {
        name: "Lunch",
        time: "Thuesday, 12h00"
      },
      {
        name: "Hands-On session",
        time: "Thuesday, 14h00"
      },
      {
        name: "Coffee-Break",
        time: "Thuesday, 15h30"
      },
      {
        name: "Hands-On session",
        time: "Thuesday, 16h00"
      },
      {
        name: "Mircea Filip Lungu",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Software Composition Group, Berne University",
        link: {
          href: "http://scg.unibe.ch/staff/mircea",
          text: "Web page"
        },
        presentation: {
          title: "Visualizing Software Corpora with Moose",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "Friday, 9h00"
        }
      },
      {
        name: "Leo Perard",
        photo: "themes/yellow-swan/img/speaker.png",
        bio:"",
        company: "RMOD team, INRIA",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Telescope",
          description: "",
          time: "Friday, 9h45"
        }
      },
      {
        name: "TBA",
        photo: "themes/yellow-swan/img/speaker.png",
        bio: "",
        company: "Synectique",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title:"TBA",
          description: "",
          time: "Friday, 10h30"
        }
      },

      // {
      //   name: "Steve Jobs",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://github.com/stevie",
      //     text: "@stevie"
      //   },
      //   presentation: {
      //     title: "Presenting iPad",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "14h00"
      //   }
      // },
      {
        name: "Coffee-break",
        time: "15h00"
      }
      // {
      //   name: "Mark Zuckerberg",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Facebook",
      //   link: {
      //     href: "http://twitter.com/zuck",
      //     text: "@zuck"
      //   },
      //   presentation: {
      //     title: "Revealing Facebook Secrets",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "16h00"
      //   }
      // },
      // {
      //   name: "Steve Wozniak",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://twitter.com/woz",
      //     text: "@woz"
      //   },
      //   presentation: {
      //     title: "Why do I prefer Android over iPhone",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "17h00"
      //   }

    ],

    // List of Sponsors
    sponsors: [
      {
        name: "ESUG",
        logo: "themes/yellow-swan/img/esug-logo.png",
        url: "http://www.esug.org/"
      },
      {
        name: "Object Profile",
        logo: "themes/yellow-swan/img/object-profile-logo.png",
        url: "http://www.objectprofile.com/"
      },
      {
        name: "UMMISCO",
        logo: "themes/yellow-swan/img/UMMISCO-logo.jpg",
        url:"http://www.ummisco.ird.fr/"
      }
    ],

    // List of Partners
    // partners: [
    //   {
    //     name: "BrazilJS",
    //     logo: "themes/yellow-swan/img/partner.png",
    //     url: "http://braziljs.org"
    //   }
    // ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
