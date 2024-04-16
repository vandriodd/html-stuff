/* ---------------------------- Generate projects --------------------------- */

const projects = [
  {
    name: 'Ideas en el Aire',
    rol: 'Frontend & UX/UI',
    description: 'Argentine radio site with content management.',
    logo: 'ideasenelaire.svg',
    link: 'https://ideas-en-el-aire.vercel.app/'
  },
  {
    name: 'PasturApp',
    rol: 'Frontend & DevOps',
    description: 'Self-management app for dairy producers.',
    logo: 'pasturapp.svg',
    link: 'https://pasturapp.tech/landing'
  }
]

const projectsList = document.querySelector('.projects-list')
const renderedProjects = projects.map(project => `
  <li class="project-item">
    <i>
      <img src="${project.logo}" alt="${project.name} logo" />
    </i>
    <div>
      <a href="${project.link}">
        <h4>${project.name} | ${project.rol}</h4>
      </a>
      <p>${project.description}</p>
    </div>
  </li>
`).join('')

projectsList.innerHTML = renderedProjects

/* --------------------- Generate technologies and tools -------------------- */

const technologies = [
  {
    logo: 'react.svg',
    name: 'React'
  },
  {
    logo: 'nextjs.svg',
    name: 'NextJS'
  },
  {
    logo: 'figma.svg',
    name: 'Figma'
  },
  {
    logo: 'adobecreativecloud.svg',
    name: 'Adobe Tools'
  },
  {
    logo: 'typescript.svg',
    name: 'Typescript'
  },
  {
    logo: 'javascript.svg',
    name: 'Javascript'
  },
  {
    logo: 'html.svg',
    name: 'HTML'
  },
  {
    logo: 'css.svg',
    name: 'CSS'
  },
  {
    logo: 'git.svg',
    name: 'Git'
  },
  {
    logo: 'tailwindcss.svg',
    name: 'Tailwind'
  }
]

const technologiesList = document.querySelector('.technologies-list')
const renderedTechnologies = technologies.map(technology => `
  <li class="technology-item">
    <i>
      <img src="${technology.logo}" alt="${technology.name} logo" />
    </i>
    <p>${technology.name}</p>
  </li>
`).join('')

technologiesList.innerHTML = renderedTechnologies
