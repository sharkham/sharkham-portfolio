export const projects = [
  {
    name: "Novel Tracker App",
    url: "novel-tracker-app",
    description: "A novel progress tracking app, built for novel writing contests",
    languages: "React, Redux, Rails (API), ReactStrap",
    github: "https://github.com/sharkham/novel-tracker-frontend",
    moreinfo: "Ever wanted to run your own novel writing contest, or just keep track of your novel writing progress? Novel Tracker is a single page React app (with a Rails API as a back-end) where users can create a novel project for each year of a novel writing contest, edit it, update their wordcount (which displays in a progress bar) and earn badges for achievements. Users can also view basic information about other contest participants like novel title, summary, progress and badges.",
    image: "noveltrackerappscreenshot.png",
    livedemo: "http://novel-tracker-app.netlify.app/",
    demovideo: "https://youtu.be/e5lMdRyioSU",
    relatedblogposts: [
      {
        title: "Dealing with overlapping reducers in Redux",
        url: "https://dev.to/sharkham/dealing-with-overlapping-reducers-in-redux-dcm"
      },
      {
        title: "Changing attributes on a user in Rails without having to re-enter password",
        url: "https://dev.to/sharkham/changing-attributes-on-a-user-in-rails-without-having-to-re-enter-password-5bgb"
      },
      {
        title: "Forgot/Reset Password functionality with Rails and React (and Redux)",
        url: "https://dev.to/sharkham/forgot-reset-password-functionality-with-rails-and-react-and-redux-4kp0"
      },
      {
        title: "Deploying a React (with Redux)/Rails app with Netlify/Heroku",
        url: "https://dev.to/sharkham/deploying-a-react-with-redux-rails-app-with-netlify-heroku-5b89"
      },
      {
        title: "Follow-up: deploying Forgot/Reset Password (React/Rails app)",
        url: "https://dev.to/sharkham/follow-up-deploying-forgot-reset-password-react-rails-app-223j"
      }
    ]
  },
  {
    name: "PokéTeamBuilder",
    url: "poketeambuilder",
    description: "A Pokémon size comparison app",
    languages: "VanillaJS, Rails (API)",
    github: "https://github.com/sharkham/PokeTeamBuilder",
    moreinfo: "Ever wanted an easy way to tell how big your favourite team of Pokémon is compared to you? PokéTeamBuilder is a single page JavaScript application (with a Rails API as a back-end) where users can create a trainer and select up to 6 Pokémon from generations 1-3 that will appear (mostly) sized according to their Pokédex height. Pokémon and trainers can then be dragged around on a background to create a team picture. Pokémon, trainer sprites, and positions are saved, and reloaded upon login.",
    image: "poketeambuilder_screenshot.png",
    livedemo: null,
    demovideo: "https://youtu.be/iJ1hqZwg1SM",
    relatedblogposts: [
      {
        title: "Dragging images with mousemove in JavaScript",
        url: "https://dev.to/sharkham/dragging-images-with-mousemove-in-javascript-2dn4"
      },
      {
        title: "Vertical project planning for a Vanilla JavaScript/Rails app",
        url: "https://dev.to/sharkham/vertical-project-planning-for-a-vanilla-javascript-rails-app-3k43"
      }
    ]
  },
  {
    name: "Prompt Generator",
    url: "prompt-generator",
    description: "A writing prompt generator",
    languages: "React (functional), CSS",
    github: "https://github.com/sharkham/prompt-generator",
    moreinfo: "Stuck on what to write? Try this simple writing prompt generator! Prompt Generator is a single page React app where users can generate writing prompts from multiple lists of words (currently a general set of random words or a set of nautical terms).",
    image: "promptgeneratorscreenshot.png",
    livedemo: "https://promptgenerator.netlify.app/",
    demovideo: null,
    relatedblogposts: [
      {
        title: "Building a writing prompt generator with functional React",
        url: "https://dev.to/sharkham/building-a-writing-prompt-generator-with-functional-react-1k1o"
      }
    ]
  },
  {
    name: "Collab Writing App",
    url: "collab-writing-app",
    description: "A group novel writing app",
    languages: "Rails, Google OAuth",
    github: "https://github.com/sharkham/CollabWritingApp",
    moreinfo: "Collab Writing App is a Rails(6)-based web application intended for use by writers working on group novel projects together. Within the app, a user can create a novel, only visible to them, and invite other users to the novel project to allow them to edit and add to it.",
    image: "collabwritingappscreenshot.png",
    demovideo: "https://youtu.be/PoT4jxDS6rA",
    relatedblogposts: [
      {
        title: "Creating two resources 'at once' in Rails",
        url: "https://dev.to/sharkham/creating-two-resources-at-once-in-rails-386c"
      }
    ]
  }
]
