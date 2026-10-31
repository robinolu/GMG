(()=>{var t0=Object.defineProperty;var n0=(i,e)=>{for(var t in e)t0(i,t,{get:e[t],enumerable:!0})};var ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i0=0,If=1,s0=2;var dd=1,Ao=2,yi=3,An=0,qt=1,rn=2;var _t=0,si=1,Ca=2,Lf=3,Df=4,ch=5,Fn=100,r0=101,o0=102,Nf=103,Ff=104,_r=200,a0=201,l0=202,c0=203,vu=204,_u=205,al=206,u0=207,ll=208,h0=209,f0=210,d0=211,p0=212,m0=213,g0=214,x0=0,v0=1,_0=2,Pa=3,y0=4,b0=5,M0=6,S0=7,pd=0,T0=1,w0=2,ri=0,uh=1,hh=2,fh=3,Wi=4,E0=5,dh=6;var md=300,cr=301,ur=302,gs=303,yu=304,cl=306,Lt=1e3,It=1001,bu=1002,Ze=1003,Uf=1004;var Oc=1005;var Mt=1006,A0=1007;var xo=1008,gd=1008,gn=1009,ul=1010,ph=1011,Ro=1012,yr=1013,mn=1014,ct=1015,At=1016,xd=1017,vd=1018,Si=1020,R0=1021,tt=1023,C0=1024,P0=1025,ps=1026,Oi=1027,Xi=1028,hl=1029,Co=1030,br=1031,Mr=1033,Bc=33776,zc=33777,kc=33778,Hc=33779,Of=35840,Bf=35841,zf=35842,kf=35843,_d=36196,Hf=37492,Vf=37496,Gf=37808,Wf=37809,Xf=37810,qf=37811,Yf=37812,$f=37813,Zf=37814,jf=37815,Jf=37816,Kf=37817,Qf=37818,e2=37819,t2=37820,n2=37821,Vc=36492,i2=36494,s2=36495,I0=36283,r2=36284,o2=36285,a2=36286;var Ia=2300,La=2301,Gc=2302,l2=2400,c2=2401,u2=2402;var yd=3e3,ms=3001,L0=3200,D0=3201,mh=0,N0=1,Un="",Vt="srgb",Ti="srgb-linear",gh="display-p3",fl="display-p3-linear",Da="linear",bt="srgb",Na="rec709",Fa="p3";var Hs=7680;var h2=519,F0=512,U0=513,O0=514,bd=515,B0=516,z0=517,k0=518,H0=519,f2=35044;var d2="300 es",Mu=1035,Mi=2e3,Ua=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],p2=1234567,co=Math.PI/180,vo=180/Math.PI;function As(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function V0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function G0(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function W0(i,e,t,n){return uo(i,e,1-Math.exp(-t*n))}function X0(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function q0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Z0(i,e){return i+Math.random()*(e-i)}function j0(i){return i*(.5-Math.random())}function J0(i){i!==void 0&&(p2=i);let e=p2+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(i){return i*co}function Q0(i){return i*vo}function Su(i){return(i&i-1)===0&&i!==0}function ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),c=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*c,a*u);break;case"YZY":i.set(l*c,a*h,l*f,a*u);break;case"ZXZ":i.set(l*f,l*c,a*h,a*u);break;case"XZX":i.set(a*h,l*g,l*d,a*u);break;case"YXY":i.set(l*d,a*h,l*g,a*u);break;case"ZYZ":i.set(l*g,l*d,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var zt={DEG2RAD:co,RAD2DEG:vo,generateUUID:As,clamp:Bt,euclideanModulo:xh,mapLinear:V0,inverseLerp:G0,lerp:uo,damp:W0,pingpong:X0,smoothstep:q0,smootherstep:Y0,randInt:$0,randFloat:Z0,randFloatSpread:j0,seededRandom:J0,degToRad:K0,radToDeg:Q0,isPowerOfTwo:Su,ceilPowerOfTwo:ep,floorPowerOfTwo:Oa,setQuaternionFromProperEuler:tp,normalize:fn,denormalize:ir},Q=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class i{constructor(e,t,n,s,r,o,a,l,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u)}set(e,t,n,s,r,o,a,l,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],f=n[7],c=n[2],d=n[5],g=n[8],x=s[0],p=s[3],m=s[6],_=s[1],v=s[4],y=s[7],T=s[2],S=s[5],w=s[8];return r[0]=o*x+a*_+l*T,r[3]=o*p+a*v+l*S,r[6]=o*m+a*y+l*w,r[1]=u*x+h*_+f*T,r[4]=u*p+h*v+f*S,r[7]=u*m+h*y+f*w,r[2]=c*x+d*_+g*T,r[5]=c*p+d*v+g*S,r[8]=c*m+d*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+s*r*u-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=h*o-a*u,c=a*l-h*r,d=u*r-o*l,g=t*f+n*c+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*u-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=c*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-u*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new rt;function Md(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function np(){let i=Ba("canvas");return i.style.display="block",i}var m2={};function ho(i){i in m2||(m2[i]=!0,console.warn(i))}var g2=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),x2=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[Ti]:{transfer:Da,primaries:Na,toReference:i=>i,fromReference:i=>i},[Vt]:{transfer:bt,primaries:Na,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fl]:{transfer:Da,primaries:Fa,toReference:i=>i.applyMatrix3(x2),fromReference:i=>i.applyMatrix3(g2)},[gh]:{transfer:bt,primaries:Fa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(x2),fromReference:i=>i.applyMatrix3(g2).convertLinearToSRGB()}},ip=new Set([Ti,fl]),vt={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ip.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ta[e].toReference,s=ta[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ta[i].primaries},getTransfer:function(i){return i===Un?Da:ta[i].transfer}};function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,za=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=Ba("canvas")),Vs.width=e.width,Vs.height=e.height;let n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ar(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sp=0,hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=As(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qc(s[o].image)):r.push(qc(s[o]))}else r=qc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rp=0,Rn=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=It,s=It,r=Mt,o=xo,a=tt,l=gn,u=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=As(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ms?Vt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lt:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lt:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?ms:yd}set encoding(e){ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ms?Vt:Un}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=md;Rn.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,u=l[0],h=l[4],f=l[8],c=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-c)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+c)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(u+1)/2,y=(d+1)/2,T=(m+1)/2,S=(h+c)/4,w=(f+x)/4,D=(g+p)/4;return v>y&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=w/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=D/r),this.set(n,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(c-h)*(c-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-x)/_,this.z=(c-h)/_,this.w=Math.acos((u+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ms?Vt:Un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new hr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rt=class extends Tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xs=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ka=class extends Rt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new xs(null,e,t,n),this.texture.isRenderTargetTexture=!0}},wu=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],c=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=c,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==c||u!==d||h!==g){let p=1-a,m=l*c+u*d+h*g+f*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let T=Math.sqrt(v),S=Math.atan2(T,m*_);p=Math.sin(p*S)/T,a=Math.sin(a*S)/T}let y=a*_;if(l=l*p+c*y,u=u*p+d*y,h=h*p+g*y,f=f*p+x*y,p===1-a){let T=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=T,u*=T,h*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o],c=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*d-u*c,e[t+1]=l*g+h*c+u*f-a*d,e[t+2]=u*g+h*d+a*c-l*f,e[t+3]=h*g-a*f-l*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(s/2),f=a(r/2),c=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=c*h*f+u*d*g,this._y=u*d*f-c*h*g,this._z=u*h*g+c*d*f,this._w=u*h*f-c*d*g;break;case"YXZ":this._x=c*h*f+u*d*g,this._y=u*d*f-c*h*g,this._z=u*h*g-c*d*f,this._w=u*h*f+c*d*g;break;case"ZXY":this._x=c*h*f-u*d*g,this._y=u*d*f+c*h*g,this._z=u*h*g+c*d*f,this._w=u*h*f-c*d*g;break;case"ZYX":this._x=c*h*f-u*d*g,this._y=u*d*f+c*h*g,this._z=u*h*g-c*d*f,this._w=u*h*f+c*d*g;break;case"YZX":this._x=c*h*f+u*d*g,this._y=u*d*f+c*h*g,this._z=u*h*g-c*d*f,this._w=u*h*f-c*d*g;break;case"XZY":this._x=c*h*f-u*d*g,this._y=u*d*f-c*h*g,this._z=u*h*g+c*d*f,this._w=u*h*f+c*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],f=t[10],c=n+a+f;if(c>0){let d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-u)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+u)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-u)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+u)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-r*l,this._y=s*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-s*a,this._w=o*h-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let u=Math.sqrt(l),h=Math.atan2(u,a),f=Math.sin((1-t)*h)/u,c=Math.sin(t*h)/u;return this._w=o*f+this._w*c,this._x=n*f+this._x*c,this._y=s*f+this._y*c,this._z=r*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(v2.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(v2.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*u+o*f-a*h,this.y=n+l*h+a*u-r*f,this.z=s+l*f+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new A,v2=new un,gt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),ia.subVectors(this.max,so),Gs.subVectors(e.a,so),Ws.subVectors(e.b,so),Xs.subVectors(e.c,so),Li.subVectors(Ws,Gs),Di.subVectors(Xs,Ws),ls.subVectors(Gs,Xs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ls.z,ls.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ls.z,0,-ls.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ls.y,ls.x,0];return!$c(t,Gs,Ws,Xs,ia)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,Gs,Ws,Xs,ia))?!1:(sa.crossVectors(Li,Di),t=[sa.x,sa.y,sa.z],$c(t,Gs,Ws,Xs,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mi=[new A,new A,new A,new A,new A,new A,new A,new A],Wn=new A,na=new gt,Gs=new A,Ws=new A,Xs=new A,Li=new A,Di=new A,ls=new A,so=new A,ia=new A,sa=new A,cs=new A;function $c(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),u=t.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}var op=new gt,ro=new A,Zc=new A,Bi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):op.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Zc)),this.expandByPoint(ro.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new A,jc=new A,ra=new A,Ni=new A,Jc=new A,oa=new A,Kc=new A,wi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jc.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(jc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ra),a=Ni.dot(this.direction),l=-Ni.dot(ra),u=Ni.lengthSq(),h=Math.abs(1-o*o),f,c,d,g;if(h>0)if(f=o*l-a,c=o*a-l,g=r*h,f>=0)if(c>=-g)if(c<=g){let x=1/h;f*=x,c*=x,d=f*(f+o*c+2*a)+c*(o*f+c+2*l)+u}else c=r,f=Math.max(0,-(o*c+a)),d=-f*f+c*(c+2*l)+u;else c=-r,f=Math.max(0,-(o*c+a)),d=-f*f+c*(c+2*l)+u;else c<=-g?(f=Math.max(0,-(-o*r+a)),c=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+c*(c+2*l)+u):c<=g?(f=0,c=Math.min(Math.max(-r,-l),r),d=c*(c+2*l)+u):(f=Math.max(0,-(o*r+a)),c=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+c*(c+2*l)+u);else c=o>0?-r:r,f=Math.max(0,-(o*c+a)),d=-f*f+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(jc).addScaledVector(ra,c),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,s=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,s=(e.min.x-c.x)*u),h>=0?(r=(e.min.y-c.y)*h,o=(e.max.y-c.y)*h):(r=(e.max.y-c.y)*h,o=(e.min.y-c.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-c.z)*f,l=(e.max.z-c.z)*f):(a=(e.max.z-c.z)*f,l=(e.min.z-c.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){Jc.subVectors(t,e),oa.subVectors(n,e),Kc.crossVectors(Jc,oa);let o=this.direction.dot(Kc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);let l=a*this.direction.dot(oa.crossVectors(Ni,oa));if(l<0)return null;let u=a*this.direction.dot(Jc.cross(Ni));if(u<0||l+u>o)return null;let h=-a*Ni.dot(Kc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class i{constructor(e,t,n,s,r,o,a,l,u,h,f,c,d,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u,h,f,c,d,g,x,p)}set(e,t,n,s,r,o,a,l,u,h,f,c,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=h,m[10]=f,m[14]=c,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let c=o*h,d=o*f,g=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=d+g*u,t[5]=c-x*u,t[9]=-a*l,t[2]=x-c*u,t[6]=g+d*u,t[10]=o*l}else if(e.order==="YXZ"){let c=l*h,d=l*f,g=u*h,x=u*f;t[0]=c+x*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+c*a,t[10]=o*l}else if(e.order==="ZXY"){let c=l*h,d=l*f,g=u*h,x=u*f;t[0]=c-x*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-c*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let c=o*h,d=o*f,g=a*h,x=a*f;t[0]=l*h,t[4]=g*u-d,t[8]=c*u+x,t[1]=l*f,t[5]=x*u+c,t[9]=d*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let c=o*l,d=o*u,g=a*l,x=a*u;t[0]=l*h,t[4]=x-c*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=d*f+g,t[10]=c-x*f}else if(e.order==="XZY"){let c=o*l,d=o*u,g=a*l,x=a*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=c*f+x,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=x*f+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ap,e,lp)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Fi.crossVectors(n,Tn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Fi.crossVectors(n,Tn)),Fi.normalize(),aa.crossVectors(Tn,Fi),s[0]=Fi.x,s[4]=aa.x,s[8]=Tn.x,s[1]=Fi.y,s[5]=aa.y,s[9]=Tn.y,s[2]=Fi.z,s[6]=aa.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],f=n[5],c=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],v=n[7],y=n[11],T=n[15],S=s[0],w=s[4],D=s[8],b=s[12],M=s[1],L=s[5],N=s[9],k=s[13],I=s[2],O=s[6],G=s[10],J=s[14],K=s[3],q=s[7],ie=s[11],re=s[15];return r[0]=o*S+a*M+l*I+u*K,r[4]=o*w+a*L+l*O+u*q,r[8]=o*D+a*N+l*G+u*ie,r[12]=o*b+a*k+l*J+u*re,r[1]=h*S+f*M+c*I+d*K,r[5]=h*w+f*L+c*O+d*q,r[9]=h*D+f*N+c*G+d*ie,r[13]=h*b+f*k+c*J+d*re,r[2]=g*S+x*M+p*I+m*K,r[6]=g*w+x*L+p*O+m*q,r[10]=g*D+x*N+p*G+m*ie,r[14]=g*b+x*k+p*J+m*re,r[3]=_*S+v*M+y*I+T*K,r[7]=_*w+v*L+y*O+T*q,r[11]=_*D+v*N+y*G+T*ie,r[15]=_*b+v*k+y*J+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],f=e[6],c=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*f-s*u*f-r*a*c+n*u*c+s*a*d-n*l*d)+x*(+t*l*d-t*u*c+r*o*c-s*o*d+s*u*h-r*l*h)+p*(+t*u*f-t*a*d-r*o*f+n*o*d+r*a*h-n*u*h)+m*(-s*a*h-t*l*f+t*a*c+s*o*f-n*o*c+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=e[9],c=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],_=f*p*u-x*c*u+x*l*d-a*p*d-f*l*m+a*c*m,v=g*c*u-h*p*u-g*l*d+o*p*d+h*l*m-o*c*m,y=h*x*u-g*f*u+g*a*d-o*x*d-h*a*m+o*f*m,T=g*f*l-h*x*l-g*a*c+o*x*c+h*a*p-o*f*p,S=t*_+n*v+s*y+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=_*w,e[1]=(x*c*r-f*p*r-x*s*d+n*p*d+f*s*m-n*c*m)*w,e[2]=(a*p*r-x*l*r+x*s*u-n*p*u-a*s*m+n*l*m)*w,e[3]=(f*l*r-a*c*r-f*s*u+n*c*u+a*s*d-n*l*d)*w,e[4]=v*w,e[5]=(h*p*r-g*c*r+g*s*d-t*p*d-h*s*m+t*c*m)*w,e[6]=(g*l*r-o*p*r-g*s*u+t*p*u+o*s*m-t*l*m)*w,e[7]=(o*c*r-h*l*r+h*s*u-t*c*u-o*s*d+t*l*d)*w,e[8]=y*w,e[9]=(g*f*r-h*x*r-g*n*d+t*x*d+h*n*m-t*f*m)*w,e[10]=(o*x*r-g*a*r+g*n*u-t*x*u-o*n*m+t*a*m)*w,e[11]=(h*a*r-o*f*r-h*n*u+t*f*u+o*n*d-t*a*d)*w,e[12]=T*w,e[13]=(h*x*s-g*f*s+g*n*c-t*x*c-h*n*p+t*f*p)*w,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*p-t*a*p)*w,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*c+t*a*c)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,h*a+n,h*l-s*o,0,u*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,f=a+a,c=r*u,d=r*h,g=r*f,x=o*h,p=o*f,m=a*f,_=l*u,v=l*h,y=l*f,T=n.x,S=n.y,w=n.z;return s[0]=(1-(x+m))*T,s[1]=(d+y)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(d-y)*S,s[5]=(1-(c+m))*S,s[6]=(p+_)*S,s[7]=0,s[8]=(g+v)*w,s[9]=(p-_)*w,s[10]=(1-(c+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let u=1/r,h=1/o,f=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Mi){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),c=(n+s)/(n-s),d,g;if(a===Mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ua)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Mi){let l=this.elements,u=1/(t-e),h=1/(n-s),f=1/(o-r),c=(t+e)*u,d=(n+s)*h,g,x;if(a===Mi)g=(o+r)*f,x=-2*f;else if(a===Ua)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qs=new A,Xn=new Fe,ap=new A(0,0,0),lp=new A(1,1,1),Fi=new A,aa=new A,Tn=new A,_2=new Fe,y2=new un,vs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],h=s[9],f=s[2],c=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_2,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return y2.setFromEuler(this),this.setFromQuaternion(y2,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vs.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cp=0,b2=new A,Ys=new un,xi=new Fe,la=new A,oo=new A,up=new A,hp=new un,M2=new A(1,0,0),S2=new A(0,1,0),T2=new A(0,0,1),fp={type:"added"},dp={type:"removed"},tn=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new vs,n=new un,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new rt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(M2,e)}rotateY(e){return this.rotateOnAxis(S2,e)}rotateZ(e){return this.rotateOnAxis(T2,e)}translateOnAxis(e,t){return b2.copy(e).applyQuaternion(this.quaternion),this.position.add(b2.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(M2,e)}translateY(e){return this.translateOnAxis(S2,e)}translateZ(e){return this.translateOnAxis(T2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(oo,la,this.up):xi.lookAt(la,oo,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(xi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),c=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let u in a){let h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new A(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new A,vi=new A,Qc=new A,_i=new A,$s=new A,Zs=new A,w2=new A,eu=new A,tu=new A,nu=new A,ca=!1,En=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),vi.subVectors(n,t),Qc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(vi),l=qn.dot(Qc),u=vi.dot(vi),h=vi.dot(Qc),f=o*u-a*a;if(f===0)return r.set(0,0,0),null;let c=1/f,d=(u*l-a*h)*c,g=(o*h-a*l)*c;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,n,s,r,o,a,l){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),vi.subVectors(e,t),qn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),qn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Zs.subVectors(r,n),eu.subVectors(e,n);let l=$s.dot(eu),u=Zs.dot(eu);if(l<=0&&u<=0)return t.copy(n);tu.subVectors(e,s);let h=$s.dot(tu),f=Zs.dot(tu);if(h>=0&&f<=h)return t.copy(s);let c=l*f-h*u;if(c<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector($s,o);nu.subVectors(e,r);let d=$s.dot(nu),g=Zs.dot(nu);if(g>=0&&d<=g)return t.copy(r);let x=d*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector(Zs,a);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return w2.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(w2,a);let m=1/(p+x+c);return o=x*m,a=c*m,t.copy(n).addScaledVector($s,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ua={h:0,s:0,l:0};function iu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=xh(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=iu(o,r,e+1/3),this.g=iu(o,r,e),this.b=iu(o,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Xc(e.r),this.g=Xc(e.g),this.b=Xc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return vt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Bt(cn.r*255,0,255))*65536+Math.round(Bt(cn.g*255,0,255))*256+Math.round(Bt(cn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,u,h=(a+o)/2;if(a===o)l=0,u=0;else{let f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Vt){vt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(ua);let n=uo(Ui.h,ua.h,t),s=uo(Ui.s,ua.s,t),r=uo(Ui.l,ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Ve;Ve.NAMES=Sd;var pp=0,ai=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=As(),this.name="",this.type="Material",this.blending=si,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=_u,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h2&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},On=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bi=mp();function mp(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[l]=u|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function gp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Bt(i,-65504,65504),bi.floatView[0]=i;let e=bi.uint32View[0],t=e>>23&511;return bi.baseTable[t]+((e&8388607)>>bi.shiftTable[t])}function xp(i){let e=i>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[e]+(i&1023)]+bi.exponentTable[e],bi.floatView[0]}var kn={toHalfFloat:gp,fromHalfFloat:xp},Xt=new A,ha=new Q,ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=f2,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ct,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==f2&&(e.usage=this.usage),e}};var Ha=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}};var vp=0,Nn=new Fe,su=new tn,js=new A,wn=new gt,ao=new gt,en=new A,at=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?Va:Ha)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(wn.min,ao.min),wn.expandByPoint(en),en.addVectors(wn.max,ao.max),wn.expandByPoint(en)):(wn.expandByPoint(ao.min),wn.expandByPoint(ao.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)en.fromBufferAttribute(a,u),l&&(js.fromBufferAttribute(e,u),en.add(js)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,u=[],h=[];for(let M=0;M<a;M++)u[M]=new A,h[M]=new A;let f=new A,c=new A,d=new A,g=new Q,x=new Q,p=new Q,m=new A,_=new A;function v(M,L,N){f.fromArray(s,M*3),c.fromArray(s,L*3),d.fromArray(s,N*3),g.fromArray(o,M*2),x.fromArray(o,L*2),p.fromArray(o,N*2),c.sub(f),d.sub(f),x.sub(g),p.sub(g);let k=1/(x.x*p.y-p.x*x.y);isFinite(k)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(d,-x.y).multiplyScalar(k),_.copy(d).multiplyScalar(x.x).addScaledVector(c,-p.x).multiplyScalar(k),u[M].add(m),u[L].add(m),u[N].add(m),h[M].add(_),h[L].add(_),h[N].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let M=0,L=y.length;M<L;++M){let N=y[M],k=N.start,I=N.count;for(let O=k,G=k+I;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}let T=new A,S=new A,w=new A,D=new A;function b(M){w.fromArray(r,M*3),D.copy(w);let L=u[M];T.copy(L),T.sub(w.multiplyScalar(w.dot(L))).normalize(),S.crossVectors(D,L);let k=S.dot(h[M])<0?-1:1;l[M*4]=T.x,l[M*4+1]=T.y,l[M*4+2]=T.z,l[M*4+3]=k}for(let M=0,L=y.length;M<L;++M){let N=y[M],k=N.start,I=N.count;for(let O=k,G=k+I;O<G;O+=3)b(n[O+0]),b(n[O+1]),b(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,u=new A,h=new A,f=new A;if(e)for(let c=0,d=e.count;c<d;c+=3){let g=e.getX(c+0),x=e.getX(c+1),p=e.getX(c+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,p),a.add(h),l.add(h),u.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let c=0,d=t.count;c<d;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(c+0,h.x,h.y,h.z),n.setXYZ(c+1,h.x,h.y,h.z),n.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let u=a.array,h=a.itemSize,f=a.normalized,c=new u.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)c[g++]=u[d++]}return new ut(c,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],u=e(l,n);t.setAttribute(a,u)}let r=this.morphAttributes;for(let a in r){let l=[],u=r[a];for(let h=0,f=u.length;h<f;h++){let c=u[h],d=e(c,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let f=0,c=u.length;f<c;f++){let d=u[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let c=0,d=f.length;c<d;c++)h.push(f[c].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},E2=new Fe,us=new wi,fa=new Bi,A2=new A,Js=new A,Ks=new A,Qs=new A,ru=new A,da=new A,pa=new Q,ma=new Q,ga=new Q,R2=new A,C2=new A,P2=new A,xa=new A,va=new A,Ke=class extends tn{constructor(e=new at,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let h=a[l],f=r[l];h!==0&&(ru.fromBufferAttribute(f,e),o?da.addScaledVector(ru,h):da.addScaledVector(ru.sub(t),h))}t.add(da)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(fa.containsPoint(us.origin)===!1&&(us.intersectSphere(fa,A2)===null||us.origin.distanceToSquared(A2)>(e.far-e.near)**2))&&(E2.copy(r).invert(),us.copy(e.ray).applyMatrix4(E2),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,c=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=c.length;g<x;g++){let p=c[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,T=v;y<T;y+=3){let S=a.getX(y),w=a.getX(y+1),D=a.getX(y+2);s=_a(this,m,e,n,u,h,f,S,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=_a(this,o,e,n,u,h,f,_,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=c.length;g<x;g++){let p=c[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=_,T=v;y<T;y+=3){let S=y,w=y+1,D=y+2;s=_a(this,m,e,n,u,h,f,S,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=p,v=p+1,y=p+2;s=_a(this,o,e,n,u,h,f,_,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function _p(i,e,t,n,s,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===An,a),l===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(va);return u<t.near||u>t.far?null:{distance:u,point:va.clone(),object:i}}function _a(i,e,t,n,s,r,o,a,l,u){i.getVertexPosition(a,Js),i.getVertexPosition(l,Ks),i.getVertexPosition(u,Qs);let h=_p(i,e,t,n,Js,Ks,Qs,xa);if(h){s&&(pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),ga.fromBufferAttribute(s,u),h.uv=En.getInterpolation(xa,Js,Ks,Qs,pa,ma,ga,new Q)),r&&(pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),ga.fromBufferAttribute(r,u),h.uv1=En.getInterpolation(xa,Js,Ks,Qs,pa,ma,ga,new Q),h.uv2=h.uv1),o&&(R2.fromBufferAttribute(o,a),C2.fromBufferAttribute(o,l),P2.fromBufferAttribute(o,u),h.normal=En.getInterpolation(xa,Js,Ks,Qs,R2,C2,P2,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c:u,normal:new A,materialIndex:0};En.getNormal(Js,Ks,Qs,f.normal),h.face=f}return h}var $t=class i extends at{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],u=[],h=[],f=[],c=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(f,2));function g(x,p,m,_,v,y,T,S,w,D,b){let M=y/w,L=T/D,N=y/2,k=T/2,I=S/2,O=w+1,G=D+1,J=0,K=0,q=new A;for(let ie=0;ie<G;ie++){let re=ie*L-k;for(let _e=0;_e<O;_e++){let j=_e*M-N;q[x]=j*_,q[p]=re*v,q[m]=I,u.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[m]=S>0?1:-1,h.push(q.x,q.y,q.z),f.push(_e/w),f.push(1-ie/D),J+=1}}for(let ie=0;ie<D;ie++)for(let re=0;re<w;re++){let _e=c+re+O*ie,j=c+re+O*(ie+1),le=c+(re+1)+O*(ie+1),be=c+(re+1)+O*ie;l.push(_e,j,be),l.push(j,le,be),K+=6}a.addGroup(d,K,b),d+=K,c+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let s in n)e[s]=n[s]}return e}function yp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Td(i){return i.getRenderTarget()===null?i.outputColorSpace:vt.workingColorSpace}var Zn={clone:fr,merge:dn},bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ga=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dt=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},er=-90,tr=1,Eu=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new Dt(er,tr,e,t);r.layers=this.layers,this.add(r);let o=new Dt(er,tr,e,t);o.layers=this.layers,this.add(o);let a=new Dt(er,tr,e,t);a.layers=this.layers,this.add(a);let l=new Dt(er,tr,e,t);l.layers=this.layers,this.add(l);let u=new Dt(er,tr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let u of t)this.remove(u);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,u,h]=this.children,f=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,c,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wa=class extends Rn{constructor(e,t,n,s,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,s,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Au=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ms?Vt:Un),this.texture=new Wa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:_t});r.uniforms.tEquirect.value=t;let o=new Ke(s,r),a=t.minFilter;return t.minFilter===xo&&(t.minFilter=Mt),new Eu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ou=new A,Sp=new A,Tp=new rt,pn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ou.subVectors(n,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ou),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tp.getNormalMatrix(e),s=this.coplanarPoint(ou).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Bi,ya=new A,yo=class{constructor(e=new pn,t=new pn,n=new pn,s=new pn,r=new pn,o=new pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],h=s[5],f=s[6],c=s[7],d=s[8],g=s[9],x=s[10],p=s[11],m=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,c-u,p-d,y-m).normalize(),n[1].setComponents(l+r,c+u,p+d,y+m).normalize(),n[2].setComponents(l+o,c+h,p+g,y+_).normalize(),n[3].setComponents(l-o,c-h,p-g,y-_).normalize(),n[4].setComponents(l-a,c-f,p-x,y-v).normalize(),t===Mi)n[5].setComponents(l+a,c+f,p+x,y+v).normalize();else if(t===Ua)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(u,h){let f=u.array,c=u.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,c),u.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function r(u,h,f){let c=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(f,u),d.count===-1&&g.length===0&&i.bufferSubData(f,0,c),g.length!==0){for(let x=0,p=g.length;x<p;x++){let m=g[x];t?i.bufferSubData(f,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count):i.bufferSubData(f,m.start*c.BYTES_PER_ELEMENT,c.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):i.bufferSubData(f,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);let h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){let c=n.get(u);(!c||c.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);let f=n.get(u);if(f===void 0)n.set(u,s(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,u,h),f.version=u.version}}return{get:o,remove:a,update:l}}var Yn=class i extends at{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,h=l+1,f=e/a,c=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*c-o;for(let v=0;v<u;v++){let y=v*f-r;g.push(y,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let v=_+u*m,y=_+u*(m+1),T=_+1+u*(m+1),S=_+1+u*m;d.push(v,y,S),d.push(y,T,S)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,l3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,D3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Ep,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Np,batching_vertex:Fp,begin_vertex:Up,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:$p,common:Zp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:_m,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:um,fog_fragment:hm,fog_pars_fragment:fm,gradientmap_pars_fragment:dm,lightmap_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:ym,lights_toon_pars_fragment:bm,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:Tm,lights_physical_pars_fragment:wm,lights_fragment_begin:Em,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Um,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Km,opaque_fragment:Qm,packing:e3,premultiplied_alpha_fragment:t3,project_vertex:n3,dithering_fragment:i3,dithering_pars_fragment:s3,roughnessmap_fragment:r3,roughnessmap_pars_fragment:o3,shadowmap_pars_fragment:a3,shadowmap_pars_vertex:l3,shadowmap_vertex:c3,shadowmask_pars_fragment:u3,skinbase_vertex:h3,skinning_pars_vertex:f3,skinning_vertex:d3,skinnormal_vertex:p3,specularmap_fragment:m3,specularmap_pars_fragment:g3,tonemapping_fragment:x3,tonemapping_pars_fragment:v3,transmission_fragment:_3,transmission_pars_fragment:y3,uv_pars_fragment:b3,uv_pars_vertex:M3,uv_vertex:S3,worldpos_vertex:T3,background_vert:w3,background_frag:E3,backgroundCube_vert:A3,backgroundCube_frag:R3,cube_vert:C3,cube_frag:P3,depth_vert:I3,depth_frag:L3,distanceRGBA_vert:D3,distanceRGBA_frag:N3,equirect_vert:F3,equirect_frag:U3,linedashed_vert:O3,linedashed_frag:B3,meshbasic_vert:z3,meshbasic_frag:k3,meshlambert_vert:H3,meshlambert_frag:V3,meshmatcap_vert:G3,meshmatcap_frag:W3,meshnormal_vert:X3,meshnormal_frag:q3,meshphong_vert:Y3,meshphong_frag:$3,meshphysical_vert:Z3,meshphysical_frag:j3,meshtoon_vert:J3,meshtoon_frag:K3,points_vert:Q3,points_frag:e5,shadow_vert:t5,shadow_frag:n5,sprite_vert:i5,sprite_frag:s5},Se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ii={basic:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:dn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:dn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:dn([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:dn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:dn([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:dn([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:dn([Se.common,Se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:dn([Se.lights,Se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ba={r:0,b:0,g:0};function r5(i,e,t,n,s,r,o){let a=new Ve(0),l=r===!0?0:1,u,h,f=null,c=0,d=null;function g(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cl)?(h===void 0&&(h=new Ke(new $t(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:fr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=vt.getTransfer(v.colorSpace)!==bt,(f!==v||c!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,c=v.version,d=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ke(new Yn(2,2),new St({name:"BackgroundMaterial",uniforms:fr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=vt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||c!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,c=v.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,m){p.getRGB(ba,Td(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function o5(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),u=l,h=!1;function f(I,O,G,J,K){let q=!1;if(o){let ie=x(J,G,O);u!==ie&&(u=ie,d(u.object)),q=m(I,J,G,K),q&&_(I,J,G,K)}else{let ie=O.wireframe===!0;(u.geometry!==J.id||u.program!==G.id||u.wireframe!==ie)&&(u.geometry=J.id,u.program=G.id,u.wireframe=ie,q=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(I,O,G,J),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,O,G){let J=G.wireframe===!0,K=a[I.id];K===void 0&&(K={},a[I.id]=K);let q=K[O.id];q===void 0&&(q={},K[O.id]=q);let ie=q[J];return ie===void 0&&(ie=p(c()),q[J]=ie),ie}function p(I){let O=[],G=[],J=[];for(let K=0;K<s;K++)O[K]=0,G[K]=0,J[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:J,object:I,attributes:{},index:null}}function m(I,O,G,J){let K=u.attributes,q=O.attributes,ie=0,re=G.getAttributes();for(let _e in re)if(re[_e].location>=0){let le=K[_e],be=q[_e];if(be===void 0&&(_e==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),_e==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),le===void 0||le.attribute!==be||be&&le.data!==be.data)return!0;ie++}return u.attributesNum!==ie||u.index!==J}function _(I,O,G,J){let K={},q=O.attributes,ie=0,re=G.getAttributes();for(let _e in re)if(re[_e].location>=0){let le=q[_e];le===void 0&&(_e==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),_e==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));let be={};be.attribute=le,le&&le.data&&(be.data=le.data),K[_e]=be,ie++}u.attributes=K,u.attributesNum=ie,u.index=J}function v(){let I=u.newAttributes;for(let O=0,G=I.length;O<G;O++)I[O]=0}function y(I){T(I,0)}function T(I,O){let G=u.newAttributes,J=u.enabledAttributes,K=u.attributeDivisors;G[I]=1,J[I]===0&&(i.enableVertexAttribArray(I),J[I]=1),K[I]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),K[I]=O)}function S(){let I=u.newAttributes,O=u.enabledAttributes;for(let G=0,J=O.length;G<J;G++)O[G]!==I[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function w(I,O,G,J,K,q,ie){ie===!0?i.vertexAttribIPointer(I,O,G,K,q):i.vertexAttribPointer(I,O,G,J,K,q)}function D(I,O,G,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let K=J.attributes,q=G.getAttributes(),ie=O.defaultAttributeValues;for(let re in q){let _e=q[re];if(_e.location>=0){let j=K[re];if(j===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let le=j.normalized,be=j.itemSize,Ie=t.get(j);if(Ie===void 0)continue;let Te=Ie.buffer,ke=Ie.type,Ge=Ie.bytesPerElement,Re=n.isWebGL2===!0&&(ke===i.INT||ke===i.UNSIGNED_INT||j.gpuType===yr);if(j.isInterleavedBufferAttribute){let qe=j.data,U=qe.stride,ge=j.offset;if(qe.isInstancedInterleavedBuffer){for(let te=0;te<_e.locationSize;te++)T(_e.location+te,qe.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let te=0;te<_e.locationSize;te++)y(_e.location+te);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let te=0;te<_e.locationSize;te++)w(_e.location+te,be/_e.locationSize,ke,le,U*Ge,(ge+be/_e.locationSize*te)*Ge,Re)}else{if(j.isInstancedBufferAttribute){for(let qe=0;qe<_e.locationSize;qe++)T(_e.location+qe,j.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let qe=0;qe<_e.locationSize;qe++)y(_e.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let qe=0;qe<_e.locationSize;qe++)w(_e.location+qe,be/_e.locationSize,ke,le,be*Ge,be/_e.locationSize*qe*Ge,Re)}}else if(ie!==void 0){let le=ie[re];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(_e.location,le);break;case 3:i.vertexAttrib3fv(_e.location,le);break;case 4:i.vertexAttrib4fv(_e.location,le);break;default:i.vertexAttrib1fv(_e.location,le)}}}}S()}function b(){N();for(let I in a){let O=a[I];for(let G in O){let J=O[G];for(let K in J)g(J[K].object),delete J[K];delete O[G]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;let O=a[I.id];for(let G in O){let J=O[G];for(let K in J)g(J[K].object),delete J[K];delete O[G]}delete a[I.id]}function L(I){for(let O in a){let G=a[O];if(G[I.id]===void 0)continue;let J=G[I.id];for(let K in J)g(J[K].object),delete J[K];delete G[I.id]}}function N(){k(),h=!0,u!==l&&(u=l,d(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:k,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:y,disableUnusedAttributes:S}}function a5(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,c){if(c===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,f,c),t.update(f,r,c)}function u(h,f,c){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c;g++)this.render(h[g],f[g]);else{d.multiDrawArraysWEBGL(r,h,0,f,0,c);let g=0;for(let x=0;x<c;x++)g+=f[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function l5(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),c=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=c>0,y=o||e.has("OES_texture_float"),T=v&&y,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:S}}function c5(i){let e=this,t=null,n=0,s=!1,r=!1,o=new pn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){let d=f.length!==0||c||n!==0||s;return s=c,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){t=h(f,c,0)},this.setState=function(f,c,d){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):u();else{let _=r?0:n,v=_*4,y=m.clippingState||null;l.value=y,y=h(g,c,v,d);for(let T=0;T!==v;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,c,d,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,_=c.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function u5(i){let e=new WeakMap;function t(o,a){return a===gs?o.mapping=cr:a===yu&&(o.mapping=ur),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gs||a===yu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new Au(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var dr=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sr=4,I2=[.125,.215,.35,.446,.526,.582],ds=20,au=new dr,L2=new Ve,lu=null,cu=0,uu=0,fs=(1+Math.sqrt(5))/2,nr=1/fs,D2=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,fs,nr),new A(0,fs,-nr),new A(nr,0,fs),new A(-nr,0,fs),new A(fs,nr,0),new A(-fs,nr,0)],zi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:At,format:tt,colorSpace:Ti,depthBuffer:!1},s=N2(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N2(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h5(r)),this._blurMaterial=f5(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,au)}_sceneToCubeUV(e,t,n,s){let a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,c=h.toneMapping;h.getClearColor(L2),h.toneMapping=ri,h.autoClear=!1;let d=new On({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new Ke(new $t,d),x=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,x=!0):(d.color.copy(L2),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));let v=this._cubeSize;Ma(s,_*v,m>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=c,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cr||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=U2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F2());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,au)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=D2[(s-1)%D2.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ke(this._lodPlanes[s],u),c=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):ds;p>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ds}`);let m=[],_=0;for(let w=0;w<ds;++w){let D=w/x,b=Math.exp(-D*D/2);m.push(b),w===0?_+=b:w<p&&(_+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/_;c.envMap.value=e.texture,c.samples.value=p,c.weights.value=m,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);let{_lodMax:v}=this;c.dTheta.value=g,c.mipInt.value=v-n;let y=this._sizeLods[s],T=3*y*(s>v-sr?s-v+sr:0),S=4*(this._cubeSize-y);Ma(t,T,S,3*y,2*y),l.setRenderTarget(t),l.render(f,au)}};function h5(i){let e=[],t=[],n=[],s=i,r=i-sr+1+I2.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-sr?l=I2[o-i+sr-1]:o===0&&(l=0),n.push(l);let u=1/(a-2),h=-u,f=1+u,c=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*d),v=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,D=S>2?0:-1,b=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(b,x*g*S),v.set(c,p*g*S);let M=[S,S,S,S,S,S];y.set(M,m*g*S)}let T=new at;T.setAttribute("position",new ut(_,x)),T.setAttribute("uv",new ut(v,p)),T.setAttribute("faceIndex",new ut(y,m)),e.push(T),s>sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function N2(i,e,t){let n=new Rt(i,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function f5(i,e,t){let n=new Float32Array(ds),s=new A(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_t,depthTest:!1,depthWrite:!1})}function F2(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_t,depthTest:!1,depthWrite:!1})}function U2(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_t,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d5(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,u=l===gs||l===yu,h=l===cr||l===ur;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new zi(i)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(u&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new zi(i));let c=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",r),c.texture}else return null}}}return a}function s(a){let l=0,u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function r(a){let l=a.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function p5(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m5(i,e,t,n){let s={},r=new WeakMap;function o(f){let c=f.target;c.index!==null&&e.remove(c.index);for(let g in c.attributes)e.remove(c.attributes[g]);for(let g in c.morphAttributes){let x=c.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}c.removeEventListener("dispose",o),delete s[c.id];let d=r.get(c);d&&(e.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(f,c){return s[c.id]===!0||(c.addEventListener("dispose",o),s[c.id]=!0,t.memory.geometries++),c}function l(f){let c=f.attributes;for(let g in c)e.update(c[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function u(f){let c=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){let T=_[v+0],S=_[v+1],w=_[v+2];c.push(T,S,S,w,w,T)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let T=v+0,S=v+1,w=v+2;c.push(T,S,S,w,w,T)}}else return;let p=new(Md(c)?Va:Ha)(c,1);p.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){let c=r.get(f);if(c){let d=f.index;d!==null&&c.version<d.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function g5(i,e,t,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*l),t.update(g,r,1)}function f(d,g,x){if(x===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,d*l,x),t.update(g,r,x)}function c(d,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<x;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let m=0;for(let _=0;_<x;_++)m+=g[_];t.update(m,r,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=c}function x5(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v5(i,e){return i[0]-e[0]}function _5(i,e){return Math.abs(e[1])-Math.abs(i[1])}function y5(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new mt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,f){let c=u.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],D=0;_===!0&&(D=1),v===!0&&(D=2),y===!0&&(D=3);let b=h.attributes.position.count*D,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let L=new Float32Array(b*M*4*g),N=new xs(L,b,M,g);N.type=ct,N.needsUpdate=!0;let k=D*4;for(let O=0;O<g;O++){let G=T[O],J=S[O],K=w[O],q=b*M*4*O;for(let ie=0;ie<G.count;ie++){let re=ie*k;_===!0&&(o.fromBufferAttribute(G,ie),L[q+re+0]=o.x,L[q+re+1]=o.y,L[q+re+2]=o.z,L[q+re+3]=0),v===!0&&(o.fromBufferAttribute(J,ie),L[q+re+4]=o.x,L[q+re+5]=o.y,L[q+re+6]=o.z,L[q+re+7]=0),y===!0&&(o.fromBufferAttribute(K,ie),L[q+re+8]=o.x,L[q+re+9]=o.y,L[q+re+10]=o.z,L[q+re+11]=K.itemSize===4?o.w:1)}}x={count:g,texture:N,size:new Q(b,M)},r.set(h,x),h.addEventListener("dispose",I)}let p=0;for(let _=0;_<c.length;_++)p+=c[_];let m=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",c),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=c===void 0?0:c.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<d;v++){let y=g[v];y[0]=v,y[1]=c[v]}g.sort(_5);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(v5);let x=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let y=a[v],T=y[0],S=y[1];T!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+v)!==x[T]&&h.setAttribute("morphTarget"+v,x[T]),p&&h.getAttribute("morphNormal"+v)!==p[T]&&h.setAttribute("morphNormal"+v,p[T]),s[v]=S,m+=S):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let _=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function b5(i,e,t,n){let s=new WeakMap;function r(l){let u=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let c=l.skeleton;s.get(c)!==u&&(c.update(),s.set(c,u))}return f}function o(){s=new WeakMap}function a(l){let u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var pr=class extends Rn{constructor(e,t,n,s,r,o,a,l,u,h){if(h=h!==void 0?h:ps,h!==ps&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=mn),n===void 0&&h===Oi&&(n=Si),super(null,s,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ed=new Rn,Ad=new pr(1,1);Ad.compareFunction=bd;var Rd=new xs,Cd=new wu,Pd=new Wa,O2=[],B2=[],z2=new Float32Array(16),k2=new Float32Array(9),H2=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=O2[s];if(r===void 0&&(r=new Float32Array(s),O2[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dl(i,e){let t=B2[e];t===void 0&&(t=new Int32Array(e),B2[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M5(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function T5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function w5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function E5(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;H2.set(n),i.uniformMatrix2fv(this.addr,!1,H2),jt(t,n)}}function A5(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;k2.set(n),i.uniformMatrix3fv(this.addr,!1,k2),jt(t,n)}}function R5(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;z2.set(n),i.uniformMatrix4fv(this.addr,!1,z2),jt(t,n)}}function C5(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function I5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function L5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function D5(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function N5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function F5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function U5(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function O5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ad:Ed;t.setTexture2D(e||r,s)}function B5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cd,s)}function z5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pd,s)}function k5(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rd,s)}function H5(i){switch(i){case 5126:return M5;case 35664:return S5;case 35665:return T5;case 35666:return w5;case 35674:return E5;case 35675:return A5;case 35676:return R5;case 5124:case 35670:return C5;case 35667:case 35671:return P5;case 35668:case 35672:return I5;case 35669:case 35673:return L5;case 5125:return D5;case 36294:return N5;case 36295:return F5;case 36296:return U5;case 35678:case 36198:case 36298:case 36306:case 35682:return O5;case 35679:case 36299:case 36307:return B5;case 35680:case 36300:case 36308:case 36293:return z5;case 36289:case 36303:case 36311:case 36292:return k5}}function V5(i,e){i.uniform1fv(this.addr,e)}function G5(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function W5(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function X5(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function q5(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Y5(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $5(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z5(i,e){i.uniform1iv(this.addr,e)}function j5(i,e){i.uniform2iv(this.addr,e)}function J5(i,e){i.uniform3iv(this.addr,e)}function K5(i,e){i.uniform4iv(this.addr,e)}function Q5(i,e){i.uniform1uiv(this.addr,e)}function e6(i,e){i.uniform2uiv(this.addr,e)}function t6(i,e){i.uniform3uiv(this.addr,e)}function n6(i,e){i.uniform4uiv(this.addr,e)}function i6(i,e,t){let n=this.cache,s=e.length,r=dl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ed,r[o])}function s6(i,e,t){let n=this.cache,s=e.length,r=dl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cd,r[o])}function r6(i,e,t){let n=this.cache,s=e.length,r=dl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pd,r[o])}function o6(i,e,t){let n=this.cache,s=e.length,r=dl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rd,r[o])}function a6(i){switch(i){case 5126:return V5;case 35664:return G5;case 35665:return W5;case 35666:return X5;case 35674:return q5;case 35675:return Y5;case 35676:return $5;case 5124:case 35670:return Z5;case 35667:case 35671:return j5;case 35668:case 35672:return J5;case 35669:case 35673:return K5;case 5125:return Q5;case 36294:return e6;case 36295:return t6;case 36296:return n6;case 35678:case 36198:case 36298:case 36306:case 35682:return i6;case 35679:case 36299:case 36307:return s6;case 35680:case 36300:case 36308:case 36293:return r6;case 36289:case 36303:case 36311:case 36292:return o6}}var Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H5(t.type)}},Cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a6(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function V2(i,e){i.seq.push(e),i.map[e.id]=e}function l6(i,e,t){let n=i.name,s=n.length;for(hu.lastIndex=0;;){let r=hu.exec(n),o=hu.lastIndex,a=r[1],l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){V2(t,u===void 0?new Ru(a,i,e):new Cu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Pu(a),V2(t,f)),t=f}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);l6(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function G2(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var c6=37297,u6=0;function h6(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function f6(i){let e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i),n;switch(e===t?n="":e===Fa&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===Fa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ti:case fl:return[n,"LinearTransferOETF"];case Vt:case gh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function W2(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+h6(i.getShaderSource(e),o)}else return s}function d6(i,e){let t=f6(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function p6(i,e){let t;switch(e){case uh:t="Linear";break;case hh:t="Reinhard";break;case fh:t="OptimizedCineon";break;case Wi:t="ACESFilmic";break;case dh:t="AgX";break;case E0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function m6(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rr).join(`
`)}function g6(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rr).join(`
`)}function x6(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v6(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function rr(i){return i!==""}function X2(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function q2(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _6=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(i){return i.replace(_6,b6)}var y6=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function b6(i,e){let t=st[e];if(t===void 0){let n=y6.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Iu(t)}var M6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y2(i){return i.replace(M6,S6)}function S6(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $2(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T6(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function w6(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case ur:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E6(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ur&&(e="ENVMAP_MODE_REFRACTION"),e}function A6(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pd:e="ENVMAP_BLENDING_MULTIPLY";break;case T0:e="ENVMAP_BLENDING_MIX";break;case w0:e="ENVMAP_BLENDING_ADD";break}return e}function R6(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function C6(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=T6(t),u=w6(t),h=E6(t),f=A6(t),c=R6(t),d=t.isWebGL2?"":m6(t),g=g6(t),x=x6(r),p=s.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(rr).join(`
`),m.length>0&&(m+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(rr).join(`
`),_.length>0&&(_+=`
`)):(m=[$2(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),_=[d,$2(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?st.tonemapping_pars_fragment:"",t.toneMapping!==ri?p6("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,d6("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),o=Iu(o),o=X2(o,t),o=q2(o,t),a=Iu(a),a=X2(a,t),a=q2(a,t),o=Y2(o),a=Y2(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===d2?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===d2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+m+o,T=v+_+a,S=G2(s,s.VERTEX_SHADER,y),w=G2(s,s.FRAGMENT_SHADER,T);s.attachShader(p,S),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(N){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(S).trim(),O=s.getShaderInfoLog(w).trim(),G=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,w);else{let K=W2(s,S,"vertex"),q=W2(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+K+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||O==="")&&(J=!1);J&&(N.diagnostics={runnable:G,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:_}})}s.deleteShader(S),s.deleteShader(w),b=new lr(s,p),M=v6(s,p)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,c6)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u6++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=w,this}var P6=0,Lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Du(e),t.set(e,n)),n}},Du=class{constructor(e){this.id=P6++,this.code=e,this.usedTimes=0}};function I6(i,e,t,n,s,r,o){let a=new _o,l=new Lu,u=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,c=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function p(b,M,L,N,k){let I=N.fog,O=k.geometry,G=b.isMeshStandardMaterial?N.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),K=J&&J.mapping===cl?J.image.height:null,q=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=ie!==void 0?ie.length:0,_e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let j,le,be,Ie;if(q){let xe=ii[q];j=xe.vertexShader,le=xe.fragmentShader}else j=b.vertexShader,le=b.fragmentShader,l.update(b),be=l.getVertexShaderID(b),Ie=l.getFragmentShaderID(b);let Te=i.getRenderTarget(),ke=k.isInstancedMesh===!0,Ge=k.isBatchedMesh===!0,Re=!!b.map,qe=!!b.matcap,U=!!J,ge=!!b.aoMap,te=!!b.lightMap,de=!!b.bumpMap,ee=!!b.normalMap,Ue=!!b.displacementMap,Me=!!b.emissiveMap,R=!!b.metalnessMap,E=!!b.roughnessMap,H=b.anisotropy>0,oe=b.clearcoat>0,ue=b.iridescence>0,ae=b.sheen>0,Pe=b.transmission>0,se=H&&!!b.anisotropyMap,Ae=oe&&!!b.clearcoatMap,Le=oe&&!!b.clearcoatNormalMap,Ye=oe&&!!b.clearcoatRoughnessMap,ce=ue&&!!b.iridescenceMap,Je=ue&&!!b.iridescenceThicknessMap,F=ae&&!!b.sheenColorMap,he=ae&&!!b.sheenRoughnessMap,ve=!!b.specularMap,me=!!b.specularColorMap,Be=!!b.specularIntensityMap,je=Pe&&!!b.transmissionMap,Qe=Pe&&!!b.thicknessMap,z=!!b.gradientMap,B=!!b.alphaMap,P=b.alphaTest>0,W=!!b.alphaHash,$=!!b.extensions,ne=!!O.attributes.uv1,fe=!!O.attributes.uv2,pe=!!O.attributes.uv3,ye=ri;return b.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ye=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:le,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:Ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ge,instancing:ke,instancingColor:ke&&k.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ti,map:Re,matcap:qe,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:K,aoMap:ge,lightMap:te,bumpMap:de,normalMap:ee,displacementMap:c&&Ue,emissiveMap:Me,normalMapObjectSpace:ee&&b.normalMapType===N0,normalMapTangentSpace:ee&&b.normalMapType===mh,metalnessMap:R,roughnessMap:E,anisotropy:H,anisotropyMap:se,clearcoat:oe,clearcoatMap:Ae,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ye,iridescence:ue,iridescenceMap:ce,iridescenceThicknessMap:Je,sheen:ae,sheenColorMap:F,sheenRoughnessMap:he,specularMap:ve,specularColorMap:me,specularIntensityMap:Be,transmission:Pe,transmissionMap:je,thicknessMap:Qe,gradientMap:z,opaque:b.transparent===!1&&b.blending===si,alphaMap:B,alphaTest:P,alphaHash:W,combine:b.combine,mapUv:Re&&x(b.map.channel),aoMapUv:ge&&x(b.aoMap.channel),lightMapUv:te&&x(b.lightMap.channel),bumpMapUv:de&&x(b.bumpMap.channel),normalMapUv:ee&&x(b.normalMap.channel),displacementMapUv:Ue&&x(b.displacementMap.channel),emissiveMapUv:Me&&x(b.emissiveMap.channel),metalnessMapUv:R&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:se&&x(b.anisotropyMap.channel),clearcoatMapUv:Ae&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:F&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(b.sheenRoughnessMap.channel),specularMapUv:ve&&x(b.specularMap.channel),specularColorMapUv:me&&x(b.specularColorMap.channel),specularIntensityMapUv:Be&&x(b.specularIntensityMap.channel),transmissionMapUv:je&&x(b.transmissionMap.channel),thicknessMapUv:Qe&&x(b.thicknessMap.channel),alphaMapUv:B&&x(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ee||H),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:fe,vertexUv3s:pe,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Re||B),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&b.map.isVideoTexture===!0&&vt.getTransfer(b.map.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===rn,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:$&&b.extensions.derivatives===!0,extensionFragDepth:$&&b.extensions.fragDepth===!0,extensionDrawBuffers:$&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:$&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:$&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){let M=g[b.type],L;if(M){let N=ii[M];L=Zn.clone(N.uniforms)}else L=b.uniforms;return L}function T(b,M){let L;for(let N=0,k=u.length;N<k;N++){let I=u[N];if(I.cacheKey===M){L=I,++L.usedTimes;break}}return L===void 0&&(L=new C6(i,M,b,r),u.push(L)),L}function S(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:D}}function L6(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function D6(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Z2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function j2(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,c,d,g,x,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:c,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=c,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=p),e++,m}function a(f,c,d,g,x,p){let m=o(f,c,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(f,c,d,g,x,p){let m=o(f,c,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function u(f,c){t.length>1&&t.sort(f||D6),n.length>1&&n.sort(c||Z2),s.length>1&&s.sort(c||Z2)}function h(){for(let f=e,c=i.length;f<c;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:u}}function N6(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new j2,i.set(n,[o])):s>=r.length?(o=new j2,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F6(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ve};break;case"SpotLight":t={position:new A,direction:new A,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function U6(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var O6=0;function B6(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z6(i,e){let t=new F6,n=U6(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new A);let r=new A,o=new Fe,a=new Fe;function l(h,f){let c=0,d=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,p=0,m=0,_=0,v=0,y=0,T=0,S=0,w=0,D=0,b=0;h.sort(B6);let M=f===!0?Math.PI:1;for(let N=0,k=h.length;N<k;N++){let I=h[N],O=I.color,G=I.intensity,J=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=O.r*G*M,d+=O.g*G*M,g+=O.b*G*M;else if(I.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(I.sh.coefficients[q],G);b++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let ie=I.shadow,re=n.get(I);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=I.shadow.matrix,y++}s.directional[x]=q,x++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(G*M),q.distance=J,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,s.spot[m]=q;let ie=I.shadow;if(I.map&&(s.spotLightMap[w]=I.map,w++,ie.updateMatrices(I),I.castShadow&&D++),s.spotLightMatrix[m]=ie.matrix,I.castShadow){let re=n.get(I);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,s.spotShadow[m]=re,s.spotShadowMap[m]=K,S++}m++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(O).multiplyScalar(G),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),s.rectArea[_]=q,_++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*M),q.distance=I.distance,q.decay=I.decay,I.castShadow){let ie=I.shadow,re=n.get(I);re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,s.pointShadow[p]=re,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=I.shadow.matrix,T++}s.point[p]=q,p++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(G*M),q.groundColor.copy(I.groundColor).multiplyScalar(G*M),s.hemi[v]=q,v++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=c,s.ambient[1]=d,s.ambient[2]=g;let L=s.hash;(L.directionalLength!==x||L.pointLength!==p||L.spotLength!==m||L.rectAreaLength!==_||L.hemiLength!==v||L.numDirectionalShadows!==y||L.numPointShadows!==T||L.numSpotShadows!==S||L.numSpotMaps!==w||L.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=_,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=S+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=b,L.directionalLength=x,L.pointLength=p,L.spotLength=m,L.rectAreaLength=_,L.hemiLength=v,L.numDirectionalShadows=y,L.numPointShadows=T,L.numSpotShadows=S,L.numSpotMaps=w,L.numLightProbes=b,s.version=O6++)}function u(h,f){let c=0,d=0,g=0,x=0,p=0,m=f.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){let y=h[_];if(y.isDirectionalLight){let T=s.directional[c];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),c++}else if(y.isSpotLight){let T=s.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=s.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=s.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let T=s.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:s}}function J2(i,e){let t=new z6(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function k6(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new J2(i,e),t.set(r,[l])):o>=a.length?(l=new J2(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Nu=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fu=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},H6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G6(i,e,t){let n=new yo,s=new Q,r=new Q,o=new mt,a=new Nu({depthPacking:D0}),l=new Fu,u={},h=t.maxTextureSize,f={[An]:qt,[qt]:An,[rn]:rn},c=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:H6,fragmentShader:V6}),d=c.clone();d.defines.HORIZONTAL_PASS=1;let g=new at;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ke(g,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let m=this.type;this.render=function(S,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(_t),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=m!==yi&&this.type===yi,I=m===yi&&this.type!==yi;for(let O=0,G=S.length;O<G;O++){let J=S[O],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let q=K.getFrameExtents();if(s.multiply(q),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,K.mapSize.y=r.y)),K.map===null||k===!0||I===!0){let re=this.type!==yi?{minFilter:Ze,magFilter:Ze}:{};K.map!==null&&K.map.dispose(),K.map=new Rt(s.x,s.y,re),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let ie=K.getViewportCount();for(let re=0;re<ie;re++){let _e=K.getViewport(re);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),N.viewport(o),K.updateMatrices(J,re),n=K.getFrustum(),y(w,D,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===yi&&_(K,D),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,L)};function _(S,w){let D=e.update(x);c.defines.VSM_SAMPLES!==S.blurSamples&&(c.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Rt(s.x,s.y)),c.uniforms.shadow_pass.value=S.map.texture,c.uniforms.resolution.value=S.mapSize,c.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,D,c,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,D,d,x,null)}function v(S,w,D,b){let M=null,L=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=M.uuid,k=w.uuid,I=u[N];I===void 0&&(I={},u[N]=I);let O=I[k];O===void 0&&(O=M.clone(),I[k]=O,w.addEventListener("dispose",T)),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,b===yi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=i.properties.get(M);N.light=D}return M}function y(S,w,D,b,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===yi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let k=e.update(S),I=S.material;if(Array.isArray(I)){let O=k.groups;for(let G=0,J=O.length;G<J;G++){let K=O[G],q=I[K.materialIndex];if(q&&q.visible){let ie=v(S,q,b,M);S.onBeforeShadow(i,S,w,D,k,ie,K),i.renderBufferDirect(D,null,k,ie,S,K),S.onAfterShadow(i,S,w,D,k,ie,K)}}}else if(I.visible){let O=v(S,I,b,M);S.onBeforeShadow(i,S,w,D,k,O,null),i.renderBufferDirect(D,null,k,O,S,null),S.onAfterShadow(i,S,w,D,k,O,null)}}let N=S.children;for(let k=0,I=N.length;k<I;k++)y(N[k],w,D,b,M)}function T(S){S.target.removeEventListener("dispose",T);for(let D in u){let b=u[D],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function W6(i,e,t){let n=t.isWebGL2;function s(){let P=!1,W=new mt,$=null,ne=new mt(0,0,0,0);return{setMask:function(fe){$!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){P=fe},setClear:function(fe,pe,ye,lt,xe){xe===!0&&(fe*=lt,pe*=lt,ye*=lt),W.set(fe,pe,ye,lt),ne.equals(W)===!1&&(i.clearColor(fe,pe,ye,lt),ne.copy(W))},reset:function(){P=!1,$=null,ne.set(-1,0,0,0)}}}function r(){let P=!1,W=null,$=null,ne=null;return{setTest:function(fe){fe?Ge(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(fe){W!==fe&&!P&&(i.depthMask(fe),W=fe)},setFunc:function(fe){if($!==fe){switch(fe){case x0:i.depthFunc(i.NEVER);break;case v0:i.depthFunc(i.ALWAYS);break;case _0:i.depthFunc(i.LESS);break;case Pa:i.depthFunc(i.LEQUAL);break;case y0:i.depthFunc(i.EQUAL);break;case b0:i.depthFunc(i.GEQUAL);break;case M0:i.depthFunc(i.GREATER);break;case S0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ne!==fe&&(i.clearDepth(fe),ne=fe)},reset:function(){P=!1,W=null,$=null,ne=null}}}function o(){let P=!1,W=null,$=null,ne=null,fe=null,pe=null,ye=null,lt=null,xe=null;return{setTest:function(Ce){P||(Ce?Ge(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Ce){W!==Ce&&!P&&(i.stencilMask(Ce),W=Ce)},setFunc:function(Ce,et,Qt){($!==Ce||ne!==et||fe!==Qt)&&(i.stencilFunc(Ce,et,Qt),$=Ce,ne=et,fe=Qt)},setOp:function(Ce,et,Qt){(pe!==Ce||ye!==et||lt!==Qt)&&(i.stencilOp(Ce,et,Qt),pe=Ce,ye=et,lt=Qt)},setLocked:function(Ce){P=Ce},setClear:function(Ce){xe!==Ce&&(i.clearStencil(Ce),xe=Ce)},reset:function(){P=!1,W=null,$=null,ne=null,fe=null,pe=null,ye=null,lt=null,xe=null}}}let a=new s,l=new r,u=new o,h=new WeakMap,f=new WeakMap,c={},d={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,y=null,T=null,S=null,w=null,D=null,b=new Ve(0,0,0),M=0,L=!1,N=null,k=null,I=null,O=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=q>=2);let re=null,_e={},j=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),be=new mt().fromArray(j),Ie=new mt().fromArray(le);function Te(P,W,$,ne){let fe=new Uint8Array(4),pe=i.createTexture();i.bindTexture(P,pe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<$;ye++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(W,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(W+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return pe}let ke={};ke[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ke[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ge(i.DEPTH_TEST),l.setFunc(Pa),Me(!1),R(If),Ge(i.CULL_FACE),ee(_t);function Ge(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function Re(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function qe(P,W){return d[P]!==W?(i.bindFramebuffer(P,W),d[P]=W,n&&(P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=W),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=W)),!0):!1}function U(P,W){let $=x,ne=!1;if(P)if($=g.get(W),$===void 0&&($=[],g.set(W,$)),P.isWebGLMultipleRenderTargets){let fe=P.texture;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,ye=fe.length;pe<ye;pe++)$[pe]=i.COLOR_ATTACHMENT0+pe;$.length=fe.length,ne=!0}}else $[0]!==i.COLOR_ATTACHMENT0&&($[0]=i.COLOR_ATTACHMENT0,ne=!0);else $[0]!==i.BACK&&($[0]=i.BACK,ne=!0);ne&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function ge(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let te={[Fn]:i.FUNC_ADD,[r0]:i.FUNC_SUBTRACT,[o0]:i.FUNC_REVERSE_SUBTRACT};if(n)te[Nf]=i.MIN,te[Ff]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(te[Nf]=P.MIN_EXT,te[Ff]=P.MAX_EXT)}let de={[_r]:i.ZERO,[a0]:i.ONE,[l0]:i.SRC_COLOR,[vu]:i.SRC_ALPHA,[f0]:i.SRC_ALPHA_SATURATE,[ll]:i.DST_COLOR,[al]:i.DST_ALPHA,[c0]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[h0]:i.ONE_MINUS_DST_COLOR,[u0]:i.ONE_MINUS_DST_ALPHA,[d0]:i.CONSTANT_COLOR,[p0]:i.ONE_MINUS_CONSTANT_COLOR,[m0]:i.CONSTANT_ALPHA,[g0]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(P,W,$,ne,fe,pe,ye,lt,xe,Ce){if(P===_t){m===!0&&(Re(i.BLEND),m=!1);return}if(m===!1&&(Ge(i.BLEND),m=!0),P!==ch){if(P!==_||Ce!==L){if((v!==Fn||S!==Fn)&&(i.blendEquation(i.FUNC_ADD),v=Fn,S=Fn),Ce)switch(P){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Df:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,T=null,w=null,D=null,b.set(0,0,0),M=0,_=P,L=Ce}return}fe=fe||W,pe=pe||$,ye=ye||ne,(W!==v||fe!==S)&&(i.blendEquationSeparate(te[W],te[fe]),v=W,S=fe),($!==y||ne!==T||pe!==w||ye!==D)&&(i.blendFuncSeparate(de[$],de[ne],de[pe],de[ye]),y=$,T=ne,w=pe,D=ye),(lt.equals(b)===!1||xe!==M)&&(i.blendColor(lt.r,lt.g,lt.b,xe),b.copy(lt),M=xe),_=P,L=!1}function Ue(P,W){P.side===rn?Re(i.CULL_FACE):Ge(i.CULL_FACE);let $=P.side===qt;W&&($=!$),Me($),P.blending===si&&P.transparent===!1?ee(_t):ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let ne=P.stencilWrite;u.setTest(ne),ne&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),H(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ge(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function R(P){P!==i0?(Ge(i.CULL_FACE),P!==k&&(P===If?i.cullFace(i.BACK):P===s0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),k=P}function E(P){P!==I&&(K&&i.lineWidth(P),I=P)}function H(P,W,$){P?(Ge(i.POLYGON_OFFSET_FILL),(O!==W||G!==$)&&(i.polygonOffset(W,$),O=W,G=$)):Re(i.POLYGON_OFFSET_FILL)}function oe(P){P?Ge(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function ue(P){P===void 0&&(P=i.TEXTURE0+J-1),re!==P&&(i.activeTexture(P),re=P)}function ae(P,W,$){$===void 0&&(re===null?$=i.TEXTURE0+J-1:$=re);let ne=_e[$];ne===void 0&&(ne={type:void 0,texture:void 0},_e[$]=ne),(ne.type!==P||ne.texture!==W)&&(re!==$&&(i.activeTexture($),re=$),i.bindTexture(P,W||ke[P]),ne.type=P,ne.texture=W)}function Pe(){let P=_e[re];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(P){be.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),be.copy(P))}function je(P){Ie.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ie.copy(P))}function Qe(P,W){let $=f.get(W);$===void 0&&($=new WeakMap,f.set(W,$));let ne=$.get(P);ne===void 0&&(ne=i.getUniformBlockIndex(W,P.name),$.set(P,ne))}function z(P,W){let ne=f.get(W).get(P);h.get(W)!==ne&&(i.uniformBlockBinding(W,ne,P.__bindingPointIndex),h.set(W,ne))}function B(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},re=null,_e={},d={},g=new WeakMap,x=[],p=null,m=!1,_=null,v=null,y=null,T=null,S=null,w=null,D=null,b=new Ve(0,0,0),M=0,L=!1,N=null,k=null,I=null,O=null,G=null,be.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ge,disable:Re,bindFramebuffer:qe,drawBuffers:U,useProgram:ge,setBlending:ee,setMaterial:Ue,setFlipSided:Me,setCullFace:R,setLineWidth:E,setPolygonOffset:H,setScissorTest:oe,activeTexture:ue,bindTexture:ae,unbindTexture:Pe,compressedTexImage2D:se,compressedTexImage3D:Ae,texImage2D:ve,texImage3D:me,updateUBOMapping:Qe,uniformBlockBinding:z,texStorage2D:F,texStorage3D:he,texSubImage2D:Le,texSubImage3D:Ye,compressedTexSubImage2D:ce,compressedTexSubImage3D:Je,scissor:Be,viewport:je,reset:B}}function X6(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,c=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):Ba("canvas")}function x(R,E,H,oe){let ue=1;if((R.width>oe||R.height>oe)&&(ue=oe/Math.max(R.width,R.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ae=E?Oa:Math.floor,Pe=ae(ue*R.width),se=ae(ue*R.height);f===void 0&&(f=g(Pe,se));let Ae=H?g(Pe,se):f;return Ae.width=Pe,Ae.height=se,Ae.getContext("2d").drawImage(R,0,0,Pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Pe+"x"+se+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Su(R.width)&&Su(R.height)}function m(R){return a?!1:R.wrapS!==It||R.wrapT!==It||R.minFilter!==Ze&&R.minFilter!==Mt}function _(R,E){return R.generateMipmaps&&E&&R.minFilter!==Ze&&R.minFilter!==Mt}function v(R){i.generateMipmap(R)}function y(R,E,H,oe,ue=!1){if(a===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=E;if(E===i.RED&&(H===i.FLOAT&&(ae=i.R32F),H===i.HALF_FLOAT&&(ae=i.R16F),H===i.UNSIGNED_BYTE&&(ae=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ae=i.R8UI),H===i.UNSIGNED_SHORT&&(ae=i.R16UI),H===i.UNSIGNED_INT&&(ae=i.R32UI),H===i.BYTE&&(ae=i.R8I),H===i.SHORT&&(ae=i.R16I),H===i.INT&&(ae=i.R32I)),E===i.RG&&(H===i.FLOAT&&(ae=i.RG32F),H===i.HALF_FLOAT&&(ae=i.RG16F),H===i.UNSIGNED_BYTE&&(ae=i.RG8)),E===i.RGBA){let Pe=ue?Da:vt.getTransfer(oe);H===i.FLOAT&&(ae=i.RGBA32F),H===i.HALF_FLOAT&&(ae=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ae=Pe===bt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function T(R,E,H){return _(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==Mt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===Ze||R===Uf||R===Oc?i.NEAREST:i.LINEAR}function w(R){let E=R.target;E.removeEventListener("dispose",w),b(E),E.isVideoTexture&&h.delete(E)}function D(R){let E=R.target;E.removeEventListener("dispose",D),L(E)}function b(R){let E=n.get(R);if(E.__webglInit===void 0)return;let H=R.source,oe=c.get(H);if(oe){let ue=oe[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&M(R),Object.keys(oe).length===0&&c.delete(H)}n.remove(R)}function M(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let H=R.source,oe=c.get(H);delete oe[E.__cacheKey],o.memory.textures--}function L(R){let E=R.texture,H=n.get(R),oe=n.get(E);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(H.__webglFramebuffer[ue]))for(let ae=0;ae<H.__webglFramebuffer[ue].length;ae++)i.deleteFramebuffer(H.__webglFramebuffer[ue][ae]);else i.deleteFramebuffer(H.__webglFramebuffer[ue]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ue])}else{if(Array.isArray(H.__webglFramebuffer))for(let ue=0;ue<H.__webglFramebuffer.length;ue++)i.deleteFramebuffer(H.__webglFramebuffer[ue]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ue=0;ue<H.__webglColorRenderbuffer.length;ue++)H.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ue]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ue=0,ae=E.length;ue<ae;ue++){let Pe=n.get(E[ue]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(E[ue])}n.remove(E),n.remove(R)}let N=0;function k(){N=0}function I(){let R=N;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function O(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function G(R,E){let H=n.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let oe=R.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(H,R,E);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function J(R,E){let H=n.get(R);if(R.version>0&&H.__version!==R.version){be(H,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function K(R,E){let H=n.get(R);if(R.version>0&&H.__version!==R.version){be(H,R,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function q(R,E){let H=n.get(R);if(R.version>0&&H.__version!==R.version){Ie(H,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}let ie={[Lt]:i.REPEAT,[It]:i.CLAMP_TO_EDGE,[bu]:i.MIRRORED_REPEAT},re={[Ze]:i.NEAREST,[Uf]:i.NEAREST_MIPMAP_NEAREST,[Oc]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[A0]:i.LINEAR_MIPMAP_NEAREST,[xo]:i.LINEAR_MIPMAP_LINEAR},_e={[F0]:i.NEVER,[H0]:i.ALWAYS,[U0]:i.LESS,[bd]:i.LEQUAL,[O0]:i.EQUAL,[k0]:i.GEQUAL,[B0]:i.GREATER,[z0]:i.NOTEQUAL};function j(R,E,H){if(H?(i.texParameteri(R,i.TEXTURE_WRAP_S,ie[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,re[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,re[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==It||E.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,S(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Ze&&E.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ze||E.minFilter!==Oc&&E.minFilter!==xo||E.type===ct&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===At&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function le(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));let oe=E.source,ue=c.get(oe);ue===void 0&&(ue={},c.set(oe,ue));let ae=O(E);if(ae!==R.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ue[ae].usedTimes++;let Pe=ue[R.__cacheKey];Pe!==void 0&&(ue[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(E)),R.__cacheKey=ae,R.__webglTexture=ue[ae].texture}return H}function be(R,E,H){let oe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=i.TEXTURE_3D);let ue=le(R,E),ae=E.source;t.bindTexture(oe,R.__webglTexture,i.TEXTURE0+H);let Pe=n.get(ae);if(ae.version!==Pe.__version||ue===!0){t.activeTexture(i.TEXTURE0+H);let se=vt.getPrimaries(vt.workingColorSpace),Ae=E.colorSpace===Un?null:vt.getPrimaries(E.colorSpace),Le=E.colorSpace===Un||se===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ye=m(E)&&p(E.image)===!1,ce=x(E.image,Ye,!1,s.maxTextureSize);ce=Me(E,ce);let Je=p(ce)||a,F=r.convert(E.format,E.colorSpace),he=r.convert(E.type),ve=y(E.internalFormat,F,he,E.colorSpace,E.isVideoTexture);j(oe,E,Je);let me,Be=E.mipmaps,je=a&&E.isVideoTexture!==!0&&ve!==_d,Qe=Pe.__version===void 0||ue===!0,z=T(E,ce,Je);if(E.isDepthTexture)ve=i.DEPTH_COMPONENT,a?E.type===ct?ve=i.DEPTH_COMPONENT32F:E.type===mn?ve=i.DEPTH_COMPONENT24:E.type===Si?ve=i.DEPTH24_STENCIL8:ve=i.DEPTH_COMPONENT16:E.type===ct&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ps&&ve===i.DEPTH_COMPONENT&&E.type!==Ro&&E.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=mn,he=r.convert(E.type)),E.format===Oi&&ve===i.DEPTH_COMPONENT&&(ve=i.DEPTH_STENCIL,E.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Si,he=r.convert(E.type))),Qe&&(je?t.texStorage2D(i.TEXTURE_2D,1,ve,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ve,ce.width,ce.height,0,F,he,null));else if(E.isDataTexture)if(Be.length>0&&Je){je&&Qe&&t.texStorage2D(i.TEXTURE_2D,z,ve,Be[0].width,Be[0].height);for(let B=0,P=Be.length;B<P;B++)me=Be[B],je?t.texSubImage2D(i.TEXTURE_2D,B,0,0,me.width,me.height,F,he,me.data):t.texImage2D(i.TEXTURE_2D,B,ve,me.width,me.height,0,F,he,me.data);E.generateMipmaps=!1}else je?(Qe&&t.texStorage2D(i.TEXTURE_2D,z,ve,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,F,he,ce.data)):t.texImage2D(i.TEXTURE_2D,0,ve,ce.width,ce.height,0,F,he,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,ve,Be[0].width,Be[0].height,ce.depth);for(let B=0,P=Be.length;B<P;B++)me=Be[B],E.format!==tt?F!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,ce.depth,F,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,ve,me.width,me.height,ce.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,ce.depth,F,he,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,ve,me.width,me.height,ce.depth,0,F,he,me.data)}else{je&&Qe&&t.texStorage2D(i.TEXTURE_2D,z,ve,Be[0].width,Be[0].height);for(let B=0,P=Be.length;B<P;B++)me=Be[B],E.format!==tt?F!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,me.width,me.height,F,me.data):t.compressedTexImage2D(i.TEXTURE_2D,B,ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,B,0,0,me.width,me.height,F,he,me.data):t.texImage2D(i.TEXTURE_2D,B,ve,me.width,me.height,0,F,he,me.data)}else if(E.isDataArrayTexture)je?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,ve,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,F,he,ce.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ce.width,ce.height,ce.depth,0,F,he,ce.data);else if(E.isData3DTexture)je?(Qe&&t.texStorage3D(i.TEXTURE_3D,z,ve,ce.width,ce.height,ce.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,F,he,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ce.width,ce.height,ce.depth,0,F,he,ce.data);else if(E.isFramebufferTexture){if(Qe)if(je)t.texStorage2D(i.TEXTURE_2D,z,ve,ce.width,ce.height);else{let B=ce.width,P=ce.height;for(let W=0;W<z;W++)t.texImage2D(i.TEXTURE_2D,W,ve,B,P,0,F,he,null),B>>=1,P>>=1}}else if(Be.length>0&&Je){je&&Qe&&t.texStorage2D(i.TEXTURE_2D,z,ve,Be[0].width,Be[0].height);for(let B=0,P=Be.length;B<P;B++)me=Be[B],je?t.texSubImage2D(i.TEXTURE_2D,B,0,0,F,he,me):t.texImage2D(i.TEXTURE_2D,B,ve,F,he,me);E.generateMipmaps=!1}else je?(Qe&&t.texStorage2D(i.TEXTURE_2D,z,ve,ce.width,ce.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,F,he,ce)):t.texImage2D(i.TEXTURE_2D,0,ve,F,he,ce);_(E,Je)&&v(oe),Pe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ie(R,E,H){if(E.image.length!==6)return;let oe=le(R,E),ue=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);let ae=n.get(ue);if(ue.version!==ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);let Pe=vt.getPrimaries(vt.workingColorSpace),se=E.colorSpace===Un?null:vt.getPrimaries(E.colorSpace),Ae=E.colorSpace===Un||Pe===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let B=0;B<6;B++)!Le&&!Ye?ce[B]=x(E.image[B],!1,!0,s.maxCubemapSize):ce[B]=Ye?E.image[B].image:E.image[B],ce[B]=Me(E,ce[B]);let Je=ce[0],F=p(Je)||a,he=r.convert(E.format,E.colorSpace),ve=r.convert(E.type),me=y(E.internalFormat,he,ve,E.colorSpace),Be=a&&E.isVideoTexture!==!0,je=ae.__version===void 0||oe===!0,Qe=T(E,Je,F);j(i.TEXTURE_CUBE_MAP,E,F);let z;if(Le){Be&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,me,Je.width,Je.height);for(let B=0;B<6;B++){z=ce[B].mipmaps;for(let P=0;P<z.length;P++){let W=z[P];E.format!==tt?he!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P,0,0,W.width,W.height,he,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P,me,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P,0,0,W.width,W.height,he,ve,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P,me,W.width,W.height,0,he,ve,W.data)}}}else{z=E.mipmaps,Be&&je&&(z.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,me,ce[0].width,ce[0].height));for(let B=0;B<6;B++)if(Ye){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ce[B].width,ce[B].height,he,ve,ce[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,me,ce[B].width,ce[B].height,0,he,ve,ce[B].data);for(let P=0;P<z.length;P++){let $=z[P].image[B].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P+1,0,0,$.width,$.height,he,ve,$.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P+1,me,$.width,$.height,0,he,ve,$.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,he,ve,ce[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,me,he,ve,ce[B]);for(let P=0;P<z.length;P++){let W=z[P];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P+1,0,0,he,ve,W.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,P+1,me,he,ve,W.image[B])}}}_(E,F)&&v(i.TEXTURE_CUBE_MAP),ae.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Te(R,E,H,oe,ue,ae){let Pe=r.convert(H.format,H.colorSpace),se=r.convert(H.type),Ae=y(H.internalFormat,Pe,se,H.colorSpace);if(!n.get(E).__hasExternalTextures){let Ye=Math.max(1,E.width>>ae),ce=Math.max(1,E.height>>ae);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,Ae,Ye,ce,E.depth,0,Pe,se,null):t.texImage2D(ue,ae,Ae,Ye,ce,0,Pe,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ee(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ue,n.get(H).__webglTexture,0,de(E)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ue,n.get(H).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let oe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||ee(E)){let ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===ct?oe=i.DEPTH_COMPONENT32F:ue.type===mn&&(oe=i.DEPTH_COMPONENT24));let ae=de(E);ee(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,oe,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,oe,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let oe=de(E);H&&ee(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,E.width,E.height):ee(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{let oe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<oe.length;ue++){let ae=oe[ue],Pe=r.convert(ae.format,ae.colorSpace),se=r.convert(ae.type),Ae=y(ae.internalFormat,Pe,se,ae.colorSpace),Le=de(E);H&&ee(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ae,E.width,E.height):ee(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Ae,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);let oe=n.get(E.depthTexture).__webglTexture,ue=de(E);if(E.depthTexture.format===ps)ee(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Oi)ee(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Re(R){let E=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ge(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]=i.createRenderbuffer(),ke(E.__webglDepthbuffer[oe],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ke(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(R,E,H){let oe=n.get(R);E!==void 0&&Te(oe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Re(R)}function U(R){let E=R.texture,H=n.get(R),oe=n.get(E);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=E.version,o.memory.textures++);let ue=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,Pe=p(R)||a;if(ue){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)H.__webglFramebuffer[se][Ae]=i.createFramebuffer()}else H.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<E.mipmaps.length;se++)H.__webglFramebuffer[se]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ae)if(s.drawBuffers){let se=R.texture;for(let Ae=0,Le=se.length;Ae<Le;Ae++){let Ye=n.get(se[Ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ee(R)===!1){let se=ae?E:[E];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ae=0;Ae<se.length;Ae++){let Le=se[Ae];H.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ae]);let Ye=r.convert(Le.format,Le.colorSpace),ce=r.convert(Le.type),Je=y(Le.internalFormat,Ye,ce,Le.colorSpace,R.isXRRenderTarget===!0),F=de(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,Je,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),j(i.TEXTURE_CUBE_MAP,E,Pe);for(let se=0;se<6;se++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Te(H.__webglFramebuffer[se][Ae],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae);else Te(H.__webglFramebuffer[se],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(E,Pe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let se=R.texture;for(let Ae=0,Le=se.length;Ae<Le;Ae++){let Ye=se[Ae],ce=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),j(i.TEXTURE_2D,Ye,Pe),Te(H.__webglFramebuffer,R,Ye,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),_(Ye,Pe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,oe.__webglTexture),j(se,E,Pe),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)Te(H.__webglFramebuffer[Ae],R,E,i.COLOR_ATTACHMENT0,se,Ae);else Te(H.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,se,0);_(E,Pe)&&v(se),t.unbindTexture()}R.depthBuffer&&Re(R)}function ge(R){let E=p(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let oe=0,ue=H.length;oe<ue;oe++){let ae=H[oe];if(_(ae,E)){let Pe=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(ae).__webglTexture;t.bindTexture(Pe,se),v(Pe),t.unbindTexture()}}}function te(R){if(a&&R.samples>0&&ee(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,oe=R.height,ue=i.COLOR_BUFFER_BIT,ae=[],Pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(R),Ae=R.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){ae.push(i.COLOR_ATTACHMENT0+Le),R.depthBuffer&&ae.push(Pe);let Ye=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ye===!1&&(R.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[Le]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),Ae){let ce=n.get(E[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,H,oe,0,0,H,oe,ue,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,se.__webglColorRenderbuffer[Le]);let Ye=n.get(E[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function de(R){return Math.min(s.maxSamples,R.samples)}function ee(R){let E=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Me(R,E){let H=R.colorSpace,oe=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Mu||H!==Ti&&H!==Un&&(vt.getTransfer(H)===bt?a===!1?e.has("EXT_sRGB")===!0&&oe===tt?(R.format=Mu,R.minFilter=Mt,R.generateMipmaps=!1):E=za.sRGBToLinear(E):(oe!==tt||ue!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=qe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ee}function q6(i,e,t){let n=t.isWebGL2;function s(r,o=Un){let a,l=vt.getTransfer(o);if(r===gn)return i.UNSIGNED_BYTE;if(r===xd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ul)return i.BYTE;if(r===ph)return i.SHORT;if(r===Ro)return i.UNSIGNED_SHORT;if(r===yr)return i.INT;if(r===mn)return i.UNSIGNED_INT;if(r===ct)return i.FLOAT;if(r===At)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===R0)return i.ALPHA;if(r===tt)return i.RGBA;if(r===C0)return i.LUMINANCE;if(r===P0)return i.LUMINANCE_ALPHA;if(r===ps)return i.DEPTH_COMPONENT;if(r===Oi)return i.DEPTH_STENCIL;if(r===Mu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xi)return i.RED;if(r===hl)return i.RED_INTEGER;if(r===Co)return i.RG;if(r===br)return i.RG_INTEGER;if(r===Mr)return i.RGBA_INTEGER;if(r===Bc||r===zc||r===kc||r===Hc)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Of||r===Bf||r===zf||r===kf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Of)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_d)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hf||r===Vf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Hf)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gf||r===Wf||r===Xf||r===qf||r===Yf||r===$f||r===Zf||r===jf||r===Jf||r===Kf||r===Qf||r===e2||r===t2||r===n2)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Gf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$f)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===e2)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===t2)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===n2)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vc||r===i2||r===s2)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vc)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===i2)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===s2)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===I0||r===r2||r===o2||r===a2)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===r2)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===o2)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===a2)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Si?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Uu=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ft=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y6={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(u,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],c=h.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&c>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y6)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ou=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,f=null,c=null,d=null,g=null,x=t.getContextAttributes(),p=null,m=null,_=[],v=[],y=new Q,T=null,S=new Dt;S.layers.enable(1),S.viewport=new mt;let w=new Dt;w.layers.enable(2),w.viewport=new mt;let D=[S,w],b=new Uu;b.layers.enable(1),b.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=_[j];return le===void 0&&(le=new fo,_[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=_[j];return le===void 0&&(le=new fo,_[j]=le),le.getGripSpace()},this.getHand=function(j){let le=_[j];return le===void 0&&(le=new fo,_[j]=le),le.getHandSpace()};function N(j){let le=v.indexOf(j.inputSource);if(le===-1)return;let be=_[le];be!==void 0&&(be.update(j.inputSource,j.frame,u||o),be.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",I);for(let j=0;j<_.length;j++){let le=v[j];le!==null&&(v[j]=null,_[j].disconnect(le))}M=null,L=null,e.setRenderTarget(p),d=null,c=null,f=null,s=null,m=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Rt(d.framebufferWidth,d.framebufferHeight,{format:tt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,be=null,Ie=null;x.depth&&(Ie=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?Oi:ps,be=x.stencil?Si:mn);let Te={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=new XRWebGLBinding(s,t),c=f.createProjectionLayer(Te),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),m=new Rt(c.textureWidth,c.textureHeight,{format:tt,type:gn,depthTexture:new pr(c.textureWidth,c.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let ke=e.properties.get(m);ke.__ignoreDepthValues=c.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(j){for(let le=0;le<j.removed.length;le++){let be=j.removed[le],Ie=v.indexOf(be);Ie>=0&&(v[Ie]=null,_[Ie].disconnect(be))}for(let le=0;le<j.added.length;le++){let be=j.added[le],Ie=v.indexOf(be);if(Ie===-1){for(let ke=0;ke<_.length;ke++)if(ke>=v.length){v.push(be),Ie=ke;break}else if(v[ke]===null){v[ke]=be,Ie=ke;break}if(Ie===-1)break}let Te=_[Ie];Te&&Te.connect(be)}}let O=new A,G=new A;function J(j,le,be){O.setFromMatrixPosition(le.matrixWorld),G.setFromMatrixPosition(be.matrixWorld);let Ie=O.distanceTo(G),Te=le.projectionMatrix.elements,ke=be.projectionMatrix.elements,Ge=Te[14]/(Te[10]-1),Re=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],U=(Te[9]-1)/Te[5],ge=(Te[8]-1)/Te[0],te=(ke[8]+1)/ke[0],de=Ge*ge,ee=Ge*te,Ue=Ie/(-ge+te),Me=Ue*-ge;le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Me),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let R=Ge+Ue,E=Re+Ue,H=de-Me,oe=ee+(Ie-Me),ue=qe*Re/E*R,ae=U*Re/E*R;j.projectionMatrix.makePerspective(H,oe,ue,ae,R,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function K(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;b.near=w.near=S.near=j.near,b.far=w.far=S.far=j.far,(M!==b.near||L!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,L=b.far);let le=j.parent,be=b.cameras;K(b,le);for(let Ie=0;Ie<be.length;Ie++)K(be[Ie],le);be.length===2?J(b,S,w):b.projectionMatrix.copy(S.projectionMatrix),q(j,b,le)};function q(j,le,be){be===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(j){l=j,c!==null&&(c.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let ie=null;function re(j,le){if(h=le.getViewerPose(u||o),g=le,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Ie=!1;be.length!==b.cameras.length&&(b.cameras.length=0,Ie=!0);for(let Te=0;Te<be.length;Te++){let ke=be[Te],Ge=null;if(d!==null)Ge=d.getViewport(ke);else{let qe=f.getViewSubImage(c,ke);Ge=qe.viewport,Te===0&&(e.setRenderTargetTextures(m,qe.colorTexture,c.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(m))}let Re=D[Te];Re===void 0&&(Re=new Dt,Re.layers.enable(Te),Re.viewport=new mt,D[Te]=Re),Re.matrix.fromArray(ke.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ke.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Te===0&&(b.matrix.copy(Re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ie===!0&&b.cameras.push(Re)}}for(let be=0;be<_.length;be++){let Ie=v[be],Te=_[be];Ie!==null&&Te!==void 0&&Te.update(Ie,le,u||o)}ie&&ie(j,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let _e=new wd;_e.setAnimationLoop(re),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}};function $6(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Td(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),c(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function c(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z6(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function u(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",p));let T=v.program;n.updateUBOMapping(_,T);let S=e.render.frame;r[_.id]!==S&&(c(_),r[_.id]=S)}function h(_){let v=f();_.__bindingPointIndex=v;let y=i.createBuffer(),T=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(_){let v=s[_.id],y=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,w=y.length;S<w;S++){let D=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,M=D.length;b<M;b++){let L=D[b];if(d(L,S,b,T)===!0){let N=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],I=0;for(let O=0;O<k.length;O++){let G=k[O],J=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+I,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,y,T){let S=_.value,w=v+"_"+y;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{let D=T[w];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return T[w]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function g(_){let v=_.uniforms,y=0,T=16;for(let w=0,D=v.length;w<D;w++){let b=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,L=b.length;M<L;M++){let N=b[M],k=Array.isArray(N.value)?N.value:[N.value];for(let I=0,O=k.length;I<O;I++){let G=k[I],J=x(G),K=y%T;K!==0&&T-K<J.boundary&&(y+=T-K),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=J.storage}}}let S=y%T;return S>0&&(y+=T-S),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){let v=_.target;v.removeEventListener("dispose",p);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:u,dispose:m}}var ki=class{constructor(e={}){let{canvas:t=np(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;let v=this,y=!1,T=0,S=0,w=null,D=-1,b=null,M=new mt,L=new mt,N=null,k=new Ve(0),I=0,O=t.width,G=t.height,J=1,K=null,q=null,ie=new mt(0,0,O,G),re=new mt(0,0,O,G),_e=!1,j=new yo,le=!1,be=!1,Ie=null,Te=new Fe,ke=new Q,Ge=new A,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return w===null?J:1}let U=n;function ge(C,V){for(let X=0;X<C.length;X++){let Z=C[X],Y=t.getContext(Z,V);if(Y!==null)return Y}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",B,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",W,!1),U===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),U=ge(V,C),U===null)throw ge(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,de,ee,Ue,Me,R,E,H,oe,ue,ae,Pe,se,Ae,Le,Ye,ce,Je,F,he,ve,me,Be,je;function Qe(){te=new p5(U),de=new l5(U,te,e),te.init(de),me=new q6(U,te,de),ee=new W6(U,te,de),Ue=new x5(U),Me=new L6,R=new X6(U,te,ee,Me,de,me,Ue),E=new u5(v),H=new d5(v),oe=new wp(U,de),Be=new o5(U,te,oe,de),ue=new m5(U,oe,Ue,Be),ae=new b5(U,ue,oe,Ue),F=new y5(U,de,R),Ye=new c5(Me),Pe=new I6(v,E,H,te,de,Be,Ye),se=new $6(v,Me),Ae=new N6,Le=new k6(te,de),Je=new r5(v,E,H,ee,ae,c,l),ce=new G6(v,ae,de),je=new Z6(U,Ue,de,ee),he=new a5(U,te,Ue,de),ve=new g5(U,te,Ue,de),Ue.programs=Pe.programs,v.capabilities=de,v.extensions=te,v.properties=Me,v.renderLists=Ae,v.shadowMap=ce,v.state=ee,v.info=Ue}Qe();let z=new Ou(v,U);this.xr=z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(O,G,!1))},this.getSize=function(C){return C.set(O,G)},this.setSize=function(C,V,X=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,G=V,t.width=Math.floor(C*J),t.height=Math.floor(V*J),X===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(O*J,G*J).floor()},this.setDrawingBufferSize=function(C,V,X){O=C,G=V,J=X,t.width=Math.floor(C*X),t.height=Math.floor(V*X),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,V,X,Z){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,V,X,Z),ee.viewport(M.copy(ie).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,V,X,Z){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,V,X,Z),ee.scissor(L.copy(re).multiplyScalar(J).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(C){ee.setScissorTest(_e=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,V=!0,X=!0){let Z=0;if(C){let Y=!1;if(w!==null){let we=w.texture.format;Y=we===Mr||we===br||we===hl}if(Y){let we=w.texture.type,De=we===gn||we===mn||we===Ro||we===Si||we===xd||we===vd,ze=Je.getClearColor(),Ee=Je.getClearAlpha(),We=ze.r,He=ze.g,Xe=ze.b;De?(d[0]=We,d[1]=He,d[2]=Xe,d[3]=Ee,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=We,g[1]=He,g[2]=Xe,g[3]=Ee,U.clearBufferiv(U.COLOR,0,g))}else Z|=U.COLOR_BUFFER_BIT}V&&(Z|=U.DEPTH_BUFFER_BIT),X&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",B,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Ae.dispose(),Le.dispose(),Me.dispose(),E.dispose(),H.dispose(),ae.dispose(),Be.dispose(),je.dispose(),Pe.dispose(),z.dispose(),z.removeEventListener("sessionstart",xe),z.removeEventListener("sessionend",Ce),Ie&&(Ie.dispose(),Ie=null),et.stop()};function B(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let C=Ue.autoReset,V=ce.enabled,X=ce.autoUpdate,Z=ce.needsUpdate,Y=ce.type;Qe(),Ue.autoReset=C,ce.enabled=V,ce.autoUpdate=X,ce.needsUpdate=Z,ce.type=Y}function W(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $(C){let V=C.target;V.removeEventListener("dispose",$),ne(V)}function ne(C){fe(C),Me.remove(C)}function fe(C){let V=Me.get(C).programs;V!==void 0&&(V.forEach(function(X){Pe.releaseProgram(X)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,X,Z,Y,we){V===null&&(V=Re);let De=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=Pi(C,V,X,Z,Y);ee.setMaterial(Z,De);let Ee=X.index,We=1;if(Z.wireframe===!0){if(Ee=ue.getWireframeAttribute(X),Ee===void 0)return;We=2}let He=X.drawRange,Xe=X.attributes.position,pt=He.start*We,Gt=(He.start+He.count)*We;we!==null&&(pt=Math.max(pt,we.start*We),Gt=Math.min(Gt,(we.start+we.count)*We)),Ee!==null?(pt=Math.max(pt,0),Gt=Math.min(Gt,Ee.count)):Xe!=null&&(pt=Math.max(pt,0),Gt=Math.min(Gt,Xe.count));let Ot=Gt-pt;if(Ot<0||Ot===1/0)return;Be.setup(Y,Z,ze,X,Ee);let hn,xt=he;if(Ee!==null&&(hn=oe.get(Ee),xt=ve,xt.setIndex(hn)),Y.isMesh)Z.wireframe===!0?(ee.setLineWidth(Z.wireframeLinewidth*qe()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(Y.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),ee.setLineWidth(Ne*qe()),Y.isLineSegments?xt.setMode(U.LINES):Y.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else Y.isPoints?xt.setMode(U.POINTS):Y.isSprite&&xt.setMode(U.TRIANGLES);if(Y.isBatchedMesh)xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)xt.renderInstances(pt,Ot,Y.count);else if(X.isInstancedBufferGeometry){let Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ft=Math.min(X.instanceCount,Ne);xt.renderInstances(pt,Ot,ft)}else xt.render(pt,Ot)};function pe(C,V,X){C.transparent===!0&&C.side===rn&&C.forceSinglePass===!1?(C.side=qt,C.needsUpdate=!0,Gn(C,V,X),C.side=An,C.needsUpdate=!0,Gn(C,V,X),C.side=rn):Gn(C,V,X)}this.compile=function(C,V,X=null){X===null&&(X=C),p=Le.get(X),p.init(),_.push(p),X.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),C!==X&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);let Z=new Set;return C.traverse(function(Y){let we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){let ze=we[De];pe(ze,X,Y),Z.add(ze)}else pe(we,X,Y),Z.add(we)}),_.pop(),p=null,Z},this.compileAsync=function(C,V,X=null){let Z=this.compile(C,V,X);return new Promise(Y=>{function we(){if(Z.forEach(function(De){Me.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){Y(C);return}setTimeout(we,10)}te.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ye=null;function lt(C){ye&&ye(C)}function xe(){et.stop()}function Ce(){et.start()}let et=new wd;et.setAnimationLoop(lt),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(C){ye=C,z.setAnimationLoop(C),C===null?et.stop():et.start()},z.addEventListener("sessionstart",xe),z.addEventListener("sessionend",Ce),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(V),V=z.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,w),p=Le.get(C,_.length),p.init(),_.push(p),Te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(Te),be=this.localClippingEnabled,le=Ye.init(this.clippingPlanes,be),x=Ae.get(C,m.length),x.init(),m.push(x),Qt(C,V,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,q),this.info.render.frame++,le===!0&&Ye.beginShadows();let X=p.state.shadowsArray;if(ce.render(X,C,V),le===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(x,C),p.setupLights(v._useLegacyLights),V.isArrayCamera){let Z=V.cameras;for(let Y=0,we=Z.length;Y<we;Y++){let De=Z[Y];Vn(x,C,De,De.viewport)}}else Vn(x,C,V);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(v,C,V),Be.resetDefaultState(),D=-1,b=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Qt(C,V,X,Z){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Z&&Ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);let De=ae.update(C),ze=C.material;ze.visible&&x.push(C,De,ze,X,Ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){let De=ae.update(C),ze=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ge.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ge.copy(De.boundingSphere.center)),Ge.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(ze)){let Ee=De.groups;for(let We=0,He=Ee.length;We<He;We++){let Xe=Ee[We],pt=ze[Xe.materialIndex];pt&&pt.visible&&x.push(C,De,pt,X,Ge.z,Xe)}}else ze.visible&&x.push(C,De,ze,X,Ge.z,null)}}let we=C.children;for(let De=0,ze=we.length;De<ze;De++)Qt(we[De],V,X,Z)}function Vn(C,V,X,Z){let Y=C.opaque,we=C.transmissive,De=C.transparent;p.setupLightsView(X),le===!0&&Ye.setGlobalState(v.clippingPlanes,X),we.length>0&&Ci(Y,we,V,X),Z&&ee.viewport(M.copy(Z)),Y.length>0&&Ln(Y,V,X),we.length>0&&Ln(we,V,X),De.length>0&&Ln(De,V,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ci(C,V,X,Z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let we=de.isWebGL2;Ie===null&&(Ie=new Rt(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?At:gn,minFilter:xo,samples:we?4:0})),v.getDrawingBufferSize(ke),we?Ie.setSize(ke.x,ke.y):Ie.setSize(Oa(ke.x),Oa(ke.y));let De=v.getRenderTarget();v.setRenderTarget(Ie),v.getClearColor(k),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let ze=v.toneMapping;v.toneMapping=ri,Ln(C,X,Z),R.updateMultisampleRenderTarget(Ie),R.updateRenderTargetMipmap(Ie);let Ee=!1;for(let We=0,He=V.length;We<He;We++){let Xe=V[We],pt=Xe.object,Gt=Xe.geometry,Ot=Xe.material,hn=Xe.group;if(Ot.side===rn&&pt.layers.test(Z.layers)){let xt=Ot.side;Ot.side=qt,Ot.needsUpdate=!0,sn(pt,X,Z,Gt,Ot,hn),Ot.side=xt,Ot.needsUpdate=!0,Ee=!0}}Ee===!0&&(R.updateMultisampleRenderTarget(Ie),R.updateRenderTargetMipmap(Ie)),v.setRenderTarget(De),v.setClearColor(k,I),v.toneMapping=ze}function Ln(C,V,X){let Z=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,we=C.length;Y<we;Y++){let De=C[Y],ze=De.object,Ee=De.geometry,We=Z===null?De.material:Z,He=De.group;ze.layers.test(X.layers)&&sn(ze,V,X,Ee,We,He)}}function sn(C,V,X,Z,Y,we){C.onBeforeRender(v,V,X,Z,Y,we),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,V,X,Z,C,we),Y.transparent===!0&&Y.side===rn&&Y.forceSinglePass===!1?(Y.side=qt,Y.needsUpdate=!0,v.renderBufferDirect(X,V,Z,Y,C,we),Y.side=An,Y.needsUpdate=!0,v.renderBufferDirect(X,V,Z,Y,C,we),Y.side=rn):v.renderBufferDirect(X,V,Z,Y,C,we),C.onAfterRender(v,V,X,Z,Y,we)}function Gn(C,V,X){V.isScene!==!0&&(V=Re);let Z=Me.get(C),Y=p.state.lights,we=p.state.shadowsArray,De=Y.state.version,ze=Pe.getParameters(C,Y.state,we,V,X),Ee=Pe.getProgramCacheKey(ze),We=Z.programs;Z.environment=C.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(C.isMeshStandardMaterial?H:E).get(C.envMap||Z.environment),We===void 0&&(C.addEventListener("dispose",$),We=new Map,Z.programs=We);let He=We.get(Ee);if(He!==void 0){if(Z.currentProgram===He&&Z.lightsStateVersion===De)return pi(C,ze),He}else ze.uniforms=Pe.getUniforms(C),C.onBuild(X,ze,v),C.onBeforeCompile(ze,v),He=Pe.acquireProgram(ze,Ee),We.set(Ee,He),Z.uniforms=ze.uniforms;let Xe=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Ye.uniform),pi(C,ze),Z.needsLights=os(C),Z.lightsStateVersion=De,Z.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=He,Z.uniformsList=null,He}function zs(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=lr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function pi(C,V){let X=Me.get(C);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function Pi(C,V,X,Z,Y){V.isScene!==!0&&(V=Re),R.resetTextureUnits();let we=V.fog,De=Z.isMeshStandardMaterial?V.environment:null,ze=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ti,Ee=(Z.isMeshStandardMaterial?H:E).get(Z.envMap||De),We=Z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,Gt=!!X.morphAttributes.color,Ot=ri;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=v.toneMapping);let hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=hn!==void 0?hn.length:0,Ne=Me.get(Z),ft=p.state.lights;if(le===!0&&(be===!0||C!==b)){let Dn=C===b&&Z.id===D;Ye.setState(Z,C,Dn)}let ot=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ft.state.version||Ne.outputColorSpace!==ze||Y.isBatchedMesh&&Ne.batching===!1||!Y.isBatchedMesh&&Ne.batching===!0||Y.isInstancedMesh&&Ne.instancing===!1||!Y.isInstancedMesh&&Ne.instancing===!0||Y.isSkinnedMesh&&Ne.skinning===!1||!Y.isSkinnedMesh&&Ne.skinning===!0||Y.isInstancedMesh&&Ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ne.instancingColor===!1&&Y.instanceColor!==null||Ne.envMap!==Ee||Z.fog===!0&&Ne.fog!==we||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ye.numPlanes||Ne.numIntersection!==Ye.numIntersection)||Ne.vertexAlphas!==We||Ne.vertexTangents!==He||Ne.morphTargets!==Xe||Ne.morphNormals!==pt||Ne.morphColors!==Gt||Ne.toneMapping!==Ot||de.isWebGL2===!0&&Ne.morphTargetsCount!==xt)&&(ot=!0):(ot=!0,Ne.__version=Z.version);let Wt=Ne.currentProgram;ot===!0&&(Wt=Gn(Z,V,Y));let ks=!1,io=!1,Nc=!1,an=Wt.getUniforms(),as=Ne.uniforms;if(ee.useProgram(Wt.program)&&(ks=!0,io=!0,Nc=!0),Z.id!==D&&(D=Z.id,io=!0),ks||b!==C){an.setValue(U,"projectionMatrix",C.projectionMatrix),an.setValue(U,"viewMatrix",C.matrixWorldInverse);let Dn=an.map.cameraPosition;Dn!==void 0&&Dn.setValue(U,Ge.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&an.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&an.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,io=!0,Nc=!0)}if(Y.isSkinnedMesh){an.setOptional(U,Y,"bindMatrix"),an.setOptional(U,Y,"bindMatrixInverse");let Dn=Y.skeleton;Dn&&(de.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),an.setValue(U,"boneTexture",Dn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(an.setOptional(U,Y,"batchingTexture"),an.setValue(U,"batchingTexture",Y._matricesTexture,R));let Fc=X.morphAttributes;if((Fc.position!==void 0||Fc.normal!==void 0||Fc.color!==void 0&&de.isWebGL2===!0)&&F.update(Y,X,Wt),(io||Ne.receiveShadow!==Y.receiveShadow)&&(Ne.receiveShadow=Y.receiveShadow,an.setValue(U,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(as.envMap.value=Ee,as.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),io&&(an.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&Ii(as,Nc),we&&Z.fog===!0&&se.refreshFogUniforms(as,we),se.refreshMaterialUniforms(as,Z,J,G,Ie),lr.upload(U,zs(Ne),as,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(lr.upload(U,zs(Ne),as,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&an.setValue(U,"center",Y.center),an.setValue(U,"modelViewMatrix",Y.modelViewMatrix),an.setValue(U,"normalMatrix",Y.normalMatrix),an.setValue(U,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Dn=Z.uniformsGroups;for(let Uc=0,e0=Dn.length;Uc<e0;Uc++)if(de.isWebGL2){let Pf=Dn[Uc];je.update(Pf,Wt),je.bind(Pf,Wt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wt}function Ii(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function os(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,V,X){Me.get(C.texture).__webglTexture=V,Me.get(C.depthTexture).__webglTexture=X;let Z=Me.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=X===void 0,Z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){let X=Me.get(C);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,X=0){w=C,T=V,S=X;let Z=!0,Y=null,we=!1,De=!1;if(C){let Ee=Me.get(C);Ee.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1):Ee.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ee.__hasExternalTextures&&R.rebindTextures(C,Me.get(C.texture).__webglTexture,Me.get(C.depthTexture).__webglTexture);let We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);let He=Me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[V])?Y=He[V][X]:Y=He[V],we=!0):de.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?Y=Me.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?Y=He[X]:Y=He,M.copy(C.viewport),L.copy(C.scissor),N=C.scissorTest}else M.copy(ie).multiplyScalar(J).floor(),L.copy(re).multiplyScalar(J).floor(),N=_e;if(ee.bindFramebuffer(U.FRAMEBUFFER,Y)&&de.drawBuffers&&Z&&ee.drawBuffers(C,Y),ee.viewport(M),ee.scissor(L),ee.setScissorTest(N),we){let Ee=Me.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ee.__webglTexture,X)}else if(De){let Ee=Me.get(C.texture),We=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,X||0,We)}D=-1},this.readRenderTargetPixels=function(C,V,X,Z,Y,we,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){ee.bindFramebuffer(U.FRAMEBUFFER,ze);try{let Ee=C.texture,We=Ee.format,He=Ee.type;if(We!==tt&&me.convert(We)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=He===At&&(te.has("EXT_color_buffer_half_float")||de.isWebGL2&&te.has("EXT_color_buffer_float"));if(He!==gn&&me.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===ct&&(de.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Z&&X>=0&&X<=C.height-Y&&U.readPixels(V,X,Z,Y,me.convert(We),me.convert(He),we)}finally{let Ee=w!==null?Me.get(w).__webglFramebuffer:null;ee.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(C,V,X=0){let Z=Math.pow(2,-X),Y=Math.floor(V.image.width*Z),we=Math.floor(V.image.height*Z);R.setTexture2D(V,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,C.x,C.y,Y,we),ee.unbindTexture()},this.copyTextureToTexture=function(C,V,X,Z=0){let Y=V.image.width,we=V.image.height,De=me.convert(X.format),ze=me.convert(X.type);R.setTexture2D(X,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment),V.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Z,C.x,C.y,Y,we,De,ze,V.image.data):V.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Z,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Z,C.x,C.y,De,ze,V.image),Z===0&&X.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(C,V,X,Z,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Ee=me.convert(Z.format),We=me.convert(Z.type),He;if(Z.isData3DTexture)R.setTexture3D(Z,0),He=U.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),He=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);let Xe=U.getParameter(U.UNPACK_ROW_LENGTH),pt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Gt=U.getParameter(U.UNPACK_SKIP_PIXELS),Ot=U.getParameter(U.UNPACK_SKIP_ROWS),hn=U.getParameter(U.UNPACK_SKIP_IMAGES),xt=X.isCompressedTexture?X.mipmaps[Y]:X.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(He,Y,V.x,V.y,V.z,we,De,ze,Ee,We,xt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(He,Y,V.x,V.y,V.z,we,De,ze,Ee,xt.data)):U.texSubImage3D(He,Y,V.x,V.y,V.z,we,De,ze,Ee,We,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Xe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,hn),Y===0&&Z.generateMipmaps&&U.generateMipmap(He),ee.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ee.unbindTexture()},this.resetState=function(){T=0,S=0,w=null,ee.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gh?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===fl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?ms:yd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ms?Vt:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Bu=class extends ki{};Bu.prototype.isWebGL1Renderer=!0;var Xa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cn=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Tt=class extends Rn{constructor(e=null,t=1,n=1,s,r,o,a,l,u=Ze,h=Ze,f,c){super(null,o,a,l,u,h,s,r,f,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qa=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},K2=new A,Q2=new A,ed=new Fe,fu=new wi,Sa=new Bi,zu=class extends tn{constructor(e=new at,t=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)K2.fromBufferAttribute(t,s-1),Q2.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=K2.distanceTo(Q2);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;ed.copy(s).invert(),fu.copy(e.ray).applyMatrix4(ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new A,h=new A,f=new A,c=new A,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let m=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=d){let T=g.getX(v),S=g.getX(v+1);if(u.fromBufferAttribute(p,T),h.fromBufferAttribute(p,S),fu.distanceSqToSegment(u,h,c,f)>l)continue;c.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(c);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=m,y=_-1;v<y;v+=d){if(u.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),fu.distanceSqToSegment(u,h,c,f)>l)continue;c.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(c);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},td=new A,nd=new A,ku=class extends zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)td.fromBufferAttribute(t,s),nd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+td.distanceTo(nd);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mr=class extends Rn{constructor(e,t,n,s,r,o,a,l,u){super(e,t,n,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],c=n[s+1]-h,d=(o-h)/c;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Q:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,l=new Fe;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let u=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),c=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),c<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Bt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Bt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Q,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),c=l-this.aX,d=u-this.aY;l=c*h-d*f+this.aX,u=c*f+d*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hu=class extends bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _h(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,h,f){let c=(o-r)/u-(a-r)/(u+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;c*=h,d*=h,s(o,a,c,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ta=new A,du=new _h,pu=new _h,mu=new _h,Vu=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,h;this.closed||a>0?u=s[(a-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),u=Ta);let f=s[a%r],c=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(c),d),p=Math.pow(c.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),du.initNonuniformCatmullRom(u.x,f.x,c.x,h.x,g,x,p),pu.initNonuniformCatmullRom(u.y,f.y,c.y,h.y,g,x,p),mu.initNonuniformCatmullRom(u.z,f.z,c.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(du.initCatmullRom(u.x,f.x,c.x,h.x,this.tension),pu.initCatmullRom(u.y,f.y,c.y,h.y,this.tension),mu.initCatmullRom(u.z,f.z,c.z,h.z,this.tension));return n.set(du.calc(l),pu.calc(l),mu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function id(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function j6(i,e){let t=1-i;return t*t*e}function J6(i,e){return 2*(1-i)*i*e}function K6(i,e){return i*i*e}function po(i,e,t,n){return j6(i,e)+J6(i,t)+K6(i,n)}function Q6(i,e){let t=1-i;return t*t*t*e}function e9(i,e){let t=1-i;return 3*t*t*i*e}function t9(i,e){return 3*(1-i)*i*i*e}function n9(i,e){return i*i*i*e}function mo(i,e,t,n,s){return Q6(i,e)+e9(i,t)+t9(i,n)+n9(i,s)}var Ya=class extends Bn{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gu=class extends Bn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Bn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wu=class extends Bn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Bn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xu=class extends Bn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(id(a,l.x,u.x,h.x,f.x),id(a,l.y,u.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},qu=Object.freeze({__proto__:null,ArcCurve:Hu,CatmullRomCurve3:Vu,CubicBezierCurve:Ya,CubicBezierCurve3:Gu,EllipseCurve:bo,LineCurve:$a,LineCurve3:Wu,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Xu,SplineCurve:ja}),Yu=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){let h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new qu[s.type]().fromJSON(s))}return this}},Hi=class extends Yu{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Za(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ya(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ja(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let u=new bo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);let h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ja=class i extends at{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],u=[],h=1/t,f=new A,c=new Q,d=new A,g=new A,x=new A,p=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let v=n+_*h*s,y=Math.sin(v),T=Math.cos(v);for(let S=0;S<=e.length-1;S++){f.x=e[S].x*y,f.y=e[S].y,f.z=e[S].x*T,o.push(f.x,f.y,f.z),c.x=_/t,c.y=S/(e.length-1),a.push(c.x,c.y);let w=l[3*S+0]*y,D=l[3*S+1],b=l[3*S+0]*T;u.push(w,D,b)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,T=y,S=y+e.length,w=y+e.length+1,D=y+1;r.push(T,S,D),r.push(w,D,S)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var gr=class i extends at{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],c=[],d=[],g=0,x=[],p=n/2,m=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new it(f,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(d,2));function _(){let y=new A,T=new A,S=0,w=(t-e)/n;for(let D=0;D<=r;D++){let b=[],M=D/r,L=M*(t-e)+e;for(let N=0;N<=s;N++){let k=N/s,I=k*l+a,O=Math.sin(I),G=Math.cos(I);T.x=L*O,T.y=-M*n+p,T.z=L*G,f.push(T.x,T.y,T.z),y.set(O,w,G).normalize(),c.push(y.x,y.y,y.z),d.push(k,1-M),b.push(g++)}x.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let M=x[b][D],L=x[b+1][D],N=x[b+1][D+1],k=x[b][D+1];h.push(M,L,k),h.push(L,N,k),S+=6}u.addGroup(m,S,0),m+=S}function v(y){let T=g,S=new Q,w=new A,D=0,b=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*M,0),c.push(0,M,0),d.push(.5,.5),g++;let L=g;for(let N=0;N<=s;N++){let I=N/s*l+a,O=Math.cos(I),G=Math.sin(I);w.x=b*G,w.y=p*M,w.z=b*O,f.push(w.x,w.y,w.z),c.push(0,M,0),S.x=O*.5+.5,S.y=G*.5*M+.5,d.push(S.x,S.y),g++}for(let N=0;N<s;N++){let k=T+N,I=L+N;y===!0?h.push(I,I+1,k):h.push(I+1,I,k),D+=3}u.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vi=class extends Hi{constructor(e){super(e),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Hi().fromJSON(s))}return this}},i9={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Id(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,u,h,f,c,d;if(n&&(r=l9(i,e,r,t)),i.length>80*t){a=u=i[0],l=h=i[1];for(let g=t;g<s;g+=t)f=i[g],c=i[g+1],f<a&&(a=f),c<l&&(l=c),f>u&&(u=f),c>h&&(h=c);d=Math.max(u-a,h-l),d=d!==0?32767/d:0}return Mo(r,o,t,a,l,d,0),o}};function Id(i,e,t,n,s){let r,o;if(s===_9(i,e,t,n)>0)for(r=e;r<t;r+=n)o=sd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=sd(r,i[r],i[r+1],o);return o&&pl(o,o.next)&&(To(o),o=o.next),o}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pl(t,t.next)||Nt(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&d9(i,n,s,r);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,r?r9(i,n,s,r):s9(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),To(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=o9(_s(i),e,t),Mo(i,e,t,n,s,r,2)):o===2&&a9(i,e,t,n,s,r):Mo(_s(i),e,t,n,s,r,1);break}}}function s9(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<u?a:u:l<u?l:u,c=s>r?s>o?s:o:r>o?r:o,d=a>l?a>u?a:u:l>u?l:u,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=c&&g.y>=f&&g.y<=d&&or(s,a,r,l,o,u,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function r9(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,u=o.x,h=s.y,f=r.y,c=o.y,d=a<l?a<u?a:u:l<u?l:u,g=h<f?h<c?h:c:f<c?f:c,x=a>l?a>u?a:u:l>u?l:u,p=h>f?h>c?h:c:f>c?f:c,m=$u(d,g,e,t,n),_=$u(x,p,e,t,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,h,l,f,u,c,v.x,v.y)&&Nt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&or(a,h,l,f,u,c,y.x,y.y)&&Nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,h,l,f,u,c,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&or(a,h,l,f,u,c,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function o9(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!pl(s,r)&&Ld(s,n,n.next,r)&&So(s,r)&&So(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),To(n),To(n.next),n=i=r),n=n.next}while(n!==i);return _s(n)}function a9(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g9(o,a)){let l=Dd(o,a);o=_s(o,o.next),l=_s(l,l.next),Mo(o,e,t,n,s,r,0),Mo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function l9(i,e,t,n){let s=[],r,o,a,l,u;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,u=Id(i,a,l,n,!1),u===u.next&&(u.steiner=!0),s.push(m9(u));for(s.sort(c9),r=0;r<s.length;r++)t=u9(s[r],t);return t}function c9(i,e){return i.x-e.x}function u9(i,e){let t=h9(i,e);if(!t)return e;let n=Dd(t,i);return _s(n,n.next),_s(t,t.next)}function h9(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let c=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(c<=r&&c>n&&(n=c,s=t.x<t.next.x?t:t.next,c===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,u=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&or(o<u?r:n,o,l,u,o<u?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),So(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&f9(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function f9(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function d9(i,e,t,n){let s=i;do s.z===0&&(s.z=$u(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,p9(s)}function p9(i){let e,t,n,s,r,o,a,l,u=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<u&&(a++,n=n.nextZ,!!n);e++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,u*=2}while(o>1);return i}function $u(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function m9(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function or(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function g9(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!x9(i,e)&&(So(i,e)&&So(e,i)&&v9(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||pl(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pl(i,e){return i.x===e.x&&i.y===e.y}function Ld(i,e,t,n){let s=Ea(Nt(i,e,t)),r=Ea(Nt(i,e,n)),o=Ea(Nt(t,n,i)),a=Ea(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&wa(i,t,e)||r===0&&wa(i,n,e)||o===0&&wa(t,i,n)||a===0&&wa(t,e,n))}function wa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ea(i){return i>0?1:i<0?-1:0}function x9(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ld(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function So(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function v9(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dd(i,e){let t=new Zu(i.i,i.x,i.y),n=new Zu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sd(i,e,t,n){let s=new Zu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function To(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _9(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var go=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rd(e),od(n,e);let o=e.length;t.forEach(rd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,od(n,t[l]);let a=i9.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function od(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ys=class i extends at{constructor(e=new Vi([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let u=e[a];o(u)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let l=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,c=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:y9,v,y=!1,T,S,w,D;m&&(v=m.getSpacedPoints(h),y=!0,c=!1,T=m.computeFrenetFrames(h,!1),S=new A,w=new A,D=new A),c||(p=0,d=0,g=0,x=0);let b=a.extractPoints(u),M=b.shape,L=b.holes;if(!go.isClockWise(M)){M=M.reverse();for(let U=0,ge=L.length;U<ge;U++){let te=L[U];go.isClockWise(te)&&(L[U]=te.reverse())}}let k=go.triangulateShape(M,L),I=M;for(let U=0,ge=L.length;U<ge;U++){let te=L[U];M=M.concat(te)}function O(U,ge,te){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ge,te)}let G=M.length,J=k.length;function K(U,ge,te){let de,ee,Ue,Me=U.x-ge.x,R=U.y-ge.y,E=te.x-U.x,H=te.y-U.y,oe=Me*Me+R*R,ue=Me*H-R*E;if(Math.abs(ue)>Number.EPSILON){let ae=Math.sqrt(oe),Pe=Math.sqrt(E*E+H*H),se=ge.x-R/ae,Ae=ge.y+Me/ae,Le=te.x-H/Pe,Ye=te.y+E/Pe,ce=((Le-se)*H-(Ye-Ae)*E)/(Me*H-R*E);de=se+Me*ce-U.x,ee=Ae+R*ce-U.y;let Je=de*de+ee*ee;if(Je<=2)return new Q(de,ee);Ue=Math.sqrt(Je/2)}else{let ae=!1;Me>Number.EPSILON?E>Number.EPSILON&&(ae=!0):Me<-Number.EPSILON?E<-Number.EPSILON&&(ae=!0):Math.sign(R)===Math.sign(H)&&(ae=!0),ae?(de=-R,ee=Me,Ue=Math.sqrt(oe)):(de=Me,ee=R,Ue=Math.sqrt(oe/2))}return new Q(de/Ue,ee/Ue)}let q=[];for(let U=0,ge=I.length,te=ge-1,de=U+1;U<ge;U++,te++,de++)te===ge&&(te=0),de===ge&&(de=0),q[U]=K(I[U],I[te],I[de]);let ie=[],re,_e=q.concat();for(let U=0,ge=L.length;U<ge;U++){let te=L[U];re=[];for(let de=0,ee=te.length,Ue=ee-1,Me=de+1;de<ee;de++,Ue++,Me++)Ue===ee&&(Ue=0),Me===ee&&(Me=0),re[de]=K(te[de],te[Ue],te[Me]);ie.push(re),_e=_e.concat(re)}for(let U=0;U<p;U++){let ge=U/p,te=d*Math.cos(ge*Math.PI/2),de=g*Math.sin(ge*Math.PI/2)+x;for(let ee=0,Ue=I.length;ee<Ue;ee++){let Me=O(I[ee],q[ee],de);Te(Me.x,Me.y,-te)}for(let ee=0,Ue=L.length;ee<Ue;ee++){let Me=L[ee];re=ie[ee];for(let R=0,E=Me.length;R<E;R++){let H=O(Me[R],re[R],de);Te(H.x,H.y,-te)}}}let j=g+x;for(let U=0;U<G;U++){let ge=c?O(M[U],_e[U],j):M[U];y?(w.copy(T.normals[0]).multiplyScalar(ge.x),S.copy(T.binormals[0]).multiplyScalar(ge.y),D.copy(v[0]).add(w).add(S),Te(D.x,D.y,D.z)):Te(ge.x,ge.y,0)}for(let U=1;U<=h;U++)for(let ge=0;ge<G;ge++){let te=c?O(M[ge],_e[ge],j):M[ge];y?(w.copy(T.normals[U]).multiplyScalar(te.x),S.copy(T.binormals[U]).multiplyScalar(te.y),D.copy(v[U]).add(w).add(S),Te(D.x,D.y,D.z)):Te(te.x,te.y,f/h*U)}for(let U=p-1;U>=0;U--){let ge=U/p,te=d*Math.cos(ge*Math.PI/2),de=g*Math.sin(ge*Math.PI/2)+x;for(let ee=0,Ue=I.length;ee<Ue;ee++){let Me=O(I[ee],q[ee],de);Te(Me.x,Me.y,f+te)}for(let ee=0,Ue=L.length;ee<Ue;ee++){let Me=L[ee];re=ie[ee];for(let R=0,E=Me.length;R<E;R++){let H=O(Me[R],re[R],de);y?Te(H.x,H.y+v[h-1].y,v[h-1].x+te):Te(H.x,H.y,f+te)}}}le(),be();function le(){let U=s.length/3;if(c){let ge=0,te=G*ge;for(let de=0;de<J;de++){let ee=k[de];ke(ee[2]+te,ee[1]+te,ee[0]+te)}ge=h+p*2,te=G*ge;for(let de=0;de<J;de++){let ee=k[de];ke(ee[0]+te,ee[1]+te,ee[2]+te)}}else{for(let ge=0;ge<J;ge++){let te=k[ge];ke(te[2],te[1],te[0])}for(let ge=0;ge<J;ge++){let te=k[ge];ke(te[0]+G*h,te[1]+G*h,te[2]+G*h)}}n.addGroup(U,s.length/3-U,0)}function be(){let U=s.length/3,ge=0;Ie(I,ge),ge+=I.length;for(let te=0,de=L.length;te<de;te++){let ee=L[te];Ie(ee,ge),ge+=ee.length}n.addGroup(U,s.length/3-U,1)}function Ie(U,ge){let te=U.length;for(;--te>=0;){let de=te,ee=te-1;ee<0&&(ee=U.length-1);for(let Ue=0,Me=h+p*2;Ue<Me;Ue++){let R=G*Ue,E=G*(Ue+1),H=ge+de+R,oe=ge+ee+R,ue=ge+ee+E,ae=ge+de+E;Ge(H,oe,ue,ae)}}}function Te(U,ge,te){l.push(U),l.push(ge),l.push(te)}function ke(U,ge,te){Re(U),Re(ge),Re(te);let de=s.length/3,ee=_.generateTopUV(n,s,de-3,de-2,de-1);qe(ee[0]),qe(ee[1]),qe(ee[2])}function Ge(U,ge,te,de){Re(U),Re(ge),Re(de),Re(ge),Re(te),Re(de);let ee=s.length/3,Ue=_.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);qe(Ue[0]),qe(Ue[1]),qe(Ue[3]),qe(Ue[1]),qe(Ue[2]),qe(Ue[3])}function Re(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function qe(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return b9(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qu[s.type]().fromJSON(s)),new i(n,e.options)}},y9={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,l),new Q(u,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],h=e[n*3+1],f=e[n*3+2],c=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new Q(o,1-l),new Q(u,1-f),new Q(c,1-g),new Q(x,1-m)]:[new Q(a,1-l),new Q(h,1-f),new Q(d,1-g),new Q(p,1-m)]}};function b9(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ka=class i extends at{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),u=0,h=[],f=new A,c=new A,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],v=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let S=T/t;f.x=-e*Math.cos(s+S*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+S*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),c.copy(f).normalize(),x.push(c.x,c.y,c.z),p.push(S+y,1-v),_.push(u++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=h[m][_+1],y=h[m][_],T=h[m+1][_],S=h[m+1][_+1];(m!==0||o>0)&&d.push(v,y,S),(m!==n-1||l<Math.PI)&&d.push(y,T,S)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qa=class i extends at{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],u=[],h=new A,f=new A,c=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,p=d/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),c.subVectors(f,h).normalize(),l.push(c.x,c.y,c.z),u.push(g/s),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(x,p,_),o.push(p,m,_)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var el=class extends ai{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},tl=class extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends $e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var nl=class extends ai{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function M9(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ju=class extends xr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:l2,endingEnd:l2}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case c2:r=e,a=2*t-n;break;case u2:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case c2:o=e,l=2*n-t;break;case u2:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,f=this._offsetNext,c=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-c*p+2*c*x-c*g,_=(1+c)*p+(-1.5-2*c)*x+(-.5+c)*g+1,v=(-1-d)*p+(1.5+d)*x+.5*g,y=d*p-d*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+_*o[u+T]+v*o[l+T]+y*o[f+T];return r}},Ju=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(s-t),f=1-h;for(let c=0;c!==a;++c)r[c]=o[u+c]*f+o[l+c]*h;return r}},Ku=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ju(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&M9(s))for(let a=0,l=s.length;a!==l;++a){let u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)l=!0;else{let f=a*n,c=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[c+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,c=o*n;for(let d=0;d!==n;++d)t[c+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=La;var bs=class extends $n{};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Ia;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qu=class extends $n{};Qu.prototype.ValueTypeName="color";var eh=class extends $n{};eh.prototype.ValueTypeName="number";var th=class extends xr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),u=e*a;for(let h=u+a;u!==h;u+=4)un.slerpFlat(r,0,o,u-a,o,u,l);return r}},wo=class extends $n{InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.DefaultInterpolation=La;wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends $n{};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Ia;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends $n{};nh.prototype.ValueTypeName="vector";var ih=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,c=u.length;f<c;f+=2){let d=u[f],g=u[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},S9=new ih,sh=class{constructor(e){this.manager=e!==void 0?e:S9,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Eo=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ss=class extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gu=new Fe,ad=new A,ld=new A,il=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var cd=new Fe,lo=new A,xu=new A,rh=class extends il{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),xu.copy(n.position),xu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xu),n.updateMatrixWorld(),s.makeTranslation(-lo.x,-lo.y,-lo.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}},sl=class extends Eo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},oh=class extends il{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var vr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ud();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ud(){return(typeof performance>"u"?Date:performance).now()}var yh="\\[\\]\\.:\\/",T9=new RegExp("["+yh+"]","g"),bh="[^"+yh+"]",w9="[^"+yh.replace("\\.","")+"]",E9=/((?:WC+[\/:])*)/.source.replace("WC",bh),A9=/(WCOD+)?/.source.replace("WCOD",w9),R9=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),C9=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),P9=new RegExp("^"+E9+A9+R9+C9+"$"),I9=["material","materials","bones","map"],ah=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T9,"")}static parseTrackName(e){let t=P9.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);I9.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=ah;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T7=new Float32Array(1);var rl=class{constructor(e,t,n=0,s=1/0){this.ray=new wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return lh(e,this,n,t),n.sort(hd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)lh(e[s],this,n,t);return n.sort(hd),n}};function hd(i,e){return i.distance-e.distance}function lh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)lh(s[r],e,t,!0)}}var Ts=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fd=new A,Ra=new A,_n=class{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fd.subVectors(e,this.start),Ra.subVectors(this.end,this.start);let n=Ra.dot(Ra),r=Ra.dot(fd)/n;return t&&(r=Bt(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ol=class extends ku{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ve(n),s=new Ve(s);let r=t/2,o=e/t,a=e/2,l=[],u=[];for(let c=0,d=0,g=-a;c<=t;c++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=c===r?n:s;x.toArray(u,d),d+=3,x.toArray(u,d),d+=3,x.toArray(u,d),d+=3,x.toArray(u,d),d+=3}let h=new at;h.setAttribute("position",new it(l,3)),h.setAttribute("color",new it(u,3));let f=new qa({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Fd={type:"change"},Mh={type:"start"},Ud={type:"end"},ml=new wi,Od=new pn,L9=Math.cos(70*zt.DEG2RAD),Tr=class extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",ae),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fd),n.update(),r=s.NONE},this.update=(function(){let F=new A,he=new un().setFromUnitVectors(e.up,new A(0,1,0)),ve=he.clone().invert(),me=new A,Be=new un,je=new A,Qe=2*Math.PI;return function(B=null){let P=n.object.position;F.copy(P).sub(n.target),F.applyQuaternion(he),a.setFromVector3(F),n.autoRotate&&r===s.NONE&&L(b(B)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let W=n.minAzimuthAngle,$=n.maxAzimuthAngle;isFinite(W)&&isFinite($)&&(W<-Math.PI?W+=Qe:W>Math.PI&&(W-=Qe),$<-Math.PI?$+=Qe:$>Math.PI&&($-=Qe),W<=$?a.theta=Math.max(W,Math.min($,a.theta)):a.theta=a.theta>(W+$)/2?Math.max(W,a.theta):Math.min($,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*u),F.setFromSpherical(a),F.applyQuaternion(ve),P.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ne=!1;if(n.zoomToCursor&&S){let fe=null;if(n.object.isPerspectiveCamera){let pe=F.length();fe=q(pe*u);let ye=pe-fe;n.object.position.addScaledVector(y,ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let pe=new A(T.x,T.y,0);pe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ne=!0;let ye=new A(T.x,T.y,0);ye.unproject(n.object),n.object.position.sub(ye).add(pe),n.object.updateMatrixWorld(),fe=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(fe).add(n.object.position):(ml.origin.copy(n.object.position),ml.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ml.direction))<L9?e.lookAt(n.target):(Od.setFromNormalAndCoplanarPoint(n.object.up,n.target),ml.intersectPlane(Od,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ne=!0);return u=1,S=!1,ne||me.distanceToSquared(n.object.position)>o||8*(1-Be.dot(n.object.quaternion))>o||je.distanceToSquared(n.target)>0?(n.dispatchEvent(Fd),me.copy(n.object.position),Be.copy(n.object.quaternion),je.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",Me),n.domElement.removeEventListener("pointercancel",E),n.domElement.removeEventListener("wheel",ue),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ae),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Ts,l=new Ts,u=1,h=new A,f=new Q,c=new Q,d=new Q,g=new Q,x=new Q,p=new Q,m=new Q,_=new Q,v=new Q,y=new A,T=new Q,S=!1,w=[],D={};function b(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function M(F){let he=Math.abs(F)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*he)}function L(F){l.theta-=F}function N(F){l.phi-=F}let k=(function(){let F=new A;return function(ve,me){F.setFromMatrixColumn(me,0),F.multiplyScalar(-ve),h.add(F)}})(),I=(function(){let F=new A;return function(ve,me){n.screenSpacePanning===!0?F.setFromMatrixColumn(me,1):(F.setFromMatrixColumn(me,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(ve),h.add(F)}})(),O=(function(){let F=new A;return function(ve,me){let Be=n.domElement;if(n.object.isPerspectiveCamera){let je=n.object.position;F.copy(je).sub(n.target);let Qe=F.length();Qe*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ve*Qe/Be.clientHeight,n.object.matrix),I(2*me*Qe/Be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ve*(n.object.right-n.object.left)/n.object.zoom/Be.clientWidth,n.object.matrix),I(me*(n.object.top-n.object.bottom)/n.object.zoom/Be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function G(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(F,he){if(!n.zoomToCursor)return;S=!0;let ve=n.domElement.getBoundingClientRect(),me=F-ve.left,Be=he-ve.top,je=ve.width,Qe=ve.height;T.x=me/je*2-1,T.y=-(Be/Qe)*2+1,y.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function ie(F){f.set(F.clientX,F.clientY)}function re(F){K(F.clientX,F.clientX),m.set(F.clientX,F.clientY)}function _e(F){g.set(F.clientX,F.clientY)}function j(F){c.set(F.clientX,F.clientY),d.subVectors(c,f).multiplyScalar(n.rotateSpeed);let he=n.domElement;L(2*Math.PI*d.x/he.clientHeight),N(2*Math.PI*d.y/he.clientHeight),f.copy(c),n.update()}function le(F){_.set(F.clientX,F.clientY),v.subVectors(_,m),v.y>0?G(M(v.y)):v.y<0&&J(M(v.y)),m.copy(_),n.update()}function be(F){x.set(F.clientX,F.clientY),p.subVectors(x,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(x),n.update()}function Ie(F){K(F.clientX,F.clientY),F.deltaY<0?J(M(F.deltaY)):F.deltaY>0&&G(M(F.deltaY)),n.update()}function Te(F){let he=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),he=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),he=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),he=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),he=!0;break}he&&(F.preventDefault(),n.update())}function ke(F){if(w.length===1)f.set(F.pageX,F.pageY);else{let he=Je(F),ve=.5*(F.pageX+he.x),me=.5*(F.pageY+he.y);f.set(ve,me)}}function Ge(F){if(w.length===1)g.set(F.pageX,F.pageY);else{let he=Je(F),ve=.5*(F.pageX+he.x),me=.5*(F.pageY+he.y);g.set(ve,me)}}function Re(F){let he=Je(F),ve=F.pageX-he.x,me=F.pageY-he.y,Be=Math.sqrt(ve*ve+me*me);m.set(0,Be)}function qe(F){n.enableZoom&&Re(F),n.enablePan&&Ge(F)}function U(F){n.enableZoom&&Re(F),n.enableRotate&&ke(F)}function ge(F){if(w.length==1)c.set(F.pageX,F.pageY);else{let ve=Je(F),me=.5*(F.pageX+ve.x),Be=.5*(F.pageY+ve.y);c.set(me,Be)}d.subVectors(c,f).multiplyScalar(n.rotateSpeed);let he=n.domElement;L(2*Math.PI*d.x/he.clientHeight),N(2*Math.PI*d.y/he.clientHeight),f.copy(c)}function te(F){if(w.length===1)x.set(F.pageX,F.pageY);else{let he=Je(F),ve=.5*(F.pageX+he.x),me=.5*(F.pageY+he.y);x.set(ve,me)}p.subVectors(x,g).multiplyScalar(n.panSpeed),O(p.x,p.y),g.copy(x)}function de(F){let he=Je(F),ve=F.pageX-he.x,me=F.pageY-he.y,Be=Math.sqrt(ve*ve+me*me);_.set(0,Be),v.set(0,Math.pow(_.y/m.y,n.zoomSpeed)),G(v.y),m.copy(_);let je=(F.pageX+he.x)*.5,Qe=(F.pageY+he.y)*.5;K(je,Qe)}function ee(F){n.enableZoom&&de(F),n.enablePan&&te(F)}function Ue(F){n.enableZoom&&de(F),n.enableRotate&&ge(F)}function Me(F){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",E)),Le(F),F.pointerType==="touch"?Pe(F):H(F))}function R(F){n.enabled!==!1&&(F.pointerType==="touch"?se(F):oe(F))}function E(F){Ye(F),w.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",E)),n.dispatchEvent(Ud),r=s.NONE}function H(F){let he;switch(F.button){case 0:he=n.mouseButtons.LEFT;break;case 1:he=n.mouseButtons.MIDDLE;break;case 2:he=n.mouseButtons.RIGHT;break;default:he=-1}switch(he){case ws.DOLLY:if(n.enableZoom===!1)return;re(F),r=s.DOLLY;break;case ws.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;_e(F),r=s.PAN}else{if(n.enableRotate===!1)return;ie(F),r=s.ROTATE}break;case ws.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;ie(F),r=s.ROTATE}else{if(n.enablePan===!1)return;_e(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mh)}function oe(F){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;j(F);break;case s.DOLLY:if(n.enableZoom===!1)return;le(F);break;case s.PAN:if(n.enablePan===!1)return;be(F);break}}function ue(F){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(F.preventDefault(),n.dispatchEvent(Mh),Ie(F),n.dispatchEvent(Ud))}function ae(F){n.enabled===!1||n.enablePan===!1||Te(F)}function Pe(F){switch(ce(F),w.length){case 1:switch(n.touches.ONE){case Es.ROTATE:if(n.enableRotate===!1)return;ke(F),r=s.TOUCH_ROTATE;break;case Es.PAN:if(n.enablePan===!1)return;Ge(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Es.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(F),r=s.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mh)}function se(F){switch(ce(F),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(F),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;te(F),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(F),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(F),n.update();break;default:r=s.NONE}}function Ae(F){n.enabled!==!1&&F.preventDefault()}function Le(F){w.push(F.pointerId)}function Ye(F){delete D[F.pointerId];for(let he=0;he<w.length;he++)if(w[he]==F.pointerId){w.splice(he,1);return}}function ce(F){let he=D[F.pointerId];he===void 0&&(he=new Q,D[F.pointerId]=he),he.set(F.pageX,F.pageY)}function Je(F){let he=F.pointerId===w[0]?w[1]:w[0];return D[he]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",Me),n.domElement.addEventListener("pointercancel",E),n.domElement.addEventListener("wheel",ue,{passive:!1}),this.update()}};var Er=class extends Cn{constructor(e=null){super();let t=new $t;t.deleteAttribute("uv");let n=new $e({side:qt}),s=new $e,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new sl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ke(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Ke(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let u=new Ke(t,s);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);let h=new Ke(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new Ke(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let c=new Ke(t,s);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let d=new Ke(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new Ke(t,wr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Ke(t,wr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let p=new Ke(t,wr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let m=new Ke(t,wr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let _=new Ke(t,wr(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let v=new Ke(t,wr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function wr(i){let e=new On;return e.color.setScalar(i),e}function Ar(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new at,u=0;for(let h=0;h<i.length;++h){let f=i[h],c=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,h),u+=d}}if(t){let h=0,f=[];for(let c=0;c<i.length;++c){let d=i[c].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[c].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Bd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let c=0;c<f;++c){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][c]);let g=Bd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Bd(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let u=0;u<i.length;++u)o.set(i[u].array,a),a+=i[u].array.length;let l=new ut(o,t,n);return s!==void 0&&(l.gpuType=s),l}function qi(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new A,new A,new A],r=new A,o=new A,a=new A,l=new A;function u(x){let p=~~(x.x*n),m=~~(x.y*n),_=~~(x.z*n);return`${p},${m},${_}`}let h=i.index?i.toNonIndexed():i,f=h.attributes.position,c={};for(let x=0,p=f.count/3;x<p;x++){let m=3*x,_=s[0].fromBufferAttribute(f,m+0),v=s[1].fromBufferAttribute(f,m+1),y=s[2].fromBufferAttribute(f,m+2);r.subVectors(y,v),o.subVectors(_,v);let T=new A().crossVectors(r,o).normalize();for(let S=0;S<3;S++){let w=s[S],D=u(w);D in c||(c[D]=[]),c[D].push(T)}}let d=new Float32Array(f.count*3),g=new ut(d,3,!1);for(let x=0,p=f.count/3;x<p;x++){let m=3*x,_=s[0].fromBufferAttribute(f,m+0),v=s[1].fromBufferAttribute(f,m+1),y=s[2].fromBufferAttribute(f,m+2);r.subVectors(y,v),o.subVectors(_,v),a.crossVectors(r,o).normalize();for(let T=0;T<3;T++){let S=s[T],w=u(S),D=c[w];l.set(0,0,0);for(let b=0,M=D.length;b<M;b++){let L=D[b];a.dot(L)>t&&l.add(L)}l.normalize(),g.setXYZ(m+T,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}var zd=Math.pow(2,-24),gl=Symbol("SKIP_GENERATION");function Sh(i){return i.index?i.index.count:i.attributes.position.count}function li(i){return Sh(i)/3}function Th(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function kd(i,e){if(!i.index){let t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Th(t,n);i.setIndex(new ut(s,1));for(let r=0;r<t;r++)s[r]=r}}function wh(i){let e=li(i),t=i.drawRange,n=t.start/3,s=(t.start+t.count)/3,r=Math.max(0,n),o=Math.min(e,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Eh(i){if(!i.groups||!i.groups.length)return wh(i);let e=[],t=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(let a of i.groups){let l=a.start/3,u=(a.start+a.count)/3;t.add(Math.max(s,l)),t.add(Math.min(r,u))}let o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){let l=o[a],u=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function Hd(i){if(i.groups.length===0)return!1;let e=li(i),t=Eh(i).sort((r,o)=>r.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let s=0;return t.forEach(({count:r})=>s+=r),e!==s}function xl(i,e,t,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,u=-1/0,h=-1/0,f=1/0,c=1/0,d=1/0,g=-1/0,x=-1/0,p=-1/0;for(let m=e*6,_=(e+t)*6;m<_;m+=6){let v=i[m+0],y=i[m+1],T=v-y,S=v+y;T<r&&(r=T),S>l&&(l=S),v<f&&(f=v),v>g&&(g=v);let w=i[m+2],D=i[m+3],b=w-D,M=w+D;b<o&&(o=b),M>u&&(u=M),w<c&&(c=w),w>x&&(x=w);let L=i[m+4],N=i[m+5],k=L-N,I=L+N;k<a&&(a=k),I>h&&(h=I),L<d&&(d=L),L>p&&(p=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=u,n[5]=h,s[0]=f,s[1]=c,s[2]=d,s[3]=g,s[4]=x,s[5]=p}function Vd(i,e=null,t=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,o=li(i),a=s.normalized,l;e===null?(l=new Float32Array(o*6*4),t=0,n=o):(l=e,t=t||0,n=n||o);let u=s.array,h=s.offset||0,f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);let c=["getX","getY","getZ"];for(let d=t;d<t+n;d++){let g=d*3,x=d*6,p=g+0,m=g+1,_=g+2;r&&(p=r[p],m=r[m],_=r[_]),a||(p=p*f+h,m=m*f+h,_=_*f+h);for(let v=0;v<3;v++){let y,T,S;a?(y=s[c[v]](p),T=s[c[v]](m),S=s[c[v]](_)):(y=u[p+v],T=u[m+v],S=u[_+v]);let w=y;T<w&&(w=T),S<w&&(w=S);let D=y;T>D&&(D=T),S>D&&(D=S);let b=(D-w)/2,M=v*2;l[x+M+0]=w+b,l[x+M+1]=b+(Math.abs(w)+b)*zd}}return l}function wt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Ah(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function Rh(i,e){e.set(i)}function Ch(i,e,t){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[o],s=e[o],t[o]=n>s?n:s}}function Po(i,e,t){for(let n=0;n<3;n++){let s=e[i+2*n],r=e[i+2*n+1],o=s-r,a=s+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Rr(i){let e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}var Ei=32,N9=(i,e)=>i.candidate-e.candidate,Yi=new Array(Ei).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),vl=new Float32Array(6);function qd(i,e,t,n,s,r){let o=-1,a=0;if(r===0)o=Ah(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=Ah(i),o!==-1&&(a=F9(t,n,s,o));else if(r===2){let l=Rr(i),u=1.25*s,h=n*6,f=(n+s)*6;for(let c=0;c<3;c++){let d=e[c],p=(e[c+3]-d)/Ei;if(s<Ei/4){let m=[...Yi];m.length=s;let _=0;for(let y=h;y<f;y+=6,_++){let T=m[_];T.candidate=t[y+2*c],T.count=0;let{bounds:S,leftCacheBounds:w,rightCacheBounds:D}=T;for(let b=0;b<3;b++)D[b]=1/0,D[b+3]=-1/0,w[b]=1/0,w[b+3]=-1/0,S[b]=1/0,S[b+3]=-1/0;Po(y,t,S)}m.sort(N9);let v=s;for(let y=0;y<v;y++){let T=m[y];for(;y+1<v&&m[y+1].candidate===T.candidate;)m.splice(y+1,1),v--}for(let y=h;y<f;y+=6){let T=t[y+2*c];for(let S=0;S<v;S++){let w=m[S];T>=w.candidate?Po(y,t,w.rightCacheBounds):(Po(y,t,w.leftCacheBounds),w.count++)}}for(let y=0;y<v;y++){let T=m[y],S=T.count,w=s-T.count,D=T.leftCacheBounds,b=T.rightCacheBounds,M=0;S!==0&&(M=Rr(D)/l);let L=0;w!==0&&(L=Rr(b)/l);let N=1+1.25*(M*S+L*w);N<u&&(o=c,u=N,a=T.candidate)}}else{for(let v=0;v<Ei;v++){let y=Yi[v];y.count=0,y.candidate=d+p+v*p;let T=y.bounds;for(let S=0;S<3;S++)T[S]=1/0,T[S+3]=-1/0}for(let v=h;v<f;v+=6){let S=~~((t[v+2*c]-d)/p);S>=Ei&&(S=Ei-1);let w=Yi[S];w.count++,Po(v,t,w.bounds)}let m=Yi[Ei-1];Rh(m.bounds,m.rightCacheBounds);for(let v=Ei-2;v>=0;v--){let y=Yi[v],T=Yi[v+1];Ch(y.bounds,T.rightCacheBounds,y.rightCacheBounds)}let _=0;for(let v=0;v<Ei-1;v++){let y=Yi[v],T=y.count,S=y.bounds,D=Yi[v+1].rightCacheBounds;T!==0&&(_===0?Rh(S,vl):Ch(S,vl,vl)),_+=T;let b=0,M=0;_!==0&&(b=Rr(vl)/l);let L=s-_;L!==0&&(M=Rr(D)/l);let N=1+1.25*(b*_+M*L);N<u&&(o=c,u=N,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function F9(i,e,t,n){let s=0;for(let r=e,o=e+t;r<o;r++)s+=i[r*6+n*2];return s/t}var Cr=class{constructor(){this.boundingData=new Float32Array(6)}};function Yd(i,e,t,n,s,r){let o=n,a=n+s-1,l=r.pos,u=r.axis*2;for(;;){for(;o<=a&&t[o*6+u]<l;)o++;for(;o<=a&&t[a*6+u]>=l;)a--;if(o<a){for(let h=0;h<3;h++){let f=e[o*3+h];e[o*3+h]=e[a*3+h],e[a*3+h]=f}for(let h=0;h<6;h++){let f=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=f}o++,a--}else return o}}function $d(i,e,t,n,s,r){let o=n,a=n+s-1,l=r.pos,u=r.axis*2;for(;;){for(;o<=a&&t[o*6+u]<l;)o++;for(;o<=a&&t[a*6+u]>=l;)a--;if(o<a){let h=i[o];i[o]=i[a],i[a]=h;for(let f=0;f<6;f++){let c=t[o*6+f];t[o*6+f]=t[a*6+f],t[a*6+f]=c}o++,a--}else return o}}function Ct(i,e){return e[i+15]===65535}function Ut(i,e){return e[i+6]}function kt(i,e){return e[i+14]}function nn(i){return i+8}function Yt(i,e){return e[i+6]}function Pr(i,e){return e[i+7]}var Zd,Io,_l,jd,U9=Math.pow(2,32);function yl(i){return"count"in i?1:1+yl(i.left)+yl(i.right)}function Jd(i,e,t){return Zd=new Float32Array(t),Io=new Uint32Array(t),_l=new Uint16Array(t),jd=new Uint8Array(t),Ph(i,e)}function Ph(i,e){let t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let o=0;o<6;o++)Zd[t+o]=r[o];if(s)if(e.buffer){let o=e.buffer;jd.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=32){let u=a/2;Ct(u,_l)||(Io[a/4+6]+=t)}return i+o.byteLength}else{let o=e.offset,a=e.count;return Io[t+6]=o,_l[n+14]=a,_l[n+15]=65535,i+32}else{let o=e.left,a=e.right,l=e.splitAxis,u;if(u=Ph(i+32,o),u/4>U9)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Io[t+6]=u/4,u=Ph(u,a),Io[t+7]=l,u}}function O9(i,e){let t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,s=n?4:2,r=e?new SharedArrayBuffer(t*s):new ArrayBuffer(t*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function B9(i,e,t,n,s){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:u,indirect:h}=s,f=i._indirectBuffer,c=i.geometry,d=c.index?c.index.array:null,g=h?$d:Yd,x=li(c),p=new Float32Array(6),m=!1,_=new Cr;return xl(e,t,n,_.boundingData,p),y(_,t,n,p),_;function v(T){u&&u(T/x)}function y(T,S,w,D=null,b=0){if(!m&&b>=r&&(m=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(c))),w<=a||b>=r)return v(S+w),T.offset=S,T.count=w,T;let M=qd(T.boundingData,D,e,S,w,l);if(M.axis===-1)return v(S+w),T.offset=S,T.count=w,T;let L=g(f,d,e,S,w,M);if(L===S||L===S+w)v(S+w),T.offset=S,T.count=w;else{T.splitAxis=M.axis;let N=new Cr,k=S,I=L-S;T.left=N,xl(e,k,I,N.boundingData,p),y(N,k,I,p,b+1);let O=new Cr,G=L,J=w-I;T.right=O,xl(e,G,J,O.boundingData,p),y(O,G,J,p,b+1)}return T}}function Kd(i,e){let t=i.geometry;e.indirect&&(i._indirectBuffer=O9(t,e.useSharedArrayBuffer),Hd(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||kd(t,e);let n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Vd(t),r=e.indirect?wh(t):Eh(t);i._roots=r.map(o=>{let a=B9(i,s,o.offset,o.count,e),l=yl(a),u=new n(32*l);return Jd(0,a,u),u})}var yn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let l=e[r][t];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],l=e.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}};yn.prototype.setFromBox=(function(){let i=new A;return function(t,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*u+r.y*(1-u),i.z=s.z*h+r.z*(1-h);let f=t.dot(i);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}})();var l8=(function(){let i=new yn;return function(t,n){let s=t.points,r=t.satAxes,o=t.satBounds,a=n.points,l=n.satAxes,u=n.satBounds;for(let h=0;h<3;h++){let f=o[h],c=r[h];if(i.setFromPoints(c,a),f.isSeparated(i))return!1}for(let h=0;h<3;h++){let f=u[h],c=l[h];if(i.setFromPoints(c,s),f.isSeparated(i))return!1}}})();var z9=(function(){let i=new A,e=new A,t=new A;return function(s,r,o){let a=s.start,l=i,u=r.start,h=e;t.subVectors(a,u),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);let f=t.dot(h),c=h.dot(l),d=h.dot(h),g=t.dot(l),p=l.dot(l)*d-c*c,m,_;p!==0?m=(f*c-g*d)/p:m=0,_=(f+m*c)/d,o.x=m,o.y=_}})(),Lo=(function(){let i=new Q,e=new A,t=new A;return function(s,r,o,a){z9(s,r,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){s.at(l,o),r.at(u,a);return}else if(l>=0&&l<=1){u<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=s.start:h=s.end;let f;u<0?f=r.start:f=r.end;let c=e,d=t;if(s.closestPointToPoint(f,!0,e),r.closestPointToPoint(h,!0,t),c.distanceToSquared(f)<=d.distanceToSquared(h)){o.copy(c),a.copy(f);return}else{o.copy(h),a.copy(d);return}}}})(),Qd=(function(){let i=new A,e=new A,t=new pn,n=new _n;return function(r,o){let{radius:a,center:l}=r,{a:u,b:h,c:f}=o;if(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=h,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let x=o.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=a){let m=x.projectPoint(l,e);if(o.containsPoint(m))return!0}return!1}})();var k9=1e-15;function Ih(i){return Math.abs(i)<k9}var on=class extends En{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new yn),this.points=[this.a,this.b,this.c],this.sphere=new Bi,this.plane=new pn,this.needsUpdate=!0}intersectsSphere(e){return Qd(e,this)}update(){let e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);let u=r[1],h=o[1];u.subVectors(e,t),h.setFromPoints(u,s);let f=r[2],c=o[2];f.subVectors(t,n),c.setFromPoints(f,s);let d=r[3],g=o[3];d.subVectors(n,e),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};on.prototype.closestPointToSegment=(function(){let i=new A,e=new A,t=new _n;return function(s,r=null,o=null){let{start:a,end:l}=s,u=this.points,h,f=1/0;for(let c=0;c<3;c++){let d=(c+1)%3;t.start.copy(u[c]),t.end.copy(u[d]),Lo(t,s,i,e),h=i.distanceToSquared(e),h<f&&(f=h,r&&r.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<f&&(f=h,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<f&&(f=h,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(f)}})();on.prototype.intersectsTriangle=(function(){let i=new on,e=new Array(3),t=new Array(3),n=new yn,s=new yn,r=new A,o=new A,a=new A,l=new A,u=new A,h=new _n,f=new _n,c=new _n,d=new A;function g(x,p,m){let _=x.points,v=0,y=-1;for(let T=0;T<3;T++){let{start:S,end:w}=h;S.copy(_[T]),w.copy(_[(T+1)%3]),h.delta(o);let D=Ih(p.distanceToPoint(S));if(Ih(p.normal.dot(o))&&D){m.copy(h),v=2;break}let b=p.intersectLine(h,d);if(!b&&D&&d.copy(S),(b||D)&&!Ih(d.distanceTo(w))){if(v<=1)(v===1?m.start:m.end).copy(d),D&&(y=v);else if(v>=2){(y===1?m.start:m.end).copy(d),v=2;break}if(v++,v===2&&y===-1)break}}return v}return function(p,m=null,_=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);let v=this.plane,y=p.plane;if(Math.abs(v.normal.dot(y.normal))>1-1e-10){let T=this.satBounds,S=this.satAxes;t[0]=p.a,t[1]=p.b,t[2]=p.c;for(let b=0;b<4;b++){let M=T[b],L=S[b];if(n.setFromPoints(L,t),M.isSeparated(n))return!1}let w=p.satBounds,D=p.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let b=0;b<4;b++){let M=w[b],L=D[b];if(n.setFromPoints(L,e),M.isSeparated(n))return!1}for(let b=0;b<4;b++){let M=S[b];for(let L=0;L<4;L++){let N=D[L];if(r.crossVectors(M,N),n.setFromPoints(r,e),s.setFromPoints(r,t),n.isSeparated(s))return!1}}return m&&(_||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{let T=g(this,y,f);if(T===1&&p.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(T!==2)return!1;let S=g(p,v,c);if(S===1&&this.containsPoint(c.end))return m&&(m.start.copy(c.end),m.end.copy(c.end)),!0;if(S!==2)return!1;if(f.delta(a),c.delta(l),a.dot(l)<0){let k=c.start;c.start=c.end,c.end=k}let w=f.start.dot(a),D=f.end.dot(a),b=c.start.dot(a),M=c.end.dot(a),L=D<b,N=w<M;return w!==M&&b!==D&&L===N?!1:(m&&(u.subVectors(f.start,c.start),u.dot(a)>0?m.start.copy(f.start):m.start.copy(c.start),u.subVectors(f.end,c.end),u.dot(a)<0?m.end.copy(f.end):m.end.copy(c.end)),!0)}}})();on.prototype.distanceToPoint=(function(){let i=new A;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();on.prototype.distanceToTriangle=(function(){let i=new A,e=new A,t=["a","b","c"],n=new _n,s=new _n;return function(o,a=null,l=null){let u=a||l?n:null;if(this.intersectsTriangle(o,u))return(a||l)&&(a&&u.getCenter(a),l&&u.getCenter(l)),0;let h=1/0;for(let f=0;f<3;f++){let c,d=t[f],g=o[d];this.closestPointToPoint(g,i),c=g.distanceToSquared(i),c<h&&(h=c,a&&a.copy(i),l&&l.copy(g));let x=this[d];o.closestPointToPoint(x,i),c=x.distanceToSquared(i),c<h&&(h=c,a&&a.copy(x),l&&l.copy(i))}for(let f=0;f<3;f++){let c=t[f],d=t[(f+1)%3];n.set(this[c],this[d]);for(let g=0;g<3;g++){let x=t[g],p=t[(g+1)%3];s.set(o[x],o[p]),Lo(n,s,i,e);let m=i.distanceToSquared(e);m<h&&(h=m,a&&a.copy(i),l&&l.copy(e))}}return Math.sqrt(h)}})();var Ht=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new Fe,this.invMatrix=new Fe,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new yn),this.alignedSatBounds=new Array(3).fill().map(()=>new yn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Ht.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){let c=1*u|2*h|4*f,d=s[c];d.x=u?n.x:t.x,d.y=h?n.y:t.y,d.z=f?n.z:t.z,d.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let u=0;u<3;u++){let h=o[u],f=r[u],c=1<<u,d=s[c];h.subVectors(a,d),f.setFromPoints(h,s)}let l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ht.prototype.intersectsBox=(function(){let i=new yn;return function(t){this.needsUpdate&&this.update();let n=t.min,s=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let u=o[l],h=r[l];if(i.setFromBox(u,t),h.isSeparated(i))return!1}return!0}})();Ht.prototype.intersectsTriangle=(function(){let i=new on,e=new Array(3),t=new yn,n=new yn,s=new A;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let c=0;c<3;c++){let d=a[c],g=l[c];if(t.setFromPoints(g,e),d.isSeparated(t))return!1}let u=o.satBounds,h=o.satAxes,f=this.points;for(let c=0;c<3;c++){let d=u[c],g=h[c];if(t.setFromPoints(g,f),d.isSeparated(t))return!1}for(let c=0;c<3;c++){let d=l[c];for(let g=0;g<4;g++){let x=h[g];if(s.crossVectors(d,x),t.setFromPoints(s,e),n.setFromPoints(s,f),t.isSeparated(n))return!1}}return!0}})();Ht.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Ht.prototype.distanceToPoint=(function(){let i=new A;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Ht.prototype.distanceToBox=(function(){let i=["x","y","z"],e=new Array(12).fill().map(()=>new _n),t=new Array(12).fill().map(()=>new _n),n=new A,s=new A;return function(o,a=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||u)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),u&&u.copy(s)),0;let h=a*a,f=o.min,c=o.max,d=this.points,g=1/0;for(let p=0;p<8;p++){let m=d[p];s.copy(m).clamp(f,c);let _=m.distanceToSquared(s);if(_<g&&(g=_,l&&l.copy(m),u&&u.copy(s),_<h))return Math.sqrt(_)}let x=0;for(let p=0;p<3;p++)for(let m=0;m<=1;m++)for(let _=0;_<=1;_++){let v=(p+1)%3,y=(p+2)%3,T=m<<v|_<<y,S=1<<p|m<<v|_<<y,w=d[T],D=d[S];e[x].set(w,D);let M=i[p],L=i[v],N=i[y],k=t[x],I=k.start,O=k.end;I[M]=f[M],I[L]=m?f[L]:c[L],I[N]=_?f[N]:c[L],O[M]=c[M],O[L]=m?f[L]:c[L],O[N]=_?f[N]:c[L],x++}for(let p=0;p<=1;p++)for(let m=0;m<=1;m++)for(let _=0;_<=1;_++){s.x=p?c.x:f.x,s.y=m?c.y:f.y,s.z=_?c.z:f.z,this.closestPointToPoint(s,n);let v=s.distanceToSquared(n);if(v<g&&(g=v,l&&l.copy(n),u&&u.copy(s),v<h))return Math.sqrt(v)}for(let p=0;p<12;p++){let m=e[p];for(let _=0;_<12;_++){let v=t[_];Lo(m,v,n,s);let y=n.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(n),u&&u.copy(s),y<h))return Math.sqrt(y)}}return Math.sqrt(g)}})();var Zi=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var Lh=class extends Zi{constructor(){super(()=>new on)}},xn=new Lh;var Dh=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},dt=new Dh;var ji,Lr,Ir=[],Ml=new Zi(()=>new gt);function e1(i,e,t,n,s,r){ji=Ml.getPrimitive(),Lr=Ml.getPrimitive(),Ir.push(ji,Lr),dt.setBuffer(i._roots[e]);let o=Nh(0,i.geometry,t,n,s,r);dt.clearBuffer(),Ml.releasePrimitive(ji),Ml.releasePrimitive(Lr),Ir.pop(),Ir.pop();let a=Ir.length;return a>0&&(Lr=Ir[a-1],ji=Ir[a-2]),o}function Nh(i,e,t,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:u}=dt,h=i*2;if(Ct(h,l)){let c=Ut(i,u),d=kt(h,l);return wt(i,a,ji),n(c,d,!1,o,r+i,ji)}else{let M=function(N){let{uint16Array:k,uint32Array:I}=dt,O=N*2;for(;!Ct(O,k);)N=nn(N),O=N*2;return Ut(N,I)},L=function(N){let{uint16Array:k,uint32Array:I}=dt,O=N*2;for(;!Ct(O,k);)N=Yt(N,I),O=N*2;return Ut(N,I)+kt(O,k)},c=nn(i),d=Yt(i,u),g=c,x=d,p,m,_,v;if(s&&(_=ji,v=Lr,wt(g,a,_),wt(x,a,v),p=s(_),m=s(v),m<p)){g=d,x=c;let N=p;p=m,m=N,_=v}_||(_=ji,wt(g,a,_));let y=Ct(g*2,l),T=t(_,y,p,o+1,r+g),S;if(T===2){let N=M(g),I=L(g)-N;S=n(N,I,!0,o+1,r+g,_)}else S=T&&Nh(g,e,t,n,s,r,o+1);if(S)return!0;v=Lr,wt(x,a,v);let w=Ct(x*2,l),D=t(v,w,m,o+1,r+x),b;if(D===2){let N=M(x),I=L(x)-N;b=n(N,I,!0,o+1,r+x,v)}else b=D&&Nh(x,e,t,n,s,r,o+1);return!!b}}var Do=new A,Fh=new A;function t1(i,e,t={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(Do.copy(e).clamp(h.min,h.max),Do.distanceToSquared(e)),intersectsBounds:(h,f,c)=>c<a&&c<o,intersectsTriangle:(h,f)=>{h.closestPointToPoint(e,Do);let c=e.distanceToSquared(Do);return c<a&&(Fh.copy(Do),a=c,l=f),c<r}}),a===1/0)return null;let u=Math.sqrt(a);return t.point?t.point.copy(Fh):t.point=Fh.clone(),t.distance=u,t.faceIndex=l,t}var Dr=new A,Nr=new A,Fr=new A,Tl=new Q,wl=new Q,El=new Q,n1=new A,i1=new A,s1=new A,Al=new A;function V9(i,e,t,n,s,r,o,a){let l;if(r===qt?l=i.intersectTriangle(n,t,e,!0,s):l=i.intersectTriangle(e,t,n,r!==rn,s),l===null)return null;let u=i.origin.distanceTo(s);return u<o||u>a?null:{distance:u,point:s.clone()}}function G9(i,e,t,n,s,r,o,a,l,u,h){Dr.fromBufferAttribute(e,r),Nr.fromBufferAttribute(e,o),Fr.fromBufferAttribute(e,a);let f=V9(i,Dr,Nr,Fr,Al,l,u,h);if(f){n&&(Tl.fromBufferAttribute(n,r),wl.fromBufferAttribute(n,o),El.fromBufferAttribute(n,a),f.uv=En.getInterpolation(Al,Dr,Nr,Fr,Tl,wl,El,new Q)),s&&(Tl.fromBufferAttribute(s,r),wl.fromBufferAttribute(s,o),El.fromBufferAttribute(s,a),f.uv1=En.getInterpolation(Al,Dr,Nr,Fr,Tl,wl,El,new Q)),t&&(n1.fromBufferAttribute(t,r),i1.fromBufferAttribute(t,o),s1.fromBufferAttribute(t,a),f.normal=En.getInterpolation(Al,Dr,Nr,Fr,n1,i1,s1,new A),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let c={a:r,b:o,c:a,normal:new A,materialIndex:0};En.getNormal(Dr,Nr,Fr,c.normal),f.face=c,f.faceIndex=r}return f}function Ur(i,e,t,n,s,r,o){let a=n*3,l=a+0,u=a+1,h=a+2,f=i.index;i.index&&(l=f.getX(l),u=f.getX(u),h=f.getX(h));let{position:c,normal:d,uv:g,uv1:x}=i.attributes,p=G9(t,c,d,g,x,l,u,h,e,r,o);return p?(p.faceIndex=n,s&&s.push(p),p):null}function Et(i,e,t,n){let s=i.a,r=i.b,o=i.c,a=e,l=e+1,u=e+2;t&&(a=t.getX(a),l=t.getX(l),u=t.getX(u)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function r1(i,e,t,n,s,r,o,a){let{geometry:l,_indirectBuffer:u}=i;for(let h=n,f=n+s;h<f;h++)Ur(l,e,t,h,r,o,a)}function o1(i,e,t,n,s,r,o){let{geometry:a,_indirectBuffer:l}=i,u=1/0,h=null;for(let f=n,c=n+s;f<c;f++){let d;d=Ur(a,e,t,f,null,r,o),d&&d.distance<u&&(h=d,u=d.distance)}return h}function a1(i,e,t,n,s,r,o){let{geometry:a}=t,{index:l}=a,u=a.attributes.position;for(let h=i,f=e+i;h<f;h++){let c;if(c=h,Et(o,c*3,l,u),o.needsUpdate=!0,n(o,c,s,r))return!0}return!1}function l1(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,o,a,l,u=0,h=i._roots;for(let c=0,d=h.length;c<d;c++)r=h[c],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(c,d,g=!1){let x=c*2;if(a[x+15]===65535){let m=o[c+6],_=a[x+14],v=1/0,y=1/0,T=1/0,S=-1/0,w=-1/0,D=-1/0;for(let b=3*m,M=3*(m+_);b<M;b++){let L=n[b],N=s.getX(L),k=s.getY(L),I=s.getZ(L);N<v&&(v=N),N>S&&(S=N),k<y&&(y=k),k>w&&(w=k),I<T&&(T=I),I>D&&(D=I)}return l[c+0]!==v||l[c+1]!==y||l[c+2]!==T||l[c+3]!==S||l[c+4]!==w||l[c+5]!==D?(l[c+0]=v,l[c+1]=y,l[c+2]=T,l[c+3]=S,l[c+4]=w,l[c+5]=D,!0):!1}else{let m=c+8,_=o[c+6],v=m+d,y=_+d,T=g,S=!1,w=!1;e?T||(S=e.has(v),w=e.has(y),T=!S&&!w):(S=!0,w=!0);let D=T||S,b=T||w,M=!1;D&&(M=f(m,d,T));let L=!1;b&&(L=f(_,d,T));let N=M||L;if(N)for(let k=0;k<3;k++){let I=m+k,O=_+k,G=l[I],J=l[I+3],K=l[O],q=l[O+3];l[c+k]=G<K?G:K,l[c+k+3]=J>q?J:q}return N}}}function Hn(i,e,t,n,s){let r,o,a,l,u,h,f=1/t.direction.x,c=1/t.direction.y,d=1/t.direction.z,g=t.origin.x,x=t.origin.y,p=t.origin.z,m=e[i],_=e[i+3],v=e[i+1],y=e[i+3+1],T=e[i+2],S=e[i+3+2];return f>=0?(r=(m-g)*f,o=(_-g)*f):(r=(_-g)*f,o=(m-g)*f),c>=0?(a=(v-x)*c,l=(y-x)*c):(a=(y-x)*c,l=(v-x)*c),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(u=(T-p)*d,h=(S-p)*d):(u=(S-p)*d,h=(T-p)*d),r>h||u>o)?!1:((u>r||r!==r)&&(r=u),(h<o||o!==o)&&(o=h),r<=s&&o>=n)}function c1(i,e,t,n,s,r,o,a){let{geometry:l,_indirectBuffer:u}=i;for(let h=n,f=n+s;h<f;h++){let c=u?u[h]:h;Ur(l,e,t,c,r,o,a)}}function u1(i,e,t,n,s,r,o){let{geometry:a,_indirectBuffer:l}=i,u=1/0,h=null;for(let f=n,c=n+s;f<c;f++){let d;d=Ur(a,e,t,l?l[f]:f,null,r,o),d&&d.distance<u&&(h=d,u=d.distance)}return h}function h1(i,e,t,n,s,r,o){let{geometry:a}=t,{index:l}=a,u=a.attributes.position;for(let h=i,f=e+i;h<f;h++){let c;if(c=t.resolveTriangleIndex(h),Et(o,c*3,l,u),o.needsUpdate=!0,n(o,c,s,r))return!0}return!1}function f1(i,e,t,n,s,r,o){dt.setBuffer(i._roots[e]),Uh(0,i,t,n,s,r,o),dt.clearBuffer()}function Uh(i,e,t,n,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:u}=dt,h=i*2;if(Ct(h,l)){let c=Ut(i,u),d=kt(h,l);r1(e,t,n,c,d,s,r,o)}else{let c=nn(i);Hn(c,a,n,r,o)&&Uh(c,e,t,n,s,r,o);let d=Yt(i,u);Hn(d,a,n,r,o)&&Uh(d,e,t,n,s,r,o)}}var W9=["x","y","z"];function d1(i,e,t,n,s,r){dt.setBuffer(i._roots[e]);let o=Oh(0,i,t,n,s,r);return dt.clearBuffer(),o}function Oh(i,e,t,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=dt,u=i*2;if(Ct(u,a)){let f=Ut(i,l),c=kt(u,a);return o1(e,t,n,f,c,s,r)}else{let f=Pr(i,l),c=W9[f],g=n.direction[c]>=0,x,p;g?(x=nn(i),p=Yt(i,l)):(x=Yt(i,l),p=nn(i));let _=Hn(x,o,n,s,r)?Oh(x,e,t,n,s,r):null;if(_){let T=_.point[c];if(g?T<=o[p+f]:T>=o[p+f+3])return _}let y=Hn(p,o,n,s,r)?Oh(p,e,t,n,s,r):null;return _&&y?_.distance<=y.distance?_:y:_||y||null}}var Rl=new gt,Or=new on,Br=new on,No=new Fe,p1=new Ht,Cl=new Ht;function m1(i,e,t,n){dt.setBuffer(i._roots[e]);let s=Bh(0,i,t,n);return dt.clearBuffer(),s}function Bh(i,e,t,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=dt,l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),p1.set(t.boundingBox.min,t.boundingBox.max,n),s=p1),Ct(l,o)){let h=e.geometry,f=h.index,c=h.attributes.position,d=t.index,g=t.attributes.position,x=Ut(i,a),p=kt(l,o);if(No.copy(n).invert(),t.boundsTree)return wt(i,r,Cl),Cl.matrix.copy(No),Cl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>Cl.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let v=x*3,y=(p+x)*3;v<y;v+=3)if(Et(Br,v,f,c),Br.needsUpdate=!0,_.intersectsTriangle(Br))return!0;return!1}});for(let m=x*3,_=(p+x)*3;m<_;m+=3){Et(Or,m,f,c),Or.a.applyMatrix4(No),Or.b.applyMatrix4(No),Or.c.applyMatrix4(No),Or.needsUpdate=!0;for(let v=0,y=d.count;v<y;v+=3)if(Et(Br,v,d,g),Br.needsUpdate=!0,Or.intersectsTriangle(Br))return!0}}else{let h=i+8,f=a[i+6];return wt(h,r,Rl),!!(s.intersectsBox(Rl)&&Bh(h,e,t,n,s)||(wt(f,r,Rl),s.intersectsBox(Rl)&&Bh(f,e,t,n,s)))}}var Pl=new Fe,zh=new Ht,Fo=new Ht,X9=new A,q9=new A,Y9=new A,$9=new A;function g1(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),zh.set(e.boundingBox.min,e.boundingBox.max,t),zh.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,u=a.index,h=e.attributes.position,f=e.index,c=xn.getPrimitive(),d=xn.getPrimitive(),g=X9,x=q9,p=null,m=null;s&&(p=Y9,m=$9);let _=1/0,v=null,y=null;return Pl.copy(t).invert(),Fo.matrix.copy(Pl),i.shapecast({boundsTraverseOrder:T=>zh.distanceToBox(T),intersectsBounds:(T,S,w)=>w<_&&w<o?(S&&(Fo.min.copy(T.min),Fo.max.copy(T.max),Fo.needsUpdate=!0),!0):!1,intersectsRange:(T,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:D=>Fo.distanceToBox(D),intersectsBounds:(D,b,M)=>M<_&&M<o,intersectsRange:(D,b)=>{for(let M=D,L=D+b;M<L;M++){Et(d,3*M,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let N=T,k=T+S;N<k;N++){Et(c,3*N,u,l),c.needsUpdate=!0;let I=c.distanceToTriangle(d,g,p);if(I<_&&(x.copy(g),m&&m.copy(p),_=I,v=N,y=M),I<r)return!0}}}});{let w=li(e);for(let D=0,b=w;D<b;D++){Et(d,3*D,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let M=T,L=T+S;M<L;M++){Et(c,3*M,u,l),c.needsUpdate=!0;let N=c.distanceToTriangle(d,g,p);if(N<_&&(x.copy(g),m&&m.copy(p),_=N,v=M,y=D),N<r)return!0}}}}}),xn.releasePrimitive(c),xn.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=v,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Pl),x.applyMatrix4(Pl),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function x1(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,o,a,l,u=0,h=i._roots;for(let c=0,d=h.length;c<d;c++)r=h[c],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(c,d,g=!1){let x=c*2;if(a[x+15]===65535){let m=o[c+6],_=a[x+14],v=1/0,y=1/0,T=1/0,S=-1/0,w=-1/0,D=-1/0;for(let b=m,M=m+_;b<M;b++){let L=3*i.resolveTriangleIndex(b);for(let N=0;N<3;N++){let k=L+N;k=n?n[k]:k;let I=s.getX(k),O=s.getY(k),G=s.getZ(k);I<v&&(v=I),I>S&&(S=I),O<y&&(y=O),O>w&&(w=O),G<T&&(T=G),G>D&&(D=G)}}return l[c+0]!==v||l[c+1]!==y||l[c+2]!==T||l[c+3]!==S||l[c+4]!==w||l[c+5]!==D?(l[c+0]=v,l[c+1]=y,l[c+2]=T,l[c+3]=S,l[c+4]=w,l[c+5]=D,!0):!1}else{let m=c+8,_=o[c+6],v=m+d,y=_+d,T=g,S=!1,w=!1;e?T||(S=e.has(v),w=e.has(y),T=!S&&!w):(S=!0,w=!0);let D=T||S,b=T||w,M=!1;D&&(M=f(m,d,T));let L=!1;b&&(L=f(_,d,T));let N=M||L;if(N)for(let k=0;k<3;k++){let I=m+k,O=_+k,G=l[I],J=l[I+3],K=l[O],q=l[O+3];l[c+k]=G<K?G:K,l[c+k+3]=J>q?J:q}return N}}}function v1(i,e,t,n,s,r,o){dt.setBuffer(i._roots[e]),kh(0,i,t,n,s,r,o),dt.clearBuffer()}function kh(i,e,t,n,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:u}=dt,h=i*2;if(Ct(h,l)){let c=Ut(i,u),d=kt(h,l);c1(e,t,n,c,d,s,r,o)}else{let c=nn(i);Hn(c,a,n,r,o)&&kh(c,e,t,n,s,r,o);let d=Yt(i,u);Hn(d,a,n,r,o)&&kh(d,e,t,n,s,r,o)}}var Z9=["x","y","z"];function _1(i,e,t,n,s,r){dt.setBuffer(i._roots[e]);let o=Hh(0,i,t,n,s,r);return dt.clearBuffer(),o}function Hh(i,e,t,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=dt,u=i*2;if(Ct(u,a)){let f=Ut(i,l),c=kt(u,a);return u1(e,t,n,f,c,s,r)}else{let f=Pr(i,l),c=Z9[f],g=n.direction[c]>=0,x,p;g?(x=nn(i),p=Yt(i,l)):(x=Yt(i,l),p=nn(i));let _=Hn(x,o,n,s,r)?Hh(x,e,t,n,s,r):null;if(_){let T=_.point[c];if(g?T<=o[p+f]:T>=o[p+f+3])return _}let y=Hn(p,o,n,s,r)?Hh(p,e,t,n,s,r):null;return _&&y?_.distance<=y.distance?_:y:_||y||null}}var Il=new gt,zr=new on,kr=new on,Uo=new Fe,y1=new Ht,Ll=new Ht;function b1(i,e,t,n){dt.setBuffer(i._roots[e]);let s=Vh(0,i,t,n);return dt.clearBuffer(),s}function Vh(i,e,t,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=dt,l=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),y1.set(t.boundingBox.min,t.boundingBox.max,n),s=y1),Ct(l,o)){let h=e.geometry,f=h.index,c=h.attributes.position,d=t.index,g=t.attributes.position,x=Ut(i,a),p=kt(l,o);if(Uo.copy(n).invert(),t.boundsTree)return wt(i,r,Ll),Ll.matrix.copy(Uo),Ll.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>Ll.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let v=x,y=p+x;v<y;v++)if(Et(kr,3*e.resolveTriangleIndex(v),f,c),kr.needsUpdate=!0,_.intersectsTriangle(kr))return!0;return!1}});for(let m=x,_=p+x;m<_;m++){let v=e.resolveTriangleIndex(m);Et(zr,3*v,f,c),zr.a.applyMatrix4(Uo),zr.b.applyMatrix4(Uo),zr.c.applyMatrix4(Uo),zr.needsUpdate=!0;for(let y=0,T=d.count;y<T;y+=3)if(Et(kr,y,d,g),kr.needsUpdate=!0,zr.intersectsTriangle(kr))return!0}}else{let h=i+8,f=a[i+6];return wt(h,r,Il),!!(s.intersectsBox(Il)&&Vh(h,e,t,n,s)||(wt(f,r,Il),s.intersectsBox(Il)&&Vh(f,e,t,n,s)))}}var Dl=new Fe,Gh=new Ht,Oo=new Ht,j9=new A,J9=new A,K9=new A,Q9=new A;function M1(i,e,t,n={},s={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Gh.set(e.boundingBox.min,e.boundingBox.max,t),Gh.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,u=a.index,h=e.attributes.position,f=e.index,c=xn.getPrimitive(),d=xn.getPrimitive(),g=j9,x=J9,p=null,m=null;s&&(p=K9,m=Q9);let _=1/0,v=null,y=null;return Dl.copy(t).invert(),Oo.matrix.copy(Dl),i.shapecast({boundsTraverseOrder:T=>Gh.distanceToBox(T),intersectsBounds:(T,S,w)=>w<_&&w<o?(S&&(Oo.min.copy(T.min),Oo.max.copy(T.max),Oo.needsUpdate=!0),!0):!1,intersectsRange:(T,S)=>{if(e.boundsTree){let w=e.boundsTree;return w.shapecast({boundsTraverseOrder:D=>Oo.distanceToBox(D),intersectsBounds:(D,b,M)=>M<_&&M<o,intersectsRange:(D,b)=>{for(let M=D,L=D+b;M<L;M++){let N=w.resolveTriangleIndex(M);Et(d,3*N,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let k=T,I=T+S;k<I;k++){let O=i.resolveTriangleIndex(k);Et(c,3*O,u,l),c.needsUpdate=!0;let G=c.distanceToTriangle(d,g,p);if(G<_&&(x.copy(g),m&&m.copy(p),_=G,v=k,y=M),G<r)return!0}}}})}else{let w=li(e);for(let D=0,b=w;D<b;D++){Et(d,3*D,f,h),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let M=T,L=T+S;M<L;M++){let N=i.resolveTriangleIndex(M);Et(c,3*N,u,l),c.needsUpdate=!0;let k=c.distanceToTriangle(d,g,p);if(k<_&&(x.copy(g),m&&m.copy(p),_=k,v=M,y=D),k<r)return!0}}}}}),xn.releasePrimitive(c),xn.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=v,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(Dl),x.applyMatrix4(Dl),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function S1(){return typeof SharedArrayBuffer<"u"}var Bo=new dt.constructor,Nl=new dt.constructor,Ji=new Zi(()=>new gt),Hr=new gt,Vr=new gt,Wh=new gt,Xh=new gt,qh=!1;function T1(i,e,t,n){if(qh)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");qh=!0;let s=i._roots,r=e._roots,o,a=0,l=0,u=new Fe().copy(t).invert();for(let h=0,f=s.length;h<f;h++){Bo.setBuffer(s[h]),l=0;let c=Ji.getPrimitive();wt(0,Bo.float32Array,c),c.applyMatrix4(u);for(let d=0,g=r.length;d<g&&(Nl.setBuffer(r[h]),o=jn(0,0,t,u,n,a,l,0,0,c),Nl.clearBuffer(),l+=r[d].length,!o);d++);if(Ji.releasePrimitive(c),Bo.clearBuffer(),a+=s[h].length,o)break}return qh=!1,o}function jn(i,e,t,n,s,r=0,o=0,a=0,l=0,u=null,h=!1){let f,c;h?(f=Nl,c=Bo):(f=Bo,c=Nl);let d=f.float32Array,g=f.uint32Array,x=f.uint16Array,p=c.float32Array,m=c.uint32Array,_=c.uint16Array,v=i*2,y=e*2,T=Ct(v,x),S=Ct(y,_),w=!1;if(S&&T)h?w=s(Ut(e,m),kt(e*2,_),Ut(i,g),kt(i*2,x),l,o+e,a,r+i):w=s(Ut(i,g),kt(i*2,x),Ut(e,m),kt(e*2,_),a,r+i,l,o+e);else if(S){let D=Ji.getPrimitive();wt(e,p,D),D.applyMatrix4(t);let b=nn(i),M=Yt(i,g);wt(b,d,Hr),wt(M,d,Vr);let L=D.intersectsBox(Hr),N=D.intersectsBox(Vr);w=L&&jn(e,b,n,t,s,o,r,l,a+1,D,!h)||N&&jn(e,M,n,t,s,o,r,l,a+1,D,!h),Ji.releasePrimitive(D)}else{let D=nn(e),b=Yt(e,m);wt(D,p,Wh),wt(b,p,Xh);let M=u.intersectsBox(Wh),L=u.intersectsBox(Xh);if(M&&L)w=jn(i,D,t,n,s,r,o,a,l+1,u,h)||jn(i,b,t,n,s,r,o,a,l+1,u,h);else if(M)if(T)w=jn(i,D,t,n,s,r,o,a,l+1,u,h);else{let N=Ji.getPrimitive();N.copy(Wh).applyMatrix4(t);let k=nn(i),I=Yt(i,g);wt(k,d,Hr),wt(I,d,Vr);let O=N.intersectsBox(Hr),G=N.intersectsBox(Vr);w=O&&jn(D,k,n,t,s,o,r,l,a+1,N,!h)||G&&jn(D,I,n,t,s,o,r,l,a+1,N,!h),Ji.releasePrimitive(N)}else if(L)if(T)w=jn(i,b,t,n,s,r,o,a,l+1,u,h);else{let N=Ji.getPrimitive();N.copy(Xh).applyMatrix4(t);let k=nn(i),I=Yt(i,g);wt(k,d,Hr),wt(I,d,Vr);let O=N.intersectsBox(Hr),G=N.intersectsBox(Vr);w=O&&jn(b,k,n,t,s,o,r,l,a+1,N,!h)||G&&jn(b,I,n,t,s,o,r,l,a+1,N,!h),Ji.releasePrimitive(N)}}return w}var Fl=new Ht,w1=new gt,eg={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0},ci=class i{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,s=e._roots,r=e._indirectBuffer,o=n.getIndex(),a;return t.cloneBuffers?a={roots:s.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=e,a=new i(t,{...n,[gl]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let l=t.getIndex();if(l===null){let u=new ut(e.index,1,!1);t.setIndex(u)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...eg,[gl]:!1},t),t.useSharedArrayBuffer&&!S1())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[gl]||(Kd(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new gt))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?x1:l1)(this,e)}traverse(e,t=0){let n=this._roots[t],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){let u=a*2,h=r[u+15]===65535;if(h){let f=s[a+6],c=r[u+14];e(l,h,new Float32Array(n,a*4,6),f,c)}else{let f=a+32/4,c=s[a+6],d=s[a+7];e(l,h,new Float32Array(n,a*4,6),d)||(o(f,l+1),o(c,l+1))}}}raycast(e,t=An,n=0,s=1/0){let r=this._roots,o=this.geometry,a=[],l=t.isMaterial,u=Array.isArray(t),h=o.groups,f=l?t.side:t,c=this.indirect?v1:f1;for(let d=0,g=r.length;d<g;d++){let x=u?t[h[d].materialIndex].side:f,p=a.length;if(c(this,d,x,e,a,n,s),u){let m=h[d].materialIndex;for(let _=p,v=a.length;_<v;_++)a[_].face.materialIndex=m}}return a}raycastFirst(e,t=An,n=0,s=1/0){let r=this._roots,o=this.geometry,a=t.isMaterial,l=Array.isArray(t),u=null,h=o.groups,f=a?t.side:t,c=this.indirect?_1:d1;for(let d=0,g=r.length;d<g;d++){let x=l?t[h[d].materialIndex].side:f,p=c(this,d,x,e,n,s);p!=null&&(u==null||p.distance<u.distance)&&(u=p,l&&(p.face.materialIndex=h[d].materialIndex))}return u}intersectsGeometry(e,t){let n=!1,s=this._roots,r=this.indirect?b1:m1;for(let o=0,a=s.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){let t=xn.getPrimitive(),n=this.indirect?h1:a1,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){let f=o;o=(c,d,g,x,p)=>f(c,d,g,x,p)?!0:n(c,d,this,a,g,x,t)}else o||(a?o=(f,c,d,g)=>n(f,c,this,a,d,g,t):o=(f,c,d)=>d);let l=!1,u=0,h=this._roots;for(let f=0,c=h.length;f<c;f++){let d=h[f];if(l=e1(this,f,r,o,s,u),l)break;u+=d.byteLength}return xn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=xn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?g=>{let x=this.resolveTriangleIndex(g);Et(o,x*3,a,l)}:g=>{Et(o,g*3,a,l)},h=xn.getPrimitive(),f=e.geometry.index,c=e.geometry.attributes.position,d=e.indirect?g=>{let x=e.resolveTriangleIndex(g);Et(h,x*3,f,c)}:g=>{Et(h,g*3,f,c)};if(r){let g=(x,p,m,_,v,y,T,S)=>{for(let w=m,D=m+_;w<D;w++){d(w),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let b=x,M=x+p;b<M;b++)if(u(b),o.needsUpdate=!0,r(o,h,b,w,v,y,T,S))return!0}return!1};if(s){let x=s;s=function(p,m,_,v,y,T,S,w){return x(p,m,_,v,y,T,S,w)?!0:g(p,m,_,v,y,T,S,w)}}else s=g}return T1(this,e,t,s)}intersectsBox(e,t){return Fl.set(e.min,e.max,t),Fl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Fl.intersectsBox(n),intersectsTriangle:n=>Fl.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,o=1/0){return(this.indirect?M1:g1)(this,e,t,n,s,r,o)}closestPointToPoint(e,t={},n=0,s=1/0){return t1(this,e,t,n,s)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{wt(0,new Float32Array(n),w1),e.union(w1)}),e}};function tg(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function ng(i){switch(i){case 1:return Xi;case 2:return Co;case 3:return tt;case 4:return tt}}function E1(i){switch(i){case 1:return hl;case 2:return br;case 3:return Mr;case 4:return Mr}}var Ul=class extends Tt{constructor(){super(),this.minFilter=Ze,this.magFilter=Ze,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){let t=this.overrideItemSize,n=e.itemSize,s=e.count;if(t!==null){if(n*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*n/t}let r=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,u=l.BYTES_PER_ELEMENT,h=this._forcedType,f=r;if(h===null)switch(l){case Float32Array:h=ct;break;case Uint8Array:case Uint16Array:case Uint32Array:h=mn;break;case Int8Array:case Int16Array:case Int32Array:h=yr;break}let c,d,g,x,p=tg(r);switch(h){case ct:g=1,d=ng(r),a&&u===1?(x=l,p+="8",l===Uint8Array?c=gn:(c=ul,p+="_SNORM")):(x=Float32Array,p+="32F",c=ct);break;case yr:p+=u*8+"I",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=E1(r),u===1?(x=Int8Array,c=ul):u===2?(x=Int16Array,c=ph):(x=Int32Array,c=yr);break;case mn:p+=u*8+"UI",g=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=E1(r),u===1?(x=Uint8Array,c=gn):u===2?(x=Uint16Array,c=Ro):(x=Uint32Array,c=mn);break}f===3&&(d===tt||d===Mr)&&(f=4);let m=Math.ceil(Math.sqrt(o))||1,_=f*m*m,v=new x(_),y=e.normalized;e.normalized=!1;for(let T=0;T<o;T++){let S=f*T;v[S]=e.getX(T)/g,r>=2&&(v[S+1]=e.getY(T)/g),r>=3&&(v[S+2]=e.getZ(T)/g,f===4&&(v[S+3]=1)),r>=4&&(v[S+3]=e.getW(T)/g)}e.normalized=y,this.internalFormat=p,this.format=d,this.type=c,this.image.width=m,this.image.height=m,this.image.data=v,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=s}},Gr=class extends Ul{constructor(){super(),this._forcedType=mn}};var Wr=class extends Ul{constructor(){super(),this._forcedType=ct}};var Ol=class{constructor(){this.index=new Gr,this.position=new Wr,this.bvhBounds=new Tt,this.bvhContents=new Tt,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){let{geometry:t}=e;if(sg(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){let n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{let s=Th(Sh(t));this._cachedIndexAttr=new ut(s,1,!1)}ig(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){let{index:e,position:t,bvhBounds:n,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),s&&s.dispose()}};function ig(i,e,t){let n=t.array,s=i.index?i.index.array:null;for(let r=0,o=e.length;r<o;r++){let a=3*r,l=3*e[r];for(let u=0;u<3;u++)n[a+u]=s?s[l+u]:l+u}}function sg(i,e,t){let n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let s=n[0],r=new Uint16Array(s),o=new Uint32Array(s),a=new Float32Array(s),l=s.byteLength/32,u=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(l)),c=new Uint32Array(2*f*f);for(let d=0;d<l;d++){let g=d*32/4,x=g*2,p=g;for(let m=0;m<3;m++)h[8*d+0+m]=a[p+0+m],h[8*d+4+m]=a[p+3+m];if(Ct(x,r)){let m=kt(x,r),_=Ut(g,o),v=4294901760|m;c[d*2+0]=v,c[d*2+1]=_}else{let m=4*Yt(g,o)/32,_=Pr(g,o);c[d*2+0]=_,c[d*2+1]=m}}e.image.data=h,e.image.width=u,e.image.height=u,e.format=tt,e.type=ct,e.internalFormat="RGBA32F",e.minFilter=Ze,e.magFilter=Ze,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=c,t.image.width=f,t.image.height=f,t.format=br,t.type=mn,t.internalFormat="RG32UI",t.minFilter=Ze,t.magFilter=Ze,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}var Rs={};n0(Rs,{bvh_distance_functions:()=>A1,bvh_ray_functions:()=>$h,bvh_struct_definitions:()=>R1,common_functions:()=>Yh});var Yh=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var A1=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0-v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = pow( 100000.0, 2.0 );
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`;var $h=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var R1=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var Lv=`
	${Yh}
	${$h}
`;var Zh={pivots:{P1a:[44.75,43.2],P1b:[44.75,55.65],Ca:[46.4,46.25],Cb:[46.4,52.6],J1a:[48.65,38.8],J1b:[48.65,60.05],P2a:[46.5,45.1],P2b:[46.5,53.7],J2a:[49.6,41.2],J2b:[49.6,57.65],Sa:[44.4,46.4],Sb:[44.4,52.4]},groups:{gehaeuse:{v:[45.278,22.66,55.236,45.387,22.76,55.213,45.43,22.66,55.654,45.53,22.76,55.654,45.387,22.76,56.095,45.012,22.76,54.941,44.893,22.66,55.014,44.548,22.76,54.941,44.455,22.66,55.091,44.173,22.76,55.213,44.169,22.66,55.432,44.03,22.76,55.654,44.169,22.66,55.876,44.173,22.76,56.095,44.455,22.66,56.217,44.548,22.76,56.367,44.893,22.66,56.294,45.012,22.76,56.367,45.278,22.66,56.072,45.387,22.96,56.095,45.53,22.96,55.654,45.387,22.96,55.213,45.012,22.96,54.941,44.548,22.96,54.941,44.173,22.96,55.213,44.03,22.96,55.654,44.173,22.96,56.095,44.548,22.96,56.367,45.012,22.96,56.367,45.18,27.26,55.654,45.086,27.26,55.397,45.086,27.26,55.911,44.85,27.26,56.048,44.85,27.26,55.26,44.58,27.26,56.001,44.58,27.26,55.308,44.404,27.26,55.791,44.404,27.26,55.517,45.086,22.96,55.397,45.18,22.96,55.654,45.086,22.96,55.911,44.85,22.96,55.26,44.58,22.96,55.308,44.404,22.96,55.517,44.404,22.96,55.791,44.58,22.96,56.001,44.85,22.96,56.048,37.199,24.96,48.91,37.199,24.96,48.21,36.999,24.96,48.21,40.084,26.21,46.823,40.107,26.21,46.611,40.084,26.96,46.823,40.107,26.96,46.611,40.174,26.21,46.408,40.174,26.96,46.408,40.283,26.21,46.224,40.283,26.96,46.224,40.429,26.21,46.068,40.429,26.96,46.068,40.604,26.21,45.946,40.604,26.96,45.946,44.54,26.21,43.796,44.54,26.96,43.796,40.084,22.96,46.823,40.107,22.96,46.611,40.084,23.71,46.823,40.107,23.71,46.611,40.174,22.96,46.408,40.174,23.71,46.408,40.283,22.96,46.224,40.283,23.71,46.224,40.429,22.96,46.068,40.429,23.71,46.068,40.604,22.96,45.946,40.604,23.71,45.946,44.54,22.96,43.796,44.54,23.71,43.796,40.604,26.21,52.875,40.429,26.21,52.753,40.604,26.96,52.875,40.429,26.96,52.753,40.283,26.21,52.596,40.283,26.96,52.596,40.174,26.21,52.412,40.174,26.96,52.412,40.107,26.21,52.21,40.107,26.96,52.21,40.084,26.21,51.997,40.084,26.96,51.997,40.604,22.96,52.875,40.429,22.96,52.753,40.604,23.71,52.875,40.429,23.71,52.753,40.283,22.96,52.596,40.283,23.71,52.596,40.174,22.96,52.412,40.174,23.71,52.412,40.107,22.96,52.21,40.107,23.71,52.21,40.084,22.96,51.997,40.084,23.71,51.997,39.723,22.96,53.533,39.723,23.71,53.533,39.571,22.96,53.465,39.571,23.71,53.465,39.409,23.71,53.424,39.243,23.71,53.41,39.243,22.96,53.41,39.409,22.96,53.424,38.999,23.71,53.41,36.999,22.96,53.41,38.999,26.21,53.41,36.999,26.96,53.41,39.243,26.96,53.41,39.243,26.21,53.41,39.409,26.96,53.424,39.409,26.21,53.424,39.571,26.21,53.465,39.723,26.21,53.533,39.723,26.96,53.533,39.571,26.96,53.465,44.535,26.21,56.161,44.535,26.96,56.161,39.723,26.96,45.288,39.723,26.21,45.288,39.571,26.96,45.355,39.571,26.21,45.355,39.409,26.21,45.396,39.243,26.21,45.41,39.243,26.96,45.41,39.409,26.96,45.396,38.999,26.21,45.41,36.999,26.96,45.41,36.999,22.96,45.41,38.999,23.71,45.41,39.243,22.96,45.41,39.243,23.71,45.41,39.409,22.96,45.396,39.409,23.71,45.396,39.571,23.71,45.355,39.723,23.71,45.288,39.723,22.96,45.288,39.571,22.96,45.355,44.535,23.71,42.659,44.535,22.96,42.659,37.199,24.673,50.575,36.999,24.673,50.575,37.199,24.96,50.61,36.999,24.96,50.61,37.199,25.247,50.575,36.999,25.247,50.575,37.199,25.518,50.473,36.999,25.518,50.473,37.199,25.756,50.308,36.999,25.756,50.308,37.199,25.948,50.092,36.999,25.948,50.092,37.199,26.082,49.836,36.999,26.082,49.836,37.199,26.151,49.555,36.999,26.151,49.555,37.199,26.151,49.266,36.999,26.151,49.266,37.199,26.082,48.985,36.999,26.082,48.985,37.199,25.948,48.729,36.999,25.948,48.729,37.199,25.756,48.512,36.999,25.756,48.512,37.199,25.518,48.348,36.999,25.518,48.348,37.199,25.247,48.245,36.999,25.247,48.245,37.199,24.673,48.245,36.999,24.673,48.245,37.199,24.403,48.348,36.999,24.403,48.348,37.199,24.164,48.512,36.999,24.164,48.512,37.199,23.973,48.729,36.999,23.973,48.729,37.199,23.838,48.985,36.999,23.838,48.985,37.199,23.769,49.266,36.999,23.769,49.266,37.199,23.769,49.555,36.999,23.769,49.555,37.199,23.838,49.836,36.999,23.838,49.836,37.199,23.973,50.092,36.999,23.973,50.092,37.199,24.164,50.308,36.999,24.164,50.308,37.199,24.403,50.473,36.999,24.403,50.473,37.199,25.141,48.944,37.199,25.297,49.041,37.199,25.408,49.187,37.199,25.458,49.364,37.199,25.441,49.547,37.199,25.359,49.712,37.199,25.223,49.835,37.199,25.052,49.902,37.199,24.868,49.902,37.199,24.697,49.835,37.199,24.561,49.712,37.199,24.479,49.547,37.199,24.462,49.364,37.199,24.513,49.187,37.199,24.623,49.041,37.199,24.78,48.944,37.399,24.78,48.944,37.399,24.96,48.91,37.399,25.141,48.944,37.399,25.297,49.041,37.399,25.408,49.187,37.399,25.458,49.364,37.399,25.441,49.547,37.399,25.359,49.712,37.399,25.223,49.835,37.399,25.052,49.902,37.399,24.868,49.902,37.399,24.697,49.835,37.399,24.561,49.712,37.399,24.479,49.547,37.399,24.462,49.364,37.399,24.513,49.187,37.399,24.623,49.041,38.999,25.141,48.944,38.399,25.141,48.944,38.999,24.96,48.91,38.399,24.96,48.91,38.999,24.78,48.944,38.399,24.78,48.944,38.999,24.623,49.041,38.399,24.623,49.041,38.999,24.513,49.187,38.399,24.513,49.187,38.999,24.462,49.364,38.399,24.462,49.364,38.999,24.479,49.547,38.399,24.479,49.547,38.999,24.561,49.712,38.399,24.561,49.712,38.999,24.697,49.835,38.399,24.697,49.835,38.999,24.868,49.902,38.399,24.868,49.902,38.999,25.052,49.902,38.399,25.052,49.902,38.999,25.223,49.835,38.399,25.223,49.835,38.999,25.359,49.712,38.399,25.359,49.712,38.999,25.441,49.547,38.399,25.441,49.547,38.999,25.458,49.364,38.399,25.458,49.364,38.999,25.408,49.187,38.399,25.408,49.187,38.999,25.297,49.041,38.399,25.297,49.041,45.145,26.96,55.491,45.171,26.21,55.571,45.18,26.96,55.654,45.171,26.21,55.737,45.145,26.96,55.817,45.104,26.21,55.889,45.048,26.96,55.951,44.98,26.21,56.001,44.904,26.96,56.035,44.822,26.21,56.052,44.738,26.96,56.052,44.656,26.21,56.035,44.58,26.96,56.001,44.512,26.21,55.951,44.456,26.96,55.889,44.415,26.21,55.817,44.389,26.96,55.737,44.38,26.21,55.654,44.389,26.96,55.571,44.415,26.21,55.491,44.456,26.96,55.419,44.512,26.21,55.357,44.58,26.96,55.308,44.656,26.21,55.274,44.738,26.96,55.256,44.822,26.21,55.256,44.904,26.96,55.274,44.98,26.21,55.308,45.048,26.96,55.357,45.104,26.21,55.419,44.415,23.71,55.817,44.415,22.96,55.817,44.38,23.71,55.654,44.38,22.96,55.654,44.415,23.71,55.491,44.415,22.96,55.491,44.512,23.71,55.357,44.512,22.96,55.357,44.656,23.71,55.274,44.656,22.96,55.274,44.822,23.71,55.256,44.822,22.96,55.256,44.98,23.71,55.308,44.98,22.96,55.308,45.104,23.71,55.419,45.104,22.96,55.419,45.171,23.71,55.571,45.171,22.96,55.571,45.171,23.71,55.737,45.171,22.96,55.737,45.104,23.71,55.889,45.104,22.96,55.889,44.98,23.71,56.001,44.98,22.96,56.001,44.822,23.71,56.052,44.822,22.96,56.052,44.656,23.71,56.035,44.656,22.96,56.035,44.512,23.71,55.951,44.512,22.96,55.951,45.145,26.96,43.02,45.171,26.21,43.099,45.18,26.96,43.183,45.171,26.21,43.266,45.145,26.96,43.345,45.104,26.21,43.418,45.048,26.96,43.48,44.98,26.21,43.529,44.904,26.96,43.563,44.822,26.21,43.58,44.738,26.96,43.58,44.656,26.21,43.563,44.58,26.96,43.529,44.512,26.21,43.48,44.456,26.96,43.418,44.415,26.21,43.345,44.389,26.96,43.266,44.38,26.21,43.183,44.389,26.96,43.099,44.415,26.21,43.02,44.456,26.96,42.947,44.512,26.21,42.885,44.58,26.96,42.836,44.656,26.21,42.802,44.738,26.96,42.785,44.822,26.21,42.785,44.904,26.96,42.802,44.98,26.21,42.836,45.048,26.96,42.885,45.104,26.21,42.947,44.415,23.71,43.345,44.415,22.96,43.345,44.38,23.71,43.183,44.38,22.96,43.183,44.415,23.71,43.02,44.415,22.96,43.02,44.512,23.71,42.885,44.512,22.96,42.885,44.656,23.71,42.802,44.656,22.96,42.802,44.822,23.71,42.785,44.822,22.96,42.785,44.98,23.71,42.836,44.98,22.96,42.836,45.104,23.71,42.947,45.104,22.96,42.947,45.171,23.71,43.099,45.171,22.96,43.099,45.171,23.71,43.266,45.171,22.96,43.266,45.104,23.71,43.418,45.104,22.96,43.418,44.98,23.71,43.529,44.98,22.96,43.529,44.822,23.71,43.58,44.822,22.96,43.58,44.656,23.71,43.563,44.656,22.96,43.563,44.512,23.71,43.48,44.512,22.96,43.48,47.352,22.96,53.852,47.432,22.96,53.749,47.352,23.71,53.852,47.432,23.71,53.749,47.482,23.71,53.628,47.482,22.96,53.628,47.499,22.96,53.499,47.499,23.71,53.499,44.54,23.71,55.025,44.691,23.71,55.078,44.851,23.71,55.081,45.004,23.71,55.033,45.134,23.71,54.939,45.499,23.71,54.574,46.375,23.71,54.086,45.128,23.71,56.076,46.54,23.71,54.103,46.699,23.71,54.052,46.822,23.71,53.94,46.89,23.71,53.788,46.89,23.71,53.622,46.822,23.71,53.47,47.499,23.71,50.66,46.699,23.71,53.359,46.499,23.71,50.66,46.54,23.71,53.307,46.375,23.71,53.325,46.231,23.71,53.408,46.133,23.71,53.543,46.099,23.71,53.705,46.133,23.71,53.868,46.231,23.71,54.002,44.999,23.71,56.17,44.846,23.71,56.217,44.686,23.71,56.215,44.535,23.71,56.161,44.686,23.71,42.606,44.846,23.71,42.603,44.999,23.71,42.651,45.128,23.71,42.744,45.499,23.71,44.246,46.375,23.71,44.735,46.54,23.71,44.717,46.699,23.71,44.769,45.134,23.71,43.881,45.004,23.71,43.787,44.851,23.71,43.74,44.691,23.71,43.743,46.133,23.71,45.278,46.099,23.71,45.115,46.133,23.71,44.953,46.231,23.71,44.818,47.352,23.71,44.968,46.822,23.71,44.88,46.89,23.71,45.032,46.89,23.71,45.198,47.499,23.71,45.322,47.432,23.71,45.072,47.482,23.71,45.192,46.822,23.71,45.35,47.499,23.71,48.16,46.699,23.71,45.462,46.499,23.71,48.16,46.54,23.71,45.513,46.375,23.71,45.496,46.231,23.71,45.412,47.499,22.96,45.322,47.499,26.21,50.66,47.499,26.21,48.16,47.499,26.96,53.499,47.499,26.96,45.322,47.499,26.21,45.322,47.499,26.21,53.499,47.482,26.96,53.628,47.482,26.21,53.628,47.432,26.21,53.749,47.432,26.96,53.749,47.352,26.96,53.852,47.352,26.21,53.852,44.686,26.21,56.215,44.846,26.21,56.217,44.999,26.21,56.17,45.128,26.21,56.076,45.499,26.21,54.574,46.375,26.21,54.086,46.54,26.21,54.103,46.699,26.21,54.052,45.134,26.21,54.939,45.004,26.21,55.033,44.851,26.21,55.081,44.691,26.21,55.078,44.54,26.21,55.025,44.691,26.21,43.743,44.851,26.21,43.74,45.004,26.21,43.787,45.134,26.21,43.881,45.499,26.21,44.246,46.375,26.21,44.735,45.128,26.21,42.744,46.54,26.21,44.717,46.699,26.21,44.769,47.352,26.21,44.968,46.822,26.21,44.88,46.89,26.21,45.032,46.89,26.21,45.198,46.822,26.21,45.35,46.699,26.21,45.462,46.499,26.21,48.16,46.54,26.21,45.513,46.375,26.21,45.496,46.231,26.21,45.412,46.133,26.21,45.278,46.099,26.21,45.115,46.133,26.21,44.953,46.231,26.21,44.818,44.999,26.21,42.651,44.846,26.21,42.603,44.686,26.21,42.606,44.535,26.21,42.659,46.133,26.21,53.543,46.099,26.21,53.705,46.133,26.21,53.868,46.231,26.21,54.002,46.822,26.21,53.94,46.89,26.21,53.788,46.89,26.21,53.622,46.822,26.21,53.47,46.699,26.21,53.359,46.499,26.21,50.66,46.54,26.21,53.307,46.375,26.21,53.325,46.231,26.21,53.408,47.432,26.21,45.072,47.482,26.21,45.192,47.352,26.96,44.968,47.432,26.96,45.072,47.482,26.96,45.192,45.128,26.96,42.744,47.482,22.96,45.192,47.432,22.96,45.072,47.352,22.96,44.968,45.128,22.96,42.744,44.691,22.96,43.743,44.851,22.96,43.74,45.004,22.96,43.787,45.134,22.96,43.881,45.499,22.96,44.246,44.686,22.96,42.606,44.846,22.96,42.603,44.999,22.96,42.651,44.691,26.96,43.743,44.851,26.96,43.74,45.004,26.96,43.787,45.134,26.96,43.881,45.499,26.96,44.246,44.535,26.96,42.659,44.686,26.96,42.606,44.846,26.96,42.603,44.999,26.96,42.651,45.128,22.96,56.076,44.999,22.96,56.17,44.846,22.96,56.217,44.686,22.96,56.215,44.535,22.96,56.161,45.134,22.96,54.939,45.004,22.96,55.033,44.851,22.96,55.081,44.691,22.96,55.078,44.54,22.96,55.025,45.128,26.96,56.076,44.999,26.96,56.17,44.846,26.96,56.217,44.686,26.96,56.215,45.134,26.96,54.939,45.004,26.96,55.033,44.851,26.96,55.081,44.691,26.96,55.078,44.54,26.96,55.025,46.133,22.96,44.953,46.099,22.96,45.115,46.133,22.96,45.278,46.231,22.96,45.412,46.375,22.96,45.496,46.54,22.96,45.513,46.699,22.96,45.462,46.822,22.96,45.35,46.89,22.96,45.198,46.89,22.96,45.032,46.822,22.96,44.88,46.699,22.96,44.769,46.54,22.96,44.717,46.375,22.96,44.735,46.231,22.96,44.818,46.107,26.96,45.032,46.107,26.96,45.198,46.175,26.96,45.35,46.299,26.96,45.462,46.457,26.96,45.513,46.622,26.96,45.496,46.766,26.96,45.412,46.864,26.96,45.278,46.899,26.96,45.115,46.864,26.96,44.953,46.766,26.96,44.818,46.622,26.96,44.735,46.457,26.96,44.717,46.299,26.96,44.769,46.175,26.96,44.88,46.133,22.96,53.543,46.099,22.96,53.705,46.133,22.96,53.868,46.231,22.96,54.002,46.375,22.96,54.086,46.54,22.96,54.103,46.699,22.96,54.052,46.822,22.96,53.94,46.89,22.96,53.788,46.89,22.96,53.622,46.822,22.96,53.47,46.699,22.96,53.359,46.54,22.96,53.307,46.375,22.96,53.325,46.231,22.96,53.408,46.107,26.96,53.622,46.107,26.96,53.788,46.175,26.96,53.94,46.299,26.96,54.052,46.457,26.96,54.103,46.622,26.96,54.086,46.766,26.96,54.002,46.864,26.96,53.868,46.899,26.96,53.705,46.864,26.96,53.543,46.766,26.96,53.408,46.622,26.96,53.325,46.457,26.96,53.307,46.299,26.96,53.359,46.175,26.96,53.47,45.499,26.96,54.574,45.499,22.96,54.574,38.399,22.96,51.91,37.399,22.96,51.91,38.399,26.96,51.91,37.399,26.96,51.91,38.399,26.96,46.91,38.399,22.96,46.91,37.399,22.96,46.91,37.399,26.96,46.91,45.278,22.66,42.765,45.387,22.76,42.742,45.43,22.66,43.183,45.53,22.76,43.183,45.387,22.76,43.623,45.012,22.76,42.469,44.893,22.66,42.542,44.548,22.76,42.469,44.455,22.66,42.62,44.173,22.76,42.742,44.169,22.66,42.96,44.03,22.76,43.183,44.169,22.66,43.405,44.173,22.76,43.623,44.455,22.66,43.745,44.548,22.76,43.896,44.893,22.66,43.823,45.012,22.76,43.896,45.278,22.66,43.6,45.387,22.96,43.623,45.53,22.96,43.183,45.387,22.96,42.742,45.012,22.96,42.469,44.548,22.96,42.469,44.173,22.96,42.742,44.03,22.96,43.183,44.173,22.96,43.623,44.548,22.96,43.896,45.012,22.96,43.896,45.18,27.26,43.183,45.086,27.26,42.925,45.086,27.26,43.44,44.85,27.26,43.576,44.85,27.26,42.789,44.58,27.26,43.529,44.58,27.26,42.836,44.404,27.26,43.319,44.404,27.26,43.046,45.086,22.96,42.925,45.18,22.96,43.183,45.086,22.96,43.44,44.85,22.96,42.789,44.58,22.96,42.836,44.404,22.96,43.046,44.404,22.96,43.319,44.58,22.96,43.529,44.85,22.96,43.576,44.701,26.94,56.067,44.704,26.96,56.047,44.917,26.94,56.051,44.911,26.96,56.032,45.097,26.94,55.929,45.082,26.96,55.916,45.192,26.94,55.734,45.173,26.96,55.73,45.177,26.94,55.517,45.158,26.96,55.523,45.055,26.94,55.337,45.042,26.96,55.352,44.86,26.94,55.242,44.856,26.96,55.261,44.643,26.94,55.257,44.649,26.96,55.276,44.463,26.94,55.379,44.478,26.96,55.392,44.368,26.94,55.575,44.387,26.96,55.578,44.383,26.94,55.792,44.402,26.96,55.785,44.505,26.94,55.972,44.518,26.96,55.956,45.082,27.22,55.916,44.911,27.22,56.032,44.704,27.22,56.047,44.518,27.22,55.956,44.402,27.22,55.785,44.387,27.22,55.578,44.478,27.22,55.392,44.649,27.22,55.276,44.856,27.22,55.261,45.042,27.22,55.352,45.158,27.22,55.523,45.173,27.22,55.73,45.411,26.94,55.776,45.201,26.94,55.169,44.99,26.94,56.261,44.359,26.94,56.14,44.149,26.94,55.533,44.57,26.94,55.047,44.701,27.24,56.067,44.917,27.24,56.051,45.097,27.24,55.929,45.192,27.24,55.734,45.177,27.24,55.517,45.055,27.24,55.337,44.86,27.24,55.242,44.643,27.24,55.257,44.463,27.24,55.379,44.368,27.24,55.575,44.383,27.24,55.792,44.505,27.24,55.972,45.411,27.24,55.776,44.99,27.24,56.261,45.201,27.24,55.169,44.57,27.24,55.047,44.149,27.24,55.533,44.359,27.24,56.14,44.303,27.19,56.129,44.332,26.977,56.171,44.332,27.204,56.171,44.378,26.99,56.194,44.378,27.19,56.194,44.303,26.99,56.129,44.112,26.99,55.576,44.108,26.977,55.525,44.112,27.19,55.576,44.108,27.204,55.525,44.952,27.19,56.305,45.004,26.977,56.301,45.004,27.204,56.301,45.047,26.99,56.272,45.047,27.19,56.272,44.952,26.99,56.305,45.43,26.99,55.83,45.43,27.19,55.83,45.452,26.977,55.784,45.452,27.204,55.784,45.449,26.99,55.732,45.449,27.19,55.732,45.257,27.19,55.18,45.228,27.204,55.137,45.257,26.99,55.18,44.131,27.19,55.478,44.131,26.99,55.478,44.513,27.19,55.036,44.513,26.99,55.036,44.556,27.204,55.007,44.608,27.19,55.004,44.556,26.977,55.007,44.608,26.99,55.004,45.182,26.99,55.114,45.228,26.977,55.137,45.182,27.19,55.114,45.07,26.88,43.487,45.056,26.9,43.472,45.183,26.88,43.301,45.164,26.9,43.296,45.188,26.88,43.084,45.169,26.9,43.089,45.084,26.88,42.893,45.07,26.9,42.907,44.899,26.88,42.78,44.893,26.9,42.799,44.682,26.88,42.774,44.686,26.9,42.794,44.491,26.88,42.878,44.504,26.9,42.893,44.377,26.88,43.064,44.396,26.9,43.069,44.372,26.88,43.281,44.391,26.9,43.276,44.476,26.88,43.472,44.49,26.9,43.458,44.661,26.88,43.585,44.667,26.9,43.566,44.879,26.88,43.591,44.874,26.9,43.571,45.169,27.16,43.089,45.164,27.16,43.296,45.056,27.16,43.472,44.874,27.16,43.571,44.667,27.16,43.566,44.49,27.16,43.458,44.391,27.16,43.276,44.396,27.16,43.069,44.504,27.16,42.893,44.686,27.16,42.794,44.893,27.16,42.799,45.07,27.16,42.907,45.245,26.88,42.74,44.629,26.88,42.558,45.396,26.88,43.364,44.931,26.88,43.807,44.315,26.88,43.625,44.164,26.88,43.001,45.07,27.18,43.487,45.183,27.18,43.301,45.188,27.18,43.084,45.084,27.18,42.893,44.899,27.18,42.78,44.682,27.18,42.774,44.491,27.18,42.878,44.377,27.18,43.064,44.372,27.18,43.281,44.476,27.18,43.472,44.661,27.18,43.585,44.879,27.18,43.591,45.245,27.18,42.74,45.396,27.18,43.364,44.629,27.18,42.558,44.164,27.18,43.001,44.315,27.18,43.625,44.931,27.18,43.807,44.889,27.13,43.847,44.941,26.917,43.848,44.941,27.144,43.848,44.986,26.93,43.823,44.986,27.13,43.823,44.889,26.93,43.847,44.328,26.93,43.681,44.284,26.917,43.654,44.328,27.13,43.681,44.284,27.144,43.654,45.41,27.13,43.42,45.437,26.917,43.376,45.437,27.144,43.376,45.438,26.93,43.324,45.438,27.13,43.324,45.41,26.93,43.42,45.301,26.93,42.756,45.301,27.13,42.756,45.276,26.917,42.711,45.276,27.144,42.711,45.232,26.93,42.684,45.232,27.13,42.684,44.671,27.13,42.518,44.619,27.144,42.517,44.671,26.93,42.518,44.259,27.13,43.609,44.259,26.93,43.609,44.122,27.13,43.041,44.122,26.93,43.041,44.123,27.144,42.989,44.15,27.13,42.945,44.123,26.917,42.989,44.15,26.93,42.945,44.574,26.93,42.542,44.619,26.917,42.517,44.574,27.13,42.542,46.135,27.18,45.325,46.152,27.16,45.315,46.079,27.18,45.115,46.099,27.16,45.115,46.135,27.18,44.905,46.152,27.16,44.915,46.289,27.18,44.752,46.299,27.16,44.769,46.499,27.18,44.695,46.499,27.16,44.715,46.709,27.18,44.752,46.699,27.16,44.769,46.862,27.18,44.905,46.845,27.16,44.915,46.919,27.18,45.115,46.899,27.16,45.115,46.862,27.18,45.325,46.845,27.16,45.315,46.709,27.18,45.479,46.699,27.16,45.462,46.499,27.18,45.535,46.499,27.16,45.515,46.289,27.18,45.479,46.299,27.16,45.462,46.152,26.9,44.915,46.099,26.9,45.115,46.152,26.9,45.315,46.299,26.9,45.462,46.499,26.9,45.515,46.699,26.9,45.462,46.845,26.9,45.315,46.899,26.9,45.115,46.845,26.9,44.915,46.699,26.9,44.769,46.499,26.9,44.715,46.299,26.9,44.769,46.178,27.18,44.559,46.82,27.18,44.559,45.856,27.18,45.115,46.178,27.18,45.671,46.82,27.18,45.671,47.141,27.18,45.115,46.135,26.88,45.325,46.079,26.88,45.115,46.135,26.88,44.905,46.289,26.88,44.752,46.499,26.88,44.695,46.709,26.88,44.752,46.862,26.88,44.905,46.919,26.88,45.115,46.862,26.88,45.325,46.709,26.88,45.479,46.499,26.88,45.535,46.289,26.88,45.479,46.178,26.88,44.559,45.856,26.88,45.115,46.82,26.88,44.559,47.141,26.88,45.115,46.82,26.88,45.671,46.178,26.88,45.671,46.206,26.93,45.721,46.156,27.144,45.708,46.156,26.917,45.708,46.12,27.13,45.671,46.12,26.93,45.671,46.206,27.13,45.721,46.791,27.13,45.721,46.841,27.144,45.708,46.791,26.93,45.721,46.841,26.917,45.708,45.828,26.93,45.165,45.814,27.144,45.115,45.814,26.917,45.115,45.828,27.13,45.065,45.828,26.93,45.065,45.828,27.13,45.165,46.12,27.13,44.559,46.12,26.93,44.559,46.156,27.144,44.522,46.156,26.917,44.522,46.206,27.13,44.509,46.206,26.93,44.509,46.791,26.93,44.509,46.841,26.917,44.522,46.791,27.13,44.509,46.878,26.93,45.671,46.878,27.13,45.671,47.17,26.93,45.165,47.17,27.13,45.165,47.183,26.917,45.115,47.17,26.93,45.065,47.183,27.144,45.115,47.17,27.13,45.065,46.878,27.13,44.559,46.841,27.144,44.522,46.878,26.93,44.559,46.135,27.18,53.915,46.152,27.16,53.905,46.079,27.18,53.705,46.099,27.16,53.705,46.135,27.18,53.495,46.152,27.16,53.505,46.289,27.18,53.342,46.299,27.16,53.359,46.499,27.18,53.285,46.499,27.16,53.305,46.709,27.18,53.342,46.699,27.16,53.359,46.862,27.18,53.495,46.845,27.16,53.505,46.919,27.18,53.705,46.899,27.16,53.705,46.862,27.18,53.915,46.845,27.16,53.905,46.709,27.18,54.069,46.699,27.16,54.052,46.499,27.18,54.125,46.499,27.16,54.105,46.289,27.18,54.069,46.299,27.16,54.052,46.152,26.9,53.505,46.099,26.9,53.705,46.152,26.9,53.905,46.299,26.9,54.052,46.499,26.9,54.105,46.699,26.9,54.052,46.845,26.9,53.905,46.899,26.9,53.705,46.845,26.9,53.505,46.699,26.9,53.359,46.499,26.9,53.305,46.299,26.9,53.359,46.178,27.18,53.149,46.82,27.18,53.149,45.856,27.18,53.705,46.178,27.18,54.261,46.82,27.18,54.261,47.141,27.18,53.705,46.135,26.88,53.915,46.079,26.88,53.705,46.135,26.88,53.495,46.289,26.88,53.342,46.499,26.88,53.285,46.709,26.88,53.342,46.862,26.88,53.495,46.919,26.88,53.705,46.862,26.88,53.915,46.709,26.88,54.069,46.499,26.88,54.125,46.289,26.88,54.069,46.178,26.88,53.149,45.856,26.88,53.705,46.82,26.88,53.149,47.141,26.88,53.705,46.82,26.88,54.261,46.178,26.88,54.261,46.206,26.93,54.311,46.156,27.144,54.298,46.156,26.917,54.298,46.12,27.13,54.261,46.12,26.93,54.261,46.206,27.13,54.311,46.791,27.13,54.311,46.841,27.144,54.298,46.791,26.93,54.311,46.841,26.917,54.298,45.828,26.93,53.755,45.814,27.144,53.705,45.814,26.917,53.705,45.828,27.13,53.655,45.828,26.93,53.655,45.828,27.13,53.755,46.12,27.13,53.149,46.12,26.93,53.149,46.156,27.144,53.112,46.156,26.917,53.112,46.206,27.13,53.099,46.206,26.93,53.099,46.791,26.93,53.099,46.841,26.917,53.112,46.791,27.13,53.099,46.878,26.93,54.261,46.878,27.13,54.261,47.17,26.93,53.755,47.17,27.13,53.755,47.183,26.917,53.705,47.17,26.93,53.655,47.183,27.144,53.705,47.17,27.13,53.655,46.878,27.13,53.149,46.841,27.144,53.112,46.878,26.93,53.149,46.958,22.16,53.32,47.035,22.26,53.255,47.099,22.16,53.705,47.199,22.26,53.705,46.958,22.16,54.091,47.035,22.26,54.155,46.603,22.16,54.296,46.62,22.26,54.395,46.199,22.16,54.225,46.149,22.26,54.311,45.935,22.16,53.91,45.841,22.26,53.945,45.935,22.16,53.5,45.841,22.26,53.466,46.199,22.16,53.186,46.149,22.26,53.099,46.603,22.16,53.114,46.62,22.26,53.016,47.035,22.46,54.155,47.199,22.46,53.705,47.035,22.46,53.255,46.62,22.46,53.016,46.149,22.46,53.099,45.841,22.46,53.466,45.841,22.46,53.945,46.149,22.46,54.311,46.62,22.46,54.395,46.899,27.26,53.705,46.805,27.26,53.448,46.805,27.26,53.962,46.568,27.26,54.099,46.568,27.26,53.311,46.299,27.26,54.052,46.299,27.26,53.359,46.123,27.26,53.842,46.123,27.26,53.568,46.805,22.46,53.448,46.899,22.46,53.705,46.805,22.46,53.962,46.568,22.46,53.311,46.299,22.46,53.359,46.123,22.46,53.568,46.123,22.46,53.842,46.299,22.46,54.052,46.568,22.46,54.099,46.958,22.16,44.73,47.035,22.26,44.665,47.099,22.16,45.115,47.199,22.26,45.115,46.958,22.16,45.501,47.035,22.26,45.565,46.603,22.16,45.706,46.62,22.26,45.805,46.199,22.16,45.635,46.149,22.26,45.721,45.935,22.16,45.32,45.841,22.26,45.355,45.935,22.16,44.91,45.841,22.26,44.876,46.199,22.16,44.596,46.149,22.26,44.509,46.603,22.16,44.524,46.62,22.26,44.426,47.035,22.46,45.565,47.199,22.46,45.115,47.035,22.46,44.665,46.62,22.46,44.426,46.149,22.46,44.509,45.841,22.46,44.876,45.841,22.46,45.355,46.149,22.46,45.721,46.62,22.46,45.805,46.899,27.26,45.115,46.805,27.26,44.858,46.805,27.26,45.372,46.568,27.26,45.509,46.568,27.26,44.721,46.299,27.26,45.462,46.299,27.26,44.769,46.123,27.26,45.252,46.123,27.26,44.978,46.805,22.46,44.858,46.899,22.46,45.115,46.805,22.46,45.372,46.568,22.46,44.721,46.299,22.46,44.769,46.123,22.46,44.978,46.123,22.46,45.252,46.299,22.46,45.462,46.568,22.46,45.509],i:[5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,4,4,18,2,18,12,2,2,12,10,2,10,0,0,10,8,0,8,6,16,14,18,18,14,12,19,4,20,20,4,3,20,3,21,21,3,1,21,1,22,22,1,5,22,5,23,23,5,7,23,7,24,24,7,9,24,9,25,25,9,11,25,11,26,26,11,13,26,13,27,27,13,15,27,15,28,28,15,17,28,17,19,19,17,4,29,30,31,31,30,32,32,30,33,32,33,34,34,33,35,34,35,36,36,35,37,21,38,20,20,38,39,20,39,40,38,21,41,41,21,22,41,22,23,41,23,42,42,23,24,42,24,43,43,24,25,43,25,44,44,25,26,44,26,45,45,26,27,45,27,46,46,27,28,46,28,19,46,19,40,40,19,20,38,29,39,39,29,31,39,31,40,40,31,32,40,32,46,46,32,34,46,34,45,45,34,36,45,36,44,44,36,37,44,37,43,43,37,35,43,35,42,42,35,33,42,33,41,41,33,30,41,30,38,38,30,29,0,1,2,2,1,3,2,3,4,1,0,5,365,364,366,365,366,367,367,366,368,367,368,369,369,368,370,369,370,371,371,370,372,371,372,373,373,372,374,373,374,375,375,374,376,375,376,377,377,376,378,377,378,379,379,378,380,379,380,381,381,380,382,381,382,353,353,382,354,383,384,385,385,384,386,386,384,387,387,384,388,387,388,389,389,390,387,293,295,92,92,295,297,92,297,391,391,297,299,391,299,301,391,301,392,392,301,303,392,303,393,393,303,305,393,305,394,394,305,307,394,307,395,395,307,309,395,309,396,396,309,311,396,311,397,397,311,398,397,398,399,399,398,400,400,398,385,400,385,401,401,385,402,402,385,403,403,385,390,403,390,404,404,390,405,404,405,406,406,405,407,406,407,408,408,407,409,409,407,410,410,407,411,411,407,396,411,396,412,412,396,413,413,396,414,414,396,397,311,313,398,398,313,315,398,315,415,415,315,416,416,315,317,416,317,417,417,317,319,417,319,418,418,319,321,418,321,293,353,355,75,75,355,357,75,357,144,144,357,359,144,359,361,144,361,419,419,361,363,419,363,420,420,363,365,420,365,421,421,365,422,422,365,367,422,367,369,371,423,369,369,423,424,369,424,422,422,424,425,422,425,426,423,371,427,427,371,373,427,373,428,428,373,375,428,375,429,429,375,377,429,377,430,430,377,379,430,379,77,77,379,381,77,381,353,77,353,75,431,432,423,423,432,433,423,433,434,434,424,423,422,426,435,435,426,436,435,436,437,437,438,435,435,438,439,435,439,440,440,439,441,438,442,439,439,442,443,443,442,444,443,444,445,445,444,446,445,446,447,447,448,445,445,448,431,445,431,423,385,386,390,390,386,387,407,445,396,396,445,423,144,141,75,75,141,73,73,141,71,71,141,69,69,141,67,67,141,140,67,140,66,66,140,139,66,139,137,137,135,66,66,135,110,66,110,101,101,110,107,101,107,106,106,105,101,101,105,99,99,105,103,99,103,97,97,103,95,95,103,93,93,103,92,92,103,293,103,418,293,390,389,405,405,389,449,405,449,443,443,449,439,405,443,450,450,443,451,450,451,452,452,451,453,453,451,454,452,455,450,452,456,455,455,456,457,457,456,458,458,456,459,458,459,460,460,461,458,282,280,78,78,280,278,78,278,119,119,278,122,122,278,276,122,276,274,122,274,462,462,274,272,462,272,463,463,272,270,463,270,464,464,270,465,465,270,268,465,268,266,264,466,266,266,466,467,266,467,465,465,467,468,465,468,469,466,264,470,470,264,292,470,292,471,471,292,290,471,290,472,472,290,288,472,288,473,473,288,286,473,286,474,474,286,284,474,284,282,474,282,78,342,340,60,60,340,338,60,338,62,62,338,336,62,336,334,62,334,475,475,334,332,475,332,476,476,332,330,476,330,477,477,330,328,477,328,478,478,328,326,478,326,479,479,326,324,479,324,480,480,324,481,480,481,482,482,481,483,483,481,484,483,484,485,485,484,486,486,484,487,487,484,454,487,454,488,488,454,451,488,451,489,489,451,490,489,490,491,491,490,492,492,490,493,493,490,494,494,490,479,494,479,495,495,479,496,496,479,497,497,479,480,324,352,481,481,352,350,481,350,498,498,350,499,499,350,348,499,348,500,500,348,346,500,346,501,501,346,344,501,344,342,501,342,60,502,503,466,466,503,504,466,504,505,505,467,466,465,469,461,461,469,506,461,506,507,507,508,461,461,508,455,461,455,458,458,455,457,508,509,455,455,509,450,450,509,510,450,510,511,511,510,512,511,512,513,513,514,511,511,514,502,511,502,466,501,60,125,125,60,58,125,58,56,56,54,125,125,54,51,125,51,127,127,51,50,127,50,128,128,50,129,129,50,132,132,50,112,112,50,88,112,88,115,115,88,117,117,88,118,118,88,86,118,86,119,119,86,84,119,84,82,82,79,119,119,79,78,511,466,490,490,466,479,484,515,454,454,515,516,517,518,484,484,518,515,515,518,516,516,518,519,516,519,453,453,454,516,484,481,517,517,481,520,449,521,439,439,521,441,441,521,440,440,521,522,440,522,523,523,435,440,523,524,435,435,524,422,76,525,77,77,525,430,430,525,526,430,526,429,429,526,527,429,527,428,428,527,528,428,528,427,528,529,427,427,529,423,144,419,145,145,419,530,530,419,420,530,420,531,531,420,421,531,421,532,532,421,422,532,422,524,62,475,63,63,475,533,533,475,476,533,476,534,534,476,477,534,477,535,535,477,478,535,478,536,478,479,536,536,479,537,538,539,501,501,539,500,500,539,540,500,540,499,499,540,541,499,541,498,498,541,520,498,520,481,124,538,125,125,538,501,398,415,542,542,415,543,543,415,416,543,416,544,544,416,417,544,417,545,545,417,418,545,418,546,102,546,103,103,546,418,547,548,395,395,548,394,394,548,549,394,549,393,393,549,550,393,550,392,392,550,551,392,551,391,92,391,90,90,391,551,552,553,465,465,553,464,464,553,554,464,554,463,463,554,555,463,555,462,462,555,123,462,123,122,460,552,461,461,552,465,470,471,556,556,471,557,557,471,472,557,472,558,558,472,473,558,473,559,559,473,474,559,474,560,80,560,78,78,560,474,561,433,562,562,433,432,562,432,563,563,432,431,563,431,564,564,431,448,564,448,565,565,448,447,565,447,566,566,447,446,566,446,567,567,446,444,567,444,568,568,444,442,568,442,569,569,442,438,569,438,570,570,438,437,570,437,571,571,437,436,571,436,572,572,436,426,572,426,573,573,426,425,573,425,574,574,425,424,574,424,575,575,424,434,575,434,561,561,434,433,496,576,495,495,576,577,495,577,494,494,577,578,494,578,493,493,578,579,493,579,492,492,579,580,492,580,491,491,580,581,491,581,489,489,581,582,489,582,488,488,582,583,488,583,487,487,583,584,487,584,486,486,584,585,486,585,485,485,585,586,485,586,483,483,586,587,483,587,482,482,587,588,482,588,480,480,588,589,480,589,497,497,589,590,497,590,496,496,590,576,591,411,592,592,411,412,592,412,593,593,412,413,593,413,594,594,413,414,594,414,595,595,414,397,595,397,596,596,397,399,596,399,597,597,399,400,597,400,598,598,400,401,598,401,599,599,401,402,599,402,600,600,402,403,600,403,601,601,403,404,601,404,602,602,404,406,602,406,603,603,406,408,603,408,604,604,408,409,604,409,605,605,409,410,605,410,591,591,410,411,502,606,503,503,606,607,503,607,504,504,607,608,504,608,505,505,608,609,505,609,467,467,609,610,467,610,468,468,610,611,468,611,469,469,611,612,469,612,506,506,612,613,506,613,507,507,613,614,507,614,508,508,614,615,508,615,509,509,615,616,509,616,510,510,616,617,510,617,512,512,617,618,512,618,513,513,618,619,513,619,514,514,619,620,514,620,502,502,620,606,445,490,443,443,490,451,511,407,450,450,407,405,490,445,511,511,445,407,233,135,231,231,135,132,231,132,229,229,132,261,261,132,259,259,132,257,257,132,112,257,112,255,255,112,253,253,112,251,251,112,249,249,112,110,249,110,247,247,110,245,245,110,243,243,110,241,241,110,239,239,110,135,239,135,237,237,135,235,235,135,233,385,398,383,383,398,542,556,621,470,470,621,466,395,396,547,547,396,622,479,466,537,537,466,621,396,423,622,622,423,529,623,624,625,625,624,626,230,627,232,232,627,628,232,628,234,234,628,236,236,628,238,238,628,240,240,628,623,240,623,242,242,623,244,244,623,246,246,623,248,248,623,250,250,623,625,250,625,252,252,625,254,254,625,256,256,625,258,258,625,627,258,627,260,260,627,262,262,627,230,629,628,630,630,628,627,212,629,213,213,629,630,213,630,214,214,630,215,215,630,216,216,630,217,217,630,626,217,626,218,218,626,219,219,626,220,220,626,221,221,626,624,221,624,222,222,624,223,223,624,224,224,624,225,225,624,226,226,624,629,226,629,227,227,629,228,228,629,212,147,111,149,149,111,113,149,113,151,151,113,153,153,113,155,155,113,157,157,113,159,159,113,161,161,113,133,161,133,163,163,133,165,165,133,167,167,133,169,169,133,171,171,133,173,173,133,49,49,133,134,49,134,175,175,134,177,177,134,179,179,134,181,181,134,183,183,134,185,185,134,111,185,111,187,187,111,189,189,111,191,191,111,193,193,111,195,195,111,147,267,552,265,265,552,611,265,611,610,267,269,552,552,269,553,553,269,271,553,271,554,554,271,273,554,273,555,555,273,275,555,275,123,123,275,277,123,277,279,281,80,279,279,80,120,279,120,123,80,281,560,560,281,283,560,283,285,560,285,559,559,285,287,559,287,558,558,287,289,558,289,557,557,289,291,557,291,556,556,291,263,556,263,621,621,263,265,621,265,610,327,537,325,325,537,588,325,588,587,537,327,536,536,327,329,536,329,535,535,329,331,535,331,534,534,331,333,534,333,533,533,333,335,533,335,63,63,335,337,63,337,339,63,339,61,61,339,341,61,341,124,124,341,538,538,341,343,538,343,345,538,345,539,539,345,347,539,347,540,540,347,349,540,349,541,541,349,351,541,351,520,520,351,323,520,323,325,459,615,460,460,615,614,460,614,613,459,456,615,615,456,452,615,452,616,616,452,617,617,452,453,617,453,581,581,453,582,582,453,583,583,453,519,583,519,518,518,517,583,583,517,584,584,517,585,585,517,586,586,517,587,587,517,520,587,520,325,126,55,124,124,55,57,124,57,59,126,131,55,55,131,53,53,131,130,53,130,627,627,130,133,627,133,630,630,133,113,630,113,626,626,113,625,625,113,114,625,114,87,87,114,116,87,116,85,85,116,121,85,121,120,552,460,611,611,460,612,612,460,613,617,581,618,618,581,580,618,580,619,619,580,579,619,579,620,620,579,578,620,578,621,621,578,537,537,578,577,537,577,576,576,590,537,537,590,589,537,589,588,610,609,621,621,609,608,621,608,607,607,606,621,621,606,620,80,81,120,120,81,83,120,83,85,87,89,625,625,89,52,625,52,627,627,52,53,59,61,124,294,102,296,296,102,90,296,90,298,298,90,551,298,551,300,300,551,302,302,551,550,302,550,304,304,550,549,304,549,306,306,549,548,306,548,308,308,548,547,308,547,310,310,547,622,310,622,595,595,622,594,594,622,593,593,622,592,592,622,591,591,622,529,591,529,563,563,529,562,562,529,561,561,529,575,575,529,574,574,529,372,574,372,573,573,372,370,573,370,524,524,370,368,524,368,366,102,294,546,546,294,322,546,322,320,546,320,545,545,320,318,545,318,544,544,318,543,543,318,316,543,316,542,542,316,314,542,314,312,542,312,596,596,312,310,596,310,595,354,74,356,356,74,142,356,142,358,358,142,145,358,145,360,360,145,362,362,145,530,362,530,364,364,530,531,364,531,532,74,354,76,76,354,382,76,382,380,76,380,525,525,380,378,525,378,526,526,378,376,526,376,527,527,376,374,527,374,528,528,374,372,528,372,529,524,366,532,532,366,364,388,600,389,389,600,601,389,601,602,388,384,600,600,384,383,600,383,599,599,383,598,598,383,597,597,383,542,597,542,596,104,96,102,102,96,94,102,94,91,104,109,96,96,109,98,98,109,108,98,108,623,623,108,111,623,111,624,624,111,134,624,134,629,629,134,628,628,134,136,628,136,65,65,136,138,65,138,68,68,138,143,68,143,142,573,524,572,572,524,523,572,523,571,571,523,570,570,523,569,569,523,522,569,522,521,521,449,569,569,449,568,568,449,567,567,449,389,567,389,602,591,563,605,605,563,564,605,564,604,604,564,565,604,565,603,603,565,566,603,566,602,602,566,567,74,72,142,142,72,70,142,70,68,65,64,628,628,64,100,628,100,623,623,100,98,91,90,102,50,51,52,52,51,53,53,51,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,60,62,61,61,62,63,64,65,66,66,65,67,67,65,68,67,68,69,69,68,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,74,76,75,75,76,77,78,79,80,80,79,81,81,79,82,81,82,83,83,82,84,83,84,85,85,84,86,85,86,87,87,86,88,87,88,89,52,89,50,50,89,88,90,91,92,92,91,93,93,91,94,93,94,95,95,94,96,95,96,97,97,96,98,97,98,99,99,98,100,99,100,101,66,101,64,64,101,100,102,103,104,104,103,105,104,105,106,107,108,106,106,108,109,106,109,104,107,110,108,108,110,111,111,110,112,111,112,113,113,112,114,114,112,115,114,115,116,116,115,117,116,117,118,119,120,118,118,120,121,118,121,116,119,122,120,120,122,123,124,125,126,126,125,127,126,127,128,129,130,128,128,130,131,128,131,126,129,132,130,130,132,133,133,132,134,134,132,135,134,135,136,136,135,137,136,137,138,138,137,139,138,139,140,141,142,140,140,142,143,140,143,138,141,144,142,142,144,145,146,147,148,148,147,149,148,149,150,150,149,151,150,151,152,152,151,153,152,153,154,154,153,155,154,155,156,156,155,157,156,157,158,158,157,159,158,159,160,160,159,161,160,161,162,162,161,163,162,163,164,164,163,165,164,165,166,166,165,167,166,167,168,168,167,169,168,169,170,170,169,171,170,171,172,172,171,173,172,173,48,48,173,49,48,49,174,174,49,175,174,175,176,176,175,177,176,177,178,178,177,179,178,179,180,180,179,181,180,181,182,182,181,183,182,183,184,184,183,185,184,185,186,186,185,187,186,187,188,188,187,189,188,189,190,190,189,191,190,191,192,192,191,193,192,193,194,194,193,195,194,195,146,146,195,147,196,172,47,47,172,48,47,48,174,172,196,170,170,196,197,170,197,168,168,197,166,166,197,198,166,198,164,164,198,199,164,199,162,162,199,160,160,199,200,160,200,158,158,200,201,158,201,156,156,201,154,154,201,202,154,202,152,152,202,203,152,203,150,150,203,148,148,203,204,148,204,146,146,204,194,194,204,205,194,205,192,192,205,206,192,206,190,190,206,188,188,206,207,188,207,186,186,207,208,186,208,184,184,208,182,182,208,209,182,209,180,180,209,210,180,210,178,178,210,176,176,210,211,176,211,174,174,211,47,211,212,47,47,212,213,47,213,196,196,213,214,196,214,197,197,214,215,197,215,198,198,215,216,198,216,199,199,216,217,199,217,200,200,217,218,200,218,201,201,218,219,201,219,202,202,219,220,202,220,203,203,220,221,203,221,204,204,221,222,204,222,205,205,222,223,205,223,206,206,223,224,206,224,207,207,224,225,207,225,208,208,225,226,208,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,212,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,242,241,242,243,243,242,244,243,244,245,245,244,246,245,246,247,247,246,248,247,248,249,249,248,250,249,250,251,251,250,252,251,252,253,253,252,254,253,254,255,255,254,256,255,256,257,257,256,258,257,258,259,259,258,260,259,260,261,261,260,262,261,262,229,229,262,230,263,264,265,265,264,266,265,266,267,267,266,268,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,277,276,278,277,278,279,279,278,280,279,280,281,281,280,282,281,282,283,283,282,284,283,284,285,285,284,286,285,286,287,287,286,288,287,288,289,289,288,290,289,290,291,291,290,292,291,292,263,263,292,264,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,301,301,300,302,301,302,303,303,302,304,303,304,305,305,304,306,305,306,307,307,306,308,307,308,309,309,308,310,309,310,311,311,310,312,311,312,313,313,312,314,313,314,315,315,314,316,315,316,317,317,316,318,317,318,319,319,318,320,319,320,321,321,320,322,321,322,293,293,322,294,323,324,325,325,324,326,325,326,327,327,326,328,327,328,329,329,328,330,329,330,331,331,330,332,331,332,333,333,332,334,333,334,335,335,334,336,335,336,337,337,336,338,337,338,339,339,338,340,339,340,341,341,340,342,341,342,343,343,342,344,343,344,345,345,344,346,345,346,347,347,346,348,347,348,349,349,348,350,349,350,351,351,350,352,351,352,323,323,352,324,353,354,355,355,354,356,355,356,357,357,356,358,357,358,359,359,358,360,359,360,361,361,360,362,361,362,363,363,362,364,363,364,365,631,632,633,633,632,634,633,634,635,632,631,636,636,631,637,636,637,638,638,637,639,638,639,640,640,639,641,640,641,642,642,641,643,642,643,644,644,643,645,644,645,646,646,645,647,646,647,648,648,647,649,648,649,635,635,649,633,649,643,633,633,643,641,633,641,631,631,641,639,631,639,637,647,645,649,649,645,643,650,635,651,651,635,634,651,634,652,652,634,632,652,632,653,653,632,636,653,636,654,654,636,638,654,638,655,655,638,640,655,640,656,656,640,642,656,642,657,657,642,644,657,644,658,658,644,646,658,646,659,659,646,648,659,648,650,650,648,635,660,661,662,662,661,663,663,661,664,663,664,665,665,664,666,665,666,667,667,666,668,652,669,651,651,669,670,651,670,671,669,652,672,672,652,653,672,653,654,672,654,673,673,654,655,673,655,674,674,655,656,674,656,675,675,656,657,675,657,676,676,657,658,676,658,677,677,658,659,677,659,650,677,650,671,671,650,651,669,660,670,670,660,662,670,662,671,671,662,663,671,663,677,677,663,665,677,665,676,676,665,667,676,667,675,675,667,668,675,668,674,674,668,666,674,666,673,673,666,664,673,664,672,672,664,661,672,661,669,669,661,660,678,679,680,680,679,681,680,681,682,682,681,683,682,683,684,684,683,685,684,685,686,686,685,687,686,687,688,688,687,689,688,689,690,690,689,691,690,691,692,692,691,693,692,693,694,694,693,695,694,695,696,696,695,697,696,697,698,698,697,699,698,699,700,700,699,701,700,701,678,678,701,679,702,683,703,703,683,681,703,681,704,704,681,679,704,679,705,705,679,701,705,701,706,706,701,699,706,699,707,707,699,697,707,697,708,708,697,695,708,695,709,709,695,693,709,693,710,710,693,691,710,691,711,711,691,689,711,689,712,712,689,687,712,687,713,713,687,685,713,685,702,702,685,683,714,686,715,715,686,688,715,688,690,716,682,714,714,682,684,714,684,686,717,678,716,716,678,680,716,680,682,718,698,717,717,698,700,717,700,678,719,694,718,718,694,696,718,696,698,715,690,719,719,690,692,719,692,694,704,720,703,703,720,721,703,721,702,702,721,722,702,722,713,713,722,723,713,723,712,712,723,724,712,724,711,711,724,725,711,725,710,710,725,726,710,726,709,709,726,727,709,727,708,708,727,728,708,728,707,707,728,729,707,729,706,706,729,730,706,730,705,705,730,731,705,731,704,704,731,720,732,722,733,733,722,721,733,721,720,734,724,732,732,724,723,732,723,722,735,726,734,734,726,725,734,725,724,736,728,735,735,728,727,735,727,726,737,730,736,736,730,729,736,729,728,733,720,737,737,720,731,737,731,730,738,739,740,740,739,741,740,741,742,738,743,739,739,743,717,717,743,744,717,744,718,718,744,745,738,746,743,743,746,744,740,737,738,738,737,736,738,736,746,746,736,747,748,749,750,750,749,751,750,751,752,748,753,749,751,754,752,752,754,755,749,716,751,751,716,714,751,714,754,754,714,756,739,717,741,741,717,716,741,716,753,753,716,749,755,756,757,757,756,758,757,758,759,755,754,756,750,752,733,733,752,755,733,755,732,732,755,757,757,759,732,732,759,760,732,760,734,734,760,761,758,762,759,759,762,760,763,745,747,747,745,744,747,744,746,763,764,745,763,765,764,764,765,766,747,736,763,763,736,735,763,735,765,765,735,767,768,769,767,767,769,766,767,766,765,768,770,769,745,764,718,718,764,766,718,766,719,719,766,769,769,770,719,719,770,771,719,771,715,715,771,772,760,772,761,761,772,771,761,771,773,760,762,772,767,735,768,768,735,734,768,734,773,773,734,761,756,714,758,758,714,715,758,715,762,762,715,772,741,753,742,742,753,748,740,742,737,737,742,748,737,748,733,733,748,750,768,773,770,770,773,771,774,775,776,776,775,777,776,777,778,778,777,779,778,779,780,780,779,781,780,781,782,782,781,783,782,783,784,784,783,785,784,785,786,786,785,787,786,787,788,788,787,789,788,789,790,790,789,791,790,791,792,792,791,793,792,793,794,794,793,795,794,795,796,796,795,797,796,797,774,774,797,775,798,779,799,799,779,777,799,777,800,800,777,775,800,775,801,801,775,797,801,797,802,802,797,795,802,795,803,803,795,793,803,793,804,804,793,791,804,791,805,805,791,789,805,789,806,806,789,787,806,787,807,807,787,785,807,785,808,808,785,783,808,783,809,809,783,781,809,781,798,798,781,779,810,782,811,811,782,784,811,784,786,812,778,810,810,778,780,810,780,782,813,774,812,812,774,776,812,776,778,814,794,813,813,794,796,813,796,774,815,790,814,814,790,792,814,792,794,811,786,815,815,786,788,815,788,790,800,816,799,799,816,817,799,817,798,798,817,818,798,818,809,809,818,819,809,819,808,808,819,820,808,820,807,807,820,821,807,821,806,806,821,822,806,822,805,805,822,823,805,823,804,804,823,824,804,824,803,803,824,825,803,825,802,802,825,826,802,826,801,801,826,827,801,827,800,800,827,816,828,818,829,829,818,817,829,817,816,830,820,828,828,820,819,828,819,818,831,822,830,830,822,821,830,821,820,832,824,831,831,824,823,831,823,822,833,826,832,832,826,825,832,825,824,829,816,833,833,816,827,833,827,826,834,835,836,836,835,837,836,837,838,834,839,835,835,839,813,813,839,840,813,840,814,814,840,841,834,842,839,839,842,840,836,833,834,834,833,832,834,832,842,842,832,843,844,845,846,846,845,847,846,847,848,844,849,845,847,850,848,848,850,851,845,812,847,847,812,810,847,810,850,850,810,852,835,813,837,837,813,812,837,812,849,849,812,845,851,852,853,853,852,854,853,854,855,851,850,852,846,848,829,829,848,851,829,851,828,828,851,853,853,855,828,828,855,856,828,856,830,830,856,857,854,858,855,855,858,856,859,841,843,843,841,840,843,840,842,859,860,841,859,861,860,860,861,862,843,832,859,859,832,831,859,831,861,861,831,863,864,865,863,863,865,862,863,862,861,864,866,865,841,860,814,814,860,862,814,862,815,815,862,865,865,866,815,815,866,867,815,867,811,811,867,868,856,868,857,857,868,867,857,867,869,856,858,868,863,831,864,864,831,830,864,830,869,869,830,857,852,810,854,854,810,811,854,811,858,858,811,868,837,849,838,838,849,844,836,838,833,833,838,844,833,844,829,829,844,846,864,869,866,866,869,867,902,883,903,903,883,881,903,881,904,904,881,879,904,879,905,905,879,877,905,877,894,894,877,875,906,878,907,907,878,880,907,880,882,908,874,906,906,874,876,906,876,878,909,870,908,908,870,872,908,872,874,910,890,909,909,890,892,909,892,870,911,886,910,910,886,888,910,888,890,907,882,911,911,882,884,911,884,886,896,912,895,895,912,913,895,913,894,894,913,914,894,914,905,905,914,915,905,915,904,904,915,916,904,916,903,903,916,917,903,917,902,902,917,918,902,918,901,901,918,919,901,919,900,900,919,920,900,920,899,899,920,921,899,921,898,898,921,922,898,922,897,897,922,923,897,923,896,896,923,912,924,914,925,925,914,913,925,913,912,926,916,924,924,916,915,924,915,914,927,918,926,926,918,917,926,917,916,928,920,927,927,920,919,927,919,918,929,922,928,928,922,921,928,921,920,925,912,929,929,912,923,929,923,922,930,931,932,932,931,933,932,933,934,930,935,931,931,935,909,909,935,936,909,936,910,910,936,937,930,938,935,935,938,936,932,929,930,930,929,928,930,928,938,938,928,939,940,941,942,942,941,943,942,943,944,940,945,941,943,946,944,944,946,947,941,908,943,943,908,906,943,906,946,946,906,948,931,909,933,933,909,908,933,908,945,945,908,941,947,948,949,949,948,950,949,950,951,947,946,948,942,944,925,925,944,947,925,947,924,924,947,949,949,951,924,924,951,952,924,952,926,926,952,953,950,954,951,951,954,952,955,937,939,939,937,936,939,936,938,955,956,937,955,957,956,956,957,958,939,928,955,955,928,927,955,927,957,957,927,959,960,961,959,959,961,958,959,958,957,960,962,961,937,956,910,910,956,958,910,958,911,911,958,961,961,962,911,911,962,963,911,963,907,907,963,964,952,964,953,953,964,963,953,963,965,952,954,964,959,927,960,960,927,926,960,926,965,965,926,953,948,906,950,950,906,907,950,907,954,954,907,964,933,945,934,934,945,940,932,934,929,929,934,940,929,940,925,925,940,942,960,965,962,962,965,963,870,871,872,872,871,873,872,873,874,874,873,875,874,875,876,876,875,877,876,877,878,878,877,879,878,879,880,880,879,881,880,881,882,882,881,883,882,883,884,884,883,885,884,885,886,886,885,887,886,887,888,888,887,889,888,889,890,890,889,891,890,891,892,892,891,893,892,893,870,870,893,871,894,875,895,895,875,873,895,873,896,896,873,871,896,871,897,897,871,893,897,893,898,898,893,891,898,891,899,899,891,889,899,889,900,900,889,887,900,887,901,901,887,885,901,885,902,902,885,883,966,967,968,968,967,969,968,969,970,970,969,971,970,971,972,972,971,973,972,973,974,974,973,975,974,975,976,976,975,977,976,977,978,978,977,979,978,979,980,980,979,981,980,981,982,982,981,983,982,983,984,984,983,985,984,985,986,986,985,987,986,987,988,988,987,989,988,989,966,966,989,967,990,971,991,991,971,969,991,969,992,992,969,967,992,967,993,993,967,989,993,989,994,994,989,987,994,987,995,995,987,985,995,985,996,996,985,983,996,983,997,997,983,981,997,981,998,998,981,979,998,979,999,999,979,977,999,977,1e3,1e3,977,975,1e3,975,1001,1001,975,973,1001,973,990,990,973,971,1002,974,1003,1003,974,976,1003,976,978,1004,970,1002,1002,970,972,1002,972,974,1005,966,1004,1004,966,968,1004,968,970,1006,986,1005,1005,986,988,1005,988,966,1007,982,1006,1006,982,984,1006,984,986,1003,978,1007,1007,978,980,1007,980,982,992,1008,991,991,1008,1009,991,1009,990,990,1009,1010,990,1010,1001,1001,1010,1011,1001,1011,1e3,1e3,1011,1012,1e3,1012,999,999,1012,1013,999,1013,998,998,1013,1014,998,1014,997,997,1014,1015,997,1015,996,996,1015,1016,996,1016,995,995,1016,1017,995,1017,994,994,1017,1018,994,1018,993,993,1018,1019,993,1019,992,992,1019,1008,1020,1010,1021,1021,1010,1009,1021,1009,1008,1022,1012,1020,1020,1012,1011,1020,1011,1010,1023,1014,1022,1022,1014,1013,1022,1013,1012,1024,1016,1023,1023,1016,1015,1023,1015,1014,1025,1018,1024,1024,1018,1017,1024,1017,1016,1021,1008,1025,1025,1008,1019,1025,1019,1018,1026,1027,1028,1028,1027,1029,1028,1029,1030,1026,1031,1027,1027,1031,1005,1005,1031,1032,1005,1032,1006,1006,1032,1033,1026,1034,1031,1031,1034,1032,1028,1025,1026,1026,1025,1024,1026,1024,1034,1034,1024,1035,1036,1037,1038,1038,1037,1039,1038,1039,1040,1036,1041,1037,1039,1042,1040,1040,1042,1043,1037,1004,1039,1039,1004,1002,1039,1002,1042,1042,1002,1044,1027,1005,1029,1029,1005,1004,1029,1004,1041,1041,1004,1037,1043,1044,1045,1045,1044,1046,1045,1046,1047,1043,1042,1044,1038,1040,1021,1021,1040,1043,1021,1043,1020,1020,1043,1045,1045,1047,1020,1020,1047,1048,1020,1048,1022,1022,1048,1049,1046,1050,1047,1047,1050,1048,1051,1033,1035,1035,1033,1032,1035,1032,1034,1051,1052,1033,1051,1053,1052,1052,1053,1054,1035,1024,1051,1051,1024,1023,1051,1023,1053,1053,1023,1055,1056,1057,1055,1055,1057,1054,1055,1054,1053,1056,1058,1057,1033,1052,1006,1006,1052,1054,1006,1054,1007,1007,1054,1057,1057,1058,1007,1007,1058,1059,1007,1059,1003,1003,1059,1060,1048,1060,1049,1049,1060,1059,1049,1059,1061,1048,1050,1060,1055,1023,1056,1056,1023,1022,1056,1022,1061,1061,1022,1049,1044,1002,1046,1046,1002,1003,1046,1003,1050,1050,1003,1060,1029,1041,1030,1030,1041,1036,1028,1030,1025,1025,1030,1036,1025,1036,1021,1021,1036,1038,1056,1061,1058,1058,1061,1059,1062,1063,1064,1064,1063,1065,1064,1065,1066,1066,1065,1067,1066,1067,1068,1068,1067,1069,1068,1069,1070,1070,1069,1071,1070,1071,1072,1072,1071,1073,1072,1073,1074,1074,1073,1075,1074,1075,1076,1076,1075,1077,1076,1077,1078,1078,1077,1079,1078,1079,1062,1062,1079,1063,1066,1072,1064,1064,1072,1074,1064,1074,1062,1062,1074,1076,1062,1076,1078,1068,1070,1066,1066,1070,1072,1080,1065,1081,1081,1065,1063,1081,1063,1082,1082,1063,1079,1082,1079,1083,1083,1079,1077,1083,1077,1084,1084,1077,1075,1084,1075,1085,1085,1075,1073,1085,1073,1086,1086,1073,1071,1086,1071,1087,1087,1071,1069,1087,1069,1088,1088,1069,1067,1088,1067,1080,1080,1067,1065,1089,1090,1091,1091,1090,1092,1092,1090,1093,1092,1093,1094,1094,1093,1095,1094,1095,1096,1096,1095,1097,1082,1098,1081,1081,1098,1099,1081,1099,1100,1098,1082,1101,1101,1082,1083,1101,1083,1084,1101,1084,1102,1102,1084,1085,1102,1085,1103,1103,1085,1086,1103,1086,1104,1104,1086,1105,1105,1086,1087,1105,1087,1106,1106,1087,1088,1106,1088,1080,1106,1080,1100,1100,1080,1081,1098,1089,1099,1099,1089,1091,1099,1091,1100,1100,1091,1092,1100,1092,1106,1106,1092,1094,1106,1094,1105,1105,1094,1096,1105,1096,1104,1104,1096,1097,1104,1097,1103,1103,1097,1095,1103,1095,1102,1102,1095,1093,1102,1093,1101,1101,1093,1090,1101,1090,1098,1098,1090,1089,1107,1108,1109,1109,1108,1110,1109,1110,1111,1111,1110,1112,1111,1112,1113,1113,1112,1114,1113,1114,1115,1115,1114,1116,1115,1116,1117,1117,1116,1118,1117,1118,1119,1119,1118,1120,1119,1120,1121,1121,1120,1122,1121,1122,1123,1123,1122,1124,1123,1124,1107,1107,1124,1108,1111,1117,1109,1109,1117,1119,1109,1119,1107,1107,1119,1121,1107,1121,1123,1113,1115,1111,1111,1115,1117,1125,1110,1126,1126,1110,1108,1126,1108,1127,1127,1108,1124,1127,1124,1128,1128,1124,1122,1128,1122,1129,1129,1122,1120,1129,1120,1130,1130,1120,1118,1130,1118,1131,1131,1118,1116,1131,1116,1132,1132,1116,1114,1132,1114,1133,1133,1114,1112,1133,1112,1125,1125,1112,1110,1134,1135,1136,1136,1135,1137,1137,1135,1138,1137,1138,1139,1139,1138,1140,1139,1140,1141,1141,1140,1142,1127,1143,1126,1126,1143,1144,1126,1144,1145,1143,1127,1146,1146,1127,1128,1146,1128,1129,1146,1129,1147,1147,1129,1130,1147,1130,1148,1148,1130,1131,1148,1131,1149,1149,1131,1150,1150,1131,1132,1150,1132,1151,1151,1132,1133,1151,1133,1125,1151,1125,1145,1145,1125,1126,1143,1134,1144,1144,1134,1136,1144,1136,1145,1145,1136,1137,1145,1137,1151,1151,1137,1139,1151,1139,1150,1150,1139,1141,1150,1141,1149,1149,1141,1142,1149,1142,1148,1148,1142,1140,1148,1140,1147,1147,1140,1138,1147,1138,1146,1146,1138,1135,1146,1135,1143,1143,1135,1134]},schieber:{v:[44.903,23.66,46.086,45.005,23.76,46.06,44.999,23.66,46.41,45.099,23.76,46.41,45.005,23.76,46.76,44.749,23.76,45.804,44.648,23.66,45.864,44.399,23.76,45.71,44.313,23.66,45.816,44.049,23.76,45.804,44.006,23.66,45.957,43.792,23.76,46.06,43.823,23.66,46.241,43.699,23.76,46.41,43.823,23.66,46.579,43.792,23.76,46.76,44.006,23.66,46.864,44.049,23.76,47.016,44.313,23.66,47.004,44.399,23.76,47.11,44.648,23.66,46.956,44.749,23.76,47.016,44.903,23.66,46.735,45.005,23.96,46.76,45.099,23.96,46.41,45.005,23.96,46.06,44.749,23.96,45.804,44.399,23.96,45.71,44.049,23.96,45.804,43.792,23.96,46.06,43.699,23.96,46.41,43.792,23.96,46.76,44.049,23.96,47.016,44.399,23.96,47.11,44.749,23.96,47.016,44.799,26.435,46.41,44.705,26.435,46.153,44.705,26.435,46.667,44.468,26.435,46.804,44.468,26.435,46.016,44.199,26.435,46.757,44.199,26.435,46.064,44.023,26.435,46.547,44.023,26.435,46.273,44.799,23.96,46.41,44.705,23.96,46.153,44.468,23.96,46.016,44.199,23.96,46.064,44.023,23.96,46.273,44.023,23.96,46.547,44.199,23.96,46.757,44.468,23.96,46.804,44.705,23.96,46.667,45.599,25.539,48.721,45.599,25.268,50.256,45.599,24.96,48.51,45.599,24.652,50.256,45.599,24.382,48.721,45.599,24.181,49.86,45.599,24.074,49.254,45.599,25.847,49.254,45.599,25.74,49.86,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,37.199,24.96,48.91,37.199,25.282,49.027,37.199,25.453,49.323,37.199,25.393,49.66,37.199,25.131,49.88,37.199,24.789,49.88,37.199,24.527,49.66,37.199,24.468,49.323,37.199,24.639,49.027,37.199,24.96,48.21,37.199,24.189,48.491,37.199,23.778,49.202,37.199,23.921,50.01,37.199,24.55,50.538,37.199,25.371,50.538,37.199,25.999,50.01,37.199,26.142,49.202,37.199,25.732,48.491,36.999,24.96,48.21,36.999,25.732,48.491,36.999,26.142,49.202,36.999,25.999,50.01,36.999,25.371,50.538,36.999,24.55,50.538,36.999,23.921,50.01,36.999,23.778,49.202,36.999,24.189,48.491,36.999,24.639,49.027,36.999,24.96,48.91,36.999,25.282,49.027,36.999,24.468,49.323,36.999,24.527,49.66,36.999,24.789,49.88,36.999,25.131,49.88,36.999,25.393,49.66,36.999,25.453,49.323,30.599,24.96,48.91,30.599,25.282,49.027,30.599,25.453,49.323,30.599,25.393,49.66,30.599,25.131,49.88,30.599,24.789,49.88,30.599,24.527,49.66,30.599,24.468,49.323,30.599,24.639,49.027,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,45.399,24.96,48.51,45.399,25.539,48.721,45.399,25.847,49.254,45.399,25.74,49.86,45.399,25.268,50.256,45.399,24.652,50.256,45.399,24.181,49.86,45.399,24.074,49.254,45.399,24.382,48.721,43.399,24.96,48.91,43.399,24.639,49.027,43.399,24.468,49.323,43.399,24.527,49.66,43.399,24.789,49.88,43.399,25.131,49.88,43.399,25.393,49.66,43.399,25.453,49.323,43.399,25.282,49.027,43.59,25.21,45.822,43.999,25.21,46.41,43.399,25.21,46.41,44.092,25.21,46.667,43.399,25.21,47.91,44.329,25.21,46.804,45.399,25.21,47.91,44.599,25.21,46.757,44.775,25.21,46.547,44.092,25.21,46.153,44.09,25.21,45.459,44.329,25.21,46.016,44.708,25.21,45.459,44.599,25.21,46.064,45.208,25.21,45.822,44.775,25.21,46.273,45.399,25.21,46.41,43.399,24.71,47.91,45.399,24.71,47.91,45.208,24.71,45.822,44.775,24.71,46.273,45.399,24.71,46.41,44.775,24.71,46.547,44.599,24.71,46.757,44.329,24.71,46.804,44.708,24.71,45.459,44.599,24.71,46.064,44.329,24.71,46.016,44.09,24.71,45.459,44.092,24.71,46.153,43.59,24.71,45.822,43.999,24.71,46.41,43.399,24.71,46.41,44.092,24.71,46.667,43.399,25.21,50.91,44.092,25.21,52.153,43.399,25.21,52.41,43.999,25.21,52.41,43.59,25.21,52.998,44.092,25.21,52.667,44.09,25.21,53.361,44.329,25.21,52.804,44.708,25.21,53.361,44.599,25.21,52.757,44.775,25.21,52.547,44.329,25.21,52.016,45.399,25.21,50.91,44.599,25.21,52.064,44.775,25.21,52.273,45.399,25.21,52.41,45.208,25.21,52.998,43.399,24.71,52.41,44.092,24.71,52.153,43.399,24.71,50.91,44.329,24.71,52.016,45.399,24.71,50.91,44.599,24.71,52.064,44.775,24.71,52.273,43.999,24.71,52.41,43.59,24.71,52.998,44.092,24.71,52.667,44.09,24.71,53.361,44.329,24.71,52.804,44.708,24.71,53.361,44.599,24.71,52.757,45.208,24.71,52.998,44.775,24.71,52.547,45.399,24.71,52.41,45.399,25.96,46.41,45.208,25.96,45.822,44.708,25.96,45.459,44.09,25.96,45.459,43.59,25.96,45.822,43.399,25.96,46.41,45.399,23.96,52.41,45.208,23.96,52.998,44.708,23.96,53.361,44.09,23.96,53.361,43.59,23.96,52.998,43.399,23.96,52.41,43.399,25.96,52.41,43.59,25.96,52.998,44.09,25.96,53.361,44.708,25.96,53.361,45.208,25.96,52.998,45.399,25.96,52.41,45.399,23.96,46.41,44.092,25.96,46.667,43.999,25.96,46.41,44.092,25.96,46.153,44.329,25.96,46.016,44.599,25.96,46.064,44.775,25.96,46.273,44.775,25.96,46.547,44.599,25.96,46.757,44.329,25.96,46.804,44.092,23.96,52.153,43.999,23.96,52.41,44.092,23.96,52.667,44.329,23.96,52.804,44.599,23.96,52.757,44.775,23.96,52.547,44.775,23.96,52.273,44.599,23.96,52.064,44.329,23.96,52.016,44.092,25.96,52.153,43.999,25.96,52.41,44.092,25.96,52.667,44.329,25.96,52.804,44.599,25.96,52.757,44.775,25.96,52.547,44.775,25.96,52.273,44.599,25.96,52.064,44.329,25.96,52.016,44.092,23.96,46.667,43.999,23.96,46.41,44.092,23.96,46.153,44.329,23.96,46.016,44.599,23.96,46.064,44.775,23.96,46.273,44.775,23.96,46.547,44.599,23.96,46.757,44.329,23.96,46.804,43.399,23.96,46.41,43.59,23.96,45.822,44.09,23.96,45.459,44.708,23.96,45.459,45.208,23.96,45.822,44.903,23.66,52.086,45.005,23.76,52.06,44.999,23.66,52.41,45.099,23.76,52.41,45.005,23.76,52.76,44.749,23.76,51.804,44.648,23.66,51.864,44.399,23.76,51.71,44.313,23.66,51.816,44.049,23.76,51.804,44.006,23.66,51.957,43.792,23.76,52.06,43.823,23.66,52.241,43.699,23.76,52.41,43.823,23.66,52.579,43.792,23.76,52.76,44.006,23.66,52.864,44.049,23.76,53.016,44.313,23.66,53.004,44.399,23.76,53.11,44.648,23.66,52.956,44.749,23.76,53.016,44.903,23.66,52.735,45.005,23.96,52.76,45.099,23.96,52.41,45.005,23.96,52.06,44.749,23.96,51.804,44.399,23.96,51.71,44.049,23.96,51.804,43.792,23.96,52.06,43.699,23.96,52.41,43.792,23.96,52.76,44.049,23.96,53.016,44.399,23.96,53.11,44.749,23.96,53.016,44.799,26.435,52.41,44.705,26.435,52.153,44.705,26.435,52.667,44.468,26.435,52.804,44.468,26.435,52.016,44.199,26.435,52.757,44.199,26.435,52.064,44.023,26.435,52.547,44.023,26.435,52.273,44.799,23.96,52.41,44.705,23.96,52.153,44.468,23.96,52.016,44.199,23.96,52.064,44.023,23.96,52.273,44.023,23.96,52.547,44.199,23.96,52.757,44.468,23.96,52.804,44.705,23.96,52.667,44.035,26.055,52.2,44.052,26.075,52.21,43.979,26.055,52.41,43.999,26.075,52.41,44.035,26.055,52.62,44.052,26.075,52.61,44.189,26.055,52.774,44.199,26.075,52.757,44.399,26.055,52.83,44.399,26.075,52.81,44.609,26.055,52.774,44.599,26.075,52.757,44.762,26.055,52.62,44.745,26.075,52.61,44.819,26.055,52.41,44.799,26.075,52.41,44.762,26.055,52.2,44.745,26.075,52.21,44.609,26.055,52.047,44.599,26.075,52.064,44.399,26.055,51.99,44.399,26.075,52.01,44.189,26.055,52.047,44.199,26.075,52.064,44.052,26.335,52.61,43.999,26.335,52.41,44.052,26.335,52.21,44.199,26.335,52.064,44.399,26.335,52.01,44.599,26.335,52.064,44.745,26.335,52.21,44.799,26.335,52.41,44.745,26.335,52.61,44.599,26.335,52.757,44.399,26.335,52.81,44.199,26.335,52.757,44.078,26.055,52.966,44.72,26.055,52.966,43.756,26.055,52.41,44.078,26.055,51.854,44.72,26.055,51.854,45.041,26.055,52.41,44.035,26.355,52.2,43.979,26.355,52.41,44.035,26.355,52.62,44.189,26.355,52.774,44.399,26.355,52.83,44.609,26.355,52.774,44.762,26.355,52.62,44.819,26.355,52.41,44.762,26.355,52.2,44.609,26.355,52.047,44.399,26.355,51.99,44.189,26.355,52.047,44.078,26.355,52.966,43.756,26.355,52.41,44.72,26.355,52.966,45.041,26.355,52.41,44.72,26.355,51.854,44.078,26.355,51.854,44.106,26.305,51.804,44.056,26.092,51.817,44.056,26.319,51.817,44.02,26.105,51.854,44.02,26.305,51.854,44.106,26.105,51.804,44.691,26.105,51.804,44.741,26.092,51.817,44.691,26.305,51.804,44.741,26.319,51.817,43.728,26.305,52.36,43.714,26.092,52.41,43.714,26.319,52.41,43.728,26.105,52.46,43.728,26.305,52.46,43.728,26.105,52.36,44.02,26.105,52.966,44.02,26.305,52.966,44.056,26.092,53.003,44.056,26.319,53.003,44.106,26.105,53.016,44.106,26.305,53.016,44.691,26.305,53.016,44.741,26.319,53.003,44.691,26.105,53.016,44.778,26.305,51.854,44.778,26.105,51.854,45.07,26.305,52.36,45.07,26.105,52.36,45.083,26.319,52.41,45.07,26.305,52.46,45.083,26.092,52.41,45.07,26.105,52.46,44.778,26.105,52.966,44.741,26.092,53.003,44.778,26.305,52.966,44.035,26.055,46.2,44.052,26.075,46.21,43.979,26.055,46.41,43.999,26.075,46.41,44.035,26.055,46.62,44.052,26.075,46.61,44.189,26.055,46.774,44.199,26.075,46.757,44.399,26.055,46.83,44.399,26.075,46.81,44.609,26.055,46.774,44.599,26.075,46.757,44.762,26.055,46.62,44.745,26.075,46.61,44.819,26.055,46.41,44.799,26.075,46.41,44.762,26.055,46.2,44.745,26.075,46.21,44.609,26.055,46.047,44.599,26.075,46.064,44.399,26.055,45.99,44.399,26.075,46.01,44.189,26.055,46.047,44.199,26.075,46.064,44.052,26.335,46.61,43.999,26.335,46.41,44.052,26.335,46.21,44.199,26.335,46.064,44.399,26.335,46.01,44.599,26.335,46.064,44.745,26.335,46.21,44.799,26.335,46.41,44.745,26.335,46.61,44.599,26.335,46.757,44.399,26.335,46.81,44.199,26.335,46.757,44.078,26.055,46.966,44.72,26.055,46.966,43.756,26.055,46.41,44.078,26.055,45.854,44.72,26.055,45.854,45.041,26.055,46.41,44.035,26.355,46.2,43.979,26.355,46.41,44.035,26.355,46.62,44.189,26.355,46.774,44.399,26.355,46.83,44.609,26.355,46.774,44.762,26.355,46.62,44.819,26.355,46.41,44.762,26.355,46.2,44.609,26.355,46.047,44.399,26.355,45.99,44.189,26.355,46.047,44.078,26.355,46.966,43.756,26.355,46.41,44.72,26.355,46.966,45.041,26.355,46.41,44.72,26.355,45.854,44.078,26.355,45.854,44.106,26.305,45.804,44.056,26.092,45.817,44.056,26.319,45.817,44.02,26.105,45.854,44.02,26.305,45.854,44.106,26.105,45.804,44.691,26.105,45.804,44.741,26.092,45.817,44.691,26.305,45.804,44.741,26.319,45.817,43.728,26.305,46.36,43.714,26.092,46.41,43.714,26.319,46.41,43.728,26.105,46.46,43.728,26.305,46.46,43.728,26.105,46.36,44.02,26.105,46.966,44.02,26.305,46.966,44.056,26.092,47.003,44.056,26.319,47.003,44.106,26.105,47.016,44.106,26.305,47.016,44.691,26.305,47.016,44.741,26.319,47.003,44.691,26.105,47.016,44.778,26.305,45.854,44.778,26.105,45.854,45.07,26.305,46.36,45.07,26.105,46.36,45.083,26.319,46.41,45.07,26.305,46.46,45.083,26.092,46.41,45.07,26.105,46.46,44.778,26.105,46.966,44.741,26.092,47.003,44.778,26.305,46.966],i:[0,1,2,2,1,3,2,3,4,1,0,5,5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,19,19,18,20,19,20,21,21,20,22,21,22,4,4,22,2,22,14,2,2,14,12,2,12,0,0,12,10,0,10,6,6,10,8,14,22,16,16,22,20,16,20,18,23,4,24,24,4,3,24,3,25,25,3,1,25,1,26,26,1,5,26,5,27,27,5,7,27,7,28,28,7,9,28,9,29,29,9,11,29,11,30,30,11,13,30,13,31,31,13,15,31,15,32,32,15,17,32,17,33,33,17,19,33,19,34,34,19,21,34,21,23,23,21,4,35,36,37,37,36,38,38,36,39,38,39,40,40,39,41,40,41,42,42,41,43,23,24,44,44,24,25,44,25,45,45,25,26,45,26,46,46,26,27,46,27,47,47,27,28,47,28,29,47,29,48,48,29,30,48,30,49,49,30,31,49,31,50,50,31,32,50,32,33,50,33,51,51,33,34,51,34,52,52,34,23,52,23,44,45,35,44,44,35,37,44,37,52,52,37,38,52,38,51,51,38,40,51,40,50,50,40,42,50,42,49,49,42,43,49,43,48,48,43,41,48,41,47,47,41,39,47,39,46,46,39,36,46,36,45,45,36,35,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,60,61,53,53,61,54,57,62,55,55,62,63,55,63,53,53,63,64,53,64,60,60,64,65,60,65,61,61,65,66,61,66,54,54,66,67,54,67,56,56,67,68,56,68,58,58,68,69,58,69,59,59,69,70,59,70,57,57,70,62,72,73,71,71,73,74,78,75,77,77,75,76,81,79,80,81,80,82,84,83,86,85,84,86,90,88,87,87,89,90,93,91,92,93,92,94,97,96,95,97,95,98,101,100,102,102,100,99,105,104,103,105,103,106,110,108,109,110,107,108,113,112,111,113,111,114,118,115,116,118,116,117,122,119,121,121,119,120,126,123,124,126,124,125,129,127,128,130,127,129,133,132,134,134,132,131,138,136,135,138,135,137,141,140,142,142,140,139,143,152,144,144,152,153,144,153,145,145,153,154,145,154,151,151,154,155,151,155,150,150,155,156,150,156,149,149,156,157,149,157,148,148,157,158,148,158,147,147,158,159,147,159,146,146,159,160,146,160,143,143,160,152,153,152,161,161,152,160,161,160,162,162,160,159,162,159,163,163,159,164,164,159,158,164,158,165,165,158,157,165,157,156,165,156,166,166,156,155,166,155,167,167,155,154,167,154,168,168,154,169,169,154,153,169,153,161,162,170,161,161,170,171,161,171,169,169,171,172,169,172,168,168,172,173,168,173,167,167,173,174,167,174,166,166,174,175,166,175,165,165,175,176,165,176,164,164,176,177,164,177,163,163,177,178,163,178,162,162,178,170,178,179,170,170,179,180,170,180,181,179,178,182,182,178,177,182,177,176,182,176,183,183,176,175,183,175,184,184,175,174,184,174,185,185,174,186,186,174,173,186,173,187,187,173,172,187,172,171,187,171,181,181,171,170,179,188,180,180,188,189,180,189,181,181,189,190,181,190,187,187,190,191,187,191,186,186,191,192,186,192,185,185,192,193,185,193,184,184,193,194,184,194,183,183,194,195,183,195,182,182,195,196,182,196,179,179,196,188,188,196,189,189,196,190,190,196,195,190,195,191,191,195,194,191,194,192,192,194,193,205,215,197,197,215,216,197,216,198,198,216,217,198,217,199,199,217,218,199,218,200,200,218,219,200,219,201,201,219,220,201,220,202,202,220,221,202,221,203,203,221,222,203,222,204,204,222,223,204,223,205,205,223,215,208,224,207,207,224,225,207,225,206,206,225,226,206,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,229,211,229,212,212,229,230,212,230,213,213,230,231,213,231,214,214,231,232,214,232,208,208,232,224,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,234,233,242,242,233,243,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,241,241,249,239,250,237,251,251,237,239,252,253,254,254,253,255,254,255,251,251,255,256,251,256,257,252,258,253,253,258,259,259,258,260,260,258,261,260,261,262,262,261,263,262,263,264,264,263,265,264,265,266,266,265,250,266,250,257,257,250,251,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,268,267,278,278,267,279,278,279,280,280,279,281,281,279,282,281,282,277,277,282,283,277,283,275,284,285,286,286,285,287,286,287,288,288,287,289,288,289,290,285,284,291,291,284,292,291,292,293,293,292,294,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,290,290,300,288,267,286,279,279,286,288,249,247,301,301,247,302,302,247,245,302,245,303,303,245,243,303,243,304,304,243,233,304,233,305,305,233,306,306,233,235,307,300,308,308,300,298,308,298,296,308,296,309,309,296,294,309,294,310,310,294,292,310,292,311,311,292,284,311,284,312,269,271,313,313,271,314,314,271,273,314,273,315,315,273,275,315,275,316,316,275,283,316,283,317,317,283,318,318,283,282,223,251,215,215,251,239,215,239,216,216,239,301,216,301,217,217,301,318,217,318,218,218,318,279,218,279,219,219,279,220,220,279,288,220,288,221,221,288,307,221,307,222,222,307,319,222,319,223,223,319,251,254,251,319,239,249,301,318,282,279,288,300,307,320,236,321,321,236,234,321,234,322,322,234,242,322,242,323,323,242,244,323,244,324,324,244,246,324,246,325,325,246,248,325,248,326,326,248,241,326,241,327,327,241,240,327,240,328,328,240,238,328,238,320,320,238,236,329,285,330,330,285,291,330,291,331,331,291,293,331,293,332,332,293,295,332,295,333,333,295,297,333,297,334,334,297,299,334,299,335,335,299,290,335,290,336,336,290,289,336,289,337,337,289,287,337,287,329,329,287,285,268,338,270,270,338,339,270,339,272,272,339,340,272,340,274,274,340,341,274,341,276,276,341,342,276,342,277,277,342,343,277,343,281,281,343,344,281,344,280,280,344,345,280,345,278,278,345,346,278,346,268,268,346,338,266,347,264,264,347,348,264,348,262,262,348,349,262,349,260,260,349,350,260,350,259,259,350,351,259,351,253,253,351,352,253,352,255,255,352,353,255,353,256,256,353,354,256,354,257,257,354,355,257,355,266,266,355,347,232,237,224,224,237,250,224,250,225,225,250,226,226,250,356,226,356,312,232,231,237,237,231,306,237,306,235,306,231,313,313,231,230,313,230,267,267,230,229,267,229,286,286,229,228,286,228,227,286,227,312,312,227,226,250,265,356,312,284,286,267,269,313,356,265,357,357,265,263,357,263,261,357,261,358,358,261,258,358,258,359,359,258,252,359,252,360,360,252,254,360,254,319,302,326,301,301,326,344,301,344,318,318,344,317,317,344,343,317,343,316,316,343,342,316,342,341,326,302,325,325,302,303,325,303,324,324,303,323,323,303,304,323,304,322,322,304,321,321,304,305,321,305,306,321,306,320,320,306,313,320,313,338,338,313,339,339,313,314,339,314,315,316,341,315,315,341,340,315,340,339,344,326,345,345,326,327,345,327,346,346,327,328,346,328,338,338,328,320,357,348,356,356,348,347,356,347,329,329,347,337,337,347,355,337,355,336,336,355,354,336,354,335,335,354,353,335,353,307,307,353,319,319,353,360,360,353,352,360,352,359,359,352,351,359,351,350,357,358,348,348,358,349,349,358,350,350,358,359,307,308,335,335,308,334,334,308,309,334,309,333,333,309,332,332,309,310,332,310,331,331,310,330,330,310,311,330,311,312,330,312,329,329,312,356,361,362,363,363,362,364,363,364,365,362,361,366,366,361,367,366,367,368,368,367,369,368,369,370,370,369,371,370,371,372,372,371,373,372,373,374,374,373,375,374,375,376,376,375,377,376,377,378,378,377,379,378,379,380,380,379,381,380,381,382,382,381,383,382,383,365,365,383,363,383,375,363,363,375,373,363,373,361,361,373,371,361,371,367,367,371,369,375,383,377,377,383,381,377,381,379,384,365,385,385,365,364,385,364,386,386,364,362,386,362,387,387,362,366,387,366,388,388,366,368,388,368,389,389,368,370,389,370,390,390,370,372,390,372,391,391,372,374,391,374,392,392,374,376,392,376,393,393,376,378,393,378,394,394,378,380,394,380,395,395,380,382,395,382,384,384,382,365,396,397,398,398,397,399,399,397,400,399,400,401,401,400,402,401,402,403,403,402,404,384,385,405,405,385,386,405,386,406,406,386,387,406,387,407,407,387,388,407,388,408,408,388,389,408,389,390,408,390,409,409,390,391,409,391,410,410,391,392,410,392,411,411,392,393,411,393,394,411,394,412,412,394,395,412,395,413,413,395,384,413,384,405,406,396,405,405,396,398,405,398,413,413,398,399,413,399,412,412,399,401,412,401,411,411,401,403,411,403,410,410,403,404,410,404,409,409,404,402,409,402,408,408,402,400,408,400,407,407,400,397,407,397,406,406,397,396,472,465,464,469,456,473,473,456,467,473,467,466,474,475,476,476,475,477,476,477,478,474,479,475,475,479,453,453,479,480,453,480,454,454,480,481,474,482,479,479,482,480,476,473,474,474,473,472,474,472,482,482,472,483,484,485,486,486,485,487,486,487,488,484,489,485,487,490,488,488,490,491,485,452,487,487,452,450,487,450,490,490,450,492,475,453,477,477,453,452,477,452,489,489,452,485,491,492,493,493,492,494,493,494,495,491,490,492,486,488,469,469,488,491,469,491,468,468,491,493,493,495,468,468,495,496,468,496,470,470,496,497,494,498,495,495,498,496,499,481,483,483,481,480,483,480,482,499,500,481,499,501,500,500,501,502,483,472,499,499,472,471,499,471,501,501,471,503,504,505,503,503,505,502,503,502,501,504,506,505,481,500,454,454,500,502,454,502,455,455,502,505,505,506,455,455,506,507,455,507,451,451,507,508,496,508,497,497,508,507,497,507,509,496,498,508,503,471,504,504,471,470,504,470,509,509,470,497,492,450,494,494,450,451,494,451,498,498,451,508,477,489,478,478,489,484,476,478,473,473,478,484,473,484,469,469,484,486,504,509,506,506,509,507,414,415,416,416,415,417,416,417,418,418,417,419,418,419,420,420,419,421,420,421,422,422,421,423,422,423,424,424,423,425,424,425,426,426,425,427,426,427,428,428,427,429,428,429,430,430,429,431,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,414,414,437,415,438,419,439,439,419,417,439,417,440,440,417,415,440,415,441,441,415,437,441,437,442,442,437,435,442,435,443,443,435,433,443,433,444,444,433,431,444,431,445,445,431,429,445,429,446,446,429,427,446,427,447,447,427,425,447,425,448,448,425,423,448,423,449,449,423,421,449,421,438,438,421,419,450,422,451,451,422,424,451,424,426,452,418,450,450,418,420,450,420,422,453,414,452,452,414,416,452,416,418,454,434,453,453,434,436,453,436,414,455,430,454,454,430,432,454,432,434,451,426,455,455,426,428,455,428,430,440,456,439,439,456,457,439,457,438,438,457,458,438,458,449,449,458,459,449,459,448,448,459,460,448,460,447,447,460,461,447,461,446,446,461,462,446,462,445,445,462,463,445,463,444,444,463,464,444,464,443,443,464,465,443,465,442,442,465,466,442,466,441,441,466,467,441,467,440,440,467,456,468,458,469,469,458,457,469,457,456,470,460,468,468,460,459,468,459,458,471,462,470,470,462,461,470,461,460,472,464,471,471,464,463,471,463,462,473,466,472,472,466,465,601,602,551,551,602,603,551,603,547,547,603,604,592,604,593,593,604,603,593,603,605,592,594,604,599,567,600,600,567,566,600,566,605,605,566,593,588,546,590,590,546,547,590,547,594,594,547,604,573,585,574,574,585,580,572,574,569,569,574,580,569,580,565,565,580,582,600,605,602,602,605,603,510,511,512,512,511,513,512,513,514,514,513,515,514,515,516,516,515,517,516,517,518,518,517,519,518,519,520,520,519,521,520,521,522,522,521,523,522,523,524,524,523,525,524,525,526,526,525,527,526,527,528,528,527,529,528,529,530,530,529,531,530,531,532,532,531,533,532,533,510,510,533,511,534,515,535,535,515,513,535,513,536,536,513,511,536,511,537,537,511,533,537,533,538,538,533,531,538,531,539,539,531,529,539,529,540,540,529,527,540,527,541,541,527,525,541,525,542,542,525,523,542,523,543,543,523,521,543,521,544,544,521,519,544,519,545,545,519,517,545,517,534,534,517,515,546,518,547,547,518,520,547,520,522,548,514,546,546,514,516,546,516,518,549,510,548,548,510,512,548,512,514,550,530,549,549,530,532,549,532,510,551,526,550,550,526,528,550,528,530,547,522,551,551,522,524,551,524,526,536,552,535,535,552,553,535,553,534,534,553,554,534,554,545,545,554,555,545,555,544,544,555,556,544,556,543,543,556,557,543,557,542,542,557,558,542,558,541,541,558,559,541,559,540,540,559,560,540,560,539,539,560,561,539,561,538,538,561,562,538,562,537,537,562,563,537,563,536,536,563,552,564,554,565,565,554,553,565,553,552,566,556,564,564,556,555,564,555,554,567,558,566,566,558,557,566,557,556,568,560,567,567,560,559,567,559,558,569,562,568,568,562,561,568,561,560,565,552,569,569,552,563,569,563,562,570,571,572,572,571,573,572,573,574,570,575,571,571,575,549,549,575,576,549,576,550,550,576,577,570,578,575,575,578,576,572,569,570,570,569,568,570,568,578,578,568,579,580,581,582,582,581,583,582,583,584,580,585,581,583,586,584,584,586,587,581,548,583,583,548,546,583,546,586,586,546,588,571,549,573,573,549,548,573,548,585,585,548,581,587,588,589,589,588,590,589,590,591,587,586,588,582,584,565,565,584,587,565,587,564,564,587,589,589,591,564,564,591,592,564,592,566,566,592,593,590,594,591,591,594,592,595,577,579,579,577,576,579,576,578,595,596,577,595,597,596,596,597,598,579,568,595,595,568,567,595,567,597,597,567,599,600,601,599,599,601,598,599,598,597,600,602,601,577,596,550,550,596,598,550,598,551,551,598,601]},kurbel_a:{v:[46.106,26.21,42.884,45.948,26.21,43.161,46.106,23.71,42.884,45.948,23.71,43.161,45.91,23.71,43.478,45.91,26.21,43.478,45.999,26.21,43.784,45.999,23.71,43.784,47.101,23.71,45.886,46.305,24.71,44.367,46.305,25.21,44.367,47.101,26.21,45.886,47.101,25.21,45.886,47.101,24.71,45.886,48.765,26.21,38.443,48.882,23.71,38.517,48.967,26.21,38.627,49.009,23.71,38.76,49.004,26.21,38.899,48.951,23.71,39.027,48.858,26.21,39.13,48.735,23.71,39.194,48.597,26.21,39.213,48.461,23.71,39.183,48.344,26.21,39.109,48.259,23.71,38.999,48.217,26.21,38.867,48.222,23.71,38.728,48.275,26.21,38.599,48.369,23.71,38.497,48.492,26.21,38.432,48.629,23.71,38.413,44.932,26.21,42.813,45.049,23.71,42.887,45.134,26.21,42.997,45.176,23.71,43.129,45.171,26.21,43.268,45.118,23.71,43.396,45.025,26.21,43.499,44.902,23.71,43.564,44.764,26.21,43.582,44.628,23.71,43.553,44.511,26.21,43.478,44.426,23.71,43.368,44.384,26.21,43.236,44.389,23.71,43.097,44.442,26.21,42.969,44.536,23.71,42.866,44.659,26.21,42.801,44.796,23.71,42.783,46.545,26.21,45.887,46.545,25.21,45.887,46.747,26.21,46.071,46.747,25.21,46.071,46.784,26.21,46.343,46.784,25.21,46.343,46.637,26.21,46.574,46.637,25.21,46.574,46.377,26.21,46.657,46.377,25.21,46.657,46.124,26.21,46.553,46.124,25.21,46.553,45.996,26.21,46.311,45.996,25.21,46.311,46.055,26.21,46.043,46.055,25.21,46.043,46.271,26.21,45.876,46.271,25.21,45.876,46.545,24.71,45.887,46.662,23.71,45.962,46.747,24.71,46.071,46.789,23.71,46.204,46.784,24.71,46.343,46.731,23.71,46.471,46.637,24.71,46.574,46.514,23.71,46.638,46.377,24.71,46.657,46.241,23.71,46.627,46.124,24.71,46.553,46.039,23.71,46.443,45.996,24.71,46.311,46.002,23.71,46.172,46.055,24.71,46.043,46.148,23.71,45.941,46.271,24.71,45.876,46.409,23.71,45.858,44.888,24.71,45.11,44.888,25.21,45.11,47.184,24.71,46.373,45.684,24.71,46.629,46.038,24.71,46.974,46.527,24.71,47.046,46.965,24.71,46.816,47.184,25.21,46.373,46.965,25.21,46.816,46.527,25.21,47.046,46.038,25.21,46.974,45.684,25.21,46.629,45.684,23.71,46.629,44.072,23.71,43.554,44.072,26.21,43.554,45.684,26.21,46.629,47.184,23.71,46.373,46.965,23.71,46.816,46.527,23.71,47.046,46.038,23.71,46.974,46.038,26.21,46.974,46.527,26.21,47.046,46.965,26.21,46.816,47.184,26.21,46.373,49.214,23.71,39.341,49.214,26.21,39.341,48.012,26.21,38.286,48.437,26.21,38.033,48.012,23.71,38.286,48.437,23.71,38.033,48.929,26.21,38.078,48.929,23.71,38.078,49.301,26.21,38.404,49.301,23.71,38.404,49.41,26.21,38.886,49.41,23.71,38.886,44.179,26.21,42.655,44.179,23.71,42.655,43.983,26.21,43.248,43.983,23.71,43.248,44.02,23.71,42.932,44.02,26.21,42.932,46.95,23.41,46.034,47.054,23.51,46.029,46.982,23.41,46.371,47.08,23.51,46.39,46.922,23.51,46.716,46.851,23.51,45.728,46.741,23.41,45.769,46.526,23.51,45.57,46.422,23.41,45.658,46.164,23.51,45.596,46.093,23.41,45.738,45.864,23.51,45.799,45.86,23.41,45.982,45.706,23.51,46.125,45.796,23.41,46.314,45.731,23.51,46.486,45.921,23.41,46.628,45.934,23.51,46.786,46.196,23.41,46.824,46.26,23.51,46.945,46.534,23.41,46.84,46.622,23.51,46.919,46.827,23.41,46.671,46.922,23.71,46.716,47.08,23.71,46.39,47.054,23.71,46.029,46.851,23.71,45.728,46.526,23.71,45.57,46.164,23.71,45.596,45.864,23.71,45.799,45.706,23.71,46.125,45.731,23.71,46.486,45.934,23.71,46.786,46.26,23.71,46.945,46.622,23.71,46.919,46.786,26.185,46.333,46.742,26.185,46.063,46.645,26.185,46.568,46.386,26.185,46.657,46.536,26.185,45.884,46.131,26.185,46.559,46.262,26.185,45.879,45.998,26.185,46.32,46.05,26.185,46.052,46.786,23.71,46.333,46.742,23.71,46.063,46.536,23.71,45.884,46.262,23.71,45.879,46.05,23.71,46.052,45.998,23.71,46.32,46.131,23.71,46.559,46.386,23.71,46.657,46.645,23.71,46.568],i:[56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},kurbel_b:{v:[46.106,23.71,55.952,45.948,23.71,55.675,46.106,26.21,55.952,45.948,26.21,55.675,45.91,26.21,55.359,45.91,23.71,55.359,45.998,23.71,55.053,45.998,26.21,55.053,47.1,26.21,52.95,46.304,25.21,54.469,46.304,24.71,54.469,47.1,23.71,52.95,47.1,24.71,52.95,47.1,25.21,52.95,48.767,23.71,60.392,48.884,26.21,60.318,48.969,23.71,60.208,49.011,26.21,60.075,49.006,23.71,59.937,48.953,26.21,59.808,48.859,23.71,59.705,48.736,26.21,59.641,48.598,23.71,59.622,48.463,26.21,59.652,48.345,23.71,59.726,48.261,26.21,59.836,48.218,23.71,59.969,48.224,26.21,60.108,48.277,23.71,60.236,48.37,26.21,60.339,48.494,23.71,60.403,48.631,26.21,60.422,44.932,23.71,56.024,45.05,26.21,55.95,45.134,23.71,55.84,45.176,26.21,55.707,45.171,23.71,55.569,45.118,26.21,55.44,45.024,23.71,55.337,44.901,26.21,55.273,44.764,23.71,55.255,44.628,26.21,55.284,44.511,23.71,55.359,44.426,26.21,55.469,44.384,23.71,55.601,44.389,26.21,55.74,44.442,23.71,55.868,44.536,26.21,55.971,44.659,23.71,56.035,44.796,26.21,56.054,46.544,23.71,52.949,46.544,24.71,52.949,46.746,23.71,52.764,46.746,24.71,52.764,46.782,23.71,52.493,46.782,24.71,52.493,46.636,23.71,52.262,46.636,24.71,52.262,46.375,23.71,52.179,46.375,24.71,52.179,46.122,23.71,52.283,46.122,24.71,52.283,45.995,23.71,52.526,45.995,24.71,52.526,46.054,23.71,52.793,46.054,24.71,52.793,46.27,23.71,52.96,46.27,24.71,52.96,46.544,25.21,52.949,46.661,26.21,52.874,46.746,25.21,52.764,46.788,26.21,52.632,46.782,25.21,52.493,46.729,26.21,52.365,46.636,25.21,52.262,46.513,26.21,52.198,46.375,25.21,52.179,46.239,26.21,52.209,46.122,25.21,52.283,46.037,26.21,52.393,45.995,25.21,52.526,46.001,26.21,52.664,46.054,25.21,52.793,46.147,26.21,52.895,46.27,25.21,52.96,46.408,26.21,52.978,44.887,25.21,53.727,44.887,24.71,53.727,47.183,25.21,52.463,45.683,25.21,52.207,46.037,25.21,51.862,46.526,25.21,51.79,46.964,25.21,52.02,47.183,24.71,52.463,46.964,24.71,52.02,46.526,24.71,51.79,46.037,24.71,51.862,45.683,24.71,52.207,45.683,26.21,52.207,44.071,26.21,55.283,44.071,23.71,55.283,45.683,23.71,52.207,47.183,26.21,52.463,46.964,26.21,52.02,46.526,26.21,51.79,46.037,26.21,51.862,46.037,23.71,51.862,46.526,23.71,51.79,46.964,23.71,52.02,47.183,23.71,52.463,49.216,26.21,59.494,49.216,23.71,59.494,48.014,23.71,60.55,48.439,23.71,60.802,48.014,26.21,60.55,48.439,26.21,60.802,48.931,23.71,60.757,48.931,26.21,60.757,49.303,23.71,60.431,49.303,26.21,60.431,49.411,23.71,59.948,49.411,26.21,59.948,44.179,23.71,56.182,44.179,26.21,56.182,43.983,23.71,55.589,43.983,26.21,55.589,44.021,26.21,55.905,44.021,23.71,55.905,46.826,23.41,52.165,46.921,23.51,52.121,46.981,23.41,52.465,47.079,23.51,52.447,47.053,23.51,52.808,46.621,23.51,51.917,46.533,23.41,51.996,46.259,23.51,51.891,46.195,23.41,52.012,45.933,23.51,52.05,45.92,23.41,52.208,45.73,23.51,52.35,45.794,23.41,52.522,45.704,23.51,52.711,45.858,23.41,52.854,45.862,23.51,53.037,46.091,23.41,53.098,46.162,23.51,53.24,46.42,23.41,53.178,46.524,23.51,53.266,46.739,23.41,53.068,46.85,23.51,53.108,46.949,23.41,52.802,47.053,23.71,52.808,47.079,23.71,52.447,46.921,23.71,52.121,46.621,23.71,51.917,46.259,23.71,51.891,45.933,23.71,52.05,45.73,23.71,52.35,45.704,23.71,52.711,45.862,23.71,53.037,46.162,23.71,53.24,46.524,23.71,53.266,46.85,23.71,53.108,46.784,26.185,52.503,46.644,26.185,52.268,46.741,26.185,52.773,46.534,26.185,52.953,46.385,26.185,52.179,46.261,26.185,52.957,46.13,26.185,52.276,46.048,26.185,52.784,45.997,26.185,52.515,46.784,23.71,52.503,46.644,23.71,52.268,46.385,23.71,52.179,46.13,23.71,52.276,45.997,23.71,52.515,46.048,23.71,52.784,46.261,23.71,52.957,46.534,23.71,52.953,46.741,23.71,52.773],i:[44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},lenker_a:{v:[46.107,22.46,45.195,46.107,22.96,45.195,46.249,22.46,45.428,46.249,22.96,45.428,46.509,22.46,45.515,46.509,22.96,45.515,46.763,22.46,45.415,46.763,22.96,45.415,46.894,22.46,45.175,46.894,22.96,45.175,46.84,22.46,44.907,46.84,22.96,44.907,46.626,22.46,44.736,46.626,22.96,44.736,46.352,22.46,44.743,46.352,22.96,44.743,46.147,22.46,44.924,46.147,22.96,44.924,49.222,22.46,41.284,49.222,22.96,41.284,49.365,22.46,41.518,49.365,22.96,41.518,49.625,22.46,41.605,49.625,22.96,41.605,49.879,22.46,41.505,49.879,22.96,41.505,50.01,22.46,41.264,50.01,22.96,41.264,49.956,22.46,40.996,49.956,22.96,40.996,49.742,22.46,40.826,49.742,22.96,40.826,49.468,22.46,40.832,49.468,22.96,40.832,49.263,22.46,41.014,49.263,22.96,41.014,45.912,22.96,44.648,49.028,22.96,40.737,45.912,22.46,44.648,49.028,22.46,40.737,47.085,22.96,45.583,46.699,22.96,45.838,47.085,22.46,45.583,46.699,22.46,45.838,46.235,22.96,45.818,46.235,22.46,45.818,45.873,22.96,45.529,45.873,22.46,45.529,45.749,22.96,45.082,45.749,22.46,45.082,50.201,22.96,41.672,50.201,22.46,41.672,49.415,22.96,40.482,49.415,22.46,40.482,49.878,22.96,40.502,49.878,22.46,40.502,50.24,22.96,40.791,50.24,22.46,40.791,50.364,22.96,41.238,50.364,22.46,41.238],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},lenker_b:{v:[46.107,22.96,53.625,46.107,22.46,53.625,46.25,22.96,53.392,46.25,22.46,53.392,46.51,22.96,53.305,46.51,22.46,53.305,46.764,22.96,53.406,46.764,22.46,53.406,46.894,22.96,53.647,46.894,22.46,53.647,46.839,22.96,53.915,46.839,22.46,53.915,46.625,22.96,54.085,46.625,22.46,54.085,46.351,22.96,54.077,46.351,22.46,54.077,46.147,22.96,53.895,46.147,22.46,53.895,49.211,22.96,57.544,49.211,22.46,57.544,49.355,22.96,57.311,49.355,22.46,57.311,49.614,22.96,57.225,49.614,22.46,57.225,49.869,22.96,57.326,49.869,22.46,57.326,49.999,22.96,57.567,49.999,22.46,57.567,49.944,22.96,57.835,49.944,22.46,57.835,49.729,22.96,58.005,49.729,22.46,58.005,49.456,22.96,57.997,49.456,22.46,57.997,49.251,22.96,57.815,49.251,22.46,57.815,45.911,22.46,54.171,49.015,22.46,58.091,45.911,22.96,54.171,49.015,22.96,58.091,47.087,22.46,53.24,46.701,22.46,52.983,47.087,22.96,53.24,46.701,22.96,52.983,46.238,22.46,53.002,46.238,22.96,53.002,45.874,22.46,53.29,45.874,22.96,53.29,45.749,22.46,53.736,45.749,22.96,53.736,50.191,22.46,57.159,50.191,22.96,57.159,49.401,22.46,58.347,49.401,22.96,58.347,49.864,22.46,58.328,49.864,22.96,58.328,50.227,22.46,58.04,50.227,22.96,58.04,50.352,22.46,57.594,50.352,22.96,57.594],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},koppel_a:{v:[44.113,25.21,46.69,44.113,24.71,46.69,44,25.21,46.441,44,24.71,46.441,44.073,25.21,46.177,44.073,24.71,46.177,44.299,25.21,46.023,44.299,24.71,46.023,44.572,25.21,46.05,44.572,24.71,46.05,44.763,25.21,46.245,44.763,24.71,46.245,44.784,25.21,46.518,44.784,24.71,46.518,44.625,25.21,46.74,44.625,24.71,46.74,44.36,25.21,46.808,44.36,24.71,46.808,46.107,25.21,46.537,46.107,24.71,46.537,45.994,25.21,46.288,45.994,24.71,46.288,46.068,25.21,46.024,46.068,24.71,46.024,46.293,25.21,45.87,46.293,24.71,45.87,46.566,25.21,45.897,46.566,24.71,45.897,46.757,25.21,46.092,46.757,24.71,46.092,46.778,25.21,46.365,46.778,24.71,46.365,46.619,25.21,46.587,46.619,24.71,46.587,46.354,25.21,46.655,46.354,24.71,46.655,44.452,24.71,47.108,46.446,24.71,46.955,44.452,25.21,47.108,46.446,25.21,46.955,44.345,24.71,45.712,44.003,24.71,45.833,44.345,25.21,45.712,44.003,25.21,45.833,43.767,24.71,46.108,43.767,25.21,46.108,43.701,24.71,46.464,43.701,25.21,46.464,43.821,24.71,46.806,43.821,25.21,46.806,44.096,24.71,47.041,44.096,25.21,47.041,46.339,24.71,45.559,46.339,25.21,45.559,46.788,24.71,46.835,46.788,25.21,46.835,47.024,24.71,46.56,47.024,25.21,46.56,47.091,24.71,46.204,47.091,25.21,46.204,46.97,24.71,45.862,46.97,25.21,45.862,46.695,24.71,45.626,46.695,25.21,45.626],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52]},koppel_b:{v:[44.072,25.21,52.641,44.072,24.71,52.641,44,25.21,52.377,44,24.71,52.377,44.115,25.21,52.128,44.115,24.71,52.128,44.363,25.21,52.012,44.363,24.71,52.012,44.627,25.21,52.082,44.627,24.71,52.082,44.785,25.21,52.306,44.785,24.71,52.306,44.762,25.21,52.578,44.762,24.71,52.578,44.569,25.21,52.772,44.569,24.71,52.772,44.296,25.21,52.797,44.296,24.71,52.797,46.065,25.21,52.809,46.065,24.71,52.809,45.993,25.21,52.545,45.993,24.71,52.545,46.108,25.21,52.297,46.108,24.71,52.297,46.356,25.21,52.18,46.356,24.71,52.18,46.62,25.21,52.25,46.62,24.71,52.25,46.778,25.21,52.474,46.778,24.71,52.474,46.755,25.21,52.747,46.755,24.71,52.747,46.562,25.21,52.941,46.562,24.71,52.941,46.289,25.21,52.965,46.289,24.71,52.965,44.34,24.71,53.108,46.333,24.71,53.276,44.34,25.21,53.108,46.333,25.21,53.276,44.458,24.71,51.713,44.101,24.71,51.777,44.458,25.21,51.713,44.101,25.21,51.777,43.824,24.71,52.01,43.824,25.21,52.01,43.701,24.71,52.351,43.701,25.21,52.351,43.765,24.71,52.708,43.765,25.21,52.708,43.999,24.71,52.985,43.999,25.21,52.985,46.451,24.71,51.881,46.451,25.21,51.881,46.689,24.71,53.212,46.689,25.21,53.212,46.966,24.71,52.979,46.966,25.21,52.979,47.089,24.71,52.638,47.089,25.21,52.638,47.025,24.71,52.281,47.025,25.21,52.281,46.791,24.71,52.004,46.791,25.21,52.004],i:[32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52,0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33]},backe_a:{v:[50.309,26.21,38.384,50.309,23.71,38.384,50.904,26.21,43.779,50.904,23.71,43.779,48.964,26.21,38.62,48.793,26.21,38.034,48.863,26.21,38.501,48.725,26.21,38.429,50.012,26.21,41.161,49.965,26.21,41.012,49.865,26.21,40.893,50.245,26.21,43.852,49.927,26.21,41.455,49.999,26.21,41.316,49.807,26.21,41.555,50.085,26.21,43.843,49.936,26.21,43.785,49.813,26.21,43.683,49.729,26.21,43.548,47.875,26.21,39.122,49.264,26.21,41.397,49.364,26.21,41.517,49.503,26.21,41.589,47.819,26.21,38.911,48.215,26.21,38.857,48.263,26.21,39.006,48.363,26.21,39.125,47.822,26.21,38.692,47.885,26.21,38.482,48.229,26.21,38.702,48.002,26.21,38.297,48.164,26.21,38.151,48.36,26.21,38.054,48.42,26.21,38.463,48.301,26.21,38.563,48.569,26.21,38.416,48.575,26.21,38.014,49.217,26.21,41.249,48.501,26.21,39.197,49.23,26.21,41.093,48.657,26.21,39.211,49.302,26.21,40.955,48.806,26.21,39.164,49.422,26.21,40.854,48.925,26.21,39.063,49.571,26.21,40.807,48.997,26.21,38.925,49.726,26.21,40.821,49.011,26.21,38.769,49.658,26.21,41.602,48.793,23.71,38.034,48.964,23.71,38.62,49.011,23.71,38.769,49.726,23.71,40.821,48.997,23.71,38.925,49.571,23.71,40.807,49.422,23.71,40.854,48.925,23.71,39.063,49.302,23.71,40.955,48.806,23.71,39.164,49.23,23.71,41.093,48.657,23.71,39.211,48.501,23.71,39.197,48.575,23.71,38.014,48.725,23.71,38.429,48.863,23.71,38.501,48.569,23.71,38.416,48.36,23.71,38.054,48.42,23.71,38.463,48.301,23.71,38.563,48.164,23.71,38.151,48.229,23.71,38.702,48.002,23.71,38.297,48.215,23.71,38.857,47.885,23.71,38.482,47.822,23.71,38.692,47.819,23.71,38.911,47.875,23.71,39.122,48.263,23.71,39.006,48.363,23.71,39.125,49.217,23.71,41.249,49.264,23.71,41.397,49.729,23.71,43.548,49.364,23.71,41.517,49.503,23.71,41.589,49.658,23.71,41.602,49.807,23.71,41.555,49.936,23.71,43.785,50.085,23.71,43.843,49.813,23.71,43.683,50.245,23.71,43.852,49.927,23.71,41.455,49.999,23.71,41.316,50.012,23.71,41.161,49.965,23.71,41.012,49.865,23.71,40.893,48.793,22.96,38.034,61.667,22.96,41.01,61.667,26.96,41.01,48.793,26.96,38.034,48.575,26.96,38.014,48.36,26.96,38.054,48.164,26.96,38.151,48.002,26.96,38.297,47.885,26.96,38.482,47.822,26.96,38.692,47.819,26.96,38.911,47.875,26.96,39.122,49.729,26.96,43.548,49.813,26.96,43.683,49.936,26.96,43.785,50.085,26.96,43.843,50.245,26.96,43.852,49.264,26.96,41.397,49.217,26.96,41.249,49.23,26.96,41.093,49.302,26.96,40.955,49.422,26.96,40.854,49.571,26.96,40.807,49.726,26.96,40.821,49.865,26.96,40.893,49.965,26.96,41.012,50.012,26.96,41.161,49.999,26.96,41.316,49.927,26.96,41.455,49.807,26.96,41.555,49.658,26.96,41.602,49.503,26.96,41.589,49.364,26.96,41.517,48.263,26.96,39.006,48.215,26.96,38.857,48.229,26.96,38.702,48.301,26.96,38.563,48.42,26.96,38.463,48.569,26.96,38.416,48.725,26.96,38.429,48.863,26.96,38.501,48.964,26.96,38.62,49.011,26.96,38.769,48.997,26.96,38.925,48.925,26.96,39.063,48.806,26.96,39.164,48.657,26.96,39.211,48.501,26.96,39.197,48.363,26.96,39.125,49.264,22.96,41.397,49.217,22.96,41.249,49.23,22.96,41.093,49.302,22.96,40.955,49.422,22.96,40.854,49.571,22.96,40.807,49.726,22.96,40.821,49.865,22.96,40.893,49.965,22.96,41.012,50.012,22.96,41.161,49.999,22.96,41.316,49.927,22.96,41.455,49.807,22.96,41.555,49.658,22.96,41.602,49.503,22.96,41.589,49.364,22.96,41.517,48.263,22.96,39.006,48.215,22.96,38.857,48.229,22.96,38.702,48.301,22.96,38.563,48.42,22.96,38.463,48.569,22.96,38.416,48.725,22.96,38.429,48.863,22.96,38.501,48.964,22.96,38.62,49.011,22.96,38.769,48.997,22.96,38.925,48.925,22.96,39.063,48.806,22.96,39.164,48.657,22.96,39.211,48.501,22.96,39.197,48.363,22.96,39.125,50.245,22.96,43.852,50.085,22.96,43.843,49.936,22.96,43.785,49.813,22.96,43.683,49.729,22.96,43.548,47.875,22.96,39.122,47.819,22.96,38.911,47.822,22.96,38.692,47.885,22.96,38.482,48.002,22.96,38.297,48.164,22.96,38.151,48.36,22.96,38.054,48.575,22.96,38.014,61.901,26.96,41.136,61.901,22.96,41.136,61.831,26.96,41.08,61.831,22.96,41.08,61.752,22.96,41.038,61.752,26.96,41.038,62.464,22.96,41.678,62.464,26.96,41.678,62.172,26.96,42.535,62.172,22.96,42.535,62.327,26.96,42.492,62.327,22.96,42.492,62.461,22.96,42.402,62.461,26.96,42.402,62.558,22.96,42.274,62.558,26.96,42.274,62.61,22.96,42.121,62.61,26.96,42.121,62.611,22.96,41.96,62.611,26.96,41.96,62.561,22.96,41.807,62.561,26.96,41.807,60.264,22.96,42.746,60.264,26.96,42.746,54.14,22.96,43.422,54.463,22.96,43.053,54.14,26.96,43.422,54.463,26.96,43.053,54.826,22.96,42.723,54.826,26.96,42.723,55.224,22.96,42.437,55.224,26.96,42.437,55.653,22.96,42.198,55.653,26.96,42.198,56.105,22.96,42.009,56.105,26.96,42.009,56.576,22.96,41.873,56.576,26.96,41.873,57.06,22.96,41.792,57.06,26.96,41.792,57.549,22.96,41.766,57.549,26.96,41.766,58.039,22.96,41.796,58.039,26.96,41.796,58.522,22.96,41.881,58.522,26.96,41.881,58.992,22.96,42.021,58.992,26.96,42.021,59.443,22.96,42.214,59.443,26.96,42.214,59.869,22.96,42.456,59.869,26.96,42.456,49.833,22.16,40.646,49.869,22.26,40.553,50.141,22.16,40.917,50.229,22.26,40.869,50.203,22.16,41.323,50.301,22.26,41.343,49.989,22.16,41.673,50.051,22.26,41.752,49.6,22.16,41.805,49.598,22.26,41.905,49.218,22.16,41.655,49.152,22.26,41.73,49.021,22.16,41.295,48.922,22.26,41.31,49.102,22.16,40.892,49.017,22.26,40.84,49.423,22.16,40.636,49.391,22.26,40.541,50.301,22.46,41.343,50.229,22.46,40.869,49.869,22.46,40.553,49.391,22.46,40.541,49.017,22.46,40.84,48.922,22.46,41.31,49.152,22.46,41.73,49.598,22.46,41.905,50.051,22.46,41.752,49.966,27.26,41.013,49.76,27.26,40.832,50.007,27.26,41.284,49.864,27.26,41.517,49.487,27.26,40.826,49.605,27.26,41.605,49.273,27.26,40.997,49.35,27.26,41.505,49.219,27.26,41.265,49.76,22.46,40.832,49.966,22.46,41.013,50.007,22.46,41.284,49.487,22.46,40.826,49.273,22.46,40.997,49.219,22.46,41.265,49.35,22.46,41.505,49.605,22.46,41.605,49.864,22.46,41.517,49.064,22.66,38.345,49.17,22.76,38.311,49.259,22.66,38.744,49.359,22.76,38.734,49.263,22.76,39.187,48.768,22.76,38.079,48.658,22.66,38.165,48.307,22.76,38.128,48.23,22.66,38.288,47.963,22.76,38.439,47.982,22.66,38.657,47.867,22.76,38.892,48.029,22.66,39.099,48.056,22.76,39.316,48.349,22.66,39.407,48.458,22.76,39.547,48.793,22.66,39.438,48.919,22.76,39.498,49.152,22.66,39.176,49.263,22.96,39.187,49.359,22.96,38.734,49.17,22.96,38.311,48.768,22.96,38.079,48.307,22.96,38.128,47.963,22.96,38.439,47.867,22.96,38.892,48.056,22.96,39.316,48.458,22.96,39.547,48.919,22.96,39.498,49.011,27.26,38.771,48.891,27.26,38.525,48.945,27.26,39.036,48.724,27.26,39.198,48.64,27.26,38.414,48.451,27.26,39.179,48.378,27.26,38.49,48.254,27.26,38.989,48.225,27.26,38.717,48.891,22.96,38.525,49.011,22.96,38.771,48.945,22.96,39.036,48.64,22.96,38.414,48.378,22.96,38.49,48.225,22.96,38.717,48.254,22.96,38.989,48.451,22.96,39.179,48.724,22.96,39.198,49.231,26.94,41.034,49.249,26.96,41.042,49.197,26.94,41.249,49.217,26.96,41.247,49.275,26.94,41.452,49.291,26.96,41.44,49.444,26.94,41.589,49.452,26.96,41.57,49.659,26.94,41.622,49.657,26.96,41.602,49.862,26.94,41.544,49.85,26.96,41.528,49.998,26.94,41.375,49.98,26.96,41.367,50.032,26.94,41.16,50.012,26.96,41.162,49.954,26.94,40.957,49.938,26.96,40.969,49.785,26.94,40.821,49.777,26.96,40.839,49.57,26.94,40.787,49.572,26.96,40.807,49.367,26.94,40.865,49.379,26.96,40.881,49.291,27.22,41.44,49.217,27.22,41.247,49.249,27.22,41.042,49.379,27.22,40.881,49.572,27.22,40.807,49.777,27.22,40.839,49.938,27.22,40.969,50.012,27.22,41.162,49.98,27.22,41.367,49.85,27.22,41.528,49.657,27.22,41.602,49.452,27.22,41.57,49.354,26.94,41.792,49.993,26.94,41.724,48.976,26.94,41.273,49.236,26.94,40.686,49.875,26.94,40.618,50.253,26.94,41.137,49.231,27.24,41.034,49.197,27.24,41.249,49.275,27.24,41.452,49.444,27.24,41.589,49.659,27.24,41.622,49.862,27.24,41.544,49.998,27.24,41.375,50.032,27.24,41.16,49.954,27.24,40.957,49.785,27.24,40.821,49.57,27.24,40.787,49.367,27.24,40.865,49.354,27.24,41.792,48.976,27.24,41.273,49.993,27.24,41.724,50.253,27.24,41.137,49.875,27.24,40.618,49.236,27.24,40.686,49.26,27.19,40.633,49.211,26.977,40.651,49.211,27.204,40.651,49.179,26.99,40.692,49.179,27.19,40.692,49.26,26.99,40.633,49.841,26.99,40.571,49.892,26.977,40.579,49.841,27.19,40.571,49.892,27.204,40.579,48.942,27.19,41.226,48.934,26.977,41.277,48.934,27.204,41.277,48.952,26.99,41.325,48.952,27.19,41.325,48.942,26.99,41.226,49.297,26.99,41.798,49.297,27.19,41.798,49.337,26.977,41.83,49.337,27.204,41.83,49.388,26.99,41.838,49.388,27.19,41.838,49.969,27.19,41.777,50.017,27.204,41.758,49.969,26.99,41.777,49.932,27.19,40.612,49.932,26.99,40.612,50.277,27.19,41.084,50.277,26.99,41.084,50.295,27.204,41.132,50.287,27.19,41.183,50.295,26.977,41.132,50.287,26.99,41.183,50.05,26.99,41.718,50.017,26.977,41.758,50.05,27.19,41.718,48.229,26.94,38.643,48.247,26.96,38.651,48.195,26.94,38.858,48.215,26.96,38.855,48.274,26.94,39.06,48.29,26.96,39.049,48.443,26.94,39.197,48.451,26.96,39.179,48.657,26.94,39.231,48.655,26.96,39.211,48.86,26.94,39.153,48.849,26.96,39.136,48.997,26.94,38.983,48.979,26.96,38.975,49.031,26.94,38.769,49.011,26.96,38.771,48.953,26.94,38.566,48.936,26.96,38.578,48.783,26.94,38.429,48.775,26.96,38.448,48.569,26.94,38.395,48.571,26.96,38.415,48.366,26.94,38.474,48.378,26.96,38.49,48.29,27.22,39.049,48.215,27.22,38.855,48.247,27.22,38.651,48.378,27.22,38.49,48.571,27.22,38.415,48.775,27.22,38.448,48.936,27.22,38.578,49.011,27.22,38.771,48.979,27.22,38.975,48.849,27.22,39.136,48.655,27.22,39.211,48.451,27.22,39.179,48.353,26.94,39.4,48.991,26.94,39.332,47.974,26.94,38.881,48.235,26.94,38.294,48.874,26.94,38.226,49.252,26.94,38.745,48.229,27.24,38.643,48.195,27.24,38.858,48.274,27.24,39.06,48.443,27.24,39.197,48.657,27.24,39.231,48.86,27.24,39.153,48.997,27.24,38.983,49.031,27.24,38.769,48.953,27.24,38.566,48.783,27.24,38.429,48.569,27.24,38.395,48.366,27.24,38.474,48.353,27.24,39.4,47.974,27.24,38.881,48.991,27.24,39.332,49.252,27.24,38.745,48.874,27.24,38.226,48.235,27.24,38.294,48.258,27.19,38.241,48.21,26.977,38.26,48.21,27.204,38.26,48.177,26.99,38.3,48.177,27.19,38.3,48.258,26.99,38.241,48.84,26.99,38.179,48.891,26.977,38.187,48.84,27.19,38.179,48.891,27.204,38.187,47.94,27.19,38.834,47.932,26.977,38.886,47.932,27.204,38.886,47.951,26.99,38.934,47.951,27.19,38.934,47.94,26.99,38.834,48.295,26.99,39.406,48.295,27.19,39.406,48.335,26.977,39.439,48.335,27.204,39.439,48.387,26.99,39.447,48.387,27.19,39.447,48.968,27.19,39.385,49.016,27.204,39.366,48.968,26.99,39.385,48.931,27.19,38.22,48.931,26.99,38.22,49.275,27.19,38.692,49.275,26.99,38.692,49.294,27.204,38.741,49.286,27.19,38.792,49.294,26.977,38.741,49.286,26.99,38.792,49.049,26.99,39.326,49.016,26.977,39.366,49.049,27.19,39.326],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523]},backe_b:{v:[50.313,23.71,60.442,50.313,26.21,60.442,50.878,23.71,55.044,50.878,26.21,55.044,48.966,23.71,60.213,48.799,23.71,60.8,48.867,23.71,60.333,48.729,23.71,60.406,50.001,23.71,57.667,49.955,23.71,57.816,49.855,23.71,57.936,50.218,23.71,54.975,49.914,23.71,57.373,49.986,23.71,57.511,49.794,23.71,57.273,50.059,23.71,54.984,49.91,23.71,55.042,49.788,23.71,55.145,49.704,23.71,55.281,47.875,23.71,59.717,49.251,23.71,57.434,49.351,23.71,57.314,49.489,23.71,57.241,47.82,23.71,59.929,48.217,23.71,59.98,48.263,23.71,59.831,48.363,23.71,59.711,47.825,23.71,60.148,47.888,23.71,60.357,48.231,23.71,60.136,48.006,23.71,60.541,48.17,23.71,60.687,48.366,23.71,60.782,48.424,23.71,60.374,48.304,23.71,60.274,48.573,23.71,60.42,48.582,23.71,60.821,49.205,23.71,57.583,48.501,23.71,59.639,49.219,23.71,57.739,48.657,23.71,59.624,49.292,23.71,57.877,48.806,23.71,59.67,49.412,23.71,57.977,48.926,23.71,59.77,49.561,23.71,58.023,48.998,23.71,59.908,49.717,23.71,58.008,49.013,23.71,60.064,49.645,23.71,57.227,48.799,26.21,60.8,48.966,26.21,60.213,49.013,26.21,60.064,49.717,26.21,58.008,48.998,26.21,59.908,49.561,26.21,58.023,49.412,26.21,57.977,48.926,26.21,59.77,49.292,26.21,57.877,48.806,26.21,59.67,49.219,26.21,57.739,48.657,26.21,59.624,48.501,26.21,59.639,48.582,26.21,60.821,48.729,26.21,60.406,48.867,26.21,60.333,48.573,26.21,60.42,48.366,26.21,60.782,48.424,26.21,60.374,48.304,26.21,60.274,48.17,26.21,60.687,48.231,26.21,60.136,48.006,26.21,60.541,48.217,26.21,59.98,47.888,26.21,60.357,47.825,26.21,60.148,47.82,26.21,59.929,47.875,26.21,59.717,48.263,26.21,59.831,48.363,26.21,59.711,49.205,26.21,57.583,49.251,26.21,57.434,49.704,26.21,55.281,49.351,26.21,57.314,49.489,26.21,57.241,49.645,26.21,57.227,49.794,26.21,57.273,49.91,26.21,55.042,50.059,26.21,54.984,49.788,26.21,55.145,50.218,26.21,54.975,49.914,26.21,57.373,49.986,26.21,57.511,50.001,26.21,57.667,49.955,26.21,57.816,49.855,26.21,57.936,48.799,26.96,60.8,61.656,26.96,57.753,61.656,22.96,57.753,48.799,22.96,60.8,48.582,22.96,60.821,48.366,22.96,60.782,48.17,22.96,60.687,48.006,22.96,60.541,47.888,22.96,60.357,47.825,22.96,60.148,47.82,22.96,59.929,47.875,22.96,59.717,49.704,22.96,55.281,49.788,22.96,55.145,49.91,22.96,55.042,50.059,22.96,54.984,50.218,22.96,54.975,49.251,22.96,57.434,49.205,22.96,57.583,49.219,22.96,57.739,49.292,22.96,57.877,49.412,22.96,57.977,49.561,22.96,58.023,49.717,22.96,58.008,49.855,22.96,57.936,49.955,22.96,57.816,50.001,22.96,57.667,49.986,22.96,57.511,49.914,22.96,57.373,49.794,22.96,57.273,49.645,22.96,57.227,49.489,22.96,57.241,49.351,22.96,57.314,48.263,22.96,59.831,48.217,22.96,59.98,48.231,22.96,60.136,48.304,22.96,60.274,48.424,22.96,60.374,48.573,22.96,60.42,48.729,22.96,60.406,48.867,22.96,60.333,48.966,22.96,60.213,49.013,22.96,60.064,48.998,22.96,59.908,48.926,22.96,59.77,48.806,22.96,59.67,48.657,22.96,59.624,48.501,22.96,59.639,48.363,22.96,59.711,49.251,26.96,57.434,49.205,26.96,57.583,49.219,26.96,57.739,49.292,26.96,57.877,49.412,26.96,57.977,49.561,26.96,58.023,49.717,26.96,58.008,49.855,26.96,57.936,49.955,26.96,57.816,50.001,26.96,57.667,49.986,26.96,57.511,49.914,26.96,57.373,49.794,26.96,57.273,49.645,26.96,57.227,49.489,26.96,57.241,49.351,26.96,57.314,48.263,26.96,59.831,48.217,26.96,59.98,48.231,26.96,60.136,48.304,26.96,60.274,48.424,26.96,60.374,48.573,26.96,60.42,48.729,26.96,60.406,48.867,26.96,60.333,48.966,26.96,60.213,49.013,26.96,60.064,48.998,26.96,59.908,48.926,26.96,59.77,48.806,26.96,59.67,48.657,26.96,59.624,48.501,26.96,59.639,48.363,26.96,59.711,50.218,26.96,54.975,50.059,26.96,54.984,49.91,26.96,55.042,49.788,26.96,55.145,49.704,26.96,55.281,47.875,26.96,59.717,47.82,26.96,59.929,47.825,26.96,60.148,47.888,26.96,60.357,48.006,26.96,60.541,48.17,26.96,60.687,48.366,26.96,60.782,48.582,26.96,60.821,61.89,22.96,57.625,61.89,26.96,57.625,61.82,22.96,57.681,61.82,26.96,57.681,61.742,26.96,57.725,61.742,22.96,57.725,62.45,26.96,57.08,62.45,22.96,57.08,62.153,22.96,56.225,62.153,26.96,56.225,62.308,22.96,56.267,62.308,26.96,56.267,62.442,26.96,56.357,62.442,22.96,56.357,62.541,26.96,56.484,62.541,22.96,56.484,62.594,26.96,56.636,62.594,22.96,56.636,62.595,26.96,56.797,62.595,22.96,56.797,62.546,26.96,56.951,62.546,22.96,56.951,60.244,26.96,56.025,60.244,22.96,56.025,54.116,26.96,55.383,54.442,26.96,55.75,54.116,22.96,55.383,54.442,22.96,55.75,54.806,26.96,56.078,54.806,22.96,56.078,55.206,26.96,56.362,55.206,22.96,56.362,55.635,26.96,56.598,55.635,22.96,56.598,56.089,26.96,56.784,56.089,22.96,56.784,56.561,26.96,56.918,56.561,22.96,56.918,57.045,26.96,56.997,57.045,22.96,56.997,57.535,26.96,57.02,57.535,22.96,57.02,58.024,26.96,56.987,58.024,22.96,56.987,58.506,26.96,56.899,58.506,22.96,56.899,58.975,26.96,56.756,58.975,22.96,56.756,59.425,26.96,56.561,59.425,22.96,56.561,59.85,26.96,56.316,59.85,22.96,56.316,50.106,22.16,57.298,50.19,22.26,57.244,50.198,22.16,57.698,50.298,22.26,57.71,50.012,22.16,58.064,50.08,22.26,58.137,49.634,22.16,58.224,49.64,22.26,58.324,49.242,22.16,58.104,49.182,22.26,58.184,49.018,22.16,57.76,48.921,22.26,57.782,49.068,22.16,57.353,48.979,22.26,57.307,49.368,22.16,57.073,49.329,22.26,56.981,49.778,22.16,57.051,49.807,22.26,56.955,50.08,22.46,58.137,50.298,22.46,57.71,50.19,22.46,57.244,49.807,22.46,56.955,49.329,22.46,56.981,48.979,22.46,57.307,48.921,22.46,57.782,49.182,22.46,58.184,49.64,22.46,58.324,50,27.26,57.674,49.938,27.26,57.407,49.876,27.26,57.917,49.624,27.26,58.024,49.72,27.26,57.242,49.362,27.26,57.944,49.447,27.26,57.257,49.213,27.26,57.715,49.246,27.26,57.443,49.938,22.46,57.407,50,22.46,57.674,49.876,22.46,57.917,49.72,22.46,57.242,49.447,22.46,57.257,49.246,22.46,57.443,49.213,22.46,57.715,49.362,22.46,57.944,49.624,22.46,58.024,49.151,22.66,59.655,49.262,22.76,59.643,49.262,22.66,60.086,49.361,22.76,60.096,49.175,22.76,60.52,48.915,22.76,59.335,48.79,22.66,59.396,48.454,22.76,59.289,48.347,22.66,59.43,48.054,22.76,59.524,48.029,22.66,59.741,47.868,22.76,59.948,47.985,22.66,60.183,47.968,22.76,60.401,48.236,22.66,60.55,48.314,22.76,60.709,48.664,22.66,60.67,48.775,22.76,60.755,49.069,22.66,60.487,49.175,22.96,60.52,49.361,22.96,60.096,49.262,22.96,59.643,48.915,22.96,59.335,48.454,22.96,59.289,48.054,22.96,59.524,47.868,22.96,59.948,47.968,22.96,60.401,48.314,22.96,60.709,48.775,22.96,60.755,49.013,27.26,60.061,48.945,27.26,59.796,48.895,27.26,60.308,48.645,27.26,60.421,48.723,27.26,59.637,48.382,27.26,60.347,48.45,27.26,59.658,48.227,27.26,60.121,48.254,27.26,59.849,48.945,22.96,59.796,49.013,22.96,60.061,48.895,22.96,60.308,48.723,22.96,59.637,48.45,22.96,59.658,48.254,22.96,59.849,48.227,22.96,60.121,48.382,22.96,60.347,48.645,22.96,60.421,49.262,26.94,57.38,49.278,26.96,57.392,49.185,26.94,57.584,49.205,26.96,57.586,49.22,26.94,57.798,49.239,26.96,57.79,49.358,26.94,57.966,49.37,26.96,57.95,49.562,26.94,58.043,49.564,26.96,58.023,49.776,26.94,58.007,49.768,26.96,57.989,49.944,26.94,57.87,49.928,26.96,57.858,50.021,26.94,57.666,50.001,26.96,57.664,49.985,26.94,57.452,49.967,26.96,57.46,49.848,26.94,57.284,49.836,26.96,57.3,49.644,26.94,57.207,49.642,26.96,57.227,49.43,26.94,57.242,49.438,26.96,57.261,49.239,27.22,57.79,49.205,27.22,57.586,49.278,27.22,57.392,49.438,27.22,57.261,49.642,27.22,57.227,49.836,27.22,57.3,49.967,27.22,57.46,50.001,27.22,57.664,49.928,27.22,57.858,49.768,27.22,57.989,49.564,27.22,58.023,49.37,27.22,57.95,49.229,26.94,58.147,49.868,26.94,58.21,48.964,26.94,57.562,49.338,26.94,57.04,49.977,26.94,57.103,50.242,26.94,57.688,49.262,27.24,57.38,49.185,27.24,57.584,49.22,27.24,57.798,49.358,27.24,57.966,49.562,27.24,58.043,49.776,27.24,58.007,49.944,27.24,57.87,50.021,27.24,57.666,49.985,27.24,57.452,49.848,27.24,57.284,49.644,27.24,57.207,49.43,27.24,57.242,49.229,27.24,58.147,48.964,27.24,57.562,49.868,27.24,58.21,50.242,27.24,57.688,49.977,27.24,57.103,49.338,27.24,57.04,49.372,27.19,56.993,49.32,26.977,57.001,49.32,27.204,57.001,49.28,26.99,57.034,49.28,27.19,57.034,49.372,26.99,56.993,49.953,26.99,57.05,50.002,26.977,57.069,49.953,27.19,57.05,50.002,27.204,57.069,48.94,27.19,57.509,48.922,26.977,57.558,48.922,27.204,57.558,48.93,26.99,57.609,48.93,27.19,57.609,48.94,26.99,57.509,49.171,26.99,58.141,49.171,27.19,58.141,49.204,26.977,58.181,49.204,27.204,58.181,49.253,26.99,58.2,49.253,27.19,58.2,49.834,27.19,58.257,49.885,27.204,58.248,49.834,26.99,58.257,50.035,27.19,57.109,50.035,26.99,57.109,50.276,27.19,57.641,50.276,26.99,57.641,50.284,27.204,57.692,50.266,27.19,57.741,50.284,26.977,57.692,50.266,26.99,57.741,49.925,26.99,58.216,49.885,26.977,58.248,49.925,27.19,58.216,48.273,26.94,59.777,48.29,26.96,59.789,48.197,26.94,59.981,48.217,26.96,59.983,48.232,26.94,60.195,48.25,26.96,60.187,48.37,26.94,60.363,48.382,26.96,60.347,48.574,26.94,60.44,48.576,26.96,60.42,48.788,26.94,60.405,48.78,26.96,60.386,48.956,26.94,60.267,48.94,26.96,60.255,49.033,26.94,60.063,49.013,26.96,60.061,48.997,26.94,59.849,48.979,26.96,59.857,48.86,26.94,59.681,48.848,26.96,59.697,48.656,26.94,59.604,48.654,26.96,59.624,48.442,26.94,59.639,48.45,26.96,59.658,48.25,27.22,60.187,48.217,27.22,59.983,48.29,27.22,59.789,48.45,27.22,59.658,48.654,27.22,59.624,48.848,27.22,59.697,48.979,27.22,59.857,49.013,27.22,60.061,48.94,27.22,60.255,48.78,27.22,60.386,48.576,27.22,60.42,48.382,27.22,60.347,48.241,26.94,60.544,48.88,26.94,60.607,47.976,26.94,59.959,48.35,26.94,59.437,48.989,26.94,59.5,49.254,26.94,60.085,48.273,27.24,59.777,48.197,27.24,59.981,48.232,27.24,60.195,48.37,27.24,60.363,48.574,27.24,60.44,48.788,27.24,60.405,48.956,27.24,60.267,49.033,27.24,60.063,48.997,27.24,59.849,48.86,27.24,59.681,48.656,27.24,59.604,48.442,27.24,59.639,48.241,27.24,60.544,47.976,27.24,59.959,48.88,27.24,60.607,49.254,27.24,60.085,48.989,27.24,59.5,48.35,27.24,59.437,48.383,27.19,59.39,48.332,26.977,59.398,48.332,27.204,59.398,48.292,26.99,59.431,48.292,27.19,59.431,48.383,26.99,59.39,48.965,26.99,59.447,49.014,26.977,59.466,48.965,27.19,59.447,49.014,27.204,59.466,47.952,27.19,59.906,47.934,26.977,59.955,47.934,27.204,59.955,47.942,26.99,60.006,47.942,27.19,60.006,47.952,26.99,59.906,48.183,26.99,60.538,48.183,27.19,60.538,48.216,26.977,60.578,48.216,27.204,60.578,48.264,26.99,60.597,48.264,27.19,60.597,48.846,27.19,60.654,48.897,27.204,60.646,48.846,26.99,60.654,49.046,27.19,59.506,49.046,26.99,59.506,49.288,27.19,60.038,49.288,26.99,60.038,49.296,27.204,60.089,49.278,27.19,60.138,49.296,26.977,60.089,49.278,26.99,60.138,48.937,26.99,60.613,48.897,26.977,60.646,48.937,27.19,60.613],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475]}}};var Xr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},og=new dr(-1,1,1,-1,0,1),jh=class extends at{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},ag=new jh,Jt=class{constructor(e){this._mesh=new Ke(ag,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,og)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Bl=class extends Pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jt(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zo=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Rt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:At}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bl(Xr),this.copyPass.material.blending=_t,this.clock=new vr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zo!==void 0&&(o instanceof zo?n=!0:o instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ko={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Q},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Fe},cameraProjectionMatrixInverse:{value:new Fe},cameraWorldMatrix:{value:new Fe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ho={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Vl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function C1(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=lg(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,u=new A(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(u.x*.5+.5)*255,s[o*4+1]=(u.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Tt(s,e,e);return r.wrapS=Lt,r.wrapT=Lt,r.needsUpdate=!0,r}function lg(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Vo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Jh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Q},cameraProjectionMatrixInverse:{value:new Fe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Jh(i,e,t){let n=cg(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function cg(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var Gl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),u=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+u)*h,c=l-f,d=u-f,g=e-c,x=t-d,p,m;g>x?(p=1,m=0):(p=0,m=1);let _=g-p+h,v=x-m+h,y=g-1+2*h,T=x-1+2*h,S=l&255,w=u&255,D=this.perm[S+this.perm[w]]%12,b=this.perm[S+p+this.perm[w+m]]%12,M=this.perm[S+1+this.perm[w+1]]%12,L=.5-g*g-x*x;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[D],g,x));let N=.5-_*_-v*v;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[b],_,v));let k=.5-y*y-T*T;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[M],y,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,u=(e+t+n)*.3333333333333333,h=Math.floor(e+u),f=Math.floor(t+u),c=Math.floor(n+u),d=1/6,g=(h+f+c)*d,x=h-g,p=f-g,m=c-g,_=e-x,v=t-p,y=n-m,T,S,w,D,b,M;_>=v?v>=y?(T=1,S=0,w=0,D=1,b=1,M=0):_>=y?(T=1,S=0,w=0,D=1,b=0,M=1):(T=0,S=0,w=1,D=1,b=0,M=1):v<y?(T=0,S=0,w=1,D=0,b=1,M=1):_<y?(T=0,S=1,w=0,D=0,b=1,M=1):(T=0,S=1,w=0,D=1,b=1,M=0);let L=_-T+d,N=v-S+d,k=y-w+d,I=_-D+2*d,O=v-b+2*d,G=y-M+2*d,J=_-1+3*d,K=v-1+3*d,q=y-1+3*d,ie=h&255,re=f&255,_e=c&255,j=this.perm[ie+this.perm[re+this.perm[_e]]]%12,le=this.perm[ie+T+this.perm[re+S+this.perm[_e+w]]]%12,be=this.perm[ie+D+this.perm[re+b+this.perm[_e+M]]]%12,Ie=this.perm[ie+1+this.perm[re+1+this.perm[_e+1]]]%12,Te=.6-_*_-v*v-y*y;Te<0?s=0:(Te*=Te,s=Te*Te*this.dot3(this.grad3[j],_,v,y));let ke=.6-L*L-N*N-k*k;ke<0?r=0:(ke*=ke,r=ke*ke*this.dot3(this.grad3[le],L,N,k));let Ge=.6-I*I-O*O-G*G;Ge<0?o=0:(Ge*=Ge,o=Ge*Ge*this.dot3(this.grad3[be],I,O,G));let Re=.6-J*J-K*K-q*q;return Re<0?a=0:(Re*=Re,a=Re*Re*this.dot3(this.grad3[Ie],J,K,q)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20,h,f,c,d,g,x=(e+t+n+s)*l,p=Math.floor(e+x),m=Math.floor(t+x),_=Math.floor(n+x),v=Math.floor(s+x),y=(p+m+_+v)*u,T=p-y,S=m-y,w=_-y,D=v-y,b=e-T,M=t-S,L=n-w,N=s-D,k=b>M?32:0,I=b>L?16:0,O=M>L?8:0,G=b>N?4:0,J=M>N?2:0,K=L>N?1:0,q=k+I+O+G+J+K,ie=o[q][0]>=3?1:0,re=o[q][1]>=3?1:0,_e=o[q][2]>=3?1:0,j=o[q][3]>=3?1:0,le=o[q][0]>=2?1:0,be=o[q][1]>=2?1:0,Ie=o[q][2]>=2?1:0,Te=o[q][3]>=2?1:0,ke=o[q][0]>=1?1:0,Ge=o[q][1]>=1?1:0,Re=o[q][2]>=1?1:0,qe=o[q][3]>=1?1:0,U=b-ie+u,ge=M-re+u,te=L-_e+u,de=N-j+u,ee=b-le+2*u,Ue=M-be+2*u,Me=L-Ie+2*u,R=N-Te+2*u,E=b-ke+3*u,H=M-Ge+3*u,oe=L-Re+3*u,ue=N-qe+3*u,ae=b-1+4*u,Pe=M-1+4*u,se=L-1+4*u,Ae=N-1+4*u,Le=p&255,Ye=m&255,ce=_&255,Je=v&255,F=a[Le+a[Ye+a[ce+a[Je]]]]%32,he=a[Le+ie+a[Ye+re+a[ce+_e+a[Je+j]]]]%32,ve=a[Le+le+a[Ye+be+a[ce+Ie+a[Je+Te]]]]%32,me=a[Le+ke+a[Ye+Ge+a[ce+Re+a[Je+qe]]]]%32,Be=a[Le+1+a[Ye+1+a[ce+1+a[Je+1]]]]%32,je=.6-b*b-M*M-L*L-N*N;je<0?h=0:(je*=je,h=je*je*this.dot4(r[F],b,M,L,N));let Qe=.6-U*U-ge*ge-te*te-de*de;Qe<0?f=0:(Qe*=Qe,f=Qe*Qe*this.dot4(r[he],U,ge,te,de));let z=.6-ee*ee-Ue*Ue-Me*Me-R*R;z<0?c=0:(z*=z,c=z*z*this.dot4(r[ve],ee,Ue,Me,R));let B=.6-E*E-H*H-oe*oe-ue*ue;B<0?d=0:(B*=B,d=B*B*this.dot4(r[me],E,H,oe,ue));let P=.6-ae*ae-Pe*Pe-se*se-Ae*Ae;return P<0?g=0:(P*=P,g=P*P*this.dot4(r[Be],ae,Pe,se,Ae)),27*(h+f+c+d+g)}};var Go=class i extends Pn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=C1(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Rt(this.width,this.height,{type:At}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new St({defines:Object.assign({},ko.defines),uniforms:Zn.clone(ko.uniforms),vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,blending:_t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new nl,this.normalMaterial.blending=_t,this.pdMaterial=new St({defines:Object.assign({},Vo.defines),uniforms:Zn.clone(Vo.uniforms),vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new St({defines:Object.assign({},Ho.defines),uniforms:Zn.clone(Ho.uniforms),vertexShader:Ho.vertexShader,fragmentShader:Ho.fragmentShader,blending:_t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:Zn.clone(Xr.uniforms),vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ll,blendDst:_r,blendEquation:Fn,blendSrcAlpha:al,blendDstAlpha:_r,blendEquationAlpha:Fn}),this.blendMaterial=new St({uniforms:Zn.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ch,blendSrc:ll,blendDst:_r,blendEquation:Fn,blendSrcAlpha:al,blendDstAlpha:_r,blendEquationAlpha:Fn}),this.fsQuad=new Jt(null),this.originalClearColor=new Ve,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new pr,this.depthTexture.format=Oi,this.depthTexture.type=Si,this.normalRenderTarget=new Rt(this.width,this.height,{minFilter:Ze,magFilter:Ze,type:At,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Jh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=_t,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=_t,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=_t,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=_t,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=_t,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Gl,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,u=a;s[(o*e+a)*4]=(t.noise(l,u)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,u)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,u+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,u+e)*.5+.5)*255}let r=new Tt(s,e,e,tt,gn);return r.wrapS=Lt,r.wrapT=Lt,r.needsUpdate=!0,r}};Go.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var P1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wl=class extends Pn{constructor(){super();let e=P1;this.uniforms=Zn.clone(e.uniforms),this.material=new tl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Jt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Xl(i,e,t=0){if(i.isInterleavedBufferAttribute){let n=i.itemSize;for(let s=0,r=i.count;s<r;s++){let o=s+t;e.setX(o,i.getX(s)),n>=2&&e.setY(o,i.getY(s)),n>=3&&e.setZ(o,i.getZ(s)),n>=4&&e.setW(o,i.getW(s))}}else{let n=e.array,s=n.constructor,r=n.BYTES_PER_ELEMENT*i.itemSize*t;new s(n.buffer,r,i.array.length).set(i.array)}}function Cs(i,e=null){let t=i.array.constructor,n=i.normalized,s=i.itemSize,r=e===null?i.count:e;return new ut(new t(s*r),s,n)}function Ki(i,e){if(!i&&!e)return!0;if(!!i!=!!e)return!1;let t=i.count===e.count,n=i.normalized===e.normalized,s=i.array.constructor===e.array.constructor,r=i.itemSize===e.itemSize;return!(!t||!n||!s||!r)}function ug(i){let e=i[0].index!==null,t=new Set(Object.keys(i[0].attributes));if(!i[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let n=0;n<i.length;++n){let s=i[n],r=0;if(e!==(s.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let o in s.attributes){if(!t.has(o))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+o+'" attribute exists among all geometries, or in none of them.');r++}if(r!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function hg(i){let e=0;for(let t=0,n=i.length;t<n;t++)e+=i[t].getIndex().count;return e}function fg(i){let e=0;for(let t=0,n=i.length;t<n;t++)e+=i[t].getAttribute("position").count;return e}function dg(i,e,t){i.index&&i.index.count!==e&&i.setIndex(null);let n=i.attributes;for(let s in n)n[s].count!==t&&i.deleteAttribute(s)}function I1(i,e={},t=new at){let{useGroups:n=!1,forceUpdate:s=!1,skipAssigningAttributes:r=[],overwriteIndex:o=!0}=e;ug(i);let a=i[0].index!==null,l=a?hg(i):-1,u=fg(i);if(dg(t,l,u),n){let f=0;for(let c=0,d=i.length;c<d;c++){let g=i[c],x;a?x=g.getIndex().count:x=g.getAttribute("position").count,t.addGroup(f,x,c),f+=x}}if(a){let f=!1;if(t.index||(t.setIndex(new ut(new Uint32Array(l),1,!1)),f=!0),f||o){let c=0,d=0,g=t.getIndex();for(let x=0,p=i.length;x<p;x++){let m=i[x],_=m.getIndex();if(!(!s&&!f&&r[x]))for(let y=0;y<_.count;++y)g.setX(c+y,_.getX(y)+d);c+=_.count,d+=m.getAttribute("position").count}}}let h=Object.keys(i[0].attributes);for(let f=0,c=h.length;f<c;f++){let d=!1,g=h[f];if(!t.getAttribute(g)){let m=i[0].getAttribute(g);t.setAttribute(g,Cs(m,u)),d=!0}let x=0,p=t.getAttribute(g);for(let m=0,_=i.length;m<_;m++){let v=i[m],y=!s&&!d&&r[m],T=v.getAttribute(g);y||Xl(T,p,x),x+=T.count}}}function L1(i,e,t){let n=i.index,r=i.attributes.position.count,o=n?n.count:r,a=i.groups;a.length===0&&(a=[{count:o,start:0,materialIndex:0}]);let l=i.getAttribute("materialIndex");if(!l||l.count!==r){let h;t.length<=255?h=new Uint8Array(r):h=new Uint16Array(r),l=new ut(h,1,!1),i.deleteAttribute("materialIndex"),i.setAttribute("materialIndex",l)}let u=l.array;for(let h=0;h<a.length;h++){let f=a[h],c=f.start,d=f.count,g=Math.min(d,o-c),x=Array.isArray(e)?e[f.materialIndex]:e,p=t.indexOf(x);for(let m=0;m<g;m++){let _=c+m;n&&(_=n.getX(_)),u[_]=p}}}function D1(i,e){if(!i.index){let t=i.attributes.position.count,n=new Array(t);for(let s=0;s<t;s++)n[s]=s;i.setIndex(n)}if(!i.attributes.normal&&e&&e.includes("normal")&&i.computeVertexNormals(),!i.attributes.uv&&e&&e.includes("uv")){let t=i.attributes.position.count;i.setAttribute("uv",new ut(new Float32Array(t*2),2,!1))}if(!i.attributes.uv2&&e&&e.includes("uv2")){let t=i.attributes.position.count;i.setAttribute("uv2",new ut(new Float32Array(t*2),2,!1))}if(!i.attributes.tangent&&e&&e.includes("tangent"))if(i.attributes.uv&&i.attributes.normal)i.computeTangents();else{let t=i.attributes.position.count;i.setAttribute("tangent",new ut(new Float32Array(t*4),4,!1))}if(!i.attributes.color&&e&&e.includes("color")){let t=i.attributes.position.count,n=new Float32Array(t*4);n.fill(1),i.setAttribute("color",new ut(n,4))}}function qr(i){let e=0;if(i.byteLength!==0){let t=new Uint8Array(i);for(let n=0;n<i.byteLength;n++){let s=t[n];e=(e<<5)-e+s,e|=0}}return e}function N1(i){let e=i.uuid,t=Object.values(i.attributes);i.index&&(t.push(i.index),e+=`index|${i.index.version}`);let n=Object.keys(t).sort();for(let s of n){let r=t[s];e+=`${s}_${r.version}|`}return e}function F1(i){let e=i.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${qr(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}var ql=class{constructor(e=null){this.matrixWorld=new Fe,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=N1(t),this.primitiveCount=n,this.skeletonHash=F1(e)}didChange(e){let t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===N1(t)&&this.skeletonHash===F1(e)&&this.primitiveCount===n)}};var Ps=new A,Is=new A,Ls=new A,U1=new mt,Yl=new A,Kh=new A,O1=new mt,B1=new mt,$l=new Fe,z1=new Fe;function k1(i,e,t){let n=i.skeleton,s=i.geometry,r=n.bones,o=n.boneInverses;O1.fromBufferAttribute(s.attributes.skinIndex,e),B1.fromBufferAttribute(s.attributes.skinWeight,e),$l.elements.fill(0);for(let a=0;a<4;a++){let l=B1.getComponent(a);if(l!==0){let u=O1.getComponent(a);z1.multiplyMatrices(r[u].matrixWorld,o[u]),pg($l,z1,l)}}return $l.multiply(i.bindMatrix).premultiply(i.bindMatrixInverse),t.transformDirection($l),t}function Qh(i,e,t,n,s){Yl.set(0,0,0);for(let r=0,o=i.length;r<o;r++){let a=e[r],l=i[r];a!==0&&(Kh.fromBufferAttribute(l,n),t?Yl.addScaledVector(Kh,a):Yl.addScaledVector(Kh.sub(s),a))}s.add(Yl)}function pg(i,e,t){let n=i.elements,s=e.elements;for(let r=0,o=s.length;r<o;r++)n[r]+=s[r]*t}function mg(i){let{index:e,attributes:t}=i;if(e)for(let n=0,s=e.count;n<s;n+=3){let r=e.getX(n),o=e.getX(n+2);e.setX(n,o),e.setX(n+2,r)}else for(let n in t){let s=t[n],r=s.itemSize;for(let o=0,a=s.count;o<a;o+=3)for(let l=0;l<r;l++){let u=s.getComponent(o,l),h=s.getComponent(o+2,l);s.setComponent(o,l,h),s.setComponent(o+2,l,u)}}return i}function H1(i,e={},t=new at){e={applyWorldTransforms:!0,attributes:[],...e};let n=i.geometry,s=e.applyWorldTransforms,r=e.attributes.includes("normal"),o=e.attributes.includes("tangent"),a=n.attributes,l=t.attributes;for(let _ in t.attributes)(!e.attributes.includes(_)||!(_ in n.attributes))&&t.deleteAttribute(_);!t.index&&n.index&&(t.index=n.index.clone()),l.position||t.setAttribute("position",Cs(a.position)),r&&!l.normal&&a.normal&&t.setAttribute("normal",Cs(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",Cs(a.tangent)),Ki(n.index,t.index),Ki(a.position,l.position),r&&Ki(a.normal,l.normal),o&&Ki(a.tangent,l.tangent);let u=a.position,h=r?a.normal:null,f=o?a.tangent:null,c=n.morphAttributes.position,d=n.morphAttributes.normal,g=n.morphAttributes.tangent,x=n.morphTargetsRelative,p=i.morphTargetInfluences,m=new rt;m.getNormalMatrix(i.matrixWorld),n.index&&t.index.array.set(n.index.array);for(let _=0,v=a.position.count;_<v;_++)Ps.fromBufferAttribute(u,_),h&&Is.fromBufferAttribute(h,_),f&&(U1.fromBufferAttribute(f,_),Ls.fromBufferAttribute(f,_)),p&&(c&&Qh(c,p,x,_,Ps),d&&Qh(d,p,x,_,Is),g&&Qh(g,p,x,_,Ls)),i.isSkinnedMesh&&(i.applyBoneTransform(_,Ps),h&&k1(i,_,Is),f&&k1(i,_,Ls)),s&&Ps.applyMatrix4(i.matrixWorld),l.position.setXYZ(_,Ps.x,Ps.y,Ps.z),h&&(s&&Is.applyNormalMatrix(m),l.normal.setXYZ(_,Is.x,Is.y,Is.z)),f&&(s&&Ls.transformDirection(i.matrixWorld),l.tangent.setXYZW(_,Ls.x,Ls.y,Ls.z,U1.w));for(let _ in e.attributes){let v=e.attributes[_];v==="position"||v==="tangent"||v==="normal"||!(v in a)||(l[v]||t.setAttribute(v,Cs(a[v])),Ki(a[v],l[v]),Xl(a[v],l[v]))}return i.matrixWorld.determinant()<0&&mg(t),t}var Zl=class extends at{constructor(){super(),this.version=0,this.hash=null,this._diff=new ql}isCompatible(e,t){let n=e.geometry;for(let s=0;s<t.length;s++){let r=t[s],o=n.attributes[r],a=this.attributes[r];if(o&&!Ki(o,a))return!1}return!0}updateFrom(e,t){let n=this._diff;return n.didChange(e)?(H1(e,t,this),n.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};var Jl=0,ef=1,tf=2;function gg(i,e){for(let t=0,n=i.length;t<n;t++)i[t].traverseVisible(r=>{r.isMesh&&e(r)})}function xg(i){let e=[];for(let t=0,n=i.length;t<n;t++){let s=i[t];Array.isArray(s.material)?e.push(...s.material):e.push(s.material)}return e}function vg(i,e,t){if(i.length===0){e.setIndex(null);let n=e.attributes;for(let s in n)e.deleteAttribute(s);for(let s in t.attributes)e.setAttribute(t.attributes[s],new ut(new Float32Array(0),4,!1))}else I1(i,t,e);for(let n in e.attributes)e.attributes[n].needsUpdate=!0}var jl=class{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){let e=new On,t=new at;t.setAttribute("position",new ut(new Float32Array(9),3)),this._dummyMesh=new Ke(t,e)}return this._dummyMesh}_getMeshes(){let e=[];return gg(this.objects,t=>{e.push(t)}),e.sort((t,n)=>t.uuid>n.uuid?1:t.uuid<n.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){let{_intermediateGeometry:e}=this,t=this._getMeshes(),n=new Set(e.keys()),s={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let r=0,o=t.length;r<o;r++){let a=t[r],l=a.uuid;n.delete(l);let u=e.get(l);(!u||!u.isCompatible(a,this.attributes))&&(u&&u.dispose(),u=new Zl,e.set(l,u)),u.updateFrom(a,s)&&this.generateMissingAttributes&&D1(u,this.attributes)}n.forEach(r=>{e.delete(r)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new at){let{useGroups:t,overwriteIndex:n,_intermediateGeometry:s,_geometryMergeSets:r}=this,o=this._getMeshes(),a=[],l=[],u=r.get(e)||[];this._updateIntermediateGeometries();let h=!1;o.length!==u.length&&(h=!0);for(let c=0,d=o.length;c<d;c++){let g=o[c],x=s.get(g.uuid);l.push(x);let p=u[c];!p||p.uuid!==x.uuid?(a.push(!1),h=!0):p.version!==x.version?a.push(!1):a.push(!0)}vg(l,e,{useGroups:t,forceUpdate:h,skipAssigningAttributes:a,overwriteIndex:n}),h&&e.dispose(),r.set(e,l.map(c=>({version:c.version,uuid:c.uuid})));let f=Jl;return h?f=tf:a.includes(!1)&&(f=ef),{changeType:f,materials:xg(o),geometry:e}}};function _g(i){let e=new Set;for(let t=0,n=i.length;t<n;t++){let s=i[t];for(let r in s){let o=s[r];o&&o.isTexture&&e.add(o)}}return Array.from(e)}function yg(i){let e=[],t=new Set;for(let s=0,r=i.length;s<r;s++)i[s].traverse(o=>{o.visible&&(o.isRectAreaLight||o.isSpotLight||o.isPointLight||o.isDirectionalLight)&&(e.push(o),o.iesMap&&t.add(o.iesMap))});let n=Array.from(t).sort((s,r)=>s.uuid<r.uuid?1:s.uuid>r.uuid?-1:0);return{lights:e,iesTextures:n}}var Kl=class{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new at,this.staticGeometryGenerator=new jl(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;let t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){let{staticGeometryGenerator:t,geometry:n,attributes:s}=this,r=t.objects;t.attributes=s,r.forEach(f=>{f.traverse(c=>{c.isSkinnedMesh&&c.skeleton&&c.skeleton.update()})});let o=t.generate(n),a=o.materials,l=_g(a),{lights:u,iesTextures:h}=yg(r);if(o.changeType!==Jl&&L1(n,a,a),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(o.changeType===tf){let f={strategy:2,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(n,f):this.bvh=new ci(n,f)}else o.changeType===ef&&this.bvh.refit()}return{bvhChanged:o.changeType!==Jl,bvh:this.bvh,lights:u,iesTextures:h,geometry:n,materials:a,textures:l,objects:r}}};var Qi=class extends St{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(let t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(n){this.uniforms[t].value=n}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}};var Ql=class extends Qi{constructor(e){super({blending:_t,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}};function ec(i=1){let e="uint";return i>1&&(e="uvec"+i),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function tc(i=1){let e="uint",t="float",n="",s=".r",r="1u";return i>1&&(e="uvec"+i,t="vec"+i,n=i+"",i===2?(s=".rg",r="uvec2( 1u, 2u )"):i===3?(s=".rgb",r="uvec3( 1u, 2u, 3u )"):(s="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${s};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}var nc=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${ec(1)}
	${ec(2)}
	${ec(3)}
	${ec(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,V1=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,G1=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${tc(1)}
	${tc(2)}
	${tc(3)}
	${tc(4)}

`;var nf=class extends Qi{constructor(){super({blending:_t,uniforms:{resolution:{value:new Q}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${nc}
				${V1}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},ic=class{generate(e,t=256){let n=new Rt(t,t,{type:ct,format:tt,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),s=e.getRenderTarget();e.setRenderTarget(n);let r=new Jt(new nf);return r.material.resolution.set(t,t),r.render(e),e.setRenderTarget(s),r.dispose(),n}};var sc=class extends Dt{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}};var rc=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof sc?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function oc(i){let e=new Uint16Array(i.length);for(let t=0,n=i.length;t<n;++t)e[t]=kn.toHalfFloat(i[t]);return e}function W1(i,e,t=0,n=i.length){let s=t,r=t+n-1;for(;s<r;){let o=s+r>>1;i[o]<e?s=o+1:r=o}return s-t}function bg(i,e,t){return .2126*i+.7152*e+.0722*t}function Mg(i,e=At){let t=i.clone();t.source=new hr({...t.image});let{width:n,height:s,data:r}=t.image,o=r;if(t.type!==e){e===At?o=new Uint16Array(r.length):o=new Float32Array(r.length);let a;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?a=2**(8*r.BYTES_PER_ELEMENT-1)-1:a=2**(8*r.BYTES_PER_ELEMENT)-1;for(let l=0,u=r.length;l<u;l++){let h=r[l];t.type===At&&(h=kn.fromHalfFloat(r[l])),t.type!==ct&&t.type!==At&&(h/=a),e===At&&(o[l]=kn.toHalfFloat(h))}t.image.data=o,t.type=e}if(t.flipY){let a=o;o=o.slice();for(let l=0;l<s;l++)for(let u=0;u<n;u++){let h=s-l-1,f=4*(l*n+u),c=4*(h*n+u);o[c+0]=a[f+0],o[c+1]=a[f+1],o[c+2]=a[f+2],o[c+3]=a[f+3]}t.flipY=!1,t.image.data=o}return t}var ac=class{constructor(){let e=new Tt(oc(new Float32Array([0,0,0,0])),1,1);e.type=At,e.format=tt,e.minFilter=Mt,e.magFilter=Mt,e.wrapS=Lt,e.wrapT=Lt,e.generateMipmaps=!1,e.needsUpdate=!0;let t=new Tt(oc(new Float32Array([0,1])),1,2);t.type=At,t.format=Xi,t.minFilter=Mt,t.magFilter=Mt,t.generateMipmaps=!1,t.needsUpdate=!0;let n=new Tt(oc(new Float32Array([0,0,1,1])),2,2);n.type=At,n.format=Xi,n.minFilter=Mt,n.magFilter=Mt,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){let t=Mg(e);t.wrapS=Lt,t.wrapT=It;let{width:n,height:s,data:r}=t.image,o=new Float32Array(n*s),a=new Float32Array(n*s),l=new Float32Array(s),u=new Float32Array(s),h=0,f=0;for(let p=0;p<s;p++){let m=0;for(let _=0;_<n;_++){let v=p*n+_,y=kn.fromHalfFloat(r[4*v+0]),T=kn.fromHalfFloat(r[4*v+1]),S=kn.fromHalfFloat(r[4*v+2]),w=bg(y,T,S);m+=w,h+=w,o[v]=w,a[v]=m}if(m!==0)for(let _=p*n,v=p*n+n;_<v;_++)o[_]/=m,a[_]/=m;f+=m,l[p]=m,u[p]=f}if(f!==0)for(let p=0,m=l.length;p<m;p++)l[p]/=f,u[p]/=f;let c=new Uint16Array(s),d=new Uint16Array(n*s);for(let p=0;p<s;p++){let m=(p+1)/s,_=W1(u,m);c[p]=kn.toHalfFloat((_+.5)/s)}for(let p=0;p<s;p++)for(let m=0;m<n;m++){let _=p*n+m,v=(m+1)/n,y=W1(a,v,p*n,n);d[_]=kn.toHalfFloat((y+.5)/n)}this.dispose();let{marginalWeights:g,conditionalWeights:x}=this;g.image={width:s,height:1,data:c},g.needsUpdate=!0,x.image={width:n,height:s,data:d},x.needsUpdate=!0,this.totalSum=h,this.map=t}};var sf=6,Sg=0,Tg=1,wg=2,Eg=3,Ag=4,Jn=new A,bn=new A,X1=new Fe,Yr=new un,q1=new A,$r=new A,Rg=new A(0,1,0),lc=class{constructor(){let e=new Tt(new Float32Array(4),1,1);e.format=tt,e.type=ct,e.wrapS=It,e.wrapT=It,e.generateMipmaps=!1,e.minFilter=Ze,e.magFilter=Ze,this.tex=e,this.count=0}updateFrom(e,t=[]){let n=this.tex,s=Math.max(e.length*sf,1),r=Math.ceil(Math.sqrt(s));n.image.width!==r&&(n.dispose(),n.image.data=new Float32Array(r*r*4),n.image.width=r,n.image.height=r);let o=n.image.data;for(let l=0,u=e.length;l<u;l++){let h=e[l],f=l*sf*4,c=0;for(let g=0;g<sf*4;g++)o[f+g]=0;h.getWorldPosition(bn),o[f+c++]=bn.x,o[f+c++]=bn.y,o[f+c++]=bn.z;let d=Sg;if(h.isRectAreaLight&&h.isCircular?d=Tg:h.isSpotLight?d=wg:h.isDirectionalLight?d=Eg:h.isPointLight&&(d=Ag),o[f+c++]=d,o[f+c++]=h.color.r,o[f+c++]=h.color.g,o[f+c++]=h.color.b,o[f+c++]=h.intensity,h.getWorldQuaternion(Yr),h.isRectAreaLight)Jn.set(h.width,0,0).applyQuaternion(Yr),o[f+c++]=Jn.x,o[f+c++]=Jn.y,o[f+c++]=Jn.z,c++,bn.set(0,h.height,0).applyQuaternion(Yr),o[f+c++]=bn.x,o[f+c++]=bn.y,o[f+c++]=bn.z,o[f+c++]=Jn.cross(bn).length()*(h.isCircular?Math.PI/4:1);else if(h.isSpotLight){let g=h.radius||0;q1.setFromMatrixPosition(h.matrixWorld),$r.setFromMatrixPosition(h.target.matrixWorld),X1.lookAt(q1,$r,Rg),Yr.setFromRotationMatrix(X1),Jn.set(1,0,0).applyQuaternion(Yr),o[f+c++]=Jn.x,o[f+c++]=Jn.y,o[f+c++]=Jn.z,c++,bn.set(0,1,0).applyQuaternion(Yr),o[f+c++]=bn.x,o[f+c++]=bn.y,o[f+c++]=bn.z,o[f+c++]=Math.PI*g*g,o[f+c++]=g,o[f+c++]=h.decay,o[f+c++]=h.distance,o[f+c++]=Math.cos(h.angle),o[f+c++]=Math.cos(h.angle*(1-h.penumbra)),o[f+c++]=h.iesMap?t.indexOf(h.iesMap):-1}else if(h.isPointLight){let g=Jn.setFromMatrixPosition(h.matrixWorld);o[f+c++]=g.x,o[f+c++]=g.y,o[f+c++]=g.z,c++,c+=4,c+=1,o[f+c++]=h.decay,o[f+c++]=h.distance}else if(h.isDirectionalLight){let g=Jn.setFromMatrixPosition(h.matrixWorld),x=bn.setFromMatrixPosition(h.target.matrixWorld);$r.subVectors(g,x).normalize(),o[f+c++]=$r.x,o[f+c++]=$r.y,o[f+c++]=$r.z}}this.count=e.length;let a=qr(o.buffer);return this.hash!==a?(this.hash=a,n.needsUpdate=!0,!0):!1}};function Y1(i,e,t,n,s){if(e>n)throw new Error;let r=i.length/e,o=i.constructor.BYTES_PER_ELEMENT*8,a=1;switch(i.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**o-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(o-1)-1;break}for(let l=0;l<r;l++){let u=4*l,h=e*l;for(let f=0;f<n;f++)t[s+u+f]=e>=f+1?i[h+f]/a:0}}var cc=class extends xs{constructor(){super(),this._textures=[],this.type=ct,this.format=tt,this.internalFormat="RGBA32F"}updateAttribute(e,t){let n=this._textures[e];n.updateFrom(t);let s=n.image,r=this.image;if(s.width!==r.width||s.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:o,height:a,data:l}=r,h=o*a*4*e,f=t.itemSize;f===3&&(f=4),Y1(n.image.data,f,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(e){let t=e[0].count,n=e.length;for(let f=0,c=n;f<c;f++)if(e[f].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let s=this._textures;for(;s.length<n;){let f=new Wr;s.push(f)}for(;s.length>n;)s.pop();for(let f=0,c=n;f<c;f++)s[f].updateFrom(e[f]);let o=s[0].image,a=this.image;(o.width!==a.width||o.height!==a.height||o.depth!==n)&&(a.width=o.width,a.height=o.height,a.depth=n,a.data=new Float32Array(a.width*a.height*a.depth*4));let{data:l,width:u,height:h}=a;for(let f=0,c=n;f<c;f++){let d=s[f],x=u*h*4*f,p=e[f].itemSize;p===3&&(p=4),Y1(d.image.data,p,l,4,x)}this.dispose(),this.needsUpdate=!0}};var uc=class extends cc{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,n,s){this.setAttributes([e,t,n,s])}};function rf(i,e){return i.uuid<e.uuid?1:i.uuid>e.uuid?-1:0}function hc(i){return`${i.source.uuid}:${i.colorSpace}`}function Cg(i){let e=new Set,t=[];for(let n=0,s=i.length;n<s;n++){let r=i[n],o=hc(r);e.has(o)||(e.add(o),t.push(r))}return t}function $1(i){let e=i.map(n=>n.iesMap||null).filter(n=>n),t=new Set(e);return Array.from(t).sort(rf)}function Z1(i){let e=new Set;for(let n=0,s=i.length;n<s;n++){let r=i[n];for(let o in r){let a=r[o];a&&a.isTexture&&e.add(a)}}let t=Array.from(e);return Cg(t).sort(rf)}function j1(i){let e=[];return i.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(rf)}var K1=45,J1=K1*4,of=class{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}},fc=class extends Tt{constructor(){super(new Float32Array(4),1,1),this.format=tt,this.type=ct,this.wrapS=It,this.wrapT=It,this.minFilter=Ze,this.magFilter=Ze,this.generateMipmaps=!1,this.features=new of}updateFrom(e,t){function n(g,x,p=-1){if(x in g&&g[x]){let m=hc(g[x]);return f[m]}else return p}function s(g,x,p){return x in g?g[x]:p}function r(g,x,p,m){let _=g[x]&&g[x].isTexture?g[x]:null;if(_){_.matrixAutoUpdate&&_.updateMatrix();let v=_.matrix.elements,y=0;p[m+y++]=v[0],p[m+y++]=v[3],p[m+y++]=v[6],y++,p[m+y++]=v[1],p[m+y++]=v[4],p[m+y++]=v[7],y++}return 8}let o=0,a=e.length*K1,l=Math.ceil(Math.sqrt(a))||1,{image:u,features:h}=this,f={};for(let g=0,x=t.length;g<x;g++)f[hc(t[g])]=g;u.width!==l&&(this.dispose(),u.data=new Float32Array(l*l*4),u.width=l,u.height=l);let c=u.data;h.reset();for(let g=0,x=e.length;g<x;g++){let p=e[g];if(p.isFogVolumeMaterial){h.setUsed("FOG");for(let v=0;v<J1;v++)c[o+v]=0;c[o+0+0]=p.color.r,c[o+0+1]=p.color.g,c[o+0+2]=p.color.b,c[o+8+3]=s(p,"emissiveIntensity",0),c[o+12+0]=p.emissive.r,c[o+12+1]=p.emissive.g,c[o+12+2]=p.emissive.b,c[o+52+1]=p.density,c[o+52+3]=0,c[o+56+2]=4,o+=J1;continue}c[o++]=p.color.r,c[o++]=p.color.g,c[o++]=p.color.b,c[o++]=n(p,"map"),c[o++]=s(p,"metalness",0),c[o++]=n(p,"metalnessMap"),c[o++]=s(p,"roughness",0),c[o++]=n(p,"roughnessMap"),c[o++]=s(p,"ior",1.5),c[o++]=s(p,"transmission",0),c[o++]=n(p,"transmissionMap"),c[o++]=s(p,"emissiveIntensity",0),"emissive"in p?(c[o++]=p.emissive.r,c[o++]=p.emissive.g,c[o++]=p.emissive.b):(c[o++]=0,c[o++]=0,c[o++]=0),c[o++]=n(p,"emissiveMap"),c[o++]=n(p,"normalMap"),"normalScale"in p?(c[o++]=p.normalScale.x,c[o++]=p.normalScale.y):(c[o++]=1,c[o++]=1),c[o++]=s(p,"clearcoat",0),c[o++]=n(p,"clearcoatMap"),c[o++]=s(p,"clearcoatRoughness",0),c[o++]=n(p,"clearcoatRoughnessMap"),c[o++]=n(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(c[o++]=p.clearcoatNormalScale.x,c[o++]=p.clearcoatNormalScale.y):(c[o++]=1,c[o++]=1),o++,c[o++]=s(p,"sheen",0),"sheenColor"in p?(c[o++]=p.sheenColor.r,c[o++]=p.sheenColor.g,c[o++]=p.sheenColor.b):(c[o++]=0,c[o++]=0,c[o++]=0),c[o++]=n(p,"sheenColorMap"),c[o++]=s(p,"sheenRoughness",0),c[o++]=n(p,"sheenRoughnessMap"),c[o++]=n(p,"iridescenceMap"),c[o++]=n(p,"iridescenceThicknessMap"),c[o++]=s(p,"iridescence",0),c[o++]=s(p,"iridescenceIOR",1.3);let m=s(p,"iridescenceThicknessRange",[100,400]);c[o++]=m[0],c[o++]=m[1],"specularColor"in p?(c[o++]=p.specularColor.r,c[o++]=p.specularColor.g,c[o++]=p.specularColor.b):(c[o++]=1,c[o++]=1,c[o++]=1),c[o++]=n(p,"specularColorMap"),c[o++]=s(p,"specularIntensity",1),c[o++]=n(p,"specularIntensityMap");let _=s(p,"thickness",0)===0&&s(p,"attenuationDistance",1/0)===1/0;if(c[o++]=Number(_),o++,"attenuationColor"in p?(c[o++]=p.attenuationColor.r,c[o++]=p.attenuationColor.g,c[o++]=p.attenuationColor.b):(c[o++]=1,c[o++]=1,c[o++]=1),c[o++]=s(p,"attenuationDistance",1/0),c[o++]=n(p,"alphaMap"),c[o++]=p.opacity,c[o++]=p.alphaTest,!_&&p.transmission>0)c[o++]=0;else switch(p.side){case An:c[o++]=1;break;case qt:c[o++]=-1;break;case rn:c[o++]=0;break}c[o++]=Number(s(p,"matte",!1)),c[o++]=Number(s(p,"castShadow",!0)),c[o++]=Number(p.vertexColors)|Number(p.flatShading)<<1,c[o++]=Number(p.transparent),o+=r(p,"map",c,o),o+=r(p,"metalnessMap",c,o),o+=r(p,"roughnessMap",c,o),o+=r(p,"transmissionMap",c,o),o+=r(p,"emissiveMap",c,o),o+=r(p,"normalMap",c,o),o+=r(p,"clearcoatMap",c,o),o+=r(p,"clearcoatNormalMap",c,o),o+=r(p,"clearcoatRoughnessMap",c,o),o+=r(p,"sheenColorMap",c,o),o+=r(p,"sheenRoughnessMap",c,o),o+=r(p,"iridescenceMap",c,o),o+=r(p,"iridescenceThicknessMap",c,o),o+=r(p,"specularColorMap",c,o),o+=r(p,"specularIntensityMap",c,o)}let d=qr(c.buffer);return this.hash!==d?(this.hash=d,this.needsUpdate=!0,!0):!1}};var Q1=new Ve;function Pg(i){return i?`${i.uuid}:${i.version}`:null}function Ig(i,e){for(let t in e)t in i&&(i[t]=e[t])}var Wo=class extends ka{constructor(e,t,n){let s={format:tt,type:gn,minFilter:Mt,magFilter:Mt,wrapS:Lt,wrapT:Lt,generateMipmaps:!1,...n};super(e,t,1,s),Ig(this.texture,s),this.texture.setTextures=(...o)=>{this.setTextures(...o)},this.hashes=[null];let r=new Jt(new af);this.fsQuad=r}setTextures(e,t,n=this.width,s=this.height){let r=e.getRenderTarget(),o=e.toneMapping,a=e.getClearAlpha();e.getClearColor(Q1);let l=t.length||1;(n!==this.width||s!==this.height||this.depth!==l)&&(this.setSize(n,s,l),this.hashes=new Array(l).fill(null)),e.setClearColor(0,0),e.toneMapping=ri;let u=this.fsQuad,h=this.hashes,f=!1;for(let c=0,d=l;c<d;c++){let g=t[c],x=Pg(g);g&&(h[c]!==x||g.isWebGLRenderTarget)&&(g.matrixAutoUpdate=!1,g.matrix.identity(),u.material.map=g,e.setRenderTarget(this,c),u.render(e),g.updateMatrix(),g.matrixAutoUpdate=!0,h[c]=x,f=!0)}return u.material.map=null,e.setClearColor(Q1,a),e.setRenderTarget(r),e.toneMapping=o,f}dispose(){super.dispose(),this.fsQuad.dispose()}},af=class extends St{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function Lg(i,e=Math.random()){for(let t=i.length-1;t>0;t--){let n=Math.floor(e()*(t+1)),s=i[t];i[t]=i[n],i[n]=s}return i}var dc=class{constructor(e,t,n=Math.random){let s=e**t,r=new Uint16Array(s),o=s;for(let a=0;a<s;a++)r[a]=a;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let a=0;a<s;a++)r[a]=a;o=0},this.reshuffle=function(){o=0},this.next=function(){let{samples:a}=this;o>=r.length&&(Lg(r,n),this.reshuffle());let l=r[o++];for(let u=0;u<t;u++)a[u]=(l%e+n())/e,l=Math.floor(l/e);return a}}};var pc=class{constructor(e,t,n=Math.random){let s=0;for(let l of t)s+=l;let r=new Float32Array(s),o=[],a=0;for(let l of t){let u=new dc(e,l,n);u.samples=new Float32Array(r.buffer,a,u.samples.length),a+=u.samples.length*4,o.push(u)}this.samples=r,this.strataCount=e,this.next=function(){for(let l of o)l.next();return r},this.reshuffle=function(){for(let l of o)l.reshuffle()},this.reset=function(){for(let l of o)l.reset()}}};var lf=class{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},mc=class extends Tt{constructor(e=1,t=1,n=8){super(new Float32Array(1),1,1,tt,ct),this.minFilter=Ze,this.magFilter=Ze,this.strata=n,this.sampler=null,this.generator=new lf,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,n)}init(e=this.image.height,t=this.image.width,n=this.strata){let{image:s}=this;if(s.width===t&&s.height===e&&this.sampler!==null)return;let r=new Array(e*t).fill(4),o=new pc(n,r,this.random);s.width=t,s.height=e,s.data=o.samples,this.sampler=o,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function e4(i,e=Math.random){for(let t=i.length-1;t>0;t--){let n=~~((e()-1e-6)*t),s=i[t];i[t]=i[n],i[n]=s}}function t4(i,e){i.fill(0);for(let t=0;t<e;t++)i[t]=1}var Xo=class{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){let{score:e,binaryPattern:t}=this,n=1/0,s=-1;for(let r=0,o=t.length;r<o;r++){if(t[r]!==0)continue;let a=e[r];a<n&&(n=a,s=r)}return s}findCluster(){let{score:e,binaryPattern:t}=this,n=-1/0,s=-1;for(let r=0,o=t.length;r<o;r++){if(t[r]!==1)continue;let a=e[r];a>n&&(n=a,s=r)}return s}setSigma(e){if(e===this.sigma)return;let t=~~(Math.sqrt(20*e**2)+1),n=2*t+1,s=new Float32Array(n*n),r=e*e;for(let o=-t;o<=t;o++)for(let a=-t;a<=t;a++){let l=(t+a)*n+o+t,u=o*o+a*a;s[l]=Math.E**(-u/(2*r))}this.lookupTable=s,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){let{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let s=0,r=e.length;s<r;s++)if(e[s]===0){let o=~~(s/n),a=s-o*n;this.updateScore(a,o,1),e[s]=1}else e[s]=0}updateScore(e,t,n){let{size:s,score:r,lookupTable:o}=this,a=this.radius,l=2*a+1;for(let u=-a;u<=a;u++)for(let h=-a;h<=a;h++){let f=(a+h)*l+u+a,c=o[f],d=e+u;d=d<0?s+d:d%s;let g=t+h;g=g<0?s+g:g%s;let x=g*s+d;r[x]+=n*c}}addPointIndex(e){this.binaryPattern[e]=1;let t=this.size,n=~~(e/t),s=e-n*t;this.updateScore(s,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;let t=this.size,n=~~(e/t),s=e-n*t;this.updateScore(s,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}};var gc=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Xo(1),this.savedSamples=new Xo(1)}generate(){let{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:s,size:r}=this;e.resize(r),e.setSigma(n);let o=Math.floor(r*r*s),a=e.binaryPattern;t4(a,o),e4(a,this.random);for(let f=0,c=a.length;f<c;f++)a[f]===1&&e.addPointIndex(f);for(;;){let f=e.findCluster();e.removePointIndex(f);let c=e.findVoid();if(f===c){e.addPointIndex(f);break}e.addPointIndex(c)}let l=new Uint32Array(r*r);t.copy(e);let u;for(u=e.count-1;u>=0;){let f=e.findCluster();e.removePointIndex(f),l[f]=u,u--}let h=r*r;for(u=t.count;u<h/2;){let f=t.findVoid();t.addPointIndex(f),l[f]=u,u++}for(t.invert();u<h;){let f=t.findCluster();t.removePointIndex(f),l[f]=u,u++}return{data:l,maxValue:h}}};function Dg(i){return i>=3?4:i}function Ng(i){switch(i){case 1:return Xi;case 2:return Co;default:return tt}}var xc=class extends Tt{constructor(e=64,t=1){super(new Float32Array(4),1,1,tt,ct),this.minFilter=Ze,this.magFilter=Ze,this.size=e,this.channels=t,this.update()}update(){let e=this.channels,t=this.size,n=new gc;n.channels=e,n.size=t;let s=Dg(e),r=Ng(s);(this.image.width!==t||r!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*s),this.format=r,this.dispose());let o=this.image.data;for(let a=0,l=e;a<l;a++){let u=n.generate(),h=u.data,f=u.maxValue;for(let c=0,d=h.length;c<d;c++){let g=h[c]/f;o[c*s+a]=g}}this.needsUpdate=!0}};var n4=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`;var i4=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`;var s4=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`;var r4=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * 45u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );

		return m;

	}

`;var o4=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`;var a4=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`;var l4=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`;var c4=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`;var u4=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`;var h4=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`;var f4=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`;var d4=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`;var vc=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`;var cf=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`;var p4=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`;var m4=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`;var g4=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`;var x4=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`;var v4=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`;var _4=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`;var y4=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * 45u;
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`;var b4=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`;var M4=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = blades == 0 ? sampleCircle( shapeUVW.xy ) : sampleRegularPolygon( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`;var S4=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`;var T4=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`;var w4=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`;var E4=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;var _c=class extends Qi{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new Q},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new rc},cameraWorldMatrix:{value:new Fe},invProjectionMatrix:{value:new Fe},bvh:{value:new Ol},attributesArray:{value:new uc},materialIndexAttribute:{value:new Gr},materials:{value:new fc},textures:{value:new Wo().texture},lights:{value:new lc},iesProfiles:{value:new Wo(360,180,{type:At,wrapS:It,wrapT:It}).texture},environmentIntensity:{value:1},environmentRotation:{value:new Fe},envMapInfo:{value:new ac},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new mc},stratifiedOffsetTexture:{value:new xc(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Rs.common_functions}
				${Rs.bvh_struct_definitions}
				${Rs.bvh_ray_functions}

				// uniform structs
				${n4}
				${s4}
				${i4}
				${r4}
				${o4}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${p4}

				#elif RANDOM_TYPE == 1 	// Sobol

					${cf}
					${nc}
					${G1}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${cf}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${d4}
				${u4}
				${vc}
				${h4}
				${f4}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${c4}
				${a4}
				${l4}

				${y4}
				${x4}
				${_4}
				${v4}
				${g4}
				${m4}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${w4}
				${M4}
				${E4}
				${b4}
				${S4}
				${T4}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}};function*Ug(){let{_renderer:i,_fsQuad:e,_blendQuad:t,_primaryTarget:n,_blendTargets:s,_sobolTarget:r,_subframe:o,alpha:a,material:l}=this,u=new mt,h=new mt,f=t.material,[c,d]=s;for(;;){a?(f.opacity=this._opacityFactor/(this.samples+1),l.blending=_t,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=si);let[g,x,p,m]=o,_=n.width,v=n.height;l.resolution.set(_*p,v*m),l.sobolTexture=r.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let y=this.tiles.x||1,T=this.tiles.y||1,S=y*T,w=Math.ceil(_*p),D=Math.ceil(v*m),b=Math.floor(g*_),M=Math.floor(x*v),L=Math.ceil(w/y),N=Math.ceil(D/T);for(let k=0;k<T;k++)for(let I=0;I<y;I++){let O=i.getRenderTarget(),G=i.autoClear,J=i.getScissorTest();i.getScissor(u),i.getViewport(h);let K=I,q=k;if(!this.stableTiles){let re=this._currentTile%(y*T);K=re%y,q=~~(re/y),this._currentTile=re+1}let ie=T-q-1;n.scissor.set(b+K*L,M+ie*N,Math.min(L,w-K*L),Math.min(N,D-ie*N)),n.viewport.set(b,M,w,D),i.setRenderTarget(n),i.setScissorTest(!0),i.autoClear=!1,e.render(i),i.setViewport(h),i.setScissor(u),i.setScissorTest(J),i.setRenderTarget(O),i.autoClear=G,a&&(f.target1=c.texture,f.target2=n.texture,i.setRenderTarget(d),t.render(i),i.setRenderTarget(O)),this.samples+=1/S,I===y-1&&k===T-1&&(this.samples=Math.round(this.samples)),yield}[c,d]=[d,c]}}var A4=new Ve,qo=class{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new Q(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new mt(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Jt(new _c),this._blendQuad=new Jt(new Ql),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new ic().generate(e),this._primaryTarget=new Rt(1,1,{format:tt,type:ct,magFilter:Ze,minFilter:Ze}),this._blendTargets=[new Rt(1,1,{format:tt,type:ct,magFilter:Ze,minFilter:Ze}),new Rt(1,1,{format:tt,type:ct,magFilter:Ze,minFilter:Ze})],this._compileFunction=()=>{let t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){let{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let n=0;e.projectionMatrix.elements[15]>0&&(n=1),e.isEquirectCamera&&(n=2),t.setDefine("CAMERA_TYPE",n),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:e,_primaryTarget:t,_blendTargets:n}=this,s=e.getRenderTarget(),r=e.getClearAlpha();e.getClearColor(A4),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(n[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(A4,r),e.setRenderTarget(s),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=Ug.call(this)),this._task.next())}};var Ds=new Q,R4=new Q,yc=new Ts,bc=new Ve,Mc=class extends Tt{constructor(e=512,t=512){super(new Float32Array(e*t*4),e,t,tt,ct,gs,Lt,It,Mt,Mt),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:e,width:t,height:n}=this.image;for(let s=0;s<t;s++)for(let r=0;r<n;r++){R4.set(t,n),Ds.set(s/t,r/n),Ds.x-=.5,Ds.y=1-Ds.y,yc.theta=Ds.x*2*Math.PI,yc.phi=Ds.y*Math.PI,yc.radius=1,this.generationCallback(yc,Ds,R4,bc);let a=4*(r*t+s);e[a+0]=bc.r,e[a+1]=bc.g,e[a+2]=bc.b,e[a+3]=1}}copy(e){return super.copy(e),this.generationCallback=e.generationCallback,this}};var C4=new A,Zr=class extends Mc{constructor(e=512){super(e,e),this.topColor=new Ve().set(16777215),this.bottomColor=new Ve().set(0),this.exponent=2,this.generationCallback=(t,n,s,r)=>{C4.setFromSpherical(t);let o=C4.y*.5+.5;r.lerpColors(this.bottomColor,this.topColor,o**this.exponent)}}copy(e){return super.copy(e),this.topColor.copy(e.topColor),this.bottomColor.copy(e.bottomColor),this}};var Sc=class extends St{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}};var uf=class extends St{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${vc}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},Yo=class{constructor(e){this._renderer=e,this._quad=new Jt(new uf)}generate(e,t=null,n=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let s=e.images[0],r=this._renderer,o=this._quad;t===null&&(t=4*s.height),n===null&&(n=2*s.height);let a=new Rt(t,n,{type:ct,colorSpace:s.colorSpace}),l=s.height,u=Math.log2(l)-2,h=1/l,f=1/(3*Math.max(Math.pow(2,u),112));o.material.defines.CUBEUV_MAX_MIP=`${u}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=f,o.material.defines.CUBEUV_TEXEL_HEIGHT=h,o.material.uniforms.envMap.value=e,o.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let c=r.getRenderTarget(),d=r.autoClear;r.autoClear=!0,r.setRenderTarget(a),o.render(r),r.setRenderTarget(c),r.autoClear=d;let g=new Uint16Array(t*n*4),x=new Float32Array(t*n*4);r.readRenderTargetPixels(a,0,0,t,n,x),a.dispose();for(let m=0,_=x.length;m<_;m++)g[m]=kn.toHalfFloat(x[m]);let p=new Tt(g,t,n,tt,At);return p.minFilter=gd,p.magFilter=Mt,p.wrapS=Lt,p.wrapT=Lt,p.mapping=gs,p.needsUpdate=!0,p}dispose(){this._quad.dispose()}};function Og(i){return i.extensions.get("EXT_float_blend")}var jr=new Q,Tc=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new Kl,this._pathTracer=new qo(e),this._queueReset=!1,this._clock=new vr,this._compilePromise=null,this._lowResPathTracer=new qo(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new Jt(new Sc({map:null,transparent:!0,blending:_t,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Q(1024,1024),this.rasterizeSceneCallback=(t,n)=>{this._renderer.render(t,n)},this.renderToCanvasCallback=(t,n,s)=>{let r=n.autoClear;n.autoClear=!1,s.render(n),n.autoClear=r},this.setScene(new Cn,new Dt)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,n={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();let s=this._generator;if(s.setObjects(e),this._buildAsync)return s.generateAsync(n.onProgress).then(r=>this._updateFromResults(e,t,r));{let r=s.generate();return this._updateFromResults(e,t,r)}}setSceneAsync(...e){this._buildAsync=!0;let t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){let e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){let e=this._pathTracer.material,t=this._renderer,n=this._materials,s=this.textureSize,r=Z1(n);e.textures.setTextures(t,r,s.x,s.y),e.materials.updateFrom(n,r),this.reset()}updateLights(){let e=this.scene,t=this._renderer,n=this._pathTracer.material,s=j1(e),r=$1(s);n.lights.updateFrom(s,r),n.iesProfiles.setTextures(t,r),this.reset()}updateEnvironment(){let e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new Zr(16);let n=this._colorBackground;n.topColor.equals(e.background)||(n.topColor.set(e.background),n.bottomColor.set(e.background),n.update()),t.backgroundMap=n,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){let n=new Yo(this._renderer).generate(e.background);this._internalBackground=n,t.backgroundMap=n,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environmentIntensity??1,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment)if(e.environment!==null)if(e.environment.isCubeTexture){let n=new Yo(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(n)}else t.envMapInfo.updateFrom(e.environment);else t.environmentIntensity=0;this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,n){let{materials:s,geometry:r,bvh:o,bvhChanged:a}=n;this._materials=s;let u=this._pathTracer.material;return a&&(u.bvh.updateFrom(o),u.attributesArray.updateFrom(r.attributes.normal,r.attributes.tangent,r.attributes.uv,r.attributes.color),u.materialIndexAttribute.updateFrom(r.attributes.materialIndex)),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),n}renderSample(){let e=this._lowResPathTracer,t=this._pathTracer,n=this._renderer,s=this._clock,r=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,r.material.opacity=0,s.start());let o=s.getDelta()*1e3,a=s.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=a&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!Og(n),e.alpha=t.alpha,this.renderToCanvas){let l=this._renderer,u=this.minSamples;if(a>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?r.material.opacity=Math.min(r.material.opacity+o/this.fadeDuration,1):r.material.opacity=1),!this.enablePathTracing||this.samples<u||r.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());let h=r.material.opacity;r.material.opacity=1-r.material.opacity,r.material.map=e.target.texture,r.render(l),r.material.opacity=h}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&r.material.opacity>0&&(r.material.opacity<1&&(r.material.blending=this.dynamicLowRes?Ca:si),r.material.map=t.target.texture,this.renderToCanvasCallback(t.target,l,r),r.material.blending=_t)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._renderQuad.dispose(),this._renderQuad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(jr);let e=Math.floor(this.renderScale*jr.x),t=Math.floor(this.renderScale*jr.y);if(this._pathTracer.getSize(jr),jr.x!==e||jr.y!==t){let n=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*n),Math.floor(t*n))}}}};var Bg={roboter6:{name:"Industrieroboter, fest montiert",takt:3.6}};function P4(i){let e=Bg[i.modul],t=Math.max(10,Number(i.speed)||70)/100,n=e.takt*Math.pow(1/t,.8)+(Number(i.hub)||.3)*.8;return Number(i.dreh)&&(n+=.3),n=Math.max(.4,n),{takt:n,stunde:3600/n}}"environmentRotation"in Cn.prototype||Object.assign(Cn.prototype,{environmentRotation:new vs,backgroundRotation:new vs});var Kn=(i,e=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:e,minimumFractionDigits:e}),Fs=zt.clamp,zg=i=>i*i*(3-2*i),Ai=(i,e,t)=>zg(Fs((i-e)/(t-e),0,1)),es=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)},yt={stahl:new zn({color:12896719,metalness:1,roughness:.28,anisotropy:.6}),alu:new $e({color:13883614,metalness:.6,roughness:.4}),dunkel:new zn({color:2764597,metalness:.3,roughness:.55,clearcoat:.2}),gurt:new $e({color:3488578,roughness:.85}),modul:new $e({color:15922422,roughness:.6}),rolle:new $e({color:13226200,metalness:.9,roughness:.25}),holz:new $e({color:13149038,roughness:.85}),klt:new $e({color:5205903,roughness:.6}),presse:new $e({color:4877194,metalness:.3,roughness:.55}),roboter:new zn({color:15987957,roughness:.38,clearcoat:.8,clearcoatRoughness:.18}),gelenk:new $e({color:25002,metalness:.3,roughness:.45}),abbFuss:new zn({color:15001321,roughness:.42,clearcoat:.6,clearcoatRoughness:.25}),papier:new $e({color:15326403,roughness:.9}),schale:new $e({color:3817800,roughness:.5}),rahmen:new zn({color:9212827,metalness:.9,roughness:.45,anisotropy:.8,anisotropyRotation:0}),lack:new zn({color:6253432,metalness:.2,roughness:.42,clearcoat:.5,clearcoatRoughness:.3}),sockel:new zn({color:3884112,metalness:.25,roughness:.5,clearcoat:.4}),band:new $e({color:13225168,roughness:.7}),sensor:new $e({color:2041904,roughness:.4}),led:new $e({color:16742938,emissive:16734720,emissiveIntensity:.6})},Kt=(i,e,t,n,s=0,r=0,o=0)=>{let a=new Ke(new $t(i,e,t),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a},Ns=(i,e,t,n=24)=>{let s=new Ke(new gr(i,i,e,n),t);return s.castShadow=s.receiveShadow=!0,s};var kg=new A(0,1,0);var hf={eigen:{name:"Ihr Teil aus dem Konfigurator",branche:""},reifen:{name:"Pkw-Reifen",branche:"Automobil",size:[632,205,632],innen:406,info:"Gummi, formstabil"},blech:{name:"Blechteil",branche:"Automobil",size:[600,40,400],info:"glatt, evtl. \xF6lig"},broetchen:{name:"Br\xF6tchen / Backware",branche:"Lebensmittel",size:[100,55,70],info:"weich, empfindlich"},karton:{name:"Karton / Verpackung",branche:"beide",size:[400,250,300],info:"glatt, formstabil"},schale:{name:"Schale / Becher",branche:"Lebensmittel",size:[180,50,130],innen:124,info:"Kunststoff, leicht"}};function Hg(i,e){if(i==="reifen"){let o=[],a=[[203,-77.9],[233,-98.39999999999999],[276,-102.5],[308,-86.1],[316,-41],[316,41],[308,86.1],[276,102.5],[233,98.39999999999999],[203,77.9]];for(let[l,u]of a)o.push(new Q(l,u+205/2));return o.push(o[0].clone()),{geo:new Ja(o,64),mat:new $e({color:1908514,roughness:.85})}}if(i==="blech"){let n=new Vi([[-300,0],[-300,40],[-220,40],[-180,3],[180,3],[220,40],[300,40],[300,0],[220,37],[180,0]].map(([r,o])=>new Q(r,o))),s=new ys(n,{depth:400,bevelEnabled:!1});return s.translate(0,0,-200),{geo:s,mat:new $e({color:11187132,metalness:.85,roughness:.3})}}if(i==="broetchen"){let n=new Ka(1,28,16);n.scale(50,30,35),n.translate(0,18,0);let s=n.attributes.position;for(let r=0;r<s.count;r++)s.getY(r)<4&&s.setY(r,4+(s.getY(r)-4)*.2);return n.translate(0,-3,0),n.computeVertexNormals(),{geo:n,mat:new $e({color:13208124,roughness:.8})}}return i==="karton"?{geo:Ar([new $t(400,250,300).translate(0,125,0),new $t(400,2,60).translate(0,251,0)].map(s=>s.toNonIndexed()),!0),mats:[new $e({color:12159573,roughness:.9}),new $e({color:14270607,roughness:.6})]}:i==="schale"?{geo:Ar([[180,3,130,0,1.5,0],[180,50,3,0,25,63.5],[180,50,3,0,25,-63.5],[3,50,130,88.5,25,0],[3,50,130,-88.5,25,0]].map(([l,u,h,f,c,d])=>new $t(l,u,h).translate(f,c,d))),mat:new $e({color:15922679,roughness:.3,transparent:!0,opacity:.88})}:{geo:e.part().geo,mat:new $e({color:14263361,metalness:.2,roughness:.55})}}var wc={foerderband:{name:"F\xF6rderband",info:"Teile kommen auf dem Gurt an"}},Ec={foerderband:{name:"F\xF6rderband",info:"Abtransport auf dem Gurt"}},ff={roboter6:{name:"Industrieroboter",info:"fest montiert neben den B\xE4ndern"}},I4={gurtband:"foerderband",modulband:"foerderband",rollenbahn:"foerderband",palette:"foerderband",klt:"foerderband",presse:"foerderband",schalenband:"foerderband",karton:"foerderband",linear:"roboter6",cobot:"roboter6",delta:"roboter6",portal:"roboter6"},ui=null;function Vg(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d");e.fillStyle="#c9ccd0",e.fillRect(0,0,256,256);let t=e.getImageData(0,0,256,256),n=t.data;for(let r=0;r<n.length;r+=4){let o=r/4%256,a=Math.floor(r/1024),l=Math.sin(o*1.7)*Math.sin(a*1.7)*4+(es(r)-.5)*10;n[r]+=l,n[r+1]+=l,n[r+2]+=l}e.putImageData(t,0,0),e.fillStyle="rgba(80,86,94,.35)",e.fillRect(0,0,2,256);let s=new mr(i);return s.wrapS=s.wrapT=Lt,s.colorSpace=Vt,s.anisotropy=8,s}async function Gg(i){if(ui)return ui;let e=await(await fetch(i+"data/3d/foerderband.json")).json(),t=new at;t.setAttribute("position",new it(e.v,3)),t.setIndex(e.i);let n=[];for(let s=0;s<e.v.length;s+=3)n.push(e.v[s]/300,e.v[s+2]/e.breite+.5);return t.setAttribute("uv",new it(n,2)),ui={geo:qi(t,zt.degToRad(35)),A:e.achsabstand,R:e.radius,W:e.breite},ui}var gf=860;function U4(i,e){let t=new Ft,{A:n,R:s}=ui,r=Math.max(1,i/ui.W),o=ui.W*r,a=e<0?-n/2+60:n/2-60,l=a-n/2,u=a+n/2,h=gf-s,f=Vg(),c=new zn({map:f,roughnessMap:f,roughness:.75,sheen:.3,sheenRoughness:.8,sheenColor:16777215}),d=new Ke(ui.geo,c);d.position.set(a,h,0),d.scale.set(1,1,r),d.castShadow=d.receiveShadow=!0,d.userData.keepGeo=!0,t.add(d);for(let b of[l,u]){let M=Ns(s-3,o-4,yt.stahl,32);M.rotation.x=Math.PI/2,M.position.set(b,h,0),t.add(M)}let g=o/2+12,x=n+150,p=120;for(let b of[-1,1]){let M=new Vi;M.moveTo(-x/2,-p/2),M.lineTo(x/2,-p/2),M.lineTo(x/2,p/2),M.lineTo(-x/2,p/2),M.closePath();for(let N of[-x*.22,x*.22]){let k=new Hi,I=x*.13,O=26;k.moveTo(N-I,-O),k.lineTo(N+I,-O),k.absarc(N+I,0,O,-Math.PI/2,Math.PI/2),k.lineTo(N-I,O),k.absarc(N-I,0,O,Math.PI/2,Math.PI*1.5),M.holes.push(k)}let L=new Ke(new ys(M,{depth:5,bevelEnabled:!1}),yt.rahmen);L.position.set(a,h-8,b*g-2.5),L.castShadow=L.receiveShadow=!0,t.add(L);for(let N of[h-8+p/2,h-8-p/2])t.add(Kt(x,5,28,yt.rahmen,a,N,b*(g-12)));for(let N of[l,u]){t.add(Kt(86,86,18,yt.dunkel,N,h,b*(g+11)));let k=Ns(20,14,yt.stahl,20);k.rotation.x=Math.PI/2,k.position.set(N,h,b*(g+26)),t.add(k)}}let m=e<0?u:l;t.add(Kt(36,60,24,yt.dunkel,m-Math.sign(m-a)*150,h-8,g+14));let _=[l+190,u-190],v=g-25,y=h-8-p/2;for(let b of _)for(let M of[-1,1]){t.add(Kt(40,y-70,40,yt.rahmen,b,70+(y-70)/2,M*v));let L=Ns(8,50,yt.stahl,12);L.position.set(b,45,M*v),t.add(L);let N=Ns(32,16,yt.dunkel,20);N.position.set(b,8,M*v),t.add(N)}for(let b of[-1,1])t.add(Kt(_[1]-_[0],30,30,yt.rahmen,a,170,b*v));for(let b of _)t.add(Kt(30,30,2*v,yt.rahmen,b,170,0));let T=-(g+70);t.add(Kt(120,140,110,yt.lack,m,h-20,T));let S=new Ft;S.position.set(m,h-70,T-30),S.rotation.x=-.35;let w=Ns(58,170,yt.lack,32);w.position.y=-85,S.add(w);for(let b=0;b<6;b++){let M=Ns(64,6,yt.lack,32);M.position.y=-40-b*22,S.add(M)}let D=Ns(56,40,yt.dunkel,24);return D.position.y=-185,S.add(D),S.add(Kt(60,50,50,yt.lack,0,-60,-70)),S.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),t.add(S),{group:t,top:gf,tex:f,half:120,flow:!0,len:n,dir:e,x0:l,x1:u,W:o}}function L4(i,e){return U4(Math.max(ui.W,e.size[2]+160),-1)}function D4(i,e,t,n=0){let s=Number(n)%180===90?[e.size[2],e.size[1],e.size[0]]:e.size;return U4(Math.max(ui.W,s[2]+160),1)}var Wg=2.4,Jr=null;async function Xg(i){if(await Gg(i),Jr)return Jr;let e=(await(await fetch(i+"data/3d/roboter-szene.json")).json()).roboter;Jr={};for(let[t,n]of Object.entries(e)){let s=new at;s.setAttribute("position",new it(n.v,3)),s.setIndex(n.i),Jr[t]=qi(s,zt.degToRad(40))}return Jr}var qg={glied1:[0,0,0],glied2:[0,290,0],glied3:[0,560,0],glied4:[0,630,0],glied5:[-302,630,0]},Yg=new Q(0,290),$o=270,xf=new Q(-302,70),N4=72,$g=Math.atan2(xf.y,xf.x),df=xf.length();function F4(i=0){let e=new Ft;i&&e.add(Kt(620,i,620,yt.sockel,0,i/2,0),Kt(720,20,720,yt.sockel,0,10,0));let t=new Ft;t.position.y=i,t.scale.setScalar(Wg),e.add(t);let n={},s=t,r=[0,0,0];for(let h of["basis","glied1","glied2","glied3","glied4","glied5"]){let f=qg[h]||[0,0,0],c=new Ft;c.position.set(f[0]-r[0],f[1]-r[1],f[2]-r[2]);let d=new Ke(Jr[h],h==="basis"?yt.abbFuss:yt.roboter);d.position.set(-f[0],-f[1],-f[2]),d.castShadow=d.receiveShadow=!0,d.userData.keepGeo=!0,c.add(d),s.add(c),n[h]=c,s=c,r=f}let o=new tn;o.position.set(-N4,0,0),n.glied5.add(o);let a=new A,l=new Q,u=new Q;return{group:e,tip:h=>o.getWorldPosition(h),reach(h){e.updateMatrixWorld(!0),t.worldToLocal(a.copy(h));let f=Math.atan2(a.z,-a.x),c=Math.hypot(a.x,a.z);l.set(-c,a.y+N4).sub(Yg);let d=Math.min(l.length(),$o+df-1),g=Math.atan2(l.y,l.x)-Math.acos(Fs(($o*$o+d*d-df*df)/(2*$o*d),-1,1));u.set(Math.cos(g),Math.sin(g)).multiplyScalar($o);let x=Math.atan2(l.y-u.y,l.x-u.x),p=g-Math.PI/2,m=x-$g;n.glied1.rotation.y=f,n.glied2.rotation.z=p,n.glied3.rotation.z=m-p,n.glied5.rotation.z=zt.euclideanModulo(-1.5*Math.PI-m+Math.PI,2*Math.PI)-Math.PI}}}var Zg={k:"band",label:"Bandgeschwindigkeit",opts:[["langsam","langsam"],["mittel","mittel"],["schnell","schnell"]],def:"mittel"},pf=[{k:"lage",label:"Lage des Produkts",opts:[["ausgerichtet","ausgerichtet"],["chaotisch","chaotisch (mit Kamera)"]],def:"ausgerichtet"}],mf=[{k:"hub",label:"Hubh\xF6he",range:[.1,1,.05],unit:"m",def:.3,dec:2},{k:"dreh",label:"Drehung des Produkts",opts:[["0","keine"],["90","90\xB0"],["180","180\xB0"]],def:"0"}],Ac=[Zg],Zo=i=>Object.fromEntries(i.map(e=>[e.k,e.def])),jg={produkt:"eigen",s1:{modul:"foerderband"},s2:{modul:"roboter6",speed:70,dreh:"90"},s3:{modul:"foerderband"}};function O4(i){let e=document.querySelector("[data-simulator]");if(!e)return;let t=z=>e.querySelector(z),n=t(".sim"),s=t(".sim__view"),r=!1,o={produkt:{typ:"eigen",groesse:100},s1:null,s2:null,s3:null},a="produkt";function l(){let z=jg;o.tph=null,o.produkt={typ:z.produkt,groesse:100},o.s1={...Zo(pf),...z.s1},o.s2={...Zo(mf),...z.s2},o.s3={...Zo(Ac),...z.s3},a="slot1"}function u(){let z=o.produkt.typ,B=(o.produkt.groesse||100)/100;if(z==="eigen"){let W=i.part(),$=W?[W.size.x,W.size.y,W.size.z]:[100,100,100];return{typ:z,name:W?W.label.replace(/^Grundform: /,""):"Ihr Teil",size:$.map(ne=>ne*B),griff:(W?W.grip:100)*B,innen:W&&W.inside?W.grip*B:null,f:B}}let P=hf[z];return{typ:z,name:P.name,size:P.size.map(W=>W*B),griff:P.size[2]*B,innen:P.innen?P.innen*B:null,f:B}}let h=s.querySelector("canvas"),f,c,d,g,x,p;function m(){let z=document.createElement("canvas");z.width=z.height=1024;let B=z.getContext("2d");B.fillStyle="#a3a7ab",B.fillRect(0,0,1024,1024);for(let ne=0;ne<60;ne++){let fe=es(ne)*1024,pe=es(ne+99)*1024,ye=80+es(ne+7)*220,lt=B.createRadialGradient(fe,pe,0,fe,pe,ye),xe=(es(ne+3)-.5)*.08;lt.addColorStop(0,xe>0?`rgba(255,255,255,${xe})`:`rgba(60,60,60,${-xe})`),lt.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=lt,B.fillRect(0,0,1024,1024)}let P=B.getImageData(0,0,1024,1024),W=P.data;for(let ne=0;ne<W.length;ne+=4){let fe=(es(ne*.37)-.5)*16;W[ne]+=fe,W[ne+1]+=fe,W[ne+2]+=fe}B.putImageData(P,0,0),B.strokeStyle="rgba(70,72,75,.55)",B.lineWidth=3,B.strokeRect(0,0,1024,1024);let $=new mr(z);return $.wrapS=$.wrapT=Lt,$.colorSpace=Vt,$.anisotropy=f.capabilities.getMaxAnisotropy(),$.repeat.set(4e4/3e3,4e4/3e3),$}function _(){f=new ki({canvas:h,antialias:!0,powerPreference:"high-performance"}),f.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),f.toneMapping=Wi,f.toneMappingExposure=.92,f.shadowMap.enabled=!0,f.shadowMap.type=Ao,c=new Cn,c.background=new Ve(14278114),c.fog=new Xa(14278114,12e3,3e4),c.environment=new zi(f).fromScene(new Er(f),.03).texture,c.environmentIntensity=.45,d=new Dt(32,1,50,6e4),g=new Tr(d,h),g.enableDamping=!0,g.maxPolarAngle=Math.PI*.48;let z=new Gi(16774892,3.4);z.position.set(-2600,5200,3800),z.castShadow=!0,z.shadow.mapSize.set(4096,4096),Object.assign(z.shadow.camera,{left:-3200,right:3200,top:3200,bottom:-3200,near:500,far:12e3}),z.shadow.bias=-2e-4,z.shadow.normalBias=3,z.shadow.radius=4;let B=new Gi(15266047,.5);B.position.set(3e3,2500,-2e3),c.add(z,z.target,B,new Ss(16777215,10133672,.25));let P=new Ke(new Yn(4e4,4e4),new zn({map:m(),roughness:.7,clearcoat:.2,clearcoatRoughness:.5,envMapIntensity:.5}));P.rotation.x=-Math.PI/2,P.receiveShadow=!0,c.add(P);let W=new $e({color:15909376,roughness:.55});for(let[ye,lt,xe,Ce]of[[6200,70,0,-900],[6200,70,0,2600],[70,3570,-3100,850],[70,3570,3100,850]]){let et=new Ke(new Yn(ye,lt),W);et.rotation.x=-Math.PI/2,et.position.set(xe,1.5,Ce),et.receiveShadow=!0,c.add(et)}let $=new $e({color:15132907,roughness:.9}),ne=new Ke(new Yn(4e4,9e3),$);ne.position.set(0,4500,-5200),ne.receiveShadow=!0,c.add(ne);let fe=new Ke(new Yn(4e4,1200),new $e({color:9344927,roughness:.8}));fe.position.set(0,600,-5195),c.add(fe);for(let ye=-18e3;ye<=18e3;ye+=6e3)c.add(Kt(400,9e3,400,new $e({color:10134445,roughness:.7}),ye,4500,-5e3));if(d.position.set(-1800,3200,5600),g.target.set(0,900,300),/[?&]einfach/.test(location.search))return p={render:()=>f.render(c,d),setSize(){},setPixelRatio(){}},v();let pe=new Rt(1,1,{type:At,samples:4});p=new kl(f,pe),p.addPass(new Hl(c,d));try{let ye=new Go(c,d,1,1);ye.updateGtaoMaterial({radius:220,distanceExponent:1.4,thickness:6,scale:1.1,samples:12}),ye.blendIntensity=.85,p.addPass(ye)}catch{}p.addPass(new Wl),v()}function v(){new ResizeObserver(T).observe(s),T(),h.addEventListener("pointerdown",z=>{y=[z.clientX,z.clientY]}),h.addEventListener("pointerup",z=>{y&&Math.hypot(z.clientX-y[0],z.clientY-y[1])<5&&w(z)})}let y=null;function T(){let z=s.clientWidth,B=s.clientHeight;f.setSize(z,B,!1),d.aspect=z/B,d.updateProjectionMatrix(),p&&(p.setPixelRatio(f.getPixelRatio()),p.setSize(z,B))}let S=new rl;function w(z){let B=h.getBoundingClientRect();S.setFromCamera(new Q((z.clientX-B.left)/B.width*2-1,-(z.clientY-B.top)/B.height*2+1),d);let P=S.intersectObjects(x?x.children:[],!0)[0],W=P&&P.object;for(;W&&!W.userData.slot;)W=W.parent;W&&(a=W.userData.slot,E())}let D=null;function b(){let z=i.active();if(D&&D.id===z.id)return D;let B=20,P=[],W=[];z.root.traverse(pe=>W.push(pe));for(let pe=0;pe<=B;pe++)z.set(pe/B),z.root.updateMatrixWorld(!0),P.push(W.map(ye=>ye.matrix.clone()));z.set(0),z.paint("");let $=z.root.clone(!0),ne=[];$.traverse(pe=>ne.push(pe)),ne.forEach((pe,ye)=>{ye>0&&(pe.matrixAutoUpdate=!1),pe.castShadow=!0}),$.position.set(0,0,0),$.rotation.set(0,0,0),$.visible=!0,i.restore();let fe=new Ft;return fe.add($),D={id:z.id,code:z.code,range:z.range,reach:z.reach,length:z.length,holder:fe,set(pe){let ye=P[Math.round(Fs(pe,0,1)*B)];ne.forEach((lt,xe)=>{xe>0&&(lt.matrix.copy(ye[xe]),lt.matrixWorldNeedsUpdate=!0)})}},D.set(0),D}let M=null;function L(){if(!f)return;se&&F(),x&&(D&&x.remove(D.holder),c.remove(x),x.traverse(Ee=>{Ee.geometry&&!Ee.userData.keepGeo&&Ee.geometry.dispose()})),x=new Ft,c.add(x),M=null;let z=u(),B=o.s1&&o.s2&&o.s3;t("#sim-empty").hidden=!!B;let P=b(),W=420,$=850,ne=o.s1?L4(o.s1.modul,z,o.s1):null,fe=o.s3?D4(o.s3.modul,z,o.s3,o.s2?o.s2.dreh:0):null,pe=-(W+(ne?ne.half:300)),ye=W+(fe?fe.half:300),lt=0,xe=(Ee,We,He,Xe,pt,Gt,Ot,hn)=>{let xt=document.createElement("canvas");xt.width=1024,xt.height=220;let Ne=xt.getContext("2d");Ne.fillStyle="#ffffff",Ne.beginPath(),Ne.roundRect(4,4,1016,212,36),Ne.fill(),Ne.lineWidth=6,Ne.strokeStyle=pt,Ne.stroke(),Ne.fillStyle=pt,Ne.beginPath(),Ne.arc(112,110,70,0,Math.PI*2),Ne.fill(),Ne.fillStyle="#ffffff",Ne.font="700 86px system-ui, sans-serif",Ne.textAlign="center",Ne.fillText(Xe,112,140),Ne.textAlign="left",Ne.fillStyle="#13171d",Ne.font="700 70px system-ui, sans-serif",Ne.fillText(Gt,214,98),Ne.fillStyle="#3a424d",Ne.font="600 54px system-ui, sans-serif",Ne.fillText(Ot,216,174);let ft=new mr(xt);ft.colorSpace=Vt,ft.anisotropy=8;let ot=He*220/1024,Wt=new Ke(new Yn(He,ot),new On({map:ft,transparent:!0,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10}));Wt.rotation.x=-Math.PI/2,Wt.position.set(Ee,12,We+ot/2),Wt.renderOrder=10,Wt.userData.slot=hn,x.add(Wt)},Ce=ne?ne.x1-ne.x0+300:1400,et=fe?fe.x1-fe.x0+300:1400,Qt=pe+(ne?(ne.x0+ne.x1)/2:0),Vn=ye+(fe?(fe.x0+fe.x1)/2:0),Ci=Qt-Ce/2,Ln=Qt+Ce/2,sn=Vn-et/2,Gn=Vn+et/2;if(Ln>sn){let Ee=(pe+ye)/2;Ln=Math.min(Ln,Ee),sn=Math.max(sn,Ee)}let zs=1500,pi=$+zs/2+120,Pi=1300,Ii=Pi+120,os=(Ln+sn)/2,C=[Math.min((Ci+Ln)/2,os-Ii),os,Math.max((sn+Gn)/2,os+Ii)];if(xe(C[0],pi,Pi,"1","#2f7fc1","Zuf\xFChrband","Teile kommen an","slot1"),xe(C[1],pi,Pi,"2","#e07b1f","Roboter","fest montiert","slot2"),xe(C[2],pi,Pi,"3","#2e9d5b","Abf\xFChrband","Teile fahren weg","slot3"),ne&&(ne.group.position.set(pe,0,$),ne.group.userData.slot="slot1",x.add(ne.group)),fe&&(fe.group.position.set(ye,0,$),fe.group.userData.slot="slot3",x.add(fe.group)),ne&&o.s1){let Ee=o.s1.lage==="chaotisch"?"kamera3d":"lichtschranke";if(Ee==="lichtschranke")for(let We of[-1,1]){let He=$+We*(ne.W/2+34);x.add(Kt(24,90,40,yt.stahl,pe-160,ne.top-20,He));let Xe=Kt(34,46,30,yt.sensor,pe-160,ne.top+40,He);Xe.userData.slot="slot1",x.add(Xe),x.add(Kt(6,10,10,yt.led,pe-160+18,ne.top+52,He))}else{let We=ne.top+z.size[1]*3+900;x.add(Kt(60,We,60,yt.alu,pe-450,We/2,$-700),Kt(60,60,760,yt.alu,pe-450,We,$-340));let He=Kt(180,120,140,yt.sensor,pe-450,We-80,$);He.userData.slot="slot1",x.add(He);let Xe=Kt(120,12,100,yt.led,pe-450,We-146,$);x.add(Xe),Ee==="kamera3d"&&x.add(Kt(70,70,70,yt.led,pe-450,We-60,$+110))}}let V=null;o.s2&&(V=F4(300),V.group.userData.slot="slot2",x.add(V.group)),x.add(P.holder),P.holder.visible=!!V;let X=Hg(z.typ,i),Z=X.mats||X.mat,Y=()=>{let Ee=new Ke(X.geo,Z);return Ee.scale.setScalar(z.f),Ee.castShadow=Ee.receiveShadow=!0,Ee.userData.keepGeo=z.typ==="eigen",Ee.userData.slot="produkt",x.add(Ee),Ee},we=[];M={P:z,src:ne,tgt:fe,device:V,g:P,pickX:pe,placeX:ye,zLine:$,take:Ee=>{for(;we.length<=Ee;)we.push(Y());return we[Ee]},pool:we,clear:gf+z.size[1]};let ze=[o.produkt.typ,o.s1&&o.s1.modul,o.s2&&o.s2.modul,o.s3&&o.s3.modul].join();ze!==N&&(N=ze,k()),Ge(O),ee()}let N="";function k(){let z=new gt;if(x.children.forEach($=>{$.isMesh&&$.geometry.type==="PlaneGeometry"&&$.renderOrder<10||z.expandByObject($)}),z.isEmpty())return;let B=z.getCenter(new A),P=z.getSize(new A),W=Math.max(P.x,P.z*1.3,P.y*1.6)*.52/Math.tan(zt.degToRad(d.fov/2))/Math.max(1,d.aspect*.75);g.target.set(B.x,Math.min(B.y,900),B.z),d.position.set(B.x-W*.28,Math.min(B.y,900)+W*.55,B.z+W*.85),g.update()}let I=!1,O=0,G=0,J=new A,K=new A,q=new A,ie=new A,re=new A,_e=new A,j=new A,le=()=>Fs(Re?Re.takt:3,.9,30);function be(z,B,P){let{src:W,P:$,pickX:ne,zLine:fe}=M,pe=o.s1.lage==="chaotisch",ye=pe?(es(z+B)-.5)*1.2:0,lt=pe?(es(z+B+7)-.5)*.3*$.size[2]:0,xe=Math.max($.size[0],$.size[2])+200;return B*xe-xe*P>W.len-$.size[0]/2-150?null:{p:new A(ne-B*xe+xe*P,W.top,fe+lt),yaw:ye}}function Ie(z){let{tgt:B,placeX:P,zLine:W}=M;return{p:new A(P,B.top,W),i:0,total:1}}function Te(z,B){z.tex&&(z.tex.offset.x=-(B/300)%1)}let ke=z=>({langsam:.6,mittel:1,schnell:1.6})[z]||1;function Ge(z){if(!M)return;let{src:B,tgt:P,device:W,g:$,P:ne}=M;if(!B||!P||!W){if(M.pool.forEach(ft=>{ft.visible=!1}),B){let ft=be(0,0,0);if(ft){let ot=M.take(0);ot.visible=!0,ot.position.copy(ft.p)}}return}let fe=le(),pe=Math.floor(z),ye=z-pe,lt=z*fe,xe=Number(o.s2.hub)*1e3,Ce=$.range,et=!(Ce.aussen&&ne.griff>=Ce.aussen[0]&&ne.griff<=Ce.aussen[1])&&Ce.innen&&ne.innen&&ne.innen>=Ce.innen[0]&&ne.innen<=Ce.innen[1],Qt=et?ne.innen:ne.griff,Vn=et?Ce.innen:Ce.aussen,Ci=Fs((Vn[1]-Qt)/Math.max(1,Vn[1]-Vn[0]),0,1),Ln=Math.min(ne.size[1]*.6,$.reach*.8);ie.set(0,ne.size[1]-Ln,0);let sn=ne.typ==="eigen"&&i.part()?i.part().pose:null;sn&&(ie.set(sn.x,sn.y,sn.z).multiplyScalar(ne.f),et=sn.inside,sn.state==="gegriffen"&&sn.gripper===$.id?Ci=sn.t:et&&Ce.innen&&(Ci=Fs((Ce.innen[1]-ne.griff)/Math.max(1,Ce.innen[1]-Ce.innen[0]),0,1)));let Gn=(ft,ot)=>ot.copy(ie).applyAxisAngle(kg,ft),zs=Ai(ye,0,.14),pi=Ai(ye,.14,.24),Pi=Ai(ye,.24,.38),Ii=Ai(ye,.38,.62),os=Ai(ye,.62,.75),C=Ai(ye,.76,.84),V=Ai(ye,.84,.9),X=Ai(ye,.9,1),Z=be(pe,0,0)||{p:new A(M.pickX,B.top,M.zLine),yaw:0},Y=Ie(pe),we=zt.degToRad(Number(o.s2.dreh)||0),De=Gn(Z.yaw,re).add(Z.p),ze=Gn(we,_e).add(Y.p),Ee=Math.max(De.y,ze.y,M.clear+ie.y+40)+xe,We,He,Xe,pt;if(ye<.38)We=De.x,Xe=De.z,He=Ee+(De.y-Ee)*zs+(Ee-De.y)*Pi,pt=Z.yaw;else if(ye<.62)We=zt.lerp(De.x,ze.x,Ii),Xe=zt.lerp(De.z,ze.z,Ii),He=Ee,pt=zt.lerp(Z.yaw,we,Ii);else if(ye<.9)We=ze.x,Xe=ze.z,He=Ee+(ze.y-Ee)*os+(Ee-ze.y)*V,pt=we;else{let ft=be(pe+1,0,0)||Z,ot=Gn(ft.yaw,j).add(ft.p);We=zt.lerp(ze.x,ot.x,X),Xe=zt.lerp(ze.z,ot.z,X),He=Ee,pt=zt.lerp(we,ft.yaw,X)}$.set(et?1-(1-Ci)*pi*(1-C):Ci*pi*(1-C)),K.set(We,He+$.length,Xe),W.reach(K),W.tip(J),J.y-=$.length,We=J.x,He=J.y,Xe=J.z,$.holder.position.copy(J),$.holder.rotation.y=pt;let Gt=0,Ot=ye>=.24&&ye<.8,hn=ye>=.8,xt=Ai(ye,.3,1);for(let ft=ye>=.24?1:0;ft<6;ft++){let ot=be(pe,ft,xt);if(!ot)break;let Wt=M.take(Gt++);Wt.visible=!0,Wt.position.copy(ot.p),Wt.rotation.set(0,ot.yaw,0)}if(Ot){let ft=M.take(Gt++);ft.visible=!0,ft.position.copy(J).sub(Gn(pt,j)),ft.rotation.set(0,pt,0)}let Ne=ke(o.s3.band)*260;for(let ft=hn?0:1;ft<8;ft++){let ot=(hn?(ye-.8)*fe:(ye+.2)*fe)+(ft-(hn?0:1))*fe,Wt=M.placeX+ot*Ne;if(Wt>M.placeX+P.x1-100)break;let ks=M.take(Gt++);ks.visible=!0,ks.position.set(Wt,P.top,M.zLine),ks.rotation.set(0,we,0)}for(let ft=Gt;ft<M.pool.length;ft++)M.pool[ft].visible=!1;Te(B,(pe+xt)*(Math.max(ne.size[0],ne.size[2])+200)),Te(P,lt*Ne)}let Re=null,qe=120,U=6e3,ge=z=>qe*Math.pow(U/qe,z/100),te=z=>100*Math.log(Fs(z,qe,U)/qe)/Math.log(U/qe),de=t("#sim-tempo");de.addEventListener("input",()=>{o.tph=ge(Number(de.value)),ee()});function ee(){let z=o.s1&&o.s2&&o.s3;if(t("#sim-run").disabled=!z,de.disabled=!z,!z){Re=null,t("#sim-takt").textContent=t("#sim-stunde").textContent="\u2013";return}let B=o.tph||P4(o.s2).stunde,P=Re={takt:3600/B,stunde:B};document.activeElement!==de&&(de.value=te(B)),t("#sim-takt").textContent=`${Kn(P.takt,P.takt<10?1:0)} s`,t("#sim-stunde").textContent=Kn(B>=1e3?Math.round(B/10)*10:Math.round(B)),Ue(u(),P)}function Ue(z,B){let P=($,ne,fe)=>$?`${fe[$.modul].name} (`+ne.filter(pe=>!pe.when||pe.when($.modul,$)).map(pe=>`${pe.label}: ${Me(pe,$[pe.k])}`).join(", ")+")":"\u2013",W=["Guten Tag,","","\xFCber den Greifer-Simulator habe ich folgende Anlage zusammengestellt:","",`Greifer: ${i.active().code}`,`Produkt: ${z.name}, ca. ${Kn(z.size[0])} \xD7 ${Kn(z.size[1])} \xD7 ${Kn(z.size[2])} mm`,`1 Zuf\xFChrband: ${P(o.s1,pf,wc)}`,`2 Roboter: ${P(o.s2,mf,ff)}`,`3 Abf\xFChrband: ${P(o.s3,Ac,Ec)}`,"",`Simulation: Taktzeit ca. ${Kn(B.takt,1)} s, ca. ${Kn(B.stunde)} Teile pro Stunde.`,"",`Link zur Anlage: ${R()}`,"","Bitte senden Sie mir ein Angebot."].join(`
`);t("#sim-anfrage").href=`mailto:${e.dataset.mail}?subject=${encodeURIComponent("Anfrage \xFCber den Greifer-Simulator")}&body=${encodeURIComponent(W)}`}let Me=(z,B)=>z.opts?(z.opts.find(P=>P[0]===String(B))||["",B])[1]:`${Kn(Number(B),z.dec||0)}${z.unit?" "+z.unit:""}`;function R(){let z={g:i.active().id,...o};return location.href.split("#")[0]+"#sim="+btoa(unescape(encodeURIComponent(JSON.stringify(z))))}t("#sim-reset").addEventListener("click",()=>{l(),N="",L(),E()});function E(){let z=u(),B=(xe,Ce,et,Qt,Vn)=>`<button type="button" class="sim__card${a===xe?" is-active":""}${Qt?"":" is-empty"}" data-slot="${xe}">
      <span class="sim__num">${Ce}</span><span><span class="sim__ct">${et}</span><strong>${Qt||"Modul w\xE4hlen"}</strong><small>${Vn||""}</small></span></button>`;t("#sim-slots").innerHTML=B("produkt","\u25C6","Produkt",z.name,`${Kn(z.size[0])} \xD7 ${Kn(z.size[1])} \xD7 ${Kn(z.size[2])} mm`+(z.typ==="eigen"?i.part()&&i.part().pose?" \xB7 Greifpunkt aus dem Konfigurator":" \xB7 Greifpunkt: mittig von oben":""))+B("slot1","1","Zuf\xFChrband",o.s1&&wc[o.s1.modul].name,o.s1&&wc[o.s1.modul].info)+B("slot2","2","Roboter",o.s2&&ff[o.s2.modul].name,o.s2&&`${i.active().code} am Roboter, fest montiert`)+B("slot3","3","Abf\xFChrband",o.s3&&Ec[o.s3.modul].name,o.s3&&Ec[o.s3.modul].info),t("#sim-slots").querySelectorAll("[data-slot]").forEach(xe=>xe.addEventListener("click",()=>{a=xe.dataset.slot,E()})),t("#sim-greifer").textContent=`${i.active().code} (aus dem Konfigurator)`;let P=I?2:o.s1&&o.s2&&o.s3?1:0;t("#sim-steps").querySelectorAll("li").forEach((xe,Ce)=>{xe.className=Ce<P?"is-done":Ce===P?"is-current":""});let W=t("#sim-params");if(a==="produkt"){W.innerHTML=`<h3>Produkt</h3>
        <div class="field"><label for="sim-p-typ">Produktart</label><select id="sim-p-typ">${Object.entries(hf).map(([Ce,et])=>`<option value="${Ce}"${Ce===o.produkt.typ?" selected":""}>${et.name}${et.branche?" \xB7 "+et.branche:""}</option>`).join("")}</select></div>
        <div class="field"><label for="sim-p-gr">Gr\xF6\xDFe <output>${o.produkt.groesse} %</output></label><input id="sim-p-gr" type="range" min="50" max="200" step="5" value="${o.produkt.groesse}"></div>
        <p class="muted sim__small">${z.typ==="eigen"?i.part()&&i.part().pose?"Ma\xDFe und Greifpunkt kommen aus dem Konfigurator oben.":'Die Ma\xDFe kommen aus dem Konfigurator oben. Greifpunkt noch nicht festgelegt: der Greifer fasst mittig von oben. <a href="#greifpunkt">Greifpunkt festlegen</a>':hf[z.typ].info}</p>`,W.querySelector("#sim-p-typ").addEventListener("change",Ce=>{o.produkt={typ:Ce.target.value,groesse:100},L(),E()});let xe=W.querySelector("#sim-p-gr");xe.addEventListener("input",()=>{xe.previousElementSibling.querySelector("output").textContent=xe.value+" %"}),xe.addEventListener("change",()=>{o.produkt.groesse=Number(xe.value),L(),E()});return}let $=a==="slot1"?wc:a==="slot2"?ff:Ec,ne=a==="slot1"?pf:a==="slot2"?mf:Ac,fe=a==="slot1"?"s1":a==="slot2"?"s2":"s3",pe=o[fe],ye={slot1:"1 \xB7 Zuf\xFChrband",slot2:"2 \xB7 Roboter",slot3:"3 \xB7 Abf\xFChrband"}[a],lt=Object.keys($).length>1;W.innerHTML=`<h3>${ye}</h3>`+(lt?`<div class="sim__tiles">${Object.entries($).map(([xe,Ce])=>`<button type="button" class="sim__tile${pe&&pe.modul===xe?" is-active":""}" data-modul="${xe}"><img alt="" data-thumb="${a}:${xe}"><strong>${Ce.name}</strong><small>${Ce.info}</small></button>`).join("")}</div>`:`<p class="muted sim__small">${pe?$[pe.modul].name+": "+$[pe.modul].info:""}</p>`)+(pe?`<div class="sim__fields">${ne.filter(xe=>!xe.when||xe.when(pe.modul,pe)).map(xe=>xe.opts?`<div class="field"><label for="sim-f-${xe.k}">${xe.label}</label><select id="sim-f-${xe.k}" data-k="${xe.k}">${xe.opts.map(([Ce,et])=>`<option value="${Ce}"${String(pe[xe.k])===Ce?" selected":""}>${et}</option>`).join("")}</select></div>`:`<div class="field"><label for="sim-f-${xe.k}">${xe.label} <output>${Me(xe,pe[xe.k])}</output></label><input id="sim-f-${xe.k}" data-k="${xe.k}" type="range" min="${xe.range[0]}" max="${xe.range[1]}" step="${xe.range[2]}" value="${pe[xe.k]}"></div>`).join("")}</div>`:""),W.querySelectorAll("[data-modul]").forEach(xe=>xe.addEventListener("click",()=>{let Ce=xe.dataset.modul;o[fe]={...Zo(ne),...o[fe]||{},modul:Ce},fe==="s2"&&(o.tph=null),L(),E()})),W.querySelectorAll("[data-k]").forEach(xe=>{let Ce=ne.find(et=>et.k===xe.dataset.k);xe.addEventListener("input",()=>{Ce.range&&(xe.previousElementSibling.querySelector("output").textContent=Me(Ce,xe.value))}),xe.addEventListener("change",()=>{pe[Ce.k]=Ce.range?Number(xe.value):xe.value,L(),E()})}),ue(W)}let H=new Map,oe=null;function ue(z){z.querySelectorAll("[data-thumb]").forEach(B=>{let P=B.dataset.thumb;if(!H.has(P))try{H.set(P,ae(P))}catch{H.set(P,"")}H.get(P)&&(B.src=H.get(P))})}function ae(z){let[B,P]=z.split(":");oe||(oe=new ki({antialias:!0,preserveDrawingBuffer:!0}),oe.setSize(200,130),oe.toneMapping=Wi);let W=new Cn;W.background=new Ve(15659508),W.add(new Ss(16777215,12568269,1.2));let $=new Gi(16777215,1.4);$.position.set(-2,4,3),W.add($);let ne={size:[300,200,300]},fe;if(B==="slot1")fe=L4(P,ne).group;else if(B==="slot3")fe=D4(P,ne,Zo(Ac)).group;else{let et=F4(300);et.reach(new A(900,900,0)),fe=et.group}W.add(fe);let pe=new gt().setFromObject(fe),ye=pe.getCenter(new A),lt=pe.getSize(new A).length(),xe=new Dt(30,200/130,10,1e5);xe.position.set(ye.x-lt*.9,ye.y+lt*.55,ye.z+lt*1.25),xe.lookAt(ye),oe.render(W,xe);let Ce=oe.domElement.toDataURL("image/png");return W.traverse(et=>{et.geometry&&et.geometry.dispose()}),Ce}let Pe=600,se=null,Ae=t("#sim-foto"),Le=t("#sim-foto-status"),Ye=t("#sim-foto-save");async function ce(){if(se||!f)return;se={wasRunning:I,env:c.environment,bg:c.background,envI:c.environmentIntensity,fog:c.fog},I=!1,Ae.textContent="\u2715 Zur\xFCck zur Simulation",Le.hidden=!1,Le.textContent="Szene wird vorbereitet \u2026";let z=new Zr;z.topColor.set(16777215),z.bottomColor.set(8159882),z.update(),c.environment=z,c.background=new Ve(14278114),c.environmentIntensity=.9,c.fog=null,se.hidden=x.children.filter(P=>P.renderOrder===10&&P.visible),se.hidden.forEach(P=>{P.visible=!1});let B=new Tc(f);if(B.tiles.set(2,2),B.bounces=6,B.filterGlossyFactor=.4,B.minSamples=1,B.renderDelay=0,B.fadeDuration=300,B.dynamicLowRes=!0,se.pt=B,se.sky=z,await new Promise(P=>setTimeout(P,60)),!!se){try{B.setScene(c,d)}catch(P){console.error("Foto-Modus:",P),F(),Le.hidden=!1,Le.textContent="Foto-Modus wird von dieser Grafik nicht unterst\xFCtzt";return}se&&(se.ready=!0,g.addEventListener("change",Je),E())}}function Je(){se&&se.ready&&se.pt.updateCamera()}function F(){if(se){g.removeEventListener("change",Je),c.environment=se.env,c.background=se.bg,c.environmentIntensity=se.envI,c.fog=se.fog;try{se.pt&&se.pt.dispose()}catch{}se.sky&&se.sky.dispose(),(se.hidden||[]).forEach(z=>{z.visible=!0}),I=se.wasRunning,se=null,Ae.textContent="\u{1F4F7} Foto rendern",Le.hidden=!0,Ye.hidden=!0,T(),E()}}Ae.addEventListener("click",()=>{se?F():ce()}),Ye.addEventListener("click",()=>{se&&(se.save=!0)});function he(){let z=se.pt;z.samples<Pe&&z.renderSample();let B=Math.floor(z.samples);if(Le.textContent=B<Pe?`Rendert \u2026 ${Math.round(B/Pe*100)} %`:"Fertig gerendert",Ye.hidden=B<30,se.save){se.save=!1;let P=document.createElement("a");P.download="GMG-Greifer-Simulation.png",P.href=h.toDataURL("image/png"),P.click()}}let ve=t("#sim-run");ve.addEventListener("click",()=>{se&&F(),I=!I,ve.textContent=I?"Simulation anhalten":"Simulation fortsetzen",E()}),t("#sim-teilen").addEventListener("click",async()=>{let z=R();try{await navigator.clipboard.writeText(z),t("#sim-teilen").textContent="Link kopiert"}catch{window.prompt("Link zur Anlage:",z)}history.replaceState(null,"",z),setTimeout(()=>{t("#sim-teilen").textContent="Anlage teilen"},2500)});let me=!1;new IntersectionObserver(z=>{me=z[0].isIntersecting}).observe(s);function Be(){if(requestAnimationFrame(Be),!me||n.hidden)return;D&&D.id!==i.active().id&&i.active().ready&&(D=null,L(),E());let z=performance.now(),B=Math.min(.1,(z-(G||z))/1e3);if(G=z,se){g.update(),se.ready&&he();return}I&&(O+=B/le()),Ge(O),g.update(),p.render()}async function je(z){if(r||(r=!0,await Xg(i.base||""),_(),Be()),z){z.g&&z.g!==i.active().id&&await i.select(z.g);for(let B of["produkt","s1","s2","s3","tph"])B in z&&(o[B]=z[B]);for(let B of["s1","s2","s3"])o[B]&&I4[o[B].modul]&&(o[B].modul=I4[o[B].modul])}else l();D=null,L(),E(),I=!0,ve.textContent="Simulation anhalten",O=0}i.onPart(()=>{r&&(o.produkt.typ!=="eigen"&&(o.produkt={typ:"eigen",groesse:100}),L(),E())});let Qe=null;if(location.hash.startsWith("#sim="))try{Qe=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(5)))))}catch{}if(Qe)je(Qe).then(()=>e.scrollIntoView());else{let z=new IntersectionObserver(B=>{B[0].isIntersecting&&(z.disconnect(),je())},{rootMargin:"600px 0px"});z.observe(e)}window.__sim={dbg:()=>({renderer:f,scene:c,composer:p}),open:je,S:o,belts:()=>({src:M.src.tex?M.src.tex.offset.x:M.src.rollers&&M.src.rollers[0]?M.src.rollers[0].rotation.y:null,tgt:M.tgt.tex?M.tgt.tex.offset.x:null}),frame:z=>{O=z/le(),I=!1},eval:()=>Re,A:()=>M,gap:()=>{let z=new A;M.device.tip(z);let B=new gt().setFromObject(M.g.holder);return{top:B.max.y-z.y,dx:Math.hypot((B.min.x+B.max.x)/2-z.x,(B.min.z+B.max.z)/2-z.z),want:z.toArray().map(Math.round)}},build:()=>{L(),E()}}}var ni=document.querySelector("[data-konfigurator]"),to=ni.dataset.base||"",Oe=i=>ni.querySelector(i),Jg=100*1024*1024,Kg=25*1024*1024,Sf=[],_f=null,Tf=null,ht=(i,e=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:e,minimumFractionDigits:e}),yf=Oe(".kfg__view"),H4=yf.querySelector("canvas"),is=new ki({canvas:H4,antialias:!0,alpha:!0});is.setPixelRatio(Math.min(window.devicePixelRatio,2));is.toneMapping=Wi;is.shadowMap.enabled=!0;is.shadowMap.type=Ao;var di=new Cn;di.environment=new zi(is).fromScene(new Er(is),.04).texture;var ns=new Dt(35,1,1,1e5),Rc=new Tr(ns,H4);Rc.enableDamping=!0;var Ri=new Gi(16777215,1.3);Ri.castShadow=!0;Ri.shadow.mapSize.set(2048,2048);Ri.shadow.bias=-4e-4;di.add(Ri,Ri.target,new Ss(16777215,12897492,.55));var Ic=new Ke(new Yn(1,1),new el({opacity:.16}));Ic.rotation.x=-Math.PI/2;Ic.receiveShadow=!0;var V4=new ol(1,20,12831700,14673130);di.add(Ic,V4);var Kr=Zh.pivots,G4=zt.degToRad(57);var Qg=14.8,e7=32,bf=10,W4={gehaeuse:new $e({color:2830392,metalness:.65,roughness:.4}),backe:new $e({color:9345188,metalness:.9,roughness:.34}),kurbel:new $e({color:25002,metalness:.55,roughness:.32}),lenker:new $e({color:11121599,metalness:.95,roughness:.25}),koppel:new $e({color:11121599,metalness:.95,roughness:.25}),schieber:new $e({color:12041927,metalness:1,roughness:.18})},t7=new $e({color:3054939,metalness:.6,roughness:.35}),n7=new $e({color:13121325,metalness:.5,roughness:.4}),Qo=new Ft,wf=new Ft;wf.rotation.z=-Math.PI/2;var Ef=new Ft;Ef.position.set(-62.6,-24.75,-49.425);wf.add(Ef);Qo.add(wf);di.add(Qo);var Sn={};for(let[i,e]of Object.entries(Zh.groups)){let t=new at;t.setAttribute("position",new it(e.v,3)),t.setIndex(e.i),t=qi(t,zt.degToRad(35)),t.boundsTree=new ci(t);let n=new Ke(t,W4[i.split("_")[0]]);n.castShadow=n.receiveShadow=!0,n.matrixAutoUpdate=!1,Sn[i]=n,Ef.add(n)}var B4=(i,e,t)=>{let n=i[0]-e[0],s=i[1]-e[1];return[e[0]+n*Math.cos(t)-s*Math.sin(t),e[1]+n*Math.sin(t)+s*Math.cos(t)]};function X4(i,e,t=[0,0]){let n=Math.cos(e),s=Math.sin(e);return new Fe().set(n,0,-s,i[0]-(n*i[0]-s*i[1])+t[0],0,1,0,0,s,0,n,i[1]-(s*i[0]+n*i[1])+t[1],0,0,0,1)}function z4(i,e,t,n){let s=Math.atan2(n[1]-t[1],n[0]-t[0])-Math.atan2(e[1]-i[1],e[0]-i[0]);return X4(i,s,[t[0]-i[0],t[1]-i[1]])}function Cc(i){let e=0;for(let t of["a","b"]){let n=(t==="a"?1:-1)*i,s=Kr["P1"+t],r=Kr["P2"+t],o=Kr["C"+t],a=Kr["J1"+t],l=Kr["J2"+t],u=Kr["S"+t],h=B4(a,s,n),f=B4(o,s,n);Sn["kurbel_"+t].matrix.copy(X4(s,n));let c=[h[0]-a[0],h[1]-a[1]];Sn["backe_"+t].matrix.makeTranslation(c[0],0,c[1]),Sn["lenker_"+t].matrix.copy(z4(r,l,r,[l[0]+c[0],l[1]+c[1]]));let d=Math.hypot(o[0]-u[0],o[1]-u[1]),g=[f[0]-Math.sqrt(Math.max(0,d*d-(f[1]-u[1])**2)),u[1]];Sn["koppel_"+t].matrix.copy(z4(u,o,g,f)),e=g[0]-u[0]}Sn.schieber.matrix.makeTranslation(e,0,0),Sn.gehaeuse.matrix.identity(),Qo.updateMatrixWorld(!0)}var vn=null,ei=null,Qn={x:0,y:0,z:0},Mn=null,Jo=null,ea=new gt,i7=new $e({color:14263361,metalness:.2,roughness:.55});function s7(){if(ei==="form")return{f:1,auto:!0,label:"mm"};let i=Oe("#kfg-einheit").value;if(i!=="auto")return{f:{mm:1,cm:10,m:1e3}[i],auto:!1};if(ei!=="stl")return{f:1,auto:!0,label:"mm"};let e=new A;return vn.boundingBox.getSize(e),Math.max(e.x,e.y,e.z)<2?{f:1e3,auto:!0,label:"m"}:{f:1,auto:!0,label:"mm"}}function rs(i){if(!vn)return;Tf&&K4(null);let{f:e,auto:t,label:n}=s7();Oe("#kfg-einheit-info").textContent=t?ei==="step"||ei==="muster"?"aus der STEP-Datei \xFCbernommen (mm)":ei==="form"?"Grundform in mm":`erkannt: ${n}`:"";let s=vn.clone();if(s.scale(e,e,e),s.computeBoundingBox(),i){let o=new A;s.boundingBox.getSize(o),Qn={x:0,y:o.z>o.x?1:0,z:0}}s.applyMatrix4(new Fe().makeRotationX(Qn.x*Math.PI/2)),s.applyMatrix4(new Fe().makeRotationZ(Qn.z*Math.PI/2)),s.applyMatrix4(new Fe().makeRotationY(Qn.y*Math.PI/2)),s.computeBoundingBox();let r=new A;s.boundingBox.getCenter(r),s.translate(-r.x,-s.boundingBox.min.y,-r.z),s.computeBoundingBox(),s.attributes.position.count<12e5?qi(s,Math.PI/6):s.computeVertexNormals(),Mn&&(di.remove(Mn),Mn.geometry.dispose()),Mn=new Ke(s,i7),Mn.castShadow=Mn.receiveShadow=!0,di.add(Mn),Jo=new ci(s),ea.copy(s.boundingBox),hi=r7(),fi==="innen"&&!hi&&no("aussen"),Oe("#kfg-griff-innen").disabled=!hi||!nt.range.innen,$4(),Rf(),Lc(),ti()}var fi="aussen",hi=null;function r7(){let i=new A;ea.getSize(i);let e=new wi;for(let t of[.6,.45,.75,.3]){let n=new A(0,i.y*t,0);if(e.set(n,new A(0,1,0)),Jo.raycastFirst(e,rn))continue;e.set(n,new A(0,0,1));let s=Jo.raycastFirst(e,rn);e.set(n,new A(0,0,-1));let r=Jo.raycastFirst(e,rn);if(s&&r)return s.distance+r.distance}return null}var o7=(()=>{Qo.scale.setScalar(bf);let i=n=>{Cc(n);let s=new gt().setFromObject(Sn.backe_a),r=new gt().setFromObject(Sn.backe_b);return{gap:r.min.z-s.max.z,outer:r.max.z-s.min.z}},e=i(0),t=i(G4);return Cc(0),{aussen:[Math.max(0,t.gap),e.gap],innen:[t.outer,e.outer]}})(),Os={capit:{id:"capit",code:"Capit",name:"Gelenk-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 320 mm lang)",root:Qo,meshes:Object.values(Sn),contact:[Sn.backe_a,Sn.backe_b],ready:!0,set:i=>Cc(G4*i),range:o7,reach:Qg*bf,length:e7*bf,word:"Beide Backen liegen",paint:i=>{for(let e of[Sn.backe_a,Sn.backe_b])e.material=i==="gegriffen"?t7:i==="kollision"?n7:W4.backe}},tentra:{id:"tentra",code:"Tentra T3",name:"Tentakelgreifer, 3 Finger",note:"Testmodell in Originalgr\xF6\xDFe (\xD8 104 mm, 166 mm hoch)",ready:!1,range:{aussen:[16,78],innen:null},reach:100,length:166,word:"Die Finger liegen",load:()=>l7()},pinza:{id:"pinza",code:"Pinza adattiva",name:"Adaptiver 2-Finger-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 180 mm hoch, Hub bis 85 mm)",ready:!1,range:{aussen:[0,85],innen:[60,140]},reach:74,length:180,word:"Beide Finger liegen",load:()=>c7()}},nt=Os.capit,Us={dunkel:new $e({color:2041904,metalness:.5,roughness:.45}),platte:new $e({color:9345186,metalness:.7,roughness:.35}),finger:new $e({color:13127706,metalness:.15,roughness:.5}),polster:new $e({color:1014392,metalness:.1,roughness:.7}),stahl:new $e({color:12041927,metalness:1,roughness:.22}),gelb:new $e({color:14262330,metalness:.6,roughness:.35})},q4=new $e({color:3054939,metalness:.1,roughness:.6}),Y4=new $e({color:13121325,metalness:.1,roughness:.6}),a7=i=>/Vertebra/.test(i)?Us.finger:/Contact_pad/.test(i)?Us.polster:/Upper_plate/.test(i)?Us.platte:/screw|nut|standoff/i.test(i)?Us.stahl:/spool|actuator/i.test(i)?Us.gelb:Us.dunkel;async function l7(){let i=await(await fetch(to+"data/3d/tentra-t3.json")).json(),e=Os.tentra,t=new Ft,n=new Ft;n.position.y=117.8,t.add(n);let s=[],r=[],o=[],a=[];for(let d of i.parts){let g=new at;g.setAttribute("position",new it(d.p,3)),g.setIndex(d.i),g=qi(g,zt.degToRad(35)),g.boundsTree=new ci(g);let x=new Ke(g,a7(d.name));if(x.castShadow=x.receiveShadow=!0,x.matrixAutoUpdate=!1,n.add(x),s.push(x),a.push(x),/Contact_pad/.test(d.name)&&r.push(x),d.bewegung){let p=d.bewegung;o.push({mesh:x,parent:p.parent,pivot:new A(...p.pivot),q:new un(...p.q),rest:new A(...p.rest)})}}let l=new un,u=new Fe,h=new Fe,f=new Fe;e.set=d=>{for(let g of o)l.identity().slerp(g.q,d),f.makeTranslation(g.pivot.x+g.rest.x*d,g.pivot.y+g.rest.y*d,g.pivot.z+g.rest.z*d).multiply(u.makeRotationFromQuaternion(l)).multiply(h.makeTranslation(-g.pivot.x,-g.pivot.y,-g.pivot.z)),g.parent>=0?g.mesh.matrix.multiplyMatrices(a[g.parent].matrix,f):g.mesh.matrix.copy(f);t.updateMatrixWorld(!0)},e.paint=d=>{for(let g of r)g.material=d==="gegriffen"?q4:d==="kollision"?Y4:Us.polster},e.root=t,e.meshes=s,e.contact=o.map(d=>d.mesh);let c=d=>{e.set(d);let g=1/0,x=new A;for(let p of r){let m=p.geometry.attributes.position;for(let _=0;_<m.count;_++)x.fromBufferAttribute(m,_).applyMatrix4(p.matrixWorld),g=Math.min(g,Math.hypot(x.x,x.z))}return g};e.range={aussen:[2*c(1),2*c(0)],innen:null},e.set(0),e.ready=!0}async function c7(){let i=await(await fetch(to+"data/3d/pinza-adattiva.json")).json(),e=Os.pinza,t=new Ft,n=new Ft,s=new Ft;s.rotation.set(0,Math.PI/2,Math.PI),n.position.y=149,n.add(s),t.add(n);let r={gehaeuse:new $e({color:2304303,metalness:.4,roughness:.5}),hebel:new $e({color:11055290,metalness:.85,roughness:.3}),finger:new $e({color:5989228,metalness:.6,roughness:.4})},o={};for(let[p,m]of Object.entries(i.groups)){let _=new at;_.setAttribute("position",new it(m.v,3)),_.setIndex(m.i),_=qi(_,zt.degToRad(35)),_.boundsTree=new ci(_);let v=new Ke(_,r[p.split("_")[0]]);v.castShadow=v.receiveShadow=!0,v.matrixAutoUpdate=!1,s.add(v),o[p]=v}let a=i.pivots,l=zt.degToRad(-20),u=zt.degToRad(26),h=(p,m,_)=>new Fe().makeTranslation(p,m,0).multiply(new Fe().makeRotationZ(_)).multiply(new Fe().makeTranslation(-p,-m,0));e.set=p=>{let m=l+(u-l)*p;for(let[_,v]of[["_r",1],["_l",-1]]){let y=v*m,T=[v*a.A[0],a.A[1]],S=[v*a.B[0],a.B[1]],w=[v*a.A2[0]-T[0],a.A2[1]-T[1]];o["hebel_a"+_].matrix.copy(h(T[0],T[1],y)),o["hebel_b"+_].matrix.copy(h(S[0],S[1],y));let D=w[0]*Math.cos(y)-w[1]*Math.sin(y)-w[0],b=w[0]*Math.sin(y)+w[1]*Math.cos(y)-w[1];o["finger"+_].matrix.makeTranslation(D,b,0)}o.gehaeuse.matrix.identity(),t.updateMatrixWorld(!0)};let f=[o.finger_r,o.finger_l],c=r.finger;e.paint=p=>{for(let m of f)m.material=p==="gegriffen"?q4:p==="kollision"?Y4:c},e.root=t,e.meshes=Object.values(o),e.contact=f;let d=p=>{e.set(p);let m=new gt().setFromObject(o.finger_r),_=new gt().setFromObject(o.finger_l),[v,y]=m.min.z<_.min.z?[m,_]:[_,m];return{gap:y.min.z-v.max.z,outer:y.max.z-v.min.z}},g=d(0),x=d(1);e.range={aussen:[Math.max(0,x.gap),g.gap],innen:[x.outer,g.outer]},e.set(0),e.ready=!0}async function Af(i){let e=Os[i];if(!e.ready){Oe("#kfg-status").className="kfg__status is-info",Oe("#kfg-status").textContent=`${e.code} wird geladen \u2026`;try{await e.load()}catch{Oe("#kfg-status").textContent=`${e.code} konnte nicht geladen werden.`;return}}nt.root&&di.remove(nt.root),nt=e,di.add(nt.root),nt.root.visible=!0,Oe("#kfg-badge").textContent=`Greifer ${nt.code} (Testmodell) in Originalgr\xF6\xDFe`,!nt.range.innen&&fi==="innen"&&(fi="aussen"),no(fi)}function $4(){let i=new A;ea.getSize(i);let e=nt.length,t=Math.max(i.x,i.z,i.y+e*.75);Ic.scale.set(t*8,t*8,1),V4.scale.setScalar(t*4),Ri.position.set(-t*1.5,t*3,t*1.2),Object.assign(Ri.shadow.camera,{left:-t*2,right:t*2,top:t*2,bottom:-t*2,near:t*.1,far:t*10}),Ri.shadow.normalBias=t*.006,Ri.shadow.camera.updateProjectionMatrix(),Rc.target.set(0,i.y*.5+e*.3,0),ns.position.set(t*1.15,t*.8,t*1.45),ns.near=t/200,ns.far=t*100,ns.updateProjectionMatrix(),Rc.update()}function u7(i){let e=i.attributes.position,t=i.index,n=new A,s=new A,r=new A,o=0,a=t?t.count:e.count;for(let l=0;l<a;l+=3){let u=t?t.getX(l):l,h=t?t.getX(l+1):l+1,f=t?t.getX(l+2):l+2;n.fromBufferAttribute(e,u),s.fromBufferAttribute(e,h),r.fromBufferAttribute(e,f),o+=n.dot(s.cross(r))/6}return Math.abs(o)}var In=null;function Rf(){let i=new A;ea.getSize(i);let e=i.x*i.y*i.z,t=u7(Mn.geometry);t>0&&t<=e*1.01||(t=e*.5);let n=Number(Oe("#kfg-material").value),s=t*1e-9*n;In={s:i,vol:t,mass:s,grip:fi==="innen"&&hi?hi:i.z,soft:Oe("#kfg-material").selectedOptions[0].dataset.weich==="1"},Oe("#kfg-masse").textContent=`${ht(i.x)} \xD7 ${ht(i.y)} \xD7 ${ht(i.z)} mm (L \xD7 H \xD7 Greifbreite)`+(hi?` \xB7 Innenma\xDF ${ht(hi)} mm`:""),Oe("#kfg-gewicht").textContent=s<1?`ca. ${ht(s*1e3)} g`:`ca. ${ht(s,1)} kg`,Sf.forEach(r=>r())}document.addEventListener("click",i=>{let e=Oe("#kfg-vorschlag .kfg__dd");!e||!e.classList.contains("is-open")||e.contains(i.target)||(e.classList.remove("is-open"),e.querySelector(".kfg__dd-list").hidden=!0,e.querySelector(".kfg__dd-btn").setAttribute("aria-expanded","false"))});function Lc(){if(!In)return;let i=n=>`au\xDFen ${ht(n.range.aussen[0])}\u2013${ht(n.range.aussen[1])} mm`+(n.range.innen?` \xB7 innen ${ht(n.range.innen[0])}\u2013${ht(n.range.innen[1])} mm`:" \xB7 kein Innengreifen"),e=nt.id+Object.values(Os).map(n=>n.ready).join();if(Oe("#kfg-vorschlag").dataset.sig!==e){Oe("#kfg-vorschlag").dataset.sig=e,Oe("#kfg-vorschlag").innerHTML=`<div class="kfg__dd">
    <button type="button" class="kfg__dd-btn" aria-expanded="false" aria-haspopup="listbox">
      <span><strong>${nt.code}</strong> <span class="kfg__fam">${nt.name}</span><span class="kfg__why">Greifweite ${i(nt)}</span></span>
      <span class="kfg__dd-arrow" aria-hidden="true">\u25BE</span></button>
    <div class="kfg__dd-list" role="listbox" hidden>${Object.values(Os).map(a=>`
      <button type="button" class="kfg__card${a===nt?" is-active":""}" role="option" data-greifer="${a.id}" aria-selected="${a===nt}">
        <span class="kfg__rank">${a===nt?"Ausgew\xE4hlt":"Ausw\xE4hlen"}</span>
        <strong>${a.code}</strong> <span class="kfg__fam">${a.name}</span>
        <span class="kfg__why">Greifweite ${i(a)}</span>
        <span class="kfg__note">${a.note}</span>
      </button>`).join("")}
      <p class="kfg__small muted">Greifer mit 3D-Modell. Weitere GMG-Greifer folgen.</p>
    </div></div>`;let n=Oe("#kfg-vorschlag .kfg__dd"),s=n.querySelector(".kfg__dd-btn"),r=n.querySelector(".kfg__dd-list"),o=a=>{r.hidden=!a,s.setAttribute("aria-expanded",String(a)),n.classList.toggle("is-open",a)};s.addEventListener("click",()=>o(r.hidden)),n.addEventListener("keydown",a=>{a.key==="Escape"&&(o(!1),s.focus())}),r.querySelectorAll("[data-greifer]").forEach(a=>a.addEventListener("click",()=>{o(!1),a.dataset.greifer!==nt.id&&Af(a.dataset.greifer)}))}let t=["Guten Tag,","","\xFCber den Greifer-Konfigurator m\xF6chte ich folgendes Teil anfragen:",`Teil: ${Bs}`,`Abmessungen: ${ht(In.s.x)} \xD7 ${ht(In.s.y)} \xD7 ${ht(In.s.z)} mm (L \xD7 H \xD7 Greifbreite)`,`Werkstoff: ${Oe("#kfg-material").selectedOptions[0].textContent}`,`Gewicht (gesch\xE4tzt): ${ht(In.mass,2)} kg`,"","(Falls vorhanden, bitte die STEP-Datei an diese E-Mail anh\xE4ngen.)"].join(`
`);Oe("#kfg-anfrage").href="mailto:info@gmg-system.com?subject="+encodeURIComponent("Greiferanfrage \xFCber den Konfigurator")+"&body="+encodeURIComponent(t)}var h7=new Fe,Z4=i=>Jo.intersectsGeometry(i.geometry,h7.copy(i.matrixWorld)),k4=()=>nt.contact.some(Z4),f7=()=>nt.meshes.some(Z4);function ti(){if(!Mn)return;let i=new A;ea.getSize(i);let e=fi==="innen",t=nt.reach,n=Oe("#kfg-hoehe").value/100,s=i.y+t*.25,r=Math.max(i.y*.04,i.y-t*.9);nt.root.position.y=s+(r-s)*n;let o=i.x/2+t,a=i.z/2+t;nt.root.position.x=Oe("#kfg-x").value/100*o,nt.root.position.z=Oe("#kfg-z").value/100*a,nt.root.updateMatrixWorld(!0);let l=Oe("#kfg-zu").value/100,u=e?1:0,h=e?1-l:l;nt.set(u);let f,c=h;if(f7())f="kollision",c=u;else if(nt.set(h),k4()){let m=u,_=h;for(let v=0;v<14;v++){let y=(m+_)/2;nt.set(y),k4()?_=y:m=y}c=m,f="gegriffen"}else f=l>=.99?"leer":"offen";nt.set(c),_f={x:nt.root.position.x,y:nt.root.position.y,z:nt.root.position.z,t:c,state:f,inside:e};let d=i.y-nt.root.position.y;nt.paint(f);let g=e?`an den Innenw\xE4nden (Innenma\xDF ${ht(In.grip)} mm)`:`am Teil (Greifbreite ${ht(In.grip)} mm)`,x={kollision:["bad",e?"Kollision: Der geschlossene Greifer passt so nicht in den Hohlraum. H\xF6her fahren.":"Kollision: Der Greifer st\xF6\xDFt beim Absenken auf das Teil. Weiter \xF6ffnen oder h\xF6her fahren."],gegriffen:d>=Math.min(t*.35,i.y*.5)?["ok",`${e?"Innen gegriffen":"Gegriffen"}: ${nt.word} ${g} an.`]:["warn","Gegriffen, aber nur an der Kante. F\xFCr sicheren Halt den Greifer tiefer fahren."],leer:["warn",d<=0?"Der Greifer ist \xFCber dem Teil und greift ins Leere. Mit \u201EH\xF6he\u201C absenken.":e?"Greifer ganz ge\xF6ffnet, ohne die Innenw\xE4nde zu ber\xFChren.":"Greifer geschlossen, ohne das Teil zu ber\xFChren."],offen:["info",e?"Greifer in den Hohlraum absenken und mit \u201EGreifer \xF6ffnen\u201C spreizen.":"Mit \u201EGreifer schlie\xDFen\u201C zufahren und pr\xFCfen, wie das Teil gegriffen wird."]}[f],p=Oe("#kfg-status");p.className="kfg__status is-"+x[0],p.textContent=x[1]}function no(i){fi=i,ni.querySelectorAll("[data-griff]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.griff===i?"true":"false")),Oe("#kfg-zu-label").textContent=i==="innen"?"Greifer \xF6ffnen (innen spreizen)":"Greifer schlie\xDFen",Oe("#kfg-zu").value=0,Oe("#kfg-griff-innen").disabled=!hi||!nt.range.innen,Mn&&($4(),Rf(),Lc(),ti())}var Qr=Oe(".kfg__progress");function ts(i,e){Qr.hidden=!1;let t=Math.max(0,Math.min(100,i));Qr.querySelector(".kfg__ring-bar").style.strokeDashoffset=String(100-t),Qr.querySelector(".kfg__ring-pct").textContent=Math.round(t)+" %",e&&(Qr.querySelector(".kfg__ring-label").textContent=e)}var d7=()=>new Promise(i=>requestAnimationFrame(()=>setTimeout(i,0)));function p7(i,e){return new Promise((t,n)=>{let s=new FileReader;s.onprogress=r=>r.lengthComputable&&e(r.loaded/r.total),s.onload=()=>t(s.result),s.onerror=()=>n(new Error("Datei konnte nicht gelesen werden.")),s.readAsArrayBuffer(i)})}function m7(i){return Ar(i.map(e=>{let t=new at;return t.setAttribute("position",new it(e.attributes.position.array,3)),e.index&&t.setIndex(Array.from(e.index.array)),t.index?t.toNonIndexed():t}))}function g7(i,e){return new Promise((t,n)=>{let s=new Worker(to+"assets/vendor/occt/gmg-step-worker.js"),r=2500+i.byteLength/1048576*900,o=performance.now(),a=setInterval(()=>e(1-Math.exp(-(performance.now()-o)/r)),120),l=()=>{clearInterval(a),s.terminate()};s.onerror=()=>{l(),n(new Error("STEP-Leser konnte nicht gestartet werden."))},s.onmessage=u=>{l();let h=u.data;if(!h||!h.success||!h.meshes.length){n(new Error("Die STEP-Datei enth\xE4lt keine lesbaren K\xF6rper."));return}e(1),t(m7(h.meshes))},s.postMessage({buffer:new Uint8Array(i),params:{linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.002,angularDeflection:.4}})})}function x7(i,e){return new Promise((t,n)=>{let s=new Worker(to+"assets/vendor/gmg-stl-worker.js");s.onerror=()=>{s.terminate(),n(new Error("STL-Leser konnte nicht gestartet werden."))},s.onmessage=r=>{if(r.data.progress!=null){e(r.data.progress);return}if(s.terminate(),r.data.error){n(new Error(r.data.error));return}let o=new at;o.setAttribute("position",new ut(r.data.positions,3)),t(o)},s.postMessage(i,[i])})}async function j4(i){let e=i.name.split(".").pop().toLowerCase(),t=Oe("#kfg-datei");if(!["step","stp","stl"].includes(e)){t.textContent="Bitte eine STEP- (.step, .stp) oder STL-Datei w\xE4hlen.";return}if(i.size>Jg){t.textContent=`Die Datei ist ${ht(i.size/1048576,1)} MB gro\xDF \u2013 erlaubt sind bis 100 MB.`;return}t.textContent=`${i.name} wird gelesen \u2026`+(i.size>Kg?" Gro\xDFe Datei, das kann bis zu einer Minute dauern.":""),ni.classList.add("is-loading"),ts(0,"Datei wird gelesen");try{let n=await p7(i,s=>ts(s*25));ei=e==="stl"?"stl":"step",ts(25,"Geometrie wird berechnet"),vn=ei==="stl"?await x7(n,s=>ts(25+s*65)):await g7(n,s=>ts(25+s*65)),vn.index&&(vn=vn.toNonIndexed()),vn.attributes.normal&&vn.deleteAttribute("normal"),vn.computeBoundingBox(),ts(92,"Darstellung wird aufgebaut"),await d7(),t.textContent=`${i.name} (${ht(i.size/1048576,1)} MB) \u2013 wird nur in Ihrem Browser verarbeitet.`,Bs=i.name,jo={geo:vn,kind:ei,label:Bs},Dc("datei"),rs(!0),ts(100,"Fertig"),await new Promise(s=>setTimeout(s,450))}catch(n){t.textContent="Die Datei konnte nicht gelesen werden: "+n.message}finally{ni.classList.remove("is-loading"),Qr.hidden=!0}}var Pc={zylinder:{name:"Zylinder",fields:[["d","Durchmesser",80],["l","L\xE4nge",260]],geo:i=>new gr(i.d/2,i.d/2,i.l,96).rotateZ(Math.PI/2),label:i=>`Zylinder \xD8 ${ht(i.d)} \xD7 ${ht(i.l)} mm`},quader:{name:"Quader",fields:[["l","L\xE4nge",200],["b","Breite",90],["h","H\xF6he",120]],geo:i=>new $t(i.l,i.h,i.b),label:i=>`Quader ${ht(i.l)} \xD7 ${ht(i.b)} \xD7 ${ht(i.h)} mm`},rohr:{name:"Rohr / Ring",fields:[["d","Au\xDFen-\xD8",100],["i","Innen-\xD8",60],["l","L\xE4nge",50]],geo:i=>{let e=new Vi;e.absarc(0,0,i.d/2,0,Math.PI*2,!1);let t=new Hi;return t.absarc(0,0,Math.min(i.i,i.d-1)/2,0,Math.PI*2,!0),e.holes.push(t),new ys(e,{depth:i.l,curveSegments:96,bevelEnabled:!1}).rotateX(Math.PI/2)},label:i=>`Rohr \xD8 ${ht(i.d)} / ${ht(i.i)} \xD7 ${ht(i.l)} mm`},kasten:{name:"Kasten offen",fields:[["l","L\xE4nge",300],["b","Breite",200],["h","H\xF6he",150],["t","Wandst\xE4rke",10]],geo:i=>{let e=Math.min(i.t,i.l/2-1,i.b/2-1,i.h-1),t=i.h-e,n=(s,r,o,a)=>s.translate(r,o,a);return Ar([n(new $t(i.l,e,i.b),0,e/2,0),n(new $t(i.l,t,e),0,e+t/2,i.b/2-e/2),n(new $t(i.l,t,e),0,e+t/2,-i.b/2+e/2),n(new $t(e,t,i.b-2*e),i.l/2-e/2,e+t/2,0),n(new $t(e,t,i.b-2*e),-i.l/2+e/2,e+t/2,0)])},label:i=>`Kasten offen ${ht(i.l)} \xD7 ${ht(i.b)} \xD7 ${ht(i.h)} mm, Wand ${ht(i.t)} mm`}},ss="zylinder";function v7(){let i=Pc[ss];Oe("#kfg-form-felder").innerHTML=i.fields.map(([e,t,n])=>`
    <div class="field"><label for="kfg-f-${e}">${t} (mm)</label>
    <input id="kfg-f-${e}" data-k="${e}" type="number" min="1" max="10000" step="1" value="${n}" inputmode="decimal"></div>`).join(""),Oe("#kfg-form-felder").querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>Mf(!1,!1)),e.addEventListener("change",()=>Mf(!1,!0))})}function _7(i){let e=[];if(ss==="rohr"&&i.i>i.d-2&&(i.i=Math.max(1,i.d-2),e.push(`Innen-\xD8 muss kleiner als Au\xDFen-\xD8 sein \u2013 auf ${ht(i.i)} mm begrenzt.`)),ss==="kasten"){let t=Math.max(1,Math.min((i.l-2)/2,(i.b-2)/2,i.h-1));i.t>t&&(i.t=Math.floor(t),e.push(`Wandst\xE4rke passt nicht in L\xE4nge, Breite und H\xF6he \u2013 auf ${ht(i.t)} mm begrenzt.`))}return e}function y7(i){let e=[...Oe("#kfg-form-felder").querySelectorAll("input")],t={};for(let s of e)t[s.dataset.k]=Math.min(1e4,Math.max(1,Number(s.value)||1));let n=_7(t);if(ss==="rohr"&&(Oe("#kfg-f-i").max=Math.max(1,t.d-2)),ss==="kasten"&&(Oe("#kfg-f-t").max=t.t),i)for(let s of e)Number(s.value)!==t[s.dataset.k]&&(s.value=t[s.dataset.k]);return Oe("#kfg-form-hinweis").textContent=n.join(" "),t}function Mf(i,e=!0){let t=y7(e);ei="form";let n=Pc[ss].geo(t);vn=n.index?n.toNonIndexed():n,vn.computeBoundingBox(),Bs="Grundform: "+Pc[ss].label(t),rs(i)}var jo=null,Bs="";function Dc(i){ni.querySelectorAll("[data-src]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.src===i?"true":"false")),Oe("#kfg-quelle-datei").hidden=i!=="datei",Oe("#kfg-quelle-form").hidden=!Pc[i]}var J4={felge:{file:"felge.json",label:"Beispielteil: Felge \xD8 400 \xD7 204 mm (STEP)",material:"2700"}};async function b7(i){let e=J4[i];Dc(i),ni.classList.add("is-loading"),ts(10,"Beispielteil wird geladen");try{if(!e.geo){let t=await(await fetch(to+"data/3d/beispiele/"+e.file)).json(),n=new at;n.setAttribute("position",new it(t.v,3)),n.setIndex(t.i),e.geo=n.toNonIndexed(),e.geo.computeBoundingBox()}vn=e.geo,ei="muster",Bs=e.label,Oe("#kfg-material").value=e.material,Qn={x:0,y:0,z:0},rs(!1),no(hi&&nt.range.innen?"innen":"aussen")}finally{ni.classList.remove("is-loading"),Qr.hidden=!0}}function M7(i){if(J4[i]){b7(i);return}if(i!=="datei"){Cf(i);return}Dc("datei"),jo&&(vn=jo.geo,ei=jo.kind,Bs=jo.label,rs(!0))}function Cf(i){Dc(i),ss=i,fi=i==="kasten"?"innen":"aussen",v7(),Mf(!0),no(hi?fi:"aussen")}var vf=Oe("#kfg-file");vf.addEventListener("change",()=>vf.files[0]&&j4(vf.files[0]));var Ko=Oe(".kfg__drop");["dragenter","dragover"].forEach(i=>Ko.addEventListener(i,e=>{e.preventDefault(),Ko.classList.add("is-over")}));["dragleave","drop"].forEach(i=>Ko.addEventListener(i,e=>{e.preventDefault(),Ko.classList.remove("is-over")}));Ko.addEventListener("drop",i=>i.dataTransfer.files[0]&&j4(i.dataTransfer.files[0]));ni.querySelectorAll("[data-src]").forEach(i=>i.addEventListener("click",()=>M7(i.dataset.src)));var eo=new Ke(new Qa(1,.06,10,48),new On({color:3054939}));eo.rotation.x=Math.PI/2;eo.visible=!1;di.add(eo);function K4(i){Tf=i;let e=Oe("#kfg-greifpunkt").parentElement,t=Oe("#kfg-gp-info");if(e.classList.toggle("is-set",!!i),eo.visible=!!i,i){let n=new A;Mn.geometry.boundingBox.getSize(n),eo.position.set(i.x,i.y,i.z),eo.scale.setScalar(Math.max(12,nt.reach*.22));let s=`${i.inside?"innen":"au\xDFen"}, ${ht(Math.max(0,n.y-i.y))} mm unter der Oberkante`+(Math.abs(i.x)>1||Math.abs(i.z)>1?`, ${ht(i.x)} / ${ht(i.z)} mm aus der Mitte`:", mittig");t.innerHTML=`<strong>Greifpunkt festgelegt</strong> (${nt.code}, ${s}). Der <a href="#simulator">Simulator</a> greift Ihr Teil jetzt genau so.`+(i.state!=="gegriffen"?" Hinweis: In dieser Stellung ber\xFChrt der Greifer das Teil nicht richtig.":""),Oe("#kfg-greifpunkt").textContent="\u2295 Greifpunkt neu festlegen"}else t.innerHTML='Greifer mit den Reglern am Teil positionieren und zugreifen lassen, dann festlegen. Der <a href="#simulator">Simulator</a> greift Ihr Teil danach genau an dieser Stelle.',Oe("#kfg-greifpunkt").textContent="\u2295 Greifpunkt festlegen";Sf.forEach(n=>n())}Oe("#kfg-greifpunkt").addEventListener("click",()=>{_f&&K4({..._f,gripper:nt.id})});Oe("#kfg-zentrieren").addEventListener("click",()=>{Oe("#kfg-x").value=0,Oe("#kfg-z").value=0,ti()});Oe("#kfg-einheit").addEventListener("change",()=>rs(!1));Oe("#kfg-material").addEventListener("change",()=>{Rf(),Lc()});Oe("#kfg-hoehe").addEventListener("input",ti);Oe("#kfg-zu").addEventListener("input",ti);Oe("#kfg-x").addEventListener("input",ti);Oe("#kfg-z").addEventListener("input",ti);ni.querySelectorAll("[data-griff]").forEach(i=>i.addEventListener("click",()=>no(i.dataset.griff)));Oe("#kfg-dreh-y").addEventListener("click",()=>{Qn.y=(Qn.y+1)%4,rs(!1)});Oe("#kfg-dreh-x").addEventListener("click",()=>{Qn.x=(Qn.x+1)%4,rs(!1)});Oe("#kfg-dreh-z").addEventListener("click",()=>{Qn.z=(Qn.z+1)%4,rs(!1)});function Q4(){let i=yf.clientWidth,e=yf.clientHeight;is.setSize(i,e,!1),ns.aspect=i/e,ns.updateProjectionMatrix()}window.addEventListener("resize",Q4);Q4();Cc(0);Cf("zylinder");ni.classList.add("is-ready");(function i(){requestAnimationFrame(i),Rc.update(),is.render(di,ns)})();O4({base:to,active:()=>nt,grippers:()=>Os,select:async i=>{await Af(i),Lc()},restore:()=>{nt.set(0),Mn&&ti()},part:()=>Mn&&In?{geo:Mn.geometry,size:In.s.clone(),mass:In.mass,soft:In.soft,label:Bs,grip:In.grip,inside:fi==="innen",pose:Tf}:null,onPart:i=>Sf.push(i)});window.__kfg={sample:Cf,update:ti,setMode:no,selectGripper:Af,gripper:()=>nt.id,move:(i,e)=>{Oe("#kfg-x").value=i,Oe("#kfg-z").value=e,ti()},set:(i,e)=>{Oe("#kfg-hoehe").value=i,Oe("#kfg-zu").value=e,ti()},status:()=>Oe("#kfg-status").textContent};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
