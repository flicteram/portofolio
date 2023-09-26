import innovxImg from '../src/Components/Images/innovxImg.png'
import veelancingImg from '../src/Components/Images/veelancingImg.png'
import microsoftImg from '../src/Components/Images/microsoft.jpg'

const data = [
    {
        name: 'Microsoft Teams',
        key: 0,
        aboutProject: `The ultimate messaging app for 
        your organization—a workspace for real-time collaboration and communication, 
        meetings, file and app sharing, and even the occasional emoji! 
        All in one place, all in the open, all accessible to everyone.`,
        techs:['React', 'TypeScript', 'GraphQl-Apollo'],
        live: 'https://teams.microsoft.com/',
        picture: microsoftImg,
        github:'',
        work:true,
    },
    {
        name:'Veelancing',
        key:1,
        aboutProject: `
        Veelancing is an innovative decentralized marketplace for freelancers, 
        designed for all those who need to get a job done efficiently, 
        without the current hassles of the industry.`,
        techs:['React', 'Redux-Saga', 'Semantic UI'],
        live: 'https://veelancing.io/',
        picture: veelancingImg,
        github:'',
        work:true,
    },
    {
        name: 'InnovX-BCR',
        key: 2,
        aboutProject: `A business accelerator which makes easier communication between startups and investors.`,
        techs:['React', 'Redux-Saga', 'Semantic UI'],
        live: 'https://innovationexchange.eu/',
        picture: innovxImg,
        github:'',
        work:true,
    },

]


export default data