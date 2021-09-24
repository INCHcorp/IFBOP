function kakaoShare(){
  Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: '신체부위 테스트',
    description: '아메리카노, 빵, 케익',
    imageUrl:
      'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    link: {
      mobileWebUrl: 'https://developers.kakao.com',
      androidExecutionParams: 'test',
    },
  },
  social: {
    likeCount: 10,
    commentCount: 20,
    sharedCount: 30,
  },
  buttons: [
    {
      title: '웹으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
      },
    },
    {
      title: '앱으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
      },
    },
  ]
});
}

function twitterShare() {
  var sendText = "나를 대표하는 신체부위"; // 전달할 텍스트
  var sendUrl = "devpad.tistory.com/"; // 전달할 URL
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function facebookShare() {
  var sendUrl = "https://ifbop.netlify.app/"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
