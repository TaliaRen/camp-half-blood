import{G as m0,b as E,p as s0,m as n0,o as x0,y as g0,a as r0,B as i0,F as z,a1 as N,a2 as l0,D as w0,d as c0,e as y0,C as M0,a3 as z0,a4 as S0,i as H,M as L,a5 as b0,z as I0,T as P0,R as k0,r as T0,n as C0,g as A0,Q as F0,E as G0}from"./main-afy8riP5.js";import"./index-yL1BmWQa.js";import"./sounds.manifest-Brbudqf4.js";const U0=(l,c,m,h="XYZ")=>new F0().setFromEuler(new G0(l,c,m,h)),S=(l,c=0,m=0,h=0,p=0,x=0,f=0)=>(p&&l.rotateX(p),x&&l.rotateY(x),f&&l.rotateZ(f),l.translate(c,m,h));function h0(l){for(const c of l)c.attributes.aFace||C0(c);return A0(l.every(c=>c.index)?l:l.map(c=>c.index?c.toNonIndexed():c))}const f0=`
vec3 lavaColor(float heat) {
  vec3 c = mix(vec3(0.03, 0.012, 0.008), vec3(1.0, 0.09, 0.01), smoothstep(0.05, 0.35, heat));
  c = mix(c, vec3(1.0, 0.42, 0.04), smoothstep(0.3, 0.65, heat));
  c = mix(c, vec3(1.0, 0.85, 0.45), smoothstep(0.7, 1.1, heat));
  return c * mix(0.5, 7.5, smoothstep(0.08, 0.95, heat));
}`;function H0(l,c){var e0;const{A:m}=l,h=new m0,p=[],x=[],f=8,Y=14,O={baseY:c.y,topY:c.y+Y},b=((e0=l.G)==null?void 0:e0.time)||{value:0},A={value:1},V={calm:0};let F=0;const s=T0(2024),B=[2.55,2.3,2.15,2.15,2.3,2.65,3.1],g=[];for(let e=0;e<7;e++){const o=3+e%2,a=[-f];for(let t=1;t<o;t++)a.push(-f+2*f*t/o+(s()-.5)*1.6);a.push(f);for(let t=0;t<o;t++){const r=a[t]-.1+(t===0?(s()-.3)*.6+e*.05:0),i=a[t+1]+.1-(t===o-1?(s()-.3)*.6+e*.05:0),u=e===0?-.4:e*2-.05,M=e===6?13.2+s()*1.4:(e+1)*2+.05;g.push({x0:r,x1:i,y0:u,y1:M,zf:B[e]+(s()-.5)*.4,zb:-2.5+(s()-.5)*.5+e*.04})}}for(let e=0;e<9;e++){const o=-6.6+s()*13.2,a=1.2+s()*10.5,t=.8+s()*1.3,r=.5+s()*.9,i=Math.min(6,Math.floor(a/2));g.push({x0:o-t/2,x1:o+t/2,y0:a,y1:a+r,zf:B[i]+.35+s()*.25,zb:1.5})}const d=(e,o)=>{let a=-9;for(const t of g)e>=t.x0&&e<=t.x1&&o>=t.y0&&o<=t.y1&&t.zf>a&&(a=t.zf);return a},R=g.map(e=>S(E(e.x1-e.x0,e.y1-e.y0,e.zf-e.zb,4),(e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.zf+e.zb)/2));for(let e=0;e<7;e++){const o=.6+s()*.9,a=-8.6+s()*17.2;R.push(S(E(o*1.3,o,o,3),a,o*.3-.15,s()<.75?2.9+s()*.5:-2.9-s()*.4,(s()-.5)*.4,s()*3,(s()-.5)*.4))}const d0=s0(m,{tex:"rockFace",color:[.84,.78,.72],rough:1,moss:.7,streak:.9,edge:!0},O);h.add(n0(h0(R),d0)),p.push(x0(0,.25,f+.5,3.05));{const e=g0(l,{text:"CAUTION: LAVA — Climb at your own risk",kind:"stake",width:1.2});e.position.set(.3,0,6.6),e.rotation.y=-.3,h.add(e),p.push(r0(.3,6.6,.15))}const G=[{x:-5.3,top:11.4,w:.75},{x:-1.7,top:13,w:.95},{x:2.3,top:9.4,w:.7},{x:5.6,top:12.2,w:.85}],U=[],W=[],I=[],$=[],j=[];G.forEach((e,o)=>{const a=[];for(let n=e.top;n>.05;n-=.25)a.push(n);for(let n=1;n<7;n++)n*2<e.top&&a.push(n*2+.06,n*2-.06);a.push(.05),a.sort((n,v)=>v-n);const t=[];let r=-9,i=0,u=e.top,M=null;for(const n of a){r=Math.max(d(e.x-e.w/2,n),d(e.x,n),d(e.x+e.w/2,n));const v=r+.035;M!==null&&(i+=Math.hypot(u-n,v-M)),t.push({y:n,z:v,d:i}),u=n,M=v}const t0=U.length/3;t.forEach((n,v)=>{const o0=e.w*(.3+.7*Math.min(1,n.d/1.4))*(1+.18*Math.sin(n.d*1.7+o*2.1))*(1+.5*Math.max(0,1-n.y/.8)),a0=e.x+.13*Math.sin(n.d*.8+o*1.3);if(U.push(a0-o0/2,n.y,n.z,a0+o0/2,n.y,n.z),W.push(0,n.d,1,n.d),I.push(o+1,i,o+1,i),v){const w=t0+(v-1)*2;$.push(w,w+2,w+1,w+1,w+2,w+3)}});for(let n=t0*2+1;n<I.length;n+=2)I[n]=i;j.push({x:e.x,z:t[t.length-1].z+.55,seed:o+1}),x.push({pos:[e.x,e.top+.4,t[0].z+.2],opts:{count:9,height:4.5,spread:.45,alpha:.16,life:5}})});const y=new i0;y.setAttribute("position",new z(U,3)),y.setAttribute("uv",new z(W,2)),y.setAttribute("aInfo",new z(I,2)),y.setIndex($);const u0=new N({side:w0,uniforms:{uTime:b,uPower:A},vertexShader:`attribute vec2 aInfo; varying vec2 vUv; varying vec2 vInfo;
      void main() { vUv = uv; vInfo = aInfo; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime, uPower; varying vec2 vUv; varying vec2 vInfo;
      ${l0}
      ${f0}
      void main() {
        float d = vUv.y, x = vUv.x * 2.0 - 1.0, seed = vInfo.x * 7.3;
        float flow = d - uTime * 0.55;                               // the pattern travels towards larger d = downhill
        float n = hcFbm(vec3(x * 1.6 + seed, flow * 0.9, uTime * 0.07));
        float n2 = hcNoise(vec3(x * 4.0 + seed, flow * 2.2 + 3.0, seed));
        float rag = (1.0 - abs(x)) + (n2 - 0.5) * 0.36;               // ragged, cooling rim
        if (rag < 0.07) discard;
        float heat = smoothstep(0.07, 0.72, rag) * (0.42 + 0.78 * n);
        heat *= mix(1.0, 0.72, smoothstep(0.0, vInfo.y, d));          // loses heat on the way down
        heat += 0.55 * (1.0 - smoothstep(0.0, 0.9, d));                       // white-hot where it leaves the crack
        float crust = smoothstep(0.5, 0.68, hcFbm(vec3(x * 2.4 - seed, flow * 1.5 + 9.0, 2.0))) * (1.0 - smoothstep(0.3, 0.95, rag));
        heat *= 1.0 - 0.88 * crust;                                   // rafts of dark crust carried along
        gl_FragColor = vec4(lavaColor(heat) * uPower, 1.0);
      }`}),Q=new c0(y,u0);Q.frustumCulled=!1,h.add(Q);const v0=new N({uniforms:{uTime:b,uPower:A},vertexShader:`varying vec2 vUv; varying float vSeed;
      void main() { vUv = uv; vSeed = modelMatrix[3].x * 0.37 + modelMatrix[3].z * 0.11; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime, uPower; varying vec2 vUv; varying float vSeed;
      ${l0}
      ${f0}
      void main() {
        vec2 p = vUv * 2.0 - 1.0; float rr = length(p);
        float n = hcFbm(vec3(p * 2.2 + vSeed, uTime * 0.16));
        float n2 = hcNoise(vec3(p * 5.0 - vSeed, uTime * 0.3));
        float rag = (1.0 - rr) + (n2 - 0.5) * 0.3;
        if (rag < 0.03) discard;
        float heat = smoothstep(0.03, 0.6, rag) * (0.35 + 0.8 * n);
        heat += 0.5 * (1.0 - smoothstep(0.0, 0.55, length(p - vec2(0.0, 0.55))));     // hottest where the fall lands (wall side)
        float plates = smoothstep(0.48, 0.62, hcFbm(vec3(p * 3.0 + vec2(uTime * 0.05, -uTime * 0.03) + vSeed, 4.0)));
        heat *= 1.0 - 0.85 * plates * smoothstep(0.1, 0.8, rr);
        gl_FragColor = vec4(lavaColor(heat) * uPower, 1.0);
      }`}),Z=[],D=[],X=[],p0=S(new y0(1,28),0,0,0,-Math.PI/2);for(const e of j){const o=new c0(p0,v0);o.position.set(e.x,.07,e.z),o.scale.set(1.35,1,.95),h.add(o);for(let a=0;a<11;a++){const t=a/11*Math.PI*2+s()*.3,r=.28+s()*.3;Math.cos(t)<-.75||Z.push(S(E(r*1.5,r*.7,r,2),e.x+Math.sin(t)*1.4,r*.12,e.z+Math.cos(t)*1,(s()-.5)*.5,t+s(),(s()-.5)*.5))}for(let a=0;a<12;a++)D.push(e.x,.12,e.z-.3),X.push(s(),s(),s());p.push(r0(e.x,e.z,1.25)),x.push({pos:[e.x,.6,e.z],opts:{count:8,height:4,spread:.7,alpha:.12,life:5}})}const P=s0(m,{tex:"rockFace",color:[.2,.17,.16],rough:1,moss:0,streak:0,edge:!0},O);P.emissive=new M0(1,.18,.02),P.emissiveIntensity=.12,h.add(n0(h0(Z),P));const _=new i0;_.setAttribute("position",new z(D,3)),_.setAttribute("aSeed",new z(X,3));const k=new z0(_,new N({transparent:!0,depthWrite:!1,blending:S0,uniforms:{uTime:b},vertexShader:`attribute vec3 aSeed; uniform float uTime; varying float vHeat;
      void main() {
        float life = 0.9 + aSeed.y * 1.4, age = fract(uTime / life + aSeed.x * 7.0);
        float a = aSeed.z * 6.2832;
        vec3 p = position + vec3(cos(a) * age * (0.5 + aSeed.x), sin(age * 3.1416) * (0.5 + aSeed.y * 1.3), 0.25 + sin(a) * age * 0.6);
        vHeat = 1.0 - age;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((26.0 + aSeed.z * 30.0) / max(-mv.z, 0.3), 1.5, 9.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`varying float vHeat; void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(1.0 - d, 0.0), 1.5);
      gl_FragColor = vec4(mix(vec3(1.0, 0.2, 0.02), vec3(1.0, 0.8, 0.35), vHeat) * a * vHeat * 8.0, 1.0); }`}));k.frustumCulled=!1,k.renderOrder=7,k.layers.set(1),h.add(k);const T=[],q=[[.9,.12,.1],[.1,.35,.85],[.95,.75,.08],[.15,.6,.25],[.9,.4,.05],[.6,.2,.7],[.92,.92,.9],[.9,.25,.55]];for(let e=0;e<520&&T.length<330;e++){const o=g[Math.floor(s()*g.length)],a=Math.max(.35,o.y0+.2),t=o.x0+.25+s()*Math.max(0,o.x1-o.x0-.5),r=a+s()*Math.max(0,o.y1-.25-a);if(r>13||d(t,r)>o.zf+.01||d(t,r+.15)>o.zf+.01||d(t,r-.15)>o.zf+.01||G.some(u=>Math.abs(t-u.x)<u.w*.9&&r<u.top+.5))continue;const i=.7+s()*s()*1.3;T.push({p:[t,r,o.zf+.012*i],q:U0(0,0,s()*6.28),s:[i*(.8+s()*.6),i*(.7+s()*.5),i*.6],c:q[Math.floor(s()*q.length)]})}H(h,new b0(.075,0),new L({roughness:.62,flatShading:!0}),T);const J=[],K=[];for(const[e,o]of[[-3.6,[.85,.2,.3]],[.4,[.2,.55,.85]],[4.1,[.9,.8,.2]]]){let a=-9,t=0;for(let r=1;r<15;r+=.25){const i=d(e,r);i>-8&&(a=Math.max(a,i),t=r)}J.push({p:[e,(t+1.1)/2+.1,a+.14],s:[1,t-1.1,1],c:o}),K.push({p:[e,t+.05,a+.1]})}H(h,new I0(.011,.011,1,5),new L({roughness:.9}),J),H(h,S(new P0(.05,.012,5,10),0,0,0,0,Math.PI/2),new L({color:9080210,metalness:1,roughness:.4}),K);const C=new k0(16730644,30,60,1.8);return C.position.set(0,3.6,6.2),h.add(C),{group:h,colliders:p,floors:[],smokes:x,points:{base:[.3,1.85,3.25],foot:[.3,0,3.9]},frontZ:d,strips:G,light:C,topY:Y,holds:T,state:V,update(e,o,a){l.G||(b.value=e);const t=(a==null?void 0:a.night)??0,r=.9+.07*Math.sin(e*.9)+.04*Math.sin(e*2.3+1)+.03*Math.sin(e*7.1);C.intensity=(28+230*t)*r,F+=(V.calm-F)*Math.min(1,(o||.016)*3),A.value=(.85+.3*t)*(.94+.08*Math.sin(e*1.3))*(1-.95*F),P.emissiveIntensity=(.1+.5*t)*r}}}export{H0 as buildClimbingWall};
