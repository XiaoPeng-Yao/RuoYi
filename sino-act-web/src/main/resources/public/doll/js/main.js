let drawCode = getParameter('drawCode');
let cl = getParameter('cl');
let uid = getParameter('uid');
let running = false;
let body;
//ʣ����������
function init(facade){
  $.ajax({
    type:'POST',
    url:contextRootPath+'/integral/active/init.do',
    data: {"drawCode": drawCode, "uid":uid, 'facade':facade},
    dataType:'json',
    success:function(data){
      let code = data.respCode;
      let msg = data.respMsg;
      if (code !== '1') {
        layerTip(msg);
        return;
      }
      let drawType = data.drawType;
      $('.drawType').val(drawType);
      $('.drawRule').html(data.drawRule);
      $('.integral').html(data.integral);
      num(drawType);
      let prizes = data.prizes;
      $.each(prizes, function (i, n) {
        let prizeCode = n.prizeCode;
        let prizeName = n.prizeName;
        let prizeImg = n.prizeImg;
        let prize = $('.prize').clone();
        prize.show();
        prize.removeClass('prize');
        prize.attr('p-code', prizeCode);
        prize.attr('p-name', prizeName);
        prize.attr('src', contextRootPath+prizeImg);
        $('.prizes').append(prize);
      });
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      console.log(textStatus);
      layerTip('�����쳣���������绷��');
    }
  });
}
function initAwards(){
  $.ajax({
    type:'POST',
    url:contextRootPath+'/integral/active/getRollList.do',
    data: {"drawCode": drawCode},
    dataType:'json',
    success:function(data){
      let awards = data.awardPrizeLists;
      if (!awards) {
        return;
      }
      $.each(awards, function (i, n) {
        let userName = n.userName;
        let prizeName = n.prizeName;
        let dateStr = n.dateStr;
        let award = $('.award').clone();
        award.show();
        award.removeClass('award');
        award.html('��ϲ'+userName+'���'+prizeName);
        $('.awards').append(award);
      });
      //�н���������
      $('.my_scroll').myScroll({
        speed: 100, //��ֵԽ���ٶ�Խ��
        rowHeight: 38//li�ĸ߶�
      });
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      console.log(textStatus);
      layerTip('�����쳣���������绷��');
    }
  });
}
function myprizes(facade) {
  $('.myPrizes').html('');
  $('.pop_prize').show();
  $.ajax({
    type: "POST",
    url: contextRootPath+'/integral/active/awardPrizeList.do',
    data: {drawCode: drawCode, facade: facade},
    dataType: "json",
    success: function(data){
      let prizes = data.awardPrizeLists;
      if (!prizes) {
        return;
      }
      $.each(prizes, function (i, n) {
        let ptype = n.prizeType;
        let status = n.status;
        let prizeCode = n.prizeCode;
        let prize = $('.prize_li').clone();
        prize.show();
        prize.removeClass('prize_li');
        prize.find('.pname').html(n.prizeName);
        prize.find('.time').html(n.dateStr);
        let imgSrc = $('img[p-code=' + prizeCode + ']').attr('src');
        prize.find("img").attr('src', imgSrc);
        let link = n.link;
        if (link) {
          prize.on('click', function () {
            location.href = link;
          });
        }
        $(prize).attr('val', prizeCode);
        $(prize).attr('flow', n.gatewayFolw);
        $(prize).attr('ptype', ptype);
        $('.myPrizes').append(prize);
      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('�����쳣', textStatus, errorThrown);
    }
  });

}
function saveAddr(type) {
  let uname = $('.uname').val();
  let idcard = $('.idcard').val();
  let phone = $('.phone').val();
  let city = $('.city').val();
  let addr = $('.addr').val();
  let flow = body.gatewayFolw;
  let prizeType = body.prizeType;
  if ('integral' == prizeType) {
  } else if ('materialObject' == prizeType) {
    if (!uname) {
      layerTip('�������ջ�������');
      return;
    }
    if (!idcard) {
      layerTip('���������֤��');
      return;
    }
    if (!phone) {
      layerTip('��������ϵ�绰');
      return;
    }
    if (!city) {
      layerTip('��ѡ�����ڵ���');
      return;
    }
    if (!addr) {
      layerTip('��������ϸ��ַ');
      return;
    }
  } else {
  }
  uname = getEntryptPwd(uname);
  idcard = getEntryptPwd(idcard);
  phone = getEntryptPwd(phone);
  $.ajax({
    type: "POST",
    url: contextRootPath+'/integral/active/saveUserAddress.do',
    data: {drawCode: drawCode, gatewayFlow:flow, "userName":uname,"phone":phone,"city":city,"address":addr,"type":type,"IDNumber":idcard},
    dataType: "json",
    success: function(data){
      let code = data.code;
      let msg = data.msg;
      if (code != '0') {
        layerTip(msg);
      }
      if ('integral' == prizeType) {
      } else if ('materialObject' == prizeType) {
      } else {
      }
      $('.pop_fillin').hide();
      layerTip('����ɹ�')
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('�����쳣', textStatus, errorThrown);
      layerTip('�����쳣���������绷��');
    }
  });

}
function start() {
  if (running) {
    console.log('running...');
    return;
  }
  running = true;
  $.ajax({
    type:'POST',
    async:false,
    url:contextRootPath+'/integral/active/getReward.do',
    data: {"drawCode": drawCode,"cl":cl},
    dataType:'json',
    success:function(data){
      let code = data.code;
      let msg = data.msg;
      if (code == '1') {
        layerTip(msg);
        to_login(cl);
        running = false;
        return;
      } else if (code == '-1') {
        running = false;
        layerTip('���������ֻ���');
        return;
      }
      if (code != '0') {
        running = false;
        layerTip(msg);
        return;
      }
      body = data.body;
      $(".num").html(body.available);
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      running = false;
      console.log(textStatus);
      layerTip('�����쳣���������绷��');
    }
  });
}
//ʣ����������
function num(drawType){
  // let drawType = $('.drawType').val();
  $.ajax({
    type:'POST',
    url: contextRootPath+'/integral/active/getDrawAvailableNumber.do',
    data: {"drawCode": drawCode,"drawType":drawType},
    dataType:'json',
    success:function(data){
      if(data.code=="0"){
        $(".num").html(data.number);
      }
    },
    error:function(XMLHttpRequest, textStatus, errorThrown){
      console.log(textStatus);
      layerTip('�����쳣���������绷��');
    }
  });
}