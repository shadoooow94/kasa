import React from 'react'; // react est exporté par défaut 
import ReactDOM from 'react-dom/client'; // ReactDOM est exporté par défaut
import './style/style.css' // importation du fichier css
import Header from './components/Header/Header' // importation du composant Header
import Footer from './components/Footer/Footer' // importation du composant Footer
import Home from './Pages/Home/Home' // importation de la page Home
import LocationPage from './Pages/LocationPage/LocationPage' // importation de la page LocationPage
import Error from './Pages/Error/Error' // importation de la page Error
import About from './Pages/About/About' // importation de la page About
import { BrowserRouter ,Routes, Route} from 'react-router-dom';  // importation des composants de react-router-dom

const root = ReactDOM.createRoot(document.getElementById('root')); // création de la racine de l'application
root.render( // rendu de l'application  dans la racine de l'application  et insertion dans le DOM 
  <BrowserRouter> 
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path = "/location/:id" element={<LocationPage/>} />          
        <Route path= "/About" element= {<About/>}/>   
        <Route path= "*" element = {<Error/>} />         
        </Routes>
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root') // insertion de l'application dans le DOM
);

