// Centralized icon definitions.
// Exports:
//  - icons(): list used for Credits section (tooling attribution)
//  - iconMap: name -> icon metadata (skills rendering)
//  - getIcon(name)

export const iconMap = {
    // Deployment / DevOps
    'Jenkins': {type: 'devicon', class: 'devicon-jenkins-plain colored'},
    'Argo CD': {type: 'img', src: 'https://cdn.simpleicons.org/argo'},
    'CI/CD': {type: 'img', src: '/icons/cicd.svg'},
    'Docker': {type: 'devicon', class: 'devicon-docker-plain colored'},
    'Kubernetes': {type: 'devicon', class: 'devicon-kubernetes-plain colored'},
    'Varnish': {type: 'img', src: 'https://cdn.simpleicons.org/varnish'},
    'Nginx': {type: 'devicon', class: 'devicon-nginx-original colored'},
    'Cloud Ready Developer': {type: 'img', src: '/icons/cloud.svg'},
    // Frontend
    'React': {type: 'devicon', class: 'devicon-react-original colored', href: 'https://react.dev'},
    'Tailwind CSS': {type: 'devicon', class: 'devicon-tailwindcss-plain colored', href: 'https://tailwindcss.com'},
    'CSS': {type: 'devicon', class: 'devicon-css3-plain colored'},
    'HTML': {type: 'devicon', class: 'devicon-html5-plain colored'},
    // Backend
    'Java': {type: 'devicon', class: 'devicon-java-plain colored'},
    'Spring': {type: 'devicon', class: 'devicon-spring-plain colored'},
    'Spring Boot': {type: 'devicon', class: 'devicon-spring-plain colored'},
    'SAP eCommerce Developer': {type: 'img', src: 'https://cdn.simpleicons.org/sap'},
    'SAP Flexible Search': {type: 'img', src: 'https://cdn.simpleicons.org/sap'},
    'SAP Impex': {type: 'img', src: 'https://cdn.simpleicons.org/sap'},
    'MySQL': {type: 'devicon', class: 'devicon-mysql-plain colored'},
    'JPA': {type: 'img', src: 'https://cdn.simpleicons.org/hibernate'},
    'REST': {type: 'img', src: '/icons/rest.svg'},
    'Microservices': {type: 'img', src: '/icons/microservices.svg'},
    'JUnit': {type: 'img', src: 'https://cdn.simpleicons.org/junit5'},
    'Mockito': {type: 'img', src: 'https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/Mockito-Dark.svg'},
    'EasyMock': {type: 'img', src: 'https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/Mockito-Dark.svg'},
    'jRebel': {type: 'img', src: 'https://cdn.simpleicons.org/jrebel'},
    // Others
    'Jira': {type: 'devicon', class: 'devicon-jira-plain colored'},
    'Confluence': {type: 'devicon', class: 'devicon-confluence-plain colored'},
    'GitHub': {type: 'devicon', class: 'devicon-github-original colored', href: 'https://github.com'},
    'GitHub Copilot': {type: 'img', src: 'https://cdn.simpleicons.org/githubcopilot', href: 'https://github.com'},
    'OWASP Top 10': {type: 'img', src: 'https://cdn.simpleicons.org/owasp'},
    'ESB/ActiveMQ': {type: 'img', src: 'https://cdn.simpleicons.org/apacheactivemq'},
    'Mirakl Integration': {type: 'img', src: 'https://cdn.simpleicons.org/mirakl'},
    'Amplience': {type: 'img', src: 'https://cdn.simpleicons.org/amplience'},
    'jsDelivr': {type: 'img', src: 'https://cdn.simpleicons.org/jsdelivr', href: 'https://www.jsdelivr.com'},
    'Simple Icons': {type: 'img', src: 'https://cdn.simpleicons.org/simpleicons', href: 'https://simpleicons.org'},
    'Netlify': {type: 'devicon', class: 'devicon-netlify-plain', href: 'https://www.netlify.com'},
    'Devicon': {type: 'devicon', class: 'devicon-devicon-plain colored', href: 'https://devicon.dev'},
    'SkillIcons': {type: 'fallback', iconShort:'SI', title: 'Skill-Icons', href: 'https://github.com/tandpfun/skill-icons'},
}

export function getIcon(name) {
    return iconMap[name]
}

