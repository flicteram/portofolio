import instagramPic from '../src/Components/Images/instagramPic.png'
import movieflix from '../src/Components/Images/movieflix.jpg'
import covidtracker from '../src/Components/Images/covid-tracker.jpg'
import ecommerce from '../src/Components/Images/e-commerce.png'

export default [
    {
        name:'ComfortZone',
        key:1,
        picture:ecommerce,
        aboutProject:`An e-commerce website, which includes most notorious functionalities,
        like: user login, keep track of user's products added in to the cart and filter through
        products to find the best suited ones.`,
        techs:['Next.js','Firebase','MaterialUI'],
        github:'https://github.com/flicteram/ecommerce',
        live:'https://ecommerce-flicteram.vercel.app/'

    },
    {
        name:'Instagram Clone',
        key:2,
        picture:instagramPic,
        aboutProject:`A clone after the notorious social media app that allows user to share pictures,
        add comments and react to other people posts. Once logged in, the user is able to edit his profile as he wishes.`,
        techs:['React','Firebase','MatarialUI'],
        github:'https://github.com/flicteram/instagram',
        live:'https://flicteram.github.io/instagram/',
        
    },
    {
        name:'Covid-Tracker app',
        key:3,
        picture:covidtracker,
        aboutProject:`An app which aims to keep user up to date about coivd-19 situation around the globe.`,
        techs:['React','COVID-19 API','React Chart'],
        github:'https://github.com/flicteram/covid-tracker',
        live:'https://flicteram.github.io/covid-tracker/',
    },
    {
        name:'Movieflix',
        key:4,
        picture:movieflix,
        aboutProject:`With an interface inspired by Netflix, Movieflix gives the user opportunity to search
        information of a movie of his choice.`,
        techs:['React','TMDB API','React Router'],
        github:'https://github.com/flicteram/movieflix',
        live:'https://flicteram.github.io/movieflix/',
    }
]