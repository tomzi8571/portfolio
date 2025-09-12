export const skills = [
    // Deployment / DevOps
    {
        name: 'Jenkins',
        category: 'Deployment',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        icon: 'devicon-jenkins-plain colored',
        description: 'CI server for building, testing, and deploying.'
    },
    {name: 'Argo CD', category: 'Deployment', svg: 'https://cdn.simpleicons.org/argo', description: 'GitOps continuous delivery for Kubernetes.'},
    {name: 'CI/CD', category: 'Deployment', svg: '/icons/cicd.svg', description: 'Automated build, test, and release pipelines.'}, // Added local custom icon
    {
        name: 'Docker',
        category: 'Deployment',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        icon: 'devicon-docker-plain colored',
        description: 'Containerization for consistent runtime environments.'
    },
    {
        name: 'Kubernetes',
        category: 'Deployment',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        icon: 'devicon-kubernetes-plain colored',
        description: 'Orchestrates containers, scaling, and resilience.'
    },
    {name: 'Varnish', category: 'Deployment', svg: 'https://cdn.simpleicons.org/varnish', description: 'HTTP accelerator and caching reverse proxy.'},
    {
        name: 'Nginx',
        category: 'Deployment',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
        icon: 'devicon-nginx-original colored',
        description: 'High‑performance web server and reverse proxy.'
    },
    {name: 'Cloud Ready Developer', category: 'Deployment', svg: '/icons/cloud.svg', description: '12‑factor, stateless processes, containers, and parity.'}, // Added local cloud icon

    // Frontend
    {
        name: 'React',
        category: 'Frontend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        icon: 'devicon-react-original colored',
        description: 'Component‑based UI library for interactive apps.'
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        svg: 'https://cdn.simpleicons.org/tailwindcss',
        icon: 'devicon-tailwindcss-plain colored',
        description: 'Utility‑first CSS framework.'
    },
    {
        name: 'CSS',
        category: 'Frontend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        icon: 'devicon-css3-plain colored',
        description: 'Styling language for the web.'
    },
    {
        name: 'HTML',
        category: 'Frontend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        icon: 'devicon-html5-plain colored',
        description: 'Semantic markup for web documents.'
    },
    {name: 'Frontend', category: 'Frontend', description: 'UI development, UX collaboration, and integration.'}, // Concept umbrella; leave without icon

    // Backend
    {
        name: 'Java',
        category: 'Backend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        icon: 'devicon-java-plain colored',
        description: 'Enterprise‑grade language and JVM ecosystem.'
    },
    {
        name: 'Spring',
        category: 'Backend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        icon: 'devicon-spring-plain colored',
        description: 'Application framework for Java.'
    },
    {
        name: 'Spring Boot',
        category: 'Backend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        icon: 'devicon-spring-plain colored',
        description: 'Convention‑over‑configuration for Spring microservices.'
    },
    {name: 'SAP eCommerce Developer', category: 'Backend', svg: 'https://cdn.simpleicons.org/sap', description: 'SAP Commerce (Hybris) platform expertise.'},
    {name: 'SAP Flexible Search', category: 'Backend', svg: 'https://cdn.simpleicons.org/sap', description: 'Hybris query language for data access.'},
    {name: 'SAP Impex', category: 'Backend', svg: 'https://cdn.simpleicons.org/sap', description: 'Structured imports/exports for Hybris data.'},
    {
        name: 'MySQL',
        category: 'Backend',
        svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        icon: 'devicon-mysql-plain colored',
        description: 'Relational database engine.'
    },
    {name: 'JPA', category: 'Backend', description: 'Java Persistence API for ORM mapping.'},
    {name: 'REST', category: 'Backend', svg: '/icons/rest.svg', description: 'HTTP APIs with resource‑based stateless design.'}, // Added local icon
    {name: 'Microservices', category: 'Backend', svg: '/icons/microservices.svg', description: 'Small, independent services with clear contracts.'}, // Added local icon
    {name: 'TDD', category: 'Backend', description: 'Test‑first development for reliable design.'}, // Practice; no official icon
    {name: 'JUnit', category: 'Backend', svg: 'https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/JUnit-Dark.svg', description: 'Unit testing framework for Java.'},
    {
        name: 'Mockito',
        category: 'Backend',
        svg: 'https://cdn.jsdelivr.net/gh/tandpfun/skill-icons/icons/Mockito-Dark.svg',
        description: 'Mocking framework for Java tests.'
    },
    {name: 'Integration Tests', category: 'Backend', description: 'End‑to‑end and system integration validation.'}, // Concept; skip icon
    {name: 'jRebel', category: 'Backend', description: 'Hot‑reload for Java to speed up dev cycles.'},
    {name: 'Full Stack', category: 'Backend', description: 'Across frontend, backend, and DevOps.'}, // Umbrella term; skip icon
    {name: 'Backend', category: 'Backend', description: 'Service design, data modeling, scalability.'}, // Umbrella term

    // Others
    {name: 'Agile/Scrum', category: 'Others', description: 'Iterative delivery with frequent feedback.'}, // Methodology; no official single logo
    {name: 'Jira', category: 'Others', svg: 'https://cdn.simpleicons.org/jira', description: 'Work management for planning and tracking.'},
    {name: 'Confluence', category: 'Others', svg: 'https://cdn.simpleicons.org/confluence', description: 'Team wiki for documentation.'},
    {name: 'GitHub', category: 'Others', svg: 'https://cdn.simpleicons.org/github', description: 'Code hosting, reviews, and CI integration.'},
    {name: 'GitHub Copilot', category: 'Others', svg: 'https://cdn.simpleicons.org/githubcopilot', description: 'AI pair programmer for code suggestions.'},
    {name: 'Security', category: 'Others', description: 'Hardening, testing, and secure defaults.'}, // Broad domain; could later add shield icon
    {name: 'OWASP Top 10', category: 'Others', svg: 'https://cdn.simpleicons.org/owasp', description: 'Most critical web app security risks.'},
    {name: 'ESB/ActiveMQ', category: 'Others', svg: 'https://cdn.simpleicons.org/apacheactivemq', description: 'Messaging and integration middleware.'},
    {name: 'Mirakl Integration', category: 'Others', svg: 'https://cdn.simpleicons.org/mirakl', description: 'Marketplace integration workflows.'},
    {name: 'PIM', category: 'Others', description: 'Product information management systems.'}, // Domain; skip icon
    {name: 'Amplience', category: 'Others', svg: 'https://cdn.simpleicons.org/amplience', description: 'Headless CMS and dynamic media.'},
]
