import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Both</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent> 
        <IonContent>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={photo.filepath}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          {/* <IonFab> */}
        </IonContent>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
