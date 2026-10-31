(()=>{var Vc="160",Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lu=0,zl=1,uu=2;var v1=1,Gc=2,Nn=3,mn=0,Re=1,We=2;var Qn=0,ts=1,kl=2,Hl=3,Vl=4,hu=5,bi=100,fu=101,du=102,Gl=103,Wl=104,pu=200,mu=201,gu=202,_u=203,Ja=204,Ka=205,xu=206,yu=207,vu=208,Mu=209,bu=210,Su=211,Eu=212,Tu=213,wu=214,Au=0,Ru=1,Cu=2,Qr=3,Pu=4,Lu=5,Iu=6,Du=7,M1=0,Uu=1,Nu=2,ti=0,Ou=1,Fu=2,Bu=3,Wc=4,zu=5,ku=6;var b1=300,is=301,ss=302,ja=303,Qa=304,Do=306,tc=1e3,dn=1001,ec=1002,Ve=1003,Xl=1004;var ma=1005;var on=1006,Hu=1007;var qs=1008;var ei=1009,Vu=1010,Gu=1011,Xc=1012,S1=1013,Kn=1014,jn=1015,Ys=1016,E1=1017,T1=1018,Ei=1020,Wu=1021,pn=1023,Xu=1024,qu=1025,Ti=1026,rs=1027,Yu=1028,w1=1029,Zu=1030,A1=1031,R1=1033,ga=33776,_a=33777,xa=33778,ya=33779,ql=35840,Yl=35841,Zl=35842,$l=35843,C1=36196,Jl=37492,Kl=37496,jl=37808,Ql=37809,t2=37810,e2=37811,n2=37812,i2=37813,s2=37814,r2=37815,o2=37816,a2=37817,c2=37818,l2=37819,u2=37820,h2=37821,va=36492,f2=36494,d2=36495,$u=36283,p2=36284,m2=36285,g2=36286;var to=2300,eo=2301,Ma=2302,_2=2400,x2=2401,y2=2402;var P1=3e3,wi=3001,Ju=3200,Ku=3201,L1=0,ju=1,an="",Le="srgb",Fn="srgb-linear",qc="display-p3",Uo="display-p3-linear",no="linear",ae="srgb",io="rec709",so="p3";var Ui=7680;var v2=519,Qu=512,th=513,eh=514,I1=515,nh=516,ih=517,sh=518,rh=519,M2=35044;var b2="300 es",nc=1035,On=2e3,ro=2001,En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],S2=1234567,zs=Math.PI/180,Zs=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Yc(i,t){return(i%t+t)%t}function oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ah(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function ch(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function lh(i,t=1){return t-Math.abs(Yc(i,t*2)-t)}function uh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dh(i,t){return i+Math.random()*(t-i)}function ph(i){return i*(.5-Math.random())}function mh(i){i!==void 0&&(S2=i);let t=S2+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gh(i){return i*zs}function _h(i){return i*Zs}function ic(i){return(i&i-1)===0&&i!==0}function xh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Hn={DEG2RAD:zs,RAD2DEG:Zs,generateUUID:Ii,clamp:be,euclideanModulo:Yc,mapLinear:oh,inverseLerp:ah,lerp:ks,damp:ch,pingpong:lh,smoothstep:uh,smootherstep:hh,randInt:fh,randFloat:dh,randFloatSpread:ph,seededRandom:mh,degToRad:gh,radToDeg:_h,isPowerOfTwo:ic,ceilPowerOfTwo:xh,floorPowerOfTwo:oo,setQuaternionFromProperEuler:yh,normalize:ke,denormalize:Ji},rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],M=s[7],w=s[2],T=s[5],E=s[8];return r[0]=a*x+o*y+c*w,r[3]=a*m+o*_+c*T,r[6]=a*p+o*M+c*E,r[1]=l*x+u*y+f*w,r[4]=l*m+u*_+f*T,r[7]=l*p+u*M+f*E,r[2]=h*x+d*y+g*w,r[5]=h*m+d*_+g*T,r[8]=h*p+d*M+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ba=new qt;function D1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=ao("canvas");return i.style.display="block",i}var E2={};function Hs(i){i in E2||(E2[i]=!0,console.warn(i))}var T2=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),w2=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[Fn]:{transfer:no,primaries:io,toReference:i=>i,fromReference:i=>i},[Le]:{transfer:ae,primaries:io,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Uo]:{transfer:no,primaries:so,toReference:i=>i.applyMatrix3(w2),fromReference:i=>i.applyMatrix3(T2)},[qc]:{transfer:ae,primaries:so,toReference:i=>i.convertSRGBToLinear().applyMatrix3(w2),fromReference:i=>i.applyMatrix3(T2).convertLinearToSRGB()}},Mh=new Set([Fn,Uo]),ie={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Tr[t].toReference,s=Tr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Tr[i].primaries},getTransfer:function(i){return i===an?no:Tr[i].transfer}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,co=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=ao("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bh=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Ii(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sh=0,gn=class i extends En{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=on,a=qs,o=pn,c=ei,l=i.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ii(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wi?Le:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==b1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?wi:P1}set encoding(t){Hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wi?Le:an}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=b1;gn.DEFAULT_ANISOTROPY=1;var ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(d+1)/2,w=(p+1)/2,T=(u+h)/4,E=(f+x)/4,I=(g+m)/4;return _>M&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=E/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends En{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Hs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wi?Le:an),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends sc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rc=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==h||l!==d||u!==g){let m=1-o,p=c*h+l*d+u*g+f*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),T=Math.atan2(w,p*y);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let M=o*y;if(c=c*m+h*M,l=l*m+d*M,u=u*m+g*M,f=f*m+x*M,m===1-o){let w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-o*d,t[e+2]=l*g+u*d+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(A2.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(A2.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ta=new R,A2=new Ze,ee=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Ar.subVectors(this.max,Us),Oi.subVectors(t.a,Us),Fi.subVectors(t.b,Us),Bi.subVectors(t.c,Us),qn.subVectors(Fi,Oi),Yn.subVectors(Bi,Fi),_i.subVectors(Oi,Bi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-_i.z,_i.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,_i.z,0,-_i.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-_i.y,_i.x,0];return!wa(e,Oi,Fi,Bi,Ar)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,Oi,Fi,Bi,Ar))?!1:(Rr.crossVectors(qn,Yn),e=[Rr.x,Rr.y,Rr.z],wa(e,Oi,Fi,Bi,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,wr=new ee,Oi=new R,Fi=new R,Bi=new R,qn=new R,Yn=new R,_i=new R,Us=new R,Ar=new R,Rr=new R,xi=new R;function wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);let o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Eh=new ee,Ns=new R,Aa=new R,ni=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Eh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Aa)),this.expandByPoint(Ns.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new R,Ra=new R,Cr=new R,Zn=new R,Ca=new R,Pr=new R,Pa=new R,ii=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Ra);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=Zn.dot(this.direction),c=-Zn.dot(Cr),l=Zn.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*c-o,h=a*o-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ra).addScaledVector(Cr,h),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Ca.subVectors(e,t),Pr.subVectors(n,t),Pa.crossVectors(Ca,Pr);let a=this.direction.dot(Pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);let c=o*this.direction.dot(Pr.crossVectors(Zn,Pr));if(c<0)return null;let l=o*this.direction.dot(Ca.cross(Zn));if(l<0||c+l>a)return null;let u=-o*Zn.dot(Pa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class i{constructor(t,e,n,s,r,a,o,c,l,u,f,h,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Th,t,wh)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),$n.crossVectors(n,tn),$n.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),$n.crossVectors(n,tn)),$n.normalize(),Lr.crossVectors(tn,$n),s[0]=$n.x,s[4]=Lr.x,s[8]=tn.x,s[1]=$n.y,s[5]=Lr.y,s[9]=tn.y,s[2]=$n.z,s[6]=Lr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],M=n[11],w=n[15],T=s[0],E=s[4],I=s[8],v=s[12],b=s[1],D=s[5],N=s[9],k=s[13],P=s[2],F=s[6],H=s[10],J=s[14],Y=s[3],q=s[7],et=s[11],it=s[15];return r[0]=a*T+o*b+c*P+l*Y,r[4]=a*E+o*D+c*F+l*q,r[8]=a*I+o*N+c*H+l*et,r[12]=a*v+o*k+c*J+l*it,r[1]=u*T+f*b+h*P+d*Y,r[5]=u*E+f*D+h*F+d*q,r[9]=u*I+f*N+h*H+d*et,r[13]=u*v+f*k+h*J+d*it,r[2]=g*T+x*b+m*P+p*Y,r[6]=g*E+x*D+m*F+p*q,r[10]=g*I+x*N+m*H+p*et,r[14]=g*v+x*k+m*J+p*it,r[3]=y*T+_*b+M*P+w*Y,r[7]=y*E+_*D+M*F+w*q,r[11]=y*I+_*N+M*H+w*et,r[15]=y*v+_*k+M*J+w*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*o*h+n*l*h+s*o*d-n*c*d)+x*(+e*c*d-e*l*h+r*a*h-s*a*d+s*l*u-r*c*u)+m*(+e*l*f-e*o*d-r*a*f+n*a*d+r*o*u-n*l*u)+p*(-s*o*u-e*c*f+e*o*h+s*a*f-n*a*h+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=f*m*l-x*h*l+x*c*d-o*m*d-f*c*p+o*h*p,_=g*h*l-u*m*l-g*c*d+a*m*d+u*c*p-a*h*p,M=u*x*l-g*f*l+g*o*d-a*x*d-u*o*p+a*f*p,w=g*f*c-u*x*c-g*o*h+a*x*h+u*o*m-a*f*m,T=e*y+n*_+s*M+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=y*E,t[1]=(x*h*r-f*m*r-x*s*d+n*m*d+f*s*p-n*h*p)*E,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*E,t[3]=(f*c*r-o*h*r-f*s*l+n*h*l+o*s*d-n*c*d)*E,t[4]=_*E,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*E,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*E,t[7]=(a*h*r-u*c*r+u*s*l-e*h*l-a*s*d+e*c*d)*E,t[8]=M*E,t[9]=(g*f*r-u*x*r-g*n*d+e*x*d+u*n*p-e*f*p)*E,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*E,t[11]=(u*o*r-a*f*r-u*n*l+e*f*l+a*n*d-e*o*d)*E,t[12]=w*E,t[13]=(u*x*s-g*f*s+g*n*h-e*x*h-u*n*m+e*f*m)*E,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*E,t[15]=(a*f*s-u*o*s+u*n*c-e*f*c-a*n*h+e*o*h)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,g=r*f,x=a*u,m=a*f,p=o*f,y=c*l,_=c*u,M=c*f,w=n.x,T=n.y,E=n.z;return s[0]=(1-(x+p))*w,s[1]=(d+M)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(h+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(m-y)*E,s[10]=(1-(h+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let l=1/r,u=1/a,f=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s),d,g;if(o===On)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ro)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){let c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(a-r),h=(e+t)*l,d=(n+s)*u,g,x;if(o===On)g=(a+r)*f,x=-2*f;else if(o===ro)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new R,hn=new Dt,Th=new R(0,0,0),wh=new R(1,1,1),$n=new R,Lr=new R,tn=new R,R2=new Dt,C2=new Ze,ho=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return R2.makeRotationFromQuaternion(t),this.setFromRotationMatrix(R2,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return C2.setFromEuler(this),this.setFromQuaternion(C2,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ho.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ah=0,P2=new R,ki=new Ze,In=new Dt,Ir=new R,Os=new R,Rh=new R,Ch=new Ze,L2=new R(1,0,0),I2=new R(0,1,0),D2=new R(0,0,1),Ph={type:"added"},Lh={type:"removed"},Fe=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new ho,n=new Ze,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new qt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(L2,t)}rotateY(t){return this.rotateOnAxis(I2,t)}rotateZ(t){return this.rotateOnAxis(D2,t)}translateOnAxis(t,e){return P2.copy(t).applyQuaternion(this.quaternion),this.position.add(P2.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(L2,t)}translateY(t){return this.translateOnAxis(I2,t)}translateZ(t){return this.translateOnAxis(D2,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Os,Ir,this.up):In.lookAt(Ir,Os,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new R(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new R,Dn=new R,La=new R,Un=new R,Hi=new R,Vi=new R,U2=new R,Ia=new R,Da=new R,Ua=new R,Dr=!1,nn=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Dn.subVectors(n,e),La.subVectors(t,e);let a=fn.dot(fn),o=fn.dot(Dn),c=fn.dot(La),l=Dn.dot(Dn),u=Dn.dot(La),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(t,e,n,s,r,a,o,c){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Dn.subVectors(t,e),fn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),fn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,n),Vi.subVectors(r,n),Ia.subVectors(t,n);let c=Hi.dot(Ia),l=Vi.dot(Ia);if(c<=0&&l<=0)return e.copy(n);Da.subVectors(t,s);let u=Hi.dot(Da),f=Vi.dot(Da);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Hi,a);Ua.subVectors(t,r);let d=Hi.dot(Ua),g=Vi.dot(Ua);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Vi,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return U2.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(U2,o);let p=1/(m+x+h);return a=x*p,o=h*p,e.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},U1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Yc(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=U1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ie.fromWorkingColorSpace(Ne.copy(this),t),Math.round(be(Ne.r*255,0,255))*65536+Math.round(be(Ne.g*255,0,255))*256+Math.round(be(Ne.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Le){ie.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Ur);let n=ks(Jn.h,Ur.h,e),s=ks(Jn.s,Ur.s,e),r=ks(Jn.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Yt;Yt.NAMES=U1;var Ih=0,zn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ts,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Ka,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v2&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},os=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=M1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new R,Nr=new rt,_e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=M2,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==M2&&(t.usage=this.usage),t}};var po=class extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Dh=0,rn=new Dt,Oa=new Fe,Gi=new R,en=new ee,Fs=new ee,Ae=new R,ve=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D1(t)?mo:po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ee);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(en.min,Fs.min),en.expandByPoint(Ae),Ae.addVectors(en.max,Fs.max),en.expandByPoint(Ae)):(en.expandByPoint(Fs.min),en.expandByPoint(Fs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ae.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(t,l),Ae.add(Gi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new R,u[b]=new R;let f=new R,h=new R,d=new R,g=new rt,x=new rt,m=new rt,p=new R,y=new R;function _(b,D,N){f.fromArray(s,b*3),h.fromArray(s,D*3),d.fromArray(s,N*3),g.fromArray(a,b*2),x.fromArray(a,D*2),m.fromArray(a,N*2),h.sub(f),d.sub(f),x.sub(g),m.sub(g);let k=1/(x.x*m.y-m.x*x.y);isFinite(k)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(k),y.copy(d).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(k),l[b].add(p),l[D].add(p),l[N].add(p),u[b].add(y),u[D].add(y),u[N].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,D=M.length;b<D;++b){let N=M[b],k=N.start,P=N.count;for(let F=k,H=k+P;F<H;F+=3)_(n[F+0],n[F+1],n[F+2])}let w=new R,T=new R,E=new R,I=new R;function v(b){E.fromArray(r,b*3),I.copy(E);let D=l[b];w.copy(D),w.sub(E.multiplyScalar(E.dot(D))).normalize(),T.crossVectors(I,D);let k=T.dot(u[b])<0?-1:1;c[b*4]=w.x,c[b*4+1]=w.y,c[b*4+2]=w.z,c[b*4+3]=k}for(let b=0,D=M.length;b<D;++b){let N=M[b],k=N.start,P=N.count;for(let F=k,H=k+P;F<H;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,f=new R;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new _e(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},N2=new Dt,yi=new ii,Or=new ni,O2=new R,Wi=new R,Xi=new R,qi=new R,Fa=new R,Fr=new R,Br=new rt,zr=new rt,kr=new rt,F2=new R,B2=new R,z2=new R,Hr=new R,Vr=new R,te=class extends Fe{constructor(t=new ve,e=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(Fa.fromBufferAttribute(f,t),a?Fr.addScaledVector(Fa,u):Fr.addScaledVector(Fa.sub(e),u))}e.add(Fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Or.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Or,O2)===null||yi.origin.distanceToSquared(O2)>(t.far-t.near)**2))&&(N2.copy(r).invert(),yi.copy(t.ray).applyMatrix4(N2),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,w=_;M<w;M+=3){let T=o.getX(M),E=o.getX(M+1),I=o.getX(M+2);s=Gr(this,p,t,n,l,u,f,T,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);s=Gr(this,a,t,n,l,u,f,y,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,w=_;M<w;M+=3){let T=M,E=M+1,I=M+2;s=Gr(this,p,t,n,l,u,f,T,E,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,M=m+2;s=Gr(this,a,t,n,l,u,f,y,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Uh(i,t,e,n,s,r,a,o){let c;if(t.side===Re?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===mn,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,qi);let u=Uh(i,t,e,n,Wi,Xi,qi,Hr);if(u){s&&(Br.fromBufferAttribute(s,o),zr.fromBufferAttribute(s,c),kr.fromBufferAttribute(s,l),u.uv=nn.getInterpolation(Hr,Wi,Xi,qi,Br,zr,kr,new rt)),r&&(Br.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,c),kr.fromBufferAttribute(r,l),u.uv1=nn.getInterpolation(Hr,Wi,Xi,qi,Br,zr,kr,new rt),u.uv2=u.uv1),a&&(F2.fromBufferAttribute(a,o),B2.fromBufferAttribute(a,c),z2.fromBufferAttribute(a,l),u.normal=nn.getInterpolation(Hr,Wi,Xi,qi,F2,B2,z2,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new R,materialIndex:0};nn.getNormal(Wi,Xi,qi,f.normal),u.face=f}return u}var $e=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function g(x,m,p,y,_,M,w,T,E,I,v){let b=M/E,D=w/I,N=M/2,k=w/2,P=T/2,F=E+1,H=I+1,J=0,Y=0,q=new R;for(let et=0;et<H;et++){let it=et*D-k;for(let mt=0;mt<F;mt++){let X=mt*b-N;q[x]=X*y,q[m]=it*_,q[p]=P,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=T>0?1:-1,u.push(q.x,q.y,q.z),f.push(mt/E),f.push(1-et/I),J+=1}}for(let et=0;et<I;et++)for(let it=0;it<E;it++){let mt=h+it+F*et,X=h+it+F*(et+1),nt=h+(it+1)+F*(et+1),gt=h+(it+1)+F*et;c.push(mt,X,gt),c.push(X,nt,gt),Y+=6}o.addGroup(d,Y,v),d+=Y,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function as(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=as(i[e]);for(let s in n)t[s]=n[s]}return t}function Nh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function N1(i){return i.getRenderTarget()===null?i.outputColorSpace:ie.workingColorSpace}var Oh={clone:as,merge:He},Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oe=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,oc=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Yi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let c=new Oe(Yi,Zi,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Yi,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_o=class extends gn{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ac=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Hs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wi?Le:an),this.texture=new _o(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Qn});r.uniforms.tEquirect.value=e;let a=new te(s,r),o=e.minFilter;return e.minFilter===qs&&(e.minFilter=on),new oc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ba=new R,zh=new R,kh=new qt,Ge=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kh.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new ni,Wr=new R,$s=class{constructor(t=new Ge,e=new Ge,n=new Ge,s=new Ge,r=new Ge,a=new Ge){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-r,h-l,m-d,M-p).normalize(),n[1].setComponents(c+r,h+l,m+d,M+p).normalize(),n[2].setComponents(c+a,h+u,m+g,M+y).normalize(),n[3].setComponents(c-a,h-u,m-g,M-y).normalize(),n[4].setComponents(c-o,h-f,m-x,M-_).normalize(),e===On)n[5].setComponents(c+o,h+f,m+x,M+_).normalize();else if(e===ro)n[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function O1(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hh(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,u){let f=l.array,h=l.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,f){let h=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,l),d.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:a,remove:o,update:c}}var Js=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let y=p*h-a;for(let _=0;_<l;_++){let M=_*f-r;g.push(M,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let _=y+l*p,M=y+l*(p+1),w=y+1+l*(p+1),T=y+1+l*p;d.push(_,M,T),d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
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
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`
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
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nf=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ad=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
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
}`,$d=`#if DEPTH_PACKING == 3200
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,h0=`#define PHONG
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
}`,f0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Vh,alphahash_pars_fragment:Gh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:Yh,aomap_fragment:Zh,aomap_pars_fragment:$h,batching_pars_vertex:Jh,batching_vertex:Kh,begin_vertex:jh,beginnormal_vertex:Qh,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:cf,color_pars_fragment:lf,color_pars_vertex:uf,color_vertex:hf,common:ff,cube_uv_reflection_fragment:df,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:_f,emissivemap_pars_fragment:xf,colorspace_fragment:yf,colorspace_pars_fragment:vf,envmap_fragment:Mf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Sf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Of,envmap_vertex:Tf,fog_vertex:wf,fog_pars_vertex:Af,fog_fragment:Rf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_fragment:Lf,lightmap_pars_fragment:If,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Uf,lights_pars_begin:Nf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:kf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Yf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:$f,map_fragment:Jf,map_pars_fragment:Kf,map_particle_fragment:jf,map_particle_pars_fragment:Qf,metalnessmap_fragment:td,metalnessmap_pars_fragment:ed,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:sd,morphtarget_vertex:rd,normal_fragment_begin:od,normal_fragment_maps:ad,normal_pars_fragment:cd,normal_pars_vertex:ld,normal_vertex:ud,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:_d,premultiplied_alpha_fragment:xd,project_vertex:yd,dithering_fragment:vd,dithering_pars_fragment:Md,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Td,shadowmap_vertex:wd,shadowmask_pars_fragment:Ad,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Pd,skinnormal_vertex:Ld,specularmap_fragment:Id,specularmap_pars_fragment:Dd,tonemapping_fragment:Ud,tonemapping_pars_fragment:Nd,transmission_fragment:Od,transmission_pars_fragment:Fd,uv_pars_fragment:Bd,uv_pars_vertex:zd,uv_vertex:kd,worldpos_vertex:Hd,background_vert:Vd,background_frag:Gd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:Yd,depth_vert:Zd,depth_frag:$d,distanceRGBA_vert:Jd,distanceRGBA_frag:Kd,equirect_vert:jd,equirect_frag:Qd,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:c0,meshnormal_frag:l0,meshphong_vert:u0,meshphong_frag:h0,meshphysical_vert:f0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:_0,shadow_vert:x0,shadow_frag:y0,sprite_vert:v0,sprite_frag:M0},dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Sn={basic:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:He([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:He([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:He([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:He([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:He([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:He([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:He([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:He([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:He([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:He([dt.lights,dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:He([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Xr={r:0,b:0,g:0};function b0(i,t,e,n,s,r,a){let o=new Yt(0),c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Do)?(u===void 0&&(u=new te(new $e(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:as(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ie.getTransfer(_.colorSpace)!==ae,(f!==_||h!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new Js(2,2),new kn({name:"BackgroundMaterial",uniforms:as(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(Xr,N1(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function S0(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,u=!1;function f(P,F,H,J,Y){let q=!1;if(a){let et=x(J,H,F);l!==et&&(l=et,d(l.object)),q=p(P,J,H,Y),q&&y(P,J,H,Y)}else{let et=F.wireframe===!0;(l.geometry!==J.id||l.program!==H.id||l.wireframe!==et)&&(l.geometry=J.id,l.program=H.id,l.wireframe=et,q=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,I(P,F,H,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function x(P,F,H){let J=H.wireframe===!0,Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let q=Y[F.id];q===void 0&&(q={},Y[F.id]=q);let et=q[J];return et===void 0&&(et=m(h()),q[J]=et),et}function m(P){let F=[],H=[],J=[];for(let Y=0;Y<s;Y++)F[Y]=0,H[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,F,H,J){let Y=l.attributes,q=F.attributes,et=0,it=H.getAttributes();for(let mt in it)if(it[mt].location>=0){let nt=Y[mt],gt=q[mt];if(gt===void 0&&(mt==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),mt==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),nt===void 0||nt.attribute!==gt||gt&&nt.data!==gt.data)return!0;et++}return l.attributesNum!==et||l.index!==J}function y(P,F,H,J){let Y={},q=F.attributes,et=0,it=H.getAttributes();for(let mt in it)if(it[mt].location>=0){let nt=q[mt];nt===void 0&&(mt==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),mt==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor));let gt={};gt.attribute=nt,nt&&nt.data&&(gt.data=nt.data),Y[mt]=gt,et++}l.attributes=Y,l.attributesNum=et,l.index=J}function _(){let P=l.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function M(P){w(P,0)}function w(P,F){let H=l.newAttributes,J=l.enabledAttributes,Y=l.attributeDivisors;H[P]=1,J[P]===0&&(i.enableVertexAttribArray(P),J[P]=1),Y[P]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),Y[P]=F)}function T(){let P=l.newAttributes,F=l.enabledAttributes;for(let H=0,J=F.length;H<J;H++)F[H]!==P[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function E(P,F,H,J,Y,q,et){et===!0?i.vertexAttribIPointer(P,F,H,Y,q):i.vertexAttribPointer(P,F,H,J,Y,q)}function I(P,F,H,J){if(n.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Y=J.attributes,q=H.getAttributes(),et=F.defaultAttributeValues;for(let it in q){let mt=q[it];if(mt.location>=0){let X=Y[it];if(X===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let nt=X.normalized,gt=X.itemSize,St=e.get(X);if(St===void 0)continue;let vt=St.buffer,Lt=St.type,Ut=St.bytesPerElement,bt=n.isWebGL2===!0&&(Lt===i.INT||Lt===i.UNSIGNED_INT||X.gpuType===S1);if(X.isInterleavedBufferAttribute){let Nt=X.data,U=Nt.stride,ct=X.offset;if(Nt.isInstancedInterleavedBuffer){for(let Z=0;Z<mt.locationSize;Z++)w(mt.location+Z,Nt.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Z=0;Z<mt.locationSize;Z++)M(mt.location+Z);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Z=0;Z<mt.locationSize;Z++)E(mt.location+Z,gt/mt.locationSize,Lt,nt,U*Ut,(ct+gt/mt.locationSize*Z)*Ut,bt)}else{if(X.isInstancedBufferAttribute){for(let Nt=0;Nt<mt.locationSize;Nt++)w(mt.location+Nt,X.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Nt=0;Nt<mt.locationSize;Nt++)M(mt.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Nt=0;Nt<mt.locationSize;Nt++)E(mt.location+Nt,gt/mt.locationSize,Lt,nt,gt*Ut,gt/mt.locationSize*Nt*Ut,bt)}}else if(et!==void 0){let nt=et[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(mt.location,nt);break;case 3:i.vertexAttrib3fv(mt.location,nt);break;case 4:i.vertexAttrib4fv(mt.location,nt);break;default:i.vertexAttrib1fv(mt.location,nt)}}}}T()}function v(){N();for(let P in o){let F=o[P];for(let H in F){let J=F[H];for(let Y in J)g(J[Y].object),delete J[Y];delete F[H]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;let F=o[P.id];for(let H in F){let J=F[H];for(let Y in J)g(J[Y].object),delete J[Y];delete F[H]}delete o[P.id]}function D(P){for(let F in o){let H=o[F];if(H[P.id]===void 0)continue;let J=H[P.id];for(let Y in J)g(J[Y].object),delete J[Y];delete H[P.id]}}function N(){k(),u=!0,l!==c&&(l=c,d(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:N,resetDefaultState:k,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:M,disableUnusedAttributes:T}}function E0(i,t,e,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=f[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function T0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,M=a||t.has("OES_texture_float"),w=_&&M,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:T}}function w0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ge,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:n,_=y*4,M=p.clippingState||null;c.value=M,M=u(g,h,_,d);for(let w=0;w!==_;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=d;_!==x;++_,M+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function A0(i){let t=new WeakMap;function e(a,o){return o===ja?a.mapping=is:o===Qa&&(a.mapping=ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ja||o===Qa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ac(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xo=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ki=4,k2=[.125,.215,.35,.446,.526,.582],Si=20,za=new xo,H2=new Yt,ka=null,Ha=0,Va=0,Mi=(1+Math.sqrt(5))/2,$i=1/Mi,V2=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Mi,$i),new R(0,Mi,-$i),new R($i,0,Mi),new R(-$i,0,Mi),new R(Mi,$i,0),new R(-Mi,$i,0)],cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Ha,Va),t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ys,format:pn,colorSpace:Fn,depthBuffer:!1},s=G2(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G2(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(r)),this._blurMaterial=C0(r,t,e)}return s}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s){let o=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(H2),u.toneMapping=ti,u.autoClear=!1;let d=new os({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new te(new $e,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(H2),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;qr(s,y*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=X2()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W2());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=V2[(s-1)%V2.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new te(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let p=[],y=0;for(let E=0;E<Si;++E){let I=E/x,v=Math.exp(-I*I/2);p.push(v),E===0?y+=v:E<m&&(y+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;let M=this._sizeLods[s],w=3*M*(s>_-Ki?s-_+Ki:0),T=4*(this._cubeSize-M);qr(e,w,T,3*M,2*M),c.setRenderTarget(e),c.render(f,za)}};function R0(i){let t=[],e=[],n=[],s=i,r=i-Ki+1+k2.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ki?c=k2[a-i+Ki-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){let E=T%3*2/3-1,I=T>2?0:-1,v=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];y.set(v,x*g*T),_.set(h,m*g*T);let b=[T,T,T,T,T,T];M.set(b,p*g*T)}let w=new ve;w.setAttribute("position",new _e(y,x)),w.setAttribute("uv",new _e(_,m)),w.setAttribute("faceIndex",new _e(M,p)),t.push(w),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function G2(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function C0(i,t,e){let n=new Float32Array(Si),s=new R(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function W2(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function X2(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function P0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ja||c===Qa,u=c===is||c===ss;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new cs(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new cs(i));let h=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I0(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);for(let g in h.morphAttributes){let x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let _=0,M=y.length;_<M;_+=3){let w=y[_+0],T=y[_+1],E=y[_+2];h.push(w,T,T,E,E,w)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let w=_+0,T=_+1,E=_+2;h.push(w,T,T,E,E,w)}}else return;let m=new(D1(h)?mo:po)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function D0(i,t,e,n){let s=n.isWebGL2,r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,g){i.drawElements(r,g,o,d*c),e.update(g,r,1)}function f(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,x),e.update(g,r,x)}function h(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function U0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function N0(i,t){return i[0]-t[0]}function O0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function F0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ue,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){let h=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(u);if(x===void 0||x.count!==g){let P=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();let y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],E=u.morphAttributes.color||[],I=0;y===!0&&(I=1),_===!0&&(I=2),M===!0&&(I=3);let v=u.attributes.position.count*I,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*b*4*g),N=new uo(D,v,b,g);N.type=jn,N.needsUpdate=!0;let k=I*4;for(let F=0;F<g;F++){let H=w[F],J=T[F],Y=E[F],q=v*b*4*F;for(let et=0;et<H.count;et++){let it=et*k;y===!0&&(a.fromBufferAttribute(H,et),D[q+it+0]=a.x,D[q+it+1]=a.y,D[q+it+2]=a.z,D[q+it+3]=0),_===!0&&(a.fromBufferAttribute(J,et),D[q+it+4]=a.x,D[q+it+5]=a.y,D[q+it+6]=a.z,D[q+it+7]=0),M===!0&&(a.fromBufferAttribute(Y,et),D[q+it+8]=a.x,D[q+it+9]=a.y,D[q+it+10]=a.z,D[q+it+11]=Y.itemSize===4?a.w:1)}}x={count:g,texture:N,size:new rt(v,b)},r.set(u,x),u.addEventListener("dispose",P)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];let p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=h===void 0?0:h.length,g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<d;_++){let M=g[_];M[0]=_,M[1]=h[_]}g.sort(O0);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(N0);let x=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let M=o[_],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(x&&u.getAttribute("morphTarget"+_)!==x[w]&&u.setAttribute("morphTarget"+_,x[w]),m&&u.getAttribute("morphNormal"+_)!==m[w]&&u.setAttribute("morphNormal"+_,m[w]),s[_]=T,p+=T):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function B0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var yo=class extends gn{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Ti,u!==Ti&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ti&&(n=Kn),n===void 0&&u===rs&&(n=Ei),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},F1=new gn,B1=new yo(1,1);B1.compareFunction=I1;var z1=new uo,k1=new rc,H1=new _o,q2=[],Y2=[],Z2=new Float32Array(16),$2=new Float32Array(9),J2=new Float32Array(4);function fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=q2[s];if(r===void 0&&(r=new Float32Array(s),q2[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function No(i,t){let e=Y2[t];e===void 0&&(e=new Int32Array(t),Y2[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;J2.set(n),i.uniformMatrix2fv(this.addr,!1,J2),Ee(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;$2.set(n),i.uniformMatrix3fv(this.addr,!1,$2),Ee(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Z2.set(n),i.uniformMatrix4fv(this.addr,!1,Z2),Ee(e,n)}}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function t3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?B1:F1;e.setTexture2D(t||r,s)}function e3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||k1,s)}function n3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||H1,s)}function i3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||z1,s)}function s3(i){switch(i){case 5126:return z0;case 35664:return k0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return $0;case 5125:return J0;case 36294:return K0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function r3(i,t){i.uniform1fv(this.addr,t)}function o3(i,t){let e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function a3(i,t){let e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function c3(i,t){let e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function l3(i,t){let e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u3(i,t){let e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h3(i,t){let e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f3(i,t){i.uniform1iv(this.addr,t)}function d3(i,t){i.uniform2iv(this.addr,t)}function p3(i,t){i.uniform3iv(this.addr,t)}function m3(i,t){i.uniform4iv(this.addr,t)}function g3(i,t){i.uniform1uiv(this.addr,t)}function _3(i,t){i.uniform2uiv(this.addr,t)}function x3(i,t){i.uniform3uiv(this.addr,t)}function y3(i,t){i.uniform4uiv(this.addr,t)}function v3(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||F1,r[a])}function M3(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||k1,r[a])}function b3(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||H1,r[a])}function S3(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||z1,r[a])}function E3(i){switch(i){case 5126:return r3;case 35664:return o3;case 35665:return a3;case 35666:return c3;case 35674:return l3;case 35675:return u3;case 35676:return h3;case 5124:case 35670:return f3;case 35667:case 35671:return d3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return _3;case 36295:return x3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return v3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return S3}}var cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s3(e.type)}},lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E3(e.type)}},uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function K2(i,t){i.seq.push(t),i.map[t.id]=t}function T3(i,t,e){let n=i.name,s=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),a=Ga.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){K2(e,l===void 0?new cc(o,i,t):new lc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new uc(o),K2(e,f)),e=f}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);T3(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function j2(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var w3=37297,A3=0;function R3(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function C3(i){let t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i),n;switch(t===e?n="":t===so&&e===io?n="LinearDisplayP3ToLinearSRGB":t===io&&e===so&&(n="LinearSRGBToLinearDisplayP3"),i){case Fn:case Uo:return[n,"LinearTransferOETF"];case Le:case qc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Q2(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+R3(i.getShaderSource(t),a)}else return s}function P3(i,t){let e=C3(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function L3(i,t){let e;switch(t){case Ou:e="Linear";break;case Fu:e="Reinhard";break;case Bu:e="OptimizedCineon";break;case Wc:e="ACESFilmic";break;case ku:e="AgX";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function I3(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function D3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ji).join(`
`)}function U3(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N3(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ji(i){return i!==""}function t1(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e1(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O3=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(O3,B3)}var F3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B3(i,t){let e=kt[t];if(e===void 0){let n=F3.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}var z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n1(i){return i.replace(z3,k3)}function k3(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function i1(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function H3(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===v1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function V3(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G3(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function W3(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case M1:t="ENVMAP_BLENDING_MULTIPLY";break;case Uu:t="ENVMAP_BLENDING_MIX";break;case Nu:t="ENVMAP_BLENDING_ADD";break}return t}function X3(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function q3(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=H3(e),l=V3(e),u=G3(e),f=W3(e),h=X3(e),d=e.isWebGL2?"":I3(e),g=D3(e),x=U3(r),m=s.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ji).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ji).join(`
`),y.length>0&&(y+=`
`)):(p=[i1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),y=[d,i1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?kt.tonemapping_pars_fragment:"",e.toneMapping!==ti?L3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,P3("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=hc(a),a=t1(a,e),a=e1(a,e),o=hc(o),o=t1(o,e),o=e1(o,e),a=n1(a),o=n1(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===b2?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===b2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+p+a,w=_+y+o,T=j2(s,s.VERTEX_SHADER,M),E=j2(s,s.FRAGMENT_SHADER,w);s.attachShader(m,T),s.attachShader(m,E),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(N){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(E).trim(),H=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,E);else{let Y=Q2(s,T,"vertex"),q=Q2(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+Y+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||F==="")&&(J=!1);J&&(N.diagnostics={runnable:H,programLog:k,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:y}})}s.deleteShader(T),s.deleteShader(E),v=new ns(s,m),b=N3(s,m)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,w3)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A3++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}var Y3=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dc(t),e.set(t,n)),n}},dc=class{constructor(t){this.id=Y3++,this.code=t,this.usedTimes=0}};function Z3(i,t,e,n,s,r,a){let o=new fo,c=new fc,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,b,D,N,k){let P=N.fog,F=k.geometry,H=v.isMeshStandardMaterial?N.environment:null,J=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),Y=J&&J.mapping===Do?J.image.height:null,q=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=et!==void 0?et.length:0,mt=0;F.morphAttributes.position!==void 0&&(mt=1),F.morphAttributes.normal!==void 0&&(mt=2),F.morphAttributes.color!==void 0&&(mt=3);let X,nt,gt,St;if(q){let Be=Sn[q];X=Be.vertexShader,nt=Be.fragmentShader}else X=v.vertexShader,nt=v.fragmentShader,c.update(v),gt=c.getVertexShaderID(v),St=c.getFragmentShaderID(v);let vt=i.getRenderTarget(),Lt=k.isInstancedMesh===!0,Ut=k.isBatchedMesh===!0,bt=!!v.map,Nt=!!v.matcap,U=!!J,ct=!!v.aoMap,Z=!!v.lightMap,ot=!!v.bumpMap,$=!!v.normalMap,Et=!!v.displacementMap,_t=!!v.emissiveMap,A=!!v.metalnessMap,S=!!v.roughnessMap,z=v.anisotropy>0,st=v.clearcoat>0,j=v.iridescence>0,K=v.sheen>0,Mt=v.transmission>0,pt=z&&!!v.anisotropyMap,xt=st&&!!v.clearcoatMap,Ct=st&&!!v.clearcoatNormalMap,Ft=st&&!!v.clearcoatRoughnessMap,Q=j&&!!v.iridescenceMap,Gt=j&&!!v.iridescenceThicknessMap,L=K&&!!v.sheenColorMap,tt=K&&!!v.sheenRoughnessMap,ft=!!v.specularMap,at=!!v.specularColorMap,Tt=!!v.specularIntensityMap,Wt=Mt&&!!v.transmissionMap,Zt=Mt&&!!v.thicknessMap,Ht=!!v.gradientMap,ht=!!v.alphaMap,O=v.alphaTest>0,lt=!!v.alphaHash,ut=!!v.extensions,Pt=!!F.attributes.uv1,At=!!F.attributes.uv2,Jt=!!F.attributes.uv3,jt=ti;return v.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:nt,defines:v.defines,customVertexShaderID:gt,customFragmentShaderID:St,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ut,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Fn,map:bt,matcap:Nt,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:Y,aoMap:ct,lightMap:Z,bumpMap:ot,normalMap:$,displacementMap:h&&Et,emissiveMap:_t,normalMapObjectSpace:$&&v.normalMapType===ju,normalMapTangentSpace:$&&v.normalMapType===L1,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:pt,clearcoat:st,clearcoatMap:xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ft,iridescence:j,iridescenceMap:Q,iridescenceThicknessMap:Gt,sheen:K,sheenColorMap:L,sheenRoughnessMap:tt,specularMap:ft,specularColorMap:at,specularIntensityMap:Tt,transmission:Mt,transmissionMap:Wt,thicknessMap:Zt,gradientMap:Ht,opaque:v.transparent===!1&&v.blending===ts,alphaMap:ht,alphaTest:O,alphaHash:lt,combine:v.combine,mapUv:bt&&x(v.map.channel),aoMapUv:ct&&x(v.aoMap.channel),lightMapUv:Z&&x(v.lightMap.channel),bumpMapUv:ot&&x(v.bumpMap.channel),normalMapUv:$&&x(v.normalMap.channel),displacementMapUv:Et&&x(v.displacementMap.channel),emissiveMapUv:_t&&x(v.emissiveMap.channel),metalnessMapUv:A&&x(v.metalnessMap.channel),roughnessMapUv:S&&x(v.roughnessMap.channel),anisotropyMapUv:pt&&x(v.anisotropyMap.channel),clearcoatMapUv:xt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:L&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(v.sheenRoughnessMap.channel),specularMapUv:ft&&x(v.specularMap.channel),specularColorMapUv:at&&x(v.specularColorMap.channel),specularIntensityMapUv:Tt&&x(v.specularIntensityMap.channel),transmissionMapUv:Wt&&x(v.transmissionMap.channel),thicknessMapUv:Zt&&x(v.thicknessMap.channel),alphaMapUv:ht&&x(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&($||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:At,vertexUv3s:Jt,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(bt||ht),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:mt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===We,flipSided:v.side===Re,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ut&&v.extensions.derivatives===!0,extensionFragDepth:ut&&v.extensions.fragDepth===!0,extensionDrawBuffers:ut&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(b,v),_(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function _(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let b=g[v.type],D;if(b){let N=Sn[b];D=Oh.clone(N.uniforms)}else D=v.uniforms;return D}function w(v,b){let D;for(let N=0,k=l.length;N<k;N++){let P=l[N];if(P.cacheKey===b){D=P,++D.usedTimes;break}}return D===void 0&&(D=new q3(i,b,v,r),l.push(D)),D}function T(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),v.destroy()}}function E(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:I}}function $3(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function J3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function s1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function r1(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,h,d,g,x,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function o(f,h,d,g,x,m){let p=a(f,h,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,h,d,g,x,m){let p=a(f,h,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,h){e.length>1&&e.sort(f||J3),n.length>1&&n.sort(h||s1),s.length>1&&s.sort(h||s1)}function u(){for(let f=t,h=i.length;f<h;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function K3(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new r1,i.set(n,[a])):s>=r.length?(a=new r1,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function j3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Yt};break;case"SpotLight":e={position:new R,direction:new R,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Q3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tp=0;function ep(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function np(i,t){let e=new j3,n=Q3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new R);let r=new R,a=new Dt,o=new Dt;function c(u,f){let h=0,d=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,M=0,w=0,T=0,E=0,I=0,v=0;u.sort(ep);let b=f===!0?Math.PI:1;for(let N=0,k=u.length;N<k;N++){let P=u[N],F=P.color,H=P.intensity,J=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*H*b,d+=F.g*H*b,g+=F.b*H*b;else if(P.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(P.sh.coefficients[q],H);v++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let et=P.shadow,it=n.get(P);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=Y,s.directionalShadowMatrix[x]=P.shadow.matrix,M++}s.directional[x]=q,x++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(H*b),q.distance=J,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,s.spot[p]=q;let et=P.shadow;if(P.map&&(s.spotLightMap[E]=P.map,E++,et.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[p]=et.matrix,P.castShadow){let it=n.get(P);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,s.spotShadow[p]=it,s.spotShadowMap[p]=Y,T++}p++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(F).multiplyScalar(H),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=q,y++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*b),q.distance=P.distance,q.decay=P.decay,P.castShadow){let et=P.shadow,it=n.get(P);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=P.shadow.matrix,w++}s.point[m]=q,m++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(H*b),q.groundColor.copy(P.groundColor).multiplyScalar(H*b),s.hemi[_]=q,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==_||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==T||D.numSpotMaps!==E||D.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=T+E-I,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=v,D.directionalLength=x,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=_,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=T,D.numSpotMaps=E,D.numLightProbes=v,s.version=tp++)}function l(u,f){let h=0,d=0,g=0,x=0,m=0,p=f.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){let M=u[y];if(M.isDirectionalLight){let w=s.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(M.isSpotLight){let w=s.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let w=s.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let w=s.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let w=s.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function o1(i,t){let e=new np(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function ip(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new o1(i,t),e.set(r,[c])):a>=o.length?(c=new o1(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var pc=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mc=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rp=`uniform sampler2D shadow_pass;
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
}`;function op(i,t,e){let n=new $s,s=new rt,r=new rt,a=new ue,o=new pc({depthPacking:Ku}),c=new mc,l={},u=e.maxTextureSize,f={[mn]:Re,[Re]:mn,[We]:We},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:sp,fragmentShader:rp}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new ve;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v1;let p=this.type;this.render=function(T,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Qn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=p!==Nn&&this.type===Nn,P=p===Nn&&this.type!==Nn;for(let F=0,H=T.length;F<H;F++){let J=T[F],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let q=Y.getFrameExtents();if(s.multiply(q),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||P===!0){let it=this.type!==Nn?{minFilter:Ve,magFilter:Ve}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Bn(s.x,s.y,it),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let et=Y.getViewportCount();for(let it=0;it<et;it++){let mt=Y.getViewport(it);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),N.viewport(a),Y.updateMatrices(J,it),n=Y.getFrustum(),M(E,I,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===Nn&&y(Y,I),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,b,D)};function y(T,E){let I=t.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,I,h,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,I,d,x,null)}function _(T,E,I,v){let b=null,D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=b.uuid,k=E.uuid,P=l[N];P===void 0&&(P={},l[N]=P);let F=P[k];F===void 0&&(F=b.clone(),P[k]=F,E.addEventListener("dispose",w)),b=F}if(b.visible=E.visible,b.wireframe=E.wireframe,v===Nn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:f[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=i.properties.get(b);N.light=I}return b}function M(T,E,I,v,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let k=t.update(T),P=T.material;if(Array.isArray(P)){let F=k.groups;for(let H=0,J=F.length;H<J;H++){let Y=F[H],q=P[Y.materialIndex];if(q&&q.visible){let et=_(T,q,v,b);T.onBeforeShadow(i,T,E,I,k,et,Y),i.renderBufferDirect(I,null,k,et,T,Y),T.onAfterShadow(i,T,E,I,k,et,Y)}}}else if(P.visible){let F=_(T,P,v,b);T.onBeforeShadow(i,T,E,I,k,F,null),i.renderBufferDirect(I,null,k,F,T,null),T.onAfterShadow(i,T,E,I,k,F,null)}}let N=T.children;for(let k=0,P=N.length;k<P;k++)M(N[k],E,I,v,b)}function w(T){T.target.removeEventListener("dispose",w);for(let I in l){let v=l[I],b=T.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function ap(i,t,e){let n=e.isWebGL2;function s(){let O=!1,lt=new ue,ut=null,Pt=new ue(0,0,0,0);return{setMask:function(At){ut!==At&&!O&&(i.colorMask(At,At,At,At),ut=At)},setLocked:function(At){O=At},setClear:function(At,Jt,jt,Te,Be){Be===!0&&(At*=Te,Jt*=Te,jt*=Te),lt.set(At,Jt,jt,Te),Pt.equals(lt)===!1&&(i.clearColor(At,Jt,jt,Te),Pt.copy(lt))},reset:function(){O=!1,ut=null,Pt.set(-1,0,0,0)}}}function r(){let O=!1,lt=null,ut=null,Pt=null;return{setTest:function(At){At?Ut(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(At){lt!==At&&!O&&(i.depthMask(At),lt=At)},setFunc:function(At){if(ut!==At){switch(At){case Au:i.depthFunc(i.NEVER);break;case Ru:i.depthFunc(i.ALWAYS);break;case Cu:i.depthFunc(i.LESS);break;case Qr:i.depthFunc(i.LEQUAL);break;case Pu:i.depthFunc(i.EQUAL);break;case Lu:i.depthFunc(i.GEQUAL);break;case Iu:i.depthFunc(i.GREATER);break;case Du:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=At}},setLocked:function(At){O=At},setClear:function(At){Pt!==At&&(i.clearDepth(At),Pt=At)},reset:function(){O=!1,lt=null,ut=null,Pt=null}}}function a(){let O=!1,lt=null,ut=null,Pt=null,At=null,Jt=null,jt=null,Te=null,Be=null;return{setTest:function(re){O||(re?Ut(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(re){lt!==re&&!O&&(i.stencilMask(re),lt=re)},setFunc:function(re,ze,bn){(ut!==re||Pt!==ze||At!==bn)&&(i.stencilFunc(re,ze,bn),ut=re,Pt=ze,At=bn)},setOp:function(re,ze,bn){(Jt!==re||jt!==ze||Te!==bn)&&(i.stencilOp(re,ze,bn),Jt=re,jt=ze,Te=bn)},setLocked:function(re){O=re},setClear:function(re){Be!==re&&(i.clearStencil(re),Be=re)},reset:function(){O=!1,lt=null,ut=null,Pt=null,At=null,Jt=null,jt=null,Te=null,Be=null}}}let o=new s,c=new r,l=new a,u=new WeakMap,f=new WeakMap,h={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,M=null,w=null,T=null,E=null,I=null,v=new Yt(0,0,0),b=0,D=!1,N=null,k=null,P=null,F=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,q=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(et)[1]),Y=q>=1):et.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Y=q>=2);let it=null,mt={},X=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),gt=new ue().fromArray(X),St=new ue().fromArray(nt);function vt(O,lt,ut,Pt){let At=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(O,Jt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<ut;jt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(lt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(lt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Jt}let Lt={};Lt[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Lt[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(i.DEPTH_TEST),c.setFunc(Qr),_t(!1),A(zl),Ut(i.CULL_FACE),$(Qn);function Ut(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function bt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Nt(O,lt){return d[O]!==lt?(i.bindFramebuffer(O,lt),d[O]=lt,n&&(O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt)),!0):!1}function U(O,lt){let ut=x,Pt=!1;if(O)if(ut=g.get(lt),ut===void 0&&(ut=[],g.set(lt,ut)),O.isWebGLMultipleRenderTargets){let At=O.texture;if(ut.length!==At.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,jt=At.length;Jt<jt;Jt++)ut[Jt]=i.COLOR_ATTACHMENT0+Jt;ut.length=At.length,Pt=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,Pt=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,Pt=!0);Pt&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function ct(O){return m!==O?(i.useProgram(O),m=O,!0):!1}let Z={[bi]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[Gl]=i.MIN,Z[Wl]=i.MAX;else{let O=t.get("EXT_blend_minmax");O!==null&&(Z[Gl]=O.MIN_EXT,Z[Wl]=O.MAX_EXT)}let ot={[pu]:i.ZERO,[mu]:i.ONE,[gu]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[vu]:i.DST_COLOR,[xu]:i.DST_ALPHA,[_u]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[Su]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[wu]:i.ONE_MINUS_CONSTANT_ALPHA};function $(O,lt,ut,Pt,At,Jt,jt,Te,Be,re){if(O===Qn){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(Ut(i.BLEND),p=!0),O!==hu){if(O!==y||re!==D){if((_!==bi||T!==bi)&&(i.blendEquation(i.FUNC_ADD),_=bi,T=bi),re)switch(O){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.ONE,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,w=null,E=null,I=null,v.set(0,0,0),b=0,y=O,D=re}return}At=At||lt,Jt=Jt||ut,jt=jt||Pt,(lt!==_||At!==T)&&(i.blendEquationSeparate(Z[lt],Z[At]),_=lt,T=At),(ut!==M||Pt!==w||Jt!==E||jt!==I)&&(i.blendFuncSeparate(ot[ut],ot[Pt],ot[Jt],ot[jt]),M=ut,w=Pt,E=Jt,I=jt),(Te.equals(v)===!1||Be!==b)&&(i.blendColor(Te.r,Te.g,Te.b,Be),v.copy(Te),b=Be),y=O,D=!1}function Et(O,lt){O.side===We?bt(i.CULL_FACE):Ut(i.CULL_FACE);let ut=O.side===Re;lt&&(ut=!ut),_t(ut),O.blending===ts&&O.transparent===!1?$(Qn):$(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);let Pt=O.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ut(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(O){N!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),N=O)}function A(O){O!==lu?(Ut(i.CULL_FACE),O!==k&&(O===zl?i.cullFace(i.BACK):O===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),k=O}function S(O){O!==P&&(Y&&i.lineWidth(O),P=O)}function z(O,lt,ut){O?(Ut(i.POLYGON_OFFSET_FILL),(F!==lt||H!==ut)&&(i.polygonOffset(lt,ut),F=lt,H=ut)):bt(i.POLYGON_OFFSET_FILL)}function st(O){O?Ut(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function j(O){O===void 0&&(O=i.TEXTURE0+J-1),it!==O&&(i.activeTexture(O),it=O)}function K(O,lt,ut){ut===void 0&&(it===null?ut=i.TEXTURE0+J-1:ut=it);let Pt=mt[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},mt[ut]=Pt),(Pt.type!==O||Pt.texture!==lt)&&(it!==ut&&(i.activeTexture(ut),it=ut),i.bindTexture(O,lt||Lt[O]),Pt.type=O,Pt.texture=lt)}function Mt(){let O=mt[it];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(O){gt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),gt.copy(O))}function Wt(O){St.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),St.copy(O))}function Zt(O,lt){let ut=f.get(lt);ut===void 0&&(ut=new WeakMap,f.set(lt,ut));let Pt=ut.get(O);Pt===void 0&&(Pt=i.getUniformBlockIndex(lt,O.name),ut.set(O,Pt))}function Ht(O,lt){let Pt=f.get(lt).get(O);u.get(lt)!==Pt&&(i.uniformBlockBinding(lt,Pt,O.__bindingPointIndex),u.set(lt,Pt))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,mt={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,M=null,w=null,T=null,E=null,I=null,v=new Yt(0,0,0),b=0,D=!1,N=null,k=null,P=null,F=null,H=null,gt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ut,disable:bt,bindFramebuffer:Nt,drawBuffers:U,useProgram:ct,setBlending:$,setMaterial:Et,setFlipSided:_t,setCullFace:A,setLineWidth:S,setPolygonOffset:z,setScissorTest:st,activeTexture:j,bindTexture:K,unbindTexture:Mt,compressedTexImage2D:pt,compressedTexImage3D:xt,texImage2D:ft,texImage3D:at,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:L,texStorage3D:tt,texSubImage2D:Ct,texSubImage3D:Ft,compressedTexSubImage2D:Q,compressedTexSubImage3D:Gt,scissor:Tt,viewport:Wt,reset:ht}}function cp(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):ao("canvas")}function x(A,S,z,st){let j=1;if((A.width>st||A.height>st)&&(j=st/Math.max(A.width,A.height)),j<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let K=S?oo:Math.floor,Mt=K(j*A.width),pt=K(j*A.height);f===void 0&&(f=g(Mt,pt));let xt=z?g(Mt,pt):f;return xt.width=Mt,xt.height=pt,xt.getContext("2d").drawImage(A,0,0,Mt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Mt+"x"+pt+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return ic(A.width)&&ic(A.height)}function p(A){return o?!1:A.wrapS!==dn||A.wrapT!==dn||A.minFilter!==Ve&&A.minFilter!==on}function y(A,S){return A.generateMipmaps&&S&&A.minFilter!==Ve&&A.minFilter!==on}function _(A){i.generateMipmap(A)}function M(A,S,z,st,j=!1){if(o===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),S===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RGBA){let Mt=j?no:ie.getTransfer(st);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Mt===ae?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(A,S,z){return y(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===Ve||A===Xl||A===ma?i.NEAREST:i.LINEAR}function E(A){let S=A.target;S.removeEventListener("dispose",E),v(S),S.isVideoTexture&&u.delete(S)}function I(A){let S=A.target;S.removeEventListener("dispose",I),D(S)}function v(A){let S=n.get(A);if(S.__webglInit===void 0)return;let z=A.source,st=h.get(z);if(st){let j=st[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(A),Object.keys(st).length===0&&h.delete(z)}n.remove(A)}function b(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let z=A.source,st=h.get(z);delete st[S.__cacheKey],a.memory.textures--}function D(A){let S=A.texture,z=n.get(A),st=n.get(S);if(st.__webglTexture!==void 0&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(z.__webglFramebuffer[j]))for(let K=0;K<z.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(z.__webglFramebuffer[j][K]);else i.deleteFramebuffer(z.__webglFramebuffer[j]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[j])}else{if(Array.isArray(z.__webglFramebuffer))for(let j=0;j<z.__webglFramebuffer.length;j++)i.deleteFramebuffer(z.__webglFramebuffer[j]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let j=0;j<z.__webglColorRenderbuffer.length;j++)z.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[j]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,K=S.length;j<K;j++){let Mt=n.get(S[j]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),a.memory.textures--),n.remove(S[j])}n.remove(S),n.remove(A)}let N=0;function k(){N=0}function P(){let A=N;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function F(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function H(A,S){let z=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(z,A,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function J(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){gt(z,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function Y(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){gt(z,A,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function q(A,S){let z=n.get(A);if(A.version>0&&z.__version!==A.version){St(z,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}let et={[tc]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[ec]:i.MIRRORED_REPEAT},it={[Ve]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Hu]:i.LINEAR_MIPMAP_NEAREST,[qs]:i.LINEAR_MIPMAP_LINEAR},mt={[Qu]:i.NEVER,[rh]:i.ALWAYS,[th]:i.LESS,[I1]:i.LEQUAL,[eh]:i.EQUAL,[sh]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function X(A,S,z){if(z?(i.texParameteri(A,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,et[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==dn||S.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Ve&&S.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let st=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ve||S.minFilter!==ma&&S.minFilter!==qs||S.type===jn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ys&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function nt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));let st=S.source,j=h.get(st);j===void 0&&(j={},h.set(st,j));let K=F(S);if(K!==A.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[K].usedTimes++;let Mt=j[A.__cacheKey];Mt!==void 0&&(j[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(S)),A.__cacheKey=K,A.__webglTexture=j[K].texture}return z}function gt(A,S,z){let st=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=i.TEXTURE_3D);let j=nt(A,S),K=S.source;e.bindTexture(st,A.__webglTexture,i.TEXTURE0+z);let Mt=n.get(K);if(K.version!==Mt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);let pt=ie.getPrimaries(ie.workingColorSpace),xt=S.colorSpace===an?null:ie.getPrimaries(S.colorSpace),Ct=S.colorSpace===an||pt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Ft=p(S)&&m(S.image)===!1,Q=x(S.image,Ft,!1,s.maxTextureSize);Q=_t(S,Q);let Gt=m(Q)||o,L=r.convert(S.format,S.colorSpace),tt=r.convert(S.type),ft=M(S.internalFormat,L,tt,S.colorSpace,S.isVideoTexture);X(st,S,Gt);let at,Tt=S.mipmaps,Wt=o&&S.isVideoTexture!==!0&&ft!==C1,Zt=Mt.__version===void 0||j===!0,Ht=w(S,Q,Gt);if(S.isDepthTexture)ft=i.DEPTH_COMPONENT,o?S.type===jn?ft=i.DEPTH_COMPONENT32F:S.type===Kn?ft=i.DEPTH_COMPONENT24:S.type===Ei?ft=i.DEPTH24_STENCIL8:ft=i.DEPTH_COMPONENT16:S.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ti&&ft===i.DEPTH_COMPONENT&&S.type!==Xc&&S.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Kn,tt=r.convert(S.type)),S.format===rs&&ft===i.DEPTH_COMPONENT&&(ft=i.DEPTH_STENCIL,S.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ei,tt=r.convert(S.type))),Zt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,ft,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ft,Q.width,Q.height,0,L,tt,null));else if(S.isDataTexture)if(Tt.length>0&&Gt){Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,Ht,ft,Tt[0].width,Tt[0].height);for(let ht=0,O=Tt.length;ht<O;ht++)at=Tt[ht],Wt?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,at.width,at.height,L,tt,at.data):e.texImage2D(i.TEXTURE_2D,ht,ft,at.width,at.height,0,L,tt,at.data);S.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(i.TEXTURE_2D,Ht,ft,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,L,tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,ft,Q.width,Q.height,0,L,tt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Wt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,ft,Tt[0].width,Tt[0].height,Q.depth);for(let ht=0,O=Tt.length;ht<O;ht++)at=Tt[ht],S.format!==pn?L!==null?Wt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,at.width,at.height,Q.depth,L,at.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,ft,at.width,at.height,Q.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,at.width,at.height,Q.depth,L,tt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,ft,at.width,at.height,Q.depth,0,L,tt,at.data)}else{Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,Ht,ft,Tt[0].width,Tt[0].height);for(let ht=0,O=Tt.length;ht<O;ht++)at=Tt[ht],S.format!==pn?L!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,at.width,at.height,L,at.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,ft,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,at.width,at.height,L,tt,at.data):e.texImage2D(i.TEXTURE_2D,ht,ft,at.width,at.height,0,L,tt,at.data)}else if(S.isDataArrayTexture)Wt?(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,ft,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,L,tt,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,Q.width,Q.height,Q.depth,0,L,tt,Q.data);else if(S.isData3DTexture)Wt?(Zt&&e.texStorage3D(i.TEXTURE_3D,Ht,ft,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,L,tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ft,Q.width,Q.height,Q.depth,0,L,tt,Q.data);else if(S.isFramebufferTexture){if(Zt)if(Wt)e.texStorage2D(i.TEXTURE_2D,Ht,ft,Q.width,Q.height);else{let ht=Q.width,O=Q.height;for(let lt=0;lt<Ht;lt++)e.texImage2D(i.TEXTURE_2D,lt,ft,ht,O,0,L,tt,null),ht>>=1,O>>=1}}else if(Tt.length>0&&Gt){Wt&&Zt&&e.texStorage2D(i.TEXTURE_2D,Ht,ft,Tt[0].width,Tt[0].height);for(let ht=0,O=Tt.length;ht<O;ht++)at=Tt[ht],Wt?e.texSubImage2D(i.TEXTURE_2D,ht,0,0,L,tt,at):e.texImage2D(i.TEXTURE_2D,ht,ft,L,tt,at);S.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(i.TEXTURE_2D,Ht,ft,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,L,tt,Q)):e.texImage2D(i.TEXTURE_2D,0,ft,L,tt,Q);y(S,Gt)&&_(st),Mt.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function St(A,S,z){if(S.image.length!==6)return;let st=nt(A,S),j=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let K=n.get(j);if(j.version!==K.__version||st===!0){e.activeTexture(i.TEXTURE0+z);let Mt=ie.getPrimaries(ie.workingColorSpace),pt=S.colorSpace===an?null:ie.getPrimaries(S.colorSpace),xt=S.colorSpace===an||Mt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ct=S.isCompressedTexture||S.image[0].isCompressedTexture,Ft=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let ht=0;ht<6;ht++)!Ct&&!Ft?Q[ht]=x(S.image[ht],!1,!0,s.maxCubemapSize):Q[ht]=Ft?S.image[ht].image:S.image[ht],Q[ht]=_t(S,Q[ht]);let Gt=Q[0],L=m(Gt)||o,tt=r.convert(S.format,S.colorSpace),ft=r.convert(S.type),at=M(S.internalFormat,tt,ft,S.colorSpace),Tt=o&&S.isVideoTexture!==!0,Wt=K.__version===void 0||st===!0,Zt=w(S,Gt,L);X(i.TEXTURE_CUBE_MAP,S,L);let Ht;if(Ct){Tt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,at,Gt.width,Gt.height);for(let ht=0;ht<6;ht++){Ht=Q[ht].mipmaps;for(let O=0;O<Ht.length;O++){let lt=Ht[O];S.format!==pn?tt!==null?Tt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O,0,0,lt.width,lt.height,tt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O,at,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O,0,0,lt.width,lt.height,tt,ft,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O,at,lt.width,lt.height,0,tt,ft,lt.data)}}}else{Ht=S.mipmaps,Tt&&Wt&&(Ht.length>0&&Zt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,at,Q[0].width,Q[0].height));for(let ht=0;ht<6;ht++)if(Ft){Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Q[ht].width,Q[ht].height,tt,ft,Q[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,at,Q[ht].width,Q[ht].height,0,tt,ft,Q[ht].data);for(let O=0;O<Ht.length;O++){let ut=Ht[O].image[ht].image;Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O+1,0,0,ut.width,ut.height,tt,ft,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O+1,at,ut.width,ut.height,0,tt,ft,ut.data)}}else{Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,tt,ft,Q[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,at,tt,ft,Q[ht]);for(let O=0;O<Ht.length;O++){let lt=Ht[O];Tt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O+1,0,0,tt,ft,lt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,O+1,at,tt,ft,lt.image[ht])}}}y(S,L)&&_(i.TEXTURE_CUBE_MAP),K.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function vt(A,S,z,st,j,K){let Mt=r.convert(z.format,z.colorSpace),pt=r.convert(z.type),xt=M(z.internalFormat,Mt,pt,z.colorSpace);if(!n.get(S).__hasExternalTextures){let Ft=Math.max(1,S.width>>K),Q=Math.max(1,S.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,xt,Ft,Q,S.depth,0,Mt,pt,null):e.texImage2D(j,K,xt,Ft,Q,0,Mt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),$(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,j,n.get(z).__webglTexture,0,ot(S)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,j,n.get(z).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let st=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||$(S)){let j=S.depthTexture;j&&j.isDepthTexture&&(j.type===jn?st=i.DEPTH_COMPONENT32F:j.type===Kn&&(st=i.DEPTH_COMPONENT24));let K=ot(S);$(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,st,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,st,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,st,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){let st=ot(S);z&&$(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let st=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0;j<st.length;j++){let K=st[j],Mt=r.convert(K.format,K.colorSpace),pt=r.convert(K.type),xt=M(K.internalFormat,Mt,pt,K.colorSpace),Ct=ot(S);z&&$(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,xt,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,xt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let st=n.get(S.depthTexture).__webglTexture,j=ot(S);if(S.depthTexture.format===Ti)$(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===rs)$(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function bt(A){let S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]=i.createRenderbuffer(),Lt(S.__webglDepthbuffer[st],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Lt(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(A,S,z){let st=n.get(A);S!==void 0&&vt(st.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&bt(A)}function U(A){let S=A.texture,z=n.get(A),st=n.get(S);A.addEventListener("dispose",I),A.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=S.version,a.memory.textures++);let j=A.isWebGLCubeRenderTarget===!0,K=A.isWebGLMultipleRenderTargets===!0,Mt=m(A)||o;if(j){z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[pt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)z.__webglFramebuffer[pt][xt]=i.createFramebuffer()}else z.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)z.__webglFramebuffer[pt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let pt=A.texture;for(let xt=0,Ct=pt.length;xt<Ct;xt++){let Ft=n.get(pt[xt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&$(A)===!1){let pt=K?S:[S];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<pt.length;xt++){let Ct=pt[xt];z.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);let Ft=r.convert(Ct.format,Ct.colorSpace),Q=r.convert(Ct.type),Gt=M(Ct.internalFormat,Ft,Q,Ct.colorSpace,A.isXRRenderTarget===!0),L=ot(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,Gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,Mt);for(let pt=0;pt<6;pt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)vt(z.__webglFramebuffer[pt][xt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else vt(z.__webglFramebuffer[pt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);y(S,Mt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let pt=A.texture;for(let xt=0,Ct=pt.length;xt<Ct;xt++){let Ft=pt[xt],Q=n.get(Ft);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),X(i.TEXTURE_2D,Ft,Mt),vt(z.__webglFramebuffer,A,Ft,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),y(Ft,Mt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,st.__webglTexture),X(pt,S,Mt),o&&S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)vt(z.__webglFramebuffer[xt],A,S,i.COLOR_ATTACHMENT0,pt,xt);else vt(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,pt,0);y(S,Mt)&&_(pt),e.unbindTexture()}A.depthBuffer&&bt(A)}function ct(A){let S=m(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0,j=z.length;st<j;st++){let K=z[st];if(y(K,S)){let Mt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(K).__webglTexture;e.bindTexture(Mt,pt),_(Mt),e.unbindTexture()}}}function Z(A){if(o&&A.samples>0&&$(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,st=A.height,j=i.COLOR_BUFFER_BIT,K=[],Mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),xt=A.isWebGLMultipleRenderTargets===!0;if(xt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){K.push(i.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&K.push(Mt);let Ft=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Ft===!1&&(A.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),xt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Ct]),Ft===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),xt){let Q=n.get(S[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,st,0,0,z,st,j,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Ct]);let Ft=n.get(S[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function ot(A){return Math.min(s.maxSamples,A.samples)}function $(A){let S=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(A){let S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function _t(A,S){let z=A.colorSpace,st=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===nc||z!==Fn&&z!==an&&(ie.getTransfer(z)===ae?o===!1?t.has("EXT_sRGB")===!0&&st===pn?(A.format=nc,A.minFilter=on,A.generateMipmaps=!1):S=co.sRGBToLinear(S):(st!==pn||j!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Nt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=$}function lp(i,t,e){let n=e.isWebGL2;function s(r,a=an){let o,c=ie.getTransfer(a);if(r===ei)return i.UNSIGNED_BYTE;if(r===E1)return i.UNSIGNED_SHORT_4_4_4_4;if(r===T1)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vu)return i.BYTE;if(r===Gu)return i.SHORT;if(r===Xc)return i.UNSIGNED_SHORT;if(r===S1)return i.INT;if(r===Kn)return i.UNSIGNED_INT;if(r===jn)return i.FLOAT;if(r===Ys)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Wu)return i.ALPHA;if(r===pn)return i.RGBA;if(r===Xu)return i.LUMINANCE;if(r===qu)return i.LUMINANCE_ALPHA;if(r===Ti)return i.DEPTH_COMPONENT;if(r===rs)return i.DEPTH_STENCIL;if(r===nc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Yu)return i.RED;if(r===w1)return i.RED_INTEGER;if(r===Zu)return i.RG;if(r===A1)return i.RG_INTEGER;if(r===R1)return i.RGBA_INTEGER;if(r===ga||r===_a||r===xa||r===ya)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ga)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ql||r===Yl||r===Zl||r===$l)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===C1)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jl||r===Kl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jl)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Kl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jl||r===Ql||r===t2||r===e2||r===n2||r===i2||r===s2||r===r2||r===o2||r===a2||r===c2||r===l2||r===u2||r===h2)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===jl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ql)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===t2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===e2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===n2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===i2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===s2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===r2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===o2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===a2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===c2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===l2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===u2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===h2)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===va||r===f2||r===d2)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===va)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===f2)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===d2)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$u||r===p2||r===m2||r===g2)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===va)return o.COMPRESSED_RED_RGTC1_EXT;if(r===p2)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===m2)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===g2)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ei?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var gc=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xe=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},up={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(up)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_c=class extends En{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],M=new rt,w=null,T=new Oe;T.layers.enable(1),T.viewport=new ue;let E=new Oe;E.layers.enable(2),E.viewport=new ue;let I=[T,E],v=new gc;v.layers.enable(1),v.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=y[X];return nt===void 0&&(nt=new Vs,y[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=y[X];return nt===void 0&&(nt=new Vs,y[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=y[X];return nt===void 0&&(nt=new Vs,y[X]=nt),nt.getHandSpace()};function N(X){let nt=_.indexOf(X.inputSource);if(nt===-1)return;let gt=y[nt];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",P);for(let X=0;X<y.length;X++){let nt=_[X];nt!==null&&(_[X]=null,y[X].disconnect(nt))}b=null,D=null,t.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let nt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Bn(d.framebufferWidth,d.framebufferHeight,{format:pn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let nt=null,gt=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?rs:Ti,gt=x.stencil?Ei:Kn);let vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),p=new Bn(h.textureWidth,h.textureHeight,{format:pn,type:ei,depthTexture:new yo(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Lt=t.properties.get(p);Lt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(X){for(let nt=0;nt<X.removed.length;nt++){let gt=X.removed[nt],St=_.indexOf(gt);St>=0&&(_[St]=null,y[St].disconnect(gt))}for(let nt=0;nt<X.added.length;nt++){let gt=X.added[nt],St=_.indexOf(gt);if(St===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=_.length){_.push(gt),St=Lt;break}else if(_[Lt]===null){_[Lt]=gt,St=Lt;break}if(St===-1)break}let vt=y[St];vt&&vt.connect(gt)}}let F=new R,H=new R;function J(X,nt,gt){F.setFromMatrixPosition(nt.matrixWorld),H.setFromMatrixPosition(gt.matrixWorld);let St=F.distanceTo(H),vt=nt.projectionMatrix.elements,Lt=gt.projectionMatrix.elements,Ut=vt[14]/(vt[10]-1),bt=vt[14]/(vt[10]+1),Nt=(vt[9]+1)/vt[5],U=(vt[9]-1)/vt[5],ct=(vt[8]-1)/vt[0],Z=(Lt[8]+1)/Lt[0],ot=Ut*ct,$=Ut*Z,Et=St/(-ct+Z),_t=Et*-ct;nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let A=Ut+Et,S=bt+Et,z=ot-_t,st=$+(St-_t),j=Nt*bt/S*A,K=U*bt/S*A;X.projectionMatrix.makePerspective(z,st,j,K,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.near=E.near=T.near=X.near,v.far=E.far=T.far=X.far,(b!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,D=v.far);let nt=X.parent,gt=v.cameras;Y(v,nt);for(let St=0;St<gt.length;St++)Y(gt[St],nt);gt.length===2?J(v,T,E):v.projectionMatrix.copy(T.projectionMatrix),q(X,v,nt)};function q(X,nt,gt){gt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let et=null;function it(X,nt){if(u=nt.getViewerPose(l||a),g=nt,u!==null){let gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let St=!1;gt.length!==v.cameras.length&&(v.cameras.length=0,St=!0);for(let vt=0;vt<gt.length;vt++){let Lt=gt[vt],Ut=null;if(d!==null)Ut=d.getViewport(Lt);else{let Nt=f.getViewSubImage(h,Lt);Ut=Nt.viewport,vt===0&&(t.setRenderTargetTextures(p,Nt.colorTexture,h.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(p))}let bt=I[vt];bt===void 0&&(bt=new Oe,bt.layers.enable(vt),bt.viewport=new ue,I[vt]=bt),bt.matrix.fromArray(Lt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Lt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),vt===0&&(v.matrix.copy(bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),St===!0&&v.cameras.push(bt)}}for(let gt=0;gt<y.length;gt++){let St=_[gt],vt=y[gt];St!==null&&vt!==void 0&&vt.update(St,nt,l||a)}et&&et(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let mt=new O1;mt.setAnimationLoop(it),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}};function hp(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,N1(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fp(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let M=_.program;n.uniformBlockBinding(y,M)}function l(y,_){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));let w=_.program;n.updateUBOMapping(y,w);let T=t.render.frame;r[y.id]!==T&&(h(y),r[y.id]=T)}function u(y){let _=f();y.__bindingPointIndex=_;let M=i.createBuffer(),w=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let _=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,E=M.length;T<E;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,b=I.length;v<b;v++){let D=I[v];if(d(D,T,v,w)===!0){let N=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],P=0;for(let F=0;F<k.length;F++){let H=k[F],J=x(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+P,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,M,w){let T=y.value,E=_+"_"+M;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{let I=w[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return w[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let _=y.uniforms,M=0,w=16;for(let E=0,I=_.length;E<I;E++){let v=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,D=v.length;b<D;b++){let N=v[b],k=Array.isArray(N.value)?N.value:[N.value];for(let P=0,F=k.length;P<F;P++){let H=k[P],J=x(H),Y=M%w;Y!==0&&w-Y<J.boundary&&(M+=w-Y),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=J.storage}}}let T=M%w;return T>0&&(M+=w-T),y.__size=M,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ks=class{constructor(t={}){let{canvas:e=vh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let _=this,M=!1,w=0,T=0,E=null,I=-1,v=null,b=new ue,D=new ue,N=null,k=new Yt(0),P=0,F=e.width,H=e.height,J=1,Y=null,q=null,et=new ue(0,0,F,H),it=new ue(0,0,F,H),mt=!1,X=new $s,nt=!1,gt=!1,St=null,vt=new Dt,Lt=new rt,Ut=new R,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return E===null?J:1}let U=n;function ct(C,B){for(let G=0;G<C.length;G++){let W=C[G],V=e.getContext(W,B);if(V!==null)return V}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),U=ct(B,C),U===null)throw ct(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,ot,$,Et,_t,A,S,z,st,j,K,Mt,pt,xt,Ct,Ft,Q,Gt,L,tt,ft,at,Tt,Wt;function Zt(){Z=new L0(U),ot=new T0(U,Z,t),Z.init(ot),at=new lp(U,Z,ot),$=new ap(U,Z,ot),Et=new U0(U),_t=new $3,A=new cp(U,Z,$,_t,ot,at,Et),S=new A0(_),z=new P0(_),st=new Hh(U,ot),Tt=new S0(U,Z,st,ot),j=new I0(U,st,Et,Tt),K=new B0(U,j,st,Et),L=new F0(U,ot,A),Ft=new w0(_t),Mt=new Z3(_,S,z,Z,ot,Tt,Ft),pt=new hp(_,_t),xt=new K3,Ct=new ip(Z,ot),Gt=new b0(_,S,z,$,K,h,c),Q=new op(_,K,ot),Wt=new fp(U,Et,ot,$),tt=new E0(U,Z,Et,ot),ft=new D0(U,Z,Et,ot),Et.programs=Mt.programs,_.capabilities=ot,_.extensions=Z,_.properties=_t,_.renderLists=xt,_.shadowMap=Q,_.state=$,_.info=Et}Zt();let Ht=new _c(_,U);this.xr=Ht,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(F,H,!1))},this.getSize=function(C){return C.set(F,H)},this.setSize=function(C,B,G=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,H=B,e.width=Math.floor(C*J),e.height=Math.floor(B*J),G===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(F*J,H*J).floor()},this.setDrawingBufferSize=function(C,B,G){F=C,H=B,J=G,e.width=Math.floor(C*G),e.height=Math.floor(B*G),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,B,G,W){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,B,G,W),$.viewport(b.copy(et).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(it)},this.setScissor=function(C,B,G,W){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,B,G,W),$.scissor(D.copy(it).multiplyScalar(J).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(C){$.setScissorTest(mt=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(C=!0,B=!0,G=!0){let W=0;if(C){let V=!1;if(E!==null){let yt=E.texture.format;V=yt===R1||yt===A1||yt===w1}if(V){let yt=E.texture.type,Rt=yt===ei||yt===Kn||yt===Xc||yt===Ei||yt===E1||yt===T1,It=Gt.getClearColor(),Ot=Gt.getClearAlpha(),Vt=It.r,Bt=It.g,zt=It.b;Rt?(d[0]=Vt,d[1]=Bt,d[2]=zt,d[3]=Ot,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=Vt,g[1]=Bt,g[2]=zt,g[3]=Ot,U.clearBufferiv(U.COLOR,0,g))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT),G&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),xt.dispose(),Ct.dispose(),_t.dispose(),S.dispose(),z.dispose(),K.dispose(),Tt.dispose(),Wt.dispose(),Mt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Be),Ht.removeEventListener("sessionend",re),St&&(St.dispose(),St=null),ze.stop()};function ht(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=Et.autoReset,B=Q.enabled,G=Q.autoUpdate,W=Q.needsUpdate,V=Q.type;Zt(),Et.autoReset=C,Q.enabled=B,Q.autoUpdate=G,Q.needsUpdate=W,Q.type=V}function lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ut(C){let B=C.target;B.removeEventListener("dispose",ut),Pt(B)}function Pt(C){At(C),_t.remove(C)}function At(C){let B=_t.get(C).programs;B!==void 0&&(B.forEach(function(G){Mt.releaseProgram(G)}),C.isShaderMaterial&&Mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,G,W,V,yt){B===null&&(B=bt);let Rt=V.isMesh&&V.matrixWorld.determinant()<0,It=ru(C,B,G,W,V);$.setMaterial(W,Rt);let Ot=G.index,Vt=1;if(W.wireframe===!0){if(Ot=j.getWireframeAttribute(G),Ot===void 0)return;Vt=2}let Bt=G.drawRange,zt=G.attributes.position,ge=Bt.start*Vt,Qe=(Bt.start+Bt.count)*Vt;yt!==null&&(ge=Math.max(ge,yt.start*Vt),Qe=Math.min(Qe,(yt.start+yt.count)*Vt)),Ot!==null?(ge=Math.max(ge,0),Qe=Math.min(Qe,Ot.count)):zt!=null&&(ge=Math.max(ge,0),Qe=Math.min(Qe,zt.count));let we=Qe-ge;if(we<0||we===1/0)return;Tt.setup(V,W,It,G,Ot);let Cn,he=tt;if(Ot!==null&&(Cn=st.get(Ot),he=ft,he.setIndex(Cn)),V.isMesh)W.wireframe===!0?($.setLineWidth(W.wireframeLinewidth*Nt()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(V.isLine){let Xt=W.linewidth;Xt===void 0&&(Xt=1),$.setLineWidth(Xt*Nt()),V.isLineSegments?he.setMode(U.LINES):V.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else V.isPoints?he.setMode(U.POINTS):V.isSprite&&he.setMode(U.TRIANGLES);if(V.isBatchedMesh)he.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)he.renderInstances(ge,we,V.count);else if(G.isInstancedBufferGeometry){let Xt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ha=Math.min(G.instanceCount,Xt);he.renderInstances(ge,we,ha)}else he.render(ge,we)};function Jt(C,B,G){C.transparent===!0&&C.side===We&&C.forceSinglePass===!1?(C.side=Re,C.needsUpdate=!0,Er(C,B,G),C.side=mn,C.needsUpdate=!0,Er(C,B,G),C.side=We):Er(C,B,G)}this.compile=function(C,B,G=null){G===null&&(G=C),m=Ct.get(G),m.init(),y.push(m),G.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),C!==G&&C.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);let W=new Set;return C.traverse(function(V){let yt=V.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){let It=yt[Rt];Jt(It,G,V),W.add(It)}else Jt(yt,G,V),W.add(yt)}),y.pop(),m=null,W},this.compileAsync=function(C,B,G=null){let W=this.compile(C,B,G);return new Promise(V=>{function yt(){if(W.forEach(function(Rt){_t.get(Rt).currentProgram.isReady()&&W.delete(Rt)}),W.size===0){V(C);return}setTimeout(yt,10)}Z.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let jt=null;function Te(C){jt&&jt(C)}function Be(){ze.stop()}function re(){ze.start()}let ze=new O1;ze.setAnimationLoop(Te),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(C){jt=C,Ht.setAnimationLoop(C),C===null?ze.stop():ze.start()},Ht.addEventListener("sessionstart",Be),Ht.addEventListener("sessionend",re),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(B),B=Ht.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,B,E),m=Ct.get(C,y.length),m.init(),y.push(m),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(vt),gt=this.localClippingEnabled,nt=Ft.init(this.clippingPlanes,gt),x=xt.get(C,p.length),x.init(),p.push(x),bn(C,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Y,q),this.info.render.frame++,nt===!0&&Ft.beginShadows();let G=m.state.shadowsArray;if(Q.render(G,C,B),nt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),Gt.render(x,C),m.setupLights(_._useLegacyLights),B.isArrayCamera){let W=B.cameras;for(let V=0,yt=W.length;V<yt;V++){let Rt=W[V];Dl(x,C,Rt,Rt.viewport)}}else Dl(x,C,B);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(_,C,B),Tt.resetDefaultState(),I=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function bn(C,B,G,W){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){W&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);let Rt=K.update(C),It=C.material;It.visible&&x.push(C,Rt,It,G,Ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let Rt=K.update(C),It=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ut.copy(Rt.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(It)){let Ot=Rt.groups;for(let Vt=0,Bt=Ot.length;Vt<Bt;Vt++){let zt=Ot[Vt],ge=It[zt.materialIndex];ge&&ge.visible&&x.push(C,Rt,ge,G,Ut.z,zt)}}else It.visible&&x.push(C,Rt,It,G,Ut.z,null)}}let yt=C.children;for(let Rt=0,It=yt.length;Rt<It;Rt++)bn(yt[Rt],B,G,W)}function Dl(C,B,G,W){let V=C.opaque,yt=C.transmissive,Rt=C.transparent;m.setupLightsView(G),nt===!0&&Ft.setGlobalState(_.clippingPlanes,G),yt.length>0&&su(V,yt,B,G),W&&$.viewport(b.copy(W)),V.length>0&&Sr(V,B,G),yt.length>0&&Sr(yt,B,G),Rt.length>0&&Sr(Rt,B,G),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function su(C,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let yt=ot.isWebGL2;St===null&&(St=new Bn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Ys:ei,minFilter:qs,samples:yt?4:0})),_.getDrawingBufferSize(Lt),yt?St.setSize(Lt.x,Lt.y):St.setSize(oo(Lt.x),oo(Lt.y));let Rt=_.getRenderTarget();_.setRenderTarget(St),_.getClearColor(k),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();let It=_.toneMapping;_.toneMapping=ti,Sr(C,G,W),A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St);let Ot=!1;for(let Vt=0,Bt=B.length;Vt<Bt;Vt++){let zt=B[Vt],ge=zt.object,Qe=zt.geometry,we=zt.material,Cn=zt.group;if(we.side===We&&ge.layers.test(W.layers)){let he=we.side;we.side=Re,we.needsUpdate=!0,Ul(ge,G,W,Qe,we,Cn),we.side=he,we.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(St),A.updateRenderTargetMipmap(St)),_.setRenderTarget(Rt),_.setClearColor(k,P),_.toneMapping=It}function Sr(C,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let V=0,yt=C.length;V<yt;V++){let Rt=C[V],It=Rt.object,Ot=Rt.geometry,Vt=W===null?Rt.material:W,Bt=Rt.group;It.layers.test(G.layers)&&Ul(It,B,G,Ot,Vt,Bt)}}function Ul(C,B,G,W,V,yt){C.onBeforeRender(_,B,G,W,V,yt),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(_,B,G,W,C,yt),V.transparent===!0&&V.side===We&&V.forceSinglePass===!1?(V.side=Re,V.needsUpdate=!0,_.renderBufferDirect(G,B,W,V,C,yt),V.side=mn,V.needsUpdate=!0,_.renderBufferDirect(G,B,W,V,C,yt),V.side=We):_.renderBufferDirect(G,B,W,V,C,yt),C.onAfterRender(_,B,G,W,V,yt)}function Er(C,B,G){B.isScene!==!0&&(B=bt);let W=_t.get(C),V=m.state.lights,yt=m.state.shadowsArray,Rt=V.state.version,It=Mt.getParameters(C,V.state,yt,B,G),Ot=Mt.getProgramCacheKey(It),Vt=W.programs;W.environment=C.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(C.isMeshStandardMaterial?z:S).get(C.envMap||W.environment),Vt===void 0&&(C.addEventListener("dispose",ut),Vt=new Map,W.programs=Vt);let Bt=Vt.get(Ot);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===Rt)return Ol(C,It),Bt}else It.uniforms=Mt.getUniforms(C),C.onBuild(G,It,_),C.onBeforeCompile(It,_),Bt=Mt.acquireProgram(It,Ot),Vt.set(Ot,Bt),W.uniforms=It.uniforms;let zt=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=Ft.uniform),Ol(C,It),W.needsLights=au(C),W.lightsStateVersion=Rt,W.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function Nl(C){if(C.uniformsList===null){let B=C.currentProgram.getUniforms();C.uniformsList=ns.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Ol(C,B){let G=_t.get(C);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function ru(C,B,G,W,V){B.isScene!==!0&&(B=bt),A.resetTextureUnits();let yt=B.fog,Rt=W.isMeshStandardMaterial?B.environment:null,It=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fn,Ot=(W.isMeshStandardMaterial?z:S).get(W.envMap||Rt),Vt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),zt=!!G.morphAttributes.position,ge=!!G.morphAttributes.normal,Qe=!!G.morphAttributes.color,we=ti;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(we=_.toneMapping);let Cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=Cn!==void 0?Cn.length:0,Xt=_t.get(W),ha=m.state.lights;if(nt===!0&&(gt===!0||C!==v)){let sn=C===v&&W.id===I;Ft.setState(W,C,sn)}let pe=!1;W.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ha.state.version||Xt.outputColorSpace!==It||V.isBatchedMesh&&Xt.batching===!1||!V.isBatchedMesh&&Xt.batching===!0||V.isInstancedMesh&&Xt.instancing===!1||!V.isInstancedMesh&&Xt.instancing===!0||V.isSkinnedMesh&&Xt.skinning===!1||!V.isSkinnedMesh&&Xt.skinning===!0||V.isInstancedMesh&&Xt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xt.instancingColor===!1&&V.instanceColor!==null||Xt.envMap!==Ot||W.fog===!0&&Xt.fog!==yt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ft.numPlanes||Xt.numIntersection!==Ft.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==Bt||Xt.morphTargets!==zt||Xt.morphNormals!==ge||Xt.morphColors!==Qe||Xt.toneMapping!==we||ot.isWebGL2===!0&&Xt.morphTargetsCount!==he)&&(pe=!0):(pe=!0,Xt.__version=W.version);let mi=Xt.currentProgram;pe===!0&&(mi=Er(W,B,V));let Fl=!1,Ds=!1,fa=!1,De=mi.getUniforms(),gi=Xt.uniforms;if($.useProgram(mi.program)&&(Fl=!0,Ds=!0,fa=!0),W.id!==I&&(I=W.id,Ds=!0),Fl||v!==C){De.setValue(U,"projectionMatrix",C.projectionMatrix),De.setValue(U,"viewMatrix",C.matrixWorldInverse);let sn=De.map.cameraPosition;sn!==void 0&&sn.setValue(U,Ut.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&De.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&De.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Ds=!0,fa=!0)}if(V.isSkinnedMesh){De.setOptional(U,V,"bindMatrix"),De.setOptional(U,V,"bindMatrixInverse");let sn=V.skeleton;sn&&(ot.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),De.setValue(U,"boneTexture",sn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(De.setOptional(U,V,"batchingTexture"),De.setValue(U,"batchingTexture",V._matricesTexture,A));let da=G.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0&&ot.isWebGL2===!0)&&L.update(V,G,mi),(Ds||Xt.receiveShadow!==V.receiveShadow)&&(Xt.receiveShadow=V.receiveShadow,De.setValue(U,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gi.envMap.value=Ot,gi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Ds&&(De.setValue(U,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&ou(gi,fa),yt&&W.fog===!0&&pt.refreshFogUniforms(gi,yt),pt.refreshMaterialUniforms(gi,W,J,H,St),ns.upload(U,Nl(Xt),gi,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(U,Nl(Xt),gi,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&De.setValue(U,"center",V.center),De.setValue(U,"modelViewMatrix",V.modelViewMatrix),De.setValue(U,"normalMatrix",V.normalMatrix),De.setValue(U,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let sn=W.uniformsGroups;for(let pa=0,cu=sn.length;pa<cu;pa++)if(ot.isWebGL2){let Bl=sn[pa];Wt.update(Bl,mi),Wt.bind(Bl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function ou(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function au(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,B,G){_t.get(C.texture).__webglTexture=B,_t.get(C.depthTexture).__webglTexture=G;let W=_t.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){let G=_t.get(C);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,G=0){E=C,w=B,T=G;let W=!0,V=null,yt=!1,Rt=!1;if(C){let Ot=_t.get(C);Ot.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(U.FRAMEBUFFER,null),W=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ot.__hasExternalTextures&&A.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);let Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Rt=!0);let Bt=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?V=Bt[B][G]:V=Bt[B],yt=!0):ot.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?V=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[G]:V=Bt,b.copy(C.viewport),D.copy(C.scissor),N=C.scissorTest}else b.copy(et).multiplyScalar(J).floor(),D.copy(it).multiplyScalar(J).floor(),N=mt;if($.bindFramebuffer(U.FRAMEBUFFER,V)&&ot.drawBuffers&&W&&$.drawBuffers(C,V),$.viewport(b),$.scissor(D),$.setScissorTest(N),yt){let Ot=_t.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ot.__webglTexture,G)}else if(Rt){let Ot=_t.get(C.texture),Vt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,G||0,Vt)}I=-1},this.readRenderTargetPixels=function(C,B,G,W,V,yt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){$.bindFramebuffer(U.FRAMEBUFFER,It);try{let Ot=C.texture,Vt=Ot.format,Bt=Ot.type;if(Vt!==pn&&at.convert(Vt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let zt=Bt===Ys&&(Z.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Bt!==ei&&at.convert(Bt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===jn&&(ot.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-W&&G>=0&&G<=C.height-V&&U.readPixels(B,G,W,V,at.convert(Vt),at.convert(Bt),yt)}finally{let Ot=E!==null?_t.get(E).__webglFramebuffer:null;$.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(C,B,G=0){let W=Math.pow(2,-G),V=Math.floor(B.image.width*W),yt=Math.floor(B.image.height*W);A.setTexture2D(B,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,C.x,C.y,V,yt),$.unbindTexture()},this.copyTextureToTexture=function(C,B,G,W=0){let V=B.image.width,yt=B.image.height,Rt=at.convert(G.format),It=at.convert(G.type);A.setTexture2D(G,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment),B.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,C.x,C.y,V,yt,Rt,It,B.image.data):B.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Rt,B.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,W,C.x,C.y,Rt,It,B.image),W===0&&G.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,B,G,W,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=C.max.x-C.min.x+1,Rt=C.max.y-C.min.y+1,It=C.max.z-C.min.z+1,Ot=at.convert(W.format),Vt=at.convert(W.type),Bt;if(W.isData3DTexture)A.setTexture3D(W,0),Bt=U.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);let zt=U.getParameter(U.UNPACK_ROW_LENGTH),ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=U.getParameter(U.UNPACK_SKIP_PIXELS),we=U.getParameter(U.UNPACK_SKIP_ROWS),Cn=U.getParameter(U.UNPACK_SKIP_IMAGES),he=G.isCompressedTexture?G.mipmaps[V]:G.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(Bt,V,B.x,B.y,B.z,yt,Rt,It,Ot,Vt,he.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Bt,V,B.x,B.y,B.z,yt,Rt,It,Ot,he.data)):U.texSubImage3D(Bt,V,B.x,B.y,B.z,yt,Rt,It,Ot,Vt,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Cn),V===0&&W.generateMipmaps&&U.generateMipmap(Bt),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,$.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===qc?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Uo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?wi:P1}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wi?Le:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},xc=class extends Ks{};xc.prototype.isWebGL1Renderer=!0;var ls=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var vo=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},a1=new R,c1=new R,l1=new Dt,Wa=new ii,Yr=new ni,yc=class extends Fe{constructor(t=new ve,e=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)a1.fromBufferAttribute(e,s-1),c1.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=a1.distanceTo(c1);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;l1.copy(s).invert(),Wa.copy(t.ray).applyMatrix4(l1);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new R,u=new R,f=new R,h=new R,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=p,M=y-1;_<M;_+=d){let w=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(m,w),u.fromBufferAttribute(m,T),Wa.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(h);I<t.near||I>t.far||e.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=p,M=y-1;_<M;_+=d){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Wa.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},u1=new R,h1=new R,vc=class extends yc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)u1.fromBufferAttribute(e,s),h1.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+u1.distanceTo(h1);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new rt:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,c=new Dt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new rt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mc=class extends js{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $c(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Zr=new R,Xa=new $c,qa=new $c,Ya=new $c,bc=class extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Zr.subVectors(s[0],s[1]).add(s[0]),l=Zr);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Xa.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),qa.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Ya.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),qa.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Ya.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function f1(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function dp(i,t){let e=1-i;return e*e*t}function pp(i,t){return 2*(1-i)*i*t}function mp(i,t){return i*i*t}function Gs(i,t,e,n){return dp(i,t)+pp(i,e)+mp(i,n)}function gp(i,t){let e=1-i;return e*e*e*t}function _p(i,t){let e=1-i;return 3*e*e*i*t}function xp(i,t){return 3*(1-i)*i*i*t}function yp(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return gp(i,t)+_p(i,e)+xp(i,n)+yp(i,s)}var Mo=class extends cn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sc=class extends cn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y),Ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends cn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends cn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends cn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tc=class extends cn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y),Gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(f1(o,c.x,l.x,u.x,f.x),f1(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},wc=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:bc,CubicBezierCurve:Mo,CubicBezierCurve3:Sc,EllipseCurve:js,LineCurve:bo,LineCurve3:Ec,QuadraticBezierCurve:So,QuadraticBezierCurve3:Tc,SplineCurve:Eo}),Ac=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wc[s.type]().fromJSON(s))}return this}},us=class extends Ac{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bo(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new So(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Mo(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new js(t,e,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var To=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function y(){let M=new R,w=new R,T=0,E=(e-t)/n;for(let I=0;I<=r;I++){let v=[],b=I/r,D=b*(e-t)+t;for(let N=0;N<=s;N++){let k=N/s,P=k*c+o,F=Math.sin(P),H=Math.cos(P);w.x=D*F,w.y=-b*n+m,w.z=D*H,f.push(w.x,w.y,w.z),M.set(F,E,H).normalize(),h.push(M.x,M.y,M.z),d.push(k,1-b),v.push(g++)}x.push(v)}for(let I=0;I<s;I++)for(let v=0;v<r;v++){let b=x[v][I],D=x[v+1][I],N=x[v+1][I+1],k=x[v][I+1];u.push(b,D,k),u.push(D,N,k),T+=6}l.addGroup(p,T,0),p+=T}function _(M){let w=g,T=new rt,E=new R,I=0,v=M===!0?t:e,b=M===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*b,0),h.push(0,b,0),d.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let P=N/s*c+o,F=Math.cos(P),H=Math.sin(P);E.x=v*H,E.y=m*b,E.z=v*F,f.push(E.x,E.y,E.z),h.push(0,b,0),T.x=F*.5+.5,T.y=H*.5*b+.5,d.push(T.x,T.y),g++}for(let N=0;N<s;N++){let k=w+N,P=D+N;M===!0?u.push(P,P+1,k):u.push(P+1,P,k),I+=3}l.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qs=class extends us{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new us().fromJSON(s))}return this}},vp={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=V1(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,f,h,d;if(n&&(r=Tp(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<o&&(o=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return tr(r,a,e,o,c,d,0),a}};function V1(i,t,e,n,s){let r,a;if(s===Op(i,t,e,n)>0)for(r=t;r<e;r+=n)a=d1(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=d1(r,i[r],i[r+1],a);return a&&Oo(a,a.next)&&(nr(a),a=a.next),a}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oo(e,e.next)||fe(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Pp(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?bp(i,n,s,r):Mp(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),nr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Sp(Ai(i),t,e),tr(i,t,e,n,s,r,2)):a===2&&Ep(i,t,e,n,s,r):tr(Ai(i),t,e,n,s,r,1);break}}}function Mp(i){let t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<l?o:l:c<l?c:l,h=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Qi(s,o,r,c,a,l,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,x=o>c?o>l?o:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,p=Rc(d,g,t,e,n),y=Rc(x,m,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=p&&M&&M.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Qi(o,u,c,f,l,h,_.x,_.y)&&fe(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Qi(o,u,c,f,l,h,M.x,M.y)&&fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Qi(o,u,c,f,l,h,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Qi(o,u,c,f,l,h,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Sp(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Oo(s,r)&&G1(s,n,n.next,r)&&er(s,r)&&er(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=i=r),n=n.next}while(n!==i);return Ai(n)}function Ep(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dp(a,o)){let c=W1(a,o);a=Ai(a,a.next),c=Ai(c,c.next),tr(a,t,e,n,s,r,0),tr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tp(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=V1(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ip(l));for(s.sort(wp),r=0;r<s.length;r++)e=Ap(s[r],e);return e}function wp(i,t){return i.x-t.x}function Ap(i,t){let e=Rp(i,t);if(!e)return t;let n=W1(e,i);return Ai(n,n.next),Ai(e,e.next)}function Rp(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Qi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),er(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&Cp(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function Cp(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function Pp(i,t,e,n){let s=i;do s.z===0&&(s.z=Rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lp(s)}function Lp(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Up(i,t)&&(er(i,t)&&er(t,i)&&Np(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Oo(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oo(i,t){return i.x===t.x&&i.y===t.y}function G1(i,t,e,n){let s=Jr(fe(i,t,e)),r=Jr(fe(i,t,n)),a=Jr(fe(e,n,i)),o=Jr(fe(e,n,t));return!!(s!==r&&a!==o||s===0&&$r(i,e,t)||r===0&&$r(i,n,t)||a===0&&$r(e,i,n)||o===0&&$r(e,t,n))}function $r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function Up(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&G1(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function Np(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function W1(i,t){let e=new Cc(i.i,i.x,i.y),n=new Cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function d1(i,t,e,n){let s=new Cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Op(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];p1(t),m1(n,t);let a=t.length;e.forEach(p1);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,m1(n,e[c]);let o=vp.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function p1(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function m1(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var wo=class i extends ve{constructor(t=new Qs([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Fp,_,M=!1,w,T,E,I;p&&(_=p.getSpacedPoints(u),M=!0,h=!1,w=p.computeFrenetFrames(u,!1),T=new R,E=new R,I=new R),h||(m=0,d=0,g=0,x=0);let v=o.extractPoints(l),b=v.shape,D=v.holes;if(!Xs.isClockWise(b)){b=b.reverse();for(let U=0,ct=D.length;U<ct;U++){let Z=D[U];Xs.isClockWise(Z)&&(D[U]=Z.reverse())}}let k=Xs.triangulateShape(b,D),P=b;for(let U=0,ct=D.length;U<ct;U++){let Z=D[U];b=b.concat(Z)}function F(U,ct,Z){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ct,Z)}let H=b.length,J=k.length;function Y(U,ct,Z){let ot,$,Et,_t=U.x-ct.x,A=U.y-ct.y,S=Z.x-U.x,z=Z.y-U.y,st=_t*_t+A*A,j=_t*z-A*S;if(Math.abs(j)>Number.EPSILON){let K=Math.sqrt(st),Mt=Math.sqrt(S*S+z*z),pt=ct.x-A/K,xt=ct.y+_t/K,Ct=Z.x-z/Mt,Ft=Z.y+S/Mt,Q=((Ct-pt)*z-(Ft-xt)*S)/(_t*z-A*S);ot=pt+_t*Q-U.x,$=xt+A*Q-U.y;let Gt=ot*ot+$*$;if(Gt<=2)return new rt(ot,$);Et=Math.sqrt(Gt/2)}else{let K=!1;_t>Number.EPSILON?S>Number.EPSILON&&(K=!0):_t<-Number.EPSILON?S<-Number.EPSILON&&(K=!0):Math.sign(A)===Math.sign(z)&&(K=!0),K?(ot=-A,$=_t,Et=Math.sqrt(st)):(ot=_t,$=A,Et=Math.sqrt(st/2))}return new rt(ot/Et,$/Et)}let q=[];for(let U=0,ct=P.length,Z=ct-1,ot=U+1;U<ct;U++,Z++,ot++)Z===ct&&(Z=0),ot===ct&&(ot=0),q[U]=Y(P[U],P[Z],P[ot]);let et=[],it,mt=q.concat();for(let U=0,ct=D.length;U<ct;U++){let Z=D[U];it=[];for(let ot=0,$=Z.length,Et=$-1,_t=ot+1;ot<$;ot++,Et++,_t++)Et===$&&(Et=0),_t===$&&(_t=0),it[ot]=Y(Z[ot],Z[Et],Z[_t]);et.push(it),mt=mt.concat(it)}for(let U=0;U<m;U++){let ct=U/m,Z=d*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+x;for(let $=0,Et=P.length;$<Et;$++){let _t=F(P[$],q[$],ot);vt(_t.x,_t.y,-Z)}for(let $=0,Et=D.length;$<Et;$++){let _t=D[$];it=et[$];for(let A=0,S=_t.length;A<S;A++){let z=F(_t[A],it[A],ot);vt(z.x,z.y,-Z)}}}let X=g+x;for(let U=0;U<H;U++){let ct=h?F(b[U],mt[U],X):b[U];M?(E.copy(w.normals[0]).multiplyScalar(ct.x),T.copy(w.binormals[0]).multiplyScalar(ct.y),I.copy(_[0]).add(E).add(T),vt(I.x,I.y,I.z)):vt(ct.x,ct.y,0)}for(let U=1;U<=u;U++)for(let ct=0;ct<H;ct++){let Z=h?F(b[ct],mt[ct],X):b[ct];M?(E.copy(w.normals[U]).multiplyScalar(Z.x),T.copy(w.binormals[U]).multiplyScalar(Z.y),I.copy(_[U]).add(E).add(T),vt(I.x,I.y,I.z)):vt(Z.x,Z.y,f/u*U)}for(let U=m-1;U>=0;U--){let ct=U/m,Z=d*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+x;for(let $=0,Et=P.length;$<Et;$++){let _t=F(P[$],q[$],ot);vt(_t.x,_t.y,f+Z)}for(let $=0,Et=D.length;$<Et;$++){let _t=D[$];it=et[$];for(let A=0,S=_t.length;A<S;A++){let z=F(_t[A],it[A],ot);M?vt(z.x,z.y+_[u-1].y,_[u-1].x+Z):vt(z.x,z.y,f+Z)}}}nt(),gt();function nt(){let U=s.length/3;if(h){let ct=0,Z=H*ct;for(let ot=0;ot<J;ot++){let $=k[ot];Lt($[2]+Z,$[1]+Z,$[0]+Z)}ct=u+m*2,Z=H*ct;for(let ot=0;ot<J;ot++){let $=k[ot];Lt($[0]+Z,$[1]+Z,$[2]+Z)}}else{for(let ct=0;ct<J;ct++){let Z=k[ct];Lt(Z[2],Z[1],Z[0])}for(let ct=0;ct<J;ct++){let Z=k[ct];Lt(Z[0]+H*u,Z[1]+H*u,Z[2]+H*u)}}n.addGroup(U,s.length/3-U,0)}function gt(){let U=s.length/3,ct=0;St(P,ct),ct+=P.length;for(let Z=0,ot=D.length;Z<ot;Z++){let $=D[Z];St($,ct),ct+=$.length}n.addGroup(U,s.length/3-U,1)}function St(U,ct){let Z=U.length;for(;--Z>=0;){let ot=Z,$=Z-1;$<0&&($=U.length-1);for(let Et=0,_t=u+m*2;Et<_t;Et++){let A=H*Et,S=H*(Et+1),z=ct+ot+A,st=ct+$+A,j=ct+$+S,K=ct+ot+S;Ut(z,st,j,K)}}}function vt(U,ct,Z){c.push(U),c.push(ct),c.push(Z)}function Lt(U,ct,Z){bt(U),bt(ct),bt(Z);let ot=s.length/3,$=y.generateTopUV(n,s,ot-3,ot-2,ot-1);Nt($[0]),Nt($[1]),Nt($[2])}function Ut(U,ct,Z,ot){bt(U),bt(ct),bt(ot),bt(ct),bt(Z),bt(ot);let $=s.length/3,Et=y.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Nt(Et[0]),Nt(Et[1]),Nt(Et[3]),Nt(Et[1]),Nt(Et[2]),Nt(Et[3])}function bt(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function Nt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wc[s.type]().fromJSON(s)),new i(n,t.options)}},Fp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new rt(r,a),new rt(o,c),new rt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new rt(a,1-c),new rt(l,1-f),new rt(h,1-g),new rt(x,1-p)]:[new rt(o,1-c),new rt(u,1-f),new rt(d,1-g),new rt(m,1-p)]}};function Bp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ao=class extends zn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var oe=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L1,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_2,endingEnd:_2}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case x2:r=t,o=2*e-n;break;case y2:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case x2:a=t,c=2*n-e;break;case y2:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,y=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,_=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+y*a[l+w]+_*a[c+w]+M*a[f+w];return r}},Lc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},Ic=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Kr(e,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Kr(t.times,Array),values:Kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&zp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=eo;var Ri=class extends _n{};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=to;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends _n{};Dc.prototype.ValueTypeName="color";var Uc=class extends _n{};Uc.prototype.ValueTypeName="number";var Nc=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ze.slerpFlat(r,0,a,l-o,a,l,c);return r}},ir=class extends _n{InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=eo;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends _n{};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=to;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends _n{};Oc.prototype.ValueTypeName="vector";var Fc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},kp=new Fc,Bc=class{constructor(t){this.manager=t!==void 0?t:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ro=class extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Za=new Dt,g1=new R,_1=new R,Co=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;g1.setFromMatrixPosition(t.matrixWorld),e.position.copy(g1),_1.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_1),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var x1=new Dt,Bs=new R,$a=new R,zc=class extends Co{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),x1.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(x1)}},Po=class extends sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},kc=class extends Co{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jc="\\[\\]\\.:\\/",Hp=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",Vp="[^"+Jc.replace("\\.","")+"]",Gp=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Wp=/(WCOD+)?/.source.replace("WCOD",Vp),Xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Yp=new RegExp("^"+Gp+Wp+Xp+qp+"$"),Zp=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=Yp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=Hc;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $5=new Float32Array(1);var rr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var y1=new R,jr=new R,Je=class{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){y1.subVectors(t,this.start),jr.subVectors(this.end,this.start);let n=jr.dot(jr),r=jr.dot(y1)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Io=class extends vc{constructor(t=10,e=10,n=4473924,s=8947848){n=new Yt(n),s=new Yt(s);let r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,d=0,g=-o;h<=e;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);let x=h===r?n:s;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}let u=new ve;u.setAttribute("position",new ce(c,3)),u.setAttribute("color",new ce(l,3));let f=new vo({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);var X1={type:"change"},jc={type:"start"},q1={type:"end"},Fo=new ii,Y1=new Ge,Jp=Math.cos(70*Hn.DEG2RAD),Bo=class extends En{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",K),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",K),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(X1),n.update(),r=s.NONE},this.update=function(){let L=new R,tt=new Ze().setFromUnitVectors(t.up,new R(0,1,0)),ft=tt.clone().invert(),at=new R,Tt=new Ze,Wt=new R,Zt=2*Math.PI;return function(ht=null){let O=n.object.position;L.copy(O).sub(n.target),L.applyQuaternion(tt),o.setFromVector3(L),n.autoRotate&&r===s.NONE&&D(v(ht)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let lt=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(lt)&&isFinite(ut)&&(lt<-Math.PI?lt+=Zt:lt>Math.PI&&(lt-=Zt),ut<-Math.PI?ut+=Zt:ut>Math.PI&&(ut-=Zt),lt<=ut?o.theta=Math.max(lt,Math.min(ut,o.theta)):o.theta=o.theta>(lt+ut)/2?Math.max(lt,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*l),L.setFromSpherical(o),L.applyQuaternion(ft),O.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Pt=!1;if(n.zoomToCursor&&T){let At=null;if(n.object.isPerspectiveCamera){let Jt=L.length();At=q(Jt*l);let jt=Jt-At;n.object.position.addScaledVector(M,jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Jt=new R(w.x,w.y,0);Jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Pt=!0;let jt=new R(w.x,w.y,0);jt.unproject(n.object),n.object.position.sub(jt).add(Jt),n.object.updateMatrixWorld(),At=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;At!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(At).add(n.object.position):(Fo.origin.copy(n.object.position),Fo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Fo.direction))<Jp?t.lookAt(n.target):(Y1.setFromNormalAndCoplanarPoint(n.object.up,n.target),Fo.intersectPlane(Y1,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Pt=!0);return l=1,T=!1,Pt||at.distanceToSquared(n.object.position)>a||8*(1-Tt.dot(n.object.quaternion))>a||Wt.distanceToSquared(n.target)>0?(n.dispatchEvent(X1),at.copy(n.object.position),Tt.copy(n.object.quaternion),Wt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xt),n.domElement.removeEventListener("pointerdown",_t),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",S),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",K),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new rr,c=new rr,l=1,u=new R,f=new rt,h=new rt,d=new rt,g=new rt,x=new rt,m=new rt,p=new rt,y=new rt,_=new rt,M=new R,w=new rt,T=!1,E=[],I={};function v(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function b(L){let tt=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*tt)}function D(L){c.theta-=L}function N(L){c.phi-=L}let k=function(){let L=new R;return function(ft,at){L.setFromMatrixColumn(at,0),L.multiplyScalar(-ft),u.add(L)}}(),P=function(){let L=new R;return function(ft,at){n.screenSpacePanning===!0?L.setFromMatrixColumn(at,1):(L.setFromMatrixColumn(at,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ft),u.add(L)}}(),F=function(){let L=new R;return function(ft,at){let Tt=n.domElement;if(n.object.isPerspectiveCamera){let Wt=n.object.position;L.copy(Wt).sub(n.target);let Zt=L.length();Zt*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ft*Zt/Tt.clientHeight,n.object.matrix),P(2*at*Zt/Tt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ft*(n.object.right-n.object.left)/n.object.zoom/Tt.clientWidth,n.object.matrix),P(at*(n.object.top-n.object.bottom)/n.object.zoom/Tt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L,tt){if(!n.zoomToCursor)return;T=!0;let ft=n.domElement.getBoundingClientRect(),at=L-ft.left,Tt=tt-ft.top,Wt=ft.width,Zt=ft.height;w.x=at/Wt*2-1,w.y=-(Tt/Zt)*2+1,M.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function et(L){f.set(L.clientX,L.clientY)}function it(L){Y(L.clientX,L.clientX),p.set(L.clientX,L.clientY)}function mt(L){g.set(L.clientX,L.clientY)}function X(L){h.set(L.clientX,L.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);let tt=n.domElement;D(2*Math.PI*d.x/tt.clientHeight),N(2*Math.PI*d.y/tt.clientHeight),f.copy(h),n.update()}function nt(L){y.set(L.clientX,L.clientY),_.subVectors(y,p),_.y>0?H(b(_.y)):_.y<0&&J(b(_.y)),p.copy(y),n.update()}function gt(L){x.set(L.clientX,L.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(x),n.update()}function St(L){Y(L.clientX,L.clientY),L.deltaY<0?J(b(L.deltaY)):L.deltaY>0&&H(b(L.deltaY)),n.update()}function vt(L){let tt=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),tt=!0;break}tt&&(L.preventDefault(),n.update())}function Lt(L){if(E.length===1)f.set(L.pageX,L.pageY);else{let tt=Gt(L),ft=.5*(L.pageX+tt.x),at=.5*(L.pageY+tt.y);f.set(ft,at)}}function Ut(L){if(E.length===1)g.set(L.pageX,L.pageY);else{let tt=Gt(L),ft=.5*(L.pageX+tt.x),at=.5*(L.pageY+tt.y);g.set(ft,at)}}function bt(L){let tt=Gt(L),ft=L.pageX-tt.x,at=L.pageY-tt.y,Tt=Math.sqrt(ft*ft+at*at);p.set(0,Tt)}function Nt(L){n.enableZoom&&bt(L),n.enablePan&&Ut(L)}function U(L){n.enableZoom&&bt(L),n.enableRotate&&Lt(L)}function ct(L){if(E.length==1)h.set(L.pageX,L.pageY);else{let ft=Gt(L),at=.5*(L.pageX+ft.x),Tt=.5*(L.pageY+ft.y);h.set(at,Tt)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);let tt=n.domElement;D(2*Math.PI*d.x/tt.clientHeight),N(2*Math.PI*d.y/tt.clientHeight),f.copy(h)}function Z(L){if(E.length===1)x.set(L.pageX,L.pageY);else{let tt=Gt(L),ft=.5*(L.pageX+tt.x),at=.5*(L.pageY+tt.y);x.set(ft,at)}m.subVectors(x,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(x)}function ot(L){let tt=Gt(L),ft=L.pageX-tt.x,at=L.pageY-tt.y,Tt=Math.sqrt(ft*ft+at*at);y.set(0,Tt),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),H(_.y),p.copy(y);let Wt=(L.pageX+tt.x)*.5,Zt=(L.pageY+tt.y)*.5;Y(Wt,Zt)}function $(L){n.enableZoom&&ot(L),n.enablePan&&Z(L)}function Et(L){n.enableZoom&&ot(L),n.enableRotate&&ct(L)}function _t(L){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",S)),Ct(L),L.pointerType==="touch"?Mt(L):z(L))}function A(L){n.enabled!==!1&&(L.pointerType==="touch"?pt(L):st(L))}function S(L){Ft(L),E.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",S)),n.dispatchEvent(q1),r=s.NONE}function z(L){let tt;switch(L.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case Pi.DOLLY:if(n.enableZoom===!1)return;it(L),r=s.DOLLY;break;case Pi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;mt(L),r=s.PAN}else{if(n.enableRotate===!1)return;et(L),r=s.ROTATE}break;case Pi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;et(L),r=s.ROTATE}else{if(n.enablePan===!1)return;mt(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(jc)}function st(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(L);break;case s.DOLLY:if(n.enableZoom===!1)return;nt(L);break;case s.PAN:if(n.enablePan===!1)return;gt(L);break}}function j(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(jc),St(L),n.dispatchEvent(q1))}function K(L){n.enabled===!1||n.enablePan===!1||vt(L)}function Mt(L){switch(Q(L),E.length){case 1:switch(n.touches.ONE){case Li.ROTATE:if(n.enableRotate===!1)return;Lt(L),r=s.TOUCH_ROTATE;break;case Li.PAN:if(n.enablePan===!1)return;Ut(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Nt(L),r=s.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(jc)}function pt(L){switch(Q(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ct(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Z(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Et(L),n.update();break;default:r=s.NONE}}function xt(L){n.enabled!==!1&&L.preventDefault()}function Ct(L){E.push(L.pointerId)}function Ft(L){delete I[L.pointerId];for(let tt=0;tt<E.length;tt++)if(E[tt]==L.pointerId){E.splice(tt,1);return}}function Q(L){let tt=I[L.pointerId];tt===void 0&&(tt=new rt,I[L.pointerId]=tt),tt.set(L.pageX,L.pageY)}function Gt(L){let tt=L.pointerId===E[0]?E[1]:E[0];return I[tt]}n.domElement.addEventListener("contextmenu",xt),n.domElement.addEventListener("pointerdown",_t),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",j,{passive:!1}),this.update()}};var zo=class extends ls{constructor(t=null){super();let e=new $e;e.deleteAttribute("uv");let n=new oe({side:Re}),s=new oe,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new Po(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new te(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new te(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new te(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let u=new te(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new te(e,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let h=new te(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new te(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new te(e,ds(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new te(e,ds(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new te(e,ds(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new te(e,ds(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new te(e,ds(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new te(e,ds(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ds(i){let t=new os;return t.color.setScalar(i),t}function Qc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new ve,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Z1(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<a[u].length;++x)d.push(a[u][x][h]);let g=Z1(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Z1(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new t(r),o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;let c=new _e(a,e,n);return s!==void 0&&(c.gpuType=s),c}function or(i,t=Math.PI/3){let e=Math.cos(t),n=(1+1e-10)*100,s=[new R,new R,new R],r=new R,a=new R,o=new R,c=new R;function l(x){let m=~~(x.x*n),p=~~(x.y*n),y=~~(x.z*n);return`${m},${p},${y}`}let u=i.index?i.toNonIndexed():i,f=u.attributes.position,h={};for(let x=0,m=f.count/3;x<m;x++){let p=3*x,y=s[0].fromBufferAttribute(f,p+0),_=s[1].fromBufferAttribute(f,p+1),M=s[2].fromBufferAttribute(f,p+2);r.subVectors(M,_),a.subVectors(y,_);let w=new R().crossVectors(r,a).normalize();for(let T=0;T<3;T++){let E=s[T],I=l(E);I in h||(h[I]=[]),h[I].push(w)}}let d=new Float32Array(f.count*3),g=new _e(d,3,!1);for(let x=0,m=f.count/3;x<m;x++){let p=3*x,y=s[0].fromBufferAttribute(f,p+0),_=s[1].fromBufferAttribute(f,p+1),M=s[2].fromBufferAttribute(f,p+2);r.subVectors(M,_),a.subVectors(y,_),o.crossVectors(r,a).normalize();for(let w=0;w<3;w++){let T=s[w],E=l(T),I=h[E];c.set(0,0,0);for(let v=0,b=I.length;v<b;v++){let D=I[v];o.dot(D)>e&&c.add(D)}c.normalize(),g.setXYZ(p+w,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}var $1=Math.pow(2,-24),ko=Symbol("SKIP_GENERATION");function Kp(i){return i.index?i.index.count:i.attributes.position.count}function Tn(i){return Kp(i)/3}function jp(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function J1(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=jp(e,n);i.setIndex(new _e(s,1));for(let r=0;r<e;r++)s[r]=r}}function tl(i){let t=Tn(i),e=i.drawRange,n=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,n),a=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(a)}]}function el(i){if(!i.groups||!i.groups.length)return tl(i);let t=[],e=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(let o of i.groups){let c=o.start/3,l=(o.start+o.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,l))}let a=Array.from(e.values()).sort((o,c)=>o-c);for(let o=0;o<a.length-1;o++){let c=a[o],l=a[o+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function K1(i){if(i.groups.length===0)return!1;let t=Tn(i),e=el(i).sort((r,a)=>r.offset-a.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function Ho(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=t*6,y=(t+e)*6;p<y;p+=6){let _=i[p+0],M=i[p+1],w=_-M,T=_+M;w<r&&(r=w),T>c&&(c=T),_<f&&(f=_),_>g&&(g=_);let E=i[p+2],I=i[p+3],v=E-I,b=E+I;v<a&&(a=v),b>l&&(l=b),E<h&&(h=E),E>x&&(x=E);let D=i[p+4],N=i[p+5],k=D-N,P=D+N;k<o&&(o=k),P>u&&(u=P),D<d&&(d=D),D>m&&(m=D)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,s[0]=f,s[1]=h,s[2]=d,s[3]=g,s[4]=x,s[5]=m}function j1(i,t=null,e=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,a=Tn(i),o=s.normalized,c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);let l=s.array,u=s.offset||0,f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);let h=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let g=d*3,x=d*6,m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),o||(m=m*f+u,p=p*f+u,y=y*f+u);for(let _=0;_<3;_++){let M,w,T;o?(M=s[h[_]](m),w=s[h[_]](p),T=s[h[_]](y)):(M=l[m+_],w=l[p+_],T=l[y+_]);let E=M;w<E&&(E=w),T<E&&(E=T);let I=M;w>I&&(I=w),T>I&&(I=T);let v=(I-E)/2,b=_*2;c[x+b+0]=E+v,c[x+b+1]=v+(Math.abs(E)+v)*$1}}return c}function ne(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function nl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function il(i,t){t.set(i)}function sl(i,t,e){let n,s;for(let r=0;r<3;r++){let a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function ar(i,t,e){for(let n=0;n<3;n++){let s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function ps(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}var Vn=32,t5=(i,t)=>i.candidate-t.candidate,si=new Array(Vn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Vo=new Float32Array(6);function e4(i,t,e,n,s,r){let a=-1,o=0;if(r===0)a=nl(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===1)a=nl(i),a!==-1&&(o=e5(e,n,s,a));else if(r===2){let c=ps(i),l=1.25*s,u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){let d=t[h],m=(t[h+3]-d)/Vn;if(s<Vn/4){let p=[...si];p.length=s;let y=0;for(let M=u;M<f;M+=6,y++){let w=p[y];w.candidate=e[M+2*h],w.count=0;let{bounds:T,leftCacheBounds:E,rightCacheBounds:I}=w;for(let v=0;v<3;v++)I[v]=1/0,I[v+3]=-1/0,E[v]=1/0,E[v+3]=-1/0,T[v]=1/0,T[v+3]=-1/0;ar(M,e,T)}p.sort(t5);let _=s;for(let M=0;M<_;M++){let w=p[M];for(;M+1<_&&p[M+1].candidate===w.candidate;)p.splice(M+1,1),_--}for(let M=u;M<f;M+=6){let w=e[M+2*h];for(let T=0;T<_;T++){let E=p[T];w>=E.candidate?ar(M,e,E.rightCacheBounds):(ar(M,e,E.leftCacheBounds),E.count++)}}for(let M=0;M<_;M++){let w=p[M],T=w.count,E=s-w.count,I=w.leftCacheBounds,v=w.rightCacheBounds,b=0;T!==0&&(b=ps(I)/c);let D=0;E!==0&&(D=ps(v)/c);let N=1+1.25*(b*T+D*E);N<l&&(a=h,l=N,o=w.candidate)}}else{for(let _=0;_<Vn;_++){let M=si[_];M.count=0,M.candidate=d+m+_*m;let w=M.bounds;for(let T=0;T<3;T++)w[T]=1/0,w[T+3]=-1/0}for(let _=u;_<f;_+=6){let T=~~((e[_+2*h]-d)/m);T>=Vn&&(T=Vn-1);let E=si[T];E.count++,ar(_,e,E.bounds)}let p=si[Vn-1];il(p.bounds,p.rightCacheBounds);for(let _=Vn-2;_>=0;_--){let M=si[_],w=si[_+1];sl(M.bounds,w.rightCacheBounds,M.rightCacheBounds)}let y=0;for(let _=0;_<Vn-1;_++){let M=si[_],w=M.count,T=M.bounds,I=si[_+1].rightCacheBounds;w!==0&&(y===0?il(T,Vo):sl(T,Vo,Vo)),y+=w;let v=0,b=0;y!==0&&(v=ps(Vo)/c);let D=s-y;D!==0&&(b=ps(I)/c);let N=1+1.25*(v*y+b*D);N<l&&(a=h,l=N,o=M.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function e5(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}var ms=class{constructor(){this.boundingData=new Float32Array(6)}};function n4(i,t,e,n,s,r){let a=n,o=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let f=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=f}for(let u=0;u<6;u++){let f=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=f}a++,o--}else return a}}function i4(i,t,e,n,s,r){let a=n,o=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function de(i,t){return t[i+15]===65535}function xe(i,t){return t[i+6]}function Me(i,t){return t[i+14]}function Ce(i){return i+8}function Pe(i,t){return t[i+6]}function Go(i,t){return t[i+7]}var s4,cr,Wo,r4,n5=Math.pow(2,32);function Xo(i){return"count"in i?1:1+Xo(i.left)+Xo(i.right)}function o4(i,t,e){return s4=new Float32Array(e),cr=new Uint32Array(e),Wo=new Uint16Array(e),r4=new Uint8Array(e),rl(i,t)}function rl(i,t){let e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)s4[e+a]=r[a];if(s)if(t.buffer){let a=t.buffer;r4.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=32){let l=o/2;de(l,Wo)||(cr[o/4+6]+=e)}return i+a.byteLength}else{let a=t.offset,o=t.count;return cr[e+6]=a,Wo[n+14]=o,Wo[n+15]=65535,i+32}else{let a=t.left,o=t.right,c=t.splitAxis,l;if(l=rl(i+32,a),l/4>n5)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return cr[e+6]=l/4,l=rl(l,o),cr[e+7]=c,l}}function i5(i,t){let e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function s5(i,t,e,n,s){let{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,d=h.index?h.index.array:null,g=u?i4:n4,x=Tn(h),m=new Float32Array(6),p=!1,y=new ms;return Ho(t,e,n,y.boundingData,m),M(y,e,n,m),y;function _(w){l&&l(w/x)}function M(w,T,E,I=null,v=0){if(!p&&v>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),E<=o||v>=r)return _(T+E),w.offset=T,w.count=E,w;let b=e4(w.boundingData,I,t,T,E,c);if(b.axis===-1)return _(T+E),w.offset=T,w.count=E,w;let D=g(f,d,t,T,E,b);if(D===T||D===T+E)_(T+E),w.offset=T,w.count=E;else{w.splitAxis=b.axis;let N=new ms,k=T,P=D-T;w.left=N,Ho(t,k,P,N.boundingData,m),M(N,k,P,m,v+1);let F=new ms,H=D,J=E-P;w.right=F,Ho(t,H,J,F.boundingData,m),M(F,H,J,m,v+1)}return w}}function a4(i,t){let e=i.geometry;t.indirect&&(i._indirectBuffer=i5(e,t.useSharedArrayBuffer),K1(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||J1(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=j1(e),r=t.indirect?tl(e):el(e);i._roots=r.map(a=>{let o=s5(i,s,a.offset,a.count,t),c=Xo(o),l=new n(32*c);return o4(0,o,l),l})}var Ke=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){let c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){let o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}};Ke.prototype.setFromBox=function(){let i=new R;return function(e,n){let s=n.min,r=n.max,a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);let f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();var U6=function(){let i=new Ke;return function(e,n){let s=e.points,r=e.satAxes,a=e.satBounds,o=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let f=a[u],h=r[u];if(i.setFromPoints(h,o),f.isSeparated(i))return!1}for(let u=0;u<3;u++){let f=l[u],h=c[u];if(i.setFromPoints(h,s),f.isSeparated(i))return!1}}}();var r5=function(){let i=new R,t=new R,e=new R;return function(s,r,a){let o=s.start,c=i,l=r.start,u=t;e.subVectors(o,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);let f=e.dot(u),h=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-h*h,p,y;m!==0?p=(f*h-g*d)/m:p=0,y=(f+p*h)/d,a.x=p,a.y=y}}(),ur=function(){let i=new rt,t=new R,e=new R;return function(s,r,a,o){r5(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;let h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){a.copy(h),o.copy(f);return}else{a.copy(u),o.copy(d);return}}}}(),c4=function(){let i=new R,t=new R,e=new Ge,n=new Je;return function(r,a){let{radius:o,center:c}=r,{a:l,b:u,c:f}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;let x=a.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=o){let p=x.projectPoint(c,t);if(a.containsPoint(p))return!0}return!1}}();var o5=1e-15;function ol(i){return Math.abs(i)<o5}var Ie=class extends nn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new Ke),this.points=[this.a,this.b,this.c],this.sphere=new ni,this.plane=new Ge,this.needsUpdate=!0}intersectsSphere(t){return c4(t,this)}update(){let t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);let l=r[1],u=a[1];l.subVectors(t,e),u.setFromPoints(l,s);let f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);let d=r[3],g=a[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}};Ie.prototype.closestPointToSegment=function(){let i=new R,t=new R,e=new Je;return function(s,r=null,a=null){let{start:o,end:c}=s,l=this.points,u,f=1/0;for(let h=0;h<3;h++){let d=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[d]),ur(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(f)}}();Ie.prototype.intersectsTriangle=function(){let i=new Ie,t=new Array(3),e=new Array(3),n=new Ke,s=new Ke,r=new R,a=new R,o=new R,c=new R,l=new R,u=new Je,f=new Je,h=new Je,d=new R;function g(x,m,p){let y=x.points,_=0,M=-1;for(let w=0;w<3;w++){let{start:T,end:E}=u;T.copy(y[w]),E.copy(y[(w+1)%3]),u.delta(a);let I=ol(m.distanceToPoint(T));if(ol(m.normal.dot(a))&&I){p.copy(u),_=2;break}let v=m.intersectLine(u,d);if(!v&&I&&d.copy(T),(v||I)&&!ol(d.distanceTo(E))){if(_<=1)(_===1?p.start:p.end).copy(d),I&&(M=_);else if(_>=2){(M===1?p.start:p.end).copy(d),_=2;break}if(_++,_===2&&M===-1)break}}return _}return function(m,p=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);let _=this.plane,M=m.plane;if(Math.abs(_.normal.dot(M.normal))>1-1e-10){let w=this.satBounds,T=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let v=0;v<4;v++){let b=w[v],D=T[v];if(n.setFromPoints(D,e),b.isSeparated(n))return!1}let E=m.satBounds,I=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let v=0;v<4;v++){let b=E[v],D=I[v];if(n.setFromPoints(D,t),b.isSeparated(n))return!1}for(let v=0;v<4;v++){let b=T[v];for(let D=0;D<4;D++){let N=I[D];if(r.crossVectors(b,N),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let w=g(this,M,f);if(w===1&&m.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(w!==2)return!1;let T=g(m,_,h);if(T===1&&this.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(o),h.delta(c),o.dot(c)<0){let k=h.start;h.start=h.end,h.end=k}let E=f.start.dot(o),I=f.end.dot(o),v=h.start.dot(o),b=h.end.dot(o),D=I<v,N=E<b;return E!==b&&v!==I&&D===N?!1:(p&&(l.subVectors(f.start,h.start),l.dot(o)>0?p.start.copy(f.start):p.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(o)<0?p.end.copy(f.end):p.end.copy(h.end)),!0)}}}();Ie.prototype.distanceToPoint=function(){let i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ie.prototype.distanceToTriangle=function(){let i=new R,t=new R,e=["a","b","c"],n=new Je,s=new Je;return function(a,o=null,c=null){let l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h,d=e[f],g=a[d];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<u&&(u=h,o&&o.copy(i),c&&c.copy(g));let x=this[d];a.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<u&&(u=h,o&&o.copy(x),c&&c.copy(i))}for(let f=0;f<3;f++){let h=e[f],d=e[(f+1)%3];n.set(this[h],this[d]);for(let g=0;g<3;g++){let x=e[g],m=e[(g+1)%3];s.set(a[x],a[m]),ur(n,s,i,t);let p=i.distanceToSquared(t);p<u&&(u=p,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();var me=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new Dt,this.invMatrix=new Dt,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new Ke),this.alignedSatBounds=new Array(3).fill().map(()=>new Ke),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};me.prototype.update=function(){return function(){let t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){let h=1*l|2*u|4*f,d=s[h];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){let u=a[l],f=r[l],h=1<<l,d=s[h];u.subVectors(o,d),f.setFromPoints(u,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();me.prototype.intersectsBox=function(){let i=new Ke;return function(e){this.needsUpdate&&this.update();let n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let l=a[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();me.prototype.intersectsTriangle=function(){let i=new Ie,t=new Array(3),e=new Ke,n=new Ke,s=new R;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);let o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){let d=o[h],g=c[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let l=a.satBounds,u=a.satAxes,f=this.points;for(let h=0;h<3;h++){let d=l[h],g=u[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){let d=c[h];for(let g=0;g<4;g++){let x=u[g];if(s.crossVectors(d,x),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();me.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();me.prototype.distanceToPoint=function(){let i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();me.prototype.distanceToBox=function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new Je),e=new Array(12).fill().map(()=>new Je),n=new R,s=new R;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;let u=o*o,f=a.min,h=a.max,d=this.points,g=1/0;for(let m=0;m<8;m++){let p=d[m];s.copy(p).clamp(f,h);let y=p.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(s),y<u))return Math.sqrt(y)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){let _=(m+1)%3,M=(m+2)%3,w=p<<_|y<<M,T=1<<m|p<<_|y<<M,E=d[w],I=d[T];t[x].set(E,I);let b=i[m],D=i[_],N=i[M],k=e[x],P=k.start,F=k.end;P[b]=f[b],P[D]=p?f[D]:h[D],P[N]=y?f[N]:h[D],F[b]=h[b],F[D]=p?f[D]:h[D],F[N]=y?f[N]:h[D],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?h.x:f.x,s.y=p?h.y:f.y,s.z=y?h.z:f.z,this.closestPointToPoint(s,n);let _=s.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){let p=t[m];for(let y=0;y<12;y++){let _=e[y];ur(p,_,n,s);let M=n.distanceToSquared(s);if(M<g&&(g=M,c&&c.copy(n),l&&l.copy(s),M<u))return Math.sqrt(M)}}return Math.sqrt(g)}}();var ri=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var al=class extends ri{constructor(){super(()=>new Ie)}},qe=new al;var cl=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},$t=new cl;var oi,_s,gs=[],Yo=new ri(()=>new ee);function l4(i,t,e,n,s,r){oi=Yo.getPrimitive(),_s=Yo.getPrimitive(),gs.push(oi,_s),$t.setBuffer(i._roots[t]);let a=ll(0,i.geometry,e,n,s,r);$t.clearBuffer(),Yo.releasePrimitive(oi),Yo.releasePrimitive(_s),gs.pop(),gs.pop();let o=gs.length;return o>0&&(_s=gs[o-1],oi=gs[o-2]),a}function ll(i,t,e,n,s=null,r=0,a=0){let{float32Array:o,uint16Array:c,uint32Array:l}=$t,u=i*2;if(de(u,c)){let h=xe(i,l),d=Me(u,c);return ne(i,o,oi),n(h,d,!1,a,r+i,oi)}else{let b=function(N){let{uint16Array:k,uint32Array:P}=$t,F=N*2;for(;!de(F,k);)N=Ce(N),F=N*2;return xe(N,P)},D=function(N){let{uint16Array:k,uint32Array:P}=$t,F=N*2;for(;!de(F,k);)N=Pe(N,P),F=N*2;return xe(N,P)+Me(F,k)},h=Ce(i),d=Pe(i,l),g=h,x=d,m,p,y,_;if(s&&(y=oi,_=_s,ne(g,o,y),ne(x,o,_),m=s(y),p=s(_),p<m)){g=d,x=h;let N=m;m=p,p=N,y=_}y||(y=oi,ne(g,o,y));let M=de(g*2,c),w=e(y,M,m,a+1,r+g),T;if(w===2){let N=b(g),P=D(g)-N;T=n(N,P,!0,a+1,r+g,y)}else T=w&&ll(g,t,e,n,s,r,a+1);if(T)return!0;_=_s,ne(x,o,_);let E=de(x*2,c),I=e(_,E,p,a+1,r+x),v;if(I===2){let N=b(x),P=D(x)-N;v=n(N,P,!0,a+1,r+x,_)}else v=I&&ll(x,t,e,n,s,r,a+1);return!!v}}var hr=new R,hl=new R;function u4(i,t,e={},n=0,s=1/0){let r=n*n,a=s*s,o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(hr.copy(t).clamp(u.min,u.max),hr.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<o&&h<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,hr);let h=t.distanceToSquared(hr);return h<o&&(hl.copy(hr),o=h,c=f),h<r}}),o===1/0)return null;let l=Math.sqrt(o);return e.point?e.point.copy(hl):e.point=hl.clone(),e.distance=l,e.faceIndex=c,e}var xs=new R,ys=new R,vs=new R,Zo=new rt,$o=new rt,Jo=new rt,h4=new R,f4=new R,d4=new R,Ko=new R;function c5(i,t,e,n,s,r){let a;return r===Re?a=i.intersectTriangle(n,e,t,!0,s):a=i.intersectTriangle(t,e,n,r!==We,s),a===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function l5(i,t,e,n,s,r,a,o,c){xs.fromBufferAttribute(t,r),ys.fromBufferAttribute(t,a),vs.fromBufferAttribute(t,o);let l=c5(i,xs,ys,vs,Ko,c);if(l){n&&(Zo.fromBufferAttribute(n,r),$o.fromBufferAttribute(n,a),Jo.fromBufferAttribute(n,o),l.uv=nn.getInterpolation(Ko,xs,ys,vs,Zo,$o,Jo,new rt)),s&&(Zo.fromBufferAttribute(s,r),$o.fromBufferAttribute(s,a),Jo.fromBufferAttribute(s,o),l.uv1=nn.getInterpolation(Ko,xs,ys,vs,Zo,$o,Jo,new rt)),e&&(h4.fromBufferAttribute(e,r),f4.fromBufferAttribute(e,a),d4.fromBufferAttribute(e,o),l.normal=nn.getInterpolation(Ko,xs,ys,vs,h4,f4,d4,new R),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:r,b:a,c:o,normal:new R,materialIndex:0};nn.getNormal(xs,ys,vs,u.normal),l.face=u,l.faceIndex=r}return l}function Ms(i,t,e,n,s){let r=n*3,a=r+0,o=r+1,c=r+2,l=i.index;i.index&&(a=l.getX(a),o=l.getX(o),c=l.getX(c));let{position:u,normal:f,uv:h,uv1:d}=i.attributes,g=l5(e,u,f,h,d,a,o,c,t);return g?(g.faceIndex=n,s&&s.push(g),g):null}function se(i,t,e,n){let s=i.a,r=i.b,a=i.c,o=t,c=t+1,l=t+2;e&&(o=e.getX(o),c=e.getX(c),l=e.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function p4(i,t,e,n,s,r){let{geometry:a,_indirectBuffer:o}=i;for(let c=n,l=n+s;c<l;c++)Ms(a,t,e,c,r)}function m4(i,t,e,n,s){let{geometry:r,_indirectBuffer:a}=i,o=1/0,c=null;for(let l=n,u=n+s;l<u;l++){let f;f=Ms(r,t,e,l),f&&f.distance<o&&(c=f,o=f.distance)}return c}function g4(i,t,e,n,s,r,a){let{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,se(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function _4(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,a,o,c,l=0,u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,g=!1){let x=h*2;if(o[x+15]===65535){let p=a[h+6],y=o[x+14],_=1/0,M=1/0,w=1/0,T=-1/0,E=-1/0,I=-1/0;for(let v=3*p,b=3*(p+y);v<b;v++){let D=n[v],N=s.getX(D),k=s.getY(D),P=s.getZ(D);N<_&&(_=N),N>T&&(T=N),k<M&&(M=k),k>E&&(E=k),P<w&&(w=P),P>I&&(I=P)}return c[h+0]!==_||c[h+1]!==M||c[h+2]!==w||c[h+3]!==T||c[h+4]!==E||c[h+5]!==I?(c[h+0]=_,c[h+1]=M,c[h+2]=w,c[h+3]=T,c[h+4]=E,c[h+5]=I,!0):!1}else{let p=h+8,y=a[h+6],_=p+d,M=y+d,w=g,T=!1,E=!1;t?w||(T=t.has(_),E=t.has(M),w=!T&&!E):(T=!0,E=!0);let I=w||T,v=w||E,b=!1;I&&(b=f(p,d,w));let D=!1;v&&(D=f(y,d,w));let N=b||D;if(N)for(let k=0;k<3;k++){let P=p+k,F=y+k,H=c[P],J=c[P+3],Y=c[F],q=c[F+3];c[h+k]=H<Y?H:Y,c[h+k+3]=J>q?J:q}return N}}}var x4=new ee;function ln(i,t,e,n){return ne(i,t,x4),e.intersectBox(x4,n)}function y4(i,t,e,n,s,r){let{geometry:a,_indirectBuffer:o}=i;for(let c=n,l=n+s;c<l;c++){let u=o?o[c]:c;Ms(a,t,e,u,r)}}function v4(i,t,e,n,s){let{geometry:r,_indirectBuffer:a}=i,o=1/0,c=null;for(let l=n,u=n+s;l<u;l++){let f;f=Ms(r,t,e,a?a[l]:l),f&&f.distance<o&&(c=f,o=f.distance)}return c}function M4(i,t,e,n,s,r,a){let{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),se(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}var b4=new R;function S4(i,t,e,n,s){$t.setBuffer(i._roots[t]),fl(0,i,e,n,s),$t.clearBuffer()}function fl(i,t,e,n,s){let{float32Array:r,uint16Array:a,uint32Array:o}=$t,c=i*2;if(de(c,a)){let u=xe(i,o),f=Me(c,a);p4(t,e,n,u,f,s)}else{let u=Ce(i);ln(u,r,n,b4)&&fl(u,t,e,n,s);let f=Pe(i,o);ln(f,r,n,b4)&&fl(f,t,e,n,s)}}var E4=new R,u5=["x","y","z"];function T4(i,t,e,n){$t.setBuffer(i._roots[t]);let s=dl(0,i,e,n);return $t.clearBuffer(),s}function dl(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:a}=$t,o=i*2;if(de(o,r)){let l=xe(i,a),u=Me(o,r);return m4(t,e,n,l,u)}else{let l=Go(i,a),u=u5[l],h=n.direction[u]>=0,d,g;h?(d=Ce(i),g=Pe(i,a)):(d=Pe(i,a),g=Ce(i));let m=ln(d,s,n,E4)?dl(d,t,e,n):null;if(m){let _=m.point[u];if(h?_<=s[g+l]:_>=s[g+l+3])return m}let y=ln(g,s,n,E4)?dl(g,t,e,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var jo=new ee,bs=new Ie,Ss=new Ie,fr=new Dt,w4=new me,Qo=new me;function A4(i,t,e,n){$t.setBuffer(i._roots[t]);let s=pl(0,i,e,n);return $t.clearBuffer(),s}function pl(i,t,e,n,s=null){let{float32Array:r,uint16Array:a,uint32Array:o}=$t,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),w4.set(e.boundingBox.min,e.boundingBox.max,n),s=w4),de(c,a)){let u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,x=xe(i,o),m=Me(c,a);if(fr.copy(n).invert(),e.boundsTree)return ne(i,r,Qo),Qo.matrix.copy(fr),Qo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Qo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=x*3,M=(m+x)*3;_<M;_+=3)if(se(Ss,_,f,h),Ss.needsUpdate=!0,y.intersectsTriangle(Ss))return!0;return!1}});for(let p=x*3,y=(m+x)*3;p<y;p+=3){se(bs,p,f,h),bs.a.applyMatrix4(fr),bs.b.applyMatrix4(fr),bs.c.applyMatrix4(fr),bs.needsUpdate=!0;for(let _=0,M=d.count;_<M;_+=3)if(se(Ss,_,d,g),Ss.needsUpdate=!0,bs.intersectsTriangle(Ss))return!0}}else{let u=i+8,f=o[i+6];return ne(u,r,jo),!!(s.intersectsBox(jo)&&pl(u,t,e,n,s)||(ne(f,r,jo),s.intersectsBox(jo)&&pl(f,t,e,n,s)))}}var ta=new Dt,ml=new me,dr=new me,h5=new R,f5=new R,d5=new R,p5=new R;function R4(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),ml.set(t.boundingBox.min,t.boundingBox.max,e),ml.needsUpdate=!0;let o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=qe.getPrimitive(),d=qe.getPrimitive(),g=h5,x=f5,m=null,p=null;s&&(m=d5,p=p5);let y=1/0,_=null,M=null;return ta.copy(e).invert(),dr.matrix.copy(ta),i.shapecast({boundsTraverseOrder:w=>ml.distanceToBox(w),intersectsBounds:(w,T,E)=>E<y&&E<a?(T&&(dr.min.copy(w.min),dr.max.copy(w.max),dr.needsUpdate=!0),!0):!1,intersectsRange:(w,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:I=>dr.distanceToBox(I),intersectsBounds:(I,v,b)=>b<y&&b<a,intersectsRange:(I,v)=>{for(let b=I,D=I+v;b<D;b++){se(d,3*b,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let N=w,k=w+T;N<k;N++){se(h,3*N,l,c),h.needsUpdate=!0;let P=h.distanceToTriangle(d,g,m);if(P<y&&(x.copy(g),p&&p.copy(m),y=P,_=N,M=b),P<r)return!0}}}});{let E=Tn(t);for(let I=0,v=E;I<v;I++){se(d,3*I,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let b=w,D=w+T;b<D;b++){se(h,3*b,l,c),h.needsUpdate=!0;let N=h.distanceToTriangle(d,g,m);if(N<y&&(x.copy(g),p&&p.copy(m),y=N,_=b,M=I),N<r)return!0}}}}}),qe.releasePrimitive(h),qe.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(ta),x.applyMatrix4(ta),s.distance=x.sub(s.point).length(),s.faceIndex=M),n)}function C4(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,a,o,c,l=0,u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,g=!1){let x=h*2;if(o[x+15]===65535){let p=a[h+6],y=o[x+14],_=1/0,M=1/0,w=1/0,T=-1/0,E=-1/0,I=-1/0;for(let v=p,b=p+y;v<b;v++){let D=3*i.resolveTriangleIndex(v);for(let N=0;N<3;N++){let k=D+N;k=n?n[k]:k;let P=s.getX(k),F=s.getY(k),H=s.getZ(k);P<_&&(_=P),P>T&&(T=P),F<M&&(M=F),F>E&&(E=F),H<w&&(w=H),H>I&&(I=H)}}return c[h+0]!==_||c[h+1]!==M||c[h+2]!==w||c[h+3]!==T||c[h+4]!==E||c[h+5]!==I?(c[h+0]=_,c[h+1]=M,c[h+2]=w,c[h+3]=T,c[h+4]=E,c[h+5]=I,!0):!1}else{let p=h+8,y=a[h+6],_=p+d,M=y+d,w=g,T=!1,E=!1;t?w||(T=t.has(_),E=t.has(M),w=!T&&!E):(T=!0,E=!0);let I=w||T,v=w||E,b=!1;I&&(b=f(p,d,w));let D=!1;v&&(D=f(y,d,w));let N=b||D;if(N)for(let k=0;k<3;k++){let P=p+k,F=y+k,H=c[P],J=c[P+3],Y=c[F],q=c[F+3];c[h+k]=H<Y?H:Y,c[h+k+3]=J>q?J:q}return N}}}var P4=new R;function L4(i,t,e,n,s){$t.setBuffer(i._roots[t]),gl(0,i,e,n,s),$t.clearBuffer()}function gl(i,t,e,n,s){let{float32Array:r,uint16Array:a,uint32Array:o}=$t,c=i*2;if(de(c,a)){let u=xe(i,o),f=Me(c,a);y4(t,e,n,u,f,s)}else{let u=Ce(i);ln(u,r,n,P4)&&gl(u,t,e,n,s);let f=Pe(i,o);ln(f,r,n,P4)&&gl(f,t,e,n,s)}}var I4=new R,m5=["x","y","z"];function D4(i,t,e,n){$t.setBuffer(i._roots[t]);let s=_l(0,i,e,n);return $t.clearBuffer(),s}function _l(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:a}=$t,o=i*2;if(de(o,r)){let l=xe(i,a),u=Me(o,r);return v4(t,e,n,l,u)}else{let l=Go(i,a),u=m5[l],h=n.direction[u]>=0,d,g;h?(d=Ce(i),g=Pe(i,a)):(d=Pe(i,a),g=Ce(i));let m=ln(d,s,n,I4)?_l(d,t,e,n):null;if(m){let _=m.point[u];if(h?_<=s[g+l]:_>=s[g+l+3])return m}let y=ln(g,s,n,I4)?_l(g,t,e,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var ea=new ee,Es=new Ie,Ts=new Ie,pr=new Dt,U4=new me,na=new me;function N4(i,t,e,n){$t.setBuffer(i._roots[t]);let s=xl(0,i,e,n);return $t.clearBuffer(),s}function xl(i,t,e,n,s=null){let{float32Array:r,uint16Array:a,uint32Array:o}=$t,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),U4.set(e.boundingBox.min,e.boundingBox.max,n),s=U4),de(c,a)){let u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,x=xe(i,o),m=Me(c,a);if(pr.copy(n).invert(),e.boundsTree)return ne(i,r,na),na.matrix.copy(pr),na.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>na.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=x,M=m+x;_<M;_++)if(se(Ts,3*t.resolveTriangleIndex(_),f,h),Ts.needsUpdate=!0,y.intersectsTriangle(Ts))return!0;return!1}});for(let p=x,y=m+x;p<y;p++){let _=t.resolveTriangleIndex(p);se(Es,3*_,f,h),Es.a.applyMatrix4(pr),Es.b.applyMatrix4(pr),Es.c.applyMatrix4(pr),Es.needsUpdate=!0;for(let M=0,w=d.count;M<w;M+=3)if(se(Ts,M,d,g),Ts.needsUpdate=!0,Es.intersectsTriangle(Ts))return!0}}else{let u=i+8,f=o[i+6];return ne(u,r,ea),!!(s.intersectsBox(ea)&&xl(u,t,e,n,s)||(ne(f,r,ea),s.intersectsBox(ea)&&xl(f,t,e,n,s)))}}var ia=new Dt,yl=new me,mr=new me,g5=new R,_5=new R,x5=new R,y5=new R;function O4(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),yl.set(t.boundingBox.min,t.boundingBox.max,e),yl.needsUpdate=!0;let o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=qe.getPrimitive(),d=qe.getPrimitive(),g=g5,x=_5,m=null,p=null;s&&(m=x5,p=y5);let y=1/0,_=null,M=null;return ia.copy(e).invert(),mr.matrix.copy(ia),i.shapecast({boundsTraverseOrder:w=>yl.distanceToBox(w),intersectsBounds:(w,T,E)=>E<y&&E<a?(T&&(mr.min.copy(w.min),mr.max.copy(w.max),mr.needsUpdate=!0),!0):!1,intersectsRange:(w,T)=>{if(t.boundsTree){let E=t.boundsTree;return E.shapecast({boundsTraverseOrder:I=>mr.distanceToBox(I),intersectsBounds:(I,v,b)=>b<y&&b<a,intersectsRange:(I,v)=>{for(let b=I,D=I+v;b<D;b++){let N=E.resolveTriangleIndex(b);se(d,3*N,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let k=w,P=w+T;k<P;k++){let F=i.resolveTriangleIndex(k);se(h,3*F,l,c),h.needsUpdate=!0;let H=h.distanceToTriangle(d,g,m);if(H<y&&(x.copy(g),p&&p.copy(m),y=H,_=k,M=b),H<r)return!0}}}})}else{let E=Tn(t);for(let I=0,v=E;I<v;I++){se(d,3*I,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let b=w,D=w+T;b<D;b++){let N=i.resolveTriangleIndex(b);se(h,3*N,l,c),h.needsUpdate=!0;let k=h.distanceToTriangle(d,g,m);if(k<y&&(x.copy(g),p&&p.copy(m),y=k,_=b,M=I),k<r)return!0}}}}}),qe.releasePrimitive(h),qe.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(ia),x.applyMatrix4(ia),s.distance=x.sub(s.point).length(),s.faceIndex=M),n)}function F4(){return typeof SharedArrayBuffer<"u"}var gr=new $t.constructor,sa=new $t.constructor,ai=new ri(()=>new ee),ws=new ee,As=new ee,vl=new ee,Ml=new ee,bl=!1;function B4(i,t,e,n){if(bl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");bl=!0;let s=i._roots,r=t._roots,a,o=0,c=0,l=new Dt().copy(e).invert();for(let u=0,f=s.length;u<f;u++){gr.setBuffer(s[u]),c=0;let h=ai.getPrimitive();ne(0,gr.float32Array,h),h.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(sa.setBuffer(r[u]),a=xn(0,0,e,l,n,o,c,0,0,h),sa.clearBuffer(),c+=r[d].length,!a);d++);if(ai.releasePrimitive(h),gr.clearBuffer(),o+=s[u].length,a)break}return bl=!1,a}function xn(i,t,e,n,s,r=0,a=0,o=0,c=0,l=null,u=!1){let f,h;u?(f=sa,h=gr):(f=gr,h=sa);let d=f.float32Array,g=f.uint32Array,x=f.uint16Array,m=h.float32Array,p=h.uint32Array,y=h.uint16Array,_=i*2,M=t*2,w=de(_,x),T=de(M,y),E=!1;if(T&&w)u?E=s(xe(t,p),Me(t*2,y),xe(i,g),Me(i*2,x),c,a+t,o,r+i):E=s(xe(i,g),Me(i*2,x),xe(t,p),Me(t*2,y),o,r+i,c,a+t);else if(T){let I=ai.getPrimitive();ne(t,m,I),I.applyMatrix4(e);let v=Ce(i),b=Pe(i,g);ne(v,d,ws),ne(b,d,As);let D=I.intersectsBox(ws),N=I.intersectsBox(As);E=D&&xn(t,v,n,e,s,a,r,c,o+1,I,!u)||N&&xn(t,b,n,e,s,a,r,c,o+1,I,!u),ai.releasePrimitive(I)}else{let I=Ce(t),v=Pe(t,p);ne(I,m,vl),ne(v,m,Ml);let b=l.intersectsBox(vl),D=l.intersectsBox(Ml);if(b&&D)E=xn(i,I,e,n,s,r,a,o,c+1,l,u)||xn(i,v,e,n,s,r,a,o,c+1,l,u);else if(b)if(w)E=xn(i,I,e,n,s,r,a,o,c+1,l,u);else{let N=ai.getPrimitive();N.copy(vl).applyMatrix4(e);let k=Ce(i),P=Pe(i,g);ne(k,d,ws),ne(P,d,As);let F=N.intersectsBox(ws),H=N.intersectsBox(As);E=F&&xn(I,k,n,e,s,a,r,c,o+1,N,!u)||H&&xn(I,P,n,e,s,a,r,c,o+1,N,!u),ai.releasePrimitive(N)}else if(D)if(w)E=xn(i,v,e,n,s,r,a,o,c+1,l,u);else{let N=ai.getPrimitive();N.copy(Ml).applyMatrix4(e);let k=Ce(i),P=Pe(i,g);ne(k,d,ws),ne(P,d,As);let F=N.intersectsBox(ws),H=N.intersectsBox(As);E=F&&xn(v,k,n,e,s,a,r,c,o+1,N,!u)||H&&xn(v,P,n,e,s,a,r,c,o+1,N,!u),ai.releasePrimitive(N)}}return E}var ra=new me,z4=new ee,v5={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0},ci=class i{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex(),o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a.array.slice(),indirectBuffer:r?r.slice():null}:o={roots:s,index:a.array,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:a}=t,o=new i(e,{...n,[ko]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){let c=e.getIndex();if(c===null){let l=new _e(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...v5,[ko]:!1},e),e.useSharedArrayBuffer&&!F4())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[ko]||(a4(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ee)));let{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?s=>n[s]:s=>s}refit(t=null){return(this.indirect?C4:_4)(this,t)}traverse(t,e=0){let n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){let l=o*2,u=r[l+15]===65535;if(u){let f=s[o+6],h=r[l+14];t(c,u,new Float32Array(n,o*4,6),f,h)}else{let f=o+32/4,h=s[o+6],d=s[o+7];t(c,u,new Float32Array(n,o*4,6),d)||(a(f,c+1),a(h,c+1))}}}raycast(t,e=mn){let n=this._roots,s=this.geometry,r=[],a=e.isMaterial,o=Array.isArray(e),c=s.groups,l=a?e.side:e,u=this.indirect?L4:S4;for(let f=0,h=n.length;f<h;f++){let d=o?e[c[f].materialIndex].side:l,g=r.length;if(u(this,f,d,t,r),o){let x=c[f].materialIndex;for(let m=g,p=r.length;m<p;m++)r[m].face.materialIndex=x}}return r}raycastFirst(t,e=mn){let n=this._roots,s=this.geometry,r=e.isMaterial,a=Array.isArray(e),o=null,c=s.groups,l=r?e.side:e,u=this.indirect?D4:T4;for(let f=0,h=n.length;f<h;f++){let d=a?e[c[f].materialIndex].side:l,g=u(this,f,d,t);g!=null&&(o==null||g.distance<o.distance)&&(o=g,a&&(g.face.materialIndex=c[f].materialIndex))}return o}intersectsGeometry(t,e){let n=!1,s=this._roots,r=this.indirect?N4:A4;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){let e=qe.getPrimitive(),n=this.indirect?M4:g4,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){let f=a;a=(h,d,g,x,m)=>f(h,d,g,x,m)?!0:n(h,d,this,o,g,x,e)}else a||(o?a=(f,h,d,g)=>n(f,h,this,o,d,g,e):a=(f,h,d)=>d);let c=!1,l=0,u=this._roots;for(let f=0,h=u.length;f<h;f++){let d=u[f];if(c=l4(this,f,r,a,s,l),c)break;l+=d.byteLength}return qe.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n,a=qe.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let x=this.resolveTriangleIndex(g);se(a,x*3,o,c)}:g=>{se(a,g*3,o,c)},u=qe.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{let x=t.resolveTriangleIndex(g);se(u,x*3,f,h)}:g=>{se(u,g*3,f,h)};if(r){let g=(x,m,p,y,_,M,w,T)=>{for(let E=p,I=p+y;E<I;E++){d(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let v=x,b=x+m;v<b;v++)if(l(v),a.needsUpdate=!0,r(a,u,v,E,_,M,w,T))return!0}return!1};if(s){let x=s;s=function(m,p,y,_,M,w,T,E){return x(m,p,y,_,M,w,T,E)?!0:g(m,p,y,_,M,w,T,E)}}else s=g}return B4(this,t,e,s)}intersectsBox(t,e){return ra.set(t.min,t.max,e),ra.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ra.intersectsBox(n),intersectsTriangle:n=>ra.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?O4:R4)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return u4(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ne(0,new Float32Array(n),z4),t.union(z4)}),t}};var k4=`

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
`;var H4=`

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
`;var Qm=`
	${k4}
	${H4}
`;var Sl={pivots:{P1a:[44.75,43.2],P1b:[44.75,55.65],Ca:[46.4,46.25],Cb:[46.4,52.6],J1a:[48.65,38.8],J1b:[48.65,60.05],P2a:[46.5,45.1],P2b:[46.5,53.7],J2a:[49.6,41.2],J2b:[49.6,57.65],Sa:[44.4,46.4],Sb:[44.4,52.4]},groups:{gehaeuse:{v:[45.278,22.66,55.236,45.387,22.76,55.213,45.43,22.66,55.654,45.53,22.76,55.654,45.387,22.76,56.095,45.012,22.76,54.941,44.893,22.66,55.014,44.548,22.76,54.941,44.455,22.66,55.091,44.173,22.76,55.213,44.169,22.66,55.432,44.03,22.76,55.654,44.169,22.66,55.876,44.173,22.76,56.095,44.455,22.66,56.217,44.548,22.76,56.367,44.893,22.66,56.294,45.012,22.76,56.367,45.278,22.66,56.072,45.387,22.96,56.095,45.53,22.96,55.654,45.387,22.96,55.213,45.012,22.96,54.941,44.548,22.96,54.941,44.173,22.96,55.213,44.03,22.96,55.654,44.173,22.96,56.095,44.548,22.96,56.367,45.012,22.96,56.367,45.18,27.26,55.654,45.086,27.26,55.397,45.086,27.26,55.911,44.85,27.26,56.048,44.85,27.26,55.26,44.58,27.26,56.001,44.58,27.26,55.308,44.404,27.26,55.791,44.404,27.26,55.517,45.086,22.96,55.397,45.18,22.96,55.654,45.086,22.96,55.911,44.85,22.96,55.26,44.58,22.96,55.308,44.404,22.96,55.517,44.404,22.96,55.791,44.58,22.96,56.001,44.85,22.96,56.048,37.199,24.96,48.91,37.199,24.96,48.21,36.999,24.96,48.21,40.084,26.21,46.823,40.107,26.21,46.611,40.084,26.96,46.823,40.107,26.96,46.611,40.174,26.21,46.408,40.174,26.96,46.408,40.283,26.21,46.224,40.283,26.96,46.224,40.429,26.21,46.068,40.429,26.96,46.068,40.604,26.21,45.946,40.604,26.96,45.946,44.54,26.21,43.796,44.54,26.96,43.796,40.084,22.96,46.823,40.107,22.96,46.611,40.084,23.71,46.823,40.107,23.71,46.611,40.174,22.96,46.408,40.174,23.71,46.408,40.283,22.96,46.224,40.283,23.71,46.224,40.429,22.96,46.068,40.429,23.71,46.068,40.604,22.96,45.946,40.604,23.71,45.946,44.54,22.96,43.796,44.54,23.71,43.796,40.604,26.21,52.875,40.429,26.21,52.753,40.604,26.96,52.875,40.429,26.96,52.753,40.283,26.21,52.596,40.283,26.96,52.596,40.174,26.21,52.412,40.174,26.96,52.412,40.107,26.21,52.21,40.107,26.96,52.21,40.084,26.21,51.997,40.084,26.96,51.997,40.604,22.96,52.875,40.429,22.96,52.753,40.604,23.71,52.875,40.429,23.71,52.753,40.283,22.96,52.596,40.283,23.71,52.596,40.174,22.96,52.412,40.174,23.71,52.412,40.107,22.96,52.21,40.107,23.71,52.21,40.084,22.96,51.997,40.084,23.71,51.997,39.723,22.96,53.533,39.723,23.71,53.533,39.571,22.96,53.465,39.571,23.71,53.465,39.409,23.71,53.424,39.243,23.71,53.41,39.243,22.96,53.41,39.409,22.96,53.424,38.999,23.71,53.41,36.999,22.96,53.41,38.999,26.21,53.41,36.999,26.96,53.41,39.243,26.96,53.41,39.243,26.21,53.41,39.409,26.96,53.424,39.409,26.21,53.424,39.571,26.21,53.465,39.723,26.21,53.533,39.723,26.96,53.533,39.571,26.96,53.465,44.535,26.21,56.161,44.535,26.96,56.161,39.723,26.96,45.288,39.723,26.21,45.288,39.571,26.96,45.355,39.571,26.21,45.355,39.409,26.21,45.396,39.243,26.21,45.41,39.243,26.96,45.41,39.409,26.96,45.396,38.999,26.21,45.41,36.999,26.96,45.41,36.999,22.96,45.41,38.999,23.71,45.41,39.243,22.96,45.41,39.243,23.71,45.41,39.409,22.96,45.396,39.409,23.71,45.396,39.571,23.71,45.355,39.723,23.71,45.288,39.723,22.96,45.288,39.571,22.96,45.355,44.535,23.71,42.659,44.535,22.96,42.659,37.199,24.673,50.575,36.999,24.673,50.575,37.199,24.96,50.61,36.999,24.96,50.61,37.199,25.247,50.575,36.999,25.247,50.575,37.199,25.518,50.473,36.999,25.518,50.473,37.199,25.756,50.308,36.999,25.756,50.308,37.199,25.948,50.092,36.999,25.948,50.092,37.199,26.082,49.836,36.999,26.082,49.836,37.199,26.151,49.555,36.999,26.151,49.555,37.199,26.151,49.266,36.999,26.151,49.266,37.199,26.082,48.985,36.999,26.082,48.985,37.199,25.948,48.729,36.999,25.948,48.729,37.199,25.756,48.512,36.999,25.756,48.512,37.199,25.518,48.348,36.999,25.518,48.348,37.199,25.247,48.245,36.999,25.247,48.245,37.199,24.673,48.245,36.999,24.673,48.245,37.199,24.403,48.348,36.999,24.403,48.348,37.199,24.164,48.512,36.999,24.164,48.512,37.199,23.973,48.729,36.999,23.973,48.729,37.199,23.838,48.985,36.999,23.838,48.985,37.199,23.769,49.266,36.999,23.769,49.266,37.199,23.769,49.555,36.999,23.769,49.555,37.199,23.838,49.836,36.999,23.838,49.836,37.199,23.973,50.092,36.999,23.973,50.092,37.199,24.164,50.308,36.999,24.164,50.308,37.199,24.403,50.473,36.999,24.403,50.473,37.199,25.141,48.944,37.199,25.297,49.041,37.199,25.408,49.187,37.199,25.458,49.364,37.199,25.441,49.547,37.199,25.359,49.712,37.199,25.223,49.835,37.199,25.052,49.902,37.199,24.868,49.902,37.199,24.697,49.835,37.199,24.561,49.712,37.199,24.479,49.547,37.199,24.462,49.364,37.199,24.513,49.187,37.199,24.623,49.041,37.199,24.78,48.944,37.399,24.78,48.944,37.399,24.96,48.91,37.399,25.141,48.944,37.399,25.297,49.041,37.399,25.408,49.187,37.399,25.458,49.364,37.399,25.441,49.547,37.399,25.359,49.712,37.399,25.223,49.835,37.399,25.052,49.902,37.399,24.868,49.902,37.399,24.697,49.835,37.399,24.561,49.712,37.399,24.479,49.547,37.399,24.462,49.364,37.399,24.513,49.187,37.399,24.623,49.041,38.999,25.141,48.944,38.399,25.141,48.944,38.999,24.96,48.91,38.399,24.96,48.91,38.999,24.78,48.944,38.399,24.78,48.944,38.999,24.623,49.041,38.399,24.623,49.041,38.999,24.513,49.187,38.399,24.513,49.187,38.999,24.462,49.364,38.399,24.462,49.364,38.999,24.479,49.547,38.399,24.479,49.547,38.999,24.561,49.712,38.399,24.561,49.712,38.999,24.697,49.835,38.399,24.697,49.835,38.999,24.868,49.902,38.399,24.868,49.902,38.999,25.052,49.902,38.399,25.052,49.902,38.999,25.223,49.835,38.399,25.223,49.835,38.999,25.359,49.712,38.399,25.359,49.712,38.999,25.441,49.547,38.399,25.441,49.547,38.999,25.458,49.364,38.399,25.458,49.364,38.999,25.408,49.187,38.399,25.408,49.187,38.999,25.297,49.041,38.399,25.297,49.041,45.145,26.96,55.491,45.171,26.21,55.571,45.18,26.96,55.654,45.171,26.21,55.737,45.145,26.96,55.817,45.104,26.21,55.889,45.048,26.96,55.951,44.98,26.21,56.001,44.904,26.96,56.035,44.822,26.21,56.052,44.738,26.96,56.052,44.656,26.21,56.035,44.58,26.96,56.001,44.512,26.21,55.951,44.456,26.96,55.889,44.415,26.21,55.817,44.389,26.96,55.737,44.38,26.21,55.654,44.389,26.96,55.571,44.415,26.21,55.491,44.456,26.96,55.419,44.512,26.21,55.357,44.58,26.96,55.308,44.656,26.21,55.274,44.738,26.96,55.256,44.822,26.21,55.256,44.904,26.96,55.274,44.98,26.21,55.308,45.048,26.96,55.357,45.104,26.21,55.419,44.415,23.71,55.817,44.415,22.96,55.817,44.38,23.71,55.654,44.38,22.96,55.654,44.415,23.71,55.491,44.415,22.96,55.491,44.512,23.71,55.357,44.512,22.96,55.357,44.656,23.71,55.274,44.656,22.96,55.274,44.822,23.71,55.256,44.822,22.96,55.256,44.98,23.71,55.308,44.98,22.96,55.308,45.104,23.71,55.419,45.104,22.96,55.419,45.171,23.71,55.571,45.171,22.96,55.571,45.171,23.71,55.737,45.171,22.96,55.737,45.104,23.71,55.889,45.104,22.96,55.889,44.98,23.71,56.001,44.98,22.96,56.001,44.822,23.71,56.052,44.822,22.96,56.052,44.656,23.71,56.035,44.656,22.96,56.035,44.512,23.71,55.951,44.512,22.96,55.951,45.145,26.96,43.02,45.171,26.21,43.099,45.18,26.96,43.183,45.171,26.21,43.266,45.145,26.96,43.345,45.104,26.21,43.418,45.048,26.96,43.48,44.98,26.21,43.529,44.904,26.96,43.563,44.822,26.21,43.58,44.738,26.96,43.58,44.656,26.21,43.563,44.58,26.96,43.529,44.512,26.21,43.48,44.456,26.96,43.418,44.415,26.21,43.345,44.389,26.96,43.266,44.38,26.21,43.183,44.389,26.96,43.099,44.415,26.21,43.02,44.456,26.96,42.947,44.512,26.21,42.885,44.58,26.96,42.836,44.656,26.21,42.802,44.738,26.96,42.785,44.822,26.21,42.785,44.904,26.96,42.802,44.98,26.21,42.836,45.048,26.96,42.885,45.104,26.21,42.947,44.415,23.71,43.345,44.415,22.96,43.345,44.38,23.71,43.183,44.38,22.96,43.183,44.415,23.71,43.02,44.415,22.96,43.02,44.512,23.71,42.885,44.512,22.96,42.885,44.656,23.71,42.802,44.656,22.96,42.802,44.822,23.71,42.785,44.822,22.96,42.785,44.98,23.71,42.836,44.98,22.96,42.836,45.104,23.71,42.947,45.104,22.96,42.947,45.171,23.71,43.099,45.171,22.96,43.099,45.171,23.71,43.266,45.171,22.96,43.266,45.104,23.71,43.418,45.104,22.96,43.418,44.98,23.71,43.529,44.98,22.96,43.529,44.822,23.71,43.58,44.822,22.96,43.58,44.656,23.71,43.563,44.656,22.96,43.563,44.512,23.71,43.48,44.512,22.96,43.48,47.352,22.96,53.852,47.432,22.96,53.749,47.352,23.71,53.852,47.432,23.71,53.749,47.482,23.71,53.628,47.482,22.96,53.628,47.499,22.96,53.499,47.499,23.71,53.499,44.54,23.71,55.025,44.691,23.71,55.078,44.851,23.71,55.081,45.004,23.71,55.033,45.134,23.71,54.939,45.499,23.71,54.574,46.375,23.71,54.086,45.128,23.71,56.076,46.54,23.71,54.103,46.699,23.71,54.052,46.822,23.71,53.94,46.89,23.71,53.788,46.89,23.71,53.622,46.822,23.71,53.47,47.499,23.71,50.66,46.699,23.71,53.359,46.499,23.71,50.66,46.54,23.71,53.307,46.375,23.71,53.325,46.231,23.71,53.408,46.133,23.71,53.543,46.099,23.71,53.705,46.133,23.71,53.868,46.231,23.71,54.002,44.999,23.71,56.17,44.846,23.71,56.217,44.686,23.71,56.215,44.535,23.71,56.161,44.686,23.71,42.606,44.846,23.71,42.603,44.999,23.71,42.651,45.128,23.71,42.744,45.499,23.71,44.246,46.375,23.71,44.735,46.54,23.71,44.717,46.699,23.71,44.769,45.134,23.71,43.881,45.004,23.71,43.787,44.851,23.71,43.74,44.691,23.71,43.743,46.133,23.71,45.278,46.099,23.71,45.115,46.133,23.71,44.953,46.231,23.71,44.818,47.352,23.71,44.968,46.822,23.71,44.88,46.89,23.71,45.032,46.89,23.71,45.198,47.499,23.71,45.322,47.432,23.71,45.072,47.482,23.71,45.192,46.822,23.71,45.35,47.499,23.71,48.16,46.699,23.71,45.462,46.499,23.71,48.16,46.54,23.71,45.513,46.375,23.71,45.496,46.231,23.71,45.412,47.499,22.96,45.322,47.499,26.21,50.66,47.499,26.21,48.16,47.499,26.96,53.499,47.499,26.96,45.322,47.499,26.21,45.322,47.499,26.21,53.499,47.482,26.96,53.628,47.482,26.21,53.628,47.432,26.21,53.749,47.432,26.96,53.749,47.352,26.96,53.852,47.352,26.21,53.852,44.686,26.21,56.215,44.846,26.21,56.217,44.999,26.21,56.17,45.128,26.21,56.076,45.499,26.21,54.574,46.375,26.21,54.086,46.54,26.21,54.103,46.699,26.21,54.052,45.134,26.21,54.939,45.004,26.21,55.033,44.851,26.21,55.081,44.691,26.21,55.078,44.54,26.21,55.025,44.691,26.21,43.743,44.851,26.21,43.74,45.004,26.21,43.787,45.134,26.21,43.881,45.499,26.21,44.246,46.375,26.21,44.735,45.128,26.21,42.744,46.54,26.21,44.717,46.699,26.21,44.769,47.352,26.21,44.968,46.822,26.21,44.88,46.89,26.21,45.032,46.89,26.21,45.198,46.822,26.21,45.35,46.699,26.21,45.462,46.499,26.21,48.16,46.54,26.21,45.513,46.375,26.21,45.496,46.231,26.21,45.412,46.133,26.21,45.278,46.099,26.21,45.115,46.133,26.21,44.953,46.231,26.21,44.818,44.999,26.21,42.651,44.846,26.21,42.603,44.686,26.21,42.606,44.535,26.21,42.659,46.133,26.21,53.543,46.099,26.21,53.705,46.133,26.21,53.868,46.231,26.21,54.002,46.822,26.21,53.94,46.89,26.21,53.788,46.89,26.21,53.622,46.822,26.21,53.47,46.699,26.21,53.359,46.499,26.21,50.66,46.54,26.21,53.307,46.375,26.21,53.325,46.231,26.21,53.408,47.432,26.21,45.072,47.482,26.21,45.192,47.352,26.96,44.968,47.432,26.96,45.072,47.482,26.96,45.192,45.128,26.96,42.744,47.482,22.96,45.192,47.432,22.96,45.072,47.352,22.96,44.968,45.128,22.96,42.744,44.691,22.96,43.743,44.851,22.96,43.74,45.004,22.96,43.787,45.134,22.96,43.881,45.499,22.96,44.246,44.686,22.96,42.606,44.846,22.96,42.603,44.999,22.96,42.651,44.691,26.96,43.743,44.851,26.96,43.74,45.004,26.96,43.787,45.134,26.96,43.881,45.499,26.96,44.246,44.535,26.96,42.659,44.686,26.96,42.606,44.846,26.96,42.603,44.999,26.96,42.651,45.128,22.96,56.076,44.999,22.96,56.17,44.846,22.96,56.217,44.686,22.96,56.215,44.535,22.96,56.161,45.134,22.96,54.939,45.004,22.96,55.033,44.851,22.96,55.081,44.691,22.96,55.078,44.54,22.96,55.025,45.128,26.96,56.076,44.999,26.96,56.17,44.846,26.96,56.217,44.686,26.96,56.215,45.134,26.96,54.939,45.004,26.96,55.033,44.851,26.96,55.081,44.691,26.96,55.078,44.54,26.96,55.025,46.133,22.96,44.953,46.099,22.96,45.115,46.133,22.96,45.278,46.231,22.96,45.412,46.375,22.96,45.496,46.54,22.96,45.513,46.699,22.96,45.462,46.822,22.96,45.35,46.89,22.96,45.198,46.89,22.96,45.032,46.822,22.96,44.88,46.699,22.96,44.769,46.54,22.96,44.717,46.375,22.96,44.735,46.231,22.96,44.818,46.107,26.96,45.032,46.107,26.96,45.198,46.175,26.96,45.35,46.299,26.96,45.462,46.457,26.96,45.513,46.622,26.96,45.496,46.766,26.96,45.412,46.864,26.96,45.278,46.899,26.96,45.115,46.864,26.96,44.953,46.766,26.96,44.818,46.622,26.96,44.735,46.457,26.96,44.717,46.299,26.96,44.769,46.175,26.96,44.88,46.133,22.96,53.543,46.099,22.96,53.705,46.133,22.96,53.868,46.231,22.96,54.002,46.375,22.96,54.086,46.54,22.96,54.103,46.699,22.96,54.052,46.822,22.96,53.94,46.89,22.96,53.788,46.89,22.96,53.622,46.822,22.96,53.47,46.699,22.96,53.359,46.54,22.96,53.307,46.375,22.96,53.325,46.231,22.96,53.408,46.107,26.96,53.622,46.107,26.96,53.788,46.175,26.96,53.94,46.299,26.96,54.052,46.457,26.96,54.103,46.622,26.96,54.086,46.766,26.96,54.002,46.864,26.96,53.868,46.899,26.96,53.705,46.864,26.96,53.543,46.766,26.96,53.408,46.622,26.96,53.325,46.457,26.96,53.307,46.299,26.96,53.359,46.175,26.96,53.47,45.499,26.96,54.574,45.499,22.96,54.574,38.399,22.96,51.91,37.399,22.96,51.91,38.399,26.96,51.91,37.399,26.96,51.91,38.399,26.96,46.91,38.399,22.96,46.91,37.399,22.96,46.91,37.399,26.96,46.91,45.278,22.66,42.765,45.387,22.76,42.742,45.43,22.66,43.183,45.53,22.76,43.183,45.387,22.76,43.623,45.012,22.76,42.469,44.893,22.66,42.542,44.548,22.76,42.469,44.455,22.66,42.62,44.173,22.76,42.742,44.169,22.66,42.96,44.03,22.76,43.183,44.169,22.66,43.405,44.173,22.76,43.623,44.455,22.66,43.745,44.548,22.76,43.896,44.893,22.66,43.823,45.012,22.76,43.896,45.278,22.66,43.6,45.387,22.96,43.623,45.53,22.96,43.183,45.387,22.96,42.742,45.012,22.96,42.469,44.548,22.96,42.469,44.173,22.96,42.742,44.03,22.96,43.183,44.173,22.96,43.623,44.548,22.96,43.896,45.012,22.96,43.896,45.18,27.26,43.183,45.086,27.26,42.925,45.086,27.26,43.44,44.85,27.26,43.576,44.85,27.26,42.789,44.58,27.26,43.529,44.58,27.26,42.836,44.404,27.26,43.319,44.404,27.26,43.046,45.086,22.96,42.925,45.18,22.96,43.183,45.086,22.96,43.44,44.85,22.96,42.789,44.58,22.96,42.836,44.404,22.96,43.046,44.404,22.96,43.319,44.58,22.96,43.529,44.85,22.96,43.576,44.701,26.94,56.067,44.704,26.96,56.047,44.917,26.94,56.051,44.911,26.96,56.032,45.097,26.94,55.929,45.082,26.96,55.916,45.192,26.94,55.734,45.173,26.96,55.73,45.177,26.94,55.517,45.158,26.96,55.523,45.055,26.94,55.337,45.042,26.96,55.352,44.86,26.94,55.242,44.856,26.96,55.261,44.643,26.94,55.257,44.649,26.96,55.276,44.463,26.94,55.379,44.478,26.96,55.392,44.368,26.94,55.575,44.387,26.96,55.578,44.383,26.94,55.792,44.402,26.96,55.785,44.505,26.94,55.972,44.518,26.96,55.956,45.082,27.22,55.916,44.911,27.22,56.032,44.704,27.22,56.047,44.518,27.22,55.956,44.402,27.22,55.785,44.387,27.22,55.578,44.478,27.22,55.392,44.649,27.22,55.276,44.856,27.22,55.261,45.042,27.22,55.352,45.158,27.22,55.523,45.173,27.22,55.73,45.411,26.94,55.776,45.201,26.94,55.169,44.99,26.94,56.261,44.359,26.94,56.14,44.149,26.94,55.533,44.57,26.94,55.047,44.701,27.24,56.067,44.917,27.24,56.051,45.097,27.24,55.929,45.192,27.24,55.734,45.177,27.24,55.517,45.055,27.24,55.337,44.86,27.24,55.242,44.643,27.24,55.257,44.463,27.24,55.379,44.368,27.24,55.575,44.383,27.24,55.792,44.505,27.24,55.972,45.411,27.24,55.776,44.99,27.24,56.261,45.201,27.24,55.169,44.57,27.24,55.047,44.149,27.24,55.533,44.359,27.24,56.14,44.303,27.19,56.129,44.332,26.977,56.171,44.332,27.204,56.171,44.378,26.99,56.194,44.378,27.19,56.194,44.303,26.99,56.129,44.112,26.99,55.576,44.108,26.977,55.525,44.112,27.19,55.576,44.108,27.204,55.525,44.952,27.19,56.305,45.004,26.977,56.301,45.004,27.204,56.301,45.047,26.99,56.272,45.047,27.19,56.272,44.952,26.99,56.305,45.43,26.99,55.83,45.43,27.19,55.83,45.452,26.977,55.784,45.452,27.204,55.784,45.449,26.99,55.732,45.449,27.19,55.732,45.257,27.19,55.18,45.228,27.204,55.137,45.257,26.99,55.18,44.131,27.19,55.478,44.131,26.99,55.478,44.513,27.19,55.036,44.513,26.99,55.036,44.556,27.204,55.007,44.608,27.19,55.004,44.556,26.977,55.007,44.608,26.99,55.004,45.182,26.99,55.114,45.228,26.977,55.137,45.182,27.19,55.114,45.07,26.88,43.487,45.056,26.9,43.472,45.183,26.88,43.301,45.164,26.9,43.296,45.188,26.88,43.084,45.169,26.9,43.089,45.084,26.88,42.893,45.07,26.9,42.907,44.899,26.88,42.78,44.893,26.9,42.799,44.682,26.88,42.774,44.686,26.9,42.794,44.491,26.88,42.878,44.504,26.9,42.893,44.377,26.88,43.064,44.396,26.9,43.069,44.372,26.88,43.281,44.391,26.9,43.276,44.476,26.88,43.472,44.49,26.9,43.458,44.661,26.88,43.585,44.667,26.9,43.566,44.879,26.88,43.591,44.874,26.9,43.571,45.169,27.16,43.089,45.164,27.16,43.296,45.056,27.16,43.472,44.874,27.16,43.571,44.667,27.16,43.566,44.49,27.16,43.458,44.391,27.16,43.276,44.396,27.16,43.069,44.504,27.16,42.893,44.686,27.16,42.794,44.893,27.16,42.799,45.07,27.16,42.907,45.245,26.88,42.74,44.629,26.88,42.558,45.396,26.88,43.364,44.931,26.88,43.807,44.315,26.88,43.625,44.164,26.88,43.001,45.07,27.18,43.487,45.183,27.18,43.301,45.188,27.18,43.084,45.084,27.18,42.893,44.899,27.18,42.78,44.682,27.18,42.774,44.491,27.18,42.878,44.377,27.18,43.064,44.372,27.18,43.281,44.476,27.18,43.472,44.661,27.18,43.585,44.879,27.18,43.591,45.245,27.18,42.74,45.396,27.18,43.364,44.629,27.18,42.558,44.164,27.18,43.001,44.315,27.18,43.625,44.931,27.18,43.807,44.889,27.13,43.847,44.941,26.917,43.848,44.941,27.144,43.848,44.986,26.93,43.823,44.986,27.13,43.823,44.889,26.93,43.847,44.328,26.93,43.681,44.284,26.917,43.654,44.328,27.13,43.681,44.284,27.144,43.654,45.41,27.13,43.42,45.437,26.917,43.376,45.437,27.144,43.376,45.438,26.93,43.324,45.438,27.13,43.324,45.41,26.93,43.42,45.301,26.93,42.756,45.301,27.13,42.756,45.276,26.917,42.711,45.276,27.144,42.711,45.232,26.93,42.684,45.232,27.13,42.684,44.671,27.13,42.518,44.619,27.144,42.517,44.671,26.93,42.518,44.259,27.13,43.609,44.259,26.93,43.609,44.122,27.13,43.041,44.122,26.93,43.041,44.123,27.144,42.989,44.15,27.13,42.945,44.123,26.917,42.989,44.15,26.93,42.945,44.574,26.93,42.542,44.619,26.917,42.517,44.574,27.13,42.542,46.135,27.18,45.325,46.152,27.16,45.315,46.079,27.18,45.115,46.099,27.16,45.115,46.135,27.18,44.905,46.152,27.16,44.915,46.289,27.18,44.752,46.299,27.16,44.769,46.499,27.18,44.695,46.499,27.16,44.715,46.709,27.18,44.752,46.699,27.16,44.769,46.862,27.18,44.905,46.845,27.16,44.915,46.919,27.18,45.115,46.899,27.16,45.115,46.862,27.18,45.325,46.845,27.16,45.315,46.709,27.18,45.479,46.699,27.16,45.462,46.499,27.18,45.535,46.499,27.16,45.515,46.289,27.18,45.479,46.299,27.16,45.462,46.152,26.9,44.915,46.099,26.9,45.115,46.152,26.9,45.315,46.299,26.9,45.462,46.499,26.9,45.515,46.699,26.9,45.462,46.845,26.9,45.315,46.899,26.9,45.115,46.845,26.9,44.915,46.699,26.9,44.769,46.499,26.9,44.715,46.299,26.9,44.769,46.178,27.18,44.559,46.82,27.18,44.559,45.856,27.18,45.115,46.178,27.18,45.671,46.82,27.18,45.671,47.141,27.18,45.115,46.135,26.88,45.325,46.079,26.88,45.115,46.135,26.88,44.905,46.289,26.88,44.752,46.499,26.88,44.695,46.709,26.88,44.752,46.862,26.88,44.905,46.919,26.88,45.115,46.862,26.88,45.325,46.709,26.88,45.479,46.499,26.88,45.535,46.289,26.88,45.479,46.178,26.88,44.559,45.856,26.88,45.115,46.82,26.88,44.559,47.141,26.88,45.115,46.82,26.88,45.671,46.178,26.88,45.671,46.206,26.93,45.721,46.156,27.144,45.708,46.156,26.917,45.708,46.12,27.13,45.671,46.12,26.93,45.671,46.206,27.13,45.721,46.791,27.13,45.721,46.841,27.144,45.708,46.791,26.93,45.721,46.841,26.917,45.708,45.828,26.93,45.165,45.814,27.144,45.115,45.814,26.917,45.115,45.828,27.13,45.065,45.828,26.93,45.065,45.828,27.13,45.165,46.12,27.13,44.559,46.12,26.93,44.559,46.156,27.144,44.522,46.156,26.917,44.522,46.206,27.13,44.509,46.206,26.93,44.509,46.791,26.93,44.509,46.841,26.917,44.522,46.791,27.13,44.509,46.878,26.93,45.671,46.878,27.13,45.671,47.17,26.93,45.165,47.17,27.13,45.165,47.183,26.917,45.115,47.17,26.93,45.065,47.183,27.144,45.115,47.17,27.13,45.065,46.878,27.13,44.559,46.841,27.144,44.522,46.878,26.93,44.559,46.135,27.18,53.915,46.152,27.16,53.905,46.079,27.18,53.705,46.099,27.16,53.705,46.135,27.18,53.495,46.152,27.16,53.505,46.289,27.18,53.342,46.299,27.16,53.359,46.499,27.18,53.285,46.499,27.16,53.305,46.709,27.18,53.342,46.699,27.16,53.359,46.862,27.18,53.495,46.845,27.16,53.505,46.919,27.18,53.705,46.899,27.16,53.705,46.862,27.18,53.915,46.845,27.16,53.905,46.709,27.18,54.069,46.699,27.16,54.052,46.499,27.18,54.125,46.499,27.16,54.105,46.289,27.18,54.069,46.299,27.16,54.052,46.152,26.9,53.505,46.099,26.9,53.705,46.152,26.9,53.905,46.299,26.9,54.052,46.499,26.9,54.105,46.699,26.9,54.052,46.845,26.9,53.905,46.899,26.9,53.705,46.845,26.9,53.505,46.699,26.9,53.359,46.499,26.9,53.305,46.299,26.9,53.359,46.178,27.18,53.149,46.82,27.18,53.149,45.856,27.18,53.705,46.178,27.18,54.261,46.82,27.18,54.261,47.141,27.18,53.705,46.135,26.88,53.915,46.079,26.88,53.705,46.135,26.88,53.495,46.289,26.88,53.342,46.499,26.88,53.285,46.709,26.88,53.342,46.862,26.88,53.495,46.919,26.88,53.705,46.862,26.88,53.915,46.709,26.88,54.069,46.499,26.88,54.125,46.289,26.88,54.069,46.178,26.88,53.149,45.856,26.88,53.705,46.82,26.88,53.149,47.141,26.88,53.705,46.82,26.88,54.261,46.178,26.88,54.261,46.206,26.93,54.311,46.156,27.144,54.298,46.156,26.917,54.298,46.12,27.13,54.261,46.12,26.93,54.261,46.206,27.13,54.311,46.791,27.13,54.311,46.841,27.144,54.298,46.791,26.93,54.311,46.841,26.917,54.298,45.828,26.93,53.755,45.814,27.144,53.705,45.814,26.917,53.705,45.828,27.13,53.655,45.828,26.93,53.655,45.828,27.13,53.755,46.12,27.13,53.149,46.12,26.93,53.149,46.156,27.144,53.112,46.156,26.917,53.112,46.206,27.13,53.099,46.206,26.93,53.099,46.791,26.93,53.099,46.841,26.917,53.112,46.791,27.13,53.099,46.878,26.93,54.261,46.878,27.13,54.261,47.17,26.93,53.755,47.17,27.13,53.755,47.183,26.917,53.705,47.17,26.93,53.655,47.183,27.144,53.705,47.17,27.13,53.655,46.878,27.13,53.149,46.841,27.144,53.112,46.878,26.93,53.149,46.958,22.16,53.32,47.035,22.26,53.255,47.099,22.16,53.705,47.199,22.26,53.705,46.958,22.16,54.091,47.035,22.26,54.155,46.603,22.16,54.296,46.62,22.26,54.395,46.199,22.16,54.225,46.149,22.26,54.311,45.935,22.16,53.91,45.841,22.26,53.945,45.935,22.16,53.5,45.841,22.26,53.466,46.199,22.16,53.186,46.149,22.26,53.099,46.603,22.16,53.114,46.62,22.26,53.016,47.035,22.46,54.155,47.199,22.46,53.705,47.035,22.46,53.255,46.62,22.46,53.016,46.149,22.46,53.099,45.841,22.46,53.466,45.841,22.46,53.945,46.149,22.46,54.311,46.62,22.46,54.395,46.899,27.26,53.705,46.805,27.26,53.448,46.805,27.26,53.962,46.568,27.26,54.099,46.568,27.26,53.311,46.299,27.26,54.052,46.299,27.26,53.359,46.123,27.26,53.842,46.123,27.26,53.568,46.805,22.46,53.448,46.899,22.46,53.705,46.805,22.46,53.962,46.568,22.46,53.311,46.299,22.46,53.359,46.123,22.46,53.568,46.123,22.46,53.842,46.299,22.46,54.052,46.568,22.46,54.099,46.958,22.16,44.73,47.035,22.26,44.665,47.099,22.16,45.115,47.199,22.26,45.115,46.958,22.16,45.501,47.035,22.26,45.565,46.603,22.16,45.706,46.62,22.26,45.805,46.199,22.16,45.635,46.149,22.26,45.721,45.935,22.16,45.32,45.841,22.26,45.355,45.935,22.16,44.91,45.841,22.26,44.876,46.199,22.16,44.596,46.149,22.26,44.509,46.603,22.16,44.524,46.62,22.26,44.426,47.035,22.46,45.565,47.199,22.46,45.115,47.035,22.46,44.665,46.62,22.46,44.426,46.149,22.46,44.509,45.841,22.46,44.876,45.841,22.46,45.355,46.149,22.46,45.721,46.62,22.46,45.805,46.899,27.26,45.115,46.805,27.26,44.858,46.805,27.26,45.372,46.568,27.26,45.509,46.568,27.26,44.721,46.299,27.26,45.462,46.299,27.26,44.769,46.123,27.26,45.252,46.123,27.26,44.978,46.805,22.46,44.858,46.899,22.46,45.115,46.805,22.46,45.372,46.568,22.46,44.721,46.299,22.46,44.769,46.123,22.46,44.978,46.123,22.46,45.252,46.299,22.46,45.462,46.568,22.46,45.509],i:[5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,4,4,18,2,18,12,2,2,12,10,2,10,0,0,10,8,0,8,6,16,14,18,18,14,12,19,4,20,20,4,3,20,3,21,21,3,1,21,1,22,22,1,5,22,5,23,23,5,7,23,7,24,24,7,9,24,9,25,25,9,11,25,11,26,26,11,13,26,13,27,27,13,15,27,15,28,28,15,17,28,17,19,19,17,4,29,30,31,31,30,32,32,30,33,32,33,34,34,33,35,34,35,36,36,35,37,21,38,20,20,38,39,20,39,40,38,21,41,41,21,22,41,22,23,41,23,42,42,23,24,42,24,43,43,24,25,43,25,44,44,25,26,44,26,45,45,26,27,45,27,46,46,27,28,46,28,19,46,19,40,40,19,20,38,29,39,39,29,31,39,31,40,40,31,32,40,32,46,46,32,34,46,34,45,45,34,36,45,36,44,44,36,37,44,37,43,43,37,35,43,35,42,42,35,33,42,33,41,41,33,30,41,30,38,38,30,29,0,1,2,2,1,3,2,3,4,1,0,5,365,364,366,365,366,367,367,366,368,367,368,369,369,368,370,369,370,371,371,370,372,371,372,373,373,372,374,373,374,375,375,374,376,375,376,377,377,376,378,377,378,379,379,378,380,379,380,381,381,380,382,381,382,353,353,382,354,383,384,385,385,384,386,386,384,387,387,384,388,387,388,389,389,390,387,293,295,92,92,295,297,92,297,391,391,297,299,391,299,301,391,301,392,392,301,303,392,303,393,393,303,305,393,305,394,394,305,307,394,307,395,395,307,309,395,309,396,396,309,311,396,311,397,397,311,398,397,398,399,399,398,400,400,398,385,400,385,401,401,385,402,402,385,403,403,385,390,403,390,404,404,390,405,404,405,406,406,405,407,406,407,408,408,407,409,409,407,410,410,407,411,411,407,396,411,396,412,412,396,413,413,396,414,414,396,397,311,313,398,398,313,315,398,315,415,415,315,416,416,315,317,416,317,417,417,317,319,417,319,418,418,319,321,418,321,293,353,355,75,75,355,357,75,357,144,144,357,359,144,359,361,144,361,419,419,361,363,419,363,420,420,363,365,420,365,421,421,365,422,422,365,367,422,367,369,371,423,369,369,423,424,369,424,422,422,424,425,422,425,426,423,371,427,427,371,373,427,373,428,428,373,375,428,375,429,429,375,377,429,377,430,430,377,379,430,379,77,77,379,381,77,381,353,77,353,75,431,432,423,423,432,433,423,433,434,434,424,423,422,426,435,435,426,436,435,436,437,437,438,435,435,438,439,435,439,440,440,439,441,438,442,439,439,442,443,443,442,444,443,444,445,445,444,446,445,446,447,447,448,445,445,448,431,445,431,423,385,386,390,390,386,387,407,445,396,396,445,423,144,141,75,75,141,73,73,141,71,71,141,69,69,141,67,67,141,140,67,140,66,66,140,139,66,139,137,137,135,66,66,135,110,66,110,101,101,110,107,101,107,106,106,105,101,101,105,99,99,105,103,99,103,97,97,103,95,95,103,93,93,103,92,92,103,293,103,418,293,390,389,405,405,389,449,405,449,443,443,449,439,405,443,450,450,443,451,450,451,452,452,451,453,453,451,454,452,455,450,452,456,455,455,456,457,457,456,458,458,456,459,458,459,460,460,461,458,282,280,78,78,280,278,78,278,119,119,278,122,122,278,276,122,276,274,122,274,462,462,274,272,462,272,463,463,272,270,463,270,464,464,270,465,465,270,268,465,268,266,264,466,266,266,466,467,266,467,465,465,467,468,465,468,469,466,264,470,470,264,292,470,292,471,471,292,290,471,290,472,472,290,288,472,288,473,473,288,286,473,286,474,474,286,284,474,284,282,474,282,78,342,340,60,60,340,338,60,338,62,62,338,336,62,336,334,62,334,475,475,334,332,475,332,476,476,332,330,476,330,477,477,330,328,477,328,478,478,328,326,478,326,479,479,326,324,479,324,480,480,324,481,480,481,482,482,481,483,483,481,484,483,484,485,485,484,486,486,484,487,487,484,454,487,454,488,488,454,451,488,451,489,489,451,490,489,490,491,491,490,492,492,490,493,493,490,494,494,490,479,494,479,495,495,479,496,496,479,497,497,479,480,324,352,481,481,352,350,481,350,498,498,350,499,499,350,348,499,348,500,500,348,346,500,346,501,501,346,344,501,344,342,501,342,60,502,503,466,466,503,504,466,504,505,505,467,466,465,469,461,461,469,506,461,506,507,507,508,461,461,508,455,461,455,458,458,455,457,508,509,455,455,509,450,450,509,510,450,510,511,511,510,512,511,512,513,513,514,511,511,514,502,511,502,466,501,60,125,125,60,58,125,58,56,56,54,125,125,54,51,125,51,127,127,51,50,127,50,128,128,50,129,129,50,132,132,50,112,112,50,88,112,88,115,115,88,117,117,88,118,118,88,86,118,86,119,119,86,84,119,84,82,82,79,119,119,79,78,511,466,490,490,466,479,484,515,454,454,515,516,517,518,484,484,518,515,515,518,516,516,518,519,516,519,453,453,454,516,484,481,517,517,481,520,449,521,439,439,521,441,441,521,440,440,521,522,440,522,523,523,435,440,523,524,435,435,524,422,76,525,77,77,525,430,430,525,526,430,526,429,429,526,527,429,527,428,428,527,528,428,528,427,528,529,427,427,529,423,144,419,145,145,419,530,530,419,420,530,420,531,531,420,421,531,421,532,532,421,422,532,422,524,62,475,63,63,475,533,533,475,476,533,476,534,534,476,477,534,477,535,535,477,478,535,478,536,478,479,536,536,479,537,538,539,501,501,539,500,500,539,540,500,540,499,499,540,541,499,541,498,498,541,520,498,520,481,124,538,125,125,538,501,398,415,542,542,415,543,543,415,416,543,416,544,544,416,417,544,417,545,545,417,418,545,418,546,102,546,103,103,546,418,547,548,395,395,548,394,394,548,549,394,549,393,393,549,550,393,550,392,392,550,551,392,551,391,92,391,90,90,391,551,552,553,465,465,553,464,464,553,554,464,554,463,463,554,555,463,555,462,462,555,123,462,123,122,460,552,461,461,552,465,470,471,556,556,471,557,557,471,472,557,472,558,558,472,473,558,473,559,559,473,474,559,474,560,80,560,78,78,560,474,561,433,562,562,433,432,562,432,563,563,432,431,563,431,564,564,431,448,564,448,565,565,448,447,565,447,566,566,447,446,566,446,567,567,446,444,567,444,568,568,444,442,568,442,569,569,442,438,569,438,570,570,438,437,570,437,571,571,437,436,571,436,572,572,436,426,572,426,573,573,426,425,573,425,574,574,425,424,574,424,575,575,424,434,575,434,561,561,434,433,496,576,495,495,576,577,495,577,494,494,577,578,494,578,493,493,578,579,493,579,492,492,579,580,492,580,491,491,580,581,491,581,489,489,581,582,489,582,488,488,582,583,488,583,487,487,583,584,487,584,486,486,584,585,486,585,485,485,585,586,485,586,483,483,586,587,483,587,482,482,587,588,482,588,480,480,588,589,480,589,497,497,589,590,497,590,496,496,590,576,591,411,592,592,411,412,592,412,593,593,412,413,593,413,594,594,413,414,594,414,595,595,414,397,595,397,596,596,397,399,596,399,597,597,399,400,597,400,598,598,400,401,598,401,599,599,401,402,599,402,600,600,402,403,600,403,601,601,403,404,601,404,602,602,404,406,602,406,603,603,406,408,603,408,604,604,408,409,604,409,605,605,409,410,605,410,591,591,410,411,502,606,503,503,606,607,503,607,504,504,607,608,504,608,505,505,608,609,505,609,467,467,609,610,467,610,468,468,610,611,468,611,469,469,611,612,469,612,506,506,612,613,506,613,507,507,613,614,507,614,508,508,614,615,508,615,509,509,615,616,509,616,510,510,616,617,510,617,512,512,617,618,512,618,513,513,618,619,513,619,514,514,619,620,514,620,502,502,620,606,445,490,443,443,490,451,511,407,450,450,407,405,490,445,511,511,445,407,233,135,231,231,135,132,231,132,229,229,132,261,261,132,259,259,132,257,257,132,112,257,112,255,255,112,253,253,112,251,251,112,249,249,112,110,249,110,247,247,110,245,245,110,243,243,110,241,241,110,239,239,110,135,239,135,237,237,135,235,235,135,233,385,398,383,383,398,542,556,621,470,470,621,466,395,396,547,547,396,622,479,466,537,537,466,621,396,423,622,622,423,529,623,624,625,625,624,626,230,627,232,232,627,628,232,628,234,234,628,236,236,628,238,238,628,240,240,628,623,240,623,242,242,623,244,244,623,246,246,623,248,248,623,250,250,623,625,250,625,252,252,625,254,254,625,256,256,625,258,258,625,627,258,627,260,260,627,262,262,627,230,629,628,630,630,628,627,212,629,213,213,629,630,213,630,214,214,630,215,215,630,216,216,630,217,217,630,626,217,626,218,218,626,219,219,626,220,220,626,221,221,626,624,221,624,222,222,624,223,223,624,224,224,624,225,225,624,226,226,624,629,226,629,227,227,629,228,228,629,212,147,111,149,149,111,113,149,113,151,151,113,153,153,113,155,155,113,157,157,113,159,159,113,161,161,113,133,161,133,163,163,133,165,165,133,167,167,133,169,169,133,171,171,133,173,173,133,49,49,133,134,49,134,175,175,134,177,177,134,179,179,134,181,181,134,183,183,134,185,185,134,111,185,111,187,187,111,189,189,111,191,191,111,193,193,111,195,195,111,147,267,552,265,265,552,611,265,611,610,267,269,552,552,269,553,553,269,271,553,271,554,554,271,273,554,273,555,555,273,275,555,275,123,123,275,277,123,277,279,281,80,279,279,80,120,279,120,123,80,281,560,560,281,283,560,283,285,560,285,559,559,285,287,559,287,558,558,287,289,558,289,557,557,289,291,557,291,556,556,291,263,556,263,621,621,263,265,621,265,610,327,537,325,325,537,588,325,588,587,537,327,536,536,327,329,536,329,535,535,329,331,535,331,534,534,331,333,534,333,533,533,333,335,533,335,63,63,335,337,63,337,339,63,339,61,61,339,341,61,341,124,124,341,538,538,341,343,538,343,345,538,345,539,539,345,347,539,347,540,540,347,349,540,349,541,541,349,351,541,351,520,520,351,323,520,323,325,459,615,460,460,615,614,460,614,613,459,456,615,615,456,452,615,452,616,616,452,617,617,452,453,617,453,581,581,453,582,582,453,583,583,453,519,583,519,518,518,517,583,583,517,584,584,517,585,585,517,586,586,517,587,587,517,520,587,520,325,126,55,124,124,55,57,124,57,59,126,131,55,55,131,53,53,131,130,53,130,627,627,130,133,627,133,630,630,133,113,630,113,626,626,113,625,625,113,114,625,114,87,87,114,116,87,116,85,85,116,121,85,121,120,552,460,611,611,460,612,612,460,613,617,581,618,618,581,580,618,580,619,619,580,579,619,579,620,620,579,578,620,578,621,621,578,537,537,578,577,537,577,576,576,590,537,537,590,589,537,589,588,610,609,621,621,609,608,621,608,607,607,606,621,621,606,620,80,81,120,120,81,83,120,83,85,87,89,625,625,89,52,625,52,627,627,52,53,59,61,124,294,102,296,296,102,90,296,90,298,298,90,551,298,551,300,300,551,302,302,551,550,302,550,304,304,550,549,304,549,306,306,549,548,306,548,308,308,548,547,308,547,310,310,547,622,310,622,595,595,622,594,594,622,593,593,622,592,592,622,591,591,622,529,591,529,563,563,529,562,562,529,561,561,529,575,575,529,574,574,529,372,574,372,573,573,372,370,573,370,524,524,370,368,524,368,366,102,294,546,546,294,322,546,322,320,546,320,545,545,320,318,545,318,544,544,318,543,543,318,316,543,316,542,542,316,314,542,314,312,542,312,596,596,312,310,596,310,595,354,74,356,356,74,142,356,142,358,358,142,145,358,145,360,360,145,362,362,145,530,362,530,364,364,530,531,364,531,532,74,354,76,76,354,382,76,382,380,76,380,525,525,380,378,525,378,526,526,378,376,526,376,527,527,376,374,527,374,528,528,374,372,528,372,529,524,366,532,532,366,364,388,600,389,389,600,601,389,601,602,388,384,600,600,384,383,600,383,599,599,383,598,598,383,597,597,383,542,597,542,596,104,96,102,102,96,94,102,94,91,104,109,96,96,109,98,98,109,108,98,108,623,623,108,111,623,111,624,624,111,134,624,134,629,629,134,628,628,134,136,628,136,65,65,136,138,65,138,68,68,138,143,68,143,142,573,524,572,572,524,523,572,523,571,571,523,570,570,523,569,569,523,522,569,522,521,521,449,569,569,449,568,568,449,567,567,449,389,567,389,602,591,563,605,605,563,564,605,564,604,604,564,565,604,565,603,603,565,566,603,566,602,602,566,567,74,72,142,142,72,70,142,70,68,65,64,628,628,64,100,628,100,623,623,100,98,91,90,102,50,51,52,52,51,53,53,51,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,60,62,61,61,62,63,64,65,66,66,65,67,67,65,68,67,68,69,69,68,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,74,76,75,75,76,77,78,79,80,80,79,81,81,79,82,81,82,83,83,82,84,83,84,85,85,84,86,85,86,87,87,86,88,87,88,89,52,89,50,50,89,88,90,91,92,92,91,93,93,91,94,93,94,95,95,94,96,95,96,97,97,96,98,97,98,99,99,98,100,99,100,101,66,101,64,64,101,100,102,103,104,104,103,105,104,105,106,107,108,106,106,108,109,106,109,104,107,110,108,108,110,111,111,110,112,111,112,113,113,112,114,114,112,115,114,115,116,116,115,117,116,117,118,119,120,118,118,120,121,118,121,116,119,122,120,120,122,123,124,125,126,126,125,127,126,127,128,129,130,128,128,130,131,128,131,126,129,132,130,130,132,133,133,132,134,134,132,135,134,135,136,136,135,137,136,137,138,138,137,139,138,139,140,141,142,140,140,142,143,140,143,138,141,144,142,142,144,145,146,147,148,148,147,149,148,149,150,150,149,151,150,151,152,152,151,153,152,153,154,154,153,155,154,155,156,156,155,157,156,157,158,158,157,159,158,159,160,160,159,161,160,161,162,162,161,163,162,163,164,164,163,165,164,165,166,166,165,167,166,167,168,168,167,169,168,169,170,170,169,171,170,171,172,172,171,173,172,173,48,48,173,49,48,49,174,174,49,175,174,175,176,176,175,177,176,177,178,178,177,179,178,179,180,180,179,181,180,181,182,182,181,183,182,183,184,184,183,185,184,185,186,186,185,187,186,187,188,188,187,189,188,189,190,190,189,191,190,191,192,192,191,193,192,193,194,194,193,195,194,195,146,146,195,147,196,172,47,47,172,48,47,48,174,172,196,170,170,196,197,170,197,168,168,197,166,166,197,198,166,198,164,164,198,199,164,199,162,162,199,160,160,199,200,160,200,158,158,200,201,158,201,156,156,201,154,154,201,202,154,202,152,152,202,203,152,203,150,150,203,148,148,203,204,148,204,146,146,204,194,194,204,205,194,205,192,192,205,206,192,206,190,190,206,188,188,206,207,188,207,186,186,207,208,186,208,184,184,208,182,182,208,209,182,209,180,180,209,210,180,210,178,178,210,176,176,210,211,176,211,174,174,211,47,211,212,47,47,212,213,47,213,196,196,213,214,196,214,197,197,214,215,197,215,198,198,215,216,198,216,199,199,216,217,199,217,200,200,217,218,200,218,201,201,218,219,201,219,202,202,219,220,202,220,203,203,220,221,203,221,204,204,221,222,204,222,205,205,222,223,205,223,206,206,223,224,206,224,207,207,224,225,207,225,208,208,225,226,208,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,212,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,242,241,242,243,243,242,244,243,244,245,245,244,246,245,246,247,247,246,248,247,248,249,249,248,250,249,250,251,251,250,252,251,252,253,253,252,254,253,254,255,255,254,256,255,256,257,257,256,258,257,258,259,259,258,260,259,260,261,261,260,262,261,262,229,229,262,230,263,264,265,265,264,266,265,266,267,267,266,268,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,277,276,278,277,278,279,279,278,280,279,280,281,281,280,282,281,282,283,283,282,284,283,284,285,285,284,286,285,286,287,287,286,288,287,288,289,289,288,290,289,290,291,291,290,292,291,292,263,263,292,264,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,301,301,300,302,301,302,303,303,302,304,303,304,305,305,304,306,305,306,307,307,306,308,307,308,309,309,308,310,309,310,311,311,310,312,311,312,313,313,312,314,313,314,315,315,314,316,315,316,317,317,316,318,317,318,319,319,318,320,319,320,321,321,320,322,321,322,293,293,322,294,323,324,325,325,324,326,325,326,327,327,326,328,327,328,329,329,328,330,329,330,331,331,330,332,331,332,333,333,332,334,333,334,335,335,334,336,335,336,337,337,336,338,337,338,339,339,338,340,339,340,341,341,340,342,341,342,343,343,342,344,343,344,345,345,344,346,345,346,347,347,346,348,347,348,349,349,348,350,349,350,351,351,350,352,351,352,323,323,352,324,353,354,355,355,354,356,355,356,357,357,356,358,357,358,359,359,358,360,359,360,361,361,360,362,361,362,363,363,362,364,363,364,365,631,632,633,633,632,634,633,634,635,632,631,636,636,631,637,636,637,638,638,637,639,638,639,640,640,639,641,640,641,642,642,641,643,642,643,644,644,643,645,644,645,646,646,645,647,646,647,648,648,647,649,648,649,635,635,649,633,649,643,633,633,643,641,633,641,631,631,641,639,631,639,637,647,645,649,649,645,643,650,635,651,651,635,634,651,634,652,652,634,632,652,632,653,653,632,636,653,636,654,654,636,638,654,638,655,655,638,640,655,640,656,656,640,642,656,642,657,657,642,644,657,644,658,658,644,646,658,646,659,659,646,648,659,648,650,650,648,635,660,661,662,662,661,663,663,661,664,663,664,665,665,664,666,665,666,667,667,666,668,652,669,651,651,669,670,651,670,671,669,652,672,672,652,653,672,653,654,672,654,673,673,654,655,673,655,674,674,655,656,674,656,675,675,656,657,675,657,676,676,657,658,676,658,677,677,658,659,677,659,650,677,650,671,671,650,651,669,660,670,670,660,662,670,662,671,671,662,663,671,663,677,677,663,665,677,665,676,676,665,667,676,667,675,675,667,668,675,668,674,674,668,666,674,666,673,673,666,664,673,664,672,672,664,661,672,661,669,669,661,660,678,679,680,680,679,681,680,681,682,682,681,683,682,683,684,684,683,685,684,685,686,686,685,687,686,687,688,688,687,689,688,689,690,690,689,691,690,691,692,692,691,693,692,693,694,694,693,695,694,695,696,696,695,697,696,697,698,698,697,699,698,699,700,700,699,701,700,701,678,678,701,679,702,683,703,703,683,681,703,681,704,704,681,679,704,679,705,705,679,701,705,701,706,706,701,699,706,699,707,707,699,697,707,697,708,708,697,695,708,695,709,709,695,693,709,693,710,710,693,691,710,691,711,711,691,689,711,689,712,712,689,687,712,687,713,713,687,685,713,685,702,702,685,683,714,686,715,715,686,688,715,688,690,716,682,714,714,682,684,714,684,686,717,678,716,716,678,680,716,680,682,718,698,717,717,698,700,717,700,678,719,694,718,718,694,696,718,696,698,715,690,719,719,690,692,719,692,694,704,720,703,703,720,721,703,721,702,702,721,722,702,722,713,713,722,723,713,723,712,712,723,724,712,724,711,711,724,725,711,725,710,710,725,726,710,726,709,709,726,727,709,727,708,708,727,728,708,728,707,707,728,729,707,729,706,706,729,730,706,730,705,705,730,731,705,731,704,704,731,720,732,722,733,733,722,721,733,721,720,734,724,732,732,724,723,732,723,722,735,726,734,734,726,725,734,725,724,736,728,735,735,728,727,735,727,726,737,730,736,736,730,729,736,729,728,733,720,737,737,720,731,737,731,730,738,739,740,740,739,741,740,741,742,738,743,739,739,743,717,717,743,744,717,744,718,718,744,745,738,746,743,743,746,744,740,737,738,738,737,736,738,736,746,746,736,747,748,749,750,750,749,751,750,751,752,748,753,749,751,754,752,752,754,755,749,716,751,751,716,714,751,714,754,754,714,756,739,717,741,741,717,716,741,716,753,753,716,749,755,756,757,757,756,758,757,758,759,755,754,756,750,752,733,733,752,755,733,755,732,732,755,757,757,759,732,732,759,760,732,760,734,734,760,761,758,762,759,759,762,760,763,745,747,747,745,744,747,744,746,763,764,745,763,765,764,764,765,766,747,736,763,763,736,735,763,735,765,765,735,767,768,769,767,767,769,766,767,766,765,768,770,769,745,764,718,718,764,766,718,766,719,719,766,769,769,770,719,719,770,771,719,771,715,715,771,772,760,772,761,761,772,771,761,771,773,760,762,772,767,735,768,768,735,734,768,734,773,773,734,761,756,714,758,758,714,715,758,715,762,762,715,772,741,753,742,742,753,748,740,742,737,737,742,748,737,748,733,733,748,750,768,773,770,770,773,771,774,775,776,776,775,777,776,777,778,778,777,779,778,779,780,780,779,781,780,781,782,782,781,783,782,783,784,784,783,785,784,785,786,786,785,787,786,787,788,788,787,789,788,789,790,790,789,791,790,791,792,792,791,793,792,793,794,794,793,795,794,795,796,796,795,797,796,797,774,774,797,775,798,779,799,799,779,777,799,777,800,800,777,775,800,775,801,801,775,797,801,797,802,802,797,795,802,795,803,803,795,793,803,793,804,804,793,791,804,791,805,805,791,789,805,789,806,806,789,787,806,787,807,807,787,785,807,785,808,808,785,783,808,783,809,809,783,781,809,781,798,798,781,779,810,782,811,811,782,784,811,784,786,812,778,810,810,778,780,810,780,782,813,774,812,812,774,776,812,776,778,814,794,813,813,794,796,813,796,774,815,790,814,814,790,792,814,792,794,811,786,815,815,786,788,815,788,790,800,816,799,799,816,817,799,817,798,798,817,818,798,818,809,809,818,819,809,819,808,808,819,820,808,820,807,807,820,821,807,821,806,806,821,822,806,822,805,805,822,823,805,823,804,804,823,824,804,824,803,803,824,825,803,825,802,802,825,826,802,826,801,801,826,827,801,827,800,800,827,816,828,818,829,829,818,817,829,817,816,830,820,828,828,820,819,828,819,818,831,822,830,830,822,821,830,821,820,832,824,831,831,824,823,831,823,822,833,826,832,832,826,825,832,825,824,829,816,833,833,816,827,833,827,826,834,835,836,836,835,837,836,837,838,834,839,835,835,839,813,813,839,840,813,840,814,814,840,841,834,842,839,839,842,840,836,833,834,834,833,832,834,832,842,842,832,843,844,845,846,846,845,847,846,847,848,844,849,845,847,850,848,848,850,851,845,812,847,847,812,810,847,810,850,850,810,852,835,813,837,837,813,812,837,812,849,849,812,845,851,852,853,853,852,854,853,854,855,851,850,852,846,848,829,829,848,851,829,851,828,828,851,853,853,855,828,828,855,856,828,856,830,830,856,857,854,858,855,855,858,856,859,841,843,843,841,840,843,840,842,859,860,841,859,861,860,860,861,862,843,832,859,859,832,831,859,831,861,861,831,863,864,865,863,863,865,862,863,862,861,864,866,865,841,860,814,814,860,862,814,862,815,815,862,865,865,866,815,815,866,867,815,867,811,811,867,868,856,868,857,857,868,867,857,867,869,856,858,868,863,831,864,864,831,830,864,830,869,869,830,857,852,810,854,854,810,811,854,811,858,858,811,868,837,849,838,838,849,844,836,838,833,833,838,844,833,844,829,829,844,846,864,869,866,866,869,867,902,883,903,903,883,881,903,881,904,904,881,879,904,879,905,905,879,877,905,877,894,894,877,875,906,878,907,907,878,880,907,880,882,908,874,906,906,874,876,906,876,878,909,870,908,908,870,872,908,872,874,910,890,909,909,890,892,909,892,870,911,886,910,910,886,888,910,888,890,907,882,911,911,882,884,911,884,886,896,912,895,895,912,913,895,913,894,894,913,914,894,914,905,905,914,915,905,915,904,904,915,916,904,916,903,903,916,917,903,917,902,902,917,918,902,918,901,901,918,919,901,919,900,900,919,920,900,920,899,899,920,921,899,921,898,898,921,922,898,922,897,897,922,923,897,923,896,896,923,912,924,914,925,925,914,913,925,913,912,926,916,924,924,916,915,924,915,914,927,918,926,926,918,917,926,917,916,928,920,927,927,920,919,927,919,918,929,922,928,928,922,921,928,921,920,925,912,929,929,912,923,929,923,922,930,931,932,932,931,933,932,933,934,930,935,931,931,935,909,909,935,936,909,936,910,910,936,937,930,938,935,935,938,936,932,929,930,930,929,928,930,928,938,938,928,939,940,941,942,942,941,943,942,943,944,940,945,941,943,946,944,944,946,947,941,908,943,943,908,906,943,906,946,946,906,948,931,909,933,933,909,908,933,908,945,945,908,941,947,948,949,949,948,950,949,950,951,947,946,948,942,944,925,925,944,947,925,947,924,924,947,949,949,951,924,924,951,952,924,952,926,926,952,953,950,954,951,951,954,952,955,937,939,939,937,936,939,936,938,955,956,937,955,957,956,956,957,958,939,928,955,955,928,927,955,927,957,957,927,959,960,961,959,959,961,958,959,958,957,960,962,961,937,956,910,910,956,958,910,958,911,911,958,961,961,962,911,911,962,963,911,963,907,907,963,964,952,964,953,953,964,963,953,963,965,952,954,964,959,927,960,960,927,926,960,926,965,965,926,953,948,906,950,950,906,907,950,907,954,954,907,964,933,945,934,934,945,940,932,934,929,929,934,940,929,940,925,925,940,942,960,965,962,962,965,963,870,871,872,872,871,873,872,873,874,874,873,875,874,875,876,876,875,877,876,877,878,878,877,879,878,879,880,880,879,881,880,881,882,882,881,883,882,883,884,884,883,885,884,885,886,886,885,887,886,887,888,888,887,889,888,889,890,890,889,891,890,891,892,892,891,893,892,893,870,870,893,871,894,875,895,895,875,873,895,873,896,896,873,871,896,871,897,897,871,893,897,893,898,898,893,891,898,891,899,899,891,889,899,889,900,900,889,887,900,887,901,901,887,885,901,885,902,902,885,883,966,967,968,968,967,969,968,969,970,970,969,971,970,971,972,972,971,973,972,973,974,974,973,975,974,975,976,976,975,977,976,977,978,978,977,979,978,979,980,980,979,981,980,981,982,982,981,983,982,983,984,984,983,985,984,985,986,986,985,987,986,987,988,988,987,989,988,989,966,966,989,967,990,971,991,991,971,969,991,969,992,992,969,967,992,967,993,993,967,989,993,989,994,994,989,987,994,987,995,995,987,985,995,985,996,996,985,983,996,983,997,997,983,981,997,981,998,998,981,979,998,979,999,999,979,977,999,977,1e3,1e3,977,975,1e3,975,1001,1001,975,973,1001,973,990,990,973,971,1002,974,1003,1003,974,976,1003,976,978,1004,970,1002,1002,970,972,1002,972,974,1005,966,1004,1004,966,968,1004,968,970,1006,986,1005,1005,986,988,1005,988,966,1007,982,1006,1006,982,984,1006,984,986,1003,978,1007,1007,978,980,1007,980,982,992,1008,991,991,1008,1009,991,1009,990,990,1009,1010,990,1010,1001,1001,1010,1011,1001,1011,1e3,1e3,1011,1012,1e3,1012,999,999,1012,1013,999,1013,998,998,1013,1014,998,1014,997,997,1014,1015,997,1015,996,996,1015,1016,996,1016,995,995,1016,1017,995,1017,994,994,1017,1018,994,1018,993,993,1018,1019,993,1019,992,992,1019,1008,1020,1010,1021,1021,1010,1009,1021,1009,1008,1022,1012,1020,1020,1012,1011,1020,1011,1010,1023,1014,1022,1022,1014,1013,1022,1013,1012,1024,1016,1023,1023,1016,1015,1023,1015,1014,1025,1018,1024,1024,1018,1017,1024,1017,1016,1021,1008,1025,1025,1008,1019,1025,1019,1018,1026,1027,1028,1028,1027,1029,1028,1029,1030,1026,1031,1027,1027,1031,1005,1005,1031,1032,1005,1032,1006,1006,1032,1033,1026,1034,1031,1031,1034,1032,1028,1025,1026,1026,1025,1024,1026,1024,1034,1034,1024,1035,1036,1037,1038,1038,1037,1039,1038,1039,1040,1036,1041,1037,1039,1042,1040,1040,1042,1043,1037,1004,1039,1039,1004,1002,1039,1002,1042,1042,1002,1044,1027,1005,1029,1029,1005,1004,1029,1004,1041,1041,1004,1037,1043,1044,1045,1045,1044,1046,1045,1046,1047,1043,1042,1044,1038,1040,1021,1021,1040,1043,1021,1043,1020,1020,1043,1045,1045,1047,1020,1020,1047,1048,1020,1048,1022,1022,1048,1049,1046,1050,1047,1047,1050,1048,1051,1033,1035,1035,1033,1032,1035,1032,1034,1051,1052,1033,1051,1053,1052,1052,1053,1054,1035,1024,1051,1051,1024,1023,1051,1023,1053,1053,1023,1055,1056,1057,1055,1055,1057,1054,1055,1054,1053,1056,1058,1057,1033,1052,1006,1006,1052,1054,1006,1054,1007,1007,1054,1057,1057,1058,1007,1007,1058,1059,1007,1059,1003,1003,1059,1060,1048,1060,1049,1049,1060,1059,1049,1059,1061,1048,1050,1060,1055,1023,1056,1056,1023,1022,1056,1022,1061,1061,1022,1049,1044,1002,1046,1046,1002,1003,1046,1003,1050,1050,1003,1060,1029,1041,1030,1030,1041,1036,1028,1030,1025,1025,1030,1036,1025,1036,1021,1021,1036,1038,1056,1061,1058,1058,1061,1059,1062,1063,1064,1064,1063,1065,1064,1065,1066,1066,1065,1067,1066,1067,1068,1068,1067,1069,1068,1069,1070,1070,1069,1071,1070,1071,1072,1072,1071,1073,1072,1073,1074,1074,1073,1075,1074,1075,1076,1076,1075,1077,1076,1077,1078,1078,1077,1079,1078,1079,1062,1062,1079,1063,1066,1072,1064,1064,1072,1074,1064,1074,1062,1062,1074,1076,1062,1076,1078,1068,1070,1066,1066,1070,1072,1080,1065,1081,1081,1065,1063,1081,1063,1082,1082,1063,1079,1082,1079,1083,1083,1079,1077,1083,1077,1084,1084,1077,1075,1084,1075,1085,1085,1075,1073,1085,1073,1086,1086,1073,1071,1086,1071,1087,1087,1071,1069,1087,1069,1088,1088,1069,1067,1088,1067,1080,1080,1067,1065,1089,1090,1091,1091,1090,1092,1092,1090,1093,1092,1093,1094,1094,1093,1095,1094,1095,1096,1096,1095,1097,1082,1098,1081,1081,1098,1099,1081,1099,1100,1098,1082,1101,1101,1082,1083,1101,1083,1084,1101,1084,1102,1102,1084,1085,1102,1085,1103,1103,1085,1086,1103,1086,1104,1104,1086,1105,1105,1086,1087,1105,1087,1106,1106,1087,1088,1106,1088,1080,1106,1080,1100,1100,1080,1081,1098,1089,1099,1099,1089,1091,1099,1091,1100,1100,1091,1092,1100,1092,1106,1106,1092,1094,1106,1094,1105,1105,1094,1096,1105,1096,1104,1104,1096,1097,1104,1097,1103,1103,1097,1095,1103,1095,1102,1102,1095,1093,1102,1093,1101,1101,1093,1090,1101,1090,1098,1098,1090,1089,1107,1108,1109,1109,1108,1110,1109,1110,1111,1111,1110,1112,1111,1112,1113,1113,1112,1114,1113,1114,1115,1115,1114,1116,1115,1116,1117,1117,1116,1118,1117,1118,1119,1119,1118,1120,1119,1120,1121,1121,1120,1122,1121,1122,1123,1123,1122,1124,1123,1124,1107,1107,1124,1108,1111,1117,1109,1109,1117,1119,1109,1119,1107,1107,1119,1121,1107,1121,1123,1113,1115,1111,1111,1115,1117,1125,1110,1126,1126,1110,1108,1126,1108,1127,1127,1108,1124,1127,1124,1128,1128,1124,1122,1128,1122,1129,1129,1122,1120,1129,1120,1130,1130,1120,1118,1130,1118,1131,1131,1118,1116,1131,1116,1132,1132,1116,1114,1132,1114,1133,1133,1114,1112,1133,1112,1125,1125,1112,1110,1134,1135,1136,1136,1135,1137,1137,1135,1138,1137,1138,1139,1139,1138,1140,1139,1140,1141,1141,1140,1142,1127,1143,1126,1126,1143,1144,1126,1144,1145,1143,1127,1146,1146,1127,1128,1146,1128,1129,1146,1129,1147,1147,1129,1130,1147,1130,1148,1148,1130,1131,1148,1131,1149,1149,1131,1150,1150,1131,1132,1150,1132,1151,1151,1132,1133,1151,1133,1125,1151,1125,1145,1145,1125,1126,1143,1134,1144,1144,1134,1136,1144,1136,1145,1145,1136,1137,1145,1137,1151,1151,1137,1139,1151,1139,1150,1150,1139,1141,1150,1141,1149,1149,1141,1142,1149,1142,1148,1148,1142,1140,1148,1140,1147,1147,1140,1138,1147,1138,1146,1146,1138,1135,1146,1135,1143,1143,1135,1134]},schieber:{v:[44.903,23.66,46.086,45.005,23.76,46.06,44.999,23.66,46.41,45.099,23.76,46.41,45.005,23.76,46.76,44.749,23.76,45.804,44.648,23.66,45.864,44.399,23.76,45.71,44.313,23.66,45.816,44.049,23.76,45.804,44.006,23.66,45.957,43.792,23.76,46.06,43.823,23.66,46.241,43.699,23.76,46.41,43.823,23.66,46.579,43.792,23.76,46.76,44.006,23.66,46.864,44.049,23.76,47.016,44.313,23.66,47.004,44.399,23.76,47.11,44.648,23.66,46.956,44.749,23.76,47.016,44.903,23.66,46.735,45.005,23.96,46.76,45.099,23.96,46.41,45.005,23.96,46.06,44.749,23.96,45.804,44.399,23.96,45.71,44.049,23.96,45.804,43.792,23.96,46.06,43.699,23.96,46.41,43.792,23.96,46.76,44.049,23.96,47.016,44.399,23.96,47.11,44.749,23.96,47.016,44.799,26.435,46.41,44.705,26.435,46.153,44.705,26.435,46.667,44.468,26.435,46.804,44.468,26.435,46.016,44.199,26.435,46.757,44.199,26.435,46.064,44.023,26.435,46.547,44.023,26.435,46.273,44.799,23.96,46.41,44.705,23.96,46.153,44.468,23.96,46.016,44.199,23.96,46.064,44.023,23.96,46.273,44.023,23.96,46.547,44.199,23.96,46.757,44.468,23.96,46.804,44.705,23.96,46.667,45.599,25.539,48.721,45.599,25.268,50.256,45.599,24.96,48.51,45.599,24.652,50.256,45.599,24.382,48.721,45.599,24.181,49.86,45.599,24.074,49.254,45.599,25.847,49.254,45.599,25.74,49.86,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,37.199,24.96,48.91,37.199,25.282,49.027,37.199,25.453,49.323,37.199,25.393,49.66,37.199,25.131,49.88,37.199,24.789,49.88,37.199,24.527,49.66,37.199,24.468,49.323,37.199,24.639,49.027,37.199,24.96,48.21,37.199,24.189,48.491,37.199,23.778,49.202,37.199,23.921,50.01,37.199,24.55,50.538,37.199,25.371,50.538,37.199,25.999,50.01,37.199,26.142,49.202,37.199,25.732,48.491,36.999,24.96,48.21,36.999,25.732,48.491,36.999,26.142,49.202,36.999,25.999,50.01,36.999,25.371,50.538,36.999,24.55,50.538,36.999,23.921,50.01,36.999,23.778,49.202,36.999,24.189,48.491,36.999,24.639,49.027,36.999,24.96,48.91,36.999,25.282,49.027,36.999,24.468,49.323,36.999,24.527,49.66,36.999,24.789,49.88,36.999,25.131,49.88,36.999,25.393,49.66,36.999,25.453,49.323,30.599,24.96,48.91,30.599,25.282,49.027,30.599,25.453,49.323,30.599,25.393,49.66,30.599,25.131,49.88,30.599,24.789,49.88,30.599,24.527,49.66,30.599,24.468,49.323,30.599,24.639,49.027,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,45.399,24.96,48.51,45.399,25.539,48.721,45.399,25.847,49.254,45.399,25.74,49.86,45.399,25.268,50.256,45.399,24.652,50.256,45.399,24.181,49.86,45.399,24.074,49.254,45.399,24.382,48.721,43.399,24.96,48.91,43.399,24.639,49.027,43.399,24.468,49.323,43.399,24.527,49.66,43.399,24.789,49.88,43.399,25.131,49.88,43.399,25.393,49.66,43.399,25.453,49.323,43.399,25.282,49.027,43.59,25.21,45.822,43.999,25.21,46.41,43.399,25.21,46.41,44.092,25.21,46.667,43.399,25.21,47.91,44.329,25.21,46.804,45.399,25.21,47.91,44.599,25.21,46.757,44.775,25.21,46.547,44.092,25.21,46.153,44.09,25.21,45.459,44.329,25.21,46.016,44.708,25.21,45.459,44.599,25.21,46.064,45.208,25.21,45.822,44.775,25.21,46.273,45.399,25.21,46.41,43.399,24.71,47.91,45.399,24.71,47.91,45.208,24.71,45.822,44.775,24.71,46.273,45.399,24.71,46.41,44.775,24.71,46.547,44.599,24.71,46.757,44.329,24.71,46.804,44.708,24.71,45.459,44.599,24.71,46.064,44.329,24.71,46.016,44.09,24.71,45.459,44.092,24.71,46.153,43.59,24.71,45.822,43.999,24.71,46.41,43.399,24.71,46.41,44.092,24.71,46.667,43.399,25.21,50.91,44.092,25.21,52.153,43.399,25.21,52.41,43.999,25.21,52.41,43.59,25.21,52.998,44.092,25.21,52.667,44.09,25.21,53.361,44.329,25.21,52.804,44.708,25.21,53.361,44.599,25.21,52.757,44.775,25.21,52.547,44.329,25.21,52.016,45.399,25.21,50.91,44.599,25.21,52.064,44.775,25.21,52.273,45.399,25.21,52.41,45.208,25.21,52.998,43.399,24.71,52.41,44.092,24.71,52.153,43.399,24.71,50.91,44.329,24.71,52.016,45.399,24.71,50.91,44.599,24.71,52.064,44.775,24.71,52.273,43.999,24.71,52.41,43.59,24.71,52.998,44.092,24.71,52.667,44.09,24.71,53.361,44.329,24.71,52.804,44.708,24.71,53.361,44.599,24.71,52.757,45.208,24.71,52.998,44.775,24.71,52.547,45.399,24.71,52.41,45.399,25.96,46.41,45.208,25.96,45.822,44.708,25.96,45.459,44.09,25.96,45.459,43.59,25.96,45.822,43.399,25.96,46.41,45.399,23.96,52.41,45.208,23.96,52.998,44.708,23.96,53.361,44.09,23.96,53.361,43.59,23.96,52.998,43.399,23.96,52.41,43.399,25.96,52.41,43.59,25.96,52.998,44.09,25.96,53.361,44.708,25.96,53.361,45.208,25.96,52.998,45.399,25.96,52.41,45.399,23.96,46.41,44.092,25.96,46.667,43.999,25.96,46.41,44.092,25.96,46.153,44.329,25.96,46.016,44.599,25.96,46.064,44.775,25.96,46.273,44.775,25.96,46.547,44.599,25.96,46.757,44.329,25.96,46.804,44.092,23.96,52.153,43.999,23.96,52.41,44.092,23.96,52.667,44.329,23.96,52.804,44.599,23.96,52.757,44.775,23.96,52.547,44.775,23.96,52.273,44.599,23.96,52.064,44.329,23.96,52.016,44.092,25.96,52.153,43.999,25.96,52.41,44.092,25.96,52.667,44.329,25.96,52.804,44.599,25.96,52.757,44.775,25.96,52.547,44.775,25.96,52.273,44.599,25.96,52.064,44.329,25.96,52.016,44.092,23.96,46.667,43.999,23.96,46.41,44.092,23.96,46.153,44.329,23.96,46.016,44.599,23.96,46.064,44.775,23.96,46.273,44.775,23.96,46.547,44.599,23.96,46.757,44.329,23.96,46.804,43.399,23.96,46.41,43.59,23.96,45.822,44.09,23.96,45.459,44.708,23.96,45.459,45.208,23.96,45.822,44.903,23.66,52.086,45.005,23.76,52.06,44.999,23.66,52.41,45.099,23.76,52.41,45.005,23.76,52.76,44.749,23.76,51.804,44.648,23.66,51.864,44.399,23.76,51.71,44.313,23.66,51.816,44.049,23.76,51.804,44.006,23.66,51.957,43.792,23.76,52.06,43.823,23.66,52.241,43.699,23.76,52.41,43.823,23.66,52.579,43.792,23.76,52.76,44.006,23.66,52.864,44.049,23.76,53.016,44.313,23.66,53.004,44.399,23.76,53.11,44.648,23.66,52.956,44.749,23.76,53.016,44.903,23.66,52.735,45.005,23.96,52.76,45.099,23.96,52.41,45.005,23.96,52.06,44.749,23.96,51.804,44.399,23.96,51.71,44.049,23.96,51.804,43.792,23.96,52.06,43.699,23.96,52.41,43.792,23.96,52.76,44.049,23.96,53.016,44.399,23.96,53.11,44.749,23.96,53.016,44.799,26.435,52.41,44.705,26.435,52.153,44.705,26.435,52.667,44.468,26.435,52.804,44.468,26.435,52.016,44.199,26.435,52.757,44.199,26.435,52.064,44.023,26.435,52.547,44.023,26.435,52.273,44.799,23.96,52.41,44.705,23.96,52.153,44.468,23.96,52.016,44.199,23.96,52.064,44.023,23.96,52.273,44.023,23.96,52.547,44.199,23.96,52.757,44.468,23.96,52.804,44.705,23.96,52.667,44.035,26.055,52.2,44.052,26.075,52.21,43.979,26.055,52.41,43.999,26.075,52.41,44.035,26.055,52.62,44.052,26.075,52.61,44.189,26.055,52.774,44.199,26.075,52.757,44.399,26.055,52.83,44.399,26.075,52.81,44.609,26.055,52.774,44.599,26.075,52.757,44.762,26.055,52.62,44.745,26.075,52.61,44.819,26.055,52.41,44.799,26.075,52.41,44.762,26.055,52.2,44.745,26.075,52.21,44.609,26.055,52.047,44.599,26.075,52.064,44.399,26.055,51.99,44.399,26.075,52.01,44.189,26.055,52.047,44.199,26.075,52.064,44.052,26.335,52.61,43.999,26.335,52.41,44.052,26.335,52.21,44.199,26.335,52.064,44.399,26.335,52.01,44.599,26.335,52.064,44.745,26.335,52.21,44.799,26.335,52.41,44.745,26.335,52.61,44.599,26.335,52.757,44.399,26.335,52.81,44.199,26.335,52.757,44.078,26.055,52.966,44.72,26.055,52.966,43.756,26.055,52.41,44.078,26.055,51.854,44.72,26.055,51.854,45.041,26.055,52.41,44.035,26.355,52.2,43.979,26.355,52.41,44.035,26.355,52.62,44.189,26.355,52.774,44.399,26.355,52.83,44.609,26.355,52.774,44.762,26.355,52.62,44.819,26.355,52.41,44.762,26.355,52.2,44.609,26.355,52.047,44.399,26.355,51.99,44.189,26.355,52.047,44.078,26.355,52.966,43.756,26.355,52.41,44.72,26.355,52.966,45.041,26.355,52.41,44.72,26.355,51.854,44.078,26.355,51.854,44.106,26.305,51.804,44.056,26.092,51.817,44.056,26.319,51.817,44.02,26.105,51.854,44.02,26.305,51.854,44.106,26.105,51.804,44.691,26.105,51.804,44.741,26.092,51.817,44.691,26.305,51.804,44.741,26.319,51.817,43.728,26.305,52.36,43.714,26.092,52.41,43.714,26.319,52.41,43.728,26.105,52.46,43.728,26.305,52.46,43.728,26.105,52.36,44.02,26.105,52.966,44.02,26.305,52.966,44.056,26.092,53.003,44.056,26.319,53.003,44.106,26.105,53.016,44.106,26.305,53.016,44.691,26.305,53.016,44.741,26.319,53.003,44.691,26.105,53.016,44.778,26.305,51.854,44.778,26.105,51.854,45.07,26.305,52.36,45.07,26.105,52.36,45.083,26.319,52.41,45.07,26.305,52.46,45.083,26.092,52.41,45.07,26.105,52.46,44.778,26.105,52.966,44.741,26.092,53.003,44.778,26.305,52.966,44.035,26.055,46.2,44.052,26.075,46.21,43.979,26.055,46.41,43.999,26.075,46.41,44.035,26.055,46.62,44.052,26.075,46.61,44.189,26.055,46.774,44.199,26.075,46.757,44.399,26.055,46.83,44.399,26.075,46.81,44.609,26.055,46.774,44.599,26.075,46.757,44.762,26.055,46.62,44.745,26.075,46.61,44.819,26.055,46.41,44.799,26.075,46.41,44.762,26.055,46.2,44.745,26.075,46.21,44.609,26.055,46.047,44.599,26.075,46.064,44.399,26.055,45.99,44.399,26.075,46.01,44.189,26.055,46.047,44.199,26.075,46.064,44.052,26.335,46.61,43.999,26.335,46.41,44.052,26.335,46.21,44.199,26.335,46.064,44.399,26.335,46.01,44.599,26.335,46.064,44.745,26.335,46.21,44.799,26.335,46.41,44.745,26.335,46.61,44.599,26.335,46.757,44.399,26.335,46.81,44.199,26.335,46.757,44.078,26.055,46.966,44.72,26.055,46.966,43.756,26.055,46.41,44.078,26.055,45.854,44.72,26.055,45.854,45.041,26.055,46.41,44.035,26.355,46.2,43.979,26.355,46.41,44.035,26.355,46.62,44.189,26.355,46.774,44.399,26.355,46.83,44.609,26.355,46.774,44.762,26.355,46.62,44.819,26.355,46.41,44.762,26.355,46.2,44.609,26.355,46.047,44.399,26.355,45.99,44.189,26.355,46.047,44.078,26.355,46.966,43.756,26.355,46.41,44.72,26.355,46.966,45.041,26.355,46.41,44.72,26.355,45.854,44.078,26.355,45.854,44.106,26.305,45.804,44.056,26.092,45.817,44.056,26.319,45.817,44.02,26.105,45.854,44.02,26.305,45.854,44.106,26.105,45.804,44.691,26.105,45.804,44.741,26.092,45.817,44.691,26.305,45.804,44.741,26.319,45.817,43.728,26.305,46.36,43.714,26.092,46.41,43.714,26.319,46.41,43.728,26.105,46.46,43.728,26.305,46.46,43.728,26.105,46.36,44.02,26.105,46.966,44.02,26.305,46.966,44.056,26.092,47.003,44.056,26.319,47.003,44.106,26.105,47.016,44.106,26.305,47.016,44.691,26.305,47.016,44.741,26.319,47.003,44.691,26.105,47.016,44.778,26.305,45.854,44.778,26.105,45.854,45.07,26.305,46.36,45.07,26.105,46.36,45.083,26.319,46.41,45.07,26.305,46.46,45.083,26.092,46.41,45.07,26.105,46.46,44.778,26.105,46.966,44.741,26.092,47.003,44.778,26.305,46.966],i:[0,1,2,2,1,3,2,3,4,1,0,5,5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,19,19,18,20,19,20,21,21,20,22,21,22,4,4,22,2,22,14,2,2,14,12,2,12,0,0,12,10,0,10,6,6,10,8,14,22,16,16,22,20,16,20,18,23,4,24,24,4,3,24,3,25,25,3,1,25,1,26,26,1,5,26,5,27,27,5,7,27,7,28,28,7,9,28,9,29,29,9,11,29,11,30,30,11,13,30,13,31,31,13,15,31,15,32,32,15,17,32,17,33,33,17,19,33,19,34,34,19,21,34,21,23,23,21,4,35,36,37,37,36,38,38,36,39,38,39,40,40,39,41,40,41,42,42,41,43,23,24,44,44,24,25,44,25,45,45,25,26,45,26,46,46,26,27,46,27,47,47,27,28,47,28,29,47,29,48,48,29,30,48,30,49,49,30,31,49,31,50,50,31,32,50,32,33,50,33,51,51,33,34,51,34,52,52,34,23,52,23,44,45,35,44,44,35,37,44,37,52,52,37,38,52,38,51,51,38,40,51,40,50,50,40,42,50,42,49,49,42,43,49,43,48,48,43,41,48,41,47,47,41,39,47,39,46,46,39,36,46,36,45,45,36,35,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,60,61,53,53,61,54,57,62,55,55,62,63,55,63,53,53,63,64,53,64,60,60,64,65,60,65,61,61,65,66,61,66,54,54,66,67,54,67,56,56,67,68,56,68,58,58,68,69,58,69,59,59,69,70,59,70,57,57,70,62,72,73,71,71,73,74,78,75,77,77,75,76,81,79,80,81,80,82,84,83,86,85,84,86,90,88,87,87,89,90,93,91,92,93,92,94,97,96,95,97,95,98,101,100,102,102,100,99,105,104,103,105,103,106,110,108,109,110,107,108,113,112,111,113,111,114,118,115,116,118,116,117,122,119,121,121,119,120,126,123,124,126,124,125,129,127,128,130,127,129,133,132,134,134,132,131,138,136,135,138,135,137,141,140,142,142,140,139,143,152,144,144,152,153,144,153,145,145,153,154,145,154,151,151,154,155,151,155,150,150,155,156,150,156,149,149,156,157,149,157,148,148,157,158,148,158,147,147,158,159,147,159,146,146,159,160,146,160,143,143,160,152,153,152,161,161,152,160,161,160,162,162,160,159,162,159,163,163,159,164,164,159,158,164,158,165,165,158,157,165,157,156,165,156,166,166,156,155,166,155,167,167,155,154,167,154,168,168,154,169,169,154,153,169,153,161,162,170,161,161,170,171,161,171,169,169,171,172,169,172,168,168,172,173,168,173,167,167,173,174,167,174,166,166,174,175,166,175,165,165,175,176,165,176,164,164,176,177,164,177,163,163,177,178,163,178,162,162,178,170,178,179,170,170,179,180,170,180,181,179,178,182,182,178,177,182,177,176,182,176,183,183,176,175,183,175,184,184,175,174,184,174,185,185,174,186,186,174,173,186,173,187,187,173,172,187,172,171,187,171,181,181,171,170,179,188,180,180,188,189,180,189,181,181,189,190,181,190,187,187,190,191,187,191,186,186,191,192,186,192,185,185,192,193,185,193,184,184,193,194,184,194,183,183,194,195,183,195,182,182,195,196,182,196,179,179,196,188,188,196,189,189,196,190,190,196,195,190,195,191,191,195,194,191,194,192,192,194,193,205,215,197,197,215,216,197,216,198,198,216,217,198,217,199,199,217,218,199,218,200,200,218,219,200,219,201,201,219,220,201,220,202,202,220,221,202,221,203,203,221,222,203,222,204,204,222,223,204,223,205,205,223,215,208,224,207,207,224,225,207,225,206,206,225,226,206,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,229,211,229,212,212,229,230,212,230,213,213,230,231,213,231,214,214,231,232,214,232,208,208,232,224,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,234,233,242,242,233,243,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,241,241,249,239,250,237,251,251,237,239,252,253,254,254,253,255,254,255,251,251,255,256,251,256,257,252,258,253,253,258,259,259,258,260,260,258,261,260,261,262,262,261,263,262,263,264,264,263,265,264,265,266,266,265,250,266,250,257,257,250,251,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,268,267,278,278,267,279,278,279,280,280,279,281,281,279,282,281,282,277,277,282,283,277,283,275,284,285,286,286,285,287,286,287,288,288,287,289,288,289,290,285,284,291,291,284,292,291,292,293,293,292,294,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,290,290,300,288,267,286,279,279,286,288,249,247,301,301,247,302,302,247,245,302,245,303,303,245,243,303,243,304,304,243,233,304,233,305,305,233,306,306,233,235,307,300,308,308,300,298,308,298,296,308,296,309,309,296,294,309,294,310,310,294,292,310,292,311,311,292,284,311,284,312,269,271,313,313,271,314,314,271,273,314,273,315,315,273,275,315,275,316,316,275,283,316,283,317,317,283,318,318,283,282,223,251,215,215,251,239,215,239,216,216,239,301,216,301,217,217,301,318,217,318,218,218,318,279,218,279,219,219,279,220,220,279,288,220,288,221,221,288,307,221,307,222,222,307,319,222,319,223,223,319,251,254,251,319,239,249,301,318,282,279,288,300,307,320,236,321,321,236,234,321,234,322,322,234,242,322,242,323,323,242,244,323,244,324,324,244,246,324,246,325,325,246,248,325,248,326,326,248,241,326,241,327,327,241,240,327,240,328,328,240,238,328,238,320,320,238,236,329,285,330,330,285,291,330,291,331,331,291,293,331,293,332,332,293,295,332,295,333,333,295,297,333,297,334,334,297,299,334,299,335,335,299,290,335,290,336,336,290,289,336,289,337,337,289,287,337,287,329,329,287,285,268,338,270,270,338,339,270,339,272,272,339,340,272,340,274,274,340,341,274,341,276,276,341,342,276,342,277,277,342,343,277,343,281,281,343,344,281,344,280,280,344,345,280,345,278,278,345,346,278,346,268,268,346,338,266,347,264,264,347,348,264,348,262,262,348,349,262,349,260,260,349,350,260,350,259,259,350,351,259,351,253,253,351,352,253,352,255,255,352,353,255,353,256,256,353,354,256,354,257,257,354,355,257,355,266,266,355,347,232,237,224,224,237,250,224,250,225,225,250,226,226,250,356,226,356,312,232,231,237,237,231,306,237,306,235,306,231,313,313,231,230,313,230,267,267,230,229,267,229,286,286,229,228,286,228,227,286,227,312,312,227,226,250,265,356,312,284,286,267,269,313,356,265,357,357,265,263,357,263,261,357,261,358,358,261,258,358,258,359,359,258,252,359,252,360,360,252,254,360,254,319,302,326,301,301,326,344,301,344,318,318,344,317,317,344,343,317,343,316,316,343,342,316,342,341,326,302,325,325,302,303,325,303,324,324,303,323,323,303,304,323,304,322,322,304,321,321,304,305,321,305,306,321,306,320,320,306,313,320,313,338,338,313,339,339,313,314,339,314,315,316,341,315,315,341,340,315,340,339,344,326,345,345,326,327,345,327,346,346,327,328,346,328,338,338,328,320,357,348,356,356,348,347,356,347,329,329,347,337,337,347,355,337,355,336,336,355,354,336,354,335,335,354,353,335,353,307,307,353,319,319,353,360,360,353,352,360,352,359,359,352,351,359,351,350,357,358,348,348,358,349,349,358,350,350,358,359,307,308,335,335,308,334,334,308,309,334,309,333,333,309,332,332,309,310,332,310,331,331,310,330,330,310,311,330,311,312,330,312,329,329,312,356,361,362,363,363,362,364,363,364,365,362,361,366,366,361,367,366,367,368,368,367,369,368,369,370,370,369,371,370,371,372,372,371,373,372,373,374,374,373,375,374,375,376,376,375,377,376,377,378,378,377,379,378,379,380,380,379,381,380,381,382,382,381,383,382,383,365,365,383,363,383,375,363,363,375,373,363,373,361,361,373,371,361,371,367,367,371,369,375,383,377,377,383,381,377,381,379,384,365,385,385,365,364,385,364,386,386,364,362,386,362,387,387,362,366,387,366,388,388,366,368,388,368,389,389,368,370,389,370,390,390,370,372,390,372,391,391,372,374,391,374,392,392,374,376,392,376,393,393,376,378,393,378,394,394,378,380,394,380,395,395,380,382,395,382,384,384,382,365,396,397,398,398,397,399,399,397,400,399,400,401,401,400,402,401,402,403,403,402,404,384,385,405,405,385,386,405,386,406,406,386,387,406,387,407,407,387,388,407,388,408,408,388,389,408,389,390,408,390,409,409,390,391,409,391,410,410,391,392,410,392,411,411,392,393,411,393,394,411,394,412,412,394,395,412,395,413,413,395,384,413,384,405,406,396,405,405,396,398,405,398,413,413,398,399,413,399,412,412,399,401,412,401,411,411,401,403,411,403,410,410,403,404,410,404,409,409,404,402,409,402,408,408,402,400,408,400,407,407,400,397,407,397,406,406,397,396,472,465,464,469,456,473,473,456,467,473,467,466,474,475,476,476,475,477,476,477,478,474,479,475,475,479,453,453,479,480,453,480,454,454,480,481,474,482,479,479,482,480,476,473,474,474,473,472,474,472,482,482,472,483,484,485,486,486,485,487,486,487,488,484,489,485,487,490,488,488,490,491,485,452,487,487,452,450,487,450,490,490,450,492,475,453,477,477,453,452,477,452,489,489,452,485,491,492,493,493,492,494,493,494,495,491,490,492,486,488,469,469,488,491,469,491,468,468,491,493,493,495,468,468,495,496,468,496,470,470,496,497,494,498,495,495,498,496,499,481,483,483,481,480,483,480,482,499,500,481,499,501,500,500,501,502,483,472,499,499,472,471,499,471,501,501,471,503,504,505,503,503,505,502,503,502,501,504,506,505,481,500,454,454,500,502,454,502,455,455,502,505,505,506,455,455,506,507,455,507,451,451,507,508,496,508,497,497,508,507,497,507,509,496,498,508,503,471,504,504,471,470,504,470,509,509,470,497,492,450,494,494,450,451,494,451,498,498,451,508,477,489,478,478,489,484,476,478,473,473,478,484,473,484,469,469,484,486,504,509,506,506,509,507,414,415,416,416,415,417,416,417,418,418,417,419,418,419,420,420,419,421,420,421,422,422,421,423,422,423,424,424,423,425,424,425,426,426,425,427,426,427,428,428,427,429,428,429,430,430,429,431,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,414,414,437,415,438,419,439,439,419,417,439,417,440,440,417,415,440,415,441,441,415,437,441,437,442,442,437,435,442,435,443,443,435,433,443,433,444,444,433,431,444,431,445,445,431,429,445,429,446,446,429,427,446,427,447,447,427,425,447,425,448,448,425,423,448,423,449,449,423,421,449,421,438,438,421,419,450,422,451,451,422,424,451,424,426,452,418,450,450,418,420,450,420,422,453,414,452,452,414,416,452,416,418,454,434,453,453,434,436,453,436,414,455,430,454,454,430,432,454,432,434,451,426,455,455,426,428,455,428,430,440,456,439,439,456,457,439,457,438,438,457,458,438,458,449,449,458,459,449,459,448,448,459,460,448,460,447,447,460,461,447,461,446,446,461,462,446,462,445,445,462,463,445,463,444,444,463,464,444,464,443,443,464,465,443,465,442,442,465,466,442,466,441,441,466,467,441,467,440,440,467,456,468,458,469,469,458,457,469,457,456,470,460,468,468,460,459,468,459,458,471,462,470,470,462,461,470,461,460,472,464,471,471,464,463,471,463,462,473,466,472,472,466,465,601,602,551,551,602,603,551,603,547,547,603,604,592,604,593,593,604,603,593,603,605,592,594,604,599,567,600,600,567,566,600,566,605,605,566,593,588,546,590,590,546,547,590,547,594,594,547,604,573,585,574,574,585,580,572,574,569,569,574,580,569,580,565,565,580,582,600,605,602,602,605,603,510,511,512,512,511,513,512,513,514,514,513,515,514,515,516,516,515,517,516,517,518,518,517,519,518,519,520,520,519,521,520,521,522,522,521,523,522,523,524,524,523,525,524,525,526,526,525,527,526,527,528,528,527,529,528,529,530,530,529,531,530,531,532,532,531,533,532,533,510,510,533,511,534,515,535,535,515,513,535,513,536,536,513,511,536,511,537,537,511,533,537,533,538,538,533,531,538,531,539,539,531,529,539,529,540,540,529,527,540,527,541,541,527,525,541,525,542,542,525,523,542,523,543,543,523,521,543,521,544,544,521,519,544,519,545,545,519,517,545,517,534,534,517,515,546,518,547,547,518,520,547,520,522,548,514,546,546,514,516,546,516,518,549,510,548,548,510,512,548,512,514,550,530,549,549,530,532,549,532,510,551,526,550,550,526,528,550,528,530,547,522,551,551,522,524,551,524,526,536,552,535,535,552,553,535,553,534,534,553,554,534,554,545,545,554,555,545,555,544,544,555,556,544,556,543,543,556,557,543,557,542,542,557,558,542,558,541,541,558,559,541,559,540,540,559,560,540,560,539,539,560,561,539,561,538,538,561,562,538,562,537,537,562,563,537,563,536,536,563,552,564,554,565,565,554,553,565,553,552,566,556,564,564,556,555,564,555,554,567,558,566,566,558,557,566,557,556,568,560,567,567,560,559,567,559,558,569,562,568,568,562,561,568,561,560,565,552,569,569,552,563,569,563,562,570,571,572,572,571,573,572,573,574,570,575,571,571,575,549,549,575,576,549,576,550,550,576,577,570,578,575,575,578,576,572,569,570,570,569,568,570,568,578,578,568,579,580,581,582,582,581,583,582,583,584,580,585,581,583,586,584,584,586,587,581,548,583,583,548,546,583,546,586,586,546,588,571,549,573,573,549,548,573,548,585,585,548,581,587,588,589,589,588,590,589,590,591,587,586,588,582,584,565,565,584,587,565,587,564,564,587,589,589,591,564,564,591,592,564,592,566,566,592,593,590,594,591,591,594,592,595,577,579,579,577,576,579,576,578,595,596,577,595,597,596,596,597,598,579,568,595,595,568,567,595,567,597,597,567,599,600,601,599,599,601,598,599,598,597,600,602,601,577,596,550,550,596,598,550,598,551,551,598,601]},kurbel_a:{v:[46.106,26.21,42.884,45.948,26.21,43.161,46.106,23.71,42.884,45.948,23.71,43.161,45.91,23.71,43.478,45.91,26.21,43.478,45.999,26.21,43.784,45.999,23.71,43.784,47.101,23.71,45.886,46.305,24.71,44.367,46.305,25.21,44.367,47.101,26.21,45.886,47.101,25.21,45.886,47.101,24.71,45.886,48.765,26.21,38.443,48.882,23.71,38.517,48.967,26.21,38.627,49.009,23.71,38.76,49.004,26.21,38.899,48.951,23.71,39.027,48.858,26.21,39.13,48.735,23.71,39.194,48.597,26.21,39.213,48.461,23.71,39.183,48.344,26.21,39.109,48.259,23.71,38.999,48.217,26.21,38.867,48.222,23.71,38.728,48.275,26.21,38.599,48.369,23.71,38.497,48.492,26.21,38.432,48.629,23.71,38.413,44.932,26.21,42.813,45.049,23.71,42.887,45.134,26.21,42.997,45.176,23.71,43.129,45.171,26.21,43.268,45.118,23.71,43.396,45.025,26.21,43.499,44.902,23.71,43.564,44.764,26.21,43.582,44.628,23.71,43.553,44.511,26.21,43.478,44.426,23.71,43.368,44.384,26.21,43.236,44.389,23.71,43.097,44.442,26.21,42.969,44.536,23.71,42.866,44.659,26.21,42.801,44.796,23.71,42.783,46.545,26.21,45.887,46.545,25.21,45.887,46.747,26.21,46.071,46.747,25.21,46.071,46.784,26.21,46.343,46.784,25.21,46.343,46.637,26.21,46.574,46.637,25.21,46.574,46.377,26.21,46.657,46.377,25.21,46.657,46.124,26.21,46.553,46.124,25.21,46.553,45.996,26.21,46.311,45.996,25.21,46.311,46.055,26.21,46.043,46.055,25.21,46.043,46.271,26.21,45.876,46.271,25.21,45.876,46.545,24.71,45.887,46.662,23.71,45.962,46.747,24.71,46.071,46.789,23.71,46.204,46.784,24.71,46.343,46.731,23.71,46.471,46.637,24.71,46.574,46.514,23.71,46.638,46.377,24.71,46.657,46.241,23.71,46.627,46.124,24.71,46.553,46.039,23.71,46.443,45.996,24.71,46.311,46.002,23.71,46.172,46.055,24.71,46.043,46.148,23.71,45.941,46.271,24.71,45.876,46.409,23.71,45.858,44.888,24.71,45.11,44.888,25.21,45.11,47.184,24.71,46.373,45.684,24.71,46.629,46.038,24.71,46.974,46.527,24.71,47.046,46.965,24.71,46.816,47.184,25.21,46.373,46.965,25.21,46.816,46.527,25.21,47.046,46.038,25.21,46.974,45.684,25.21,46.629,45.684,23.71,46.629,44.072,23.71,43.554,44.072,26.21,43.554,45.684,26.21,46.629,47.184,23.71,46.373,46.965,23.71,46.816,46.527,23.71,47.046,46.038,23.71,46.974,46.038,26.21,46.974,46.527,26.21,47.046,46.965,26.21,46.816,47.184,26.21,46.373,49.214,23.71,39.341,49.214,26.21,39.341,48.012,26.21,38.286,48.437,26.21,38.033,48.012,23.71,38.286,48.437,23.71,38.033,48.929,26.21,38.078,48.929,23.71,38.078,49.301,26.21,38.404,49.301,23.71,38.404,49.41,26.21,38.886,49.41,23.71,38.886,44.179,26.21,42.655,44.179,23.71,42.655,43.983,26.21,43.248,43.983,23.71,43.248,44.02,23.71,42.932,44.02,26.21,42.932,46.95,23.41,46.034,47.054,23.51,46.029,46.982,23.41,46.371,47.08,23.51,46.39,46.922,23.51,46.716,46.851,23.51,45.728,46.741,23.41,45.769,46.526,23.51,45.57,46.422,23.41,45.658,46.164,23.51,45.596,46.093,23.41,45.738,45.864,23.51,45.799,45.86,23.41,45.982,45.706,23.51,46.125,45.796,23.41,46.314,45.731,23.51,46.486,45.921,23.41,46.628,45.934,23.51,46.786,46.196,23.41,46.824,46.26,23.51,46.945,46.534,23.41,46.84,46.622,23.51,46.919,46.827,23.41,46.671,46.922,23.71,46.716,47.08,23.71,46.39,47.054,23.71,46.029,46.851,23.71,45.728,46.526,23.71,45.57,46.164,23.71,45.596,45.864,23.71,45.799,45.706,23.71,46.125,45.731,23.71,46.486,45.934,23.71,46.786,46.26,23.71,46.945,46.622,23.71,46.919,46.786,26.185,46.333,46.742,26.185,46.063,46.645,26.185,46.568,46.386,26.185,46.657,46.536,26.185,45.884,46.131,26.185,46.559,46.262,26.185,45.879,45.998,26.185,46.32,46.05,26.185,46.052,46.786,23.71,46.333,46.742,23.71,46.063,46.536,23.71,45.884,46.262,23.71,45.879,46.05,23.71,46.052,45.998,23.71,46.32,46.131,23.71,46.559,46.386,23.71,46.657,46.645,23.71,46.568],i:[56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},kurbel_b:{v:[46.106,23.71,55.952,45.948,23.71,55.675,46.106,26.21,55.952,45.948,26.21,55.675,45.91,26.21,55.359,45.91,23.71,55.359,45.998,23.71,55.053,45.998,26.21,55.053,47.1,26.21,52.95,46.304,25.21,54.469,46.304,24.71,54.469,47.1,23.71,52.95,47.1,24.71,52.95,47.1,25.21,52.95,48.767,23.71,60.392,48.884,26.21,60.318,48.969,23.71,60.208,49.011,26.21,60.075,49.006,23.71,59.937,48.953,26.21,59.808,48.859,23.71,59.705,48.736,26.21,59.641,48.598,23.71,59.622,48.463,26.21,59.652,48.345,23.71,59.726,48.261,26.21,59.836,48.218,23.71,59.969,48.224,26.21,60.108,48.277,23.71,60.236,48.37,26.21,60.339,48.494,23.71,60.403,48.631,26.21,60.422,44.932,23.71,56.024,45.05,26.21,55.95,45.134,23.71,55.84,45.176,26.21,55.707,45.171,23.71,55.569,45.118,26.21,55.44,45.024,23.71,55.337,44.901,26.21,55.273,44.764,23.71,55.255,44.628,26.21,55.284,44.511,23.71,55.359,44.426,26.21,55.469,44.384,23.71,55.601,44.389,26.21,55.74,44.442,23.71,55.868,44.536,26.21,55.971,44.659,23.71,56.035,44.796,26.21,56.054,46.544,23.71,52.949,46.544,24.71,52.949,46.746,23.71,52.764,46.746,24.71,52.764,46.782,23.71,52.493,46.782,24.71,52.493,46.636,23.71,52.262,46.636,24.71,52.262,46.375,23.71,52.179,46.375,24.71,52.179,46.122,23.71,52.283,46.122,24.71,52.283,45.995,23.71,52.526,45.995,24.71,52.526,46.054,23.71,52.793,46.054,24.71,52.793,46.27,23.71,52.96,46.27,24.71,52.96,46.544,25.21,52.949,46.661,26.21,52.874,46.746,25.21,52.764,46.788,26.21,52.632,46.782,25.21,52.493,46.729,26.21,52.365,46.636,25.21,52.262,46.513,26.21,52.198,46.375,25.21,52.179,46.239,26.21,52.209,46.122,25.21,52.283,46.037,26.21,52.393,45.995,25.21,52.526,46.001,26.21,52.664,46.054,25.21,52.793,46.147,26.21,52.895,46.27,25.21,52.96,46.408,26.21,52.978,44.887,25.21,53.727,44.887,24.71,53.727,47.183,25.21,52.463,45.683,25.21,52.207,46.037,25.21,51.862,46.526,25.21,51.79,46.964,25.21,52.02,47.183,24.71,52.463,46.964,24.71,52.02,46.526,24.71,51.79,46.037,24.71,51.862,45.683,24.71,52.207,45.683,26.21,52.207,44.071,26.21,55.283,44.071,23.71,55.283,45.683,23.71,52.207,47.183,26.21,52.463,46.964,26.21,52.02,46.526,26.21,51.79,46.037,26.21,51.862,46.037,23.71,51.862,46.526,23.71,51.79,46.964,23.71,52.02,47.183,23.71,52.463,49.216,26.21,59.494,49.216,23.71,59.494,48.014,23.71,60.55,48.439,23.71,60.802,48.014,26.21,60.55,48.439,26.21,60.802,48.931,23.71,60.757,48.931,26.21,60.757,49.303,23.71,60.431,49.303,26.21,60.431,49.411,23.71,59.948,49.411,26.21,59.948,44.179,23.71,56.182,44.179,26.21,56.182,43.983,23.71,55.589,43.983,26.21,55.589,44.021,26.21,55.905,44.021,23.71,55.905,46.826,23.41,52.165,46.921,23.51,52.121,46.981,23.41,52.465,47.079,23.51,52.447,47.053,23.51,52.808,46.621,23.51,51.917,46.533,23.41,51.996,46.259,23.51,51.891,46.195,23.41,52.012,45.933,23.51,52.05,45.92,23.41,52.208,45.73,23.51,52.35,45.794,23.41,52.522,45.704,23.51,52.711,45.858,23.41,52.854,45.862,23.51,53.037,46.091,23.41,53.098,46.162,23.51,53.24,46.42,23.41,53.178,46.524,23.51,53.266,46.739,23.41,53.068,46.85,23.51,53.108,46.949,23.41,52.802,47.053,23.71,52.808,47.079,23.71,52.447,46.921,23.71,52.121,46.621,23.71,51.917,46.259,23.71,51.891,45.933,23.71,52.05,45.73,23.71,52.35,45.704,23.71,52.711,45.862,23.71,53.037,46.162,23.71,53.24,46.524,23.71,53.266,46.85,23.71,53.108,46.784,26.185,52.503,46.644,26.185,52.268,46.741,26.185,52.773,46.534,26.185,52.953,46.385,26.185,52.179,46.261,26.185,52.957,46.13,26.185,52.276,46.048,26.185,52.784,45.997,26.185,52.515,46.784,23.71,52.503,46.644,23.71,52.268,46.385,23.71,52.179,46.13,23.71,52.276,45.997,23.71,52.515,46.048,23.71,52.784,46.261,23.71,52.957,46.534,23.71,52.953,46.741,23.71,52.773],i:[44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},lenker_a:{v:[46.107,22.46,45.195,46.107,22.96,45.195,46.249,22.46,45.428,46.249,22.96,45.428,46.509,22.46,45.515,46.509,22.96,45.515,46.763,22.46,45.415,46.763,22.96,45.415,46.894,22.46,45.175,46.894,22.96,45.175,46.84,22.46,44.907,46.84,22.96,44.907,46.626,22.46,44.736,46.626,22.96,44.736,46.352,22.46,44.743,46.352,22.96,44.743,46.147,22.46,44.924,46.147,22.96,44.924,49.222,22.46,41.284,49.222,22.96,41.284,49.365,22.46,41.518,49.365,22.96,41.518,49.625,22.46,41.605,49.625,22.96,41.605,49.879,22.46,41.505,49.879,22.96,41.505,50.01,22.46,41.264,50.01,22.96,41.264,49.956,22.46,40.996,49.956,22.96,40.996,49.742,22.46,40.826,49.742,22.96,40.826,49.468,22.46,40.832,49.468,22.96,40.832,49.263,22.46,41.014,49.263,22.96,41.014,45.912,22.96,44.648,49.028,22.96,40.737,45.912,22.46,44.648,49.028,22.46,40.737,47.085,22.96,45.583,46.699,22.96,45.838,47.085,22.46,45.583,46.699,22.46,45.838,46.235,22.96,45.818,46.235,22.46,45.818,45.873,22.96,45.529,45.873,22.46,45.529,45.749,22.96,45.082,45.749,22.46,45.082,50.201,22.96,41.672,50.201,22.46,41.672,49.415,22.96,40.482,49.415,22.46,40.482,49.878,22.96,40.502,49.878,22.46,40.502,50.24,22.96,40.791,50.24,22.46,40.791,50.364,22.96,41.238,50.364,22.46,41.238],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},lenker_b:{v:[46.107,22.96,53.625,46.107,22.46,53.625,46.25,22.96,53.392,46.25,22.46,53.392,46.51,22.96,53.305,46.51,22.46,53.305,46.764,22.96,53.406,46.764,22.46,53.406,46.894,22.96,53.647,46.894,22.46,53.647,46.839,22.96,53.915,46.839,22.46,53.915,46.625,22.96,54.085,46.625,22.46,54.085,46.351,22.96,54.077,46.351,22.46,54.077,46.147,22.96,53.895,46.147,22.46,53.895,49.211,22.96,57.544,49.211,22.46,57.544,49.355,22.96,57.311,49.355,22.46,57.311,49.614,22.96,57.225,49.614,22.46,57.225,49.869,22.96,57.326,49.869,22.46,57.326,49.999,22.96,57.567,49.999,22.46,57.567,49.944,22.96,57.835,49.944,22.46,57.835,49.729,22.96,58.005,49.729,22.46,58.005,49.456,22.96,57.997,49.456,22.46,57.997,49.251,22.96,57.815,49.251,22.46,57.815,45.911,22.46,54.171,49.015,22.46,58.091,45.911,22.96,54.171,49.015,22.96,58.091,47.087,22.46,53.24,46.701,22.46,52.983,47.087,22.96,53.24,46.701,22.96,52.983,46.238,22.46,53.002,46.238,22.96,53.002,45.874,22.46,53.29,45.874,22.96,53.29,45.749,22.46,53.736,45.749,22.96,53.736,50.191,22.46,57.159,50.191,22.96,57.159,49.401,22.46,58.347,49.401,22.96,58.347,49.864,22.46,58.328,49.864,22.96,58.328,50.227,22.46,58.04,50.227,22.96,58.04,50.352,22.46,57.594,50.352,22.96,57.594],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},koppel_a:{v:[44.113,25.21,46.69,44.113,24.71,46.69,44,25.21,46.441,44,24.71,46.441,44.073,25.21,46.177,44.073,24.71,46.177,44.299,25.21,46.023,44.299,24.71,46.023,44.572,25.21,46.05,44.572,24.71,46.05,44.763,25.21,46.245,44.763,24.71,46.245,44.784,25.21,46.518,44.784,24.71,46.518,44.625,25.21,46.74,44.625,24.71,46.74,44.36,25.21,46.808,44.36,24.71,46.808,46.107,25.21,46.537,46.107,24.71,46.537,45.994,25.21,46.288,45.994,24.71,46.288,46.068,25.21,46.024,46.068,24.71,46.024,46.293,25.21,45.87,46.293,24.71,45.87,46.566,25.21,45.897,46.566,24.71,45.897,46.757,25.21,46.092,46.757,24.71,46.092,46.778,25.21,46.365,46.778,24.71,46.365,46.619,25.21,46.587,46.619,24.71,46.587,46.354,25.21,46.655,46.354,24.71,46.655,44.452,24.71,47.108,46.446,24.71,46.955,44.452,25.21,47.108,46.446,25.21,46.955,44.345,24.71,45.712,44.003,24.71,45.833,44.345,25.21,45.712,44.003,25.21,45.833,43.767,24.71,46.108,43.767,25.21,46.108,43.701,24.71,46.464,43.701,25.21,46.464,43.821,24.71,46.806,43.821,25.21,46.806,44.096,24.71,47.041,44.096,25.21,47.041,46.339,24.71,45.559,46.339,25.21,45.559,46.788,24.71,46.835,46.788,25.21,46.835,47.024,24.71,46.56,47.024,25.21,46.56,47.091,24.71,46.204,47.091,25.21,46.204,46.97,24.71,45.862,46.97,25.21,45.862,46.695,24.71,45.626,46.695,25.21,45.626],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52]},koppel_b:{v:[44.072,25.21,52.641,44.072,24.71,52.641,44,25.21,52.377,44,24.71,52.377,44.115,25.21,52.128,44.115,24.71,52.128,44.363,25.21,52.012,44.363,24.71,52.012,44.627,25.21,52.082,44.627,24.71,52.082,44.785,25.21,52.306,44.785,24.71,52.306,44.762,25.21,52.578,44.762,24.71,52.578,44.569,25.21,52.772,44.569,24.71,52.772,44.296,25.21,52.797,44.296,24.71,52.797,46.065,25.21,52.809,46.065,24.71,52.809,45.993,25.21,52.545,45.993,24.71,52.545,46.108,25.21,52.297,46.108,24.71,52.297,46.356,25.21,52.18,46.356,24.71,52.18,46.62,25.21,52.25,46.62,24.71,52.25,46.778,25.21,52.474,46.778,24.71,52.474,46.755,25.21,52.747,46.755,24.71,52.747,46.562,25.21,52.941,46.562,24.71,52.941,46.289,25.21,52.965,46.289,24.71,52.965,44.34,24.71,53.108,46.333,24.71,53.276,44.34,25.21,53.108,46.333,25.21,53.276,44.458,24.71,51.713,44.101,24.71,51.777,44.458,25.21,51.713,44.101,25.21,51.777,43.824,24.71,52.01,43.824,25.21,52.01,43.701,24.71,52.351,43.701,25.21,52.351,43.765,24.71,52.708,43.765,25.21,52.708,43.999,24.71,52.985,43.999,25.21,52.985,46.451,24.71,51.881,46.451,25.21,51.881,46.689,24.71,53.212,46.689,25.21,53.212,46.966,24.71,52.979,46.966,25.21,52.979,47.089,24.71,52.638,47.089,25.21,52.638,47.025,24.71,52.281,47.025,25.21,52.281,46.791,24.71,52.004,46.791,25.21,52.004],i:[32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52,0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33]},backe_a:{v:[50.309,26.21,38.384,50.309,23.71,38.384,50.904,26.21,43.779,50.904,23.71,43.779,48.964,26.21,38.62,48.793,26.21,38.034,48.863,26.21,38.501,48.725,26.21,38.429,50.012,26.21,41.161,49.965,26.21,41.012,49.865,26.21,40.893,50.245,26.21,43.852,49.927,26.21,41.455,49.999,26.21,41.316,49.807,26.21,41.555,50.085,26.21,43.843,49.936,26.21,43.785,49.813,26.21,43.683,49.729,26.21,43.548,47.875,26.21,39.122,49.264,26.21,41.397,49.364,26.21,41.517,49.503,26.21,41.589,47.819,26.21,38.911,48.215,26.21,38.857,48.263,26.21,39.006,48.363,26.21,39.125,47.822,26.21,38.692,47.885,26.21,38.482,48.229,26.21,38.702,48.002,26.21,38.297,48.164,26.21,38.151,48.36,26.21,38.054,48.42,26.21,38.463,48.301,26.21,38.563,48.569,26.21,38.416,48.575,26.21,38.014,49.217,26.21,41.249,48.501,26.21,39.197,49.23,26.21,41.093,48.657,26.21,39.211,49.302,26.21,40.955,48.806,26.21,39.164,49.422,26.21,40.854,48.925,26.21,39.063,49.571,26.21,40.807,48.997,26.21,38.925,49.726,26.21,40.821,49.011,26.21,38.769,49.658,26.21,41.602,48.793,23.71,38.034,48.964,23.71,38.62,49.011,23.71,38.769,49.726,23.71,40.821,48.997,23.71,38.925,49.571,23.71,40.807,49.422,23.71,40.854,48.925,23.71,39.063,49.302,23.71,40.955,48.806,23.71,39.164,49.23,23.71,41.093,48.657,23.71,39.211,48.501,23.71,39.197,48.575,23.71,38.014,48.725,23.71,38.429,48.863,23.71,38.501,48.569,23.71,38.416,48.36,23.71,38.054,48.42,23.71,38.463,48.301,23.71,38.563,48.164,23.71,38.151,48.229,23.71,38.702,48.002,23.71,38.297,48.215,23.71,38.857,47.885,23.71,38.482,47.822,23.71,38.692,47.819,23.71,38.911,47.875,23.71,39.122,48.263,23.71,39.006,48.363,23.71,39.125,49.217,23.71,41.249,49.264,23.71,41.397,49.729,23.71,43.548,49.364,23.71,41.517,49.503,23.71,41.589,49.658,23.71,41.602,49.807,23.71,41.555,49.936,23.71,43.785,50.085,23.71,43.843,49.813,23.71,43.683,50.245,23.71,43.852,49.927,23.71,41.455,49.999,23.71,41.316,50.012,23.71,41.161,49.965,23.71,41.012,49.865,23.71,40.893,48.793,22.96,38.034,61.667,22.96,41.01,61.667,26.96,41.01,48.793,26.96,38.034,48.575,26.96,38.014,48.36,26.96,38.054,48.164,26.96,38.151,48.002,26.96,38.297,47.885,26.96,38.482,47.822,26.96,38.692,47.819,26.96,38.911,47.875,26.96,39.122,49.729,26.96,43.548,49.813,26.96,43.683,49.936,26.96,43.785,50.085,26.96,43.843,50.245,26.96,43.852,49.264,26.96,41.397,49.217,26.96,41.249,49.23,26.96,41.093,49.302,26.96,40.955,49.422,26.96,40.854,49.571,26.96,40.807,49.726,26.96,40.821,49.865,26.96,40.893,49.965,26.96,41.012,50.012,26.96,41.161,49.999,26.96,41.316,49.927,26.96,41.455,49.807,26.96,41.555,49.658,26.96,41.602,49.503,26.96,41.589,49.364,26.96,41.517,48.263,26.96,39.006,48.215,26.96,38.857,48.229,26.96,38.702,48.301,26.96,38.563,48.42,26.96,38.463,48.569,26.96,38.416,48.725,26.96,38.429,48.863,26.96,38.501,48.964,26.96,38.62,49.011,26.96,38.769,48.997,26.96,38.925,48.925,26.96,39.063,48.806,26.96,39.164,48.657,26.96,39.211,48.501,26.96,39.197,48.363,26.96,39.125,49.264,22.96,41.397,49.217,22.96,41.249,49.23,22.96,41.093,49.302,22.96,40.955,49.422,22.96,40.854,49.571,22.96,40.807,49.726,22.96,40.821,49.865,22.96,40.893,49.965,22.96,41.012,50.012,22.96,41.161,49.999,22.96,41.316,49.927,22.96,41.455,49.807,22.96,41.555,49.658,22.96,41.602,49.503,22.96,41.589,49.364,22.96,41.517,48.263,22.96,39.006,48.215,22.96,38.857,48.229,22.96,38.702,48.301,22.96,38.563,48.42,22.96,38.463,48.569,22.96,38.416,48.725,22.96,38.429,48.863,22.96,38.501,48.964,22.96,38.62,49.011,22.96,38.769,48.997,22.96,38.925,48.925,22.96,39.063,48.806,22.96,39.164,48.657,22.96,39.211,48.501,22.96,39.197,48.363,22.96,39.125,50.245,22.96,43.852,50.085,22.96,43.843,49.936,22.96,43.785,49.813,22.96,43.683,49.729,22.96,43.548,47.875,22.96,39.122,47.819,22.96,38.911,47.822,22.96,38.692,47.885,22.96,38.482,48.002,22.96,38.297,48.164,22.96,38.151,48.36,22.96,38.054,48.575,22.96,38.014,61.901,26.96,41.136,61.901,22.96,41.136,61.831,26.96,41.08,61.831,22.96,41.08,61.752,22.96,41.038,61.752,26.96,41.038,62.464,22.96,41.678,62.464,26.96,41.678,62.172,26.96,42.535,62.172,22.96,42.535,62.327,26.96,42.492,62.327,22.96,42.492,62.461,22.96,42.402,62.461,26.96,42.402,62.558,22.96,42.274,62.558,26.96,42.274,62.61,22.96,42.121,62.61,26.96,42.121,62.611,22.96,41.96,62.611,26.96,41.96,62.561,22.96,41.807,62.561,26.96,41.807,60.264,22.96,42.746,60.264,26.96,42.746,54.14,22.96,43.422,54.463,22.96,43.053,54.14,26.96,43.422,54.463,26.96,43.053,54.826,22.96,42.723,54.826,26.96,42.723,55.224,22.96,42.437,55.224,26.96,42.437,55.653,22.96,42.198,55.653,26.96,42.198,56.105,22.96,42.009,56.105,26.96,42.009,56.576,22.96,41.873,56.576,26.96,41.873,57.06,22.96,41.792,57.06,26.96,41.792,57.549,22.96,41.766,57.549,26.96,41.766,58.039,22.96,41.796,58.039,26.96,41.796,58.522,22.96,41.881,58.522,26.96,41.881,58.992,22.96,42.021,58.992,26.96,42.021,59.443,22.96,42.214,59.443,26.96,42.214,59.869,22.96,42.456,59.869,26.96,42.456,49.833,22.16,40.646,49.869,22.26,40.553,50.141,22.16,40.917,50.229,22.26,40.869,50.203,22.16,41.323,50.301,22.26,41.343,49.989,22.16,41.673,50.051,22.26,41.752,49.6,22.16,41.805,49.598,22.26,41.905,49.218,22.16,41.655,49.152,22.26,41.73,49.021,22.16,41.295,48.922,22.26,41.31,49.102,22.16,40.892,49.017,22.26,40.84,49.423,22.16,40.636,49.391,22.26,40.541,50.301,22.46,41.343,50.229,22.46,40.869,49.869,22.46,40.553,49.391,22.46,40.541,49.017,22.46,40.84,48.922,22.46,41.31,49.152,22.46,41.73,49.598,22.46,41.905,50.051,22.46,41.752,49.966,27.26,41.013,49.76,27.26,40.832,50.007,27.26,41.284,49.864,27.26,41.517,49.487,27.26,40.826,49.605,27.26,41.605,49.273,27.26,40.997,49.35,27.26,41.505,49.219,27.26,41.265,49.76,22.46,40.832,49.966,22.46,41.013,50.007,22.46,41.284,49.487,22.46,40.826,49.273,22.46,40.997,49.219,22.46,41.265,49.35,22.46,41.505,49.605,22.46,41.605,49.864,22.46,41.517,49.064,22.66,38.345,49.17,22.76,38.311,49.259,22.66,38.744,49.359,22.76,38.734,49.263,22.76,39.187,48.768,22.76,38.079,48.658,22.66,38.165,48.307,22.76,38.128,48.23,22.66,38.288,47.963,22.76,38.439,47.982,22.66,38.657,47.867,22.76,38.892,48.029,22.66,39.099,48.056,22.76,39.316,48.349,22.66,39.407,48.458,22.76,39.547,48.793,22.66,39.438,48.919,22.76,39.498,49.152,22.66,39.176,49.263,22.96,39.187,49.359,22.96,38.734,49.17,22.96,38.311,48.768,22.96,38.079,48.307,22.96,38.128,47.963,22.96,38.439,47.867,22.96,38.892,48.056,22.96,39.316,48.458,22.96,39.547,48.919,22.96,39.498,49.011,27.26,38.771,48.891,27.26,38.525,48.945,27.26,39.036,48.724,27.26,39.198,48.64,27.26,38.414,48.451,27.26,39.179,48.378,27.26,38.49,48.254,27.26,38.989,48.225,27.26,38.717,48.891,22.96,38.525,49.011,22.96,38.771,48.945,22.96,39.036,48.64,22.96,38.414,48.378,22.96,38.49,48.225,22.96,38.717,48.254,22.96,38.989,48.451,22.96,39.179,48.724,22.96,39.198,49.231,26.94,41.034,49.249,26.96,41.042,49.197,26.94,41.249,49.217,26.96,41.247,49.275,26.94,41.452,49.291,26.96,41.44,49.444,26.94,41.589,49.452,26.96,41.57,49.659,26.94,41.622,49.657,26.96,41.602,49.862,26.94,41.544,49.85,26.96,41.528,49.998,26.94,41.375,49.98,26.96,41.367,50.032,26.94,41.16,50.012,26.96,41.162,49.954,26.94,40.957,49.938,26.96,40.969,49.785,26.94,40.821,49.777,26.96,40.839,49.57,26.94,40.787,49.572,26.96,40.807,49.367,26.94,40.865,49.379,26.96,40.881,49.291,27.22,41.44,49.217,27.22,41.247,49.249,27.22,41.042,49.379,27.22,40.881,49.572,27.22,40.807,49.777,27.22,40.839,49.938,27.22,40.969,50.012,27.22,41.162,49.98,27.22,41.367,49.85,27.22,41.528,49.657,27.22,41.602,49.452,27.22,41.57,49.354,26.94,41.792,49.993,26.94,41.724,48.976,26.94,41.273,49.236,26.94,40.686,49.875,26.94,40.618,50.253,26.94,41.137,49.231,27.24,41.034,49.197,27.24,41.249,49.275,27.24,41.452,49.444,27.24,41.589,49.659,27.24,41.622,49.862,27.24,41.544,49.998,27.24,41.375,50.032,27.24,41.16,49.954,27.24,40.957,49.785,27.24,40.821,49.57,27.24,40.787,49.367,27.24,40.865,49.354,27.24,41.792,48.976,27.24,41.273,49.993,27.24,41.724,50.253,27.24,41.137,49.875,27.24,40.618,49.236,27.24,40.686,49.26,27.19,40.633,49.211,26.977,40.651,49.211,27.204,40.651,49.179,26.99,40.692,49.179,27.19,40.692,49.26,26.99,40.633,49.841,26.99,40.571,49.892,26.977,40.579,49.841,27.19,40.571,49.892,27.204,40.579,48.942,27.19,41.226,48.934,26.977,41.277,48.934,27.204,41.277,48.952,26.99,41.325,48.952,27.19,41.325,48.942,26.99,41.226,49.297,26.99,41.798,49.297,27.19,41.798,49.337,26.977,41.83,49.337,27.204,41.83,49.388,26.99,41.838,49.388,27.19,41.838,49.969,27.19,41.777,50.017,27.204,41.758,49.969,26.99,41.777,49.932,27.19,40.612,49.932,26.99,40.612,50.277,27.19,41.084,50.277,26.99,41.084,50.295,27.204,41.132,50.287,27.19,41.183,50.295,26.977,41.132,50.287,26.99,41.183,50.05,26.99,41.718,50.017,26.977,41.758,50.05,27.19,41.718,48.229,26.94,38.643,48.247,26.96,38.651,48.195,26.94,38.858,48.215,26.96,38.855,48.274,26.94,39.06,48.29,26.96,39.049,48.443,26.94,39.197,48.451,26.96,39.179,48.657,26.94,39.231,48.655,26.96,39.211,48.86,26.94,39.153,48.849,26.96,39.136,48.997,26.94,38.983,48.979,26.96,38.975,49.031,26.94,38.769,49.011,26.96,38.771,48.953,26.94,38.566,48.936,26.96,38.578,48.783,26.94,38.429,48.775,26.96,38.448,48.569,26.94,38.395,48.571,26.96,38.415,48.366,26.94,38.474,48.378,26.96,38.49,48.29,27.22,39.049,48.215,27.22,38.855,48.247,27.22,38.651,48.378,27.22,38.49,48.571,27.22,38.415,48.775,27.22,38.448,48.936,27.22,38.578,49.011,27.22,38.771,48.979,27.22,38.975,48.849,27.22,39.136,48.655,27.22,39.211,48.451,27.22,39.179,48.353,26.94,39.4,48.991,26.94,39.332,47.974,26.94,38.881,48.235,26.94,38.294,48.874,26.94,38.226,49.252,26.94,38.745,48.229,27.24,38.643,48.195,27.24,38.858,48.274,27.24,39.06,48.443,27.24,39.197,48.657,27.24,39.231,48.86,27.24,39.153,48.997,27.24,38.983,49.031,27.24,38.769,48.953,27.24,38.566,48.783,27.24,38.429,48.569,27.24,38.395,48.366,27.24,38.474,48.353,27.24,39.4,47.974,27.24,38.881,48.991,27.24,39.332,49.252,27.24,38.745,48.874,27.24,38.226,48.235,27.24,38.294,48.258,27.19,38.241,48.21,26.977,38.26,48.21,27.204,38.26,48.177,26.99,38.3,48.177,27.19,38.3,48.258,26.99,38.241,48.84,26.99,38.179,48.891,26.977,38.187,48.84,27.19,38.179,48.891,27.204,38.187,47.94,27.19,38.834,47.932,26.977,38.886,47.932,27.204,38.886,47.951,26.99,38.934,47.951,27.19,38.934,47.94,26.99,38.834,48.295,26.99,39.406,48.295,27.19,39.406,48.335,26.977,39.439,48.335,27.204,39.439,48.387,26.99,39.447,48.387,27.19,39.447,48.968,27.19,39.385,49.016,27.204,39.366,48.968,26.99,39.385,48.931,27.19,38.22,48.931,26.99,38.22,49.275,27.19,38.692,49.275,26.99,38.692,49.294,27.204,38.741,49.286,27.19,38.792,49.294,26.977,38.741,49.286,26.99,38.792,49.049,26.99,39.326,49.016,26.977,39.366,49.049,27.19,39.326],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523]},backe_b:{v:[50.313,23.71,60.442,50.313,26.21,60.442,50.878,23.71,55.044,50.878,26.21,55.044,48.966,23.71,60.213,48.799,23.71,60.8,48.867,23.71,60.333,48.729,23.71,60.406,50.001,23.71,57.667,49.955,23.71,57.816,49.855,23.71,57.936,50.218,23.71,54.975,49.914,23.71,57.373,49.986,23.71,57.511,49.794,23.71,57.273,50.059,23.71,54.984,49.91,23.71,55.042,49.788,23.71,55.145,49.704,23.71,55.281,47.875,23.71,59.717,49.251,23.71,57.434,49.351,23.71,57.314,49.489,23.71,57.241,47.82,23.71,59.929,48.217,23.71,59.98,48.263,23.71,59.831,48.363,23.71,59.711,47.825,23.71,60.148,47.888,23.71,60.357,48.231,23.71,60.136,48.006,23.71,60.541,48.17,23.71,60.687,48.366,23.71,60.782,48.424,23.71,60.374,48.304,23.71,60.274,48.573,23.71,60.42,48.582,23.71,60.821,49.205,23.71,57.583,48.501,23.71,59.639,49.219,23.71,57.739,48.657,23.71,59.624,49.292,23.71,57.877,48.806,23.71,59.67,49.412,23.71,57.977,48.926,23.71,59.77,49.561,23.71,58.023,48.998,23.71,59.908,49.717,23.71,58.008,49.013,23.71,60.064,49.645,23.71,57.227,48.799,26.21,60.8,48.966,26.21,60.213,49.013,26.21,60.064,49.717,26.21,58.008,48.998,26.21,59.908,49.561,26.21,58.023,49.412,26.21,57.977,48.926,26.21,59.77,49.292,26.21,57.877,48.806,26.21,59.67,49.219,26.21,57.739,48.657,26.21,59.624,48.501,26.21,59.639,48.582,26.21,60.821,48.729,26.21,60.406,48.867,26.21,60.333,48.573,26.21,60.42,48.366,26.21,60.782,48.424,26.21,60.374,48.304,26.21,60.274,48.17,26.21,60.687,48.231,26.21,60.136,48.006,26.21,60.541,48.217,26.21,59.98,47.888,26.21,60.357,47.825,26.21,60.148,47.82,26.21,59.929,47.875,26.21,59.717,48.263,26.21,59.831,48.363,26.21,59.711,49.205,26.21,57.583,49.251,26.21,57.434,49.704,26.21,55.281,49.351,26.21,57.314,49.489,26.21,57.241,49.645,26.21,57.227,49.794,26.21,57.273,49.91,26.21,55.042,50.059,26.21,54.984,49.788,26.21,55.145,50.218,26.21,54.975,49.914,26.21,57.373,49.986,26.21,57.511,50.001,26.21,57.667,49.955,26.21,57.816,49.855,26.21,57.936,48.799,26.96,60.8,61.656,26.96,57.753,61.656,22.96,57.753,48.799,22.96,60.8,48.582,22.96,60.821,48.366,22.96,60.782,48.17,22.96,60.687,48.006,22.96,60.541,47.888,22.96,60.357,47.825,22.96,60.148,47.82,22.96,59.929,47.875,22.96,59.717,49.704,22.96,55.281,49.788,22.96,55.145,49.91,22.96,55.042,50.059,22.96,54.984,50.218,22.96,54.975,49.251,22.96,57.434,49.205,22.96,57.583,49.219,22.96,57.739,49.292,22.96,57.877,49.412,22.96,57.977,49.561,22.96,58.023,49.717,22.96,58.008,49.855,22.96,57.936,49.955,22.96,57.816,50.001,22.96,57.667,49.986,22.96,57.511,49.914,22.96,57.373,49.794,22.96,57.273,49.645,22.96,57.227,49.489,22.96,57.241,49.351,22.96,57.314,48.263,22.96,59.831,48.217,22.96,59.98,48.231,22.96,60.136,48.304,22.96,60.274,48.424,22.96,60.374,48.573,22.96,60.42,48.729,22.96,60.406,48.867,22.96,60.333,48.966,22.96,60.213,49.013,22.96,60.064,48.998,22.96,59.908,48.926,22.96,59.77,48.806,22.96,59.67,48.657,22.96,59.624,48.501,22.96,59.639,48.363,22.96,59.711,49.251,26.96,57.434,49.205,26.96,57.583,49.219,26.96,57.739,49.292,26.96,57.877,49.412,26.96,57.977,49.561,26.96,58.023,49.717,26.96,58.008,49.855,26.96,57.936,49.955,26.96,57.816,50.001,26.96,57.667,49.986,26.96,57.511,49.914,26.96,57.373,49.794,26.96,57.273,49.645,26.96,57.227,49.489,26.96,57.241,49.351,26.96,57.314,48.263,26.96,59.831,48.217,26.96,59.98,48.231,26.96,60.136,48.304,26.96,60.274,48.424,26.96,60.374,48.573,26.96,60.42,48.729,26.96,60.406,48.867,26.96,60.333,48.966,26.96,60.213,49.013,26.96,60.064,48.998,26.96,59.908,48.926,26.96,59.77,48.806,26.96,59.67,48.657,26.96,59.624,48.501,26.96,59.639,48.363,26.96,59.711,50.218,26.96,54.975,50.059,26.96,54.984,49.91,26.96,55.042,49.788,26.96,55.145,49.704,26.96,55.281,47.875,26.96,59.717,47.82,26.96,59.929,47.825,26.96,60.148,47.888,26.96,60.357,48.006,26.96,60.541,48.17,26.96,60.687,48.366,26.96,60.782,48.582,26.96,60.821,61.89,22.96,57.625,61.89,26.96,57.625,61.82,22.96,57.681,61.82,26.96,57.681,61.742,26.96,57.725,61.742,22.96,57.725,62.45,26.96,57.08,62.45,22.96,57.08,62.153,22.96,56.225,62.153,26.96,56.225,62.308,22.96,56.267,62.308,26.96,56.267,62.442,26.96,56.357,62.442,22.96,56.357,62.541,26.96,56.484,62.541,22.96,56.484,62.594,26.96,56.636,62.594,22.96,56.636,62.595,26.96,56.797,62.595,22.96,56.797,62.546,26.96,56.951,62.546,22.96,56.951,60.244,26.96,56.025,60.244,22.96,56.025,54.116,26.96,55.383,54.442,26.96,55.75,54.116,22.96,55.383,54.442,22.96,55.75,54.806,26.96,56.078,54.806,22.96,56.078,55.206,26.96,56.362,55.206,22.96,56.362,55.635,26.96,56.598,55.635,22.96,56.598,56.089,26.96,56.784,56.089,22.96,56.784,56.561,26.96,56.918,56.561,22.96,56.918,57.045,26.96,56.997,57.045,22.96,56.997,57.535,26.96,57.02,57.535,22.96,57.02,58.024,26.96,56.987,58.024,22.96,56.987,58.506,26.96,56.899,58.506,22.96,56.899,58.975,26.96,56.756,58.975,22.96,56.756,59.425,26.96,56.561,59.425,22.96,56.561,59.85,26.96,56.316,59.85,22.96,56.316,50.106,22.16,57.298,50.19,22.26,57.244,50.198,22.16,57.698,50.298,22.26,57.71,50.012,22.16,58.064,50.08,22.26,58.137,49.634,22.16,58.224,49.64,22.26,58.324,49.242,22.16,58.104,49.182,22.26,58.184,49.018,22.16,57.76,48.921,22.26,57.782,49.068,22.16,57.353,48.979,22.26,57.307,49.368,22.16,57.073,49.329,22.26,56.981,49.778,22.16,57.051,49.807,22.26,56.955,50.08,22.46,58.137,50.298,22.46,57.71,50.19,22.46,57.244,49.807,22.46,56.955,49.329,22.46,56.981,48.979,22.46,57.307,48.921,22.46,57.782,49.182,22.46,58.184,49.64,22.46,58.324,50,27.26,57.674,49.938,27.26,57.407,49.876,27.26,57.917,49.624,27.26,58.024,49.72,27.26,57.242,49.362,27.26,57.944,49.447,27.26,57.257,49.213,27.26,57.715,49.246,27.26,57.443,49.938,22.46,57.407,50,22.46,57.674,49.876,22.46,57.917,49.72,22.46,57.242,49.447,22.46,57.257,49.246,22.46,57.443,49.213,22.46,57.715,49.362,22.46,57.944,49.624,22.46,58.024,49.151,22.66,59.655,49.262,22.76,59.643,49.262,22.66,60.086,49.361,22.76,60.096,49.175,22.76,60.52,48.915,22.76,59.335,48.79,22.66,59.396,48.454,22.76,59.289,48.347,22.66,59.43,48.054,22.76,59.524,48.029,22.66,59.741,47.868,22.76,59.948,47.985,22.66,60.183,47.968,22.76,60.401,48.236,22.66,60.55,48.314,22.76,60.709,48.664,22.66,60.67,48.775,22.76,60.755,49.069,22.66,60.487,49.175,22.96,60.52,49.361,22.96,60.096,49.262,22.96,59.643,48.915,22.96,59.335,48.454,22.96,59.289,48.054,22.96,59.524,47.868,22.96,59.948,47.968,22.96,60.401,48.314,22.96,60.709,48.775,22.96,60.755,49.013,27.26,60.061,48.945,27.26,59.796,48.895,27.26,60.308,48.645,27.26,60.421,48.723,27.26,59.637,48.382,27.26,60.347,48.45,27.26,59.658,48.227,27.26,60.121,48.254,27.26,59.849,48.945,22.96,59.796,49.013,22.96,60.061,48.895,22.96,60.308,48.723,22.96,59.637,48.45,22.96,59.658,48.254,22.96,59.849,48.227,22.96,60.121,48.382,22.96,60.347,48.645,22.96,60.421,49.262,26.94,57.38,49.278,26.96,57.392,49.185,26.94,57.584,49.205,26.96,57.586,49.22,26.94,57.798,49.239,26.96,57.79,49.358,26.94,57.966,49.37,26.96,57.95,49.562,26.94,58.043,49.564,26.96,58.023,49.776,26.94,58.007,49.768,26.96,57.989,49.944,26.94,57.87,49.928,26.96,57.858,50.021,26.94,57.666,50.001,26.96,57.664,49.985,26.94,57.452,49.967,26.96,57.46,49.848,26.94,57.284,49.836,26.96,57.3,49.644,26.94,57.207,49.642,26.96,57.227,49.43,26.94,57.242,49.438,26.96,57.261,49.239,27.22,57.79,49.205,27.22,57.586,49.278,27.22,57.392,49.438,27.22,57.261,49.642,27.22,57.227,49.836,27.22,57.3,49.967,27.22,57.46,50.001,27.22,57.664,49.928,27.22,57.858,49.768,27.22,57.989,49.564,27.22,58.023,49.37,27.22,57.95,49.229,26.94,58.147,49.868,26.94,58.21,48.964,26.94,57.562,49.338,26.94,57.04,49.977,26.94,57.103,50.242,26.94,57.688,49.262,27.24,57.38,49.185,27.24,57.584,49.22,27.24,57.798,49.358,27.24,57.966,49.562,27.24,58.043,49.776,27.24,58.007,49.944,27.24,57.87,50.021,27.24,57.666,49.985,27.24,57.452,49.848,27.24,57.284,49.644,27.24,57.207,49.43,27.24,57.242,49.229,27.24,58.147,48.964,27.24,57.562,49.868,27.24,58.21,50.242,27.24,57.688,49.977,27.24,57.103,49.338,27.24,57.04,49.372,27.19,56.993,49.32,26.977,57.001,49.32,27.204,57.001,49.28,26.99,57.034,49.28,27.19,57.034,49.372,26.99,56.993,49.953,26.99,57.05,50.002,26.977,57.069,49.953,27.19,57.05,50.002,27.204,57.069,48.94,27.19,57.509,48.922,26.977,57.558,48.922,27.204,57.558,48.93,26.99,57.609,48.93,27.19,57.609,48.94,26.99,57.509,49.171,26.99,58.141,49.171,27.19,58.141,49.204,26.977,58.181,49.204,27.204,58.181,49.253,26.99,58.2,49.253,27.19,58.2,49.834,27.19,58.257,49.885,27.204,58.248,49.834,26.99,58.257,50.035,27.19,57.109,50.035,26.99,57.109,50.276,27.19,57.641,50.276,26.99,57.641,50.284,27.204,57.692,50.266,27.19,57.741,50.284,26.977,57.692,50.266,26.99,57.741,49.925,26.99,58.216,49.885,26.977,58.248,49.925,27.19,58.216,48.273,26.94,59.777,48.29,26.96,59.789,48.197,26.94,59.981,48.217,26.96,59.983,48.232,26.94,60.195,48.25,26.96,60.187,48.37,26.94,60.363,48.382,26.96,60.347,48.574,26.94,60.44,48.576,26.96,60.42,48.788,26.94,60.405,48.78,26.96,60.386,48.956,26.94,60.267,48.94,26.96,60.255,49.033,26.94,60.063,49.013,26.96,60.061,48.997,26.94,59.849,48.979,26.96,59.857,48.86,26.94,59.681,48.848,26.96,59.697,48.656,26.94,59.604,48.654,26.96,59.624,48.442,26.94,59.639,48.45,26.96,59.658,48.25,27.22,60.187,48.217,27.22,59.983,48.29,27.22,59.789,48.45,27.22,59.658,48.654,27.22,59.624,48.848,27.22,59.697,48.979,27.22,59.857,49.013,27.22,60.061,48.94,27.22,60.255,48.78,27.22,60.386,48.576,27.22,60.42,48.382,27.22,60.347,48.241,26.94,60.544,48.88,26.94,60.607,47.976,26.94,59.959,48.35,26.94,59.437,48.989,26.94,59.5,49.254,26.94,60.085,48.273,27.24,59.777,48.197,27.24,59.981,48.232,27.24,60.195,48.37,27.24,60.363,48.574,27.24,60.44,48.788,27.24,60.405,48.956,27.24,60.267,49.033,27.24,60.063,48.997,27.24,59.849,48.86,27.24,59.681,48.656,27.24,59.604,48.442,27.24,59.639,48.241,27.24,60.544,47.976,27.24,59.959,48.88,27.24,60.607,49.254,27.24,60.085,48.989,27.24,59.5,48.35,27.24,59.437,48.383,27.19,59.39,48.332,26.977,59.398,48.332,27.204,59.398,48.292,26.99,59.431,48.292,27.19,59.431,48.383,26.99,59.39,48.965,26.99,59.447,49.014,26.977,59.466,48.965,27.19,59.447,49.014,27.204,59.466,47.952,27.19,59.906,47.934,26.977,59.955,47.934,27.204,59.955,47.942,26.99,60.006,47.942,27.19,60.006,47.952,26.99,59.906,48.183,26.99,60.538,48.183,27.19,60.538,48.216,26.977,60.578,48.216,27.204,60.578,48.264,26.99,60.597,48.264,27.19,60.597,48.846,27.19,60.654,48.897,27.204,60.646,48.846,26.99,60.654,49.046,27.19,59.506,49.046,26.99,59.506,49.288,27.19,60.038,49.288,26.99,60.038,49.296,27.204,60.089,49.278,27.19,60.138,49.296,26.977,60.089,49.278,26.99,60.138,48.937,26.99,60.613,48.897,26.977,60.646,48.937,27.19,60.613],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475]}}};var Mn=document.querySelector("[data-konfigurator]"),vr=Mn.dataset.base||"",wt=i=>Mn.querySelector(i),S5=100*1024*1024,E5=25*1024*1024,Kt=(i,t=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),Tl=wt(".kfg__view"),X4=Tl.querySelector("canvas"),fi=new Ks({canvas:X4,antialias:!0,alpha:!0});fi.setPixelRatio(Math.min(window.devicePixelRatio,2));fi.toneMapping=Wc;fi.shadowMap.enabled=!0;fi.shadowMap.type=Gc;var Xn=new ls;Xn.environment=new cs(fi).fromScene(new zo(fi),.04).texture;var hi=new Oe(35,1,1,1e5),oa=new Bo(hi,X4);oa.enableDamping=!0;var Gn=new Lo(16777215,1.3);Gn.castShadow=!0;Gn.shadow.mapSize.set(2048,2048);Gn.shadow.bias=-4e-4;Xn.add(Gn,Gn.target,new Ro(16777215,12897492,.55));var la=new te(new Js(1,1),new Ao({opacity:.16}));la.rotation.x=-Math.PI/2;la.receiveShadow=!0;var q4=new Io(1,20,12831700,14673130);Xn.add(la,q4);var Rs=Sl.pivots,Y4=Hn.degToRad(57);var T5=14.8,w5=32,wl=10,Z4={gehaeuse:new oe({color:2830392,metalness:.65,roughness:.4}),backe:new oe({color:9345188,metalness:.9,roughness:.34}),kurbel:new oe({color:25002,metalness:.55,roughness:.32}),lenker:new oe({color:11121599,metalness:.95,roughness:.25}),koppel:new oe({color:11121599,metalness:.95,roughness:.25}),schieber:new oe({color:12041927,metalness:1,roughness:.18})},A5=new oe({color:3054939,metalness:.6,roughness:.35}),R5=new oe({color:13121325,metalness:.5,roughness:.4}),Mr=new Xe,Rl=new Xe;Rl.rotation.z=-Math.PI/2;var Cl=new Xe;Cl.position.set(-62.6,-24.75,-49.425);Rl.add(Cl);Mr.add(Rl);Xn.add(Mr);var je={};for(let[i,t]of Object.entries(Sl.groups)){let e=new ve;e.setAttribute("position",new ce(t.v,3)),e.setIndex(t.i),e=or(e,Hn.degToRad(35)),e.boundsTree=new ci(e);let n=new te(e,Z4[i.split("_")[0]]);n.castShadow=n.receiveShadow=!0,n.matrixAutoUpdate=!1,je[i]=n,Cl.add(n)}var V4=(i,t,e)=>{let n=i[0]-t[0],s=i[1]-t[1];return[t[0]+n*Math.cos(e)-s*Math.sin(e),t[1]+n*Math.sin(e)+s*Math.cos(e)]};function $4(i,t,e=[0,0]){let n=Math.cos(t),s=Math.sin(t);return new Dt().set(n,0,-s,i[0]-(n*i[0]-s*i[1])+e[0],0,1,0,0,s,0,n,i[1]-(s*i[0]+n*i[1])+e[1],0,0,0,1)}function G4(i,t,e,n){let s=Math.atan2(n[1]-e[1],n[0]-e[0])-Math.atan2(t[1]-i[1],t[0]-i[0]);return $4(i,s,[e[0]-i[0],e[1]-i[1]])}function aa(i){let t=0;for(let e of["a","b"]){let n=(e==="a"?1:-1)*i,s=Rs["P1"+e],r=Rs["P2"+e],a=Rs["C"+e],o=Rs["J1"+e],c=Rs["J2"+e],l=Rs["S"+e],u=V4(o,s,n),f=V4(a,s,n);je["kurbel_"+e].matrix.copy($4(s,n));let h=[u[0]-o[0],u[1]-o[1]];je["backe_"+e].matrix.makeTranslation(h[0],0,h[1]),je["lenker_"+e].matrix.copy(G4(r,c,r,[c[0]+h[0],c[1]+h[1]]));let d=Math.hypot(a[0]-l[0],a[1]-l[1]),g=[f[0]-Math.sqrt(Math.max(0,d*d-(f[1]-l[1])**2)),l[1]];je["koppel_"+e].matrix.copy(G4(l,a,g,f)),t=g[0]-l[0]}je.schieber.matrix.makeTranslation(t,0,0),je.gehaeuse.matrix.identity(),Mr.updateMatrixWorld(!0)}var Ye=null,vn=null,yn={x:0,y:0,z:0},wn=null,xr=null,br=new ee,C5=new oe({color:14263361,metalness:.2,roughness:.55});function P5(){if(vn==="form")return{f:1,auto:!0,label:"mm"};let i=wt("#kfg-einheit").value;if(i!=="auto")return{f:{mm:1,cm:10,m:1e3}[i],auto:!1};if(vn!=="stl")return{f:1,auto:!0,label:"mm"};let t=new R;return Ye.boundingBox.getSize(t),Math.max(t.x,t.y,t.z)<2?{f:1e3,auto:!0,label:"m"}:{f:1,auto:!0,label:"mm"}}function pi(i){if(!Ye)return;let{f:t,auto:e,label:n}=P5();wt("#kfg-einheit-info").textContent=e?vn==="step"||vn==="muster"?"aus der STEP-Datei \xFCbernommen (mm)":vn==="form"?"Grundform in mm":`erkannt: ${n}`:"";let s=Ye.clone();if(s.scale(t,t,t),s.computeBoundingBox(),i){let a=new R;s.boundingBox.getSize(a),yn={x:0,y:a.z>a.x?1:0,z:0}}s.applyMatrix4(new Dt().makeRotationX(yn.x*Math.PI/2)),s.applyMatrix4(new Dt().makeRotationZ(yn.z*Math.PI/2)),s.applyMatrix4(new Dt().makeRotationY(yn.y*Math.PI/2)),s.computeBoundingBox();let r=new R;s.boundingBox.getCenter(r),s.translate(-r.x,-s.boundingBox.min.y,-r.z),s.computeBoundingBox(),s.attributes.position.count<12e5?or(s,Math.PI/6):s.computeVertexNormals(),wn&&(Xn.remove(wn),wn.geometry.dispose()),wn=new te(s,C5),wn.castShadow=wn.receiveShadow=!0,Xn.add(wn),xr=new ci(s),br.copy(s.boundingBox),An=L5(),Wn==="innen"&&!An&&Is("aussen"),wt("#kfg-griff-innen").disabled=!An||!Qt.range.innen,Q4(),Pl(),Ll(),Rn()}var Wn="aussen",An=null;function L5(){let i=new R;br.getSize(i);let t=new ii;for(let e of[.6,.45,.75,.3]){let n=new R(0,i.y*e,0);if(t.set(n,new R(0,1,0)),xr.raycastFirst(t,We))continue;t.set(n,new R(0,0,1));let s=xr.raycastFirst(t,We);t.set(n,new R(0,0,-1));let r=xr.raycastFirst(t,We);if(s&&r)return s.distance+r.distance}return null}var I5=(()=>{Mr.scale.setScalar(wl);let i=n=>{aa(n);let s=new ee().setFromObject(je.backe_a),r=new ee().setFromObject(je.backe_b);return{gap:r.min.z-s.max.z,outer:r.max.z-s.min.z}},t=i(0),e=i(Y4);return aa(0),{aussen:[Math.max(0,e.gap),t.gap],innen:[e.outer,t.outer]}})(),Ps={capit:{id:"capit",code:"Capit",name:"Gelenk-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 320 mm lang)",root:Mr,meshes:Object.values(je),contact:[je.backe_a,je.backe_b],ready:!0,set:i=>aa(Y4*i),range:I5,reach:T5*wl,length:w5*wl,word:"Beide Backen liegen",paint:i=>{for(let t of[je.backe_a,je.backe_b])t.material=i==="gegriffen"?A5:i==="kollision"?R5:Z4.backe}},tentra:{id:"tentra",code:"Tentra T3",name:"Tentakelgreifer, 3 Finger",note:"Testmodell in Originalgr\xF6\xDFe (\xD8 104 mm, 166 mm hoch)",ready:!1,range:{aussen:[16,78],innen:null},reach:100,length:166,word:"Die Finger liegen",load:()=>U5()},pinza:{id:"pinza",code:"Pinza adattiva",name:"Adaptiver 2-Finger-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 180 mm hoch, Hub bis 85 mm)",ready:!1,range:{aussen:[0,85],innen:[60,140]},reach:74,length:180,word:"Beide Finger liegen",load:()=>N5()}},Qt=Ps.capit,Di={dunkel:new oe({color:2041904,metalness:.5,roughness:.45}),platte:new oe({color:9345186,metalness:.7,roughness:.35}),finger:new oe({color:13127706,metalness:.15,roughness:.5}),polster:new oe({color:1014392,metalness:.1,roughness:.7}),stahl:new oe({color:12041927,metalness:1,roughness:.22}),gelb:new oe({color:14262330,metalness:.6,roughness:.35})},J4=new oe({color:3054939,metalness:.1,roughness:.6}),K4=new oe({color:13121325,metalness:.1,roughness:.6}),D5=i=>/Vertebra/.test(i)?Di.finger:/Contact_pad/.test(i)?Di.polster:/Upper_plate/.test(i)?Di.platte:/screw|nut|standoff/i.test(i)?Di.stahl:/spool|actuator/i.test(i)?Di.gelb:Di.dunkel;async function U5(){let i=await(await fetch(vr+"data/3d/tentra-t3.json")).json(),t=Ps.tentra,e=new Xe,n=new Xe;n.position.y=117.8,e.add(n);let s=[],r=[],a=[],o=[];for(let d of i.parts){let g=new ve;g.setAttribute("position",new ce(d.p,3)),g.setIndex(d.i),g=or(g,Hn.degToRad(35)),g.boundsTree=new ci(g);let x=new te(g,D5(d.name));if(x.castShadow=x.receiveShadow=!0,x.matrixAutoUpdate=!1,n.add(x),s.push(x),o.push(x),/Contact_pad/.test(d.name)&&r.push(x),d.bewegung){let m=d.bewegung;a.push({mesh:x,parent:m.parent,pivot:new R(...m.pivot),q:new Ze(...m.q),rest:new R(...m.rest)})}}let c=new Ze,l=new Dt,u=new Dt,f=new Dt;t.set=d=>{for(let g of a)c.identity().slerp(g.q,d),f.makeTranslation(g.pivot.x+g.rest.x*d,g.pivot.y+g.rest.y*d,g.pivot.z+g.rest.z*d).multiply(l.makeRotationFromQuaternion(c)).multiply(u.makeTranslation(-g.pivot.x,-g.pivot.y,-g.pivot.z)),g.parent>=0?g.mesh.matrix.multiplyMatrices(o[g.parent].matrix,f):g.mesh.matrix.copy(f);e.updateMatrixWorld(!0)},t.paint=d=>{for(let g of r)g.material=d==="gegriffen"?J4:d==="kollision"?K4:Di.polster},t.root=e,t.meshes=s,t.contact=a.map(d=>d.mesh);let h=d=>{t.set(d);let g=1/0,x=new R;for(let m of r){let p=m.geometry.attributes.position;for(let y=0;y<p.count;y++)x.fromBufferAttribute(p,y).applyMatrix4(m.matrixWorld),g=Math.min(g,Math.hypot(x.x,x.z))}return g};t.range={aussen:[2*h(1),2*h(0)],innen:null},t.set(0),t.ready=!0}async function N5(){let i=await(await fetch(vr+"data/3d/pinza-adattiva.json")).json(),t=Ps.pinza,e=new Xe,n=new Xe,s=new Xe;s.rotation.set(0,Math.PI/2,Math.PI),n.position.y=149,n.add(s),e.add(n);let r={gehaeuse:new oe({color:2304303,metalness:.4,roughness:.5}),hebel:new oe({color:11055290,metalness:.85,roughness:.3}),finger:new oe({color:5989228,metalness:.6,roughness:.4})},a={};for(let[m,p]of Object.entries(i.groups)){let y=new ve;y.setAttribute("position",new ce(p.v,3)),y.setIndex(p.i),y=or(y,Hn.degToRad(35)),y.boundsTree=new ci(y);let _=new te(y,r[m.split("_")[0]]);_.castShadow=_.receiveShadow=!0,_.matrixAutoUpdate=!1,s.add(_),a[m]=_}let o=i.pivots,c=Hn.degToRad(-20),l=Hn.degToRad(26),u=(m,p,y)=>new Dt().makeTranslation(m,p,0).multiply(new Dt().makeRotationZ(y)).multiply(new Dt().makeTranslation(-m,-p,0));t.set=m=>{let p=c+(l-c)*m;for(let[y,_]of[["_r",1],["_l",-1]]){let M=_*p,w=[_*o.A[0],o.A[1]],T=[_*o.B[0],o.B[1]],E=[_*o.A2[0]-w[0],o.A2[1]-w[1]];a["hebel_a"+y].matrix.copy(u(w[0],w[1],M)),a["hebel_b"+y].matrix.copy(u(T[0],T[1],M));let I=E[0]*Math.cos(M)-E[1]*Math.sin(M)-E[0],v=E[0]*Math.sin(M)+E[1]*Math.cos(M)-E[1];a["finger"+y].matrix.makeTranslation(I,v,0)}a.gehaeuse.matrix.identity(),e.updateMatrixWorld(!0)};let f=[a.finger_r,a.finger_l],h=r.finger;t.paint=m=>{for(let p of f)p.material=m==="gegriffen"?J4:m==="kollision"?K4:h},t.root=e,t.meshes=Object.values(a),t.contact=f;let d=m=>{t.set(m);let p=new ee().setFromObject(a.finger_r),y=new ee().setFromObject(a.finger_l),[_,M]=p.min.z<y.min.z?[p,y]:[y,p];return{gap:M.min.z-_.max.z,outer:M.max.z-_.min.z}},g=d(0),x=d(1);t.range={aussen:[Math.max(0,x.gap),g.gap],innen:[x.outer,g.outer]},t.set(0),t.ready=!0}async function j4(i){let t=Ps[i];if(!t.ready){wt("#kfg-status").className="kfg__status is-info",wt("#kfg-status").textContent=`${t.code} wird geladen \u2026`;try{await t.load()}catch{wt("#kfg-status").textContent=`${t.code} konnte nicht geladen werden.`;return}}Qt.root&&Xn.remove(Qt.root),Qt=t,Xn.add(Qt.root),Qt.root.visible=!0,wt("#kfg-badge").textContent=`Greifer ${Qt.code} (Testmodell) in Originalgr\xF6\xDFe`,!!!Qt.range.innen&&Wn==="innen"&&(Wn="aussen"),Is(Wn)}function Q4(){let i=new R;br.getSize(i);let t=Qt.length,e=Math.max(i.x,i.z,i.y+t*.75);la.scale.set(e*8,e*8,1),q4.scale.setScalar(e*4),Gn.position.set(-e*1.5,e*3,e*1.2),Object.assign(Gn.shadow.camera,{left:-e*2,right:e*2,top:e*2,bottom:-e*2,near:e*.1,far:e*10}),Gn.shadow.normalBias=e*.006,Gn.shadow.camera.updateProjectionMatrix(),oa.target.set(0,i.y*.5+t*.3,0),hi.position.set(e*1.15,e*.8,e*1.45),hi.near=e/200,hi.far=e*100,hi.updateProjectionMatrix(),oa.update()}function O5(i){let t=i.attributes.position,e=i.index,n=new R,s=new R,r=new R,a=0,o=e?e.count:t.count;for(let c=0;c<o;c+=3){let l=e?e.getX(c):c,u=e?e.getX(c+1):c+1,f=e?e.getX(c+2):c+2;n.fromBufferAttribute(t,l),s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,f),a+=n.dot(s.cross(r))/6}return Math.abs(a)}var ui=null;function Pl(){let i=new R;br.getSize(i);let t=i.x*i.y*i.z,e=O5(wn.geometry);e>0&&e<=t*1.01||(e=t*.5);let n=Number(wt("#kfg-material").value),s=e*1e-9*n;ui={s:i,vol:e,mass:s,grip:Wn==="innen"&&An?An:i.z,soft:wt("#kfg-material").selectedOptions[0].dataset.weich==="1"},wt("#kfg-masse").textContent=`${Kt(i.x)} \xD7 ${Kt(i.y)} \xD7 ${Kt(i.z)} mm (L \xD7 H \xD7 Greifbreite)`+(An?` \xB7 Innenma\xDF ${Kt(An)} mm`:""),wt("#kfg-gewicht").textContent=s<1?`ca. ${Kt(s*1e3)} g`:`ca. ${Kt(s,1)} kg`}function Ll(){if(!ui)return;let i=n=>`au\xDFen ${Kt(n.range.aussen[0])}\u2013${Kt(n.range.aussen[1])} mm`+(n.range.innen?` \xB7 innen ${Kt(n.range.innen[0])}\u2013${Kt(n.range.innen[1])} mm`:" \xB7 kein Innengreifen"),t=Qt.id+Object.values(Ps).map(n=>n.ready).join();wt("#kfg-vorschlag").dataset.sig!==t&&(wt("#kfg-vorschlag").dataset.sig=t,wt("#kfg-vorschlag").innerHTML=Object.values(Ps).map(n=>`<button type="button" class="kfg__card${n===Qt?" is-active":""}" data-greifer="${n.id}" aria-pressed="${n===Qt}">
      <span class="kfg__rank">${n===Qt?"Im Test":"Zum Testen anklicken"}</span>
      <strong>${n.code}</strong> <span class="kfg__fam">${n.name}</span>
      <span class="kfg__why">Greifweite ${i(n)}</span>
      <span class="kfg__note">${n.note}</span>
    </button>`).join(""),wt("#kfg-vorschlag").querySelectorAll("[data-greifer]").forEach(n=>n.addEventListener("click",()=>n.dataset.greifer!==Qt.id&&j4(n.dataset.greifer))));let e=["Guten Tag,","","\xFCber den Greifer-Konfigurator m\xF6chte ich folgendes Teil anfragen:",`Teil: ${Ls}`,`Abmessungen: ${Kt(ui.s.x)} \xD7 ${Kt(ui.s.y)} \xD7 ${Kt(ui.s.z)} mm (L \xD7 H \xD7 Greifbreite)`,`Werkstoff: ${wt("#kfg-material").selectedOptions[0].textContent}`,`Gewicht (gesch\xE4tzt): ${Kt(ui.mass,2)} kg`,"","(Falls vorhanden, bitte die STEP-Datei an diese E-Mail anh\xE4ngen.)"].join(`
`);wt("#kfg-anfrage").href="mailto:info@gmg-system.com?subject="+encodeURIComponent("Greiferanfrage \xFCber den Konfigurator")+"&body="+encodeURIComponent(e)}var F5=new Dt,tu=i=>xr.intersectsGeometry(i.geometry,F5.copy(i.matrixWorld)),W4=()=>Qt.contact.some(tu),B5=()=>Qt.meshes.some(tu);function Rn(){if(!wn)return;let i=new R;br.getSize(i);let t=Wn==="innen",e=Qt.reach,n=wt("#kfg-hoehe").value/100,s=i.y+e*.25,r=Math.max(i.y*.04,i.y-e*.9);Qt.root.position.y=s+(r-s)*n;let a=i.x/2+e,o=i.z/2+e;Qt.root.position.x=wt("#kfg-x").value/100*a,Qt.root.position.z=wt("#kfg-z").value/100*o,Qt.root.updateMatrixWorld(!0);let c=wt("#kfg-zu").value/100,l=t?1:0,u=t?1-c:c;Qt.set(l);let f,h=u;if(B5())f="kollision",h=l;else if(Qt.set(u),W4()){let p=l,y=u;for(let _=0;_<14;_++){let M=(p+y)/2;Qt.set(M),W4()?y=M:p=M}h=p,f="gegriffen"}else f=c>=.99?"leer":"offen";Qt.set(h);let d=i.y-Qt.root.position.y;Qt.paint(f);let g=t?`an den Innenw\xE4nden (Innenma\xDF ${Kt(ui.grip)} mm)`:`am Teil (Greifbreite ${Kt(ui.grip)} mm)`,x={kollision:["bad",t?"Kollision: Der geschlossene Greifer passt so nicht in den Hohlraum. H\xF6her fahren.":"Kollision: Der Greifer st\xF6\xDFt beim Absenken auf das Teil. Weiter \xF6ffnen oder h\xF6her fahren."],gegriffen:d>=Math.min(e*.35,i.y*.5)?["ok",`${t?"Innen gegriffen":"Gegriffen"}: ${Qt.word} ${g} an.`]:["warn","Gegriffen, aber nur an der Kante. F\xFCr sicheren Halt den Greifer tiefer fahren."],leer:["warn",d<=0?"Der Greifer ist \xFCber dem Teil und greift ins Leere. Mit \u201EH\xF6he\u201C absenken.":t?"Greifer ganz ge\xF6ffnet, ohne die Innenw\xE4nde zu ber\xFChren.":"Greifer geschlossen, ohne das Teil zu ber\xFChren."],offen:["info",t?"Greifer in den Hohlraum absenken und mit \u201EGreifer \xF6ffnen\u201C spreizen.":"Mit \u201EGreifer schlie\xDFen\u201C zufahren und pr\xFCfen, wie das Teil gegriffen wird."]}[f],m=wt("#kfg-status");m.className="kfg__status is-"+x[0],m.textContent=x[1]}function Is(i){Wn=i,Mn.querySelectorAll("[data-griff]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.griff===i?"true":"false")),wt("#kfg-zu-label").textContent=i==="innen"?"Greifer \xF6ffnen (innen spreizen)":"Greifer schlie\xDFen",wt("#kfg-zu").value=0,wt("#kfg-griff-innen").disabled=!An||!Qt.range.innen,wn&&(Q4(),Pl(),Ll(),Rn())}var Cs=wt(".kfg__progress");function li(i,t){Cs.hidden=!1;let e=Math.max(0,Math.min(100,i));Cs.querySelector(".kfg__ring-bar").style.strokeDashoffset=String(100-e),Cs.querySelector(".kfg__ring-pct").textContent=Math.round(e)+" %",t&&(Cs.querySelector(".kfg__ring-label").textContent=t)}var z5=()=>new Promise(i=>requestAnimationFrame(()=>setTimeout(i,0)));function k5(i,t){return new Promise((e,n)=>{let s=new FileReader;s.onprogress=r=>r.lengthComputable&&t(r.loaded/r.total),s.onload=()=>e(s.result),s.onerror=()=>n(new Error("Datei konnte nicht gelesen werden.")),s.readAsArrayBuffer(i)})}function H5(i){return Qc(i.map(t=>{let e=new ve;return e.setAttribute("position",new ce(t.attributes.position.array,3)),t.index&&e.setIndex(Array.from(t.index.array)),e.index?e.toNonIndexed():e}))}function V5(i,t){return new Promise((e,n)=>{let s=new Worker(vr+"assets/vendor/occt/gmg-step-worker.js"),r=2500+i.byteLength/1048576*900,a=performance.now(),o=setInterval(()=>t(1-Math.exp(-(performance.now()-a)/r)),120),c=()=>{clearInterval(o),s.terminate()};s.onerror=()=>{c(),n(new Error("STEP-Leser konnte nicht gestartet werden."))},s.onmessage=l=>{c();let u=l.data;if(!u||!u.success||!u.meshes.length){n(new Error("Die STEP-Datei enth\xE4lt keine lesbaren K\xF6rper."));return}t(1),e(H5(u.meshes))},s.postMessage({buffer:new Uint8Array(i),params:{linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.002,angularDeflection:.4}})})}function G5(i,t){return new Promise((e,n)=>{let s=new Worker(vr+"assets/vendor/gmg-stl-worker.js");s.onerror=()=>{s.terminate(),n(new Error("STL-Leser konnte nicht gestartet werden."))},s.onmessage=r=>{if(r.data.progress!=null){t(r.data.progress);return}if(s.terminate(),r.data.error){n(new Error(r.data.error));return}let a=new ve;a.setAttribute("position",new _e(r.data.positions,3)),e(a)},s.postMessage(i,[i])})}async function eu(i){let t=i.name.split(".").pop().toLowerCase(),e=wt("#kfg-datei");if(!["step","stp","stl"].includes(t)){e.textContent="Bitte eine STEP- (.step, .stp) oder STL-Datei w\xE4hlen.";return}if(i.size>S5){e.textContent=`Die Datei ist ${Kt(i.size/1048576,1)} MB gro\xDF \u2013 erlaubt sind bis 100 MB.`;return}e.textContent=`${i.name} wird gelesen \u2026`+(i.size>E5?" Gro\xDFe Datei, das kann bis zu einer Minute dauern.":""),Mn.classList.add("is-loading"),li(0,"Datei wird gelesen");try{let n=await k5(i,s=>li(s*25));vn=t==="stl"?"stl":"step",li(25,"Geometrie wird berechnet"),Ye=vn==="stl"?await G5(n,s=>li(25+s*65)):await V5(n,s=>li(25+s*65)),Ye.index&&(Ye=Ye.toNonIndexed()),Ye.attributes.normal&&Ye.deleteAttribute("normal"),Ye.computeBoundingBox(),li(92,"Darstellung wird aufgebaut"),await z5(),e.textContent=`${i.name} (${Kt(i.size/1048576,1)} MB) \u2013 wird nur in Ihrem Browser verarbeitet.`,Ls=i.name,_r={geo:Ye,kind:vn,label:Ls},ua("datei"),pi(!0),li(100,"Fertig"),await new Promise(s=>setTimeout(s,450))}catch(n){e.textContent="Die Datei konnte nicht gelesen werden: "+n.message}finally{Mn.classList.remove("is-loading"),Cs.hidden=!0}}var ca={zylinder:{name:"Zylinder",fields:[["d","Durchmesser",80],["l","L\xE4nge",260]],geo:i=>new To(i.d/2,i.d/2,i.l,96).rotateZ(Math.PI/2),label:i=>`Zylinder \xD8 ${Kt(i.d)} \xD7 ${Kt(i.l)} mm`},quader:{name:"Quader",fields:[["l","L\xE4nge",200],["b","Breite",90],["h","H\xF6he",120]],geo:i=>new $e(i.l,i.h,i.b),label:i=>`Quader ${Kt(i.l)} \xD7 ${Kt(i.b)} \xD7 ${Kt(i.h)} mm`},rohr:{name:"Rohr / Ring",fields:[["d","Au\xDFen-\xD8",100],["i","Innen-\xD8",60],["l","L\xE4nge",50]],geo:i=>{let t=new Qs;t.absarc(0,0,i.d/2,0,Math.PI*2,!1);let e=new us;return e.absarc(0,0,Math.min(i.i,i.d-1)/2,0,Math.PI*2,!0),t.holes.push(e),new wo(t,{depth:i.l,curveSegments:96,bevelEnabled:!1}).rotateX(Math.PI/2)},label:i=>`Rohr \xD8 ${Kt(i.d)} / ${Kt(i.i)} \xD7 ${Kt(i.l)} mm`},kasten:{name:"Kasten offen",fields:[["l","L\xE4nge",300],["b","Breite",200],["h","H\xF6he",150],["t","Wandst\xE4rke",10]],geo:i=>{let t=Math.min(i.t,i.l/2-1,i.b/2-1,i.h-1),e=i.h-t,n=(s,r,a,o)=>s.translate(r,a,o);return Qc([n(new $e(i.l,t,i.b),0,t/2,0),n(new $e(i.l,e,t),0,t+e/2,i.b/2-t/2),n(new $e(i.l,e,t),0,t+e/2,-i.b/2+t/2),n(new $e(t,e,i.b-2*t),i.l/2-t/2,t+e/2,0),n(new $e(t,e,i.b-2*t),-i.l/2+t/2,t+e/2,0)])},label:i=>`Kasten offen ${Kt(i.l)} \xD7 ${Kt(i.b)} \xD7 ${Kt(i.h)} mm, Wand ${Kt(i.t)} mm`}},di="zylinder";function W5(){let i=ca[di];wt("#kfg-form-felder").innerHTML=i.fields.map(([t,e,n])=>`
    <div class="field"><label for="kfg-f-${t}">${e} (mm)</label>
    <input id="kfg-f-${t}" data-k="${t}" type="number" min="1" max="10000" step="1" value="${n}" inputmode="decimal"></div>`).join(""),wt("#kfg-form-felder").querySelectorAll("input").forEach(t=>{t.addEventListener("input",()=>Al(!1,!1)),t.addEventListener("change",()=>Al(!1,!0))})}function X5(i){let t=[];if(di==="rohr"&&i.i>i.d-2&&(i.i=Math.max(1,i.d-2),t.push(`Innen-\xD8 muss kleiner als Au\xDFen-\xD8 sein \u2013 auf ${Kt(i.i)} mm begrenzt.`)),di==="kasten"){let e=Math.max(1,Math.min((i.l-2)/2,(i.b-2)/2,i.h-1));i.t>e&&(i.t=Math.floor(e),t.push(`Wandst\xE4rke passt nicht in L\xE4nge, Breite und H\xF6he \u2013 auf ${Kt(i.t)} mm begrenzt.`))}return t}function q5(i){let t=[...wt("#kfg-form-felder").querySelectorAll("input")],e={};for(let s of t)e[s.dataset.k]=Math.min(1e4,Math.max(1,Number(s.value)||1));let n=X5(e);if(di==="rohr"&&(wt("#kfg-f-i").max=Math.max(1,e.d-2)),di==="kasten"&&(wt("#kfg-f-t").max=e.t),i)for(let s of t)Number(s.value)!==e[s.dataset.k]&&(s.value=e[s.dataset.k]);return wt("#kfg-form-hinweis").textContent=n.join(" "),e}function Al(i,t=!0){let e=q5(t);vn="form";let n=ca[di].geo(e);Ye=n.index?n.toNonIndexed():n,Ye.computeBoundingBox(),Ls="Grundform: "+ca[di].label(e),pi(i)}var _r=null,Ls="";function ua(i){Mn.querySelectorAll("[data-src]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.src===i?"true":"false")),wt("#kfg-quelle-datei").hidden=i!=="datei",wt("#kfg-quelle-form").hidden=!ca[i]}var nu={felge:{file:"felge.json",label:"Beispielteil: Felge \xD8 400 \xD7 204 mm (STEP)",material:"2700"}};async function Y5(i){let t=nu[i];ua(i),Mn.classList.add("is-loading"),li(10,"Beispielteil wird geladen");try{if(!t.geo){let e=await(await fetch(vr+"data/3d/beispiele/"+t.file)).json(),n=new ve;n.setAttribute("position",new ce(e.v,3)),n.setIndex(e.i),t.geo=n.toNonIndexed(),t.geo.computeBoundingBox()}Ye=t.geo,vn="muster",Ls=t.label,wt("#kfg-material").value=t.material,yn={x:0,y:0,z:0},pi(!1),Is(An&&Qt.range.innen?"innen":"aussen")}finally{Mn.classList.remove("is-loading"),Cs.hidden=!0}}function Z5(i){if(nu[i]){Y5(i);return}if(i!=="datei"){Il(i);return}ua("datei"),_r&&(Ye=_r.geo,vn=_r.kind,Ls=_r.label,pi(!0))}function Il(i){ua(i),di=i,Wn=i==="kasten"?"innen":"aussen",W5(),Al(!0),Is(An?Wn:"aussen")}var El=wt("#kfg-file");El.addEventListener("change",()=>El.files[0]&&eu(El.files[0]));var yr=wt(".kfg__drop");["dragenter","dragover"].forEach(i=>yr.addEventListener(i,t=>{t.preventDefault(),yr.classList.add("is-over")}));["dragleave","drop"].forEach(i=>yr.addEventListener(i,t=>{t.preventDefault(),yr.classList.remove("is-over")}));yr.addEventListener("drop",i=>i.dataTransfer.files[0]&&eu(i.dataTransfer.files[0]));Mn.querySelectorAll("[data-src]").forEach(i=>i.addEventListener("click",()=>Z5(i.dataset.src)));wt("#kfg-zentrieren").addEventListener("click",()=>{wt("#kfg-x").value=0,wt("#kfg-z").value=0,Rn()});wt("#kfg-einheit").addEventListener("change",()=>pi(!1));wt("#kfg-material").addEventListener("change",()=>{Pl(),Ll()});wt("#kfg-hoehe").addEventListener("input",Rn);wt("#kfg-zu").addEventListener("input",Rn);wt("#kfg-x").addEventListener("input",Rn);wt("#kfg-z").addEventListener("input",Rn);Mn.querySelectorAll("[data-griff]").forEach(i=>i.addEventListener("click",()=>Is(i.dataset.griff)));wt("#kfg-dreh-y").addEventListener("click",()=>{yn.y=(yn.y+1)%4,pi(!1)});wt("#kfg-dreh-x").addEventListener("click",()=>{yn.x=(yn.x+1)%4,pi(!1)});wt("#kfg-dreh-z").addEventListener("click",()=>{yn.z=(yn.z+1)%4,pi(!1)});function iu(){let i=Tl.clientWidth,t=Tl.clientHeight;fi.setSize(i,t,!1),hi.aspect=i/t,hi.updateProjectionMatrix()}window.addEventListener("resize",iu);iu();aa(0);Il("zylinder");Mn.classList.add("is-ready");(function i(){requestAnimationFrame(i),oa.update(),fi.render(Xn,hi)})();window.__kfg={sample:Il,update:Rn,setMode:Is,selectGripper:j4,gripper:()=>Qt.id,move:(i,t)=>{wt("#kfg-x").value=i,wt("#kfg-z").value=t,Rn()},set:(i,t)=>{wt("#kfg-hoehe").value=i,wt("#kfg-zu").value=t,Rn()},status:()=>wt("#kfg-status").textContent};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
