const url = 'https://ifbop.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg1');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '내가 만약 신체부위라면 심리 테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: shareTitle,
    description: shareDes,
    imageUrl: shareImage,
    link: {
      mobileWebUrl: shareURL,
      webUrl: shareURL
      },
    },
    buttons: [
    {
      title: '결과확인하기',
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
        },
      },
    ]
  });
}

function twitterShare() {
  var resultImg = document.querySelector('#resultImg1');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '내가 만약 신체부위라면 심리 테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  var sendText = "내가 만약 신체부위라면 심리 테스트 결과"; // 전달할 텍스트
  var sendUrl = url + 'page/result-' + resultAlt + '.html'; // 전달할 URL
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function facebookShare() {
  var resultImg = document.querySelector('#resultImg1');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '내가 만약 신체부위라면 심리 테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  var sendUrl = url + 'page/result-' + resultAlt + '.html'; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
