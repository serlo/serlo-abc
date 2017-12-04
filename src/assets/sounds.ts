import { AssetTypes } from '../../packages/entities';

const sounds: { [id: string]: () => AssetTypes.SoundAsset } = {
  a: () => require('./sounds/a.mp3'),
  a1: () => require('./sounds/a1.mp3'),
  a3: () => require('./sounds/a3.mp3'),
  a4: () => require('./sounds/a4.mp3'),
  ae: () => require('./sounds/ae.mp3'),
  au: () => require('./sounds/au.mp3'),
  b: () => require('./sounds/b.mp3'),
  ba: () => require('./sounds/ba.mp3'),
  bae: () => require('./sounds/bae.mp3'),
  be: () => require('./sounds/be.mp3'),
  bi: () => require('./sounds/bi.mp3'),
  blank: () => require('./sounds/blank.mp3'),
  bo: () => require('./sounds/bo.mp3'),
  boe: () => require('./sounds/boe.mp3'),
  bu: () => require('./sounds/bu.mp3'),
  bue: () => require('./sounds/bue.mp3'),
  by: () => require('./sounds/by.mp3'),
  c: () => require('./sounds/c.mp3'),
  ca: () => require('./sounds/ca.mp3'),
  cae: () => require('./sounds/cae.mp3'),
  ce: () => require('./sounds/ce.mp3'),
  ch: () => require('./sounds/ch.mp3'),
  ch2: () => require('./sounds/ch2.mp3'),
  ci: () => require('./sounds/ci.mp3'),
  click: () => require('./sounds/click.mp3'),
  co: () => require('./sounds/co.mp3'),
  coe: () => require('./sounds/coe.mp3'),
  correct: () => require('./sounds/correct.mp3'),
  cu: () => require('./sounds/cu.mp3'),
  cue: () => require('./sounds/cue.mp3'),
  cy: () => require('./sounds/cy.mp3'),
  d: () => require('./sounds/d.mp3'),
  da: () => require('./sounds/da.mp3'),
  dae: () => require('./sounds/dae.mp3'),
  das: () => require('./sounds/das.mp3'),
  de: () => require('./sounds/de.mp3'),
  der: () => require('./sounds/der.mp3'),
  di: () => require('./sounds/di.mp3'),
  die: () => require('./sounds/die.mp3'),
  do: () => require('./sounds/do.mp3'),
  doe: () => require('./sounds/doe.mp3'),
  du: () => require('./sounds/du.mp3'),
  due: () => require('./sounds/due.mp3'),
  dy: () => require('./sounds/dy.mp3'),
  e: () => require('./sounds/e.mp3'),
  e2: () => require('./sounds/e2.mp3'),
  e3: () => require('./sounds/e3.mp3'),
  e4: () => require('./sounds/e4.mp3'),
  ei: () => require('./sounds/ei.mp3'),
  ein: () => require('./sounds/ein.mp3'),
  eine: () => require('./sounds/eine.mp3'),
  eu: () => require('./sounds/eu.mp3'),
  exercises_bilden_sie_saetze: () =>
    require('./sounds/exercises_bilden_sie_saetze.mp3'),
  exercises_drehen_sie_den_buchstaben_a: () =>
    require('./sounds/exercises_drehen_sie_den_buchstaben_a.mp3'),
  exercises_drehen_sie_den_buchstaben_b: () =>
    require('./sounds/exercises_drehen_sie_den_buchstaben_b.mp3'),
  exercises_ergaenzen_sie_das_fehlende_wort: () =>
    require('./sounds/exercises_ergaenzen_sie_das_fehlende_wort.mp3'),
  exercises_ergaenzen_sie_den_fehlenden_buchstaben: () =>
    require('./sounds/exercises_ergaenzen_sie_den_fehlenden_buchstaben.mp3'),
  exercises_ergaenzen_sie_den_fehlenden_buchstaben_a: () =>
    require('./sounds/exercises_ergaenzen_sie_den_fehlenden_buchstaben_a.mp3'),
  exercises_ergaenzen_sie_den_fehlenden_buchstaben_b: () =>
    require('./sounds/exercises_ergaenzen_sie_den_fehlenden_buchstaben_b.mp3'),
  exercises_ergaenzen_sie_die_fehlenden_buchstaben: () =>
    require('./sounds/exercises_ergaenzen_sie_die_fehlenden_buchstaben.mp3'),
  exercises_ergaenzen_sie_die_fehlenden_buchstaben_a: () =>
    require('./sounds/exercises_ergaenzen_sie_die_fehlenden_buchstaben_a.mp3'),
  exercises_ergaenzen_sie_die_fehlenden_buchstaben_b: () =>
    require('./sounds/exercises_ergaenzen_sie_die_fehlenden_buchstaben_b.mp3'),
  exercises_finden_sie_den_buchstaben: () =>
    require('./sounds/exercises_finden_sie_den_buchstaben.mp3'),
  exercises_finden_sie_den_buchstaben_a: () =>
    require('./sounds/exercises_finden_sie_den_buchstaben_a.mp3'),
  exercises_finden_sie_den_buchstaben_b: () =>
    require('./sounds/exercises_finden_sie_den_buchstaben_b.mp3'),
  exercises_finden_sie_die_buchstaben: () =>
    require('./sounds/exercises_finden_sie_die_buchstaben.mp3'),
  exercises_finden_sie_die_woerter: () =>
    require('./sounds/exercises_finden_sie_die_woerter.mp3'),
  exercises_finden_sie_die_woerter_a: () =>
    require('./sounds/exercises_finden_sie_die_woerter_a.mp3'),
  exercises_finden_sie_die_woerter_b: () =>
    require('./sounds/exercises_finden_sie_die_woerter_b.mp3'),
  exercises_finden_sie_woerter_b: () =>
    require('./sounds/exercises_finden_sie_woerter_b.mp3'),
  exercises_hoeren_sie_den_laut: () =>
    require('./sounds/exercises_hoeren_sie_den_laut.mp3'),
  exercises_hoeren_sie_den_laut_a: () =>
    require('./sounds/exercises_hoeren_sie_den_laut_a.mp3'),
  exercises_hoeren_sie_den_laut_b: () =>
    require('./sounds/exercises_hoeren_sie_den_laut_b.mp3'),
  exercises_hoeren_sie_die_silbe: () =>
    require('./sounds/exercises_hoeren_sie_die_silbe.mp3'),
  exercises_hoeren_sie_die_woerter: () =>
    require('./sounds/exercises_hoeren_sie_die_woerter.mp3'),
  exercises_hoeren_sie_die_woerter_a: () =>
    require('./sounds/exercises_hoeren_sie_die_woerter_a.mp3'),
  exercises_hoeren_sie_die_woerter_b: () =>
    require('./sounds/exercises_hoeren_sie_die_woerter_b.mp3'),
  exercises_markieren_sie_alle: () =>
    require('./sounds/exercises_markieren_sie_alle.mp3'),
  exercises_markieren_sie_alle_a_a: () =>
    require('./sounds/exercises_markieren_sie_alle_a_a.mp3'),
  exercises_markieren_sie_alle_a_b: () =>
    require('./sounds/exercises_markieren_sie_alle_a_b.mp3'),
  exercises_markieren_sie_alle_b_a: () =>
    require('./sounds/exercises_markieren_sie_alle_b_a.mp3'),
  exercises_markieren_sie_alle_b_b: () =>
    require('./sounds/exercises_markieren_sie_alle_b_b.mp3'),
  exercises_markieren_sie_alle_e_a: () =>
    require('./sounds/exercises_markieren_sie_alle_e_a.mp3'),
  exercises_markieren_sie_alle_e_b: () =>
    require('./sounds/exercises_markieren_sie_alle_e_b.mp3'),
  exercises_markieren_sie_alle_h_a: () =>
    require('./sounds/exercises_markieren_sie_alle_h_a.mp3'),
  exercises_markieren_sie_alle_h_b: () =>
    require('./sounds/exercises_markieren_sie_alle_h_b.mp3'),
  exercises_markieren_sie_alle_i_a: () =>
    require('./sounds/exercises_markieren_sie_alle_i_a.mp3'),
  exercises_markieren_sie_alle_i_b: () =>
    require('./sounds/exercises_markieren_sie_alle_i_b.mp3'),
  exercises_markieren_sie_alle_l_a: () =>
    require('./sounds/exercises_markieren_sie_alle_l_a.mp3'),
  exercises_markieren_sie_alle_l_b: () =>
    require('./sounds/exercises_markieren_sie_alle_l_b.mp3'),
  exercises_markieren_sie_alle_m_a: () =>
    require('./sounds/exercises_markieren_sie_alle_m_a.mp3'),
  exercises_markieren_sie_alle_m_b: () =>
    require('./sounds/exercises_markieren_sie_alle_m_b.mp3'),
  exercises_markieren_sie_alle_n_a: () =>
    require('./sounds/exercises_markieren_sie_alle_n_a.mp3'),
  exercises_markieren_sie_alle_n_b: () =>
    require('./sounds/exercises_markieren_sie_alle_n_b.mp3'),
  exercises_markieren_sie_alle_o_a: () =>
    require('./sounds/exercises_markieren_sie_alle_o_a.mp3'),
  exercises_markieren_sie_alle_o_b: () =>
    require('./sounds/exercises_markieren_sie_alle_o_b.mp3'),
  exercises_markieren_sie_alle_r_a: () =>
    require('./sounds/exercises_markieren_sie_alle_r_a.mp3'),
  exercises_markieren_sie_alle_r_b: () =>
    require('./sounds/exercises_markieren_sie_alle_r_b.mp3'),
  exercises_markieren_sie_alle_s_a: () =>
    require('./sounds/exercises_markieren_sie_alle_s_a.mp3'),
  exercises_markieren_sie_alle_s_b: () =>
    require('./sounds/exercises_markieren_sie_alle_s_b.mp3'),
  exercises_markieren_sie_alle_s_voiced_a: () =>
    require('./sounds/exercises_markieren_sie_alle_s_voiced_a.mp3'),
  exercises_markieren_sie_alle_s_voiced_b: () =>
    require('./sounds/exercises_markieren_sie_alle_s_voiced_b.mp3'),
  exercises_markieren_sie_alle_t_a: () =>
    require('./sounds/exercises_markieren_sie_alle_t_a.mp3'),
  exercises_markieren_sie_alle_t_b: () =>
    require('./sounds/exercises_markieren_sie_alle_t_b.mp3'),
  exercises_markieren_sie_das_richtige_bild: () =>
    require('./sounds/exercises_markieren_sie_das_richtige_bild.mp3'),
  exercises_markieren_sie_das_richtige_bild_a: () =>
    require('./sounds/exercises_markieren_sie_das_richtige_bild_a.mp3'),
  exercises_markieren_sie_das_richtige_bild_b: () =>
    require('./sounds/exercises_markieren_sie_das_richtige_bild_b.mp3'),
  exercises_markieren_sie_die_silbe: () =>
    require('./sounds/exercises_markieren_sie_die_silbe.mp3'),
  exercises_ordnen_sie_die_buchstaben_a: () =>
    require('./sounds/exercises_ordnen_sie_die_buchstaben_a.mp3'),
  exercises_ordnen_sie_die_buchstaben_b: () =>
    require('./sounds/exercises_ordnen_sie_die_buchstaben_b.mp3'),
  exercises_schreiben_sie_das_wort_a: () =>
    require('./sounds/exercises_schreiben_sie_das_wort_a.mp3'),
  exercises_schreiben_sie_das_wort_b: () =>
    require('./sounds/exercises_schreiben_sie_das_wort_b.mp3'),
  exercises_schreiben_sie_den_buchstaben: () =>
    require('./sounds/exercises_schreiben_sie_den_buchstaben.mp3'),
  exercises_schreiben_sie_den_buchstaben_a: () =>
    require('./sounds/exercises_schreiben_sie_den_buchstaben_a.mp3'),
  exercises_schreiben_sie_den_buchstaben_b: () =>
    require('./sounds/exercises_schreiben_sie_den_buchstaben_b.mp3'),
  exercises_schreiben_sie_die_silbe_a: () =>
    require('./sounds/exercises_schreiben_sie_die_silbe_a.mp3'),
  exercises_schreiben_sie_die_silbe_b: () =>
    require('./sounds/exercises_schreiben_sie_die_silbe_b.mp3'),
  exercises_schreiben_sie_die_woerter: () =>
    require('./sounds/exercises_schreiben_sie_die_woerter.mp3'),
  exercises_verbinden_sie_die_silben_a: () =>
    require('./sounds/exercises_verbinden_sie_die_silben_a.mp3'),
  exercises_verbinden_sie_die_silben_b: () =>
    require('./sounds/exercises_verbinden_sie_die_silben_b.mp3'),
  exercises_was_hoeren_sie_a: () =>
    require('./sounds/exercises_was_hoeren_sie_a.mp3'),
  exercises_was_hoeren_sie_b: () =>
    require('./sounds/exercises_was_hoeren_sie_b.mp3'),
  exercises_welche_buchstaben_sind_falsch_a: () =>
    require('./sounds/exercises_welche_buchstaben_sind_falsch_a.mp3'),
  exercises_welche_buchstaben_sind_falsch_b: () =>
    require('./sounds/exercises_welche_buchstaben_sind_falsch_b.mp3'),
  exercises_welche_buchstaben_sind_gedreht_a: () =>
    require('./sounds/exercises_welche_buchstaben_sind_gedreht_a.mp3'),
  exercises_welche_buchstaben_sind_gedreht_b: () =>
    require('./sounds/exercises_welche_buchstaben_sind_gedreht_b.mp3'),
  exercises_welche_silbe_hoeren_sie_a: () =>
    require('./sounds/exercises_welche_silbe_hoeren_sie_a.mp3'),
  exercises_welche_silbe_hoeren_sie_b: () =>
    require('./sounds/exercises_welche_silbe_hoeren_sie_b.mp3'),
  exercises_welcher_buchstabe_ist_falsch_a: () =>
    require('./sounds/exercises_welcher_buchstabe_ist_falsch_a.mp3'),
  exercises_welcher_buchstabe_ist_falsch_b: () =>
    require('./sounds/exercises_welcher_buchstabe_ist_falsch_b.mp3'),
  exercises_welcher_buchstabe_ist_gedreht_a: () =>
    require('./sounds/exercises_welcher_buchstabe_ist_gedreht_a.mp3'),
  exercises_welcher_buchstabe_ist_gedreht_b: () =>
    require('./sounds/exercises_welcher_buchstabe_ist_gedreht_b.mp3'),
  exercises_wiederholen_sie_das_wort_a: () =>
    require('./sounds/exercises_wiederholen_sie_das_wort_a.mp3'),
  exercises_wiederholen_sie_das_wort_b: () =>
    require('./sounds/exercises_wiederholen_sie_das_wort_b.mp3'),
  exercises_wiederholen_sie_den_buchstaben_a: () =>
    require('./sounds/exercises_wiederholen_sie_den_buchstaben_a.mp3'),
  exercises_wiederholen_sie_den_buchstaben_b: () =>
    require('./sounds/exercises_wiederholen_sie_den_buchstaben_b.mp3'),
  exercises_wiederholen_sie_den_satz_a: () =>
    require('./sounds/exercises_wiederholen_sie_den_satz_a.mp3'),
  exercises_wiederholen_sie_den_satz_b: () =>
    require('./sounds/exercises_wiederholen_sie_den_satz_b.mp3'),
  exercises_wiederholen_sie_die_saetze_a: () =>
    require('./sounds/exercises_wiederholen_sie_die_saetze_a.mp3'),
  exercises_wiederholen_sie_die_saetze_b: () =>
    require('./sounds/exercises_wiederholen_sie_die_saetze_b.mp3'),
  exercises_wiederholen_sie_die_silbe_a: () =>
    require('./sounds/exercises_wiederholen_sie_die_silbe_a.mp3'),
  exercises_wiederholen_sie_die_silbe_b: () =>
    require('./sounds/exercises_wiederholen_sie_die_silbe_b.mp3'),
  exercises_wo_hoeren_sie_den_laut_a: () =>
    require('./sounds/exercises_wo_hoeren_sie_den_laut_a.mp3'),
  exercises_wo_hoeren_sie_den_laut_b: () =>
    require('./sounds/exercises_wo_hoeren_sie_den_laut_b.mp3'),
  f: () => require('./sounds/f.mp3'),
  fa: () => require('./sounds/fa.mp3'),
  fae: () => require('./sounds/fae.mp3'),
  fe: () => require('./sounds/fe.mp3'),
  fi: () => require('./sounds/fi.mp3'),
  flop: () => require('./sounds/flop.mp3'),
  fo: () => require('./sounds/fo.mp3'),
  foe: () => require('./sounds/foe.mp3'),
  fu: () => require('./sounds/fu.mp3'),
  fue: () => require('./sounds/fue.mp3'),
  fy: () => require('./sounds/fy.mp3'),
  g: () => require('./sounds/g.mp3'),
  ga: () => require('./sounds/ga.mp3'),
  gae: () => require('./sounds/gae.mp3'),
  ge: () => require('./sounds/ge.mp3'),
  gi: () => require('./sounds/gi.mp3'),
  go: () => require('./sounds/go.mp3'),
  goe: () => require('./sounds/goe.mp3'),
  gu: () => require('./sounds/gu.mp3'),
  gue: () => require('./sounds/gue.mp3'),
  guten_abend: () => require('./sounds/guten_abend.mp3'),
  guten_morgen: () => require('./sounds/guten_morgen.mp3'),
  guten_tag: () => require('./sounds/guten_tag.mp3'),
  gy: () => require('./sounds/gy.mp3'),
  h: () => require('./sounds/h.mp3'),
  ha: () => require('./sounds/ha.mp3'),
  hae: () => require('./sounds/hae.mp3'),
  hallo: () => require('./sounds/hallo.mp3'),
  he: () => require('./sounds/he.mp3'),
  hi: () => require('./sounds/hi.mp3'),
  ho: () => require('./sounds/ho.mp3'),
  hoe: () => require('./sounds/hoe.mp3'),
  hu: () => require('./sounds/hu.mp3'),
  hue: () => require('./sounds/hue.mp3'),
  hy: () => require('./sounds/hy.mp3'),
  i: () => require('./sounds/i.mp3'),
  i2: () => require('./sounds/i2.mp3'),
  ich_bin_anna: () => require('./sounds/ich_bin_anna.mp3'),
  ich_bin_nena: () => require('./sounds/ich_bin_nena.mp3'),
  j: () => require('./sounds/j.mp3'),
  ja: () => require('./sounds/ja.mp3'),
  jae: () => require('./sounds/jae.mp3'),
  je: () => require('./sounds/je.mp3'),
  ji: () => require('./sounds/ji.mp3'),
  jo: () => require('./sounds/jo.mp3'),
  joe: () => require('./sounds/joe.mp3'),
  ju: () => require('./sounds/ju.mp3'),
  jue: () => require('./sounds/jue.mp3'),
  jy: () => require('./sounds/jy.mp3'),
  k: () => require('./sounds/k.mp3'),
  ka: () => require('./sounds/ka.mp3'),
  kae: () => require('./sounds/kae.mp3'),
  ke: () => require('./sounds/ke.mp3'),
  ki: () => require('./sounds/ki.mp3'),
  ko: () => require('./sounds/ko.mp3'),
  koe: () => require('./sounds/koe.mp3'),
  ku: () => require('./sounds/ku.mp3'),
  kue: () => require('./sounds/kue.mp3'),
  ky: () => require('./sounds/ky.mp3'),
  l: () => require('./sounds/l.mp3'),
  la: () => require('./sounds/la.mp3'),
  lae: () => require('./sounds/lae.mp3'),
  le: () => require('./sounds/le.mp3'),
  li: () => require('./sounds/li.mp3'),
  lo: () => require('./sounds/lo.mp3'),
  loe: () => require('./sounds/loe.mp3'),
  lu: () => require('./sounds/lu.mp3'),
  lue: () => require('./sounds/lue.mp3'),
  ly: () => require('./sounds/ly.mp3'),
  m: () => require('./sounds/m.mp3'),
  ma: () => require('./sounds/ma.mp3'),
  mae: () => require('./sounds/mae.mp3'),
  me: () => require('./sounds/me.mp3'),
  mi: () => require('./sounds/mi.mp3'),
  mo: () => require('./sounds/mo.mp3'),
  moe: () => require('./sounds/moe.mp3'),
  mu: () => require('./sounds/mu.mp3'),
  mue: () => require('./sounds/mue.mp3'),
  my: () => require('./sounds/my.mp3'),
  n: () => require('./sounds/n.mp3'),
  na: () => require('./sounds/na.mp3'),
  nae: () => require('./sounds/nae.mp3'),
  ne: () => require('./sounds/ne.mp3'),
  ng: () => require('./sounds/ng.mp3'),
  ni: () => require('./sounds/ni.mp3'),
  no: () => require('./sounds/no.mp3'),
  noe: () => require('./sounds/noe.mp3'),
  nu: () => require('./sounds/nu.mp3'),
  nue: () => require('./sounds/nue.mp3'),
  ny: () => require('./sounds/ny.mp3'),
  o: () => require('./sounds/o.mp3'),
  o1: () => require('./sounds/o1.mp3'),
  oe: () => require('./sounds/oe.mp3'),
  oe1: () => require('./sounds/oe1.mp3'),
  oe2: () => require('./sounds/oe2.mp3'),
  p: () => require('./sounds/p.mp3'),
  pa: () => require('./sounds/pa.mp3'),
  pae: () => require('./sounds/pae.mp3'),
  pe: () => require('./sounds/pe.mp3'),
  pi: () => require('./sounds/pi.mp3'),
  po: () => require('./sounds/po.mp3'),
  poe: () => require('./sounds/poe.mp3'),
  pu: () => require('./sounds/pu.mp3'),
  pue: () => require('./sounds/pue.mp3'),
  py: () => require('./sounds/py.mp3'),
  q: () => require('./sounds/q.mp3'),
  qua: () => require('./sounds/qua.mp3'),
  quae: () => require('./sounds/quae.mp3'),
  que: () => require('./sounds/que.mp3'),
  qui: () => require('./sounds/qui.mp3'),
  quo: () => require('./sounds/quo.mp3'),
  quoe: () => require('./sounds/quoe.mp3'),
  quu: () => require('./sounds/quu.mp3'),
  quue: () => require('./sounds/quue.mp3'),
  quy: () => require('./sounds/quy.mp3'),
  r: () => require('./sounds/r.mp3'),
  r2: () => require('./sounds/r2.mp3'),
  ra: () => require('./sounds/ra.mp3'),
  rae: () => require('./sounds/rae.mp3'),
  re: () => require('./sounds/re.mp3'),
  repeat: () => require('./sounds/repeat.mp3'),
  ri: () => require('./sounds/ri.mp3'),
  ro: () => require('./sounds/ro.mp3'),
  roe: () => require('./sounds/roe.mp3'),
  ru: () => require('./sounds/ru.mp3'),
  rue: () => require('./sounds/rue.mp3'),
  ry: () => require('./sounds/ry.mp3'),
  s: () => require('./sounds/s.mp3'),
  s2: () => require('./sounds/s2.mp3'),
  s_voiced: () => require('./sounds/s_voiced.mp3'),
  s_voiceless: () => require('./sounds/s_voiceless.mp3'),
  sa: () => require('./sounds/sa.mp3'),
  sae: () => require('./sounds/sae.mp3'),
  sch: () => require('./sounds/sch.mp3'),
  se: () => require('./sounds/se.mp3'),
  si: () => require('./sounds/si.mp3'),
  so: () => require('./sounds/so.mp3'),
  soe: () => require('./sounds/soe.mp3'),
  su: () => require('./sounds/su.mp3'),
  sue: () => require('./sounds/sue.mp3'),
  sy: () => require('./sounds/sy.mp3'),
  sz: () => require('./sounds/sz.mp3'),
  sza: () => require('./sounds/sza.mp3'),
  szae: () => require('./sounds/szae.mp3'),
  sze: () => require('./sounds/sze.mp3'),
  szi: () => require('./sounds/szi.mp3'),
  szo: () => require('./sounds/szo.mp3'),
  szoe: () => require('./sounds/szoe.mp3'),
  szu: () => require('./sounds/szu.mp3'),
  szue: () => require('./sounds/szue.mp3'),
  szy: () => require('./sounds/szy.mp3'),
  t: () => require('./sounds/t.mp3'),
  t1: () => require('./sounds/t1.mp3'),
  ta: () => require('./sounds/ta.mp3'),
  tae: () => require('./sounds/tae.mp3'),
  te: () => require('./sounds/te.mp3'),
  ti: () => require('./sounds/ti.mp3'),
  to: () => require('./sounds/to.mp3'),
  toe: () => require('./sounds/toe.mp3'),
  top: () => require('./sounds/top.mp3'),
  tu: () => require('./sounds/tu.mp3'),
  tue: () => require('./sounds/tue.mp3'),
  ty: () => require('./sounds/ty.mp3'),
  u: () => require('./sounds/u.mp3'),
  u2: () => require('./sounds/u2.mp3'),
  ue: () => require('./sounds/ue.mp3'),
  ue2: () => require('./sounds/ue2.mp3'),
  v: () => require('./sounds/v.mp3'),
  va: () => require('./sounds/va.mp3'),
  vae: () => require('./sounds/vae.mp3'),
  ve: () => require('./sounds/ve.mp3'),
  vi: () => require('./sounds/vi.mp3'),
  vo: () => require('./sounds/vo.mp3'),
  voe: () => require('./sounds/voe.mp3'),
  vu: () => require('./sounds/vu.mp3'),
  vue: () => require('./sounds/vue.mp3'),
  vy: () => require('./sounds/vy.mp3'),
  w: () => require('./sounds/w.mp3'),
  wa: () => require('./sounds/wa.mp3'),
  wae: () => require('./sounds/wae.mp3'),
  we: () => require('./sounds/we.mp3'),
  wi: () => require('./sounds/wi.mp3'),
  wo: () => require('./sounds/wo.mp3'),
  woe: () => require('./sounds/woe.mp3'),
  wrong: () => require('./sounds/wrong.mp3'),
  wu: () => require('./sounds/wu.mp3'),
  wue: () => require('./sounds/wue.mp3'),
  wy: () => require('./sounds/wy.mp3'),
  x: () => require('./sounds/x.mp3'),
  xa: () => require('./sounds/xa.mp3'),
  xae: () => require('./sounds/xae.mp3'),
  xe: () => require('./sounds/xe.mp3'),
  xi: () => require('./sounds/xi.mp3'),
  xo: () => require('./sounds/xo.mp3'),
  xoe: () => require('./sounds/xoe.mp3'),
  xu: () => require('./sounds/xu.mp3'),
  xue: () => require('./sounds/xue.mp3'),
  xy: () => require('./sounds/xy.mp3'),
  y: () => require('./sounds/y.mp3'),
  z: () => require('./sounds/z.mp3'),
  za: () => require('./sounds/za.mp3'),
  zae: () => require('./sounds/zae.mp3'),
  ze: () => require('./sounds/ze.mp3'),
  zi: () => require('./sounds/zi.mp3'),
  zo: () => require('./sounds/zo.mp3'),
  zoe: () => require('./sounds/zoe.mp3'),
  zu: () => require('./sounds/zu.mp3'),
  zue: () => require('./sounds/zue.mp3'),
  zy: () => require('./sounds/zy.mp3')
};

export default sounds;
