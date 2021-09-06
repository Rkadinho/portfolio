import React, { useState } from 'react'
import '../Css/App.css';
import ProfilePic from '../Img/profilePic.jpeg';
import WhiteHomeIcon from '../Icon/Theme Dark/house-door.svg';
import BlackHomeIcon from '../Icon/Theme White/house-door.svg'
import ThemeWhite from '../Icon/Theme Dark/toggle-off.svg';
import ThemeBlack from '../Icon/Theme White/toggle-on.svg';
import Translate from '../Icon/Theme Dark/translate.svg';
import BlackTranslate from '../Icon/Theme White/translate.svg'
import Instagram from '../Icon/Theme Dark/instagram.svg';
import BlackInstagram from '../Icon/Theme White/instagram.svg';
import GitHub from '../Icon/Theme Dark/github.svg';
import BlackGitHub from '../Icon/Theme White/github.svg';
import Linkedin from '../Icon/Theme Dark/linkedin.svg';
import BlackLinkedin from '../Icon/Theme White/linkedin.svg';
import Whats from '../Icon/Theme Dark/whatsapp.svg';
import BlackWhats from '../Icon/Theme White/whatsapp.svg';
import Email from '../Icon/Theme Dark/envelope-fill.svg';
import BlackEmail from '../Icon/Theme White/envelope-fill.svg'
import Intranet from '../Img/intranet.png'

function Projects() {
  //CONFIG PARA MUDAR A COR DA PAGINA!
  const [toogle, setToogle] = React.useState(true);
  const [ThemeColor, setThemeColor] = React.useState('#16202c');
  const [TextColor, setTextColor] = React.useState('white');
  const [NavColor, setNavColor] = React.useState('#16202c');
  const [BorderColor, setBorderColor] = React.useState('white');
  const [ToggleIcon, setToggleIcon] = useState(ThemeWhite);
  const [HomeIcon, setIconHome] = useState(WhiteHomeIcon);
  const [TranslateIcon, setTranslateIcon] = useState(Translate);
  const [InstagramIcon, setInstagram] = useState(Instagram);
  const [GitHubIcon, setIconGit] = useState(GitHub);
  const [LinkedinIcon, setLinkedinIcon] = useState(Linkedin);
  const [WhatsIcon, setWhatsIcon] = useState(Whats);
  const [EmailIcon, setEmailIcon] = useState(Email);
  React.useEffect(() => {
    setThemeColor((state) => toogle ? '#16202c' : 'white');
    setTextColor((state) => toogle ? 'white' : 'black');
    setNavColor((state) => toogle ? '#16202c' : '#f0f0f3');
    setBorderColor((state) => toogle ? 'white' : '#16202c');
    setToggleIcon((state) => toogle ? ThemeWhite : ThemeBlack);
    setIconHome((state) => toogle ? WhiteHomeIcon : BlackHomeIcon);
    setTranslateIcon((state) => toogle ? Translate : BlackTranslate);
    setInstagram((state) => toogle ? Instagram : BlackInstagram);
    setIconGit((state) => toogle ? GitHub : BlackGitHub);
    setLinkedinIcon((state) => toogle ? Linkedin : BlackLinkedin);
    setWhatsIcon((state) => toogle ? Whats : BlackWhats);
    setEmailIcon((state) => toogle ? Email : BlackEmail);
  }, [toogle]);

  return (
    <div style={{backgroundColor:ThemeColor}}>
        <nav style={{backgroundColor:NavColor, borderBottomColor:BorderColor}} >
            <a href='/'><img src={HomeIcon} className='icon' title='Inicio'/></a>
            <img src={TranslateIcon} className='icon02' title='Trocar Idioma'/>
            <img onClick={e => setToogle(state => !state)} src={ToggleIcon} className='icon03' title='Trocar Tema'/>
        </nav>
        <header className="App" style={{color:TextColor}}>
            <img src={ProfilePic} style={{borderColor:BorderColor}} className='profile' />
            <br/>
            <a href='https://www.instagram.com/rkadinho_/' target='_blank'>
                <img src={InstagramIcon} className='icon' title='Instagram'/>
            </a>
            <a href='https://github.com/Rkadinho' target='_blank'>
                <img src={GitHubIcon} className='icon' title='GitHub'/>
            </a>
            <a href='https://www.linkedin.com/in/ricardo-lopes-aa6120213/' target='_blank'>
                <img src={LinkedinIcon} className='icon' title='Linkedin'/>
            </a>
            <br/>
            <a href='/'>
                <h4 className='im' title='Sobre Mim' style={{color:TextColor}}>Sobre Mim</h4>
            </a>
            <a href='Projects'>
                <h4 className='projects' title='Projetos' style={{color:TextColor}}>Projetos</h4>
            </a>
            <h1>Ricardo Lopes Rodrigues Junior</h1>
            <h4 className='dev'>Desenvolvedor Front-End</h4>
        </header>
        <section className='App' style={{color:TextColor}}>
            <h2>Projetos</h2>
            <h3>
                <a title='Link do projeto' href='http://intranet.toppus.net' target='_blank' className='Intranet' style={{color:TextColor, borderColor:BorderColor}}>Intranet Toppus Soluções e Serviços</a>
            </h3>
            <a href='http://intranet.toppus.net' target='_blank' title='Link do projeto'>
                <img src={Intranet} classNam='projectsImg' style={{borderColor:BorderColor}}/>
            </a>
            <p style={{color:TextColor}}>Esses projeto foi feito para ajudar a comunicação interna da empresa entre colaboradores. 
                Uma página simples, somente feito o Front-End <br/>e para fazer ele usei:
                <ul style={{color:TextColor}}>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                </ul>
                Entre no projeto <a title='Link do projeto' style={{color:TextColor, borderColor:BorderColor}} href='http://intranet.toppus.net' className='projectLink' target='_blank'>cliquando aqui</a>
            </p>
            <h2>Contatos</h2>
            <a href='mailto:ricardorkdev@gmail.com'>
                <img src={EmailIcon} className='icon' title='E-mail'></img>
            </a>
            <a href='https://wa.me/qr/JU3UDGXHLQZHJ1' target='_blank'>
                <img src={WhatsIcon} className='icon' title='Whats App'/>
            </a>
            <a href='https://www.instagram.com/rkadinho_/' target='_blank'>
                <img src={InstagramIcon} className='icon' title='Instagram'/>
            </a>
            <a href='https://github.com/Rkadinho' target='_blank'>
                <img src={GitHubIcon} className='icon' title='GitHub'/>
            </a>
            <a href='https://www.linkedin.com/in/ricardo-lopes-aa6120213/' target='_blank'>
                <img src={LinkedinIcon} className='icon' title='Linkedin'/>
            </a>
        </section>
    </div>
  );
}

export default Projects;
