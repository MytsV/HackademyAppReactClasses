import '../css/Landing.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageMain from '../components/PageMain';
import PageAbout from '../components/PageAbout';
import PageTutorial from '../components/PageTutorial';
import PageForm from '../components/PageForm';
import MenuItemInfo from '../objects/MenuItemInfo';
import { authenticator } from '../tools/Authentication';
import React from 'react';

interface LandingProps {
}

class Landing extends React.Component<LandingProps> {
  render() {
    return <div>
      <Header menuItems={[new MenuItemInfo('.',
        'Головна'), authenticator.isAuthenticated() ? new MenuItemInfo('/forecast', 'Погода') : new MenuItemInfo('/login', 'Вхід')]} activeIndex={0}/>
      <PageMain />
      <PageAbout />
      <PageTutorial />
      <PageForm />
      <Footer />
    </div>;
  }
}

export default Landing;
