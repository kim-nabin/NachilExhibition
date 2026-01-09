
import { Artist, Notice } from '../types';

export const artists: Artist[] = [
  {
    id: 1,
    name: "강석훈",
    email: "sh.kang@najeon.kr",
    photoUrl: "/images/artists/profile-1.jpg",
    workUrl: "/images/artists/work-1.jpg",
    description: "전통적인 끊음질 기법을 통해 현대적 도시의 선을 표현합니다. 반복되는 선의 중첩을 통해 시간의 흐름을 담아냅니다.",
    strengths: ["끊음질", "기하학 패턴"]
  },
  {
    id: 2,
    name: "이영희",
    email: "yh.lee@najeon.kr",
    photoUrl: "/images/artists/profile-2.jpg",
    workUrl: "/images/artists/work-2.jpg",
    description: "자연의 유기적인 곡선을 줄음질로 구현합니다. 자개의 빛깔이 숲의 이슬처럼 맺히는 순간을 포착합니다.",
    strengths: ["줄음질", "자연물"]
  },
  {
    id: 3,
    name: "박준영",
    email: "jy.park@najeon.kr",
    photoUrl: "/images/artists/profile-3.jpg",
    workUrl: "/images/artists/work-3.jpg",
    description: "옻칠 위에 금박을 입혀 나전의 화려함을 극대화합니다. 전통 문양의 현대적 변주를 시도합니다.",
    strengths: ["금박", "기하학 패턴"]
  },
  {
    id: 4,
    name: "최미경",
    email: "mk.choi@najeon.kr",
    photoUrl: "/images/artists/profile-4.jpg",
    workUrl: "/images/artists/work-4.jpg",
    description: "끊임없는 반복 작업을 통해 얻어지는 명상적 조형성을 중시합니다. 자개의 파편이 모여 하나의 우주를 이룹니다.",
    strengths: ["끊음질", "자연물"]
  },
  {
    id: 5,
    name: "정호진",
    email: "hj.jung@najeon.kr",
    photoUrl: "/images/artists/profile-5.jpg",
    workUrl: "/images/artists/work-5.jpg",
    description: "기하학적인 분할을 통해 나전칠기의 공간감을 재해석합니다. 칠흑 같은 어둠 속의 광채를 탐구합니다.",
    strengths: ["기하학 패턴", "줄음질"]
  },
  {
    id: 6,
    name: "윤서연",
    email: "sy.yoon@najeon.kr",
    photoUrl: "/images/artists/profile-6.jpg",
    workUrl: "/images/artists/work-6.jpg",
    description: "금박과 나전의 조화를 통해 고전적 우아함을 현대적 가구에 접목합니다.",
    strengths: ["금박", "줄음질"]
  },
  {
    id: 7,
    name: "김도윤",
    email: "dy.kim@najeon.kr",
    photoUrl: "/images/artists/profile-7.jpg",
    workUrl: "/images/artists/work-7.jpg",
    description: "바다의 생명력을 자연물 문양으로 형상화합니다. 살아 움직이는 듯한 자개의 생동감을 추구합니다.",
    strengths: ["자연물", "끊음질"]
  },
  {
    id: 8,
    name: "한지민",
    email: "jm.han@najeon.kr",
    photoUrl: "/images/artists/profile-8.jpg",
    workUrl: "/images/artists/work-8.jpg",
    description: "정밀한 줄음질 기법으로 한국적 서정성을 표현합니다. 담백하면서도 깊은 울림을 주는 작업을 합니다.",
    strengths: ["줄음질", "자연물"]
  },
  {
    id: 9,
    name: "오세진",
    email: "sj.oh@najeon.kr",
    photoUrl: "/images/artists/profile-9.jpg",
    workUrl: "/images/artists/work-9.jpg",
    description: "수학적 비례를 바탕으로 한 기하학적 나전 배치를 선보입니다. 규칙성 속의 파격을 즐깁니다.",
    strengths: ["기하학 패턴", "금박"]
  },
  {
    id: 10,
    name: "임채원",
    email: "cw.lim@najeon.kr",
    photoUrl: "/images/artists/profile-10.jpg",
    workUrl: "/images/artists/work-10.jpg",
    description: "끊음질의 정교한 매력을 통해 옻칠의 깊이를 더합니다. 보이지 않는 곳까지 완벽을 기합니다.",
    strengths: ["끊음질", "금박"]
  },
  {
    id: 11,
    name: "조현우",
    email: "hw.cho@najeon.kr",
    photoUrl: "/images/artists/profile-11.jpg",
    workUrl: "/images/artists/work-11.jpg",
    description: "나전의 전통 문양을 해체하여 새로운 추상 형상을 만듭니다. 빛의 굴절을 이용한 작업을 진행합니다.",
    strengths: ["자연물", "기하학 패턴"]
  },
  {
    id: 12,
    name: "신지수",
    email: "js.shin@najeon.kr",
    photoUrl: "/images/artists/profile-12.jpg",
    workUrl: "/images/artists/work-12.jpg",
    description: "여성적 섬세함이 돋보이는 줄음질 작업을 통해 꽃과 나비의 생동감을 전달합니다.",
    strengths: ["줄음질", "자연물"]
  },
  {
    id: 13,
    name: "유민호",
    email: "mh.yoo@najeon.kr",
    photoUrl: "/images/artists/profile-13.jpg",
    workUrl: "/images/artists/work-13.jpg",
    description: "금박의 화려함과 옻칠의 차분함 사이의 균형을 찾습니다. 절제된 미학을 추구합니다.",
    strengths: ["금박", "끊음질"]
  },
  {
    id: 14,
    name: "권나래",
    email: "nr.kwon@najeon.kr",
    photoUrl: "/images/artists/profile-14.jpg",
    workUrl: "/images/artists/work-14.jpg",
    description: "자연의 사계절을 나전칠기로 기록합니다. 자개마다 다른 빛깔로 계절의 변화를 표현합니다.",
    strengths: ["자연물", "줄음질"]
  },
  {
    id: 15,
    name: "백승기",
    email: "sk.baek@najeon.kr",
    photoUrl: "/images/artists/profile-15.jpg",
    workUrl: "/images/artists/work-15.jpg",
    description: "직선과 곡선의 조화를 끊음질과 줄음질의 병행으로 완성합니다. 복합 기법의 장인입니다.",
    strengths: ["끊음질", "줄음질"]
  },
  {
    id: 16,
    name: "송하윤",
    email: "hy.song@najeon.kr",
    photoUrl: "/images/artists/profile-16.jpg",
    workUrl: "/images/artists/work-16.jpg",
    description: "전통 산수화를 현대적 시각으로 재구성합니다. 몽환적인 분위기를 자개로 풀어냅니다.",
    strengths: ["자연물", "금박"]
  },
  {
    id: 17,
    name: "황준호",
    email: "jh.hwang@najeon.kr",
    photoUrl: "/images/artists/profile-17.jpg",
    workUrl: "/images/artists/work-17.jpg",
    description: "기하학적 패턴의 반복을 통해 명상적 깊이를 만들어냅니다. 단순함 속에 숨겨진 복잡함을 지향합니다.",
    strengths: ["기하학 패턴", "끊음질"]
  },
  {
    id: 18,
    name: "배윤주",
    email: "yj.bae@najeon.kr",
    photoUrl: "/images/artists/profile-18.jpg",
    workUrl: "/images/artists/work-18.jpg",
    description: "줄음질 기법으로 한국의 야생화를 세밀하게 묘사합니다. 작고 소박한 것들의 아름다움을 담습니다.",
    strengths: ["줄음질", "자연물"]
  },
  {
    id: 19,
    name: "남궁민",
    email: "gm.nam@najeon.kr",
    photoUrl: "/images/artists/profile-19.jpg",
    workUrl: "/images/artists/work-19.jpg",
    description: "강렬한 대비를 위해 금박과 칠흑색 옻칠을 조화롭게 사용합니다. 드라마틱한 예술성을 추구합니다.",
    strengths: ["금박", "기하학 패턴"]
  },
  {
    id: 20,
    name: "서예진",
    email: "yj.seo@najeon.kr",
    photoUrl: "/images/artists/profile-20.jpg",
    workUrl: "/images/artists/work-20.jpg",
    description: "끊음질의 선들이 엮여 만드는 유연한 질감에 집중합니다. 딱딱한 자개에서 부드러움을 발견합니다.",
    strengths: ["끊음질", "자연물"]
  },
  {
    id: 21,
    name: "안재욱",
    email: "jw.ahn@najeon.kr",
    photoUrl: "/images/artists/profile-21.jpg",
    workUrl: "/images/artists/work-21.jpg",
    description: "건축적 공간 구성을 나전 작품에 투영합니다. 다각도에서 관찰되는 빛의 변주를 설계합니다.",
    strengths: ["기하학 패턴", "줄음질"]
  },
  {
    id: 22,
    name: "홍수아",
    email: "sa.hong@najeon.kr",
    photoUrl: "/images/artists/profile-22.jpg",
    workUrl: "/images/artists/work-22.jpg",
    description: "전통 자개 가공 방식을 고수하며 가장 한국적인 정서를 자개 조각 하나하나에 새깁니다.",
    strengths: ["자연물", "끊음질"]
  },
  {
    id: 23,
    name: "문지훈",
    email: "jh.moon@najeon.kr",
    photoUrl: "/images/artists/profile-23.jpg",
    workUrl: "/images/artists/work-23.jpg",
    description: "현대 기술과 전통 나전을 결합하는 실험적인 시도를 지속합니다. 나전의 새로운 정의를 내립니다.",
    strengths: ["금박", "기하학 패턴"]
  },
  {
    id: 24,
    name: "곽민수",
    email: "ms.kwak@najeon.kr",
    photoUrl: "/images/artists/profile-24.jpg",
    workUrl: "/images/artists/work-24.jpg",
    description: "끊음질로 묘사되는 소나무의 기개를 작품의 주제로 삼습니다. 강직한 장인 정신을 투영합니다.",
    strengths: ["끊음질", "자연물"]
  },
  {
    id: 25,
    name: "탁윤아",
    email: "ya.tak@najeon.kr",
    photoUrl: "/images/artists/profile-25.jpg",
    workUrl: "/images/artists/work-25.jpg",
    description: "줄음질 기법을 활용하여 흐르는 물의 파동을 시각화합니다. 정적인 상태 속의 동적 움직임을 포착합니다.",
    strengths: ["줄음질", "자연물"]
  },
  {
    id: 26,
    name: "성준영",
    email: "jy.sung@najeon.kr",
    photoUrl: "/images/artists/profile-26.jpg",
    workUrl: "/images/artists/work-26.jpg",
    description: "나전의 영롱함을 극대화하기 위해 옻칠 층을 수십 번 겹쳐 올리는 인고의 과정을 거칩니다.",
    strengths: ["금박", "끊음질"]
  },
  {
    id: 27,
    name: "차수민",
    email: "sm.cha@najeon.kr",
    photoUrl: "/images/artists/profile-27.jpg",
    workUrl: "/images/artists/work-27.jpg",
    description: "기하학 문양을 통해 우주의 질서를 표현합니다. 자개 조각 하나하나가 별빛이 됩니다.",
    strengths: ["기하학 패턴", "자연물"]
  },
  {
    id: 28,
    name: "진서경",
    email: "sk.jin@najeon.kr",
    photoUrl: "/images/artists/profile-28.jpg",
    workUrl: "/images/artists/work-28.jpg",
    description: "줄음질로 표현된 섬세한 당초문양을 현대 가전 제품에 적용하는 협업을 활발히 진행합니다.",
    strengths: ["줄음질", "금박"]
  },
  {
    id: 29,
    name: "고현준",
    email: "hj.ko@najeon.kr",
    photoUrl: "/images/artists/profile-29.jpg",
    workUrl: "/images/artists/work-29.jpg",
    description: "끊음질의 날카로운 선들을 조화시켜 부드러운 산맥의 이미지를 만듭니다. 상반된 요소의 결합을 연구합니다.",
    strengths: ["끊음질", "기하학 패턴"]
  },
  {
    id: 30,
    name: "도우리",
    email: "uri.do@najeon.kr",
    photoUrl: "/images/artists/profile-30.jpg",
    workUrl: "/images/artists/work-30.jpg",
    description: "어린 시절 보았던 자개장의 추억을 현대적 오브제로 환생시킵니다. 세대를 잇는 맥(脈)을 작업합니다.",
    strengths: ["자연물", "줄음질"]
  }
];

export const notices: Notice[] = [
  {
    id: 1,
    title: "맥(脈) 전시회 오프닝 세레모니 안내",
    date: "2026-01-09",
    content: "전통과 현대가 만나는 역사적인 순간에 여러분을 초대합니다."
  },
  {
    id: 2,
    title: "전시장 내부 사진 촬영 안내",
    date: "2026-01-09",
    content: "플래시 사용 및 삼각대 설치를 제외한 개인용 휴대전화 촬영은 허용됩니다. 단, 상업적 용도의 촬영은 사전 승인이 필요합니다."
  }
];
