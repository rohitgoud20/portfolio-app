import { IonContent, IonPage, IonHeader, IonTabBar} from '@ionic/react';
import Hero from '../components/hero';
import './home.css';
import ContactHeader from '../components/ContactHeader';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/projectSection'
import SkillsSection from '../components/skillssection';
import EducationSection from '../components/educationsection';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className='home-content'>
        <ContactHeader />
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </IonContent>
    </IonPage>
  );
};


export default Home;
