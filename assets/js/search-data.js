// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Working papers, work in progress, and publications. Most recent first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "presentations",
          description: "Conference presentations, seminars, and invited talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A short academic CV. For the full version, see the PDF (when available) or contact me by email.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have taught or assisted with at the University of Basel.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-personal",
          title: "personal",
          description: "A few things outside of research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "news-replace-with-a-real-news-item-e-g-started-my-phd-at-the-university-of-basel-tada",
          title: '[Replace with a real news item — e.g., “Started my PhD at the...',
          description: "",
          section: "News",},{id: "news-example-news-item-with-details",
          title: 'Example news item with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-another-inline-announcement-keep-these-short-to-enable-the-news-section-on-the-homepage-set-announcements-enabled-true-in-pages-about-md",
          title: '[Another inline announcement — keep these short. To enable the news section on...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%72%69%6F.%74%68%75%65%72%6B%61%75%66@%75%6E%69%62%61%73.%63%68", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
