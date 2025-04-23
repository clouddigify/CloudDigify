import { 
  FaCloud, FaCode, FaGraduationCap, FaLightbulb, 
  FaChartLine, FaDocker 
} from 'react-icons/fa';

export const trainingMenuItems = [
  {
    title: 'AWS Training',
    path: '/training-services/aws',
    icon: FaCloud,
    description: 'Master AWS cloud services and architecture'
  },
  {
    title: 'Azure Training',
    path: '/training-services/azure',
    icon: FaCloud,
    description: 'Learn Microsoft Azure cloud platform'
  },
  {
    title: 'DevOps Training',
    path: '/training-services/devops',
    icon: FaCode,
    description: 'Master DevOps practices and tools'
  },
  {
    title: 'Kubernetes Training',
    path: '/training-services/kubernetes',
    icon: FaDocker,
    description: 'Learn container orchestration with Kubernetes'
  }
];

export const useCaseMenuItems = [
  {
    title: 'Enterprise Transformation',
    path: '/use-cases/enterprise',
    icon: FaChartLine,
    description: 'Digital transformation success stories'
  },
  {
    title: 'Cloud Migration',
    path: '/use-cases/migration',
    icon: FaCloud,
    description: 'Successful cloud migration cases'
  },
  {
    title: 'Digital Innovation',
    path: '/use-cases/innovation',
    icon: FaLightbulb,
    description: 'Innovation and modernization stories'
  }
]; 