import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonProgressBar,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Tab2.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  chevronBack,
  ellipsisVertical,
  heartOutline,
  home,
  homeOutline,
  share,
  shareOutline,
} from "ionicons/icons";
import Divider from "../components/Divider";
import { useParams } from "react-router";

const images = [
  "https://dnvefa72aowie.cloudfront.net/origin/article/202012/0E92DF906D36AFC68CDE4DDAA684F22496700D3C35B05D977E89AB61E227CCC1.jpg?q=95&s=1440x1440&t=inside",
  "https://dnvefa72aowie.cloudfront.net/origin/article/202011/C288730B0E11A5725FB24728C20606F4A71638C3287CBCBB45AA4F8D877D903F.jpg?q=95&s=1440x1440&t=inside",
  "https://dnvefa72aowie.cloudfront.net/origin/article/202011/e577635e7632152d10de79c0ab369a4e2a548bef8f870631d6a3236f4e56a7e7.webp?q=95&s=1440x1440&t=inside",
];

const ProductDetail: React.FC = () => {
  const router = useIonRouter();
  const params = useParams<{ id: string }>();
  console.log(params.id);

  return (
    <IonPage>
      <IonContent fullscreen>
        <header
          className={
            "text-2xl flex justify-between p-2 absolute top-2 left-0 right-0 z-[999] text-white"
          }
        >
          <div onClick={() => router.goBack()}>
            <IonIcon icon={chevronBack} className={"mr-2"} />
            <IonIcon icon={homeOutline} />
          </div>
          <div>
            <IonIcon icon={shareOutline} className={"mr-2"} />
            <IonIcon icon={ellipsisVertical} />
          </div>
        </header>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className={"h-[400px]"}
        >
          {images.map((i, idx) => (
            <SwiperSlide key={idx} className={"h-[100%]"}>
              <img className={"h-[100%] object-cover"} src={i} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <section>
          <header className={"flex justify-between py-2 px-3"}>
            <div className={"flex gap-2 items-center"}>
              <IonAvatar className={"w-[40px] flex items-center"}>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
              <div>
                <h1 className={"font-bold"}>줍줍이</h1>
                <p className={"text-black/50 text-sm mt-1"}>백석동</p>
              </div>
            </div>
            <div>
              <div className={"flex items-center gap-2"}>
                <div>
                  <span className={"font-bold text-[#F28239]"}>45.1℃</span>
                  <div className="bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-[#F28239] h-1 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <img
                  className={"w-[20px] h-[20px] mt-1"}
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  alt=""
                />
              </div>
              <div
                className={"text-right text-xs text-black/50 mt-2 underline"}
              >
                매너온도
              </div>
            </div>
          </header>
        </section>
        <Divider />
        <div className={"m-3"}>
          <h1 className={"font-bold text-xl"}>
            산지얼마안됬어요 바로가져가세요!
          </h1>
          <p className={"text-xs text-black/50 my-2"}>
            가구/인테리어 · 끌올 51분 전
          </p>
          <p>
            선물받았는데 제스타일이아니어서 판매합니다 포장그대로~~
            두고있습니다.^^ 선물하기에도 좋을거같아요 ~~ 비대면 문고리
            거래희망합니다^^
          </p>
          <p className={"text-xs text-black/50 my-2"}>관심 5 · 조회 64</p>
        </div>
        <div
          className={
            "h-[50px] flex items-center justify-between p-3 absolute w-[100%]"
          }
        >
          <div className={"h-[50px] flex items-center gap-3 ml-2"}>
            <IonIcon icon={heartOutline} className={"text-[30px]"} />
            <Divider direction={"vertical"} />
            <div className={"font-bold"}>
              <h3>30,000원</h3>
              <p className={"text-sm text-black/40"}>가격 제안 불가</p>
            </div>
          </div>
          <button className={"bg-[#F28239] text-white py-2 px-3 rounded-md"}>
            채팅하기
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
