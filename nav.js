const qs = document.querySelector.bind(document);

const menuParts = {
  crcSm: qs(".crc-sm"),
  crcBg: qs(".crc-bg"),
  crcArc: qs(".crc-arc"),
  crcSd: qs(".crc-sd"),

  brgr: qs(".burger"),
  brgrTop: qs(".brgr-top"),
  brgrMid: qs(".brgr-mid"),
  brgrBot: qs(".brgr-bot"),

  linkDrbl: qs(".link-drbl"),
  linkCdpn: qs(".link-cdpn"),
  linkTwtr: qs(".link-twtr"),

  colBg: "#21264b" };


(() => {
  TweenMax.set(menuParts.crcArc, {
    transformOrigin: "50% 50%",
    x: 120,
    y: 120,
    visibility: "visible" });

  TweenMax.set([
  menuParts.crcBg, menuParts.crcSm, menuParts.crcArc, menuParts.crcSd,
  menuParts.brgrTop, menuParts.brgrMid, menuParts.brgrBot],
  { transformOrigin: "50% 50%" });
  //TweenMax.globalTimeScale(0.5);
})();

const menuOn = (onComplete, tl = new TimelineMax()) => {
  const brgrShft = 10;
  const brgrRt = 12;
  tl.
  to(menuParts.crcBg, 1.2, {
    scale: 2.5,
    ease: Elastic.easeOut.config(1.2, 0.5) },
  0).
  to(menuParts.crcSm, 0.8, {
    scale: 1.3,
    ease: Elastic.easeOut.config(5, 1) },
  0.1).
  to(menuParts.crcSd, 0.8, {
    scale: 1.3,
    ease: Elastic.easeOut.config(5, 1) },
  0.1).
  to(menuParts.crcSm, 0.6, {
    ease: Power4.easeOut,
    fill: menuParts.colBg },
  0.1).
  to(menuParts.brgr, 0.3, {
    x: -brgrShft,
    y: -brgrShft },
  0.2).
  to(menuParts.brgrTop, 0.2, {
    y: brgrRt },
  0.1).
  to(menuParts.brgrBot, 0.2, {
    y: -brgrRt },
  0.1).
  to(menuParts.brgrTop, 0.4, {
    rotation: 45,
    stroke: "#fff" },
  0.1).
  to(menuParts.brgrMid, 0.4, {
    rotation: 45,
    stroke: "rgba(255,255,255,0)" },
  0.1).
  to(menuParts.brgrBot, 0.4, {
    rotation: -45,
    stroke: "#fff" },
  0.1).
  to(menuParts.crcArc, 0.4, {
    x: 0,
    y: 0,
    ease: Power3.easeOut },
  0.2).
  to(menuParts.crcArc, 0.3, {
    strokeDasharray: "85, 275",
    strokeDashoffset: "-186" },
  0.6).
  to(menuParts.linkCdpn, 0.25, {
    x: -190,
    y: -40,
    ease: Power1.easeOut },
  "-=0.75").
  to(menuParts.linkDrbl, 0.25, {
    x: -138,
    y: -138,
    ease: Power1.easeOut },
  "-=0.65").
  to(menuParts.linkTwtr, 0.25, {
    x: -40,
    y: -190,
    ease: Power1.easeOut },
  "-=0.55").
  set(menuParts.brgrBot, { onComplete }).
  pause();
  return tl;
};

const menuOff = (onComplete, tl = new TimelineMax()) => {
  tl.
  to(menuParts.linkTwtr, 0.25, {
    x: 0,
    y: 0,
    ease: Power2.easeIn }).

  to(menuParts.linkDrbl, 0.25, {
    x: 0,
    y: 0,
    ease: Power2.easeIn },
  "-=0.1").
  to(menuParts.linkCdpn, 0.25, {
    x: 0,
    y: 0,
    ease: Power2.easeIn },
  "-=0.1").
  to(menuParts.crcBg, 0.55, {
    scale: 1,
    ease: Back.easeIn.config(3) },
  0.05).
  to(menuParts.crcSm, 0.45, {
    fill: "#fff",
    ease: Power4.easeIn },
  0.15).
  to(menuParts.crcSm, 0.45, {
    scale: 1,
    ease: Back.easeIn.config(3) },
  0.15).
  to(menuParts.crcSd, 0.45, {
    scale: 1,
    ease: Back.easeIn.config(3) },
  0.15).
  to(menuParts.crcArc, 0.4, {
    strokeDasharray: "0, 359",
    strokeDashoffset: "-240" },
  0.1).
  set(menuParts.crcArc, {
    strokeDasharray: "10, 350",
    strokeDashoffset: "-230",
    x: 120,
    y: 120 },
  0.51).
  to(menuParts.brgr, 0.4, {
    x: 0,
    y: 0,
    ease: Power1.easeIn },
  0.2).
  to(menuParts.brgrTop, 0.3, {
    rotation: 0,
    stroke: menuParts.colBg,
    ease: Power1.easeIn },
  0.2).
  to(menuParts.brgrMid, 0.3, {
    rotation: 0,
    stroke: menuParts.colBg,
    ease: Power1.easeIn },
  0.2).
  to(menuParts.brgrBot, 0.3, {
    rotation: 0,
    stroke: menuParts.colBg,
    ease: Power1.easeIn },
  0.2).
  to(menuParts.brgrTop, 0.1, {
    y: 0 },
  0.5).
  to(menuParts.brgrBot, 0.1, {
    y: 0 },
  0.5).
  set(menuParts.brgrBot, { onComplete }).
  pause();
  return tl;
};

const toggle = () => {
  let on = false;
  let time = true;
  const onComplete = () => {time = true;};
  const tlOff = menuOff(onComplete);
  const tlOn = menuOn(onComplete);

  return function (e) {
    if (time) {
      time = false;
      on ? tlOff.play(0) : tlOn.play(0);
      on = !on;
    }
  };
};

menuParts.crcSm.addEventListener("click", toggle());