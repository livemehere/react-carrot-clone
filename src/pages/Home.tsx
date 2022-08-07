import {
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  chatbubbleOutline,
  chatbubbles,
  chatbubblesOutline,
  heartOutline,
} from "ionicons/icons";
import { FC } from "react";
import ProductItem from "../components/ProducItem";

const Home: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={"p-2"}>
          <h1 className={"font-bold text-xl mt-2"}>백석동</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className={"mt-4"}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Home;
