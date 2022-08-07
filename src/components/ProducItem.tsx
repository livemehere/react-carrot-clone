import React from "react";
import { IonIcon, IonItem } from "@ionic/react";
import {
  chatbubbleOutline,
  chatbubblesOutline,
  heartOutline,
} from "ionicons/icons";

const ProductItem = () => {
  return (
    <IonItem
      className={"ion-align-items-start relative mb-3"}
      routerLink={`/product/1`}
    >
      <img
        className={"w-[100px] rounded-md mb-3 mt-1"}
        src={
          "https://dnvefa72aowie.cloudfront.net/origin/article/202009/BC01FA66737EBD2E0A00617E39EDF3D26B0AD62C45F9442F2C6A89795AFCC2EB.jpg?q=95&s=1440x1440&t=inside"
        }
      />
      <div className={"ml-3 flex flex-col mt-1"}>
        <h2>애플워치 SE</h2>
        <p className={"text-xs text-black/30 my-1"}>토당동 · 8분전</p>
        <p className={"font-bold"}>130만원</p>
      </div>
      <div className="absolute bottom-2 right-4 flex gap-2 text-black/50 text-sm">
        <div className={"flex items-center"}>
          <IonIcon icon={chatbubbleOutline} />
          <span>5</span>
        </div>
        <div className={"flex items-center"}>
          <IonIcon icon={heartOutline} />
          <span>5</span>
        </div>
        <div className={"flex items-center"}>
          <IonIcon icon={chatbubblesOutline} />
          <span>1</span>
        </div>
      </div>
    </IonItem>
  );
};

export default ProductItem;
